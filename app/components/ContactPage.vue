<template>
  <Page>
    <ActionBar title="Контакты" class="actionBar" flat="true"></ActionBar>
    <ScrollView>
      <ActivityIndicator v-if="preloader" :busy="preloader" />
      <StackLayout v-else className="contact_container">
        <ContactItem
          v-for="item in list"
          :key="item.id"
          :item="item"
          margin="5"
        />
      </StackLayout>
    </ScrollView>
  </Page>
</template>
<script>
import ContactItem from "./comp/ContactItem";
export default {
  name: "ContactPage",
  components: {
    ContactItem,
  },
  data() {
    return {
      preloader: true,
      list: [],
    };
  },
  methods: {
    api() {
      this.preloader = true;
      let url = "https://black-rook.ru/api/v1/info";
      this.$axios
        .get(url)
        .then((response) => {
          this.list = response.data.data;
        })
        .catch((err) => console.log(err))
        .finally(() => {
          this.preloader = false;
        });
    },
  },
  mounted() {
    this.api();
  },
};
</script>
<style scoped>
.contact_container {
  padding: 0 15px;
}
</style>
