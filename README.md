# gatsby-source-meetup-events

Uses MeetUp's public API to fetch the event list for a specified group and load it into your Gatsby site.

## Before you use this

I quickly threw this together for a personal project and will only be extending or maintaining this plugin as needed.

## Installation

Install using the URL of the git repo. I might publish this to npm someday.

## Sample Usage

Configure the plugin in your site's `gatsby-config.js` file.

Grab the `groupUri` from the URL of your group on MeetUp.

For example: `https://meetup.com/{groupUri}/events`

The `name` parameter specifies how you'll refer to your event stream in GraphQL.

```
    {
      resolve: 'gatsby-source-meetup-events',
      options: {
        groupUri: 'my-meetup-group',
        name: 'MeetUpEvents',
      },
    },
```


