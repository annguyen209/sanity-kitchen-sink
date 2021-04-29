export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '608a5e6db096a5b6dd440f65',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-baor1ssf',
                  apiId: '2a069634-1b79-4c71-8e22-1d9de94aeaa5'
                },
                {
                  buildHookId: '608a5e6d2dc463b8c8d8c391',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-4k11d9kg',
                  apiId: 'f827a99e-2830-4604-9e7d-6c5a0e609c1f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/annguyen209/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-4k11d9kg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
