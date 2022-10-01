<template>
  <Page actionBarHidden="true">
    <ScrollView>
      <StackLayout v-if="item">
        <Image
          v-if="item.image"
          :src="item.image"
          className="barber_item_image"
          stretch="aspectFit"
          horizontalAlignment="center"
        />
        <StackLayout className="barber_item_description_box">
          <Label
            :text="item.name"
            :textWrap="true"
            className="barber_item_name"
          />
          <FlexboxLayout
            padding="10"
            justifyContent="space-around"
            alignItems="center"
          >
            <StackLayout v-if="item.telegram"
              @tap="openlink(item.telegram)"
              className="barber_social_item"
              verticalAlignment="center"
            >
              <Label class="fa" :text="`fa-telegram` | fonticon" />
            </StackLayout>
            <StackLayout v-if="item.instagram"
              @tap="openlink(item.instagram)"
              className="barber_social_item"
              verticalAlignment="center"
            >
              <Label class="fa" :text="`fa-instagram` | fonticon" />
            </StackLayout>
            <StackLayout v-if="item.whatsapp"
              @tap="openlink(item.whatsapp)"
              className="barber_social_item"
              verticalAlignment="center"
            >
              <Label class="fa" :text="`fa-whatsapp` | fonticon" />
            </StackLayout>
            <StackLayout v-if="item.vk"
              @tap="openlink(item.vk)"
              className="barber_social_item"
              verticalAlignment="center"
            >
              <Label class="fa" :text="`fa-vk` | fonticon" />
            </StackLayout>
            <StackLayout v-if="item.odnoklassniki"
              @tap="openlink(item.odnoklassniki)"
              className="barber_social_item"
              verticalAlignment="center"
            >
              <Label class="fa" :text="`fa-ok` | fonticon" />
            </StackLayout>
          </FlexboxLayout>
          <Label
            v-if="item.description"
            :text="item.description"
            :textWrap="true"
            className="barber_item_description"
          />
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>
<script>
import { Utils } from "@nativescript/core";
export default {
  components: {},
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    openlink(url) {
      Utils.openUrl(url);
    },
  },
};
</script>
<style scoped>
Label {
  color: #2c2d33;
}

.barber_social_item {
  width: 45pt;
  height: 45pt;
  background-color: #2c2d33;
  text-align: center;
  border-radius: 4pt;
}

.fa {
  font-size: 24pt;
  color: #fff;
  padding: 5pt;
}

.barber_item_description_box {
  padding: 10pt 15pt 30pt 15pt;
}

.barber_item_name {
  display: block;
  text-align: center;
  font-size: 24pt;
  font-weight: bold;
  margin: 10pt;
  color: #2c2d33;
  text-transform: uppercase;
}

.barber_item_social_icon {
  height: 40pt;
  width: 40pt;
  /* background: #000; */
  padding: 5pt;
  border-radius: 4pt;
}

.barber_item_description {
  margin-top: 10pt;
}
</style>
