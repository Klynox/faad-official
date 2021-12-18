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
  </div>
</template>

<script>
export default {};
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
