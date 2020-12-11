import { fetchData } from './components/TheDataMiner.js'
import Lightbox from './components/TheLightbox.js';

(() => {
    // homepage
    let home_vue = new Vue({
        data: {
            topPortfolioImgs: [], // Image list
            topPortfolioVideo: {},// Video data
            showText: false,
        },
        created() {
            // Initializes the data and retrieves it through the etch api
            this.init();
        },
        methods: {
            init() {
                fetchData('./includes/index.php?page=home').then(r => {
                    this.processSuccess(r); //Data acquisition executed successfully
                }).catch((e) => {
                    location.href = '../error.html'; // Jump to the error page when error occurs
                });
            },
            processSuccess(r) {
                this.topPortfolioImgs = r.filter(v => v.type == 'img');
                this.topPortfolioVideo = r.find(v => v.type == 'video');
            },
            showBigImg(url){
                this.$refs.lightbox.show(url); //Display the lightbox and pass in the image address
            }
        },
        components:{
            Lightbox
        }
    }).$mount('#home');

    //gallery
    let gallery_vue = new Vue({
        data: {
            portfolioImgs: [], //Image list

            currentPortfolio: {} //The currently selected image
        },
        created() {
            //according to initialization, through fetch api to get data
            this.init();
        },
        methods: {
            init() {
                fetchData('./includes/index.php?page=gallery').then(r => {
                    this.processSuccess(r); //Data acquisition executed successfully
                }).catch((e) => {
                    location.href = '../error.html';// Jump to the error page when error occurs
                });
            },
            processSuccess(r) {
                this.portfolioImgs = r;
                this.currentPortfolio = this.portfolioImgs[0].url;
            },
            showBigImg(url){
                this.currentPortfolio = url;
            }
        }
    }).$mount('#gallery');

})();