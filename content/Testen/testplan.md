---
title: Testplan
---

# Testplan

📄 Onderdeel van [[../index|Home]] > 📁 [[../index#testen|Testen]]

---

## Overzicht

| #   | Test                      | Doel                                                               | Methode                                                  |
| --- | ------------------------- | ------------------------------------------------------------------ | -------------------------------------------------------- |
| T1  | AND-gate functionele test | Werkt het pneumatische systeem correct?                            | Handmatige bediening + observatie lekverlies             |
| T2  | 3D-print airtight test    | Kan een FDM-print luchtdicht worden gemaakt?                       | Printen met aangepaste slicer-instellingen + syringetest |
| T3  | Siliconen mold test       | Is een siliconen mal haalbaar als productiemethode?                | PLA mastermal → siliconen gietmal → testgietsel          |
| T4  | App gebruikerstest        | Begrijpen kinderen het kleurmengconcept via de digitale simulatie? | Vrij spel + observatie, 3+ kinderen gemengde leeftijden  |

---

## T1  AND-gate functionele test

**Doel:** Vaststellen dat het pneumatische AND-gate systeem correct reageert: alleen bij twee gelijktijdig ingedrukte knoppen komt de uitvoer omhoog.

**Opzet:**

| Handeling | Verwacht resultaat |
|-----------|-------------------|
| Knop A indrukken | Geen uitvoer |
| Knop B indrukken | Geen uitvoer |
| Knop A + B tegelijk | Uitvoerknop omhoog |

**Benodigdheden:** AND-gate prototype, gasket sealer, push-in koppelingen, PU-slangen, spuit voor druktesten

Met mijn fijne motoriek koste het me één uur om één and gate te bouwen, daarnaast heb ik zeven niet werkende gemaakt. De gates zijn niet lucht dicht genoeg als ik niet alle 6 bouten kan aandraaien. Ik kan ze op deze manier niet goed assembleren (Mijn handen trillen veel en ik heb mijn rechter duim en wijs vinger gekneusd.)
![[testplan-1780865123371.webp]]

![[testplan-1780864972175.webp|298]]

![[testplan-1780864960283.webp|296]]

![[testplan-1780864992170.webp|221|294x392]]


---

## T2  3D-print airtight test

**Doel:** Bepalen welke FDM-printinstellingen een luchtdichte wand opleveren voor pneumatische toepassingen.

**Opzet:** Printen van een testlichaam met de volgende aangepaste slicer-instellingen op basis van Reddit-onderzoek:

| Instelling | Waarde |
|-----------|--------|
| Flow / extrusion multiplier | 110% |
| Seam locatie | Random |
| Extrusie breedte | 0,5 mm (bij 0,4 mm nozzle) |
| Printtemperatuur | +10°C t.o.v. standaard |
| Aantal perimeters | Verhoogd (≥ 4) |

**Dataverzameling:** spuit aansluiten op het testlichaam en druk opbouwen; observeren of lucht ontsnapt

Na 5 prints heb ik de juiste instellingen gevonden om lucht dicht te printen.

![[testplan-1780865091906.webp]]

---

## T3  Siliconen mold test

**Doel:** Valideren of een siliconen gietmal (gemaakt via een PLA-mastermal) bruikbaar is als alternatieve productiemethode voor de knoppen en behuizingsonderdelen.

**Opzet:**
1. 3D-print PLA-mastermal van het onderdeel
2. Giet siliconen om de mastermal
3. Na uitharden: mastermal verwijderen
4. Giet testmateriaal in de siliconen mal

**Dataverzameling:** Visuele inspectie van het gegoten onderdeel.

De mal ziet er van binnen prima uit op een kleine schaal, dan is de verwachting dat dit prima is voor het project.

![[testplan-1780865341997.webp]]

---

## T4  App gebruikerstest (Godot simulatie)

**Doel:** Testen of kinderen het kleurmengconcept twee knoppen indrukken geeft een mengkleur  intuïtief begrijpen via de digitale 3D-simulatie gebouwd in Godot.

**Opzet:** Kind krijgt de app zonder uitleg. Begeleider legt uit hoe het spel werkt . Na 2 mislukte pogingen wordt hulp geboden door een volwassene.

**Deelnemers:** 3 kinderen, gemengde leeftijden (2–5 jaar)

**Dataverzameling:** Observatienotities per kind begreep het kind het zonder hulp?

Voor de 2 jarige was het concept van kleuren mixen nieuw maar het deed niet lang voordat de begrip er was.
Voor de 4 en 5 jarige was het geen uitdaging.

**Link naar app:**
[https://chatteringskull.github.io/pneutoysim/](https://chatteringskull.github.io/pneutoysim/ "https://chatteringskull.github.io/pneutoysim/")


---
