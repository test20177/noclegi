import PropTypes from 'prop-types'
import React, { useEffect, useMemo } from 'react'
import Hotel from './Hotel/Hotel'
import styles from './Hotels.module.css'

const propTypes = {
    hotels: PropTypes.array.isRequired
}

const slowFunction = (count) => {
    // for (let i = 0; i < 1500000000; i++) {}
    return count
}


function Hotels(props) {

    // useEffect( () => console.log('tera!'), [] )

    const count = useMemo( () => {
        return slowFunction(props.hotels.length)
    }, [props.hotels.length])
    

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{ count > 0 ? `Oferty (${count})` : 'Brak ofert' }</h2>
            {props.hotels.map( hotel => 
                <Hotel 
                    onOpen={props.onOpen}  
                    key={hotel.id} 
                    {...hotel} 
                /> 
            )}
        </div>
    )
}

Hotels.propTypes = propTypes

const areEqual = (prevProps, nextProps) => {
    return prevProps.hotels === nextProps.hotels
}

// export default React.memo(Hotels, areEqual)
export default Hotels