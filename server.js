let express = require('express')

let app = express()

const PORT = process.env.PORT || 3000

app.use(express.static('./client'))

app.listen(PORT, () => console.log('Server running on port ' + PORT))
