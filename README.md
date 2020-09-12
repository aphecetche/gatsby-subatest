# Web Subatech - 2020 Version

Cette page explique comment développer pour le nouveau site web de Subatech
([pourquoi changeons-nous ?](./CMS-vs-SSG.md))

## Prérequis

### Installer nodejs

See [nodejs](https://nodejs.org/en/) (LTS version)

### Installer yarn

Par exemple en utilisant  `npm install -g yarn`

### Installer gatsby-cli

```
npm install -g gatsby-cli
```

### Récupérer le dépot git

```
cd qqpart
git clone https://github.com/aphecetche/gatsby-subatest
cd gatsby-subatest
yarn install
```

### Créer un .env

Créer un fichier local `site/.env`, vide (`touch site/.env`).

Ce fichier peut être laissé vide la plupart du temps, sauf si vous voulez
utiliser deux notions avancées : l'interaction avec les données de Gatsby
ou la génération des pages liées à LDAP. Dans le premier cas vous pouvez
ajouter dans le fichier `site/.env` :

```
GATSBY_GRAPHQL_IDE=playground
```

si vous voulez utiliser une autre interface que celle par défaut pour interagir
avec les sources de données (ce qui est un usage avancé, donc pas forcément
nécessaire).

Si vous voulez également générer les pages "membres" (depuis la source LDAP)
vous devez ajouter :

```
WITHLDAP=true
```

au fichier `.env`. A noter : les réquêtes LDAP ne peuvent fonctionner que si
vous utilisez une machine au sein du domaine `in2p3.fr`.


Par construction, le fichier `.env` n'a _pas_ vocation à être commis sur le
dépot git.

## Développement courant

Une fois le dépot récupéré et les outils de base (nodejs, yarn et gatsby-cli)
installés, le mode de dévelopement consiste grossièrement à :

- lancer le mode de développement modifier des fichiers (ou en ajouter des
- nouveaux) jusqu'à être satisfait du résultat commettre les changements dans
- git



Pour lancer le mode de développement, lancer la commande suivante dans un
terminal :

```shell
yarn workspace site develop
```

Et ouvrez la page [http://localhost:8000](http://localhost:8000) dans votre
navigateur de choix.

Une fois cela fait, lorsque vous changez un fichier (markdown, js, etc...)  et
sauvegardez ce fichier, le site est reconstruit et le changement apparaît
(quasi) instantanément dans le navigateur.


