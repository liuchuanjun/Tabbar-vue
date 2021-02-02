<template>
  <div class='tab-list'>
      <tab-list-item v-for='item in tabList' :itemData='item' :key='item'/>
  </div>
</template>

<script>
import TabListItem from './TabListItem.vue'

export default {
    components: {
      TabListItem
    },
    data() {
        return {
            
        }
    },
    props:{
      tabList: {
        type: Array,
        default(){
          return []
        }
      }
    },
    computed: {},
    watch: {},
    methods: {
  
    },
    created() {},
    mounted() {},
}
</script>
<style>
.tab-list {

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>