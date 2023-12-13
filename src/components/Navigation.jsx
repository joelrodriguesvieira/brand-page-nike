import { useEffect, useState } from "react";

const Navigation = () => {

    const [imageLogo, setImageLogo] = useState("visible");
    const [navList, setNavList] = useState("nav-list hidden");

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            setImageLogo(screenWidth < 751 ? "invisible" : "visible");
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    function showUpNavList() {
        setNavList((prevNavList) => prevNavList === "nav-list hidden" ? "nav-list show" : "nav-list hidden");
    }

    return (
        <nav className="container">
            <div className={`logo ${imageLogo}`}>
                <a href="#"><img src="../public/images/brand_logo.png" alt="logo" /></a>
            </div>

            <div className="mobile-menu" onClick={() => showUpNavList()}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

            <ul className={navList}>
                <li><a href="#">Início</a></li>
                <li><a href="#">Localização</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
            </ul>

            <button id="login-btn">Entrar</button>
        </nav>
    )
}

export default Navigation;