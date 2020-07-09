<template>
  <div class="edit container">
      <Alert v-if="alert" :message="alert"></Alert>
      <h1 class="page-header">编辑用户信息</h1>
      <form v-on:submit="updateCustomer">
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
          <button type="submit" class="btn btn-primary">更新</button>
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
    fetchCustomer(id){
        this.$http.get("http://localhost:3000/users/"+id).then(function(response){
            this.customer=response.body;
        })
    },
    updateCustomer(e){
      console.log("111");
      if(!this.customer.name||!this.customer.phone||!this.customer.email){
        //console.log("请添加对应信息")
        this.alert="请添加对应信息"
      }else{
        let updateCustomer={
          name:this.customer.name,
          phone:this.customer.phone,
          email:this.customer.email,
          age:this.customer.age,
          companyId:this.customer.companyId,
          introduction:this.customer.introduction
        }
        this.$http.put("http://localhost:3000/users/"+this.$route.params.id,updateCustomer).then(function(response){
          console.log(response);
          this.$router.push({path:"/",query:{alert:"用户信息更新成功"}});
        })
        e.preventDefault();
      }
      e.preventDefault();
    }
  },
  created() {
      this.fetchCustomer(this.$route.params.id);
  },
  components:{
    Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
