<template>
  <div class="market">
    <h1>Shop</h1>
    <div class="container">
      <div>
        <img src="../assets/apple.png" />
        <h2>Apple</h2>
        <form></form>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.market {
  background-color: whitesmoke;
}
.market h1 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 70px;
  text-align: center;
  color: #ff9f1a;
  text-shadow: 2px 2px 5px black;
}
.container {
  display: flex;
}
.container div {
  padding: 20px;
  text-align: center;
  display: inline-block;
  margin: 20px;
  border: 2px solid lightgray;
  border-radius: 10px;
  width: 250px;
}
.container div img {
  width: 200px;
}
</style>
