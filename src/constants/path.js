const VITE_SEVER_URL = import.meta.env.VITE_SEVER_URL;

export const API_PATH = {
  SEARCH: {
    GET: {
      TRAVELOG_RESENT: VITE_SEVER_URL + '/api/core/travelog?sortBy=latest',
      TRAVELOG_LIKE: VITE_SEVER_URL + '/api/core/travelog?sortBy=likes',
      TRAVELOG_SEARCH_RESENT: VITE_SEVER_URL + '/api/core/travelog/search',
      TRAVELOG_SEARCH_LIKE:
        VITE_SEVER_URL +
        '/api/core/travelog/search?keyword=:query&sortBy=likes',
    },
  },
  USER: {
    GET: {
      PROFILE: VITE_SEVER_URL + '/api/core/profile',
    },
  },
  TRAVERLOG: {
    GET: VITE_SEVER_URL + '/api/core/travelog/:travelogId',
    POST: VITE_SEVER_URL + '/api/core/travelog',
  },
};
