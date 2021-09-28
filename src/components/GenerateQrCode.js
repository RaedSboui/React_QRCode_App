import { Button, TextareaAutosize } from '@material-ui/core';
import React, { useState } from 'react';
import QRCode from 'qrcode';
import '../styles/GenerateQrCode.css'


const GenerateQrCode = () => {
    const [text, setText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    
  
    const generateQrCode = async () => {
      try {
        const response = await QRCode.toDataURL(text);
        setImageUrl(response);
      }
      catch (error) {
        console.log("Error has been encountered : " + error);
      }
    }


    return (
        <div className="container">
            { (imageUrl) ? 
            (
              <div className="text">
                <div className="image">
                  <a href={imageUrl} title='Click to download' download>
                    <img src={imageUrl} alt="QrCode" />
                  </a>
                </div>
                <div className="btn btn1">
                  <Button 
                    variant="contained" 
                    color="secondary"
                    onClick={()=> setImageUrl('')}>  Return
                  </Button>
                </div>
              </div>
            ) 
            :  
            (
              <div className="text">
                
                <h3>Enter your text : </h3>
                <TextareaAutosize className="textarea" minRows={10} onChange={(e) => setText(e.target.value)}/>
                
                <div className="btn btn2">
                <Button 
                  variant="contained" 
                  color="primary"
                  onClick={()=> generateQrCode()}>  Generate
                </Button>
                </div>
              </div>
            ) 
            } 
        </div>
    );
};

export default GenerateQrCode;