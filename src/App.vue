<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <HeaderComp />
      </el-header>
      <el-main>
        <MainComp />
      </el-main>
      <el-footer>
        <FooterComp />
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  components: {
    HeaderComp,
    MainComp,
    FooterComp
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
