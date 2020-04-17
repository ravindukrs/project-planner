const initState = {
    projects: [
        { id: '1', title: 'Help me find Peach', content: 'Blah Blah Bla' },
        { id: '2', title: 'Collect all the Stars', content: 'Blah Blah Bla' },
        { id: '3', title: 'Egg Hunt with Yoshi', content: 'Blah Blah Bla' },
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('Created Project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('Created Project Error', action.err)
            return state;
        default: return state;
    }
}

export default projectReducer;