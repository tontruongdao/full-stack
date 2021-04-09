export default (emails) => {
    // Remove any blank space with "trim()"
    // Used Regex to validate email with filter method

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const invalidEmails = emails
            .split(',')
            .map(email => email.trim())
            .filter(email => re.test(email) === false) // Captures emails that are invalid

    if (invalidEmails.length) {
        return `These emails are invalid: ${invalidEmails}`
    }
}