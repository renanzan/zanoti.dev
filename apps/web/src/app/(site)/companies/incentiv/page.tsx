"use client";

import { H2, H3 } from "@/components/content/Heading";
import ContentPage from "@/components/ContentPage";
import { getCompanyById } from "@/constants/companies";
import { getProjectsByCompany } from "@/constants/projects";
import {
	ArrowLeft,
	Building,
	Calendar,
	ExternalLink,
	MapPin,
	Users
} from "lucide-react";
import Link from "next/link";

export default function IncentivCompanyPage() {
	const company = getCompanyById("incentiv");
	const projects = getProjectsByCompany("incentiv");

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
						<MapPin className="w-4 h-4" />
						<span>{company.location}</span>
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
				</div>
			</div>

			{/* Company Info */}
			<div className="grid md:grid-cols-2 gap-8 mb-8">
				<div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
					<H3>Informações da Empresa</H3>
					<ul>
						{company.teamSize && (
							<li className="flex items-center gap-3 mb-3">
								<Users className="w-5 h-5 text-slate-500 flex-shrink-0" />
								<span>
									<strong>Equipe:</strong> {company.teamSize}
								</span>
							</li>
						)}
						<li className="flex items-center gap-3 mb-3">
							<Building className="w-5 h-5 text-slate-500 flex-shrink-0" />
							<span>
								<strong>Setor:</strong> {company.industry}
							</span>
						</li>
						<li className="flex items-center gap-3">
							<MapPin className="w-5 h-5 text-slate-500 flex-shrink-0" />
							<span>
								<strong>Localização:</strong> {company.location}
							</span>
						</li>
					</ul>
				</div>

				<div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
					<H3>Meu Papel</H3>
					<ul>
						<li className="mb-3">
							<strong>Cargo:</strong> {company.role}
						</li>
						<li>
							<strong>Período:</strong> {company.period}
						</li>
					</ul>
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
