<template>
  <div>
    <HeadBar />
    <div class="header">
      <div class="overlay"></div>
      <b-navbar class="menu-bar" toggleable="md" type="light">
        <b-navbar-brand href="#">
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

            <b-nav-item-dropdown right>
              <template #button-content>About</template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
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
              <a href="#" class="btn call-to-action">Place order</a>
            </div>
          </div>
        </div>
        <img src="@/static/images/tanker.svg" class="img-tanker" />
        <div class="partners">
          <div class="partners-images">
            <img src="@/static/images/partners/1.png"/>
            <img src="@/static/images/partners/2.png"/>
            <img src="@/static/images/partners/3.png"/>
            <img src="@/static/images/partners/4.png"/>
            <img src="@/static/images/partners/5.png"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  position: relative;
  background: #aaafaf;
  min-height: 48rem;
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
  .partners {
    position: absolute;
    bottom: 3rem;

    .partners-images {
      display: inline-block;
    }
    .partners-images img + img {
      margin-left: 1.5rem;
    }
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
    height: 100vh;
  }

  .partners {
    position: relative !important;
    margin-top: 8rem;
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
.header-caption {
  margin-top: 80px;
  margin-left: 10px;

  h1 {
    color: #fff;
    font-size: 2.7rem;
  }
  p {
    color: #ffffff;
    line-height: 1.3rem;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.2rem;
  }

  .call-to-action {
    background: #f58634;
    border-color: transparent;
    border-radius: 0;
    color: #fff;
    padding: 0.7rem 1.79rem;
  }
}
.img-tanker {
  max-height: 20.1rem;
  position: absolute;
  right: 0rem;
  bottom: 11rem;
}
@media (max-width: 950px) {
  .img-tanker {
    display: none;
  }
}
</style>
