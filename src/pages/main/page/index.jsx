import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

export default function Home(props) {
    const Router = useRouter()

    useEffect(() => {
        Router.push('/')
    }, [])

    return (
        <p></p>
    )
}
