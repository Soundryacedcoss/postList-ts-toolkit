import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteArticle } from '../Slice/DataSlice';

export const Article = () => {
    const Data = useSelector((store: any) => store.Slice)
    const dispatch = useDispatch()
    // Delete buttton functinality
    const DeleteHandler = (e: any) => {
        dispatch(deleteArticle({
            // Sending the button value to delete action for deleting post
            id: e
        }))
    }
    return (
        <div className='Container'>
            {Data.data.map((val: any) =>
                <div className='card'>
                    <div className='card-body'>
                        <div>
                            <h2>{val.postName}</h2>
                            <h5>{val.description}</h5>
                        </div>
                        <div style={{ float: "right" }}>
                            <button onClick={() => DeleteHandler(val.id)} className=" btn btn-danger rounded-pill rounded-lg">Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
