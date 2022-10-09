<template>
  <div class="job-summary">
    <div class="distance">
      <strong>Distance</strong>
      <div>{{ getMilesToTravel }} miles</div>
    </div>
    <div class="rate">
      <strong>Hourly Rate</strong>
      <div><sup>$</sup>{{ getHourlyRate }}</div>
    </div>
  </div>
</template>

<script>
  import { convertCentsToDollar } from '../../services/utils-service';
  
  export default {
    name: 'JobSummayComponent',
    inject: ['job'],
    computed: {
      getMilesToTravel () {
        return this.job?.milesToTravel?.toFixed(1);
      },
      
      getHourlyRate () {
        return convertCentsToDollar(this.job?.wagePerHourInCents);
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/core/spacing';
  @import '../../styles/core/colors';
  
  .job-summary {
    display: flex;
    justify-content: space-between;
    padding: $space-sm $space;
    background-color: $green;
    
    strong {
      font-weight: bold;
      font-size: 0.7rem;
    }
    
    .distance, .rate {
      display: flex;
      flex-direction: column;
      gap: $space-xxs;
      
      div {
        color: $white;
        font-weight: bold;
        font-size: 1.5rem;
        
        sup {
          vertical-align: super;
          font-size: .8rem;
          margin-right: 2px;
        }
      } 
    }
    
    .rate {
      align-items: flex-end;
    }
  }
</style>