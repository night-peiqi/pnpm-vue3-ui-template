<template>
  <a-button type="primary">
    prefix：{{ props.text }}--
    <slot></slot>
  </a-button>
</template>

<script>
import { defineComponent } from 'vue'
import { Button as AButton } from 'ant-design-vue'
import { buttonProps } from './button'

export default defineComponent({
  name: 'CQButton',
  props: buttonProps,
  components: { AButton },
  setup: (props) => {
    console.log('props', props)
    return { props }
  }
})
</script>
