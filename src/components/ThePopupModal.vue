<script setup>
// external links
import SocialLinks from "../links/externalLinks.js";
defineProps({
  socialLinks: {
    type: Object,
    default: SocialLinks,
  },
  modalDescription: {
    type: String,
    default:
      "Copyright Infringement: Hello, I'm Edmark a Web Developer, I'm a fanboy of Olivia Rodrigo, this site is cloned and to practice my Vue.js skills that's why I've made/cloned this website, this is for practices only, I will not collect any data from the user/visitor, also mostly of contents in this website are from the original site at",
  },
  isModalVisible: {
    type: Boolean,
    default: true,
  },
  modalClose: {
    type: Function,
    default: () => {
      const modalCanvas = document.querySelector("#modal-canvas");
      modalCanvas.classList.toggle("hidden");
    },
  },
});
</script>


<template>
  <section>
    <div class="bg-white w-96 rounded-lg" id="modal-canvas">
      <!-- v-show="isModalVisible" -->
      <div class="h-full m-10">
        <blockquote class="font-montserrat text-center">
          {{ modalDescription }}
          <a
            :href="`${SocialLinks.links.olivia_site}`"
            class="text-primary font-amatic text-2xl underline"
            >oliviarodrigo.com</a
          >
        </blockquote>

        <button
          @click="modalClose"
          class="
            grid
            place-items-center
            mx-auto
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
          Close
        </button>
      </div>
    </div>
  </section>
</template>

