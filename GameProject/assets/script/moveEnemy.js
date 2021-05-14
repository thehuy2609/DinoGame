const EventEmitter = require('eventEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
       // _moving: false,
        _positionDestroy :0,
        speed:1,
        _moving : true,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad (){
        //EventEmitter.instance.registerEvent("sendScore", this.updateSpeed.bind(this));
        EventEmitter.instance.registerEvent("endGame", this.endGame.bind(this));
    },

    start () {
        //this.speed = this.getSpeed();
        //cc.log(this.speed);
        let duration = 5 - this.speed/2;
        if( duration === 1){
            duration = 1;
        }
        this._positionDestroy = - (this.node.parent.width/2 + this.node.width/2 );
        
        let moveEnemy = cc.tween().to(duration, {x: this._positionDestroy});
        let destroyEnemy = cc.tween().call(()=>{
            this.node.destroy();
        })
        
        let enemyMove = cc.tween().sequence(moveEnemy, destroyEnemy);
        cc.tween(this.node).then(enemyMove).start()
    },
    
    endGame(){
        this._moving = false;
    },
    // getSpeed(){
    //     return this.speed;
    // },

    update (dt) {
        if(this._moving === false){
            this.node.stopAllActions();
        }
        //this.setSpeed();
        //cc.log(this.speed);
        // if(this.node.x > -(this.node.parent.width/2)){
        //     this.node.setPosition(cc.v2(this.node.x - 10, this.node.y));
        // }else{
        //     this.node.destroy();
        // }
        
        // if(this._moving === false){
            
        //     this._moving = true;
            
        // }
    },
});
