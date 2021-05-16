const EventEmitter = require('eventEmitter');
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    
    clickPlay(){
        EventEmitter.instance.emit('clickPlay');
    },

    clickIntro(){
        EventEmitter.instance.emit('clickIntro');
    },

    clickHome(){
        EventEmitter.instance.emit('clickHome');
    },

    // update (dt) {},
});
