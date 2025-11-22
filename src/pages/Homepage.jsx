import Jumbo from "../components/Jumbo";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {

    const [mangas, setMangas] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8080/api/mangas/')
            .then(res => res.json())
            .then(data => {

                console.log(data);
                setMangas(data)

            })
    }, [])

    return (
        <>
            <Jumbo mangas={mangas}></Jumbo>

            <div className="container py-5">

                <h3 className="text-center py-5 display-3">Sfoglia il nostro catalogo</h3>

                <div className="row d-flex">
                    {
                        mangas?.map((element, index) => {
                            return (
                                <Link key={index} to={`/mangas/${element.id}`} className="col-sm-12 col-md-6 col-lg-3 py-3 d-flex justify-content-center">
                                    <div className="manga-card ">
                                        <img src={element.image_url} alt={element.title} className="manga-cover" />
                                        <div className="manga-page">
                                            <div className="manga-trama">
                                                <h5 className="mb-2 fw-bold">{element.title}</h5>
                                                <p className="mb-0">{element.synopsis}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>



                                // <div className="col-3 h-100  py-3">
                                //     <img className="img-fluid img-card h-100" src={element.image_url} alt="image" />
                                // </div>
                            )
                        })
                    }

                </div>



            </div>


        </>
    )
}