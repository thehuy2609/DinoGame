const EventEmitter = require('eventEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
        _score : 0,
        _timerUpdateScore : 0,
        _timerEmitScore: 0,
        _numberOfEmitScore: 0,
        _playingGame : false,
        lblScore : cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad (){
        
    },

    start () {
        this._playingGame = true;
    },

    update (dt) {
        if(this._playingGame === true){
            this._timerUpdateScore += dt;
            this._timerEmitScore += dt;
            if(this._timerUpdateScore > 0.2){
                this._score +=1;
                this.lblScore.string = this._score;
                this._timerUpdateScore =0;
            }
            if(this._timerEmitScore > 5 ){
                this._numberOfEmitScore +=1;
                EventEmitter.instance.emit('sendScore',this._numberOfEmitScore);
                this._timerEmitScore =0;
            }
        }
    },
});
