import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send, X } from "lucide-react";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";

type Message = {
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
};

const SYSTEM_PROMPT = `You are a helpful, friendly assistant for a blockchain education platform.
Respond to user queries about blockchain technology, cryptocurrency, and our educational courses.
Be concise, accurate, and helpful.
If asked about course details, mention that we offer comprehensive courses on blockchain fundamentals, smart contracts, and DeFi.
Always maintain a positive and supportive tone.`;

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [isOpen, messages]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      content: inputMessage,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const conversationHistory = messages.map((msg) => ({
        role: msg.role,
        parts: [{ text: msg.content }],
      }));

      const promptMessages =
        messages.length === 0
          ? [
              { role: "user" as const, parts: [{ text: SYSTEM_PROMPT }] },
              ...conversationHistory,
            ]
          : conversationHistory;

      promptMessages.push({
        role: "user",
        parts: [{ text: inputMessage }],
      });

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: promptMessages,
          generationConfig: {
            temperature: 0.7,
            topP: 0.8,
            topK: 40,
            maxOutputTokens: 1000,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response from Gemini");
      }

      const data = await response.json();
      const botResponse =
        data.candidates[0]?.content?.parts[0]?.text ||
        "Sorry, I couldn't generate a response.";

      const botMessage: Message = {
        content: botResponse,
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error in Gemini API call:", error);
      toast.error("Failed to get response from AI assistant.");

      const errorMessage: Message = {
        content: "Sorry, I encountered an error. Please try again later.",
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={() => (document.body.style.overflow = "hidden")}
      onMouseLeave={() => (document.body.style.overflow = "")}
    >
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full shadow-[0px_10px_20px_1px_rgba(0,0,0,0.1)] text-white bg-[#0A84FF] hover:bg-[#0055D4]"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
      {isOpen && (
        <div className="glass-card no-border-card flex flex-col w-80 sm:w-96 h-[500px] max-h-[80vh]">
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="font-semibold">Block Mentor Assistant</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center m-0 w-full h-full">
                <div className="text-center text-[#65758b] p-6">
                  <MessageCircle className="mx-auto h-12 w-12 mb-2 opacity-50" />
                  <p>How can I help you with blockchain education today?</p>
                </div>
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === "user"
                        ? "bg-[#0A84FF] text-white"
                        : "bg-[#f1f5f9]"
                    }`}
                  >
                    <div className="whitespace-pre-wrap break-words overflow-hidden">
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                    <p
                      className={`text-xs opacity-70 mt-1 ${
                        message.role === "user" ? "text-right" : "text-left"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg p-3 bg-[#f1f5f9]">
                  <div className="flex space-x-2">
                    <div
                      className="w-2 h-2 rounded-full bg-[#0f1729]/50 animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="w-2 h-2 rounded-full bg-[#0f1729]/50 animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="w-2 h-2 rounded-full bg-[#0f1729]/50 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex space-x-2"
            >
              <Textarea
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 resize-none h-[22px] focus-visible:outline-none focus-visible:ring-0"
                style={{ minHeight: "40px" }}
                disabled={isLoading}
              />
              <Button
                className="bg-[#0A84FF] hover:bg-[#0055D4]"
                type="submit"
                size="icon"
                disabled={!inputMessage.trim() || isLoading}
                aria-label="Send message"
              >
                <Send className="h-4 w-4 text-white" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
