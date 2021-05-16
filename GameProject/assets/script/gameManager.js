const EventEmitter = require('eventEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
        menuNode : cc.Node,
        gameNode : cc.Node,
        introNode : cc.Node,
        gameOverNode : cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad (){
        EventEmitter.instance = new EventEmitter();
        EventEmitter.instance.registerEvent("clickPlay", this.startGame.bind(this));
        EventEmitter.instance.registerEvent("clickIntro", this.introGame.bind(this));
        EventEmitter.instance.registerEvent("clickHome", this.backHome.bind(this));
        EventEmitter.instance.registerEvent("endGame", this.endGame.bind(this));
    },

    startGame(){
        this.menuNode.active = false;
        this.gameNode.active = true;
        this.introNode.active = false;
        this.gameOverNode.active = false;
    },

    introGame(){
        this.menuNode.active = false;
        this.gameNode.active = false;
        this.introNode.active = true;
        this.gameOverNode.active = false;
    },

    backHome(){
        this.menuNode.active = true;
        this.gameNode.active = false;
        this.introNode.active = false;
        this.gameOverNode.active = false;
    },

    endGame(){
        this.gameOverNode.active = true;
    },

    start () {

    },

    // update (dt) {},
});

/*
    
*/