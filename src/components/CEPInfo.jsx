import React from "react"

export default function(props) {


	return <div className="full-cntr" id="info-cntr">
		<span id="info-box">
			<p className="cep-info">Logradouro: {props.logradouro}</p>
			<p className="cep-info">Bairro: {props.bairro}</p>
			<p className="cep-info">Cidade: {props.localidade}</p>
			<p className="cep-info">Estado: {props.uf}</p>

		</span>
	</div>
}
