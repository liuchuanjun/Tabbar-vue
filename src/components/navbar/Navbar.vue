<template>
  <div class="nav-bar" :style="{ backgroundColor: currentColor}">
    <div class='left'>
      <slot name='left'></slot>
    </div>
    <div class='center'>
      <slot name='center'></slot>
    </div>
    <div class='right'>
      <slot name='right'></slot>
    </div>
  </div>
</template>
<script>
export default {
    components: {
      
    },
    data() {
        return {
            
        }
    },
    props: {
      currentColor: {
        type: String,
        default: 'deepPink'
      }
    },
    computed: {},
    watch: {},
    methods: {
        
    },
    created() {},
    mounted() {}
}
</script>
<style>
.nav-bar {
  display: flex;
  height: 44px;
  width: 100%;
  color: #ffffff;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index:100;
}

.left {

  width: 60px;
}

.right {

  width: 60px;
}

.center {

  flex: 1;
  text-align: center;
  line-height: 44px;
}
</style>