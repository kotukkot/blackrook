<template>
  <Page>
    <ActionBar
      title="Новости"
      class="actionBar"
      :flat="$isIOS ? false : true"
    ></ActionBar>
    
    <ActivityIndicator v-if="preloader" :busy="preloader" />
    <RadListView 
      for="item in list"
      separatorColor="transparent"
      @itemTap="openDetail"
      @loadMoreItems="nextPage"
      
      
      v-else
    >
      <v-template>
        <NewsItem :item="item" margin="0 0 5 0" />
      </v-template>
    </RadListView>
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
      lastPage: 1,
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
      if (this.page < this.lastPage) {
        this.api();
      } else {
        return;
      }
    },
    openDetail(event) {
      let id = event.item.id;
      this.$navigator.navigate("/news/item", {
        id: "newsModal",
        props: { id },
        fullscreen: this.$isIOS ? false : true,
      });
    },
  },
  created() {
    this.api();
  },
};
</script>
<style scoped>
Label {
  color: #2c2d33;

}
FlexboxLayout {
  flex-grow: 3;
}
</style>
