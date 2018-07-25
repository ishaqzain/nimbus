<template>
  <component :is="type" class="c-label" :class="labelClasses">
      <slot/>
  </component>
</template>

<script>
/**
 * Badge are used as the titles of each major section of a page in the
 * interface. For example, templates generally use headings as their title.
 * Heading element provides an option to change the level of the heading.
 */
export default {
  name: "LabelStyle",
  status: "prototype",
  release: "1.0.0",
  props: {
    /**
     * The html element name used for the label
     */
    type: {
      type: String,
      default: "span",
    },
    /**
     * The label color used for the label.
     * `red, green, yellow, pink`
     */
    color: {
      type: String,
      default: "",
    },
  },
  computed: {
    labelClasses() {
      return [this.color ? `c-label--${this.color}` : ""]
    },
  },
}
</script>

<style src="./Label.style.scss" lang="scss" scoped>
</style>

<docs>
   ```jsx
  <div>
    <heading level="h4">Color Variations</heading>
    <br>
    <label-style>Label</label-style>
    <label-style color="red">Label</label-style>
    <label-style color="green">Label</label-style>
    <label-style color="yellow">Label</label-style>
    <label-style color="pink">Label</label-style>
  </div>
  ```
</docs>
