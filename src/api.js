import axios from "axios"

export default function(CEP) {
	return axios.get(`https://viacep.com.br/ws/${CEP.trim()}/json/`)
	.catch(err => {
		if(err.response)
			return {data: {erro: "Não foi possível conectar à API"}}
		if(err.request)
			return {data: {erro: "CEP inválido"}}
		return {data: {erro: "Algo inesperado ocorreu"}}
	})
}