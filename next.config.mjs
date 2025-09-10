import nextra from 'nextra'

const withNextra = nextra({
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [],
  }
})

export default withNextra({
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
})
