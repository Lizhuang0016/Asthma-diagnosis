<template>
  <div class="Add container">
    <Alert v-if="alert" :message="alert"></Alert>
      <h1 class="page-header">添加用户</h1>
      <form v-on:submit="addCustomer">
        <div class="well">  
          <h4>用户信息</h4>
          <div>
            <label for="">姓名</label>
            <input type="text" class="form-control" placeholder="name" v-model="customer.name">
          </div>
          <div>
            <label for="">电话</label>
            <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
          </div>
          <div>
            <label for="">邮箱</label>
            <input type="text" class="form-control" placeholder="email" v-model="customer.email">
          </div>
          <div>
            <label for="">年龄</label>
            <input type="text" class="form-control" placeholder="age" v-model="customer.age">
          </div>
          <div>
            <label for="">公司编号</label>
            <input type="text" class="form-control" placeholder="companyId" v-model="customer.companyId">
          </div>
          <div>
            <label for="">个人简介</label>
            <textarea class="form-control" rows="10" v-model="customer.introduction"></textarea>
          </div>
          <br>
          <button type="submit" class="btn btn-primary">添加</button>
        </div>
      </form>
  </div>
</template>

<script>
import Alert from "../example/Alert"
export default {
  name: 'add',
  data () {
    return {
      customer:{},
      alert:""
    }
  },
  methods: {
    addCustomer(e){
      //console.log("111");
      if(!this.customer.name||!this.customer.phone||!this.customer.email){
        //console.log("请添加对应信息")
        this.alert="请添加对应信息"
      }else{
        let newCustomer={
          name:this.customer.name,
          phone:this.customer.phone,
          email:this.customer.email,
          age:this.customer.age,
          companyId:this.customer.companyId,
          introduction:this.customer.introduction
        }
        this.$http.post("http://localhost:3000/users",newCustomer).then(function(response){
          console.log(response);
          this.$router.push({path:"/",query:{alert:"用户信息添加成功!"}});
        })
        e.preventDefault();
      }
      e.preventDefault();
    }
  },
  components:{
    Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
