import './App.css';
import React, {useState} from 'react';
import Axios from 'axios';

function App() {
  const [imageSelected, setImageSelected] = useState('')

  const upLoadImage = () => {
    const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset", "izuo6byp")

    Axios.post("https://api.cloudinary.com/v1_1/dtwqa6uu9/image/upload", formData).then((response) => {
      console.log(response)
    });
  
  }

  return (
    <div className="App">
      <input
          type='file'
          onChange={(event) => {
            setImageSelected(event.target.files[0]);
          }}
        />
        <button onClick={upLoadImage}> Upload Image</button>

        
    </div>
  );
}

export default App;
