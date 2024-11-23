import OpenAI from 'openai';
const openai = new OpenAI({
    apiKey: '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',
    dangerouslyAllowBrowser: true
});
export async function processDocument(file) {
    try {
        const formData = new FormData();
        formData.append('file', file);
        // Process document content
        // This is a placeholder - implement actual document processing logic
        return 'Document processed successfully';
    }
    catch (error) {
        console.error('Error processing document:', error);
        throw new Error('Failed to process document');
    }
}
export async function getChatCompletion(messages) {
    try {
        const completion = await openai.chat.completions.create({
            messages: messages,
            model: 'gpt-4-turbo-preview',
            temperature: 0.7,
            max_tokens: 1000,
        });
        return completion.choices[0].message;
    }
    catch (error) {
        console.error('OpenAI API error:', error);
        throw new Error('Failed to get response from AI');
    }
}
