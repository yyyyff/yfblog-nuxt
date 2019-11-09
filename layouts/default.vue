<template>
  <div class="app">
    <my-header></my-header>
    <div class="content">
      <nuxt />
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from "~/components/layouts/header";
import myFooter from "~/components/layouts/footer";
export default {
  components: {
    myHeader,
    myFooter
  }
};
</script>

<style lang="less">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #f6f7f8;
}

html::-webkit-scrollbar {
  width: 0px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

.content {
  width: 720px;
  margin: 0 auto;
  margin-top: 100px;
  min-height: calc(100vh - 196px);
}
</style>
