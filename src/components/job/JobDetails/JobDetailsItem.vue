<template>
  <li
    @click="callToAction"
  >
    <div class="icon">
      <font-awesome-icon
        :icon="getIcon"
        size="lg"
      />
    </div>
    
    <div class="details">
      <strong>{{ title }}</strong>
      <div class="content">
        <slot></slot>  
      </div>
    </div>
    
    <div
      v-if="isClickable"
      class="icon"
    >
      <font-awesome-icon
        icon="fa-solid fa-chevron-right"
        size="lg"
      />
    </div>
  </li>
</template>

<script>
  export default {
    name: 'JobDetailsItemComponent',
    props: {
      icon: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      isClickable: {
        type: Boolean,
        default: () => false,
      }
    },
    computed: {
      getIcon () {
        return `fa-solid ${this.icon}`;
      }
    },
    methods: {
      callToAction () {
        if (this.isClickable) {
         this.$emit('call-to-action');
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../styles/core/spacing';
  
  .icon {
    flex: 0 0 25px;
    
    &:last-child {
      text-align: right;
    }
  }
      
  .details {
    flex: 1;
    
    strong {
      display: block;
      margin-bottom: $space-xxs;
      font-size: 0.9rem;
      font-weight: bold;
    }
    
    small {
      font-size: 0.7rem;
    }
    
    p {
      margin-bottom: $space-xs;
      font-size: 0.9rem;
    }
    
    ul {
      li {
        padding: 0 0 $space-xxs;
        border-bottom: none;
        
        p {
          margin: 0;
        }
        
        &::before {
          content: '\2014';
          position: absolute;
          margin-left: -20px;
        }
      }
    }
  }
</style>