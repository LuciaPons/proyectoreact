function MainLayout({ children }) {
  return (
    <>
        <Navbar />
        <main className="container">
            {children}
        </main>
    </>
  );
}