<template>
  <StackLayout v-if="item">
    <Image v-if="item.image" :src="item.image" stretch="aspectFill"  :height="$isIOS ? 200 : 'auto'" />
    <FlexboxLayout className="news_item_title_box" flexDirection="column">
      <Label :text="item.title" :textWrap="true" className="news_item_title" />
      <Label
        :text="$moment(item.created_at).format('DD.MM.YYYY')"
        className="news_item_date"
        alignSelf="flex-end"
      />
    </FlexboxLayout>
  </StackLayout>
</template>
<script>
export default {
  name: "NewsItem",
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
  },
  mounted() {},
};
</script>
<style scoped>
.news_item_title_box {
  padding: 5pt 15pt;
  background: #fff;
}
.news_item_title {
  color: #2c2d33;
  text-transform: uppercase;
  font-size: 14pt;
  font-weight: bold;
}

.news_item_date {
  font-size: 12pt;
  color: #999;
}
</style>
