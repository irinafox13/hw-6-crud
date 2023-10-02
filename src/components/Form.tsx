import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from "./Note"

const Form = () => {
    const url = 'https://6514f901dc3282a6a3cdaeae.mockapi.io/notes';
    const [note, setNote] = useState('');
    const [APIData, setAPIData] = useState([]);
    
    const postData = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        if (note === '') {
            return
        }
        axios.post(url, {
            note
        })
        setNote('');
    }

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                const notes = response.data
                setAPIData(notes)
            })
    }, [setAPIData])

    const getData = () => {
        axios.get(url)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const deleteNote = (id: string) => {
        axios.delete(`${url}/${id}`)
            .then(() => {
                getData();
            })
    }

    return (
        <div>
            <h1 className='title'>
                Notes
                <button className='button' type='button' onClick={getData}>
                    <img src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGZpbGw9IiMwMDAwMDAiIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0idXBkYXRlLWFsdCIgZGF0YS1uYW1lPSJGbGF0IExpbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9Imljb24gZmxhdC1saW5lIj48cGF0aCBpZD0icHJpbWFyeSIgZD0iTTUuMDcsOEE4LDgsMCwwLDEsMjAsMTIiIHN0eWxlPSJmaWxsOiBub25lOyBzdHJva2U6IHJnYigwLCAwLCAwKTsgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOyBzdHJva2UtbGluZWpvaW46IHJvdW5kOyBzdHJva2Utd2lkdGg6IDI7Ij48L3BhdGg+PHBhdGggaWQ9InByaW1hcnktMiIgZGF0YS1uYW1lPSJwcmltYXJ5IiBkPSJNMTguOTMsMTZBOCw4LDAsMCwxLDQsMTIiIHN0eWxlPSJmaWxsOiBub25lOyBzdHJva2U6IHJnYigwLCAwLCAwKTsgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOyBzdHJva2UtbGluZWpvaW46IHJvdW5kOyBzdHJva2Utd2lkdGg6IDI7Ij48L3BhdGg+PHBvbHlsaW5lIGlkPSJwcmltYXJ5LTMiIGRhdGEtbmFtZT0icHJpbWFyeSIgcG9pbnRzPSI1IDMgNSA4IDEwIDgiIHN0eWxlPSJmaWxsOiBub25lOyBzdHJva2U6IHJnYigwLCAwLCAwKTsgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOyBzdHJva2UtbGluZWpvaW46IHJvdW5kOyBzdHJva2Utd2lkdGg6IDI7Ij48L3BvbHlsaW5lPjxwb2x5bGluZSBpZD0icHJpbWFyeS00IiBkYXRhLW5hbWU9InByaW1hcnkiIHBvaW50cz0iMTkgMjEgMTkgMTYgMTQgMTYiIHN0eWxlPSJmaWxsOiBub25lOyBzdHJva2U6IHJnYigwLCAwLCAwKTsgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOyBzdHJva2UtbGluZWpvaW46IHJvdW5kOyBzdHJva2Utd2lkdGg6IDI7Ij48L3BvbHlsaW5lPjwvc3ZnPg==' />
                </button>
            </h1>
            <div className='notes-list'>
                {APIData && APIData.length ? '' : 'Список пуст'}
                {
                    APIData
                        .map(note =>
                            <Note text={note.note} key={note.id} remove={() => deleteNote(note.id)} />
                        )
                }
            </div>
            <form className='form'>
                <label htmlFor="note">New note</label>
                <textarea className='form-textarea' value={note} name="note" id="note" onChange={(e) => setNote(e.target.value)}></textarea>
                <button className='button form-button' type='submit' onClick={postData}>
                    <img src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMSAxNkwxNSAxMk0xNSAxMkwxMSA4TTE1IDEySDNNNC41MTU1NSAxN0M2LjEzMDA3IDE5LjQxMiA4Ljg3OTU4IDIxIDEyIDIxQzE2Ljk3MDYgMjEgMjEgMTYuOTcwNiAyMSAxMkMyMSA3LjAyOTQ0IDE2Ljk3MDYgMyAxMiAzQzguODc5NTggMyA2LjEzMDA3IDQuNTg4MDMgNC41MTU1NSA3IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8L3N2Zz4=' />
                </button>
            </form>
        </div>
    )
}

export default Form;
