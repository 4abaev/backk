"use strict";

export default  {
  routes: [
    {
      method: "GET",
      path: "/getMyReviews",
      handler: "review.getMyReviews",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
        method: "POST",
        path: "/reviews",
        handler: "review.createReview",
        config: {
          policies: [],
          middlewares: [],
        },
      },
  ],
};
