<template>
  <Page>
    <ActionBar class="actionBar" :flat="$isIOS ? false : true">
      <ActionItem
        ios.position="right"
        android.position="right"
        :text="item.city"
      />
    </ActionBar>
    <StackLayout
      orientation="horizontal"
      width="100%"
      verticalAlignment="stretch"
    >
      <Mapbox
        accessToken="pk.eyJ1IjoiaHJhY2gxOTg3IiwiYSI6ImNsOXByNG1laTA5cWkzdXRmNWVtdWpibTAifQ.SdmR9gHm_8ku1oLo6DY7kg"
        delay="2000"
        className="contact_mapbox"
        mapStyle="streets"
        :latitude="item.latitude"
        :longitude="item.longitude"
        :hideCompass="true"
        :zoomLevel="15"
        :showUserLocation="false"
        :disableZoom="false"
        :disableRotation="false"
        :disableScroll="false"
        :disableTilt="false"
      >
      </Mapbox>
    </StackLayout>
  </Page>
</template>
<script>
import { dial, requestCallPermission } from "nativescript-phone";
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
      item: {},
    };
  },
  methods: {
    async api() {
      let url = "https://black-rook.ru/api/v1/info/" + this.id;
      this.$axios
        .get(url)
        .then((response) => {
          this.item = response.data.data;
        })
        .catch((err) => {
          console.log(err);
          this.$navigator.navigate("/contact");
        })
        .finally(() => {
          this.preloader = false;
        });
    },
    call(num) {
      const phoneNumber = num;
      requestCallPermission(
        "You should accept the permission to be able to make a direct phone call."
      )
        .then(() => dial(phoneNumber, false))
        .catch(() => dial(phoneNumber, true));
    },
    onMapReady(args, lat, lng) {
      args.map.addMarkers([
        {
          lat: lat,
          lng: lng,
          selected: false,
        },
      ]);
    },
  },
  created() {
    this.api();
  },
};
</script>
<style scoped>
.contact_page_item {
  background: #fff;
  height: 100%;
  padding: 10pt;
}

.contact_item_city {
  font-weight: bold;
  color: #2e2e33;
  font-size: 18px;
}

.contact_item_phone {
  color: #0000ff;
}

.contact_mapbox {
  border-radius: 4pt;
  margin-top: 10pt;
}

.shop_page_cost_box {
  margin-bottom: 20pt;
}
</style>
