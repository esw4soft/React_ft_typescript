import React from 'react'
import ReactDom from 'react-dom'
import styles from './index.scss'

const Main = () => <h1 className={styles.main}>hi jsx!</h1>

ReactDom.render(<Main />, document.getElementById('root'))
