<template>
  <div class="flex justify-center cursor-pointer" @click="termsUse">
    <div class="font-medium">
      <slot name="header"></slot>
    </div>
    <div>
      <img
        class="mt-[1px]"
        src="/assets/img/angle-right.png"
        alt=""
        srcset=""
      />
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  props: ["url"],
  methods: {
    termsUse() {
      window.location.href = this.url;
    },
  },
};
</script>
