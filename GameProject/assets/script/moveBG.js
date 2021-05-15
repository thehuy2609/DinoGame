const EventEmitter = require('eventEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
        _movingBackground : false,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad (){
        EventEmitter.instance.registerEvent("endGame", this.endGame.bind(this));
        EventEmitter.instance.registerEvent("clickPlay", this.startGame.bind(this));
    },

    start () {
        //cc.log(this._movingBackground);
    },

    startGame(){
        this._movingBackground = true;
    },

    endGame(){
        this._movingBackground = false;
    },

    update (dt) {
        if(this._movingBackground === true){
            if(this.node.x > - this.node.width){
                this.node.x -= 5;
            }else{
                this.node.x = this.node.width -5;
            }    
        }
    },
});
