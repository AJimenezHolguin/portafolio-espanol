import data from "../../data/index.json"


const MySkills = () => {
    return(
        <section className="skills--section"
        id="mySkills">
           <div className="portfolio--container">
            <h2 className="skills--section--heading">Competencias</h2>
            <p className="section--title">Mis Habilidades:</p>
           </div>
           <div className="skills--section--container">
            {data?.skills?.map((item, index) =>(
                <div key={index}
                className="skills--section--card">
                    <div className="skills--section--img">
                        <img src={item.src} alt="Product Chain" />
                    </div>
                    <div className="skills--section--card--content">
                       <h3 className="skills--section--title">
                        {item.title}</h3>
                    </div>

                </div>
            ))}
           </div>

        </section>
    )
}

export default MySkills;