import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import '../App.css'
import MangaReviews from "../components/MangaReviews";

export default function SingleManga() {
    const [manga, setManga] = useState(null);
    const { id } = useParams();
    const [isClicked, setIsClicked] = useState(false)
    let [formData, setFormData] = useState({
        user: '',
        vote: 0,
        comment: '',
        manga: { id }
    })

    function handleFormData(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        const url = 'http://localhost:8080/api/reviews/'
        console.log(formData);
        // e.preventDefault()
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(success => alert('Data loaded successfully'))
    }

    useEffect(() => {
        fetch(`http://localhost:8080/api/mangas/${id}`)
            .then(res => res.json())
            .then(data => {
                setManga(data)
                console.log(data);

            })
    }, [])
    return (
        <div className="container pb-5">

            <h1 className="display-3 text-center pt-5">{manga?.title}</h1>
            <div className="">
                <div className="row d-flex py-5">
                    {/* IMMAGINE */}
                    <div className="col-sm-12 col-md-8 col-lg-8 d-flex justify-content-center">
                        <img className="img-fluid shadow-lg" src={manga?.image_url} alt="" />
                    </div>

                    {/* INFORMAZIONI */}
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="d-flex flex-column gap-3 fs-5 pt-5">
                            <div className="d-flex gap-2">
                                <p className="fw-bold">Year of Publication: </p>
                                <span>{manga?.year_of_publication}</span>
                            </div>
                            <div>{manga?.isConcluded ? (<span className="text-uppercase text-success fw-bold">Concluded</span>) : (<p className="text-uppercase text-warning fw-bold">On going</p>)}</div>
                            <div className="d-flex flex-column">
                                <span className="fw-bold">Synopsis: </span>
                                <span>{manga?.synopsis}</span>
                            </div>
                            <p>Author: <span>{manga?.author?.firstName} {manga?.author?.lastName}</span></p>
                            <div>
                                <span>Genres: </span>
                                <div className="d-flex gap-3">
                                    {manga?.genres?.map((element, index) => {
                                        return (
                                            <div key={index} className={
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
                                            >{element.name}</div>
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
                <hr className="border border-black" />
                <div className="d-flex justify-content-between align-items-center">
                    <p className="py-3 display-6">Recensioni ({manga?.reviews.length})</p>
                    <div>
                        <button className="btn btn-primary"
                            onClick={() => setIsClicked(true)}
                        >
                            Add new
                        </button>
                    </div>
                </div>

                {/* FORM INSERIMENTO VISIBILE AL CLICK */}
                <div className="">
                    <div className={isClicked ? "d-block py-5" : "d-none py-5"}>
                        <p className="text-center fs-3">New Review</p>
                        <form className="card p-3" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="mb-3 col-sm-12 col-md-6">
                                    <label htmlFor="" className="form-label">Username: </label>
                                    <input
                                        onChange={handleFormData}
                                        value={formData.user}
                                        type="text"
                                        className="form-control"
                                        name="user"
                                        id=""
                                        aria-describedby="helpId"
                                        placeholder=""
                                        required
                                    />
                                </div>
                                <div className="mb-3 col-sm-12 col-md-6">
                                    <label htmlFor="" className="form-label">Vote: </label>
                                    <input
                                        onChange={handleFormData}
                                        value={formData.vote}
                                        type="number"
                                        className="form-control"
                                        name="vote"
                                        id=""
                                        aria-describedby="helpId"
                                        placeholder=""
                                        min={0}
                                        max={5}
                                        step={0.5}
                                        required
                                    />
                                </div>

                                <div className="mb-3 col-12">
                                    <label htmlFor="" className="form-label">Comment:</label>
                                    <textarea className="form-control" name="comment" id="" rows="3" onChange={handleFormData}
                                        value={formData.comment}></textarea>
                                </div>
                            </div>
                            <div className="d-grid gap-2">
                                <button
                                    type="submit"
                                    name=""
                                    id=""
                                    className="btn btn-success"
                                    onClick={() => setIsClicked(false)}
                                >
                                    Save
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
                {
                    manga === null ? (
                        <p>Loading...</p>
                    ) : (manga?.reviews && manga.reviews.length > 0) ? (
                        <MangaReviews reviews={manga.reviews} />
                    ) : (
                        <p className="alert alert-warning">Non ci sono recensioni per questo manga!</p>
                    )
                }
            </div>
        </div>


    )
}