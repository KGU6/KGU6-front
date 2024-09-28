import { API_PATH } from '../constants/path.js';

export const PostTravlelog = async (data, imgFile) => {
  try {
    const formData = new FormData();
    formData.append('travelog', JSON.stringify(data));
    formData.append('mainImage', imgFile);
    formData.append('email', 'ahh0520@naver.com');

    const response = await fetch(API_PATH.TRAVERLOG.POST + '/', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error);
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};
