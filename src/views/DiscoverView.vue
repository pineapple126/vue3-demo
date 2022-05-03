<template>
  <div>Home</div>
</template>

<script lang="ts">
export default {
  computed: {
    username() {
      // 我们很快就会看到 `params` 是什么
      return this.$route.params.username;
    }
  },
  methods: {
    goToDashboard() {
      this.$router.push('/about');
    }
  }
};
</script>

<style lang="scss" scoped></style>
