[![Netlify Status](https://api.netlify.com/api/v1/badges/44ba4275-4a3e-4925-a947-a231d783f8e9/deploy-status)](https://app.netlify.com/sites/goofy-albattani-17085e/deploys)

# Web Subatech - 2020 Version

Cette page explique comment développer pour le nouveau site web de Subatech
([pourquoi changeons-nous ?](./CMS-vs-SSG.md))

## Prérequis

### Installer nodejs (version >= 12.18.1)

See [nodejs](https://nodejs.org/en/) (LTS version)

### Installer yarn (version ^1.22.10)

Par exemple en utilisant `npm install -g yarn@1.22.10`

### Récupérer le dépot git

    cd qqpart
    git clone https://github.com/aphecetche/gatsby-subatest
    cd gatsby-subatest
    yarn install

## Développement courant

Une fois le dépot récupéré et les outils de base (nodejs et yarn) installés, le mode de dévelopement consiste grossièrement à :

- lancer le mode de développement 
- modifier des fichiers (ou en ajouter des nouveaux) jusqu'à être satisfait du résultat 
- commettre les changements dans git

Pour lancer le mode de développement, lancer la commande suivante dans un
terminal :

```shell
yarn start
```

Et ouvrez la page <http://localhost:8000> dans votre navigateur de choix.

Une fois cela fait, lorsque vous changez un fichier (markdown, js, etc...) et sauvegardez ce fichier, le site est reconstruit et le changement apparaît (quasi) instantanément dans le navigateur.

## Utilisation plus avancée (optionnelle) 

### Changer des paramètres dans le .env

Il existe un fichier `site/.env`, qui peut être laissé vide la plupart du temps, sauf si vous voulez utiliser deux notions avancées : l'interaction avec les données de Gatsby ou la génération des pages liées à LDAP. Dans le premier cas vous pouvez ajouter dans le fichier `site/.env` :

    GATSBY_GRAPHQL_IDE=playground

si vous voulez utiliser une autre interface que celle par défaut pour interagir avec les sources de données (ce qui est un usage avancé, donc pas forcément nécessaire).

Si vous voulez également générer les pages "membres" (depuis la source LDAP) vous devez ajouter :

    WITHLDAP=true

au fichier `.env`. 

> A noter : les réquêtes LDAP ne peuvent fonctionner que si vous utilisez une machine au sein du domaine `in2p3.fr`.

Par construction, le fichier `.env` n'a _pas_ vocation à être commis sur le dépot git.

# GraphQL (pour les développeurs)

Même si c'est une notion un peu plus avancée, elle est indispensable pour les personnes qui voudraient contribuer au dévelopment du site, car elle est centrale dans Gatsby. Un effort a été fait pour avoir un schema GraphQL à la fois adapté à nos besoins mais en restant simple. Pour l'instant il existe trois types "à la carte" : 

- Article (interface et une implémentation MdxArticle)
- Menu
- Seminar (interface et une implémentation MdxSeminar)

Le fait de séparer clairement les types aide à la fois au dévelopement (en séparant les problèmes) mais également pour accélérer les requêtes lors de la construction du site.
## L'organisation des répertoires (pour les développeurs)

Le site en lui-même est dans le répertoire `site`. Les articles sont dans `site/content` et les séminaires dans `site/seminaires`.

Afin de faciliter le développement et les tests en isolation, il est fait un usage intensif des _thèmes_ (au sens [Gatsby du terme](https://www.gatsbyjs.com/docs/themes/)) et de leur capacité de ["shadowing"](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/#reach-skip-nav). En gros chaque thème encapsule une fonctionalité du site, qui peut être testée à part (cf. par exemple les répertoires `test-gatsby-theme-XXX`). Ces fonctionalités (notamment le styling) peuvent ensuite être modifiées dans `site` avec le shadowing (cf les répertoires `site/src/gatsy-theme-XXX`). Il est possible qu'à l'avenier certains thèmes disparaissent ou soit réunis, c'est à voir. 

Pour le moment les thèmes utilisés sont : 

- gatsby-theme-article : qui gère la création des pages de type Article. 
- gatsby-theme-intl : qui gère les fonctions servant à l'internationalisation du site (français/anglais)
- gatsby-theme-ldap : qui offre un composant permettant d'obtenir la liste des membres d'une équipe depuis LDAP
- gatsby-theme-mdx : theme de base pour configurer l'utilisation du markdown étendu (MDX) sur le site
- gatsby-theme-menu : gestion des menus secondaires (des équipes) en YAML
- gatsby-theme-mui : gestion des styles de haut niveau (thème clair / thème foncé, couleurs ...)
- gatsby-theme-nav : composants liés à la navigation (menu principal, liens, etc...)
- gatsby-theme-orgchart : composants pour faire un organigramme
- gatsby-theme-seminar : gestion des séminaires

Il y a également deux thèmes dont le dévelopment est à l'arrêt pour le moment. Le premier car il correspond à une fonctionalité qui n'existe pas sur la site Joomla actuel (la recherche), et fera donc partie d'une phase 2. Le second car il nécessite un peu de recherche pour savoir quoi faire exactement... 

- gatsby-theme-search : pour gérer la recherche sur le site
- gatsby-theme-seo : pour s'assurer du référencement correct du site


### Travailler sur les thèmes dans les sous-répertoires `themes/XXX`

A noter que la commande `gatsby` est installée localement uniquement, et donc dans ces répertoires vous devez
 l'utiliser via `yarn`, i.e. :

 ```shell
 yarn gatsby --help
 yarn gatsby develop
 yarn gatsby build
 ```