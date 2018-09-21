<template>
    <div id="app">
        <vue-ads-layout :full-bar="false">
            <vue-ads-bar
                slot="toolbar"
                :fixed="true"
                class="bg-red"
            >
                <vue-ads-menu slot="first" :hidden="hiddenLeft" @toggle="hideLeft"></vue-ads-menu>
                <vue-ads-menu slot="last" :hidden="hiddenRight" @toggle="hideRight"></vue-ads-menu>
            </vue-ads-bar>
            <!--<vue-ads-bar-->
                <!--slot="footer"-->
                <!--:fixed="false"-->
                <!--:footer="true"-->
                <!--class="bg-green"-->
            <!--&gt;-->
            <!--</vue-ads-bar>-->
            <vue-ads-drawer
                slot="left-drawer"
                :fixed="true"
                :minified="minifiedLeft"
                :hidden="hiddenLeft"
                @minify="minifyLeft"
                @hide="hideLeft"
                class="bg-yellow"
            >
                <div slot="top">Navigation</div>
                <vue-ads-minify slot="bottom" :minified="minifiedLeft" @toggle="minifyLeft"></vue-ads-minify>
            </vue-ads-drawer>
            <vue-ads-drawer
                slot="right-drawer"
                :minified="minifiedRight"
                :hidden="hiddenRight"
                :fixed="false"
                @minify="minifyRight"
                @hide="hideRight"
                class="bg-blue"
            >
                <div slot="top">Navigation</div>
                <vue-ads-minify slot="bottom" :right="true" :minified="minifiedRight" @toggle="minifyRight"></vue-ads-minify>
            </vue-ads-drawer>

            start<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            test<br/>
            end<br/>

        </vue-ads-layout>
    </div>
</template>

<script>
import './assets/css/packages.css';

import VueAdsLayout from './components/Layout';
import VueAdsBar from './components/Bar';
import VueAdsDrawer from './components/Drawer';
import VueAdsMenu from './components/buttons/Menu';
import VueAdsMinify from './components/buttons/Minify';

export default {
    name: 'app',

    components: {
        VueAdsMinify,
        VueAdsMenu,
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
    },
};
</script>
