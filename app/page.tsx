const links = [
  { label: "contact@denizisik.com", href: "mailto:contact@denizisik.com" },
  { label: "X", href: "https://x.com/deniiiiz_i" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/deniiiiz-i/" },
];

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col justify-between p-8 sm:px-14 sm:py-12">
      <div>
        <h1 className="text-[44px] font-normal leading-none tracking-[0.01em]">
          Deniz Isik
        </h1>
        <div className="mt-14">
          <h2 className="mb-5 text-[22px] font-normal text-muted">Projects</h2>
          <div className="flex items-center gap-4">
            {/* biome-ignore lint/performance/noImgElement: theme-swapped SVGs, no next/image benefit */}
            <img
              src="/icon-light.png"
              alt="Modus"
              width={40}
              height={40}
              className="rounded-lg dark:hidden"
            />
            {/* biome-ignore lint/performance/noImgElement: theme-swapped SVGs, no next/image benefit */}
            <img
              src="/icon-dark.png"
              alt="Modus"
              width={40}
              height={40}
              className="hidden rounded-lg dark:block"
            />
            <span className="text-[26px]">Modus</span>
            <span className="rounded-full border border-rule px-3 py-[3px] text-base text-muted/80">
              soon
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-baseline gap-x-8 gap-y-3 text-[22px]">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="link"
            {...(link.href.startsWith("mailto:")
              ? {}
              : { target: "_blank", rel: "noopener noreferrer" })}
          >
            {link.label}
          </a>
        ))}
      </div>
    </main>
  );
}
