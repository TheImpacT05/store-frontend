<template>
  <div style="height: 100vh; width: 100vw">
    <SPshoppingCartHeader/>

    <div class="container-small">
      <div v-for="(book, index) in books">
        <ShoppingCartItem
          :book="book"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SPshoppingCartHeader from "./SPshoppingCartHeader";
import ShoppingCartItem from "./ShoppingCartItem";

export default {
  components: {
    SPshoppingCartHeader,
    ShoppingCartItem,
  },

  data() {
    return {
      books: [
        {
          id: 1,
          title: 'Management - Technische Kaufleute',
          subtitle: 'Theorie & Aufgaben, inkl. digitaler Lösungen',
          vlb_cover: '../../../images/klv.jpg',
          year: 2020,
          publisher: 'KLV Verlag',
          return_code: 'N'
        },
        {
          id: 2,
          title: 'Volkswirtschaft - Technische Kaufleute',
          vlb_cover: '../../../images/klv2.jpg',
          year: 2019,
          publisher: 'KLV Verlag',
          return_code: 'Y'
        },
        {
          id: 3,
          title: 'Finanz- und Rechnungswesen - Technische Kaufleute',
          vlb_cover: '../../../images/klv3.jpg',
          year: 2019,
          publisher: 'KLV Verlag',
          return_code: 'Y'
        },
        {
          id: 4,
          title: 'Tatbestand Recht',
          vlb_cover: '../../../images/zwick.jpg',
          year: 2018,
          publisher: 'IZ-Verlag',
          return_code: 'Y'
        },
      ]
    }
  }
}

</script>
