
cc.Class({
    extends: cc.Component,

    properties: {
            
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        
    },

    update (dt) {
        if(this.node.x > -(this.node.parent.width/2)){
            this.node.setPosition(cc.v2(this.node.x - 10, this.node.y));
        }else{
            this.node.destroy();
        }
    },
});
