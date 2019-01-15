# X-Candy

[![Npm](https://img.shields.io/npm/v/xcandy.svg?style=flat-square)](https://www.npmjs.com/package/xcandy)
[![Ci](https://api.travis-ci.org/loveonelong/xcandy.svg?branch=master)](https://travis-ci.org/loveonelong/XCandy)

> A ui framework for taro.js

## View

[https://loveonelong.github.io/xcandy](https://loveonelong.github.io/xcandy)

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
