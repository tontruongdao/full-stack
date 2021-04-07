module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    // Identifies our application to google service
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // Key to have access to client information
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    sendGridKey: process.env.SEND_GRID_KEY
}