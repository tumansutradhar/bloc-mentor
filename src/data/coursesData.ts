interface LessonProps {
  id: string;
  title: string;
  duration: string;
  free: boolean;
  completed: boolean;
}

interface ModuleProps {
  id: string;
  title: string;
  lessons: LessonProps[];
}

export interface CourseProps {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  students: number;
  enrolled: number;
  rating: number;
  reviews: number;
  level: string;
  price: number;
  tutor: {
    name: string;
    avatar: string;
    title: string;
    bio: string;
  };
  modules?: ModuleProps[];
  whatYouWillLearn?: string[];
  courseDescription?: string[];
  whoThisCourseIsFor?: string[];
}

export const coursesData: CourseProps[] = [
  {
    id: "1",
    title: "Blockchain Fundamentals",
    description:
      "A comprehensive introduction to blockchain technology, cryptocurrencies, and decentralized applications. Learn the core concepts that power the blockchain revolution.",
    image:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    duration: "4 weeks",
    students: 1240,
    enrolled: 870,
    rating: 4.8,
    reviews: 156,
    level: "Beginner",
    price: 299,
    tutor: {
      name: "Dr. Sarah Johnson",
      avatar: "https://i.pravatar.cc/150?img=3",
      title: "Smart Contract Security Expert",
      bio: "Former lead developer at Ethereum, specializing in smart contract development and security auditing with over 8 years of experience.",
    },
    modules: [
      {
        id: "m1",
        title: "Introduction to Blockchain",
        lessons: [
          {
            id: "l1",
            title: "What is Blockchain Technology?",
            duration: "15:30",
            free: true,
            completed: true,
          },
          {
            id: "l2",
            title: "Distributed Ledger Systems",
            duration: "22:45",
            free: true,
            completed: true,
          },
          {
            id: "l3",
            title: "Consensus Mechanisms",
            duration: "18:20",
            free: false,
            completed: false,
          },
          {
            id: "l4",
            title: "Blockchain vs. Traditional Databases",
            duration: "20:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m2",
        title: "Cryptocurrencies",
        lessons: [
          {
            id: "l5",
            title: "Bitcoin: The First Cryptocurrency",
            duration: "28:15",
            free: false,
            completed: false,
          },
          {
            id: "l6",
            title: "Altcoins and Token Economics",
            duration: "24:30",
            free: false,
            completed: false,
          },
          {
            id: "l7",
            title: "Wallets and Exchanges",
            duration: "19:45",
            free: false,
            completed: false,
          },
          {
            id: "l8",
            title: "Security and Best Practices",
            duration: "26:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m3",
        title: "Smart Contracts",
        lessons: [
          {
            id: "l9",
            title: "Introduction to Smart Contracts",
            duration: "21:30",
            free: false,
            completed: false,
          },
          {
            id: "l10",
            title: "Ethereum and the EVM",
            duration: "25:45",
            free: false,
            completed: false,
          },
          {
            id: "l11",
            title: "Basic Solidity Programming",
            duration: "35:20",
            free: false,
            completed: false,
          },
          {
            id: "l12",
            title: "Testing and Deployment",
            duration: "28:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m4",
        title: "Decentralized Applications",
        lessons: [
          {
            id: "l13",
            title: "DApp Architecture",
            duration: "23:30",
            free: false,
            completed: false,
          },
          {
            id: "l14",
            title: "Web3.js and Ethers.js",
            duration: "27:15",
            free: false,
            completed: false,
          },
          {
            id: "l15",
            title: "Frontend Integration",
            duration: "24:45",
            free: false,
            completed: false,
          },
          {
            id: "l16",
            title: "Building Your First DApp",
            duration: "40:10",
            free: false,
            completed: false,
          },
        ],
      },
    ],
    whatYouWillLearn: [
      "Understand the fundamental concepts of blockchain technology",
      "Learn how cryptocurrencies work and their underlying mechanisms",
      "Explore smart contracts and the Ethereum Virtual Machine",
      "Build and deploy your first decentralized application",
      "Understand the security implications of blockchain systems",
    ],
    courseDescription: [
      "This comprehensive course on blockchain fundamentals will take you from a complete beginner to having a solid understanding of blockchain and its applications. ",

      "Starting with the basic concepts of distributed ledgers and consensus mechanisms, we'll progress to explore cryptocurrencies, smart contracts, and decentralized applications. By the end of this course, you'll have built your first dApp and understand the core principles that make technology revolutionary.",

      "Whether you're looking to build blockchain applications, invest in cryptocurrencies, or simply understand the technology that's changing finance beyond, this course provides the foundation you need.",
    ],
    whoThisCourseIsFor: [
      "Developers interested in blockchain application development",
      "Business professionals who want to understand blockchain use cases",
      "Cryptocurrency enthusiasts who want to deepen their technical knowledge",
      "Students and researchers interested in decentralized systems",
    ],
  },
  {
    id: "2",
    title: "Advanced Smart Contract Development",
    description:
      "Take your smart contract skills to the next level. Learn advanced Solidity patterns, security best practices, and how to build complex decentralized applications.",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1832&q=80",
    duration: "6 weeks",
    students: 870,
    enrolled: 450,
    rating: 4.9,
    reviews: 98,
    level: "Intermediate",
    price: 399,
    tutor: {
      name: "Michael Chen",
      avatar: "https://i.pravatar.cc/150?img=5",
      title: "",
      bio: "",
    },
    modules: [
      {
        id: "m1",
        title: "Introduction to Blockchain",
        lessons: [
          {
            id: "l1",
            title: "What is Blockchain Technology?",
            duration: "15:30",
            free: true,
            completed: true,
          },
          {
            id: "l2",
            title: "Distributed Ledger Systems",
            duration: "22:45",
            free: true,
            completed: true,
          },
          {
            id: "l3",
            title: "Consensus Mechanisms",
            duration: "18:20",
            free: false,
            completed: false,
          },
          {
            id: "l4",
            title: "Blockchain vs. Traditional Databases",
            duration: "20:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m2",
        title: "Cryptocurrencies",
        lessons: [
          {
            id: "l5",
            title: "Bitcoin: The First Cryptocurrency",
            duration: "28:15",
            free: false,
            completed: false,
          },
          {
            id: "l6",
            title: "Altcoins and Token Economics",
            duration: "24:30",
            free: false,
            completed: false,
          },
          {
            id: "l7",
            title: "Wallets and Exchanges",
            duration: "19:45",
            free: false,
            completed: false,
          },
          {
            id: "l8",
            title: "Security and Best Practices",
            duration: "26:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m3",
        title: "Smart Contracts",
        lessons: [
          {
            id: "l9",
            title: "Introduction to Smart Contracts",
            duration: "21:30",
            free: false,
            completed: false,
          },
          {
            id: "l10",
            title: "Ethereum and the EVM",
            duration: "25:45",
            free: false,
            completed: false,
          },
          {
            id: "l11",
            title: "Basic Solidity Programming",
            duration: "35:20",
            free: false,
            completed: false,
          },
          {
            id: "l12",
            title: "Testing and Deployment",
            duration: "28:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m4",
        title: "Decentralized Applications",
        lessons: [
          {
            id: "l13",
            title: "DApp Architecture",
            duration: "23:30",
            free: false,
            completed: false,
          },
          {
            id: "l14",
            title: "Web3.js and Ethers.js",
            duration: "27:15",
            free: false,
            completed: false,
          },
          {
            id: "l15",
            title: "Frontend Integration",
            duration: "24:45",
            free: false,
            completed: false,
          },
          {
            id: "l16",
            title: "Building Your First DApp",
            duration: "40:10",
            free: false,
            completed: false,
          },
        ],
      },
    ],
    whatYouWillLearn: [
      "Understand the fundamental concepts of blockchain technology",
      "Learn how cryptocurrencies work and their underlying mechanisms",
      "Explore smart contracts and the Ethereum Virtual Machine",
      "Build and deploy your first decentralized application",
      "Understand the security implications of blockchain systems",
    ],
    courseDescription: [
      "This comprehensive course on blockchain fundamentals will take you from a complete beginner to having a solid understanding of blockchain and its applications. ",

      "Starting with the basic concepts of distributed ledgers and consensus mechanisms, we'll progress to explore cryptocurrencies, smart contracts, and decentralized applications. By the end of this course, you'll have built your first dApp and understand the core principles that make technology revolutionary.",

      "Whether you're looking to build blockchain applications, invest in cryptocurrencies, or simply understand the technology that's changing finance beyond, this course provides the foundation you need.",
    ],
    whoThisCourseIsFor: [
      "Developers interested in blockchain application development",
      "Business professionals who want to understand blockchain use cases",
      "Cryptocurrency enthusiasts who want to deepen their technical knowledge",
      "Students and researchers interested in decentralized systems",
    ],
  },
  {
    id: "3",
    title: "DeFi: Decentralized Finance Explained",
    description:
      "Explore the revolutionary world of DeFi applications, protocols, and investment strategies.",
    image:
      "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    duration: "7 hours",
    students: 1456,
    rating: 4.7,
    enrolled: 450,
    reviews: 98,
    level: "Intermediate",
    price: 69.99,
    tutor: {
      name: "James Wilson",
      avatar: "https://i.pravatar.cc/150?img=8",
      title: "DeFi Specialist",
      bio: "",
    },
    modules: [
      {
        id: "m1",
        title: "Introduction to Blockchain",
        lessons: [
          {
            id: "l1",
            title: "What is Blockchain Technology?",
            duration: "15:30",
            free: true,
            completed: true,
          },
          {
            id: "l2",
            title: "Distributed Ledger Systems",
            duration: "22:45",
            free: true,
            completed: true,
          },
          {
            id: "l3",
            title: "Consensus Mechanisms",
            duration: "18:20",
            free: false,
            completed: false,
          },
          {
            id: "l4",
            title: "Blockchain vs. Traditional Databases",
            duration: "20:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m2",
        title: "Cryptocurrencies",
        lessons: [
          {
            id: "l5",
            title: "Bitcoin: The First Cryptocurrency",
            duration: "28:15",
            free: false,
            completed: false,
          },
          {
            id: "l6",
            title: "Altcoins and Token Economics",
            duration: "24:30",
            free: false,
            completed: false,
          },
          {
            id: "l7",
            title: "Wallets and Exchanges",
            duration: "19:45",
            free: false,
            completed: false,
          },
          {
            id: "l8",
            title: "Security and Best Practices",
            duration: "26:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m3",
        title: "Smart Contracts",
        lessons: [
          {
            id: "l9",
            title: "Introduction to Smart Contracts",
            duration: "21:30",
            free: false,
            completed: false,
          },
          {
            id: "l10",
            title: "Ethereum and the EVM",
            duration: "25:45",
            free: false,
            completed: false,
          },
          {
            id: "l11",
            title: "Basic Solidity Programming",
            duration: "35:20",
            free: false,
            completed: false,
          },
          {
            id: "l12",
            title: "Testing and Deployment",
            duration: "28:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m4",
        title: "Decentralized Applications",
        lessons: [
          {
            id: "l13",
            title: "DApp Architecture",
            duration: "23:30",
            free: false,
            completed: false,
          },
          {
            id: "l14",
            title: "Web3.js and Ethers.js",
            duration: "27:15",
            free: false,
            completed: false,
          },
          {
            id: "l15",
            title: "Frontend Integration",
            duration: "24:45",
            free: false,
            completed: false,
          },
          {
            id: "l16",
            title: "Building Your First DApp",
            duration: "40:10",
            free: false,
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: "4",
    title: "NFTs: Creation to Marketplace",
    description:
      "Master the process of creating, minting, and selling NFTs across multiple blockchain platforms.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
    duration: "5 hours",
    students: 2310,
    rating: 4.8,
    enrolled: 450,
    reviews: 98,
    level: "All Levels",
    price: 64.99,
    tutor: {
      name: "Emily Parker",
      avatar: "https://i.pravatar.cc/150?img=9",
      title: "",
      bio: "",
    },
    modules: [
      {
        id: "m1",
        title: "Introduction to Blockchain",
        lessons: [
          {
            id: "l1",
            title: "What is Blockchain Technology?",
            duration: "15:30",
            free: true,
            completed: true,
          },
          {
            id: "l2",
            title: "Distributed Ledger Systems",
            duration: "22:45",
            free: true,
            completed: true,
          },
          {
            id: "l3",
            title: "Consensus Mechanisms",
            duration: "18:20",
            free: false,
            completed: false,
          },
          {
            id: "l4",
            title: "Blockchain vs. Traditional Databases",
            duration: "20:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m2",
        title: "Cryptocurrencies",
        lessons: [
          {
            id: "l5",
            title: "Bitcoin: The First Cryptocurrency",
            duration: "28:15",
            free: false,
            completed: false,
          },
          {
            id: "l6",
            title: "Altcoins and Token Economics",
            duration: "24:30",
            free: false,
            completed: false,
          },
          {
            id: "l7",
            title: "Wallets and Exchanges",
            duration: "19:45",
            free: false,
            completed: false,
          },
          {
            id: "l8",
            title: "Security and Best Practices",
            duration: "26:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m3",
        title: "Smart Contracts",
        lessons: [
          {
            id: "l9",
            title: "Introduction to Smart Contracts",
            duration: "21:30",
            free: false,
            completed: false,
          },
          {
            id: "l10",
            title: "Ethereum and the EVM",
            duration: "25:45",
            free: false,
            completed: false,
          },
          {
            id: "l11",
            title: "Basic Solidity Programming",
            duration: "35:20",
            free: false,
            completed: false,
          },
          {
            id: "l12",
            title: "Testing and Deployment",
            duration: "28:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m4",
        title: "Decentralized Applications",
        lessons: [
          {
            id: "l13",
            title: "DApp Architecture",
            duration: "23:30",
            free: false,
            completed: false,
          },
          {
            id: "l14",
            title: "Web3.js and Ethers.js",
            duration: "27:15",
            free: false,
            completed: false,
          },
          {
            id: "l15",
            title: "Frontend Integration",
            duration: "24:45",
            free: false,
            completed: false,
          },
          {
            id: "l16",
            title: "Building Your First DApp",
            duration: "40:10",
            free: false,
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: "5",
    title: "Advanced Blockchain Security",
    description:
      "Protect your blockchain applications with advanced security techniques and vulnerability prevention.",
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    duration: "9 hours",
    students: 986,
    rating: 4.9,
    enrolled: 450,
    reviews: 98,
    level: "Advanced",
    price: 89.99,
    tutor: {
      name: "David Kim",
      avatar: "https://i.pravatar.cc/150?img=12",
      title: "",
      bio: "",
    },
    modules: [
      {
        id: "m1",
        title: "Introduction to Blockchain",
        lessons: [
          {
            id: "l1",
            title: "What is Blockchain Technology?",
            duration: "15:30",
            free: true,
            completed: true,
          },
          {
            id: "l2",
            title: "Distributed Ledger Systems",
            duration: "22:45",
            free: true,
            completed: true,
          },
          {
            id: "l3",
            title: "Consensus Mechanisms",
            duration: "18:20",
            free: false,
            completed: false,
          },
          {
            id: "l4",
            title: "Blockchain vs. Traditional Databases",
            duration: "20:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m2",
        title: "Cryptocurrencies",
        lessons: [
          {
            id: "l5",
            title: "Bitcoin: The First Cryptocurrency",
            duration: "28:15",
            free: false,
            completed: false,
          },
          {
            id: "l6",
            title: "Altcoins and Token Economics",
            duration: "24:30",
            free: false,
            completed: false,
          },
          {
            id: "l7",
            title: "Wallets and Exchanges",
            duration: "19:45",
            free: false,
            completed: false,
          },
          {
            id: "l8",
            title: "Security and Best Practices",
            duration: "26:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m3",
        title: "Smart Contracts",
        lessons: [
          {
            id: "l9",
            title: "Introduction to Smart Contracts",
            duration: "21:30",
            free: false,
            completed: false,
          },
          {
            id: "l10",
            title: "Ethereum and the EVM",
            duration: "25:45",
            free: false,
            completed: false,
          },
          {
            id: "l11",
            title: "Basic Solidity Programming",
            duration: "35:20",
            free: false,
            completed: false,
          },
          {
            id: "l12",
            title: "Testing and Deployment",
            duration: "28:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m4",
        title: "Decentralized Applications",
        lessons: [
          {
            id: "l13",
            title: "DApp Architecture",
            duration: "23:30",
            free: false,
            completed: false,
          },
          {
            id: "l14",
            title: "Web3.js and Ethers.js",
            duration: "27:15",
            free: false,
            completed: false,
          },
          {
            id: "l15",
            title: "Frontend Integration",
            duration: "24:45",
            free: false,
            completed: false,
          },
          {
            id: "l16",
            title: "Building Your First DApp",
            duration: "40:10",
            free: false,
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: "6",
    title: "Web3 Development Fundamentals",
    description:
      "Build decentralized applications (dApps) with modern Web3 frameworks and blockchain integration.",
    image:
      "https://images.unsplash.com/photo-1642356692870-0838c799613e?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "10 hours",
    students: 1645,
    rating: 4.7,
    enrolled: 450,
    reviews: 98,
    level: "Intermediate",
    price: 79.99,
    tutor: {
      name: "Michael Johnson",
      avatar: "https://i.pravatar.cc/150?img=15",
      title: "",
      bio: "",
    },
    modules: [
      {
        id: "m1",
        title: "Introduction to Blockchain",
        lessons: [
          {
            id: "l1",
            title: "What is Blockchain Technology?",
            duration: "15:30",
            free: true,
            completed: true,
          },
          {
            id: "l2",
            title: "Distributed Ledger Systems",
            duration: "22:45",
            free: true,
            completed: true,
          },
          {
            id: "l3",
            title: "Consensus Mechanisms",
            duration: "18:20",
            free: false,
            completed: false,
          },
          {
            id: "l4",
            title: "Blockchain vs. Traditional Databases",
            duration: "20:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m2",
        title: "Cryptocurrencies",
        lessons: [
          {
            id: "l5",
            title: "Bitcoin: The First Cryptocurrency",
            duration: "28:15",
            free: false,
            completed: false,
          },
          {
            id: "l6",
            title: "Altcoins and Token Economics",
            duration: "24:30",
            free: false,
            completed: false,
          },
          {
            id: "l7",
            title: "Wallets and Exchanges",
            duration: "19:45",
            free: false,
            completed: false,
          },
          {
            id: "l8",
            title: "Security and Best Practices",
            duration: "26:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m3",
        title: "Smart Contracts",
        lessons: [
          {
            id: "l9",
            title: "Introduction to Smart Contracts",
            duration: "21:30",
            free: false,
            completed: false,
          },
          {
            id: "l10",
            title: "Ethereum and the EVM",
            duration: "25:45",
            free: false,
            completed: false,
          },
          {
            id: "l11",
            title: "Basic Solidity Programming",
            duration: "35:20",
            free: false,
            completed: false,
          },
          {
            id: "l12",
            title: "Testing and Deployment",
            duration: "28:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m4",
        title: "Decentralized Applications",
        lessons: [
          {
            id: "l13",
            title: "DApp Architecture",
            duration: "23:30",
            free: false,
            completed: false,
          },
          {
            id: "l14",
            title: "Web3.js and Ethers.js",
            duration: "27:15",
            free: false,
            completed: false,
          },
          {
            id: "l15",
            title: "Frontend Integration",
            duration: "24:45",
            free: false,
            completed: false,
          },
          {
            id: "l16",
            title: "Building Your First DApp",
            duration: "40:10",
            free: false,
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: "7",
    title: "Web3 Development Fundamentals",
    description:
      "Build decentralized applications (dApps) with modern Web3 frameworks and blockchain integration.",
    image:
      "https://images.unsplash.com/photo-1642356692870-0838c799613e?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "10 hours",
    students: 1645,
    rating: 4.7,
    enrolled: 450,
    reviews: 98,
    level: "Intermediate",
    price: 79.99,
    tutor: {
      name: "Michael Johnson",
      avatar: "https://i.pravatar.cc/150?img=15",
      title: "",
      bio: "",
    },
    modules: [
      {
        id: "m1",
        title: "Introduction to Blockchain",
        lessons: [
          {
            id: "l1",
            title: "What is Blockchain Technology?",
            duration: "15:30",
            free: true,
            completed: true,
          },
          {
            id: "l2",
            title: "Distributed Ledger Systems",
            duration: "22:45",
            free: true,
            completed: true,
          },
          {
            id: "l3",
            title: "Consensus Mechanisms",
            duration: "18:20",
            free: false,
            completed: false,
          },
          {
            id: "l4",
            title: "Blockchain vs. Traditional Databases",
            duration: "20:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m2",
        title: "Cryptocurrencies",
        lessons: [
          {
            id: "l5",
            title: "Bitcoin: The First Cryptocurrency",
            duration: "28:15",
            free: false,
            completed: false,
          },
          {
            id: "l6",
            title: "Altcoins and Token Economics",
            duration: "24:30",
            free: false,
            completed: false,
          },
          {
            id: "l7",
            title: "Wallets and Exchanges",
            duration: "19:45",
            free: false,
            completed: false,
          },
          {
            id: "l8",
            title: "Security and Best Practices",
            duration: "26:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m3",
        title: "Smart Contracts",
        lessons: [
          {
            id: "l9",
            title: "Introduction to Smart Contracts",
            duration: "21:30",
            free: false,
            completed: false,
          },
          {
            id: "l10",
            title: "Ethereum and the EVM",
            duration: "25:45",
            free: false,
            completed: false,
          },
          {
            id: "l11",
            title: "Basic Solidity Programming",
            duration: "35:20",
            free: false,
            completed: false,
          },
          {
            id: "l12",
            title: "Testing and Deployment",
            duration: "28:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m4",
        title: "Decentralized Applications",
        lessons: [
          {
            id: "l13",
            title: "DApp Architecture",
            duration: "23:30",
            free: false,
            completed: false,
          },
          {
            id: "l14",
            title: "Web3.js and Ethers.js",
            duration: "27:15",
            free: false,
            completed: false,
          },
          {
            id: "l15",
            title: "Frontend Integration",
            duration: "24:45",
            free: false,
            completed: false,
          },
          {
            id: "l16",
            title: "Building Your First DApp",
            duration: "40:10",
            free: false,
            completed: false,
          },
        ],
      },
    ],
  },

  {
    id: "8",
    title: "Web3 Development Fundamentals",
    description:
      "Build decentralized applications (dApps) with modern Web3 frameworks and blockchain integration.",
    image:
      "https://images.unsplash.com/photo-1642356692870-0838c799613e?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "10 hours",
    students: 1645,
    rating: 4.7,
    enrolled: 450,
    reviews: 98,
    level: "Intermediate",
    price: 79.99,
    tutor: {
      name: "Michael Johnson",
      avatar: "https://i.pravatar.cc/150?img=15",
      title: "",
      bio: "",
    },
    modules: [
      {
        id: "m1",
        title: "Introduction to Blockchain",
        lessons: [
          {
            id: "l1",
            title: "What is Blockchain Technology?",
            duration: "15:30",
            free: true,
            completed: true,
          },
          {
            id: "l2",
            title: "Distributed Ledger Systems",
            duration: "22:45",
            free: true,
            completed: true,
          },
          {
            id: "l3",
            title: "Consensus Mechanisms",
            duration: "18:20",
            free: false,
            completed: false,
          },
          {
            id: "l4",
            title: "Blockchain vs. Traditional Databases",
            duration: "20:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m2",
        title: "Cryptocurrencies",
        lessons: [
          {
            id: "l5",
            title: "Bitcoin: The First Cryptocurrency",
            duration: "28:15",
            free: false,
            completed: false,
          },
          {
            id: "l6",
            title: "Altcoins and Token Economics",
            duration: "24:30",
            free: false,
            completed: false,
          },
          {
            id: "l7",
            title: "Wallets and Exchanges",
            duration: "19:45",
            free: false,
            completed: false,
          },
          {
            id: "l8",
            title: "Security and Best Practices",
            duration: "26:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m3",
        title: "Smart Contracts",
        lessons: [
          {
            id: "l9",
            title: "Introduction to Smart Contracts",
            duration: "21:30",
            free: false,
            completed: false,
          },
          {
            id: "l10",
            title: "Ethereum and the EVM",
            duration: "25:45",
            free: false,
            completed: false,
          },
          {
            id: "l11",
            title: "Basic Solidity Programming",
            duration: "35:20",
            free: false,
            completed: false,
          },
          {
            id: "l12",
            title: "Testing and Deployment",
            duration: "28:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m4",
        title: "Decentralized Applications",
        lessons: [
          {
            id: "l13",
            title: "DApp Architecture",
            duration: "23:30",
            free: false,
            completed: false,
          },
          {
            id: "l14",
            title: "Web3.js and Ethers.js",
            duration: "27:15",
            free: false,
            completed: false,
          },
          {
            id: "l15",
            title: "Frontend Integration",
            duration: "24:45",
            free: false,
            completed: false,
          },
          {
            id: "l16",
            title: "Building Your First DApp",
            duration: "40:10",
            free: false,
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: "9",
    title: "Web3 Development Fundamentals",
    description:
      "Build decentralized applications (dApps) with modern Web3 frameworks and blockchain integration.",
    image:
      "https://images.unsplash.com/photo-1642356692870-0838c799613e?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "10 hours",
    students: 1645,
    rating: 4.7,
    enrolled: 450,
    reviews: 98,
    level: "Intermediate",
    price: 79.99,
    tutor: {
      name: "Michael Johnson",
      avatar: "https://i.pravatar.cc/150?img=15",
      title: "",
      bio: "",
    },
    modules: [
      {
        id: "m1",
        title: "Introduction to Blockchain",
        lessons: [
          {
            id: "l1",
            title: "What is Blockchain Technology?",
            duration: "15:30",
            free: true,
            completed: true,
          },
          {
            id: "l2",
            title: "Distributed Ledger Systems",
            duration: "22:45",
            free: true,
            completed: true,
          },
          {
            id: "l3",
            title: "Consensus Mechanisms",
            duration: "18:20",
            free: false,
            completed: false,
          },
          {
            id: "l4",
            title: "Blockchain vs. Traditional Databases",
            duration: "20:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m2",
        title: "Cryptocurrencies",
        lessons: [
          {
            id: "l5",
            title: "Bitcoin: The First Cryptocurrency",
            duration: "28:15",
            free: false,
            completed: false,
          },
          {
            id: "l6",
            title: "Altcoins and Token Economics",
            duration: "24:30",
            free: false,
            completed: false,
          },
          {
            id: "l7",
            title: "Wallets and Exchanges",
            duration: "19:45",
            free: false,
            completed: false,
          },
          {
            id: "l8",
            title: "Security and Best Practices",
            duration: "26:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m3",
        title: "Smart Contracts",
        lessons: [
          {
            id: "l9",
            title: "Introduction to Smart Contracts",
            duration: "21:30",
            free: false,
            completed: false,
          },
          {
            id: "l10",
            title: "Ethereum and the EVM",
            duration: "25:45",
            free: false,
            completed: false,
          },
          {
            id: "l11",
            title: "Basic Solidity Programming",
            duration: "35:20",
            free: false,
            completed: false,
          },
          {
            id: "l12",
            title: "Testing and Deployment",
            duration: "28:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m4",
        title: "Decentralized Applications",
        lessons: [
          {
            id: "l13",
            title: "DApp Architecture",
            duration: "23:30",
            free: false,
            completed: false,
          },
          {
            id: "l14",
            title: "Web3.js and Ethers.js",
            duration: "27:15",
            free: false,
            completed: false,
          },
          {
            id: "l15",
            title: "Frontend Integration",
            duration: "24:45",
            free: false,
            completed: false,
          },
          {
            id: "l16",
            title: "Building Your First DApp",
            duration: "40:10",
            free: false,
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: "10",
    title: "Web3 Development Fundamentals",
    description:
      "Build decentralized applications (dApps) with modern Web3 frameworks and blockchain integration.",
    image:
      "https://images.unsplash.com/photo-1642356692870-0838c799613e?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "10 hours",
    students: 1645,
    rating: 4.7,
    enrolled: 450,
    reviews: 98,
    level: "Intermediate",
    price: 79.99,
    tutor: {
      name: "Michael Johnson",
      avatar: "https://i.pravatar.cc/150?img=15",
      title: "",
      bio: "",
    },
    modules: [
      {
        id: "m1",
        title: "Introduction to Blockchain",
        lessons: [
          {
            id: "l1",
            title: "What is Blockchain Technology?",
            duration: "15:30",
            free: true,
            completed: true,
          },
          {
            id: "l2",
            title: "Distributed Ledger Systems",
            duration: "22:45",
            free: true,
            completed: true,
          },
          {
            id: "l3",
            title: "Consensus Mechanisms",
            duration: "18:20",
            free: false,
            completed: false,
          },
          {
            id: "l4",
            title: "Blockchain vs. Traditional Databases",
            duration: "20:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m2",
        title: "Cryptocurrencies",
        lessons: [
          {
            id: "l5",
            title: "Bitcoin: The First Cryptocurrency",
            duration: "28:15",
            free: false,
            completed: false,
          },
          {
            id: "l6",
            title: "Altcoins and Token Economics",
            duration: "24:30",
            free: false,
            completed: false,
          },
          {
            id: "l7",
            title: "Wallets and Exchanges",
            duration: "19:45",
            free: false,
            completed: false,
          },
          {
            id: "l8",
            title: "Security and Best Practices",
            duration: "26:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m3",
        title: "Smart Contracts",
        lessons: [
          {
            id: "l9",
            title: "Introduction to Smart Contracts",
            duration: "21:30",
            free: false,
            completed: false,
          },
          {
            id: "l10",
            title: "Ethereum and the EVM",
            duration: "25:45",
            free: false,
            completed: false,
          },
          {
            id: "l11",
            title: "Basic Solidity Programming",
            duration: "35:20",
            free: false,
            completed: false,
          },
          {
            id: "l12",
            title: "Testing and Deployment",
            duration: "28:10",
            free: false,
            completed: false,
          },
        ],
      },
      {
        id: "m4",
        title: "Decentralized Applications",
        lessons: [
          {
            id: "l13",
            title: "DApp Architecture",
            duration: "23:30",
            free: false,
            completed: false,
          },
          {
            id: "l14",
            title: "Web3.js and Ethers.js",
            duration: "27:15",
            free: false,
            completed: false,
          },
          {
            id: "l15",
            title: "Frontend Integration",
            duration: "24:45",
            free: false,
            completed: false,
          },
          {
            id: "l16",
            title: "Building Your First DApp",
            duration: "40:10",
            free: false,
            completed: false,
          },
        ],
      },
    ],
  },
];
