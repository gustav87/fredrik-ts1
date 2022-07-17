<template>
  <div>
    <p>Put the penis on Fredriks forehead</p>
    <div id="container">
      <div id="pImgContainer"><img id="pImg" src="@/assets/pcursor.png"></div>
      <img id="clickme" src="@/assets/fredrik.jpg">
      <p id="feedback">{{feedback}} <span @click="reset" v-if="feedback=='Well done!'">Play again?</span></p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Fredrik",
  components: {},
  data(): {feedback: string, completed: boolean} {
    return {
      feedback: '',
      completed: false
    }
  },
  methods: {
    init(): void {
      let x, y = 0;
      this.img.onclick = e => {
        if (this.completed) {
          return
        }
        const rect = e.target.getBoundingClientRect();
        x = e.clientX - rect.left; //x position within the element.
        y = e.clientY - rect.top;  //y position within the element.
        console.log("Left: " + x + " ; Top: " + y);
        this.checkClick(x, y)
      }
    },
    checkClick(x: number, y: number): void {
      if (x < 297 && x > 225 && y > 52 && y < 91) {
        this.img.style = "border: solid green 7px; cursor: default;"
        this.feedback = "Well done!"
        this.pImg.style = `top: ${y}px; left: ${x}px`
        this.pImgContainer.style = "z-index: 1"
        this.completed = true
      } else {
        this.img.style = "border: solid red 7px;"
        this.feedback = "No, not there..."
      }
    },
    reset(): void {
      console.log("hey");
      this.pImgContainer.style = "z-index: -1"
      this.img.style = "border: none"
      this.completed = false
      this.feedback = ''
    }
  },
  mounted(): void {
    this.img = document.getElementById('clickme')
    this.pImg = document.getElementById('pImg')
    this.pImgContainer = document.getElementById('pImgContainer')
    this.init();
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
#feedback {
  margin-top: 0;
  margin-bottom: 10px;
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
  width: 50px;
}
img {
  cursor: url('~@/assets/pcursor.png'), auto;
}
#clickme, #pImgContainer {
  width: 474px;
  height: 584px;
  grid-column: 1;
  grid-row: 1;
}
span {
  cursor: pointer;
  color: blue;
}
span:hover {
  color: black;
}
</style>
