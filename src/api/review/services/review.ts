/**
 * review service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "api::review.review",
  ({ strapi }) => ({
    async getMyReviews(userId: number) {
      const reviews = await strapi.db.query("api::review.review").findMany({
        where: {
          user_id: userId,
        },
      });
      return reviews;
    },
    async createReview(dto, userId: number) {
        const review = await strapi.entityService.create('api::review.review', {
            data: {
                text: dto.text,
                ownerEmail: dto.ownerEmail,
                isActive: dto.isActive,
                user_id: userId,
            }
        })
        return review;
      },
  })
);
