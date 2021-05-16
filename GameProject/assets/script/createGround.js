
cc.Class({
    extends: cc.Component,

    properties: {
        prefabGround : cc.Prefab,
        _timerCreateGround:0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        let firstX = -this.node.width/2+64;
        
        for (let i = 0; i < 10; i++) {
            let groundObject = cc.instantiate(this.prefabGround);
            groundObject.setPosition(firstX, 0);
            groundObject.parent = this.node;
            firstX+=128;
        }
    },

    update (dt) {
        this._timerCreateGround +=dt;
        // if(this._timerCreateGround >= 1/6){
        //     let groundObject = cc.instantiate(this.prefabGround);
        //     groundObject.setPosition(this.node.width/2, 0);
        //     groundObject.parent = this.node;
        //     this._timerCreateGround =0;
        // }
        
        // this.node.setPosition((this.node.position.x - (500*dt)), this.node.position.y);
        
        // if(this.node.position.x < -(this.node.parent.width/2 + this.node.width)){
        //     this.node.setPosition(this.node.parent.width + this.node.width, this.node.position.y)
        // }
    },
});
