var setCookie = function (name, value, exp) {
  var date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie =
    name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
};

export const getProfile = async () => {
  try {
    setCookie("email", "ahh0520@naver.com", 1);

    const response = await fetch(
      "http://ec2-52-79-249-37.ap-northeast-2.compute.amazonaws.com/api/core/profile",
      {
        method: "GET",
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
