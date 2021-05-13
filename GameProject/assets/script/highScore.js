var itemHighScore = cc.Class({
    name: 'itemHighScore',
    properties: {
        itemName: '',
        itemScore: 0,
    }
});

cc.Class({
    extends: cc.Component,

    properties: {
        arrayScore: {
            default: [],
            type: itemHighScore,
        },
        highScorePrefab : cc.Prefab,
    },

    

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        cc.log(this.arrayScore);
        cc.log(this.arrayScore.sort(this.compareSecondColumn));
    },

    compareSecondColumn(a, b) {
        if (a[1] === b[1]) {
            return 0;
        }
        else {
            return (a[1] < b[1]) ? -1 : 1;
        }
    },

    // update (dt) {},
});
