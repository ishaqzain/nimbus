<template>
  <transition name="fade">
    <component :is="wrapper"
      class="c-notification"
      :class="[notificationClasses, solid ? 'is-solid' : '']"
      v-show="visible"
      v-if="title">
      <div v-if="iconName">
        <icon v-bind:variant="iconName"/>
      </div>
      <text-style wrapper="div" fontSize="14px">
        {{ title }}
      </text-style>
      <div @click="close()">
        <icon variant="close"/>
      </div>
    </component>
  </transition>
</template>

<script>
/**
 * Avatar are used as the titles of each major section of a page in the
 * interface. For example, templates generally use headings as their title.
 * Heading element provides an option to change the level of the heading.
 */
export default {
  name: "Notification",
  status: "review",
  release: "1.0.0",
  props: {
    /**
     * The html element name used for the avatar
     */
    wrapper: {
      type: String,
      default: "div",
    },
    title: {
      type: String,
      default: "",
      required: true,
    },
    iconName: {
      type: String,
      default: "",
    },
    solid: Boolean,
    /**
     * The button size used for the button.
     * `small, default, large`
     */
    type: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      visible: true,
    }
  },
  methods: {
    close() {
      this.visible = false
      this.$emit("close")
    },
  },
  computed: {
    notificationClasses() {
      return [this.type ? `c-notification--${this.type}` : ""]
    },
  },
}
</script>

<style src="./Notification.style.scss" lang="scss" scoped>
</style>

<docs>
  ```jsx
  <div>
    <heading level="h4">Type Variations</heading>
    <br>
    <notification
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore">
    </notification>
    <br>
    <notification 
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
      type="error">
    </notification>
    <br>
    <notification 
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
      type="success">
    </notification>
  </div>
  ```
  ```jsx
  <div>
    <heading level="h4">With Icon</heading>
    <br>
    <notification
      iconName="home"
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore">
    </notification>
    <br>
    <notification 
      iconName="error"
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
      type="error">
    </notification>
    <br>
    <notification 
      iconName="done"
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
      type="success">
    </notification>
  </div>
  ```
  ```jsx
  <div>
    <heading level="h4">Solid Variations</heading>
    <br>
    <notification 
      iconName="error"
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
      type="error"
      solid>
    </notification>
    <br>
    <notification 
      iconName="done"
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
      type="success"
      solid>
    </notification>
    <br>
  </div>
  ```

</docs>
