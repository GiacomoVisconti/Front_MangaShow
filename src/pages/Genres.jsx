import { useState, useEffect } from "react";

export default function Genres() {
    const [genres, setGenres] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/api/genres/')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setGenres(data)

            })
    }, [])

    return (
        <div className="container my-5">
            <p className="display-3 text-center pb-5">List of Genres</p>
            <div
                className="table-responsive"
            >
                <table
                    className="table table-hover"
                >
                    <thead>
                        <tr className="text-center">
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            genres?.map((element, index) => {
                                return (
                                    <tr className="text-center" >
                                        <td scope="row">{element.name}</td>
                                        <td>{element.description}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>

        </div >
    )

}