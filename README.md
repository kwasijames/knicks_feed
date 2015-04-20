# knicks_feed

A microblog allows users to create, devour, update, and delete miniature blog posts. You will be creating a team microblog, which allows a group of users to create posts on a shared feed. These posts can reference outside links and scrape useful information from them (like texts and images), and add novel commentary, like "LOLZ" or "haters gonna hate".

## MVP

Data Model:
micro_post
author
snippet
tag
Required technologies or features:
SendGrid
Allows an application to send emails
Examples Idea:
A sports team blog or general sports blog
User Stories (MVP):
A user can create a new micro_post
A user can add an author to a micro_post when creating it
A user can show (ie, see) a given micro_post
A user can see all of the micro_posts as a feed (/feed)
A user can add a link to a micro_post as a snippet
A snippet is similar to how Facebook handles links. When you paste a link to an article on Facebook, it shows you some limited information about it, but clicking it will take you to the full article.
A user can add a "topic" or "hashtag" to a micro_post as a tag
This should be optional to do and the choice of tag is up to the user. Not having a tag for the post should NOT break the application
tags can be edited and deleted
When a user creates a micro_post they can create a new author or choose a pre-existing one from a drop-down menu
A user can view an author's page that lists the micro_posts that they have created or edited
A user will receive an email when a new micro_post is created
This email should at least contain the title of the new micro_post
A user can view micro_posts posts by author (authors/authorhandle/posts)
A user can view micro_posts posts by tag (tag/tagname/posts)

