// Import the necessary package
import { GoogleGenAI } from '@google/genai';

// API key
const apikey = "AIzaSyC5OGdyyuVPECbbvKqpm67UZAbLb3M3eEI"; 


// Replace this with your actual API key if needed

// Main function to interact with Gemini API
async function main(prompt) {
  // Initialize the GoogleGenAI instance with the API key
  const ai = new GoogleGenAI({
    apiKey: apikey, // Directly pass the API key here
  });

  // Setup the tools you want to use, like Google Search (or other tools)
  const tools = [
    {
      googleSearch: {}
    }
  ];

  // Configuration for thinking behavior (if applicable)
  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    tools,
  };

  // Model to use for generation
  const model = 'gemini-flash-latest';

  // Contents to be processed by the model
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `${prompt}`,  // Replace this with the actual input
        },
      ],
    },
  ];

  try {
    // Generate content with the model and configurations
    const response = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });
    let completeResponce=""

    // Read and print the response text as a stream
    let fileIndex = 0;
    for await (const chunk of response) {
      console.log(chunk.text);
    completeResponce+=chunk.text
    }
    return completeResponce
  } catch (error) {
    console.error("Error generating content:", error);
  }
}

// Call the main function
 export default main;
