import DS from 'ember-data';

export default DS.Model.extend({
    reviewerName: DS.attr('string'),
    reviewerRating: DS.attr('number'),
    reviewerReview: DS.attr('string'),
    reviewerDate: DS.attr('number'),
    game: DS.belongsTo('game', {async: true}),
});
