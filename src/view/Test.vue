<template>
  <div>
    <group title="cell demo">
      <cell title="Vux" value="Test" is-link></cell>
    </group>
    <group title="cell demo">
      <cell title="Name" :value="name" is-link></cell>
    </group>
    <h4>{{name}}</h4>
    <h4>{{mainGetName}}</h4>
    <h4>{{aGetName}}</h4>
    <h4>company:{{company}}</h4>
    <button @click="changeTestName">change TestName</button>
    <button @click="changeNameByAction">changeNameByAction</button>
    <button @click="changeNameByActionAjax">changeNameByActionAjax</button>
    <button @click="changeNameByNoMap">changeNameByNoMap</button>
    <button @click="getCompanyType">获取机构类型</button>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Group,
    Cell
  },
  computed: {
    ...mapGetters({
      mainGetName: 'getname',
      aGetName: 'a/getnames'
    }),
    name () {
      return this.$store.getters['a/getnames']
    },
    company () {
      return this.$store.state.a.companyType
    }
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  methods: {
    ...mapActions({
      changeNameByAction: 'a/changeName'
    }),
    changeTestName () {
      this.$store.commit('a/changeName') // 提交mutation
    },
    changeNameByNoMap () {
      this.$store.dispatch('a/changeNameByText', 'hehe') // 调用action
    },
    changeNameByActionAjax () {
      this.$store.dispatch('a/ajaxChangeName').then(() => { // 调用异步action
        this.$store.dispatch('a/changeNameByText', 'ajaxsuccess')
      })
    },
    getCompanyType () {
      this.$store.dispatch('a/getCompanyType').then(() => { // 调用异步action
        this.$store.dispatch('a/changeNameByText', 'companyTypeSuccess')
      })
    }
  }
}
</script>

<style scoped>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
