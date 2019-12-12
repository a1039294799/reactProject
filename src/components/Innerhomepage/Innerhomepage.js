import React from 'react';
import { Layout,Table,Button } from 'element-react';
import 'element-theme-default';
import {Link,Router,Route,HashRouter,Switch} from 'react-router-dom';
import {InnerRoutes} from '../../router/index.js';
import Left from '../Left/Left.js';
import './Innerhomepage.scss'


class Innerhomepage extends React.Component{
	constructor(props){
		super(props)
		this.state = {
		    columns: [
		      {
		        label: "用户名",
		        prop: "username",
		        width: 180,
		        render: function(data){
		          return <span>{data.name}</span>;
		        }
		      },
		      {
		        label: "姓名",
		        prop: "name",
		        width: 180
		      },
		      {
		        label: "邮箱",
		        prop: "email"
		      },
		      {
		        label: "联系方式",
		        prop: "contact"
		      },
		      {
		        label: "更新时间",
		        prop: "updateTime"
		      }
		    ],
		    data: [{
		      username:'uatxh992305',
		      name: '王小虎',
		      email:'uatxh992305@ixxxuat.com',
		      contact: '15645456789',
		      updateTime: '2016-05-02',
		    },
		    {
		      username:'uatxh992305',
		      name: '王小虎',
		      email:'uatxh992305@ixxxuat.com',
		      contact: '15645456789',
		      updateTime: '2016-05-02',
		    },
		    {
		      username:'uatxh992305',
		      name: '王小虎',
		      email:'uatxh992305@ixxxuat.com',
		      contact: '15645456789',
		      updateTime: '2016-05-02',
		    },
		    {
		      username:'uatxh992305',
		      name: '王小虎',
		      email:'uatxh992305@ixxxuat.com',
		      contact: '15645456789',
		      updateTime: '2016-05-02',
		    },
		    {
		      username:'uatxh992305',
		      name: '王小虎',
		      email:'uatxh992305@ixxxuat.com',
		      contact: '15645456789',
		      updateTime: '2016-05-02',
		    }]
		}
	}
	render() {
        return (
        	<div className="Innerhomepage">
        		<div>Innerhomepage页面</div>
        		<Layout.Row>
			        <Layout.Col span="24">
			        	<div className="grid-content bg-purple-dark">
							当前用户:{sessionStorage.username}
							<p><Button type="primary">完善信息</Button></p>
			        	</div>
			        </Layout.Col>
			    </Layout.Row>
        		<Layout.Row>
	        		<Layout.Col span={6}>
						<Left {...this.props}/>
					</Layout.Col>
					<Layout.Col span={18}>
						<div>
							<Table style={{width: '100%'}} columns={this.state.columns} data={this.state.data} />
						</div>
					</Layout.Col>
				</Layout.Row>
        	</div>
        	
        )
    }

}




export default Innerhomepage