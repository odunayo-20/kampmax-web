import type { BlogPost } from "@/types/blog"

type ArticleAuthorProps = {
  author: BlogPost["author"]
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

export function ArticleAuthor({ author }: ArticleAuthorProps) {
  const initials = getInitials(author.name)

  return (
    <div className="my-8 rounded-2xl border border-border/70 bg-card/60 p-6 sm:p-7">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
        <div
          className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary font-bold text-base tracking-wider ring-1 ring-primary/20"
          aria-hidden="true"
        >
          {initials || "KP"}
        </div>
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-heading text-base font-semibold text-foreground">
              {author.name}
            </span>
            {author.role && (
              <span className="rounded-md bg-secondary px-2 py-0.5 text-2xs font-medium text-muted-foreground">
                {author.role}
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
            Sharing grounded insights on campus commerce, student enterprise, and practical digital opportunities across higher education communities.
          </p>
        </div>
      </div>
    </div>
  )
}
