<template>
  <StackLayout v-if="image">
    <Image v-if="image" :src="image" stretch="aspectFill" />
  </StackLayout>
</template>
<script>
export default {
  name: "GaleryItem",
  components: {},
  props: {
    image: {
      type: String,
      requred: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped></style>
