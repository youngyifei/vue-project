<template>
  <div>
    <tabbar>
      <tabbar-item selected link="/">
        
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot>
        
        <span slot="label">订单</span>
      </tabbar-item>
      <tabbar-item link="/component/demo">
        
        <span slot="label">资讯</span>
      </tabbar-item>
      <tabbar-item link="/test" badge="2">
        
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'

export default {
  name: 'app-tabbar',
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  data () {
    return {
      isSelect: true
    }
  }
}
</script>
