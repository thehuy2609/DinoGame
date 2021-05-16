
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    start () {
        this._status = "init"; 
    },

    onCollisionEnter: function (other, self) {
        if(other.node.group === "Ground"){
            this._status = "idle";
        }
    },

    update (dt) {
        if(this._status === "init"){
            this.node.y -= dt*100;
        }
    },
});
