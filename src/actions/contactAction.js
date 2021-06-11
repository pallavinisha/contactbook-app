import {CREATE_CONTACT,
     GET_CONTACT,
     UPDATE_CONTACT,
     SELECT_CONTACT,
     CLEAR_CONTACT, 
     DELETE_CONTACT,
    DELETE_SELECTED, 
    SEARCH_CONTACT} from '../constant/types';




export const addContact = (contact) => ({

        type: CREATE_CONTACT,
        payload: contact, 
    });

//get a contact

export const getContact = (id) => ({
    type: GET_CONTACT,
    payload: id,
})

//UPDATE CONTACT
export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact,
})

 //DELETE CONTACT
 export const deleteContact = (id) => ({
     type: DELETE_CONTACT,
     payload: id,
 })

 //clear CONTACT
 export const clearAllContact = () => ({
     type: CLEAR_CONTACT,
 })
 
 //SELECT CONTACT
export const selectAllContact = (id) => ({
    type: SELECT_CONTACT,
    payload:id,
})
//DELETE SELECTED CONTACTSS
export const deleteAllContact = () => ({
    type: DELETE_SELECTED,
});

//SEARCH CONTACT
export const showContacts= (contact) => ({
    type: SEARCH_CONTACT,
    payload:contact,
})

