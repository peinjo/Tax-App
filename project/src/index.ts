import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { rateLimit } from './middleware/rateLimit';
import { authenticateToken } from './middleware/auth';
import chatRoutes from './routes/chat';
import documentRoutes from './routes/documents';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(','),
  credentials: true,
}));
app.use(express.json());

// Rate limiting
app.use(rateLimit);

// Routes
app.use('/api/chat', authenticateToken, chatRoutes);
app.use('/api/process-document', authenticateToken, documentRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});