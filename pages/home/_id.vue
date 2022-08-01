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
    </div>
  </div>
</template>

<script>
import homes from '~/data/homes.json'
export default {
  head() {
    return {
      title: this.home.title,
      script: [
        {
          src: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`,
          hid: 'map',
          type: 'text/javascript',
          defer: true,
        },
      ],
    }
  },
  data() {
    return { home: {} }
  },
  created() {
    const home = homes.find((home) => home.objectID === this.$route.params.id)
    this.home = home
  },
  mounted() {
    const mapOptions = {
      center: new window.google.maps.LatLng(
        this.home._geoloc.lat,
        this.home._geoloc.lng
      ),
      zoom: 15,
      disableDefaultUI: true,
      zoomControl: true,
    }
    const map = new window.google.maps.Map(this.$refs.map, mapOptions)
    const position = new window.google.maps.LatLng(
      this.home._geoloc.lat,
      this.home._geoloc.lng
    )
    const marker = new window.google.maps.Marker({
      position,
    })

    marker.setMap(map)
  },
}
</script>

<style lang=""></style>
