import express from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Security middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Chat completion endpoint
app.post('/api/chat', authenticateToken, async (req, res) => {
  try {
    const { messages } = req.body;
    const completion = await openai.chat.completions.create({
      messages,
      model: 'gpt-4-turbo-preview',
      temperature: 0.7,
      max_tokens: 1000,
    });

    res.json(completion.choices[0].message);
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ error: 'Failed to get AI response' });
  }
});

// Document processing endpoint
app.post('/api/process-document', authenticateToken, async (req, res) => {
  try {
    // Implement document processing logic here
    res.json({ message: 'Document processed successfully' });
  } catch (error) {
    console.error('Document processing error:', error);
    res.status(500).json({ error: 'Failed to process document' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});