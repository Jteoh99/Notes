
//https://www.youtube.com/watch?v=Law7wfdg_ls  ==> React Router

//https://youtu.be/ulOKYl5sHGk?t=1841 ==> Notes app tutorial

// https://github.com/Jteoh99/Notes

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Note from "./Note";
import {useState} from "react";
import {BsPlusLg} from 'react-icons/bs';

function App() {
    const [notes, setNotes] = useState([]);
    const [activeNote, setActiveNote] = useState(false);

    return (
      <Router>
        <div className="App">

          <Routes>

            <Route path="/" element={<
                Home notes={notes}
                />}
            />
            <Route path="/note" exact element={
                <Note notes={notes}
                      setNotes={setNotes}
                      activeNote={activeNote}
                      setActiveNote={setActiveNote}
                />}
            />
            <Route path="/note/:id" element={
                <Note notes={notes}
                      setNotes={setNotes}
                      activeNote={activeNote}
                      setActiveNote={setActiveNote}
                />}
            />

          </Routes>
        </div>
      </Router>
  );
}



const Home = ({notes}) => {

    return <div className="homepage">
        <div className="heading">
            <h1>My notes</h1>
            <div className="note-link"><Link to="/note">+ New note</Link></div>
        </div>


        <div className="notes-container">

            {notes.map((note) => {
                return <Link to={`/note/${note.id}`}>
                        <div className="note-card">
                            <div className="card-title">
                                <strong>{note.title}</strong>
                            </div>
                            <div className="card-body">
                                {note.body}
                            </div>
                        </div>
                    </Link>

            })}
        </div>

    </div>
}


export default App;
