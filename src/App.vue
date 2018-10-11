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
                <vue-ads-hide-button
                    slot="first"
                    :hidden="hiddenLeft"
                    @clicked="hideLeft"
                />
                <vue-ads-hide-button
                    slot="last"
                    :hidden="hiddenRight"
                    @clicked="hideRight"
                />
            </vue-ads-bar>
            <vue-ads-bar
                slot="footer"
                :fixed="true"
                :footer="true"
                class="bg-green"
            />
            <vue-ads-drawer
                slot="left-drawer"
                :fixed="true"
                :minified="minifiedLeft"
                :hidden="hiddenLeft"
                :responsive="!minifyLeftButtonActivated && !hideLeftButtonActivated"
                class="bg-yellow"
                @minify="minifyLeft"
                @hide="hideLeft"
            >
                <div slot="top">Navigation</div>
                <vue-ads-minify-button
                    slot="bottom"
                    :minified="minifiedLeft"
                    @clicked="minifyLeft"
                />
            </vue-ads-drawer>
            <vue-ads-drawer
                slot="right-drawer"
                :fixed="false"
                :minified="minifiedRight"
                :hidden="hiddenRight"
                :responsive="!minifyRightButtonActivated && !hideRightButtonActivated"
                :right="true"
                class="bg-blue"
                @minify="minifyRight"
                @hide="hideRight"
            >
                <div slot="top">Navigation</div>
                <vue-ads-minify-button
                    slot="bottom"
                    :right="true"
                    :minified="minifiedRight"
                    @clicked="minifyRight"
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
import VueAdsHideButton from './components/buttons/Hide';
import VueAdsMinifyButton from './components/buttons/Minify';

export default {
    name: 'App',

    components: {
        VueAdsMinifyButton,
        VueAdsHideButton,
        VueAdsDrawer,
        VueAdsBar,
        VueAdsLayout,
    },

    data () {
        return {
            minifiedLeft: false,
            minifiedRight: false,
            hiddenLeft: false,
            hiddenRight: true,
            minifyLeftButtonActivated: false,
            minifyRightButtonActivated: false,
            hideLeftButtonActivated: false,
            hideRightButtonActivated: false,
        };
    },

    methods: {
        minifyLeft (minified, activated = false) {
            this.minifiedLeft = minified;
            this.minifyLeftButtonActivated = activated;
        },

        hideLeft (hidden, activated = false) {
            this.hiddenLeft = hidden;
            this.hideLeftButtonActivated = activated;
        },

        minifyRight (minified, activated = false) {
            this.minifiedRight = minified;
            this.minifyRightButtonActivated = activated;
        },

        hideRight (hidden, activated = false) {
            this.hiddenRight = hidden;
            this.hideRightButtonActivated = activated;
        },
    },
};
</script>
