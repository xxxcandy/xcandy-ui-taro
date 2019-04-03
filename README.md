# X-Candy

[![Npm](https://img.shields.io/npm/v/@xcandy/ui-taro.svg?style=flat-square)](https://www.npmjs.com/package/@xcandy/ui-taro)
[![Ci](https://travis-ci.org/xxxcandy/xcandy-ui-taro.svg?branch=master)](https://travis-ci.org/xxxcandy/xcandy-ui-taro)

> A ui framework for taro.js

## View

[https://xxxcandy.github.io/xcandy-ui-taro](https://xxxcandy.github.io/xcandy-ui-taro)

## Usage

### Install

```bash
npm install xcandy
```

### Use in your componet

``` javascript
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { XcCandy } from 'xcandy'

class Demo extends Component {
  render() {
    return (
      <View>
        <XcCandy />
      </View>
    )
  }
}

export default Demo

```

> Please add `esnextModules: ['xcandy']` with config if you want build for h5.

## Development

### Build UI component

```bash
npm run ui:build
```

### Run Dev

```bash
# h5
npm run dev:h5

# weapp
npm run dev:weapp
```

## License

MIT
