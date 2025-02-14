export function Footer() {
  return (
    <footer className="mt-auto border-t py-4">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Gilberts Gallery. All rights reserved -
          Valmedia LLC.
        </p>
      </div>
    </footer>
  );
}
