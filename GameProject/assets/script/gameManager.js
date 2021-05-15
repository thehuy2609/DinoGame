const EventEmitter = require('eventEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
        menuNode : cc.Node,
        gameNode : cc.Node,
        settingNode : cc.Node,
        highScoreNode : cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad (){
        EventEmitter.instance = new EventEmitter();
        EventEmitter.instance.registerEvent("clickPlay", this.startGame.bind(this));
        EventEmitter.instance.registerEvent("clickSetting", this.settingGame.bind(this));
        EventEmitter.instance.registerEvent("clickHighScore", this.highScore.bind(this));
    },

    startGame(){
        this.menuNode.active = false;
        this.gameNode.active = true;
        this.settingNode.active = false;
        this.highScoreNode.active = false;
    },

    settingGame(){
        this.gameNode.active = false;
        this.menuNode.active = false;
        this.settingNode.active = true;
        this.highScoreNode.active = false;
    },

    highScore(){
        this.gameNode.active = false;
        this.menuNode.active = false;
        this.settingNode.active = false;
        this.highScoreNode.active = true;
    },

    start () {

    },

    // update (dt) {},
});
