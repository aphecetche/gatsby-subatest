## Pourquoi changer de technologie pour le site web de Subatech ?

Actuellement notre site (mis en place en 2012) utilise [Joomla](https://www.joomla.org) qui est un
"système de gestion de contenu" (CMS, Content Management System), où les pages
web (un mélange d'HTML, de CSS et éventuellement de Javascript) servies au
client (le navigateur) sont générées de façon dynamique par le serveur. Le
client fait appel à notre site qui abrite un script PHP. Ce script fait appel à
une base de donnée pour chercher le contenu et transforme ensuite ce contenu
en html(+css+js) qui est renvoyé au client. La présence d'une base de donnée
intermédiaire a plusieurs désavantages. En premier lieu, comme chaque page est
générée de façon dynamique, la réactivité de notre site n'est pas excellente
(il faut un temps de calcul sur le serveur pour générer chaque page). Ensuite,
le développement de nouvelles pages et/ou fonctionnalités (sauf à travailler
directement sur le site qui est en ligne, ce qui n'est pas souhaitable), ne
peut se faire qu'en ayant un système de test assez lourd à mettre en place.
Enfin, le fait que l'on exécute du code nous rend potentiellement vulnérable à
des attaques informatiques. Un CMS n'est pas intrinsèquement une mauvaise
technologie, mais compte-tenu de la taille de notre site (et la fréquence,
assez faible, des changements), elle est au final assez peu adaptée.

L'idée pour le nouveau site est de basculer sur un "générateur de site
statique" (SSG, Static Site Generator, [Gatsby](https://www.gatsbyjs.com) en l'occurence), où l'on génère
directement les pages html (+css+js) lorsque l'on "construit" (build) le site
et qui sont ensuite servies directement au client. C'est plus rapide pour le
client car il n'y a pas de base de données. Et comme il n'y a pas de script à
exécuter, la sensibilité aux attaques informatiques est plus faible. Enfin, et
c'est un critère déterminant, le développement est grandement
facilité car une génération de test des pages peut se faire sur (presque)
n'importe quelle machine, sans avoir à mettre en place une base de donnée.
