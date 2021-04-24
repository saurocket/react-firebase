import {useContext, useState} from "react";
import {AlertContext} from "../context/alert/alertContext";
import {FirebaseContext} from "../context/firebase/firebaseContext";


export const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)
const submitHandler = (event) => {
        event.preventDefault()

    if(value.trim()){
        //....
        firebase.addNote(value.trim()).then(() => {
alert.show('case was created', 'success')
        }).catch(()=> {
            alert.show('case was not created', 'danger')
        })
        alert.show('case was created', 'success')
        setValue('')
    }else{
        alert.show('enter case')
    }


}

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the name of the case"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>


        </form>
    )
}