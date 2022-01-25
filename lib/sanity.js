import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'p2n90pr1',
  dataset: 'production',
  apiVersion: '2021-10-21',
  token:
    'skKUKMHfuvz0JGtbRLpgeAa0rzGs2THEvNpngirgbb8OJtok07RJ8ubWo9OT1BR6CJ75JDaRExKXdNqfxwtsIFT9ANJ9zNaixTM4CH8bEZPYIl7wPOkyM52kotT187Wsqs9Jc7mn7J6i1SADGZomg8tptgowTjMSCMlnrsxVzOtHquyuNwdD',
  useCdn: false,
})
