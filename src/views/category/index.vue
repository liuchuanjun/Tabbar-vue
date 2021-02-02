<template>
  <div id="category">
    {{msg}}
    <h2>{{$store.getters.name}}</h2>
  </div>
</template>

<script>
export default {
    components: {
       
    },
    data() {
        return {
            msg: '分类'
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
</style>