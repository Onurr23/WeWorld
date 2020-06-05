export function signup(user) {

    return(dispatch,getState,{getFirebase,getFirestore})=>{

        const firebase = getFirebase();
        const firestore = getFirestore();

       firebase.auth().createUserWithEmailAndPassword(user.email,user.password).then((response)=>{

           return firestore.collection('users').doc(response.user.uid).set({

                name : user.name,
                email : user.email,
                age : user.age,
                id : response.user.uid,
                image : user.img,
               confirmed : [],
                passed : [],
                lookAt : 0,
               country : user.country,
               description : user.description

           })

       }).then((response)=>{

           dispatch({type : 'SIGN_UP_SUCCESS',payload : 'SIGNED UP !'})

       }).catch(err=>{

            dispatch({type :'SIGN_UP_ERROR',payload : err.message})

       })

    }
  }

  export function login(user) {

    return(dispatch,getState,{getFirebase,getFirestore})=>{

        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(user.email,user.password).then(response=>{

            dispatch({type : 'SIGN_IN_SUCCESS', payload : 'SIGNED IN !' })

        }).catch(err=>{

            console.log(err.message)

            dispatch({type :'SIGN_IN_ERROR',payload : err.message})

        })


    }

  }

  export function signout(){

    console.log('ÇIKIŞ')

    return(dispatch,getState,{getFirebase})=>{

        const firebase = getFirebase();

        firebase.auth().signOut().then(response=>{

            dispatch({type : 'SIGN_OUT', payload : 'SIGNED OUT !'})

        })

    }

  }

export default {signup,login,signout};
