<template>
  <div >
    <a-row class="bottom" :span="24">
      <a-col :span="4">
         <p>鸿志达学校</p>
        <p>培养考生自律、提升高考成绩的黄埔军校</p>
      </a-col>
      <a-col :span="6">
      <p>地址</p>
        <p>天津市河西区平山道16号增6号(天津市实验中学对面)</p>
      </a-col>
      <a-col :span="4">
        <img src="@/assets/image/QRcode/test.png">
      </a-col>
      <a-col :span="4">
        <img src="@/assets/image/QRcode/test.png">
      </a-col>
    </a-row>
    <a-row class="statement">
      <a-col :span="24">
        <a href="#">首页</a>
        <a-divider type="vertical" />
        <a href="#">加入我们</a>
        <a-divider type="vertical" />
        <a href="#">合作共赢</a>
        <a-divider type="vertical" />
        <a href="#">联系我们</a>
        <a-divider type="vertical" />
        <a href="#">版权声明</a>
        <a-divider type="vertical" />
        <a href="#">营业执照</a>
        <a-divider type="vertical" />
        <a href="#">教师资格证公示</a>
        <a-divider type="vertical" />
        <a href="#">意见反馈</a>
      </a-col>
      <a-col :span="24">
        <p>备案号：··································</p>
      </a-col>

    </a-row>
  </div>
</template>

<script>
export default {
name: "Bottom"
}
</script>

<style scoped>
.bottom{
  position: relative;
  width: 100%;
  padding: 30px 15%;
  background-color: #242440;
  color: white;

}
.statement{
  width: 100%;
  padding: 30px 15%;
  text-align: center;
  background-color: #242440;
  color: #f9f9f9;
}
.statement a{
color: #f9f9f9;
}

</style>
