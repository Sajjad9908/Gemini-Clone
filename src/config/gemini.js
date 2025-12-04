
import { GoogleGenAI } from '@google/genai';

// API key generated from gemini you can also generate key for an api from gemini
const apikey = "AIzaSyDO5QIZl3HEt8swRpuVxq-_Znh-O6LHjHU"; 


async function main(prompt) {

  const ai = new GoogleGenAI({
    apiKey: apikey, 
  });


  const tools = [
    {
      googleSearch: {}
    }
  ];


  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    tools,
  };


  const model = 'gemini-flash-latest';

  // Contents to be processed by the model
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `${prompt}`, 
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
