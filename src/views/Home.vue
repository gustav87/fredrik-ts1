<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="add">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  add(): void {
    console.log("hejsaa");
  }
}
</script>
