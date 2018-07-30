<template>
  <div
    class="c-progress c-progress-green"
    :class="getClasses">
    <div
      class="c-progress__bar"
      :style="{width: `${score}%`, transition: '1s widht ease'}">
    </div>
  </div>
</template>

<script>
/**
 * Progress is used to show the progress of current operation,
 * and inform the user the current status.
 */
export default {
  name: "ProgressBar",
  status: "review",
  release: "1.0.0",
  data() {
    return {}
  },
  props: {
    /**
     * Background color of progress bar
     * `default, green, yellow, blue`
     */
    color: {
      type: String,
      default: "default",
    },
    /**
     * Percentage
     * `0-100`
     */
    percentage: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    getClasses() {
      return [this.color ? `c-progress--${this.color}` : ""]
    },
    score() {
      return this.percentage > 100 ? 100 : this.percentage
    },
  },
}
</script>

<style src="./ProgressBar.style.scss" lang="scss" scoped>
</style>

<docs>
  ```jsx
    <div>
      <heading level="h4">Color Variations</heading>
      <br>
      <progress-bar :percentage="50"></progress-bar><br>
      <progress-bar :percentage="50" color="green"></progress-bar><br>
      <progress-bar :percentage="50" color="yellow"></progress-bar><br>
      <progress-bar :percentage="50" color="blue"></progress-bar>
    </div>
  ```
</docs>
