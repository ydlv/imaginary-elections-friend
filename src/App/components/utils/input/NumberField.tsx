
import { InputProps, TextField } from "@mui/material";
import { noop } from "../../../util/fp";
import React from "react";

export interface NumberFieldProps {
    value: number;
    onChange?: (value: number) => void
    inputProps?: Partial<InputProps & { min: number, max: number }>,
    integer?: boolean
}

export default function NumberField(props: NumberFieldProps) {
	const further: Partial<InputProps> = props.inputProps || {};
	return (
		<TextField
			inputProps={{ type: "number",  }}
			value={(props.value)}
			onChange={e => (props.onChange || noop)((props.integer ? parseInt : parseFloat)(e.target.value) || 0)}
			InputProps={further}
		/>
	);
}