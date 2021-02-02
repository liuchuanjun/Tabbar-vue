<template>
  <div class="tab-control">
    <div class="title-item"
          :class='{active: currentIndex == index}'
          v-for='(item,index) in titles'
          @click='tabClick(index)'>
      {{item}}
    </div>
  </div>
</template>

<script>
export default {
    components: { 
    },
    data() {
        return {
            currentIndex: 0
        }
    },
    props: {
      titles: {
        type: Array,
        default(){
          return []
        }
      }
    },
    computed: {},
    watch: {},
    methods: {
      tabClick(index){
        this.currentIndex = index
        this.$emit('tabItemClick', index)
      }
    },
    created() {},
    mounted() {},
}
</script>
<style scoped>
.tab-control {

  position: sticky;
  top: 44px;
  
  height: 34px;
  line-height: 34px;
  background-color: slateblue;
  color: #fff;

  display: flex;
  text-align: center;
}

.title-item {

  flex: 1;
}

.active {

  background-color: red;
}
</style>