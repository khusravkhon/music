<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <router-link
        class="text-white font-bold uppercase text-2xl mr-4"
        :to="{ path: '/' }"
        exact-active-class="no-active"
      >
        {{ $t("header.name") }}
      </router-link>

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li>
            <router-link class="px-2 text-white" to="/about">
              <img src="/assets/header/mobile-phone.png" alt="" srcset="" />
            </router-link>
          </li>
          <li v-if="!userStore.userLoggedIn">
            <img
              src="/assets/header/arrow-right-to-bracket.png"
              class="mt-[24px] text-white"
              @click.prevent="toggleAuthModal"
              alt=""
              srcset=""
            />
          </li>
          <template v-else>
            <li>
              <router-link class="px-2 text-white" to="/manage-music">
                <img
                  class="mx-2"
                  src="/assets/header/download.png"
                  alt=""
                  srcset=""
                />
              </router-link>
            </li>
            <li>
              <img
                src="/assets/header/arrow-right-from-bracket.png"
                class="mt-[24px] text-white"
                @click.prevent="signOut"
                alt=""
                srcset=""
              />
            </li>
          </template>
        </ul>
        <ul class="ml-auto">
          <li>
            <a class="px-2 text-white" href="#" @click.prevent="changeLocale">
              {{ currentLocale }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapStores } from "pinia";
import useModalStore from "@/stores/modal";
import useUserStore from "@/stores/user";

export default {
  name: "AppHeader",
  computed: {
    ...mapStores(useModalStore, useUserStore),
    currentLocale() {
      return this.$i18n.locale === "ru" ? "Русскый" : "English";
    },
  },
  methods: {
    toggleAuthModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen;
    },
    signOut() {
      this.userStore.signOut();

      if (this.$route.mete.requiresAuth) {
        this.$router.push({ name: "home" });
      }
    },
    changeLocale() {
      this.$i18n.locale = this.$i18n.locale === "en" ? "ru" : "en";
    },
  },
};
</script>
