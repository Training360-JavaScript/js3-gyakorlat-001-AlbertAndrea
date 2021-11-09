const removeDuplicatesFromArray = (arr) => {
    let newArray = [... new Set(arr)]
    return newArray;;
}

export default removeDuplicatesFromArray
