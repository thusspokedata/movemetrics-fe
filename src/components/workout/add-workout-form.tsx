'use client';

import { useTranslations } from 'next-intl';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

// Define workout form schema with translations
function createWorkoutFormSchema(t: (key: string, options?: { defaultValue: string }) => string) {
  return z.object({
    activity: z.string({
      required_error: t('validation.activity', { defaultValue: 'Please select an activity.' }),
    }),
    date: z.date({
      required_error: t('validation.date', { defaultValue: 'Please select a date.' }),
    }),
    startTime: z.string({
      required_error: t('validation.startTime', { defaultValue: 'Please select a start time.' }),
    }),
    duration: z.string({
      required_error: t('validation.duration', { defaultValue: 'Please enter the duration.' }),
    }),
    notes: z.string().optional(),
  });
}

// The type needs to be defined with the schema creator function
type WorkoutFormValues = z.infer<ReturnType<typeof createWorkoutFormSchema>>;

export function AddWorkoutForm() {
  const t = useTranslations('workoutForm');
  const tActivities = useTranslations('activities');
  const tCommon = useTranslations('common');

  // Create activities array with translated labels
  const activities = [
    { value: 'gym', label: tActivities('gym') },
    { value: 'bjj', label: tActivities('bjj', { defaultValue: 'Brazilian Jiu-Jitsu' }) },
    { value: 'running', label: tActivities('running') },
    { value: 'cycling', label: tActivities('cycling') },
    { value: 'swimming', label: tActivities('swimming') },
    { value: 'yoga', label: tActivities('yoga') },
    { value: 'other', label: tActivities('other') },
  ];

  // Create the schema with translations
  const workoutFormSchema = createWorkoutFormSchema(t);

  const form = useForm<WorkoutFormValues>({
    resolver: zodResolver(workoutFormSchema),
    defaultValues: {
      notes: '',
    },
  });

  function onSubmit(data: WorkoutFormValues) {
    // TODO: Implement form submission
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="activity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('activity')}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={t('placeholders.activity')} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {activities.map((activity) => (
                    <SelectItem key={activity.value} value={activity.value}>
                      {activity.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                {t('descriptions.activity', { defaultValue: 'What type of workout did you do?' })}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>{t('date')}</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[240px] pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>{t('placeholders.date', { defaultValue: 'Pick a date' })}</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                {t('descriptions.date', { defaultValue: 'When did you do this workout?' })}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="startTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('startTime')}</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {t('duration', { defaultValue: 'Duration' })} (
                  {tCommon('minutes', { defaultValue: 'minutes' })})
                </FormLabel>
                <FormControl>
                  <Input type="number" min="1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('notes')}</FormLabel>
              <FormControl>
                <Input placeholder={t('placeholders.notes')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">{t('submit')}</Button>
      </form>
    </Form>
  );
}
