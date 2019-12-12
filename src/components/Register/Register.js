import React from 'react';
import './Register.scss';
import { Form,Input,Button,Message } from 'element-react';
import 'element-theme-default';
import { userRegister,userLogin } from '../../api/login.js';
import Header from '../Header/Header.js';

class Register extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			form:{
				name:'',
				password:'',
				confirmPwd:'',

			},
			rules:{
				name:[
					{ required: true, message: '请输入姓名', trigger: 'blur' }
				],
				password:[
					{ required: true, message: '请输入密码', trigger: 'blur' },
					{ 	validator: (rule, value, callback) => {
					        if (value === '') {
					            callback(new Error('请输入密码'));
					        } else {
					            if (this.state.form.confirmPwd !== '') {
					              this.refs.form.validateField('confirmPwd');
					            }
					            callback();
					         }
					    } 
					}
				],
				confirmPwd:[
					{ required: true, message: '请确认密码', trigger: 'blur' },
					{ 	validator: (rule, value, callback) => {
				          	if (value === '') {
				            	callback(new Error('请再次输入密码'));
				          	} else if (value !== this.state.form.password) {
				            	callback(new Error('两次输入密码不一致!'));
				          	} else {
				            	callback();
				          	}
			        	} 
			    	}
				]
			}
		}
	}
	onSubmit(){
		this.refs.form.validate((valid) => {
			if(valid){
				let params = {
					name:this.state.form.name,
					password:this.state.form.password
				}
				userRegister(params).then((data)=>{
					if(data.code===200){
						Message({
						    showClose: true,
						    message: '注册成功',
						    type: 'success'
						});
						this.props.history.push('/login');
					}else{
						Message({
						    showClose: true,
						    message: '注册失败',
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
				<div className="Register">
					<h1>Register页面</h1>
					<div>
						<h3>注册</h3>
						<div>
							<Form ref="form" model={this.state.form} labelWidth="80" rules={this.state.rules}>
						      	<Form.Item label="姓名" prop="name">
						        	<Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')}></Input>
						      	</Form.Item>
						      	<Form.Item label="密码" prop="password">
						        	<Input type="password" value={this.state.form.password} onChange={this.onChange.bind(this, 'password')}></Input>
						      	</Form.Item>
						      	<Form.Item label="确认密码" prop="confirmPwd">
						        	<Input type="password" value={this.state.form.confirmPwd} onChange={this.onChange.bind(this, 'confirmPwd')}></Input>
						      	</Form.Item>
						     	<Form.Item>
						        	<Button type="primary" onClick={this.onSubmit.bind(this)}>立即注册</Button>
						      	</Form.Item>
						    </Form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Register;