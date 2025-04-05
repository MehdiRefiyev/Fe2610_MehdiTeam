import React, { useEffect, useState } from 'react'
import styles from './CardArea.module.css'
import Card from '../Card';

export default function CardArea() {

    const [data, setData] = useState();

    useEffect(() => {

        fetch('https://api.thecatapi.com/v1/images/search?limit=15')
            .then(response => response.json())
            .then(item => setData(item))
    }, [])

    let renderUI = (data) => {
        if (data) {
            return data.map((item) => {
                return <Card img={item.url} key={item.id} />
            })
        }
        else {
            return <h1 style={{ color: 'white', fontSize: '24px' }}>We dont have cards</h1>
        }
    }

    return (
        <div className={styles.container}>
            {renderUI(data)}
        </div>
    )
}
