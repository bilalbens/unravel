import React from 'react'
import homeImage1 from "../resources/homeImage1.png"
import Afbeelding11 from "../resources/Afbeelding11.png"
import Afbeelding22 from "../resources/Afbeelding22.png"
import Afbeelding33 from "../resources/Afbeelding33.png"
import Rectangle120 from "../resources/Rectangle120.png"
import Rectangle121 from "../resources/Rectangle121.png"

function HomePage() {
  return (
    
    <div>

        <div className="d-flex justify-content-between align-items-center  flex-sm-row flex-column homeCol">
            <div className="col" ></div>
             <div className="col-4" style={{margin: '0', paddingRight:50}}>
                 <h1 className="my-3 title">
                 We create the tech behind your venture.
                 </h1>

                 <p className="py-5 para">
                     Unravel helpt innovatieve ondernemers en intrapreneurs
                     met de ontwikkeling van snelgroeiende digitale producten.
                     Met een team van 25+ leden bieden we expertise in
                    Concepting, Design & Development: Van idee tot realiteit, of
                     als partner op één van deze expertises.
                 </p>
                 <div className="d-flex justify-content-between align-items-center">
                         <button type="button" className="btn btn-primary">Neem contact op</button>
                         <a type="button" >Bekijk onze services </a>
                         <div></div>
                 </div>

             </div>
             <div className="col-6" >
                     <img src={homeImage1} alt="" style={{width:"100%"}} />
             </div>
            
        </div>

        <div class="container ">
            <div class="row py-5 d-flex justify-content-between align-items-center  flex-sm-row flex-column homeCol">
            <div className="col px-5" >
                <h1>
                Services voor waar jouw venture staat
                </h1>
            </div>
            <div className="col" >
                <p>
                        Sta je aan de start van een nieuwe venture, of zoek je ondersteuning bij herontwerp of doorontwikkeling: Unravel biedt
                        passende services. We pakken door op waar jouw venture staat.                
                </p>
            </div>
        </div>
        </div>

        <div class="container ">
            <div class="row py-5 d-flex justify-content-around align-items-center  flex-sm-row flex-column homeCol">
            <div className="col  colShadow" >
                <img src={Afbeelding11} alt="" />
                <h2> <span> <img src={Rectangle120} alt="" /></span>  Concepting</h2>
                <p className="servpara">
                Wij ontrafelen jouw idee van
                begin tot helder concept met
                co-creatie sessies, user research
                en wireframes.
                </p>
                <a href=" ">Make it clear <span> > </span> </a>
            </div>
            <div className="col  mx-4 colShadow" >
                <img src={Afbeelding22} alt="" />
                <h2> <span> <img src={Rectangle121} alt="" /></span> Design</h2>
                <p className="servpara">
                Wij (her)ontwerpen jouw digitale
                product tot een gebruiksvriendelijk
                en aansprekend design voor jouw
                users.                
                </p>
                <a href=" ">Make it clear <span> > </span> </a>

            </div>
 
            <div className="col colShadow" >
                <img src={Afbeelding33} alt="" />
                <h2> <span> <img src={Rectangle121} alt="" /></span>  Development</h2>
                <p className="servpara">
                Wij ontwikkelen jouw digitale
                product in de talen en frameworks
                die het beste aansluiten bij jouw
                behoeften.             
                </p>
                <a href=" ">Make it clear <span> > </span>  </a>

            </div>
        </div>
        </div>

    </div>



  );
}

export default HomePage