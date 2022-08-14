<script setup>
// dataset
import SourceDataCountries from "../json/countries.json";
import SourceDataSite from "../json/site_content.json";
defineProps({
  SourceDataSite: {
    type: Object,
    default: SourceDataSite,
  },
  SourceDataCountries: {
    type: Object,
    default: SourceDataCountries,
  },
  // data() {
  //   return {
  //     newsletter_page: SourceDataSite.newsletter_page,
  //     email: "",
  //     country: null,
  //     termsState: false,
  //     validated: false,
  //   };
  // },
  computed: {
    termsError() {
      return this.validated && !this.termsState;
    },
  },
  methods: {
    handleTermsState() {
      this.validated = false;
    },
    onSubmit(e) {
      this.validated = true;
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
});
</script>
<template>
  <main>
    <section
      v-for="data in SourceDataSite.newsletter_page"
      :key="data.id"
      class="
        min-h-screen
        bg-no-repeat
        max-w-4xl
        grid
        place-items-center
        mx-auto
        my-44
        bg-cover bg-center
      "
      :style="{
        backgroundImage: `url(/assets/images/${data.newsletter_image})`,
      }"
    >
      <form
        @submit.prevent="onSubmit"
        method="POST"
        class="py-4 px-4 sm:px-16 md:px-16 sm:py-16 md:py-16 w-full"
      >
        <div class="bg-white opacity-80 min-h-screen h-full w-full py-12">
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
