<script lang="ts">
export default {
  /**
   * AppButton component
   * @displayName AppButton
   * @prop {Boolean} disabled - Disables the button
   * @example
   * <AppButton>Click me</AppButton>
   * <AppButton disabled>Click me</AppButton>
   * @description A button component with a slot which can be used to display text or other components
   */
  name: 'AppButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isDisabled: this.disabled,
    };
  },
};
</script>

<template>
  <button
    class="button"
    :disabled="isDisabled"
    role="button"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
/* CSS */
.button {
  align-items: center;
  background-clip: padding-box;
  background-color: #405cf5;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family:
    system-ui,
    -apple-system,
    system-ui,
    'Helvetica Neue',
    Helvetica,
    Arial,
    sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
}

.button:hover,
.button:focus {
  background-color: #3e58e6;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

.button:hover {
  transform: translateY(-1px);
}

.button:active {
  background-color: #2137b7;
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  transform: translateY(0);
}
</style>
