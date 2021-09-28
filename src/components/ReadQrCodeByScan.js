import { Button } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import QrReader from 'react-qr-reader';

const ReadByScanQrCode = () => {
    const [scanResultFile, setScanResultFile] = useState('');
    const qrRef = useRef(null);

    const handleErrorFile = (error) => {
        console.log(error);
    }

    const handleScanFile = (result) => {
        if(result) {
            setScanResultFile(result);
        }
    }

    const generateTextFromQrCode = () => {
        qrRef.current.openImageDialog();
    }


    return (
        <div className="container">
            { scanResultFile ?
            (
                <div className="text">
                    <h3>Scanned Code : </h3>
                    <p> {scanResultFile}  </p> 
                    <div className="btn2">
                        <Button 
                            variant="contained" 
                            color="secondary"
                            onClick={()=> setScanResultFile('')}>  Return
                        </Button>
                    </div>
                </div>
            )
            :
            (
                <div>
                    
                        <Button 
                            variant="contained" 
                            color="primary"
                             onClick={()=> generateTextFromQrCode()}>  Scan QR Code
                         </Button>
                

                    <QrReader
                        //Scan props
                        ref={qrRef}
                        delay={300}
                        onError={handleErrorFile}
                        onScan={handleScanFile}
                        legacyMode={true}
                    />
                </div>
            )
}
        </div>
    );
};

export default ReadByScanQrCode;