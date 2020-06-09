<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" @click="open" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  open() {
    this.$Pswp.open({
      items: [
        {
          html: "<div style='color: #fff;'>hello vue-pswipe</div>"
        }
      ]
    });
    // get error tip when using local package
    console.log(this.$AppName, this.$Version);
    this.$JsCookie.set("year", "2020");
    console.log(this.$JsCookie.get("year"));
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
