<template>
  <div class="job">
    <JobHero/> 
    <JobSummary/>
    <JobDetails/>
    <JobActions
      :loading="loading"
      @accept-job="acceptJob"
      @reject-job="rejectJob"
    />
    <JobFeedback
      :message="feedback.message"
      :styling="feedback.styling"
      @close-feedback="closeFeedback"
    />
  </div>
</template>

<script>
  import { computed } from 'vue';
import JobActions from '../components/job/JobActions.vue';
import JobDetails from '../components/job/JobDetails/JobDetails.vue';
import JobFeedback from '../components/job/JobFeedback.vue';
import JobHero from '../components/job/JobHero.vue';
import JobSummary from '../components/job/JobSummary.vue';
import { acceptJob, getWorkerMatches, rejectJob } from '../services/worker-service';
  
  export default {
    name: 'JobView',
    components: {
      JobActions,
      JobHero,
      JobDetails,
      JobSummary,
      JobFeedback,
    },
    inject: ['worker'],
    provide () {
      return {
        job: computed(() => this.job),
      };
    },
    data () {
      return {
        job: null,
        loading: false,
        matches: null,
        feedback: {
          message: null,
          styling: null,
        }
      };
    },
    methods: {
      async loadData() {
        try {
          this.loading = true;
          
          this.matches = await getWorkerMatches(this.worker.workerId);
          
          this.job = this.matches[0];

        } catch (err) {
          console.error(err);
        } finally {
          this.loading = false;
        }
      },
      getNextJob() {
        this.job = this.matches.find((elem) => elem.jobId !== this.job.jobId);
      },
      async acceptJob () {
        try {
          this.loading = true;
          
          const response = await acceptJob(this.worker.workerId, this.job.jobId);
          
          if (!response.success) {
            throw {
              message: response.message,
              errorCode: response.errorCode,
            }
          }
          
          this.openFeedback(
            'You sucessfully applied to this job!',
            'success',
          );
          
        } catch (err) {
          this.openFeedback(
            err.message || 'Something went wrong! Try it again.',
            err.message ? 'danger' : 'warning',
          );
        } finally {
          this.loading = false;
        }
      },
      async rejectJob () {
        try {
          this.loading = true;
          
          const response = await rejectJob(this.worker.workerId, this.job.jobId);
          
          if (!response.success) {
            throw {
              message: response.message,
              errorCode: response.errorCode,
            }
          }
          
          this.openFeedback(
            'You rejected this job!',
            'warning',
          );
          
        } catch (err) {
          this.openFeedback(
            err.message || 'Something went wrong! Try it again.',
            err.message ? 'danger' : 'warning',
          );
        } finally {
          this.loading = false;
        }
      },
      openFeedback (message, styling) {
        this.feedback = {
          message: message,
          styling: styling,
        };
      },
      closeFeedback () {
        this.feedback = {
          message: null,
          styling: null,
        };
        
        this.getNextJob();
      }
    },
    async mounted () {
      await this.loadData();
    },
  }
</script>

<style lang="scss" scoped>
  @import '../styles/core/colors';
.job {
  position: relative;
  display: flex;
  flex-flow: column;
  flex: 1;
  background-color: $white;
}
</style>