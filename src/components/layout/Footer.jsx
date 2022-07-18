export default function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <div>
      <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </footer>
    </div>
  );
}
