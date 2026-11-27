import Image from "next/image"

import mobileHome from "@/public/screenshots/mobile-home.png"

/** The hero's visual: the mobile app's home screen inside a phone frame. */
function HeroPhone() {
  return (
    <div className="relative mx-auto w-full max-w-68 sm:max-w-72">
      <div
        aria-hidden="true"
        className="absolute -inset-10 -z-10 rounded-full bg-primary-500/30 blur-3xl"
      />

      <div className="rounded-[3rem] bg-neutral-950 p-2.5 shadow-2xl shadow-primary-950/50 ring-1 ring-white/25">
        <div className="overflow-hidden rounded-[2.4rem] bg-[#f8fafc]">
          {/* Room for the camera, so the app's greeting clears the rounded corners. */}
          <div aria-hidden="true" className="flex h-9 items-center justify-center">
            <span className="h-5 w-20 rounded-full bg-neutral-950" />
          </div>
          <Image
            src={mobileHome}
            alt="The Kampmax mobile app home screen, with search, a campus event and shortcuts to the marketplace, services, jobs and events"
            priority
            sizes="(min-width: 640px) 268px, 252px"
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  )
}

export { HeroPhone }
