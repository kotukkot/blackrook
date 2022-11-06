import HomePage from './components/HomePage';
import NewsPage from './components/NewsPage';
import NewsDetailPage from './components/NewsDetailPage';
import YclientsPage from './components/YclientsPage';
import ShopPage from './components/ShopPage';
import ShopList from './components/ShopList';
import ShopItemPage from './components/ShopItemPage';
import ContactPage from './components/ContactPage';
import ContactItemPage from './components/ContactItemPage';
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
    '/shop/list': {
        component: ShopList,
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
    '/contact/item': {
        component: ContactItemPage,
    },
}
