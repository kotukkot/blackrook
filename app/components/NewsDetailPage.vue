<template>
  <Page actionBarHidden="true">
    <ScrollView>
      <ActivityIndicator v-if="preloader" :busy="preloader" />
      <StackLayout v-else>
        <StackLayout v-if="item">
          <Image
            v-if="item.image"
            :src="item.image"
            className="news_item_image"
            stretch="aspectFit"
          />
          <StackLayout className="news_item_description_box">
            <Label
              v-if="item.title"
              :text="item.title"
              :textWrap="true"
              className="news_item_title"
            />
            <HtmlView
              v-if="item.description"
              :html="item.description"
              className="news_item_description"
            />
          </StackLayout>
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>
<script>
export default {
  components: {},
  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      preloader: true,
      item: {},
    };
  },
  methods: {
    async api() {
      let url = "https://black-rook.ru/api/v1/news/" + this.id;
      this.$axios
        .get(url)
        .then((response) => {
          this.item = response.data.data;
        })
        .catch((err) => {
          this.$navigator.navigate("/news");
        })
        .finally(() => {
          this.preloader = false;
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

.news_item_title {
  display: block;
  text-align: center;
  font-size: 16pt;
  font-weight: bold;
  margin: 10pt;
  color: #2c2d33;
  text-transform: uppercase;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  padding-bottom: 20pt;
}

.news_item_description_box {
  padding: 10pt 15pt 30pt 15pt;
  background: #fff;
}

.news_item_description {
  color: #2c2d33;
}
</style>
