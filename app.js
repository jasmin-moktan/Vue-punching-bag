new Vue({
    el:'#vue-app',
    data:{
        health: 0,
        ended: false,
    },
    methods:{
        punch: function () {
            this.health += 10;
            if (this.health >= 100) {
                this.ended = true;
            }
            console.log(this.health);
        },
        restart: function () {
            this.health = 0;
            this.ended = false;
        },
    },
});