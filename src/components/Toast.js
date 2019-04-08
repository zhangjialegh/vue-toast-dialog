import ToastComponent from './ToastComponent.vue'

const Toast = {
  install(Vue, options) {
    const ToastConstructor = Vue.extend(ToastComponent)
    const toast = new ToastConstructor()
    toast.$mount(document.createElement('div'))
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast = ({ title, content, okText, cancelText, okCb, noCb, double = false, baseColor }) => {
      if(title) toast.title=title;
      if(content) toast.content=content;
      if(okText) toast.sureText=okText;
      if(cancelText) toast.cancelText=cancelText;
      if(cancelText) toast.cancelText=cancelText;
      if(okCb) toast.callback=okCb;
      if(noCb) toast.noCb=noCb;
      if(baseColor) toast.baseColor = baseColor;
      toast.show = true;
      toast.double = double;
    }
  }
}

export default Toast
