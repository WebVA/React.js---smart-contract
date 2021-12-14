export const dateConvert = (timeStamp: any) => {
  const time = new Date(timeStamp * 1000)
  return (
    time.getUTCFullYear() + '/' + ('0' + (time.getMonth() + 1)).slice(-2) + '/' + ('0' + time.getDate()).slice(-2)
    //  +
    // ' ' +
    // ('0' + time.getHours()).slice(-2) +
    // ':' +
    // ('0' + time.getMinutes()).slice(-2)
    //  +
    // ':' +
    // ('0' + time.getSeconds()).slice(-2)
  )
}

export const chatDateConvert = (timeStamp: any) => {
  const time = new Date(timeStamp * 1000)

  return ('0' + time.getHours()).slice(-2) + ':' + ('0' + time.getMinutes()).slice(-2)
}

export const getUniqueColor = (string: string, colorSet: string[]) => {
  const getNumericHash = (string: string) => {
    let hash = 0
    if (string.length === 0) return hash
    for (let i = 0; i < string.length; i++) {
      let char = string.charCodeAt(i)
      hash = (hash << 5) - hash + char
      hash = hash & hash // Convert to 32bit integer
    }
    return hash
  }
  const modulo = colorSet.length
  const colorIndex = ((getNumericHash(string) % modulo) + modulo) % modulo
  return colorSet[colorIndex]
}
