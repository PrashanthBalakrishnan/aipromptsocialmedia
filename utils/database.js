import mongoose from 'mongoose'

let isConnected = false //Tracks the connection

export const ConnectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log('MongoDB is already connected')
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'sharePrompts',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true
        console.log('MongoDB is connected')
    } catch (error) {
        console.log(error)
    }
}
