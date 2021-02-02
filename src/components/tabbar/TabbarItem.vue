<template>
  <div id="tabbarItem" @click='itemClick'>
    <div v-if='!isActive'>
      <slot name='item-icon'></slot>
    </div>
    <div v-else>
      <slot name='item-icon-active'></slot>
    </div>
    <div :style= 'activeStyle'>
      <slot name='item-title'></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'tabbarItem',
    components: {
       
    },
    props: {
      link:{
        type: String,
        default: ''
      },
      activeColor: {
        type: String,
        default: 'deepPink'
      }
    },
    data() {
        return {
            
        }
    },
    computed: {
      isActive(){

         return this.$route.path.indexOf(this.link) != -1
      },
      activeStyle(){

        return this.isActive ? {color: this.activeColor} : ''
      }
    },
    methods: {

      itemClick(){

        this.$router.replace(this.link)
      }
        
    },
    created() {},
    mounted() {},
}
</script>
<style scoped>
  #tabbarItem {

    flex: 1;
    text-align: center;

    height: 49px;
    font-size: 14px;
  }

  #tabbarItem img {

      width: 24px;
      height: 24px;
      margin-top: 4px;
      vertical-align: middle;
   }
</style>