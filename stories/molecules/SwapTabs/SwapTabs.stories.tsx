import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {SwapTabs} from "../../../src/components";
// @ts-ignore
import casperToken from "../../assets/casper-token.svg";
// @ts-ignore
import bitcoinToken from "../../assets/bitcoin-token.svg";

export default {
    title: "Components/Molecules/SwapTabs",
    component: SwapTabs,
} as ComponentMeta<typeof SwapTabs>;

// Create a master template for mapping args to render the SwapPrice component
const Template: ComponentStory<typeof SwapTabs> = (args) => <div style={{width: '500px'}}><SwapTabs {...args} /></div>;
const data = [
    {
        "date": 1673444294,
        "dayString": 1673444294,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "1243.289387919103530164349115442896468592361496638000000000",
        "totalLiquidityUSD": "27921793.073887227080430952434616568891647254491496204000000000",
        "totalLiquidityUSDValue": 0.027921793073887227,
        "totalLiquidityTokenValue": 0.000022458
    },
    {
        "date": 1673523264,
        "dayString": 1673523264,
        "dailyVolumeUSD": 1243289387.9191036,
        "dailyVolumeUSDValue": 1.2432893879191036,
        "priceUSD": "1243.289180089984966406620927576015032350089892334000000000",
        "totalLiquidityUSD": "1243365489089437.487187808426490766796427686084419795715141140000000000",
        "totalLiquidityUSDValue": 1243365.4890894375,
        "totalLiquidityTokenValue": 1000.06137671
    },
    {
        "date": 1673530694,
        "dayString": 1673530694,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "1243.289387919103530164349115442896468592361496638000000000",
        "totalLiquidityUSD": "27921793.073887227080430952434616568891647254491496204000000000",
        "totalLiquidityUSDValue": 0.027921793073887227
    },
    {
        "date": 1673617094,
        "dayString": 1673617094,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "1243.289387919103530164349115442896468592361496638000000000",
        "totalLiquidityUSD": "27921793.073887227080430952434616568891647254491496204000000000",
        "totalLiquidityUSDValue": 0.027921793073887227
    },
    {
        "date": 1673703494,
        "dayString": 1673703494,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "1243.289387919103530164349115442896468592361496638000000000",
        "totalLiquidityUSD": "27921793.073887227080430952434616568891647254491496204000000000",
        "totalLiquidityUSDValue": 0.027921793073887227
    },
    {
        "date": 1673789894,
        "dayString": 1673789894,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "1243.289387919103530164349115442896468592361496638000000000",
        "totalLiquidityUSD": "27921793.073887227080430952434616568891647254491496204000000000",
        "totalLiquidityUSDValue": 0.027921793073887227
    },
    {
        "date": 1673893858,
        "dayString": 1673893858,
        "dailyVolumeUSD": 112152536.56977989,
        "dailyVolumeUSDValue": 0.11215253656977989,
        "priceUSD": "1310.040557534003933784164829225996064905794613240000000000",
        "totalLiquidityUSD": "1310120849511042.538934657233347719899486101917141237560269120000000000",
        "totalLiquidityUSDValue": 1310120.8495110425,
        "totalLiquidityTokenValue": 1000.061289688
    },
    {
        "date": 1673983184,
        "dayString": 1673983184,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "1310.040559071184019699813532038815978990145908890000000000",
        "totalLiquidityUSD": "1312612870804878.388131559624117270670960327505077850939595500000000000",
        "totalLiquidityUSDValue": 1312612.8708048784,
        "totalLiquidityTokenValue": 1001.96353595
    },
    {
        "date": 1674064188,
        "dayString": 1674064188,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "1310.040557945216484544021317129783514145938124925000000000",
        "totalLiquidityUSD": "1311491460788390.154637779726783392512810703812428217331240025000000000",
        "totalLiquidityUSDValue": 1311491.4607883904,
        "totalLiquidityTokenValue": 1001.107525133
    },
    {
        "date": 1674135494,
        "dayString": 1674135494,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "1310.040559071184019699813532038815978990145908890000000000",
        "totalLiquidityUSD": "1312612870804878.388131559624117270670960327505077850939595500000000000",
        "totalLiquidityUSDValue": 1312612.8708048784
    },
    {
        "date": 1674221894,
        "dayString": 1674221894,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "1310.040559071184019699813532038815978990145908890000000000",
        "totalLiquidityUSD": "1312612870804878.388131559624117270670960327505077850939595500000000000",
        "totalLiquidityUSDValue": 1312612.8708048784
    },
    {
        "date": 1674308294,
        "dayString": 1674308294,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "1310.040559071184019699813532038815978990145908890000000000",
        "totalLiquidityUSD": "1312612870804878.388131559624117270670960327505077850939595500000000000",
        "totalLiquidityUSDValue": 1312612.8708048784
    },
    {
        "date": 1674394694,
        "dayString": 1674394694,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "1310.040559071184019699813532038815978990145908890000000000",
        "totalLiquidityUSD": "1312612870804878.388131559624117270670960327505077850939595500000000000",
        "totalLiquidityUSDValue": 1312612.8708048784
    },
    {
        "date": 1674547900,
        "dayString": 1674547900,
        "dailyVolumeUSD": 75268463958.96921,
        "dailyVolumeUSDValue": 75.2684639589692,
        "priceUSD": "1321.001105146950636909996741603557522883357665262117472464",
        "totalLiquidityUSD": "1410095966259670.845282205653222583569113687158433461523846665025334672",
        "totalLiquidityUSDValue": 1410095.9662596707,
        "totalLiquidityTokenValue": 1067.444955773
    },
    {
        "date": 1674567494,
        "dayString": 1674567494,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "1310.040557945216484544021317129783514145938124925000000000",
        "totalLiquidityUSD": "1311491460788390.154637779726783392512810703812428217331240025000000000",
        "totalLiquidityUSDValue": 1311491.4607883904
    },
    {
        "date": 1674692634,
        "dayString": 1674692634,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "1321.000540209731682260599215468721059795941593614015604784",
        "totalLiquidityUSD": "1410095668915663.154729290273506273099186430452298640087888167861493040",
        "totalLiquidityUSDValue": 1410095.6689156631,
        "totalLiquidityTokenValue": 1067.445187185
    },
    {
        "date": 1674740294,
        "dayString": 1674740294,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "1321.001105146950636909996741603557522883357665262117472464",
        "totalLiquidityUSD": "1410095966259670.845282205653222583569113687158433461523846665025334672",
        "totalLiquidityUSDValue": 1410095.9662596707
    },
    {
        "date": 1674826694,
        "dayString": 1674826694,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "1321.001105146950636909996741603557522883357665262117472464",
        "totalLiquidityUSD": "1410095966259670.845282205653222583569113687158433461523846665025334672",
        "totalLiquidityUSDValue": 1410095.9662596707
    },
    {
        "date": 1674913094,
        "dayString": 1674913094,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "1321.001105146950636909996741603557522883357665262117472464",
        "totalLiquidityUSD": "1410095966259670.845282205653222583569113687158433461523846665025334672",
        "totalLiquidityUSDValue": 1410095.9662596707
    },
    {
        "date": 1674999494,
        "dayString": 1674999494,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "1321.001105146950636909996741603557522883357665262117472464",
        "totalLiquidityUSD": "1410095966259670.845282205653222583569113687158433461523846665025334672",
        "totalLiquidityUSDValue": 1410095.9662596707
    },
    {
        "date": 1675147601,
        "dayString": 1675147601,
        "dailyVolumeUSD": 10917945350.48495,
        "dailyVolumeUSDValue": 10.917945350484949,
        "priceUSD": "1321.047992397693737423276889926001703125675693851489075874",
        "totalLiquidityUSD": "1417917201378032.570330588901540291321490902019839883647141444911204202",
        "totalLiquidityUSDValue": 1417917.2013780326,
        "totalLiquidityTokenValue": 1073.327547173
    },
    {
        "date": 1675172294,
        "dayString": 1675172294,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "1321.000540209731682260599215468721059795941593614015604784",
        "totalLiquidityUSD": "1410095668915663.154729290273506273099186430452298640087888167861493040",
        "totalLiquidityUSDValue": 1410095.6689156631
    },
    {
        "date": 1675284522,
        "dayString": 1675284522,
        "dailyVolumeUSD": 54769365417.54466,
        "dailyVolumeUSDValue": 54.76936541754466,
        "priceUSD": "1325.373932406928976741285173244100804391996391508440045000",
        "totalLiquidityUSD": "1422700963446426.306815113221470443215971423058299285096175110599995000",
        "totalLiquidityUSDValue": 1422700.9634464262,
        "totalLiquidityTokenValue": 1073.433639111
    },
    {
        "date": 1675304665,
        "dayString": 1675304665,
        "dailyVolumeUSD": 179701591729.3012,
        "dailyVolumeUSDValue": 179.7015917293012,
        "priceUSD": "1364.221999765792888045850913297010978621205379649657046468",
        "totalLiquidityUSD": "1464267181089590.118191124655919898500224204388792199939573692337596988",
        "totalLiquidityUSDValue": 1464267.18108959,
        "totalLiquidityTokenValue": 1073.334971391
    },
    {
        "date": 1675387062,
        "dayString": 1675387062,
        "dailyVolumeUSD": 3792589522250.694,
        "dailyVolumeUSDValue": 3792.589522250694,
        "priceUSD": "660.125583341002757785555535205251125508417301050290396431",
        "totalLiquidityUSD": "712547673919099.470251018221185842209324371404317866933027872630834670",
        "totalLiquidityUSDValue": 712547.6739190995,
        "totalLiquidityTokenValue": 1079.41229957
    },
    {
        "date": 1675468879,
        "dayString": 1675468879,
        "dailyVolumeUSD": 2947913803361.3164,
        "dailyVolumeUSDValue": 2947.9138033613162,
        "priceUSD": "1396.914929694649855379998150788561420900628936546797726756",
        "totalLiquidityUSD": "1511900458986714.556648407787014418167843079068565277612721363603420816",
        "totalLiquidityUSDValue": 1511900.4589867145,
        "totalLiquidityTokenValue": 1082.313909636
    },
    {
        "date": 1675555591,
        "dayString": 1675555591,
        "dailyVolumeUSD": 5268143341893.307,
        "dailyVolumeUSDValue": 5268.143341893307,
        "priceUSD": "1995.089921304276101028164118506873444918876452620331438314",
        "totalLiquidityUSD": "2154882329169491.932054430540997195921397604372055923703132473891560116",
        "totalLiquidityUSDValue": 2154882.329169492,
        "totalLiquidityTokenValue": 1080.092834994
    },
    {
        "date": 1675642079,
        "dayString": 1675642079,
        "dailyVolumeUSD": 6047121210813.705,
        "dailyVolumeUSDValue": 6047.121210813705,
        "priceUSD": "2679.889390097035425707482906444514688006908525812509904984",
        "totalLiquidityUSD": "2889653767312364.021914511142902383340996059942593582702169093552561392",
        "totalLiquidityUSDValue": 2889653.767312364,
        "totalLiquidityTokenValue": 1078.273520538
    },
    {
        "date": 1675728305,
        "dayString": 1675728305,
        "dailyVolumeUSD": 6561379561423.153,
        "dailyVolumeUSDValue": 6561.379561423153,
        "priceUSD": "3536.294684644027807965720575517117440869091449879512687275",
        "totalLiquidityUSD": "3808199880018013.350731214009491814071428590568499431507385159878436775",
        "totalLiquidityUSDValue": 3808199.8800180135,
        "totalLiquidityTokenValue": 1076.889857781
    },
    {
        "date": 1675814811,
        "dayString": 1675814811,
        "dailyVolumeUSD": 5835798929431.154,
        "dailyVolumeUSDValue": 5835.798929431155,
        "priceUSD": "4370.538565128703016316967674829485032081847333520241835024",
        "totalLiquidityUSD": "4702309866083686.766611758488583473824167193085003883988410026287594320",
        "totalLiquidityUSDValue": 4702309.866083687,
        "totalLiquidityTokenValue": 1075.910850805
    },
    {
        "date": 1675902085,
        "dayString": 1675902085,
        "dailyVolumeUSD": 2995189858230.646,
        "dailyVolumeUSDValue": 2995.189858230646,
        "priceUSD": "4876.583544928304107557143589181730307891662101646674028270",
        "totalLiquidityUSD": "5244670562506952.862448759373787212762920336159089557564563920886075910",
        "totalLiquidityUSDValue": 5244670.562506953,
        "totalLiquidityTokenValue": 1075.480510933
    },
    {
        "date": 1675987878,
        "dayString": 1675987878,
        "dailyVolumeUSD": 3495805859032.44,
        "dailyVolumeUSDValue": 3495.80585903244,
        "priceUSD": "5278.197262328479356540123709623123149106089496292945641447",
        "totalLiquidityUSD": "5674190698746913.589530112638423463948417895689070673991159066691020736",
        "totalLiquidityUSDValue": 5674190.698746914,
        "totalLiquidityTokenValue": 1075.024372288
    },
    {
        "date": 1676074829,
        "dayString": 1676074829,
        "dailyVolumeUSD": 1925284027166.3052,
        "dailyVolumeUSDValue": 1925.2840271663051,
        "priceUSD": "5551.416206012499948045761202419999876863700867168824951760",
        "totalLiquidityUSD": "5966386151014472.662493929531782781231190847381005867686350234564009360",
        "totalLiquidityUSDValue": 5966386.151014473,
        "totalLiquidityTokenValue": 1074.750285261
    },
    {
        "date": 1676161562,
        "dayString": 1676161562,
        "dailyVolumeUSD": 1226724464278.2524,
        "dailyVolumeUSDValue": 1226.7244642782525,
        "priceUSD": "5772.941760595676617583632807749839707761253193240877693415",
        "totalLiquidityUSD": "6203498375705653.075395698610446418508027499919747874669229298025215625",
        "totalLiquidityUSDValue": 6203498.375705653,
        "totalLiquidityTokenValue": 1074.581839375
    },
    {
        "date": 1676258573,
        "dayString": 1676258573,
        "dailyVolumeUSD": 568953647442.2288,
        "dailyVolumeUSDValue": 568.9536474422288,
        "priceUSD": "5861.684299245919373191797340141926440958456969007613817408",
        "totalLiquidityUSD": "6298478958833627.390802412210443261145735450105864463124769161189958848",
        "totalLiquidityUSDValue": 6298478.958833627,
        "totalLiquidityTokenValue": 1074.516919931
    },
    {
        "date": 1676344566,
        "dayString": 1676344566,
        "dailyVolumeUSD": 1474159711129.7878,
        "dailyVolumeUSDValue": 1474.1597111297879,
        "priceUSD": "6110.786150926722566082441776915448060406381352814797164224",
        "totalLiquidityUSD": "6565449167975727.565705613377483281270019810571244928643589862430067264",
        "totalLiquidityUSDValue": 6565449.167975728,
        "totalLiquidityTokenValue": 1074.403359211
    },
    {
        "date": 1676420171,
        "dayString": 1676420171,
        "dailyVolumeUSD": 1660313306082.496,
        "dailyVolumeUSDValue": 1660.3133060824962,
        "priceUSD": "6402.850327734258281203460290566330414622676928306881035637",
        "totalLiquidityUSD": "6878334673889804.534751916192083958093488608471648139819676732829718038",
        "totalLiquidityUSDValue": 6878334.673889805,
        "totalLiquidityTokenValue": 1074.261355774
    },
    {
        "date": 1676511724,
        "dayString": 1676511724,
        "dailyVolumeUSD": 322501453789.3762,
        "dailyVolumeUSDValue": 322.5014537893762,
        "priceUSD": "6435.774281018959430238402217322313293239472371673364433374",
        "totalLiquidityUSD": "6913557156325196.492634251419175730534339554981378047786017025742750820",
        "totalLiquidityUSDValue": 6913557.156325196,
        "totalLiquidityTokenValue": 1074.23860043
    },
    {
        "date": 1676607155,
        "dayString": 1676607155,
        "dailyVolumeUSD": 916453086710.4336,
        "dailyVolumeUSDValue": 916.4530867104336,
        "priceUSD": "6614.408478963750926968345620139709775445800822116533746088",
        "totalLiquidityUSD": "7104827881072142.800936117216612125101538586779089943809019918210586928",
        "totalLiquidityUSDValue": 7104827.881072143,
        "totalLiquidityTokenValue": 1074.144105806
    },
    {
        "date": 1676684990,
        "dayString": 1676684990,
        "dailyVolumeUSD": 551263314449.972,
        "dailyVolumeUSDValue": 551.2633144499721,
        "priceUSD": "6665.485252466782224830783221600160146880809373429351824800",
        "totalLiquidityUSD": "7159444794555746.449000911947376116865750352351687787749984100758003200",
        "totalLiquidityUSDValue": 7159444.794555746,
        "totalLiquidityTokenValue": 1074.107063984
    },
    {
        "date": 1676786319,
        "dayString": 1676786319,
        "dailyVolumeUSD": 437271282745.2007,
        "dailyVolumeUSDValue": 437.27128274520066,
        "priceUSD": "6747.126587597988634827015268136011398207848775581170498205",
        "totalLiquidityUSD": "7246887802332705.114283466106863752631738223897709475456354280812567245",
        "totalLiquidityUSDValue": 7246887.802332705,
        "totalLiquidityTokenValue": 1074.070229489
    },
    {
        "date": 1676858341,
        "dayString": 1676858341,
        "dailyVolumeUSD": 551045763695.3641,
        "dailyVolumeUSDValue": 551.0457636953641,
        "priceUSD": "6845.075406914996240769072046956648085443609904918221088194",
        "totalLiquidityUSD": "7351669793521301.746175077577420154203429277857574140854882327266474804",
        "totalLiquidityUSDValue": 7351669.793521302,
        "totalLiquidityTokenValue": 1074.008591066
    },
    {
        "date": 1676947870,
        "dayString": 1676947870,
        "dailyVolumeUSD": 541811699124.9182,
        "dailyVolumeUSDValue": 541.8116991249182,
        "priceUSD": "6942.382363548608079806288010326354476517386295768709204060",
        "totalLiquidityUSD": "7455766303520154.323855172772303890474115501557981891320559360772825140",
        "totalLiquidityUSDValue": 7455766.303520154,
        "totalLiquidityTokenValue": 1073.949245819
    },
    {
        "date": 1677040141,
        "dayString": 1677040141,
        "dailyVolumeUSD": 1471681670282.393,
        "dailyVolumeUSDValue": 1471.681670282393,
        "priceUSD": "7994.956132383694240293028573419424298954653272146512201160",
        "totalLiquidityUSD": "8585113290024691.578775851197804510833350982453524817344781220747722080",
        "totalLiquidityUSDValue": 8585113.290024692,
        "totalLiquidityTokenValue": 1073.816184588
    },
    {
        "date": 1677110774,
        "dayString": 1677110774,
        "dailyVolumeUSD": 1845030526922.855,
        "dailyVolumeUSDValue": 1845.030526922855,
        "priceUSD": "8205.568406906736276877734293332379133027870733478747188080",
        "totalLiquidityUSD": "8809988888391015.979952020433072595301976255913254537685584837284793040",
        "totalLiquidityUSDValue": 8809988.888391016,
        "totalLiquidityTokenValue": 1073.659794363
    },
    {
        "date": 1677197367,
        "dayString": 1677197367,
        "dailyVolumeUSD": 9366026327480.246,
        "dailyVolumeUSDValue": 9366.026327480246,
        "priceUSD": "10480.855616877556660408352083863028705380618803573961494236",
        "totalLiquidityUSD": "11245146005595629.037983921805595920936420386041883996541792978310260780",
        "totalLiquidityUSDValue": 11245146.00559563,
        "totalLiquidityTokenValue": 1072.922518605
    },
    {
        "date": 1677283348,
        "dayString": 1677283348,
        "dailyVolumeUSD": 7821843980625.34,
        "dailyVolumeUSDValue": 7821.84398062534,
        "priceUSD": "12512.255163070340950568069249663546215046609966607047555056",
        "totalLiquidityUSD": "13418654507125260.849975488573054991789477954233365399734900340654107776",
        "totalLiquidityUSDValue": 13418654.50712526,
        "totalLiquidityTokenValue": 1072.440925496
    },
    {
        "date": 1677369935,
        "dayString": 1677369935,
        "dailyVolumeUSD": 2462671132454.202,
        "dailyVolumeUSDValue": 2462.671132454202,
        "priceUSD": "13088.714337223683795099980947699812166450352417232936585798",
        "totalLiquidityUSD": "14035277510794254.406346552459603372343692040767232940597927111918037550",
        "totalLiquidityUSDValue": 14035277.510794254,
        "totalLiquidityTokenValue": 1072.319033725
    },
    {
        "date": 1677462241,
        "dayString": 1677462241,
        "dailyVolumeUSD": 1231974061759.265,
        "dailyVolumeUSDValue": 1231.974061759265,
        "priceUSD": "13414.670519646574809233081740406332242423579577403531421876",
        "totalLiquidityUSD": "14383940956698963.769307444053335625281330046528821294273971906556259392",
        "totalLiquidityUSDValue": 14383940.956698963,
        "totalLiquidityTokenValue": 1072.254509392
    },
    {
        "date": 1677544410,
        "dayString": 1677544410,
        "dailyVolumeUSD": 1554700890205.7275,
        "dailyVolumeUSDValue": 1554.7008902057275,
        "priceUSD": "14082.999982763875983265935404964180650807826257069718035550",
        "totalLiquidityUSD": "15099203228996068.135314303104821938302447436716957377911822011259576150",
        "totalLiquidityUSDValue": 15099203.228996068,
        "totalLiquidityTokenValue": 1072.158151493
    },
    {
        "date": 1677629162,
        "dayString": 1677629162,
        "dailyVolumeUSD": 1658755783577.1826,
        "dailyVolumeUSDValue": 1658.7557835771827,
        "priceUSD": "14451.541058937029391317907591341079445054673467280576487420",
        "totalLiquidityUSD": "15493134941640971.610733227815584080830348282400001923439989814041498720",
        "totalLiquidityUSDValue": 15493134.941640971,
        "totalLiquidityTokenValue": 1072.074935016
    },
    {
        "date": 1677727012,
        "dayString": 1677727012,
        "dailyVolumeUSD": 2446743325978.1523,
        "dailyVolumeUSDValue": 2446.7433259781524,
        "priceUSD": "15152.972061614121862016319453459598667468240213713040551094",
        "totalLiquidityUSD": "16243037441238555.994843200766831620542269717678196665692386675844134772",
        "totalLiquidityUSDValue": 16243037.441238556,
        "totalLiquidityTokenValue": 1071.937397838
    },
    {
        "date": 1677804186,
        "dayString": 1677804186,
        "dailyVolumeUSD": 1570810364545.8213,
        "dailyVolumeUSDValue": 1570.8103645458214,
        "priceUSD": "15508.417835377066471113831933037026096817916352711472199300",
        "totalLiquidityUSD": "16622721198658199.635121018041164838435945972664444450725539926481798600",
        "totalLiquidityUSDValue": 16622721.1986582,
        "totalLiquidityTokenValue": 1071.851518002
    },
    {
        "date": 1677893171,
        "dayString": 1677893171,
        "dailyVolumeUSD": 459690078853.4087,
        "dailyVolumeUSDValue": 459.6900788534087,
        "priceUSD": "15637.241294144463523698434318424246129770170340524167484615",
        "totalLiquidityUSD": "16760490527649970.105168560457830046424867828796554507570540837126140410",
        "totalLiquidityUSDValue": 16760490.52764997,
        "totalLiquidityTokenValue": 1071.831674934
    },
    {
        "date": 1677983188,
        "dayString": 1677983188,
        "dailyVolumeUSD": 234009289924.847,
        "dailyVolumeUSDValue": 234.009289924847,
        "priceUSD": "15682.657919251856152817836051389795205860790482734158420768",
        "totalLiquidityUSD": "16808983028670960.384988389133766637750103021226383999105340674519282368",
        "totalLiquidityUSDValue": 16808983.02867096,
        "totalLiquidityTokenValue": 1071.819784326
    },
    {
        "date": 1678023494,
        "dayString": 1678023494,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "15508.417835377066471113831933037026096817916352711472199300",
        "totalLiquidityUSD": "16622721198658199.635121018041164838435945972664444450725539926481798600",
        "totalLiquidityUSDValue": 16622721.1986582
    },
    {
        "date": 1678105343,
        "dayString": 1678105343,
        "dailyVolumeUSD": 75171366696.72162,
        "dailyVolumeUSDValue": 75.17136669672162,
        "priceUSD": "15708.338341218197866661228846503464549324250575401441933661",
        "totalLiquidityUSD": "16836463538455793.853094252904358842566286541117493786603376600602589868",
        "totalLiquidityUSDValue": 16836463.538455795,
        "totalLiquidityTokenValue": 1071.816965788
    },
    {
        "date": 1678165625,
        "dayString": 1678165625,
        "dailyVolumeUSD": 486341239320.7598,
        "dailyVolumeUSDValue": 486.3412393207598,
        "priceUSD": "15987.080611593323603404472050816318440418866669862371220246",
        "totalLiquidityUSD": "17134893824238104.020302414587805688914734764237427386378474746218985022",
        "totalLiquidityUSDValue": 17134893.824238103,
        "totalLiquidityTokenValue": 1071.796298557
    },
    {
        "date": 1678263063,
        "dayString": 1678263063,
        "dailyVolumeUSD": 1095693086077.4766,
        "dailyVolumeUSDValue": 1095.6930860774767,
        "priceUSD": "18305.602296269003999228013806063469404309224311943254985008",
        "totalLiquidityUSD": "19618986284286486.800469981661069074328036942291599825081460695262273104",
        "totalLiquidityUSDValue": 19618986.284286488,
        "totalLiquidityTokenValue": 1071.747652263
    },
    {
        "date": 1678334554,
        "dayString": 1678334554,
        "dailyVolumeUSD": 708017514085.8846,
        "dailyVolumeUSDValue": 708.0175140858846,
        "priceUSD": "18442.047550352529559087048586390305429176320789646794567470",
        "totalLiquidityUSD": "19764531020254787.897970309358900955874256846891687807915966753090730110",
        "totalLiquidityUSDValue": 19764531.020254787,
        "totalLiquidityTokenValue": 1071.710229913
    },
    {
        "date": 1678409389,
        "dayString": 1678409389,
        "dailyVolumeUSD": 97924676045533.62,
        "dailyVolumeUSDValue": 97924.67604553362,
        "priceUSD": "62382.324241481066185222828176080484002041475021879681486341",
        "totalLiquidityUSD": "66853826042766769.749772194390086811141880419191203133213692173208610467",
        "totalLiquidityUSDValue": 66853826.042766765,
        "totalLiquidityTokenValue": 1071.678986887
    },
    {
        "date": 1678455494,
        "dayString": 1678455494,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "15987.080611593323603404472050816318440418866669862371220246",
        "totalLiquidityUSD": "17134893824238104.020302414587805688914734764237427386378474746218985022",
        "totalLiquidityUSDValue": 17134893.824238103
    },
    {
        "date": 1678550444,
        "dayString": 1678550444,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "62354.196339149001077423627071637008992015068853968716916456",
        "totalLiquidityUSD": "66823790921857386.968991654854320829955412255176774841699561177793382584",
        "totalLiquidityUSDValue": 66823790.92185739,
        "totalLiquidityTokenValue": 1071.680734339
    },
    {
        "date": 1678589966,
        "dayString": 1678589966,
        "dailyVolumeUSD": 118366608608.3423,
        "dailyVolumeUSDValue": 118.3666086083423,
        "priceUSD": "62395.617900544876274374008528346035067502002866614529119300",
        "totalLiquidityUSD": "66868122427887282.302820626766781480277043447744649488600804806286564600",
        "totalLiquidityUSDValue": 66868122.42788728,
        "totalLiquidityTokenValue": 1071.679785822
    },
    {
        "date": 1678705404,
        "dayString": 1678705404,
        "dailyVolumeUSD": 519750027036.93365,
        "dailyVolumeUSDValue": 519.7500270369336,
        "priceUSD": "62564.240140600494572934763425121108313953612454235914582488",
        "totalLiquidityUSD": "67048453055439707.571110586120954146915787856146852879519576392504866896",
        "totalLiquidityUSDValue": 67048453.0554397,
        "totalLiquidityTokenValue": 1071.673737342
    },
    {
        "date": 1678752927,
        "dayString": 1678752927,
        "dailyVolumeUSD": 33328359976969.152,
        "dailyVolumeUSDValue": 33328.35997696915,
        "priceUSD": "50634.558795572961518942758002712743394591556901026773140543",
        "totalLiquidityUSD": "54296110962103650.040536049604119892732256980098421586064441639695570984",
        "totalLiquidityUSDValue": 54296110.96210365,
        "totalLiquidityTokenValue": 1072.313302488
    },
    {
        "date": 1678801094,
        "dayString": 1678801094,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "62382.324241481066185222828176080484002041475021879681486341",
        "totalLiquidityUSD": "66853826042766769.749772194390086811141880419191203133213692173208610467",
        "totalLiquidityUSDValue": 66853826.042766765
    },
    {
        "date": 1678894764,
        "dayString": 1678894764,
        "dailyVolumeUSD": 165593858021.71567,
        "dailyVolumeUSDValue": 165.59385802171568,
        "priceUSD": "50686.743915118787431704908441118666324993817233193024623381",
        "totalLiquidityUSD": "54351941994922913.742080454776847015621056402368091475682069874866252848",
        "totalLiquidityUSDValue": 54351941.99492291,
        "totalLiquidityTokenValue": 1072.310781808
    },
    {
        "date": 1678955795,
        "dayString": 1678955795,
        "dailyVolumeUSD": 257930652843.30234,
        "dailyVolumeUSDValue": 257.9306528433023,
        "priceUSD": "50768.050229851023547995411867298521564183958210556851833861",
        "totalLiquidityUSD": "54438940100383244.761815137005531974310332751690221696785569820375215761",
        "totalLiquidityUSDValue": 54438940.100383244,
        "totalLiquidityTokenValue": 1072.307087901
    },
    {
        "date": 1679043478,
        "dayString": 1679043478,
        "dailyVolumeUSD": 481905516284.30566,
        "dailyVolumeUSDValue": 481.9055162843057,
        "priceUSD": "50497.956140701605460598428079150238692260591105639636504730",
        "totalLiquidityUSD": "54148954139359549.716544801784021283903137236114523144122378349725758440",
        "totalLiquidityUSDValue": 54148954.13935955,
        "totalLiquidityTokenValue": 1072.299916228
    },
    {
        "date": 1679060294,
        "dayString": 1679060294,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "62395.617900544876274374008528346035067502002866614529119300",
        "totalLiquidityUSD": "66868122427887282.302820626766781480277043447744649488600804806286564600",
        "totalLiquidityUSDValue": 66868122.42788728
    },
    {
        "date": 1679155375,
        "dayString": 1679155375,
        "dailyVolumeUSD": 281523486173.0474,
        "dailyVolumeUSDValue": 281.52348617304744,
        "priceUSD": "50586.876728957262439435421295321114761900529002042703595215",
        "totalLiquidityUSD": "54244045540744902.541826772431397065880060553044178250026389040228453260",
        "totalLiquidityUSDValue": 54244045.5407449,
        "totalLiquidityTokenValue": 1072.294813364
    },
    {
        "date": 1679212045,
        "dayString": 1679212045,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "50586.876728957262439435421295321114761900529002042703595215",
        "totalLiquidityUSD": "54244045540744902.541826772431397065880060553044178250026389040228453260",
        "totalLiquidityUSDValue": 54244045.5407449,
        "totalLiquidityTokenValue": 1072.294813364
    },
    {
        "date": 1679233094,
        "dayString": 1679233094,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "62564.240140600494572934763425121108313953612454235914582488",
        "totalLiquidityUSD": "67048453055439707.571110586120954146915787856146852879519576392504866896",
        "totalLiquidityUSDValue": 67048453.0554397
    },
    {
        "date": 1679345192,
        "dayString": 1679345192,
        "dailyVolumeUSD": 469969908.3692118,
        "dailyVolumeUSDValue": 0.4699699083692118,
        "priceUSD": "50687.004785290314104874797176724309767856322897768951496812",
        "totalLiquidityUSD": "54351260632045210.073145154035129989818615055124770297390706920082552048",
        "totalLiquidityUSDValue": 54351260.63204521,
        "totalLiquidityTokenValue": 1072.291820404
    },
    {
        "date": 1679414425,
        "dayString": 1679414425,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "50687.004785107426560046418074276716059988022997920810054408",
        "totalLiquidityUSD": "54350979978258415.148446802260509275605938692505614099593735635017825688",
        "totalLiquidityUSDValue": 54350979.978258416,
        "totalLiquidityTokenValue": 1072.286283411
    },
    {
        "date": 1679461422,
        "dayString": 1679461422,
        "dailyVolumeUSD": 616059710792.8885,
        "dailyVolumeUSDValue": 616.0597107928885,
        "priceUSD": "50764.169352839884109995700413739311888318700046572709253000",
        "totalLiquidityUSD": "54433406820796491.762926119753534284205481327274237336611879129705191000",
        "totalLiquidityUSDValue": 54433406.82079649,
        "totalLiquidityTokenValue": 1072.280065147
    },
    {
        "date": 1679492294,
        "dayString": 1679492294,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "50686.743915118787431704908441118666324993817233193024623381",
        "totalLiquidityUSD": "54351941994922913.742080454776847015621056402368091475682069874866252848",
        "totalLiquidityUSDValue": 54351941.99492291
    },
    {
        "date": 1679577606,
        "dayString": 1679577606,
        "dailyVolumeUSD": 82578085089.17398,
        "dailyVolumeUSDValue": 82.57808508917398,
        "priceUSD": "50790.278331504963040038105898772008409269837526808876862840",
        "totalLiquidityUSD": "54461320380055315.057140659233982725163339212892853607153916204458943720",
        "totalLiquidityUSDValue": 54461320.38005531,
        "totalLiquidityTokenValue": 1072.278439283
    },
    {
        "date": 1679622138,
        "dayString": 1679622138,
        "dailyVolumeUSD": 22636481951103.4,
        "dailyVolumeUSDValue": 22636.4819511034,
        "priceUSD": "43828.312812093234314757881102966466344022714728757965140644",
        "totalLiquidityUSD": "47019698733347031.301859951830670027732143875089469497007209442526548276",
        "totalLiquidityUSDValue": 47019698.73334703,
        "totalLiquidityTokenValue": 1072.815623429
    },
    {
        "date": 1679744331,
        "dayString": 1679744331,
        "dailyVolumeUSD": 512180548867.48944,
        "dailyVolumeUSDValue": 512.1805488674894,
        "priceUSD": "43977.845226552204889360054593002314214774491070184952073004",
        "totalLiquidityUSD": "47179607048809526.910957876590947658214448648860052884376129384532094888",
        "totalLiquidityUSDValue": 47179607.04880953,
        "totalLiquidityTokenValue": 1072.803972222
    },
    {
        "date": 1679751494,
        "dayString": 1679751494,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "50497.956140701605460598428079150238692260591105639636504730",
        "totalLiquidityUSD": "54148954139359549.716544801784021283903137236114523144122378349725758440",
        "totalLiquidityUSDValue": 54148954.13935955
    },
    {
        "date": 1679840544,
        "dayString": 1679840544,
        "dailyVolumeUSD": 176028348069.56186,
        "dailyVolumeUSDValue": 176.02834806956187,
        "priceUSD": "43995.057826937967210547407770784290005048734561034247991372",
        "totalLiquidityUSD": "47198043464426470.826965020012638953402342971465901874533658192487749112",
        "totalLiquidityUSDValue": 47198043.46442647,
        "totalLiquidityTokenValue": 1072.803305546
    },
    {
        "date": 1679993256,
        "dayString": 1679993256,
        "dailyVolumeUSD": 1446077848849.0955,
        "dailyVolumeUSDValue": 1446.0778488490955,
        "priceUSD": "43651.229208056827527873043855338617806760418454682494413756",
        "totalLiquidityUSD": "46829211064857424.867991368615889448626635297049598138460312885278244116",
        "totalLiquidityUSDValue": 46829211.06485742,
        "totalLiquidityTokenValue": 1072.803948811
    },
    {
        "date": 1680067936,
        "dayString": 1680067936,
        "dailyVolumeUSD": 44574580513098.56,
        "dailyVolumeUSDValue": 44574.58051309856,
        "priceUSD": "55168.371419475054752284646314307208651922221071238548362080",
        "totalLiquidityUSD": "59141195711155108.391694499152678737903508358495722731786289823164113280",
        "totalLiquidityUSDValue": 59141195.71115511,
        "totalLiquidityTokenValue": 1072.012716516
    },
    {
        "date": 1680097094,
        "dayString": 1680097094,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "50687.004785290314104874797176724309767856322897768951496812",
        "totalLiquidityUSD": "54351260632045210.073145154035129989818615055124770297390706920082552048",
        "totalLiquidityUSDValue": 54351260.63204521
    },
    {
        "date": 1680186147,
        "dayString": 1680186147,
        "dailyVolumeUSD": 2420971073604.422,
        "dailyVolumeUSDValue": 2420.9710736044217,
        "priceUSD": "55469.839757697050878278224837079716550656870875138897256916",
        "totalLiquidityUSD": "59462059068600425.706009168223725383576311845896261127968075644262380992",
        "totalLiquidityUSDValue": 59462059.06860042,
        "totalLiquidityTokenValue": 1071.970990512
    },
    {
        "date": 1680236357,
        "dayString": 1680236357,
        "dailyVolumeUSD": 331066917002.9923,
        "dailyVolumeUSDValue": 331.0669170029923,
        "priceUSD": "55580.115060918744800747374699697505899909363468199323307240",
        "totalLiquidityUSD": "59580050938886700.797081804741272822044852477554182016660134788341015160",
        "totalLiquidityUSDValue": 59580050.9388867,
        "totalLiquidityTokenValue": 1071.967031259
    },
    {
        "date": 1680269894,
        "dayString": 1680269894,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "50687.004785107426560046418074276716059988022997920810054408",
        "totalLiquidityUSD": "54350979978258415.148446802260509275605938692505614099593735635017825688",
        "totalLiquidityUSDValue": 54350979.978258416
    },
    {
        "date": 1680356294,
        "dayString": 1680356294,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "50687.004785107426560046418074276716059988022997920810054408",
        "totalLiquidityUSD": "54350979978258415.148446802260509275605938692505614099593735635017825688",
        "totalLiquidityUSDValue": 54350979.978258416
    },
    {
        "date": 1680465011,
        "dayString": 1680465011,
        "dailyVolumeUSD": 17230693779.727108,
        "dailyVolumeUSDValue": 17.23069377972711,
        "priceUSD": "55573.381904794044672242496056826440704899005543389045047596",
        "totalLiquidityUSD": "59572815986810922.920018881417373623496237762393716772988930916332520776",
        "totalLiquidityUSDValue": 59572815.98681092,
        "totalLiquidityTokenValue": 1071.966721206
    },
    {
        "date": 1680511765,
        "dayString": 1680511765,
        "dailyVolumeUSD": 57097911624.024895,
        "dailyVolumeUSDValue": 57.097911624024896,
        "priceUSD": "55592.413476607468090626091487715170699186324203304033666460",
        "totalLiquidityUSD": "59593183142757028.833573198110619877154468656849545683474151556874220600",
        "totalLiquidityUSDValue": 59593183.14275703,
        "totalLiquidityTokenValue": 1071.96610861
    },
    {
        "date": 1680609074,
        "dayString": 1680609074,
        "dailyVolumeUSD": 11486906532.090473,
        "dailyVolumeUSDValue": 11.486906532090472,
        "priceUSD": "55596.242889317093753541834039662564605858985058388960879584",
        "totalLiquidityUSD": "59597276656491095.840866086539800559341233913709102868160950809062129248",
        "totalLiquidityUSDValue": 59597276.65649109,
        "totalLiquidityTokenValue": 1071.965901997
    },
    {
        "date": 1680615494,
        "dayString": 1680615494,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "50790.278331504963040038105898772008409269837526808876862840",
        "totalLiquidityUSD": "54461320380055315.057140659233982725163339212892853607153916204458943720",
        "totalLiquidityUSDValue": 54461320.38005531
    },
    {
        "date": 1680701894,
        "dayString": 1680701894,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "50790.278331504963040038105898772008409269837526808876862840",
        "totalLiquidityUSD": "54461320380055315.057140659233982725163339212892853607153916204458943720",
        "totalLiquidityUSDValue": 54461320.38005531
    },
    {
        "date": 1680800103,
        "dayString": 1680800103,
        "dailyVolumeUSD": 1757127415782.813,
        "dailyVolumeUSDValue": 1757.127415782813,
        "priceUSD": "55196.914994517739304462704740301194180431690048815167092337",
        "totalLiquidityUSD": "59167257596630543.041308206360643847615862478386333631151979475581628324",
        "totalLiquidityUSDValue": 59167257.59663054,
        "totalLiquidityTokenValue": 1071.930516452
    },
    {
        "date": 1680874694,
        "dayString": 1680874694,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "43828.312812093234314757881102966466344022714728757965140644",
        "totalLiquidityUSD": "47019698733347031.301859951830670027732143875089469497007209442526548276",
        "totalLiquidityUSDValue": 47019698.73334703
    },
    {
        "date": 1680961094,
        "dayString": 1680961094,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "43828.312812093234314757881102966466344022714728757965140644",
        "totalLiquidityUSD": "47019698733347031.301859951830670027732143875089469497007209442526548276",
        "totalLiquidityUSDValue": 47019698.73334703
    },
    {
        "date": 1681047494,
        "dayString": 1681047494,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "43828.312812093234314757881102966466344022714728757965140644",
        "totalLiquidityUSD": "47019698733347031.301859951830670027732143875089469497007209442526548276",
        "totalLiquidityUSDValue": 47019698.73334703
    },
    {
        "date": 1681133894,
        "dayString": 1681133894,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "43828.312812093234314757881102966466344022714728757965140644",
        "totalLiquidityUSD": "47019698733347031.301859951830670027732143875089469497007209442526548276",
        "totalLiquidityUSDValue": 47019698.73334703
    },
    {
        "date": 1681220294,
        "dayString": 1681220294,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "43828.312812093234314757881102966466344022714728757965140644",
        "totalLiquidityUSD": "47019698733347031.301859951830670027732143875089469497007209442526548276",
        "totalLiquidityUSDValue": 47019698.73334703
    },
    {
        "date": 1681306694,
        "dayString": 1681306694,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "43828.312812093234314757881102966466344022714728757965140644",
        "totalLiquidityUSD": "47019698733347031.301859951830670027732143875089469497007209442526548276",
        "totalLiquidityUSDValue": 47019698.73334703
    },
    {
        "date": 1681393094,
        "dayString": 1681393094,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "43828.312812093234314757881102966466344022714728757965140644",
        "totalLiquidityUSD": "47019698733347031.301859951830670027732143875089469497007209442526548276",
        "totalLiquidityUSDValue": 47019698.73334703
    },
    {
        "date": 1681499581,
        "dayString": 1681499581,
        "dailyVolumeUSD": 2267843588.1782904,
        "dailyVolumeUSDValue": 2.2678435881782906,
        "priceUSD": "55094.225109401412615645375817539643277021835093180319334034",
        "totalLiquidityUSD": "59057178907199814.247376748377570296760537529183863759306311861573685826",
        "totalLiquidityUSDValue": 59057178.907199815,
        "totalLiquidityTokenValue": 1071.930475289
    },
    {
        "date": 1681565894,
        "dayString": 1681565894,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "43977.845226552204889360054593002314214774491070184952073004",
        "totalLiquidityUSD": "47179607048809526.910957876590947658214448648860052884376129384532094888",
        "totalLiquidityUSDValue": 47179607.04880953
    },
    {
        "date": 1681713288,
        "dayString": 1681713288,
        "dailyVolumeUSD": 127039314216.83092,
        "dailyVolumeUSDValue": 127.03931421683092,
        "priceUSD": "55136.824604793383613128089237223021595711341854727766069804",
        "totalLiquidityUSD": "59102729197798270.354516440107523861747579399301001294066327490512530860",
        "totalLiquidityUSDValue": 59102729.197798274,
        "totalLiquidityTokenValue": 1071.928418465
    },
    {
        "date": 1681738694,
        "dayString": 1681738694,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "43995.057826937967210547407770784290005048734561034247991372",
        "totalLiquidityUSD": "47198043464426470.826965020012638953402342971465901874533658192487749112",
        "totalLiquidityUSDValue": 47198043.46442647
    },
    {
        "date": 1681884079,
        "dayString": 1681884079,
        "dailyVolumeUSD": 1700792408.0654862,
        "dailyVolumeUSDValue": 1.7007924080654861,
        "priceUSD": "55138.373697123698827208144433915841811926777361793221320000",
        "totalLiquidityUSD": "59104388013091686.341842587550352277811799733901117798344031614837080000",
        "totalLiquidityUSDValue": 59104388.01309169,
        "totalLiquidityTokenValue": 1071.928387619
    },
    {
        "date": 1681956201,
        "dayString": 1681956201,
        "dailyVolumeUSD": 320870232772.9787,
        "dailyVolumeUSDValue": 320.8702327729787,
        "priceUSD": "55406.480117724334783408135814768125676562645643770448345664",
        "totalLiquidityUSD": "59391457296525426.572300953846849684639166916973248215615051073368182336",
        "totalLiquidityUSDValue": 59391457.296525426,
        "totalLiquidityTokenValue": 1071.922583249
    },
    {
        "date": 1681997894,
        "dayString": 1681997894,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "55168.371419475054752284646314307208651922221071238548362080",
        "totalLiquidityUSD": "59141195711155108.391694499152678737903508358495722731786289823164113280",
        "totalLiquidityUSDValue": 59141195.71115511
    },
    {
        "date": 1682104642,
        "dayString": 1682104642,
        "dailyVolumeUSD": 19969895159385.13,
        "dailyVolumeUSDValue": 19969.89515938513,
        "priceUSD": "30.295529415367742435941090741265526969460705715282019840",
        "totalLiquidityUSD": "40048344505658.992800224526575080441694900774431544185963455269660160",
        "totalLiquidityUSDValue": 40048.34450565899,
        "totalLiquidityTokenValue": 1321.922583249
    },
    {
        "date": 1682170694,
        "dayString": 1682170694,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "55469.839757697050878278224837079716550656870875138897256916",
        "totalLiquidityUSD": "59462059068600425.706009168223725383576311845896261127968075644262380992",
        "totalLiquidityUSDValue": 59462059.06860042
    },
    {
        "date": 1682257094,
        "dayString": 1682257094,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "55469.839757697050878278224837079716550656870875138897256916",
        "totalLiquidityUSD": "59462059068600425.706009168223725383576311845896261127968075644262380992",
        "totalLiquidityUSDValue": 59462059.06860042
    },
    {
        "date": 1682348834,
        "dayString": 1682348834,
        "dailyVolumeUSD": 330128448236.79816,
        "dailyVolumeUSDValue": 330.12844823679814,
        "priceUSD": "28.407387467419895638753691345168637926360124417478385622",
        "totalLiquidityUSD": "37786946066423.102688036421098718649124684895837787751139597696857984",
        "totalLiquidityUSDValue": 37786.9460664231,
        "totalLiquidityTokenValue": 1330.180260672
    },
    {
        "date": 1682414918,
        "dayString": 1682414918,
        "dailyVolumeUSD": 1594458112.7589636,
        "dailyVolumeUSDValue": 1.5944581127589637,
        "priceUSD": "28.419475104186751444936545635540279555030939582031069688",
        "totalLiquidityUSD": "37801430119169.396583799113665924685287629962114789010257006127378544",
        "totalLiquidityUSDValue": 37801.430119169396,
        "totalLiquidityTokenValue": 1330.124148338
    },
    {
        "date": 1682429894,
        "dayString": 1682429894,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "55580.115060918744800747374699697505899909363468199323307240",
        "totalLiquidityUSD": "59580050938886700.797081804741272822044852477554182016660134788341015160",
        "totalLiquidityUSDValue": 59580050.9388867
    },
    {
        "date": 1682516294,
        "dayString": 1682516294,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "55580.115060918744800747374699697505899909363468199323307240",
        "totalLiquidityUSD": "59580050938886700.797081804741272822044852477554182016660134788341015160",
        "totalLiquidityUSDValue": 59580050.9388867
    },
    {
        "date": 1682617951,
        "dayString": 1682617951,
        "dailyVolumeUSD": 236664691488.5765,
        "dailyVolumeUSDValue": 236.6646914885765,
        "priceUSD": "30.189178890085378345484027053214235236650018889084781210",
        "totalLiquidityUSD": "39918562147885.516656237720155792302626037318551747612829203432667560",
        "totalLiquidityUSDValue": 39918.56214788552,
        "totalLiquidityTokenValue": 1322.280486436
    },
    {
        "date": 1682689094,
        "dayString": 1682689094,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "55573.381904794044672242496056826440704899005543389045047596",
        "totalLiquidityUSD": "59572815986810922.920018881417373623496237762393716772988930916332520776",
        "totalLiquidityUSDValue": 59572815.98681092
    },
    {
        "date": 1682775494,
        "dayString": 1682775494,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "55573.381904794044672242496056826440704899005543389045047596",
        "totalLiquidityUSD": "59572815986810922.920018881417373623496237762393716772988930916332520776",
        "totalLiquidityUSDValue": 59572815.98681092
    },
    {
        "date": 1682865921,
        "dayString": 1682865921,
        "dailyVolumeUSD": 455571310.74919933,
        "dailyVolumeUSDValue": 0.4555713107491993,
        "priceUSD": "30.192828125396359903215699827064090991453657159721513592",
        "totalLiquidityUSD": "39922931889216.891578811804439748878496474098195333156162569050674320",
        "totalLiquidityUSDValue": 39922.93188921689,
        "totalLiquidityTokenValue": 1322.26539771
    },
    {
        "date": 1682948294,
        "dayString": 1682948294,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "55592.413476607468090626091487715170699186324203304033666460",
        "totalLiquidityUSD": "59593183142757028.833573198110619877154468656849545683474151556874220600",
        "totalLiquidityUSDValue": 59593183.14275703
    },
    {
        "date": 1683055987,
        "dayString": 1683055987,
        "dailyVolumeUSD": 770986138760.3354,
        "dailyVolumeUSDValue": 770.9861387603354,
        "priceUSD": "36.232893784084943815450611978848101015411068483179329890",
        "totalLiquidityUSD": "47343755062545.237491444183932449086400376768312177124277820271226660",
        "totalLiquidityUSDValue": 47343.755062545235,
        "totalLiquidityTokenValue": 1306.651225394
    },
    {
        "date": 1683124760,
        "dayString": 1683124760,
        "dailyVolumeUSD": 574415772991.9209,
        "dailyVolumeUSDValue": 574.4157729919209,
        "priceUSD": "35.172629031557918365843431002191374432067260704001678360",
        "totalLiquidityUSD": "46174793589034.547873987475523520800962019285402447193253690524572680",
        "totalLiquidityUSDValue": 46174.79358903455,
        "totalLiquidityTokenValue": 1312.804725163
    },
    {
        "date": 1683217114,
        "dayString": 1683217114,
        "dailyVolumeUSD": 122438331178.71861,
        "dailyVolumeUSDValue": 122.43833117871861,
        "priceUSD": "36.167570497182507124854297701129522215905694375849467216",
        "totalLiquidityUSD": "47334084826251.770357919217383840925284886880371306872025512472410288",
        "totalLiquidityUSDValue": 47334.084826251776,
        "totalLiquidityTokenValue": 1308.743832543
    },
    {
        "date": 1683296425,
        "dayString": 1683296425,
        "dailyVolumeUSD": 643662746419.0653,
        "dailyVolumeUSDValue": 643.6627464190653,
        "priceUSD": "41.442503996850186924940511672440433767259115420775448007",
        "totalLiquidityUSD": "58396252667339.507479919585697994285139627091318736151395184760950892",
        "totalLiquidityUSDValue": 58396.25266733951,
        "totalLiquidityTokenValue": 1409.090837556
    },
    {
        "date": 1683380294,
        "dayString": 1683380294,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "55136.824604793383613128089237223021595711341854727766069804",
        "totalLiquidityUSD": "59102729197798270.354516440107523861747579399301001294066327490512530860",
        "totalLiquidityUSDValue": 59102729.197798274
    },
    {
        "date": 1683532793,
        "dayString": 1683532793,
        "dailyVolumeUSD": 4572600043.055882,
        "dailyVolumeUSDValue": 4.572600043055883,
        "priceUSD": "41.450319802508233212080215054308337624654070111223405480",
        "totalLiquidityUSD": "58402692511003.621497601227290047557090155023755256715696095911586080",
        "totalLiquidityUSDValue": 58402.692511003625,
        "totalLiquidityTokenValue": 1408.980504596
    },
    {
        "date": 1683625994,
        "dayString": 1683625994,
        "dailyVolumeUSD": 46249490286.8745,
        "dailyVolumeUSDValue": 46.2494902868745,
        "priceUSD": "41.720391973285440048770837359873388320448540377474786500",
        "totalLiquidityUSD": "58736892824406.694302715484784298430616979825624362998321003927769000",
        "totalLiquidityUSDValue": 58736.89282440669,
        "totalLiquidityTokenValue": 1407.870109706
    },
    {
        "date": 1683639494,
        "dayString": 1683639494,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "55406.480117724334783408135814768125676562645643770448345664",
        "totalLiquidityUSD": "59391457296525426.572300953846849684639166916973248215615051073368182336",
        "totalLiquidityUSDValue": 59391457.296525426
    },
    {
        "date": 1683733189,
        "dayString": 1683733189,
        "dailyVolumeUSD": 45971162565.92021,
        "dailyVolumeUSDValue": 45.97116256592021,
        "priceUSD": "42.152886201581865445416184672673553867069036100983466158",
        "totalLiquidityUSD": "59299743637784.577515505290286233278143722991942428561674275497110548",
        "totalLiquidityUSDValue": 59299.74363778458,
        "totalLiquidityTokenValue": 1406.777779206
    },
    {
        "date": 1683818417,
        "dayString": 1683818417,
        "dailyVolumeUSD": 2295108739.4350843,
        "dailyVolumeUSDValue": 2.295108739435084,
        "priceUSD": "42.163954815739372089756172732627805136739401724277573680",
        "totalLiquidityUSD": "59324531520524.338721135456371073252625684166928275599571698593606080",
        "totalLiquidityUSDValue": 59324.53152052434,
        "totalLiquidityTokenValue": 1406.996373556
    },
    {
        "date": 1683902990,
        "dayString": 1683902990,
        "dailyVolumeUSD": 1201320495291.9934,
        "dailyVolumeUSDValue": 1201.3204952919934,
        "priceUSD": "34.481831933006146335640287094801597215180387860988415440",
        "totalLiquidityUSD": "49665198887311.815167098341865585838120169532299885362214880352588160",
        "totalLiquidityUSDValue": 49665.19888731181,
        "totalLiquidityTokenValue": 1440.329475064
    },
    {
        "date": 1684017966,
        "dayString": 1684017966,
        "dailyVolumeUSD": 26931337276.691055,
        "dailyVolumeUSDValue": 26.931337276691057,
        "priceUSD": "34.390402582732038294163149499042960652543555460158262600",
        "totalLiquidityUSD": "49506579161949.375490576350776710253547503360992190288881357925262000",
        "totalLiquidityUSDValue": 49506.579161949376,
        "totalLiquidityTokenValue": 1439.54636887
    },
    {
        "date": 1684061880,
        "dayString": 1684061880,
        "dailyVolumeUSD": 1070589497.0587363,
        "dailyVolumeUSDValue": 1.0705894970587364,
        "priceUSD": "34.384681398768326004628925820262407901032276097991736906",
        "totalLiquidityUSD": "49499413841788.554432760299326946180143554637565023619874817857552026",
        "totalLiquidityUSDValue": 49499.413841788555,
        "totalLiquidityTokenValue": 1439.577504521
    },
    {
        "date": 1684071494,
        "dayString": 1684071494,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "30.189178890085378345484027053214235236650018889084781210",
        "totalLiquidityUSD": "39918562147885.516656237720155792302626037318551747612829203432667560",
        "totalLiquidityUSDValue": 39918.56214788552
    },
    {
        "date": 1684156565,
        "dayString": 1684156565,
        "dailyVolumeUSD": 16351630331.968681,
        "dailyVolumeUSDValue": 16.351630331968682,
        "priceUSD": "34.472308035064429822439881023152962561928405595372482118",
        "totalLiquidityUSD": "49609189514770.692134435282266419839100509188109548954771804523938032",
        "totalLiquidityUSDValue": 49609.1895147707,
        "totalLiquidityTokenValue": 1439.102640424
    },
    {
        "date": 1684226836,
        "dayString": 1684226836,
        "dailyVolumeUSD": 314997781071.3855,
        "dailyVolumeUSDValue": 314.9977810713855,
        "priceUSD": "34.343249954861493481561932693428120244556584233652903475",
        "totalLiquidityUSD": "49420459818600.626547667079037982817675758549920395867218377182937500",
        "totalLiquidityUSDValue": 49420.459818600626,
        "totalLiquidityTokenValue": 1439.0152325
    },
    {
        "date": 1684316429,
        "dayString": 1684316429,
        "dailyVolumeUSD": 1020508014397.238,
        "dailyVolumeUSDValue": 1020.5080143972381,
        "priceUSD": "30.404658758070151046834774523854753668418732997840277740",
        "totalLiquidityUSD": "44467486020941.272998598563623130261365124554050802029422121379588340",
        "totalLiquidityUSDValue": 44467.48602094127,
        "totalLiquidityTokenValue": 1462.522121191
    },
    {
        "date": 1684399301,
        "dayString": 1684399301,
        "dailyVolumeUSD": 185903057624.57443,
        "dailyVolumeUSDValue": 185.90305762457444,
        "priceUSD": "31.396074956701527144922272818967464555944711038693249754",
        "totalLiquidityUSD": "45755766984947.964871262679158732719179716645322621584741849442343862",
        "totalLiquidityUSDValue": 45755.76698494797,
        "totalLiquidityTokenValue": 1457.372204903
    },
    {
        "date": 1684494555,
        "dayString": 1684494555,
        "dailyVolumeUSD": 652672018277.3024,
        "dailyVolumeUSDValue": 652.6720182773024,
        "priceUSD": "28.754738384711745295866206388844551389783578283619303228",
        "totalLiquidityUSD": "42429860676366.226942299891624056000762487427181550483219527995197480",
        "totalLiquidityUSDValue": 42429.860676366225,
        "totalLiquidityTokenValue": 1475.57804591
    },
    {
        "date": 1684503494,
        "dayString": 1684503494,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "36.167570497182507124854297701129522215905694375849467216",
        "totalLiquidityUSD": "47334084826251.770357919217383840925284886880371306872025512472410288",
        "totalLiquidityUSDValue": 47334.084826251776
    },
    {
        "date": 1684589894,
        "dayString": 1684589894,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "36.167570497182507124854297701129522215905694375849467216",
        "totalLiquidityUSD": "47334084826251.770357919217383840925284886880371306872025512472410288",
        "totalLiquidityUSDValue": 47334.084826251776
    },
    {
        "date": 1684709607,
        "dayString": 1684709607,
        "dailyVolumeUSD": 33597255931.375732,
        "dailyVolumeUSDValue": 33.597255931375734,
        "priceUSD": "28.918792182286430475498298191706768553522494376758619259",
        "totalLiquidityUSD": "42705207747581.994063565097236357688619970274997603623860505474117718",
        "totalLiquidityUSDValue": 42705.20774758199,
        "totalLiquidityTokenValue": 1476.728608802
    },
    {
        "date": 1684762694,
        "dayString": 1684762694,
        "dailyVolumeUSD": 0,
        "dailyVolumeUSDValue": 0,
        "priceUSD": "41.442503996850186924940511672440433767259115420775448007",
        "totalLiquidityUSD": "58396252667339.507479919585697994285139627091318736151395184760950892",
        "totalLiquidityUSDValue": 58396.25266733951
    }
]
export const Default = Template.bind({});
Default.args = {
    firstTokenImg: casperToken,
    secondTokenImg: bitcoinToken,
    platformGasFee: 0.1,
    slippageTolerance: 0.005,
    calculateMinimumTokenReceived: (() =>  200),
    firstSymbolToken: 'CSPR',
    firstTokenAmount: 1000,
    pairPath: ['CSPR', 'ETH'],
    secondSymbolToken: 'ETH',
    secondTokenAmount: 200,
    priceImpact: 1.5,
    priceImpactMessage: 'Low Price Impact',
    networkGasFee: 40,
    networkGasFeeSetter    : (value) => {console.log("new networkGasFee", value)},
    slippageSetter  : (value) => {console.log("new slippage", value)},
    // graphic
    onClickButton0: () => {console.log("onClickButton0")},
    onClickButton1: () => {console.log("onClickButton1")},
    graphicData: data,
    todayPrice: '1000',
    yesterdayPrice: '2000',
    xAxisName: 'name',
    chart0Name: 'eth',
    chart1Name: 'cspr',
    showChart1: true,
    showChart0: true,
    charHeight: 300,
    feeSymbol: 'cspr'
}

export const WithoutPair = Template.bind({});
WithoutPair.args = {
    firstTokenImg: casperToken,
    secondTokenImg: bitcoinToken,
    platformGasFee: 0.1,
    slippageTolerance: 0.005,
    calculateMinimumTokenReceived: (() =>  200),
    firstSymbolToken: 'WETH',
    firstTokenAmount: 1000,
    pairPath: [],
    secondSymbolToken: 'ETH',
    secondTokenAmount: 200,
    priceImpact: 1.5,
    priceImpactMessage: 'Low Price Impact',
    networkGasFee: 40,
    networkGasFeeSetter    : (value) => {console.log("new networkGasFee", value)},
    slippageSetter  : (value) => {console.log("new slippage", value)},
    // graphic
    onClickButton0: () => {console.log("onClickButton0")},
    onClickButton1: () => {console.log("onClickButton1")},
    graphicData: data,
    todayPrice: '1000',
    yesterdayPrice: '2000',
    xAxisName: 'name',
    chart0Name: 'eth',
    chart1Name: 'cspr',
    showChart1: true,
    showChart0: true,
    feeSymbol: 'cspr'
}

export const WithMoreThanOnePair = Template.bind({});
WithMoreThanOnePair.args = {
    firstTokenImg: casperToken,
    secondTokenImg: bitcoinToken,
    platformGasFee: 0.1,
    slippageTolerance: 0.005,
    calculateMinimumTokenReceived: (() =>  200),
    firstSymbolToken: 'CSPR',
    firstTokenAmount: 1000,
    pairPath: ['ETH', 'CSPR', 'BTC'],
    secondSymbolToken: 'ETH',
    secondTokenAmount: 200,
    priceImpact: 1.5,
    priceImpactMessage: 'Low Price Impact',
    networkGasFee: 40,
    networkGasFeeSetter    : (value) => {console.log("new networkGasFee", value)},
    slippageSetter  : (value) => {console.log("new slippage", value)},
    // graphic
    onClickButton0: () => {console.log("onClickButton0")},
    onClickButton1: () => {console.log("onClickButton1")},
    graphicData: data,
    todayPrice: '1000',
    yesterdayPrice: '2000',
    xAxisName: 'name',
    chart0Name: 'eth',
    chart1Name: 'cspr',
    showChart1: true,
    showChart0: false,
    feeSymbol: 'cspr'
}

export const WithTabDefault = Template.bind({});
WithTabDefault.args = {
    firstTokenImg: casperToken,
    secondTokenImg: bitcoinToken,
    platformGasFee: 0.1,
    slippageTolerance: 0.005,
    calculateMinimumTokenReceived: (() =>  200),
    firstSymbolToken: 'CSPR',
    firstTokenAmount: 1000,
    pairPath: ['ETH', 'CSPR', 'BTC'],
    secondSymbolToken: 'ETH',
    secondTokenAmount: 200,
    priceImpact: 1.5,
    priceImpactMessage: 'Low Price Impact',
    networkGasFee: 40,
    networkGasFeeSetter    : (value) => {console.log("new networkGasFee", value)},
    slippageSetter  : (value) => {console.log("new slippage", value)},
    // graphic
    onClickButton0: () => {console.log("onClickButton0")},
    onClickButton1: () => {console.log("onClickButton1")},
    graphicData: data,
    todayPrice: '1000',
    yesterdayPrice: '2000',
    xAxisName: 'name',
    chart0Name: 'eth',
    chart1Name: 'cspr',
    showChart1: true,
    showChart0: false,
    tabDefault: 2,
    feeSymbol: 'cspr'
}

export const WithNonEditableSlippageDefault = Template.bind({});
WithNonEditableSlippageDefault.args = {
    firstTokenImg: casperToken,
    secondTokenImg: bitcoinToken,
    platformGasFee: 0.1,
    slippageTolerance: 0.005,
    calculateMinimumTokenReceived: (() =>  200),
    firstSymbolToken: 'CSPR',
    firstTokenAmount: 1000,
    pairPath: ['ETH', 'CSPR', 'BTC'],
    secondSymbolToken: 'ETH',
    secondTokenAmount: 200,
    priceImpact: 1.5,
    priceImpactMessage: 'Low Price Impact',
    networkGasFee: 40,
    networkGasFeeSetter    : (value) => {console.log("new networkGasFee", value)},
    slippageSetter  : (value) => {console.log("new slippage", value)},
    // graphic
    onClickButton0: () => {console.log("onClickButton0")},
    onClickButton1: () => {console.log("onClickButton1")},
    graphicData: data,
    todayPrice: '1000',
    yesterdayPrice: '2000',
    xAxisName: 'name',
    chart0Name: 'eth',
    chart1Name: 'cspr',
    showChart1: true,
    showChart0: false,
    tabDefault: 2,
    editableSlippage: false,
    feeSymbol: 'cspr'
}