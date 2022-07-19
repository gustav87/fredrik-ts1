<template>
  <div>
    <Timer ref="timer" @started="startButtonClicked"/>
    <p ref="info">{{msg}} <span @click="reset" v-if="completed">Play again?</span></p>
    <div id="container">
      <div id="pImgContainer" ref="pImgContainer">
        <img id="pImg" ref="pImg" src="@/assets/pcursor.png">
      </div>
      <img id="clickme" :class="{setCursor:started}" ref="clickme" src="@/assets/fredrik.jpg" @click="started && clicker($event)">
    </div>
  </div>
</template>

<script lang="ts">
import Timer from '@/components/Timer.vue';

export default {
  name: "Fredrik",
  components: {
    Timer
  },
  data(): {feedback: string, completed: boolean, msg: string, started: boolean} {
    return {
      feedback: '',
      completed: false,
      msg: "Put the penis on Fredriks forehead",
      started: false
    }
  },
  methods: {
    clicker(e: PointerEvent): void {
      let x, y = 0;
      const target = e.target as HTMLElement;
      if (this.completed) {
        return
      }
      const rect = target.getBoundingClientRect();
      x = e.clientX - rect.left; //x position within the element.
      y = e.clientY - rect.top;  //y position within the element.
      console.log("Left: " + x + " ; Top: " + y);
      this.checkClick(x, y)
    },
    checkClick(x: number, y: number): void {
      if (x < 297 && x > 225 && y > 52 && y < 91) {
        this.msg = "Well done!"
        this.$refs.pImg.style = `top: ${y}px; left: ${x}px`
        this.$refs.pImgContainer.style = "z-index: 1"
        this.completed = true
        this.$refs.timer.stop();
        this.$refs.info.style = "color: green"
      } else {
        this.msg = "No, not there..."
        this.$refs.info.style = "color: red"
      }
    },
    reset(): void {
      this.$refs.pImgContainer.style = "z-index: -1"
      this.completed = false
      this.msg = "Put the penis on Fredriks forehead"
      this.$refs.info.style = "color: black"
      this.$refs.timer.reset();
      this.started = false;
    },
    startButtonClicked(): void {
      this.started = true;
    },
    hejsan(): void {
      console.log("tjenare");
    }
  },
  mounted(): void {
    this.hejsan()
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  background: darkgray;
}
p {
  font-size: 2em;
}
#container {
  display: grid;
  justify-content: center;
}
#pImgContainer {
  position: relative;
  z-index: -1;
}
#pImg {
  position: absolute;
  left: 0;
  top: 0;
  width: 65px;
}
#clickme, #pImgContainer {
  width: 474px;
  height: 584px;
  grid-column: 1;
  grid-row: 1;
}
.setCursor {
  cursor: url('~@/assets/pcursor.png'), auto;
}
span {
  cursor: pointer;
  color: blue;
}
span:hover {
  color: black;
}
</style>
