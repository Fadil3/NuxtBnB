<template lang="">
  <div class="">
    <div
      v-for="home in homes"
      style="float: left; margin: 10px"
      :key="home.objectID"
    >
      <nuxt-link :to="`/home/${home.objectID}`">
        <HomeCard :home="home" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import homes from '~/data/homes.json'
export default {
  head() {
    return {
      title: 'Homepage',
      meta: [
        {
          name: 'description',
          content: 'This is a homepage',
          hid: 'description',
        },
      ],
    }
  },
  data() {
    return {
      homes: homes.slice(0, 3),
    }
  },
}
</script>

<style lang=""></style>
