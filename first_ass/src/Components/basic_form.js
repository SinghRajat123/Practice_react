import react,{useState} from "react";

const BasicForm = () => {
    
    let [form,setform] = useState("");
    console.log(form);
    return(
        <>
       
        <input type="text" name="inputname" placeholder="Enter the text here"  onChange={(event)=>{setform(event.target.value)}}></input>
        
        <p>{form}</p>

        
        
        </>
    )
}

export default BasicForm;