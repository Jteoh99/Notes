import {BsFillTrashFill} from 'react-icons/bs';
import {BsPlusLg} from 'react-icons/bs';
import {Link} from "react-router-dom";


const Sidebar = ({notes, onAddNote, onDeleteNote, activeNote, setActiveNote}) => {

    return <div className="app-sidebar">
        <div className="app-sidebar-header">
            <Link to="/">Home</Link>
            <BsFillTrashFill className="delete-icon" onClick={onDeleteNote} />
            <BsPlusLg className="add-icon" onClick={onAddNote} />
        </div>

        <div className="app-sidebar-notes">
        {notes.map((note) => (

            <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} onClick={() => setActiveNote(note.id)}>

                <div className="sidebar-note-title">
                    <strong>{note.title}</strong>
                </div>

                <p>{note.body && note.body.substr(0, 50) + "..."}</p>

                
            </div>
        ))}

        </div>
    </div>;
}

export default Sidebar;