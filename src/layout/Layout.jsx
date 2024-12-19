
function Layout({ children }) {
  return (
    <>
      <header className="bg-theme-color px-5 py-4 mt-5 mb-32 text-center rounded-md text-4xl font-extrabold [word-spacing:20px] ">
        Digital Currency Web Application
      </header>
      {children}
      <footer className="bg-theme-color px-5 py-4 mb-5 mt-32 text-center rounded-md  text-2xl">
        Made with <span className="text-red-500 text-4xl">❤️</span> by <a href="https://github.com/Zarshenas/digital-currency-app" className="text-secondbg font-bold">Ali Zarshenas</a>
      </footer>
    </>
  );
}

export default Layout;