import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteGame(game) {
            if (confirm('Are you sure you want to delete this game?')) {
                this.sendAction('deleteGame', game);
            }
        },
        updateGame(game, params) {
            this.sendAction('updateGame', game, params);
        }
    }
});
