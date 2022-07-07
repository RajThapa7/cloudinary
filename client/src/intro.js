import React from 'react'
import { Link } from 'react-router-dom'
export default function Intro() {
  return (
    <div >
                <nav >
                    <div >Cloudinary Demo</div>
                    <ul>
                        <li >
                            <Link to="/home">Gallery</Link>
                        </li>
                        <li >
                            <Link to="/upload">Upload</Link>
                        </li>
                    </ul>
                </nav>
        </div>
  )
}
