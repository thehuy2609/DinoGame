
cc.Class({
    extends: cc.Component,

    properties: {
        _maxY : 0,
        _minY : 0,
        _movingUp: true,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this._maxY = this.node.y += 250;
        this._minY = this.node.y -= 250;
    },

    update (dt) {
        if(this.node.x > - (this.node.parent.width/2)){
            if(this.node.y <= this._maxY && this._movingUp === true ){
                this.node.setPosition(cc.v2(this.node.x - 15, this.node.y += 10));
                if(this.node.y === this._maxY){
                    this._movingUp = false;
                }
            }
            if(this.node.y >= this._minY && this._movingUp === false ){
                this.node.setPosition(cc.v2(this.node.x - 15, this.node.y -= 10));
                if(this.node.y === this._minY){
                    this._movingUp = true;
                }
            }
        }else{
            this.node.destroy();
        }
    },
});
