<script></script>
<template>
  <div>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Karla:400,700&display=swap");

@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

.font-family-karla {
  font-family: karla;
}
.bg-sidebar {
  background: #ffffff;
}
.cta-btn {
  color: #3d68ff;
}
.upgrade-btn {
  background: #1947ee;
}
.upgrade-btn:hover {
  background: #0038fd;
}
.router-link-active {
  background: #3fa2f6;
  color: #ffffff !important;
}
.active-svg {
  fill: #ffa33c !important;
}
.not-active-svg {
  fill: #bababa !important;
}
.nav-item:hover {
  background: #3fa2f6;
  color: #ffffff;
}
.nav-item {
  color: #878787;
}
.account-link:hover {
  background: #3d68ff;
}
.body {
  background: #b3b2b2;
}
</style>
