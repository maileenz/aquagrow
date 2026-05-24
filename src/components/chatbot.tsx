"use client";

import { useChat } from "@ai-sdk/react";
import type { ModelMessage, UIMessage } from "ai";
import {
  ChevronDown,
  Leaf,
  Loader2,
  MessageCircle,
  Send,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type SubmitEvent } from "react";

const QUICK_REPLIES = [
  "Cum montez kitul?",
  "Frunze galbene — ce fac?",
  "Când recoltez salata?",
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [input, setInput] = useState("");
  const { messages, sendMessage, status, error } = useChat<UIMessage>({
    messages: [
      {
        id: "welcome",
        role: "assistant",
        parts: [
          {
            type: "text",
            text: "Bună! Sunt AquaBot 🌿 Cum te pot ajuta azi cu kitul tău acvaponic?",
          },
        ],
      },
    ],
  });

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [messages, open]);

  function handleOpen() {
    setOpen(true);
    setHasOpened(true);
  }

  function handleQuickReply(text: string) {
    sendMessage({ text });
  }

  const showQuickReplies = messages.length === 1;

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage({ text: input });
    setInput("");
  };

  return (
    <>
      {/* Chat window */}
      {open && (
        <div className="border-border bg-background fixed right-4 bottom-24 z-50 flex w-[min(360px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border shadow-2xl md:right-6">
          {/* Header */}
          <div className="bg-primary flex items-center gap-3 px-4 py-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
              <Leaf className="h-4 w-4 text-white" />
            </div>
            <div className="grow">
              <p className="text-primary-foreground text-sm font-semibold">
                AquaBot
              </p>
              <p className="text-primary-foreground/70 text-xs">
                Asistent AquaGrow
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-primary-foreground/70 hover:text-primary-foreground rounded-lg p-1 transition-colors hover:bg-white/10"
              aria-label="Închide"
            >
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex flex-col gap-3 overflow-y-auto p-4"
            style={{ height: 340 }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div className="bg-primary/10 mt-1 mr-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    <Leaf className="text-primary h-3 w-3" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                  style={{
                    borderBottomRightRadius:
                      msg.role === "user" ? 4 : undefined,
                    borderBottomLeftRadius:
                      msg.role === "assistant" ? 4 : undefined,
                  }}
                >
                  {msg.parts.map((part, index) => {
                    switch (part.type) {
                      case "text":
                        return <div key={index}>{part.text}</div>;
                      default:
                        return null;
                    }
                  })}
                </div>
              </div>
            ))}

            {/* Typing indicator — shown while loading and last message is from user */}
            {status !== "ready" &&
              messages[messages.length - 1]?.role === "user" && (
                <div className="flex justify-start">
                  <div className="bg-primary/10 mt-1 mr-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    <Leaf className="text-primary h-3 w-3" />
                  </div>
                  <div className="bg-muted flex items-center gap-1 rounded-2xl rounded-bl-[4px] px-3 py-2">
                    <span
                      className="bg-muted-foreground/50 h-1.5 w-1.5 animate-bounce rounded-full"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="bg-muted-foreground/50 h-1.5 w-1.5 animate-bounce rounded-full"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="bg-muted-foreground/50 h-1.5 w-1.5 animate-bounce rounded-full"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          {showQuickReplies && (
            <div className="flex flex-wrap gap-2 px-4 pb-2">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  onClick={() => handleQuickReply(q)}
                  className="border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 rounded-full border px-3 py-1 text-xs transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-border border-t p-3">
            <div className="border-border bg-muted/40 focus-within:border-primary focus-within:ring-primary/20 flex items-center gap-2 rounded-xl border px-3 py-2 transition-all focus-within:ring-1">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Scrie o întrebare…"
                className="placeholder:text-muted-foreground grow bg-transparent text-sm outline-none"
                disabled={status !== "ready"}
              />
              <button
                type="submit"
                disabled={!input.trim() || status !== "ready"}
                className="bg-primary text-primary-foreground flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-opacity disabled:opacity-40"
                aria-label="Trimite"
              >
                {status !== "ready" ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Send className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={open ? () => setOpen(false) : handleOpen}
        className="bg-primary text-primary-foreground fixed right-4 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95 md:right-6"
        aria-label={open ? "Închide chat" : "Deschide chat"}
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
        {!open && !hasOpened && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-400 text-[9px] font-bold text-white">
            1
          </span>
        )}
      </button>
    </>
  );
}
