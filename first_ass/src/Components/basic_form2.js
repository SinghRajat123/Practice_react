import react,{useState} from "react";




const BasicForm = () => {
    
    let [form,setform] = useState("");
    let [update,setupdate] = useState(false);
    console.log(form);

    let handleevent = (event)=>{
        setform(event.target.value);
        setupdate(false);
    }

    return(
        <>
       
        <input type="text" name="inputname" placeholder="Enter the text here"  onChange={handleevent}></input>

        <button  onClick={()=>{setupdate(true)}}>Submit</button>

        {update==true ?<p>{form}</p> :null}

        
        
        </>
    )
}

export default BasicForm;