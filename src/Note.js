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


    /*
    Jordan todo:
    1 - When there is an id from /note/:id, then setActiveNote to that id
        When there is no id (meaning on /home user clicks on "Create new",
        then add a new note
    2 - Use box-shadow on note-card
    3 - Add some padding to the page so that "Create new" is not at the left edge of the page
     */

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