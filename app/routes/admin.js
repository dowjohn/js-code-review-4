import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('game');
    },
    actions: {
        saveGame(params) {
            var newGame = this.store.createRecord('game', params);
            newGame.save();
            this.transitionTo('admin');
        },
        toIndex(){
            this.transitionTo('admin');
        },
        deleteGame(game) {
            game.destroyRecord();
            this.transitionTo('admin');
        },
        updateGame(game, params) {

            Object.keys(params).forEach(function(key) {
                if(params[key]!==undefined) {
                    game.set(key,params[key]);
                }
            });
            game.save();
            this.transitionTo('admin');
        },
    }
});
