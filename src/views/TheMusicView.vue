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
    <section class="bg-secondary py-44">
      <div
        v-for="data in SourceDataSite.music_page"
        :key="data.id"
        class="
          grid grid-cols-1
          px-6
          lg:px-0
          mb-28
          lg:grid
          lg:place-items-center
          lg:mx-auto
          lg:grid-cols-2
          lg:items-center
          max-w-[900px]
        "
      >
        <figure>
          <img
            :src="`/assets/images/${data.music_image}`"
            class="mx-auto"
            :alt="`${data.name}`"
          />
        </figure>
        <div class="grid place-items-center mt-12 lg:block">
          <h3
            class="
              text-4xl
              tracking-widest
              font-arial font-extrabold
              text-center
            "
          >
            {{ data.title }}
          </h3>
          <button
            v-if="data.music_link === false"
            class="
              mx-auto
              grid
              place-items-center
              mt-6
              font-amatic
              text-4xl
              bg-primary
              h-14
              w-28
              rounded-full
              focus:bg-black focus:text-primary
              hover:bg-black hover:text-primary
              ease-out
              duration-300
            "
          ></button>
          <button
            v-else
            class="
              mx-auto
              grid
              place-items-center
              mt-6
              font-amatic
              text-4xl
              bg-primary
              h-14
              w-28
              rounded-full
              focus:bg-black focus:text-primary
              hover:bg-black hover:text-primary
              ease-out
              duration-300
            "
          >
            <a :href="`${data.music_link}`" target="_blank">listen</a>
          </button>
        </div>
      </div>
    </section>
  </main>
</template>
