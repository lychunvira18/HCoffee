<template>
  <div>
    <hcoffee
      msg="About Us"
      v-bind:homepage="false"
      v-bind:aboutme="true"
    ></hcoffee>
  </div>
</template>
<script>
import hcoffee from "../components/hcoffee.vue";
export default {
  components: { hcoffee }
};
</script>
