
let store = {
    getState() {
        return {
            topics: [
                'java',
                'js',
                'scala',
                'python'
            ],
            comments: [
                "java is my life",
                "js is new friend",
                "scala just friend for spark",
                "python is new baby"
            ]
        }
    },
    subscribe() {
        //
    }
}

export default store;