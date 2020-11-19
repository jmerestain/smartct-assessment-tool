<script>
import { Radar } from 'vue-chartjs';

export default {
  extends: Radar,
  name: 'Radar',
  data() {
    return {
      chartdata: {
        labels: ['LS', 'LCCS', 'SEC', 'OMSD', 'PAM', 'DS', 'ATD', 'IP', 'STD', 'IE', 'PM'],
        datasets: [
          {
            label: 'SmartCT LGU Assessment Score',
            backgroundColor: 'rgba(135, 197, 64, 0.6)',
            circular: true,
            data: this.$store.state.results,
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
