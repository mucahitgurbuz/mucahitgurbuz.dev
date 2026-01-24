import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="glass rounded-lg p-12 max-w-lg mx-auto">
          {/* ASCII Art 404 */}
          <pre className="text-primary text-xs sm:text-sm mb-8 font-mono overflow-x-auto">
            {`
 ██╗  ██╗ ██████╗ ██╗  ██╗
 ██║  ██║██╔═████╗██║  ██║
 ███████║██║██╔██║███████║
 ╚════██║████╔╝██║╚════██║
      ██║╚██████╔╝     ██║
      ╚═╝ ╚═════╝      ╚═╝
            `}
          </pre>

          <h1 className="text-2xl font-bold font-mono mb-4">
            <span className="text-primary">$</span> Page Not Found
          </h1>

          <p className="text-muted-foreground mb-8 font-mono text-sm">
            <span className="text-primary">Error:</span> The requested route does
            not exist in the filesystem.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild className="font-mono">
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                cd ~
              </Link>
            </Button>
            <Button variant="outline" asChild className="font-mono">
              <Link href="/contact">
                <Terminal className="w-4 h-4 mr-2" />
                Report Bug
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
