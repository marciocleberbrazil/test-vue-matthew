<template>
  <div
    class="job-feedback"
    :style="{
      display: message ? 'block' : 'none',
    }"
  >
    <div 
      class="content"
      :class="styling"
    >
      <h2>{{ message }}</h2>
      <button
      :class="styling"
        @click="$emit('close-feedback')"
      >Ok</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'JobFeedback',
    props: {
      message: {
        type: String,
      },
      styling: {
        type: String,
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/core/colors';
  @import '../../styles/core/spacing';
  @import '../../styles/core/border-radius';
  
.job-feedback {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 25%;
  
  .content {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    width: 85%;
    margin: 0 auto;
    padding: $space;
    box-sizing: border-box;
    color: #383d41;
    background-color: #e2e3e5;
    border-color: #d6d8db;
    border-radius: $rounded;
    
    h2 {
      text-align: center;
    }
    
    &.success {
      color: $success-dark;
      background-color: $success-light;
      border-color: $success-medium;
    }
    
    &.danger {
      color: $danger-dark;
      background-color: $danger-light;
      border-color: $danger-medium;
    }
    
    &.warning {
      color: $warning-dark;
      background-color: $warning-light;
      border-color: $warning-medium;
    }
    
    button {
      width: 40%;
    }
  }
}
</style>