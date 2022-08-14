<template>
  <div>{{ error.message }} {{ error.statusCode }}</div>
</template>

<script>
export default {
  head() {
    return {
      title: this.error.message,
    }
  },
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
