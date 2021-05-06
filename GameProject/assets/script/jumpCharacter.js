
cc.Class({
    extends: cc.Component,

    properties: {
        _jumping: false,
        _nextPosition: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.getComponent(cc.Animation).play("RunAnim");
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.jumpPlayer,this);
        cc.director.getPhysicsManager().enabled = true;
        this.node.getComponent(cc.RigidBody).fixedRotation  = true;
    },

    jumpPlayer(event){
        switch(event.keyCode){
            case cc.macro.KEY.space:
                if(this._jumping === false){
                this.node.getComponent(cc.Animation).play("JumpAnim");
                this.node.setPosition(cc.v2(this.node.x, this.node.y + 200));
                this.node.getComponent(cc.RigidBody).applyForceToCenter(new cc.Vec2(0,100000),true);              
                this._jumping = true;
                }
            break;
        }
    },

    start () {

    },

    update (dt) {
        
        if(this._jumping === true)
        {
            if(this.node.position.y>this._nextPosition)
            {
                this.node.getComponent(cc.RigidBody).gravityScale = 10;
                
                this.node.getComponent(cc.Animation).play("RunAnim");
                this.node.angle = 0;

                this._jumping = false;
            }
        }
    },
});
