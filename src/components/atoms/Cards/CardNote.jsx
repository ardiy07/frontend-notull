import React from 'react'
import './cardnote.css';

const CardNote = () => {
    return (
        <div className="card md:w-80 w-60 shadow-xl image-full bg-card-note">
            <div className="card-body">
                <h2 className="card-title">Judul Catatan</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions md:justify-end justify-center">
                    <button className="btn btn-primary">Lihat Catatan</button>
                </div>
            </div>
        </div>
    )
}

export default CardNote