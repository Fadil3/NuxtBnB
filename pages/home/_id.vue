<template lang="">
  <div class="">
    <div class="" style="display: flex">
      <img
        v-for="image in home.images"
        :src="image"
        :key="image"
        alt="img...."
        width="200px"
      />
    </div>
    <div>
      {{ home.title }} <br />
      ${{ home.pricePerNight }} / Night
      <br />
      <img src="/images/marker.svg" alt="marker" width="20" />
      {{ home.location.address }}
      {{ home.location.city }}
      {{ home.location.state }}
      {{ home.location.country }}
      <br />
      <img src="/images/star.svg" alt="marker" width="20" />
      {{ home.reviewValue }}
      <br />
      {{ home.guests }} guests, {{ home.bedrooms }} bedrooms,
      {{ home.beds }} beds, {{ home.bathrooms }} baths
      <br />
    </div>
  </div>
</template>

<script>
import homes from '~/data/homes.json'
export default {
  head() {
    return {
      title: this.home.title,
    }
  },
  data() {
    return { home: {} }
  },
  created() {
    const home = homes.find((home) => home.objectID === this.$route.params.id)
    this.home = home
  },
}
</script>

<style lang=""></style>
