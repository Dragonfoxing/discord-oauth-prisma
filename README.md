# Discord-oauth-prisma

A proof of concept designed to teach myself how to interact with Oauth2, run my own endpoint for the redirect authorization, store a session ID on the browser via cookie and the "secure" content on the server via Prisma.

What you see is what you get.  I provide no support.  This works on my local machine so it should work on yours, but don't try to upload it to Fly.io or w/e.

## requirements

`npm install` to make sure stuff gets set up.

You need to supply your own .env with the appropriate variables.  Here's what the code expects:
* DATABASE_URL="file:./dev.db" (this is just a default setting for testing so you can use this too)
* DISCORD_CLIENT_ID="yourclientidhere"
* DISCORD_CLIENT_SECRET="yourclientsecrethere"
* DISCORD_OAUTH_LINK="youroauthlinkhere"

You obviously need to have a Discord developer application set up.  You also need to make sure to set `http://localhost:3000/discord` as a redirect and generate an oauth link that uses that redirect.

Put the relevant data into the .env file as shown above.

Once that's done, don't forget to run `npx prisma migrate dev` which should set up dev.db and generate/install the prisma client that the code is expecting.  If it prompts for a migration name just type in whatever.

## Instructions

* `npm run dev`
* Navigate to http://localhost:3000/discord
* Click the login link.
* Authorize your app to receive your access token.
* Verify that you have been taken back to http://localhost:3000/discord
* http://localhost:3000/discord should greet you with your "global_name" (aka Display Name in profile settings).

### Reminders

* This isn't the most terribly secure code.  There's probably ways you could rewrite things to make it better.
    * That said, making sure I put all the important code in server-side Astro bits means it's more secure than average by default.
* Keep your scopes limited.  This app only requires "Identify".
* And once again this project is WYSIWYG.  I will not provide support.