<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!-- new pizza -->
      <newPizza></newPizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 品种展示 -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItem" :key="item.key">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import newPizza from "./newPizza";
// import { constants } from "fs";
export default {
  data() {
    return {
      // getMenuItem: []
    };
  },
  components: {
    newPizza
  },
  computed:{
    getMenuItem: {
      get (){
        return this.$store.state.menuItems
      },
      set() {

      }
      
    }
  },
  // watch: {
  //   getMenuItem() {
  //     return this.$store.state.menuItems
  //   }
  // },
  created() {
    fetch("https://wd1695319840sjftof.wilddogio.com/menu.json")
      .then(res => {
        return res.json()
      })
      .then(data => 
        // console.log(data)
        {
          let menuArray = []
          for (let key in data) {
            // console.log(key)
            data[key].id = key
            menuArray.push(data[key])
          }
          //数据同步
          this.$store.commit('setMenuItems',menuArray)
          // this.getMenuItem = menuArray
        }
      )
  },
  methods:{
    deleteData(item) {
      fetch("https://wd1695319840sjftof.wilddogio.com/menu/"+ item.id + "/.json",{
        method: "DELETE",
        headers: {
          'Content-type': 'application/json'
        },
      })
      .then(res => res.json())
      // .then(data => this.$router.push({name: "menuLink"}))
      .then(data => {
        this.$store.commit("removeMenuItems",item)
      })
      .catch(err => console.log(err))
    }
  }

  // beforeRouteEnter(to, from, next) {
  //   // alert("hello" + this.name);
  //   //vm异步使用
  //   next(vm =>{
  //     alert("hello" + this.name);
  //   });
  // }

  // beforeRouteLeave (to, from, next) {
  //   if(confirm('确定离开？') == true){
  //     next();
  //   }else{
  //     next(false);
  //   }
  // }
};
</script>

