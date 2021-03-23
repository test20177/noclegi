import { useEffect, useLayoutEffect, useState } from "react"

const quotes = [
    'Są dwie drogi, aby przeżyć życie. Jedna to żyć tak, jakby nic nie było cudem. Druga to żyć tak, jakby cudem było wszystko',
    'Nasze życie jest takim, jakim uczyniły je nasze myśli',
    'Martw się, co inni ludzie o tobie myślą, a zawsze będziesz ich więźniem',
    'Życie jest jak jazda na rowerze. Żeby utrzymać równowagę, musisz być w ciągłym ruchu',
    'Jeżeli robisz to co łatwe, Twoje życie będzie trudne. Jeśli robisz to co trudne, Twoje życie będzie łatwe',
    'Jest tylko jedna rzecz, która sprawia, że marzenie jest niemożliwe do osiągnięcia: strach przed porażką',
    'Dramatem życia jest to, że starzejemy się zbyt szybko, a mądrzejemy zbyt późno',
    'Nie odnajdziesz spokoju unikając życia'
]

const styles = {
    position: 'absolute',
    padding: '10px',
    top: '10px',
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#fff',
    fontStyle: 'italic'
}

const InspiringQuote = (props) => {

    const [ quote, setQuote ] = useState('Wczytywanie cytatu...')
    const [ loading, setLoading ] = useState(true)

    useEffect( () => {
    //    setTimeout( () => {
    //         setQuote(quotes[Math.random(quotes.length)])
    //    }, 400)

        setLoading(false)

    }, [])

    useLayoutEffect( () => {
       setQuote( quotes[Math.floor(Math.random()*quotes.length)] )
    }, [ loading ] )

    return (
        <p style={styles}>{quote}</p>
    )
}

export default InspiringQuote

