// app/(auth)/layout.jsx
import Footer from "@/components/Footer";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col justify-between">
     
      <div>
        {children}
      </div>

      <Footer />
    </div>
  );
}