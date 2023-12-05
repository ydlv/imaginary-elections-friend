
import { InputProps, TextField } from "@mui/material";
import { noop } from "../../../util/fp";
import React from "react";

export interface NumberFieldProps {
    value: number;
    onChange?: (value: number) => void
    inputProps?: Partial<InputProps & { min: number, max: number }>,
    integer?: boolean
}

function toValue(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, props: NumberFieldProps) {
	const parser = props.integer ? parseInt : parseFloat;
	const value = parser(e.target.value);
	if(value != value) {
		// NaN
		return props.value;
	}
	const {min, max} = props.inputProps as { min?: number, max?: number };
	if(min !== undefined && value < min) return min;
	if(max !== undefined && value > max) return max;
	return value;
}

export default function NumberField(props: NumberFieldProps) {
	const further: Partial<InputProps> = props.inputProps || {};
	return (
		<TextField
			inputProps={{ type: "number",  }}
			value={(props.value)}
			onChange={e => (props.onChange || noop)(toValue(e, props))}
			
			InputProps={further}
		/>
	);
}