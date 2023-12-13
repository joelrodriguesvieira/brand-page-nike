const HeroSection = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <div>
                    <h1>SEUS PÉS MERECEM O MELHOR</h1>
                    <p>SEUS PÉS MERECEM O MELHOR E ESTAMOS AQUI PARA TE AJUDAR COM OS NOSSOS SAPATOS. COMPRE AGORA MESMO A MELHOR EXPERIÊNCIA PARA OS SEUS PÉS.</p>
                </div>

                <div className="hero-btn">
                    <button className="primary-btn">Comprar Agora</button>
                    <button className="secondary-btn">Categoria</button>
                </div>

                <div className="shopping">
                    <p>Também disponível em</p>

                    <div className="brand-icons">
                        <img src="../public/images/flipkart.png" alt="flipkart-logo" />
                        <img src="../public/images/amazon.png" alt="amazon-logo" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="../public/images/hero-image.png" alt="hero-logo" />
            </div>
        </main>
    )
};

export default HeroSection;