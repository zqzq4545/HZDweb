import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import animated from 'animate.css'
import axios from "axios";
import { Button,Timeline,Icon,Row,Col,Divider,Affix,Form,Input,InputNumber,Carousel,Collapse,Steps,Card } from 'ant-design-vue';
import echarts from "echarts";




Vue.prototype.$echarts = echarts //引入组件

Vue.use(animated);

Vue.component(Button.name, Button);
Vue.component(Timeline.name, Timeline);
Vue.component(Icon.name, Icon);
Vue.component(Timeline.Item.name, Timeline.Item);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Divider.name, Divider);
Vue.component(Affix.name, Affix);
Vue.component(Form.name, Form);
Vue.component(Form.Item.name, Form.Item);
Vue.component(Input.name, Input);
Vue.component(InputNumber.name, InputNumber);
Vue.component(Carousel.name, Carousel);
Vue.component(Collapse.name, Collapse);
Vue.component(Collapse.Panel.name,Collapse.Panel)
Vue.component(Steps.name, Steps);
Vue.component(Steps.Step.name,Steps.Step)
Vue.component(Card.name, Card);
Vue.component(Card.Meta.name, Card.Meta);

Vue.config.productionTip = false

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

axios({
  url:'',
  method:'',
})
