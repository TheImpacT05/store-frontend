<template>
  <div class="mt-8 mb-12">
    <div class="relative flex title-10 mr-4 ml-6 mb-2">

      <div class="absolute left-0 top-0 w-full h-full flex items-center">
        <transition name="scale-in" appear enter-active-class="transition-500 transition-delay-700">
          <div class="flex justify-center items-center text-gray-300 bg-indigo-550 rounded-full w-6 h-6 p-2 -ml-3">{{ index + 1 }}</div>
        </transition>
      </div>

      <transition name="scale-right" appear enter-active-class="transition-500 transition-delay-800">
        <div class="overflow-hidden w-full">
          <div class="border border-indigo-550 rounded p-2 pl-6">
            <transition name="fade-right" appear enter-active-class="transition-500 transition-delay-900">
              <div>
                <div class="title-9 strong mb-1 text-black-100" style="min-width: 300px">{{ book.title }}</div>

                <div v-if="book.subtitle"
                     class="title-8 mb-1" style="min-width: 300px"
                     v-text="book.subtitle"
                ></div>

                <div class="flex items-center title-8">
                  <div class="mr-2 bg-gray-10 rounded-xs px-1 py-1/2">{{ book.year }}</div>

                  <div class="italic font-light">{{ book.publisher }}</div>

                  <div v-if="book.return_code === 'N'"
                       class="line-through font-light pl-2 ml-2 border-l border-dashed"
                       v-text="`Rückgabe`"
                  ></div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </transition>
    </div>

    <div class="flex mr-4 ml-6">
      <transition name="fade" appear enter-active-class="transition-500 transition-delay-1000">
        <div class="relative w-1/3 max-w-60 rounded-xs overflow-hidden shadow-md">
          <div class="absolute top-0 right-0 p-1 m-1 bg-white-20 rounded-xs flex-center-center">
            <svg class="h-3 text-indigo-55 0 fill-current" viewBox="0 0 439.46 440.33"><path d="M354.06,158A21.27,21.27,0,0,0,339,151.71H7.1a21.33,21.33,0,0,0,0,42.66H288.82L-73,556.19a21,21,0,0,0,0,29.7h0a21,21,0,0,0,29.7,0L317.64,224.94v280a21.33,21.33,0,1,0,42.66,0V173A21.27,21.27,0,0,0,354.06,158Z" transform="translate(79.15 -151.71)"/></svg>
          </div>

          <img src="../../../images/klv2.jpg" alt="Cover" class="w-full">

          <div class="absolute bottom-0 flex flex-col items-center w-full">
            <div class="bg-indigo-550  text-white-100 pt-1 px-2 title-8 text-center rounded-t-xs"
              v-text="`Print & eBook`"
            ></div>

            <div class="bg-indigo-550 h-1 w-full"></div>
          </div>
        </div>
      </transition>

      <transition name="fade" appear enter-active-class="transition-500 transition-delay-1100">
        <div class="w-2/3 md:w-full flex flex-col justify-between m-2">
          <div class="flex items-center justify-between ml-6">
            <div class="w-1/2 flex flex-col justify-center pr-2">
              <div class="strong text-right title-7 text-black-100">Rabatt</div>

              <div class="text-right text-indigo-700">
                <span class="title-5">CHF</span>
                <span class="title-7 strong">7.70</span>
              </div>

              <div class="pb-1 text-right text-indigo-700">
                <span class="strong" style="font-size: 7px">%</span>
                <span class="tracking-wide strong" style="font-size: 11px">12.5</span>
              </div>

              <div class="rounded-b bg-indigo-550" style="height: .125rem"></div>
            </div>

            <div class="w-1/2 flex flex-col justify-center pl-2">
              <div class="strong text-right title-7 text-black-100">Preis</div>

              <div class="text-right">
                <span class="title-5">CHF</span>
                <span class="title-7 line-through">60.0</span>
              </div>

              <div class="pb-1  text-right text-indigo-700">
                <span class="strong" style="font-size: 8px">CHF</span>
                <span class="tracking-wide strong" style="font-size: 12px">52.3</span>
              </div>

              <div class="rounded-b bg-indigo-550" style="height: .125rem"></div>
            </div>
          </div>

          <div class="flex justify-between items-center ml-6">
            <div class="group w-1/2 flex justify-end pr-2">
              <div>
                <div class="flex flex-col items-center px-2 py-1/2 mb-2 bg-indigo-550 group-hover:bg-indigo-650 transition-150 rounded-full">
                  <div class="title-8 strong text-center text-white-100">Prints</div>
                </div>

                <div class="flex justify-center items-center">
                  <svg class="bg-indigo-2 rotate-90 rounded-full text-indigo-700 p-1 fill-current h-6 w-6 opacity-50 hover:opacity-100 transition-150" viewBox="0 0 512.01 277.34"><path d="M505.76,123.59a21.32,21.32,0,0,0-30.17,0L256,343.18,36.42,123.59A21.33,21.33,0,0,0,6.26,153.76L240.92,388.42a21.31,21.31,0,0,0,30.17,0L505.76,153.76A21.32,21.32,0,0,0,505.76,123.59Z" transform="translate(0 -117.34)"/></svg>

                  <div class="px-2 text-indigo-700 title-12 strong">2</div>

                  <svg class="bg-indigo-2 rotate--90 rounded-full text-indigo-700 p-1 fill-current h-6 w-6 opacity-50 hover:opacity-100 transition-150" viewBox="0 0 512.01 277.34"><path d="M505.76,123.59a21.32,21.32,0,0,0-30.17,0L256,343.18,36.42,123.59A21.33,21.33,0,0,0,6.26,153.76L240.92,388.42a21.31,21.31,0,0,0,30.17,0L505.76,153.76A21.32,21.32,0,0,0,505.76,123.59Z" transform="translate(0 -117.34)"/></svg>
                </div>
              </div>
            </div>

            <div class="group w-1/2 flex justify-end pl-2">
              <div>
                <div class="flex flex-col items-center px-2 py-1/2 mb-2 bg-indigo-550 rounded-full bg-indigo-550 group-hover:bg-indigo-650 transition-150">
                  <div class="title-8 strong text-center text-white-100">eBooks</div>
                </div>

                <div class="flex justify-center items-center">
                  <svg class="bg-indigo-2 rotate-90 rounded-full text-indigo-700 p-1 fill-current h-6 w-6 opacity-50 hover:opacity-100 transition-150" viewBox="0 0 512.01 277.34"><path d="M505.76,123.59a21.32,21.32,0,0,0-30.17,0L256,343.18,36.42,123.59A21.33,21.33,0,0,0,6.26,153.76L240.92,388.42a21.31,21.31,0,0,0,30.17,0L505.76,153.76A21.32,21.32,0,0,0,505.76,123.59Z" transform="translate(0 -117.34)"/></svg>

                  <div class="px-2 text-indigo-700 title-12 strong">2</div>

                  <svg class="bg-indigo-2 rotate--90 rounded-full text-indigo-700 p-1 fill-current h-6 w-6 opacity-50 hover:opacity-100 transition-150" viewBox="0 0 512.01 277.34"><path d="M505.76,123.59a21.32,21.32,0,0,0-30.17,0L256,343.18,36.42,123.59A21.33,21.33,0,0,0,6.26,153.76L240.92,388.42a21.31,21.31,0,0,0,30.17,0L505.76,153.76A21.32,21.32,0,0,0,505.76,123.59Z" transform="translate(0 -117.34)"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    book: Object,
    index: Number
  },

  methods: {
    coverPath(book) {
      if (book.vlb_cover) {
        return book.vlb_cover
      }
    }
  }
}
</script>
