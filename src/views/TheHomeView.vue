<script setup>
// dataset
import SourceDataCountries from "../json/countries.json";
import SourceDataSite from "../json/site_content.json";
// external links
import ExternalLinks from "../links/externalLinks.js";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
// modules for swiper
import { EffectFade, Navigation } from "swiper";
// computed({
//   termsError: function () {
//     return this.validated && !this.termsState;
//   },
// });

defineProps({
  components: {
    Swiper,
    SwiperSlide,
  },
  modules: {
    type: Array,
    default: () => [EffectFade, Navigation],
  },
  ExternalLinks: {
    type: Object,
    default: ExternalLinks,
  },
  SourceDataSite: {
    type: Object,
    default: SourceDataSite,
  },
  SourceDataCountries: {
    type: Object,
    default: SourceDataCountries,
  },
  MusicTitle: {
    type: String,
    default: "MUSIC",
  },
  // email: {
  //   type: String,
  //   default: "",
  // },
  // country: {
  //   type: Object,
  //   default: null,
  // },
  // termsState: {
  //   type: Boolean,
  //   default: false,
  // },
  // validated: {
  //   type: Boolean,
  //   default: false,
  // },
});
</script>
<script>
export default {
  data() {
    return {
      email: "",
      country: null,
      termsState: false,
      validated: false,
    };
  },
  computed: {
    termsError() {
      return this.validated && !this.termsState;
    },
  },
  method: {
    handleTermsState() {
      this.validated = false;
    },
    onSubmit(e) {
      this.validated = true;
      console.log("clicked");
      if (
        this.email === "" ||
        this.country === null ||
        this.termsState === false
      ) {
        alert("All fields and checkbox are required");
      } else {
        alert("Your record was successfully submitted.");
      }
      e.target.reset();
    },
  },
};
</script>
<template>
  <main>
    <!-- hero section -->
    <swiper
      :navigation="true"
      :modules="modules"
      :effect="'fade'"
      class="mySwiper"
    >
      <swiper-slide
        v-for="data in SourceDataSite.home_content_data"
        :key="data.id"
      >
        <RouterLink :to="`${data.path}`">
          <div
            class="
              home-bg
              h-screen
              bg-no-repeat
              w-full
              bg-cover bg-center
              mt-[90px]
            "
            :style="{
              'background-image':
                'url(' + `/assets/images/${data.home_bg}` + ')',
            }"
          ></div>
        </RouterLink>
      </swiper-slide>
    </swiper>
    <!-- bio section -->
    <section
      v-for="data in SourceDataSite.bio_section_data"
      :key="data.id"
      class="bio-bg relative min-h-screen bg-no-repeat bg-bottom bg-cover"
      :style="{
        'background-image': 'url(' + `/assets/images/${data.bio_bg}` + ')',
      }"
    >
      <div
        class="
          md:grid-cols-2
          lg:grid lg:grid-cols-3 lg:items-center lg:mx-24
          xl:mx-24
        "
      >
        <figure class="grid place-items-center">
          <img
            :src="`/assets/images/${data.bio_image}`"
            :alt="`${data.name}`"
            class="mx-auto grid place-items-center"
          />
        </figure>
        <div class="block col-span-2 px-6 -mt-24 lg:mt-0 lg:px-0">
          <h2 class="font-amatic text-8xl relative">{{ data.bio_title }}</h2>
          <p class="font-montserrat text-lg leading-7 relative">
            {{ data.bio_description }}
          </p>
        </div>
      </div>
    </section>
    <!-- music section swiper js -->
    <section class="mt-56 mb-24 lg:my-24">
      <div class="flex justify-center pb-24">
        <h2 class="font-amatic text-8xl">{{ MusicTitle }}</h2>
      </div>
      <swiper :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide
          v-for="data in SourceDataSite.music_section_data"
          :key="data.id"
        >
          <!-- sour album -->
          <div
            class="
              grid-cols-1
              lg:grid lg:grid-cols-3 lg:items-center
              px-6
              xl:px-0
            "
          >
            <figure class="grid col-span-2">
              <img
                :src="`/assets/images/${data.music_image}`"
                :alt="`${data.name}`"
                class="mx-auto -rotate-3"
              />
            </figure>
            <div class="grid place-items-center mt-12 lg:block">
              <h3 class="font-arial text-xl pb-2">{{ data.primary_title }}</h3>
              <h3 class="text-4xl tracking-widest font-arial font-extrabold">
                {{ data.secondary_title }}
              </h3>
              <button
                v-if="data.music_link === false"
                class="
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
                Listen
              </button>
              <button
                v-else
                class="
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
                <a :href="`${data.music_link}`" target="_blank"> Listen </a>
              </button>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </section>
    <!-- secondary music -->
    <section>
      <swiper
        :navigation="true"
        :modules="modules"
        :effect="'fade'"
        class="mySwiper"
      >
        <swiper-slide
          v-for="data in SourceDataSite.music_secondary_section_data"
          :key="data.id"
        >
          <div
            class="bg-center h-screen bg-no-repeat w-full bg-cover"
            :style="{
              'background-image':
                'url(' + `/assets/images/${data.music_bg}` + ')',
            }"
          >
            <div class="py-36 mx-12 lg:p-44 xl:p-56">
              <h3
                class="
                  w-full
                  lg:max-w-xl
                  xl:max-w-4xl
                  text-center
                  lg:text-left
                  xl:text-left
                  font-arial font-bold
                  text-3xl text-white
                  lg:text-5xl
                "
              >
                {{ data.music_description }}
              </h3>
              <button
                v-if="data.music_link === false"
                class="
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
                Listen
              </button>
              <button
                v-else
                class="
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
                  mx-auto
                  grid
                  place-items-center
                  lg:mx-0 lg:grid
                "
              >
                <a :href="`${data.music_link}`" target="_blank"> Play </a>
              </button>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </section>
    <!-- newsletter section -->
    <section
      v-for="data in SourceDataSite.newsletter_section_data"
      :key="data.id"
      class="min-h-screen bg-no-repeat w-full bg-cover"
      :style="{
        'background-image':
          'url(' + `/assets/images/${data.newsletter_bg}` + ')',
      }"
    >
      <form
        @submit.prevent="onSubmit"
        method="POST"
        class="py-6 px-6 sm:px-16 md:px-16 sm:py-16 md:py-16 w-full"
      >
        <div
          class="
            bg-white
            opacity-80
            min-h-screen
            h-full
            w-full
            lg:w-4/5
            xl:w-3/5
            py-12
          "
        >
          <h4 class="font-amatic text-6xl tracking-wide text-center">
            {{ data.newsletter_title }}
          </h4>
          <div class="grid mx-12 py-24">
            <div class="py-6">
              <label for="email" class="font-arial font-bold uppercase text-lg"
                >*email</label
              >
              <input
                type="text"
                id="email"
                v-model="email"
                class="
                  border-b-2 border-black
                  outline-none
                  w-full
                  font-bold font-arial
                "
              />
            </div>
            <div class="py-6">
              <label
                for="country"
                class="font-arial font-bold uppercase text-lg"
                >*choose country</label
              >
              <select
                class="
                  font-bold font-arial
                  text-base
                  border-b-2 border-black
                  outline-none
                  w-full
                "
                v-model="country"
                id="country"
              >
                <option value="" disabled="">Select...</option>
                <option
                  v-for="data in SourceDataCountries.countries"
                  :key="data.id"
                  :value="data.code"
                >
                  {{ data.name }}
                </option>
              </select>
            </div>
            <label for="requiredfields" class="font-bold uppercase text-lg py-2"
              >*required fields</label
            >
            <h5 class="font-amatic text-3xl py-6">
              SIGN UP TO RECEIVE EMAIL UPDATES AND OFFERS
            </h5>

            <div class="flex mb-4">
              <label class="mr-4 font-montserrat">
                <input
                  type="checkbox"
                  v-model="termsState"
                  @change="handleTermsState"
                />
                Olivia Rodrigo
              </label>
              <label class="font-montserrat">
                <input type="checkbox" id="terms" />
                Geffen Records
              </label>
            </div>
            <p
              style="color: red"
              class="for-error terms-error font-montserrat text-sm uppercase"
              v-if="termsError"
            >
              Please select one of the sign-up options
            </p>
            <input
              class="
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
              type="submit"
              value="Submit"
              @click="handleSubmit"
            />
          </div>
        </div>
      </form>
    </section>
  </main>
</template>
