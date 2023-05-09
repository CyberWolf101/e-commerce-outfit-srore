import { useEffect } from "react"
import { Bounce } from "react-reveal";

const ComingSoon = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])
    return (
        <div style={{ height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
            <Bounce>
                <h2 className="paint">COMING SOON :)</h2>
            </Bounce>
        </div>
    );
}

export default ComingSoon;