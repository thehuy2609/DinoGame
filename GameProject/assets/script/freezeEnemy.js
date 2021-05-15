
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this._status = "init"; 
    },

    onCollisionEnter: function (other, self) {
        if(other.node.group === "Ground"){
            this._status = "idle";
            //this.node.stopAllActions();
        }
        // else if(other.node.group === "Enemy"){
        //     cc.log('thua cmnr');
        // }
    },

    update (dt) {
        if(this._status === "init"){
            this.node.y -= dt*100;
        }
    },
});
