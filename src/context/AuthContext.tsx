import { createContext } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { ContextType } from "@/Type/Types";

export const AuthProvider = createContext<ContextType | null>(null)

export const googleProvider = new GoogleAuthProvider()