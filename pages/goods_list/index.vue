<template>
    <div>
        <h2>商品列表</h2>
        <ul>
            <li v-for="item of list" :key="item.name">{{item.name}}
                <nuxt-link :to="'/details/'+ item.id">order</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:[
                {id:'009',name:'iphone',price: 20000},
                {id:'007',name:'xiaomi',price: 1000},
                {id:'006',name:'huawei',price: 999},
            ]
        }
    }
}
</script>