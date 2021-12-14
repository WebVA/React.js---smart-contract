// @material-ui/icons
import DashboardIcon from '@material-ui/icons/Dashboard'
import PersonIcon from '@material-ui/icons/Person'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import ForumIcon from '@material-ui/icons/Forum'
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
// core components/views for Admin layout
import { Dashboard } from './pages/Dashboard/Dashboard'
import { Users } from './pages/User/Users'
import { Admins } from './pages/User/Admins'
import { Permissions } from './pages/User/Permissions'
import { SignInLog } from './pages/User/SignInLog'
import { TradeHistory } from './pages/Trade/TradeHistory'
import { OpenOrders } from './pages/Trade/OpenOrders'
import { DepositWithdrawHistory } from './pages/Trade/DepositWithdrawHistory'
import ChatHistory from './pages/Chat/ChatHistory'
import SupportChat from './pages/Chat/SupportChat'
import UserLog from './pages/Log/UserLog'
import Notification from './pages/Notification'
import CryptoDeposit from './pages/Finance/CryptoDeposit'
import FiatDeposit from './pages/Finance/FiatDeposit'
import FiatWithdraw from './pages/Finance/FiatWithdraw'

const dashboardRoutes = [
  {
    path: '/dashboard',
    tabIndex: 0,
    name: 'Dashboard',
    icon: DashboardIcon,
    component: Dashboard,
    layout: '/admin',
  },
  {
    path: '/user/users',
    tabIndex: 1,
    name: 'Users',
    icon: PersonIcon,
    component: Users,
    layout: '/admin',
  },
  {
    path: '/user/admins',
    tabIndex: 1,
    name: 'Admins',
    icon: PersonIcon,
    component: Admins,
    layout: '/admin',
  },
  {
    path: '/user/permissions',
    tabIndex: 1,
    name: 'Permissions',
    icon: PersonIcon,
    component: Permissions,
    layout: '/admin',
  },
  {
    path: '/user/signinlog',
    tabIndex: 1,
    name: 'SignIn Log',
    icon: PersonIcon,
    component: SignInLog,
    layout: '/admin',
  },
  {
    path: '/trade/tradehistory',
    tabIndex: 2,
    name: 'Trade History',
    icon: EqualizerIcon,
    component: TradeHistory,
    layout: '/admin',
  },
  {
    path: '/trade/orderhistory',
    tabIndex: 2,
    name: 'Order History',
    icon: EqualizerIcon,
    component: OpenOrders,
    layout: '/admin',
  },
  {
    path: '/trade/depositwithdrawhistory',
    tabIndex: 2,
    name: 'Deposit/Withdraw History',
    icon: EqualizerIcon,
    component: DepositWithdrawHistory,
    layout: '/admin',
  },
  {
    path: '/finance/fiatdeposit',
    tabIndex: 3,
    name: 'Fiat Deposit',
    icon: EqualizerIcon,
    component: FiatDeposit,
    layout: '/admin',
  },
  {
    path: '/finance/fiatwithdraw',
    tabIndex: 3,
    name: 'Fiat Withdraw',
    icon: EqualizerIcon,
    component: FiatWithdraw,
    layout: '/admin',
  },
  {
    path: '/finance/crypytodeposit',
    tabIndex: 3,
    name: 'Crypto Deposit',
    icon: EqualizerIcon,
    component: CryptoDeposit,
    layout: '/admin',
  },
  // {
  //   path: '/finance/cryptowithdraw',
  //   tabIndex: 3,
  //   name: 'Crypto Withdraw',
  //   icon: EqualizerIcon,
  //   component: CryptoDeposit,
  //   layout: '/admin',
  // },
  {
    path: '/log/user',
    tabIndex: 4,
    name: 'UserLog',
    icon: EqualizerIcon,
    component: UserLog,
    layout: '/admin',
  },
  {
    path: '/chat/live_chat_history',
    tabIndex: 5,
    name: 'Public Chat History',
    icon: ForumIcon,
    component: ChatHistory,
    layout: '/admin',
  },
  {
    path: '/chat/support_chat',
    tabIndex: 5,
    name: 'Support Chat',
    icon: PermPhoneMsgIcon,
    component: SupportChat,
    layout: '/admin',
  },
  {
    path: '/notification',
    tabIndex: 6,
    name: 'Notification',
    icon: NotificationsActiveIcon,
    component: Notification,
    layout: '/admin',
  },
]

export default dashboardRoutes
