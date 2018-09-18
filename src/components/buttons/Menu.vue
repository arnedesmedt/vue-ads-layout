<template>
    <div
        class="h-full text-center px-3 w-16 cursor-pointer flex flex-col justify-center"
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
