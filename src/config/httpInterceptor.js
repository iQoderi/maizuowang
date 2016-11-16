/**
 * Created by qoder on 16/11/16.
 */
import Vue from 'vue';
import Resource from 'vue-resource'
import CodeHandle from '../toastHandler';
Vue.use(Resource);

//http拦截器
Vue.http.interceptors.push((request, next)=> {
  request['headers'] = {
    'token':localStorage.getItem('sign.token'),
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };
  next((response)=>{
    if(response.data.code!==0){
      CodeHandle(response.data.code);
    }
    return response;
  });
});
