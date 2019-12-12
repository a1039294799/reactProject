import React from 'react';
import { Menu } from 'element-react';
import './Left.scss'

class Left extends React.Component{
	constructor(props){
		super(props)
	}
	onOpen(){

	}
	onClose(){

	}
	onSelect(index){
		if(index==='1-1'){
			this.props.history.push('/userManagement')
		}
	}
	render() {
		console.log(this.props)
        return (
        	<div className="Left">
				<div className="dv-wrap">
					<Menu defaultActive="2" className="el-menu-vertical-demo" onSelect={this.onSelect.bind(this)} onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)} theme="dark">
				        <Menu.SubMenu index="1" title="权限管理">
				            <Menu.Item index="1-1">用户管理</Menu.Item>
				            <Menu.Item index="1-2">角色管理</Menu.Item>
				        </Menu.SubMenu>
				        <Menu.Item index="2">导航二</Menu.Item>
				        <Menu.Item index="3">导航三</Menu.Item>
				    </Menu>
			    </div>
        	</div>
        	
        )
    }

}
export default Left