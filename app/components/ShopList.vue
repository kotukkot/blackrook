<template>
    <!-- <RadListView
      v-if="$isIOS"
      ref="listView"
      for="item in list"
      layout="grid"
      :gridSpanCount="2"
    >
      <v-template>
        <ShopItem :item="item" margin="5" />
      </v-template>
    </RadListView> -->
    <!-- <ScrollView > -->
      <GridLayout v-if="list" columns="*,*" :rows="rowsLength" className="shop_container">
        <ShopItem
          v-for="(item, index) in list"
          :key="item.id"
          :item="item"
          :row="index / 2"
          :col="index % 2"
          margin="5"
        />
      </GridLayout>
    <!-- </ScrollView> -->
</template>
<script>
import ShopItem from "./comp/ShopItem";
export default {
  components: {
    ShopItem,
  },
  props: {
    list: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  methods: {
    onFlickTap(args) {
      const id = args.item.id;
      this.$navigateTo(ShopItemPage, {
        props: { id },
      });
    },
  },
  computed: {
    rowsLength: function () {
      const rows = [];
      for (let i = 0; i < this.list.length / 2; i++) {
        rows.push("*");
      }
      return rows.join(",");
    },
  },
  mounted() {},
};
</script>
<style scoped>
.shop_container {
  padding: 0 15px;
}
</style>
