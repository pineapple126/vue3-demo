<template>
  <div class="top">
    <div class="wrap">
      <h1 class="wrap-logo">
        <el-link type="primary" :hidefocus="true"></el-link>
      </h1>
      <ul class="wrap-list">
        <li v-for="item in topBarLists" :key="item.value" class="wrap-list-item">
          <el-link class="wrap-list-link" :hidefocus="true">{{ item.title }}</el-link>
          <sup v-if="item.isLast" class="wrap-list-icon"></sup>
        </li>
      </ul>
      <div class="wrap-login">
        <a :hidefocus="true" class="wrap-login-link">登录</a>
      </div>
      <a class="wrap-creator">创作者中心</a>
      <div class="wrap-search">
        <div class="wrap-search-input">
          <!-- <el-input></el-input> -->
          <span class="parent">
            <input ref="input" type="text" class="parent-input" style="opacity: 1" @focus="changeLabelStatus" />
            <label class="parent-label" :style="!isLabelShow ? 'display: none;' : ''" @click="handleLabelClick">音乐/视频/电台/用户</label>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      topBarLists: [
        {
          value: 'discover',
          title: '发现音乐',
          path: '#',
          target: '_self',
          isFirst: true
        },
        {
          value: 'my',
          title: '我的音乐',
          path: '#/my',
          target: '_self'
        },
        {
          value: 'friend',
          title: '关注',
          path: '#/friend',
          target: '_self'
        },
        {
          value: 'store',
          title: '商城',
          path: 'store/product',
          target: '_blank'
        },
        {
          value: 'musician',
          title: '音乐人',
          path: 'st/musician',
          target: '_blank'
        },
        {
          value: 'download',
          title: '下载客户端',
          path: '#/download',
          target: '_self',
          isLast: true
        }
      ],
      isLabelShow: true
    };
  },
  methods: {
    changeLabelStatus() {
      this.isLabelShow = false;
    },
    handleLabelClick() {
      this.$refs.input.focus();
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  position: relative;
  // z-index: 1000;
  height: 70px;
  box-sizing: border-box;
  background: #242424;
  border-bottom: 1px solid #000;

  .wrap {
    margin: 0 auto;
    width: 1100px;

    &-logo {
      float: left;
      width: 176px;
      height: 69px;
      background: url(@/assets/topbar.png) no-repeat 0 9999px;
      background-position: 0 0;
    }

    &-list {
      float: left;

      &-item {
        position: relative;
        float: left;
        height: 70px;
        font-size: 14px;
      }

      &-link {
        padding: 0 19px;
        text-align: center;
        line-height: 70px;
        color: #ccc;
      }

      &-link:hover {
        background: #000;
        text-decoration: none;
        color: #fff;
      }

      &-icon {
        display: block;
        position: absolute;
        top: 21px;
        left: 100px;
        width: 28px;
        height: 19px;
        background: url(@/assets/topbar.png) no-repeat 0 9999px;
        background-position: -190px 0;
      }
    }

    &-login {
      position: relative;
      float: right;
      height: 45px;
      margin: 19px 0 0 20px;
      padding: 0 22px 0 0;
      background: url(@/assets/topbar.png) no-repeat 0 9999px;
      background-position: right -47px;
      background-image: none;

      &-link {
        display: block;
        width: 28px;
        margin-top: 7px;
        color: #787878;
      }
    }

    &-creator {
      float: right;
      width: 90px;
      height: 32px;
      margin: 19px 0 0 12px;
      padding-left: 16px;
      box-sizing: border-box;
      border: 1px solid #4f4f4f;
      border-radius: 20px;
      line-height: 33px;
      color: #ccc;
      background: url(@/assets/topbar.png) no-repeat 0 9999px;
    }

    &-search {
      position: relative;
      float: right;
      width: 158px;
      height: 32px;

      &-input {
        float: right;
        width: 158px;
        height: 32px;
        margin-top: 19px;
        background: url(@/assets/topbar.png) no-repeat 0 9999px;
        background-position: 0 -99px;
        background-color: #fff;
        border-radius: 32px;

        .parent {
          display: block;
          position: relative;
          margin: 8px 0 0 30px;

          &-input {
            margin: 0;
            padding: 0;
            width: 95%;
            background: transparent;
            border: 0;
            line-height: 16px;
          }

          &-input:focus {
            outline: none;
          }

          &-label {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 90%;
            color: #9b9b9b;
            cursor: text;
          }
        }
      }
    }
  }
}

.wrap-login:hover .wrap-login-link {
  color: #666;
}
</style>
