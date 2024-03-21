import React from "react";

interface Props {
	children: React.ReactNode;
}

export default function MaxWidth({ children }: Props) {
	return <div className=" max-w-[100rem] mx-auto">{children}</div>;
}
