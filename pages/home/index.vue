<template>
    <div>
        <h2>home</h2>
        <el-button>home</el-button>
        <div>{{info}}</div>
        <div>{{text}}</div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            text:'改变之前的'
        }
    },
    // 在asyncData中只有一个请求时
    // async asyncData() {
    //     const res = await axios({
    //         url:'https://api.myjson.com/bins/nzahy',
    //         method:'GET'
    //     })
    //     console.log(res)
    //     return {
    //         info: res.data
    //     }
    // },
    // 在asyncData中存在多个请求时
    async asyncData(context) {
        const res = await Promise.all([
            axios({
                url:'https://api.myjson.com/bins/nzahy',    // 这个网址后期可以在myjson.com上随便改
                method:'GET'
            }),

            // axios({
            //     url:'www.baidu.com',
            //     method:'GET'
            // })

        ])
        console.log(res)
        return {
            info: res[0].data,
            text: '请求后改变之后的'
        }
    },
}
</script>

<style lang="scss">
    
</style>