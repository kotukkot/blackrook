<template>
    <Page actionBarHidden="true">
        <!-- <FlexboxLayout> -->
            <AWebView src="https://n550762.yclients.com/" @loaded="onWebViewLoaded" :iosOverflowSafeArea="true" />
        <!-- </FlexboxLayout> -->
    </Page>
</template>
<script>
export default {
    name: 'Yclients',
    methods: {
        onWebViewLoaded(args) {
            const webView = args.object;
            if (webView.android) {
                webView.android.getSettings().setDomStorageEnabled(true);
                webView.android.getSettings().setDatabaseEnabled(true);
                webView.android.getSettings().setJavaScriptEnabled(true);
                webView.android.getSettings().setAppCacheEnabled(true);
            }

            if (args.object && args.object.ios) {
                setTimeout(() => {
                args.object.requestLayout();
                }, 0);
            }
        }
    },
};

</script>
<style scoped>
</style>
