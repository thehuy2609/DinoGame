
cc.Class({
    extends: cc.Component,

    properties: {
        //_jumping: false,
        // _nextPosition: 0,
        // _currentPosition: 0,
        _timer:0,
        _maxY: 0,
        _minY: 0,
        _movingUp: false,
        _jumping: false,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //this.node.getComponent(cc.RigidBody).gravityScale = 2;
        this.node.getComponent(cc.Animation).play("RunAnim");
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.jumpPlayer,this);
    },

    jumpPlayer(event){
        switch(event.keyCode){
            case cc.macro.KEY.space:
                // if(this._jumping === false){
                //     this.node.getComponent(cc.Animation).play("JumpAnim");
                //     this._currentPosition = this.node.position.y;
                //     this._jumping = true;
                //     this.node.getComponent(cc.RigidBody).linearVelocity = new cc.Vec2(0, 500);
                // }
                if(this._jumping === false){
                    this._jumping = true;
                    this._movingUp = true;
                }
            break;
        }
    },

    start () {
        this._maxY = this.node.y + 200;
        this._minY = this.node.y;
    },

    update (dt) {
        if(this._jumping === true){
            this.node.getComponent(cc.Animation).play("JumpAnim");
            if(this.node.y < this._maxY && this._movingUp === true){
                this.node.y+=10;
                if(this.node.y === this._maxY){
                    this._movingUp = false;
                }
            }
            if(this.node.y > this._minY && this._movingUp === false){
                this.node.y-=10;
                if(this.node.y === this._minY){
                    this._jumping = false;
                    this.node.getComponent(cc.Animation).play("RunAnim");
                }
            }
            
            // if(this.node.getComponent(cc.RigidBody).linearVelocity.y === 0 && Math.floor(this.node.position.y) === Math.floor(this._currentPosition)){
            //     this._jumping = false;
            //     this.node.getComponent(cc.Animation).play("RunAnim");
            // }
        }
    },
});
