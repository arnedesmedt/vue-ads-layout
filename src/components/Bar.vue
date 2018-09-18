<template>
    <div
        class="w-full"
        :class="barClasses"
    >
        <div
            class="w-full bg-red"
            :class="barContainerClasses"
        >
            Toolbar
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

            return classes;
        },

        zIndex () {
            return this.$parent.$props.fullBar ? 50 : 40;
        },
    }
}
</script>
