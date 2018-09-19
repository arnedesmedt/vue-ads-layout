<template>
    <div
        class="w-full"
        :class="barClasses"
    >
        <div
            class="flex flex-col justify-center transition"
            :class="barContainerClasses"
        >
            <slot>
                <div class="flex">
                    <div><slot name="first"></slot></div>
                    <div class="flex-grow"><slot name="middle"></slot></div>
                    <div><slot name="last"></slot></div>
                    <slot></slot>
                </div>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VueAdsBar',

    props: {
        fixed: {
            type: Boolean,
            required: false,
            default: false,
        },

        height: {
            type: Number,
            required: false,
            default: 16,
        },

        footer: {
            type: Boolean,
            required: false,
            default: false,
        },
    },

    created () {
        this.staticClass = this.$vnode.data.staticClass;
        this.$vnode.data.staticClass = '';
    },

    data () {
        return {
            staticClass: null,
            leftDrawer: {
                width: null,
            },
            rightDrawer: {
                width: null,
            },
        };
    },

    watch: {
        fixed () {
            this.$parent.updateChildrenData();
        },

        height () {
            this.$parent.updateChildrenData();
        },
    },

    computed: {
        barClasses () {
            let classes = {};

            classes['h-' + this.height] = true;

            return classes;
        },

        barContainerClasses () {
            let classes = {
                fixed: this.fixed,
                'pin-b': this.footer,
                'w-full': !this.fixed || this.$parent.$props.fullBar,
            };

            classes['inset-l-' + this.leftDrawer.width] = this.fixed && !this.$parent.$props.fullBar;
            classes['inset-r-' + this.rightDrawer.width] = this.fixed && !this.$parent.$props.fullBar;
            classes['h-' + this.height] = true;
            classes['z-' + this.zIndex] = true;

            if (this.staticClass) {
                this.staticClass.split(' ').forEach(className => {
                    classes[className] = true;
                });
            }

            return classes;
        },

        zIndex () {
            return this.$parent.$props.fullBar ? 50 : 40;
        },
    },

    methods: {
        handleSiblingData () {
            this.leftDrawer = this.$parent.$data['left-drawer'];
            this.rightDrawer = this.$parent.$data['right-drawer'];
        },
    },
};
</script>

<style scoped>
    .transition {
        transition: left 0.2s, right 0.2s;
        -webkit-transition: left 0.2s, right 0.2s;
        -moz-transition: left 0.2s, right 0.2s;
        -o-transition: left 0.2s, right 0.2s;
    }
</style>
