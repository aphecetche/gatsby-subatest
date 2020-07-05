---
title: "Développement du code de scénarios CLASS"
date: "2012-03-23 12:28:08 +0000 UTC"
lastmod: "2012-09-26 13:56:15 +0000 UTC"
path: "recherche/sen/developpement-du-code-de-scenarios-class.md"
joomlaid: 200
category: "sen"
layout: "recherche"
---
Il est apparu que les programmes existants destinés à réaliser des projections de scénarios électronucléaires se prêtent mal à l'implémentation de nouveaux concepts de réacteurs ainsi qu'à l'étude de scénarios "innovants". C'est pourquoi, il me parait indispensable de développer un outil stable et ouvert destiné à l'in2p3, afin que l'ensemble de la communauté puisse réaliser les scénarios nécessaires à leurs recherches.

Nous avons donc entrepris le développement d'un code de scénario appellé CLASS (Core Library for Advanced Scenario Simulation) est un programme de simulation de scénarios en cours de développement à Subatech. Son objectif sur le court terme est de calculer l'inventaire en matière radioactive d'un parc nucléaire complexe à l'équilibre ou en phase de transition. Sur le plus long terme, il deviendra un outil multi-critères d'évaluation de scénarios électronucléaires intégrant des notions de non-prolifération, de risque ou encore d'économie. Le développement de ce code se fait en collaboration avec l'Institut de Physique Nucléaire d'Orsay se présente sous la forme de librairie C++, gérant l'ensemble des phases clefs de l'étude de scénarios (cf figure 3)

![CLASS](images/Recherche/Erdre/CLASS.png)

Figure 3: Schéma de fonctionnement du code CLASS

Il sera possible d'y implémenter des usines de traitement, dont le rôle sera de récupérer le combustible usé issu des différents réacteurs, de le faire refroidir en piscine puis de séparer les produits revalorisables des déchets ultimes. On y trouvera également des réacteurs gérant l'évolution du combustible en cur à partir d'une simple base de données formatée, en régime transitoire ou à l'équilibre.

Contrairement aux programmes de scénarios existants, le but de ce code est de rester souple, en permettant à l'utilisateur de faire exactement ce qu'il souhaite, l'ensemble des paramètres clefs étant accessible et modifiable... Par exemple, si l'on veut réaliser un scénario utilisant des réacteurs innovants, il suffit de générer la base de données formatée correspondante.

A l'instar de MURE (MCNP Utility for Reactor Evolution)\* \[[5](/recherche/sen/bibliographie)\], le but est de permettre aux utilisateurs d'améliorer et de corriger le code, en y apportant leur contribution via une correction de bugs ou l'ajout d'un module ou d'une fonctionnalité permettant ainsi d'accroître la richesse et la profondeur des scénarios simulés.

L'avantage majeur d'avoir un code ouvert à l'utilisateur est la possibilité quasi sans limite de simulation de scénarios. Il serait possible de mener des études précises des transitions envisageables entre les technologies actuelles et les technologies futures.

A long terme, nous souhaitons continuer à développer ce programme, en y intégrant :

*   l'estimation des risques liés à la manipulation et au transport de matières radioactives,
*   l'évaluation aux risques relatifs à la mise en place de nouvelles filières,
*   la gestion du démantèlement des anciennes centrales arrivées en fin de vie.

De telles évolutions permettraient de quantifier les difficultés de gestion et de manutention des déchets radioactifs.

Il est également essentiel de développer un module permettant de gérer les évolutions du parc simulé, en fonction de différents critères d'optimisation : évolution de la demande énergétique, coût des installations... De plus, un tel module permettrait, entre autres, d'optimiser l'implantation de nouvelles centrales, privilégiant certains types de centrales au regard de l'évolution des stocks en combustible.

Le bon fonctionnement d'un tel programme de calculs de scénarios électronucléaires repose, en partie, sur la richesse de ses bases de données, permettant d'intégrer l'ensemble des réacteurs actuels et futurs au parc simulé. C'est pourquoi, nous souhaitons faire de ce programme un outil utilisable par l'ensemble de la communauté scientifique et de continuer à le faire évoluer en fonction des besoins.

_\*Utilisé par l'ensemble des groupes de recherche de l'in2p3 réalisant de la simulation de curs._
