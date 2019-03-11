<template>
  <div>
    <div class="top">
      <div class="blacker"></div>
      <h1>{{ msg }}</h1>
      <h6 v-if="homepage">Welcome to HCoffee</h6>
    </div>
    <div v-if="aboutme" class="main">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        elementum lorem nec vehicula dictum. Etiam vitae sollicitudin nisl.
        Morbi nec posuere neque. Sed non nisi sapien. Morbi bibendum nisi nec
        lorem aliquam rutrum. Vivamus eleifend, urna eu pretium lobortis, dui
        felis consequat eros, ut ullamcorper leo sem eu sapien. Nulla hendrerit
        lectus id orci dictum, ut interdum erat lacinia. Nunc massa nibh,
        ultrices at lobortis eget, dapibus sit amet velit. Interdum et malesuada
        fames ac ante ipsum primis in faucibus. Sed orci risus, tempus sit amet
        fringilla nec, fermentum nec dolor. Nulla placerat porttitor blandit.
        Donec vel augue posuere, suscipit elit sit amet, laoreet ipsum. Proin a
        mauris ipsum. Nunc porttitor massa vitae semper hendrerit. Maecenas
        scelerisque velit sed massa pellentesque aliquet. Curabitur lacus est,
        lobortis ut ultricies a, laoreet in erat. Vestibulum quis turpis luctus,
        sodales odio at, feugiat nisl. Nulla quis leo a diam laoreet sodales. In
        hac habitasse platea dictumst. Integer vulputate tortor ac est pharetra
        interdum. Vestibulum sit amet odio rhoncus ex consequat bibendum.
        Pellentesque sed ipsum sit amet dui sodales ullamcorper blandit nec
        tortor. Quisque faucibus magna at libero imperdiet aliquet. Suspendisse
        euismod vestibulum blandit. Vivamus ac dignissim neque. Pellentesque
        ultricies, urna sit amet pharetra tempus, felis risus rhoncus mi, non
        cursus magna mauris nec metus. Praesent sit amet erat a purus eleifend
        rhoncus. Morbi suscipit metus non ante vehicula, id venenatis purus
        pharetra. Donec dictum nec purus sit amet aliquet. In faucibus venenatis
        tortor vitae mollis. Sed fermentum faucibus fermentum. Sed volutpat at
        nulla ut imperdiet. Duis sed bibendum arcu. Suspendisse elit lectus,
        lobortis ut sapien accumsan, luctus molestie leo. Praesent sem nisl,
        laoreet sit amet ipsum et, venenatis pulvinar risus. Suspendisse in
        tincidunt magna. Vestibulum dignissim ac elit in malesuada. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Nunc gravida massa non elit elementum, a posuere lacus sodales.
        Integer eget magna nec metus congue luctus at ornare nisi. Mauris in
        ornare tellus, ut vestibulum neque. Proin at ex vitae arcu sollicitudin
        pellentesque. Pellentesque pulvinar eros ante. Quisque egestas a est eu
        iaculis. Mauris interdum turpis eget lorem ullamcorper, finibus
        imperdiet elit placerat. Pellentesque imperdiet sodales nulla, eget
        interdum lorem. Etiam pharetra, quam nec tempor rutrum, justo nisi
        ultrices ante, vel ullamcorper libero metus ullamcorper sem.
        Pellentesque commodo a urna ac euismod. Mauris pellentesque tincidunt
        est a iaculis. Proin dignissim arcu non orci lacinia venenatis. In metus
        elit, mattis in tincidunt non, dictum at justo. Aenean id mi vel sem
        pulvinar posuere. Donec ornare id elit vitae posuere. Pellentesque sit
        amet lectus tempus, convallis sem commodo, efficitur quam. Quisque eget
        mollis nunc. Morbi eu neque elit. Phasellus finibus sapien eget nunc
        congue hendrerit. Aliquam erat volutpat. Etiam at purus neque.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "hcoffee",
  props: {
    msg: String,
    homepage: Boolean,
    aboutme: Boolean
  }
};
</script>
<style>
.top {
  z-index: -2;
  background-image: url(../assets/background.jpg);
  background-size: 100% auto;
  background-repeat: no-repeat;
  width: 100%;
  height: 500px;
}
.top h1 {
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 70px;
  padding: 50px 0 0 0;
  color: orange;
  text-shadow: 2px 2px black;
}
.top h6 {
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  text-shadow: 2px 2px 5px orangered;
  color: #55efc4;
}
.blacker {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 80%);
  position: ;
}
.main {
  width: 100%;
  background-color: whitesmoke;
  color: #e84393;
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-indent: 30px;
  text-shadow: 1px 1px 1px #6c5ce7;
}
</style>
