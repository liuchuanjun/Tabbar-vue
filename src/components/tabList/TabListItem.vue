<template>
  <div class='tab-item' :id="itemData.id">
      <img :src='itemData.image'/>
      <div class='detail'>{{itemData.detail}}</div>
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
      itemData: {
        type: Object,
        default(){
          return {}
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
<style scoped>

.tab-item {

  width: 49%;
  height: 180px;
  background-color: #ffffff;

  margin-bottom: 4px;
}

.tab-item img {

  width: 100%;
  height: 160px;
}

.tab-item .detail {

  text-align: center;
  font-size: 14px;
}
</style>