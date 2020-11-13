<script>
import { Radar } from 'vue-chartjs';

export default {
  extends: Radar,
  name: 'Radar',
  data() {
    return {
      chartdata: {
        labels: ['LS', 'LCCS', 'SEC', 'OMSD', 'PAS', 'DS', 'ATD', 'IP', 'STD', 'IE', 'PM'],
        datasets: [
          {
            label: 'SmartCT LGU Assessment Score',
            backgroundColor: '#87c540',
            circular: true,
            data: this.$store.state.results,
            lineTension: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  components: {
  },
  methods: {
  },
  mounted() {
    console.log(Radar);
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
