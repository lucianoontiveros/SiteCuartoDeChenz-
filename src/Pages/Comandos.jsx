import React from "react";
import BotonesCopiar from "../assets/utils/botonCopiar";

const sounds = {
  abrachetada: { image: "../assets/gallery/abrachetada.png", category: "" },
  abuscarla: { image: "../assets/gallery/abuscarla.png", category: "" },
  anda: { image: "../assets/gallery/anda.png", category: "" },
  asiestamos: { image: "../assets/gallery/asiestamos.png", category: "" },
  avisaron: { image: "../assets/gallery/asiestamos.png", category: "" },
  ayudame: { image: "../assets/gallery/ayudame.png", category: "" },
  belleza: { image: "../assets/gallery/belleza.png", category: "" },
  buenasnoches: { image: "../assets/gallery/buenasnoches.png", category: "" },
  buenastardes: { image: "../assets/gallery/buenastardes.png", category: "" },
  buendia: { image: "../assets/gallery/buendia.png", category: "" },
  chanchito: { image: "../assets/gallery/chanchito.png", category: "" },
  chingona: { image: "../assets/gallery/chingona.png", category: "" },
  chisme: { image: "../assets/gallery/chisme.png", category: "" },
  comerla: { image: "../assets/gallery/acomerla.png", category: "" },
  concentrado: { image: "../assets/gallery/concentrado.png", category: "" },
  correPerra: { image: "../assets/gallery/correperra.png", category: "" },
  donando: { image: "../assets/gallery/donado.png", category: "" },
  dormir: { image: "../assets/gallery/dormir.png", category: "" },
  transmiti: { image: "../assets/gallery/ds.png", category: "" },
  dulzura: { image: "../assets/gallery/dulzura.png", category: "" },
  elpecho: { image: "../assets/gallery/elpecho.png", category: "" },
  eltimer: { image: "../assets/gallery/eltimer.png", category: "" },
  empalmo: { image: "../assets/gallery/empalmo.png", category: "" },
  empanada: { image: "../assets/gallery/empanada.png", category: "" },
  yaesta: { image: "../assets/gallery/reprochando.png", category: "" },
  ese: { image: "../assets/gallery/reprochando.png", category: "" },
  estas: { image: "../assets/gallery/pordefecto.png", category: "" },
  fenomenal: { image: "../assets/gallery/fenomenal.png", category: "" },
  fin: { image: "../assets/gallery/sorprendido1.png", category: "" },
  forro: { image: "../assets/gallery/reprochando.png", category: "" },
  friend: { image: "../assets/gallery/friend.png", category: "" },
  grash: { image: "../assets/gallery/grash.png", category: "" },
  hicistes: { image: "../assets/gallery/hiciste.png", category: "" },
  hacelo: { image: "../assets/gallery/señalar.png", category: "" },
  haytiempo: { image: "../assets/gallery/eltimer.png", category: "" },
  hijo: { image: "../assets/gallery/mano.png", category: "" },
  ilegal: { image: "../assets/gallery/ilegal.png", category: "" },
  lachancla: { image: "../assets/gallery/lachancla.png", category: "" },
  lapala: { image: "../assets/gallery/lapala.png", category: "" },
  lapava: { image: "../assets/gallery/lapava.png", category: "" },
  lapaloma: { image: "../assets/gallery/lapaloma.png", category: "" },
  lapastillita: { image: "../assets/gallery/señalar.png", category: "" },
  pantallita: { image: "../assets/gallery/señalar.png", category: "" },
  papapa: { image: "../assets/gallery/papapa.png", category: "" },
  lautaro: { image: "../assets/gallery/lautaro.png", category: "" },
  licuado: { image: "../assets/gallery/licuado.png", category: "" },
  llorar: { image: "../assets/gallery/llorar.png", category: "" },
  luooz: { image: "../assets/gallery/loouz.png", category: "" },
  mate1: { image: "../assets/gallery/mate.png", category: "" },
  menor: { image: "../assets/gallery/menor.png", category: "" },
  mami: { image: "../assets/gallery/mira.png", category: "" },
  marcho: { image: "../assets/gallery/default.png", category: "" },
  meter: { image: "../assets/gallery/meter.png", category: "" },
  micho: { image: "../assets/gallery/micho.png", category: "" },
  mira: { image: "../assets/gallery/mira.png", category: "" },
  nojuego: { image: "../assets/gallery/nojugar.png", category: "" },
  nomequeme: { image: "../assets/gallery/verguenza.png", category: "" },
  noplan: { image: "../assets/gallery/yonofui.png", category: "" },
  nose: { image: "../assets/gallery/yonofui.png", category: "" },
  note: { image: "../assets/gallery/sorprendido1.png", category: "" },
  optimo: { image: "../assets/gallery/fenomenal.png", category: "" },
  papi: { image: "../assets/gallery/mira.png", category: "" },
  paraq: { image: "../assets/gallery/default.png", category: "" },
  pato: { image: "../assets/gallery/pato.png", category: "" },
  pelotudismo: { image: "../assets/gallery/default.png", category: "" },
  pica: { image: "../assets/gallery/default.png", category: "" },
  pium: { image: "../assets/gallery/pium.png", category: "" },
  placard: { image: "../assets/gallery/placar.png", category: "" },
  pongo: { image: "../assets/gallery/default.png", category: "" },
  pqno: { image: "../assets/gallery/default.png", category: "" },
  puntitos: { image: "../assets/gallery/puntitos.png", category: "" },
  quienes: { image: "../assets/gallery/default.png", category: "" },
  rechazo: { image: "../assets/gallery/rechazo.png", category: "" },
  regalar: { image: "../assets/gallery/regalar.png", category: "" },
  risa: { image: "../assets/gallery/risa.png", category: "" },
  ro: { image: "../assets/gallery/moderador.png", category: "" },
  jojo: { image: "../assets/gallery/jojojo.png", category: "" },
  jugar: { image: "../assets/gallery/jugar.png", category: "" },
  lalala: { image: "../assets/gallery/psico.png", category: "" },
  rodilla: { image: "../assets/gallery/mano.png", category: "" },
  rojo: { image: "../assets/gallery/rojo.png", category: "" },
  sangre: { image: "../assets/gallery/sangre.png", category: "" },
  sexo: { image: "../assets/gallery/sexo.png", category: "" },
  sorete: { image: "../assets/gallery/sorete.png", category: "" },
  temazo: { image: "../assets/gallery/temazo.png", category: "" },
  temazo1: { image: "../assets/gallery/temazo1.png", category: "" },
  tercermundista: { image: "../assets/gallery/default.png", category: "" },
  tere: { image: "../assets/gallery/tere.png", category: "" },
  tere2: { image: "../assets/gallery/tere.png", category: "" },
  tere3: { image: "../assets/gallery/tere.png", category: "" },
  tere4: { image: "../assets/gallery/tere.png", category: "" },
  tuki: { image: "../assets/gallery/boton.png", category: "" },
  tuki1: { image: "../assets/gallery/boton1.png", category: "" },
  tuki2: { image: "../assets/gallery/boton2.png", category: "" },
  verde: { image: "../assets/gallery/verde.png", category: "" },
  valeya: { image: "../assets/gallery/vale.png", category: "" },
  var: { image: "../assets/gallery/var.png", category: "" },
  usted: { image: "../assets/gallery/señalar.png", category: "" },
  unite: { image: "../assets/gallery/plantar.png", category: "" },
  unite2: { image: "../assets/gallery/plantar.png", category: "" },
  viernes: { image: "../assets/gallery/viernes.png", category: "" },
  volví: { image: "../assets/gallery/volvi.png", category: "" },
  yaentendi: { image: "../assets/gallery/sorprendido.png", category: "" },
  misamores: { image: "../assets/gallery/chisme.png", category: "" },
  qpesado: { image: "../assets/gallery/sorprendido1.png", category: "" },
  juancarlos: { image: "../assets/gallery/empalmo.png", category: "" },
  precoz: { image: "../assets/gallery/verguenza.png", category: "" },
  florcita: { image: "../assets/gallery/florcita.png", category: "" },
  velorio: { image: "../assets/gallery/velorio.png", category: "" },
  corazon: { image: "../assets/gallery/corazon.png", category: "" },
  mate: { image: "../assets/gallery/mate.png", category: "" },
  almorzar: { image: "../assets/gallery/comer.png", category: "" },
  cenar: { image: "../assets/gallery/comer.png", category: "" },
  desayunar: { image: "../assets/gallery/desayunar.png", category: "" },
  merendar: { image: "../assets/gallery/comer.png", category: "" },
  apaga: { image: "../assets/gallery/apaga.png", category: "" },
  sorbito: { image: "../assets/gallery/sorbito.png", category: "" },
  tierno: { image: "../assets/gallery/tierno.png", category: "" },
  lista: { image: "../assets/gallery/lista.png", category: "" },
  baño: { image: "../assets/gallery/baño.png", category: "" },
  basta: { image: "../assets/gallery/basta.png", category: "" },
  lobo: { image: "../assets/gallery/lobo.png", category: "" },
  habilitar: { image: "../assets/gallery/habilitar.png", category: "" },
  zarpado: { image: "../assets/gallery/zarpado.png", category: "" },
  para: { image: "../assets/gallery/para.gif", category: "" },
  plantitas: { image: "../assets/gallery/plantitas.png", category: "" },
  cucaracha: { image: "../assets/gallery/cucaracha.png", category: "" },
  laspibas: { image: "../assets/gallery/laspibas.png", category: "" },
  bobo: { image: "../assets/gallery/bobo.png", category: "" },
  dios: { image: "../assets/gallery/dios.png", category: "" },
  hechizo: { image: "../assets/gallery/hechizo.png", category: "" },
};
Object.entries(sounds).map(([nombreSonido, { image }]) =>
  console.log(`"src/assets/gallery/${nombreSonido}.png"`)
);
const Comandos = () => {
  return (
    <div className="container">
      <div className="row">
        {Object.entries(sounds).map(([nombreSonido, { image }]) => (
          <div
            key={nombreSonido}
            className="col-lg-3 col-md-4 col-sm-6 mb-4"
          >
            <div className="card">
              <img
                src={`src/assets/gallery/${nombreSonido}.png`}
                className="card-img-top"
                alt={nombreSonido}
              />
              <div className="card-body">
                <h5 className="card-title">{nombreSonido}</h5>
                <BotonesCopiar text={nombreSonido} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Comandos;
