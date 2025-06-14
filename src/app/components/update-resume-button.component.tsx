import { FunctionComponent } from "react";
import { validateJson } from "../validators/json.validator";
import { useResume } from "../providers/resume.provider";
import { toaster } from "@/components/ui/toaster";
import { Button, Text } from "@chakra-ui/react";
import { LuUpload } from "react-icons/lu";

interface UpdateResumeButtonComponentProps {
	id: string;
	json: string;
}

export const UpdateResumeButtonComponent: FunctionComponent<
	UpdateResumeButtonComponentProps
> = ({ id, json }) => {
	const { updateResume } = useResume();

	const handleUpdateResume = () => {
		const validation = validateJson(json);

		if (validation.valid) {
			updateResume(id, JSON.parse(json!));

			toaster.success({
				title: "Resume updated!",
			});
		} else {
			validation.errors.map((error) => {
				toaster.error({
					title: "Unable to update resume",
					description: error,
				});
			});
		}
	};

	return (
		<Button
			variant="surface"
			colorPalette="green"
			onClick={handleUpdateResume}
		>
			<LuUpload />

			<Text display={{ base: "none", md: "inline" }}>Update</Text>
		</Button>
	);
};
