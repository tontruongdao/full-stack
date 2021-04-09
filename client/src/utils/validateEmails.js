export default (emails) => {
    // Remove any blank space with "trim()"
    const emailsArray = emails
                            .split(',')
                            .map(email => email.trim())
}