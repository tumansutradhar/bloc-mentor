import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Shield,
  Download,
  CheckCircle2,
  Fingerprint,
  AlertCircle,
} from "lucide-react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SmartContractLicense = () => {
  const [licenseStatus, setLicenseStatus] = useState<
    "inactive" | "pending" | "active"
  >("inactive");

  const activateLicense = () => {
    setLicenseStatus("pending");

    toast.info("Processing license activation...", {
      description: "Verifying credentials and preparing blockchain certificate",
    });

    setTimeout(() => {
      setLicenseStatus("active");

      toast.success("License successfully activated!", {
        description:
          "Your educational content license is now secured on the blockchain",
      });
    }, 3000);
  };

  const downloadLicense = () => {
    toast.success("License downloaded", {
      description: "License certificate saved to your downloads folder",
    });
  };

  return (
    <section className="py-12 px-6 bg-tutor-neutral/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="px-3 py-1 text-sm font-medium bg-tutor-blue/10 text-tutor-blue rounded-full">
            Content Licensing
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-4">
            Blockchain-Secured Educational{" "}
            <span className="text-gradient">License</span>
          </h2>
          <p className="max-w-2xl mx-auto text-tutor-neutral-dark">
            Protect and verify your educational content with blockchain
            technology. Generate tamper-proof licenses that ensure your
            intellectual property rights.
          </p>
        </div>
        <Card className="border-0 shadow-md overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-tutor-blue to-tutor-blue-dark text-white">
            <div className="flex items-center gap-2">
              <CardTitle>Educational Content License</CardTitle>
            </div>
            <CardDescription className="text-white/80">
              Securely manage your content licenses on the blockchain
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            {licenseStatus === "inactive" && (
              <div className="space-y-4">
                <Alert
                  variant="destructive"
                  className="bg-red-50 text-red-800 border-red-200"
                >
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>No Active License</AlertTitle>
                  <AlertDescription>
                    You don't have an active license for this educational
                    content. Activate a license to access and use this material.
                  </AlertDescription>
                </Alert>
                <div className="p-4 border border-dashed rounded-lg border-tutor-neutral-dark/30 bg-white">
                  <h3 className="font-medium text-lg mb-3 flex items-center gap-2">
                    <Fingerprint className="h-5 w-5 text-tutor-blue" />
                    License Information
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between">
                      <span className="text-tutor-neutral-dark">Content:</span>
                      <span className="font-medium">
                        Blockchain Development Course
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-tutor-neutral-dark">Provider:</span>
                      <span className="font-medium">Block Mentor Academy</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-tutor-neutral-dark">
                        License Type:
                      </span>
                      <span className="font-medium">Educational Use</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-tutor-neutral-dark">Duration:</span>
                      <span className="font-medium">1 Year</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-tutor-neutral-dark">Price:</span>
                      <span className="font-medium text-tutor-blue">
                        0.05 ETH
                      </span>
                    </li>
                  </ul>
                </div>
                <Button
                  className="w-full bg-tutor-blue hover:bg-tutor-blue-dark"
                  onClick={activateLicense}
                >
                  Activate License
                </Button>
              </div>
            )}
            {licenseStatus === "pending" && (
              <div className="flex flex-col items-center justify-center py-10">
                <div className="h-12 w-12 border-4 border-tutor-blue border-t-transparent rounded-full mb-4"></div>
                <h3 className="font-bold text-xl mb-2">
                  Processing Your License
                </h3>
                <p className="text-tutor-neutral-dark text-center max-w-sm">
                  We're creating your blockchain-secured license. This process
                  typically takes less than a minute.
                </p>
              </div>
            )}
            {licenseStatus === "active" && (
              <div className="space-y-4">
                <Alert className="bg-green-50 text-green-800 border-green-200">
                  <CheckCircle2 className="h-4 w-4" />
                  <AlertTitle>License Active</AlertTitle>
                  <AlertDescription>
                    Your license has been successfully activated and secured on
                    the blockchain.
                  </AlertDescription>
                </Alert>
                <div className="p-5 border rounded-lg bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-lg flex items-center gap-2">
                      <Shield className="h-5 w-5 text-tutor-blue" />
                      License Certificate
                    </h3>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1"
                      onClick={downloadLicense}
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-tutor-neutral-dark">
                        License ID:
                      </span>
                      <span className="font-mono">
                        BT-EDU-0x4a85c7839ad5328c
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-tutor-neutral-dark">Holder:</span>
                      <span>Jane Smith</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-tutor-neutral-dark">Issuer:</span>
                      <span>Block Mentor Academy</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-tutor-neutral-dark">
                        Issue Date:
                      </span>
                      <span>{new Date().toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-tutor-neutral-dark">
                        Expiration:
                      </span>
                      <span>
                        {new Date(
                          Date.now() + 365 * 24 * 60 * 60 * 1000
                        ).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-tutor-neutral-dark">
                        Blockchain:
                      </span>
                      <span>Ethereum</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-tutor-neutral-dark">
                        Transaction Hash:
                      </span>
                      <span className="font-mono text-xs">
                        0x7bE8076f4EA4A4AD08075C2508e481d6C946D7B1
                      </span>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-tutor-blue/5 p-4 border border-tutor-blue/20">
                  <h4 className="font-medium mb-2">
                    How to Verify This License
                  </h4>
                  <p className="text-sm text-tutor-neutral-dark mb-3">
                    To verify the authenticity of this license, you can:
                  </p>
                  <ol className="space-y-2 text-sm text-tutor-neutral-dark list-decimal pl-5">
                    <li>
                      Visit our verification portal at
                      verify.blockchaintutor.com
                    </li>
                    <li>
                      Enter the License ID or scan the QR code on the
                      certificate
                    </li>
                    <li>
                      Alternatively, check the transaction directly on Etherscan
                      using the Transaction Hash
                    </li>
                  </ol>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SmartContractLicense;
