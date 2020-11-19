<template>
    <div class="assess flex-grow flex flex-col">
        <div v-if="!loading" class="container py-10 mx-auto px-5 md:px-20 flex flex-col">
            <div  id="quiz" class="flex flex-col max-w-4xl w-full mx-auto">
                <h2 class="text-4xl font-medium tracking-wide pb-2 border-b-2">
                    {{ `${index+1}/11 ${qList[index].theme}` }}
                </h2>
                <div v-for="(q, qIndex) in qList[index].questions"
                class="flex flex-col mt-4 border-2 border-orange-600 p-4" :key="qIndex">
                  <p class="text-2xl tracking-wide py-4 h-64">
                      {{ q }}
                  </p>
                  <div class="flex justify-center items-center
                  space-x-10 py-4 pb-10 mt-6">
                      <div class="items-center align-center">
                          <input class="radio-button true" type="radio"
                          :id="`true${qIndex}`" :name="`assessment${qIndex}`" value=true>
                          <label :for="`true${qIndex}`"
                          class="text-xl font-medium select-none">Yes</label>
                      </div>
                      <div class="items-center align-center">
                          <input class="radio-button false" type="radio"
                          :id="`false${qIndex}`" :name="`assessment${qIndex}`" value=false>
                          <label :for="`false${qIndex}`"
                          class="text-xl font-medium select-none">No</label>
                      </div>
                      <div class="items-center align-center">
                          <input class="radio-button false" type="radio"
                          :id="`false${qIndex}`" :name="`assessment${qIndex}`" value=false>
                          <label :for="`false${qIndex}`"
                          class="text-xl font-medium select-none">Unsure</label>
                      </div>
                  </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center space-x-4 my-10">
          <a href="#" @click="nextQuestion()"
          class="bg-primary border-2 border-primary text-white
          px-8 py-3 font-medium tracking-wide select-none">
            Next
          </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Assess',
  data() {
    return {
      index: 0,
      qNum: 0,
      assessA1: [],
      assessA2: [],
      loading: true,
      qList: [],
      lgu: {
        theme: 'LGU Strategy',
        questions: [
          '1. Do you have a clear vision of what you’d like your LGU to look like in the future?',
          '2. Do you have a set of goals, priorities and actions?',
          '3. Do you know what main challenges your LGU needs to address?',
          '4. Do LGU stakeholders and LGU users have input into your LGU vision?',
          '5. Is your vision being revised regularly in light of both the changing urban or rural environment and the availability of technological solutions?',
          '6. Have you conducted a horizon scanning exercise including a PEST and SWOT analysis to enhance your smart LGU development?',
          '7. Is your strategy citizen centric?',
          '8. Have you mapped the skills needed to deliver smart LGU projects?',
          '9. Do you have established a common terminology agreed among all LGU stakeholders?',
          '10. Are you using insights obtained through data analytics – or similar methods - to inform your decision and policy making process?',
        ],
      },
      lccs: {
        theme: 'Localizing Climate Change and Sustainability',
        questions: [
          '1. Do you have an updated Local Climate Change Action Plan?',
          '2. Is your Local Climate Change Action Plan consistent with the provisions of the Local Government Code, United Nations Framework Convention on Climate Change (UNFCCC) and National Climate Change Action Plan?',
          '3. Have you established a Climate change information system at the local level?',
          '4. Is the Integrated Water Resource Management (IWRM) with CCA-DDR integrated in your local comprehensive land and water use plans?',
          '5. Do you have local programs to enhance the knowledge and capaLGU of the LGU and communities on integrated ecosystem-based management approach?',
          '6. Do you have an implementing resettlement plan for population congestion and to secure and manage disaster prone and affected areas?',
          '7. Have you developed a municipal or LGU sustainability plan focusing on sustainable production and consumption, green workforce, transit-oriented development, and CC adaptation and building retrofits?',
          '8. Do you have local and community programs enhancing the knowledge and capaLGU for CCA-DRRM?',
          '9. Do you implement Health emergency response, preparedness and post-disaster management at the local or community level?',
          '10. Do you have a local database on climate-smart industries and services to monitor and integrate existing and new climate-smart industries and services within existing business registration system?',
        ],
      },
      sec: {
        theme: 'Stakeholder Engagement & Communication',
        questions: [
          '1. Are cross-departmental representatives, private sector experts and citizen part of the leadership team?',
          '2. Do you engage the citizen in the planning processes for your LGU?',
          '3. Do you act upon the collectively agreed decisions?',
          '4. Do you keep stakeholders informed on decisions taken?',
          '5. Do you capture the views and ideas of the different LGU stakeholders to improve services?',
          '6. Do you have a digital inclusion strategy to enable to uptake of digital services by all segments of the population?',
          '7. Are new suggestions for engagement by citizens and business considered and leveraged where appropriate?',
          '8. Are you integrating digital and non-digital channels to enable stakeholder participation and gather opinion?',
          '9. Have you mapped the stakeholder environment in your LGU?',
          '10. Are you measuring in regular intervals citizen satisfaction with the LGU – its services, its quality of life…?',
        ],
      },
      omsd: {
        theme: 'Operating Model & Service Delivery',
        questions: [
          '1. Are you employing strategies to breakdown silo working?',
          '2. Are you regularly reviewing the state of suppliers?',
          '3. Do you have a portfolio of cross-departmental projects?',
          '4. Are you developing the skills of the municipal workforce in areas like agile project management, user experience, or digital business models?',
          '5. Are your service initiatives characterised by agility and focused on innovation?',
          '6. Are smart LGU pilot projects or demonstrators taking place?',
          '7. Are you reorganising departments and agencies in accordance with service delivery goals?',
          '8. Are you performing cost-benefit analysis for Smart LGU projects to determine an effective resource allocation?',
          '9. Are you engaging with other cities to learn lessons and exchange experiences?',
          '10. Do you prioritise shared architecture solutions and interoperability to break down barriers between departments?',
        ],
      },
      pam: {
        theme: 'Physical Asset Management',
        questions: [
          '1. Are there joint investment plans for the LGU wide deployment of connected assets with multipurpose sensors?',
          '2. Do you have a LGU wide asset management register of physical and digital assets is in place?',
          '3. Are you upgrading existing physical assets to capture data throughout the LGU?',
          '4. Do you have maintenance arrangements in place to take over the responsibility for assets developed by and/or managed by LGU stakeholders that leave the LGU?',
          '5. Do you know who owns the assets in your LGU?',
          '6. Are you using predictive methodologies to proactively manage LGU assets?',
          '7. Do you have LGU wide management of critical assets crucial to urban infrastructure operations?',
          '8. Do you have a public-private infrastructure pipeline in place?',
          '9. Is asset data opened across service providers to improve public services?',
          '10. Does real time asset data support service delivery?',
        ],
      },
      ds: {
        theme: 'Data Strategy',
        questions: [
          '1. Are you managing your data?',
          '2. Are data analytics applied on combined data sets to acquire new insights support, service delivery, information sharing or the better utilization of resources?',
          '3. Are you using data from various sources to create a complete visual overlay of your LGU?',
          '4. Have data management standards and processes been implemented?',
          '5. Have you made interoperability key to your successful data strategy?',
          '6. Are you identifying opportunities to increase real-time data capture?',
          '7. Have you reached agreements with partners about data sharing, data privacy and data management policies?',
          '8. Do you continually monitor, review and develop data processes in an agile manner?',
          '9. Is your data used for predictive models to improve services?',
          '10. Are you using real-time data to respond to non-predictable events?',
        ],
      },
      atd: {
        theme: 'Access to Data',
        questions: [
          '1. Are you making LGU data openly available to the wider public?',
          '2. Are you operating a data platform for open data?',
          '3. Did you consider user-friendliness when designing the data portal?',
          '4. Do physical and virtual spaces exist to support LGU data communities?',
          '5. Do you have data sharing targets and performance measures?',
          '6. Did you engage with organisations inside and outside of government to overcome data sharing barriers and make access to data fully operational?',
          '7. Is all LGU data available through a single data hub, including data from government services and external stakeholders (such as utilities…)?',
          '8. Is your data shared more widely across departments?',
          '9. Are your performance metrics accessible to the public?',
          '10. Is data published to agreed formats?',
        ],
      },
      ictp: {
        theme: 'ICT Plan',
        questions: [
          '1. Does the existing ICT infrastructure support your smart ambitions?',
          '2. Are you providing LGU wide access to next generation broadband for both fixed and wireless provisions?',
          '3. Are connected assets deployed LGU wide?',
          '4. Are you continuously reviewing your ICT architecture?',
          '5. Do you have an immediate response mechanism to ICT system failure?',
          '6. Is your ICT capable of supporting the growing number of sensors in the LGU environment – either embedded in the built environment or as carried digital devices?',
          '7. Have you conducted an analysis of your existing ICT infrastructure?',
          '8. Is your LGU using standards based ICT equipment?',
          '9. Does your digital infrastructure allow real-time data to be generated?',
          '10. Are you making the location of the digital and communications infrastructure available for the benefit of the LGU?',
        ],
      },
      std: {
        theme: 'Standards',
        questions: [
          '1. Have you considered using open standards?',
          '2. Are you selecting suppliers based on their willingness to adopt standards that you’ve selected?',
          '3. Do you exploit standards that foster cross department working and decision making?',
          '4. Are you using standards to create integral technology architectures?',
          '5. Are you using and are you encouraging other LGU stakeholders to adopt smart LGU vocabularies created by standards developing organisations (SDOs)?',
          '6. Have you identified the key areas for interoperability in your LGU?',
          '7. Have you engaged with your national SDO or one of the international SDOs about your smart development?',
          '8. Are you using standards to break down silo operations in government and industry?',
          '9. Have you identified bottlenecks that standards might help resolve?',
          '10. Are you aware of the different smart LGU initiatives undertaken by SDOs?',
        ],
      },
      ie: {
        theme: 'Innovation Ecosystem',
        questions: [
          '1. Is your LGU committed to innovation?',
          '2. Do you have an incubator space to harness new ideas and innovations?',
          '3. Are you investing in innovation to stimulate new ideas trough competitions, hackathons, etc.?',
          '4. Are you engaging with start-ups, SMEs, and academia located in your LGU?',
          '5. Are you empowering citizens to be part of this urban innovation movement?',
          '6. Are you taking calculated risks when implementing new solutions?',
          '7. Are you promoting the work of innovative data-driven start-ups to drive public sector reform?',
          '8. Have successful prototypes been rolled out LGUwide?',
          '9. Are the needs of the LGU at the heart of the innovation cycle?',
          '10. Are running event for like-minded people to network and develop ideas together?',
        ],
      },
      pmgt: {
        theme: 'Performance management',
        questions: [
          '1. Are you using an outcomes-focused performance metrics to monitor service solutions, processes, and staff?',
          '2. Do you know how mature your LGU is in terms of its governance and its sectorial system?',
          '3. Do you have a widely agreed measurement framework of key performance indicators (KPIs) in place?',
          '4. Are you aware of ISO 37120 indicators?',
          '5. Do you have established clear baselines for all benefits?',
          '6. Do you have established measurable success criteria for the benefits you are trying to achieve?',
          '7. Do you have wide stakeholder involvement in the LGU performance monitoring process?',
          '8. Do you assess ‘quality of life’?',
          '9. Are you using the results of performance monitoring process to engage with other similar cities to exchange experiences and learn from success as well as failure?',
          '10. Is your performance monitoring process transparent?',
        ],
      },
    };
  },
  components: {
  },
  methods: {
    nextQuestion() {
      const answers = document.getElementsByClassName('true');
      let prelim = 0;
      answers.forEach((answer) => {
        if (answer.checked) {
          prelim += 1;
          this.$store.state.points += 1;
        }
      });
      this.$store.state.results.push(prelim);
      const radios = document.getElementsByClassName('radio-button');
      radios.forEach((radio) => {
        // eslint-disable-next-line no-param-reassign
        radio.checked = false;
      });
      if (this.index < 10) {
        window.scrollTo(0, 0);
        this.index += 1;
      } else {
        this.$router.push('/results');
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.qList = [
        this.lgu,
        this.lccs,
        this.sec,
        this.omsd,
        this.pam,
        this.ds,
        this.atd,
        this.ictp,
        this.std,
        this.ie,
        this.pmgt,
      ];
      this.loading = false;
      window.scrollTo(0, 0);
    });
  },
};
</script>

<style scoped>
input[type=radio] {
    border: 0px;
    width: 100%;
    height: 2em;
}
</style>
