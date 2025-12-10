'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { API_BASE } from '@/lib/config';

import { FormEvent } from 'react';

import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleRegister(e: FormEvent) {
    e.preventDefault();
    setError('');

    const res = await fetch(`${API_BASE}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || 'Register failed');
      return;
    }

    router.push('/login');
  }

  return (
    <>
      <fieldset className="p-10 m-50 rounded-lg border border-black">
        <div className="float-left">
          <Image
            src="/google.png"
            alt="Homepage"
            width={45}
            height={45}
            className="relative left-0 bottom-5"
          />
          <span className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">Sign up</span><br /><br/>

          <div className="w-80 text-sm text-gray-600">
          Enter your username and password
        </div>
        </div>

        <div className="float-right">
          <form onSubmit={handleRegister} className="space-y-4">
            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className = " border-black h-13"
            />

            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className = " border-black h-13"
            />

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <Button className="w-full" type="submit">
              Register
            </Button>
          </form>

          <Button
            variant="link"
            className="mt-2 w-full"
            onClick={() => router.push('/login')}
          >
            Back to Login
          </Button>
        </div>
      </fieldset>
    </>
  );
}

