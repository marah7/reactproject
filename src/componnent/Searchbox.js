import React from 'react';

const Searchbox=({searchfield,searchchange})=>{
    return(
        <div>
            <input
            className='pa3 ba b--green bg-lightest-blue'
         type='search' 
         placeholder='seach robot from down'
         onChange={searchchange}
         />
        </div>
        
    );

}
export default Searchbox