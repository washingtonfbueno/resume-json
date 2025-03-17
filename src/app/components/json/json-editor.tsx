import React, { FunctionComponent, useState } from "react";
import Editor, { OnMount } from "@monaco-editor/react";
import { jsonSchema } from "../../schemas/json-schema";

interface JsonEditorProps {
	json: string | undefined;
	onChange: (updatedJson: string | undefined) => void;
}

export const JsonEditor: FunctionComponent<JsonEditorProps> = ({
	json,
	onChange,
}) => {
	const handleEditorMount: OnMount = (editor, monacoInstance) => {
		monacoInstance.languages.json.jsonDefaults.setDiagnosticsOptions({
			validate: true,
			schemas: [
				{
					uri: json!, // Schema URL (can be local or remote)
					fileMatch: ["*"], // Apply to all JSON files
					schema: jsonSchema,
				},
			],
		});

		// Disable horizontal scroll and enable word wrapping
		editor.updateOptions({
			scrollbar: {
				horizontal: "hidden", // Hide horizontal scrollbar
			},
			wordWrap: "on", // Enable word wrapping
			wrappingIndent: "same", // Optional: adjusts the wrapping indentation
		});
	};

	return (
		<Editor
			className="h-full w-full"
			theme="vs-dark"
			defaultLanguage="json"
			onChange={onChange}
			value={json}
			onMount={handleEditorMount}
		/>
	);
};
