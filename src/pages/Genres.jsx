import { useState, useEffect } from "react";
import '../App.css'

export default function Genres() {
    const [genres, setGenres] = useState(null);
    const [img, setImg] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/api/genres/')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setGenres(data)
                console.log(data[2].mangas);


            })
    }, [])

    return (
        <div className="container my-5">
            <p className="display-3 text-center pb-5">List of Genres</p>
            <div className="row d-flex gap-5">
                {
                    genres?.map((element, index) => {
                        let manga = element.mangas[Math.floor(Math.random() * element.mangas.length)]
                        return (
                            <>
                                <div key={index} className="row py-4">
                                    <div className="col-8 d-flex flex-column justify-content-center">
                                        <span className="display-1 fw-bold pb-3">{element.name}</span>
                                        <p className="fs-4 fst-italic">{element.description}</p>

                                    </div>
                                    <div className="col-4 d-flex flex-column justify-content-center">
                                        <div className="genre-img">
                                            <img className="" src={manga?.image_url || 'https://placehold.co/400x600?text=No+Image'} alt="" />
                                        </div>


                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>

        </div >
    )

}