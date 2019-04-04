# XCandy UI Taro

[![Npm](https://img.shields.io/npm/v/@xcandy/ui-taro.svg?style=flat-square)](https://www.npmjs.com/package/@xcandy/ui-taro)
[![Ci](https://travis-ci.org/xxxcandy/xcandy-ui-taro.svg?branch=master)](https://travis-ci.org/xxxcandy/xcandy-ui-taro)

> A UI framework for taro.js

## View

[https://xxxcandy.github.io/xcandy-ui-taro](https://xxxcandy.github.io/xcandy-ui-taro)

## Usage

### Install

```bash
npm install @xcandy/ui-taro
```

### Use in your Taro component

``` javascript
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
