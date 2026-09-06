import config from "@src/config";
import portfolioData from "@src/ashendra.json";
const { API_URL } = config;

const getData = async (
  codedUserDetail: string,
): Promise<typeof portfolioData> => {
  try {
    const codedId = codedUserDetail.split("-")[1];
    const response = await fetch(`${API_URL}/portfolio/${codedId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    localStorage.setItem("codedUserId", codedUserDetail);
    const data = await response.json();
    return data as typeof portfolioData;
  } catch (error) {
    localStorage.removeItem("codedUserId");
    throw error;
  }
};

const sendContactDetails = async (reqBody: { name: string; email: string; message: string }) => {
  try {
    const response = await fetch(`${API_URL}/contact-form/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });

    if (!response.ok) {
      throw new Error("Failed to send contact details");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export { getData , sendContactDetails};
