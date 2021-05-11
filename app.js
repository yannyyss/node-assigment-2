const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

const homeRoutes = require('./routes/home')
const usersRoutes = require('./routes/users')

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')))

app.use(homeRoutes.routes)
app.use(usersRoutes.routes)

// app.use((req,res) => {
//     res.status(404).render('404', { pageTitle: 'Page Not Founded', activeTab: ""})
// })

app.listen(3000)