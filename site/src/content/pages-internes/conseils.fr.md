---
title: "Conseils aux éditeurs"
date: "2012-03-08 09:41:55 +0000 UTC"
lastmod: "2012-06-07 15:03:17 +0000 UTC"
path: "pages-internes/conseils.fr.md"
joomlaid: 181
category: "Pages internes "
asides: ["Pages internes .+menu+"]
---
Quelques conseils pour les éditeurs
===================================

SVP pas ou peu de mise en forme visuelle lors de l'édition
----------------------------------------------------------

Un des principes de base du web est la séparation du contenu et de la forme. Malheureusement l'éditeur Joomla que nous utilisons (JCE) est un peu trop intelligent et se prend parfois pour Word.

Par exemple lorsque vous faites des copier/coller JCE a tendance à insérer tout un tas de "style=" dans le code HTML, ce qui a pour conséquence d'annuler l'effet d'un style global.

Il y a deux solutions à cela (voir figure) :

1.  utiliser l'outil gomme après avoir tout sélectionner (CTRL-A)
2.  basculer en mode HTML (cliquer sur \[Afficher/Masquer\]) et corriger à la main...

[![conseils-editeurs-effacer-les-styles](images/Interne/conseils-editeurs-effacer-les-styles.png)](images/Interne/conseils-editeurs-effacer-les-styles.png)

Par ailleurs, pour les gens qui auraient fait un peu de HTML dans le passé et pris de mauvaises habitudes (ok, ok, certaines étaient inévitables au moment), merci de ne plus utiliser de " " (non-breaking space) dans le code, ni de tables (sauf pour des données vraiment tabulaires...)

Les feuilles de style (CSS) que nous utilisons permettent de faire beaucoup de choses, et ce plus rapidement que ce que l'on peut faire à la main en le mettant en dur dans les articles. Petite liste non-exhaustive :

*   le style de tous les titres (niveau 1 à 6)
*   la taille, la police, la couleur des caractères (et selon qu'ils sont dans un paragraphe, dans un titre, dans une liste, on peut les styler différemment sans souci)
*   les espacements entre lignes, entre paragraphes (début et fin peuvent être différents, le premier et dernier paragraphes peuvent être facilement stylés différemment)
*   les lettrines (première lettre d'un paragraphe)
*   les marges et les bordures (par exemple autour des images)
*   etc...

Usage des images et des vidéos
------------------------------

Pour les images, pensez à utiliser une résolution adaptée au web.

Afin de conserver les proportions lorsque la page du navigateur change de taille il faut spécifier la taille de l'image en pourcentage plutôt qu'en valeur absolue. Cela peut se faire en passant en mode HTML et en changeant le paramètre "width" depuis une valeur en pixel en une valeur en "%!"(MISSING)

### Gallerie d'image

Le plugin "Simple Image Gallery Extended" permet d'afficher toutes les images d'un (sous)-répertoire. Mettez :

{ gallery}images2012{/gallery}

dans votre article et ça roule ! Il y a des options éventuellement dans la [documentation](http://joomla-extensions.kubik-rubik.de/sige-simple-image-gallery-extended#list-of-parameters).

### Videos

Le plugin AllVideos est installé.

La [documentation](http://www.joomlaworks.gr/content/view/35/41/) explique toutes les options, mais en gros, si vous connaissez le type de fichier, il faut inclure :

{type}groupe/video{type}

pour un fichier video.type qui doit être stocké dans le sous-répertoire de votre groupe d'édition dans le "media manager
