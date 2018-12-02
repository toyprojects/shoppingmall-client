import { Home, SignIn, SignUp, Category, Heart, Basket, MyPage } from './pages'

export default [
  {
    path: '/',
    component: Home,
    exact: true
  }, {
    path: '/signin',
    component: SignIn,
    exact: true
  }, {
    path: '/signup',
    component: SignUp,
    exact: true
  }, {
    path: '/categories',
    component: Category,
    exact: true
  }, {
    path: '/heart',
    component: Heart,
    exact: true
  }, {
    path: '/basket',
    component: Basket,
    exact: true
  }, {
    path: '/mypage',
    component: MyPage,
    exact: true
  }
]