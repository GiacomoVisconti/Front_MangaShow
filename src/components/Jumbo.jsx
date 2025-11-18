import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

export default function Jumbo({ mangas }) {
    const [i, setI] = useState(null);
    return (
        <div className='jumbo'>
            <section className="loop-images" style={{ '--bg': 'white' }}>
                <div className="carousel-track" style={{ '--time': '60s', '--total': `${mangas?.length}` }}>

                    {mangas?.map((element, index) => {
                        return (
                            <Link to={''} key={index} className="carousel-item" style={{ '--i': `${index + 1}` }}>
                                <img className='rounded image-motion' src={element.image_url} alt="image" />
                            </Link>
                        )
                    })}
                    <span className="scroll-down">Scroll down <span className="arrow">↓</span></span>
                </div>

            </section >
        </div >
    )
}