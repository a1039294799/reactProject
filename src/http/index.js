import axios from 'axios';


const service = axios.create({
	baseURL:'http://localhost:9090'
});

service.interceptors.request.use(config=>{
	if(window.sessionStorage.getItem('token')) config.headers['Authorization'] = window.sessionStorage.getItem('token');
	return config;
},error =>{
	return Promise.reject(error);
})

const fetchGet = (url,params) => {
	return new Promise((resolve,reject) => {
		service.get(url,params).then(response => {
			resolve(response.data);
		}).catch(error => {
			reject(error)
		})
	})
}

const fetchPost = (url,params) => {
	return new Promise((resolve,reject) => {
		service.post(url,params).then(response => {
			resolve(response.data);
		}).catch(error => {
			reject(error)
		})
	})
}
export default {
	fetchGet,
	fetchPost,
	service
}