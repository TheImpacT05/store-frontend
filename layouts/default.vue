<template>
  <div>
    <Header/>

    <nuxt />

    <ToolbarSmartPhone/>
  </div>
</template>

<script>
import Header from './header.vue'
import ToolbarSmartPhone from "../components/SmartPhone/SmartPhoneToolbar/SPtoolbar";

export default {
  components: {
    Header,
    ToolbarSmartPhone,
  }
}
</script>
