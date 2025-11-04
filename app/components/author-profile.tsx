import Image from 'next/image'
import Link from 'next/link'
import { Author } from 'app/config/authors'

interface AuthorProfileProps {
  author: Author
}

export function AuthorProfile({ author }: AuthorProfileProps) {
  return (
    <div className="flex flex-col gap-4 py-8 border-t border-b border-neutral-200 dark:border-neutral-700">
      <div className="flex items-start gap-4">
        {author.avatarUrl && (
          <div className="flex-shrink-0">
            <Image
              src={author.avatarUrl}
              alt={author.name}
              width={64}
              height={64}
              className="rounded-full"
            />
          </div>
        )}
        <div className="flex-grow">
          <h3 className="font-semibold text-lg">{author.name}</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {author.bio}
          </p>
          {author.email && (
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              <Link
                href={`mailto:${author.email}`}
                className="hover:text-neutral-900 dark:hover:text-neutral-200 underline"
              >
                {author.email}
              </Link>
            </p>
          )}
        </div>
      </div>

      {author.social && Object.keys(author.social).length > 0 && (
        <div className="flex gap-3 text-sm">
          {author.social.twitter && (
            <Link
              href={`https://twitter.com/${author.social.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 underline"
            >
              Twitter
            </Link>
          )}
          {author.social.github && (
            <Link
              href={`https://github.com/${author.social.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 underline"
            >
              GitHub
            </Link>
          )}
          {author.social.linkedin && (
            <Link
              href={`https://linkedin.com/in/${author.social.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 underline"
            >
              LinkedIn
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
