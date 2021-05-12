cc.Class({
    extends: cc.Component,

    properties: {
        _score : 0,
        _timer : 0,
        lblScore : cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    update (dt) {
        this._timer += dt;
        if(this._timer > 0.1){
            this._score +=1;
            this.lblScore.string = this._score;
            this._timer =0;
        }
        
    },
});
