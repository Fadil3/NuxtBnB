<template lang="">
  <div class="">
    <div
      v-for="home in homes"
      style="float: left; margin: 10px"
      :key="home.objectID"
    >
      <HomeCard :home="home" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homes: homes.slice(0, 3),
    }
  },
  components: {
    HomeCard,
  },
}
</script>

<style lang=""></style>
