<template>
  <div>
    <a-affix :offset-top="bottom">
      <div  class="form" >
           <a-form-model :label-col="{ span: 10 }" :wrapper-col="{ span: 12 }" ref="ruleForm"  :model="form" :rules="rules">
             <a-form-model-item label="姓名" >
               <a-input
                   prop="studentName"
                   v-model="form.studentName">
               </a-input>
             </a-form-model-item>
             <a-form-model-item label="手机号码">
               <a-input v-model="form.studentPhone"> </a-input>
             </a-form-model-item>
             <a-form-model-item label="年级">
               <a-select v-model="form.studentGrade" default-value="1">
                 <a-select-option value="1">
                   初一
                 </a-select-option>
                 <a-select-option value="2">
                   初二
                 </a-select-option>
                 <a-select-option value="3">
                  初三
                 </a-select-option>
                 <a-select-option value="4">
                   高一
                 </a-select-option>
                 <a-select-option value="5">
                   高二
                 </a-select-option>
                 <a-select-option value="6">
                   高三
                 </a-select-option>
               </a-select>
             </a-form-model-item>
             <a-form-model-item label="验证码"
                          :validate-status="isError"
                          :help="errorMessage">
               <a-input v-model="inputVCode" > </a-input>
             </a-form-model-item>
             <a-form-model-item :wrapper-col="{ span: 10, offset: 12 }">
               <a-button @click="handleOk" type="primary" :loading="loading">
                 <span v-if="this.loading" >{{this.count}}秒后再次发送</span>
                 <span v-else >发送验证码</span>

               </a-button>
               <a-button @click="handleSaveInfo" type="primary" >
                 确定
               </a-button>
             </a-form-model-item>
           </a-form-model>
      </div>
    </a-affix>
  </div>
</template>

<script>
import { getVerificationCode,saveInfo } from "@/api/index"

export default {
  name: "Form",
  data(){
    return{
      bottom:10,
      form:{
        studentName:"",
        studentPhone:"",
        studentGrade:"6",
      },
      rules: {
        studentName: [{required: true, message: "请输入名字", trigger: "blur"},],

      },
      vCode:"",
      inputNumber:"",
      message:"",
      loading:false,
      count:60,
      inputVCode:"",
      // repeat:false
      isError:"",
      errorMessage:""
    }
  },
  methods:{
    handleOk(){
      let phone = this.form.studentPhone
      this.loading = true
      this.countTime(60)
      getVerificationCode(phone).then(res => {
        if(res.data.code == 0){
          console.log(res);
          this.vCode = res.data.VCode
          this.message = res.data.message
          this.inputNumber = phone
        }
      })




    },
    handleSaveInfo(){

      this.$refs.ruleForm.validate((valid) => {
        if (!valid) {
          return false;
        }
        if(this.form.studentPhone == this.inputNumber && this.vCode == this.inputVCode){
          let data = this.form
          data.studentGrade = Number(data.studentGrade)
          saveInfo(data)
        }else
        {
          this.isError = "error"
          this.errorMessage = "请输入正确的验证码！"
        }
      });

      // if(this.form.studentPhone == this.inputNumber && this.vCode == this.inputVCode){
      //   let data = this.form
      //   data.studentGrade = Number(data.studentGrade)
      //   saveInfo(data)
      // }else
      // {
      //   this.isError = "error"
      //   this.errorMessage = "请输入正确的验证码！"
      // }

    },
    countTime(t){
      if (t > 0){
        setTimeout(()=> {
          t = t - 1
          this.count = t
          this.countTime(t)
        },100);
      }else{
        this.loading = false
      }

    },

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
