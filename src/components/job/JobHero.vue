<template>
  <div class="job-hero">
    <img
      :src="imageUrl"
      :alt="jobTitle">
      
    <div class="info">
      <h1>{{ jobTitle }}</h1>
      <p>{{ companyName }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'JobHeroComponent',
    inject: ['job'],
    computed: {
      imageUrl () {
        return this.job?.jobTitle.imageUrl;
      },
      jobTitle () {
        return this.job?.jobTitle.name;
      },
      companyName () {
        return this.job?.company.name;
      },
    },
  }
</script>

<style lang="scss" scoped>
@import '../../styles/core/spacing';

.job-hero {
  img {
    width: 100%;
    max-width: 100%;
  }
  
  .info {
    padding: $space-sm $space $space-xs;
    
    h1 {
      margin-bottom: $space-xs;
      font-weight: bold;
      font-size: 1.2rem;
    }
    
    p {
      font-weight: bold;
    }
  }
}
</style>