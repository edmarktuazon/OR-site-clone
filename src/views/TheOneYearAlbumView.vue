<script setup>
// dataset
import SourceDataCountries from "../json/countries.json";
import SourceDataSite from "../json/site_content.json";
// external links
import ExternalLinks from "../links/externalLinks.js";

defineProps({
  SourceDataSite: {
    type: Object,
    default: SourceDataSite,
  },
  ExternalLinks: {
    type: Object,
    default: ExternalLinks,
  },
  SourceDataCountries: {
    type: Object,
    default: SourceDataCountries,
  },
  // data() {
  //   return {
  //     // sourAlbum: sourAlbum,
  //     // sourTextLogo: sourTextLogo,
  //     email: "",
  //     countries: null,
  //     termsState: false,
  //     validated: false,
  //   };
  // },
  computed: {
    termsError() {
      return this.validated && !this.termsState;
    },
  },
  // filters: {
  //   replace: function (st, rep, repWith) {
  //     const result = st.split(rep).join(repWith);
  //     return result;
  //   },
  // },
  shopVinyl: {
    type: Function,
    default: () => {
      window.open(ExternalLinks.links.shop_vinyl, "_blank");
    },
  },
  drivingHome2UCollection: {
    type: Function,
    default: () => {
      window.open(ExternalLinks.links.shop, "_blank");
    },
  },
  drivingHome2UFilm: {
    type: Function,
    default: () => {
      window.open(ExternalLinks.links.driving_home_2_u_yt_vid, "_blank");
    },
  },
  listenToSour: {
    type: Function,
    default: () => {
      window.open(ExternalLinks.links.sour_music, "_blank");
    },
  },
  methods: {
    onSubmit(e) {
      this.validated = true;
      if (
        this.email === "" ||
        this.countries === null ||
        this.termsState === false
      ) {
        alert("All fields and checkbox are required");
      } else {
        alert("Your record was successfully submitted.");
      }
      e.target.reset();
    },
  },
});
</script>
<template>
  <main>
    <section class="bg-secondary min-h-screen py-36">
      <!-- py-44 px-6 lg:px-0  -->
      <div
        class="grid place-items-center mx-auto px-6 lg:px-0"
        v-for="data in SourceDataSite.one_year_album_page"
        :key="data.id"
      >
        <div class="grid sm:flex sm:items-center py-4">
          <h3 class="font-arial text-white font-bold text-3xl text-center">
            {{ data.title }}
          </h3>
          <figure>
            <img
              :src="`/assets/images/${data.album_image}`"
              :alt="`${data.name}`"
            />
          </figure>
        </div>
      </div>
      <div class="grid place-items-center py-6 px-6 lg:px-0">
        <button
          class="
            rounded-full
            w-full
            mb-6
            max-w-[750px]
            font-arial font-bold
            text-xl
            border-2
            p-2
            ease-in-out
            text-white
            duration-300
            hover:bg-white hover:text-black
          "
          @click="shopVinyl"
        >
          Shop our vinyl
        </button>
        <button
          class="
            rounded-full
            w-full
            mb-6
            max-w-[750px]
            font-arial font-bold
            text-xl
            border-2
            p-2
            ease-in-out
            text-white
            duration-300
            hover:bg-white hover:text-black
          "
          @click="drivingHome2UCollection"
        >
          Driving home 2 U Collection
        </button>
        <button
          class="
            rounded-full
            w-full
            mb-6
            max-w-[750px]
            font-arial font-bold
            text-xl
            border-2
            p-2
            ease-in-out
            text-white
            duration-300
            hover:bg-white hover:text-black
          "
          @click="drivingHome2UFilm"
        >
          Driving home 2 U Film
        </button>
        <button
          class="
            rounded-full
            w-full
            max-w-[750px]
            font-arial font-bold
            text-xl
            border-2
            p-2
            ease-in-out
            text-white
            duration-300
            hover:bg-white hover:text-black
          "
          @click="listenToSour"
        >
          Listen to sour
        </button>
        <!-- form -->
        <form @submit.prevent="onSubmit" method="POST" class="py-16">
          <div class="bg-white opacity-80 py-12">
            <h4
              class="font-amatic text-6xl tracking-wide text-center"
              v-for="data in SourceDataSite.newsletter_section_data"
              :key="data.id"
            >
              {{ data.newsletter_title }}
            </h4>
            <div class="grid mx-12 py-24">
              <div class="py-6">
                <label
                  for="email"
                  class="font-arial font-bold uppercase text-lg"
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
                  for="countries"
                  class="font-arial font-bold uppercase text-lg"
                  >*choose countries</label
                >
                <!-- countries -->
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
              <label
                for="requiredfields"
                class="font-bold uppercase text-lg py-2"
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
        <iframe
          class="max-w-[750px]"
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/AI53uIAy_BQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  </main>
</template>
