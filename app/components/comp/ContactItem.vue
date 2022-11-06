<template>
  <StackLayout stretchLastChild="true" className="shop_item"  @tap="openDetail(item)">
    <Label :text="item.city" :textWrap="true" className="contact_item_city" />

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
  </StackLayout>
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
    openDetail(item) {
      this.$navigator.modal("/contact/item", {
        id: "contactModal",
        props: { item },
        fullscreen: true,
        stretched: true
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
};
</script>
<style scoped>
.shop_item {
  background: #fff;
  border-radius: 4pt;
  padding: 10pt;
}

.contact_item_city {
  font-weight: bold;
  color: #2e2e33;
  font-size: 18px;
}

.contact_item_address {
}

.contact_item_phone {
  color: #0000ff;
}

.contact_mapbox {
  border-radius: 4pt;
  margin-top: 10pt;
}
</style>
