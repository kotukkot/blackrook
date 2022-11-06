<template>
  <Page actionBarHidden="true">
    <ScrollView>
      <StackLayout
        stretchLastChild="true"
        className="contact_page_item"
      >
        <Label
          :text="item.city"
          :textWrap="true"
          className="contact_item_city"
        />

        <FlexboxLayout
          className="shop_page_cost_box"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Label :text="item.address" className="contact_item_address" />
          <Label
            v-if="item.telephones && item.telephones.length"
            :text="item.telephones[0].phone"
            className="contact_item_phone"
            @tap="call(item.telephones[0].phone)"
          />
        </FlexboxLayout>
        <StackLayout
          orientation="horizontal"
          width="100%"
          verticalAlignment="stretch"
        >
          <Mapbox
            className="contact_mapbox"
            accessToken="pk.eyJ1IjoiaHJhY2gxOTg3IiwiYSI6ImNsOXByNG1laTA5cWkzdXRmNWVtdWpibTAifQ.SdmR9gHm_8ku1oLo6DY7kg"
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
            @mapReady="onMapReady($event, item.latitude, item.longitude)"
          >
          </Mapbox>
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>
<script>
import { dial, requestCallPermission } from "nativescript-phone";
export default {
  components: {},
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      title: "",
    };
  },
  methods: {
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
