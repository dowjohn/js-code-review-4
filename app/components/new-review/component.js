import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        saveReview() {
            var params = {
                reviewerName: this.get('reviewerName'),
                reviewerDate: this.get('reviewerDate'),
                reviewerRating: this.get('reviewerRating'),
                reviewerReview: this.get('reviewerReview'),
                game: this.get('game'),
            };
            console.log(params.game);
            this.sendAction('saveReview', params);
        },
    }
});
