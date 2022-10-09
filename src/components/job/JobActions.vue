<template>
  <div class="job-actions">
    <button
      class="reject"
      :disabled="loading"
      @click="$emit('reject-job')"
    >
      No Thanks
    </button>
    
    <button
      class="confirm"
      :disabled="loading"
      @click="$emit('accept-job')"
    >
      I'll Take it
    </button>
  </div>
</template>

<script>
  export default {
    name: 'JobActionsComponent',
    props: {
      loading: {
        type: Boolean,
        required: true,
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/core/spacing';
  
  .job-actions {
    display: flex;
    gap: $space-xxs;
    padding: $space-sm $space;
    
    button {
      flex: 1;
    }
  }
</style>