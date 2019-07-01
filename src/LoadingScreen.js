import React from 'react';
import './css/Loader.css';

function LoadingScreen(){
  return(
    <div className="video-background">
       <div className="video-foreground">
        <iframe src="https://www.youtube.com/embed/rTiziX53Czc?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=bog4VzMWP20"
          frameborder="0"
            allowfullscreen tabindex="-1"> </iframe>
           <h1 className="knockout-text">
            <span className="splitOne">PIN
            </span>
            <span className="splitTwo">
            TRO
            </span>
           </h1>
       </div>
   </div>
  );

}
export default LoadingScreen;
