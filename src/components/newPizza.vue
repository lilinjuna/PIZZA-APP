<template>
    <form>
        <h3 class="text-muted my-5">添加新披萨</h3>
        <div class="form-group row">
            <label for=""  class="col-sm-1">名称</label>
            <div class= "col-sm-11">
                <input class="form-control" v-model="newPizza.name">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-1">描述</label>
            <div class="col-sm-11">
                <textarea v-model="newPizza.description" rows="5" class="form-control" ></textarea>
            </div>
        </div>
        <p><strong>选项1:</strong></p>
        <div class="form-group row">
            <label for=""  class="col-sm-1">尺寸</label>
            <div class= "col-sm-11">
                <input class="form-control" v-model="newPizza.size1">
            </div>
        </div>
        <div class="form-group row">
            <label for=""  class="col-sm-1">价格</label>
            <div class= "col-sm-11">
                <input class="form-control" v-model="newPizza.price1">
            </div>
        </div>
        <p><strong>选项2:</strong></p>
        <div class="form-group row">
            <label for=""  class="col-sm-1">尺寸</label>
            <div class= "col-sm-11">
                <input class="form-control" v-model="newPizza.size2">
            </div>
        </div>
        <div class="form-group row">
            <label for=""  class="col-sm-1">价格</label>
            <div class= "col-sm-11">
                <input class="form-control" v-model="newPizza.price2">
            </div>
        </div>
        <div class="form-group row">
            <button @click="addMenuItem" type="button" class="btn btn-success btn-block">添加</button>
        </div>
    </form>
</template>
<script>

import axios from 'axios'
export default {
    data (){
        return {
            newPizza: {}
        }
    },
    methods: {
        addMenuItem() {
            // console.log(this.newPizza)
            let data = {
                name: this.newPizza.name,
                description: this.description,
                option: [{
                    size: this.newPizza.size1,
                    price: this.newPizza.price1
                },
                {
                    size: this.newPizza.size2,
                    price: this.newPizza.price2
                }]
            }
            //axios  fetch
            // fetch("https://wd1695319840sjftof.wilddogio.com/menu.json",{
            //     method: 'POST',
            //     headers: {
            //         "Content-type": "application/json"
            //     },
            //     body: JSON.stringify(data)
            // })
            // .then( res => 
            //     // console.log(res)
            //     res.json()
            // )
            // .then( data => this.$router.push({name:"menuLink"}) )
            // .catch( err => console.log(err) )

            axios.post("/menu.json",data)
                // .then( res => this.$router.push ({name: "menuLink"}))
                .then( res => {
                    this.$store.commit("pushToMenuItems",data)
                })

        }
    }
}
</script>