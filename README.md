# Blog Content Repository

This repository contains the blog posts and related assets for [juanfkurucz.github.io](https://juanfkurucz.github.io).

## Structure

```
blog/
├── posts/           # Blog post content in markdown format
│   └── category/    # Posts organized by category
└── assets/          # Images and other media files
```

## Adding a New Blog Post

1. Create a new directory under `blog/posts/` with your category name if it doesn't exist
2. Create a new directory with a slug for your post (e.g., `getting-started-with-nextjs`)
3. Add your post content in `index.md`
4. Add any related assets in the post's directory

### Post Metadata

Each post's `index.md` should start with YAML frontmatter:

```yaml
---
title: "Your Post Title"
description: "A brief description of your post"
date: "2024-03-31"
tags: ["tag1", "tag2"]
category: "category-name"
---
```

## Development

This repository is used as a submodule in the main website repository. To update the blog content:

1. Clone this repository
2. Make your changes
3. Commit and push to the main branch
4. Update the submodule reference in the main repository

## License

All content is copyrighted unless otherwise specified. 