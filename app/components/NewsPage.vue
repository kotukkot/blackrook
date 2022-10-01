<template>
  <Page>
    <ActionBar title="Новости" class="actionBar" flat="true"></ActionBar>

    <ActivityIndicator v-if="preloader" :busy="preloader" />
    <ListView
      for="item in list"
      separatorColor="transparent"
      @itemTap="openDetail"
      @loadMoreItems="nextPage"
      v-else
    >
      <v-template>
        <NewsItem :item="item" />
      </v-template>
    </ListView>
  </Page>
</template>
<script>
import NewsItem from "./comp/NewsItem";
export default {
  name: "NewsPage",
  components: {
    NewsItem,
  },
  data() {
    return {
      preloader: true,
      page: 1,
      list: [],
      lastPage: 1
    };
  },
  methods: {
    async api(page = 1) {
      let url = "https://black-rook.ru/api/v1/news";
      this.$axios
        .get(url, {
          params: {
            page: this.page,
          },
        })
        .then((response) => {
          this.list = this.list.concat(response.data.data.data);
          this.lastPage = response.data.data.last_page;
        })
        .catch((err) => console.log(err))
        .finally(() => {
          this.preloader = false;
        });
    },
    nextPage() {
        if(this.page < this.lastPage) {
            this.api();
        } else {
            return;
        }
    },
    openDetail(event) {
      let id = event.item.id;
      this.$navigator.modal("/news/item", {
        props: { id },
        fullscreen: true,
      });
    },
  },
  created() {
    this.api();
  },
};
</script>
<style scoped>
FlexboxLayout {
  flex-grow: 3;
}
</style>
