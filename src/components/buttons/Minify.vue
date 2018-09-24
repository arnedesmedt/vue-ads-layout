<template>
    <div
        class="cursor-pointer"
        @click="toggle"
    >
        <slot>
            <i
                :class="iconClasses"
                class="fa"
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
                'fa-angle-double-left': (!this.right && !this.minified) || (this.right && this.minified),
                'fa-angle-double-right': (!this.right && this.minified) || (this.right && !this.minified),
            };
        },
    },

    methods: {
        toggle () {
            this.$emit('toggle', !this.minified);
        },
    },
};
</script>
