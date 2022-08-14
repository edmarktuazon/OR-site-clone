<script setup>
// dataset
import SourceDataSite from "../json/site_content.json";
// external links
import ExternalLinks from "../links/externalLinks.js";
// images
import NavBackgroundImage from "/assets/images/nav-customize-bg.png";
import NavLogo from "/assets/images/site-logo.png";
// components icons
import IconAmazon from "./icons/IconAmazon.vue";
import IconApple from "./icons/IconApple.vue";
import IconInstagram from "./icons/IconInstagram.vue";
import IconSpotify from "./icons/IconSpotify.vue";
import IconTwitter from "./icons/IconTwitter.vue";
import IconYoutube from "./icons/IconYoutube.vue";
// components icons_v2
import IconAmazonWithFillWhite from "./icons_v2/IconAmazon.vue";
import IconAppleWithFillWhite from "./icons_v2/IconApple.vue";
import IconInstagramWithFillWhite from "./icons_v2/IconInstagram.vue";
import IconSpotifyWithFillWhite from "./icons_v2/IconSpotify.vue";
import IconTwitterWithFillWhite from "./icons_v2/IconTwitter.vue";
import IconYoutubeWithFillWhite from "./icons_v2/IconYoutube.vue";
// props

defineProps({
  SourceDataSite: {
    type: Object,
    default: SourceDataSite,
  },
  ExternalLinks: {
    type: Object,
    default: ExternalLinks,
  },

  toggleNav: {
    type: Function,
    default: () => {
      const menu = document.querySelector(".mobile-menu");
      const parentContainer = document.querySelector("main");
      menu.classList.toggle("toggled");
      parentContainer.classList.toggle("dimmed");
    },
  },
  // toggle menu onclick
  closeMenuOnclick: {
    type: Function,
    default: () => {
      const menu = document.querySelector(".mobile-menu");
      const parentContainer = document.querySelector("main");

      menu.classList.toggle("toggled");
      parentContainer.classList.toggle("dimmed");
    },
  },
  // toggle menu logo onclick
  closeMenuLogoOnClick: {
    type: Function,
    default: () => {
      const menu = document.querySelector(".mobile-menu");
      const parentContainer = document.querySelector("main");

      menu.classList.contains("toggled") ||
      parentContainer.classList.contains("dimmed")
        ? menu.classList.remove("toggled") ||
          parentContainer.classList.remove("dimmed")
        : "";
    },
  },
});
</script>
<template>
  <nav
    class="
      fixed
      top-0
      w-full
      bg-center bg-no-repeat bg-cover
      max-h-48
      h-full
      z-50
    "
    :style="{
      backgroundImage: `url(${NavBackgroundImage})`,
    }"
  >
    <div class="flex justify-between items-center">
      <RouterLink @click.prevent="closeMenuLogoOnClick" to="/"
        ><img :src="`${NavLogo}`" alt="logo-image" class="max-h-32"
      /></RouterLink>
      <ul class="hidden md:flex">
        <RouterLink
          v-for="data in SourceDataSite.navigation_data"
          :key="data.id"
          :to="`${data.path}`"
          class="
            focus:text-primary
            font-amatic
            text-2xl
            mr-4
            ease
            duration-300
            hover:text-secondary
          "
          >{{ data.name }}</RouterLink
        >
      </ul>
      <!-- hamburger menu -->
      <div class="md:hidden hamburger-menu">
        <div class="menu-bar">
          <button class="bar mobile-menu-button" @click="toggleNav"></button>
        </div>
      </div>
      <!-- soc med icons -->
      <ul class="hidden md:flex md:items-center">
        <li class="pr-4">
          <a :href="ExternalLinks.links.instagram" target="_blank">
            <IconInstagram />
          </a>
        </li>
        <li class="pr-4">
          <a :href="ExternalLinks.links.spotify" target="_blank">
            <IconSpotify />
          </a>
        </li>
        <li class="pr-4">
          <a :href="ExternalLinks.links.twitter" target="_blank">
            <IconTwitter />
          </a>
        </li>
        <li class="pr-4">
          <a :href="ExternalLinks.links.youtube" target="_blank">
            <IconYoutube />
          </a>
        </li>
        <li class="pr-4">
          <a :href="ExternalLinks.links.amazon" target="_blank">
            <IconAmazon />
          </a>
        </li>
        <li class="pr-4">
          <a :href="ExternalLinks.links.apple" target="_blank">
            <IconApple />
          </a>
        </li>
      </ul>
    </div>
    <!-- mobile-menu -->
    <div
      class="
        mobile-menu
        md:hidden
        max-w-xl
        w-full
        bg-black
        flex
        justify-center
        flex-col
        h-screen
      "
    >
      <ul class="grid justify-center text-center md:hidden">
        <RouterLink
          v-for="data in SourceDataSite.navigation_data"
          :key="data.id"
          :to="`${data.path}`"
          @click.prevent="closeMenuOnclick"
          class="
            focus:text-primary
            text-white
            font-amatic
            text-2xl
            mr-4
            mb-4
            ease
            duration-300
            hover:text-secondary
          "
          >{{ data.name }}</RouterLink
        >
      </ul>
      <ul class="flex justify-center md:hidden py-16">
        <li class="pr-4">
          <a :href="ExternalLinks.links.instagram" target="_blank">
            <IconInstagramWithFillWhite />
          </a>
        </li>
        <li class="pr-4">
          <a :href="ExternalLinks.links.spotify" target="_blank">
            <IconSpotifyWithFillWhite />
          </a>
        </li>
        <li class="pr-4">
          <a :href="ExternalLinks.links.twitter" target="_blank">
            <IconTwitterWithFillWhite />
          </a>
        </li>
        <li class="pr-4">
          <a :href="ExternalLinks.links.youtube" target="_blank">
            <IconYoutubeWithFillWhite />
          </a>
        </li>
        <li class="pr-4">
          <a :href="ExternalLinks.links.amazon" target="_blank">
            <IconAmazonWithFillWhite />
          </a>
        </li>
        <li>
          <a :href="ExternalLinks.links.apple" target="_blank">
            <IconAppleWithFillWhite />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
