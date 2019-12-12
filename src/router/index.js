import Login from '../components/Login/Login.js';
import Register from '../components/Register/Register.js';
import Outerhomepage from '../components/Outerhomepage/Outerhomepage.js';
import Innerhomepage from '../components/Innerhomepage/Innerhomepage.js';
import UserManagement from '../components/UserManagement/UserManagement.js';
import RoleManagement from '../components/RoleManagement/RoleManagement.js';
export const outerRoutes = [
	{path:'/Outerhomepage',component:Outerhomepage,meta:{showHeader:true}},
	{path:'/Innerhomepage',component:Innerhomepage,meta:{showHeader:false}},
	{path:'/Register',component:Register,meta:{showHeader:true}},
	{path:'/Login',component:Login,meta:{showHeader:true}}
]
export const InnerRoutes = [
	{path:'/UserManagement',component:UserManagement,meta:{showHeader:false}},
	{path:'/RoleManagement',component:RoleManagement,meta:{showHeader:false}},
]
// export default routes;
