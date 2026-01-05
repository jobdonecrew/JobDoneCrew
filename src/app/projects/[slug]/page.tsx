import { projects } from "@/lib/projects"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Shield, ArrowLeft } from "lucide-react"
import { ProjectGallery } from "@/components/project-gallery"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  
  if (!project) return { title: "Project Not Found" }

  return {
    title: `${project.title} | Job Done Crew Projects`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Job Done Crew Projects`,
      description: project.description,
      type: "article",
      url: `https://jobdonecrew.com/projects/${slug}`,
      images: [
        {
          url: `https://jobdonecrew.com${project.image}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    alternates: {
      canonical: `/projects/${slug}`,
    },
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) notFound()

  const allImages = [project.image, ...(project.slides || [])]

  // Breadcrumb Schema
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://jobdonecrew.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://jobdonecrew.com/#projects",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `https://jobdonecrew.com/projects/${slug}`,
      },
    ],
  }

  // Project/Service Schema
  const projectLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: project.category,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Job Done Crew",
      image: "https://jobdonecrew.com/jobdonecrew-logo.svg",
      telephone: "+19174050440",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Stroudsburg",
        addressRegion: "PA",
        addressCountry: "US",
      },
    },
    name: project.title,
    description: project.description,
    areaServed: {
      "@type": "State",
      name: "Pennsylvania",
    },
    image: `https://jobdonecrew.com${project.image}`,
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectLd) }}
      />

        <div className="container mx-auto px-6 py-12">
            <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-amber-500 mb-8 transition-colors font-bold uppercase text-sm">
                <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12">
                <div className="h-full min-h-[400px] border-4 border-zinc-800 rounded-lg overflow-hidden">
                                          <ProjectGallery 
                                             images={allImages} 
                                             title={project.title} 
                                             imgPosition={(project as any).imagePosition}
                                             imgRotation={(project as any).imageRotation}
                                          />                </div>
                
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">
                        {project.title}
                    </h1>
                    <div className="h-2 w-24 bg-amber-600 mb-8" />
                    
                    <p className="text-xl text-zinc-300 leading-relaxed mb-8 font-medium">
                        {project.description}
                    </p>

                    <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg mb-8">
                        <h3 className="text-lg font-black uppercase mb-4 text-white">Project Specifications</h3>
                        <ul className="space-y-3">
                            {project.details.map((detail, i) => (
                                <li key={i} className="flex items-center gap-3 text-zinc-400 font-semibold">
                                    <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex items-center gap-4">
                         <Link href="/#contact" className="flex-1">
                            <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-6 text-lg uppercase">
                                Get Similar Quote
                            </Button>
                         </Link>
                         <div className="flex items-center gap-2 text-zinc-400 font-bold px-4">
                            <Shield className="h-5 w-5 text-amber-500" />
                            <span className="text-sm uppercase">Lifetime Warranty</span>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}