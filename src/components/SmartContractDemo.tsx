import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Code, Check, Copy, Clock, DollarSign } from "lucide-react";
import { toast } from "sonner";

const SmartContractDemo = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDemoComplete, setIsDemoComplete] = useState(false);
  const MAX_SESSION_FEE = 50000;
  const MIN_SESSION_FEE = 1;
  const [sessionFee, setSessionFee] = useState(10);
  const [ethAmount, setEthAmount] = useState(1);
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const [ethPrice, setEthPrice] = useState(0);
  const [warning, setWarning] = useState("");

  const contractCode = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TutorSession {
    address public tutor;
    address public student;
    uint256 public sessionPrice;
    uint256 public sessionTime;
    bool public completed;
    bool public refunded;

    event SessionScheduled(address indexed student, address indexed tutor, uint256 time, uint256 price);
    event SessionCompleted(address indexed student, address indexed tutor);
    event SessionRefunded(address indexed student, address indexed tutor);

    constructor(address _tutor, uint256 _sessionTime) payable {
        require(msg.value > 0, "Payment required to schedule session");

        tutor = _tutor;
        sessionTime = _sessionTime;
        sessionPrice = msg.value;
        student = msg.sender;
        completed = false;
        refunded = false;

        emit SessionScheduled(student, tutor, sessionTime, msg.value);
    }

    function completeSession() external {
        require(msg.sender == student, "Only student can mark as complete");
        require(!completed, "Session already completed");
        require(!refunded, "Session was refunded");
        require(address(this).balance >= sessionPrice, "Insufficient funds in contract");

        completed = true;
        payable(tutor).transfer(address(this).balance);

        emit SessionCompleted(student, tutor);
    }

    function refundSession() external {
        require(
            msg.sender == tutor || 
            (msg.sender == student && block.timestamp > sessionTime + 1 days),
            "Not authorized for refund"
        );
        require(!completed, "Session already completed");
        require(!refunded, "Already refunded");

        refunded = true;
        payable(student).transfer(address(this).balance);

        emit SessionRefunded(student, tutor);
    }

    receive() external payable {}
}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const simulateTransaction = () => {
    setIsProcessing(true);
    toast.info("Processing blockchain transaction...", {
      description: "Connecting to the network and initializing smart contract",
    });

    setTimeout(() => {
      toast.success("Session booked successfully!", {
        description:
          "Transaction confirmed. Smart contract deployed at 0x7bE8....5c2F",
      });
      setIsProcessing(false);
      setIsDemoComplete(true);
    }, 3000);
  };

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/simple/supported_vs_currencies")
      .then((res) => res.json())
      .then((data) => setCurrencies(data))
      .catch((error) => console.error("Error fetching currencies:", error));
  }, []);

  useEffect(() => {
    if (selectedCurrency) {
      fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=${selectedCurrency}`
      )
        .then((res) => res.json())
        .then((data) => setEthPrice(data.ethereum[selectedCurrency]))
        .catch((error) => console.error("Error fetching ETH price:", error));
    }
  }, [selectedCurrency]);

  useEffect(() => {
    if (ethPrice > 0) {
      setEthAmount(sessionFee / ethPrice);
    }
  }, [sessionFee, ethPrice]);

  const handleSessionFeeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseFloat(e.target.value) || 0;

    if (value > MAX_SESSION_FEE) {
      setWarning(`Maximum allowed fee is $${MAX_SESSION_FEE}`);
      value = MAX_SESSION_FEE;
    } else if (value < MIN_SESSION_FEE) {
      setWarning(`Minimum allowed fee is $${MIN_SESSION_FEE}`);
      value = MIN_SESSION_FEE;
    } else {
      setWarning("");
    }

    setSessionFee(value);
  };

  useEffect(() => {
    if (ethPrice > 0) {
      setEthAmount(sessionFee / ethPrice);
    } else {
      setEthAmount(0);
    }
  }, [sessionFee, ethPrice]);

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <span className="px-3 py-1 text-sm font-medium bg-[#0A84FF]/10 text-[#0A84FF] rounded-full">
              Blockchain in Action
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Smart Contracts for{" "}
            <span className="text-gradient">Secure Learning</span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#86868b] mb-8">
            Our platform uses blockchain smart contracts to ensure transparent,
            secure, and automated tutoring sessions. Try our interactive demo
            below.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card p-6 overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold flex items-center gap-2">
                <Code size={18} className="text-[#0A84FF]" />
                TutorSession Smart Contract
              </h3>
              <button
                onClick={copyToClipboard}
                className="text-sm flex items-center gap-1 text-[#86868b] hover:text-[#0A84FF] transition-colors"
              >
                {isCopied ? (
                  <>
                    <Check size={14} className="text-[#34C759]" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    Copy Code
                  </>
                )}
              </button>
            </div>
            <div className="relative">
              <pre className="h-[545px] text-xs md:text-sm bg-black/80 rounded-md p-4 overflow-x-auto text-white">
                <code>{contractCode}</code>
              </pre>
            </div>
          </div>
          <div className="glass-card overflow-hidden">
            <div className="bg-gradient-to-r from-[#0A84FF] to-[#0055D4] text-white p-6">
              <h3 className="font-bold text-xl mb-2">
                Demo: Book a Tutor Session
              </h3>
              <p className="text-white/80 text-sm">
                Experience how blockchain secures and automates the tutoring
                process
              </p>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-3 flex-col">
                  <div className="flex gap-3 items-center justify-center">
                    <div className="h-8 w-8 rounded-full bg-[#0A84FF]/10 flex items-center justify-center text-[#0A84FF] shrink-0 mt-0.5">
                      <Clock size={18} />
                    </div>
                    <h4 className="font-medium mb-1">Selected Session</h4>
                  </div>
                  <div className="px-11">
                    <p className="text-sm text-[#86868b]">
                      Introduction to Blockchain Development with Michael Chen
                    </p>
                    <p className="text-sm text-[#86868b] mt-1">
                      Tomorrow at 3:00 PM (60 minutes)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 flex-col">
                  <div className="flex gap-3 items-center justify-center">
                    <div className="h-8 w-8 rounded-full bg-[#0A84FF]/10 flex items-center justify-center text-[#0A84FF] shrink-0">
                      <DollarSign size={18} />
                    </div>
                    <h4 className="font-medium mb-1">Payment Details</h4>
                  </div>
                  <div className="px-11">
                    <div className="flex items-center">
                      <label className="text-sm text-[#86868b]">
                        Session Fee:
                      </label>
                      &nbsp;
                      <Input
                        type="number"
                        className="h-[34px] p-1 border text-center rounded-md w-16"
                        value={sessionFee}
                        onChange={handleSessionFeeChange}
                        min={MIN_SESSION_FEE}
                        max={MAX_SESSION_FEE}
                      />
                      &nbsp;
                      <select
                        className="h-[34px] p-1 border rounded-md focus:outline-none"
                        value={selectedCurrency}
                        onChange={(e) => setSelectedCurrency(e.target.value)}
                      >
                        {currencies.map((currency) => (
                          <option
                            key={currency}
                            value={currency}
                            className="text-center"
                          >
                            {currency.toUpperCase()}
                          </option>
                        ))}
                      </select>
                    </div>
                    {warning && (
                      <p className="text-red-500 text-xs mt-1">{warning}</p>
                    )}
                    <p className="text-sm text-[#86868b] mt-1">
                      Payment secured by smart contract. Funds are only released
                      when you mark the session as complete.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col px-11">
                  <h2 className="font-medium">ETH Conversion</h2>
                  <p className="font-medium">
                    {sessionFee} {selectedCurrency.toUpperCase()} ≈{" "}
                    {ethAmount.toFixed(6)} ETH
                  </p>
                </div>
                <div className="border-t border-white/20">
                  {isDemoComplete ? (
                    <div className="bg-[#34C759]/10 text-[#34C759] rounded-lg px-11 py-6 mb-4">
                      <div className="flex items-center gap-2 font-medium mb-1">
                        <Check size={18} />
                        Transaction Successful
                      </div>
                      <p className="text-sm">
                        Your session has been booked. The smart contract has
                        been deployed to the blockchain.
                      </p>
                    </div>
                  ) : (
                    <Button
                      className="bg-[#0A84FF] border border-[#0A84FF] hover:bg-[#0055D4] hover:border-[#0055D4] text-white h-12 block mx-auto"
                      onClick={simulateTransaction}
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                          Processing...
                        </div>
                      ) : (
                        <>Deploy Smart Contract</>
                      )}
                    </Button>
                  )}
                  <p className="text-xs text-center text-[#86868b] mt-3">
                    This is a demo. No actual blockchain transaction will be
                    performed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartContractDemo;
