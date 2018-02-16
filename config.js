/*
User-specific configuration
    ** IMPORTANT NOTE ********************
    * Please ensure you do not interchange your username and password.
    * Hint: Your username is the lengthy value ~ 36 digits including a hyphen
    * Hint: Your password is the smaller value ~ 12 characters
*/ 

exports.conversationWorkspaceId = '575845b6-f30f-43c8-95f3-08f6b07c8fcf';

exports.botName = "Amanda";//"Shannon"; 
//exports.conversationWorkspaceId = 'dae16a4a-4d2e-482e-817b-30e41c3a2ace'; // replace with the workspace identifier of your conversation

// Create the credentials object for export
exports.credentials = {};

// Watson Conversation
// https://www.ibm.com/watson/developercloud/conversation.html
exports.credentials.conversation = {
	password: 'xS3Vk41b6jft',
	username: 'fd920a19-00db-47b2-a48b-ae38c9b0986c'
};

// Watson Speech to Text
// https://www.ibm.com/watson/developercloud/speech-to-text.html
exports.credentials.speech_to_text = {
	password: 'YA1mOVAmKy5G',
	username: '63af2bf2-155c-443a-b776-a97e6148eb21'
};

// Watson Text to Speech
// https://www.ibm.com/watson/developercloud/text-to-speech.html
exports.credentials.text_to_speech = {
        "voice": "en-US_LisaVoice",
	password: 'vRkfQjj3n4Gd',
	username: '6f249b5e-1273-4a06-b07a-d6517c093209'
};
