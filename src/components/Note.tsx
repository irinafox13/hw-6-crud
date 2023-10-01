type noteProps = {
    text: string,
    remove: (id: string) => void,
}

const Note = ({ text, remove }: noteProps) => {
    return (
        <div className="note">
            <button className="note-close" type="button" onClick={(id) => {remove(id)}}>X</button>
            <div className="note-text">{text}</div>
        </div>
    );
}

export default Note;