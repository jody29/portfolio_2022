const checkProject = (path) => {
    if (path === '/musicmatch') {
        return 'Music Match'
    } else if (path === '/technoleon') {
        return 'Technoleon'
    } else if (path === '/zwerfinator') {
        return 'Zwerfinator'
    }
}

export default checkProject