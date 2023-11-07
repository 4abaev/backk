/**
 * review controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::review.review',
({strapi}) => ({
  async getMyReviews(ctx) {
    return await strapi.service('api::review.review').getMyReviews(ctx.state.user.id);
  },
  async createReview(ctx) {
    const review = ctx.request.body;
    const user_id = ctx.state.user.id
    return await strapi.service('api::review.review').createReview(review, user_id);
  }
}));
