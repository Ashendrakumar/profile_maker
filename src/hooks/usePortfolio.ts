import config from "@/config";
import portfolioData from "@/ashendra.json";
const { API_URL } = config;

const getData = async (
  codedUserDetail: string,
): Promise<typeof portfolioData> => {
  try {
    const codedId = codedUserDetail.split("-")[1];
    const response = await fetch(`${API_URL}/portfolio/${codedId}`, {
      method: "GET",
      cache: "force-cache",
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

export { getData };
