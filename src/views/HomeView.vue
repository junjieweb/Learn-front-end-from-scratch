<template>
  <div class="home">
    <h1>This is an Home page</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="欢迎来到您的 Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
});
</script>
