import { Button } from "@material-ui/core";
import React, { useState } from "react";
import QrReader from "react-qr-reader";
import "../styles/ReadQrCodeByCam.css";

const ReadQrCodeByCam = () => {
  const [scanResultWebCam, setScanResultWebCam] = useState("");

  const handleErrorWebCam = (error) => {
    console.log(error);
  };

  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result);
    }
  };

  return (
    <div className="container">
      { scanResultWebCam ? (
        <div>
          <div className="result">
            <h3>Scanned Code : </h3>
            <div className="text">
              <p> {scanResultWebCam} </p>
            </div>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setScanResultWebCam("")}
              >
                Return
              </Button>
          </div>
        </div>
      ) : (
        <div className="cam">
          <QrReader
            //Web Cam params
            delay={300}
            onError={handleErrorWebCam}
            onScan={handleScanWebCam}
          />
        </div>
      )}
    </div>
  );
};

export default ReadQrCodeByCam;
