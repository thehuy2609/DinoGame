
cc.Class({
    extends: cc.Component,

    properties: {
        _jumping: false,
        _nextPosition: 0,
        _currentPosition: 0,
        _timer:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.getComponent(cc.RigidBody).gravityScale = 1.5;
        this.node.getComponent(cc.Animation).play("RunAnim");
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.jumpPlayer,this);
    },

    jumpPlayer(event){
        switch(event.keyCode){
            case cc.macro.KEY.space:
                if(this._jumping === false){
                    this.node.getComponent(cc.Animation).play("JumpAnim");
                    this._currentPosition = this.node.position.y;
                    this._jumping = true;
                    this.node.getComponent(cc.RigidBody).linearVelocity = new cc.Vec2(0, 400);
                }
            break;
        }
    },

    start () {
        
    },

    update (dt) {
        if(this._jumping === true){
            if(this.node.getComponent(cc.RigidBody).linearVelocity.y === 0 && Math.floor(this.node.position.y) === Math.floor(this._currentPosition)){
                this._jumping = false;
                this.node.getComponent(cc.Animation).play("RunAnim");
            }
        }
        
    },
});
