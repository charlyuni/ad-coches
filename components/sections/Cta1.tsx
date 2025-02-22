'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Cta1() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<section className="box-cta-1 background-100 py-96">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 pe-lg-5 wow fadeInUp">
							<div className="card-video">
								<div className="card-image"><a className="btn btn-play popup-youtube" onClick={() => setOpen(true)} /><img src="/assets/imgs/cta/cta-1/video.png" alt="AD-Coches" /></div>
							</div>
						</div>
						<div className="col-lg-6 mt-lg-0 mt-4">
							<span className="btn btn-signin bg-white text-dark mb-4 wow fadeInUp">Compra o vende tu coche</span>
							<h4 className="mb-4 neutral-1000 wow fadeInUp">Reciba una oferta competitiva. Véndanos su automóvil hoy.</h4>
							<p className="text-lg-medium neutral-500 mb-4 wow fadeInUp">Nos comprometemos a brindar un servicio excepcional, precios competitivos y una amplia selección de opciones para nuestros clientes.</p>
							<div className="row">
								<div className="col-md-6">
									<ul className="list-ticks-green">
										<li className="neutral-1000 wow fadeInUp" data-wow-delay="0.1s">Mecánicos certificados</li>
										<li className="neutral-1000 wow fadeInUp" data-wow-delay="0.2s">Precio justo garantizado</li>
										
									</ul>
								</div>
								<div className="col-md-6">
									<ul className="list-ticks-green wow fadeInUp">
										<li className="neutral-1000 wow fadeInUp" data-wow-delay="0.1s">Servicio postventa</li>
									
										<li className="neutral-1000 wow fadeInUp" data-wow-delay="0.2s">Coches garantizados</li>
										
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ModalVideo channel='youtube' isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />
		</>
	)
}
