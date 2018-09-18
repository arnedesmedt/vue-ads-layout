<template>
    <div id="app">
        <vue-ads-layout :full-bar="true">
            <vue-ads-bar
                slot="toolbar"
                :fixed="true"
                class="bg-red"
            ></vue-ads-bar>
            <vue-ads-bar
                slot="footer"
                :fixed="false"
                :toolbar="false"
                class="bg-purple"
            ></vue-ads-bar>
            <vue-ads-drawer
                slot="left-drawer"
                :minified="minified"
                :hidden="hidden"
                :fixed="true"
                @minify="minify"
                @hide="hide"
                class="bg-yellow"
            ></vue-ads-drawer>
            <vue-ads-drawer
                slot="right-drawer"
                :minified="minified"
                :hidden="hidden"
                :fixed="false"
                @minify="minify"
                @hide="hide"
                class="bg-blue"
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
