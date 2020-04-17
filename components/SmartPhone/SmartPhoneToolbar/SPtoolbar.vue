<template>
  <div class="fixed bottom-0 flex justify-between w-full transition-250"
    :class="[ toolbarSmartPhoneOpen ? 'h-full' : 'h-16' ]"
  >
    <div class="bg-indigo-550 w-12 h-12 rounded-xl m-2"></div>
    <div class="bg-indigo-550 w-12 h-12 rounded-xl m-2"></div>

    <nuxt-link :to="shoppingCartRoute">
      <div v-if="shoppingCartRoute === '/'"
           @click="openShoppingCart"
           class="flex justify-center items-center bg-indigo-550 shadow-lg text-white-100 w-12 h-12 rounded-xl m-2"
      >
        <svg class="h-6 fill-current" viewBox="0 0 170.67 201.39"><path d="M129.41,24.88a29,29,0,0,0-52.16-13,3.41,3.41,0,1,0,5.51,4,22.19,22.19,0,0,1,39.89,9.91A3.43,3.43,0,0,0,126,28.78l.49,0A3.42,3.42,0,0,0,129.41,24.88Z" transform="translate(-15.36 0)"/><path d="M178.71,63.1,168.47,46a3.41,3.41,0,0,0-2.93-1.66h-9.81a3.42,3.42,0,0,0,0,6.83h7.88l6.15,10.24H31.63L37.77,51.2h3.62a3.42,3.42,0,0,0,0-6.83H35.84A3.42,3.42,0,0,0,32.91,46L22.67,63.1a3.42,3.42,0,0,0,2.93,5.17H175.79a3.41,3.41,0,0,0,2.92-5.17Z" transform="translate(-15.36 0)"/><path d="M161.7,31.62a3.38,3.38,0,0,0-2.13-1.52L113,19.22a3.4,3.4,0,0,0-2.58.42,3.46,3.46,0,0,0-1.52,2.12l-3.51,15a3.41,3.41,0,0,0,6.65,1.55l2.73-11.67L154.7,36l-6.27,26.79a3.41,3.41,0,0,0,2.54,4.1,3.61,3.61,0,0,0,.79.09,3.39,3.39,0,0,0,3.31-2.63l7.05-30.12A3.39,3.39,0,0,0,161.7,31.62Z" transform="translate(-15.36 0)"/><path d="M102.5,39.69l-3.11-26.3a3.43,3.43,0,0,0-1.28-2.28,3.39,3.39,0,0,0-2.51-.71L38.51,17.14a3.43,3.43,0,0,0-3,3.8L40.7,64.81a3.41,3.41,0,0,0,3.39,3l.41,0a3.41,3.41,0,0,0,3-3.79L42.7,23.52,93,17.58l2.71,22.91a3.41,3.41,0,0,0,6.78-.8Z" transform="translate(-15.36 0)"/><path d="M129.49,63.56l-6.77-28.18a3.42,3.42,0,0,0-4.12-2.52l-55,13.23a3.41,3.41,0,0,0-2.52,4.11l3.39,14.09a3.41,3.41,0,1,0,6.63-1.6L68.53,51.93,116.88,40.3l6,24.85a3.42,3.42,0,0,0,3.32,2.62,3.19,3.19,0,0,0,.8-.1A3.41,3.41,0,0,0,129.49,63.56Z" transform="translate(-15.36 0)"/><path d="M179.2,64.68a3.41,3.41,0,0,0-3.41-3.24H25.6a3.41,3.41,0,0,0-3.41,3.24L15.36,197.8a3.43,3.43,0,0,0,3.41,3.59H182.61A3.42,3.42,0,0,0,186,197.8ZM22.36,194.56,28.84,68.27h143.7L179,194.56Z" transform="translate(-15.36 0)"/><path d="M126.29,75.09a10.24,10.24,0,1,0,10.24,10.24A10.25,10.25,0,0,0,126.29,75.09Zm0,13.66a3.42,3.42,0,1,1,3.42-3.42A3.42,3.42,0,0,1,126.29,88.75Z" transform="translate(-15.36 0)"/><path d="M75.09,75.09A10.24,10.24,0,1,0,85.33,85.33,10.25,10.25,0,0,0,75.09,75.09Zm0,13.66a3.42,3.42,0,1,1,3.42-3.42A3.42,3.42,0,0,1,75.09,88.75Z" transform="translate(-15.36 0)"/><path d="M126.29,85.33H126a3.41,3.41,0,0,0-3.41,3.42,3.37,3.37,0,0,0,.26,1.31v17.46a22.19,22.19,0,1,1-44.37,0V88.75a3.42,3.42,0,1,0-6.83,0v18.77a29,29,0,0,0,58,0V88.75A3.42,3.42,0,0,0,126.29,85.33Z" transform="translate(-15.36 0)"/></svg>
      </div>

      <transition name="fade" appear enter-active-class="transition-500 transition-delay-500">
        <div v-if="shoppingCartRoute === '/warenkorb'"
             @click="openShoppingCart"
             class="flex justify-center items-center bg-indigo-800 shadow-lg text-white-100 w-12 h-12 rounded-xl m-2"
        >
          <svg class="h-6 fill-current" viewBox="0 0 237.35 232.68"><path d="M1.49,224a5.06,5.06,0,0,0,3.59,8.65,5,5,0,0,0,3.58-1.48L231.16,8.67a5.07,5.07,0,0,0,0-7.17h0a5.08,5.08,0,0,0-7.18,0Z"/><path d="M13.33,1.49A5.06,5.06,0,0,0,4.68,5.08,5,5,0,0,0,6.16,8.66l222.53,222.5a5.07,5.07,0,0,0,7.17,0h0a5.06,5.06,0,0,0,0-7.18Z"/></svg>
        </div>
      </transition>
    </nuxt-link>

  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      shoppingCartOpen: false,
      toolbarSmartPhoneOpen: false,
    }
  },

  mounted() {
    this.$root.$on('toolbarSmartPhoneOpen', () => {
      this.openToolbarSmartPhone()
    })
  },

  computed: {
    shoppingCartRoute() {
      if (this.shoppingCartOpen) {
        return  "/warenkorb"
      } else {
        return "/"
      }
    },
  },

  methods: {
    openShoppingCart() {
      this.shoppingCartOpen = !this.shoppingCartOpen
    },



    openToolbarSmartPhone() {
      this.toolbarSmartPhoneOpen = !this.toolbarSmartPhoneOpen
    },
  }
}
</script>

