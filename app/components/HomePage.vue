<template>
  <Page>
    <ActionBar title="Black Rook" class="actionBar" flat="true"></ActionBar>
    <ScrollView>
      <ActivityIndicator :busy="preloader" />
      <FlexboxLayout flexDirection="column" v-if="home_data">
        <Label text="Наша команда" :textWrap="true" className="main_label" />
        <GridLayout
          columns="*,*"
          :rows="barbers_rows"
          class=""
          className="barbers_container"
        >
          <BarberItem
            v-for="(item, index) in home_data.barbers"
            :key="index"
            :item="item"
            :row="index / 2"
            :col="index % 2"
            margin="5"
          />
        </GridLayout>
        <Label text="Галерея" :textWrap="true" className="main_label" />
      </FlexboxLayout>

    </ScrollView>
  </Page>
</template>
<script>
import BarberItem from "./comp/BarberItem";
import GaleryItem from "./comp/GaleryItem";
export default {
  name: "HomePage",
  components: {
    BarberItem,
    GaleryItem
  },
  data() {
    return {
      preloader: true,
      home_data: null,
    };
  },
  methods: {
    async api() {
      let url = "https://black-rook.ru/api/v1/home";
      this.$axios
        .get(url)
        .then((response) => {
          this.home_data = response.data.data;
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
  computed: {
    barbers_rows: function () {
      const rows = [];
      for (let i = 0; i < this.home_data.barbers.length / 2; i++) {
        rows.push("auto");
      }
      return rows.join(",");
    },
  },
};
</script>
<style scoped>


.barbers_container {
  padding: 0 15px;
}
</style>
