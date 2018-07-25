<template>
  <component :is="type" class="c-avatar" :class="avatarClasses" :href="avatarUrl">
    <img :alt="imageAlt" class="c-avatar__image" :src="imageUrl">
  </component>
</template>

<script>
/**
 * Avatar are used as the titles of each major section of a page in the
 * interface. For example, templates generally use headings as their title.
 * Heading element provides an option to change the level of the heading.
 */
export default {
  name: "AvatarStyle",
  status: "prototype",
  release: "1.0.0",
  props: {
    /**
     * The html element name used for the avatar
     */
    type: {
      type: String,
      default: "a"
    },
    /**
     * The button size used for the button.
     * `small, default, large`
     */
    size: {
      type: String,
      default:"default",
      validator: (value, getValue) => {
        const validValue = ['default', 'small', 'large']

        if (getValue) {
          return validValue
        }
        return validValue.indexOf(value) !== -1
      },
    },
    /**
     * An absolute URL - points to another web site (like href="https://www.bukalapak.com/u/user").
     */
    avatarUrl: {
      type: String,
      default:"",
    },
    /**
     * The src attribute specifies the URL (web address) of the image
     */
    imageUrl: {
      type: String,
      default: "",
    },
    /**
     * The value of the alt attribute should describe the image
     */
    imageAlt: {
      type: String,
      default: "",
    },
  },
  computed: {
    avatarClasses() {
        return [this.size ? `c-avatar--${this.size}` : ''];
      },
  }
}
</script>

<style lang="scss" scoped>
  .c-avatar {
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    width: 36px;
    height: 36px;
    border: 1px solid #ddd;
    border-radius: 50%;
    &__image{
      display: block;
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      border-radius: 50%;
    }
    &--small{
      width: 30px;
      height: 30px;
    }
    &--large{
      width: 60px;
      height: 60px;
    }
  }
</style>

<docs>
  ```jsx
  <div>
    <heading level="h4">Size Variations</heading>
    <br>
    <avatar-style size="small" avatarUrl="#" imageUrl="https://placehold.it/300/fafafa/333333?text=Avatar" imageAlt="Ini Avatar" ></avatar-style>
    <avatar-style avatarUrl="#" imageUrl="https://placehold.it/300/fafafa/333333?text=Avatar" imageAlt="Ini Avatar" ></avatar-style>
    <avatar-style size="large" avatarUrl="#" imageUrl="https://placehold.it/300/fafafa/333333?text=Avatar" imageAlt="Ini Avatar" ></avatar-style>
  </div>
  ```
</docs>
