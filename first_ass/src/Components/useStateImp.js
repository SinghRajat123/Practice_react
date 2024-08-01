import react,{useState} from "react";

const IsLoggedIn = ()=>{

    let [isloggedin,setisloggedin]=useState(false);
    // let [data,setdata]=useState({username:'',password:''});

    let handlechange =()=>{
        setisloggedin(true);
 }
    
    


    return(
        <>

        {isloggedin===true?<p>Sucessfully logged in</p>:<form>
       

        
        <input placeholder="Enter Username"></input>
        <input placeholder="Password"></input>
        <button onClick={handlechange}>Submit</button>
        
        </form>}
        
        
        </>


    )

}

export default IsLoggedIn;
