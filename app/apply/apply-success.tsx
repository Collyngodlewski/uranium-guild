import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Thank you for applying to Uranium!
              </CardTitle>
              <CardDescription>We will reach out to you via your Discord to watch for a friend request!</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                You&apos;ve successfully signed up. Please give us a few days to review your application.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}