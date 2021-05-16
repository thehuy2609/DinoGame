const EventEmitter = require('eventEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
        _positionDestroy :0,
        speed:1,
        _moving : true,
        _newGame : false,
    },

    onLoad (){
        EventEmitter.instance.registerEvent("endGame", this.endGame.bind(this));
        EventEmitter.instance.registerEvent("clickPlay", this.playNewGame.bind(this));
    },

    start () {
        let duration = 4 - this.speed/2;
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
    
    update (dt) {
        if(this._moving === false){
            this.node.stopAllActions();
        }
        if(this._newGame === true){
            this.node.destroy();
        }
    },
});
