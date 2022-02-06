const Main = ({activeNote, onUpdateNote}) => {

    const onEditField = (key, value) => {

        onUpdateNote({
            ...activeNote,
            [key]:value

        })

    }

    if(!activeNote) return <div className="no-active-note">No Note Selected</div>

    return <div className="app-main">

        <div className="app-main-note-edit">

            <input type="text"
                   id="title"
                   value={activeNote.title}
                   onChange={(e) => onEditField("title", e.target.value)}
                   autoFocus />
            <textarea id="body"
                      value={activeNote.body}
                      onChange={(e) => onEditField("body", e.target.value)}
                      placeholder="Enter Text Here" />

        </div>

    </div>
}

export default Main;