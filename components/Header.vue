<template>
  <div>
    <HeadBar />
    <div class="header">
      <div class="overlay"></div>
      <b-navbar class="menu-bar" toggleable="md" type="light">
        <b-navbar-brand href="#">
          <img class="logo" src="@/static/images/logo.png" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Products" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <template #button-content>About</template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="#" class="support"
              >Talk to someone
              <img src="@/static/images/icon/support-light.png"
            /></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <b-modal id="modal-1" hide-footer>
        <template #modal-title>PLACE ORDER</template>
        <div>
          <b-form @submit.prevent="onSubmit" v-if="showForm">
            <div class="form-group">
              <div class="form-text label-text">Name</div>
              <b-form-input
                v-model="formData.name"
                type="text"
                placeholder="John Jane"
                required
              ></b-form-input>
            </div>

            <div class="form-group">
              <div class="form-text label-text">Email</div>
              <b-form-input
                v-model="formData.email"
                type="email"
                placeholder="Johnjane@xmail.com"
                required
              ></b-form-input>
            </div>

            <div class="form-group">
              <div class="form-text label-text">Phone</div>
              <b-form-input
                v-model="formData.phone"
                type="tel"
                placeholder="+23411221122"
                required
              ></b-form-input>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-text label-text">Fuel</div>
                  <b-form-select
                    v-model="formData.fuel"
                    :options="fuels"
                    required
                  ></b-form-select>
                </div>
                <div class="col-sm-6">
                  <div class="form-text label-text">Litres</div>
                  <b-form-select
                    v-model="formData.litres"
                    :options="litres"
                    required
                  ></b-form-select>
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="form-text label-text">Address</div>
              <b-form-input
                v-model="formData.address"
                type="text"
                placeholder="1, kiko cresent, Gra, PHC"
                required
              ></b-form-input>
            </div>

            <div class="d-flex justify-content-center mt-5">
              <b-button type="submit" class="call-to-action"
                >send bargain</b-button
              >
            </div>
          </b-form>
        </div>
      </b-modal>
      <b-modal id="order-response-dialog" hide-footer hide-header>
        <div class="container text-center">
          <img src="@/static/images/icon/tick.png" class="marker-img" />
          <p class="dialog-para">
            Thank you for your order.  One of our agents will be in touch with you ASAP, if you’d like to get a more immediate response please dial or click to call
          </p>
          <a href="tel:+234700FAADOIL" class="btn btn-link active-contact"
            >0700FAADOIL</a
          >
          <a href="tel:+2347003223645" class="btn btn-link active-contact"
            >07003223645</a
          >
          <button
            role="button"
            class="close-dialog"
            @click="$bvModal.hide('order-response-dialogg')"
          >
            <img src="@/static/images/icon/close.png" />
            <span>Close</span>
          </button>
        </div>
      </b-modal>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="header-caption">
              <h1>Quality fuel at your doorstep</h1>
              <p>
                FAAD runs a 24/7 fuel supply and procurement service to over 200
                offices, homes, schools and events.
              </p>
              <button v-b-modal.modal-1 class="btn call-to-action">
                Place order
              </button>
            </div>
          </div>
        </div>
        <img src="@/static/images/tanker.svg" class="img-tanker" />
        <div class="partners">
          <div class="partners-images">
            <img src="@/static/images/partners/1.png" />
            <img src="@/static/images/partners/2.png" />
            <img src="@/static/images/partners/3.png" />
            <img src="@/static/images/partners/4.png" />
            <img src="@/static/images/partners/5.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showForm: true,
      litres: [
        { text: "Please select", value: null },
        "20",
        "80",
        "200",
        "400",
      ],
      fuels: ["AGO", "PMS", "KPK"],
      formData: {
        name: null,
        email: null,
        phone: null,
        fuel: "AGO",
        litres: null,
        address: null,
      },
    };
  },
  methods: {
    isFormValid() {
      return (
        this.formData.name != null &&
        this.formData.name.trim() != "" &&
        this.formData.email != null &&
        this.formData.email.trim() != "" &&
        this.formData.fuel != null &&
        this.formData.fuel.trim() != "" &&
        this.formData.litres != null &&
        this.formData.litres.trim() != "" &&
        this.formData.address != null &&
        this.formData.address.trim() != "" &&
        this.formData.phone != null &&
        this.formData.phone.trim() != ""
      );
    },
    async onSubmit(event) {
      if (!this.isFormValid()) return;
    },
  },
};
</script>
<style lang="scss">
.header {
  position: relative;
  background: #aaafaf;
  min-height: 48rem;
  background-image: url("/images/bg.png");
  background-size: cover;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  .partners {
    position: absolute;
    bottom: 3rem;

    .partners-images {
      display: inline-block;
    }
    .partners-images img + img {
      margin-left: 1.5rem;
    }
  }
}
.logo {
  height: 20px;
}
.navbar {
  padding-left: 3.75rem;
  padding-right: 3.75rem;
  padding-top: 1.5rem;
}
.navbar-light .navbar-nav .nav-link {
  font-weight: 600;
  font-size: 0.98rem;
  line-height: 24px;
  color: #ffffff;
}
.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .show > .nav-link {
  color: #b4b8b8;
}
.navbar-light .navbar-toggler {
  color: #fff;
}
.navbar-light .navbar-toggler-icon {
  background-image: url("/images/icon/menu.svg");
}
.dropdown-toggle::after {
  vertical-align: middle;
}
@media (max-width: 767px) {
  .header {
    height: 100vh;
  }

  .partners {
    position: relative !important;
    margin-top: 8rem;
  }
}
@media (min-width: 768px) {
  .nav-item + .nav-item {
    margin-left: 2rem;
  }
}
.nav-link.support img {
  height: 16px;
  width: 16px;
  margin-left: 0.625rem;
}
.header-caption {
  margin-top: 80px;
  margin-left: 10px;

  h1 {
    color: #fff;
    font-size: 2.7rem;
  }
  p {
    color: #ffffff;
    line-height: 1.3rem;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.2rem;
  }

  .call-to-action {
    background: #f58634;
    border-color: transparent;
    border-radius: 0;
    color: #fff;
    padding: 0.7rem 1.79rem;
    text-transform: uppercase;
  }
}
.img-tanker {
  max-height: 20.1rem;
  position: absolute;
  right: 0rem;
  bottom: 11rem;
}
@media (max-width: 950px) {
  .img-tanker {
    display: none;
  }
}
</style>
