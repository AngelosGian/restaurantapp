module.exports = {
    getIndex: (req, res) => {
        res.render('index.ejs')
    },
    getSignUp: (req, res) => {
        res.render('signup.ejs')
    },
    getLogin: (req, res) => {
        res.render('login.ejs')
    },
    getDashboard: (req, res) => {
        res.render('dashboard.ejs')
    }
}