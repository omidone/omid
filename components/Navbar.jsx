import Link from 'next/link'


function Navbar() {
    return (
        <nav>
            <ul className='loge'>
                <div className="logo">
                    <h1>logo</h1>
                </div>
                <div className="Link-container">
                    <Link className="Link" href="./">Home</Link>
                    <Link className="Link" href="./about">About</Link>
                    <Link className="Link" href="./about/profile">Profile</Link>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar