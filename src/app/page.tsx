import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AddWorkoutDialog } from '@/components/workout/add-workout-dialog';

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">MoveMetrics</h1>
          <AddWorkoutDialog />
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="workouts">Workouts</TabsTrigger>
            <TabsTrigger value="friends">Friends</TabsTrigger>
            <TabsTrigger value="stats">Stats</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle>Total Workouts</CardTitle>
                  <CardDescription>This month</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">0</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Active Friends</CardTitle>
                  <CardDescription>This week</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">0</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Most Active</CardTitle>
                  <CardDescription>This month</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">-</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Favorite Activity</CardTitle>
                  <CardDescription>This month</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">-</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="workouts">
            <Card>
              <CardHeader>
                <CardTitle>Recent Workouts</CardTitle>
                <CardDescription>Your latest training sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">No workouts recorded yet.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="friends">
            <Card>
              <CardHeader>
                <CardTitle>Friends Activity</CardTitle>
                <CardDescription>See what your friends are up to</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">No friends added yet.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats">
            <Card>
              <CardHeader>
                <CardTitle>Your Stats</CardTitle>
                <CardDescription>Detailed statistics about your workouts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">No data available yet.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
