# XCandy UI Taro

[![Npm](https://img.shields.io/npm/v/@xcandy/ui-taro.svg?style=flat-square)](https://www.npmjs.com/package/@xcandy/ui-taro)
[![Ci](https://travis-ci.org/xxxcandy/xcandy-ui-taro.svg?branch=master)](https://travis-ci.org/xxxcandy/xcandy-ui-taro)

> A UI framework for taro.js

## Design

TaroJs 官方提供了 TaroUI，已经能满足部分开发者的需求。但是 TaroUI 的部分组件，过度的贴合了京东自己的样式，很多需要自定义的地方都变得麻烦，用 CSS 覆盖的方案是非常不友好的。XCandyTaroUI 的目的是尽可能的排除掉样式对 UI 框架本身的影响，基于原子组件的设计思路，更注重于实现交互、和业务中的特性，给开发者更大的自由度。

## Support

### 开发环境

- Taro >= v1.3
- node >= v10

### 兼容平台

- 微信小程序
- 头条小程序
- 百度小程序
- 支付宝小程序
- QQ 轻应用

## Example

[https://xxxcandy.github.io/xcandy-ui-taro](https://xxxcandy.github.io/xcandy-ui-taro)

## Who use it

- [口袋故事(工程师爸爸)](https://koudaistory.com)

<p align="center">
  <a href="https://koudaistory.com"><img src="https://koudaistory.cn/img/idaddySeo/seo/logo.png" alt="口袋故事" width="150"></a>
</p>

## Usage

### Install

```bash
npm install @xcandy/ui-taro
```

### Use in your Taro component

```javascript
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { XcCalendar } from '@xcandy/ui-taro'

class Demo extends Component {
  render() {
    return (
      <View>
        <XcCalendar />
      </View>
    )
  }
}

export default Demo
```

> Dont forget add `esnextModules: ['@xcandy/ui-taro']` on config if you want to build h5.
>
> See: https://nervjs.github.io/taro/docs/config-detail.html#h5esnextmodules

## Development

### Build UI component

```bash
npm run ui:build
```

### Dev command

```bash
# h5
npm run dev:h5

# weapp
npm run dev:weapp
```

## License

MIT
