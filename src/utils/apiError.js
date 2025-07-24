class apiError extends Error {
    constructor(message, statusCode, Error){
        super(message);
        this.statusCode = statusCode;
        this.Error = Error;
    }
}

export default apiError;