<template>
    <div
        class="cursor-pointer"
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
            type: Boolean,
            required: true,
        },

        right: {
            type: Boolean,
            required: false,
            default: false,
        },
    },

    data () {
        return {
            activated: false,
        };
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
            this.activated = !this.activated;
            this.$emit('clicked', !this.minified, this.activated);
        },
    },
};
</script>
