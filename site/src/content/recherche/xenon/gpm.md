---
title: "GPM: Un photomultiplicateur gazeux cryogénique de large surface"
date: "2012-05-09 11:28:31 +0000 UTC"
lastmod: "2012-09-06 16:20:40 +0000 UTC"
path: "recherche/xenon/gpm.md"
joomlaid: 215
category: "xenon"
layout: "recherche"
menus:
  main:
    identifier: "recherche/nucleaire-et-sante/xenon/recherche/appliquees/gpm"
    name: "GPM"
    parent: "recherche/nucleaire-et-sante/xenon/recherche/appliquees"
---
**Jusqu'à présent les détecteurs aux gaz nobles liquéfiés ne disposent pas de photodétecteurs gazeux de large surface adaptés aux volumes de scintillateur mis en jeu. Nous développons un photomultiplicateur gazeux cryogénique de grande surface afin de réaliser un déclenchement original du télescope Compton au xénon liquide.**

### Scintillation du xénon liquide

L'interaction d'un rayonnement ionisant avec le xénon liquide induit l'ionisation et l'excitation des atomes de xénon. Les molécules de gaz noble excitées, appelées excimères, retournent a leur état fondamental en émettant un rayonnement ultraviolet dont la longueur d'onde est piquée à 178 nm. Les photons UV peuvent parcourir des distances de l'ordre du mètre sans être absorbés car le xénon liquide pur est transparent à sa propre luminescence. Cependant, la détection de la lumière de scintillation est délicate à cause de la température de fonctionnement (165 K) et du domaine de longueur d'onde des photons de scintillation du xénon liquide. Le signal de scintillation du xénon liquide est rapide. Son temps de monte est de l'ordre de la nanoseconde et sa durée, dépendante du champ électrique et de la particule interagissant, est de l'ordre de la centaine de nanosecondes. Nous tirons profit de cette rapidité pour marquer temporellement chaque évènement et ainsi déterminer l'altitude des interactions dans la chambre à projection temporelle.

### Principe de la photodétection

La photodétection consiste à convertir les photons incidents en un signal électrique détectable. Les photons sont tout d'abord convertis, par effet photoélectrique, en charges élémentaires, appelées photoélectrons, qui sont ensuite multipliées afin de fournir un signal suffisamment intense. Les photodétecteurs les plus rependus actuellement dans le domaine de la détection de la scintillation des gaz nobles sont les tubes photomultiplicateurs à vide qui bénéficie de 80 années de R&D. Les photoélectrons sont extraits d'un semi-conducteur, la photocathode, puis sont multipliés par une succession d'électrodes, les dynodes, par émissions secondaires. Le signal qui en résulte reproduit fidèlement le signal de scintillation. Cependant, le vide régnant dans ces tubes ne permet pas de réaliser de larges surfaces de détection sans zone mortes.

### Un GPM de large surface

Nous développons un photodétecteur doté d'une photocathode d'iodure de césium déposée sur un THick Gaseous Electron Multiplier (THGEM) pour la photoconversion, et de MICRO MEsh GAseous Structure (MICROMEGAS) pour l'amplification des charges. Le schéma de principe décrit cette structure sur la figure 1.

![PrincipeGPM](images/Recherche/Xenon/PrincipeGPM.gif)

#### Schéma de principe de la détection de la lumière de scintillation du xénon liquide avec un GPM doté d'un THGEM, d'un PIM et d'un MICROMEGAS

Le THGEM est un détecteur en FR4 ou G10 de quelques centaines de microns d'épaisseur percé de trous millimétriques. Les électrodes en cuivre recouvrent les deux faces de l'isolant. Une couche d'or ou de nickel est déposée sur les électrodes afin d'empêcher toute réaction chimique de la photocathode de CsI. La multiplication des charges primaires s'effectue par avalanche électronique au niveau de deux microstructures constituées de microgrilles métalliques (Ni, Cu) définissant des espaces d'amplification de l'ordre de la centaine de microns. Sous l'action d'un champ électrique de quelques dizaines de kV/cm, les électrons gagnent suffisamment d'énergie pour ioniser les molécules de gaz avec lesquelles ils collisionnent. Le signal est induit sur l'anode dans les derniers 50 microns. L'ensemble du détecteur est contenu dans une enveloppe cryogénique en acier inoxydable (304L). La figure 2 montre des photographies du prototype en développement dédié aux tests cryogéniques. Les premiers résultats obtenus à la température du xénon liquide sont prometteurs. Ils permettent d'envisager une augmentation de la zone active et une segmentation de l'anode.

![GPMProto](images/Recherche/Xenon/GPMProto.gif)

#### Photographie du prototype de GPM développé au laboratoire (Øanode = 32 mm)

### Thèses et publications

*   S. Duval, [Développement d'un photomultiplicateur gazeux cryogénique dédié à un télescope Compton au xénon liquide pour l'imagerie médicale](http://tel.archives-ouvertes.fr/tel-00594636_v1/), Thèse de doctorat, dec 2010
*   C. Grignon et al., [Nuclear medical imaging using beta(+) gamma coincidences from Sc-44 radio-nuclide with liquid xenon as detection medium](http://www.sciencedirect.com/science/article/pii/S0168900206018456), NIMA 2008, Volume: 571 Issue: 1-2 Pages: 142-145
*   S. Duval, A. Breskin, H. Carduner, J.-P. Cussonneau, J. Lamblin, P. Le Ray, E. Morteau, T. Oger, J.-S. Stutzmann and D. Thers, [MPGDs in Compton imaging with liquid-xenon](http://iopscience.iop.org/1748-0221/4/12/P12008), 2009 JINST 4 P12008
*   S. Duval et al., [On the operation of a micropattern gaseous UV-photomultiplier in liquid-Xenon](http://iopscience.iop.org/1748-0221/6/04/P04007), 2011 JINST 6 P04007
*   A. Breskin et al., [CsI-THGEM gaseous photomultipliers for RICH and noble-liquid detectors](http://dx.doi.org/10.1016/j.nima.2010.10.034), NIMA 639 (2011) 117-120

### Collaborations

*   [Prof. Amos Breskin](mailto:Amos.Breskin@weizmann.ac.il) du [Weizmann Institute of Sciences](http://www.weizmann.ac.il/) (Israël)
