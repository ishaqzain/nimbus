<template>
  <component
    class="c-badge"
    :is="type"
    :class="getClasses">
    <div class="c-badge__content">
      <slot/>
    </div>
  </component>
</template>

<script>
/**
 * Badge are used as the titles of each major section of a page in the
 * interface. For example, templates generally use headings as their title.
 * Heading element provides an option to change the level of the heading.
 */
export default {
  name: "BadgeStyle",
  status: "review",
  release: "1.0.0",
  props: {
    /**
     * The html element name used for the badge
     */
    type: {
      type: String,
      default: "div",
    },
    /**
     * The badge size used for the badge.
     * `small, large`
     */
    size: {
      type: String,
      default: "",
    },
    /**
     * The badge color used for the badge.
     * `green, yellow, pink`
     */
    color: {
      type: String,
      default: "",
    },
  },
  computed: {
    getClasses() {
      return [this.color ? `c-badge--${this.color}` : "", this.size ? `c-badge--${this.size}` : ""]
    },
  },
}
</script>

<style src="./Badge.style.scss" lang="scss" scoped>
</style>

<docs>
  ```jsx
  <div>
    <heading level="h4">Size Variations</heading>
    <br>
    <badge-style size="small">9</badge-style>
    <badge-style>99</badge-style>
    <badge-style size="large">99</badge-style>
  </div>
  ```
   ```jsx
  <div>
    <heading level="h4">Color Variations</heading>
    <br>
    <badge-style>99</badge-style>
    <badge-style color="green">99</badge-style>
    <badge-style color="yellow">99</badge-style>
    <badge-style color="pink">99</badge-style>
  </div>
  ```
</docs>
