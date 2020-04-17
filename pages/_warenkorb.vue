<template>
  <div>
    <SPshoppingCart/>
  </div>
</template>

<script>
import SPshoppingCart from "../components/SmartPhone/SmartPhoneShoppingCart/SPshoppingCart";

export default {
  transition: {
    name: 'fade',
  },

  components: {
    SPshoppingCart
  },
}
</script>
