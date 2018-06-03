import vue from 'vue';
import vuex from 'vuex';
import axios from 'axios'
vue.use(vuex);

var store = new vuex.Store({
	state : {
		password : '1254'
	},
	actions : {
		action_pw(context,payload){
			var pw = ''
			axios.get('/x/web-interface/ranking/region?rid=1&day=7&jsonp=jsonp').then((res)=>{

			  console.log(res)
			},(err)=>{});
			axios.get('http://45.32.51.110:1234/set_a_mima').then((res)=>{
			    console.log(res)
			    pw = res.mima
			},(err)=>{});		
			console.log(1)	
			axios.get('/set_a_mima').then((res)=>{
			    console.log(res)
			    pw = res.mima
			},(err)=>{});
			context.commit('CHANGE_PASSWORD',pw);
		}
	},
	mutations : {
		CHANGE_PASSWORD(state,payload){
			state.password = payload;
		}
	}
});

export default store;