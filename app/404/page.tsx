
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Error404() {

	return (
		<>

			<Layout footerStyle={1}>
				<div className="container pt-140 pb-170">
					<div className="row">
						<div className="col-md-5 mx-auto">
							<div className="d-flex justify-content-center align-items-center flex-column">
								<h1>404</h1>
								<h5>Página no encontrada</h5>
								<p className="text-md-medium neutral-500 text-center">Página no disponible. Por favor busque nuevamente o <br /> navegar utilizando el menú.</p>
								<Link href="/" className="btn btn-primary mt-30"><img src="/assets/imgs/template/icons/arrow-left.svg" /> Ir al inicio</Link>
								<img src="/assets/imgs/template/404.png" alt="AD - Coches" />
							</div>
						</div>
					</div>
				</div>

			</Layout>
		</>
	)
}