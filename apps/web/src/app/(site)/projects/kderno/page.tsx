"use client";

import { getCompanyById } from "@/constants/companies";
import { getProjectById } from "@/constants/projects";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function KdernoProjectPage() {
	const project = getProjectById("kderno");
	const company = project ? getCompanyById(project.companyId) : null;

	if (!project || !company) {
		return <div>Projeto não encontrado</div>;
	}

	return (
		<div className="max-w-4xl mx-auto px-4 py-8">
			{/* Header */}
			<div className="mb-8">
				<Link 
					href="/projects" 
					className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 mb-4"
				>
					<ArrowLeft className="w-4 h-4" />
					Voltar para Projetos
				</Link>
				
				<div className="flex items-start justify-between">
					<div>
						<h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
							{project.title}
						</h1>
						<p className="text-xl text-slate-600 dark:text-slate-400 mb-4">
							{project.description}
						</p>
						<div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
							<span>{company.name}</span>
							<span>•</span>
							<span>{project.period}</span>
							<span>•</span>
							<span>{project.role}</span>
						</div>
					</div>
					
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
									<Github className="w-4 h-4" />
									Código
								</a>
							)}
						</div>
					)}
				</div>
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

			{/* Highlights */}
			<div className="mb-8">
				<h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
					Principais Funcionalidades
				</h2>
				<ul className="space-y-2">
					{project.highlights.map((highlight, index) => (
						<li key={index} className="flex items-start gap-3">
							<span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
							<span className="text-slate-700 dark:text-slate-300">{highlight}</span>
						</li>
					))}
				</ul>
			</div>

			{/* Challenges */}
			<div className="mb-8">
				<h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
					Desafios Técnicos
				</h2>
				<ul className="space-y-2">
					{project.challenges.map((challenge, index) => (
						<li key={index} className="flex items-start gap-3">
							<span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
							<span className="text-slate-700 dark:text-slate-300">{challenge}</span>
						</li>
					))}
				</ul>
			</div>

			{/* Results */}
			<div className="mb-8">
				<h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
					Resultados Alcançados
				</h2>
				<ul className="space-y-2">
					{project.results.map((result, index) => (
						<li key={index} className="flex items-start gap-3">
							<span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
							<span className="text-slate-700 dark:text-slate-300">{result}</span>
						</li>
					))}
				</ul>
			</div>

			{/* Company Info */}
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
					<p className="text-slate-700 dark:text-slate-300 mb-4">
						{company.description}
					</p>
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
		</div>
	);
}
