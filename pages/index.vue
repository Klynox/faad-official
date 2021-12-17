<template>
  <div>
    <Header />
    <div class="position-relative py-4 px-5">
      <div class="container-fluid d-md-flex justify-content-between">
        <a href="" class="btn call-to-action xdb">
          <img src="@/static/images/icon/message-light.png" />Talk to someone
          now
        </a>
        <div class="stats-wrapper">
          <h5 class="text-muted">Trending today</h5>
          <div class="d-flex justify-content-between mt-3">
            <div class="d-flex align-items-start flex-column">
              <div class="stat-title">Petrol</div>
              <div class="stat-unit">
                ALGO<span class="value green">0.25%</span>
              </div>
              <div class="stat-price">N500</div>
            </div>
            <div class="d-flex align-items-start flex-column">
              <div class="stat-title">Petrol</div>
              <div class="stat-unit">
                ALGO<span class="value green">0.25%</span>
              </div>
              <div class="stat-price">N500</div>
            </div>
            <div class="d-flex align-items-start flex-column">
              <div class="stat-title">Petrol</div>
              <div class="stat-unit">
                ALGO<span class="value green">0.25%</span>
              </div>
              <div class="stat-price">N500</div>
            </div>
            <div class="d-none d-sm-flex align-items-center flex-column">
              <a href="" class="btn call-to-action">Bargain</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
  box-shadow: 11px 14px 13px 9px rgba(#F58634, 0.2);
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
