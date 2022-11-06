<template>
    <Page android:actionBarHidden="true">
            <!-- <ActionBar :title="item.name" class="actionBar" flat="true"/> -->
            <ScrollView>
                <StackLayout className="shop_page_description_box">
                    <Image v-if="item.image" :src="item.image" className="shop_item_image" stretch="aspectFill" />
                    <FlexboxLayout flexDirection="column" className="shop_page_description_box">
                        <Label :text="item.name" :textWrap="true" className="shop_item_title" />
                        <FlexboxLayout className="shop_page_cost_box" justifyContent="space-between">
                            <Label :text="format_string(item.cost)" className="shop_item_cost" />
                            <Label :text="item.weight + ' ' + item.weight_label" className="shop_item_weight" />
                        </FlexboxLayout>
                        <Label :text="item.description" :textWrap="true" className="shop_item_description" />
                    </FlexboxLayout>
                </StackLayout>
            </ScrollView>
    </Page>
</template>
<script>
export default {
    components: {},
    props: {
        item: {
            type: Object
        }
    },
    data() {
        return {
            title: '',

        };
    },
    methods: {
        format_string(val) {
            return `${val}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ") + ' ₽';
        }
    }
};

</script>
<style scoped>

.shop_item_image {
  margin-bottom: 15px;
  height: auto;
  width: 100%;
  border-radius: 4pt 4pt 0 0;
}

.shop_page_description_box {
    padding: 25px 15px;
    background: #fff;
}

.shop_item_title {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 20px;
    color: #2e2e33;
    text-align: center;
}


.shop_item_description {
    font-weight: bold;
    font-size: 14px;
    color: #919191;
}

.shop_page_cost_box {
    margin: 20pt 0;
}

.shop_item_cost,
.shop_item_weight {
  font-size: 16pt;
  font-weight: bold;
  text-align: center;
}

.shop_item_cost {
    background: #2e2e33;
    border-radius: 4pt;
    padding: 0pt 25pt;
    color: #fff;
    font-size: 24pt;
}

</style>
