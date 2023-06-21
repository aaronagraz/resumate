require("dotenv").config(); // This is your .env file, where you store your API key
// import dotenv from "dotenv";
// dotenv.config();

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  organization: "org-PqrKEzVHYaGnkbwL8qtLOri0",
  apiKey: process.env.OPENAI_API_KEY,
}); // This is your API key, this is how you authenticate with OpenAI. This is stored in your .env file

const openai = new OpenAIApi(configuration); // This is a new instance

const generatetext = async (prompt) => {
  // console.log("Esto es una prueba", prompt);
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 300,
      temperature: 0,
    });
    const textAnswer = response.data.choices[0].text;

    return {
      success: true,
      data: textAnswer,
    };
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    return {
      success: false,
      error: "There was an error generating the text.",
    };
  }
};
// generatetext("Hello, my name is Mr. Kurle").then((response) => {
//   console.log(response);
// });
module.exports = generatetext;
