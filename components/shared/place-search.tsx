"use client"

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react"
import { Loader2, MapPin, School, Search, X } from "lucide-react"

import { Input } from "@/components/ui/input"
import {
  MIN_SEARCH_CHARS,
  isEmptySearch,
  searchPlaces,
  toSearchOptions,
  type SearchOption,
} from "@/lib/places"

const DEBOUNCE_MS = 300

type PlaceSearchProps = {
  onSelect: (option: SearchOption) => void
  /** Called when the box is emptied with the clear button. */
  onClear?: () => void
  label: string
  placeholder?: string
  className?: string
}

type State =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error" }
  | { status: "done"; options: SearchOption[]; empty: boolean }

const KIND_LABEL: Record<SearchOption["kind"], string> = {
  campus: "Campus",
  place: "Place",
  external: "On the map",
}

/**
 * Search box for campuses and the named places on them (gates, hostels,
 * markets). Results come from the Kampmax API; the visitor picks one and the
 * parent decides what to do with it. Follows the ARIA combobox pattern, so it
 * works with the keyboard and with screen readers.
 */
function PlaceSearch({
  onSelect,
  onClear,
  label,
  placeholder = "Search for a campus, gate or hostel",
  className,
}: PlaceSearchProps) {
  const listId = useId()
  const [query, setQuery] = useState("")
  const [state, setState] = useState<State>({ status: "idle" })
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const trimmed = query.trim()
  const canSearch = trimmed.length >= MIN_SEARCH_CHARS

  useEffect(() => {
    if (!canSearch) return

    const controller = new AbortController()
    const timer = setTimeout(() => {
      setState({ status: "loading" })
      searchPlaces(trimmed, controller.signal)
        .then((result) => {
          setState({
            status: "done",
            options: toSearchOptions(result),
            empty: isEmptySearch(result),
          })
          setActive(-1)
        })
        .catch((error: unknown) => {
          if (controller.signal.aborted) return
          if (error instanceof DOMException && error.name === "AbortError") return
          setState({ status: "error" })
        })
    }, DEBOUNCE_MS)

    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [trimmed, canSearch])

  // Anything older than the current text is not shown.
  const visible: State = canSearch ? state : { status: "idle" }
  const options = visible.status === "done" ? visible.options : []
  const showPanel = open && canSearch && visible.status !== "idle"

  function choose(option: SearchOption) {
    setQuery(option.name)
    setOpen(false)
    setActive(-1)
    onSelect(option)
  }

  function clear() {
    setQuery("")
    setState({ status: "idle" })
    setOpen(false)
    onClear?.()
    inputRef.current?.focus()
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      setOpen(false)
      return
    }
    if (options.length === 0) return

    if (event.key === "ArrowDown") {
      event.preventDefault()
      setOpen(true)
      setActive((i) => (i + 1) % options.length)
    } else if (event.key === "ArrowUp") {
      event.preventDefault()
      setOpen(true)
      setActive((i) => (i <= 0 ? options.length - 1 : i - 1))
    } else if (event.key === "Enter" && showPanel && active >= 0) {
      event.preventDefault()
      choose(options[active])
    }
  }

  return (
    <div className={className}>
      <div className="relative">
        <Search
          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <Input
          ref={inputRef}
          type="search"
          role="combobox"
          aria-label={label}
          aria-expanded={showPanel}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={active >= 0 ? `${listId}-${active}` : undefined}
          autoComplete="off"
          spellCheck={false}
          placeholder={placeholder}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          onKeyDown={onKeyDown}
          className="h-11 pr-10 pl-9 md:text-base"
        />
        <div className="absolute top-1/2 right-2 -translate-y-1/2">
          {visible.status === "loading" ? (
            <Loader2
              className="size-4 animate-spin text-muted-foreground"
              aria-hidden="true"
            />
          ) : query ? (
            <button
              type="button"
              onClick={clear}
              aria-label="Clear search"
              className="flex size-7 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          ) : null}
        </div>

        {showPanel ? (
          <ul
            id={listId}
            role="listbox"
            aria-label={`${label} results`}
            // Keeps focus in the input, so choosing a row does not close the list first.
            onMouseDown={(event) => event.preventDefault()}
            className="absolute z-20 mt-1 max-h-80 w-full overflow-y-auto rounded-xl border border-border bg-background p-1 shadow-lg"
          >
            {options.map((option, index) => {
              const Icon = option.kind === "campus" ? School : MapPin
              return (
                <li
                  key={option.key}
                  id={`${listId}-${index}`}
                  role="option"
                  aria-selected={index === active}
                  onClick={() => choose(option)}
                  onMouseMove={() => setActive(index)}
                  className={`flex cursor-pointer items-start gap-3 rounded-lg px-3 py-2 ${
                    index === active ? "bg-muted" : ""
                  }`}
                >
                  <Icon
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="truncate text-sm font-medium text-foreground">
                      {option.name}
                    </span>
                    {option.detail ? (
                      <span className="truncate text-xs text-muted-foreground">
                        {option.detail}
                      </span>
                    ) : null}
                  </span>
                  <span className="shrink-0 text-[11px] text-muted-foreground">
                    {KIND_LABEL[option.kind]}
                  </span>
                </li>
              )
            })}
          </ul>
        ) : null}
      </div>

      {/* Announced to screen readers; also the message when there is nothing to list. */}
      <p role="status" className="mt-2 min-h-5 text-xs text-muted-foreground">
        {!canSearch
          ? ""
          : visible.status === "error"
            ? "Search isn't available right now. Please try again in a moment."
            : visible.status === "done"
              ? visible.empty
                ? `Nothing found for “${trimmed}”. Check the spelling, or try the campus name.`
                : `${options.length} ${options.length === 1 ? "result" : "results"}`
              : ""}
      </p>
    </div>
  )
}

export { PlaceSearch }
