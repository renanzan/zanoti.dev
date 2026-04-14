"use client";

import {
	ArrowLeft,
	Building,
	Calendar,
	ExternalLink,
	User
} from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import ContentPage from "@/components/ContentPage";
import { getCompanyById } from "@/constants/companies";
import { getProjectById } from "@/constants/projects";

export default function ProjectPage() {
	const { id } = useParams<{ id: string }>();
	const project = getProjectById(id);
	const company = project?.companyId ? getCompanyById(project.companyId) : null;

	if (!project) {
		notFound();
	}

	const frontMatter = {
		title: project.title,
		description: project.description,
		caption: "Projeto"
	};

	return (
		<ContentPage frontMatter={frontMatter} hideTableOfContents>
			{/* Header */}
			<div className="mb-8">
				<Link
					href="/projects"
					className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 mb-4"
				>
					<ArrowLeft className="w-4 h-4" />
					Voltar para Projetos
				</Link>

				{/* Company Info */}
				<div className="mb-8">
					{company && (
						<div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-500 mb-6">
							<div className="flex items-center gap-2">
								<Building className="w-4 h-4" />
								<span>{company.name}</span>
							</div>

							<div className="flex items-center gap-2">
								<Calendar className="w-4 h-4" />
								<span>{company.period}</span>
							</div>

							<div className="flex items-center gap-2">
								<User className="w-4 h-4" />
								<span>{company.role}</span>
							</div>
						</div>
					)}

					{project.links && (
						<div className="flex gap-2">
							{project.links.live && (
								<a
									href={project.links.live}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
								>
									<ExternalLink className="w-4 h-4" />
									Ver Projeto
								</a>
							)}
							{project.links.github && (
								<a
									href={project.links.github}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
								>
									<FaGithub className="w-4 h-4" />
									Código
								</a>
							)}
						</div>
					)}
				</div>
			</div>

			{/* Context */}
			<div className="mb-8">
				<h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
					Contexto
				</h2>

				{project.context.map((paragraph, idx) => (
					<p key={`context-paragraph-${idx}`}>{paragraph}</p>
				))}
			</div>

			{/* Technologies */}
			<div className="mb-8">
				<h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
					Tecnologias Utilizadas
				</h2>
				<div className="flex flex-wrap gap-2">
					{project.technologies.map((tech) => (
						<span
							key={tech}
							className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm"
						>
							{tech}
						</span>
					))}
				</div>
			</div>

			{/* Challenges */}
			{project.challenges && (
				<div className="mb-8">
					<h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
						Desafios Técnicos
					</h2>

					<ul className="space-y-2">
						{project.challenges.map((challenge, index) => (
							<li key={index} className="flex items-start gap-3">
								{challenge}
							</li>
						))}
					</ul>
				</div>
			)}

			{/* Architectural Decisions */}
			{project.architecturalDecisions && (
				<div className="mb-8">
					<h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
						Decisões Técnicas
					</h2>

					<ul className="space-y-2">
						{project.architecturalDecisions.map((challenge, index) => (
							<li key={index} className="flex items-start gap-3">
								{challenge}
							</li>
						))}
					</ul>
				</div>
			)}

			{/* Performance */}
			{project.performance && (
				<div className="mb-8">
					<h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
						Atuação
					</h2>

					<ul className="space-y-2">
						{project.performance.map((challenge, index) => (
							<li key={index} className="flex items-start gap-3">
								{challenge}
							</li>
						))}
					</ul>
				</div>
			)}

			{/* Highlights */}
			{project.highlights && (
				<div className="mb-8">
					<h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
						Principais Funcionalidades
					</h2>
					<ul className="space-y-2">
						{project.highlights.map((highlight, index) => (
							<li key={index} className="flex items-start gap-3">
								{highlight}
							</li>
						))}
					</ul>
				</div>
			)}

			{/* Results */}
			{project.results && (
				<div className="mb-8">
					<h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
						Resultados Alcançados
					</h2>
					<ul className="space-y-2">
						{project.results.map((result, index) => (
							<li key={index} className="flex items-start gap-3">
								{result}
							</li>
						))}
					</ul>
				</div>
			)}

			{/* Company Info */}
			{company && (
				<div className="border-t border-slate-200 dark:border-slate-700 pt-8">
					<h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
						Sobre a Empresa
					</h2>
					<div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
						<div className="flex items-start justify-between mb-4">
							<div>
								<h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
									{company.name}
								</h3>
								<p className="text-slate-600 dark:text-slate-400">
									{company.industry}
								</p>
							</div>
							{company.website && (
								<a
									href={company.website}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
								>
									<ExternalLink className="w-4 h-4" />
									Website
								</a>
							)}
						</div>
						<p className="text-slate-700 dark:text-slate-300 mb-4">
							{company.description}
						</p>
						<div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
							<span>Período: {company.period}</span>
							<span>•</span>
							<span>Cargo: {company.role}</span>
						</div>
					</div>
				</div>
			)}
		</ContentPage>
	);
}
