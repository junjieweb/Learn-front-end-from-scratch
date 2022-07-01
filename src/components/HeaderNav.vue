<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/html">HTML</router-link>
    <router-link to="/css">CSS</router-link>
    <router-link to="/javascript">JavaScript</router-link>
    <router-link to="/vue">Vue</router-link>
    <router-link to="/react">React</router-link>
    <router-link to="/typescript">TypeScript</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderNav",
});
</script>

<style scoped lang="less">
nav {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background: #2c3e50;
  color: #fff;
  font-size: 2rem;
}
</style>
