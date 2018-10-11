<template>
    <div
        :class="drawerClasses"
        class="h-full transition"
    >
        <div
            :class="drawerContainerClasses"
            class="flex flex-col h-full"
        >
            <slot
                :fixed="fixed"
                :minified="minified"
                :hidden="hidden"
                :width="currentWidth"
            >
                <div class="flex-grow w-full">
                    <slot
                        :fixed="fixed"
                        :minified="minified"
                        :hidden="hidden"
                        :width="currentWidth"
                        name="top"
                    />
                </div>
                <div class="w-full">
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
            type: Boolean,
            required: false,
            default: false,
        },

        hidden: {
            type: Boolean,
            required: false,
            default: false,
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
            listening: false,
        };
    },

    computed: {
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

            classes['w-' + this.currentWidth] = true;
            classes['z-' + this.zIndex] = true;
            classes['-ml-' + this.currentWidth] = this.hidden && !this.right;
            classes['-mr-' + this.currentWidth] = this.hidden && this.right;

            return classes;
        },

        drawerContainerClasses () {
            let classes = {
                fixed: this.fixed,
                'pin-t': this.fixed,
            };

            classes['w-' + this.currentWidth] = true;
            classes['z-' + this.zIndex] = true;
            classes['pt-' + this.$parent.$data.toolbar.height] = this.paddingTop;
            classes['pb-' + this.$parent.$data.footer.height] = this.paddingBottom;

            return classes;
        },
    },

    watch: {
        minified: 'updateParent',
        hidden: 'updateParent',
        responsive: 'setupWindowEventListener',
    },

    mounted () {
        this.updateParent();
        this.setupWindowEventListener(true);
    },

    methods: {
        setupWindowEventListener (initial = false) {
            if (!this.responsive) {
                window.removeEventListener('resize', this.resizeWindow);
                this.listening = false;

                return;
            }

            if (!this.listening) {
                window.addEventListener('resize', this.resizeWindow);
                this.listening = true;

                if (initial) {
                    this.resizeWindow();
                }
            }
        },

        resizeWindow () {
            if (this.hideOn !== false) {
                if (window.innerWidth < this.hideOn && !this.hidden) {
                    this.$emit('hide', true);
                    return;
                }

                if (window.innerWidth >= this.hideOn && this.hidden) {
                    this.$emit('hide', false);
                    return;
                }
            }

            if (this.minifyOn !== false) {
                if (window.innerWidth < this.minifyOn && !this.minified) {
                    this.$emit('minify', true);
                    return;
                }

                if (window.innerWidth >= this.minifyOn && this.minified) {
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
.transition {
    transition: width 0.2s, margin-left 0.2s, margin-right 0.2s;
    -webkit-transition: width 0.2s, margin-left 0.2s, margin-right 0.2s;
    -moz-transition: width 0.2s, margin-left 0.2s, margin-right 0.2s;
    -o-transition: width 0.2s, margin-left 0.2s, margin-right 0.2s;
}
</style>
