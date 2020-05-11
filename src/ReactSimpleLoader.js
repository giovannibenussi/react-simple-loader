import React from 'react'

const styles = {
  wrapper: {
    height: '100px',
    width: '100px',
    background: 'hsla(0,0%,53.3%,.2)'
  }
}

function SimpleLoader({ height = '1rem', speed = 5, width = '100%' }) {
  return <div style={styles.wrapper}>
    </div>
}

export default SimpleLoader
