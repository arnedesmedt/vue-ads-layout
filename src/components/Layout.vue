<template>
    <div
        :class="layoutClasses"
        class="w-full max-w-screen min-h-screen overflow-x-hidden flex"
    >
        <div class="">
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
                class="flex-grow"
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
            window: null,
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

    watch: {
        window (window) {
            this.updateWindow(window);
        },
    },

    created () {
        window.addEventListener('resize', this.resizeWindow);
    },

    mounted () {
        this.resizeWindow();
        this.updateChildrenData();
    },

    methods: {
        resizeWindow () {
            switch (true) {
            case window.innerWidth < 576:
                this.window = 'all';
                break;
            case window.innerWidth < 768:
                this.window = 'sm';
                break;
            case window.innerWidth < 992:
                this.window = 'md';
                break;
            case window.innerWidth < 1200:
                this.window = 'lg';
                break;
            default:
                this.window = 'xl';
                break;
            }
        },

        updateChildrenData () {
            this.$children
                .filter(child => {
                    return ['VueAdsBar', 'VueAdsDrawer'].includes(child.$options.name);
                })
                .forEach(child => {
                    let data = {};

                    if (child.$options.name === 'VueAdsBar') {
                        data = {
                            height: child.$props.height,
                            fixed: child.$props.fixed,
                        };
                    } else {
                        data = {
                            width: child.$props.hidden ? 0 : child.currentWidth,
                        };
                    }

                    this[child.$vnode.data.slot] = data;
                });

            this.updateChildren();
        },

        updateChildren () {
            this.$children.forEach(child => {
                if (child.handleSiblingData instanceof Function) {
                    child.handleSiblingData();
                }
            });
        },

        updateWindow (window) {
            this.$children.forEach(child => {
                if (child.handleWindow instanceof Function) {
                    child.handleWindow(window);
                }
            });
        },
    },
};
</script>
