export const login = async (email) => {
    try {
      // FormData 객체 생성
      const formData = new FormData();
      formData.append("email", email);
  
      // API 요청
      const response = await fetch('http://ec2-52-79-249-37.ap-northeast-2.compute.amazonaws.com/api/login', {
        method: 'POST',
        body: formData, // FormData 객체를 본문으로 사용
      });
  
      // 응답 처리
      const result = await response.text();
  
      if (!response.ok) {
        throw new Error(result.error);
      }
  
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  
// import axios from 'axios';

// export const login = async (email) => {
//   try {
//     // FormData 객체 생성
//     const formData = new FormData();
//     formData.append("email", email);

//     // Axios API 요청
//     const response = await axios.post('http://ec2-52-79-249-37.ap-northeast-2.compute.amazonaws.com/api/login', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data', // FormData 사용 시 필요한 헤더
//       }
//     });

//     // 응답 처리
//     console.log(response);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };
