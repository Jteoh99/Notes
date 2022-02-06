import Sidebar from "./Sidebar";
import Main from "./Main";
import {useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

const Note = ({notes, setNotes, activeNote, setActiveNote}) => {


    let { id } = useParams(); // for /note/123 e.g.




    useEffect(() => {
        if (id) {
            setActiveNote(id);
        } else {
            onAddNote();
        }
    }, []);


    const onAddNote = () => {

        const newId = uuidv4();
        const newNote = {
            id: newId,
            title: "Untitled Note",
            body: ""
        };

        setNotes([newNote, ...notes]);
        setActiveNote(newId);
    };

    const onUpdateNote = (updatedNote) => {

        const updatedNotesArray = notes.map((note) => {

            if(note.id === activeNote) {
                return updatedNote;
            }

            return note;
        });

        setNotes(updatedNotesArray);
    };

    const onDeleteNote = () => {
        setNotes(notes.filter(note => note.id !== activeNote));
    }

    const getActiveNote = () => {
        return notes.find((note) => note.id === activeNote);
    }

    return (
        <div className="App">
            <Sidebar
                notes={notes}
                onAddNote={onAddNote}
                onDeleteNote={onDeleteNote}
                activeNote={activeNote}
                setActiveNote={setActiveNote}
            />

            <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>

        </div>
    );
}

export default Note;
