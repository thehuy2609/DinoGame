const EventEmitter = require('eventEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
        prefabCactusEnemy : cc.Prefab,
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

    onLoad (){
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        EventEmitter.instance.registerEvent("endGame", this.endGame.bind(this));
        EventEmitter.instance.registerEvent("clickPlay", this.playGame.bind(this));
    },

    start () {
    
    },

    playGame(){
        this._timerCreateEnemy =0;
        this._timerUpdateSpeed =0;
        this._timerUpdateScore =0;
        this._numberOfUpdateScore =0;
        this._score =0;
        this._speedCreateEnemy = 1.5;
        this._playingGame = true;
    },

    endGame(){
        this._playingGame = false;
        EventEmitter.instance.emit('sendScore',this._score);
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
                this._speedCreateEnemy = 0.8;
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
