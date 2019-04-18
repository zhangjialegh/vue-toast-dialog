<template>
  <transition-box :show="show">
    <div class="pop-box-wrapper" v-show="show">
      <div class="pop-box-title-wrap">
        <h5 class="pop-box-title">
          <span v-if="title">{{title}}</span>
        </h5>
        <i class="iconfont icon-close" @click="close"></i>
      </div>
      <p class="pop-box-content">{{content}}</p>
      <div class="pop-box-btn-wrap">
        <a class="pop-box-btn cancel" :style="{color: baseColor}" v-if="double" @click="cancel">{{cancelText}}</a>
        <a class="pop-box-btn sure" :style="{backgroundColor: baseColor}" @click="confirm">{{sureText}}</a>
      </div>
    </div>
  </transition-box>
</template>
<script>
import TransitionBox from "./TransitionBox.vue";
export default {
  name:'ToastComponent',
  components: { TransitionBox },
  data() {
    return {
      async: false,
      title: "title",
      show: false,
      content: "",
      sureText: "Ok",
      cancelText: "Cancel",
      double: false,
      callback: null,
      noCb: null,
      baseColor: '#d5a478'
    };
  },
  methods: {
    close() {
      this.show = false;
    },
    confirm() {
      this.show = false;
      this.callback && this.callback();
    },
    cancel() {
      this.show = false;
      this.noCb && this.noCb();
    }
  }
};
</script>
<style lang="scss" scoped>
@import url('//at.alicdn.com/t/font_773920_naqwbo3ccaj.css');
.pop-box-wrapper {
  background-color: #fff;
  border-radius: 6px;
  max-width: 400px;
  width: 90%;
  min-height: 100px;
  overflow: hidden;
  .pop-box-title-wrap {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e8eaec;
    .iconfont {
      width: 20px;
      height: 20px;
      color: #999999;
      font-size: 16px;
      cursor: pointer;
      text-align: right;
    }
  }
  .pop-box-title {
    width: 100%;
    font-size: 14px;
    margin: 0;
    color: #17233d;
  }
  .pop-box-content {
    font-size: 12px;
    padding: 0 15px;
    margin: 20px 0;
    line-height: 1.5;
    color: #515a6e;
    text-align: center;
  }
  .pop-box-btn-wrap {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-top: 1px solid #e8eaec;
    padding: 12px 18px;
    box-sizing: border-box;
    @media (max-width: 479px) {
      padding: 0;
    }
    .pop-box-btn {
      padding: 6px 15px;
      text-align: center;
      margin-left: 8px;
      font-size: 14px;
      border-radius: 4px;
      cursor: pointer;
      @media (max-width: 479px) {
        flex: 1;
        padding: 12px 0;
        margin: 0;
        border-radius: 0;
      }
      &:hover {
        opacity: 0.8;
      }
      &.sure {
        color: #fff;
      }
      &.cancel {
        background-color: #ffffff;
        border: 1px solid #e9e9e9;
        @media (max-width: 479px) {
          border: none;
        }
      }
    }
  }
}
</style>
