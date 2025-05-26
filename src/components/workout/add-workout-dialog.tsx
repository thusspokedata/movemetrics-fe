'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { AddWorkoutForm } from './add-workout-form';

export function AddWorkoutDialog() {
  const t = useTranslations('workout.dialog');
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{t('addButton', { defaultValue: 'Add Workout' })}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t('title', { defaultValue: 'Add New Workout' })}</DialogTitle>
          <DialogDescription>
            {t('description', { defaultValue: 'Record your workout session. Fill in the details below.' })}
          </DialogDescription>
        </DialogHeader>
        <AddWorkoutForm />
      </DialogContent>
    </Dialog>
  );
}
