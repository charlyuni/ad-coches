"use client";

import { useState } from "react";
import CounterUp from "../elements/CounterUp";
import Link from "next/link";

export default function Cta2() {
  const [carPrice, setCarPrice] = useState(20000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(12);
  const [downPayment, setDownPayment] = useState(200);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalLoan, setTotalLoan] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const calculateLoan = () => {
    const principal = carPrice - downPayment;
    const rate = interestRate / 100 / 12;
    const months = loanTerm;

    if (rate === 0) {
      const monthly = principal / months;
      setMonthlyPayment(monthly);
      setTotalLoan(principal);
      setTotalCost(monthly * months);
    } else {
      const monthly =
        (principal * rate * Math.pow(1 + rate, months)) /
        (Math.pow(1 + rate, months) - 1);
      setMonthlyPayment(monthly);
      setTotalLoan(principal);
      setTotalCost(monthly * months);
    }
  };

  return (
    <section className="box-cta-2 background-body overflow-hidden">
      <div className="bg-shape top-50 start-50 translate-middle" />
      <div className="container position-relative z-1">
        <div className="row">
          <div className="col-lg-5 pe-lg-5">
            <h3 className="text-white">Calcula la financiación de tu coche</h3>
            <p className="text-lg-medium text-white">
              Calcula tus pagos mensuales de préstamos para automóviles con esta
              calculadora.
            </p>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="mb-30 background-card p-md-5 p-4 rounded-3 mt-lg-0 mt-30">
              <h5 className="neutral-1000 mb-2">Calculadora</h5>
              <p className="text-sm-medium neutral-500 mb-25">
                Estimado de pago mensual. Los términos reales y las tasas de
                interés pueden variar.
              </p>
              <div className="form-contact">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="text-sm-medium neutral-1000">
                        Precio del coche
                      </label>
                      <input
                        className="form-control"
                        type="number"
                        value={carPrice}
                        onChange={(e) => setCarPrice(Number(e.target.value))}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="text-sm-medium neutral-1000">
                        Tasa de interés (%)
                      </label>
                      <input
                        className="form-control"
                        type="number"
                        value={interestRate}
                        onChange={(e) =>
                          setInterestRate(Number(e.target.value))
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="text-sm-medium neutral-1000">
                        Plazo (meses)
                      </label>
                      <input
                        className="form-control"
                        type="number"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(Number(e.target.value))}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="text-sm-medium neutral-1000">
                        Pago inicial
                      </label>
                      <input
                        className="form-control"
                        type="number"
                        value={downPayment}
                        onChange={(e) => setDownPayment(Number(e.target.value))}
                      />
                    </div>
                  </div>
                </div>

                <button className="btn btn-book mt-3" onClick={calculateLoan}>
                  Calcular
                </button>

                <div className="row py-4">
                  <div className="col-md-5 col-8 d-flex flex-column gap-1">
                    <p className="text-sm-bold neutral-1000">Costo total</p>
                    <p className="text-sm-bold neutral-1000">Préstamo total</p>
                    <p className="text-sm-bold neutral-1000">Pago mensual</p>
                  </div>
                  <div className="col-md-7 col-4 d-flex flex-column gap-1 align-items-end align-items-md-start">
                    <p className="text-sm-bold neutral-1000">
                      ${totalCost.toFixed(2)}
                    </p>
                    <p className="text-sm-bold neutral-1000">
                      ${totalLoan.toFixed(2)}
                    </p>
                    <p className="text-sm-bold text-primary-dark">
                      ${monthlyPayment.toFixed(2)}
                    </p>
                  </div>
                </div>

                <Link
                  href="https://wa.link/azje9c"
                  className="btn btn-book mt-3"
				  target="_blank"
                >
                  Comprar ahora
                  <svg
                    width={17}
                    height={16}
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 15L15.5 8L8.5 1M15.5 8L1.5 8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="border-top py-3 mt-3" />
          <div className="col-lg-7 mb-20">
            <div className="row">
              <div className="col-md-3 col-6">
                <h3 className="count text-white">
                  <CounterUp count={100} />
                </h3>
                <h3 className="text-white">%</h3>
                <p className="text-lg-bold text-white">Clientes Satisfechos</p>
              </div>
              <div className="col-md-3 col-6">
                <h3 className="count text-white">
                  <CounterUp count={365} />
                </h3>
                <p className="text-lg-bold text-white">
                  Atención Personalizada
                </p>
              </div>
              <div className="col-md-3 col-6">
                <h3 className="count text-white">
                  <CounterUp count={24} />
                </h3>
                <h3 className="text-white">h</h3>
                <p className="text-lg-bold text-white">
                  Otorgamiento de financiación
                </p>
              </div>
              <div className="col-md-3 col-6">
                <h3 className="count text-white">
                  <CounterUp count={72} />
                </h3>
                <h3 className="text-white">h</h3>
                <p className="text-lg-bold text-white">Entrega Garantizada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
