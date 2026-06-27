# ChadWallet Assignment

A modern crypto trading terminal built with **Next.js 16**, **React 19**, **TypeScript**, **TanStack Query**, **Zustand**, and the **Birdeye API**.

The application provides a responsive desktop trading experience with real-time market data, interactive candlestick charts, trending tokens, top holders, live trades, and wallet authentication using Privy.

---

# Features

## Authentication

- Wallet authentication using Privy
- Login / Logout flow
- Desktop-only trading experience
- Mobile landing page with app download CTA

## Market Data

- Trending tokens
- Token overview
- OHLCV candlestick chart
- Interval switching
- Top holders
- Live trades
- Automatic data refresh using React Query

## Trading UI

- Buy / Sell order form
- Authentication-aware actions
- Responsive desktop layout
- Placeholder execution flow for future Jupiter integration

## User Experience

- Loading states
- Error states
- Responsive layout
- Reusable UI components
- Desktop-only trading terminal
- Mobile "Coming Soon" experience

---

# Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- TanStack React Query
- Zustand
- Axios
- Lightweight Charts
- Privy Authentication
- Vitest
- React Testing Library

---

# Project Structure

```text
src/
├── app/
├── components/
│   ├── common/
│   ├── responsive/
│   └── terminal/
├── constants/
├── hooks/
├── providers/
├── services/
├── store/
├── types/
└── utils/
```

---

# Getting Started

## Install dependencies

```bash
npm install
```

## Configure environment variables

Create a `.env.local` file.

```env
NEXT_PUBLIC_PRIVY_APP_ID=YOUR_PRIVY_APP_ID
NEXT_PUBLIC_BIRDEYE_BASE_URL=YOUR_BIRDEYE_BASE_URL
NEXT_PUBLIC_BIRDEYE_API_KEY=YOUR_BIRDEYE_API_KEY
```

## Start development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# Available Scripts

Run development server

```bash
npm run dev
```

Build production

```bash
npm run build
```

Run ESLint

```bash
npm run lint
```

Run unit tests

```bash
npm run test
```

Generate coverage report

```bash
npm run test:coverage
```

---

# Testing

The project includes unit tests using:

- Vitest
- React Testing Library
- Jest DOM

Current test coverage includes:

- Utility functions
- Shared UI components
- Interactive terminal components

---

# Architecture

The application follows a component-driven architecture.

- Server Components are used for route handling.
- Client Components manage interactive UI.
- TanStack Query handles server state and caching.
- Zustand manages lightweight client-side state.
- Reusable loading and error components provide a consistent user experience.

---

# Future Improvements

- Jupiter swap integration
- Wallet balance
- Portfolio positions
- Live WebSocket market updates
- Advanced order types
- Trading history
- Theme customization

---

# Notes

The current implementation focuses on frontend architecture, user experience, API integration, and responsive design.

Trading execution is intentionally left as a placeholder for future integration with Jupiter and on-chain transaction services.
