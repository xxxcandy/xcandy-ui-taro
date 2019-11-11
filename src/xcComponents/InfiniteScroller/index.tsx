import Taro, { useState, useEffect, useCallback } from '@tarojs/taro'
import { View, ScrollView, Block } from '@tarojs/components'

import './index.scss'

type FetchDelegate = (fetch: (...arg: any[]) => Promise<any[] | undefined | null>) => void

export interface Props {
  height: string
  onFetch: (fetchDelegate: FetchDelegate, page: number) => any
  threshold?: number
  disabled?: Boolean
  once?: Boolean
  children?: any
  renderInitLoading?: any
  renderInitLoadingError?: any
  renderNothing?: any
  renderMoreLoading?: any
  renderMoreLoadingError?: any
  renderEnd?: any
}

const InfiniteScroller: Taro.FC<Props> = (props: Props) => {
  const {
    height,
    onFetch,
    threshold,
    disabled,
    once,
    children,
    renderNothing,
    renderInitLoading,
    renderInitLoadingError,
    renderMoreLoading,
    renderMoreLoadingError,
    renderEnd
  } = props

  const [initStatus, setInitStatus] = useState<-1 | 0 | 1 | null>(null) // -1 加载失败，0加载中，1加载成功
  const [moreLoadingStatus, setMoreLoadingStatus] = useState<-1 | 0 | 1>(1) // -1 加载失败，0加载中，1加载成功
  const [nothing, setNothing] = useState<Boolean>(false)
  const [end, setEnd] = useState<Boolean>(false)
  const [page, setPage] = useState<number>(1)

  const fetchData = useCallback(() => {
    if (initStatus === 0 || moreLoadingStatus === 0 || end) return
    if (initStatus !== 1) {
      setInitStatus(0)
    } else {
      setMoreLoadingStatus(0)
    }
    async function fetchDelegate (fetch): Promise<any> {
      // TODO:
      // ! 这里有问题,如何拿到最新的initStatus等值
      try {
        const data = await fetch()
        setPage(page + 1)
        if (initStatus !== 1) {
          setInitStatus(1)
          setNothing(!data || data.length === 0)
        } else {
          setMoreLoadingStatus(1)
          setEnd(!data || data.length === 0)
        }
      } catch (e) {
        console.error(e)
        if (initStatus !== 1) {
          setInitStatus(-1)
        } else {
          setMoreLoadingStatus(-1)
        }
      }
    }
    onFetch(fetchDelegate, page)
  }, [onFetch, initStatus, moreLoadingStatus, end, page])

  const handleScrollToLower = useCallback(() => {
    if (once) return
    if (disabled) return

    fetchData()
  }, [disabled, fetchData, once])

  useEffect(() => {
    if (initStatus !== null || disabled) return
    fetchData()
  }, [initStatus, disabled, fetchData])

  return (
    <ScrollView
      className='xc-infinite-scroller'
      onScrollToLower={handleScrollToLower}
      style={{ height }}
      scrollY
      lowerThreshold={threshold}
    >
      {children}
      {!disabled && (
        <Block>
          {initStatus === 0 && <View>{renderInitLoading}</View>}
          {initStatus === -1 && <View onClick={fetchData}>{renderInitLoadingError}</View>}
          {initStatus === 1 &&
            (nothing ? (
              <View> {renderNothing}</View>
            ) : (
              !once &&
              (end ? (
                <Block>{renderEnd}</Block>
              ) : (
                <Block>
                  {/* 第一屏(第一屏page为1-2)不触发 update 时不展示loading，后续 loading 可以一直展示 */}
                  {page > 2 ? (
                    moreLoadingStatus === -1 ? (
                      <View onClick={fetchData}>{renderMoreLoadingError}</View>
                    ) : (
                      <View>{renderMoreLoading}</View>
                    )
                  ) : (
                    <Block>
                      {moreLoadingStatus === -1 && <View onClick={fetchData}>{renderMoreLoadingError}</View>}
                      {moreLoadingStatus === 0 && <View>{renderMoreLoading}</View>}
                    </Block>
                  )}
                </Block>
              ))
            ))}
        </Block>
      )}
    </ScrollView>
  )
}

InfiniteScroller.defaultProps = {
  disabled: false,
  threshold: 50
}

export default InfiniteScroller
