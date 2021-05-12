cc.Class({
    extends: cc.Component,

    properties: {
        prefabCactusEnemy : cc.Prefab,
        prefabFlyingEnemy : cc.Prefab,
        prefabFlyingEnemy2 : cc.Prefab,
        _timerCreateFreezeEnemy:0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    update (dt) {
        this._timerCreateFreezeEnemy +=dt;
        if(this._timerCreateFreezeEnemy >= 1.5){
            let randomNumber = Math.floor(Math.random() * 3) + 1;
            let enemyCreate;
            if(randomNumber === 1){
                enemyCreate = cc.instantiate(this.prefabCactusEnemy);
            }else if(randomNumber === 2){
                enemyCreate = cc.instantiate(this.prefabFlyingEnemy2);
            }else if(randomNumber === 3){
                enemyCreate = cc.instantiate(this.prefabFlyingEnemy);
            }
            enemyCreate.setPosition(this.node.width/2, 0);
            enemyCreate.parent = this.node;
            this._timerCreateFreezeEnemy =0;
        }
    },
});
