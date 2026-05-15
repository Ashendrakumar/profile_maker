import { Button } from "@/components/ui/button";
const ErrorPage = ({ error }: { error?: string }) => {

  return (
    <div className="container bg-gradient-to-b from-slate-950 via-emerald-950/20 to-slate-950 min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl text-center text-emerald-400 font-bold mb-4">{error ? error : 'User Not Found'}</h1>
      <p className="text-gray-400 text-center">
        {
          'The requested portfolio URL is invalid or expired.'
        } {/* /IS Active User For Portfolio */}
      </p>
      <div className="mt-8">
        <Button
          asChild
          variant="outline"
          className="border-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-300"
        >
          <a
            href="https://profile-manager-front-end.onrender.com/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us For Portfolio
          </a>
        </Button>
      </div>
    </div>
  )
};

export default ErrorPage;
