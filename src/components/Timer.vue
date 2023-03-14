<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>{{formattedElapsedTime}}</p>
    <button @click="start" :disabled="!!gameStarted" :class="gameStarted ? 'disabled' : 'enabled'">Start game</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { tenMs } from '@/helpers/timerHelper'

@Component
export default class Timer extends Vue {
  @Prop() private msg!: string;
  @Prop({ default: false }) stopClock?: boolean;
  @Prop({ default: false }) resetClock?: boolean;

  elapsedTime = 0;
  timer = 0;
  gameStarted = false;

  public start(): void {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.elapsedTime += tenMs();
      }, 10)
    }
    this.gameStarted = true;
    this.$emit("started", 2)
  }

  @Watch("stopClock")
  public onStopClock() {
    this.stop();
  }

  @Watch("resetClock")
  public onResetClock() {
    this.reset();
  }

  public stop(): void {
    clearInterval(this.timer);
    this.timer = 0;
  }
  public reset(): void {
    this.elapsedTime = 0;
    this.gameStarted = false;
  }
  get formattedElapsedTime(): string {
    const date = new Date(0);
    date.setSeconds(this.elapsedTime / 10);
    const utc = date.toUTCString();
    return utc.substr(utc.indexOf(":") - 2, 8);
  }
}
</script>

<style scoped lang="scss">
button {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.enabled {
  background-color: #4CAF50;
  cursor: pointer;
}

.disabled {
  background: grey;
  cursor: default;
}
</style>
