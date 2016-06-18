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
            if (this.get('reviewerRating') > 10 || this.get('reviewerRating') < 1) {
                alert('enter a number between 1 and 10');
            } else {
                this.sendAction('saveReview', params);
                this.set('reviewerName', '');
                this.set('reviewerDate', '');
                this.set('reviewerRating', '');
                this.set('reviewerReview', '');
            };
        },
    }
});
