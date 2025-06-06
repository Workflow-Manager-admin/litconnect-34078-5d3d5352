//
// DeepSeek AI API utility for LitConnect UI
// Provides a function to invoke the DeepSeek chat/completions endpoint safely from frontend,
// factoring the API key via environment variable at build time.
//

// PUBLIC_INTERFACE
/**
 * sendDeepSeekChatCompletion - Sends a chat/completion request to the DeepSeek API.
 * Returns only the AI's content string on success.
 * 
 * @param {Object[]} messages - Array of message objects (role: 'system'|'user'|'assistant', content: string)
 * @param {Object} [config={}] - Optional tuning/parameter overrides (e.g., model, max_tokens, temperature, etc.)
 * @returns {Promise<string>} The content string of the AI response.
 * @throws Will throw an error if the API request fails or key missing.
 */
export async function sendDeepSeekChatCompletion(messages, config = {}) {
  // Build-time injected env var (public-safe key only!). Must be visible as REACT_APP_DEEPSEEK_API_KEY.
  const apiKey = process.env.REACT_APP_DEEPSEEK_API_KEY;
  if (!apiKey) {
    throw new Error("DeepSeek API key is not set. Please configure REACT_APP_DEEPSEEK_API_KEY in your environment.");
  }

  // DeepSeek endpoint per reference
  const endpoint = "https://models.github.ai/inference/chat/completions";
  // Default model or from config
  const {
    model = "deepseek-chat", // You may set a default model here
    ...restConfig
  } = config;

  const headers = {
    "Content-Type": "application/json",
    "api-key": apiKey,
  };

  // Request body as per DeepSeek API
  const body = {
    model,
    messages,
    ...restConfig
  };

  const resp = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  if (!resp.ok) {
    let errorMsg = `DeepSeek API request failed: ${resp.status}`;
    try {
      const data = await resp.json();
      errorMsg += data?.error ? ` - ${data.error}` : "";
    } catch (e) { /* pass */ }
    throw new Error(errorMsg);
  }

  // Expected: { choices: [{ message: { content: string } }] }
  const data = await resp.json();
  return data?.choices?.[0]?.message?.content || "";
}

// PUBLIC_INTERFACE
/**
 * useDeepSeekChatCompletion - React hook for DeepSeek chat completions.
 * 
 * @returns {{
 *   send: (messages, config?) => Promise<string>,
 *   loading: boolean,
 *   error: any,
 *   result: string,
 *   reset: () => void
 * }}
 */
import { useState, useCallback } from "react";
export function useDeepSeekChatCompletion() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState("");

  const send = useCallback(async (messages, config) => {
    setLoading(true);
    setError(null);
    try {
      const content = await sendDeepSeekChatCompletion(messages, config);
      setResult(content);
      setLoading(false);
      return content;
    } catch (e) {
      setError(e);
      setLoading(false);
      throw e;
    }
  }, []);

  const reset = () => {
    setError(null);
    setResult("");
  };

  return { send, loading, error, result, reset };
}
