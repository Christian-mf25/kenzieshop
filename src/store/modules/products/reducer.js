import shapeSantaCruzPowerlyte from "../../../assets/shape_santa_cruz_powerlyte.jpg";
import amortecedorIndependent from "../../../assets/amortecedor_independent.jpg";
import truckIndependentCaballero from "../../../assets/truck_independent.jpeg";
import rodaSpitfireFormula from "../../../assets/roda_spitfire_formula.jpg";
import truckThunder from "../../../assets/truck_thunder_hollow_lights.jpg";
import rolamentoRedSwiss from "../../../assets/rolamento_bones_swiss.jpg";
import parafusoIdependent from "../../../assets/parafuso_independent.jpg";
import lixaGrizzlyTieDye from "../../../assets/lixa_grizzly_tie_dye.jpg";
import rolamentoRedBones from "../../../assets/rolamentoRedBones.jpeg";
import rodaSpitFireBigHead from "../../../assets/roda_spitfire.jpg";
import amortecedorMoog from "../../../assets/amortecedor_moog.jpg";
import lixaGrizzlyMSA from "../../../assets/lixa_grizzly_msa.jpeg";
import rodaBlackSheep from "../../../assets/roda_black_sheep.jpg";
import parafusoPigWheels from "../../../assets/parafuso_pig.jpg";
import rolamentoFlip from "../../../assets/rolamento_flip.jpeg";
import lixaHondar from "../../../assets/lixa_hondar_floral.jpg";
import truckMetallum from "../../../assets/truck_metallum.jpg";
import parafusoChaze from "../../../assets/parafuso_chaze.jpg";
import shapeAllie from "../../../assets/shape_zero_allie.jpg";
import shapeJapanSkull from "../../../assets/shape-child.jpg";
import rodaJuiceHondar from "../../../assets/roda_juice.jpg";
import shapeOcto from "../../../assets/shape-zero-octo.jpg";
import shapeChaze from "../../../assets/shape-chaze.jpg";
import shapeFlip from "../../../assets/shape-flip.png";

const initialState = [
  {
    id: 1,
    name: "Shape Chaze - Serie Mellow",
    image: shapeChaze,
    type: "shape",
    price: 339.9,
  },
  {
    id: 2,
    name: "Shape Child - Marfim Japan Skull",
    image: shapeJapanSkull,
    type: "shape",
    price: 129.99,
  },
  {
    id: 3,
    name: "Shape Flip - HKD",
    image: shapeFlip,
    type: "shape",
    price: 534.99,
  },
  {
    id: 4,
    name: "Shape Santa Cruz - PowerLyte Gremlin",
    image: shapeSantaCruzPowerlyte,
    type: "shape",
    price: 229.9,
  },
  {
    id: 5,
    name: "Shape Zero - Thomas Octo",
    image: shapeOcto,
    type: "shape",
    price: 279.9,
  },
  {
    id: 6,
    name: "Shape Zero - Allie Death Grips Mult",
    image: shapeAllie,
    type: "shape",
    price: 299.99,
  },
  {
    id: 7,
    name: "Amortecedor MOOG - Barrel 90A",
    image: amortecedorMoog,
    type: "amortecedor",
    price: 79.99,
  },
  {
    id: 8,
    name: "Amortecedor Independent - Conical 90A",
    image: amortecedorIndependent,
    type: "amortecedor",
    price: 89.99,
  },
  {
    id: 9,
    name: "Lixa Hondar - Serie Floral",
    image: lixaHondar,
    type: "lixa",
    price: 84.9,
  },
  {
    id: 10,
    name: "Lixa Grizzly - Tie Dye",
    image: lixaGrizzlyTieDye,
    type: "lixa",
    price: 74.9,
  },
  {
    id: 11,
    name: "Lixa Grizzly - MSA",
    image: lixaGrizzlyMSA,
    type: "lixa",
    price: 89.99,
  },
  {
    id: 12,
    name: "Truck Thunder - Hollow Lights Original Thunder",
    image: truckThunder,
    type: "truck",
    price: 549.99,
  },
  {
    id: 13,
    name: "Truck Independent - Steve Caballero",
    image: truckIndependentCaballero,
    type: "truck",
    price: 998.0,
  },
  {
    id: 14,
    name: "Truck Metallum - Silver Preto",
    image: truckMetallum,
    type: "truck",
    price: 144.99,
  },
  {
    id: 15,
    name: "Roda Black Sheep - 55mm",
    image: rodaBlackSheep,
    type: "roda",
    price: 99.9,
  },
  {
    id: 16,
    name: "Roda SpitFire - Bighead Disorder 56mm",
    image: rodaSpitFireBigHead,
    type: "roda",
    price: 159.9,
  },
  {
    id: 17,
    name: "Roda Juice - 65mm",
    image: rodaJuiceHondar,
    type: "roda",
    price: 209.99,
  },
  {
    id: 18,
    name: "Roda Spitfire - Miles Silvas 53mm",
    image: rodaSpitfireFormula,
    type: "roda",
    price: 399.99,
  },
  {
    id: 19,
    name: "Rolamento - Reds Bones",
    image: rolamentoRedBones,
    type: "rolamento",
    price: 199.99,
  },
  {
    id: 20,
    name: "Rolamentos - Bones Swiss Ceramics",
    image: rolamentoRedSwiss,
    type: "rolamento",
    price: 686.59,
  },
  {
    id: 21,
    name: "Rolamento - Flip Abec 7",
    image: rolamentoFlip,
    type: "rolamento",
    price: 116.9,
  },
  {
    id: 22,
    name: 'Parafuso de Base - Pig Allen 7/8"',
    image: parafusoPigWheels,
    type: "parafuso de base",
    price: 20.81,
  },
  {
    id: 23,
    name: "Parafuso de Base - Chaze 2,5MM",
    image: parafusoChaze,
    type: "parafuso de base",
    price: 49.99,
  },
  {
    id: 24,
    name: 'Parafuso de Base - Independent Phillips 1"',
    image: parafusoIdependent,
    type: "parafuso de base",
    price: 39.99,
  },
];

const productsReducer = (state = initialState, action) => {
  return state;
};

export default productsReducer;
