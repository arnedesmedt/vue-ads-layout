<template>
    <div id="app">
        <vue-ads-layout
            :full-bar="true"
        >
            <vue-ads-bar
                slot="toolbar"
                :fixed="true"
                class="bg-red-600"
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
                class="bg-green-600"
            />
            <vue-ads-drawer
                slot="left-drawer"
                :fixed="true"
                :minified="minifiedLeft"
                :hidden="hiddenLeft"
                class="bg-yellow-500"
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
                :fixed="true"
                :minified="minifiedRight"
                :hidden="hiddenRight"
                :right="true"
                class="bg-blue-600"
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
            minifiedLeft: null,
            minifiedRight: false,
            hiddenLeft: null,
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
