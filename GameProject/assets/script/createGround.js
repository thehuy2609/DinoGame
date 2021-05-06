
cc.Class({
    extends: cc.Component,

    properties: {
        prefabGround : cc.Prefab,
        _timer:0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        let firstX = -this.node.width/2;
        
        for (let i = 0; i < 17; i++) {
            let groundObject = cc.instantiate(this.prefabGround);
            groundObject.setPosition(firstX, 0);
            groundObject.parent = this.node;
            firstX+=128;
        }
    },

    update (dt) {
        this._timer +=dt;
        if(this._timer >= 1/12){
            let groundObject = cc.instantiate(this.prefabGround);
            groundObject.setPosition(this.node.width/2 - 128, 0);
            groundObject.parent = this.node;
            this._timer =0;
        }
        
        // this.node.setPosition((this.node.position.x - (500*dt)), this.node.position.y);
        
        // if(this.node.position.x < -(this.node.parent.width/2 + this.node.width)){
        //     this.node.setPosition(this.node.parent.width + this.node.width, this.node.position.y)
        // }
    },
});
