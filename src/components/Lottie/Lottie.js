import React, { useEffect, useRef} from 'react'
import lottie from 'lottie-web'

const Lottie = () => {

    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            loop: true,
            renderer: 'svg',
            autoplay: true,
            animationData: require('./data.json'),

        })
     }, [])

    return (
        <div className="App">
            <div className="container" ref={container}></div>
        </div>
    )
}

export default Lottie
