"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { projects } from "@/lib/projects"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Wrench, Hammer, Award, Phone, Clock, MapPin, CheckCircle, Quote, Mail, Menu, X } from "lucide-react"
import Image from "next/image"
import { IndustrialFAQ } from "./industrial/industrial-faq"
import { IndustrialContactForm } from "./industrial/industrial-contact-form"
import { IndustrialTestimonials } from "./industrial/industrial-testimonials"
import { FadeIn } from "@/components/ui/fade-in"
import { cn } from "@/lib/utils"

export function IndustrialLanding() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mapUrl, setMapUrl] = useState("https://www.google.com/maps/d/u/1/embed?mid=1LtqpAqRVKfJqabz0z1HeThVcabMY_f4&ehbc=2E312F")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMapUrl("https://www.google.com/maps/d/u/1/embed?mid=1LtqpAqRVKfJqabz0z1HeThVcabMY_f4&ehbc=2E312F&z=9")
      } else {
        setMapUrl("https://www.google.com/maps/d/u/1/embed?mid=1LtqpAqRVKfJqabz0z1HeThVcabMY_f4&ehbc=2E312F")
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    
    // Initial check
    handleResize()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-zinc-900/90 backdrop-blur-md py-3 shadow-[0_1px_0_0_#27272a,0_25px_50px_-12px_rgba(0,0,0,0.25)]"
            : "bg-transparent py-6 bg-gradient-to-b from-black/60 to-transparent shadow-none"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link href="#home" className="flex items-center group">
              <Image
                src="/jobdonecrew-logo.svg"
                alt="JobDoneCrew"
                width={140}
                height={45}
                className={`w-auto invert transition-all duration-300 ${
                  isScrolled ? "h-10" : "h-12 group-hover:scale-105"
                }`}
              />
            </Link>
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              <a
                href="#projects"
                className="text-sm font-bold text-zinc-400 hover:text-amber-500 transition-colors uppercase tracking-wider"
              >
                Projects
              </a>
              <a
                href="#why-us"
                className="text-sm font-bold text-zinc-400 hover:text-amber-500 transition-colors uppercase tracking-wider"
              >
                Why Us
              </a>
              <a
                href="#services"
                className="text-sm font-bold text-zinc-400 hover:text-amber-500 transition-colors uppercase tracking-wider"
              >
                Services
              </a>
              <a
                href="#reviews"
                className="text-sm font-bold text-zinc-400 hover:text-amber-500 transition-colors uppercase tracking-wider"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="text-sm font-bold text-zinc-400 hover:text-amber-500 transition-colors uppercase tracking-wider"
              >
                Contact
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <Button className="hidden lg:inline-flex bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-6 text-base uppercase">
                GET FREE ESTIMATE
              </Button>
              <button
                className="lg:hidden text-white p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-zinc-900/95 backdrop-blur-xl border-t border-zinc-800 p-6 flex flex-col gap-6 shadow-2xl h-screen">
            <nav className="flex flex-col gap-6 items-center text-center">
              <a
                href="#projects"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold text-zinc-300 hover:text-amber-500 transition-colors uppercase tracking-wider"
              >
                Projects
              </a>
              <a
                href="#why-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold text-zinc-300 hover:text-amber-500 transition-colors uppercase tracking-wider"
              >
                Why Us
              </a>
              <a
                href="#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold text-zinc-300 hover:text-amber-500 transition-colors uppercase tracking-wider"
              >
                Services
              </a>
              <a
                href="#reviews"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold text-zinc-300 hover:text-amber-500 transition-colors uppercase tracking-wider"
              >
                Reviews
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold text-zinc-300 hover:text-amber-500 transition-colors uppercase tracking-wider"
              >
                Contact
              </a>
              <Button 
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold w-full py-6 text-lg uppercase mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                GET FREE ESTIMATE
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* 1. Hero Section */}
      <section id="home" className="relative w-full min-h-screen h-auto flex items-center justify-center overflow-hidden pt-32 pb-24 lg:py-0">
        <Image
          src="/img/hero.png"
          alt="Industrial Deck Construction"
          fill
          className="object-cover"
          priority
          quality={100}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-zinc-900/60" />
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-zinc-900 via-zinc-900/50 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex flex-col justify-center">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center pt-20 lg:pt-0">
              <FadeIn direction="right">
                <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                    <div className="inline-block px-3 py-1.5 bg-amber-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-900/20">
                      Licensed Contractors
                    </div>
                    <div className="flex items-center gap-2 text-zinc-300 bg-black/30 px-3 py-1.5 rounded-sm backdrop-blur-sm">
                      <Shield className="h-4 w-4 text-amber-500" />
                      <span className="font-bold text-xs uppercase">5-Year Warranty</span>
                    </div>
                  </div>
                  
                  <h1 className="mb-6 flex justify-center lg:justify-start">
                    <Image
                      src="/jobdonecrew-logo.svg"
                      alt="JobDoneCrew - Built to Last. Built Right."
                      width={600}
                      height={200}
                      className="w-[200px] md:w-[280px] lg:w-[320px] h-auto invert drop-shadow-xl"
                      priority
                    />
                  </h1>
                  
                  <div className="space-y-4 mb-8">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-black leading-tight uppercase drop-shadow-xl">
                      Trusted Scranton Deck Builders & <span className="text-amber-500">Repair Specialists</span>
                    </h2>
                    <p className="text-base md:text-lg text-zinc-200 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium drop-shadow-md">
                      Job Done Crew is your Scranton expert for deck installation, repair, and fence services. From custom composite decks
                      to quick railing replacements, we build beautiful outdoor spaces that last.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
                    <a href="#projects" className="w-full sm:w-auto">
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full border-2 border-zinc-400 text-white hover:border-amber-600 hover:bg-amber-600 transition-all font-black px-8 py-6 text-base uppercase bg-black/20 backdrop-blur-sm"
                      >
                        Explore Projects
                      </Button>
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-x-6 gap-y-3 text-zinc-300 text-xs font-bold justify-center lg:justify-start">
                    <div className="flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      <CheckCircle className="h-4 w-4 text-amber-500" />
                      <span className="drop-shadow-md">TOP RATED LOCAL SERVICE</span>
                    </div>
                    <div className="flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      <CheckCircle className="h-4 w-4 text-amber-500" />
                      <span className="drop-shadow-md">FREE ON-SITE ESTIMATES</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-5 xl:col-span-5 relative w-full max-w-lg mx-auto lg:mx-0">
              <FadeIn delay={0.2} direction="up">
                <div className="bg-zinc-950/90 backdrop-blur-sm border border-zinc-800 p-6 md:p-8 rounded-sm shadow-2xl relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-amber-500" />
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-white uppercase mb-2">Get A Free Quote</h3>
                    <p className="text-zinc-400 text-sm font-medium">Fill out the form below and we'll contact you within 24 hours.</p>
                  </div>
                  <IndustrialContactForm />
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Gallery of Works */}
      <section id="projects" className="py-24 bg-zinc-800">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="mb-16">
              <h2 className="text-6xl font-black mb-4 uppercase">Completed Projects</h2>
              <div className="h-2 w-32 bg-amber-600 mb-6" />
              <p className="text-xl text-zinc-400 font-semibold max-w-3xl leading-relaxed">
                Explore our portfolio of residential deck installations, backyard transformations, and custom repairs. Every project showcases our commitment to quality and detail.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
            {projects.map((project, i) => (
              <Link
                key={i}
                href={`/projects/${project.slug}`}
                className={`relative overflow-hidden group cursor-pointer border-4 border-zinc-700 hover:border-amber-600 transition-colors bg-zinc-800 block ${
                  i === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={(project as any).imageRotation ? {
                    transform: `rotate(${(project as any).imageRotation}deg) scale(1.1)`
                  } : undefined}
                  className={cn(
                    "object-cover transition-transform duration-700 group-hover:scale-110",
                    (project as any).imagePosition ? `object-${(project as any).imagePosition}` : "object-center"
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-amber-500 font-black text-xs mb-2 uppercase tracking-wider">
                      Project #{i + 1}
                    </div>
                    <h3
                      className={`text-white font-black uppercase mb-2 leading-tight ${
                        i === 0 ? "text-3xl md:text-4xl" : "text-xl"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <div className="text-zinc-300 text-sm font-bold">EXPLORE PROJECT →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
                      <div className="text-center mt-12">
                        <a href="#contact">
                          <Button
                            size="lg"
                            className="bg-amber-600 hover:bg-amber-700 text-white font-black px-12 py-8 text-lg uppercase tracking-wider shadow-2xl hover:shadow-amber-600/20 transition-all transform hover:-translate-y-1"
                          >
                            Start Your Project
                          </Button>
                        </a>
                      </div>
                    </FadeIn>
                  </div>
                </section>
      {/* 3. Why Us (Trust + Process) */}
            <section id="why-us" className="py-24 bg-zinc-900 border-t border-zinc-800">
              <div className="container mx-auto px-6">
                <FadeIn>
                  <div className="mb-16">
                    <h2 className="text-6xl font-black mb-4 uppercase">Why Choose Us</h2>
                    <div className="h-2 w-32 bg-amber-600 mb-6" />
                    <p className="text-xl text-zinc-400 font-semibold max-w-3xl leading-relaxed">
                      We don't cut corners. Our process is designed to deliver durable, long-lasting results that exceed safety standards and your expectations.
                    </p>
                  </div>
      
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
            {[
              {
                number: "100%",
                title: "Licensed & Insured",
                desc: "Fully certified contractors with comprehensive liability coverage",
              },
              {
                number: "5★",
                title: "Quality Standard",
                desc: "We are dedicated to providing superior craftsmanship and earning your trust through 5-star service on every project",
              },
              {
                number: "5+",
                title: "Years Warranty",
                desc: "Industry-leading workmanship guarantee covering all structural elements and installations",
              },
              {
                number: "100%",
                title: "Honest Pricing",
                desc: "Fully transparent estimates with zero hidden fees and detailed material breakdowns for every project",
              },
            ].map((item, i) => (
              <div key={i} className="text-center border-l-4 border-amber-600 pl-6 text-left">
                <div className="text-7xl font-black text-amber-500 mb-4">{item.number}</div>
                <h3 className="text-2xl font-black mb-3 uppercase">{item.title}</h3>
                <p className="text-zinc-400 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. Services Catalog */}
      <section id="services" className="py-24 bg-zinc-800">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="mb-16">
              <h2 className="text-6xl font-black mb-4 uppercase text-balance">Expert Deck Services</h2>
              <div className="h-2 w-32 bg-amber-600 mb-6" />
              <p className="text-xl text-zinc-400 font-semibold max-w-3xl leading-relaxed">
                We handle everything from building new decks to fixing old ones. Our goal is simple: to give you a beautiful, safe outdoor space that you and your family will enjoy for years.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Hammer,
                  title: "Custom Deck Building & Installation",
                  desc: "Build the perfect outdoor living space with our expert deck installation services. Whether you want a maintenance-free composite deck or a classic wood design, we create durable, beautiful structures tailored to your home and budget.",
                  features: ["Composite & PVC Decking", "Custom Wood Decks", "Multi-Level Designs", "Pool Decks & Patios"]
                },
                {
                  icon: Wrench,
                  title: "Deck Repair & Safety Restoration",
                  desc: "Is your deck looking worn or feeling unsafe? We specialize in local deck repair near you. We fix loose boards, replace rotted wood, strengthen wobbly railings, and perform safety inspections to ensure your deck is ready for family gatherings.",
                  features: ["Rotten Board Replacement", "Structural Reinforcement", "Railing Repair & Upgrades", "Stair Repair"]
                },
                {
                  icon: Shield,
                  title: "Fence Repair & Installation",
                  desc: "Secure your property with our professional fence services. We handle everything from new fence installation to emergency fence repair. Whether you need a privacy fence, a decorative picket fence, or storm damage repair, we get the job done right.",
                  features: ["Privacy Fence Installation", "Storm Damage Repair", "Gate Repair & Install", "Wood & Vinyl Fencing"]
                },
                {
                  icon: Award,
                  title: "Porch Railing & Outdoor Upgrades",
                  desc: "Enhance your home's curb appeal and safety with our porch railing replacement services. We also build custom pergolas and covered porches. Update your old, shaky railings with modern, code-compliant options that look great.",
                  features: ["Porch Railing Replacement", "Custom Pergolas", "Covered Porches", "Handrail Installation"]
                },
              ].map((service, i) => (
                <div 
                  key={i} 
                  className="bg-zinc-900 border border-zinc-700 p-8 md:p-10 flex flex-col hover:border-amber-600 transition-colors duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <service.icon className="w-32 h-32 text-amber-600" />
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="bg-amber-600 p-3 text-white shadow-lg shadow-amber-900/20">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-zinc-400 font-medium leading-relaxed mb-8 relative z-10 text-lg">
                    {service.desc}
                  </p>
                  
                  <div className="mt-auto relative z-10">
                    <div className="h-px w-full bg-zinc-800 mb-6" />
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-3 text-zinc-300 font-bold text-sm uppercase tracking-wide">
                          <CheckCircle className="h-5 w-5 text-amber-500 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <a href="#contact">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-black px-12 py-8 text-lg uppercase tracking-wider shadow-2xl hover:shadow-amber-600/20 transition-all transform hover:-translate-y-1"
                >
                  Get a Service Estimate
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. Service Areas with Map */}
      <section id="service-zones" className="py-24 bg-zinc-900 border-t border-zinc-800">
        <div className="container mx-auto px-6">
           <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase">Service Zones</h2>
                <div className="h-2 w-24 bg-amber-600 mb-8" />
                <p className="text-xl text-zinc-400 font-medium mb-10 leading-relaxed">
                  Proudly serving the entire Pocono Mountains region, Monroe County, and the Greater Scranton area. From Stroudsburg to Scranton, we are your local deck and fence experts.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "SCRANTON", "ALLENTOWN", "STROUDSBURG", "EAST STROUDSBURG", "MOUNT POCONO", 
                    "TANNERSVILLE", "TOBYHANNA", "POCONO LAKE",
                    "ALBRIGHTSVILLE", "BLAKESLEE", "BRODHEADSVILLE", "SAYLORSBURG"
                  ].map((area, i) => (
                    <div key={i} className="flex items-center gap-3 text-lg font-bold text-zinc-300">
                      <MapPin className="h-5 w-5 text-amber-500" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[650px] border-4 border-zinc-700 bg-zinc-800 overflow-hidden">
                <iframe 
                  src={mapUrl}
                  width="100%" 
                  height="100%" 
                  className="absolute left-0 md:-left-[15%] w-full md:w-[130%]"
                  style={{ 
                    border: 0,
                    top: '-150px',
                    height: 'calc(130% + 150px)',
                  }}
                  title="Service Zones Map"
                ></iframe>
                {/* Invisible overlay to prevent interaction */}
                <div className="absolute inset-0 z-10 cursor-default" />
                <div className="absolute top-4 left-4 bg-amber-600 text-white px-4 py-2 font-black uppercase text-sm pointer-events-none z-20">
                  Active Zones
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section id="reviews" className="py-24 bg-zinc-800 overflow-hidden">
        <div className="w-full">
          <div className="container mx-auto px-6 mb-16 text-center">
            <h2 className="text-6xl font-black mb-4 uppercase">Client Reviews</h2>
            <div className="h-2 w-32 bg-amber-600 mx-auto mb-6" />
            <p className="text-xl text-zinc-400 font-semibold max-w-3xl mx-auto leading-relaxed">
               See what homeowners say about our work and service.
            </p>
          </div>
          
          <IndustrialTestimonials />
          
          <div className="text-center mt-12">
            <a href="#contact">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white font-black px-12 py-8 text-lg uppercase tracking-wider shadow-2xl hover:shadow-amber-600/20 transition-all transform hover:-translate-y-1"
              >
                Join Our Satisfied Clients
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24 bg-zinc-900">
         <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-4 uppercase">FAQ</h2>
              <p className="text-xl text-zinc-400 font-medium">Common questions about our deck and fence services.</p>
            </div>

            <IndustrialFAQ />
         </div>
      </section>

      {/* 8. Contact Form */}
      <section id="contact" className="py-24 bg-gradient-to-b from-zinc-800 to-zinc-900 border-t-4 border-amber-500">
        <div className="container mx-auto px-6">
          <FadeIn direction="up">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase leading-tight">
                  Ready to Build?
                  <br />
                  <span className="text-amber-500">Let's Talk.</span>
                </h2>
                <p className="text-xl text-zinc-300 mb-8 font-semibold leading-relaxed">
                  Get a detailed project estimate within 24 hours. Our experts will evaluate your property and provide
                  comprehensive pricing with no hidden fees.
                </p>
                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4 text-zinc-300">
                    <div className="bg-zinc-700 p-3 rounded">
                      <Phone className="h-6 w-6 text-amber-500" />
                    </div>
                    <div>
                       <div className="text-xs font-black text-zinc-500 uppercase">Call Now</div>
                       <a href="tel:+19174050440" className="font-bold text-xl hover:text-amber-500 transition-colors">+1 917 405 0440</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-300">
                    <div className="bg-zinc-700 p-3 rounded">
                      <Clock className="h-6 w-6 text-amber-500" />
                    </div>
                    <div>
                       <div className="text-xs font-black text-zinc-500 uppercase">Hours</div>
                       <span className="font-semibold text-lg">Mon-Sat: 8am - 7pm</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-300">
                    <div className="bg-zinc-700 p-3 rounded">
                      <Mail className="h-6 w-6 text-amber-500" />
                    </div>
                    <div>
                       <div className="text-xs font-black text-zinc-500 uppercase">Email Us</div>
                       <a href="mailto:jobdonecrew@gmail.com" className="font-semibold text-lg hover:text-amber-500 transition-colors">jobdonecrew@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-700 border-4 border-amber-500 p-8 shadow-2xl shadow-amber-900/10">
                <h3 className="text-2xl font-black mb-6 uppercase text-white">Get Your Free Quote</h3>
                <IndustrialContactForm />
              </div>
            </div>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Column 1: Brand & About */}
            <div className="space-y-6">
              <Link href="#home" className="block">
                <Image
                  src="/jobdonecrew-logo.svg"
                  alt="JobDoneCrew - Industrial Deck Builders"
                  width={180}
                  height={50}
                  className="w-48 h-auto invert opacity-90 hover:opacity-100 transition-opacity"
                />
              </Link>
              <p className="text-zinc-500 font-medium text-sm leading-relaxed max-w-xs">
                Job Done Crew delivers premium deck construction and outdoor renovation services in Scranton and the Poconos. We combine traditional craftsmanship with modern materials to build spaces that last a lifetime.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-black text-lg mb-6 uppercase text-white tracking-wider border-b-2 border-amber-600 inline-block pb-1">Our Services</h4>
              <ul className="space-y-4">
                {[
                  { name: "Custom Deck Building", href: "#services" },
                  { name: "Deck Repair & Safety", href: "#services" },
                  { name: "Fence Installation", href: "#services" },
                  { name: "Porch & Railing Updates", href: "#services" },
                  { name: "Commercial Projects", href: "#contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-zinc-400 hover:text-amber-500 transition-colors font-medium text-sm block group">
                      <span className="group-hover:translate-x-1 transition-transform inline-block">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Service Areas */}
            <div>
              <h4 className="font-black text-lg mb-6 uppercase text-white tracking-wider border-b-2 border-amber-600 inline-block pb-1">Service Areas</h4>
              <ul className="space-y-4 grid grid-cols-1">
                {[
                  "Scranton, PA",
                  "Allentown, PA",
                  "Stroudsburg, PA",
                  "East Stroudsburg, PA",
                  "Mount Pocono, PA",
                  "Blakeslee, PA",
                  "Tannersville, PA"
                ].map((area) => (
                  <li key={area} className="text-zinc-400 text-sm font-medium flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-zinc-600" />
                    {area}
                  </li>
                ))}
              </ul>
              <a href="#service-zones" className="inline-block mt-6 text-amber-500 text-xs font-black uppercase tracking-widest hover:text-white transition-colors border-b border-amber-500 hover:border-white pb-0.5">
                View Full Service Map →
              </a>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h4 className="font-black text-lg mb-6 uppercase text-white tracking-wider border-b-2 border-amber-600 inline-block pb-1">Get In Touch</h4>
              <div className="space-y-5">
                <div className="flex items-start gap-4 group">
                  <div className="bg-zinc-900 p-2 rounded-sm text-amber-600 group-hover:text-white group-hover:bg-amber-600 transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-500 uppercase mb-0.5">Call Us 24/7</div>
                    <a href="tel:+19174050440" className="text-zinc-300 font-bold hover:text-white transition-colors text-lg">+1 917 405 0440</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="bg-zinc-900 p-2 rounded-sm text-amber-600 group-hover:text-white group-hover:bg-amber-600 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-500 uppercase mb-0.5">Email Quote Request</div>
                    <a href="mailto:jobdonecrew@gmail.com" className="text-zinc-300 font-bold hover:text-white transition-colors text-base break-all">jobdonecrew@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-zinc-900 p-2 rounded-sm text-amber-600 group-hover:text-white group-hover:bg-amber-600 transition-colors">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-500 uppercase mb-0.5">Working Hours</div>
                    <div className="text-zinc-300 font-medium text-sm">Mon - Sat: 8:00 AM - 7:00 PM</div>
                    <div className="text-zinc-500 text-xs mt-1">Sunday: By Appointment</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-zinc-900 pt-8 flex justify-center text-xs font-bold text-zinc-500 uppercase tracking-wider">
            <p>© {new Date().getFullYear()} Job Done Crew. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
