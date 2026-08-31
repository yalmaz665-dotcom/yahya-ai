# ADANA §•YAHYA•§.16 — V2

Bu sürüm, verilen siyah/minimal tasarımı koruyup Cloudflare Workers AI ile gerçek backend sohbeti ekler.

## Dosyalar

- `src/index.ts` — Sunucu + HTML arayüzü + `/api/chat`
- `wrangler.jsonc` — Cloudflare Worker ve AI binding
- `package.json` — Wrangler komutları
- `README.md` — kurulum

## Önemli güvenlik

Tarayıcı koduna OpenAI/Anthropic API anahtarı koyma. Bu proje ilk sürümde Cloudflare Workers AI binding kullanır; anahtar frontend'e gönderilmez.

## Cloudflare

1. GitHub'da yeni bir repository oluştur.
2. Bu dosyaları repository'ye yükle.
3. Cloudflare → Workers & Pages → Create application → GitHub repository.
4. Repository'yi seç.
5. Deploy et.
6. Worker'ın AI binding'inin `AI` olduğundan emin ol.

`wrangler.jsonc` içinde:
`"ai": { "binding": "AI" }`

## Yerel

Node.js 16.17+:
`npm install`
`npm run dev`

## V2 sonrası plan

1. D1: kalıcı kullanıcı/sohbet veritabanı
2. R2: dosya yükleme ve dosya arşivi
3. AI Search / web arama
4. Agent/araç sistemi
5. Uzun görevler için Workflows/Durable Objects
6. Kimlik doğrulama
7. Rate limiting ve kullanım kotası
8. Görsel, ses ve dosya analizi
9. Yönetim paneli
10. PWA/Android uygulaması

Bu özellikleri tek tek eklemek daha güvenli ve yönetilebilir olur.
