const HeroSection = () => {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hola, Soy Anderson</p>
             <h1 className="hero--section--title">
                <span className="hero--section--title--color">Front-end</span>
                {" "}
                <br/>
                Developer
                </h1> 
                <p className="hero--section-description">
                    <br/>
                    Cada día es una oportunidad para aprender, 
                    <br/>
                    crecer y evolucionar en este maravilloso mundo de la tecnología y el desarrollo.
                    </p>  
            </div> 
            {/* <button className="btn btn-primary">Get In Touch</button>  */}
        </div>
        <div className="hero--section--img">
            <img src="./img/sinfondoFoto.png" alt="Hero section"/>
        </div>
      </section>  
    )
}

export default HeroSection;