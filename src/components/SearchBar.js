import { useState } from "react";
function SearchBar({onSubmit}) {
const [term, setTerm] = useState([""]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("passing term is :" ,term)
    onSubmit(term);


  };
  const handleChange = (event) => {
    console.log(event.target.value);
    setTerm(event.target.value);
  };
  return (<div>
      <form onSubmit = {handleFormSubmit} >
        <label>Enter a word to search for image :</label>
        <input value = {term} onChange={handleChange} />
      </form>
    
    </div>)
  
  
}

export default SearchBar;
