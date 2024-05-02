import {TimeZoneEnum} from "./enum/time-zone-enum";
import {TimeSpan} from "./interfaces/time-span";

export class DateTime {
    private dateTime: Date = new Date();
    private timeZone: TimeZoneEnum = TimeZoneEnum.UTC;

    private convertToTimezone(): Date {
        switch (this.timeZone) {
            case TimeZoneEnum.UTC:
                return this.dateTime;
            case TimeZoneEnum.EuropeAndorra:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeAndorra as string}));
            case TimeZoneEnum.AsiaDubai:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaDubai as string}));
            case TimeZoneEnum.AsiaKabul:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaKabul as string}));
            case TimeZoneEnum.EuropeTirane:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeTirane as string}));
            case TimeZoneEnum.AsiaYerevan:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaYerevan as string}));
            case TimeZoneEnum.AntarcticaCasey:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AntarcticaCasey as string}));
            case TimeZoneEnum.AntarcticaDavis:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AntarcticaDavis as string}));
            case TimeZoneEnum.AntarcticaDumontDUrville:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AntarcticaDumontDUrville as string}));
            case TimeZoneEnum.AntarcticaMawson:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AntarcticaMawson as string}));
            case TimeZoneEnum.AntarcticaPalmer:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AntarcticaPalmer as string}));
            case TimeZoneEnum.AntarcticaRothera:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AntarcticaRothera as string}));
            case TimeZoneEnum.AntarcticaSyowa:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AntarcticaSyowa as string}));
            case TimeZoneEnum.AntarcticaTroll:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AntarcticaTroll as string}));
            case TimeZoneEnum.AntarcticaVostok:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AntarcticaVostok as string}));
            case TimeZoneEnum.AmericaArgentinaBuenos_Aires:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaArgentinaBuenos_Aires as string}));
            case TimeZoneEnum.AmericaArgentinaCordoba:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaArgentinaCordoba as string}));
            case TimeZoneEnum.AmericaArgentinaSalta:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaArgentinaSalta as string}));
            case TimeZoneEnum.AmericaArgentinaJujuy:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaArgentinaJujuy as string}));
            case TimeZoneEnum.AmericaArgentinaTucuman:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaArgentinaTucuman as string}));
            case TimeZoneEnum.AmericaArgentinaCatamarca:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaArgentinaCatamarca as string}));
            case TimeZoneEnum.AmericaArgentinaLa_Rioja:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaArgentinaLa_Rioja as string}));
            case TimeZoneEnum.AmericaArgentinaSan_Juan:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaArgentinaSan_Juan as string}));
            case TimeZoneEnum.AmericaArgentinaMendoza:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaArgentinaMendoza as string}));
            case TimeZoneEnum.AmericaArgentinaSan_Luis:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaArgentinaSan_Luis as string}));
            case TimeZoneEnum.AmericaArgentinaRio_Gallegos:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaArgentinaRio_Gallegos as string}));
            case TimeZoneEnum.AmericaArgentinaUshuaia:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaArgentinaUshuaia as string}));
            case TimeZoneEnum.PacificPago_Pago:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificPago_Pago as string}));
            case TimeZoneEnum.EuropeVienna:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeVienna as string}));
            case TimeZoneEnum.AustraliaLord_Howe:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AustraliaLord_Howe as string}));
            case TimeZoneEnum.AntarcticaMacquarie:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AntarcticaMacquarie as string}));
            case TimeZoneEnum.AustraliaHobart:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AustraliaHobart as string}));
            case TimeZoneEnum.AustraliaCurrie:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AustraliaCurrie as string}));
            case TimeZoneEnum.AustraliaMelbourne:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AustraliaMelbourne as string}));
            case TimeZoneEnum.AustraliaSydney:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AustraliaSydney as string}));
            case TimeZoneEnum.AustraliaBroken_Hill:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AustraliaBroken_Hill as string}));
            case TimeZoneEnum.AustraliaBrisbane:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AustraliaBrisbane as string}));
            case TimeZoneEnum.AustraliaLindeman:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AustraliaLindeman as string}));
            case TimeZoneEnum.AustraliaAdelaide:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AustraliaAdelaide as string}));
            case TimeZoneEnum.AustraliaDarwin:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AustraliaDarwin as string}));
            case TimeZoneEnum.AustraliaPerth:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AustraliaPerth as string}));
            case TimeZoneEnum.AustraliaEucla:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AustraliaEucla as string}));
            case TimeZoneEnum.AsiaBaku:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaBaku as string}));
            case TimeZoneEnum.AmericaBarbados:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaBarbados as string}));
            case TimeZoneEnum.AsiaDhaka:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaDhaka as string}));
            case TimeZoneEnum.EuropeBrussels:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeBrussels as string}));
            case TimeZoneEnum.EuropeSofia:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeSofia as string}));
            case TimeZoneEnum.AtlanticBermuda:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AtlanticBermuda as string}));
            case TimeZoneEnum.AsiaBrunei:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaBrunei as string}));
            case TimeZoneEnum.AmericaLa_Paz:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaLa_Paz as string}));
            case TimeZoneEnum.AmericaNoronha:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaNoronha as string}));
            case TimeZoneEnum.AmericaBelem:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaBelem as string}));
            case TimeZoneEnum.AmericaFortaleza:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaFortaleza as string}));
            case TimeZoneEnum.AmericaRecife:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaRecife as string}));
            case TimeZoneEnum.AmericaAraguaina:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaAraguaina as string}));
            case TimeZoneEnum.AmericaMaceio:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaMaceio as string}));
            case TimeZoneEnum.AmericaBahia:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaBahia as string}));
            case TimeZoneEnum.AmericaSao_Paulo:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaSao_Paulo as string}));
            case TimeZoneEnum.AmericaCampo_Grande:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaCampo_Grande as string}));
            case TimeZoneEnum.AmericaCuiaba:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaCuiaba as string}));
            case TimeZoneEnum.AmericaSantarem:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaSantarem as string}));
            case TimeZoneEnum.AmericaPorto_Velho:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaPorto_Velho as string}));
            case TimeZoneEnum.AmericaBoa_Vista:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaBoa_Vista as string}));
            case TimeZoneEnum.AmericaManaus:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaManaus as string}));
            case TimeZoneEnum.AmericaEirunepe:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaEirunepe as string}));
            case TimeZoneEnum.AmericaRio_Branco:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaRio_Branco as string}));
            case TimeZoneEnum.AmericaNassau:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaNassau as string}));
            case TimeZoneEnum.AsiaThimphu:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaThimphu as string}));
            case TimeZoneEnum.EuropeMinsk:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeMinsk as string}));
            case TimeZoneEnum.AmericaBelize:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaBelize as string}));
            case TimeZoneEnum.AmericaSt_Johns:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaSt_Johns as string}));
            case TimeZoneEnum.AmericaHalifax:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaHalifax as string}));
            case TimeZoneEnum.AmericaGlace_Bay:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaGlace_Bay as string}));
            case TimeZoneEnum.AmericaMoncton:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaMoncton as string}));
            case TimeZoneEnum.AmericaGoose_Bay:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaGoose_Bay as string}));
            case TimeZoneEnum.AmericaBlancSablon:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaBlancSablon as string}));
            case TimeZoneEnum.AmericaToronto:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaToronto as string}));
            case TimeZoneEnum.AmericaNipigon:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaNipigon as string}));
            case TimeZoneEnum.AmericaThunder_Bay:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaThunder_Bay as string}));
            case TimeZoneEnum.AmericaIqaluit:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaIqaluit as string}));
            case TimeZoneEnum.AmericaPangnirtung:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaPangnirtung as string}));
            case TimeZoneEnum.AmericaAtikokan:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaAtikokan as string}));
            case TimeZoneEnum.AmericaWinnipeg:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaWinnipeg as string}));
            case TimeZoneEnum.AmericaRainy_River:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaRainy_River as string}));
            case TimeZoneEnum.AmericaResolute:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaResolute as string}));
            case TimeZoneEnum.AmericaRankin_Inlet:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaRankin_Inlet as string}));
            case TimeZoneEnum.AmericaRegina:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaRegina as string}));
            case TimeZoneEnum.AmericaSwift_Current:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaSwift_Current as string}));
            case TimeZoneEnum.AmericaEdmonton:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaEdmonton as string}));
            case TimeZoneEnum.AmericaCambridge_Bay:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaCambridge_Bay as string}));
            case TimeZoneEnum.AmericaYellowknife:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaYellowknife as string}));
            case TimeZoneEnum.AmericaInuvik:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaInuvik as string}));
            case TimeZoneEnum.AmericaCreston:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaCreston as string}));
            case TimeZoneEnum.AmericaDawson_Creek:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaDawson_Creek as string}));
            case TimeZoneEnum.AmericaFort_Nelson:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaFort_Nelson as string}));
            case TimeZoneEnum.AmericaVancouver:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaVancouver as string}));
            case TimeZoneEnum.AmericaWhitehorse:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaWhitehorse as string}));
            case TimeZoneEnum.AmericaDawson:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaDawson as string}));
            case TimeZoneEnum.IndianCocos:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.IndianCocos as string}));
            case TimeZoneEnum.EuropeZurich:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeZurich as string}));
            case TimeZoneEnum.AfricaAbidjan:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AfricaAbidjan as string}));
            case TimeZoneEnum.PacificRarotonga:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificRarotonga as string}));
            case TimeZoneEnum.AmericaSantiago:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaSantiago as string}));
            case TimeZoneEnum.AmericaPunta_Arenas:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaPunta_Arenas as string}));
            case TimeZoneEnum.PacificEaster:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificEaster as string}));
            case TimeZoneEnum.AsiaShanghai:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaShanghai as string}));
            case TimeZoneEnum.AsiaUrumqi:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaUrumqi as string}));
            case TimeZoneEnum.AmericaBogota:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaBogota as string}));
            case TimeZoneEnum.AmericaCosta_Rica:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaCosta_Rica as string}));
            case TimeZoneEnum.AmericaHavana:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaHavana as string}));
            case TimeZoneEnum.AtlanticCape_Verde:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AtlanticCape_Verde as string}));
            case TimeZoneEnum.AmericaCuracao:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaCuracao as string}));
            case TimeZoneEnum.IndianChristmas:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.IndianChristmas as string}));
            case TimeZoneEnum.AsiaNicosia:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaNicosia as string}));
            case TimeZoneEnum.AsiaFamagusta:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaFamagusta as string}));
            case TimeZoneEnum.EuropePrague:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropePrague as string}));
            case TimeZoneEnum.EuropeBerlin:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeBerlin as string}));
            case TimeZoneEnum.EuropeCopenhagen:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeCopenhagen as string}));
            case TimeZoneEnum.AmericaSanto_Domingo:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaSanto_Domingo as string}));
            case TimeZoneEnum.AfricaAlgiers:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AfricaAlgiers as string}));
            case TimeZoneEnum.AmericaGuayaquil:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaGuayaquil as string}));
            case TimeZoneEnum.PacificGalapagos:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificGalapagos as string}));
            case TimeZoneEnum.EuropeTallinn:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeTallinn as string}));
            case TimeZoneEnum.AfricaCairo:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AfricaCairo as string}));
            case TimeZoneEnum.AfricaEl_Aaiun:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AfricaEl_Aaiun as string}));
            case TimeZoneEnum.EuropeMadrid:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeMadrid as string}));
            case TimeZoneEnum.AfricaCeuta:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AfricaCeuta as string}));
            case TimeZoneEnum.AtlanticCanary:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AtlanticCanary as string}));
            case TimeZoneEnum.EuropeHelsinki:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeHelsinki as string}));
            case TimeZoneEnum.PacificFiji:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificFiji as string}));
            case TimeZoneEnum.AtlanticStanley:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AtlanticStanley as string}));
            case TimeZoneEnum.PacificChuuk:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificChuuk as string}));
            case TimeZoneEnum.PacificPohnpei:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificPohnpei as string}));
            case TimeZoneEnum.PacificKosrae:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificKosrae as string}));
            case TimeZoneEnum.AtlanticFaroe:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AtlanticFaroe as string}));
            case TimeZoneEnum.EuropeParis:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeParis as string}));
            case TimeZoneEnum.EuropeLondon:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeLondon as string}));
            case TimeZoneEnum.AsiaTbilisi:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaTbilisi as string}));
            case TimeZoneEnum.AmericaCayenne:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaCayenne as string}));
            case TimeZoneEnum.AfricaAccra:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AfricaAccra as string}));
            case TimeZoneEnum.EuropeGibraltar:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeGibraltar as string}));
            case TimeZoneEnum.AmericaGodthab:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaGodthab as string}));
            case TimeZoneEnum.AmericaDanmarkshavn:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaDanmarkshavn as string}));
            case TimeZoneEnum.AmericaScoresbysund:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaScoresbysund as string}));
            case TimeZoneEnum.AmericaThule:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaThule as string}));
            case TimeZoneEnum.EuropeAthens:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeAthens as string}));
            case TimeZoneEnum.AtlanticSouth_Georgia:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AtlanticSouth_Georgia as string}));
            case TimeZoneEnum.AmericaGuatemala:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaGuatemala as string}));
            case TimeZoneEnum.PacificGuam:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificGuam as string}));
            case TimeZoneEnum.AfricaBissau:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AfricaBissau as string}));
            case TimeZoneEnum.AmericaGuyana:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaGuyana as string}));
            case TimeZoneEnum.AsiaHong_Kong:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaHong_Kong as string}));
            case TimeZoneEnum.AmericaTegucigalpa:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaTegucigalpa as string}));
            case TimeZoneEnum.AmericaPortauPrince:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaPortauPrince as string}));
            case TimeZoneEnum.EuropeBudapest:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeBudapest as string}));
            case TimeZoneEnum.AsiaJakarta:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaJakarta as string}));
            case TimeZoneEnum.AsiaPontianak:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaPontianak as string}));
            case TimeZoneEnum.AsiaMakassar:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaMakassar as string}));
            case TimeZoneEnum.AsiaJayapura:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaJayapura as string}));
            case TimeZoneEnum.EuropeDublin:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeDublin as string}));
            case TimeZoneEnum.AsiaJerusalem:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaJerusalem as string}));
            case TimeZoneEnum.AsiaKolkata:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaKolkata as string}));
            case TimeZoneEnum.IndianChagos:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.IndianChagos as string}));
            case TimeZoneEnum.AsiaBaghdad:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaBaghdad as string}));
            case TimeZoneEnum.AsiaTehran:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaTehran as string}));
            case TimeZoneEnum.AtlanticReykjavik:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AtlanticReykjavik as string}));
            case TimeZoneEnum.EuropeRome:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeRome as string}));
            case TimeZoneEnum.AmericaJamaica:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaJamaica as string}));
            case TimeZoneEnum.AsiaAmman:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaAmman as string}));
            case TimeZoneEnum.AsiaTokyo:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaTokyo as string}));
            case TimeZoneEnum.AfricaNairobi:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AfricaNairobi as string}));
            case TimeZoneEnum.AsiaBishkek:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaBishkek as string}));
            case TimeZoneEnum.PacificTarawa:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificTarawa as string}));
            case TimeZoneEnum.PacificEnderbury:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificEnderbury as string}));
            case TimeZoneEnum.PacificKiritimati:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificKiritimati as string}));
            case TimeZoneEnum.AsiaPyongyang:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaPyongyang as string}));
            case TimeZoneEnum.AsiaSeoul:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaSeoul as string}));
            case TimeZoneEnum.AsiaAlmaty:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaAlmaty as string}));
            case TimeZoneEnum.AsiaQyzylorda:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaQyzylorda as string}));
            case TimeZoneEnum.AsiaQostanay:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaQostanay as string}));
            case TimeZoneEnum.AsiaAqtobe:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaAqtobe as string}));
            case TimeZoneEnum.AsiaAqtau:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaAqtau as string}));
            case TimeZoneEnum.AsiaAtyrau:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaAtyrau as string}));
            case TimeZoneEnum.AsiaOral:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaOral as string}));
            case TimeZoneEnum.AsiaBeirut:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaBeirut as string}));
            case TimeZoneEnum.AsiaColombo:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaColombo as string}));
            case TimeZoneEnum.AfricaMonrovia:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AfricaMonrovia as string}));
            case TimeZoneEnum.EuropeVilnius:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeVilnius as string}));
            case TimeZoneEnum.EuropeLuxembourg:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeLuxembourg as string}));
            case TimeZoneEnum.EuropeRiga:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeRiga as string}));
            case TimeZoneEnum.AfricaTripoli:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AfricaTripoli as string}));
            case TimeZoneEnum.AfricaCasablanca:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AfricaCasablanca as string}));
            case TimeZoneEnum.EuropeMonaco:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeMonaco as string}));
            case TimeZoneEnum.EuropeChisinau:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeChisinau as string}));
            case TimeZoneEnum.PacificMajuro:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificMajuro as string}));
            case TimeZoneEnum.PacificKwajalein:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificKwajalein as string}));
            case TimeZoneEnum.AsiaYangon:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaYangon as string}));
            case TimeZoneEnum.AsiaUlaanbaatar:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaUlaanbaatar as string}));
            case TimeZoneEnum.AsiaHovd:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaHovd as string}));
            case TimeZoneEnum.AsiaChoibalsan:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaChoibalsan as string}));
            case TimeZoneEnum.AsiaMacau:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaMacau as string}));
            case TimeZoneEnum.AmericaMartinique:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaMartinique as string}));
            case TimeZoneEnum.EuropeMalta:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeMalta as string}));
            case TimeZoneEnum.IndianMauritius:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.IndianMauritius as string}));
            case TimeZoneEnum.IndianMaldives:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.IndianMaldives as string}));
            case TimeZoneEnum.AmericaMexico_City:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaMexico_City as string}));
            case TimeZoneEnum.AmericaCancun:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaCancun as string}));
            case TimeZoneEnum.AmericaMerida:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaMerida as string}));
            case TimeZoneEnum.AmericaMonterrey:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaMonterrey as string}));
            case TimeZoneEnum.AmericaMatamoros:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaMatamoros as string}));
            case TimeZoneEnum.AmericaMazatlan:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaMazatlan as string}));
            case TimeZoneEnum.AmericaChihuahua:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaChihuahua as string}));
            case TimeZoneEnum.AmericaOjinaga:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaOjinaga as string}));
            case TimeZoneEnum.AmericaHermosillo:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaHermosillo as string}));
            case TimeZoneEnum.AmericaTijuana:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaTijuana as string}));
            case TimeZoneEnum.AmericaBahia_Banderas:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaBahia_Banderas as string}));
            case TimeZoneEnum.AsiaKuala_Lumpur:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaKuala_Lumpur as string}));
            case TimeZoneEnum.AsiaKuching:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaKuching as string}));
            case TimeZoneEnum.AfricaMaputo:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AfricaMaputo as string}));
            case TimeZoneEnum.AfricaWindhoek:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AfricaWindhoek as string}));
            case TimeZoneEnum.PacificNoumea:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificNoumea as string}));
            case TimeZoneEnum.PacificNorfolk:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificNorfolk as string}));
            case TimeZoneEnum.AfricaLagos:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AfricaLagos as string}));
            case TimeZoneEnum.AmericaManagua:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaManagua as string}));
            case TimeZoneEnum.EuropeAmsterdam:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeAmsterdam as string}));
            case TimeZoneEnum.EuropeOslo:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeOslo as string}));
            case TimeZoneEnum.AsiaKathmandu:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaKathmandu as string}));
            case TimeZoneEnum.PacificNauru:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificNauru as string}));
            case TimeZoneEnum.PacificNiue:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificNiue as string}));
            case TimeZoneEnum.PacificAuckland:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificAuckland as string}));
            case TimeZoneEnum.PacificChatham:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificChatham as string}));
            case TimeZoneEnum.AmericaPanama:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaPanama as string}));
            case TimeZoneEnum.AmericaLima:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaLima as string}));
            case TimeZoneEnum.PacificTahiti:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificTahiti as string}));
            case TimeZoneEnum.PacificMarquesas:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificMarquesas as string}));
            case TimeZoneEnum.PacificGambier:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificGambier as string}));
            case TimeZoneEnum.PacificPort_Moresby:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificPort_Moresby as string}));
            case TimeZoneEnum.PacificBougainville:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificBougainville as string}));
            case TimeZoneEnum.AsiaManila:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaManila as string}));
            case TimeZoneEnum.AsiaKarachi:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaKarachi as string}));
            case TimeZoneEnum.EuropeWarsaw:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeWarsaw as string}));
            case TimeZoneEnum.AmericaMiquelon:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaMiquelon as string}));
            case TimeZoneEnum.PacificPitcairn:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificPitcairn as string}));
            case TimeZoneEnum.AmericaPuerto_Rico:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaPuerto_Rico as string}));
            case TimeZoneEnum.AsiaGaza:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaGaza as string}));
            case TimeZoneEnum.AsiaHebron:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaHebron as string}));
            case TimeZoneEnum.EuropeLisbon:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeLisbon as string}));
            case TimeZoneEnum.AtlanticMadeira:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AtlanticMadeira as string}));
            case TimeZoneEnum.AtlanticAzores:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AtlanticAzores as string}));
            case TimeZoneEnum.PacificPalau:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificPalau as string}));
            case TimeZoneEnum.AmericaAsuncion:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaAsuncion as string}));
            case TimeZoneEnum.AsiaQatar:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaQatar as string}));
            case TimeZoneEnum.IndianReunion:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.IndianReunion as string}));
            case TimeZoneEnum.EuropeBucharest:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeBucharest as string}));
            case TimeZoneEnum.EuropeBelgrade:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeBelgrade as string}));
            case TimeZoneEnum.EuropeKaliningrad:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeKaliningrad as string}));
            case TimeZoneEnum.EuropeMoscow:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeMoscow as string}));
            case TimeZoneEnum.EuropeSimferopol:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeSimferopol as string}));
            case TimeZoneEnum.EuropeKirov:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeKirov as string}));
            case TimeZoneEnum.EuropeAstrakhan:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeAstrakhan as string}));
            case TimeZoneEnum.EuropeVolgograd:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeVolgograd as string}));
            case TimeZoneEnum.EuropeSaratov:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeSaratov as string}));
            case TimeZoneEnum.EuropeUlyanovsk:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeUlyanovsk as string}));
            case TimeZoneEnum.EuropeSamara:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeSamara as string}));
            case TimeZoneEnum.AsiaYekaterinburg:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaYekaterinburg as string}));
            case TimeZoneEnum.AsiaOmsk:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaOmsk as string}));
            case TimeZoneEnum.AsiaNovosibirsk:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaNovosibirsk as string}));
            case TimeZoneEnum.AsiaBarnaul:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaBarnaul as string}));
            case TimeZoneEnum.AsiaTomsk:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaTomsk as string}));
            case TimeZoneEnum.AsiaNovokuznetsk:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaNovokuznetsk as string}));
            case TimeZoneEnum.AsiaKrasnoyarsk:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaKrasnoyarsk as string}));
            case TimeZoneEnum.AsiaIrkutsk:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaIrkutsk as string}));
            case TimeZoneEnum.AsiaChita:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaChita as string}));
            case TimeZoneEnum.AsiaYakutsk:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaYakutsk as string}));
            case TimeZoneEnum.AsiaKhandyga:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaKhandyga as string}));
            case TimeZoneEnum.AsiaVladivostok:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaVladivostok as string}));
            case TimeZoneEnum.AsiaUstNera:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaUstNera as string}));
            case TimeZoneEnum.AsiaMagadan:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaMagadan as string}));
            case TimeZoneEnum.AsiaSakhalin:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaSakhalin as string}));
            case TimeZoneEnum.AsiaSrednekolymsk:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaSrednekolymsk as string}));
            case TimeZoneEnum.AsiaKamchatka:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaKamchatka as string}));
            case TimeZoneEnum.AsiaAnadyr:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaAnadyr as string}));
            case TimeZoneEnum.AsiaRiyadh:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaRiyadh as string}));
            case TimeZoneEnum.PacificGuadalcanal:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificGuadalcanal as string}));
            case TimeZoneEnum.IndianMahe:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.IndianMahe as string}));
            case TimeZoneEnum.AfricaKhartoum:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AfricaKhartoum as string}));
            case TimeZoneEnum.EuropeStockholm:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeStockholm as string}));
            case TimeZoneEnum.AsiaSingapore:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaSingapore as string}));
            case TimeZoneEnum.AmericaParamaribo:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaParamaribo as string}));
            case TimeZoneEnum.AfricaJuba:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AfricaJuba as string}));
            case TimeZoneEnum.AfricaSao_Tome:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AfricaSao_Tome as string}));
            case TimeZoneEnum.AmericaEl_Salvador:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaEl_Salvador as string}));
            case TimeZoneEnum.AsiaDamascus:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaDamascus as string}));
            case TimeZoneEnum.AmericaGrand_Turk:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaGrand_Turk as string}));
            case TimeZoneEnum.AfricaNdjamena:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AfricaNdjamena as string}));
            case TimeZoneEnum.IndianKerguelen:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.IndianKerguelen as string}));
            case TimeZoneEnum.AsiaBangkok:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaBangkok as string}));
            case TimeZoneEnum.AsiaDushanbe:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaDushanbe as string}));
            case TimeZoneEnum.PacificFakaofo:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificFakaofo as string}));
            case TimeZoneEnum.AsiaDili:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaDili as string}));
            case TimeZoneEnum.AsiaAshgabat:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaAshgabat as string}));
            case TimeZoneEnum.AfricaTunis:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AfricaTunis as string}));
            case TimeZoneEnum.PacificTongatapu:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificTongatapu as string}));
            case TimeZoneEnum.EuropeIstanbul:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeIstanbul as string}));
            case TimeZoneEnum.AmericaPort_of_Spain:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaPort_of_Spain as string}));
            case TimeZoneEnum.PacificFunafuti:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificFunafuti as string}));
            case TimeZoneEnum.AsiaTaipei:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaTaipei as string}));
            case TimeZoneEnum.EuropeKiev:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeKiev as string}));
            case TimeZoneEnum.EuropeUzhgorod:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeUzhgorod as string}));
            case TimeZoneEnum.EuropeZaporozhye:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.EuropeZaporozhye as string}));
            case TimeZoneEnum.PacificWake:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificWake as string}));
            case TimeZoneEnum.AmericaNew_York:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaNew_York as string}));
            case TimeZoneEnum.AmericaDetroit:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaDetroit as string}));
            case TimeZoneEnum.AmericaKentuckyLouisville:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaKentuckyLouisville as string}));
            case TimeZoneEnum.AmericaKentuckyMonticello:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaKentuckyMonticello as string}));
            case TimeZoneEnum.AmericaIndianaIndianapolis:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaIndianaIndianapolis as string}));
            case TimeZoneEnum.AmericaIndianaVincennes:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaIndianaVincennes as string}));
            case TimeZoneEnum.AmericaIndianaWinamac:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaIndianaWinamac as string}));
            case TimeZoneEnum.AmericaIndianaMarengo:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaIndianaMarengo as string}));
            case TimeZoneEnum.AmericaIndianaPetersburg:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaIndianaPetersburg as string}));
            case TimeZoneEnum.AmericaIndianaVevay:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaIndianaVevay as string}));
            case TimeZoneEnum.AmericaChicago:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaChicago as string}));
            case TimeZoneEnum.AmericaIndianaTell_City:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaIndianaTell_City as string}));
            case TimeZoneEnum.AmericaIndianaKnox:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaIndianaKnox as string}));
            case TimeZoneEnum.AmericaMenominee:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaMenominee as string}));
            case TimeZoneEnum.AmericaNorthDakotaCenter:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaNorthDakotaCenter as string}));
            case TimeZoneEnum.AmericaNorthDakotaNew_Salem:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaNorthDakotaNew_Salem as string}));
            case TimeZoneEnum.AmericaNorthDakotaBeulah:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaNorthDakotaBeulah as string}));
            case TimeZoneEnum.AmericaDenver:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaDenver as string}));
            case TimeZoneEnum.AmericaBoise:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaBoise as string}));
            case TimeZoneEnum.AmericaPhoenix:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaPhoenix as string}));
            case TimeZoneEnum.AmericaLosAngeles:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaLosAngeles as string}));
            case TimeZoneEnum.AmericaAnchorage:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaAnchorage as string}));
            case TimeZoneEnum.AmericaJuneau:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaJuneau as string}));
            case TimeZoneEnum.AmericaSitka:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaSitka as string}));
            case TimeZoneEnum.AmericaMetlakatla:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaMetlakatla as string}));
            case TimeZoneEnum.AmericaYakutat:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaYakutat as string}));
            case TimeZoneEnum.AmericaNome:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaNome as string}));
            case TimeZoneEnum.AmericaAdak:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaAdak as string}));
            case TimeZoneEnum.PacificHonolulu:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificHonolulu as string}));
            case TimeZoneEnum.AmericaMontevideo:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaMontevideo as string}));
            case TimeZoneEnum.AsiaSamarkand:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaSamarkand as string}));
            case TimeZoneEnum.AsiaTashkent:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaTashkent as string}));
            case TimeZoneEnum.AmericaCaracas:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AmericaCaracas as string}));
            case TimeZoneEnum.AsiaHo_Chi_Minh:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AsiaHo_Chi_Minh as string}));
            case TimeZoneEnum.PacificEfate:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificEfate as string}));
            case TimeZoneEnum.PacificWallis:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificWallis as string}));
            case TimeZoneEnum.PacificApia:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.PacificApia as string}));
            case TimeZoneEnum.AfricaJohannesburg:
                return new Date(this.dateTime.toLocaleString("en-US", {timeZone: TimeZoneEnum.AfricaJohannesburg as string}));
            default:
                throw new Error("The timezone is not supported.");
        }
    }

    constructor(timeZone: TimeZoneEnum = TimeZoneEnum.UTC) {
        this.dateTime = new Date();
        this.timeZone = timeZone;
    }

    /**
     * Create a new instance of DateTime with current time and selected timezone;
     * @param timeZone Time zone for the instance
     */

    public static now(timeZone: TimeZoneEnum = TimeZoneEnum.UTC): DateTime {
        return new DateTime(timeZone)
    }

    public changeTimeZone(timeZone: TimeZoneEnum) {
        this.timeZone = timeZone;
    }

    public setDateTime(year: number, month: number, day: number, hour: number, minute: number, second: number): void {
        this.dateTime = new Date(year, month - 1, day, hour, minute, second);
    }

    public addSecond(): void {
        this.dateTime.setSeconds(this.dateTime.getSeconds() + 1);
    }

    public addSeconds(seconds: number) {
        this.dateTime.setSeconds(this.dateTime.getSeconds() + seconds);
    }

    public addMinute(): void {
        this.dateTime.setMinutes(this.dateTime.getMinutes() + 1);
    }

    public addMinutes(minutes: number) {
        this.dateTime.setMinutes(this.dateTime.getMinutes() + minutes);
    }

    public addHour(): void {
        this.dateTime.setHours(this.dateTime.getHours() + 1);
    }

    public addHours(minutes: number) {
        this.dateTime.setHours(this.dateTime.getHours() + minutes);
    }


    public addDay(): void {
        this.dateTime.setDate(this.dateTime.getDate() + 1);
    }

    public addDays(days: number) {
        this.dateTime.setDate(this.dateTime.getDate() + days);
    }

    public addMonth(): void {
        this.dateTime.setMonth(this.dateTime.getMonth() + 1);
    }

    public addMonths(months: number) {
        this.dateTime.setMonth(this.dateTime.getMonth() + months);
    }

    public addYear(): void {
        this.dateTime.setMonth(this.dateTime.getMonth() + 12);
    }

    public addYears(years: number) {
        this.dateTime.setMonth(this.dateTime.getMonth() + (12 * years));
    }

    public getTimeZone(): TimeZoneEnum {
        return this.timeZone;
    }

    public getSecond(): number {
        return this.convertToTimezone().getSeconds();
    }

    public getMinute(): number {
        return this.convertToTimezone().getMinutes();
    }

    public getHour(): number {
        return this.convertToTimezone().getHours();
    }

    public getDay(): number {
        return this.convertToTimezone().getDay();
    }

    public getDayName(): string {
        switch (this.dateTime.toString().split(" ")[0]) {
            case "Mon":
                return "Monday"
            case "Tuesday":
                return "Tue";
            case "Wed":
                return "Wednesday";
            case "Thu":
                return "Thursday";
            case "Fri":
                return "Friday";
            case "Sat":
                return "Saturday";
            case "Sunday":
                return "Sunday";
            default:
                throw new Error()
        }
    }

    public getMonth(): number {
        return this.convertToTimezone().getMonth() + 1;
    }

    public getMonthName(): string {
        switch (this.convertToTimezone().getMonth()) {
            case 0:
                return "January";
            case 1:
                return "February";
            case 2:
                return "March";
            case 3:
                return "April";
            case 4:
                return "May";
            case 5:
                return "June";
            case 6:
                return "July";
            case 7:
                return "August";
            case 8:
                return "September";
            case 9:
                return "October";
            case 10:
                return "November"
            case 11:
                return "December";
            default:
                throw new Error("Oncember");

        }
    }

    public getYear(): number {
        return this.convertToTimezone().getFullYear();
    }

    public getTotalMilliseconds(): number {
        return this.convertToTimezone().getTime();
    }

    public getTotalSeconds(): number {
        return parseFloat(Number(this.convertToTimezone().getTime() / 1000).toFixed(2));
    }

    public getTotalMinutes(): number {
        return parseFloat(Number(this.convertToTimezone().getTime() / (1000 * 60)).toFixed(2));
    }

    public getTotalHours(): number {
        return parseFloat(Number(this.convertToTimezone().getTime() / (1000 * 3600)).toFixed(2));
    }

    public getTotalDays(): number {
        return parseFloat(Number(this.convertToTimezone().getTime() / ((1000 * 3600) * 24)).toFixed(2));
    }

    public getTotalMonths(): number {
        return this.convertToTimezone().getUTCMonth()
    }

    public getTotalYears(): number {
        return this.convertToTimezone().getUTCFullYear()
    }

    public diffInMilliseconds(dateTime: DateTime): number {
        return this.getTotalMilliseconds() - dateTime.getTotalMilliseconds();
    }

    public diffInSeconds(dateTime: DateTime): number {
        return this.getTotalSeconds() - dateTime.getTotalSeconds();
    }

    public diffInMinutes(dateTime: DateTime): number {
        return this.getTotalMinutes() - dateTime.getTotalMinutes();
    }

    public diffInHours(dateTime: DateTime): number {
        return this.getTotalHours() - dateTime.getTotalHours();
    }

    public diffInDays(dateTime: DateTime): number {
        return this.getTotalDays() - dateTime.getTotalDays();
    }

    public diffInMonths(dateTime: DateTime): number {
        return this.getTotalMonths() - dateTime.getTotalMonths();
    }

    public diffInYears(dateTime: DateTime): number {
        return this.getYear() - dateTime.getYear();
    }


    public diffInTime(dateTime: DateTime): TimeSpan {
        let total = this.getTotalMilliseconds() - dateTime.getTotalMilliseconds()
        const timeSpan: TimeSpan = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
        }

        while (total > 0) {
            if (total >= ((3600 * 1000) * 24)) {
                timeSpan.days += 1;
                total -= ((3600 * 1000) * 24);
            } else if (total >= (3600 * 1000)) {
                timeSpan.hours += 1;
                total -= (3600 * 1000);
            } else if (total >= (60 * 1000)) {
                timeSpan.minutes += 1;
                total -= (60 * 1000);
            } else if (total >= (1000)) {
                timeSpan.seconds += 1;
                total -= (1000);
            } else if (total <= 1000) {
                timeSpan.milliseconds = total;
                total = 0;
            }
        }

        return timeSpan;
    }

    public toString(): string {
        return this.convertToTimezone().toISOString()
    }


}