<template>
  <div>
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
          <a href="" class="btn call-to-action">Bargain</a>
        </div>
      </div>
      <div class="d-flex d-sm-none justify-content-center mt-3">
        <a href="" class="btn call-to-action">Bargain</a>
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
