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
    name: 'VueAdsHideButton',

    props: {
        hidden: {
            type: Boolean,
            required: true,
        },
    },

    data () {
        return {
            activated: false,
        };
    },

    methods: {
        click () {
            this.activated = !this.activated;
            this.$emit('clicked', !this.hidden, this.activated);
        },
    },
};
</script>
