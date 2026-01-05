import { projects } from "@/lib/projects"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Modal } from "@/components/ui/modal"
import { ModalQuoteButton } from "@/components/ui/modal-quote-button"
import { Shield, CheckCircle } from "lucide-react"
import { ProjectGallery } from "@/components/project-gallery"

export default async function ProjectModal({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) notFound()

  const allImages = [project.image, ...(project.slides || [])]

  return (
    <Modal>
      <div className="flex flex-col bg-zinc-900 text-white">
        <div className="relative w-full h-[40vh] bg-black overflow-hidden">
             <ProjectGallery 
                images={allImages} 
                title={project.title}
                imgPosition={(project as any).imagePosition}
                imgRotation={(project as any).imageRotation}
             />
        </div>
        
        <div className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                    <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight">
                        {project.title}
                    </h2>
                </div>
                <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase whitespace-nowrap">
                    <Shield className="h-4 w-4 text-amber-500" />
                    Licensed & Insured
                </div>
            </div>
            
            <div className="h-1 w-20 bg-amber-600 mb-8" />
            
            <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div className="md:col-span-2">
                    <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                        {project.description}
                    </p>
                </div>
                <div className="bg-zinc-950/50 p-6 rounded border border-zinc-800 h-fit">
                    <h3 className="text-white font-black text-sm uppercase mb-4 tracking-wider">Specifications</h3>
                    <div className="space-y-3">
                        {project.details.map((detail, i) => (
                            <div key={i} className="flex items-start gap-3 text-zinc-400 text-sm font-semibold">
                                <CheckCircle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                                <span>{detail}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="pt-8 border-t border-zinc-800 flex justify-center">
                <ModalQuoteButton />
            </div>
        </div>
      </div>
    </Modal>
  )
}
