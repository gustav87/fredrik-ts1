<template>
  <div>
    <Timer ref="timer" @started="startButtonClicked" :stopClock="stopClock" :resetClock="resetClock"/>
    <p ref="info" :style="{color: infoColor}">
      {{msg}}
      <span @click="reset" v-if="completed">Play again?</span>
    </p>
    <div id="container">
      <div id="pImgContainer" ref="pImgContainer" :style="{'z-index': zIndex}">
        <img id="pImg" ref="pImg" :style="{top: topPosition, left: leftPosition}" src="@/assets/pcursor.png">
      </div>
      <img id="clickme" :class="{setCursor:started}" ref="clickme" src="@/assets/fredrik.jpg" @click="started && clicker($event)">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Timer from '@/components/Timer.vue';

@Component({
  components: {
    Timer,
  },
})
export default class Fredrik extends Vue {
  public feedback = "";
  public completed = false;
  public msg = "Put the penis on Fredriks forehead";
  public started = false;
  public zIndex = -1;
  public infoColor = "black"
  public topPosition = "0px";
  public leftPosition = "0px";
  public stopClock = false;
  public resetClock = false;

  public clicker(e: PointerEvent): void {
    let x, y = 0;
    const target = e.target as HTMLElement;
    if (this.completed) return;

    const rect = target.getBoundingClientRect();
    x = e.clientX - rect.left; //x position within the element.
    y = e.clientY - rect.top;  //y position within the element.
    console.log("Left: " + x + " ; Top: " + y);
    this.checkClick(x, y)
  }
  public checkClick(x: number, y: number): void {
    if (x < 297 && x > 225 && y > 52 && y < 91) {
      this.msg = "Well done!"
      this.topPosition = `${y}px`;
      this.leftPosition = `${x}px`;
      this.zIndex = 1;
      this.completed = true;
      this.stopClock = true;
      this.infoColor = "green";
    } else {
      this.msg = "No, not there...";
      this.infoColor = "red";
    }
  }

  public reset(): void {
    this.zIndex = -1;
    this.completed = false
    this.msg = "Put the penis on Fredriks forehead"
    this.infoColor = "black";
    this.resetClock = true;
    this.started = false;
  }

  public startButtonClicked(): void {
    this.started = true;
    console.log("Start button clicked");
  }
  public hejsan(): void {
    console.log("tjenare");
  }
  mounted(): void {
    this.hejsan();
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
