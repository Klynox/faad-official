<template>
  <div>
    <SecondaryHeader />
    <section class="about-main mb-5">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
            <li class="breadcrumb-item active" aria-current="page">About FAAD</li>
          </ol>
        </nav>
        <div class="row">
          <div class="col-lg-9">
            <h1>Putting the Customer at the Heart of Everything We Do</h1>
            <p>As a local, family-run business, we understand just how important it is to have a fuel supplier that you can count on. From Net Zero Packages to emergency red diesel deliveries, we’re on hand day and night to keep your business fuelled and your home warm.</p>
            <h3>Fast local deliveries</h3>
            <p>From our humble beginnings in 1947, selling lamp oil door to door in Heywood to our most recent acquisition of local business Star Oil, we continue to deliver the same reliable, friendly service first made famous almost a century ago.</p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<style lang="scss" scoped>
.about-main {
  margin-top: 2rem;

  .breadcrumb {
    background-color: transparent;

    .breadcrumb-item a {
      color: #f58634;

      &:hover {
        color: darken(#f58634, 7%)
      }
    }
  }
}
</style>
