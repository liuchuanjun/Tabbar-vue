<template>
  <div class="recommend">
      <div class='recommend-item' v-for='item in recommend'>
        <a :herf='item.link'>
          <img :src='item.image'/>
          <div>{{item.title}}</div>
        </a>
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
      recommend:{

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

.recommend {

  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  padding: 14px 0;
}

.recommend-item {

  text-align: center;
}

.recommend img {

  width: 80px;
  height: 80px;
}
</style>