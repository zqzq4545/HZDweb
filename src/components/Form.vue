<template>
  <div>
    <a-affix :offset-top="bottom">
      <div  class="form" >
           <a-form :label-col="{ span: 10 }" :wrapper-col="{ span: 12 }">
             <a-form-item label="姓名" >
               <a-input v-model="form.studentName"> </a-input>
             </a-form-item>
             <a-form-item label="手机号码">
               <a-input v-model="form.studentPhone"> </a-input>
             </a-form-item>
             <a-form-item label="年龄">
               <a-input-number v-model="form.studentGrade"> </a-input-number>
             </a-form-item>
             <a-form-item label="验证码">
               <a-input > </a-input>
             </a-form-item>
             <a-form-item :wrapper-col="{ span: 10, offset: 12 }">
               <a-button @click="handleOk" type="primary" >
                 确定
               </a-button>
             </a-form-item>
           </a-form>
      </div>
    </a-affix>
  </div>
</template>

<script>
import { getVerificationCode } from "@/api/index"

export default {
  name: "Form",
  data(){
    return{
      bottom:10,
      form:{
        studentName:"",
        studentPhone:"",
        studentGrade:0,
      }
    }
  },
  methods:{
    handleOk(){

      console.log('1111',this.form.studentPhone)
      let phone = this.form.studentPhone
      getVerificationCode(phone).then(res => {
        console.log(res);
      })
    }
  }


}
</script>

<style scoped>
.form{
  position: absolute;
  width: 15%;
  background-color: #f9f9;
  z-index: 2;
}


</style>
