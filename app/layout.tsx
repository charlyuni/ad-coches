import type { Metadata } from "next"
import { Urbanist } from "next/font/google"
import "@/node_modules/react-modal-video/css/modal-video.css"
import "/public/assets/css/main.css"

const urbanist = Urbanist({
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	variable: "--urbanist",
	display: 'swap',
})

export const metadata: Metadata = {
	title: "AD-Coches - Tu próximo coche en Almería",
	description: "AD-Coches es tu concesionario de coches en Almería. Compra tu coche de segunda mano o nuevo con nosotros. ¡Visítanos!",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${urbanist.variable}`}>{children}</body>
		</html>
	)
}
