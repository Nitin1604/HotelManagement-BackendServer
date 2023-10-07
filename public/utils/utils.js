const SECRET_KEY = "nitin@hotel";


const createErrorResponse = (errorMessage) => {
    return {
        data: {
          error: errorMessage
        }
      }
  }


  module.exports = {createErrorResponse, SECRET_KEY}