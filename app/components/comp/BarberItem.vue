<template>
    <DockLayout stretchLastChild="true" className="barber_item" @tap="openDetail(item)">
        <Image  v-if="item.image" :src="item.image" className="barber_item_image"  stretch="aspectFill" horizontalAlignment="center" dock="top" />
        <Image v-else src="~/assets/no-product-image.png" />
        <Label :text="item.name" :textWrap="true" className="barber_item_title" verticalAlignment="bottom" dock="bottom" />
    </DockLayout>
</template>
<script>
export default {
    name: 'BarberItem',
    components: {},
    props: {
        item: {
            type: Object
        }
    },
    data() {
        return {
        }
    },
    methods: {
        openDetail(item) {
            this.$navigator.modal('/barbers/item', {
                props: { item },
                fullscreen: true
            });
        }
        
    },
    mounted() {
        
    },
};

</script>
<style scoped>

.barber_item {
    overflow: hidden;
    background: #fff;
    border-radius: 4pt;
    text-align: center;
}

.barber_item_title {
    font-weight: bold;
    font-size: 16pt;
    padding: 5pt;
  color: #2c2d33;
}

.barber_item_image {
    height: 200pt;
    border-radius: 4pt;
}
</style>
