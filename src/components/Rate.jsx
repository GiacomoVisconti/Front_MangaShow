export default function Rate({ element }) {

    return (
        <div>
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>
                    {i < Math.round(element.vote) ? (
                        <i className="fa-solid fa-star text-warning"></i>
                    ) : (
                        <i className="fa-regular fa-star text-warning"></i>
                    )}
                </span>
            ))}
        </div>
    )


}