import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// all media imports

// comedy
import kick from './comedy/kick.png'
import jalsa from './comedy/jalsa.jpg'
import khaleja from './comedy/khaleja.jpg'
import nenuRowdy from './comedy/nenuRowdy.jpg'
import venky from './comedy/venky.jpg'

// romance
import aaMayaChesave from './romance/aaMayaChesave.jpg'
import gharshana from './romance/gharshana.jpg'
import oohaluGusagusaLade from './romance/oohaluGusagusaLedenu.jpg'
import oye from './romance/oye.jpg'
import rajaRani from './romance/rajaRani.jpg'
import seventhSense from './romance/seventhSense.jpg'

function Watch() {
  let location = useLocation();
  let navigate = useNavigate();

  console.log(location, location.state);

  let movie_url = location.state?.movie_url;
  let movie_category = location.state?.category;

  return (
    <div style={{ height: "100vh", color: "white" }}>
      <h1>Watch Movie</h1>
      <div className='videoElement' style={{ marginBottom: "20px" }}>
        {
          // Using dangerouslySetInnerHTML to render the embed HTML
          <div style={{ width: "95vw", height: "80vh" }} dangerouslySetInnerHTML={{ __html: movie_url }} />
        }
      </div>
      <p>Category: {movie_category}</p>
      <div>
        {
            movie_category == "comedy" ?
            <div>
                <div className='filmOuterBox'>
                    <div className='filmInnerBox' onClick={(event)=>{navigate('/user/watch',
                        {state:{category:"comedy",movie_url:`<iframe width="853" height="480" src="https://www.youtube.com/embed/Rb8GCqEv1qQ" title="Kick Telugu Full Movie | Ravi Teja And Ileana Action Comedy Movie | Sayaji Shinde | Cinema Theatre" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`}}
                    )}}>
                        <img className='InnerImage' src={kick}/>
                        <p>kick</p>
                    </div>


                    <div className='filmInnerBox' onClick={(event)=>{navigate('/user/watch',
                        {state:{category:"comedy",movie_url:`<iframe width="853" height="480" src="https://www.youtube.com/embed/68wSTlrw_RQ" title="Jalsa Telugu Full Movie || Pawan kalyan , Ileana D&#39;Cruz" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`}}
                    )}}>
                        <img className='InnerImage' src={jalsa}/>
                        <p>jalsa</p>
                    </div>



                    <div className='filmInnerBox' onClick={(event)=>{navigate('/user/watch',
                        {state:{category:"comedy",movie_url:`<iframe width="853" height="480" src="https://www.youtube.com/embed/RaChQXib_f8" title="Mahesh Babu And Anushka Shetty Fantasy/Action &amp; Comedy Khaleja Full Movie || First Show Movies" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`}}
                    )}}>
                        <img className='InnerImage' src={khaleja}/>
                        <p>khaleja</p>
                    </div>




                    <div className='filmInnerBox' onClick={(event)=>{navigate('user/watch',
                        {state:{category:"comedy",movie_url:`<iframe width="853" height="480" src="https://www.youtube.com/embed/7UHqRQHU-oY" title="Nenu Rowdy Ne Full Movie - Latest Telugu Full Movies - Nayantara, Vijay Sethupathi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`}}
                    )}}>
                        <img className='InnerImage' src={nenuRowdy}/>
                        <p>nenu Rowdy</p>
                    </div>



                    <div className='filmInnerBox' onClick={(event)=>{navigate('user/watch',
                        {state:{category:"comedy",movie_url:`<iframe width="853" height="480" src="https://www.youtube.com/embed/orriOWDPRQc" title="Venky  Full Length Telugu Movie || Ravi Teja || Sneha || #Gangothrimovies" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`}}
                    )}}>
                        <img className='InnerImage' src={venky}/>
                        <p>venky</p>
                    </div>

                </div>
            </div>
            :
            movie_category == "romance" ?
            <div>
                <div className='filmOuterBox'>
                    <div className='filmInnerBox' onClick={(event)=>{navigate('/user/watch',
                        {state:{category:"romance",movie_url:`<iframe width="853" height="480" src="https://www.youtube.com/embed/lFarwyaqxdU" title="Ye Maya Chesave Telugu Full Movie HD | Naga Chaitanya | Samantha | AR Rahman | Gautam Menon" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`}}
                    )}}>
                        <img className='InnerImage' src={aaMayaChesave}/>
                        <p>aa Maya Chesave</p>
                    </div>


                    <div className='filmInnerBox' onClick={(event)=>{navigate('/user/watch',
                        {state:{category:"romance",movie_url:`<iframe width="853" height="480" src="https://www.youtube.com/embed/iOS3ncvzomo" title="Gharshana Telugu Full Movie | Venkatesh, Asin, Gautham Menon | Sri Balaji Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`}}
                    )}}>
                        <img className='InnerImage' src={gharshana}/>
                        <p>gharshana</p>
                    </div>



                    <div className='filmInnerBox' onClick={(event)=>{navigate('/user/watch',
                        {state:{category:"romance",movie_url:`<iframe width="853" height="480" src="https://www.youtube.com/embed/2AqgajYiLs0" title="Oohalu Gusagusalade Telugu Full Movie | Naga Shourya, Rashi Khanna | Sri Balaji Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`}}
                    )}}>
                        <img className='InnerImage' src={oohaluGusagusaLade}/>
                        <p>oohalu GusagusaLade</p>
                    </div>




                    <div className='filmInnerBox' onClick={(event)=>{navigate('/user/watch',
                        {state:{category:"romance",movie_url:`<iframe width="853" height="480" src="https://www.youtube.com/embed/Zejiz78jQ2A" title="Oye Telugu Full Movie | Telugu Full Movies | Siddharth, Shamili, Sunil | Sri Balaji Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`}}
                    )}}>
                        <img className='InnerImage' src={oye}/>
                        <p>oye</p>
                    </div>



                    <div className='filmInnerBox' onClick={(event)=>{navigate('/user/watch',
                        {state:{category:"romance",movie_url:`<iframe width="853" height="480" src="https://www.youtube.com/embed/sRHeAPSwmYk" title="Raja Rani Telugu Full Movie || Aarya, Nayanthara, Jai, Nazriya Nazim || Ganesh Videos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`}}
                    )}}>
                        <img className='InnerImage' src={rajaRani}/>
                        <p>raja rani</p>
                    </div>



                    <div className='filmInnerBox' onClick={(event)=>{navigate('/user/watch',
                        {state:{category:"romance",movie_url:`<iframe width="853" height="480" src="https://www.youtube.com/embed/qRr-q2hid78" title="7th Sense Full Movie | Suriya | Shruti Haasan | A.R. Murugadoss | Blockbuster  Hit Movie ll SVV ll" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`}}
                    )}}>
                        <img className='InnerImage' src={seventhSense}/>
                        <p>7th Sense</p>
                    </div>

                </div>
            </div>
            :
            <p>404,Not found</p>
        }
      </div>
    </div>
  );
}

export default Watch;
