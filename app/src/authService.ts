// Placeholder auth functions to prevent module not found errors.
// Replace with your Firebase or backend implementation as needed.

export async function register(email: string, password: string) {
  if (!email || !password)
    return Promise.reject(new Error("Email and password are required"));
  console.log("Register called", { email, password });
  return Promise.resolve({ user: { email } });
}

export async function login(email: string, password: string) {
  if (!email || !password)
    return Promise.reject(new Error("Email and password are required"));
  console.log("Login called", { email, password });
  return Promise.resolve({ user: { email } });
}

export async function signInWithGoogle() {
  console.log("Google sign-in called");
  return Promise.resolve({ user: { provider: "google" } });
}
