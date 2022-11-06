<template>
    <Page>
        <ActionBar>
            <Label text="Basic Drawer" />
        </ActionBar>

        
    </Page>
</template>

<script lang="typescript">
export default {
    computed: {
        message() {
            return 'Blank {N}-Vue app';
        },
        items() {
            return new Array(100).fill({ title: 'My profile' });
        }
    },
    methods: {
    }
};
</script>

<style scoped lang="scss">
ActionBar {
    background-color: #42b883;
    color: white;
}
Button {
    background-color: #42b883;
    color: white;
}
.avatar {
    background-color: #42b883;
    border-radius: 40;
    height: 80;
    vertical-align: middle;
    Label {
        vertical-align: middle;
        horizontal-align: center;
        font-size: 30;
        color: white;
    }
}
.drawer {
    Button {
        background-color: transparent;
        margin: 0;
        padding: 0;
        border-color: #ccc;
        z-index: 0;
        border-width: 0 0 0.5 0;
        color: #222222;
        text-align: left;
        padding-left: 25;
        height: 50;
        font-size: 14;
    }
    Button:highlighted {
        background-color: #eeeeee;
        color: #222222;
    }
}
</style>