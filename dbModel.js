import mongoose from 'mongoose'

const shortVideoSchema = mongoose.Schema({
    url: String,
    channel: String,
    description: String,
    song: String,
    likes: String,
    shares: String,
    message: String
})

export default mongoose.model("shortVideo",shortVideoSchema)