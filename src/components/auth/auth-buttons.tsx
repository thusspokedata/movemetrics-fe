'use client';

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

export function AuthButtons() {
  const t = useTranslations('auth');

  return (
    <div className="flex items-center gap-2">
      <SignedOut>
        <SignInButton mode="modal">
          <Button variant="outline" size="sm">
            {t('signIn', { defaultValue: 'Sign In' })}
          </Button>
        </SignInButton>
        <SignUpButton mode="modal">
          <Button size="sm">
            {t('signUp', { defaultValue: 'Sign Up' })}
          </Button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton 
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-9 w-9"
            }
          }} 
        />
      </SignedIn>
    </div>
  );
}
