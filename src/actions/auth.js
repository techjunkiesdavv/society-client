
import * as api from '../api/index.js';

export const signin =async (formData)=>{

try {
    console.log(formData)
    const {data}=await api.signIn(formData);

    
    localStorage.setItem('profile',JSON.stringify(data));
    return data;

} catch (error) {
    console.log(error);
}

}



// export const signup = (formData)=>async(dispatch)=>{

//     try {
//         console.log("sign",formData);
        
//     const {data}=await api.signUp(formData);
    
//     localStorage.setItem('profile',JSON.stringify(data));
//         history.push('/');
    
//     } catch (error) {
//         console.log(error);
//     }
    
//     }