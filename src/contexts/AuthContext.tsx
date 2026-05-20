import { createContext, useContext, useState, ReactNode } from "react";

export type UserTier = "free" | "premium";

export interface MockUser {
  name: string;
  email: string;
  tier: UserTier;
  avatar?: string;
}

interface AuthContextValue {
  user: MockUser | null;
  signInWithGoogle: () => void;
  signOut: () => void;
  upgradeToPremium: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

/**
 * Mock auth context — UI-only states for logged-in/out and free/premium.
 * Replace with Firebase Auth + Firestore wiring later.
 */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<MockUser | null>(null);

  const signInWithGoogle = () => {
    setUser({
      name: "תלמיד אלוגברה",
      email: "student@alogebra.app",
      tier: "free",
    });
  };

  const signOut = () => setUser(null);

  const upgradeToPremium = () => {
    setUser((u) => (u ? { ...u, tier: "premium" } : u));
  };

  return (
    <AuthContext.Provider
      value={{ user, signInWithGoogle, signOut, upgradeToPremium }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
