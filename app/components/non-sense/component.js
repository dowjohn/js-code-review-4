import Ember from 'ember';

export default Ember.Component.extend({
    genreName: Ember.computed('game.gameName', 'game.gameGenre', function() {
        return this.get('game.gameName') + '|' + this.get('game.gameGenre');
    }),
});
