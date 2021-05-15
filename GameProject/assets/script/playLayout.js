const EventEmitter = require('eventEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
        prefabCactusEnemy : cc.Prefab,
        prefabFlyingEnemy : cc.Prefab,
        prefabFlyingEnemy2 : cc.Prefab,
        lblScore : cc.Label,
        _timerCreateEnemy: 0,
        _timerUpdateSpeed: 0,
        _timerUpdateScore: 0,
        _numberOfUpdateScore: 1,
        _score: 0,
        _speedCreateEnemy: 1.5,
        _playingGame : true,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad (){
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        EventEmitter.instance.registerEvent("endGame", this.endGame.bind(this));
    },

    start () {
    },

    endGame(){
        this._playingGame = false;
    },

    update (dt) {
        if(this._playingGame === true){
            this._timerCreateEnemy +=dt;
            this._timerUpdateSpeed += dt;
            this._timerUpdateScore += dt;
            if(this._timerUpdateScore > 0.1){
                this._score +=1;
                this.lblScore.string = this._score;
                this._timerUpdateScore =0;
            }
            if(this._timerUpdateSpeed > 5 ){
                this._numberOfUpdateScore +=1;
                this._timerUpdateSpeed =0;
            }
            if(this._numberOfUpdateScore === 5){
                this._speedCreateEnemy = this.randomNumber(7,10)/10;
            }
            if(this._timerCreateEnemy >= this._speedCreateEnemy){
                let randomNumber = Math.floor(Math.random() * 2) + 1;
                
                let enemyCreate;
                if(randomNumber === 1){
                    enemyCreate = cc.instantiate(this.prefabCactusEnemy);
                    enemyCreate.setPosition(this.node.width/2+100, -50);
                }else if(randomNumber === 2){
                    enemyCreate = cc.instantiate(this.prefabFlyingEnemy2);
                    enemyCreate.setPosition(this.node.width/2+100, this.randomPositionY([-60,120]));
                }
                // else if(randomNumber === 3){
                //     enemyCreate = cc.instantiate(this.prefabFlyingEnemy);
                //     enemyCreate.setPosition(this.node.width/2+100, this.randomPositionY([-80,0]));
                // }
                //cc.log(this._numberOfUpdateScore);
                enemyCreate.getComponent('moveEnemy').speed = this._numberOfUpdateScore;
                enemyCreate.parent = this.node;
                this._timerCreateEnemy =0;
            }
        }
        
    },

    randomNumber(min,max){
        return Math.round(Math.random() * (max - min) + min);
    },
    
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    },
    
    randomPositionY(arrayY){
        let result = this.getRandomInt(2);
        return arrayY[result];
    }

});
