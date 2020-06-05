export function confirm(val,newLookAt,newAdded) {

    return(dispatch,getState,{getFirestore})=>{

        let firestore = getFirestore();
        let user = getState().firebase.profile.id

        firestore.collection('users').doc(user).update({

            lookAt : newLookAt

        }).then(()=>{
           if(val===1){

               return firestore.collection('users').doc(user).update({

                   confirmed : newAdded

               })

           }
        })

    }

}
export function updateUser(user) {

    return(dispatch,getState,{getFirestore})=>{

        let firestore = getFirestore();
        let uid = getState().firebase.auth.uid

        firestore.collection('users').doc(uid).update({

            name : user.name,
            age : user.age,
            description : user.description,
            country : user.country,
            image : user.image

        }).then(()=>{

            return({type : 'UPDATED_USER',payload : 'Successfully Updated !'})

        })
    }

}

export function matchUser(newFriends,id,usersFriends) {


    return(dispatch,getState,{getFirebase,getFirestore})=>{

        let firestore = getFirestore();
        let uid = getState().firebase.auth.uid;
        let profile = getState().firebase.profile;


        firestore.collection('users').doc(uid).update({

            friends : newFriends

        }).then(()=>{

            return firestore.collection('users').doc(id).update({


                friends : usersFriends

            }).then(()=>{

               console.log('DONE !')

            })

        })

    }

}

export default {confirm,updateUser,matchUser};
