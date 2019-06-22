<template>
    <div
        :class="drawerClasses"
        :style="drawerStyles"
        class="vue-ads-h-full vue-ads-transition"
    >
        <div
            :class="drawerContainerClasses"
            :style="drawerContainerStyles"
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
            default: false,
        },

        width: {
            type: String,
            default: '16rem',
        },

        minifiedWidth: {
            type: String,
            default: '4rem',
        },

        minified: {
            default: false,
            validator: (value) => {
                return value === null || typeof value === 'boolean';
            },
        },

        hidden: {
            default: false,
            validator: (value) => {
                return value === null || typeof value === 'boolean';
            },
        },

        minifyOn: {
            type: Number,
            default: 768,
        },

        hideOn: {
            type: Number,
            default: 640,
        },

        responsive: {
            type: Boolean,
            default: true,
        },

        right: {
            type: Boolean,
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

            classes['vue-ads-z-' + this.zIndex] = true;

            return classes;
        },

        drawerStyles () {
            let styles = {};

            styles['width'] = this.currentWidth;

            if (this.hidden) {
                styles[`margin-${this.right ? 'right' : 'left'}`] = `-${this.currentWidth}`;
            }

            return styles;
        },

        drawerContainerClasses () {
            let classes = {
                'vue-ads-fixed': this.fixed,
                'vue-ads-top-0': this.fixed,
            };

            classes['vue-ads-z-' + this.zIndex] = true;
            classes['vue-ads-pt-' + this.$parent.$data.toolbar.height] = this.paddingTop;
            classes['vue-ads-pb-' + this.$parent.$data.footer.height] = this.paddingBottom;

            return classes;
        },

        drawerContainerStyles () {
            let styles = {};

            styles['width'] = `${this.currentWidth}px`;

            return styles;
        },
    },

    watch: {
        hidden: 'updateParent',
        minified: {
            handler: 'updateParent',
            immediate: true,
        },
        window: 'updateWindow',
        responsive: {
            handler: 'setupEventListener',
            immediate: true,
        },
    },

    mounted () {
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
