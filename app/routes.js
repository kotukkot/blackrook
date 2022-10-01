import HomePage from './components/HomePage';
import NewsPage from './components/NewsPage';
import NewsDetailPage from './components/NewsDetailPage';
import YclientsPage from './components/YclientsPage';
import ShopPage from './components/ShopPage';
import ShopItemPage from './components/ShopItemPage';
import ContactPage from './components/ContactPage';
import BarberPage from './components/BarberPage';

export const routes = {
    '/home': {
        component: HomePage,
    },
    '/news': {
        component: NewsPage,
    },
    '/news/item': {
        component: NewsDetailPage,
    },
    '/yclients': {
        component: YclientsPage,
    },
    '/shop': {
        component: ShopPage,
    },
    '/shop/item': {
        component: ShopItemPage,
    },
    '/barbers/item': {
        component: BarberPage,
    },
    '/contacts': {
        component: ContactPage,
    },
}
