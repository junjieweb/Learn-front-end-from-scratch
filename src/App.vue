<template>
  <header-nav></header-nav>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import headerNav from "@/components/HeaderNav";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: { headerNav },
});
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  height: 2000px;
}
.container {
  //margin-top: 2.5rem;
}
</style>
