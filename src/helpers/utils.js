export const renameKeys = obj =>
  Object.entries(obj).reduce((acc, [key, val]) => {
    const modifiedKey = key.replace(/_([a-z])/g, g => g[1].toUpperCase())
    const modifiedVal =
      typeof val === 'object' && val !== null ? renameKeys(val) : val
    return {
      ...acc,
      ...{ [modifiedKey]: modifiedVal },
    }
  }, {})
