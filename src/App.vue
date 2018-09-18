<template>
    <div id="app">
        <vue-ads-layout></vue-ads-layout>
    </div>
</template>

<script>
import './assets/css/packages.css';

import VueAdsLayout from './components/Layout';

export default {
    name: 'app',
    components: {
        VueAdsLayout,
    },
};
</script>
