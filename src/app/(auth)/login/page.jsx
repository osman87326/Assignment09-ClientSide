"use client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { FaGoogle } from "react-icons/fa6";
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const LoginPage = () => {
    const router = useRouter();
    
    async function handleLogin(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const loginData = Object.fromEntries(formData.entries());
        const { data, error } = await authClient.signIn.email({
            email: loginData.email,
            password: loginData.password, 
        });
        if (error) {
            toast.error(error.message);
        } else {
            toast.success('Login successful!');
            router.push('/');
            router.refresh()
        }
    }

    const handleSignInWithGoogle = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/"
        });
    };

    return (
        <div className="min-h-[calc(100vh-68px)] flex items-center justify-center px-4 bg-arenaBg">
            <div className="w-full max-w-md bg-arenaCard p-8 rounded-lg shadow-lg space-y-6">
                <h2 className="text-3xl font-sports font-bold text-center uppercase tracking-wide text-white">
                    Welcome to Sport-Nest<span className="text-arenaOrange italic">Pulse</span>
                </h2>

                {/* Google Sign-In Button */}
                <Button 
                    onPress={handleSignInWithGoogle}
                    type="button"
                    className="w-full flex items-center justify-center gap-3 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-white font-medium text-sm py-3 px-4 transition-colors"
                >
                    <FaGoogle className="w-4 h-4 text-arenaOrange" />
                    <span>Sign-In with Google</span>
                </Button>

                {/* Divider */}
                <div className="relative flex items-center justify-center text-xs uppercase text-white/40">
                    <div className="w-full border-t border-white/10"></div>
                    <span className="bg-arenaCard px-3 absolute">Or continue with</span>
                </div>

                <Form onSubmit={handleLogin} className="space-y-4 font-body">

                     {/* Email Input */}
                    <div className="space-y-2">
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label className="text-xs font-mono uppercase tracking-widest text-zinc-400">Email Address</Label>
                            <div className="flex items-center bg-zinc-900 border border-zinc-800 px-4 py-3 focus-within:border-arenaOrange transition-colors group">
                                <Input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="bg-transparent outline-none flex-1 text-sm text-white placeholder-zinc-600"
                                />
                            </div>
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Password Input */}
                    <div className="space-y-2">
                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                return null;
                            }}
                        >
                            <Label isRequired className="text-xs font-mono uppercase tracking-widest text-zinc-400">Password</Label>
                            <div className="flex items-center bg-zinc-900 border border-zinc-800 px-4 py-3 focus-within:border-arenaOrange transition-colors group">
                                <Input
                                    type="password"
                                    placeholder="••••••••"
                                    className="bg-transparent outline-none flex-1 text-sm text-white placeholder-zinc-600"
                                />
                            </div>
                            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                            <FieldError />
                        </TextField>
                    </div>

                    <Button type="submit" className="btn bg-arenaOrange hover:bg-opacity-90 border-none text-white w-full font-sports text-xl uppercase tracking-wider mt-4">
                        Login
                    </Button>
                </Form>

                <p className="text-center font-body text-sm text-white/60 mt-6">
                    Dont have an account? {' '}
                    <Link href="/register" className="text-arenaOrange hover:underline font-semibold">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;