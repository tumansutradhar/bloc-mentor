# Bloc Mentor Frontend

Blockchain-powered learning platform frontend built with React + TypeScript. Students browse courses and tutors, manage dashboards, and interact with wallet-ready flows and an AI chatbot (Gemini).

## About The Project

- Problem it solves: A clear UI for discovering tutors/courses, handling auth, dashboards, and payment flows in a Web3-aware context.
- What makes it unique: Wallet-ready scaffolding (wagmi/viem), protected routes, Gemini-based chatbot hook, and shadcn/radix UI.
- What was learned: Enterprise React routing, context-based auth, Tailwind + shadcn design system, form validation with RHF/Zod, and basic Web3 integration patterns.

The app ships 20+ pages (courses, tutors, dashboard, profile, auth, policies) with mock data and extensible contexts for auth and blockchain providers.

## Built With

- React 19 + TypeScript 5.7
- Vite 6
- Tailwind CSS 4 + shadcn/ui + Radix UI
- React Router 7
- TanStack React Query
- React Hook Form + Zod
- Zustand state + Axios
- Wagmi + Viem (Web3), Ethers (dev)
- Recharts + Sonner/Toaster

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation
1. Clone the repo
   ```bash
   git clone https://github.com/tumansutradhar/bloc-mentor.git
   cd bloc-mentor/bloc-mentor-frontend
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Environment variables
   ```bash
   cp .env.example .env
   # set VITE_GEMINI_API_KEY=your_key (needed for chatbot)
   ```
4. Run the app
   ```bash
   npm run dev
   ```
   App runs at http://localhost:5173

## Usage
- Browse courses and tutors: `/`, `/courses`, `/courses-detail/:id`, `/tutors`
- Auth: `/login`, `/register`, `/forgot-password` (localStorage mock auth)
- Dashboard & profile (protected): `/dashboard`, `/profile`
- Payments (UI flow): `/payment`
- Policies/info: `/about`, `/contact`, `/career`, `/blog`, `/press`, `/terms-of-service`, `/privacy-policy`, `/cookie-policy`, `/smart-contract-license`
- Chatbot: enable `VITE_GEMINI_API_KEY` in `.env` for AI assistance

## Features
- Modern UI with shadcn/radix + Tailwind
- Protected routes with `AuthContext` (mock user in localStorage)
- Web3-ready `BlockchainProvider` (wagmi/viem scaffolding)
- Course and tutor listings with detail pages
- Dashboard with progress, sessions, charts (Recharts)
- Forms with React Hook Form + Zod validation
- Notifications via Sonner/Toaster
- Chatbot hook (Gemini key required)
- Scroll restoration and responsive layout

## Roadmap
- [ ] Connect to live backend/API for auth and data
- [ ] Wire real wallet connect and on-chain calls
- [ ] Real payment integration
- [ ] Replace mock data with dynamic content
- [ ] Tests (unit/e2e)
- [ ] i18n and accessibility hardening

## Contributing
Contributions are welcome!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the MIT License. See `LICENSE.md` for more information.

## Contact
Tuman Sutradhar
- GitHub: [@tumansutradhar](https://github.com/tumansutradhar)
- Email: connect.tuman@gmail.com
- LinkedIn: [Tuman Sutradhar](https://www.linkedin.com/in/tumansutradhar/)

Project Link: [https://github.com/tumansutradhar/bloc-mentor](https://github.com/tumansutradhar/bloc-mentor)

## Acknowledgments
- shadcn/ui and Radix UI
- Tailwind CSS
- React Router, React Query, React Hook Form, Zod
- Wagmi/Viem Web3 tooling
- Recharts for charts
