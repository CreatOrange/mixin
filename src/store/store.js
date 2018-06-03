import vue from 'vue';
import vuex from 'vuex';
import axios from 'axios'
vue.use(vuex);

var store = new vuex.Store({
	state : {
		password : ''
	},
	actions : {
		action_pw(context,payload){
			var pw = ''
			axios.get('/set_a_mima').then((res)=>{
			    console.log(res.data.mima)
			    pw = res.data.mima
			    context.commit('CHANGE_PASSWORD',pw);
			},(err)=>{});
		}
	},
	mutations : {
		CHANGE_PASSWORD(state,payload){
			state.password = payload;
		}
	}
});

export default store;