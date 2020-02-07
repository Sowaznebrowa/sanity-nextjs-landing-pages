export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5e3d5a91e573fed61e0e149f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vw75ewss',
                  apiId: '9795e276-1b71-4c20-8c21-8b045bfea9cb'
                },
                {
                  buildHookId: '5e3d5a9167a01dd3480bd98f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kfygpgdn',
                  apiId: 'a6655f5e-27d5-4fc3-a41c-96c9c14acf67'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Sowaznebrowa/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kfygpgdn.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
