import { useState, useEffect } from "react";

export default function Authors() {
    const [authors, setAuthors] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/api/authors/')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAuthors(data)

            })
    }, [])

    return (
        <div className="container my-5">
            <p className="display-3 text-center pb-5">List of Authors</p>
            <div
                className="table-responsive"
            >
                <table
                    className="table table-hover"
                >
                    <thead>
                        <tr className="text-center">
                            <th scope="col">Name</th>
                            <th scope="col">Surname</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            authors?.map((element, index) => {
                                return (
                                    <tr className="text-center" >
                                        <td scope="row">{element.firstName}</td>
                                        <td>{element.lastName}</td>
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