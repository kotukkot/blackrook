<template>
  <Page>
    <ActionBar title="Магазин" class="actionBar" flat="true">
      <ActionItem @tap="onToggleDrawerTap()" ios.position="right">
        <Label text="Категории" className="action_item_name" />
      </ActionItem>
    </ActionBar>
    <RadSideDrawer ref="drawer" :drawerLocation="currentLocation">
      <StackLayout ~drawerContent class="sideStackLayout">
        <StackLayout class="sideStackLayout">
          <Label
            v-for="cat in categoryList"
            :key="cat.id"
            :text="cat.name"
            class="sideLabel"
            @tap="goTo(cat.id)"
          ></Label>
        </StackLayout>
      </StackLayout>
      <StackLayout ~mainContent class="sideContentLayout">
        <ActivityIndicator v-if="preloader" :busy="preloader" />
        <FlexboxLayout
          flexDirection="column"
          justifyContent="space-around"
          v-else-if="!preloader && !list.length"
          class="noProduct_alert_box"
        >
          <Label
            textWrap="true"
            text="Извините, в данной категории пока нет товаров"
          />
        </FlexboxLayout>
        <ShopList v-else :list="list" />
        <!-- <StackLayout>
          <Button
            text="Показать ещё"
            @tap="api(next_page_url)"
          />
        </StackLayout> -->
      </StackLayout>
    </RadSideDrawer>
  </Page>
</template>
<script>
import ShopList from "./ShopList";

import { SideDrawerLocation } from "nativescript-ui-sidedrawer";
export default {
  components: {
    ShopList,
  },
  props: {
    cat_id: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      preloader: false,
      selectedIndex: 0,
      next_page_url: null,
      list: [],
      currentLocation: SideDrawerLocation.Left,
    };
  },
  methods: {
    async api(link = null) {
      this.preloader = true;
      let url = link ? link : this.urlApi;
      this.$axios
        .get(url)
        .then((response) => {
          this.list = link
            ? this.list.concat(response.data.data.goods.data)
            : response.data.data.goods.data;
          this.next_page_url = response.data.data.goods.next_page_url;
          console.log(this.next_page_url);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          this.preloader = false;
        });
    },
    onOpenDrawerTap() {
      this.$refs.drawer.showDrawer("bottom");
    },
    onCloseDrawerTap() {
      this.$refs.drawer.closeDrawer();
    },
    onToggleDrawerTap() {
      this.$refs.drawer.toggleDrawerState();
    },
    goTo(id) {
      this.$navigator.navigate("/shop", {
        props: {
          cat_id: id,
        },
      });
    },
  },
  mounted() {
    this.api();
  },
  computed: {
    categoryList() {
      return this.$store.state.category;
    },
    urlApi() {
      if (this.cat_id) {
        return `https://black-rook.ru/api/v1/category/${this.cat_id}`;
      }

      return `https://black-rook.ru/api/v1/products`;
    },
  },
};
</script>
<style scoped>
.sideStackLayout {
  /* background-color: white; */
}

.sideStackLayout Button {
  color: white;
}

.sideLabel {
  padding: 15;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
}

.sideContentLayout {
  background-color: #f2f1f7;
}

.sideContentLayout .noProduct_alert_box {
  padding: 15pt;
  text-align: center;
}

.sideContentLayout .noProduct_alert_box Label {
  background-color: #fff;
  border-radius: 12pt;
  padding: 15pt;
  text-align: center;
}
</style>
