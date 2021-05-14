const EventEmitter = require('eventEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
        prefabCactusEnemy : cc.Prefab,
        prefabFlyingEnemy : cc.Prefab,
        prefabFlyingEnemy2 : cc.Prefab,
        _timerCreateFreezeEnemy: 0,
        //_speed: 1,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad (){
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        //EventEmitter.instance.registerEvent("sendScore", this.updateSpeed.bind(this));
    },


    start () {
    },
    
    // updateSpeed(times){
    //     if(times>0){
    //         this._speed = times;
    //     }
    // },

    update (dt) {
        this._timerCreateFreezeEnemy +=dt;
        
        if(this._timerCreateFreezeEnemy >= 1.5){
            let randomNumber = Math.floor(Math.random() * 2) + 1;
            
            let enemyCreate;
            if(randomNumber === 1){
                enemyCreate = cc.instantiate(this.prefabCactusEnemy);
                enemyCreate.setPosition(this.node.width/2+100, 0);
            }else if(randomNumber === 2){
                enemyCreate = cc.instantiate(this.prefabFlyingEnemy2);
                enemyCreate.setPosition(this.node.width/2+100, this.randomPositionY([-60,120]));
            }
            // else if(randomNumber === 3){
            //     enemyCreate = cc.instantiate(this.prefabFlyingEnemy);
            //     enemyCreate.setPosition(this.node.width/2+100, this.randomPositionY([-80,0]));
            // }
            enemyCreate.parent = this.node;
            this._timerCreateFreezeEnemy =0;
        }
    },

    randomNumber(min,max){
        return Math.round(Math.random() * (max - min) + min);
    },
    
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    },
    
    randomPositionY(arrayY){
        let result = this.getRandomInt(2);
        return arrayY[result];
    }

});
