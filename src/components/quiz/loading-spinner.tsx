import { LoaderCircle } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-primary animate-in fade-in duration-500">
      <LoaderCircle className="h-16 w-16 animate-spin" />
      <p className="font-headline text-xl text-foreground/80">Generando tu revelación...</p>
    </div>
  );
}
