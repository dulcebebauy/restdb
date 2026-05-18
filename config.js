const API_DESA = "https://script.google.com/macros/s/AKfycbxp_wu_QYynsh1S5gMxQBK51DbhB_cRLZlxxWuP8SYNkGAXxqDo9x3I_qJuaWDaCKuEsg/exec"; 
                // -> "https://script.google.com/macros/s/AKfycbxwTTe7rirMon4zaoIe5eSb_sNJu7XIqTs1_-MUca0EEHiI208rV-R75B-2vmb23cWEfQ/exec"; 
                //"https://script.google.com/macros/s/AKfycbx-rAIF4cZ57J0AcotH2fhcWIhBGxb3BHJXmAN1nA-sFGbvJUk7NBlxWMu-m9YwztYA7Q/exec"; 
                //"https://script.google.com/macros/s/AKfycbyj8MdsIRsp4ng3kqutTipyO7qU3clznj4xNTapF-RKifumENBbhZWp96-LqVxNtt-MMw/exec"; 
                //"https://script.google.com/macros/s/AKfycbzrWddU4SlnuaBfba45-rtqH5FKm5Nv3-JvhupAcZ-v_kS6HQGWwT4LrZ4ul8VB8VbJHg/exec";
                //"https://script.google.com/macros/s/AKfycbw5B721kgIQ32F-NIMlrU351lg-gSTsg0fqJVsXk8xesHYh6pn7MtQbjiTi47QquuTy/exec"; 
                //"https://script.google.com/macros/s/AKfycbyLNPKzt0ROtLnBE5ICTZS9hGfFmpc5GEEFmw3W5qhNMMt_gK5GoqdwAYL23MmzicZxdw/exec";

/* ========== MESAS ========== */
const MESA_COUNT = 5; // ← Cambiar para configurar la cantidad de mesas

const MESAS_CONFIG = [
  "Mesa 1",
  "Mesa 2",
  "Mesa 3",
  "Mesa 4",
  "Mostrador"// ← agregar o quitar entradas acá
];

function getAPI( ambiente = "desa"){
  if(ambiente.toLowerCase() == "desa"){
    return API_DESA;
  }
  if(ambiente.toLowerCase() == "prod"){
    return API_PROD;
  }
  return false;
}
