<script setup>
// external links
import SocialLinks from "../links/externalLinks.js";
// components icons_v2
import IconAmazonWithFillWhite from "./icons_v2/IconAmazon.vue";
import IconAppleWithFillWhite from "./icons_v2/IconApple.vue";
import IconInstagramWithFillWhite from "./icons_v2/IconInstagram.vue";
import IconSpotifyWithFillWhite from "./icons_v2/IconSpotify.vue";
import IconTwitterWithFillWhite from "./icons_v2/IconTwitter.vue";
import IconYoutubeWithFillWhite from "./icons_v2/IconYoutube.vue";

defineProps({
  SocialLinks: {
    type: Object,
    default: SocialLinks,
  },
});
</script>

<template>
  <main>
    <footer class="bg-black h-36">
      <div class="flex items-center justify-center flex-col h-full">
        <ul class="flex items-center py-4">
          <li class="pr-4">
            <a :href="SocialLinks.links.instagram" target="_blank">
              <IconInstagramWithFillWhite />
            </a>
          </li>
          <li class="pr-4">
            <a :href="SocialLinks.links.spotify" target="_blank">
              <IconSpotifyWithFillWhite />
            </a>
          </li>
          <li class="pr-4">
            <a :href="SocialLinks.links.twitter" target="_blank">
              <IconTwitterWithFillWhite />
            </a>
          </li>
          <li class="pr-4">
            <a :href="SocialLinks.links.youtube" target="_blank">
              <IconYoutubeWithFillWhite />
            </a>
          </li>
          <li class="pr-4">
            <a :href="SocialLinks.links.amazon" target="_blank">
              <IconAmazonWithFillWhite />
            </a>
          </li>
          <li>
            <a :href="SocialLinks.links.apple" target="_blank">
              <IconAppleWithFillWhite />
            </a>
          </li>
        </ul>
        <ul class="flex justify-center">
          <a
            :href="SocialLinks.links.geffenRecords"
            target="_blank"
            class="text-white font-amatic text-2xl mr-4 ease duration-300 focus:text-primary hover:text-primary"
            >&copy; geffen records
          </a>
          <a
            :href="SocialLinks.links.terms"
            target="_blank"
            class="text-white font-amatic text-2xl mr-4 ase duration-300 focus:text-primary hover:text-primary"
          >
            terms
          </a>

          <a
            :href="SocialLinks.links.privacy"
            target="_blank"
            class="text-white font-amatic text-2xl mr-4 ase duration-300 hover:text-primary"
          >
            privacy
          </a>
        </ul>
      </div>
    </footer>
  </main>
</template>
