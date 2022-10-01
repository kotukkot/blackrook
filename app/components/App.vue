<template>
    <GridLayout class="App" rows="*, auto">
        <ContentView row="0">
            <Navigator :defaultRoute="'/home'"/>
            <!-- <Frame>
                <HomePage />
            </Frame> -->
        </ContentView>
        <Nav row="1" />
    </GridLayout>
</template>
<script>
import Nav from './Nav';
import HomePage from './NewsPage';
export default {
    name: 'App',
    components: {
        Nav,
        HomePage,
    },
    methods: {
    }
};

</script>
<style scoped>
.App {
    background-color: #fff;
}
</style>
