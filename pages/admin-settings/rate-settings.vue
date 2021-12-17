<template>
  <div>
    <b-jumbotron>
      <template #header>Sales Rate</template>

      <template #lead>
        Updating this will reflect immediateluy on the homepage so be careful of
        the values you enter
      </template>

      <hr class="my-4" />

      <div>
        <div class="">Loading...</div>
        <b-form @submit.prevent="onSubmit" v-if="showForm">
          <div class="form-group">
            <div class="form-text text-muted">Diesel Rates</div>
            <div class="row">
              <div class="col-sm-6">
                <b-form-input
                  v-model="formData.diesel.ago"
                  type="tel"
                  placeholder="AGO"
                  required
                ></b-form-input>
              </div>
              <div class="col-sm-6">
                <b-form-input
                  v-model="formData.diesel.amount"
                  type="tel"
                  placeholder="Enter Amount"
                  required
                ></b-form-input>
              </div>
            </div>
            <small tabindex="-1" class="form-text text-muted"
              >Do not enter any non numerical symbols in the inputs
              above.</small
            >
          </div>

          <div class="form-group">
            <div class="form-text text-muted">Petrol Rates</div>
            <div class="row">
              <div class="col-sm-6">
                <b-form-input
                  v-model="formData.petrol.pms"
                  type="tel"
                  placeholder="Enter PMS Value"
                  required
                ></b-form-input>
              </div>
              <div class="col-sm-6">
                <b-form-input
                  v-model="formData.petrol.amount"
                  type="tel"
                  placeholder="Enter Amount"
                  required
                ></b-form-input>
              </div>
            </div>
            <small tabindex="-1" class="form-text text-muted"
              >Do not enter any non numerical symbols in the inputs
              above.</small
            >
          </div>

          <div class="form-group">
            <div class="form-text text-muted">Kerosen Rates</div>
            <div class="row">
              <div class="col-sm-6">
                <b-form-input
                  v-model="formData.kerosen.kpk"
                  type="tel"
                  placeholder="KPK"
                  required
                ></b-form-input>
              </div>
              <div class="col-sm-6">
                <b-form-input
                  v-model="formData.kerosen.amount"
                  type="tel"
                  placeholder="Enter Amount"
                  required
                ></b-form-input>
              </div>
            </div>
            <small tabindex="-1" class="form-text text-muted"
              >Do not enter any non numerical symbols in the inputs
              above.</small
            >
          </div>

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
        <br>
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
        <b-alert
          :show="successDismissCountDown"
          dismissible
          variant="success"
          @dismissed="successDismissCountDown = 0"
          @dismiss-count-down="successCountDownChanged"
        >
          <p>
            {{ successMsg }}
          </p>
        </b-alert>
      </div>
    </b-jumbotron>
  </div>
</template>
<script>
import { DB } from "@/services/fireinit.js";
export default {
  data() {
    return {
      formData: {
        petrol: null,
        diesel: null,
        kerosen: null,
      },
      dismissSecs: 10,
      dismissCountDown: 0,
      successDismissSecs: 10,
      successDismissCountDown: 0,
      errorMsg: null,
      successMsg: null,
    };
  },
  created() {
    this.getStats();
  },
  computed: {
    showForm() {
      return (
        this.formData.petrol != null &&
        this.formData.diesel != null &&
        this.formData.kerosen != null
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
    successCountDownChanged(dismissCountDown) {
      this.successDismissCountDown = dismissCountDown;
    },
    successShowAlert() {
      this.successDismissCountDown = this.dismissSecs;
    },
    async getStats() {
      try {
        const collection = DB.collection("rates-stat");
        const petrolSnapshot = await collection.doc("petrol").get();
        if (petrolSnapshot.exists) {
          this.formData.petrol = petrolSnapshot.data();
        }

        const dieselSnapshot = await collection.doc("diesel").get();
        if (dieselSnapshot.exists) {
          this.formData.diesel = dieselSnapshot.data();
        }

        const kerosenSnapshot = await collection.doc("kerosen").get();
        if (kerosenSnapshot.exists) {
          this.formData.kerosen = kerosenSnapshot.data();
        }
      } catch (err) {
        this.errorMsg =
          "Request failed. Please, check your internet connection and try again.";
        this.showAlert();
      }
    },
    isFormValid() {
      return (
        this.formData.petrol != null &&
        this.formData.diesel != null &&
        this.formData.kerosen != null
      );
    },
    async onSubmit(event) {
      try {
        if (!this.isFormValid()) return;
        alert("Are you sure you want to update this information?");
        const collection = DB.collection("rates-stat");

        await collection
          .doc("petrol")
          .set(this.formData.petrol, { merge: true });
        await collection
          .doc("diesel")
          .set(this.formData.diesel, { merge: true });
        await collection
          .doc("kerosen")
          .set(this.formData.kerosen, { merge: true });
          this.successMsg = 'Rates updated!';
          this.successShowAlert();
      } catch (err) {
        this.errorMsg =
          "Request failed. Please, check your internet connection and try again.";
        this.showAlert();
      }
    },
  },
};
</script>
