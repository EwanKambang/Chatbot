# main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from langchain.chat_models import ChatOpenAI
from langchain.schema import HumanMessage, SystemMessage
from dotenv import load_dotenv
import os

app = FastAPI()
load_dotenv()
model = ChatOpenAI(
        openai_api_key = os.getenv("OPENAI_API_KEY"),
        model_name="gpt-3.5-turbo"
)

# Define request model
class ChatRequest(BaseModel):
    message: str

# Define system prompt
SYSTEM_PROMPT = """
You are a helpful AI assistant. Provide concise and accurate responses to user queries.
"""

@app.get("/")
async def root():
    return {"message": "Welcome to the Chatbot API"}

@app.post("/chat")
async def chat(request: ChatRequest):
    try:
        # Create messages for the chat model
        messages = [
            SystemMessage(content=SYSTEM_PROMPT),
            HumanMessage(content=request.message)
        ]
        
        # Get response from the language model
        response = model(messages)
        
        return {
            "response": response.content,
            "status": "success"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

