<template>
  <div>
    <img v-for="image in allImages" :src="image.link" :key="image.id" :alt="image.name" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Image list',
  computed: mapGetters(['allImages']),
  methods: mapActions(['fetchImages']),
  created() {
    this.fetchImages()
  },
}
</script>