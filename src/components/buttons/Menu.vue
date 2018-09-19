<template>
    <div
        class="cursor-pointer"
        title=""
        @click="toggle"
    >
        <i class="fa fa-bars"></i>
    </div>
</template>

<script>
export default {
    name: 'VueAdsMenu',

    props: {
        hidden: {
            type: Boolean,
            required: true,
        },
    },

    methods: {
        toggle () {
            this.$emit('toggle', !this.hidden);
        },
    },
};
</script>

<style scoped>

</style>
