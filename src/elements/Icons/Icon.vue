<template>
  <component 
    :is="type"
    :style="{'color': `${iconColor}`}"
    :class="iconClasses" 
    @click="$emit('click')"
    @bind="$attrs">
  </component>
</template>

<script>
/**
 * Icon component provides a large set of glyphs to provide
 * context to various aspects of your application.
 * The icons utilize Pictograph library. For a list of all available icons, visit the official
 * [Pictograph Github](https://github.com/bukalapak/pictograph)
 * & [Pictograph Preview](https://bukalapak.github.io/pictograph/)
 */
export default {
  name: "Icon",
  status: "review",
  release: "1.0.0",
  props: {
    /**
     * The html element name used for the icon
     */
    type: {
      type: String,
      default: "i",
    },
    /**
     * The icon size used for the badge.
     * `base, medium, large, huge`
     */
    size: {
      type: String,
      default: "base",
      validator: (value, getValue) => {
        const validValue = ["", "base", "medium", "large", "huge"]

        if (getValue) {
          return validValue
        }
        return validValue.indexOf(value) !== -1
      },
    },
    /**
     * Duotone icon.
     * `medium, large`
     */
    duotone: {
      type: Boolean,
      default: false,
    },
    /**
     * The icon name.
     * ex: `help, star, home, ...`
     */
    variant: {
      type: String,
      default: "",
    },
    /**
     * Custom style icon color
     * `ex: #d71149`
     */
    fill: {
      type: String,
      default: "",
    },
  },
  computed: {
    iconClasses() {
      const baseClass = "c-icon"
      const mainClass = this.duotone ? `${baseClass}-duotone` : baseClass
      const sizeClass = this.size ? `${mainClass}--${this.size}` : ""
      const variantClass = this.variant ? `${mainClass}--${this.variant}` : ""

      return [mainClass, sizeClass, variantClass]
    },
    iconColor() {
      return this.fill
    },
  },
}
</script>

<style src="./Icon.style.scss" lang="scss" scoped>
</style>

<docs>
  ```jsx
  <div>
    <heading level="h4">Size Variations</heading>
    <br>
    <icon variant="account"/>
    <icon variant="account" size="medium"/>
    <icon variant="account" size="large"/>
    <icon variant="account" size="huge"/>
  </div>
  ```
  ```jsx
  <div>
    <heading level="h4">Fill Color</heading>
    <br>
    <icon variant="account" size="medium" fill="#d71149"/>
    <icon variant="account" size="medium" fill="#9fd681"/>
    <icon variant="account" size="medium" fill="#ffd165"/>
    <icon variant="account" size="medium" fill="#4e9bf6"/>
  </div>
  ```

  ```jsx
  <div>
    <heading level="h4">Duotone Icon</heading>
    <br>
    <icon variant="help" duotone/>
    <icon variant="help" size="medium" duotone/>
    <icon variant="help" size="large" duotone/>
  </div>
  ```
  ```jsx
    <iframe style="width:100%; height:350px; border:none;" src="https://bukalapak.github.io/pictograph/"></iframe>
  ```

</docs>
