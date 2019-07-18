# XcDrawer

抽屉组件

## Design

用于制作抽屉效果的组件，仅实现动画及交互，抽屉区域的内容交由开发者自行实现。可用于制作PickerView等组件。

## Feature

- 带有滑入滑出动画
- 支持上、下、左、右划出
- 允许不使用遮罩

## TODO

暂无计划

## Props

| 参数名      | 说明                                   | 必填 | 类型                                   | 默认值   |
| ----------- | -------------------------------------- | ---- | -------------------------------------- | -------- |
| show        | 展示                                   |      | boolean                                | false    |
| placement   | 方向，从哪里划出                       |      | 'top' \| 'right' \| 'bottom' \| 'left' | 'bottom' |
| withoutMask | 不使用遮罩层                           |      | boolean                                | false    |
| onClickMask | 点击遮罩区域，withoutMask为false时可用 |      | Function                               |          |
| children    |                                        |      | any                                    |          |
