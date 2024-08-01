import React,{useState} from "react";




const App=()=> {
  const[lat,setLat]=useState(0)
  const[long,setLong]=useState(0)
  const[month,setMonth]=useState(new Date().getMonth()+1)
 
  const[hemisphere,setHemisphere]=useState("")

  function getlocation(){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition((positions)=>{
        setLat(positions.coords.latitude)
        setLong(positions.coords.longitude)

        if (positions.coords.latitude>0){
          setHemisphere("Northern Hemisphere")
        }

        else if(positions.coords.longitude<0){
          setHemisphere("Southern Hemisphere")
        }

        else{
          setHemisphere("Equator")
        }
        
      })
    }
  }


  return (
    <div >
      <h1>lat:{lat}</h1>
      <h1>long:{long}</h1>
      <h1>Hemis:{hemisphere}</h1>
      <h1>Month:{month}</h1>
      <button onClick={getlocation}> Get location</button>
      
    </div>
  );
}

export default App;
