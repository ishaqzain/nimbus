<template>
  <component class="c-btn"
    :is="type" 
    :class="buttonClasses" 
    :disabled="disabled" 
    @click="handleClick"
  >
    <template v-if="hasSpinner">
      <i class="c-btn--spinner__icon"></i>
      <span class="c-btn--spinner__text">
        <slot></slot>
      </span>
    </template>
    <template v-else>
      <slot></slot>
    </template>
    
  </component>
  
</template>
<script>
  /**
 * Headings are used as the titles of each major section of a page in the
 * interface. For example, templates generally use headings as their title.
 * Heading element provides an option to change the level of the heading.
 */
export default {
  name: "ButtonStyle",
  status: "prototype",
  release: "1.0.0",
  props: {
    /**
     * The html element name used for the button
     */
    type: {
      type: String,
      default: "button",
    },
    /**
     * The button size used for the button.
     * `tiny, small, large, default`
     */
    size: {
      type: String,
      default: 'default',
      validator: (value, getValue) => {
        const validValue = ['tiny', 'small', 'large', 'default']

        if (getValue) {
          return validValue
        }
        return validValue.indexOf(value) !== -1
      },
    },
    /**
     * The button color used for the button.
     * `red, green, yellow, pink, default`
     */
    color: {
      type: String,
      default: 'default',
      validator: (value, getValue) => {
        const validValue = ['red', 'green', 'yellow', 'pink', 'default']

        if (getValue) {
          return validValue
        }
        return validValue.indexOf(value) !== -1
      },
    },
    /**
     * The button shape used for the button.
     * `square, pill, default`
     */
    shape: {
      type: String,
      default: 'default',
      validator: (value, getValue) => {
        const validValue = ['square', 'pill', 'block', 'default']

        if (getValue) {
          return validValue
        }
        return validValue.indexOf(value) !== -1
      },
    },
    /**
     * Whether the form input field is disabled or not.
     * `true, false`
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    isGhost: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    hasSpinner: {
      type: Boolean,
      default: false,
    },
    clicked: {
      type: Function,
      default: null,
    },
    activated: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClasses() {
      return [
        this.size ? `c-btn--${this.size}` : '',
        this.shape ? `c-btn--${this.shape}` : '',
        this.color ? `c-btn--${this.color}` : '',
        this.isGhost ? 'c-btn--ghost' : '',
        this.hasSpinner ? 'c-btn--spinner' : '',
        this.activated || this.isActive ? 'is-active' : '',
      ];
    },
    isDisabledBtn() {
      return this.disabled || this.isDisabled;
    },
  },
  methods: {
    handleClick() {
      if (this.disabledAfterClick) {
        this.isDisabled = true;
      }
      if (this.hasSpinner) {
        this.isActive = true;
      }
      this.$emit('clicked');
    },
  },
};
</script>

<style src="./_styles/Button.style.scss" lang="scss" scoped></style>

<docs>
  ```jsx
  <div>
    <heading level="h4">Size Variations</heading>
    <br>
    <button-style size="tiny">Tiny</button-style>
    <button-style size="small">Small</button-style>
    <button-style size="default">Default</button-style>
    <button-style size="large">Large</button-style>
  </div>
  ```

  ```jsx
  <div>
    <heading level="h4">Color Variations</heading>
    <br>
    <button-style color="red">Red</button-style>
    <button-style color="green">Green</button-style>
    <button-style color="yellow">Yellow</button-style>
    <button-style color="pink">Pink</button-style>
    <button-style color="default">Large</button-style>
  </div>
  ```

  ```jsx
  <div>
    <heading level="h4">Shape Variations</heading>
    <br>
    <button-style shape="square">S</button-style><br><br>
    <button-style shape="pill">Pill</button-style><br><br>
    <button-style shape="block">Block</button-style><br>
    <button-style shape="default">Default</button-style>
  </div>
  ```

</docs>