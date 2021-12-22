<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img src="@/static/images/logo-white.png" class="logo" />
          <div class="footer-info">
            11 Birabi Street, Rumuadaolu 500272, Port Harcourt
          </div>
          <div class="footer-info"><a href="tel:+23407003223645">0700 322 3645</a></div>
          <div class="socials">
            <a href="https://www.linkedin.com/in/faad-procurements-9547b21a9/" target="_blank">
              <img src="@/static/images/social-1.png" />
            </a>
            <a href="https://www.instagram.com/faadoil/" target="_blank">
              <img src="@/static/images/social-2.png" />
            </a>
            <a href="https://web.facebook.com/faadprocurement" target="_blank">
              <img src="@/static/images/social-3.png" />
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <b-nav>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/about">About</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/products">Products</nuxt-link>
            </li>
          </b-nav>
        </div>
      </div>
      <div class="copyright">
        &copy; 2021 FAAD Procurements LTD. All right reserved
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.logo {
  height: 20px;
}
.footer-info {
  margin-top: 1.2rem;
  color: #fff;
  font-size: 0.875rem;
  line-height: 1.1rem;

  a {
    color: #fff;
    &:hover {
      color: darken(#fff, 25%);
    }
  }
}
.footer-info + .footer-info {
  margin-top: 0.3rem;
}
.socials {
  margin-top: 3rem;
  margin-bottom: 3rem;
  a + a {
    margin-left: 0.45rem;
  }
}
.copyright {
  font-weight: 500;
  font-size: 0.895rem;
  line-height: 1.1rem;
  color: #8b8c89;
  margin-top: 1rem;
}
.nav-item + .nav-item {
  margin-left: 2rem;
}
.nav-link {
  font-weight: 600;
  font-size: 0.98rem;
  line-height: 24px;
  color: #ffffff;
}
.nav-link:hover,
.show > .nav-link {
  color: #b4b8b8;
}
</style>
