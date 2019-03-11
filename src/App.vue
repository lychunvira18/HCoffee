<template>
  <div id="app">
    <nav class="nav-bar">
      <img src="./assets/logo.png" height="50px" alt="HCoffee" />
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/market">Market</router-link>
        </li>
        <li>
          <router-link to="/aboutus">About us</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
.nav-bar {
  overflow: hidden;
  width: 100%;
  height: 60px;
  background: #00b894;
}
.nav-bar img {
  float: left;
  padding-top: 5px;
  padding-left: 15px;
  padding-right: 15px;
}
.nav-bar li {
  float: left;
  list-style-type: none;
}
.nav-bar li:hover {
  background-color: #fd79a8;
  transition: 0.5s;
}
.nav-bar ul li a {
  display: block;
  padding: 15px 17px 18px 17px;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #f1c40f;
  font-size: 20px;
  text-shadow: 2px 2px 5px #e74c3c;
}
</style>
