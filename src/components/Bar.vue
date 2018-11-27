<template>
    <div
        :class="barClasses"
        class="vue-ads-w-full"
    >
        <div
            :class="barContainerClasses"
            class="vue-ads-flex vue-ads-flex-col vue-ads-justify-center vue-ads-transition"
        >
            <slot>
                <div class="vue-ads-flex">
                    <div><slot name="first"/></div>
                    <div class="vue-ads-flex-grow"><slot name="middle"/></div>
                    <div><slot name="last"/></div>
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

    data () {
        return {
            staticClass: null,
        };
    },

    computed: {
        barClasses () {
            let classes = {};

            classes['vue-ads-h-' + this.height] = true;

            return classes;
        },

        barContainerClasses () {
            let classes = {
                'vue-ads-fixed': this.fixed,
                'vue-ads-pin-b': this.footer,
                'vue-ads-w-full': !this.fixed || this.$parent.$props.fullBar,
            };

            classes['vue-ads-inset-l-' + this.$parent.$data['left-drawer'].width] = this.fixed && !this.$parent.$props.fullBar;
            classes['vue-ads-inset-r-' + this.$parent.$data['right-drawer'].width] = this.fixed && !this.$parent.$props.fullBar;
            classes['vue-ads-h-' + this.height] = true;
            classes['vue-ads-z-' + this.zIndex] = true;

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

    watch: {
        fixed: 'updateParent',
        height: 'updateParent',
    },

    created () {
        this.staticClass = this.$vnode.data.staticClass;
        this.$vnode.data.staticClass = '';
    },

    mounted () {
        this.updateParent();
    },

    methods: {
        updateParent () {
            this.$parent.updateChildData(this.$vnode.data.slot, {
                height: this.height,
                fixed: this.fixed,
            });
        },
    },
};
</script>

<style scoped>
.vue-ads-transition {
    transition: left 0.2s, right 0.2s;
    -webkit-transition: left 0.2s, right 0.2s;
    -moz-transition: left 0.2s, right 0.2s;
    -o-transition: left 0.2s, right 0.2s;
}
</style>
