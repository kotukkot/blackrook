<template>
    <DockLayout stretchLastChild="true" className="shop_item">
        <Image v-if="item.image" :src="item.image" className="shop_item_image" @tap="openDetail(item)" dock="top"/>
        <Image v-else src="~/assets/images/no-product-image.png" className="shop_item_image" @tap="openDetail(item)" dock="top"/>
        <Label :text="item.name" :textWrap="true" className="shop_item_title" dock="top"/>
        <Label :text="'₽' + item.price | format" className="shop_item_price" verticalAlignment="bottom" dock="bottom"/>
    </DockLayout>
</template>
<script>
import ShopItemPage from '@/components/ShopItemPage';
export default {
    components: {
        ShopItemPage
    },
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
    filters: {
        format: val => `${val}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '),
    },
    methods: {
        openDetail(item) {
            this.$navigator.navigate('/shop/item', {
                props: { item }
            });
        }
    },
};

</script>
<style scoped>
.shop_item {
    padding: 10px;
}

.shop_item_title {
    font-weight: bold;
    font-size: 12px;
}

.shop_item_image {
    margin-bottom: 15px;
    height: auto;
    width: 100%;
}

.shop_item_footer {
    margin-top: 20px;
    font-size: 14px;
    padding: 0;
}

.shop_item_price {
    font-size: 16px;
    font-weight: bold;
    color: #000;
}

.shop_item_button {
    border-radius: 4;
    height: auto;
    color: #fff;
    background-color: #000;
    font-size: 10;
    padding: 5px;
}

</style>
