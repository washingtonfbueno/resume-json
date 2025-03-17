import { FunctionComponent } from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { Section } from "./components/section";
import { DateLocation } from "./components/date-location";
import { Subtitle } from "./components/subtitle";
import { SecondarySubtitle } from "./components/secondary-subtitle";
import { IEducation, IResumeSection } from "@/app/types/resume.types";

// Styles for DefaultEducation
const styles = StyleSheet.create({
	educationItem: {
		display: "flex",
		flexDirection: "row", // Equivalent to `flex` and `justify-between`
		justifyContent: "space-between", // Spacing between the items
	},
	educationH: {
		display: "flex",
		flexDirection: "column",
	},
});

interface DefaultEducationProps {
	education: IResumeSection<IEducation>;
}

export const DefaultEducation: FunctionComponent<DefaultEducationProps> = ({
	education,
}) => {
	return (
		<Section sectionTitle={education.title}>
			{education.items.map(
				(
					{ institution, degree, startDate, endDate, state, country },
					index
				) => (
					<View style={styles.educationItem} key={index}>
						<View style={styles.educationH}>
							<Subtitle>{institution}</Subtitle>
							<SecondarySubtitle>{degree}</SecondarySubtitle>
						</View>

						<DateLocation
							{...{ startDate, endDate, state, country }}
						/>
					</View>
				)
			)}
		</Section>
	);
};
