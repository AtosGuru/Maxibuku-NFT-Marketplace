import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('../pages/Home-v2.vue'),
  },
  {
    path:'/product-details-v1-:id',
    name:'ProductDetail',
    component: () => import('../pages/ProductDetail.vue'),
    props: true
  },
  {
    path:'/product-details-v2-:id',
    name:'ProductDetail_v2',
    component: () => import('../pages/ProductDetail-v2.vue'),
    props: true
  },
  {
    path: '/item-details',
    name: 'itemDetails',
    component: () => import('../pages/ItemDetails.vue')
  },
  {
    path: '/item-details-v2',
    name: 'itemDetailsV2',
    component: () => import('../pages/ItemDetails-v2.vue')
  },
  {
    path: '/explore',
    name: 'explore',
    component: () => import('../pages/Explore.vue')
  },
  {
    path: '/author',
    name: 'author',
    component: () => import('../pages/Author.vue')
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: () => import('../pages/AboutUs.vue')
  },
  {
    path: '/activity',
    name: 'activity',
    component: () => import('../pages/Activity.vue')
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: () => import('../pages/Ranking.vue')
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: () => import('../pages/Wallet.vue')
  },
  {
    path: '/wallet-v2',
    name: 'wallet-v2',
    component: () => import('../pages/WalletTwo.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../pages/Blog.vue')
  },
  {
    path: '/blog-detail-:id',
    name:'NewsDetail',
    component: () => import('../pages/NewsDetail.vue'),
  },
  {
    path: '/blog-detail',
    name: 'blog-details',
    component: () => import('../pages/BlogDetail.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login.vue')
  },
  {
    path: '/login-v2',
    name: 'login v2',
    component: () => import('../pages/Login-v2.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../pages/Register.vue')
  },
  {
    path: '/offers',
    name: 'Offer',
    component: () => import('../pages/Offers.vue')
  },
  {
    path: '/activity-v2',
    name: 'activity-v2',
    component: () => import('../pages/Activity-v2.vue')
  },
  {
    path: '/purchases-sales',
    name: 'purchases-sales',
    component: () => import('../pages/PurchasesSales.vue')
  },
  {
    path: '/transactions',
    name: 'transactions',
    component: () => import('../pages/Transactions.vue')
  },
  {
    path: '/display',
    name: 'display',
    component: () => import('../pages/Display.vue')
  },
  {
    path: '/redeem',
    name: 'redeem',
    component: () => import('../pages/Redeem.vue')
  },
  {
    path: '/deposit-enfties',
    name: 'deposit-enfties',
    component: () => import('../pages/DepositEnfties.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../pages/Profile.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../pages/Account.vue')
  },
  {
    path: '/payment-methods',
    name: 'payment-methods',
    component: () => import('../pages/PaymentMethods.vue')
  },
  {
    path: '/seller-settings',
    name: 'seller-settings',
    component: () => import('../pages/SellerSettings.vue')
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: () => import('../pages/Notifications.vue')
  },
  {
    path: '/security',
    name: 'security',
    component: () => import('../pages/Security.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../pages/Create.vue')
  },
  {
    path: '/create-single',
    name: 'create-single',
    component: () => import('../pages/CreateSingle.vue')
  },
  {
    path: '/create-multiple',
    name: 'create-multiple',
    component: () => import('../pages/CreateMultiple.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../pages/Contact.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        left: 0,
        top: 0
      }
    }
  }
});

export default router;