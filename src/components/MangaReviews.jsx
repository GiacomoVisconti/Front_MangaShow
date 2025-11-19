import Rate from "./Rate"

export default function MangaReviews({ reviews }) {
    return (
        <>

            {
                reviews?.map((element, index) => {
                    return (
                        <div key={index} className="py-3">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <span className="fs-4">{element.user}</span>
                                    <span className="fs-5"><Rate element={element} /></span>
                                </div>
                                <div className="card-body">
                                    <p className="fs-5">{element.comment}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )

}