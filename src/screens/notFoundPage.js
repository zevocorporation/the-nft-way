import React from 'react'

//Importing media assets
import notfound from '../assets/images/notfound.svg'

const NotFoundPage = () => {
    
    const Styles = {
        grid:{
            marginTop:'5%',
            display:'grid',
            placeItems:'center',
            gridGap:'2em'
        },
        image:{
            margin:'0 auto'
        },
        title:{
            textAlign:'center',
            margin:'0 auto'
        },
        text:{
            textAlign:'center',
            margin:'0 auto'
        }
    }
    
    return (
        <div style={Styles.grid}>
           <img src={notfound} alt="404 not found" style={Styles.image} />
           <h3 style={Styles.title}>Page Not Found</h3>
           <p style={Styles.text}>
               Oops! We can’t seem to find the 
               page you are looking for. Try 
               going to the previous page or 
               to the Resources for more infomation
            </p>
        </div>
    )
}

export default NotFoundPage
