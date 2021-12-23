<template>
  <div>
    <SecondaryHeader />
    <section class="about-main mb-5">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
            <li class="breadcrumb-item active" aria-current="page">Products</li>
          </ol>
        </nav>
        <div class="row">
          <div class="col-lg-9">
            <h1>Our Top Fuels & Oils Products</h1>
            <p>
              We pride ourselves in the supply of high-quality oil, fuel and
              lubricants at the most competitive prices. Whether you’re looking
              for agricultural, horticultural, construction or marine use, you
              can be assured we have what you’re looking for here at Crown Oil.
            </p>

            <b-card class="mt-5 dirty-card" no-body>
              <b-tabs pills card vertical>
                <b-tab title="Red Diesel" active>
                  <h4>Red Diesel</h4>
                  <p>
                    Red diesel (also known as gas oil, 35-second burning oil,
                    tractor diesel, cherry) is the low-tax fuel that keeps your
                    business running. Available for delivery within 48 hours,
                    all over the UK.
                  </p>
                </b-tab>
                <b-tab title="DERV (Diesel)"
                  ><h4>DERV (Diesel)</h4>
                  <p>
                    DERV is commonly referred to as road diesel and white
                    diesel. It’s derived straight from the refinery, meaning
                    you’ll get your bulk supply at the best price possible. No
                    matter where your fleet is located, we’ll keep your business
                    on the road.
                  </p></b-tab
                >
                <b-tab title="Heating Oil"
                  ><h4>Heating Oil</h4>
                  <p>
                    Made for use in central heating systems in homes and
                    commercial building such as schools and colleges, our
                    heating oil is available at competitive prices, anywhere in
                    the UK
                  </p></b-tab
                >
                <b-tab title="HVO Fuel"
                  ><h4>HVO Fuel</h4>
                  <p>
                    HVO fuel is a fossil free alternative to existing diesel
                    fuels. Switch today to help tackle climate change head-on,
                    by sustainably fuelling your operations and reducing your
                    net CO2 greenhouse gas emissions by up to 90%.
                  </p></b-tab
                >
                <b-tab title="Lubricants"
                  ><h4>Lubricants</h4>
                  <p>
                    Whatever industry you work in, our wide range of
                    high-quality greases and lubricants will keep your business
                    running smoothly for years to come.
                  </p></b-tab
                >
              </b-tabs>
            </b-card>

          </div>
        </div>
      </div>
    </section>
     <section class="features">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-6 feature-Hslwq">
            <h5>What else can we help with?</h5>
            <b-nav vertical>
              <b-nav-item class="d-flex align-items-center">
                <img src="@/static/images/icon/check.png" />
                <span>Red diesel</span>
              </b-nav-item>
              <b-nav-item class="d-flex align-items-center">
                <img src="@/static/images/icon/check.png" />
                <span>White diesel</span>
              </b-nav-item>
              <b-nav-item class="d-flex align-items-center">
                <img src="@/static/images/icon/check.png" />
                <span>Premium Motor Spirits (PMS)</span>
              </b-nav-item>
              <b-nav-item class="d-flex align-items-center">
                <img src="@/static/images/icon/check.png" />
                <span>HVO fuel</span>
              </b-nav-item>
              <b-nav-item class="d-flex align-items-center">
                <img src="@/static/images/icon/check.png" />
                <span>Kerosine</span>
              </b-nav-item>
              <b-nav-item class="d-flex align-items-center">
                <img src="@/static/images/icon/check.png" />
                <span>Industrial Lubricants</span>
              </b-nav-item>
              <b-nav-item class="d-flex align-items-center">
                <img src="@/static/images/icon/check.png" />
                <span>Industrial Heating Oil</span>
              </b-nav-item>
            </b-nav>
          </div>
          <div class="col-md-6 feature-Hslwq">
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<style lang="scss">
.about-main {
  margin-top: 2rem;

  .dirty-card {
    border: 0;

    .card-header {
      background: transparent;
    }
    .nav-pills .nav-link.active,
    .nav-pills .show > .nav-link {
      background: lighten(#f58634, 2%);
      color: #fff;
    }
    .nav-pills .nav-link {
      color: #f58634;
    }
  }

  .nav-item + .nav-item {
    margin-left: 0 !important;
  }

  .breadcrumb {
    background-color: transparent;

    .breadcrumb-item a {
      color: #f58634;

      &:hover {
        color: darken(#f58634, 7%);
      }
    }
  }
}
</style>
