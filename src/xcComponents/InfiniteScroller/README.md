# XcInfiniteScroller

无限滚动组件

## Design

适用于需要无限上滑加载的场景，也可以作为页面仅需要一次加载使用。

## Feature

- 支持各种加载状态
  - 初次加载
  - 初次加载失败
  - 内容为空
  - 加载更多
  - 加载更多失败
  - 没有更多内容

## TODO

暂无计划

## Props

| 参数名                 | 说明                                                         | 必填 | 类型     | 默认值 |
| ---------------------- | ------------------------------------------------------------ | ---- | -------- | ------ |
| height                 | 展示                                                         | \*   | boolean  |        |
| onFetch                | 触发加载                                                     | \*   | Function |        |
| once                   | 仅调用一次初始化(页面仅需要加载一次)，不会显示加载更多、到底了等。 |      | boolean  | false  |
| disabled               | 禁用                                                         |      | boolean  | false  |
| children               |                                                              |      | boolean  |        |
| renderInitLoading      | 初次加载的 loading                                           |      | Function |        |
| renderInitLoadingError | 初次加载失败显示的内容，点击该区域会重新触发加载。           |      | any      |        |
| renderNothing          | 初次加载后发现内容为空                                       |      | any      |        |
| renderMoreLoading      | 上滑加载更多的 loading                                       |      | any      |        |
| renderMoreLoadingError | 上滑加载更多失败显示的内容，点击该区域会重新出发加载。       |      | any      |        |
| renderEnd              | 没有更多新内容时展示的内容                                   |      | any      |        |



## Example
