"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const SECTION_DATA = [
  { label: "Edge (Streaming)", href: "/", x: "100%" },
  { label: "Edge", href: "/edge", x: "62%" },
  { label: "Parrtial pre-rendering", href: "/node-streaming", x: "38%" },
  { label: "Node.js", href: "/node", x: "0%" },
];

export default function NavigationSwitcher() {
  const pathname = usePathname();
  const activeSection = SECTION_DATA.find(
    (section) => section.href === pathname
  );

  const buttons = SECTION_DATA.map((section) => {
    return (
      <Link
        key={section.label}
        href={section.href}
        className={clsx("nav-link", {
          active: section.href === pathname,
          pending: section.href !== pathname,
        })}
      >
        <div style={{ position: "relative", zIndex: 2 }}>{section.label}</div>
        {section.href === pathname ? (
          <>
            <motion.div
              aria-hidden
              className="nav-glow"
              layoutId="glow"
              transition={{
                delay: 0.03,
                type: "spring",
                stiffness: 125,
                damping: 20,
                mass: 1,
              }}
              style={{ scale: 2, opacity: 0.2, rotate: 0.00001 }}
            />
            <motion.div
              aria-hidden
              className="nav-pill"
              layoutId="pill"
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
                mass: 1,
              }}
            />
          </>
        ) : null}
      </Link>
    );
  });
  return (
    <>
      <nav
        style={
          activeSection
            ? {
                ["--x" as string]: activeSection.x,
              }
            : undefined
        }
      >
        <div aria-hidden className="nav-stroke" />
        <div className="nav-switcher">{buttons}</div>
      </nav>
      <p className="note">
        Note: This demo simulates a slow database or backend connection to
        demonstrate streaming.
      </p>
    </>
  );
}
