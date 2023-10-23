import express, { Application, Request, Response } from 'express'

const app: Application = express()
const PORT = 3000

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: `Welcome to the quizzin API!` })
})

try {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })
} catch (error : unknown) {
    if (error instanceof TypeError) console.log(`Error occurred: ${error.message}`)
}