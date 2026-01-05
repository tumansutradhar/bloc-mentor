import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useBlockchain } from "@/context/BlockchainContext";
import {
  Info,
  AlertCircle,
  Shield,
  Lock,
  Key,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SmartContractDemo from "@/components/SmartContractDemo";
import SmartContractLicense from "@/pages/SmartContractLicense";

const BlockchainIntegration = () => {
  const { isConnected, walletAddress, balance, connectWallet } =
    useBlockchain();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-16 px-6 bg-gradient-to-b from-tutor-blue/10 to-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-tutor-neutral-darker">
            <span className="text-gradient">Blockchain</span> Integration
          </h1>
          <p className="text-tutor-neutral-dark max-w-3xl text-lg mb-8">
            Learn how our platform leverages blockchain technology to provide
            secure, transparent, and efficient educational experiences with
            decentralized trust.
          </p>
          {!isConnected && (
            <Button
              className="bg-tutor-blue hover:bg-tutor-blue-dark"
              onClick={connectWallet}
            >
              Connect Your Wallet
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
          {isConnected && (
            <Alert className="bg-tutor-success/10 border-tutor-success/20 max-w-md">
              <Shield className="h-4 w-4 text-tutor-success" />
              <AlertTitle>Wallet Connected</AlertTitle>
              <AlertDescription className="text-sm">
                <div className="font-mono mt-1 break-all">
                  {walletAddress?.substring(0, 6)}...
                  {walletAddress?.substring(38)}
                </div>
                <div className="mt-1">Balance: {balance}</div>
              </AlertDescription>
            </Alert>
          )}
        </div>
      </section>
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <Tabs
            defaultValue="overview"
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-8"
          >
            <TabsList className="bg-muted/50 p-1">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Key Features</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    Why Blockchain for Education?
                  </h2>
                  <p className="text-tutor-neutral-dark mb-4">
                    Blockchain technology brings unprecedented transparency,
                    security, and efficiency to online education. By leveraging
                    distributed ledger technology, we create a trustless
                    environment where and tutors can interact with confidence.
                  </p>
                  <p className="text-tutor-neutral-dark">
                    Our platform uses smart contracts to automate payment
                    processing, scheduling, and certification, reducing
                    administrative overhead and creating a seamless learning
                    experience.
                  </p>
                </div>
                <div className="glass-card p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <Info className="mr-2 h-5 w-5 text-tutor-blue" />
                    Benefits of Our Blockchain Integration
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-tutor-blue/10 flex items-center justify-center text-tutor-blue shrink-0 mt-0.5 mr-3">
                        <Lock className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <span className="font-medium">Enhanced Security</span>
                        <p className="text-sm text-tutor-neutral-dark">
                          Cryptographic security ensures your data and
                          transactions remain private and tamper-proof
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-tutor-blue/10 flex items-center justify-center text-tutor-blue shrink-0 mt-0.5 mr-3">
                        <DollarSign className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <span className="font-medium">
                          Transparent Payments
                        </span>
                        <p className="text-sm text-tutor-neutral-dark">
                          Clear payment terms enforced by smart contracts with
                          reduced transaction fees
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-tutor-blue/10 flex items-center justify-center text-tutor-blue shrink-0 mt-0.5 mr-3">
                        <Key className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <span className="font-medium">
                          Verified Certificates
                        </span>
                        <p className="text-sm text-tutor-neutral-dark">
                          Immutable records of your achievements that can be
                          verified by employers
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <Separator className="my-8" />
              <div>
                <h2 className="text-2xl font-bold mb-6">How It Works</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      step: 1,
                      title: "Connect Your Wallet",
                      description:
                        "Link your cryptocurrency wallet to access blockchain features",
                    },
                    {
                      step: 2,
                      title: "Book Sessions",
                      description:
                        "Schedule and pay for tutoring sessions using smart contracts",
                    },
                    {
                      step: 3,
                      title: "Learn & Earn",
                      description:
                        "Complete courses to earn blockchain-verified certificates",
                    },
                    {
                      step: 4,
                      title: "Join the Community",
                      description:
                        "Participate in governance and earn rewards through our token system",
                    },
                  ].map((item) => (
                    <Card
                      key={item.step}
                      className="relative overflow-hidden border-0 shadow-md"
                    >
                      <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-tutor-blue/10 flex items-center justify-center text-tutor-blue font-bold">
                        {item.step}
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle>{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-tutor-neutral-dark">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="features" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-gradient-to-br from-tutor-blue/5 to-tutor-blue/20 border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="mr-2 h-5 w-5 text-tutor-blue" />
                      Smart Contracts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-tutor-neutral-dark">
                      Our platform uses Ethereum-based smart contracts to
                      automate session bookings, payment processing, and
                      certificate issuance, ensuring that all parties fulfill
                      their obligations without a trusted intermediary.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-tutor-blue/5 to-tutor-blue/20 border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Key className="mr-2 h-5 w-5 text-tutor-blue" />
                      Credential Verification
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-tutor-neutral-dark">
                      Certificates and credentials earned on our platform are
                      recorded on the blockchain, creating a tamper-proof record
                      that can be easily verified by employers or academic
                      institutions contacting us.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-tutor-blue/5 to-tutor-blue/20 border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <DollarSign className="mr-2 h-5 w-5 text-tutor-blue" />
                      Crypto Payments
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-tutor-neutral-dark">
                      Pay for courses and tutoring sessions using cryptocurrency
                      for faster, cheaper, and more secure transactions. Our
                      platform supports multiple cryptocurrencies for maximum
                      flexibility.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">
                  Blockchain Benefits for Learners
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">For Students</h3>
                    <ul className="space-y-3">
                      {[
                        "Verifiable credentials that prove your skills to employers",
                        "Secure payment processing with automatic escrow protection",
                        "Ownership of your learning data and credentials",
                        "Potential for tokenized rewards for learning achievements",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-tutor-blue/10 flex items-center justify-center text-tutor-blue shrink-0 mt-0.5 mr-3">
                            <span className="text-xs font-bold">{i + 1}</span>
                          </div>
                          <span className="text-tutor-neutral-dark">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">For Tutors</h3>
                    <ul className="space-y-3">
                      {[
                        "Guaranteed payment for completed sessions via smart contracts",
                        "Transparent reputation system based on immutable feedback",
                        "Reduced platform fees through decentralized operation",
                        "Global reach without payment processing limitations",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-tutor-blue/10 flex items-center justify-center text-tutor-blue shrink-0 mt-0.5 mr-3">
                            <span className="text-xs font-bold">{i + 1}</span>
                          </div>
                          <span className="text-tutor-neutral-dark">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="technology" className="space-y-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  Our Blockchain Stack
                </h2>
                <p className="text-tutor-neutral-dark max-w-3xl">
                  We've built our platform on industry-leading blockchain
                  technologies to ensure security, scalability, and
                  interoperability. Here's a look at the key components of our
                  blockchain infrastructure:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Smart Contract Architecture</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-tutor-neutral-dark">
                      Our smart contracts are built on Ethereum and use a
                      modular design pattern for maximum security and
                      upgradability. Key smart contract components include:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-tutor-blue/10 flex items-center justify-center text-tutor-blue shrink-0 mt-0.5 mr-2">
                          <span className="text-xs">•</span>
                        </div>
                        <span className="text-tutor-neutral-dark">
                          TutorSession.sol - Manages individual tutoring
                          sessions
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-tutor-blue/10 flex items-center justify-center text-tutor-blue shrink-0 mt-0.5 mr-2">
                          <span className="text-xs">•</span>
                        </div>
                        <span className="text-tutor-neutral-dark">
                          CredentialRegistry.sol - Handles certificate issuance
                          and verification
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-tutor-blue/10 flex items-center justify-center text-tutor-blue shrink-0 mt-0.5 mr-2">
                          <span className="text-xs">•</span>
                        </div>
                        <span className="text-tutor-neutral-dark">
                          ReputationSystem.sol - Manages tutor ratings and
                          reviews
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Wallet Integration</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-tutor-neutral-dark">
                      We support multiple wallet providers to give users
                      flexibility in how they interact with our blockchain
                      features:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-tutor-blue/10 flex items-center justify-center text-tutor-blue shrink-0 mt-0.5 mr-2">
                          <span className="text-xs">•</span>
                        </div>
                        <span className="text-tutor-neutral-dark">
                          MetaMask - Browser extension wallet
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-tutor-blue/10 flex items-center justify-center text-tutor-blue shrink-0 mt-0.5 mr-2">
                          <span className="text-xs">•</span>
                        </div>
                        <span className="text-tutor-neutral-dark">
                          WalletConnect - For mobile wallet connections
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-tutor-blue/10 flex items-center justify-center text-tutor-blue shrink-0 mt-0.5 mr-2">
                          <span className="text-xs">•</span>
                        </div>
                        <span className="text-tutor-neutral-dark">
                          Coinbase Wallet - For Coinbase users
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Smart Contract Demo</h3>
                <p className="text-tutor-neutral-dark mb-6 max-w-3xl">
                  See our TutorSession smart contract in action. This
                  demonstration shows how a tutoring session is created, funded,
                  and completed using blockchain technology.
                </p>
                <SmartContractDemo />
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">
                  Educational Content Licensing
                </h3>
                <p className="text-tutor-neutral-dark mb-6 max-w-3xl">
                  Our platform also provides blockchain-secured licensing for
                  educational content, ensuring that intellectual property
                  rights are protected while enabling secure access to learning
                  materials.
                </p>
                <SmartContractLicense />
              </div>
            </TabsContent>
            <TabsContent value="faq" className="space-y-8">
              <div className="mb-4">
                <h2 className="text-2xl font-bold mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-tutor-neutral-dark max-w-3xl">
                  Common questions about our blockchain integration and how it
                  enhances your learning experience on our platform.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    question:
                      "Do I need a cryptocurrency wallet to use the platform?",
                    answer:
                      "While you can access most educational content without a wallet, connecting a wallet enables blockchain features like secure payments, certificate issuance, and participation in our governance system.",
                  },
                  {
                    question:
                      "Which cryptocurrencies do you accept for payment?",
                    answer:
                      "We currently accept Ethereum (ETH) and several ERC-20 tokens for payment. We plan to expand to additional blockchains and cryptocurrencies in the future.",
                  },
                  {
                    question: "How are my blockchain certificates verified?",
                    answer:
                      "Each certificate has a unique hash stored on the blockchain. Employers can verify your certificate by checking this hash against our public verification page without contacting us directly.",
                  },
                  {
                    question: "What happens if I lose access to my wallet?",
                    answer:
                      "Your account and course progress are tied to your email login, not your wallet. If you lose access to your wallet, you can connect a new one, though you'll need to transfer any certificates to the new wallet address.",
                  },
                  {
                    question: "Are there gas fees for blockchain transactions?",
                    answer:
                      "Yes, blockchain transactions like payments and certificate issuance require gas fees. We use layer-2 solutions to minimize these costs, and we're working on further optimizations.",
                  },
                  {
                    question: "Is my personal data stored on the blockchain?",
                    answer:
                      "No, we only store essential data like certificate hashes and wallet addresses on the blockchain. Your personal information and course progress are stored in our secure, encrypted database.",
                  },
                ].map((item, i) => (
                  <Card key={i} className="overflow-hidden">
                    <CardHeader className="bg-muted/30 pb-3">
                      <CardTitle className="text-base font-bold">
                        {item.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-tutor-neutral-dark text-sm">
                        {item.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="bg-muted/20 rounded-lg p-6 border border-muted mt-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                  <div className="rounded-full bg-tutor-blue/10 p-3">
                    <AlertCircle className="h-6 w-6 text-tutor-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">
                      Still have questions?
                    </h3>
                    <p className="text-tutor-neutral-dark mb-4">
                      Our team is ready to help you understand how our
                      blockchain integration can enhance your learning
                      experience.
                    </p>
                  </div>
                  <div className="w-full md:w-auto">
                    <Link to="/contact">
                      <Button className="w-full md:w-auto bg-tutor-blue hover:bg-tutor-blue-dark">
                        Contact Support
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default BlockchainIntegration;
