export default {
    name: 'TheLightbox',
    data() {
        return {
            visible: null, //Whether to display lightbox
            url: null //Picture address
        }
    },
    methods: {
        // Show lightbox
        show(url){
            this.visible = true;
            this.url = url;
        },
        //Close lightbox
        onClose(){
            this.visible = false;
        }
    },
    template: `
                <div class="dialog-wrapper" :class="{visible: visible}">
                    <div class="dialog"><img :src="url" /></div>
                    <div class="close" @click="onClose">×</div>
                </div>
            `
}