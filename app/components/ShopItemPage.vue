<template>
    <Page actionBarHidden="true">
        <ActionBar :title="item.name" class="actionBar" flat="true"/>
        <FlexboxLayout flexDirection="column" className="shop_page_description_box">
        <Image v-if="item.image" :src="item.image" className="shop_item_image" />
        <FlexboxLayout flexDirection="column" className="shop_page_description_box">
            <Label :text="item.name" :textWrap="true" className="shop_item_title" />
            <Label :text="item.description" :textWrap="true" className="shop_item_description" />
        </FlexboxLayout></FlexboxLayout>
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

    }
};

</script>
<style scoped>
.shop_item_image {
    aspect-ratio: 1 / 1;
    margin-bottom: 25px;
    width: 100%;
    height: auto;
}

.shop_page_description_box {
    padding: 25px 15px;
}

.shop_item_title {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 20px;
    color: #2e2e33;
}


.shop_item_description {
    font-weight: bold;
    font-size: 14px;
    color: #919191;
}

</style>
