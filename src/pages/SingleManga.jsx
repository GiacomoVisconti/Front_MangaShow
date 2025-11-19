import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import '../App.css'

export default function SingleManga() {
    const [manga, setManga] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/api/mangas/${id}`)
            .then(res => res.json())
            .then(data => {
                setManga(data)
                console.log(data);

            })
    }, [])
    return (
        <div className="container">

            <h1 className="display-3 text-center pt-5">{manga?.title}</h1>
            <div className="row py-5">
                <div className="col-12 d-flex gap-5">
                    {/* IMMAGINE */}
                    <div className="col-8 d-flex justify-content-center">
                        <img className="img-fluid shadow-lg" src={manga?.image_url} alt="" />
                    </div>

                    {/* INFORMAZIONI */}
                    <div className="col-4">
                        <div className="d-flex flex-column gap-3 fs-5 pt-5">
                            <div className="d-flex gap-2">
                                <p className="fw-bold">Year of Publication: </p>
                                <span>{manga?.year_of_publication}</span>
                            </div>
                            <p>{manga?.isConcluded ? (<span class="text-uppercase text-success fw-bold">Concluded</span>) : (<p class="text-uppercase text-warning fw-bold">On going</p>)}</p>
                            <div className="d-flex flex-column">
                                <span className="fw-bold">Synopsis: </span>
                                <span>{manga?.synopsis}</span>
                            </div>
                            <p>Author: <span>{manga?.author.firstName} {manga?.author.lastName}</span></p>
                            <div>
                                <span>Genres: </span>
                                <div className="d-flex gap-3">
                                    {manga?.genres.map((element) => {
                                        return (
                                            <span className={
                                                element.name === 'Commedia' ? 'badge bg-warning text-dark' :
                                                    element.name === 'Fantasy' ? 'badge bg-info text-dark' :
                                                        element.name === 'Horror' ? 'badge bg-danger' :
                                                            element.name === 'Josei' ? 'badge bg-pink' :
                                                                element.name === 'Mecha' ? 'badge bg-secondary' :
                                                                    element.name === 'Seinen' ? 'badge bg-dark' :
                                                                        element.name === 'Shojo' ? 'badge bg-rose' :
                                                                            element.name === 'Shonen' ? 'badge bg-primary' :
                                                                                element.name === 'Sport' ? 'badge bg-success' :
                                                                                    element.name === 'Thriller' ? 'badge bg-danger text-white' :
                                                                                        'badge bg-light text-dark'
                                            }
                                            >{element.name}</span>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* RECENSIONI */}
            <div className="py-5">
                Recensioni
            </div>
        </div>


    )
}