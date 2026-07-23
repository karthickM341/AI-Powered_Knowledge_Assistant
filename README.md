# AI-Powered Knowledge Assistant
## Overview
The AI-Powered Knowledge Assistant is a full-stack web application that enables users to upload documents and interact with them using Artificial Intelligence. The system processes uploaded documents, creates semantic embeddings, stores them in a vector database, and answers user questions using Retrieval-Augmented Generation (RAG).
The application provides secure authentication, document management, AI-powered chat, analytics, and conversation history through a modern web interface.

# Features
- User Registration and Login (JWT Authentication)
- Upload PDF, DOCX, and TXT documents
- Automatic document processing
- AI-powered question answering
- Semantic search using embeddings
- Conversation history
- Document management
- Analytics Dashboard
- User-specific document access
- Responsive React frontend
- FastAPI backend

# Technology Stack
## Frontend
- React.js
- React Router
- Axios
- CSS3
- Vite

## Backend
- FastAPI
- SQLAlchemy
- MySQL
- JWT Authentication
- Pydantic
- Uvicorn

## AI Components
- Google Gemini API
- Sentence Transformers
- ChromaDB Vector Database

# Project Setup Instructions
## Prerequisites
Install the following software before running the project.
- Python 3.12+
- Node.js 18+
- MySQL Server
- Git

## Clone Repository
```bash
git clone https://github.com/yourusername/AI-Powered_Knowledge_Assistant.git

cd AI-Powered-Knowledge-Assistant
```

# Backend Setup
Move into backend folder

```bash
cd backend
```
Create Virtual Environment
```bash
python -m venv venv
```
Activate Environment
Windows

```bash
venv\Scripts\activate
```
Linux / Mac

```bash
source venv/bin/activate
```
Install Dependencies

```bash
pip install -r requirements.txt
```
Create .env
```env
DATABASE_URL=mysql+pymysql://root:admin123@localhost/knowledge_assistant
SECRET_KEY=your_secret_key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=60
GEMINI_API_KEY=your_google_gemini_api_key
```

Run Backend
```bash
uvicorn app.main:app --reload
```
Backend runs on
```
http://127.0.0.1:8000
```

# Frontend Setup
Move to frontend

```bash
cd frontend
```
Install packages

```bash
npm install
```
Run React Application

```bash
npm run dev
```
Frontend runs on
```
http://localhost:5173
```

# API Documentation
## Authentication APIs

### Register User

```
POST /auth/register
```

Request

```json
{
    "name":"Karthick",
    "email":"karthick123@email.com",
    "password":"Kart@123"
}
```

Response

```json
{
    "message":"User registered successfully"
}
```

### Login

```
POST /auth/login
```

Request

```
username=user@email.com
password=Password123@
```

Response

```json
{
    "access_token":"JWT_TOKEN",
    "token_type":"bearer"
}
```

### Change Password

```
PUT /auth/change-password
```

Authorization Required

---

# Document APIs

### Upload Document

```
POST /documents/upload
```

Uploads
- PDF
- DOCX
- TXT

### Get Documents
```
GET /documents
```

### Delete Document
```
DELETE /documents/{id}
```

### Download Document
```
GET /documents/download/{id}
```

# Chat APIs
### Ask Question

```
POST /chat/ask
```

Request

```json
{
    "question":"Explain Machine Learning"
}
```

Response

```json
{
    "answer":"Machine Learning is..."
}
```

### Conversation History
```
GET /chat/history
```

# Analytics APIs
### Dashboard Analytics

```
GET /analytics/dashboard
```

Returns

- Total Documents
- Questions Asked
- Active Users
- Storage Usage
- Conversation Statistics

# Architecture Overview

```
                +-----------------------+
                |      React Frontend   |
                +-----------+-----------+
                            |
                       REST API
                            |
                +-----------v-----------+
                |      FastAPI Backend  |
                +-----------+-----------+
                            |
        +-------------------+--------------------+
        |                   |                    |
        |                   |                    |
   Authentication      Document Module      Chat Module
        |                   |                    |
        +-------------------+--------------------+
                            |
                     AI Processing Layer
                            |
         +------------------+-------------------+
         |                                      |
 Sentence Transformer                    Gemini AI API
         |                                      |
         +------------------+-------------------+
                            |
                      ChromaDB Vector DB
                            |
                     MySQL Database
```

# AI Workflow Explanation
The AI-powered question answering follows a Retrieval-Augmented Generation (RAG) workflow.

### Step 1
User uploads a document.
↓
### Step 2
Backend extracts text from PDF, DOCX, or TXT files.
↓
### Step 3
The extracted content is divided into smaller chunks.
↓
### Step 4
Sentence Transformer converts every chunk into vector embeddings.
↓
### Step 5
Embeddings are stored inside ChromaDB.
↓
### Step 6
User asks a question.
↓
### Step 7
The question is converted into an embedding.
↓
### Step 8
ChromaDB searches for the most relevant document chunks.
↓
### Step 9
Relevant chunks are sent to Google Gemini.
↓
### Step 10
Gemini generates a contextual answer.
↓
### Step 11
The response is displayed in the chat interface.


# Project Structure
```
AI-Powered-Knowledge-Assistant/

backend/
│
├── app/
│   ├── api/
│   ├── core/
│   ├── models/
│   ├── schemas/
│   ├── services/
│   ├── ai/
│   └── main.py
│
├── requirements.txt

frontend/
│
├── src/
│   ├── pages/
│   ├── layouts/
│   ├── services/
│   ├── context/
│   ├── components/
│   └── global.css
│
├── package.json
│
README.md
```

# Future Enhancements
- OCR Support
- Multi-language Question Answering
- Voice Chat
- AI Document Summarization
- Role-Based Access Control
- Multiple Vector Database Support
- AI Citation Support
- Dark Mode
- Cloud Storage Integration

# Author
Karthick
AI-Powered Knowledge Assistant
Built using React, FastAPI, MySQL, ChromaDB and Google Gemini AI.
