<template>
    <MDBottomNavigation selectedIndex="3">
        <MDTabStrip>
            <MDTabStripItem>
                <Label text="Главная"></Label>
            </MDTabStripItem>
            <MDTabStripItem class="special">
                <Label text="Новости"></Label>
            </MDTabStripItem>
            <MDTabStripItem class="special">
                <Label text="Записаться"></Label>
            </MDTabStripItem>
            <MDTabStripItem class="special">
                <Label text="Магазин"></Label>
            </MDTabStripItem>
            <MDTabStripItem class="special">
                <Label text="Контакты"></Label>
            </MDTabStripItem>
        </MDTabStrip>
        <MDTabContentItem>
            <HomePage />
        </MDTabContentItem>
        <MDTabContentItem>
            <NewsPage />
        </MDTabContentItem>
        <MDTabContentItem>
            <Yclients />
        </MDTabContentItem>
        <MDTabContentItem>
            <Shop />
        </MDTabContentItem>
        <MDTabContentItem>
            <ContactPage />
        </MDTabContentItem>
    </MDBottomNavigation>
</template>
<script>
import HomePage from './HomePage';
import NewsPage from './NewsPage';
import Yclients from './YclientsPage';
import Shop from './ShopPage';
import ContactPage from './ContactPage';
export default {
    name: 'Footer',
    components: {
        HomePage,
        NewsPage,
        Yclients,
        Shop,
        ContactPage
    },
};

</script>
