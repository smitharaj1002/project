import axios from 'axios';

const dialogflowAPIUrl = 'https://dialogflow.googleapis.com/v2/projects/<YOUR_PROJECT_ID>/agent/sessions/<SESSION_ID>:detectIntent';
const accessToken = '<YOUR_ACCESS_TOKEN>';  // Replace with your Dialogflow API key

export const sendMessageToDialogflow = async (message: string) => {
  const requestBody = {
    queryInput: {
      text: {
        text: message,
        languageCode: 'en',
      },
    },
  };

  try {
    const response = await axios.post(dialogflowAPIUrl, requestBody, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data.queryResult.fulfillmentText;
  } catch (error) {
    console.error('Error communicating with Dialogflow:', error);
    return 'Sorry, there was an issue connecting to the assistant.';
  }
};
