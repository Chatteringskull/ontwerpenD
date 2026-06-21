# Biomimicry-toepassing voor PNEUTOY

📄 Onderdeel van [[../index|Home]] · Opdracht Duurzaam Ontwikkelen (DZO) bij [[OWD_DZO_opdracht_P3|Verweving DZO & OWD – P3]]

> Dit onderdeel werkt de vier stappen van de Biomimicry DesignLens uit voor PNEUTOY: het pneumatische kleurleerspeelgoed voor kinderen van 2-4 jaar. De invulling is gebaseerd op informatie uit [[../Analyse/pve|Programma van Eisen]], [[../Analyse/interview|Interview – Kinderopvang]], [[../Testen/testplan|Testplan]] en [[../systeem/pneumatisch_logicsysteem|Pneumatisch LogicSysteem]].


---

## Doel

- Een concept ontwikkelen voor het pneumatische AND-gate-mechanisme van PNEUTOY op basis van natuurinspiratie.
- De gevonden natuurstrategieën combineren met de technische eisen uit het [[../Analyse/pve|PvE]] en het [[../Testen/testplan|testplan]].
- Het concept onderbouwen met minimaal drie Life's Principles, gericht op duurzaamheid en circulariteit.

---

## Stap 1: functies bepalen (Scoping)

Vanuit de probleemstelling en het PvE zijn vier functies geselecteerd om in de natuur te zoeken. Elke functie is gekoppeld aan een onopgelost probleem in het project.

| #   | Ontwerpuitdaging (bron)                                                                                                                                                                         | Functie                                                             | Taxonomie-groep                                            |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| 1   | De AND-gate moet pas reageren als twee knoppen gelijktijdig worden ingedrukt, niet bij één knop ([[../Analyse/pve\|pve]] F3)                                                                    | Twee onafhankelijke signalen combineren tot één uitvoer             | **Process information**: process signals                    |
| 2   | De maximale luchtdruk moet zo begrensd zijn dat een onverwachte drukontlading geen letsel veroorzaakt ([[../Analyse/pve\|pve]] V6)                                                              | Overdruk passief en veilig afvoeren                                 | **Protect from physical harm**: regulate physical processes |
| 3   | Omdat de toevoerdruk ook als signaal dient, kunnen de knoppen te zwaar worden voor een kind van 2 jaar ([[../systeem/pneumatisch_logicsysteem\|Pneumatisch LogicSysteem]]; pve M1: max. 5 N)    | Een kleine handkracht omzetten in voldoende mechanische output      | **Move or stay put**: move (force amplification)            |
| 4   | De huidige AND-gate met 6 bouten lekt als niet alles perfect is aangedraaid en moet 10.000 cycli meegaan zonder functieverlies ([[../Testen/testplan\|testplan]] T1; pve D1)                    | Een verbinding die heel vaak kan bewegen zonder slijtage of lekkage | **Protect from physical harm**: prevent structural failure  |

---

## Stap 2: natuurstrategieën vinden (Discover, AskNature.org)

Voor elke functie zijn op [asknature.org](https://asknature.org) onder "Biological Strategies" minimaal twee strategieën vergeleken.

### Functie 1: twee signalen combineren (AND-logica)

**Bronstrategie:** _Leaves Rapidly Snap Shut_, Venusvliegenvanger (asknature.org/strategy/leaves-rapidly-snap-shut)

| Onderdeel            | Inhoud                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Mechanism**        | De Venusvliegenvanger heeft twee gevoelige triggerharen per blad. Eén aanraking laadt één elektrisch actiepotentiaal, pas wanneer een tweede haar binnen 15-20 seconden ook wordt aangeraakt ontstaat er een tweede actiepotentiaal en klapt de val binnen 100 ms dicht. De plant "telt" dus tot twee signalen binnen een tijdsvenster, als bescherming tegen vals alarm. |
| **Function**         | Onderscheid maken tussen toeval en een echte, bevestigde gebeurtenis door twee onafhankelijke signalen te combineren.                                                                                                                                                                                                                                                   |
| **Strategy**         | Twee aparte sensoren laden elk een deelsignaal, pas bij optelling binnen een tijdsvenster wordt de drempel gehaald en volgt de actie.                                                                                                                                                                                                                                   |
| **Design principle** | Een AND-functie hoeft niet als één starre mechanische klep te worden gebouwd die beide drukken tegelijk fysiek combineert. Hij kan ook werken als twee onafhankelijke, lichte deelsignalen die elk een klein beetje druk opbouwen in eenzelfde kamer, waarbij pas bij de optelling van béide de uitvoerklep opent.                                                      |

_Tweede vergeleken strategie: coïncidentiedetectie in neuronen (twee zenuwsignalen die alleen samen een actiepotentiaal veroorzaken). Werkt op hetzelfde principe maar is elektrisch, niet pneumatisch._

---

### Functie 2: veilige drukbegrenzing

**Bronstrategie:** _How Guard Cells Function_, sluitcellen/stomata van planten (asknature.org/strategy/guard-cells-regulate-gas-and-moisture-exchange)

| Onderdeel            | Inhoud                                                                                                                                                                                                                                                                                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Mechanism**        | Sluitcellen rond de huidmondjes (stomata) van een plant regelen passief, op basis van celdruk (turgordruk), hoe ver de opening is. Bouwt de druk binnen de cel te veel op, dan vervormen de sluitcellen elastisch en gaat de opening verder open, waardoor druk of gas direct kan ontsnappen zonder sturing van buitenaf.                   |
| **Function**         | Overdruk automatisch en geleidelijk afvoeren zodra een drempelwaarde wordt overschreden.                                                                                                                                                                                                                                                   |
| **Strategy**         | Een elastisch, vervormbaar membraan reageert direct op de eigen interne druk en opent zichzelf evenredig met de overdruk.                                                                                                                                                                                                                  |
| **Design principle** | Een passieve overdrukklep met een elastisch (siliconen) membraan die geleidelijk meegeeft zodra de druk een veilige grens overschrijdt, in plaats van een starre mechanische ontlastklep die pas bij een vaste drempel opent. Dit voorkomt het scenario uit pve V6: een onverwachte, plotselinge drukontlading die letsel kan veroorzaken. |

---

### Functie 3: kleine handkracht omzetten in voldoende mechanische output

**Bronstrategie:** _Hind Legs Amplify Power_, sprinkhaan-catapultmechanisme (asknature.org/strategy/hind-legs-amplify-power)

**Video:** Steve Mould legt dit principe goed uit in _We should use this amazing mechanism that's inside a grasshopper leg_, te bekijken via https://youtu.be/xUUW6SYl_ak (aanrader).

| Onderdeel            | Inhoud                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Mechanism**        | Mensen kunnen niet zomaar een grote kracht in een korte tijd leveren zonder hulpmiddel, denk aan een handkatapult: het elastiek slaat kracht op om die later in een korte tijd weer af te geven. Een sprinkhaan doet iets vergelijkbaars en kan daardoor niet snel genoeg springen op spierkracht alleen. De buigspier spant de poot langzaam vast in een vergrendelde stand, waarbij energie elastisch wordt opgeslagen, terwijl de strekspier al aanspant maar wordt tegengehouden. Eén klein zenuwsignaal laat de buigspier los, als het lossen van een latch, waarna de opgeslagen energie in één keer vrijkomt en de poot wegschiet. |
| **Function**         | Een grote, snelle mechanische output leveren op basis van een heel klein triggersignaal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Strategy**         | Energie wordt vooraf en langzaam opgebouwd in een elastisch element, een minimale triggerkracht ontgrendelt enkel de vergrendeling, niet de hele beweging zelf.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Design principle** | In plaats van dat het kind met zijn vinger de volledige luchtdruk van het systeem moet overwinnen, waardoor de knop zwaar aanvoelt, drukt het kind alleen een lichte vergrendeling (latch) los die een voorgespannen veer vrijgeeft. De veer, niet de vingerkracht van het kind, levert de uiteindelijke klepbeweging. Dit lost het probleem op dat in [[../systeem/pneumatisch_logicsysteem\|Pneumatisch LogicSysteem]] werd gesignaleerd: "de knoppen zullen erg zwaar zijn om in te drukken".                                                                                                                                                                                                                                          |

---

### Functie 4: duizenden bewegingscycli zonder slijtage of lekkage

**Bronstrategie:** _Wings Fold Multiple Times Without Wear_, kevervleugelscharnieren met resiline (asknature.org/strategy/wings-fold-multiple-times-without-wear)

| Onderdeel            | Inhoud                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Mechanism**        | Keversvleugels vouwen duizenden keren in en uit zonder slijtage doordat de scharnierpunten zijn opgebouwd uit resiline: een elastisch eiwit met lage stijfheid, hoge rekbaarheid en een lange vermoeiingslevensduur.                                                                                                                                                                                 |
| **Function**         | Een verbinding die zeer vaak kan bewegen (duizenden tot miljoenen cycli) zonder breuk, lekkage of slijtage en zonder extra onderdelen zoals bouten of siliconenlijm.                                                                                                                                                                                                                              |
| **Strategy**         | Eén elastisch materiaal vervangt het traditionele scharnier-plus-afdichting, vervorming gebeurt verspreid over het materiaal in plaats van geconcentreerd op een slijtpunt.                                                                                                                                                                                                                        |
| **Design principle** | Vervang de huidige constructie van zes bouten plus losse o-ring (die volgens het [[../Testen/testplan\|testplan]] T1 niet luchtdicht te krijgen is zonder dat alle bouten perfect zijn aangedraaid) door een monolithisch "leefscharnier" (living hinge) van flexibel, luchtdicht materiaal, bijvoorbeeld TPU of siliconenrubber, dat de afdichtfunctie en de scharnierfunctie in één onderdeel combineert. |

---

## Stap 3: concept creëren (Creating)

### Bio-AND-gate v2: van 6 bouten naar één elastisch ventiel

De vier design principles worden hier samengevoegd tot één concept dat de bestaande, niet-werkende AND-gate vervangt:

1. **Behuizing en scharnier (functie 4, kever):** de klepbehuizing en het scharnier van de knop worden als één geprint, flexibel onderdeel ontworpen (living hinge), zodat er geen losse o-ring en geen zes bouten meer nodig zijn die perfect moeten worden aangedraaid. Dit is direct getest haalbaar: [[../Testen/testplan|testplan]] T2 toont al dat luchtdicht FDM-printen mogelijk is met aangepaste flow- en perimeterinstellingen.
2. **Triggermechanisme per knop (functie 3, sprinkhaan):** onder elke kleurknop zit een lichte, voorgespannen veer die wordt vastgehouden door een kleine vergrendeling. Het kind hoeft alleen de vergrendeling te ontgrendelen (kracht ruim onder de 5 N-eis, pve M1), de veer zelf duwt de pneumatische klep open.
3. **Combineren van twee knoppen (functie 1, Venusvliegenvanger):** beide knoppen voeden, via hun eigen lichte klep, een gedeelde kleine drukkamer. Pas wanneer beide klepjes tegelijk (binnen een kort tijdvenster) open staan, bereikt de kamer voldoende druk om de uitvoerknop (de mengkleur) omhoog te duwen. Eén knop alleen geeft nooit genoeg druk. Functioneel is dat hetzelfde principe als de twee triggerharen van de Venusvliegenvanger, maar dan met luchtdruk in plaats van actiepotentialen.
4. **Veiligheid (functie 2, stomata):** in de drukkamer zit een dun, elastisch membraan dat bij overschrijding van de veilige druk geleidelijk meegeeft en lucht laat ontsnappen, in plaats van een klep die pas bij een vaste grenswaarde plotseling "knalt". Dit voldoet aan pve V6.

Het resultaat: minder onderdelen (geen 6 losse bouten en een aparte o-ring), een merkbaar lagere bedieningskracht voor het kind en een geleidelijke in plaats van abrupte drukontlasting. Ook de afdichting sluit qua materiaalprincipe (continu elastisch, geen slijtpunt) aan bij de eis van 10.000 cycli.

> Voor de Harrisprofiel-toetsing: dit concept kan als nieuw idee ("Bio-AND-gate / resiline-latch") worden toegevoegd aan de tabel in [[../Ontwerp/ideegeneratie|Ideegeneratie]], naast de bestaande pneumatiek-ideeën (Fep doos, Ball slider). Op de criteria _bedieningskracht haalbaar_, _veiligheid (NVWA)_ en _productiebaarheid_ zou dit concept naar verwachting beter scoren dan de huidige Fep-doos, juist omdat het de twee problemen oplost die in het testplan zijn gevonden.

---

## Stap 4: evaluatie met Life's Principles (Evaluating)

Vier Life's Principles (Biomimicry 3.8) zijn gekoppeld aan concrete aspecten van de probleemstelling en het PvE.

### 1. Fit form to function (Be Resource Efficient)

Het huidige AND-gate-ontwerp gebruikt zes bouten en een losse o-ring voor een functie die in de natuur (keverscharnier) met één elastisch onderdeel wordt vervuld. Door behuizing, scharnier en afdichting samen te voegen tot één geprint onderdeel, sluit de vorm precies aan op de functie: minder materiaal, minder assemblagestappen, minder kans op het lekprobleem uit [[../Testen/testplan|testplan]] T1. Dit raakt direct pve D1 (10.000 cycli) en D4 (vervangbare slijtdelen zonder gereedschap). Met minder losse onderdelen is er ook minder dat kan verslijten of los kan raken.

### 2. Build selectively with a small subset of elements (Use Life-Friendly Chemistry)

De natuur bouwt complexe, functionele structuren met een beperkt aantal bouwstenen, bijvoorbeeld resiline, één eiwit, in plaats van tientallen verschillende materialen. Voor PNEUTOY betekent dit: de behuizing, knoppen en het living-hinge-scharnier zoveel mogelijk uit één mono-materiaal opbouwen (bijvoorbeeld uitsluitend PP, of uitsluitend TPU voor de flexibele delen), in plaats van metaal, rubber en meerdere kunststoffen te combineren zoals bij sommige eerdere pneumatiek-ideeën in [[../Ontwerp/ideegeneratie|Ideegeneratie]] (Fep doos: "metaal of plastic en rubber sheet"). Eén of twee hoofdmaterialen zijn makkelijker te recyclen en sluiten beter aan op pve D2 (EN 71-3, niet-giftig) en op de wens uit pve U1 om het product modulair op te bouwen.

### 3. Embody resilience through redundancy (Adapt to Changing Conditions)

Levende systemen bouwen vaak een tweede, onafhankelijke vangnet in voor het geval de eerste beveiliging faalt. Het stoma-geïnspireerde elastische overdrukmembraan (functie 2) is in dit concept een redundante veiligheidslaag bovenop de mechanische drukbegrenzing die toch al in het systeem zit: zelfs als de primaire klep onverwacht vastloopt of een onderdeel net niet perfect is aangedraaid, blijft de drukontlasting via het membraan werken. Dat is direct toegespitst op pve V6, waar "een onverwachte drukontlading geen letsel mag veroorzaken". Met één enkel beveiligingspunt is dat lastiger te garanderen dan met twee onafhankelijke mechanismen.

### 4. Use low energy/material processes (Be Resource Efficient)

De sprinkhaan gebruikt geen continue spierkracht om te springen, hij laadt energie langzaam op en geeft die in één keer vrij. Vertaald naar PNEUTOY: het systeem heeft geen externe energiebron nodig (blijft dus volledig pneumatisch zoals pve F4 vereist) en vraagt van het kind alleen de korte triggerkracht om een vergrendeling te ontgrendelen, niet de volledige luchtdruk om de klep te bewegen. Dat is energetisch en ergonomisch efficiënter dan het huidige ontwerp, waarin de toevoerdruk zelf als signaaldruk dient en de knop daardoor zwaarder wordt dan nodig.

---

## Conclusie en vervolgstappen

De vier AskNature-strategieën (Venusvliegenvanger, stomata, sprinkhaan-catapult, kever-resiline) zijn niet zomaar gekozen, maar elk gekoppeld aan een probleem dat al in het project speelt: een AND-gate die niet luchtdicht te bouwen is, knoppen die te zwaar dreigen te worden en een drukontlasting die nu abrupt is in plaats van geleidelijk. Het concept "Bio-AND-gate v2" voegt deze vier principes samen tot één mechanisme.

Een eerlijke kanttekening daarbij: een deel van dit concept is op dit moment waarschijnlijk te ambitieus om binnen het project ook echt te bouwen. Een voorgespannen veer met een vergrendeling die bij minder dan 5 N loslaat, is een nauwkeurig mechaniekje, en hetzelfde geldt voor een drukkamer die precies op twee gelijktijdige signalen schakelt. Dat soort onderdelen vraagt meerdere ontwerprondes, veel testen en waarschijnlijk een precisie die met de huidige middelen (FDM-printen, handmatige assemblage) lastig te halen is binnen de tijd die er nog is. Het living-hinge-scharnier (functie 4) is het meest realistisch om op korte termijn uit te proberen, omdat dat probleem dankzij T2 al deels is opgelost. De latch en de drukkamer zijn voorlopig vooral een richting voor een volgende iteratie, niet iets om deze projectfase al volledig te realiseren.

Vervolgstappen:

- Eerst het living-hinge-scharnier (functie 4) testen, dit lijkt met de huidige printer al haalbaar. Test T1 herhalen om het lekverlies te vergelijken met de huidige 6-bouten-versie.
- De triggerkracht van het sprinkhaan-geïnspireerde latch-mechanisme grof inschatten met een eenvoudige veer, zodat duidelijk wordt of verdere uitwerking de moeite waard is.
- Het concept opnemen in het Harrisprofiel van [[../Ontwerp/ideegeneratie|Ideegeneratie]], met een aantekening dat de latch- en drukkamer-onderdelen voorlopig een lage haalbaarheidsscore krijgen.

---

## Bronnen

1. AskNature, _Leaves Rapidly Snap Shut_ (Venusvliegenvanger): https://asknature.org/strategy/leaves-rapidly-snap-shut/
2. AskNature, _How Guard Cells Function_ (stomata): https://asknature.org/strategy/guard-cells-regulate-gas-and-moisture-exchange/
3. AskNature, _Hind Legs Amplify Power_ (sprinkhaan-catapult): https://asknature.org/strategy/hind-legs-amplify-power/
4. Steve Mould, _We should use this amazing mechanism that's inside a grasshopper leg_, YouTube: https://www.youtube.com/watch?v=xUUW6SYl_ak
5. AskNature, _Wings Fold Multiple Times Without Wear_ (kever-resiline): https://asknature.org/strategy/wings-fold-multiple-times-without-wear/
6. Biomimicry 3.8, Life's Principles, zie [[OWD_DZO_les_1_-_Biomimicry|Biomimicry – les 1]]
7. [[../Analyse/pve|Programma van Eisen]] · [[../Analyse/interview|Interview – Kinderopvang]] · [[../Testen/testplan|Testplan]] · [[../systeem/pneumatisch_logicsysteem|Pneumatisch LogicSysteem]] · [[../Ontwerp/ideegeneratie|Ideegeneratie]]
