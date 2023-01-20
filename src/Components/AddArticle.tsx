import React, { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addArticle } from '../Slice/DataSlice';
export const AddArticle = () => {
    //state for input box
    const [postName, setPostName] = useState("");
    const [description, setDescription] = useState("")
    const [msg, setMsg] = useState("")
    // method for dispaching action
    const dispatch = useDispatch();
    // Taking value from user
    const PostNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPostName(e.target.value)
    }
    const DescriptionHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)
    }
    // add button funcnality
    const AddHandler = () => {
        // checking validation
        if (postName === "") {
            setMsg("Please write post name")
            document.getElementById("name")?.focus()

        }
        else if (description === "") {
            setMsg("Please write description ")
            document.getElementById("description")?.focus()
        }
        else {
            // Sendin user data to  reducer
            dispatch(addArticle({
                id: Math.random(),
                postName: postName,
                description: description
            }))
            // Msg displaying
            setMsg("Added")
        }
    }
    return (
        <div className='Container'>
            <div className='card'>
                <div className="input-group mb-3 p-3 rounded-pill">
                    <input type="text"
                        className="form-control"
                        placeholder="new Post"
                        aria-label="Username"
                        id='name'
                        onChange={PostNameHandler}
                        aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3 p-3">
                    <input type="text"
                        id='description'
                        className="form-control"
                        placeholder="this is description.."
                        aria-label="Username"
                        onChange={DescriptionHandler}
                        aria-describedby="basic-addon1" />
                </div>
                <button className='btn btn-info rounded-pill m-3 mb-3' onClick={AddHandler}>ADD</button>
            </div>
            {msg === "" ? null : <div className={`${msg === "Added" ? "alert alert-success mt-3" : "alert alert-danger mt-3"}`} role="alert">
                <strong> {msg}</strong>
                <button style={{ float: "right" }} type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>}
        </div>
    )
}
