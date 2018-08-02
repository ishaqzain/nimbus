<template>
  <div v-show="isOpen">
    <div v-if="withIcon" class="c-notification" :class="getClasses">
      <span v-if="closeable" class="c-notification__close c-icon c-icon--close" @click="closeNotif"></span>
      <div class="o-flag o-flag--tiny">
        <div class="o-flag__head">
          <span class="c-icon" :class="iconClass"></span>
        </div>
        <div class="o-flag__body">
          <slot>{{ text }}</slot>
        </div>
      </div>
    </div>
    <div v-else class="c-notification" :class="getClasses">
      <slot>{{ text }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notification",
  data() {
    return {
      isOpen: true,
    }
  },
  props: {
    text: {
      type: String,
      required: false,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    color: {
      type: String,
      required: false,
      default: "",
    },
    line: {
      type: String,
      required: false,
      default: "",
    },
    isActive: {
      type: Boolean,
      required: false,
      default: false,
    },
    icon: {
      type: String,
      required: false,
      default: "",
    },
    closeable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    getClasses() {
      return [
        typeof this.color !== "string" || this.color.length === 0 ? "" : `c-notification--${this.color}`,
        typeof this.line !== "string" || this.line.length === 0 ? "" : `c-notification--${this.line}`,
        this.isActive ? "is-active" : "",
      ]
    },
    withIcon() {
      return this.icon.length > 0
    },
    iconClass() {
      return `c-icon--${this.icon}`
    },
  },
  methods: {
    closeNotif() {
      this.isOpen = false
    },
  },
}
</script>


<style src="./Notification.style.scss" lang="scss" scoped>
</style>

<docs>
  ```jsx
  <Notification color line></Notification>
  ```
</docs>
