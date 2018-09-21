<template>
    <div
        class="cursor-pointer"
        @click="toggle"
    >
        <slot>
            <i class="fa fa-bars"></i>
        </slot>
    </div>
</template>

<script>
export default {
    name: 'VueAdsMenuButton',

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
