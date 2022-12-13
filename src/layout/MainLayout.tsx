import Header from "../components/Header";

import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}
