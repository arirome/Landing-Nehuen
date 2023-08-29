
import Control from "react-leaflet-custom-control";
import ubiFija from "../../Components/Assets/Imgs/Mapa//ubi3.webp"
import ubiInterior from "../../Components/Assets/Imgs/Mapa/ubiInterior.webp"
import ubiBarrio from "../../Components/Assets/Imgs/Mapa/ubiBarrio.webp"
import ubiVisitado from "../../Components/Assets/Imgs/Mapa/visitado3.webp"

const MapaToolbar = () => {

  const handleChangeSelect = (e) => {
    // console.log(e.target.value);
    setCampania(e.target.value);
  };
  return (
    <Control prepend position='bottomleft'>
    {/* <div className="row">

        <div style={{backgroundColor:"white"}}>
            <div className="row d-inline mb-3">
                    <img src={ubiInterior} style={{width:"50px"}}></img> <h6>Puntos Fijos</h6>  
            </div>
        </div>
    </div> */}
    <div className="">
        <div style={{backgroundColor:"rgba(255, 255, 255, 0.363)", width:"200px", height:"230px", borderRadius:"30px"}}>
            <br/>
           <div >
           <div style={{float:"left"}}>
                <img src={ubiFija}  alt="img" style={{width:"30px"}}/>
            </div>
            <div>
                <h6>
                    Puntos Fijos
                </h6>
            </div>
            <hr/>
            <div style={{float:"left"}}>
                <img src={ubiInterior}  alt="img" style={{width:"30px"}}/>
            </div>
            <div>
                <h6>
                    Puntos Del Interior
                </h6>
            </div>
            <hr/>
            <div style={{float:"left"}}>
                <img src={ubiBarrio}  alt="img" style={{width:"30px"}}/>
            </div>
            <div>
                <h6>
                    Puntos De Barrios
                </h6>
            </div>
            <hr/>
            <div style={{float:"left"}}>
                <img src={ubiVisitado}  alt="img" style={{width:"30px"}}/>
            </div>
            <div>
                <h6>
                    Puntos Visitados
                </h6>
            </div>
           </div>
        </div>
    </div>

   
  </Control>
  );
};

export default MapaToolbar;