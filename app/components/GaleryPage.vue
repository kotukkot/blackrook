<template>
  <Page>
    <DockLayout
      stretchLastChild="true"
      className="barber_item"
      @tap="openDetail(item)"
    >
      <Image
        v-if="item.image"
        :src="item.image"
        className="barber_item_image"
        stretch="aspectFill"
        horizontalAlignment="center"
        dock="top"
      />
      <Image v-else src="~/assets/no-product-image.png" />
      <Label
        :text="item.name"
        :textWrap="true"
        className="barber_item_title"
        verticalAlignment="bottom"
        dock="bottom"
      />
    </DockLayout>
  </Page>
</template>
<script>
export default {
  name: "BarberItem",
  components: {},
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {
    openDetail(item) {
      this.$navigator.modal("/barbers/item", {
        props: { item },
        fullscreen: true,
      });
    },
  },
  mounted() {},
};
</script>
<style scoped></style>
