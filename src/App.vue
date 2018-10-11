<template>
    <div id="app">
        <vue-ads-layout
            :full-bar="false"
        >


            <vue-ads-bar
                slot="toolbar"
                :fixed="true"
                class="bg-red"
            >
                <vue-ads-menu-button
                    slot="first"
                    :hidden="hiddenLeft"
                    @clicked="hideAndHoldLeft"
                />
                <vue-ads-menu-button
                    slot="last"
                    :hidden="hiddenRight"
                    @clicked="hideAndHoldRight"
                />
            </vue-ads-bar>


            <vue-ads-bar
                slot="footer"
                :fixed="true"
                class="bg-green"
            />

            <vue-ads-drawer
                slot="left-drawer"
                :fixed="true"
                :minified="minifiedLeft"
                :hidden="hiddenLeft"
                :hold-minify-state="holdMinifyLeftState"
                :hold-hide-state="holdHideLeftState"
                class="bg-yellow"
                @minify="minifyLeft"
                @hide="hideLeft"
            >
                <div slot="top">Navigation</div>
                <vue-ads-minify-button
                    slot="bottom"
                    :minified="minifiedLeft"
                    @clicked="minifyAndHoldLeft"
                />
            </vue-ads-drawer>


            <vue-ads-drawer
                slot="right-drawer"
                :fixed="false"
                :minified="minifiedRight"
                :hidden="hiddenRight"
                :hold-minify-state="holdMinifyRightState"
                :hold-hide-state="holdHideRightState"
                class="bg-blue"
                @minify="minifyRight"
                @hide="hideRight"
            >
                <div slot="top">Navigation</div>
                <vue-ads-minify-button
                    slot="bottom"
                    :right="true"
                    :minified="minifiedRight"
                    @clicked="minifyAndHoldRight"
                />
            </vue-ads-drawer>

            start<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            test<br>
            end<br>

        </vue-ads-layout>
    </div>
</template>

<script>
import './assets/css/tailwind.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

import VueAdsLayout from './components/Layout';
import VueAdsBar from './components/Bar';
import VueAdsDrawer from './components/Drawer';
import VueAdsMenuButton from './components/buttons/Menu';
import VueAdsMinifyButton from './components/buttons/Minify';

export default {
    name: 'App',

    components: {
        VueAdsMinifyButton,
        VueAdsMenuButton,
        VueAdsDrawer,
        VueAdsBar,
        VueAdsLayout,
    },

    data () {
        return {
            minifiedLeft: false,
            minifiedRight: false,
            hiddenLeft: false,
            hiddenRight: false,
            holdMinifyLeftState: false,
            holdMinifyRightState: false,
            holdHideLeftState: false,
            holdHideRightState: false,
        };
    },

    methods: {
        minifyLeft (minified) {
            this.minifiedLeft = minified;
        },

        hideLeft (hidden) {
            this.hiddenLeft = hidden;
        },

        minifyRight (minified) {
            this.minifiedRight = minified;
        },

        hideRight (hidden) {
            this.hiddenRight = hidden;
        },

        minifyAndHoldLeft (minified) {
            this.holdMinifyLeftState = !this.holdMinifyLeftState;
            this.minifyLeft(minified);
        },

        hideAndHoldLeft (hidden) {
            this.holdHideLeftState = !this.holdHideLeftState;
            this.hideLeft(hidden);
        },

        minifyAndHoldRight (minified) {
            this.holdMinifyRightState = !this.holdMinifyRightState;
            this.minifyRight(minified);
        },

        hideAndHoldRight (hidden) {
            this.holdHideRightState = !this.holdHideRightState;
            this.hideRight(hidden);
        },
    },
};
</script>
