---
title: Mechanische Berekeningen — Pootjes PNEUTOY
---

# Mechanische Berekeningen — Pootjes PNEUTOY

📄 Onderdeel van [[../index|Home]] > 📁 [[../index#detaillering|Detaillering]]

![[index-1780861644116.webp]]

---

## Gegeven

| Grootheid | Waarde |
|-----------|--------|
| Belasting kind | $F = 120\ \text{N}$ |
| Aantal pootjes | $n = 4$ |
| Pootjeshoek t.o.v. verticaal | $\alpha = 15°$ |
| Pootjeslengte | $l = 120\ \text{mm} = 0{,}12\ \text{m}$ |
| Doorsnede poot | Driehoek, $b = h = 1{,}5\ \text{cm} = 15\ \text{mm}$ |

---

## Stap 1 — Kracht per pootje (VLS)

![[mechanische_berekeningen-1780862848418.webp]]

Het speelgoed wordt gemodelleerd als een blok. De totale belasting van $120\ \text{N}$ wordt gelijkmatig verdeeld over 4 pootjes via het Vrij Lichaam Schema:

$$F_{\text{poot}} = \frac{F}{n} = \frac{120}{4} = 30\ \text{N}$$

De kracht werkt **verticaal naar beneden** op het vrije uiteinde (punt B) van elk pootje.

---

## Stap 2 — Evenwichtsvergelijkingen (inklemming)

Het pootje is schuin geplaatst onder een hoek $\alpha = 15°$ t.o.v. de verticaal. De inklemming aan de bovenkant (punt A) levert drie reacties: $A_x$, $A_y$ en $M_A$.

![[mechanische_berekeningen-1780862883586.webp]]

De verticale kracht $F = 30\ \text{N}$ wordt eerst gedecomponeerd **langs en loodrecht op de staaf**:

$$F_{\parallel} = F \cdot \sin(\alpha) = 30 \cdot \sin(15°) \approx 7{,}76\ \text{N} \quad \text{(langs de staaf — normaalkracht)}$$

$$F_{\perp} = F \cdot \cos(\alpha) = 30 \cdot \cos(15°) \approx 28{,}98\ \text{N} \quad \text{(loodrecht op de staaf — dwarskracht)}$$

**Evenwichtsvergelijkingen in het globale stelsel:**

$$\sum F_x = 0: \quad A_x = F \cdot \sin(\alpha) = 30 \cdot \sin(15°) \approx 7{,}76\ \text{N}$$

$$\sum F_y = 0: \quad A_y = F \cdot \cos(\alpha) = 30 \cdot \cos(15°) \approx 28{,}98\ \text{N}$$

$$\sum M_A = 0: \quad M_A = F_{\perp} \cdot l = 28{,}98 \cdot 120 \approx 3478\ \text{N·mm}$$


---

## Stap 3 — Doorsnede-eigenschappen (driehoek)

De poot heeft een **gelijkbenige driehoekige doorsnede** met basis $b = 15\ \text{mm}$ en hoogte $h = 15\ \text{mm}$.

**Oppervlak:**

$$A = \frac{1}{2} \cdot b \cdot h = \frac{1}{2} \cdot 15 \cdot 15 = 112{,}5\ \text{mm}^2$$

**Traagheidsmoment om de neutrale lijn** (zwaartepunt ligt op $\tfrac{h}{3}$ vanaf de basis):

$$I = \frac{b \cdot h^3}{36} = \frac{15 \cdot 15^3}{36} = \frac{50625}{36} \approx 1406{,}25\ \text{mm}^4$$

**Afstand uiterste vezel tot neutrale lijn:**

$$e_{\text{top}} = \frac{2}{3} \cdot h = \frac{2}{3} \cdot 15 = 10\ \text{mm} \quad \text{(drukzijde — top driehoek)}$$

$$e_{\text{basis}} = \frac{1}{3} \cdot h = 5\ \text{mm} \quad \text{(trekzijde — basis driehoek)}$$

---

## Stap 4 — Buigspanning

![[mechanische_berekeningen-1780863347904.webp]]

Het maatgevende buigmoment treedt op in de inklemming (punt A):

$$M_{\max} = F_{\perp} \cdot l = F \cdot \cos(\alpha) \cdot l = 30 \cdot \cos(15°) \cdot 120 \approx 3478\ \text{N·mm}$$

**Buigspanning in de maatgevende vezel (drukzijde, top driehoek):**

$$\sigma_{\max} = \frac{M_{\max} \cdot e_{\text{top}}}{I} = \frac{3478 \cdot 10}{1406{,}25} \approx 24{,}7\ \text{N/mm}^2 = 24{,}7\ \text{MPa}$$

**Buigspanning trekzijde (basis driehoek):**

$$\sigma_{\text{trek}} = \frac{M_{\max} \cdot e_{\text{basis}}}{I} = \frac{3478 \cdot 5}{1406{,}25} \approx 12{,}4\ \text{MPa}$$
---

## Stap 5 — Doorbuiging
Het pootje wordt beschouwd als een ingeklemde balk met een puntlast aan het vrije uiteinde. De relevante belastingscomponent is $F_\perp$ (loodrecht op de staaf):

$$f_{\max} = \frac{F_{\perp} \cdot l^3}{3 \cdot E \cdot I}$$

**Elasticiteitsmodulus** aangenomen voor PP (polypropyleen):

$$E = 1{,}5\ \text{GPa} = 1500\ \text{N/mm}^2$$

**Invullen:**

$$f_{\max} = \frac{28{,}98 \cdot 120^3}{3 \cdot 1500 \cdot 1406{,}25} = \frac{28{,}98 \cdot 1{,}728 \times 10^6}{6{,}328 \times 10^6} \approx 7{,}92\ \text{mm}$$

---

## Samenvatting

| Grootheid | Symbool | Waarde |
|-----------|---------|--------|
| Kracht per pootje | $F_{\text{poot}}$ | $30\ \text{N}$ |
| Loodrechte component | $F_\perp$ | $\approx 28{,}98\ \text{N}$ |
| Tangentiële component | $F_\parallel$ | $\approx 7{,}76\ \text{N}$ |
| Reactiekracht horizontaal | $A_x$ | $\approx 7{,}76\ \text{N}$ |
| Reactiekracht verticaal | $A_y$ | $\approx 28{,}98\ \text{N}$ |
| Inklem-moment | $M_A$ | $\approx 3478\ \text{N·mm}$ |
| Traagheidsmoment | $I$ | $\approx 1406\ \text{mm}^4$ |
| Buigspanning (druk) | $\sigma_{\max}$ | $\approx 24{,}7\ \text{MPa}$ |
| Buigspanning (trek) | $\sigma_{\text{trek}}$ | $\approx 12{,}4\ \text{MPa}$ |
| Doorbuiging | $f_{\max}$ | $\approx 7{,}9\ \text{mm}$ |

---

## Aanbevelingen voor het ontwerp

De buigspanning van $24{,}7\ \text{MPa}$ ligt dichtbij de toelaatbare spanning van PP ($\sigma_{\text{toe}} \approx 25\ \text{MPa}$), en de doorbuiging van $7{,}9\ \text{mm}$ is relatief groot (ca. 6,6% van de staaflengte). Aanbevelingen:

| Maatregel                                        | Effect op $\sigma$                  | Effect op $f$                |
| ------------------------------------------------ | ----------------------------------- | ---------------------------- |
| Doorsnede vergroten naar $b = h = 20\ \text{mm}$ | $\sigma \approx 10{,}4\ \text{MPa}$ | $f \approx 2{,}2\ \text{mm}$ |
| Materiaal ABS ($E = 2{,}3\ \text{GPa}$)          | ongewijzigd                         | $f \approx 5{,}2\ \text{mm}$ |
| Materiaal PLA ($E = 3{,}5\ \text{GPa}$)          | ongewijzigd                         | $f \approx 3{,}4\ \text{mm}$ |


---

Zie ook: [[voorlopig_ontwerp|Voorlopig Ontwerp]] · [[definitief_ontwerp|Definitief Ontwerp]] · [[../Analyse/pve|Programma van Eisen]]
