<template>
  <div>
    <b-modal id="bargain-dialog" hide-footer>
      <template #modal-title>GET A QUOTE</template>
      <div>
        <b-form @submit.prevent="onSubmit" v-if="showForm">
          <div class="form-group">
            <div class="form-text label-text">Name</div>
            <b-form-input
              v-model="formData.name"
              type="text"
              placeholder="John Jane"
              :disabled="isLoading"
              required
            ></b-form-input>
          </div>

          <div class="form-group">
            <div class="form-text label-text">Email</div>
            <b-form-input
              v-model="formData.email"
              type="email"
              placeholder="Johnjane@xmail.com"
              :disabled="isLoading"
              required
            ></b-form-input>
          </div>

          <div class="form-group">
            <div class="form-text label-text">Phone</div>
            <b-form-input
              v-model="formData.phone"
              type="tel"
              placeholder="+23411221122"
              :disabled="isLoading"
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
                  :disabled="isLoading"
                  required
                ></b-form-select>
              </div>
              <div class="col-sm-6">
                <div class="form-text label-text">Litres</div>
                <b-form-select
                  v-model="formData.litres"
                  :options="litres"
                  :disabled="isLoading"
                  required
                ></b-form-select>
              </div>
            </div>
          </div>

          <div class="form-group">
            <div class="row">
              <div class="col-sm-6">
                <div class="form-text label-text">Asking price</div>
                <b-form-input
                  v-model="formData.askingPrice"
                  type="text"
                  disabled
                ></b-form-input>
              </div>
              <div class="col-sm-6">
                <div class="form-text label-text">Bidding price</div>
                <b-form-select
                  v-model="formData.biddingPrice"
                  :options="biddingPrices"
                  :disabled="isLoading"
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
              placeholder="Enter Address"
              :disabled="isLoading"
              required
            ></b-form-input>
          </div>

          <b-alert
            :show="dismissCountDown"
            dismissible
            variant="warning"
            @dismissed="dismissCountDown = 0"
            @dismiss-count-down="countDownChanged"
          >
            <p>
              {{ errorMsg }}
            </p>
          </b-alert>
          <div class="d-flex justify-content-center mt-5">
            <b-button type="submit" class="call-to-action" v-if="!isLoading"
              >send bargain</b-button
            >
            <b-button type="submit" class="call-to-action" v-else
              >loading...</b-button
            >
          </div>
        </b-form>
      </div>
    </b-modal>
    <b-modal id="bargain-response-dialog" hide-footer hide-header>
      <div class="container text-center">
        <img src="@/static/images/icon/tick.png" class="marker-img" />
        <p class="dialog-para">
          We got your bargain. One of our agents will be in touch with you ASAP,
          if you’d like to get a more immediate response please dial or click to
          call
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
          @click="$bvModal.hide('bargain-response-dialog')"
        >
          <img src="@/static/images/icon/close.png" />
          <span>Close</span>
        </button>
      </div>
    </b-modal>
    <div class="stats-wrapper" v-if="showStats">
      <h5 class="text-muted">Trending today</h5>
      <div class="d-flex justify-content-between mt-3">
        <div class="d-flex align-items-start flex-column">
          <div class="stat-title">Diesel</div>
          <div class="stat-unit">
            AGO<span class="value" :class="valueColor(stats.diesel.ago)"
              >{{ stats.diesel.ago }}%</span
            >
          </div>
          <div class="stat-price">N{{ stats.diesel.amount }}</div>
        </div>
        <div class="d-flex align-items-start flex-column">
          <div class="stat-title">Petrol</div>
          <div class="stat-unit">
            PMS<span class="value" :class="valueColor(stats.petrol.pms)"
              >{{ stats.petrol.pms }}%</span
            >
          </div>
          <div class="stat-price">N{{ stats.petrol.amount }}</div>
        </div>
        <div class="d-flex align-items-start flex-column">
          <div class="stat-title">Kerosine</div>
          <div class="stat-unit">
            KPK<span class="value" :class="valueColor(stats.kerosen.kpk)"
              >{{ stats.kerosen.kpk }}%</span
            >
          </div>
          <div class="stat-price">N{{ stats.kerosen.amount }}</div>
        </div>
        <div class="d-none d-sm-flex align-items-center flex-column">
          <button v-b-modal.bargain-dialog class="btn call-to-action">
            Bargain
          </button>
        </div>
      </div>
      <div class="d-flex d-sm-none justify-content-center mt-3">
        <button v-b-modal.bargain-dialog class="btn call-to-action">
          Bargain
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { DB } from "@/services/fireinit.js";
export default {
  data() {
    return {
      stats: {
        petrol: null,
        diesel: null,
        kerosen: null,
      },
      showForm: true,
      litres: [
        { text: "Please select", value: null },
        "500-999",
        "1,000-1,999",
        "2,000-2,300",
        "2,301-3,999",
        "4,000-5,999",
        "6,000-7,999",
        "8,000-9,999",
        "10,000-14,999",
        "15,000-19,999",
        "20,000-24,999",
        "25,000-35,999",
        "36,000+",
      ],
      biddingPrices: [
        { text: "Please select", value: null },
        "N20,00",
        "N80,00",
        "N200,00",
        "N400,00",
      ],
      fuels: ["AGO", "PMS", "KPK"],
      isLoading: false,
      errorMsg: null,
      dismissSecs: 10,
      dismissCountDown: 0,
      formData: {
        name: null,
        email: null,
        phone: null,
        fuel: "AGO",
        litres: null,
        address: null,
        askingPrice: "N350.77 / litre",
        biddingPrice: null,
      },
    };
  },
  created() {
    this.getStats();
  },
  computed: {
    showStats() {
      return (
        this.stats.petrol != null &&
        this.stats.diesel != null &&
        this.stats.kerosen != null
      );
    },
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
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
        this.formData.phone.trim() != "" &&
        this.formData.biddingPrice != null &&
        this.formData.biddingPrice.trim() != "" &&
        this.formData.askingPrice != null &&
        this.formData.askingPrice.trim() != ""
      );
    },
    clearForm() {
      this.errorMsg = null;
      this.isLoading = false;
      this.formData.name = null;
      this.formData.email = null;
      this.formData.fuel = null;
      this.formData.litres = null;
      this.formData.address = null;
      this.formData.phone = null;
      this.formData.biddingPrice = null;
    },
    async onSubmit(event) {
      this.errorMsg = null;
      if (!this.isFormValid()) return;
      this.isLoading = true;
      try {
        await this.$axios.post(`/faad-bargain`, this.formData);
        this.clearForm();
        this.$bvModal.hide("bargain-dialog");
        this.$bvModal.show("bargain-response-dialog");
      } catch (err) {
        console.log(err);
        this.isLoading = false;
        this.errorMsg =
          "Request failed. Please, check your internet connection and try again.";
        this.showAlert();
      }
    },
    valueColor: function (value) {
      return value < 0 ? "red" : "green";
    },
    async getStats() {
      try {
        const collection = DB.collection("rates-stat");
        collection.doc("petrol").onSnapshot((snapshot) => {
          const data = snapshot.data();
          this.stats.petrol = data;
        });
        collection.doc("diesel").onSnapshot((snapshot) => {
          const data = snapshot.data();
          this.stats.diesel = data;
        });

        collection.doc("kerosen").onSnapshot((snapshot) => {
          const data = snapshot.data();
          this.stats.kerosen = data;
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
