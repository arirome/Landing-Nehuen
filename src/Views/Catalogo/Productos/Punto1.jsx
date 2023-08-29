import React, { useEffect } from "react";
import "../Catalogo.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../LandingPage/Landing.css";

const Punto1 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <br></br>
      <h1 className=" text-center position-relative pb-3 mx-auto mb-2">Frutas y Verduras</h1>
          <h5 className=" text-center position-relative fw-bold text-primary text-uppercase">
          Consorcio Tres Lagunas Produce
              </h5> 
 
<section class="section-products">
        <div class="container">
          <h2>Envasados</h2>
          <hr style={{ backgroundColor: "#009ad5", height: "4px" }}></hr>
          <div class="row">
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-15" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">Aceite - Friar</h3>
                  <h2 class="product-price">$900.00</h2>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-2" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">Arroz 0000 - Mitaí</h3>
                  <h2 class="product-price">$230.00</h2>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-1" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">Arroz 00000 - AF</h3>
                  <h2 class="product-price">$250.00</h2>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-3" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">Arroz 00000 - Mitaí</h3>
                  <h2 class="product-price">$250.00</h2>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-4" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">Dulce de Batata - Del Carmen</h3>
                  <h2 class="product-price">$300.00</h2>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-47" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">Gas - Refsa gas</h3>
                  <h2 class="product-price">$2400.00</h2>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-0" class="single-product">
                <div class="part-1">
                  {/*  <span class="new">Nuevo</span> */}
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">
                    Harina de Maiz Precocida - El Sauzalito
                  </h3>
                  <h2 class="product-price">$300.00</h2>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-5" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">
                    Harina de Maiz Precocida - Molino Villafañe
                  </h3>
                  <h2 class="product-price">$430.00</h2>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-6" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">
                    Harina de Maiz Tradicional - Molino Villafañe
                  </h3>
                  <h2 class="product-price">$300.00</h2>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-42" class="single-product">
                <div class="part-1">
                  <span class="new">Nuevo</span>
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">Leche Entera - Del Tambo</h3>
                  <h2 class="product-price">$340.00</h2>
                </div>
              </div>
            </div>
            {/*  <div class="col-md-6 col-lg-4 col-xl-3" 
       >
      <div id="product-42" class="single-product">
        <div class="part-1">
           <span class="new">Nuevo</span> 
          <ul></ul>
        </div>
        <div class="test-card part-2  border border-primary">
          <h3 class="product-title">
            Leche Entera - Tregar
          </h3>
          <h2 class="product-price">$240.00</h2>
        </div>
      </div>
    </div>  */}
    
    <div class="col-md-6 col-lg-4 col-xl-3" 
       >
      <div id="product-46" class="single-product">
        <div class="part-1">
          <div class="part-1">
            <span class="new">Pocas unidades</span>
            <ul></ul>
          </div>
          <ul></ul>
        </div>
        <div class="test-card part-2  border border-primary">
          <h3 class="product-title">Azúcar - Mitaí</h3>
          <h2 class="product-price">$600.00</h2>
        </div>
      </div>
    </div>

  {/*   <div class="col-md-6 col-lg-4 col-xl-3" 
       >
      <div id="product-9" class="single-product">
        <div class="part-1">
          <ul></ul>
        </div>
        <div class="test-card part-2  border border-primary">
          <h3 class="product-title">Leche Descremada - Veronica</h3>
          <h2 class="product-price">$260.00</h2>
        </div>
      </div>
    </div> */}
    <div class="col-md-6 col-lg-4 col-xl-3" 
       >
      <div id="product-8" class="single-product">
        <div class="part-1">
          <ul></ul>
        </div>
        <div class="test-card part-2  border border-primary">
          <h3 class="product-title">Leche en Polvo - La Paulina</h3>
          <h2 class="product-price">$1800.00</h2>
        </div>
      </div>
    </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-48" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">
                    Huevos x Docena - Avicola Don Tito
                  </h3>
                  <h2 class="product-price">$580.00</h2>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-14" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">
                    Huevos x Maple - Avicola Don Tito
                  </h3>
                  <h2 class="product-price">$1450.00</h2>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-10" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">Pan - CasaPan</h3>
                  <h2 class="product-price">$400.00</h2>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-11" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">Polenta - Molino Villafañe</h3>
                  <h2 class="product-price">$250.00</h2>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-12" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">Queso Rallado 40g - La Paulina</h3>
                  <h2 class="product-price">$240.00</h2>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-13" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">Queso Rallado 150g - La Paulina</h3>
                  <h2 class="product-price">$770.00</h2>
                </div>
              </div>
            </div>

            <h2>Productos Congelados</h2>
            <hr style={{ backgroundColor: "#d80caf", height: "4px" }}></hr>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-18" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">Batata - Nutrifor</h3>
                  <h2 class="product-price">$400.00</h2>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-23" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">Cebollita verde - Nutrifor</h3>
                  <h2 class="product-price">$500.00</h2>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-24" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">Mandioca - Nutrifor</h3>
                  <h2 class="product-price">$600.00</h2>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-20" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">Mix de Vegetales - Nutrifor</h3>
                  <h2 class="product-price">$500.00</h2>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-21" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">Morron verde - Nutrifor</h3>
                  <h2 class="product-price">$500.00</h2>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-22" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">Perejil - Nutrifor</h3>
                  <h2 class="product-price">$500.00</h2>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-16" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">Remolacha - Nutrifor</h3>
                  <h2 class="product-price">$400.00</h2>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-17" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">Zanahoria - Nutrifor</h3>
                  <h2 class="product-price">$400.00</h2>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-19" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">Zapallito - Nutrifor</h3>
                  <h2 class="product-price">$400.00</h2>
                </div>
              </div>
            </div>

           {/*  <h2>Pescados</h2>
            <hr style={{ backgroundColor: "#34AD54", height: "4px" }}></hr>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-45" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">Pati en Rodajas</h3>
                  <h2 class="product-price">$1200.00</h2>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-44" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">Sabalo Entero</h3>
                  <h2 class="product-price">$1100.00</h2>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-43" class="single-product">
                <div class="part-1">
                  <ul></ul>
                </div>
                <div class="test-card part-2  border border-primary">
                  <h3 class="product-title">Surubi en Rodajas</h3>
                  <h2 class="product-price">$2600.00</h2>
                </div>
              </div>
            </div> */}

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

         <div class="col-md-6 col-lg-4 col-xl-3">
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
            </div>
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

export default Punto1;
