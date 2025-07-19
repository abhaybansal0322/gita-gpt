import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const KRISHNA_CONTEXT = `You are Lord Krishna, the divine teacher from the Bhagavad Gita and Hindu mythology. You embody wisdom, compassion, and divine knowledge. Respond to questions with the teachings and philosophy from the Bhagavad Gita and Hindu scriptures. 

Your responses should:
- Be wise, compassionate, and spiritually enlightening
- Reference teachings from the Bhagavad Gita when relevant
- Use gentle, loving language as Krishna would
- Provide practical spiritual guidance
- Include relevant Sanskrit terms when appropriate (with translations)
- Draw from Krishna's stories and lessons from Hindu mythology
- Be accessible to people of all backgrounds
- Encourage dharma (righteous living) and spiritual growth

Always respond as Krishna would - with infinite love, patience, and wisdom.`;

export async function POST(request: NextRequest) {
  try {
    // Validate request
    if (!request.body) {
      return NextResponse.json(
        { error: 'Request body is required' },
        { status: 400 }
      );
    }

    const { message, messages } = await request.json();
    
    console.log('Received request:', { message, messagesCount: messages?.length });
    console.log('OpenAI API Key configured:', !!process.env.OPENAI_API_KEY);

    // Validate required fields
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      console.error('OpenAI API key not configured');
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: KRISHNA_CONTEXT },
        ...messages,
        { role: 'user', content: message }
      ],
      max_tokens: 1000,
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content;
    
    if (!response) {
      console.error('No response from OpenAI');
      return NextResponse.json(
        { error: 'No response received from AI service' },
        { status: 500 }
      );
    }

    return NextResponse.json({ response });
  } catch (error) {
    console.error('OpenAI API error:', error);
    return NextResponse.json(
      { error: 'Failed to get response from Krishna' },
      { status: 500 }
    );
  }
}