import copperLugsImg from '../images/copperLugs.png';
import aluminiumLugsImg from '../images/aluminiumLugs.jpeg';
import ringTerminalImg from '../images/ringTerminal.jpg';
import copperlung1Img from '../images/copperlung1.jpg';

export const products = [
  {
    id: 1,
    name: 'Copper Tubular Lug',
    series: 'CT Series',
    image: copperLugsImg,
    material: 'Copper',
    type: 'Tubular',
    sizes: ['16 mm²', '25 mm²', '35 mm²', '50 mm²', '70 mm²', '95 mm²', '120 mm²', '150 mm²', '185 mm²', '240 mm²'],
    standard: 'IS 8309',
    description: 'Electrolytic grade copper tubular cable lugs for heavy-duty power connections.',
    features: ['High conductivity', 'Tinned finish available', 'Corrosion resistant'],
  },
  {
    id: 2,
    name: 'Aluminium Tubular Lug',
    series: 'AL Series',
    image: aluminiumLugsImg,
    material: 'Aluminium',
    type: 'Tubular',
    sizes: ['25 mm²', '35 mm²', '50 mm²', '70 mm²', '95 mm²', '120 mm²', '150 mm²', '185 mm²', '240 mm²', '300 mm²'],
    standard: 'IS 8309',
    description: 'Lightweight aluminium tubular lugs for power distribution applications.',
    features: ['Lightweight', 'Cost effective', 'Anti-oxidant compound filled'],
  },
  {
    id: 3,
    name: 'Ring Terminal (Copper)',
    series: 'RT-Cu Series',
    image: ringTerminalImg,
    material: 'Copper',
    type: 'Ring',
    sizes: ['1.5 mm²', '2.5 mm²', '4 mm²', '6 mm²', '10 mm²', '16 mm²', '25 mm²', '35 mm²'],
    standard: 'IS 8309',
    description: 'Copper ring terminals for secure panel and equipment connections.',
    features: ['360° contact', 'Insulated sleeve available', 'Vibration resistant'],
  },
  {
    id: 4,
    name: 'Copper Cable Terminal',
    series: 'CCT Series',
    image: copperlung1Img,
    material: 'Copper',
    type: 'Tubular',
    sizes: ['10 mm²', '16 mm²', '25 mm²', '35 mm²', '50 mm²', '70 mm²', '95 mm²', '120 mm²'],
    standard: 'IS 8309',
    description: 'Heavy-duty copper cable terminals for industrial switchgear and transformer connections.',
    features: ['High current capacity', 'Dual entry barrel', 'Galvanised bolt'],
  },
];

export const productTypes = ['Tubular', 'Ring', 'Fork', 'Pin'];
