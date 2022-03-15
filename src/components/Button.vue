<template>
  <v-btn
    rounded
    :color="color"
    :disabled="disabled"
    :fab="fab"
    :loading="loading"
    :icon="icon"
    :outlined="outlined"
    :text="text"
    @click="click"
  >
    <span v-if="btntext"> {{ btntext }} </span>
    <v-icon :right="btntext ? true : false" v-if="mdicon"> {{ mdicon }} </v-icon>
  </v-btn>
</template>

<script>

export default {
  props: {
    btntext: { required: false, default: '' },
    color: { required: false, default: 'primary' },
    disabled: { required: false, default: false },
    loading: { required: false, default: false },
    fab: { required: false, default: false },
    outlined: { required: false, default: false },
    text: { required: false, default: false },
    icon: { required: false, default: false },
    mdicon: { required: false, default: '' },
  },
  methods: {
    click() {
      this.$emit('clicked')
    }
  } 
}
</script>