import nextra from 'nextra'

const withNextra = nextra({
  search: {
    codeblocks: false
  },
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [],
  }
})

export default withNextra({
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
})
