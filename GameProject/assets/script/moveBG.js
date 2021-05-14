
cc.Class({
    extends: cc.Component,

    properties: {
            
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        // let moveLeftBg = cc.tween().to( 10, {x: - this.node.width});
        // let moveBackBg = cc.tween().to( 0.01, {x: this.node.width});
        
        // let actionBackground = cc.tween().sequence(moveLeftBg, moveBackBg);
        // cc.tween(this.node).then(actionBackground).repeatForever().start();
        // cc.tween(this.node)
        //     .to(10, {x: - this.node.width})
        //     .start();
    },

    update (dt) {
        if(this.node.x > -this.node.width + 10 ){
            this.node.x -=10;
        }else{
            this.node.x = this.node.width
        }
    },
});
