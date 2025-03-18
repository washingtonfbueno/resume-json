import React, { FunctionComponent } from "react";
import { Document, Page, StyleSheet, View } from "@react-pdf/renderer";

import { IResume, IResumeContent } from "../../types/resume.types";
import { Header } from "./header";
import { Education } from "./education";
import { Skills } from "./skills";
import { Projects } from "./projects";
import { Experience } from "./experience";

const styles = StyleSheet.create({
	page: {
		fontSize: 14,
		flexDirection: "column",
		padding: 36,
		fontFamily: "Times-Roman",
		wrap: false,
		wordBreak: "break-word",
	},
});

interface ResumeDocumentProps extends IResumeContent {}

export const ResumeDocument: FunctionComponent<ResumeDocumentProps> = ({
	metadata,
	header,
	education,
	skills,
	projects,
	experience,
}) => {
	const selectSection = (section: string) => {
		switch (section) {
			case "education":
				return education && <Education education={education} />;

			case "skills":
				return skills && <Skills skills={skills} />;

			case "projects":
				return projects && <Projects projects={projects} />;
			case "experience":
				return experience && <Experience experience={experience} />;
		}

		return <></>;
	};

	return (
		<Document>
			<Page style={styles.page}>
				{header && <Header header={header} />}

				{metadata?.sectionDisplayOrder.map((section, index) => (
					<View key={index}>{selectSection(section)}</View>
				))}
			</Page>
		</Document>
	);
};
