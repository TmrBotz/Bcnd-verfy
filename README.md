# SMS Forwarder Backend

A minimal Next.js API backend for testing an Android SMS Forwarder app. Deployable on Vercel with zero config.

---

## Folder Structure

```
sms-forwarder-backend/
├── app/
│   ├── api/
│   │   ├── health/
│   │   │   └── route.ts       # GET /api/health
│   │   └── payment/
│   │       └── route.ts       # POST /api/payment
│   ├── layout.tsx
│   └── page.tsx
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

---

## API Endpoints

### `GET /api/health`

Returns server status.

**Response:**
```json
{ "status": "online" }
```

---

### `POST /api/payment`

Accepts a payment payload and validates credentials.

**Request body:**
```json
{
  "device_id": "ADMIN_DEVICE_001",
  "api_key": "TEST_API_KEY_123",
  "amount": 100,
  "utr": "123456789"
}
```

**Success response (200):**
```json
{
  "success": true,
  "message": "Payment received",
  "data": {
    "device_id": "ADMIN_DEVICE_001",
    "api_key": "TEST_API_KEY_123",
    "amount": 100,
    "utr": "123456789"
  }
}
```

**Failure response (401):**
```json
{ "success": false, "message": "Unauthorized" }
```

---

## Local Development

```bash
npm install
npm run dev
# Server runs at http://localhost:3000
```

Test with curl:
```bash
# Health check
curl http://localhost:3000/api/health

# Valid payment
curl -X POST http://localhost:3000/api/payment \
  -H "Content-Type: application/json" \
  -d '{"device_id":"ADMIN_DEVICE_001","api_key":"TEST_API_KEY_123","amount":100,"utr":"123456789"}'

# Invalid credentials
curl -X POST http://localhost:3000/api/payment \
  -H "Content-Type: application/json" \
  -d '{"device_id":"WRONG","api_key":"WRONG","amount":100,"utr":"123456789"}'
```

---

## Deploy to Vercel

### Option 1: Vercel CLI (fastest)

```bash
npm install -g vercel
vercel
# Follow the prompts — no extra config needed
```

### Option 2: GitHub + Vercel Dashboard

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Leave all settings as default — Vercel auto-detects Next.js
5. Click **Deploy**

Your API will be live at:
- `https://your-project.vercel.app/api/health`
- `https://your-project.vercel.app/api/payment`

---

## Credentials (hardcoded for testing)

| Field       | Value              |
|-------------|--------------------|
| `device_id` | `ADMIN_DEVICE_001` |
| `api_key`   | `TEST_API_KEY_123` |
