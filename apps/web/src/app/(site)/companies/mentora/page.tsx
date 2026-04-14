"use client";

import { ArrowLeft, Building, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";
import { H2, H3 } from "@/components/content/Heading";
import ContentPage from "@/components/ContentPage";
import { getCompanyById } from "@/constants/companies";
import { getProjectsByCompany } from "@/constants/projects";

export default function MentoraCompanyPage() {
	const company = getCompanyById("mentora");
	const projects = getProjectsByCompany("mentora");

	if (!company) {
		return <div>Empresa não encontrada</div>;
	}

	const frontMatter = {
		title: company.name,
		description: company.description,
		caption: "Empresa"
	};

	return (
		<ContentPage frontMatter={frontMatter} hideTableOfContents>
			{/* Back Button */}
			<div className="mb-6">
				<Link
					href="/work/experience"
					className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
				>
					<ArrowLeft className="w-4 h-4" />
					Voltar para Experiência
				</Link>
			</div>

			{/* Company Info */}
			<div className="mb-8">
				<div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-500 mb-6">
					<div className="flex items-center gap-2">
						<Calendar className="w-4 h-4" />
						<span>{company.period}</span>
					</div>
					<div className="flex items-center gap-2">
						<Building className="w-4 h-4" />
						<span>{company.industry}</span>
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
					{company.linkedin && (
						<a
							href={company.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
						>
							<ExternalLink className="w-4 h-4" />
							Linkedin
						</a>
					)}
				</div>
			</div>

			{/* Product Context & Technical Challenge */}
			<div className="flex flex-col gap-8 mb-8">
				<div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
					<H3>Contexto do Produto</H3>

					<p>{company.productContext}</p>
				</div>

				<div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
					<H3>Desafio Técnico</H3>

					<p>{company.technicalChallenge}</p>
				</div>
			</div>

			{/* Technologies */}
			<div className="mb-8">
				<H2>Tecnologias Utilizadas</H2>
				<div className="flex flex-wrap gap-2">
					{company.technologies.map((tech) => (
						<span
							key={tech}
							className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm"
						>
							{tech}
						</span>
					))}
				</div>
			</div>

			{/* Achievements */}
			<div className="mb-8">
				<H2>Principais Realizações</H2>
				<ul>
					{company.achievements.map((achievement, index) => (
						<li key={index}>{achievement}</li>
					))}
				</ul>
			</div>

			{/* Projects */}
			<div className="mb-8">
				<H2>Projetos Desenvolvidos</H2>
				<div className="space-y-4">
					{projects.map((project) => (
						<div
							key={project.id}
							className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6"
						>
							<div className="flex items-start justify-between gap-4">
								<div className="flex-1">
									<H3>{project.title}</H3>
									<p className="mb-3">{project.description}</p>
									<div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
										<span>{project.period}</span>
										<span>•</span>
										<span>{project.role}</span>
									</div>
								</div>
								<Link
									href={`/projects/${project.id}`}
									className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex-shrink-0"
								>
									Ver Detalhes
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</ContentPage>
	);
}
