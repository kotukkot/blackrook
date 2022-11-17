<template>
  <Page>
    <ActionBar
      title="Контакты"
      class="actionBar"
      :flat="$isIOS ? false : true"
    ></ActionBar>
    
    <ActivityIndicator v-if="preloader" :busy="preloader" />
    <RadListView 
      for="item in list"
      separatorColor="transparent"
      @itemTap="openDetail"
      
      
      v-else
    >
      <v-template>
        <ContactItem :item="item" margin="5 10" />
      </v-template>
    </RadListView>
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
    openDetail(event) {
      let id = event.item.id;
      this.$navigator.navigate("/contact/item", {
        id: "contactItemPage",
        props: { id },
        fullscreen: this.$isIOS ? false : true,
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
