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
      {{ home.description }}
      <div class="" style="height: 800px; width: 800px" ref="map"></div>
      <div v-for="review in reviews" class="" :key="review.objectId">
        <img :src="review.reviewer.image" :alt="review.comment" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.home.title,
    }
  },
  methods: {},
  async asyncData({ params, $dataApi, error }) {
    const homeResponse = await $dataApi.getHome(params.id)
    if (!homeResponse.ok) {
      return error({
        statusCode: homeResponse.status,
        message: homeResponse.statusText,
      })
    }

    const reviewResponse = await $dataApi.getReviewsByHomeId(params.id)
    if (!reviewResponse.ok) {
      return error({
        statusCode: reviewResponse.status,
        message: reviewResponse.statusText,
      })
    }

    return {
      home: homeResponse.json,
      reviews: reviewResponse.json.hits,
    }
  },
  mounted() {
    this.$maps.showMap(
      this.$refs.map,
      this.home._geoloc.lat,
      this.home._geoloc.lng
    )
  },
}
</script>

<style lang=""></style>
