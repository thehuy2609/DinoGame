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

    clickSetting(){
        EventEmitter.instance.emit('clickSetting');
    },

    clickHighScore(){
        EventEmitter.instance.emit('clickHighScore');
    },

    // update (dt) {},
});
