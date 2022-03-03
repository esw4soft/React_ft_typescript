import React from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import styles from './index.scss'

const SayHello = (props) => {
  const { names } = props
  const isEmpty = (value) => value === ''

  return names.map((name) => (
    <div
      key={name}
      className={
        `${styles.mainBackground}
         ${isEmpty(name) ? '' : styles.main}`
      }
      style={{
        fontSize: 28,
      }}
    >
      {`Hello ${isEmpty(name) ? 'world' : name}`}
    </div>
  ))
}

// 定義props型別
SayHello.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string),
}

// 定義props空值時的畫面
SayHello.defaultProps = {
  names: ['Default string'],
}

ReactDom.render(
  <SayHello names={[1, 2, 3]} />,
  document.getElementById('root'),
)
