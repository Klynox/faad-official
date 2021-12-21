<template>
  <div class="d-flex flex-column flex-sm-row align-items-center justify-content-center headbar">
    <div class="">24/7 Emergency Fuel Supply</div>
    <div class="tel-xnsh">
      <img src="@/static/images/icon/tel.png" /> <a href="tel:+234700FAADOIL">0700FAADOIL</a> | <a href="tel:+23407003223645">07003223645</a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.headbar {
  min-height: 2.5rem;
  width: 100%;
  background: #f16904;
  color: #fff;
  font-size: 0.98rem;
  font-weight: 600;
  padding: 7px 15px;
}
.tel-xnsh {
  margin-left: 2.25rem;

  img {
    width: 16px;
    height: 16px;
    margin-right: 0.4rem;
  }
}
@media (max-width: 767px) {
  .headbar {
    font-size: 0.8rem;
    font-weight: 600;
  }
}
</style>
