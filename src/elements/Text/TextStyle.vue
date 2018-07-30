<template>
  <component 
    class="c-text" 
    :is="wrapper" 
    :class="getClasses"
    :style="{'font-size': `${getSize}`}">
    <slot/>
  </component>
</template>

<script>
/**
 * Text style enhances text with additional visual meaning. For example, using
 * disabled text to de-emphasize it from its surrounding text. Don’t use text
 * styles only for aesthetic effect.
 */
export default {
  name: "TextStyle",
  status: "review",
  release: "1.0.0",
  props: {
    /**
     * The html element name used for the text
     * `p, div`
     */
    wrapper: {
      type: String,
      default: "p",
    },
    /**
     * Custom style font size
     * `ex: 16px, 1em`
     */
    fontSize: {
      type: String,
      default: null,
    },
    /**
     * Style variation to give additional meaning.
     * `default, disabled, strong, positive, negative`
     */
    variation: {
      type: String,
      default: "default",
    },
  },
  computed: {
    getClasses() {
      return [this.variation ? `c-text--${this.variation}` : ""]
    },
    getSize() {
      return this.fontSize
    },
  },
}
</script>

<style src="./Text.style.scss" lang="scss" scoped>
</style>

<docs>
  ```jsx
  <div>
    <heading level="h4">Text Variations</heading>
    <br>
    <text-style>Normal - Design isn’t just about the look and feel. Design is how it works.</text-style>
    <text-style variation="light">Light - Design isn’t just about the look and feel. Design is how it works.</text-style>
    <text-style variation="disabled">Disabled - Design isn’t just about the look and feel.</text-style>
    <text-style variation="strong">Strong - Design isn’t just about</text-style>
  </div>
  ```
  ```jsx
  <div>
    <heading level="h4">Font Sizes Custom</heading>
    <br>
    <text-style fontSize="32px">32px - Design isn’t just about the look and feel. Design is how it works.</text-style>
    <text-style fontSize="24px">24px - Design isn’t just about the look and feel. Design is how it works.</text-style>
    <text-style fontSize="18px">18px - Design isn’t just about the look and feel. Design is how it works.</text-style>
  </div>
  ```
</docs>
