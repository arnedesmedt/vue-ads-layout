<template>
    <div
        class="w-full"
        :class="barClasses"
    >
        <div
            class="w-full flex flex-col justify-center"
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
    name: "VueAdsBar",

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

        toolbar: {
            type: Boolean,
            required: false,
            default: true,
        },
    },

    created () {
        this.staticClass = this.$vnode.data.staticClass;
        this.$vnode.data.staticClass = '';
    },

    data () {
        return {
            staticClass: null,
        }
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
                'pin-b': !this.toolbar,
            };

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
    }
}
</script>
