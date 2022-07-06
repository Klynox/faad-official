<template>
  <div>
    <b-modal id="bargain-dialog" hide-footer>
      <template #modal-title>GET A QUOTE</template>
      <div>
        <b-form @submit.prevent="onSubmit" v-if="showForm">
          <div class="form-group">
            <div class="form-text label-text">Name</div>
            <b-form-input v-model="formData.companyName" type="text" placeholder="Enter Your name" :disabled="isLoading"
              required></b-form-input>
          </div>

          <div class="form-group">
            <div class="form-text label-text">Email</div>
            <b-form-input v-model="formData.email" type="email" placeholder="Enter your email address"
              :disabled="isLoading" required></b-form-input>
          </div>

          <div class="form-group">
            <div class="form-text label-text">Phone</div>
            <b-form-input v-model="formData.phoneNumber" type="tel" placeholder="Enter phone number"
              :disabled="isLoading" required></b-form-input>
          </div>

          <div class="form-group">
            <div class="row">
              <div class="col-sm-6">
                <div class="form-text label-text">Fuel</div>
                <b-form-select v-model="formData.fuel" :options="fuels" :disabled="isLoading" required></b-form-select>
              </div>
              <div class="col-sm-6">
                <div class="form-text label-text">Litres</div>
                <b-form-input v-model="formData.quantity" type="tel" placeholder="Enter Litres"
                  :disabled="isLoading" required></b-form-input>
              </div>
            </div>
          </div>

          <div class="form-group">
            <div class="row">
              <div class="col-sm-6">
                <div class="form-text label-text">Asking price</div>
                <b-form-input v-model="formData.askingPrice" type="text" disabled></b-form-input>
              </div>
              <div class="col-sm-6">
                <div class="form-text label-text">Bidding price</div>
                <b-form-select v-model="formData.biddingPrice" :options="biddingPrices" :disabled="isLoading" required>
                </b-form-select>
              </div>
            </div>
          </div>

          <div class="form-group">
            <div class="form-text label-text">Address</div>
            <b-form-input v-model="formData.address" type="text" placeholder="Enter Address" :disabled="isLoading"
              required></b-form-input>
          </div>

          <b-alert :show="dismissCountDown" dismissible variant="warning" @dismissed="dismissCountDown = 0"
            @dismiss-count-down="countDownChanged">
            <p>
              {{ errorMsg }}
            </p>
          </b-alert>
          <div class="d-flex justify-content-center mt-5">
            <b-button type="submit" class="call-to-action" v-if="!isLoading">send bargain</b-button>
            <b-button type="submit" class="call-to-action" v-else>loading...</b-button>
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
        <a href="tel:+234700FAADOIL" class="btn btn-link active-contact">0700FAADOIL</a>
        <a href="tel:+2347003223645" class="btn btn-link active-contact">07003223645</a>
        <button role="button" class="close-dialog" @click="$bvModal.hide('bargain-response-dialog')">
          <img src="@/static/images/icon/close.png" />
          <span>Close</span>
        </button>
      </div>
    </b-modal>
    <div class="stats-wrapper" v-if="showStats">
      <h5 class="text-muted">Trending today</h5>
      <div class="d-flex justify-content-between mt-3">
        <div class="d-flex align-items-start flex-column">
          <div class="stat-title">{{ stats.diesel.productName }}</div>
          <div class="stat-unit">
            {{ stats.diesel.productCode }}<span class="value" :class="valueColor(stats.diesel.percentageDifference)">{{
            stats.diesel.percentageDifference
            }}%</span>
          </div>
          <div class="stat-price">N{{ stats.diesel.newPrice }}</div>
        </div>
        <div class="d-flex align-items-start flex-column">
          <div class="stat-title">{{ stats.petrol.productName }}</div>
          <div class="stat-unit">
            {{ stats.petrol.productCode }}<span class="value" :class="valueColor(stats.petrol.percentageDifference)">{{
            stats.petrol.percentageDifference
            }}%</span>
          </div>
          <div class="stat-price">N{{ stats.petrol.newPrice }}</div>
        </div>
        <div class="d-flex align-items-start flex-column">
          <div class="stat-title">{{ stats.kerosen.productName }}</div>
          <div class="stat-unit">
            {{ stats.kerosen.productCode }}<span class="value"
              :class="valueColor(stats.kerosen.percentageDifference)">{{
              stats.kerosen.percentageDifference
              }}%</span>
          </div>
          <div class="stat-price">N{{ stats.kerosen.newPrice }}</div>
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
      biddingPrices: [
        { text: "Please select", value: null },
        "2000",
        "8000",
        "20000",
        "40000",
      ],
      fuels: ["AGO", "PMS", "KPK"],
      isLoading: false,
      errorMsg: null,
      dismissSecs: 10,
      dismissCountDown: 0,
      formData: {
        companyName: null,
        email: null,
        phoneNumber: null,
        fuel: "AGO",
        quantity: null,
        address: null,
        clientId: 'None',
        askingPrice: "350.77",
        biddingPrice: null,
        status: 'pending'
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
        this.formData.companyName != null &&
        this.formData.companyName.trim() != "" &&
        this.formData.email != null &&
        this.formData.email.trim() != "" &&
        this.formData.fuel != null &&
        this.formData.fuel.trim() != "" &&
        this.formData.quantity != null &&
        this.formData.quantity.trim() != "" &&
        this.formData.address != null &&
        this.formData.address.trim() != "" &&
        this.formData.phoneNumber != null &&
        this.formData.phoneNumber.trim() != "" &&
        this.formData.biddingPrice != null &&
        this.formData.biddingPrice.trim() != "" &&
        this.formData.askingPrice != null &&
        this.formData.askingPrice.trim() != ""
      );
    },
    clearForm() {
      this.errorMsg = null;
      this.isLoading = false;
      this.formData.companyName = null;
      this.formData.email = null;
      this.formData.fuel = null;
      this.formData.quantity = null;
      this.formData.address = null;
      this.formData.phoneNumber = null;
      this.formData.biddingPrice = null;
    },
    async onSubmit(event) {
      this.errorMsg = null;
      if (!this.isFormValid()) return;
      this.isLoading = true;
      try {
        await this.$axios.post(`https://faadoli.herokuapp.com/api/v1/bargain`, this.formData);
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
        const res = await this.$axios.get(
          `https://faadoli.herokuapp.com/api/v1/product/only`
        );
        this.stats.kerosen = res.data.data.products[0];
        this.stats.diesel = res.data.data.products[2];
        this.stats.petrol = res.data.data.products[3];
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
