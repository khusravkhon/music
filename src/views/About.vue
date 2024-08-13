<template>
  <div class="flex justify-center">
    <div class="mt-10">
      <img src="/assets/manifestPng/pwa-192x192.png" alt="" srcset="" />
      <p class="mt-5 text-center font-medium">{{ $t("about.ver") }}. 1.0.0</p>
      <base-button
        class="mt-5"
        url="https://north-kitty-bef.notion.site/2e8694554f7a48668e1255b27e5a37ba?pvs=4"
      >
        <template v-slot:header> {{ $t("about.term") }} </template>
      </base-button>
    </div>
  </div>
</template>
