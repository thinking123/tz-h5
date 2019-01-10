import Home from '../views/Home'
import PersonCenter from '../views/PersonCenter'
import PrizePage from '../views/PrizePage'
import Register from '../views/Register'
import InvitationCode from '../views/InvitationCode'
import SiteInfo from '../views/SiteInfo'
import Layout from '../components/Layout'

export default [
    {
        path:'/', component:Layout,
        children:[
            {path:'/' , component:Home},
            {path:'/person-center' , component:PersonCenter},
            {path:'/prize-page' , component:PrizePage},
            {path:'/register' , component:Register},
            {path:'/invitation-code' , component:InvitationCode},
            {path:'/site-info' , component:SiteInfo}
        ]
    },

]
