<script>
import { Radar } from 'vue-chartjs';

export default {
  extends: Radar,
  name: 'Radar',
  data() {
    return {
      chartdata: {
        labels: ['LGU Strategy', 'Localizing Climate Change and Sustainability ', 'Stakeholder Engagement & Communication', 'Operating Model & Service Delivery', 'Physical Asset Management', 'Data Strategy', 'Access to Data', 'ICT Plan', 'Standards', 'Innovation Ecosystem', 'Performance management'],
        datasets: [
          {
            label: 'SmartCT LGU Assessment Score',
            backgroundColor: '#87c540',
            color: '#87c540',
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
