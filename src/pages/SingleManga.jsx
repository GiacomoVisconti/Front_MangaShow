import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { use } from "react";

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
                <div className="col-12 d-flex">
                    <div className="col-8">
                        <img className="img-fluid" src={manga?.image_url} alt="" />
                    </div>
                    <div className="col-4">
                        <div className="d-flex flex-column align-items-center">
                            <p>ciao</p>
                            <p>ciao</p>
                            <p>ciao</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}