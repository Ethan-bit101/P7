'use client';
import { useRouter } from 'next/navigation';
import { getToken, logoutUser } from '@/lib/auth';
import Link from "next/link";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function DashboardLayout({children}: {
    children: React.ReactNode;
}) {
  const router = useRouter();
  const token = getToken();

  if (!token) {
    router.push('/login');
    return null;
  }

  function handleLogout() {
    logoutUser();
    router.push('/login');
  }

  return (
    <div className="p-6">
      <div className="shadow-xl border flex p-1 items-center justify-between fixed bg-white top-0 left-0 right-0 z-50">


                <div className="relative left-0 pr-15">
                  <Link href="/dashboard" rel="noopener noreferrer">
                  <Image
                    src="/youtube.png"
                    alt="YouTube Logo"
                    width={37}
                    height={37}
                    className="inline-block relative left-5"
                  />
                  <h1 className="inline-block text-2xl font-bold left-7 relative">
                    Youtube<sup className="text-sm">PH</sup>
                  </h1>
                  </Link>
                </div>

        <ButtonGroup className="relative" style={{ right: "30px" }}>
          <Input placeholder="Search..." className="w-120 h-10" />
          <Button variant="outline" aria-label="Search" className="h-10 hover:bg-gray-100">
            <SearchIcon />
          </Button>
        </ButtonGroup>

        <div className="absolute" style={{ left: "1080px" }}>
          <Image
            src="/microphone.png"
            alt="Microphone"
            width={25}
            height={25}
            className="inline-block"
          />
        </div>

        <Image
          src="/notification.png"
          alt="Notifications"
          width={30}
          height={30}
          className="absolute" style={{ left: "1400px" }}
        />

        <DropdownMenu>
          <DropdownMenuTrigger className="top-4">
            <Image
              src="/profile-user.png"
              alt="Profile"
              width={32}
              height={32}
              className="mr-7 inline-block cursor-pointer"
            />
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuLabel>
              <Link href="#" rel="noopener noreferrer">Profile</Link>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="secondary">Your token</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="leading-none font-medium">{token}</h4>
                      <p className="text-muted-foreground text-sm">
                        Set the dimensions for the layer.
                      </p>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Link href="/register" rel="noopener noreferrer">
                <Button variant="destructive" onClick={handleLogout}>Logout</Button>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>

      {children}
    </div>
  );
}
