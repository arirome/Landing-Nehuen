import React, { useEffect } from "react";
import "../Catalogo.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../LandingPage/Landing.css";

const PuntoBarrio = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    {/*  <br></br>
          <h1 className=" text-center position-relative pb-3 mx-auto mb-2">Frutas y Verduras</h1>
          <h5 className=" text-center position-relative fw-bold text-primary text-uppercase">
          Consorcio Tres Lagunas Produce
              </h5>  
 */}
<section class="section-products">
        <div class="container">
       
          <div class="row">
           
         
        
  
 


          
    
<h2>Carnes</h2>
            <hr style={{ backgroundColor: "#6c757d", height: "4px" }}></hr>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-34" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">
                    Albondigas kg - Los Nenecos S.R.L
                  </h3>
                  <h2 class="product-price">$1600.00</h2>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-36" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">
                    Arrollado de Carne con JyQ kg - Los Nenecos S.R.L
                  </h3>
                  <h2 class="product-price">$1500.00</h2>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-35" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">
                    Arrollado de Pollo con JyQ kg - Los Nenecos S.R.L
                  </h3>
                  <h2 class="product-price">$1375.00</h2>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-37" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">
                    Arrollado de Pollo con verd kg - Los Nenecos S.R.L
                  </h3>
                  <h2 class="product-price">$1100.00</h2>
                </div>
              </div>
            </div>
            {/* <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-29" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">
                    Carré de Cerdo kg - Los Nenecos S.R.L
                  </h3>
                  <h2 class="product-price">$1300.00</h2>
                </div>
              </div>
            </div> */}
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-33" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">
                    Chorizo Especial kg - Los Nenecos S.R.L
                  </h3>
                  <h2 class="product-price">$1100.00</h2>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-32" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">
                    Chorizo Parrillero kg - Los Nenecos S.R.L
                  </h3>
                  <h2 class="product-price">$800.00</h2>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-25" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">
                    Costilla Especial kg - Los Nenecos S.R.L
                  </h3>
                  <h2 class="product-price">$999.00</h2>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-38" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">
                    Milanesa de Carne kg - Los Nenecos S.R.L
                  </h3>
                  <h2 class="product-price">$1250.00</h2>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-39" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">
                    Milanesa de Cerdo kg - Los Nenecos S.R.L
                  </h3>
                  <h2 class="product-price">$999.99</h2>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-40" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">
                    Milanesa de Pollo kg - Los Nenecos S.R.L
                  </h3>
                  <h2 class="product-price">$1300.00</h2>
                </div>
              </div>
            </div>
           {/*  <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-28" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">
                    Paleta de Cerdo kg - Los Nenecos S.R.L
                  </h3>
                  <h2 class="product-price">$930.00</h2>
                </div>
              </div>
            </div> */}
           {/*  <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-30" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">
                    Pechito de Cerdo kg - Los Nenecos S.R.L
                  </h3>
                  <h2 class="product-price">$1300.00</h2>
                </div>
              </div>
            </div> */}
          {/*   <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-31" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">
                    Perníl de Cerdo kg - Los Nenecos S.R.L
                  </h3>
                  <h2 class="product-price">$950.00</h2>
                </div>
              </div>
            </div> */}

       {/*   <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-26" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">
                    Vacio de Novillo kg - Los Nenecos S.R.L
                  </h3>
                  <h2 class="product-price">$1250.00</h2>
                </div>
              </div>
            </div> */}
            {/*     <div class="col-md-6 col-lg-4 col-xl-3" 
      >
      <div id="product-27" class="single-product">
        <div class="part-1">
          <ul></ul>
        </div>
        <div class="test-card part-2  border border-primary">
          <h3 class="product-title">
            Matambre de Novillo kg - Los Nenecos S.R.L
          </h3>
          <h2 class="product-price">$999.00</h2>
        </div>
      </div>
    </div>


 */}

    <div class="col-md-6 col-lg-4 col-xl-3" 
      >
      <div id="product-41" class="single-product">
        <div class="part-1">
          <ul></ul>
        </div>
        <div class="test-card part-2  border border-primary">
          <h3 class="product-title">
            Cabeza de Cerdo kg - Los Nenecos S.R.L
          </h3>
          <h2 class="product-price">$300.00</h2>
        </div>
      </div>
    </div> 
          </div>
        </div>
      </section>
    </>
  );
};

export default PuntoBarrio;
