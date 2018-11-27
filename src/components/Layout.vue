<template>
    <div
        :class="layoutClasses"
        class="vue-ads-w-full vue-ads-max-w-screen vue-ads-min-h-screen vue-ads-overflow-x-hidden vue-ads-flex"
    >
        <div>
            <slot
                v-if="fullBar"
                name="toolbar"/>
            <slot
                v-else
                name="left-drawer"/>
        </div>
        <div
            :class="middleClasses"
            class="vue-ads-flex-grow vue-ads-flex"
        >
            <div>
                <slot
                    v-if="fullBar"
                    name="left-drawer"/>
                <slot
                    v-else
                    name="toolbar"/>
            </div>
            <div
                class="vue-ads-flex-grow relative"
            >
                <slot/>
            </div>
            <div>
                <slot
                    v-if="fullBar"
                    name="right-drawer"/>
                <slot
                    v-else
                    name="footer"/>
            </div>
        </div>
        <div>
            <slot
                v-if="fullBar"
                name="footer"/>
            <slot
                v-else
                name="right-drawer"/>
        </div>
    </div>
</template>

<script>
import './../assets/css/tailwind.css';

export default {
    name: 'VueAdsLayout',

    props: {
        fullBar: {
            type: Boolean,
            required: false,
            default: true,
        },
    },

    data () {
        return {
            toolbar: {
                fixed: null,
                height: 0,
            },
            footer: {
                fixed: null,
                height: 0,
            },
            'left-drawer': {
                width: 0,
            },
            'right-drawer': {
                width: 0,
            },
        };
    },

    computed: {
        layoutClasses () {
            return {
                'vue-ads-flex-col': this.fullBar,
                'vue-ads-flex-row': !this.fullBar,
            };
        },

        middleClasses () {
            return {
                'vue-ads-flex-row': this.fullBar,
                'vue-ads-flex-col': !this.fullBar,
            };
        },
    },

    methods: {
        updateChildData (slot, data) {
            this[slot] = data;
        },
    },
};
</script>
