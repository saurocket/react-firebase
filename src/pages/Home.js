import {Form} from "../Components/Form";
import {Notes} from "../Components/Notes";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {useContext, useEffect} from "react";
import {Loader} from "../Components/Loader";


export const Home = () => {
  const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    },[])



    return (
        <>
          <Form/>
          <hr/>
            {loading ? <Loader/> : <Notes notes={notes} onRemove={removeNote}></Notes>}

        </>
    )
}