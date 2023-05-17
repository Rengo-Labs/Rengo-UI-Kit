import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ChartV2 } from "../../../src/components";

export default {
    title: "Components/Atoms/ChartV2",
    component: ChartV2,
}as ComponentMeta<typeof ChartV2>

const data = [
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19377",
        "date": 1674227874,
        "dailyVolumeToken0": "0",
        "dailyVolumeToken1": "0",
        "dailyVolumeUSD": 0,
        "reserveUSD": 5569687800000000,
        "__typename": "PairDayData",
        "reserveUSDValue": 5569687.8,
        "dailyVolumeUSDValue": 0
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19381",
        "date": 1674562045,
        "dailyVolumeToken0": "11019368200",
        "dailyVolumeToken1": "10992086808",
        "dailyVolumeUSD": 11005775713.606771,
        "reserveUSD": 25643171470255836,
        "__typename": "PairDayData",
        "reserveUSDValue": 25643171.470255837,
        "dailyVolumeUSDValue": 11.005775713606772
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19388",
        "date": 1675148008,
        "dailyVolumeToken0": "0",
        "dailyVolumeToken1": "0",
        "dailyVolumeUSD": 0,
        "reserveUSD": 5213582438656571000,
        "__typename": "PairDayData",
        "reserveUSDValue": 5213582438.656571,
        "dailyVolumeUSDValue": 0
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19389",
        "date": 1675248189,
        "dailyVolumeToken0": "1000000000000",
        "dailyVolumeToken1": "992082225074",
        "dailyVolumeUSD": 996072050111.9227,
        "reserveUSD": 325875209479407360,
        "__typename": "PairDayData",
        "reserveUSDValue": 325875209.47940737,
        "dailyVolumeUSDValue": 996.0720501119227
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19390",
        "date": 1675358980,
        "dailyVolumeToken0": "0",
        "dailyVolumeToken1": "0",
        "dailyVolumeUSD": 0,
        "reserveUSD": 325911673273072640,
        "__typename": "PairDayData",
        "reserveUSDValue": 325911673.27307266,
        "dailyVolumeUSDValue": 0
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19391",
        "date": 1675392456,
        "dailyVolumeToken0": "0",
        "dailyVolumeToken1": "0",
        "dailyVolumeUSD": 0,
        "reserveUSD": 326062458535253800,
        "__typename": "PairDayData",
        "reserveUSDValue": 326062458.5352538,
        "dailyVolumeUSDValue": 0
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19392",
        "date": 1675480075,
        "dailyVolumeToken0": "2003896548",
        "dailyVolumeToken1": "2000000000",
        "dailyVolumeUSD": 2002379894.4466496,
        "reserveUSD": 326116401691729800,
        "__typename": "PairDayData",
        "reserveUSDValue": 326116401.6917298,
        "dailyVolumeUSDValue": 2.0023798944466495
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19393",
        "date": 1675589302,
        "dailyVolumeToken0": "12000000000",
        "dailyVolumeToken1": "11904913235",
        "dailyVolumeUSD": 12064687189.438591,
        "reserveUSD": 328771545071036540,
        "__typename": "PairDayData",
        "reserveUSDValue": 328771545.0710365,
        "dailyVolumeUSDValue": 12.06468718943859
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19394",
        "date": 1675689509,
        "dailyVolumeToken0": "33424007091",
        "dailyVolumeToken1": "33159149501",
        "dailyVolumeUSD": 33526750699.99025,
        "reserveUSD": 328340914830228100,
        "__typename": "PairDayData",
        "reserveUSDValue": 328340914.8302281,
        "dailyVolumeUSDValue": 33.52675069999025
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19395",
        "date": 1675758825,
        "dailyVolumeToken0": "6011692688",
        "dailyVolumeToken1": "6000000000",
        "dailyVolumeUSD": 6041011764.2782755,
        "reserveUSD": 327824375159640700,
        "__typename": "PairDayData",
        "reserveUSDValue": 327824375.1596407,
        "dailyVolumeUSDValue": 6.0410117642782755
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19396",
        "date": 1675851438,
        "dailyVolumeToken0": "0",
        "dailyVolumeToken1": "0",
        "dailyVolumeUSD": 0,
        "reserveUSD": 327600296191448300,
        "__typename": "PairDayData",
        "reserveUSDValue": 327600296.19144833,
        "dailyVolumeUSDValue": 0
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19397",
        "date": 1675906628,
        "dailyVolumeToken0": "0",
        "dailyVolumeToken1": "0",
        "dailyVolumeUSD": 0,
        "reserveUSD": 327603694092447550,
        "__typename": "PairDayData",
        "reserveUSDValue": 327603694.0924476,
        "dailyVolumeUSDValue": 0
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19398",
        "date": 1676005268,
        "dailyVolumeToken0": "22005846876",
        "dailyVolumeToken1": "21849436072",
        "dailyVolumeUSD": 22018646833.74495,
        "reserveUSD": 327055848302367040,
        "__typename": "PairDayData",
        "reserveUSDValue": 327055848.30236703,
        "dailyVolumeUSDValue": 22.01864683374495
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19399",
        "date": 1676086308,
        "dailyVolumeToken0": "0",
        "dailyVolumeToken1": "0",
        "dailyVolumeUSD": 0,
        "reserveUSD": 327039315352413760,
        "__typename": "PairDayData",
        "reserveUSDValue": 327039315.3524138,
        "dailyVolumeUSDValue": 0
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19400",
        "date": 1676217520,
        "dailyVolumeToken0": "0",
        "dailyVolumeToken1": "0",
        "dailyVolumeUSD": 0,
        "reserveUSD": 327164774129832260,
        "__typename": "PairDayData",
        "reserveUSDValue": 327164774.12983227,
        "dailyVolumeUSDValue": 0
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19401",
        "date": 1676263762,
        "dailyVolumeToken0": "0",
        "dailyVolumeToken1": "0",
        "dailyVolumeUSD": 0,
        "reserveUSD": 327116639567816400,
        "__typename": "PairDayData",
        "reserveUSDValue": 327116639.5678164,
        "dailyVolumeUSDValue": 0
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19402",
        "date": 1676349050,
        "dailyVolumeToken0": "0",
        "dailyVolumeToken1": "0",
        "dailyVolumeUSD": 0,
        "reserveUSD": 327019825518981700,
        "__typename": "PairDayData",
        "reserveUSDValue": 327019825.5189817,
        "dailyVolumeUSDValue": 0
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19404",
        "date": 1676525955,
        "dailyVolumeToken0": "2000000000",
        "dailyVolumeToken1": "1984150984",
        "dailyVolumeUSD": 1997671383.7753608,
        "reserveUSD": 326931230032476350,
        "__typename": "PairDayData",
        "reserveUSDValue": 326931230.03247637,
        "dailyVolumeUSDValue": 1.9976713837753608
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19406",
        "date": 1676716317,
        "dailyVolumeToken0": "3000000000",
        "dailyVolumeToken1": "2976226385",
        "dailyVolumeUSD": 2996428214.6853104,
        "reserveUSD": 326922518435294460,
        "__typename": "PairDayData",
        "reserveUSDValue": 326922518.43529445,
        "dailyVolumeUSDValue": 2.9964282146853103
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19407",
        "date": 1676801359,
        "dailyVolumeToken0": "100000000",
        "dailyVolumeToken1": "99207544",
        "dailyVolumeUSD": 99875628.64812088,
        "reserveUSD": 326904679381563260,
        "__typename": "PairDayData",
        "reserveUSDValue": 326904679.38156325,
        "dailyVolumeUSDValue": 0.09987562864812088
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19408",
        "date": 1676883109,
        "dailyVolumeToken0": "10000000",
        "dailyVolumeToken1": "9920754",
        "dailyVolumeUSD": 9986754.729372999,
        "reserveUSD": 326883031958367500,
        "__typename": "PairDayData",
        "reserveUSDValue": 326883031.95836747,
        "dailyVolumeUSDValue": 0.009986754729372998
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19409",
        "date": 1676995760,
        "dailyVolumeToken0": "0",
        "dailyVolumeToken1": "0",
        "dailyVolumeUSD": 0,
        "reserveUSD": 326830461554350460,
        "__typename": "PairDayData",
        "reserveUSDValue": 326830461.55435044,
        "dailyVolumeUSDValue": 0
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19410",
        "date": 1677065644,
        "dailyVolumeToken0": "51086498064560",
        "dailyVolumeToken1": "50991057404243",
        "dailyVolumeUSD": 51041800301983.91,
        "reserveUSD": 325993029074393300,
        "__typename": "PairDayData",
        "reserveUSDValue": 325993029.0743933,
        "dailyVolumeUSDValue": 51041.80030198391
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19411",
        "date": 1677120307,
        "dailyVolumeToken0": "1681943420",
        "dailyVolumeToken1": "1669578423",
        "dailyVolumeUSD": 1675725458.9183276,
        "reserveUSD": 325981162252486140,
        "__typename": "PairDayData",
        "reserveUSDValue": 325981162.25248617,
        "dailyVolumeUSDValue": 1.6757254589183275
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19412",
        "date": 1677263353,
        "dailyVolumeToken0": "0",
        "dailyVolumeToken1": "0",
        "dailyVolumeUSD": 0,
        "reserveUSD": 325957731771373440,
        "__typename": "PairDayData",
        "reserveUSDValue": 325957731.77137345,
        "dailyVolumeUSDValue": 0
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19413",
        "date": 1677333993,
        "dailyVolumeToken0": "0",
        "dailyVolumeToken1": "0",
        "dailyVolumeUSD": 0,
        "reserveUSD": 325941936014592500,
        "__typename": "PairDayData",
        "reserveUSDValue": 325941936.0145925,
        "dailyVolumeUSDValue": 0
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19417",
        "date": 1677680511,
        "dailyVolumeToken0": "0",
        "dailyVolumeToken1": "0",
        "dailyVolumeUSD": 0,
        "reserveUSD": 325986938738197100,
        "__typename": "PairDayData",
        "reserveUSDValue": 325986938.73819715,
        "dailyVolumeUSDValue": 0
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19418",
        "date": 1677762789,
        "dailyVolumeToken0": "0",
        "dailyVolumeToken1": "0",
        "dailyVolumeUSD": 0,
        "reserveUSD": 325975905454665340,
        "__typename": "PairDayData",
        "reserveUSDValue": 325975905.45466536,
        "dailyVolumeUSDValue": 0
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19419",
        "date": 1677819022,
        "dailyVolumeToken0": "0",
        "dailyVolumeToken1": "0",
        "dailyVolumeUSD": 0,
        "reserveUSD": 325946057340275500,
        "__typename": "PairDayData",
        "reserveUSDValue": 325946057.3402755,
        "dailyVolumeUSDValue": 0
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19422",
        "date": 1678089617,
        "dailyVolumeToken0": "0",
        "dailyVolumeToken1": "0",
        "dailyVolumeUSD": 0,
        "reserveUSD": 199688419974018430000,
        "__typename": "PairDayData",
        "reserveUSDValue": 199688419974.01843,
        "dailyVolumeUSDValue": 0
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19445",
        "date": 1680117232,
        "dailyVolumeToken0": "200000000000",
        "dailyVolumeToken1": "198529675078",
        "dailyVolumeUSD": 199324588644.48438,
        "reserveUSD": 199790657134502540000,
        "__typename": "PairDayData",
        "reserveUSDValue": 199790657134.50253,
        "dailyVolumeUSDValue": 199.32458864448438
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19486",
        "date": 1683658414,
        "dailyVolumeToken0": "110000000000",
        "dailyVolumeToken1": "109191320955",
        "dailyVolumeUSD": 109607492169.20059,
        "reserveUSD": 199751862000920230000,
        "__typename": "PairDayData",
        "reserveUSDValue": 199751862000.92023,
        "dailyVolumeUSDValue": 109.6074921692006
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19487",
        "date": 1683733648,
        "dailyVolumeToken0": "70095949348",
        "dailyVolumeToken1": "70000000000",
        "dailyVolumeUSD": 70058090843.73102,
        "reserveUSD": 199751270464700350000,
        "__typename": "PairDayData",
        "reserveUSDValue": 199751270464.70035,
        "dailyVolumeUSDValue": 70.05809084373102
    },
    {
        "id": "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902-19488",
        "date": 1683817692,
        "dailyVolumeToken0": "100000000000",
        "dailyVolumeToken1": "99264837163",
        "dailyVolumeUSD": 99642879584.70248,
        "reserveUSD": 199751270462821070000,
        "__typename": "PairDayData",
        "reserveUSDValue": 199751270462.82108,
        "dailyVolumeUSDValue": 99.64287958470248
    }
]
const Template: ComponentStory<typeof ChartV2> = (args) => <div style={{width:"800px", height:"500px"}}> <ChartV2 {...args} /> </div>;
export const Default = Template.bind({});
Default.args = {
    data: data
}

export const Empty = Template.bind({});
Empty.args = {
    data: []
}
