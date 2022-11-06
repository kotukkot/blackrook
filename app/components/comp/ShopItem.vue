<template>
  <DockLayout stretchLastChild="true" className="shop_item">
    <Image
      v-if="item.image"
      :src="item.image"
      className="shop_item_image"
      @tap="openDetail(item)"
      dock="top"
    />
    <Image
      v-else
      src="~/assets/images/no-product-image.png"
      className="shop_item_image"
      @tap="openDetail(item)"
      dock="top"
    />
    <DockLayout stretchLastChild="true" className="shop_item_desc_box" dock="bottom">
      <Label
        :text="item.name"
        :textWrap="true"
        className="shop_item_title"
        dock="top"
      />

      <Label
        :text="format_string(item.cost)"
        className="shop_item_price"
        verticalAlignment="bottom"
        dock="bottom"
      />
    </DockLayout>
  </DockLayout>
</template>
<script>
export default {
  components: {
  },
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      title: "",
    };
  },
  methods: {
    openDetail(item) {
      this.$navigator.navigate("/shop/item", {
        props: { item },
      });
    },
    format_string(val) {
        return `${val}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ") + ' ₽';
    }
  },
};
</script>
<style scoped>
.shop_item {
  background: #fff;
  border-radius: 4pt;
  overflow: hidden;
}

.shop_item_desc_box {
  padding: 10pt 5pt;
}
.shop_item_title {
  font-weight: bold;
  font-size: 12px;
  text-align: left;
  margin-bottom: 5pt;
}

.shop_item_image {
  margin-bottom: 15px;
  height: auto;
  width: 100%;
  border-radius: 4pt 4pt 0 0;
}

.shop_item_footer {
  margin-top: 20px;
  font-size: 14px;
  padding: 0;
}

.shop_item_price {
  font-size: 16px;
  font-weight: bold;
  color: #000;
  text-align: right;
}

.shop_item_button {
  border-radius: 4;
  height: auto;
  color: #fff;
  background-color: #000;
  font-size: 10;
  padding: 5px;
}
</style>
