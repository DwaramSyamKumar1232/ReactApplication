import React, { useState } from "react";
import axios from "axios";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const currentMessage = message;

    // Clear textbox immediately
    setMessage("");

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: currentMessage,
      },
    ]);

    try {
      const response = await axios.get(
        "http://localhost:8080/ask",
        {
          params: {
            prompt: currentMessage,
          },
        }
      );

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: response.data,
        },
      ]);
    } catch (error) {
      console.error("ChatBot Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Unable to connect to AI service.",
        },
      ]);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          fontSize: "25px",
          border: "none",
          backgroundColor: "#0d6efd",
          color: "white",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        💬
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            right: "20px",
            bottom: "90px",
            width: "350px",
            height: "450px",
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#0d6efd",
              color: "white",
              padding: "10px",
              textAlign: "center",
            }}
          >
            Spring AI ChatBot
          </div>

          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "10px",
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  textAlign:
                    msg.sender === "user" ? "right" : "left",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    background:
                      msg.sender === "user"
                        ? "#0d6efd"
                        : "#f1f1f1",
                    color:
                      msg.sender === "user"
                        ? "white"
                        : "black",
                    padding: "8px",
                    borderRadius: "8px",
                    display: "inline-block",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              padding: "10px",
            }}
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask AI..."
              style={{
                flex: 1,
                padding: "8px",
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />

            <button
              onClick={sendMessage}
              style={{
                marginLeft: "5px",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;