<template>
    <div
        class="cursor-pointer"
        @click="click"
    >
        <slot>
            <i class="fa fa-bars"/>
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
        click () {
            this.$emit('clicked', !this.hidden);
        },
    },
};
</script>
