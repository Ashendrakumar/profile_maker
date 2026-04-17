import { Button } from "@/components/ui/button";
const ErrorPage = ({ error }: { error?: string }) => {

  return (
    <div className="container bg-saas-black  min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl text-center text-saas-orange font-bold mb-4">{error ? error : 'User Not Found'}</h1>
      <p className="text-gray-400 text-center">
        {
          'The requested portfolio URL is invalid or expired.'
        } {/* /IS Active User For Portfolio */}
      </p>
      <div className="mt-8">
        <Button
          asChild
          variant="outline"
          className="border-saas-orange text-saas-orange hover:bg-saas-orange hover:text-white"
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
