export type Author = {
  id: string
  name: string
  bio: string
  avatarUrl: string
  email?: string
  social?: {
    twitter?: string
    github?: string
    linkedin?: string
  }
}

export const authors: Record<string, Author> = {
  'john-doe': {
    id: 'john-doe',
    name: 'John Doe',
    bio: 'A passionate writer and developer.',
    avatarUrl: '/images/avatar.png',
    email: 'john@example.com',
    social: {
      twitter: 'johndoe',
      github: 'johndoe',
      linkedin: 'johndoe',
    },
  },
  'jane-smith': {
    id: 'jane-smith',
    name: 'Jane Smith',
    bio: 'Full-stack engineer and AI enthusiast.',
    avatarUrl: '/images/jane-avatar.png',
    email: 'jane@example.com',
    social: {
      twitter: 'janesmith',
      github: 'janesmith',
    },
  },
}

export function getAuthor(authorId: string | undefined): Author {
  return authors[authorId || 'john-doe']
}
