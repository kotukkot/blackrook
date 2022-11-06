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
          v-if="!preloader && list.length === 0"
          flexDirection="column"
          justifyContent="space-around"
          class="noProduct_alert_box"
        >
          <Label
            textWrap="true"
            text="Извините, в данной категории пока нет товаров"
          />
        </FlexboxLayout>
        <RadListView
          v-else
          id="ls"
          ref="listView"
          :items="list"
          itemHeight="120"
          loadOnDemandMode="Auto"
          @loadMoreDataRequested="nextPage"
        >
          <v-template>
            <ShopItem :item="item" margin="0 0 10 0" />
          </v-template>
        </RadListView>
      </StackLayout>
    </RadSideDrawer>
  </Page>
</template>
<script>
import ShopItem from "./comp/ShopItem";

import { SideDrawerLocation } from "nativescript-ui-sidedrawer";
export default {
  components: {
    ShopItem,
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
    api(link = null) {
      this.preloader = true;
      let url = link ? link : this.urlApi;
      this.$axios
        .get(url)
        .then((response) => {
          // console.log(response.data.data.goods)
          this.list = link
            ? this.list.concat(response.data.data.goods.data)
            : response.data.data.goods.data;
          this.next_page_url = response.data.data.goods.next_page_url;
        })
        .catch((err) => console.log(err))
        .finally(() => {
          this.preloader = false;
        });
    },
    async nextPage() {
      if (this.next_page_url) {
        await this.$axios
          .get(this.nextPageUrl)
          .then((response) => {
            this.list = this.list.concat(response.data.data.goods.data);
            this.next_page_url = response.data.data.goods.next_page_url;
            this.$refs.listView.nativeView.notifyLoadOnDemandFinished();
          })
          .catch((err) => console.log(err));
      }
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
    nextPageUrl: {
      get() {
        return this.next_page_url;
      },
      set(link) {
        this.next_page_url = link;
      },
    },
    categoryList() {
      return this.$store.state.category;
    },
    urlApi() {
      if (this.cat_id) {
        return `https://black-rook.ru/api/v1/category/${this.cat_id}`;
      }

      return `https://black-rook.ru/api/v1/products`;
    },
    rows: function () {
      const rows = [];
      for (let i = 0; i < this.list.length / 2; i++) {
        rows.push("auto");
      }
      console.log(this.list.length);
      return rows.join(",");
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
  padding: 10pt;
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
