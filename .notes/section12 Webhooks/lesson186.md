- Create Ngrok tunnel

run

```
npx ngrok http 5000
```

- Then take the url and update the link in sendgrid, only in development.
  sendGrid => Settings => Mail Settings => Event Webhook => HTTP Post URL
  "http://5c6d6ea0e423.ngrok.io" + "api/surveys/webhooks"

- Select "Clicked" in "Engagement Data"
