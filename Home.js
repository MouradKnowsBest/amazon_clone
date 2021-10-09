import Product from "./Product";
import React from 'react';
import "./Home.css";


function Home() {


    return (

        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt= ""
            />


                    {/* Product id, title, prince, rating, image  */}

                    <div className="home__row">
                        <Product
                            id="12321341"
                            title="Watch Paparazi Raggazi"
                            price={250}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/61cp8izwLFL._AC_UX342_.jpg"
                            />

                        <Product
                            id="12321548"
                            title="I Phone X 32GB"
                            price={2.55}
                            rating={5}
                            image="https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2019/07/iphone-11-XI-prix-sortie.jpg"
                            />


                     </div>


                     <div className="home__row">


                        <Product
                            id="12321478"
                            title="Machine Printing Katching Aluminium"
                            price={8}
                            rating={3}
                            image="https://www.a3multimedia.com/fiche_produit/photo/637439424_derouleurdela3-2.jpg"
                            />

                        <Product
                            id="1239741341"
                            title="Laptop High Generation I8 16GM"
                            price={2300}
                            rating={5}
                            image="https://ja-informatique.com/web/image/428/ordi.jpg"
                            />

                        <Product
                            id="124871341"
                            title="The Lean Startup: How Constant Innovation Creates Businesses Paperback"
                            price={20}
                            rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
                            />
                      </div>

                      <div className="home__row">


                        <Product
                            id="12321341"
                            title="Music Battery"
                            price={95}
                            rating={4}
                            image="https://www.musique-instrument.fr/wp-content/uploads/2016/01/batterie-enfant-stagg-tim-jr-3-12b-bl.jpg"
                            />

                      </div>



                    {/* Product */}

        </div>


    )

}

export default Home