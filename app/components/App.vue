<template>
  <GridLayout class="App" rows="*, auto" iosOverflowSafeArea="false">
    <ContentView row="0">
      <Navigator :defaultRoute="'/contacts'" />
      <!-- <Navigator id="secondNavigator"/> -->
      <!-- <Navigator :defaultRoute="'/yclients'"/> -->
      <!-- <Frame>
                <HomePage />
            </Frame> -->
    </ContentView>
    <Nav row="1" />
  </GridLayout>
</template>
<script>
import Nav from "./Nav";
import HomePage from "./NewsPage";
export default {
  name: "App",
  components: {
    Nav,
    HomePage,
  },
  methods: {
    async apiCategory() {
      let url = "https://black-rook.ru/api/v1/category";
      this.$axios
        .get(url)
        .then((response) => {
            this.$store.commit('updateCategoryList', response.data.data)
        })
        .catch((err) => console.log(err));
    },
  },
  created() {
    this.apiCategory();
  },
};
</script>
<style scoped>
</style>
