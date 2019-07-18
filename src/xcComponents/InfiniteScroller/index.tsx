import Taro, { useState, useEffect, useCallback } from '@tarojs/taro'
import { View, ScrollView, Block } from '@tarojs/components'

type FetchWrap = (fetch: (...arg: any[]) => Promise<any[] | undefined | null>) => void
export type Props = {
  height: string
  onFetch: (fetchWrap: FetchWrap) => any

  children?: any
  renderInitLoading?: any
  renderInitLoadingError?: any
  renderNothing?: any
  renderMoreLoading?: any
  renderMoreLoadingError?: any
  renderEnd?: any
}

const InfiniteScroller = (props: Props) => {
  const {
    height,
    onFetch,
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

  const fetchData = useCallback(async () => {
    if (initStatus === 0 || moreLoadingStatus === 0 || end) return
    console.log('end', end, 'init', initStatus, 'loading', moreLoadingStatus)

    if (initStatus !== 1) {
      setInitStatus(0)
    } else {
      setMoreLoadingStatus(0)
    }
    async function fetchWrap(fetch) {
      // TODO:
      // ! 这里有问题,如何拿到最新的initStatus等值
      try {
        const data = await fetch()
        if (initStatus !== 1) {
          setInitStatus(1)
          setNothing(!data || data.length === 0)
        } else {
          setMoreLoadingStatus(1)
          setEnd(!data || data.length === 0)
        }
      } catch (e) {
        if (initStatus !== 1) {
          setInitStatus(-1)
        } else {
          setMoreLoadingStatus(-1)
        }
      }
    }
    onFetch(fetchWrap)
  }, [onFetch, initStatus, moreLoadingStatus, end])

  const handleScrollToLower = useCallback(() => {
    fetchData()
  }, [fetchData])

  // init
  useEffect(() => {
    // TODO:
    // ! 这里执行了两次，需要检查原因
    fetchData()
  }, [])

  return (
    <ScrollView onScrollToLower={handleScrollToLower} style={{ height }} scrollY>
      {children}

      {initStatus === 0 && <View>{renderInitLoading}</View>}
      {initStatus === -1 && <View onClick={fetchData}>{renderInitLoadingError}</View>}
      {initStatus === 1 &&
        (nothing ? (
          <View> {renderNothing}</View>
        ) : end ? (
          <Block>{renderEnd}</Block>
        ) : (
          <Block>
            {moreLoadingStatus === -1 ? (
              <View onClick={fetchData}>{renderMoreLoadingError}</View>
            ) : (
              <View>{renderMoreLoading}</View>
            )}
          </Block>
        ))}
    </ScrollView>
  )
}

export default InfiniteScroller
