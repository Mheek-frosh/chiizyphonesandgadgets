declare global {
  interface WindowEventMap {
    "chatbot-open": CustomEvent;
    "chatbot-inquire": CustomEvent<{ name: string; price: string }>;
  }
}

export {};
