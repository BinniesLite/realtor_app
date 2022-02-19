
export const baseUrl = "https://bayut.p.rapidapi.com";

var axios = require("axios").default;

export const fetchApi = async (url) => {
  try {
    const {data} = await axios.get(url, {
      headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': 'b51d086105msh50ca0aa73611a01p10c4b8jsn910a1ef00f1f'
      }
    });
    console.log(data);
    return data;
} catch (error) {
  console.log(error);
}
};
