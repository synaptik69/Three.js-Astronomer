import { DarkCard, LightCard } from '../GlobalComponents/Result/Card';
import { 
  TheGuardian,
  TheArtist,
  TheChampion,
  TheExaminer,
  TheInnovator,
  TheInspirer,
  TheLeader,
  TheObserver,
  TheOrganiser,
  ThePerfectionist,
  ThePerformer,
  ThePioneer,
  TheResolver,
  TheTactician,
  TheVisionary
} from '../GlobalComponents/Result/Content';
import { AdminHelmet, DeveloperHelmet, HelmetProps, OrganiserHelmet, QaHelmet, UiUxHelmet } from '../GlobalComponents/Result/Helmets';


export const isMobile = window.innerWidth < 750;
export const TOTAL_PAGES = 47.3
const startOffset = 0.5/TOTAL_PAGES;

export const timeline = [
  { start: 0, end: 1/ TOTAL_PAGES },
  { start: 1/TOTAL_PAGES - startOffset, end: 6.5/TOTAL_PAGES },
  { start: 6.5 / TOTAL_PAGES- startOffset, end: 16.5 / TOTAL_PAGES },
  { start: 16.5 / TOTAL_PAGES- startOffset, end: 20 / TOTAL_PAGES },
  { start: 20 / TOTAL_PAGES - startOffset, end: 22 / TOTAL_PAGES },
  { start: 22 / TOTAL_PAGES - startOffset, end: 25.5 / TOTAL_PAGES },
  { start: 25.5 / TOTAL_PAGES - startOffset, end: 29 / TOTAL_PAGES },
  { start: 29 / TOTAL_PAGES - startOffset, end: 33/ TOTAL_PAGES },
  { start: 33 / TOTAL_PAGES - startOffset, end: 37/ TOTAL_PAGES },
  { start: 37 / TOTAL_PAGES - startOffset, end: 40/ TOTAL_PAGES }, //9
  { start: 40 / TOTAL_PAGES - startOffset, end: 42.5/ TOTAL_PAGES }, //10
  { start: 42.5 / TOTAL_PAGES - startOffset, end: 44.8/ TOTAL_PAGES }, //11
  { start: 44.8 / TOTAL_PAGES - startOffset, end: 47.3/ TOTAL_PAGES }, //12
]

export const QUESTION_SNAP_POINTS = [
  0,
  0.009849548645937813,
  0.09542627883650953,
  0.17043129388164494, //
  0.20353059177532598,
  0.2315947843530592,
  0.28848545636910733,
  0.362246740220662,
  0.3975325977933801,
  0.43787362086258774,
  0.4508124373119358,
  
  0.49039117352056166, // Maze
  0.513901705115346,
  0.5521765295887663,
  0.5759879638916751,
  0.5942026078234705,
  0.6257973921765296, //Satlite
  0.6498495486459378,
  0.6843530591775326,
  0.7149247743229689, //Storm
  0.7699097291875627,
  0.808184553660983, //Signals
  0.8328184553660983,
  0.8593781344032096, // flames
  0.8850351053159479,
  0.9125576730190572, //totem
  0.935987963891675, //totem
  0.9485155466399198,
  0.9616248746238716,
  0.9861584754262789,
  1,
];

export const STOP_POINTS = [1,4,7,9,11, 14, 17,19,21,23,25,27,30,31]

const durations = [
  0,
  1, // Pannel One
  5.5, //Pannel Two
  10, // Pannel Three
  3.5, //Pannel Four
  2, //Third Question
  3.5, //Fifth Q
  3.5, // Sixth
  4, //Seven
  4, //Eight
  3, //Nine
  2.5, //Ten
  2.3, //Eleven
  2.5 //Twelve
]

export const getTimeline = (index:number) => {
  const tempArr = [...durations];
  const end = tempArr.slice(0,index+1).reduce((acc,crnt)=> acc+crnt,0);
  
  return {
    start: durations[index-1]/TOTAL_PAGES,
    end: end/TOTAL_PAGES

  }
}

export type OutcomeType = {
  code: string;
  title: string;
  category: string;
  pColor: string;
  Content: () => JSX.Element
  CardElement: () => JSX.Element
  HelmetElement: (p:HelmetProps) => JSX.Element
}

export const getResultCardImage = (catg:string) => {
  if( catg === 'SD' )
    return 'lightCard.png'
  if( catg === 'Admin' )
    return 'darkCard.png'
  else
    return 'lightCard2.png'
}

export const outcomes: OutcomeType[] = [
  {
    code: "INFJ",
    title: "The Guardian",
    category: "SD",
    pColor: "#48BD80",
    Content: TheGuardian,
    HelmetElement: DeveloperHelmet,
    CardElement: LightCard
  },
  {
    code: "INTJ",
    title: "The Visionary",
    category: "SD",
    pColor: '#126094',
    Content: TheVisionary,
    HelmetElement: DeveloperHelmet,
    CardElement: LightCard
  },
  {
    code: "INTP",
    title: "The Pioneer",
    category: "SD",
    pColor:'#7B3C57',
    Content: ThePioneer,
    HelmetElement: DeveloperHelmet,
    CardElement: LightCard
  },
  {
    code: "ENTP",
    title: "The Innovator",
    category: "SD",
    pColor:'#8095BE',
    Content: TheInnovator,
    HelmetElement: DeveloperHelmet,
    CardElement: LightCard
  },
  {
    code: "ENFJ",
    title: "The Leader",
    category: "SD",
    pColor:'#303E50',
    Content: TheLeader,
    HelmetElement: DeveloperHelmet,
    CardElement: LightCard
  },
  {
    code: "ISFJ",
    title: "The Observer",
    category: "UIUX",
    pColor:'#E2007C',
    Content: TheObserver,
    HelmetElement: UiUxHelmet,
    CardElement: LightCard
  },
  {
    code: "ISFP",
    title: "The Artist",
    category: "UIUX",
    pColor:'#D66451',
    Content: TheArtist,
    HelmetElement: UiUxHelmet,
    CardElement: LightCard
  },
  {
    code: "ENFP",
    title: "The Inspirer",
    category: "UIUX",
    pColor:'#012A7C',
    Content: TheInspirer,
    HelmetElement: UiUxHelmet,
    CardElement: LightCard
  },
  {
    code: "INFP",
    title: "The Champion",
    category: "UIUX",
    pColor:'#304D3B',
    Content: TheChampion,
    HelmetElement: UiUxHelmet,
    CardElement: LightCard
  },
  {
    code: "ISTJ",
    title: "The Perfectionist",
    category: "QA",
    pColor:'#09B1D8',
    Content: ThePerfectionist,
    HelmetElement: QaHelmet,
    CardElement: LightCard
  },
  {
    code: "ESTJ",
    title: "The Organiser",
    category: "QA",
    pColor:'#DA515E',
    Content: TheOrganiser,
    HelmetElement: OrganiserHelmet,
    CardElement: LightCard
  },
  {
    code: "ESFJ",
    title: "The Examiner",
    category: "QA",
    pColor:'#9A6DE2',
    Content: TheExaminer,
    HelmetElement: QaHelmet,
    CardElement: LightCard
  },
  {
    code: "ISTP",
    title: "The Tactician",
    category: "Admin",
    pColor:'#FFA349',
    Content: TheTactician,
    HelmetElement: AdminHelmet,
    CardElement: DarkCard
  },
  {
    code: "ESTP",
    title: "The Resolver",
    category: "Admin",
    pColor:'#F781CC',
    Content: TheResolver,
    HelmetElement: AdminHelmet,
    CardElement: DarkCard
  },
  {
    code: "ESFP",
    title: "The Performer",
    category: "Admin",
    pColor:'#4E4164',
    Content: ThePerformer,
    HelmetElement: AdminHelmet,
    CardElement: DarkCard
  },
  
]