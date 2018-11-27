<template>
    <div
        class="vue-ads-cursor-pointer"
        @click="click"
    >
        <slot>
            <i class="fa fa-bars"/>
        </slot>
    </div>
</template>

<script>
export default {
    name: 'VueAdsHideButton',

    props: {
        hidden: {
            required: true,
            validator: (value) => {
                return value === null || typeof value === 'boolean';
            },
        },
    },

    methods: {
        click () {
            this.$emit('clicked', !this.hidden, this.activated);
        },
    },
};
</script>
