<template>
    <div
        class="cursor-pointer"
        @click="toggle"
    >
        <slot :left="left">
            <i
                :class="iconClasses"
                class="fa"
            />
            <slot
                name="extra"
                :left="left"
            />
        </slot>
    </div>
</template>

<script>
export default {
    name: 'VueAdsMinifyButton',

    props: {
        minified: {
            type: Boolean,
            required: true,
        },

        right: {
            type: Boolean,
            required: false,
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
        toggle () {
            this.$emit('toggle', !this.minified);
        },
    },
};
</script>
