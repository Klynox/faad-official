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
    <b-modal id="bargain-response-dialog" hide-footer hide-header>
      <div class="container text-center">
        <img src="@/static/images/icon/tick.png" class="marker-img"/>
        <p class="dialog-para">
          We got your bargain. One of our agents will be in touch with you ASAP, if you’d like to get a more immediate response please dial or click to call
        </p>
        <a href="tel:+234700FAADOIL" class="btn btn-link active-contact">0700FAADOIL</a>
        <a href="tel:+2347003223645" class="btn btn-link active-contact">07003223645</a>
        <button role="button" class="close-dialog" @click="$bvModal.hide('bargain-response-dialog')">
          <img src="@/static/images/icon/close.png"/>
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
          <button v-b-modal.bargain-dialog class="btn call-to-action">Bargain</button>
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
        "20",
        "80",
        "200",
        "400",
      ],
      biddingPrices: [
        { text: "Please select", value: null },
        "N20,00",
        "N80,00",
        "N200,00",
        "N400,00",
      ],
      fuels: [
        "AGO",
        "PMS",
        "KPK",
      ],
      formData: {
        name: null,
        email: null,
        phone: null,
        fuel: 'AGO',
        litres: null,
        address: null,
        askingPrice: 'N350.77 / litre',
        biddingPrice: null
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
    isFormValid() {
      return (
        this.formData.name != null &&
        this.formData.name.trim() != '' &&
        this.formData.email != null &&
        this.formData.email.trim() != '' &&
        this.formData.fuel != null &&
        this.formData.fuel.trim() != '' &&
        this.formData.litres != null &&
        this.formData.litres.trim() != '' &&
        this.formData.address != null &&
        this.formData.address.trim() != '' &&
        this.formData.phone != null &&
        this.formData.phone.trim() != '' &&
        this.formData.biddingPrice != null &&
        this.formData.biddingPrice.trim() != '' &&
        this.formData.askingPrice != null &&
        this.formData.askingPrice.trim() != ''
      );
    },
    async onSubmit(event) {
      if (!this.isFormValid()) return;
      this.$bvModal.show('bargain-response-dialog')
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
