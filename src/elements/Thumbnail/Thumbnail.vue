<template>
  <component 
    :is="type" 
    class="c-thumbnail" 
    :class="thumbnailClasses" 
    :src="imageUrl"
    :alt="imageAlt">
  </component>
</template>

<script>
/**
 * Thumb are used as the titles of each major section of a page in the
 * interface. For example, templates generally use headings as their title.
 * Heading element provides an option to change the level of the heading.
 */
export default {
  name: "Thumbnail",
  status: "review",
  release: "1.0.0",
  props: {
    /**
     * The html element name used for the avatar
     */
    type: {
      type: String,
      default: "img",
    },
    /**
     * The button size used for the button.
     * `small, default, large`
     */
    size: {
      type: String,
      default: "default",
    },
    /**
     * The src attribute specifies the URL (web address) of the image
     */
    imageUrl: {
      type: String,
      default: null,
      required: true,
    },
    /**
     * The value of the alt attribute should describe the image
     */
    imageAlt: {
      type: String,
      default: null,
    },
  },
  computed: {
    thumbnailClasses() {
      return [this.size ? `c-thumbnail--${this.size}` : ""]
    },
  },
}
</script>

<style src="./Thumbnail.style.scss" lang="scss" scoped>
</style>

<docs>
  ```jsx
  <div>
    <heading level="h4">Size Variations</heading>
    <br>
    <thumbnail size="tiny" imageUrl="https://placehold.it/300/fafafa/333333?text=Thumb" imageAlt="ini thumbnail"></thumbnail>
    <thumbnail size="small" imageUrl="https://placehold.it/300/fafafa/333333?text=Thumb" imageAlt="ini thumbnail"></thumbnail>
    <thumbnail imageUrl="https://placehold.it/300/fafafa/333333?text=Thumb" imageAlt="ini thumbnail"></thumbnail>
    <thumbnail size="huge" imageUrl="https://placehold.it/300/fafafa/333333?text=Thumb" imageAlt="ini thumbnail"></thumbnail>
  </div>
  ```
</docs>
