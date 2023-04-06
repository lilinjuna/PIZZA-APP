<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>换身份</h1>
        <button @click="goToMenu" class="btn btn-success">let's order</button>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goToMenu() {
      //跳转到上次浏览的页面
      // this.$router.go(-1);
      this.$router.replace("/menu");
    }
  }
};
</script>
<style>
#home {
  height: 85vh;
  padding: 10%;
}
h1{
  margin: 6%;
}
.background{
  background-color: #eee;
  opacity: .8;
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 0;

}
</style>

