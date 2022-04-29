import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// vue app
const app = createApp(App);

// bootstrap
import "bootstrap"
// vue select
import vSelect from 'vue-select'
import "vue-select/dist/vue-select.css";

app.component('v-select', vSelect)

// clipboard
import VueClipboard from 'vue3-clipboard'
app.use(VueClipboard, {
    autoSetContainer: true,
    appendToBody: true,
})

// template custom css
import './assets/scss/bundles.scss'
import './assets/scss/style.scss'

app.component('pagination', Pagination);

// Global page components imported
import HeaderMain from './components/common/HeaderMain.vue';
import HeaderDashboard from './components/common/HeaderDashboard.vue';
import SectionHeading from './components/common/SectionHeading.vue';
import ProductSection from './components/section/ProductSection.vue';
import ProductsContainer from './components/section/ProductsContainer.vue';
import Products from './components/common/Products.vue';
import FeaturedCreators from './components/section/FeaturedCreators.vue';
import BlogSection from './components/section/BlogSection.vue';
import BlogSectionSlider from './components/section/BlogSectionSlider.vue';
import Cta from './pages/Cta.vue';
import CtaSection from './components/section/CtaSection.vue';
import Footer from './pages/Footer.vue';
import FooterSection from './components/section/FooterSection.vue';
import ButtonLink from './components/common/ButtonLink.vue';
import ButtonGroup from './components/common/ButtonGroup.vue';
import LogoLink from './components/common/LogoLink.vue';
import Featured from './components/section/Featured.vue';
import HowItWork from './components/section/HowItWork.vue';
import Category from './components/section/Category.vue';
import Newsletter from './components/section/Newsletter.vue';
import FeaturedCreatorSlider from './components/common/FeaturedCreatorSlider.vue';
import FeaturedItemSlider from './components/common/FeaturedItemSlider.vue';
import RecentItemSection from './components/section/RecentItemSection.vue';
import RecentItemSlider from './components/common/RecentItemSlider.vue';
import FunFactSection from './components/section/FunFactSection.vue';
import ExploreSection from './components/section/ExploreSection.vue';
import Filters from './components/common/Filters.vue';
import TopCreators from './components/section/TopCreators.vue';
import Creators from './components/common/Creators.vue';
import Collections from './components/section/Collections.vue';
import CollectionSlider from './components/common/CollectionSlider.vue';
import ItemDetailSection from './components/section/ItemDetailSection.vue';
import RelatedProduct from './components/section/RelatedProduct.vue';
import ProductsTwo from './components/common/ProductsTwo.vue';
import AuthorHero from './components/section/AuthorHero.vue';
import AuthorSection  from './components/section/AuthorSection.vue';
import AuthorSidebar from './components/common/AuthorSidebar.vue';
import AboutSection from './components/section/AboutSection.vue';
import BrandSection from './components/section/BrandSection.vue';
import TeamSection from './components/section/TeamSection.vue';
import ActivitySection  from './components/section/ActivitySection.vue';
import RankingSection from './components/section/RankingSection.vue';
import WalletSection from './components/section/WalletSection.vue';
import WalletSectionTwo from './components/section/WalletSectionTwo.vue';
import Pagination from './components/common/Pagination.vue';
import BlogDetailSection from './components/section/BlogDetailSection.vue';
import Comments from './components/common/Comments.vue';
import Form from './components/common/Form.vue';
import Sidebar from './components/common/Sidebar.vue';
import LoginSection from './components/section/LoginSection.vue';
import LoginSectionTwo from './components/section/LoginSectionTwo.vue';
import RegisterSection from './components/section/RegisterSection.vue';
import ContactSection from './components/section/ContactSection.vue';
import GoogleMap from './components/common/GoogleMap.vue';
import UserSidebar from './components/common/UserSidebar.vue';
import OfferSection from './components/section/OfferSection.vue';
import UserActivitySection from './components/section/UserActivitySection.vue'
import PurchasesSaleSection from './components/section/PurchasesSaleSection.vue';
import TransactionsSection from './components/section/TransactionsSection.vue';
import DisplaySection from './components/section/DisplaySection.vue';
import RedeemSection from './components/section/RedeemSection.vue';
import DepositSection from './components/section/DepositSection.vue';
import ProfileSection from './components/section/ProfileSection.vue';
import AccountSection from './components/section/AccountSection.vue';
import PaymentMethodSection from './components/section/PaymentMethodSection.vue';
import SellerSettingSection from './components/section/SellerSettingSection.vue';
import NotificationSection from './components/section/NotificationSection.vue';
import SecuritySection from './components/section/SecuritySection.vue';
import ThemeSwitcher from './components/common/ThemeSwitcher.vue';

// Global page components register
app.component('HeaderMain', HeaderMain);
app.component('HeaderDashboard', HeaderDashboard);
app.component('SectionHeading', SectionHeading);
app.component('ProductSection', ProductSection);
app.component('ProductsContainer', ProductsContainer);
app.component('Products', Products);
app.component('FeaturedCreators', FeaturedCreators);
app.component('BlogSection', BlogSection)
app.component('BlogSectionSlider', BlogSectionSlider)
app.component('Cta', Cta)
app.component('CtaSection', CtaSection)
app.component('Footer', Footer)
app.component('FooterSection', FooterSection)
app.component('ButtonLink', ButtonLink)
app.component('ButtonGroup', ButtonGroup)
app.component('LogoLink', LogoLink)
app.component('Featured', Featured)
app.component('HowItWork', HowItWork)
app.component('Category', Category)
app.component('Newsletter', Newsletter)
app.component('FeaturedCreatorSlider', FeaturedCreatorSlider)
app.component('FeaturedItemSlider', FeaturedItemSlider)
app.component('RecentItemSection', RecentItemSection)
app.component('RecentItemSlider', RecentItemSlider)
app.component('FunFactSection', FunFactSection)
app.component('ExploreSection', ExploreSection)
app.component('Filters', Filters)
app.component('TopCreators', TopCreators)
app.component('Creators', Creators)
app.component('Collections', Collections)
app.component('CollectionSlider', CollectionSlider)
app.component('ItemDetailSection', ItemDetailSection)
app.component('RelatedProduct', RelatedProduct)
app.component('ProductsTwo', ProductsTwo)
app.component('AuthorHero', AuthorHero)
app.component('AuthorSection', AuthorSection)
app.component('AuthorSidebar', AuthorSidebar)
app.component('AboutSection', AboutSection)
app.component('BrandSection', BrandSection)
app.component('TeamSection', TeamSection)
app.component('ActivitySection', ActivitySection)
app.component('RankingSection', RankingSection)
app.component('WalletSection', WalletSection)
app.component('WalletSectionTwo', WalletSectionTwo)
app.component('Pagination', Pagination)
app.component('BlogDetailSection', BlogDetailSection)
app.component('Comments', Comments)
app.component('Form', Form)
app.component('Sidebar', Sidebar)
app.component('LoginSection', LoginSection)
app.component('LoginSectionTwo', LoginSectionTwo)
app.component('RegisterSection', RegisterSection)
app.component('ContactSection', ContactSection)
app.component('GoogleMap', GoogleMap)
app.component('UserSidebar', UserSidebar)
app.component('OfferSection', OfferSection)
app.component('UserActivitySection', UserActivitySection)
app.component('PurchasesSaleSection', PurchasesSaleSection)
app.component('TransactionsSection', TransactionsSection)
app.component('DisplaySection', DisplaySection)
app.component('RedeemSection', RedeemSection)
app.component('DepositSection', DepositSection)
app.component('ProfileSection', ProfileSection)
app.component('AccountSection', AccountSection)
app.component('PaymentMethodSection', PaymentMethodSection)
app.component('SellerSettingSection', SellerSettingSection)
app.component('NotificationSection', NotificationSection)
app.component('SecuritySection', SecuritySection)
app.component('ThemeSwitcher', ThemeSwitcher)

// vue app
app.use(router).mount('#app')
