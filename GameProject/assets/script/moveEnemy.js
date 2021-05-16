const EventEmitter = require('eventEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
       // _moving: false,
        _positionDestroy :0,
        speed:1,
        _moving : true,
        _newGame : false,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad (){
        //EventEmitter.instance.registerEvent("sendScore", this.updateSpeed.bind(this));
        EventEmitter.instance.registerEvent("endGame", this.endGame.bind(this));
        EventEmitter.instance.registerEvent("clickPlay", this.playNewGame.bind(this));
    },

    start () {
        //this.speed = this.getSpeed();
        //cc.log(this.speed);
        
        let duration = 4 - this.speed/2;
        //cc.log(duration);
        if( duration <= 2){
            duration = 2;
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

    playNewGame(){
        this._newGame = true;
    },
    // getSpeed(){
    //     return this.speed;
    // },

    update (dt) {
        if(this._moving === false){
            this.node.stopAllActions();
        }
        if(this._newGame === true){
            this.node.destroy();
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
