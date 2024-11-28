import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <h1 className="mb-8 text-4xl font-bold">Terms of Service</h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            <p className="text-muted-foreground">
              Welcome to Store. By accessing our website, you agree to these terms
              of service. Please read them carefully before making any purchase or
              using our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2. Use License</h2>
            <p className="text-muted-foreground">
              Permission is granted to temporarily download one copy of the
              materials (information or software) on Store's website for personal,
              non-commercial transitory viewing only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. Disclaimer</h2>
            <p className="text-muted-foreground">
              The materials on Store's website are provided on an 'as is' basis.
              Store makes no warranties, expressed or implied, and hereby disclaims
              and negates all other warranties including, without limitation,
              implied warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property or
              other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">4. Limitations</h2>
            <p className="text-muted-foreground">
              In no event shall Store or its suppliers be liable for any damages
              (including, without limitation, damages for loss of data or profit,
              or due to business interruption) arising out of the use or inability
              to use the materials on Store's website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">5. Accuracy of Materials</h2>
            <p className="text-muted-foreground">
              The materials appearing on Store's website could include technical,
              typographical, or photographic errors. Store does not warrant that
              any of the materials on its website are accurate, complete, or
              current.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">6. Links</h2>
            <p className="text-muted-foreground">
              Store has not reviewed all of the sites linked to its website and is
              not responsible for the contents of any such linked site. The
              inclusion of any link does not imply endorsement by Store of the
              site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">7. Modifications</h2>
            <p className="text-muted-foreground">
              Store may revise these terms of service for its website at any time
              without notice. By using this website, you are agreeing to be bound
              by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">8. Governing Law</h2>
            <p className="text-muted-foreground">
              These terms and conditions are governed by and construed in
              accordance with the laws and you irrevocably submit to the exclusive
              jurisdiction of the courts in that location.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}