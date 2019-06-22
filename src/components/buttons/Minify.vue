<template>
    <div
        class="vue-ads-cursor-pointer"
        @click="click"
    >
        <slot :left="left">
            <i
                :class="iconClasses"
                class="fa"
            />
            <slot
                :left="left"
                name="extra"
            />
        </slot>
    </div>
</template>

<script>
export default {
    name: 'VueAdsMinifyButton',

    props: {
        minified: {
            required: true,
            validator: (value) => {
                return value === null || typeof value === 'boolean';
            },
        },

        right: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        iconClasses () {
            return {
                'fa-angle-double-left': this.left,
                'fa-angle-double-right': !this.left,
            };
        },

        left () {
            return (!this.right && !this.minified) || (this.right && this.minified);
        },
    },

    methods: {
        click () {
            this.$emit('clicked', !this.minified, this.activated);
        },
    },
};
</script>
