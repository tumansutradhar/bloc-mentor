import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useBlockchain } from "@/context/BlockchainContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import {
  UserCog,
  Save,
  Camera,
  ArrowLeft,
  Wallet,
  Plus,
  Trash2,
  MapPin,
  Phone,
} from "lucide-react";

const Profile = () => {
  const { isConnected, walletAddress, connectWallet } = useBlockchain();
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Blockchain Ave, San Francisco, CA 94107",
    bio: "Blockchain developer and crypto enthusiast. Learning smart contract development and DeFi protocols.",
    avatar: "/placeholder.svg",
    wallets: [
      {
        address: walletAddress || "0x1234567890abcdef1234567890abcdef12345678",
        label: "Primary Wallet",
        dateAdded: "September 12, 2023",
      },
    ],
    preferences: {
      notifications: true,
      twoFactorAuth: false,
      publicProfile: true,
    },
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...profile });
  const [newWallet, setNewWallet] = useState({ address: "", label: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggleChange = (
    key: "notifications" | "twoFactorAuth" | "publicProfile"
  ) => {
    setFormData((prev) => ({
      ...prev,
      preferences: { ...prev.preferences, [key]: !prev.preferences[key] },
    }));
  };

  const handleNewWalletChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewWallet((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddWallet = () => {
    if (!newWallet.address || !newWallet.label) {
      toast.error("Please provide both wallet address and label");
      return;
    }

    const walletExists = formData.wallets.some(
      (wallet) =>
        wallet.address.toLowerCase() === newWallet.address.toLowerCase()
    );

    if (walletExists) {
      toast.error("This wallet address is already in your profile");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      wallets: [
        ...prev.wallets,
        {
          address: newWallet.address,
          label: newWallet.label,
          dateAdded: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        },
      ],
    }));

    setNewWallet({ address: "", label: "" });
    toast.success("Wallet added successfully");
  };

  const handleDeleteWallet = (index: number) => {
    if (formData.wallets.length <= 1) {
      toast.error("You must keep at least one wallet in your profile");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      wallets: prev.wallets.filter((_, i) => i !== index),
    }));

    toast.success("Wallet removed from your profile");
  };

  const handleSave = () => {
    setProfile(formData);
    setIsEditing(false);
    toast.success("Profile updated successfully");
  };

  const handleCancel = () => {
    setFormData({ ...profile });
    setIsEditing(false);
  };

  if (!isConnected) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20">
          <div className="py-12 px-6 max-w-7xl mx-auto">
            <Card className="text-center p-8 glass-card">
              <CardHeader>
                <CardTitle>Connect Your Wallet</CardTitle>
                <CardDescription>
                  Connect your wallet to view and edit your profile
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" onClick={connectWallet} className="mt-4">
                  Connect Wallet
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="py-12 px-6 max-w-7xl mx-auto">
          <div className="flex items-center mb-6 gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate(-1)}
              className="rounded-full"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-3xl font-bold">Your Profile</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card md:col-span-1">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative mb-4">
                    <Avatar className="h-24 w-24 border-2 border-primary/20">
                      <AvatarImage src={profile.avatar} alt={profile.name} />
                      <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {isEditing && (
                      <Button
                        size="icon"
                        variant="outline"
                        className="absolute bottom-0 right-0 rounded-full h-8 w-8"
                      >
                        <Camera className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <h2 className="text-xl font-bold mb-1">{profile.name}</h2>
                  <p className="text-sm text-muted-foreground mb-2">
                    {profile.email}
                  </p>
                  <div className="glass-card px-3 py-1 rounded-lg">
                    <span className="text-xs font-mono">
                      {profile.wallets[0].address.substring(0, 6)}...
                      {profile.wallets[0].address.substring(38)}
                    </span>
                  </div>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <h3 className="font-medium mb-2">About</h3>
                    <p className="text-muted-foreground">{profile.bio}</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Account Status</h3>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-green-600">Verified</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Member Since</h3>
                    <p className="text-muted-foreground">September 2023</p>
                  </div>
                </div>
                {!isEditing && (
                  <Button
                    className="w-full mt-6"
                    onClick={() => setIsEditing(true)}
                  >
                    <UserCog className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Button>
                )}
              </CardContent>
            </Card>
            <Card className="glass-card md:col-span-2">
              <CardHeader>
                <CardTitle>
                  {isEditing ? "Edit Your Profile" : "Profile Details"}
                </CardTitle>
                <CardDescription>
                  {isEditing
                    ? "Update your personal information and preferences"
                    : "Your personal information and account settings"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="personal" className="space-y-6">
                  <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="personal">Personal Info</TabsTrigger>
                    <TabsTrigger value="wallet">Wallets</TabsTrigger>
                    <TabsTrigger value="preferences">Preferences</TabsTrigger>
                  </TabsList>
                  <TabsContent value="personal" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        {isEditing ? (
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        ) : (
                          <div className="p-2">{profile.name}</div>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        {isEditing ? (
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        ) : (
                          <div className="p-2">{profile.email}</div>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="flex items-center gap-1"
                        >
                          <Phone className="h-4 w-4" />
                          Phone Number
                        </Label>
                        {isEditing ? (
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        ) : (
                          <div className="p-2">{profile.phone}</div>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="address"
                          className="flex items-center gap-1"
                        >
                          <MapPin className="h-4 w-4" />
                          Address
                        </Label>
                        {isEditing ? (
                          <Input
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                          />
                        ) : (
                          <div className="p-2">{profile.address}</div>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Biography</Label>
                      {isEditing ? (
                        <textarea
                          id="bio"
                          name="bio"
                          value={formData.bio}
                          onChange={handleInputChange}
                          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-24 resize-none"
                        />
                      ) : (
                        <div className="p-2 whitespace-pre-wrap">
                          {profile.bio}
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  <TabsContent value="wallet" className="space-y-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium mb-4">Your Wallets</h3>
                        <div className="space-y-4">
                          {formData.wallets.map((wallet, index) => (
                            <div
                              key={index}
                              className="bg-muted/40 rounded-lg p-4 relative"
                            >
                              <div className="flex items-center gap-3 mb-2">
                                <Wallet className="h-5 w-5 text-primary" />
                                <h3 className="font-medium">{wallet.label}</h3>
                                {isEditing && formData.wallets.length > 1 && (
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-2 top-2 h-8 w-8 text-destructive hover:text-destructive/90"
                                    onClick={() => handleDeleteWallet(index)}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>
                              <div className="font-mono text-sm truncate">
                                {wallet.address}
                              </div>
                              <div className="mt-2 text-xs text-muted-foreground">
                                Connected since {wallet.dateAdded}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      {isEditing && (
                        <div className="bg-muted/20 rounded-lg p-4 border border-dashed border-muted-foreground/50">
                          <h3 className="font-medium mb-4">Add New Wallet</h3>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="walletLabel">Wallet Label</Label>
                              <Input
                                id="walletLabel"
                                name="label"
                                placeholder="e.g., Hardware Wallet"
                                value={newWallet.label}
                                onChange={handleNewWalletChange}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="walletAddress">
                                Wallet Address
                              </Label>
                              <Input
                                id="walletAddress"
                                name="address"
                                placeholder="0x..."
                                value={newWallet.address}
                                onChange={handleNewWalletChange}
                              />
                            </div>
                            <Button
                              variant="outline"
                              className="w-full"
                              onClick={handleAddWallet}
                            >
                              <Plus className="mr-2 h-4 w-4" />
                              Add Wallet
                            </Button>
                          </div>
                        </div>
                      )}
                      <div>
                        <h3 className="font-medium mb-3">
                          Transaction History
                        </h3>
                        <div className="text-center text-muted-foreground py-6">
                          Your transaction history will appear here
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="preferences" className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="cursor-pointer">
                            Email Notifications
                          </Label>
                          <div className="text-xs text-muted-foreground">
                            Receive email updates about your sessions
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {isEditing ? (
                            <input
                              type="checkbox"
                              checked={formData.preferences.notifications}
                              onChange={() =>
                                handleToggleChange("notifications")
                              }
                              className="cursor-pointer h-4 w-4"
                            />
                          ) : (
                            <span>
                              {profile.preferences.notifications
                                ? "Enabled"
                                : "Disabled"}
                            </span>
                          )}
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="cursor-pointer">
                            Two-Factor Authentication
                          </Label>
                          <div className="text-xs text-muted-foreground">
                            Add an extra layer of security to your account
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {isEditing ? (
                            <input
                              type="checkbox"
                              checked={formData.preferences.twoFactorAuth}
                              onChange={() =>
                                handleToggleChange("twoFactorAuth")
                              }
                              className="cursor-pointer h-4 w-4"
                            />
                          ) : (
                            <span>
                              {profile.preferences.twoFactorAuth
                                ? "Enabled"
                                : "Disabled"}
                            </span>
                          )}
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="cursor-pointer">
                            Public Profile
                          </Label>
                          <div className="text-xs text-muted-foreground">
                            Make your profile visible to other users
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {isEditing ? (
                            <input
                              type="checkbox"
                              checked={formData.preferences.publicProfile}
                              onChange={() =>
                                handleToggleChange("publicProfile")
                              }
                              className="cursor-pointer h-4 w-4"
                            />
                          ) : (
                            <span>
                              {profile.preferences.publicProfile
                                ? "Enabled"
                                : "Disabled"}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                {isEditing && (
                  <div className="flex items-center justify-end gap-2 mt-6">
                    <Button variant="outline" onClick={handleCancel}>
                      Cancel
                    </Button>
                    <Button onClick={handleSave}>
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
