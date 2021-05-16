const EventEmitter = require('eventEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
        editBoxName : cc.EditBox,
        btnName : cc.Button,
        btnHome : cc.Button,
        prefabRanking : cc.Prefab,
        scrollViewRanking : cc.ScrollView,
        _score : 0,
        _content : null,
        arrRanking: [],
    },

    onLoad (){
        this._content = this.scrollViewRanking.node.getChildByName("view").getChildByName("content");
        EventEmitter.instance.registerEvent("sendScore", this.getScore.bind(this));
        let rank = cc.sys.localStorage.getItem('topScores');
        if(rank !== null){
            this.arrRanking = JSON.parse(rank);
        }else{
            this.arrRanking =[];
        }
    },

    start () {
    },

    clickHome(){
        this.scrollViewRanking.node.active = false;
        this.btnName.node.active = true;
        this.btnHome.node.active = false;
    },

    getScore(score){
        this._score = score;
    },

    enterName(){
        let newRank = {
            name: '',
            score: 0,
        }
        newRank.name = this.editBoxName.string;
        newRank.score = this._score;
        this.arrRanking.push(newRank);
        this.sortArrRanking(this.arrRanking);
        cc.sys.localStorage.setItem('topScores', JSON.stringify(this.arrRanking));
        this.showRanking(this.arrRanking);
        this.scrollViewRanking.node.active = true;
        this.btnName.node.active = false;
        this.btnHome.node.active = true;
    },

    showRanking(arrayRanking){
        let firstPositionPrefabs= 0;
        this._content.removeAllChildren(true);
        for (let i = 0; i < arrayRanking.length; i++) {
            let itemRanking = cc.instantiate(this.prefabRanking);
            let nameRanking = itemRanking.getChildByName('lblName');
            let scoreRanking = itemRanking.getChildByName('lblScore');
            nameRanking.getComponent(cc.Label).string = arrayRanking[i].name;
            scoreRanking.getComponent(cc.Label).string = arrayRanking[i].score;
            itemRanking.parent = this._content;
            itemRanking.y = firstPositionPrefabs -= 31;
        }
    },
    
    sortArrRanking(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i].score < arr[j].score) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }
        }
    },

});
