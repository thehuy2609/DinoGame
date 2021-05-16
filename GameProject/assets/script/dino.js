const EventEmitter = require('eventEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
        _canJump: false,
        _jumping : false,
        _die: false,
    },

    onLoad () {
        this.node.getComponent(cc.Animation).play("RunAnim");
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        EventEmitter.instance.registerEvent("clickPlay", this.playGame.bind(this));
    },

    start () {
        this._status = "init";
    },

    playGame(){
        this.node.y = 28; 
        this._canJump = false;
        this._jumping = false;
        this._die = false;
        this._status = "init";
        this.node.getComponent(cc.Animation).play("RunAnim");
    },

    jump(){
        if(this._canJump === true && this._die === false){
            this._jumping = true;
        }
    },

    onCollisionEnter: function (other, self) {
        if(other.node.group === "Ground"){
            if(this._die === false){
                this._canJump = true;
                this._status = "idle";
                this.node.getComponent(cc.Animation).play("RunAnim");
                this.node.stopAllActions();
            }
        }else if(other.node.group === "Enemy"){
            if (this._die === false){
                this.node.getComponent(cc.Animation).play("DeadAnim");
                EventEmitter.instance.emit('endGame');
                this._die = true;
                this._canJump = false;
            }
        }
    },
    
    onKeyDown: function (event) {
        switch(event.keyCode) {
            case cc.macro.KEY.space:
                {
                    this.jump();
                    break;
                }     
            default:{}
        }
    },

    update (dt) {
        if(this._status === "init"){
            this.node.y -= dt*100;
        }

        if(this._jumping === true && this._canJump === true){
            this._canJump = false;
            this._jumping = false;
            this.node.getComponent(cc.Animation).play("JumpAnim");
            var jumpUp = cc.tween().by(0.45, {y: 200}, {easing: 'sineOut'});
            var jumpDown = cc.tween().by(0.35, {y: -200}, {easing: 'sineIn'});
            var jump = cc.tween().sequence(jumpUp, jumpDown);
            cc.tween(this.node).then(jump).start()
        }
    },
});
