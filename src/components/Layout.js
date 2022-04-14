import Navbar from "./Navbar";

function Layout({ children }) {
    const links = [{ link: "Home", path: "/"}, {link:"Docs", path: "/docs"}, {link:"Sassy buttons", path: "https://sassy-buttons.firebaseapp.com/"}];
    return(
    <>
        <Navbar shade="less_color" links={links} />
        {children}
    </>)
}

export default Layout;