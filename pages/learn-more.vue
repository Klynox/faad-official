<template>
  <div>
    <SecondaryHeader />
    <section class="about-main mb-5">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
            <li class="breadcrumb-item active" aria-current="page">Know more about our services</li>
          </ol>
        </nav>
        <div class="row">
          <div class="col-lg-9">
            <h1>Tired of Managing and Ordering Fuel for Your Business?</h1>
            <p>Crown Oil’s fuel management services take away the hassle of managing your fuel supply, enabling you to focus your resources on other areas of the business. At your request, we’ll monitor your fuel supplies and arrange deliveries accordingly, to make sure you never run out of fuel again.</p>
            <p>And best of all, it’s completely free throughout the UK when you choose Crown Oil as your fuel supplier.</p>
            <p>For those businesses who rely on 100% uptime, for example data centres and hospitals, continuity is imperative, as downtime puts you and your customers at risk. A loss of power is simply not an option.</p>
            <h4>How will fuel management benefit you?</h4>
            <ul>
              <li>Never worry about arranging future fuel deliveries again</li>
              <li>Eliminate the possibility of disruption to your business operations due to depleted fuel supplies</li>
              <li>National service available for businesses no matter where you’re located</li>
              <li>We use our deep knowledge of the fuel market to secure you the best prices, ordering fuel strategically in line with your usage to cut costs</li>
              <li>You’ll be assigned a dedicated Account Manager who’ll take care of all your fuel needs, giving you a direct link to every one of our products and services on offer</li>
              <li>It’s completely free!</li>
            </ul>
            <hr/>
            <h4 class="mt-5">How will fuel management benefit you?</h4>
            <ul>
              <li>Red diesel (gas oil)</li>
              <li>HVO fuel</li>
              <li>Diesel (DERV)</li>
              <li>Kerosene (paraffin)</li>
              <li>Heating oil (domestic and industrial fuel oil)</li>
            </ul>
            <p>Whether you still have any more questions about how our fuel management services could benefit your business, or can already see how a stress-free, fully fuelled future for your business is the way forward.</p>
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
