# YAHYA AI
Cloudflare Worker + static frontend.

Hata çözümü: Wrangler `src/index.ts` arıyordu; bu projede dosya artık mevcut ve `wrangler.jsonc` ile tanımlı. Static frontend `public/` içinden yayınlanır.

Cloudflare Secret ekle:
- Name: OPENAI_API_KEY
- Value: yeni OpenAI API anahtarın

Build command: boş
Deploy command: npx wrangler deploy

Yerel: npx wrangler dev

API anahtarını HTML/JS/GitHub'a koyma.
