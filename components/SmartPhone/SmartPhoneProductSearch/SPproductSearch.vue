<template>
  <div class="flex justify-center">
    <div class="absolute bottom-0 z-100 transition-250"
         :class="{
            'w-12 h-12 m-2' : !searchOpen,
            'w-full h-full m-0' : searchOpen,
            'translate-right-100' : categoriesOpen,
            'translate-left-100' : shoppingCartOpen,
         }"
    >
      <div class="relative w-full h-full shadow-lg bg-indigo-550 transition-250"
           :class="[ searchOpen ? 'rounded-none' : 'rounded-xl' ]"
      >
        <transition name="slide-right-center" enter-active-class="transition-150 transition-delay-100">
          <div v-show="searchOpen">

          </div>
        </transition>

        <div @click="openSearch" class="text-white-100">
          <svg class="w-12 h-12 absolute bottom-0 p-3 fill-current transition-250"
               :class="[ searchOpen ? 'rotate--540 opacity-0' : '' ]"
               viewBox="0 0 446.25 446.25"><path d="M318.75,280.5h-20.4l-7.65-7.65c25.5-28.05,40.8-66.3,40.8-107.1A165.75,165.75,0,1,0,165.75,331.5c40.8,0,79.05-15.3,107.1-40.8l7.65,7.65v20.4L408,446.25,446.25,408Zm-153,0A114.75,114.75,0,1,1,280.5,165.75,114.27,114.27,0,0,1,165.75,280.5Z"/></svg>

          <svg style="backdrop-filter: blur(2px)"
               class="w-12 h-12 absolute bottom-0 p-3 bg-white-30 m-2 rounded-xl fill-current transition-250"
               :class="[ searchOpen ? 'rotate--540 opacity-100' : 'opacity-0' ]"
               viewBox="0 0 237.35 232.68"><path d="M1.49,224a5.06,5.06,0,0,0,3.59,8.65,5,5,0,0,0,3.58-1.48L231.16,8.67a5.07,5.07,0,0,0,0-7.17h0a5.08,5.08,0,0,0-7.18,0Z"/><path d="M13.33,1.49A5.06,5.06,0,0,0,4.68,5.08,5,5,0,0,0,6.16,8.66l222.53,222.5a5.07,5.07,0,0,0,7.17,0h0a5.06,5.06,0,0,0,0-7.18Z"/></svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchOpen: false,
        categoriesOpen: false,
        shoppingCartOpen: false,
      }
    },

    mounted() {
      this.$root.$on('smartPhoneCategoriesOpen', () => {
        this.openCategories()
      })

      this.$root.$on('smartPhoneSearchOpen', () => {
        this.openShoppingCart()
      })
    },

    methods: {
      openSearch() {
        this.searchOpen = !this.searchOpen

        this.$root.$emit('toolbarSmartPhoneOpen')
        this.$root.$emit('smartPhoneSearchOpen')
      },

      openCategories() {
        this.categoriesOpen = !this.categoriesOpen
      },

      openShoppingCart() {
        this.shoppingCartOpen = !this.shoppingCartOpen
      },
    },

  }

</script>

<style lang="scss">
  @import '../../../scss/app';
</style>
