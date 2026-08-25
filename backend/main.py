from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class LoginRequest(BaseModel):
    email: str
    password: str


@app.get("/")
def home():
    return {"message": "Health Vault backend is running"}


@app.post("/auth/login")
def login(data: LoginRequest):

    if data.email == "patient@test.com" and data.password == "123456":
        return {
            "success": True,
            "message": "Login successful",
            "user": {
                "email": data.email,
                "role": "patient"
            }
        }

    return {
        "success": False,
        "message": "Invalid email or password"
    }