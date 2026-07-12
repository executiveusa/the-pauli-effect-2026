"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * CinematicScroll — wraps the whole app.
 * Sets up Lenis smooth scroll + GSAP ScrollTrigger sync.
 * On mount, finds all [data-reveal] elements and animates them in on scroll.
 * Finds all [data-parallax] elements and moves them at scroll speed.
 * Finds all [data-stagger] containers and staggers their children.
 */
export default function CinematicScroll({ children }) {
  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    })

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    // Reveal animations — elements with [data-reveal] fade up
    const reveals = document.querySelectorAll("[data-reveal]")
    reveals.forEach((el) => {
      const delay = parseFloat(el.dataset.revealDelay || 0)
      gsap.fromTo(
        el,
        { y: 40, opacity: 0, filter: "blur(6px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      )
    })

    // Stagger groups — containers with [data-stagger] stagger their children
    const staggers = document.querySelectorAll("[data-stagger]")
    staggers.forEach((container) => {
      const children = container.children
      gsap.fromTo(
        children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )
    })

    // Parallax — elements with [data-parallax] move at scroll speed
    const parallaxes = document.querySelectorAll("[data-parallax]")
    parallaxes.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax || 0.3)
      gsap.to(el, {
        yPercent: -speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })
    })

    // Hero-specific: staggered text reveal on load
    const heroText = document.querySelectorAll("[data-hero-reveal]")
    if (heroText.length > 0) {
      gsap.fromTo(
        heroText,
        { y: 60, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.3,
        }
      )
    }

    // Hero image: subtle scale-in + float
    const heroImage = document.querySelector("[data-hero-image]")
    if (heroImage) {
      gsap.fromTo(
        heroImage,
        { scale: 0.92, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 1.8, ease: "power3.out", delay: 0.2 }
      )
      // Gentle float loop
      gsap.to(heroImage, {
        y: -12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      })
    }

    // Section pin + highlight — each section's kicker gets a gold flash
    const kickers = document.querySelectorAll(".kicker")
    kickers.forEach((kicker) => {
      ScrollTrigger.create({
        trigger: kicker,
        start: "top 85%",
        onEnter: () => {
          gsap.fromTo(
            kicker,
            { color: "var(--brass)", textShadow: "0 0 20px rgba(196,154,77,0.4)" },
            { color: "var(--brass)", textShadow: "0 0 0px rgba(196,154,77,0)", duration: 1.5, ease: "power2.out" }
          )
        },
      })
    })

    // Refresh after everything loads
    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 500)

    // Scroll progress bar
    const progressBar = document.querySelector(".scroll-progress")
    if (progressBar) {
      lenis.on("scroll", ({ scroll, limit }) => {
        const pct = limit > 0 ? (scroll / limit) * 100 : 0
        progressBar.style.width = `${pct}%`
      })
    }

    return () => {
      clearTimeout(refreshTimer)
      lenis.destroy()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      {children}
    </>
  )
}
