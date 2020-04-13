<template>
<div>
  <Header />

  <div class="mt-20">
    <div class="flex flex-col items-center px-4 py-4">
      <div class="flex items-center">
        <div class="flex justify-center items-center h-7 w-7 title-10 bg-indigo-550 text-white-100 rounded-full">1.</div>

        <div class="title-11 bg-indigo-1 text-indigo-700 py-1 pl-8 pr-4 -ml-6 rounded-full">
          Rechtswissenschaften
        </div>
      </div>

      <div class="flex flex-col justify-center items-center text-indigo-700 mt-2">
        <svg class="h-1 fill-current" viewBox="0 0 96.88 27.88"><path d="M94.48,20.12,50.08.34,50,.31a2.53,2.53,0,0,0-.36-.12l-.4-.12-.36,0c-.14,0-.28,0-.42,0l-.36,0a3,3,0,0,0-.42.05,3.37,3.37,0,0,0-.34.09l-.42.14-.1,0L2.4,20.14a4,4,0,1,0,3.29,7.39L48.44,8.47l42.75,19a4,4,0,0,0,5.34-2.05h0A4,4,0,0,0,94.48,20.12Z"/></svg>

        <div class="my-1 title-10 bg-indigo-1 py-1 px-4 rounded-full">Medien-, Kommunikations- und Datenschutzrecht</div>

        <svg class="h-1 fill-current rotate-180" viewBox="0 0 96.88 27.88"><title>flat-arrow-top</title><path d="M94.48,20.12,50.08.34,50,.31a2.53,2.53,0,0,0-.36-.12l-.4-.12-.36,0c-.14,0-.28,0-.42,0l-.36,0a3,3,0,0,0-.42.05,3.37,3.37,0,0,0-.34.09l-.42.14-.1,0L2.4,20.14a4,4,0,1,0,3.29,7.39L48.44,8.47l42.75,19a4,4,0,0,0,5.34-2.05h0A4,4,0,0,0,94.48,20.12Z"/></svg>
      </div>
    </div>

    <div class="flickity">
      <no-ssr>
        <Flickity ref="flickity" :options="flickityOptions">
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
        </Flickity>
      </no-ssr>
    </div>
  </div>

  <div class="mt-20">
    <div class="flex flex-col items-center px-4 py-4">
      <div class="flex items-center">
        <div class="flex justify-center items-center h-7 w-7 title-10 bg-indigo-550 text-white-100 rounded-full">2.</div>

        <div class="title-11 bg-indigo-1 text-indigo-700 py-1 pl-8 pr-4 -ml-6 rounded-full">
          Sozialwissenschaften
        </div>
      </div>

      <div class="flex flex-col justify-center items-center mt-2 text-indigo-700">
        <svg class="h-1 fill-current" viewBox="0 0 96.88 27.88"><path d="M94.48,20.12,50.08.34,50,.31a2.53,2.53,0,0,0-.36-.12l-.4-.12-.36,0c-.14,0-.28,0-.42,0l-.36,0a3,3,0,0,0-.42.05,3.37,3.37,0,0,0-.34.09l-.42.14-.1,0L2.4,20.14a4,4,0,1,0,3.29,7.39L48.44,8.47l42.75,19a4,4,0,0,0,5.34-2.05h0A4,4,0,0,0,94.48,20.12Z"/></svg>

        <div class="my-1 title-10 bg-indigo-1 py-1 px-4 rounded-full">Sozialwissenschaften allgemein</div>

        <svg class="h-1 fill-current rotate-180" viewBox="0 0 96.88 27.88"><title>flat-arrow-top</title><path d="M94.48,20.12,50.08.34,50,.31a2.53,2.53,0,0,0-.36-.12l-.4-.12-.36,0c-.14,0-.28,0-.42,0l-.36,0a3,3,0,0,0-.42.05,3.37,3.37,0,0,0-.34.09l-.42.14-.1,0L2.4,20.14a4,4,0,1,0,3.29,7.39L48.44,8.47l42.75,19a4,4,0,0,0,5.34-2.05h0A4,4,0,0,0,94.48,20.12Z"/></svg>
      </div>
    </div>

    <div class="flickity">
      <no-ssr>
        <Flickity ref="flickity" :options="flickityOptions">
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
          <div class="carousel-cell">
            <BookCard />
          </div>
        </Flickity>
      </no-ssr>
    </div>
  </div>

  <ToolbarSmartPhone />
</div>
</template>

<script>
import Header from '~/components/Header.vue'
import BookCard from '~/components/BookCard.vue'
import ToolbarSmartPhone from '~/components/ToolbarSmartPhone.vue'

export default {
  components: {
    Header,
    BookCard,
    ToolbarSmartPhone
  },

  data() {
    return {
      flickityOptions: {
        pageDots: false,
        prevNextButtons: true,
        // fullscreen: true,
        // cellAlign: 'center',
        adaptiveHeight: true,
        // setGallerySize: true,
        accessibility: true,
        draggable: true,
        dragThreshold: 1,
        groupCells: true,
        wrapAround: false,
        freeScroll: true,
        freeScrollFriction: 0.075,
        selectedAttraction: 0.01,
        // friction: 0.15,
      },
    }
  },
}
</script>
