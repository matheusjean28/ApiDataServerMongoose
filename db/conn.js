const { MongoClient } = require('mongodb')
const uri = 'mongodb://localhost:27017/test'

const client = new MongoClient(uri)

async function run() {
    try {
        await client.connect()
        console.log('all done here! men')
    } catch (error) {
        console.log(error, " error aqui")
    }
}
run()

module.exports = client