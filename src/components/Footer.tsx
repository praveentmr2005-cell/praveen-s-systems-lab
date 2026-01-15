const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Praveen Kumar TMR. Built with precision.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Last updated: January 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
