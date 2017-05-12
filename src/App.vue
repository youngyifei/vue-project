<template>
  <div id="app">
    <loading v-model="isLoading"></loading>
    <router-view></router-view>
    <app-tabbar></app-tabbar>
  </div>
</template>

<script>
import appTabbar from './components/AppTabbar'
import { mapState } from 'vuex'
import { Loading } from 'vux'
export default {
  name: 'app',
  components: {
    appTabbar,
    Loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading
    })
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
