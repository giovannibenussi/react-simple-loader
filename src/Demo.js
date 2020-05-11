import React from 'react'
import SimpleLoader from './SimpleLoader'

function Demo() {
  return (
    <div>
      <SimpleLoader height={100} width={300} />
      <SimpleLoader height="1rem" width="200px" />
      <SimpleLoader speed={0} />
      <SimpleLoader speed={5} />
      <SimpleLoader speed={10} />
    </div>
  )
}

export default Demo
