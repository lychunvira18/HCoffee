<template>
  <div>
    <hcoffee msg="Home" v-bind:homepage="true"></hcoffee>
  </div>
</template>
<script>
import hcoffee from "../components/hcoffee.vue";
export default {
  components: { hcoffee }
};
</script>
