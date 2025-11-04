import Image from 'next/image'

interface AuthorProfileProps {
  name: string
  bio: string
  avatarUrl?: string
}

export function AuthorProfile({ name, bio, avatarUrl }: AuthorProfileProps) {
  return (
    <div className="flex items-center gap-4 py-8 border-t border-b border-neutral-200 dark:border-neutral-700">
      {avatarUrl && (
        <div className="flex-shrink-0">
          <Image
            src={avatarUrl}
            alt={name}
            width={64}
            height={64}
            className="rounded-full"
          />
        </div>
      )}
      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{bio}</p>
      </div>
    </div>
  )
}
