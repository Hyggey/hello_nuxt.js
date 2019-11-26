<template>
    <div>
        <h2>列表详情</h2>
        <nuxt-link to="/users/">嵌套首页</nuxt-link>
        <nuxt-link to="/users/profile">嵌套个人详情</nuxt-link>
        <nuxt-child />
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    
</style>