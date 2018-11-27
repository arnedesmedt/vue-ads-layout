<template>
    <div
        :class="drawerClasses"
        class="vue-ads-h-full vue-ads-transition"
    >
        <div
            :class="drawerContainerClasses"
            class="vue-ads-flex vue-ads-flex-col vue-ads-h-full"
        >
            <slot
                :fixed="fixed"
                :minified="minified"
                :hidden="hidden"
                :width="currentWidth"
            >
                <div class="vue-ads-flex-grow vue-ads-w-full">
                    <slot
                        :fixed="fixed"
                        :minified="minified"
                        :hidden="hidden"
                        :width="currentWidth"
                        name="top"
                    />
                </div>
                <div class="vue-ads-w-full">
                    <slot
                        :fixed="fixed"
                        :minified="minified"
                        :hidden="hidden"
                        :width="currentWidth"
                        name="bottom"
                    />
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

        minifiedWidth: {
            type: Number,
            required: false,
            default: 16,
        },

        minified: {
            required: false,
            default: false,
            validator: (value) => {
                return value === null || typeof value === 'boolean';
            },
        },

        hidden: {
            required: false,
            default: false,
            validator: (value) => {
                return value === null || typeof value === 'boolean';
            },
        },

        minifyOn: {
            type: Number,
            required: false,
            default: 768,
        },

        hideOn: {
            type: Number,
            required: false,
            default: 576,
        },

        responsive: {
            type: Boolean,
            required: false,
            default: true,
        },

        right: {
            type: Boolean,
            required: false,
            default: false,
        },
    },

    data () {
        return {
            window: null,
        };
    },

    computed: {
        visible () {
            return !this.minified && !this.hidden;
        },

        currentWidth () {
            return this.minified ? this.minifiedWidth : this.width;
        },

        paddingTop () {
            if (!this.$parent.$props.fullBar || !this.fixed) {
                return false;
            }

            return this.fixed || this.$parent.$data.toolbar.fixed;
        },

        paddingBottom () {
            if (!this.$parent.$props.fullBar || !this.fixed) {
                return false;
            }

            return this.fixed || this.$parent.$data.footer.fixed;
        },

        zIndex () {
            return this.$parent.$props.fullBar ? 40 : 50;
        },

        drawerClasses () {
            let classes = {};

            classes['vue-ads-w-' + this.currentWidth] = true;
            classes['vue-ads-z-' + this.zIndex] = true;
            classes['vue-ads--ml-' + this.currentWidth] = this.hidden && !this.right;
            classes['vue-ads--mr-' + this.currentWidth] = this.hidden && this.right;

            return classes;
        },

        drawerContainerClasses () {
            let classes = {
                'vue-ads-fixed': this.fixed,
                'vue-ads-pin-t': this.fixed,
            };

            classes['vue-ads-w-' + this.currentWidth] = true;
            classes['vue-ads-z-' + this.zIndex] = true;
            classes['vue-ads-pt-' + this.$parent.$data.toolbar.height] = this.paddingTop;
            classes['vue-ads-pb-' + this.$parent.$data.footer.height] = this.paddingBottom;

            return classes;
        },
    },

    watch: {
        minified: 'updateParent',
        hidden: 'updateParent',
        window: 'updateWindow',
        responsive: {
            handler: 'setupEventListener',
            immediate: true,
        },
    },

    mounted () {
        this.updateParent();
        if (this.responsive) {
            this.resizeWindow();
        }
    },

    methods: {
        setupEventListener () {
            if (! this.responsive) {
                window.removeEventListener('resize', this.resizeWindow);
                return;
            }

            window.addEventListener('resize', this.resizeWindow);
        },

        resizeWindow () {
            if (window.innerWidth < this.hideOn) {
                this.window = 'hidden';
                return;
            }

            if (window.innerWidth < this.minifyOn) {
                this.window = 'minified';
                return;
            }

            this.window = 'visible';
        },

        updateWindow (window, oldWindow) {
            if (oldWindow === null) {
                // initial update
                if (
                    (this.hidden === null && window === 'hidden') ||
                    this.hidden
                ) {
                    this.$emit('hide', true);
                    return;
                }

                if (
                    (this.minified === null && window === 'minified') ||
                    this.minified
                ) {
                    this.$emit('minify', true);
                    return;
                }
            }

            if (window === 'hidden') {
                if (this.minified && oldWindow === 'minified') {
                    this.$emit('hide', true);
                    return;
                }
            }

            if (window === 'minified') {
                if (this.hidden && oldWindow === 'hidden') {
                    this.$emit('hide', false);
                    this.$emit('minify', true);
                    return;
                }

                if (this.visible && oldWindow === 'visible') {
                    this.$emit('minify', true);
                    return;
                }
            }

            if (window === 'visible') {
                if (this.minified && oldWindow === 'minified') {
                    this.$emit('minify', false);
                }
            }
        },

        updateParent () {
            this.$parent.updateChildData(this.$vnode.data.slot, {
                width: this.hidden ? 0 : this.currentWidth,
            });
        },
    },
};
</script>

<style scoped>
.vue-ads-transition {
    transition: width 0.2s, margin-left 0.2s, margin-right 0.2s;
    -webkit-transition: width 0.2s, margin-left 0.2s, margin-right 0.2s;
    -moz-transition: width 0.2s, margin-left 0.2s, margin-right 0.2s;
    -o-transition: width 0.2s, margin-left 0.2s, margin-right 0.2s;
}
</style>
