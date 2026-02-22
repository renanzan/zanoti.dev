"use client";

import { H2, H3 } from "@/components/content/Heading";
import ContentPage from "@/components/ContentPage";
import { getCompanyById } from "@/constants/companies";
import { getProjectById } from "@/constants/projects";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function PipelineReceptivoPage() {
	const project = getProjectById("pipeline-receptivo");
	const company = project ? getCompanyById(project.companyId) : null;

	if (!project || !company) {
		return <div>Projeto não encontrado</div>;
	}

	const frontMatter = {
		title: project.title,
		description: project.description,
		caption: "Projeto"
	};

	return (
		<ContentPage frontMatter={frontMatter} hideTableOfContents>
			{/* Back Button */}
			<div className="mb-6">
				<Link
					href="/projects"
					className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
				>
					<ArrowLeft className="w-4 h-4" />
					Voltar para Projetos
				</Link>
			</div>

			{/* Project Info */}
			<div className="mb-8">
				<div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500 mb-6">
					<span>{company.name}</span>
					<span>•</span>
					<span>{project.period}</span>
					<span>•</span>
					<span>{project.role}</span>
				</div>

				{project.links && (
					<div className="flex gap-2 mb-6">
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
								<Github className="w-4 h-4" />
								Código
							</a>
						)}
					</div>
				)}
			</div>

			{/* Technologies */}
			<div className="mb-8">
				<H2>Tecnologias Utilizadas</H2>
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

			{/* Highlights */}
			<div className="mb-8">
				<H2>Principais Funcionalidades</H2>
				<ul>
					{project.highlights.map((highlight, index) => (
						<li key={index}>{highlight}</li>
					))}
				</ul>
			</div>

			{/* Challenges */}
			<div className="mb-8">
				<H2>Desafios Técnicos</H2>
				<ul>
					{project.challenges.map((challenge, index) => (
						<li key={index}>{challenge}</li>
					))}
				</ul>
			</div>

			{/* Results */}
			<div className="mb-8">
				<H2>Resultados Alcançados</H2>
				<ul>
					{project.results.map((result, index) => (
						<li key={index}>{result}</li>
					))}
				</ul>
			</div>

			{/* Company Info */}
			<div className="border-t border-slate-200 dark:border-slate-700 pt-8">
				<H2>Sobre a Empresa</H2>
				<div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 mt-4">
					<div className="flex items-start justify-between mb-4">
						<div>
							<H3>{company.name}</H3>
							<p className="text-slate-600 dark:text-slate-400">
								{company.industry} • {company.location}
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
					<p className="mb-4">{company.description}</p>
					<div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
						<span>Período: {company.period}</span>
						<span>•</span>
						<span>Cargo: {company.role}</span>
						{company.teamSize && (
							<>
								<span>•</span>
								<span>Equipe: {company.teamSize}</span>
							</>
						)}
					</div>
				</div>
			</div>
		</ContentPage>
	);
}
