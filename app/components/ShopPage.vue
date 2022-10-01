<template>
    <Page>
        <ActionBar title="Магазин" class="actionBar" flat="true"></ActionBar>
        <ScrollView>
            <GridLayout columns="*,*" :rows="rows" className="shop_container">
                <ShopItem v-for="(item,index) in list" :key="item.id" :item="item" :row="index / 2" :col="index % 2" />
            </GridLayout>
        </ScrollView>
    </Page>
</template>
<script>
import ShopItem from './comp/ShopItem';
export default {
    components: {
        ShopItem,
    },
    data() {
        return {
            title: '',
            list: [{
                id: 1,
                name: 'ФУТБОЛКА V-DAY (УНИСЕКС)',
                price: 4999,
                description: 'Любовь витает в воздухе. Надень эту футболку adidas с вышитым стихотворением и всегда помни о том, что ты заслуживаешь безусловной любви. Мы празднуем любовь к себе и самоуважение, вдохновляя тебя заботиться о себе и дарить заботу близким. Покупая нашу хлопковую одежду, ты поддерживаешь более экологичное выращивание и обработку хлопка.',
                image: '~/assets/images/shop/66164df822f440a3894bae8a0101cabf_9366.jpg'
            }, {
                id: 2,
                name: 'ФУТБОЛКА ENTRADA 22 GRAPHIC',
                price: 2399,
                description: 'Для команды. Для планеты. Эта джерси adidas из коллекции Entrada 22 представляет новый взгляд на классический футбольный стиль. Дизайн с диагональными полосками позволит тебе выделяться на поле и за его пределами. Впитывающая влагу ткань с технологией AEROREADY подчеркивает твой спортивный стиль.',
                image: '~/assets/images/shop/3a2467936b59477bb819add701593b3c_9366.jpg'
            }, {
                id: 3,
                name: 'ФЛИСОВЫЕ БРЮКИ ESSENTIALS CUFF LOGO',
                price: 4999,
                description: 'Уютные брюки в спортивном стиле. Манжеты и крупный логотип adidas создают модные акценты. В боковые карманы можно положить необходимые мелочи.',
                image: '~/assets/images/shop/959c248192974803aa77ad9f0092025e_9366.jpg'
            }, {
                id: 4,
                name: 'БРЮКИ ESSENTIALS',
                price: 4999,
                description: 'Уютные брюки в спортивном стиле. Манжеты и крупный логотип adidas создают модные акценты. В боковые карманы можно положить необходимые мелочи.',
                image: '~/assets/images/shop/6a3c84c49a12408582c9ac8200d69bed_9366.jpg'
            }, {
                id: 5,
                name: 'ФЛИСОВЫЕ БРЮКИ ESSENTIALS CUFF LOGO',
                price: 4999,
                description: 'Уютные брюки в спортивном стиле. Манжеты и крупный логотип adidas создают модные акценты. В боковые карманы можно положить необходимые мелочи.',
                image: '~/assets/images/shop/959c248192974803aa77ad9f0092025e_9366.jpg'
            }, {
                id: 6,
                name: 'ЛОНГСЛИВ SILAS MESSAGE (УНИСЕКС)',
                price: 5699,
                description: 'Увлеченность команды adidas Skateboarding воплотилась в послании на этой футболке с надписью "Eco over Ego ("Эко важнее Эго"). Слоган создал прорайдер Сайлас Бакстер-Нил, преобразив классическую модель из 100% хлопка.',
                image: '~/assets/images/shop/8bc841b24a024caab972ae0401092695_9366.jpg'
            }, {
                id: 7,
                name: 'БЕЙСБОЛКА DAD',
                price: 2399,
                description: 'Список дел на сегодня выполнен. Спортзал был. Личные дела улажены. Теперь ты можешь расслабиться и отдохнуть в этой кепке adidas. А если решишь выйти на пробежку по парку, впитывающая лента с технологией AEROREADY защитит твое лицо от пота.',
                image: '~/assets/images/shop/03015636e4d54ac29738adc600d5a378_9366.jpg'
            }, {
                id: 8,
                name: 'БРЮКИ ADICOLOR CLASSICS BECKENBAUER PRIMEBLUE',
                price: 8399,
                description: 'Для многих поколений три полоски были и остаются символом спорта. И совсем не обязательно быть профессиональным атлетом, чтобы с гордостью носить экипировку с ними. Например, эти брюки adidas просто созданы для комфортных дней в городе. Или дома — выбор за тобой. Они выполнены из переработанных материалов, так что заботятся не только о тебе, но и о будущем нашей планеты.',
                image: '~/assets/images/shop/93a55fe7008d405c851bad9a00999fed_9366.jpg'
            }, {
                id: 9,
                name: 'ДЖЕМПЕР ADIDAS SPORTSWEAR FUTURE ICONS 3-STRIPES',
                price: 7399,
                description: 'Достижение фитнес-цели невозможно без правильно спланированного отдыха. А во время отдыха лучше носить что-то уютное. Например, этот джемпер adidas свободного кроя в классическом спортивном стиле. Гладкий материал обеспечивает комфорт в любой ситуации.',
                image: '~/assets/images/shop/2b5555709ac24f209ec1ad5200fc0041_9366.jpg'
            }]
        };
    },
    methods: {
        onFlickTap(args) {
            const id = args.item.id
            this.$navigateTo(ShopItemPage, {
                props: { id }
            })
        }
    },
    computed: {
        rows: function () {
            const rows = [];
            for (let i = 0; i < this.list.length / 2; i++) {
                rows.push("*");
            }
            return rows.join(",");
        }
    }
};

</script>
<style scoped>
.shop_container {
    padding: 0 15px;
}

</style>
