export default function Footer() {
    return (
        <footer className="bg-light p-4 border-top border-dark">
            <div className="container">

                <div className="d-flex d-flex justify-content-between align-items-center flex-wrap mt-3 ">
                    <ul className="list-unstyled d-flex mb-0">
                        <li><a href="/platforms" className=" mx-2">Link1</a></li>
                        <li><a href="/about" className=" mx-2">Link2</a></li>
                        <li><a href="/reports" className=" mx-2">Link3</a></li>
                    </ul>
                    <div>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2 "><i className="bi bi-facebook m-1"></i>Facebook</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2 "><i className="bi bi-instagram m-1"></i>Instagram</a>
                        <a href="mailto:info@boolcore.com" className="mx-2 ">Contattaci</a>
                    </div>
                </div>
                <p className=" mb-2 mt-3">© {new Date().getFullYear()} MangaShow - Tutti i diritti riservati</p>
            </div>
        </footer>
    )
}