import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export const LoadImage = (props)=>{
    const onInit = () => {
        
        console.log('lightGallery has been initialized');
    };
  return(<>
  
     <LightGallery
                onInit={onInit}              
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href={process.env.REACT_APP_API_URL +"/assets/"+props.src}>
                View Image
                </a>
            
            </LightGallery>
    {/* <img className="img img-fluid" src = {process.env.REACT_APP_API_URL +"/assets/"+props.src} alt= "" /> */}
    </>)
}