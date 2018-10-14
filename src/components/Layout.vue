<template>
    <div
        :class="layoutClasses"
        class="w-full max-w-screen min-h-screen overflow-x-hidden flex"
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
            class="flex-grow flex"
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
                class="flex-grow relative"
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
                'flex-col': this.fullBar,
                'flex-row': !this.fullBar,
            };
        },

        middleClasses () {
            return {
                'flex-row': this.fullBar,
                'flex-col': !this.fullBar,
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
