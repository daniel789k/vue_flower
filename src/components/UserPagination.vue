<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center mb-0 pb-3">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous" :class="{ 'disabled': pages.current_page === 1 }" @click.prevent="updatePage(pages.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="page in pages.total_pages" :key="page" :class="{ 'active': page===pages.current_page}">
        <a class="page-link" href="#" @click.prevent="updatePage(page)">{{ page }}</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next" :class="{ 'disabled': pages.current_page === pages.total_pages }" @click.prevent="updatePage(pages.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages'],
  methods: {
    updatePage (page) {
      this.$emit('emit-pages', page)
    }
  }
}
</script>
