<script setup>
// dataset
import SourceDataSite from "../json/site_content.json";

defineProps({
  SourceDataSite: {
    type: Object,
    default: SourceDataSite,
  },
});
</script>
<template>
  <main>
    <section class="bg-secondary h-screen">
      <figure
        class="grid place-items-center h-3/5"
        v-for="data in SourceDataSite.tour_page"
        :key="data.id"
      >
        <img
          :src="`/assets/images/${data.sour_tour_image}`"
          :alt="`${data.name}`"
        />
      </figure>
    </section>
  </main>
</template>
