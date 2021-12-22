<template>
  <div>
    <HeadBar />
    <div class="header">
      <div class="overlay"></div>
      <div class="bottom-lap"></div>
      <b-navbar class="menu-bar" toggleable="md" type="light">
        <b-navbar-brand href="/">
          <img class="logo" src="@/static/images/logo.png" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Products" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <li class="nav-item">
              <nuxt-link class="nav-link" to="/about">About</nuxt-link>
            </li>
            <b-nav-item href="#" class="support"
              >Talk to someone
              <img src="@/static/images/icon/support-light.png"
            /></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="header-caption">
              <h1>Quality fuel at your doorstep</h1>
              <p>
                FAAD runs a 24/7 fuel supply and procurement service to over 200
                offices, homes, schools and events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
.header {
  position: relative;
  background: #aaafaf;
  min-height: 38rem;
  background-image: url("/images/bg.png");
  background-size: cover;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  .bottom-lap {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 250px;
    background: linear-gradient(180deg, rgba(26, 26, 26, 0) 0%, #1a1a1a 59.17%);
  }
}
.logo {
  height: 20px;
}
.navbar {
  padding-left: 3.75rem;
  padding-right: 3.75rem;
  padding-top: 1.5rem;
}
.navbar-light .navbar-nav .nav-link {
  font-weight: 600;
  font-size: 0.98rem;
  line-height: 24px;
  color: #ffffff;
}
.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .show > .nav-link {
  color: #b4b8b8;
}
.navbar-light .navbar-toggler {
  color: #fff;
}
.navbar-light .navbar-toggler-icon {
  background-image: url("/images/icon/menu.svg");
}
.dropdown-toggle::after {
  vertical-align: middle;
}
@media (max-width: 767px) {
  .header {
    min-height: 67vh;
  }
}
@media (min-width: 768px) {
  .nav-item + .nav-item {
    margin-left: 2rem;
  }
}
.nav-link.support img {
  height: 16px;
  width: 16px;
  margin-left: 0.625rem;
}
</style>
