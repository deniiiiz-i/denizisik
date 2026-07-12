const links = [
  { label: "contact@denizisik.com", href: "mailto:contact@denizisik.com" },
  { label: "X", href: "https://x.com/deniiiiz_i" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/deniiiiz-i/" },
];

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col justify-between p-8 sm:px-14 sm:py-12">
      <h1 className="text-[44px] font-normal leading-none tracking-[0.01em]">
        Deniz Isik
      </h1>
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
