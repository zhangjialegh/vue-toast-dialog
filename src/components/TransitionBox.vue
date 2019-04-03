<template>
 <transition name="fade">
   <div class="transition-shadow" v-show="show">
    <transition name="bounce">
      <slot></slot>
    </transition>
  </div>
 </transition>
</template>

<script>
export default {
  name: "TransitionBox",
  props: {
    show: {
        type: Boolean,
        required: false
      },
  }
};
</script>

<style lang="scss" scoped>
.transition-shadow {
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 999;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .6);
}
.fade-enter-active {
  transition: opacity .3s;
}
.fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in .3s;
}
.bounce-leave-active {
  animation: bounce-out .3s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.5);
  }
}
</style>
