<template>
    <Page actionBarHidden="true">
        <FlexboxLayout>
            <AWebView src="https://n550762.yclients.com/" @loaded="onWebViewLoaded" />
        </FlexboxLayout>
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
        }
    },
};

</script>
<style scoped>
</style>
