<template>
  <div>
    <Header />
    <div class="position-relative py-4 px-5">
      <div class="container-fluid d-flex justify-content-between">
        <a href="" class="btn call-to-action xdb">
          <img src="@/static/images/icon/message-light.png" />Talk to someone
          now
        </a>
        <div class="stats-wrapper">
          <h4 class="text-muted"></h4>
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
  display: inline-block;
  padding: 15px;
  background: #fff;
  border: 0;
  position: absolute;
  right: 2%;
  width: 95%;
  max-width: 32.25rem;
  min-height: 8rem;
  top: -2rem;
}
</style>
