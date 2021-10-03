import shapeChaze from "../../../assets/shape-chaze.jpg"
import shapeJapanSkull from "../../../assets/shape-child.jpg"
import shapeFlip from "../../../assets/shape-flip.png"
import shapeSantaCruzPowerlyte from "../../../assets/shape_santa_cruz_powerlyte.jpg"
import shapeOcto from "../../../assets/shape-zero-octo.jpg"
import shapeAllie from "../../../assets/shape_zero_allie.jpg"
import amortecedorMoog from "../../../assets/amortecedor_moog.jpg"
import amortecedorIndependent from "../../../assets/amortecedor_independent.jpg"
import lixaHondar from "../../../assets/lixa_hondar_floral.jpg"
import lixaGrizzlyTieDye from "../../../assets/lixa_grizzly_tie_dye.jpg"
import lixaGrizzlyMSA from "../../../assets/lixa_grizzly_msa.jpeg"
import truckThunder from "../../../assets/truck_thunder_hollow_lights.jpg"
import truckIndependentCaballero from "../../../assets/truck_independent.jpeg"
import truckMetallum from "../../../assets/truck_metallum.jpg"
import rodaBlackSheep from "../../../assets/roda_black_sheep.jpg"
import rodaSpitFireBigHead from "../../../assets/roda_spitfire.jpg"
import rodaJuiceHondar from "../../../assets/roda_juice.jpg"
import rodaSpitfireFormula from "../../../assets/roda_spitfire_formula.jpg"
import rolamentoRedBones from "../../../assets/rolamentoRedBones.jpeg"
import rolamentoRedSwiss from "../../../assets/rolamento_bones_swiss.jpg"
import rolamentoFlip from "../../../assets/rolamento_flip.jpeg"
import parafusoPigWheels from "../../../assets/parafuso_pig.jpg"
import parafusoChaze from "../../../assets/parafuso_chaze.jpg"
import parafusoIdependent from "../../../assets/parafuso_independent.jpg"


const initialState = [
	{
		id: 1,
		name: "SHAPE CHAZE - SERIE MELLOW - PRO MODEL PATRICK VIDAL - 31,5 X 8.0",
		image: shapeChaze,
		type: "shape",
		price: 339.90
	},
	{
		id: 2,
		name: "SHAPE CHILD MARFIM JAPAN SKULL 8.0",
		image: shapeJapanSkull,
		type: "shape", price: 129.99
	},
	{
		id: 3, name: "SHAPE FLIP HKD 8",
		image: shapeFlip,
		type: "shape",
		price: 534.99
	},
	{
		id: 4,
		name: 'Shape Santa Cruz PowerLyte Gremlin Patrol White 8.5"',
		image: shapeSantaCruzPowerlyte,
		type: "shape",
		price: 229.90
	},
	{
		id: 5,
		name: 'SHAPE ZERO THOMAS OCTO 8"',
		image: shapeOcto,
		type: "shape",
		price: 279.90
	},
	{
		id: 6,
		name: "SHAPE ZERO 7.75 ALLIE DEATH GRIPS MULTI",
		image: shapeAllie,
		type: "shape",
		price: 299.99
	},
	{
		id: 7,
		name: "AMORTECEDOR MOOG BARREL 90A - AMARELO",
		image: amortecedorMoog,
		type: "amortecedor",
		price: 79.99
	},
	{
		id: 8,
		name: "AMORTECEDOR INDEPENDENT CONICAL MED 90A",
		image: amortecedorIndependent,
		type: "amortecedor",
		price: 89.99
	},
	{
		id: 9,
		name: "LIXA HONDAR - SERIE FLORAL ÚNICA",
		image: lixaHondar,
		type: "lixa",
		price: 84.90
	},
	{
		id: 10,
		name: "LIXA GRIZZLY TIE DYE",
		image: lixaGrizzlyTieDye,
		type: "lixa",
		price: 74.90
	},
	{
		id: 11,
		name: "LIXA GRIZZLY MSA RED 9 X 33",
		image: lixaGrizzlyMSA,
		type: "lixa",
		price: 89.99
	},
	{
		id: 12,
		name: "Truck Thunder 149mm Hollow Lights Original Thunder",
		image: truckThunder,
		type: "truck",
		price: 549.99
	},
	{
		id: 13,
		name: "TRUCK INDEPENDENT PRO MODEL STEVE CABALLERO STAGE 11-159MM",
		image: truckIndependentCaballero,
		type: "truck",
		price: 998.00
	},
	{
		id: 14,
		name: "TRUCK METALLUM 129 SILVER PRETO",
		image: truckMetallum,
		type: "truck",
		price: 144.99
	},
	{
		id: 15,
		name: "RODA BLACK SHEEP 55MM",
		image: rodaBlackSheep,
		type: "roda",
		price: 99.90
	},
	{
		id: 16,
		name: "RODA SPITFIRE BIGHEAD DISORDER 56MM",
		image: rodaSpitFireBigHead,
		type: "roda",
		price: 159.90
	},
	{
		id: 17,
		name: "RODA JUICE - 65MM - 80A - LARANJA",
		image: rodaJuiceHondar,
		type: "roda",
		price: 209.99
	},
	{
		id: 18,
		name: "Roda Spitfire Formula Four Classics Miles Silvas 53mm 101Du",
		image: rodaSpitfireFormula,
		type: "roda",
		price: 399.99
	},
	{
		id: 19,
		name: "ROLAMENTO REDS BONES",
		image: rolamentoRedBones,
		type: "rolamento",
		price: 199.99
	},
	{
		id: 20,
		name: "Rolamentos Bones Swiss Ceramics Longboard E Skate",
		image: rolamentoRedSwiss,
		type: "rolamento",
		price: 686.59
	},
	{
		id: 21,
		name: "Rolamento Skate Flip Skateboards Hkd Abec 7",
		image: rolamentoFlip,
		type: "rolamento",
		price: 116.90
	},
	{
		id: 22,
		name: 'Parafuso de Base Pig Allen 7/8"',
		image: parafusoPigWheels,
		type: "parafuso de base",
		price: 20.81
	},
	{
		id: 23,
		name: "PARAFUSO CHAZE - 2,5MM STREET - DOURADO",
		image: parafusoChaze,
		type: "parafuso de base",
		price: 49.99
	},
	{
		id: 24,
		name: 'PARAFUSO BASE INDEPENDENT PHILLIPS 1" RED/BLK',
		image: parafusoIdependent,
		type: "parafuso de base",
		price: 39.99
	}
]

const productsReducer = (state = initialState, action) => {
	return state
}

export default productsReducer