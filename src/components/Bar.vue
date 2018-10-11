<template>
    <div
        :class="barClasses"
        class="w-full"
    >
        <div
            :class="barContainerClasses"
            class="flex flex-col justify-center transition"
        >
            <slot>
                <div class="flex">
                    <div><slot name="first"/></div>
                    <div class="flex-grow"><slot name="middle"/></div>
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
        }
    },

    data () {
        return {
            staticClass: null,
        };
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

            classes['inset-l-' + this.$parent.$data['left-drawer'].width] = this.fixed && !this.$parent.$props.fullBar;
            classes['inset-r-' + this.$parent.$data['right-drawer'].width] = this.fixed && !this.$parent.$props.fullBar;
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
.transition {
    transition: left 0.2s, right 0.2s;
    -webkit-transition: left 0.2s, right 0.2s;
    -moz-transition: left 0.2s, right 0.2s;
    -o-transition: left 0.2s, right 0.2s;
}
</style>
