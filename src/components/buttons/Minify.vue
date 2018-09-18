<template>
    <div
        class="w-full text-center py-3 cursor-pointer"
        @click="toggle"
    >
        <i
            class="fa"
            :class="iconClasses"
        >
        </i>
    </div>
</template>

<script>
export default {
    name: 'VueAdsMinify',

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
