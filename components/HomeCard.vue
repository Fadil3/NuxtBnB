<template lang="">
  <div>
    <img :src="home.images[0]" style="width: 200px" />
    <br />
    {{ home.title }}
    <br />
    {{ home.location.address }}
    <br />
    {{ home.location.city }}
    {{ home.location.state }}
    <br />
    {{ home.guests }} guests
    <br />
    {{ home.pricePerNight }} / Night <br />
  </div>
</template>

<script>
export default {
  name: 'HomeCard',
  props: {
    home: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang=""></style>
