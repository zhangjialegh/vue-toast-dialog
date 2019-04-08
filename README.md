# Vue.js toast plugin
[![NPM](https://nodei.co/npm/vue-toast-dialog.png?compact=true)](https://nodei.co/npm/vue-toast-dialog/)

# Installation
```
npm i vue-toast-dialog

or

yarn add vue-toast-dialog
```
# Usage
```javascript
//main.js

import Vue from 'vue';

import Toast from 'vue-toast-dialog'

Vue.use(Toast)





//app.vue

...
  export default {
    methods: {
      showToast() {
        this.$toast({
          title: 'title',
          content: 'Hello world!',
          okText:'Ok',
          okCb: ()=>{},
          cancelText:'Cancel',
          noCb: ()=>{},
          double: false,
          baseColor: '#d5a478'
        })
      }
    }
  }
...

```
> If you need to use it on vue ssr

```javascript
const isServer = Vue.prototype.$isServer

if(!isServer) {
 const Toast = require('vue-toast-dialog').default
  Vue.use(Toast)
}
```

# options

## Values
- `title` - Title(String).
- `content` - Content of Toast(String).
- `double` - Display Cancel button or not(Boolean).default `false`.
- `okText` - Text of Sure button(String).
- `okCb` - Callback after clicking Sure button(Function).
- `cancelText` - Text of Sure button(String).
- `noCb` - Callback after clicking Cancel button(Function).
- `baseColor` - Base Color of Component(String).default `#d5a478`.
