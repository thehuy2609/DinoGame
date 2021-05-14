const EventEmitter = require('eventEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
        _moving: false,
        _positionDestroy :0,
        _speed:1,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad (){
        EventEmitter.instance.registerEvent("sendScore", this.updateSpeed.bind(this));
    },

    start () {
        this._positionDestroy = -this.node.parent.width/2;
    },
    
    updateSpeed(times){
        this._speed = times;
        cc.log(this._speed);
    },

    destroyEnemy(){
        this.node.destroy();
    },

    update (dt) {
        // if(this.node.x > -(this.node.parent.width/2)){
        //     this.node.setPosition(cc.v2(this.node.x - 10, this.node.y));
        // }else{
        //     this.node.destroy();
        // }
        
        if(this._moving === false){
            cc.log(this._speed);
            this._moving = true;
            cc.tween(this.node)
            .to(5-this._speed, {x: this._positionDestroy})
            //.call(this.destroyEnemy())
            .start()
        }
    },
});
