import { firestore } from "firebase";

export const createProject = (project)  => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //Make a call to Database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Natalie',
            authorLastName: 'Rushman',
            authorId: 12345,
            createdAt: new Date()
        }).then(()=> {
            dispatch({type:'CREATE_PROJECT', project:project})
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR', err})
        })

    }
}