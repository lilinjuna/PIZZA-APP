import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

 const store = new Vuex.Store({
    state:{
        //设置属性
        menuItems:{},
        currentUser: null,
        isLogin: false
    },
    getters:{
        //获取属性状态
        getMenuItem: state => state.menuItems,
        
        currentUser: state=> state.currentUser,
        isLogin: state => state.isLogin
    },
    mutations: {
        // 改变属性
        setMenuItems(state,data) {
            state.menuItems = data
        },
        //更改用户状态信息
        
        userStatus(state, user){
            if (user){
                state.currentUser = user
                state.isLogin = true
            }else {
                state.currentUser = null
                state.isLogin = false
            }
        },
        loginState(state,status){
            state.isLogin = status
        },
        removeMenuItems(state,data){
            state.menuItems.forEach((item,index) => {
                if(item == data){
                    state.menuItems.splice(index,1)
                }
            });
        },
        pushToMenuItems(state,data){
            state.menuItems.push(data)
        }
        
    },
    actions: {
        //应用mutations
        setLogin ({commit},status) {
            commit('loginStatus',status)
        },
        setUser({commit}, user){
            commit("userStatus", user)
        } 
    }
})
export default store