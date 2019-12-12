import React from 'react'
import './Login.scss'
import { Form,Input,Button,Message } from 'element-react';
import 'element-theme-default';
import { userLogin } from '../../api/login.js';
import Header from '../Header/Header.js';

class Login extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			form:{
				username:'',
				password:''
			},
			rules:{
				username:[
					{ required: true, message: '请输入用户名', trigger: 'blur' }
				],
				password:[
					{ required: true, message: '请输入密码', trigger: 'blur' }
				]
			}
		}
	}
	onSubmit(){
		this.refs.form.validate((valid) => {
			if(valid){
				userLogin(this.state.form).then((data)=>{
					if(data.code===200){
						Message({
						    showClose: true,
						    message: '登录成功',
						    type: 'success'
						});
						sessionStorage.username = this.state.form.username;
						this.props.history.push('/Innerhomepage');
					}else{
						Message({
						    showClose: true,
						    message: '登陆失败',
						    type: 'error'
						});
					}
				})
			}
		})
		
	}
	onChange(key,value){
		this.setState({
			form: Object.assign(this.state.form, { [key]: value })
		})
	}
	render(){
		return (
			<div>
				<Header />
				<div className="Login">
					<h1>Login页面</h1>
					<div>
						<h3>登录</h3>
						<div>
							<Form ref="form" model={this.state.form} labelWidth="80" rules={this.state.rules}>
						      	<Form.Item label="姓名" prop="username">
						        	<Input value={this.state.form.username} onChange={this.onChange.bind(this, 'username')}></Input>
						      	</Form.Item>
						      	<Form.Item label="密码" prop="password">
						        	<Input type="password" value={this.state.form.password} onChange={this.onChange.bind(this, 'password')}></Input>
						      	</Form.Item>
						     	<Form.Item>
						        	<Button type="primary" onClick={this.onSubmit.bind(this)}>立即登录</Button>
						      	</Form.Item>
						    </Form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Login;