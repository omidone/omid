"use client"
import React from "react"
import  Stories  from '../components/Stories'
import Post from './Post'
const Feed = () =>{
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto  ">
            {/* section left */}
            <section className="col-span-2">
                {/* stories */}
                {Stories()}
                {/* post */}
                <Post/>
            </section>

            {/* section right */}
            {/* mini file*/}
            {/* suggesttion */}
        </main>
    )
}

export default Feed


