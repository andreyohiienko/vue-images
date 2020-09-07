<template>
  <div>Image list</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Image list',
  methods: mapActions(['fetchImages']),
  created() {
    //
    this.fetchImages()
  },
}
</script>