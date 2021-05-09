cc.Class({
    extends: cc.Component,

    properties: {
        prefabFreezeEnemy : cc.Prefab,
        _timerCreateFreezeEnemy:0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    update (dt) {
        this._timerCreateFreezeEnemy +=dt;
        if(this._timerCreateFreezeEnemy >= 1){
            let freezeEnemy = cc.instantiate(this.prefabFreezeEnemy);
            freezeEnemy.setPosition(this.node.width/2, 0);
            freezeEnemy.parent = this.node;
            this._timerCreateFreezeEnemy =0;
        }
    },
});
