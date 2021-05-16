
cc.Class({
    extends: cc.Component,

    properties: {
        prefabGround : cc.Prefab,
    },

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
        
    },
});
