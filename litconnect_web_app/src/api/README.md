# DeepSeek AI API Utility for LitConnect

This module provides an easy-to-use function and React hook for invoking DeepSeek AI's /chat/completions endpoint in the LitConnect React app.

## Usage

**1. Setup API Key**

Configure your DeepSeek API key as a build-time environment variable (for Create React App, name must start with `REACT_APP_`):

```
REACT_APP_DEEPSEEK_API_KEY=your_api_key_here
```
Add this to your `.env` file (never commit `.env` to public repos), or set in your host environment before build.

**2. Import and Use**

- To call directly:

```js
import { sendDeepSeekChatCompletion } from './deepseekApi';

const content = await sendDeepSeekChatCompletion([
  { role: "user", content: "Who wrote War and Peace?" }
], { model: "deepseek-chat" });
```

- Using the React hook:

```js
import { useDeepSeekChatCompletion } from './deepseekApi';

const { send, loading, error, result, reset } = useDeepSeekChatCompletion();
```

- Use as:
  ```js
  await send([{ role: "user", content: "Tell me about Dostoevsky" }], configObject);
  ```

## Security & Frontend Considerations

- **Do not expose a sensitive key:** Only use a *frontend-safe* key – consider rate limits and CORS restrictions as the API key is accessible to users.
- If you need true security, move the API call to a backend proxy and keep your main key secret!

## Reference

- Endpoint: `POST https://models.github.ai/inference/chat/completions`
- Auth header: `api-key: <your_key>`
- Body: `{ model, messages: [...], ...optionalConfig }`
- Response: `{ choices: [ { message: { content } } ] }`

---

_This utility is ideal for integrating DeepSeek AI into any LitConnect feature that needs conversational completions or AI-generated content._
