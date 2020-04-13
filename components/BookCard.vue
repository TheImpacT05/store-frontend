<template>
  <div class="flex flex-col w-70">
      <BookCardCover/>

      <div class="h-full flex flex-col justify-between bg-white-100 rounded-xl p-3 shadow-md z-1">
        <div class="font-light">
          <div class="font-normal title-12">
            Das Rechnungswesen der Unternehmung, Bundle
          </div>

          <div class="title-11">
            Theorie & Aufgaben, inkl. digitaler Lösungen
          </div>

          <div class="flex items-center title-10 mt-1 py-2 border-t border-b border-dashed border-gray-200">
            <div class="bg-gray-10 px-1 rounded-xs strong">2020</div>
            <div class="ml-3">Verlag SKV</div>
          </div>
        </div>

        <div class="flex mt-4">
          <div class="flex justify-center items-center text-white-100 mr-6">
            <div class="py-2 px-4 title-8 font-light bg-indigo-600 rounded shadow-md z-1">
              <div class="tracking-wide text-center">Preis</div>

              <div>
                <span>CHF</span>
                <span class="title-13 font-normal">52.3</span>
              </div>
            </div>

            <div class="title-8 shadow-md py-1 px-4 -ml-1 bg-indigo-500 rounded-r z-0">
              <div class="tracking-wide font-light text-center">Rabatt</div>

              <div>
                <span class="font-light ">%</span>
                <span class="title-12 font-normal">12.5</span>
              </div>
            </div>
          </div>

          <BookCardProductTypeSelection />
        </div>

        <div class="flex mt-6">
          <div class="w-1/2 flex justify-center items-center py-1 rounded-full px-4 mr-2 border border-indigo-700 bg-white-100 text-indigo-700">
            <div class="title-12">Zum Produkt</div>
          </div>

          <div class="w-1/2 flex justify-center items-center py-1 rounded-full px-4 ml-2 bg-indigo-600 hover:bg-indigo-550 text-white-100 cursor-pointer transition-150">
<!--            <svg class="h-4 fill-current mr-2" viewBox="0 0 170.67 201.39"><path d="M129.41,24.88a29,29,0,0,0-52.16-13,3.41,3.41,0,1,0,5.51,4,22.19,22.19,0,0,1,39.89,9.91A3.43,3.43,0,0,0,126,28.78l.49,0A3.42,3.42,0,0,0,129.41,24.88Z" transform="translate(-15.36 0)"/><path d="M178.71,63.1,168.47,46a3.41,3.41,0,0,0-2.93-1.66h-9.81a3.42,3.42,0,0,0,0,6.83h7.88l6.15,10.24H31.63L37.77,51.2h3.62a3.42,3.42,0,0,0,0-6.83H35.84A3.42,3.42,0,0,0,32.91,46L22.67,63.1a3.42,3.42,0,0,0,2.93,5.17H175.79a3.41,3.41,0,0,0,2.92-5.17Z" transform="translate(-15.36 0)"/><path d="M161.7,31.62a3.38,3.38,0,0,0-2.13-1.52L113,19.22a3.4,3.4,0,0,0-2.58.42,3.46,3.46,0,0,0-1.52,2.12l-3.51,15a3.41,3.41,0,0,0,6.65,1.55l2.73-11.67L154.7,36l-6.27,26.79a3.41,3.41,0,0,0,2.54,4.1,3.61,3.61,0,0,0,.79.09,3.39,3.39,0,0,0,3.31-2.63l7.05-30.12A3.39,3.39,0,0,0,161.7,31.62Z" transform="translate(-15.36 0)"/><path d="M102.5,39.69l-3.11-26.3a3.43,3.43,0,0,0-1.28-2.28,3.39,3.39,0,0,0-2.51-.71L38.51,17.14a3.43,3.43,0,0,0-3,3.8L40.7,64.81a3.41,3.41,0,0,0,3.39,3l.41,0a3.41,3.41,0,0,0,3-3.79L42.7,23.52,93,17.58l2.71,22.91a3.41,3.41,0,0,0,6.78-.8Z" transform="translate(-15.36 0)"/><path d="M129.49,63.56l-6.77-28.18a3.42,3.42,0,0,0-4.12-2.52l-55,13.23a3.41,3.41,0,0,0-2.52,4.11l3.39,14.09a3.41,3.41,0,1,0,6.63-1.6L68.53,51.93,116.88,40.3l6,24.85a3.42,3.42,0,0,0,3.32,2.62,3.19,3.19,0,0,0,.8-.1A3.41,3.41,0,0,0,129.49,63.56Z" transform="translate(-15.36 0)"/><path d="M179.2,64.68a3.41,3.41,0,0,0-3.41-3.24H25.6a3.41,3.41,0,0,0-3.41,3.24L15.36,197.8a3.43,3.43,0,0,0,3.41,3.59H182.61A3.42,3.42,0,0,0,186,197.8ZM22.36,194.56,28.84,68.27h143.7L179,194.56Z" transform="translate(-15.36 0)"/><path d="M126.29,75.09a10.24,10.24,0,1,0,10.24,10.24A10.25,10.25,0,0,0,126.29,75.09Zm0,13.66a3.42,3.42,0,1,1,3.42-3.42A3.42,3.42,0,0,1,126.29,88.75Z" transform="translate(-15.36 0)"/><path d="M75.09,75.09A10.24,10.24,0,1,0,85.33,85.33,10.25,10.25,0,0,0,75.09,75.09Zm0,13.66a3.42,3.42,0,1,1,3.42-3.42A3.42,3.42,0,0,1,75.09,88.75Z" transform="translate(-15.36 0)"/><path d="M126.29,85.33H126a3.41,3.41,0,0,0-3.41,3.42,3.37,3.37,0,0,0,.26,1.31v17.46a22.19,22.19,0,1,1-44.37,0V88.75a3.42,3.42,0,1,0-6.83,0v18.77a29,29,0,0,0,58,0V88.75A3.42,3.42,0,0,0,126.29,85.33Z" transform="translate(-15.36 0)"/></svg>-->

            <div class="title-12">In Warenkorb</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import BookCardCover from '../components/BookCardCover.vue'
import BookCardProductTypeSelection from '../components/BookCardProductTypeSelection.vue'

export default {
  components: {
    BookCardCover,
    BookCardProductTypeSelection,
  },
}
</script>
