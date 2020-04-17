<template>
  <div class="flex flex-col justify-center">
    <div @click="printSelectionButton" class="flex items-center mb-2 cursor-pointer">
      <div ref="printSelectionButton" class="printSelectionButton flex items-center bg-indigo-2 rounded-full w-8 mr-3">
        <div id="selection" class="flex justify-center items-center w-4 h-4 p-1 ml-4 bg-indigo-500 text-white-100 rounded-full transition-250">
          <svg id="activated" class="text-white-100 fill-current h-full" viewBox="0 0 99.97 113.01"><path d="M99.52-4.13l-.62-.24c-4.12-1.44-8.23.47-9.67,1.14-5.08,2.35-8.5,8-12.61,15.19S70.34,23,67.2,29.2c-4.35,8.62-7.61,15.1-11.39,24.38-3.94,9.67-6,16.38-6.46,17.92-1.62,5.36-2.76,10-3.55,13.6a58.68,58.68,0,0,0-8.37-7.8c-3.84-2.94-10.91-8.22-21.38-10.18a45,45,0,0,0-16-.06l-.47.47A166.61,166.61,0,0,1,24.61,89.12a165.32,165.32,0,0,1,14.71,17.8A2.83,2.83,0,0,0,42.43,108l12-3.5A5.64,5.64,0,0,0,58.17,101q8.36-23.86,18.09-48.89Q87.69,22.73,99.52-4.13Z" transform="translate(0.46 4.89)"/><path d="M113.62,72.34" transform="translate(0.46 4.89)"/><path d="M42.23,39.23" transform="translate(0.46 4.89)"/></svg>
          <svg id="deactivated" class="hidden text-white-100 fill-current h-full" viewBox="0 0 113.39 113.39"><path d="M114.08,77.23" transform="translate(3.44 0.58)"/><path d="M42.69,44.12" transform="translate(3.44 0.58)"/><path d="M53.25,112.81A56.7,56.7,0,1,1,110,56.12,56.75,56.75,0,0,1,53.25,112.81Zm0-99.36A42.67,42.67,0,1,0,95.92,56.12,42.72,42.72,0,0,0,53.25,13.45Z" transform="translate(3.44 0.58)"/></svg>
        </div>
      </div>

      <div class="strong title-12 text-black-100">Print</div>
    </div>

    <div @click="eBookSelectionButton" class="flex items-center cursor-pointer">
      <div ref="eBookSelectionButton" class="eBookSelectionButton flex items-center bg-indigo-2 rounded-full w-8 mr-3">
        <div id="selection" class="flex justify-center items-center w-4 h-4 p-1 ml-4 bg-indigo-500 text-white-100 rounded-full transition-250">
          <svg id="activated" class="text-white-100 fill-current h-full" viewBox="0 0 99.97 113.01"><path d="M99.52-4.13l-.62-.24c-4.12-1.44-8.23.47-9.67,1.14-5.08,2.35-8.5,8-12.61,15.19S70.34,23,67.2,29.2c-4.35,8.62-7.61,15.1-11.39,24.38-3.94,9.67-6,16.38-6.46,17.92-1.62,5.36-2.76,10-3.55,13.6a58.68,58.68,0,0,0-8.37-7.8c-3.84-2.94-10.91-8.22-21.38-10.18a45,45,0,0,0-16-.06l-.47.47A166.61,166.61,0,0,1,24.61,89.12a165.32,165.32,0,0,1,14.71,17.8A2.83,2.83,0,0,0,42.43,108l12-3.5A5.64,5.64,0,0,0,58.17,101q8.36-23.86,18.09-48.89Q87.69,22.73,99.52-4.13Z" transform="translate(0.46 4.89)"/><path d="M113.62,72.34" transform="translate(0.46 4.89)"/><path d="M42.23,39.23" transform="translate(0.46 4.89)"/></svg>
          <svg id="deactivated" class="hidden text-white-100 fill-current h-full" viewBox="0 0 113.39 113.39"><path d="M114.08,77.23" transform="translate(3.44 0.58)"/><path d="M42.69,44.12" transform="translate(3.44 0.58)"/><path d="M53.25,112.81A56.7,56.7,0,1,1,110,56.12,56.75,56.75,0,0,1,53.25,112.81Zm0-99.36A42.67,42.67,0,1,0,95.92,56.12,42.72,42.72,0,0,0,53.25,13.45Z" transform="translate(3.44 0.58)"/></svg>
        </div>
      </div>

      <div class="strong title-12 text-black-100">eBook</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    printSelectionButton() {
      this.$refs.printSelectionButton.classList.toggle('deactivated')
    },

    eBookSelectionButton() {
      this.$refs.eBookSelectionButton.classList.toggle('deactivated')
    }
  }
}
</script>

<style lang="scss">
  .printSelectionButton, .eBookSelectionButton {
    &.deactivated {
      @apply bg-gray-10;

      #selection { @apply ml-0 bg-gray-700; }
      #activated { @apply hidden opacity-0; }
      #deactivated { @apply block; }
    }
  }
</style>
