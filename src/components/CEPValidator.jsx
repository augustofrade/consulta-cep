import React, {useState} from "react";
import GetCEP from "../api.js"
import CEPInfo from "./CEPInfo"

export default function(props) {
	const [ cep, setCep ] = useState("")

	const [cepData, setCepData] = useState({})

	function getData() {
		return populateInfo(GetCEP(cep))
	}


	function populateInfo(res) {
		res.then(({data}) => {
			if(data.erro) {
				// Dependendo do cep a API retorna um objeto: "{erro: true}"
				data.erro = data.erro === true ? "CEP Inválido" : data.erro
				alert(data.erro)
				return
			}
			setCepData(data)
		})
	}


	return (
		<div id="container">
			<div id="cep-container">
				<div id="cep-form">
					<h1 className="display-3">Consulta de CEP</h1>
					<div className="form-group">
						<input value={cep} className="form-control" placeholder="CEP" onChange={e => setCep(e.target.value)} />
					</div>
					<button className="btn btn-outline-primary" onClick={getData}>Consultar</button>
				</div>
				{cepData.cep && <CEPInfo {...cepData}/>}
			</div>
		</div>
	)
}