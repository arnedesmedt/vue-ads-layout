<template>
    <div id="app">
        <vue-ads-layout :full-bar="false">
            <vue-ads-bar
                slot="toolbar"
                :fixed="true"
            ></vue-ads-bar>
            <vue-ads-bar
                slot="footer"
                :fixed="true"
                :toolbar="false"
            ></vue-ads-bar>
            <vue-ads-drawer
                slot="left-drawer"
                :minified="minified"
                :hidden="hidden"
                :fixed="true"
                @minify="minify"
                @hide="hide"
            ></vue-ads-drawer>
            <vue-ads-drawer
                slot="right-drawer"
                :minified="minified"
                :hidden="hidden"
                :fixed="false"
                @minify="minify"
                @hide="hide"
            >
            </vue-ads-drawer>
        </vue-ads-layout>
    </div>
</template>

<script>
import './assets/css/packages.css';

import VueAdsLayout from './components/Layout';
import VueAdsBar from "./components/Bar";
import VueAdsDrawer from "./components/Drawer";

export default {
    name: 'app',

    components: {
        VueAdsDrawer,
        VueAdsBar,
        VueAdsLayout,
    },

    data () {
        return {
            minified: false,
            hidden: false,
        };
    },

    methods: {
        minify (minified) {
            this.minified = minified;
        },

        hide (hidden) {
            this.hidden = hidden;
        },
    },
};
</script>
