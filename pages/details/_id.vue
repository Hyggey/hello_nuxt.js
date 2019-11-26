<template>
    <div>
        <h3>详情页面</h3>--{{$route.params.id}}
        {{detail.price}}
        {{detail.description}}
    </div>
</template>

<script>
import axios from 'axios';
export default {
    // asyncData() {
    //     return axios.get('/data/test.json').then(res =>{
    //         console.log(res);
    //         return {
    //             detail:res.data
    //         }
    //     })
    // },
    // 这种请求方式是nuxt提供的，是服务端发送请求，可以在页面上看到
    async asyncData() {
        const res = await axios.get('/data/test.json');
        console.log(res.data)
        return{
            detail:res.data 
        }
    }

// 下面这种请求方式是客户端发送的请求方式，请求的数据，页面查看网页源代码时看不到接口里请求到的数据
    // data(){
    //     return {
    //         detail:{}
    //     }
    // },
    // mounted(){
    //     axios({
    //         url:'/data/test.json',
    //         method:'GET'
    //     }).then(res =>{
    //         this.detail = res.data
    //     })
    // }
}
</script>

<style lang="scss">
    
</style>