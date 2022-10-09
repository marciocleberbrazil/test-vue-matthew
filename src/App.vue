<template>
  <div id="app">
    <Header/>
    <main>
      <div class="main-content">
        <JobView
          v-if="worker"
        />
      </div>
    </main>
  </div>
</template>

<script>
import { computed } from 'vue';
import Header from './components/Header.vue';
import { getWorkerProfile } from './services/worker-service';
import JobView from './views/JobView.vue';

export default {
  name: 'App',
  provide () {
    return {
      worker: computed(() => this.worker),
    };
  },
  components: {
    Header,
    JobView,
  },
  data () {
    return {
      loading: false,
      workerId: '7f90df6e-b832-44e2-b624-3143d428001f',
      worker: null,
    };
  },
  methods: {
    async loadData() {
      try {
        
        this.loading = true;
        this.worker = await getWorkerProfile(this.workerId);

      } catch (err) {
        console.error(err);
      } finally {
        this.loading = false;
      }
    }
  },
  async mounted () {
    await this.loadData();
  },
}
</script>
