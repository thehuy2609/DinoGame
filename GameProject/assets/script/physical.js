cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad () {
        let physics_manager = cc.director.getPhysicsManager()
        physics_manager.enabled = true;
    },

});