import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import CreateCategory from '../pages/Menu/CreateCategory/CreateCategory';
import MenuMain from '../pages/Menu/MenuMain';
import CreateSector from '../pages/Table/CreateSector/CreateSector';
import CreateTable from '../pages/Table/CreateTable/CreateTable';
import TableMain from '../pages/Table/TableMain';
import CreateFood from '../pages/Menu/CreateFood/CreateFood';
import OrderMain from '../pages/Order/OrderMain';
import DetailTable from '../pages/Table/DetailTable/DetailTable';
import DetailSector from '../pages/Table/DetailSector/DetailSector';
import DetailFood from '../pages/Menu/DetailFood/DetailFood';
import DetailCategory from '../pages/Menu/DetailCategory/DetailCategory';
import OrderFood from '../pages/Order/OrderFood/OrderFood';
import Cart from '../pages/Order/cart/Cart';
import DetailOrder from '../pages/Order/DetailOrder/DetailOrder';
import AddOrder from '../pages/Order/DetailOrder/AddOrder/AddOrder';
import CartAdd from '../pages/Order/DetailOrder/CartAdd/CartAdd';
import EditOrded from '../pages/Order/DetailOrder/EditOrder/EditOrder';
import ChangeTable from '../pages/Order/DetailOrder/ChangeOrder/ChangeOrder';
import ClientMenu from '../pages/ClientMenu/ClientMenu';
import ClientCart from '../pages/ClientMenu/ClientCart/ClientCart';
import CreateQR from '../pages/Table/CreateQR/CreateQR';
import OrderKitchen from '../pages/OrderKitchen/OrderKitchen';
import DetailNew from '../pages/OrderKitchen/DetailNew/DetailNew';
import DetailComplete from '../pages/OrderKitchen/DetailComplete/DetailComplete';
import Accomplished from '../pages/OrderKitchen/Accomplished/Accomplished';
import ServiceMain from '../pages/Service/ServiceMain';
import DetailService from '../pages/Service/DetailService/DetailService';
import DetailServed from '../pages/Service/DetailServed/DetailServed';
import ClientBill from '../pages/ClientMenu/ClientBill/ClientBill';
import ClientBillStatus from '../pages/ClientMenu/ClientBillStatus/ClientBillStatus';
import AddOrderClient from '../pages/ClientMenu/AddOrderClient/AddOrderClient';
import CartAddClient from '../pages/ClientMenu/CartAddClient/CartAddClient';
import Account from '../pages/Account/Account';
import CreateAccount from '../pages/Account/CreateAccount/CreateAccount';

const publicRoutes = [
  { path: '/login', component: Login, layout: null },
  //=========================
  { path: '/', component: Home },
  //=========================Table
  { path: '/table', component: TableMain },
  { path: '/create-table', component: CreateTable },
  { path: '/create-sector', component: CreateSector },
  { path: '/detail-table/:id', component: DetailTable },
  { path: '/detail-sector/:id', component: DetailSector },
  { path: '/order-food/:id', component: OrderFood },
  { path: '/cart/:id', component: Cart },
  { path: '/table-qr/:id', component: CreateQR },
  //=========================Menu
  { path: '/menu', component: MenuMain },
  { path: '/create-category', component: CreateCategory },
  { path: '/create-food', component: CreateFood },
  { path: '/detail-food/:id', component: DetailFood },
  { path: '/detail-category/:id', component: DetailCategory },
  //=========================order
  { path: '/order', component: OrderMain },
  { path: '/detail-order/:id', component: DetailOrder },
  { path: '/add-food/:id', component: AddOrder },
  { path: '/cart-add/:id', component: CartAdd },
  { path: '/edit-food/:id', component: EditOrded },
  { path: '/change-table/:id', component: ChangeTable },
  //==========================menu client
  { path: '/client-menu/:id', component: ClientMenu, layout: null },
  { path: '/client-cart/:id', component: ClientCart, layout: null },
  { path: '/client-bill/:id/:id', component: ClientBill, layout: null },
  { path: '/client-bill-status/:id/:id', component: ClientBillStatus, layout: null },
  { path: '/client-add-food/:id/:id', component: AddOrderClient, layout: null },
  { path: '/client-cart-add/:id/:id', component: CartAddClient, layout: null },
  //==========================Order kitchen
  { path: '/order-for-kitchen', component: OrderKitchen },
  { path: '/order-for-kitchen-detaild/:id/:id', component: DetailNew },
  { path: '/order-for-kitchen-detailc/:id/:id', component: DetailComplete },
  { path: '/order-for-kitchen-accomplished/:id/:id', component: Accomplished },
  //==========================Order Service
  { path: '/order-for-service', component: ServiceMain },
  { path: '/detail-waiting/:id/:id', component: DetailService },
  { path: '/detail-serviced/:id/:id', component: DetailServed },
  //==========================create account
  { path: '/account', component: Account },
  { path: '/create-account', component: CreateAccount },
];

export { publicRoutes };
