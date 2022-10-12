// handles errors for routes that don't exist
const notFoundMiddleware =(req,res)=> {
    res.status(404).send('Route does not exist')
}

export default notFoundMiddleware