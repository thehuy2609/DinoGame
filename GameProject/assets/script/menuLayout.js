const EventEmitter = require('eventEmitter');
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

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

});
