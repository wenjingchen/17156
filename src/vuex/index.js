import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import tourDetails from "../pages/tourDetails/module.js"
import onedayTour from "../pages/onedayTour/module.js"
import home from "../pages/home/module"
import search from "../pages/search/module"
import city from "../pages/city/module"
import viewList from "../pages/viewList/module"

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		swiperInfo: [],
		IcoSwiperInfo: [],
		HotRecommend: [],
		Weekend: []
	},
	actions: {
		getInfo(context) {
			axios.get('/static/index.json')
				.then((response) => {
					if (response.status === 200) {
						const {data} = response.data;
						context.commit("changeInfo",data)
					}
				})
		}
	},
	mutations: {
		changeInfo(state, data) {
			state.swiperInfo = data.swiperInfo;
			state.IcoSwiperInfo = data.IcoSwiperInfo;
			state.HotRecommend = data.HotRecommend;
			state.Weekend = data.Weekend;
		}
		
	},
	getters: {},

	modules:{
		home: home,
		onedayTour: onedayTour,
		tourDetails: tourDetails,
		search: search,
		city: city,
		viewList: viewList
	}
})

