import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-lg text-muted-foreground">Oops! Page not found</p>
        <Link href="/" className="inline-flex items-center justify-center text-primary underline underline-offset-4">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

