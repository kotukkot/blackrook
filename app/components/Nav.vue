<template>
  <GridLayout rows="*" columns="*, *, *, *, *" class="footer">
    <StackLayout
      v-for="(item, index) in routes"
      :key="index"
      class="nav_button"
      row="0"
      :col="index"
      @tap="goTo(index)"
    >
      <!-- <FlexboxLayout
      v-for="(item, index) in routes"
      :key="index"
      class="nav_button"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      row="0"
      :col="index"
      @tap="goTo(index)"
    > -->
      <Label
        horizontalAlignment="center"
        class="fa"
        :text="item.icon | fonticon"
        :class="$navigator.path === item.path ? 'active' : ''" />
      <Label
        horizontalAlignment="center"
        class="nav_label"
        :text="item.label"
        :class="$navigator.path === item.path ? 'active' : ''"
    /></StackLayout>
  </GridLayout>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      routes: [
        {
          name: "home",
          label: "Главная",
          icon: "fa-house",
          path: "/home",
          options: {
            clearHistory: true,
          },
        },
        {
          name: "news",
          label: "Новости",
          icon: "fa-message",
          path: "/news",
          options: {
            clearHistory: true,
          },
        },
        {
          name: "yclients",
          label: "Запись",
          icon: "fa-circle-plus",
          path: "/yclients",
          options: {
            clearHistory: true,
          },
        },
        {
          name: "shop",
          label: "Магазин",
          icon: "fa-cart-shopping",
          path: "/shop",
          options: {
            clearHistory: true,
            props: {
              pageName: "home",
            },
          },
        },
        {
          name: "contacts",
          label: "Контакты",
          icon: "fa-circle-info",
          path: "/contacts",
          options: {
            clearHistory: true,
          },
        },
      ],
    };
  },
  methods: {
    goTo(s) {
      this.$navigator.navigate(this.routes[s].path, this.routes[s].options);
    },
  },
};
</script>
<style scoped>
.footer {
  /* border-top: 1px solid rgba(185,198,215, 1.0); */
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  border-top-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

Image {
  height: 30px;
}

.fa {
  font-size: 24px;
  color: rgba(185, 198, 215, 1);
}

.nav_button {
  padding: 10px 5px;
}

.nav_label {
  font-size: 10px;
  color: rgba(185, 198, 215, 1);
}

.fa.active,
.nav_label.active {
  color: rgba(0, 0, 0, 1);
  transition: 0.2s;
}
</style>
