import ToastComponent from './ToastComponent.vue'

const Toast = {
  install(Vue, options) {
    const isServer = Vue.prototype.$isServer
    if(isServer) return;
    const ToastConstructor = Vue.extend(ToastComponent)
    const toast = new ToastConstructor()
    toast.$mount(document.createElement('div'))
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast = ({ title, content, okText, cancelText, okCb, noCb, double = false, baseColor }) => {
      
      // 可以再调用对话框时自定义参数（优先级更高），也可以在插件注册时全局定义参数。
      if(title) {
        toast.title = title;
      } else if (options && options.title) {
        toast.title = options.title;
      }

      if(okText) {
        toast.sureText = okText;
      } else if (options && options.okText) {
        toast.sureText = options.okText;
      }

      if(cancelText) {
        toast.cancelText = cancelText;
      } else if (options && options.cancelText) {
        toast.cancelText = options.cancelText;
      }

      if(baseColor) {
        toast.baseColor = baseColor;
      } else if (options && options.baseColor) {
        toast.baseColor = options.baseColor;
      }

      if(typeof double !== 'undefined') {
        toast.double = double;
      } else if (options && typeof options.double !== 'undefined') {
        toast.double = options.double
      }

      if(content) toast.content=content;
      if(okCb) toast.callback=okCb;
      if(noCb) toast.noCb=noCb;
      toast.show = true;
    }
  }
}

export default Toast
