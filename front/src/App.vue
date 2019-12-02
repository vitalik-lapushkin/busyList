<template>
  <div>
    <h1>{{process.env.VUE_APP_NAME || getMessageByKey('defaultName')}}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import messageMixin from './mixins/messageMixin';

export default {
  name: 'App',

  mixins: [ messageMixin ],

}
</script>

<style lang="scss">
  @import "scss/main";
</style>
