import React from "react";


export function ExternalLink({to, children}: {to: string} & React.PropsWithChildren) {
	return <a href={to} target="_blank" rel="noreferrer">{children}</a>;
}