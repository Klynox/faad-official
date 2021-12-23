<template>
  <div>
    <SecondaryHeader />
    <section class="about-main mb-5">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
            <li class="breadcrumb-item active" aria-current="page">
              About FAAD
            </li>
          </ol>
        </nav>
        <div class="row">
          <div class="col-lg-9 info-block">
            <h1>Putting the Customer at the Heart of Everything We Do</h1>
            <h4 class="off-color-2">24/7 fuel-related support, come rain or shine.</h4>
            <p>
              As a local, family-run business, we understand just how important
              it is to have a fuel supplier that you can count on. From Net Zero
              Packages to emergency red diesel deliveries, we’re on hand day and
              night to keep your business fuelled and your home warm.
            </p>
            <div class="row mt-5">
              <div class="col-sm-6">
                <h4 class="off-color-1">24/7 fuel-related support, come rain or shine.</h4>
                <p>Finding the best price for your fuel is easy. It’s our friendly service and first-class local knowledge that puts us leagues ahead of the competition.</p>
                <p>Our philosophy is simple: to be large enough to fulfill nationwide deliveries whilst retaining the flexibility to arrange emergency deliveries on a same day / next day basis.</p>
              </div>
              <div class="col-sm-6">
                <h4 class="off-color-1">24/7 fuel-related support, come rain or shine.</h4>
                <p>With our headquarters located in Bury, Greater Manchester, we’re passionate about working with local businesses to help make a difference in our local community.</p>
                <p>From sponsoring events to donating alternative fuels to help reduce local emissions, we understand that it’s never been more important to support local and shop local.</p>
              </div>
            </div>
            <h3>Fast local deliveries</h3>
            <p>
              From our humble beginnings in 1947, selling lamp oil door to door
              in Heywood to our most recent acquisition of local business Star
              Oil, we continue to deliver the same reliable, friendly service
              first made famous almost a century ago.
            </p>
            <hr/>
            <h4>Our commitment to the environment</h4>
            <p>
              We have one simple goal: to be the number 1 supplier of alternative fuels to the UK market. With over 70 years’ experience, we recognise that our operations directly influence the environment and continuously seek ways to reduce own emissions and our customers’ too.
            </p>
            <h5>Crown Oil will be carbon neutral by April 2022 and Net Zero direct emissions (scope 1 and 2) by 2030 or sooner.</h5>
            <p>We’re proud to be the first and only UK fuel supplier to run our entire fleet on HVO fuel. We hope this move showcases its ability to perform faultlessly as a diesel alternative and encourages other businesses to go green in their fleet too.</p>
            <p>To reflect our environmental initiatives within the liquid fuel distribution industry, we are thrilled to have won UKIFDA’s Green Award for 2021. The award further showcases our commitment to leading the way in sustainability and environmental performance for a decarbonised future.</p>
            <hr/>
            <h4>What else are we doing to help our local community?</h4>
            <ul>
              <li>Prioritising vulnerable customers to ensure they don’t go cold this winter</li>
              <li>Guaranteeing fuel is delivered straight to your business with 24-48 hours of order</li>
              <li>Donating 1000 bottles of hand sanitiser to Bury Hospice and Springhill Hospice</li>
              <li>Sponsoring local junior race car driver, ADS1928Racing</li>
              <li>Supporting Rochdale Moorland Children’s Home</li>
              <li>Collecting food for The Food Bank</li>
              <li>Donating gifts to Mission Christmas</li>
            </ul>
            <h4 class="mt-5">Supporting local charities</h4>
            <p>We are passionate about support local causes and have donated to various ventures, including Heywood Foodbank, The Friends of Hopwood Park community café and the Boomerang Centre in Bury.</p>
            <p>We are thrilled to have received a certificate of recognition for our continued work with Heywood in Bloom which included the ‘Wonder Wall’ outside of the Crown Oil Arena, a big part of the Rochdale in Bloom project.</p>
            <h4>Sports teams and individuals</h4>
            <p>Crown Oil is proud to be the official sponsor of Rochdale AFC’s front of shirts since 2012 and stadium naming rights since 2016. RAFC is a great fit with Crown Oil as they are locally based and share the same vision and values.</p>
            <p>We have also been able to assist local race car driver, Adam, with achieving his karting dreams by paying for his kit which must meet rigorous health and safety standards.</p>
            <p>In addition to sponsorships, we run regular football kit competitions to help alleviate some of the financial burdens placed on schools. Keep an eye on our social media platforms for upcoming giveaways.</p>
            <hr/>
            <h4 class="mt-5">The Crown Oil Group</h4>
            <p>The Crown Oil Group continues to expand to offer our customers better UK coverage, and more than just oil and lubricants.</p>
            <p>To find out about each one of our brands, visit our dedicated Crown Oil Group Information Page.</p>
            <hr/>
            <h4 class="mt-5">Crown Oil’s History</h4>
            <p>Harry Greensmith began selling lamp oil door to door in Heywood, where he was popularly known as Harry Lamp Oil, thanks to his kind manner and reliable service.</p>
            <p>After years spent growing his business and supporting his local community during WW2, he expanded his product range to include the bulk sale and distribution of fuels and lubricants.</p>
            <p>We have since continued to grow, where we now specialise in providing efficient oil, alternative fuels and lubricant deliveries to both commercial and domestic customers, across the UK. Scroll down to the below timeline to follow our journey.</p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
export default {
  head: {
    title: "About FAAD Oil LTD",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "All about what we offer",
      },
    ],
  },
};
</script>
<style lang="scss" scoped>
.info-block {
  h1 {
    color: #f58634;
    margin-bottom: 1rem;
  }
  h2,
  h3,
  h4 {
    margin-bottom: 0.7rem;
  }
  img {
    height: auto;
    max-width: 100%;
  }
  .off-color-2 {
    color: #4b914b;
  }
}
.about-main {
  margin-top: 2rem;

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
