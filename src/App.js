import React, { useState } from 'react'
import SDK from '@babbage/sdk'

const App = () => {
  const [value, setValue] = useState('')

  const handleEncrypt = async () => {
    const encryptedData = await SDK.encrypt({
      protocolID: 'crypton',
      keyID: '1',
      plaintext: value,
      returnType: 'string'
    })
    setValue(encryptedData)
  }

  const handleDecrypt = async () => {
    const decryptedData = await SDK.decrypt({
      protocolID: 'crypton',
      keyID: '1',
      ciphertext: Buffer.from(value, 'base64'),
      returnType: 'string'
    })
    setValue(decryptedData)
  }

  return (
    <center style={{ margin: '1em' }}>
      <textarea onChange={e => setValue(e.target.value)} value={value} />
      <br />
      <br />
      <button onClick={handleEncrypt}>Encrypt</button>
      <br />
      <br />
      <button onClick={handleDecrypt}>Decrypt</button>
    </center>
  )
}

export default App
