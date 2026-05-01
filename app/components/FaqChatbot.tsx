"use client";

import { FormEvent, useMemo, useState } from "react";

type Message = {
  id: number;
  role: "bot" | "user";
  text: string;
};

type FaqAnswer = {
  question: string;
  answer: string;
  keywords: string[];
};

const faqAnswers: FaqAnswer[] = [
  {
    question: "How can I join the day trading course?",
    answer:
      "You can join the Trading Kannada day trading course through the course page or WhatsApp enquiry. The course covers option trading, price action, Bank Nifty examples, risk reward, and trade review in Kannada.",
    keywords: ["join", "course", "class", "enroll", "admission", "fees", "price", "cost"],
  },
  {
    question: "Is the course taught in Kannada?",
    answer:
      "Yes. Trading Kannada is made for Kannada-speaking learners, so the lessons are explained in simple Kannada with practical market examples.",
    keywords: ["kannada", "language", "english", "hindi", "taught"],
  },
  {
    question: "Is this suitable for beginners?",
    answer:
      "Yes. Beginners can start with the free YouTube lessons, then continue with structured course concepts like candlesticks, price action, stop-loss, and risk reward.",
    keywords: ["beginner", "new", "start", "basic", "zero", "learn"],
  },
  {
    question: "Do you provide trading calls or tips?",
    answer:
      "Trading Kannada focuses on education. The goal is to help learners understand trading logic and risk management so they can make independent decisions.",
    keywords: ["tips", "call", "calls", "signal", "signals", "intraday tips", "recommendation"],
  },
  {
    question: "What markets do you teach?",
    answer:
      "The lessons focus on Indian stock market concepts, especially option trading, Bank Nifty, Nifty, candlestick reading, price action, and risk reward planning.",
    keywords: ["market", "nifty", "banknifty", "bank nifty", "options", "option", "stock"],
  },
  {
    question: "How do I contact Trading Kannada?",
    answer:
      "You can contact Trading Kannada on WhatsApp at 8123827368, email marketactionindia@gmail.com, or Telegram @tradingkannadasharath.",
    keywords: ["contact", "phone", "whatsapp", "email", "telegram", "number", "support"],
  },
];

const quickQuestions = [
  "How can I join the day trading course?",
  "Is this suitable for beginners?",
  "Do you provide trading calls or tips?",
  "How do I contact Trading Kannada?",
];

const initialMessages: Message[] = [
  {
    id: 1,
    role: "bot",
    text: "Namaskara. Ask me about the Trading Kannada course, beginner lessons, market topics, or contact details.",
  },
];

function findAnswer(input: string) {
  const normalizedInput = input.toLowerCase();

  return (
    faqAnswers.find((item) => item.question.toLowerCase() === normalizedInput) ??
    faqAnswers.find((item) => item.keywords.some((keyword) => normalizedInput.includes(keyword)))
  );
}

export function FaqChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const nextId = useMemo(() => messages.length + 1, [messages.length]);

  function sendMessage(text: string) {
    const trimmedText = text.trim();

    if (!trimmedText) {
      return;
    }

    const answer = findAnswer(trimmedText);
    const fallback =
      "I can help with course details, Kannada lessons, beginner guidance, contact information, and trading education topics. For a direct answer, WhatsApp Trading Kannada at 8123827368.";

    setMessages((currentMessages) => [
      ...currentMessages,
      { id: nextId, role: "user", text: trimmedText },
      { id: nextId + 1, role: "bot", text: answer?.answer ?? fallback },
    ]);
    setInput("");
    setIsOpen(true);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <div className={`chatbot${isOpen ? " is-open" : ""}`} aria-live="polite">
      {isOpen ? (
        <section className="chatbot-panel" aria-label="Trading Kannada chatbot">
          <div className="chatbot-header">
            <div>
              <span>Trading Kannada Assistant</span>
              <strong>Predefined course support</strong>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Close chat">
              x
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <p className={`chatbot-message ${message.role}`} key={message.id}>
                {message.text}
              </p>
            ))}
          </div>

          <div className="chatbot-suggestions" aria-label="Suggested questions">
            {quickQuestions.map((question) => (
              <button type="button" key={question} onClick={() => sendMessage(question)}>
                {question}
              </button>
            ))}
          </div>

          <form className="chatbot-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type your question..."
              aria-label="Type your question"
            />
            <button type="submit">Send</button>
          </form>

          <a className="chatbot-whatsapp" href="https://wa.me/918123827368" target="_blank" rel="noreferrer">
            Continue on WhatsApp
          </a>
        </section>
      ) : null}

      <button className="chatbot-toggle" type="button" onClick={() => setIsOpen((current) => !current)}>
        Chat
      </button>
    </div>
  );
}
