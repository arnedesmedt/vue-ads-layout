<template>
    <div
        class="w-full min-h-screen flex bg-grey-lighter"
        :class="layoutClasses"
    >
        <div class="">
            <slot v-if="fullBar" name="toolbar">

            </slot>
            <slot v-else name="left-drawer">

            </slot>
        </div>
        <div
            class="flex-grow flex"
            :class="middleClasses"
        >
            <div>
                <slot v-if="fullBar" name="left-drawer">

                </slot>
                <slot v-else name="toolbar">

                </slot>
            </div>
            <div
                class="flex-grow"
            >
                <slot>
                    Start dit is een zin om te kijken of ze niet onder de rechter drawer loopt.<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    Einde<br/>
                </slot>
            </div>
            <div>
                <slot v-if="fullBar" name="right-drawer">

                </slot>
                <slot v-else name="footer">

                </slot>
            </div>
        </div>
        <div>
            <slot v-if="fullBar" name="footer">

            </slot>
            <slot v-else name="right-drawer">

            </slot>
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

    created () {
        window.addEventListener('resize', this.resizeWindow);
    },

    mounted () {
        this.resizeWindow();
        this.updateChildrenData();
    },

    data () {
        return {
            toolbar: {
                fixed: null,
                height: null,
            },
            footer: {
                fixed: null,
                height: null,
            },
            window: null,
        };
    },

    watch: {
        window (window) {
            this.updateWindow(window);
        },
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
            }
        },
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
                    return child.$options.name === 'VueAdsBar';
                })
                .forEach(child => {
                    this[child.$vnode.data.slot] = {
                        height: child.$props.height,
                        fixed: child.$props.fixed,
                    }
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
        }
    }
};
</script>
