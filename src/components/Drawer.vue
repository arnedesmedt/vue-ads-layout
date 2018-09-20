<template>
    <div
        class="h-full transition"
        :class="drawerClasses"
    >
        <div
            class="flex flex-col h-full"
            :class="drawerContainerClasses"
        >
            <slot
                :fixed="fixed"
                :minified="minified"
                :hidden="hidden"
                :width="currentWidth"
            >
                <div class="flex-grow w-full">
                    <slot
                        name="top"
                        :fixed="fixed"
                        :minified="minified"
                        :hidden="hidden"
                        :width="currentWidth"
                    ></slot>
                </div>
                <div class="w-full">
                    <slot
                        name="bottom"
                        :fixed="fixed"
                        :minified="minified"
                        :hidden="hidden"
                        :width="currentWidth"
                    ></slot>
                </div>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VueAdsDrawer',

    props: {
        fixed: {
            type: Boolean,
            required: false,
            default: false,
        },

        width: {
            type: Number,
            required: false,
            default: 64,
        },

        minified: {
            type: Boolean,
            required: false,
            default: false,
        },

        hidden: {
            type: Boolean,
            required: false,
            default: false,
        },

        responsiveMinify: {
            type: Array,
            required: false,
            default () {
                return ['all', 'sm'];
            },
        },

        responsiveHide: {
            type: Array,
            required: false,
            default () {
                return ['all'];
            },
        },

        minifiedWidth: {
            type: Number,
            required: false,
            default: 16,
        },
    },

    data () {
        return {
            toolbar: {
                height: null,
                fixed: null,
            },

            footer: {
                height: null,
                fixed: null,
            },

            window: null,
        };
    },

    watch: {
        window (window) {
            if (
                this.responsiveMinify.length > 0 &&
                this.responsiveMinify.includes(window) !== this.minified
            ) {
                this.$emit('minify', this.responsiveMinify.includes(window));
            }

            if (
                this.responsiveHide.length > 0 &&
                this.responsiveHide.includes(window) !== this.hidden
            ) {
                this.$emit('hide', this.responsiveHide.includes(window));
            }
        },

        currentWidth (width) {
            this.$parent.updateChildrenData();
        },
    },

    computed: {
        drawerClasses () {
            let classes = {};

            classes['w-' + this.currentWidth] = true;
            classes['z-' + this.zIndex] = true;

            return classes;
        },

        drawerContainerClasses () {
            let classes = {
                fixed: this.fixed,
                'pin-t': this.fixed,
            };

            classes['w-' + this.currentWidth] = true;
            classes['pt-' + this.toolbar.height] = this.paddingTop;
            classes['pb-' + this.footer.height] = this.paddingBottom;

            return classes;
        },

        currentWidth () {
            if (this.hidden) {
                return 0;
            }

            return this.minified ? this.minifiedWidth : this.width;
        },

        paddingTop () {
            if (!this.$parent.$props.fullBar || !this.fixed) {
                return false;
            }

            return this.fixed || this.toolbar.fixed;
        },

        paddingBottom () {
            if (!this.$parent.$props.fullBar || !this.fixed) {
                return false;
            }

            return this.fixed || this.footer.fixed;
        },

        zIndex () {
            return this.$parent.$props.fullBar ? 40 : 50;
        },
    },

    methods: {
        handleSiblingData () {
            this.toolbar = this.$parent.$data.toolbar;
            this.footer = this.$parent.$data.footer;
        },

        handleWindow (window) {
            this.window = window;
        },
    },
};
</script>

<style scoped>
.transition {
    transition: width 0.2s;
    -webkit-transition: width 0.2s;
    -moz-transition: width 0.2s;
    -o-transition: width 0.2s;
}
</style>
