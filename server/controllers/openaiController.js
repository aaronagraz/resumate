require("dotenv").config(); // This is your .env file, where you store your API key

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  organization: "org-PqrKEzVHYaGnkbwL8qtLOri0",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration); // This is a new instance

const generateText = async (req, res) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "How to eat a hotdog?",
    });

    const answer = response.data.choices[0].text;

    res.status(200).json({
      success: true,
      data: answer,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

    res.status(400).json({
      success: false,
      error: "Could not generate",
    });
  }
};

module.exports = generateText;

module.exports = { generateText };
