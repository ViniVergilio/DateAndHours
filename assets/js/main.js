const h1 = document.querySelector('.container h1');

const data = new Date();
h1.innerHTML = data.toString();

function getDiaSemanaTexto(diaSemana) {
let DiaSemanaTexto

switch (diaSemana) {

case 0:
  getDiaSemanaTexto = 'Domingo';
  return DiaSemanaTexto;
  case 1:
    getDiaSemanaTexto = 'Segunda-feira';
  return DiaSemanaTexto;
  case 2:
    getDiaSemanaTexto = 'Terça-feira';
  return DiaSemanaTexto;
  case 3:
    getDiaSemanaTexto = 'Quarta-feira';
  return DiaSemanaTexto;
  case 4:
    getDiaSemanaTexto = 'Quinta-feira';
  return DiaSemanaTexto;
  case 5:
    getDiaSemanaTexto = 'Sexta-feira';
  return DiaSemanaTexto;
  case 6:
    getDiaSemanaTexto = 'Sábado';
  return DiaSemanaTexto;
  default:
  DiaSemanaTexto = ''
  return DiaSemanaTexto;
    }
  }
  
  function getNomeMes(numeroMes) {
    let NomeMes
    
    switch (numeroMes) {
    
    case 0:
      NomeMes = 'Janeiro';
      return NomeMes;
      case 1:
        NomeMes = 'Fevereiro';
      return NomeMes;
      case 2:
        NomeMes = 'Março';
      return NomeMes;
      case 3:
        NomeMes = 'Abril';
      return NomeMes;
      case 4:
        NomeMes = 'Maio';
      return NomeMes;
      case 5:
        NomeMes = 'Junho';
      return NomeMes;
      case 6:
        NomeMes = 'Julho';
      return NomeMes;
      case 7:
        NomeMes = 'Agosto';
      return NomeMes;
      case 8:
        NomeMes = 'Setembro';
      return NomeMes;
      case 9:
        NomeMes = 'Outubro';
      return NomeMes;
      case 10:
        NomeMes = 'Novembro';
      return NomeMes;
      case 11:
        NomeMes = 'Dezembro';
      return NomeMes;
        }
      }

      function zeroAEsquerda (num) {
        return num >=10? num : `0${num}`;
      }

  function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
      `${nomeDia}, ${data.getDate()} de ${data.getMonth()}`
      	` de ${data.getFullYear()}` + `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    );
  }

      
  h1.innerHTML = criaData(data);
