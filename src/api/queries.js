 const Contactquery = '*[_type == "contact"]';

 export const getquery=(text)=>{

    switch(text)
    {
        case  'contact':    return Contactquery ;

        default : return -1 ; // check 
    }

 }