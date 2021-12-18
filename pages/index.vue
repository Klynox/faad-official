<template>
  <div>
    <Header />
    <div class="position-relative py-4 px-5">
      <div class="container-fluid d-md-flex justify-content-between">
        <a href="" class="btn call-to-action xdb">
          <img src="@/static/images/icon/message-light.png" />Talk to someone
          now
        </a>
        <Stats />
      </div>
    </div>
    <section class="about">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-5">
            <h2 class="section-title">Quality, speed and service</h2>
            <p class="section-para">
              We take the required fuel specifications from our clients at the
              point of enquiry to ensure that we match it.
            </p>
            <p class="section-para">
              The quality of our fuel is uncompromized, we source for the best
              and highest quality available.
            </p>
            <p class="section-para">
              We also meet specifications for different fuel usage. Anything you
              need.
            </p>
          </div>
          <div class="col-md-5">
            <img src="@/static/images/about-1.png" class="card-imag-xjsjl" />
          </div>
        </div>
      </div>
    </section>
    <section class="info-section">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-5">
            <img src="@/static/images/info-1.png" class="card-imag-xjsjl" />
          </div>
          <div class="col-md-5">
            <h2 class="section-title">
              Available 24/7 <strong>0700FAADOIL</strong>
            </h2>
            <p class="section-para">
              All our communication lines are open all day. Our emergency call
              line is active 24/7 and we attend to product and service requests
              the moment you make a request. In 2018, we supplied over 600
              emergency fuel demands
            </p>
            <h2 class="section-title mt-5">
              Oil prizes daily updated and open for bargain
            </h2>
            <p class="section-para">
              We offer the most reasonable fuel prizes, they are daily updated
              and open for bargain. This means that you can chat with us live or
              call to get an even better pricing based on your order quantity
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="process-dhl">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-5">
            <h2 class="section-title">Seamless process from end to end</h2>
            <p class="section-para">
              From enquiry to delivery, there’s no stress on you. We are
              committed to making sure there’s no stress on you. Our goal is
            </p>
            <img src="@/static/images/process-flow.svg" class="flow-tsh" />
          </div>
          <div class="col-md-5">
            <img src="@/static/images/process.png" class="card-imag-xjsjl" />
          </div>
        </div>
      </div>
    </section>
    <section class="offers-section">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-7">
            <h2 class="section-title">Programs and offers</h2>
            <p class="section-para">
              We support the business and goals of our clients with custom
              offers, pricing and payment plans
            </p>
          </div>
        </div>
        <div
          class="row mt-3 justify-content-between"
          style="margin-left: 0; margin-right: 0"
        >
          <div class="col-sm-6 col-md-6 col-lg-4 d-flex flex-column">
            <div class="offer-card">
              <img src="@/static/images/offer-kha-1.png" />
              <h3>Partners Subscription</h3>
              <p>
                We deliver the products you need monthly or regularly, with a
                comfortable payment plan.
              </p>
              <a href="" class="d-flex align-items-center mt-3 anchor">
                <img src="@/static/images/icon/anchor.png" />
                <span>Learn more</span>
              </a>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-4">
            <div class="offer-card">
              <img src="@/static/images/offer-kha-2.png" />
              <h3>Large Organizations</h3>
              <p>
                We come through on demand across branches with bulk pricing.
              </p>
              <a href="" class="d-flex align-items-center mt-3 anchor">
                <img src="@/static/images/icon/anchor.png" />
                <span>Learn more</span>
              </a>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-4">
            <div class="offer-card">
              <img src="@/static/images/offer-kha-3.png" />
              <h3>Start Up’s and SME’s</h3>
              <p>
                Since power is essential to a growing business, we have created
                the best plans for you.
              </p>
              <a href="" class="d-flex align-items-center mt-3 anchor">
                <img src="@/static/images/icon/anchor.png" />
                <span>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="partnerhips">
      <div class="container">
        <h2 class="text-center section-title">Powering Large and growing businesses across Nigeria</h2>
        <p class="text-center section-para">
          FAAD oil powers some of the largest establishments in the country and proudly supports growing businesses
        </p>
        <VueSlickCarousel v-bind="slideSettings" class="text-center partners-slide">
          <div class="d-flex justify-content-center align-items-center">
            <img src="@/static/images/partners/slides/1.png"/>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <img src="@/static/images/partners/slides/2.png"/>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <img src="@/static/images/partners/slides/3.png"/>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <img src="@/static/images/partners/slides/4.png"/>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <img src="@/static/images/partners/slides/5.png"/>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <img src="@/static/images/partners/slides/6.png"/>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <img src="@/static/images/partners/slides/7.png"/>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <img src="@/static/images/partners/slides/8.png"/>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <img src="@/static/images/partners/slides/9.png"/>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <img src="@/static/images/partners/slides/10.png"/>
          </div>
        </VueSlickCarousel>
      </div>
    </section>
    <section class="features">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-6 feature-Hslwq">
            <h2>Our Range of Products</h2>
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
            <h2>Our Fuel Related Services</h2>
            <b-nav vertical>
              <b-nav-item class="d-flex align-items-center">
                <img src="@/static/images/icon/check.png" />
                <span>Haulage</span>
              </b-nav-item>
              <b-nav-item class="d-flex align-items-center">
                <img src="@/static/images/icon/check.png" />
                <span>Emergency Oil Delivery</span>
              </b-nav-item>
              <b-nav-item class="d-flex align-items-center">
                <img src="@/static/images/icon/check.png" />
                <span>Environmental Services</span>
              </b-nav-item>
              <b-nav-item class="d-flex align-items-center">
                <img src="@/static/images/icon/check.png" />
                <span>Fuel Management</span>
              </b-nav-item>
              <b-nav-item class="d-flex align-items-center">
                <img src="@/static/images/icon/check.png" />
                <span>Nationwide Fuel Delivery</span>
              </b-nav-item>
              <b-nav-item class="d-flex align-items-center">
                <img src="@/static/images/icon/check.png" />
                <span>Priority Contracts</span>
              </b-nav-item>
              <b-nav-item class="d-flex align-items-center">
                <img src="@/static/images/icon/check.png" />
                <span>Technical Support</span>
              </b-nav-item>
            </b-nav>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      slideSettings: {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
.call-to-action {
  background: #f58634;
  border-color: transparent;
  border-radius: 0;
  color: #fff;
  padding: 0.7rem 1.79rem;

  img {
    margin-right: 0.5rem;
  }
}
.stats-wrapper {
  box-shadow: 11px 14px 13px 9px rgba(#f58634, 0.2);
  display: inline-block;
  padding: 20px 38px;
  background: #fff;
  border: 0;
  position: absolute;
  right: 2%;
  width: 95%;
  max-width: 33.25rem;
  min-height: 8rem;
  top: -2rem;

  h5 {
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: #8b8c89;
  }

  .stat-title {
    font-weight: 500;
    font-size: 10px;
    line-height: 16px;
    color: #1a1a1a;
  }
  .stat-unit {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #1a1a1a;

    .value {
      margin-left: 8px;
      &.red {
        color: #ec0000;
      }
      &.green {
        color: #00be00;
      }
    }
  }
  .stat-price {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #1a1a1a;
  }
  .call-to-action {
    background: transparent;
    border: 2px solid #f58634;
    padding: 0.5rem 1.6rem;
    color: #f58634;
    text-align: center;
    text-transform: uppercase;
  }
}
@media (max-width: 880px) {
  .stats-wrapper {
    left: 2%;
    padding: 20px 27px;
  }
  .call-to-action.xdb {
    margin-top: 8rem;
  }
}
</style>
