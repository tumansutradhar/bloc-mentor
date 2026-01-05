# Bloc Mentor Frontend

A comprehensive blockchain-powered learning platform built with React and TypeScript. Connects students with expert tutors and provides access to blockchain-focused courses with Web3 wallet integration.

## About The Project

Bloc Mentor Frontend is a modern web application that bridges traditional online learning with blockchain technology. It provides a complete educational platform where students can discover courses, connect with tutors, and manage their learning journey with the security and transparency of blockchain.

Key problems it solves:
- Provides intuitive interface for complex blockchain interactions
- Creates trusted marketplace for tutoring services
- Offers comprehensive course management system
- Enables secure, transparent payment processing via smart contracts

What makes it unique:
- Full-featured learning management system with 20+ pages
- Seamless Web3 wallet integration with MetaMask
- AI-powered chatbot for instant assistance
- Complete authentication and authorization system
- Modern UI with shadcn/ui components and Tailwind CSS
- TypeScript for type-safe development

Built as a production-ready application to understand:
- Enterprise-level React application architecture
- Web3 integration patterns in educational platforms
- Context-based state management
- Protected routing and authentication flows
- Modern component library integration

## Built With

- React 19.0.0
- TypeScript 5.7.2
- Vite 6.2.0
- React Router DOM 7.4.1
- Tailwind CSS 4.0.17
- Radix UI (Avatar, Label, Progress, Select, Separator, Tabs, Toast, Tooltip)
- Ethers.js 6.13.5
- Viem 2.24.2
- Wagmi 2.14.15
- React Hook Form 7.55.0
- Zod 3.24.2
- Zustand 5.0.3
- Axios 1.8.4
- Recharts 2.15.1
- React Markdown 10.1.0
- Lucide React 0.486.0
- Sonner 2.0.2

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

```bash
node --version  # v18 or higher
npm --version   # v9 or higher
```

You'll also need:
- MetaMask or another Web3 wallet browser extension
- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Code editor (VS Code recommended)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/bloc-mentor.git
   cd bloc-mentor/bloc-mentor-frontend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables (optional)

   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   VITE_API_URL=your_api_url
   VITE_CONTRACT_ADDRESS=your_smart_contract_address
   VITE_CHAIN_ID=1
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

5. Build for production (optional)
   ```bash
   npm run build
   ```

   The optimized production build will be in the `dist/` directory.

## Usage

### User Registration and Login

1. Navigate to the home page
2. Click "Register" in the navigation header
3. Fill in the registration form:
   ```
   Name: John Doe
   Email: john@example.com
   Password: SecurePassword123
   ```
4. After registration, log in with your credentials
5. Complete your profile setup

### Browsing Courses

```typescript
// Example: Navigate to courses page
Navigate to /courses

// View course details
Click on any course card to see:
- Course description and curriculum
- Instructor information
- Student reviews and ratings
- Enrollment options
```

### Connecting Wallet

1. Click "Connect Wallet" button in the header
2. MetaMask popup will appear
3. Approve the connection request
4. Your wallet address will be displayed
5. You can now make blockchain transactions

### Booking a Tutoring Session

1. Navigate to "Tutors" page
2. Browse available tutors or search by expertise
3. Select a tutor profile
4. Click "Book Session"
5. Fill in session details:
   - Date and time
   - Duration
   - Subject
6. Connect wallet if not already connected
7. Approve the transaction in MetaMask
8. Wait for confirmation

### Enrolling in a Course

1. Browse courses at `/courses`
2. Click on a course to view details
3. Review the curriculum and requirements
4. Click "Enroll Now"
5. Complete payment process
6. Access course materials from your dashboard

## Features

### Core Features
- User authentication with protected routes
- Course catalog with search and filtering
- Tutor directory with profiles and ratings
- Interactive user dashboard
- Course enrollment and progress tracking
- Session booking system
- Payment processing integration

### Blockchain Features
- MetaMask wallet connection
- Smart contract interaction
- On-chain transaction management
- Wallet balance display
- Transaction history

### UI/UX Features
- Fully responsive design (mobile, tablet, desktop)
- Dark/light theme support
- Toast notifications for user feedback
- Loading states and error handling
- Smooth page transitions
- Accessible components (ARIA compliant)

### Additional Features
- AI-powered chatbot assistant
- Profile management
- Password recovery
- Course reviews and ratings
- Progress tracking with visualization
- Certificate generation (planned)

## Project Structure

```
bloc-mentor-frontend/
├── src/
│   ├── components/
│   │   ├── ui/                     # ui components
│   │   │   ├── alert.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   ├── ChatBot.tsx            # AI chatbot component
│   │   ├── CourseCard.tsx         # Course display card
│   │   ├── FeatureCards.tsx       # Feature showcase cards
│   │   ├── Footer.tsx             # Footer component
│   │   ├── Header.tsx             # Navigation header
│   │   ├── Hero.tsx               # Landing page hero
│   │   ├── ScrollToTop.tsx        # Scroll to top utility
│   │   └── SmartContractDemo.tsx  # Smart contract demo
│   ├── context/
│   │   ├── AuthContext.tsx        # Authentication state
│   │   └── BlockchainContext.tsx  # Web3 integration state
│   ├── data/
│   │   ├── coursesData.ts         # Course catalog data
│   │   └── tutorsData.ts          # Tutor profiles data
│   ├── hooks/
│   │   └── use-toast.ts           # Toast notification hook
│   ├── lib/
│   │   └── utils.ts               # Utility functions
│   ├── pages/
│   │   ├── Index.tsx              # Home page
│   │   ├── Login.tsx              # Login page
│   │   ├── Register.tsx           # Registration page
│   │   ├── ForgotPassword.tsx     # Password recovery
│   │   ├── Dashboard.tsx          # User dashboard
│   │   ├── Profile.tsx            # User profile
│   │   ├── Courses.tsx            # Course catalog
│   │   ├── CourseDetail.tsx       # Course details
│   │   ├── Tutors.tsx             # Tutor directory
│   │   ├── BecomeTutor.tsx        # Tutor application
│   │   ├── Payment.tsx            # Payment processing
│   │   ├── BlockchainIntegration.tsx  # Blockchain info
│   │   ├── AboutUs.tsx            # About page
│   │   ├── Contact.tsx            # Contact form
│   │   ├── Career.tsx             # Career page
│   │   ├── Blog.tsx               # Blog posts
│   │   ├── Press.tsx              # Press & media
│   │   ├── TermsOfService.tsx     # Terms
│   │   ├── PrivacyPolicy.tsx      # Privacy policy
│   │   ├── CookiePolicy.tsx       # Cookie policy
│   │   ├── SmartContractLicense.tsx  # Contract license
│   │   └── NotFound.tsx           # 404 page
│   ├── utils/
│   │   └── blockchain.tsx         # Blockchain utilities
│   ├── App.tsx                    # Main app component
│   ├── App.css                    # App styles
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Global styles
├── public/                        # Static assets
├── .gitignore                     # Git ignore rules
├── components.json                # shadcn/ui config
├── eslint.config.js               # ESLint configuration
├── index.html                     # HTML template
├── package.json                   # Dependencies
├── tailwind.config.ts             # Tailwind config
├── tsconfig.json                  # TypeScript config
├── tsconfig.app.json              # App TypeScript config
├── tsconfig.node.json             # Node TypeScript config
├── vite.config.ts                 # Vite configuration
└── README.md                      # This file
```

## Configuration

### Authentication Context

The AuthContext provides user authentication state:

```typescript
const { user, login, logout, register } = useAuth();

// Check if user is logged in
if (user) {
  console.log(`Welcome, ${user.name}`);
}

// Login user
await login(email, password);

// Register new user
await register(name, email, password);

// Logout
logout();
```

### Blockchain Context

The BlockchainContext manages Web3 interactions:

```typescript
const { 
  isConnected, 
  walletAddress, 
  balance, 
  connectWallet, 
  disconnectWallet,
  bookSession 
} = useBlockchain();

// Connect wallet
await connectWallet();

// Book a tutoring session
const contractAddress = await bookSession(
  tutorAddress,
  sessionTime,
  price
);
```

### Protected Routes

Routes requiring authentication use the ProtectedRoute wrapper:

```typescript
<ProtectedRoute>
  <Dashboard />
</ProtectedRoute>
```

## Available Scripts

```bash
npm run dev      # Start development server with hot reload
npm run build    # Build for production (TypeScript check + Vite build)
npm run preview  # Preview production build locally
npm run lint     # Run ESLint for code quality checks
```

## Roadmap

- [x] User authentication system
- [x] Course catalog and browsing
- [x] Tutor directory
- [x] User dashboard
- [x] Web3 wallet integration
- [x] Smart contract interaction
- [x] Responsive design
- [x] Protected routes
- [x] AI chatbot integration
- [ ] Backend API integration
- [ ] NFT-based course certificates
- [ ] Video streaming for courses
- [ ] Live coding environment
- [ ] Real-time chat between students and tutors
- [ ] Advanced analytics dashboard
- [ ] Mobile applications (iOS/Android)
- [ ] Multi-chain support (Polygon, BSC)
- [ ] Decentralized storage (IPFS)
- [ ] DAO governance features

## Contributing

Contributions are what make the open source community an amazing place to learn and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Use TypeScript for all new components
- Follow React best practices and hooks patterns
- Use functional components with hooks
- Keep components focused on single responsibility
- Write meaningful commit messages
- Add comments for complex logic
- Ensure responsive design on all screen sizes
- Follow ESLint configuration
- Test thoroughly before submitting
- Update documentation as needed

### Code Style

- Use arrow functions for components
- Use named exports for components
- Keep files under 300 lines
- Use TypeScript interfaces for props
- Follow Tailwind CSS conventions
- Use shadcn/ui components when possible

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Project Link: [https://github.com/your-username/bloc-mentor](https://github.com/your-username/bloc-mentor)

## Acknowledgments

Resources and tools that made this project possible:

- [React](https://react.dev/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components
- [Ethers.js](https://docs.ethers.org/) - Ethereum library
- [Wagmi](https://wagmi.sh/) - React hooks for Ethereum
- [React Router](https://reactrouter.com/) - Declarative routing for React
- [React Hook Form](https://react-hook-form.com/) - Performant form library
- [Zod](https://zod.dev/) - TypeScript-first schema validation
- [Lucide](https://lucide.dev/) - Beautiful & consistent icon pack
- [Recharts](https://recharts.org/) - Composable charting library
