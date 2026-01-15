//C:\Users\User\mini-crm\api\chat.ts
import type { VercelRequest, VercelResponse } from '@vercel/node'
import axios from 'axios'

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
console.log('API KEY:', process.env.OPENROUTER_API_KEY)

  try {
    const { message } = req.body

    if (!message) {
      return res.status(400).json({ error: 'No message provided' })
    }

    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-4o-mini',
        messages: [{ role: 'user', content: message }]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost:3000',
      'X-Title': 'mini-crm'
        }
      }
    )

    res.status(200).json({
  reply: response.data.choices[0].message.content
})
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'AI error' })
  }
}
