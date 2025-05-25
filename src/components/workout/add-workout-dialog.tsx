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
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Workout</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Workout</DialogTitle>
          <DialogDescription>
            Record your workout session. Fill in the details below.
          </DialogDescription>
        </DialogHeader>
        <AddWorkoutForm />
      </DialogContent>
    </Dialog>
  );
}
