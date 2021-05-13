const EventEmitter = require('eventEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad (){
        EventEmitter.instance = new EventEmitter();
        
    },

    start () {

    },

    // update (dt) {},
});
