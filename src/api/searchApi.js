import { API_PATH } from '../constants/path.js';

export const searchApi = async (qurey) => {
  try {
    const queryString = new URLSearchParams({ keyword: qurey });

    const response = await fetch(
      `${API_PATH.SEARCH.GET.TRAVELOG_SEARCH_RESENT}?${queryString}&sortBy=latest`,
      {
        method: 'GET',
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error);
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};
