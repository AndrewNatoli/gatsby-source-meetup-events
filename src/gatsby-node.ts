import fetch from 'node-fetch';

const MEETUP_API_BASE = "https://api.meetup.com";
const EVENTS_URI = "events";

const getEventList = async(groupUri) => {
   const response = await fetch(`${MEETUP_API_BASE}/${groupUri}/${EVENTS_URI}`);
   const data = await response.json();
   return data;
}

const sourceNodes = async ({actions, createNodeId, createContentDigest, reporter}, { groupUri, name }) => {

   const { createNode } = actions;

   if (!groupUri|| !name) {
      reporter.panic("Missing either the groupUri or name configuration value");
   }

   const eventList = await getEventList(groupUri);

   eventList.forEach(event => {

      const id = createNodeId(event.id);

      createNode({
         ...event,
         id,
         parent: null,
         children: [],
         internal: {
            contentDigest: createContentDigest(eventList),
            type: name,
            mediaType: 'application/json',
            content: JSON.stringify(event)
         }
      });

   });

}

exports.sourceNodes = sourceNodes;