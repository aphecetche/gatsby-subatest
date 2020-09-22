---
title: "Acteurs, responsabilités, mesures de sécurité"
date: "2013-02-06 13:50:48 +0000 UTC"
lastmod: "2020-06-25 15:28:27 +0000 UTC"
path: "pages-internes/acteurs-responsabilites-mesures-de-securite.fr.md"
joomlaid: 306
category: "Pages internes "
asides: ["Pages internes .+menu+"]
---
Acteurs et responsabilités
--------------------------

La responsabilité de publication est attribuée au directeur du laboratoire.

La responsabilité éditoriale est déléguée au comité web, qui est en charge du suivi du contenu du site. Il doit entre autre veiller à ce que ce contenu soit légal et approprié, notamment en s’assurant que les différents éditeurs soient sensibilisés à ces notions. L’évolution du contenu est surveillée grâce un plugin Joomla qui informe par mail les membres du comité web de toute modification.

Le comité web est composé des personnes suivantes :

*   Farah Alibay
*   Laurent Aphecetche
*   Khalil Chawoshi
*   Marie Germain
*   Andrey Kalinichev
*   Lilian Martin
*   Tanja Pierret

Un alias mél a été défini : comiteweb@subatech.in2p3.fr et est proposée comme destinataire par défaut des mél envoyés au « webmaster » du site.

Le comité web n’a pas directement en charge la _production_ du contenu, qui est gérée par une vingtaine d’éditeurs, représentant les différents groupes et services. Chaque éditeur ne peut créer/modifier que des articles de la catégorie le concernant. Chaque éditeur possède un compte Joomla (nom d’utilisateur et mot de passe) dont il seul responsable, comme tout autre compte informatique du laboratoire (en particulier une attention particulière doit être portée à la qualité du mot de passe et à sa non divulgation).

*   Amanda Porta (SEN)
*   Andrey Kalinichev (Radiochimie)
*   Arnaud Guertin (Prisma)
*   Farah Alibay et Tanja Pierret (Communication)
*   Frédéric Lefèvre (Electronique)
*   Gines Martinez (Plasma)
*   Jacopo Ghiglieri (Théorie)
*   Khalil Chawoshi (Informatique)
*   Lilian Martin (Neutrino)
*   Jean-Pierre Cussonneau (Xénon)
*   Meriadeg Guillamet (Mécanique)
*   Séverine Gadeyne (Enseignement)
*   Sara Diglio (Séminaires)
*   Tanja Pierret (Séminaires, Evènements, Offres de thèse/emploi, Administration, Bibliothèque)

A noter qu’au sein du comité web 4 personnes ont des rôles d’édition étendus (ils peuvent éditer n’importe quelle catégorie) : Khalil a le rôle « administrateur » au sens Joomla du terme, Laurent a le rôle « administrateur », Lilian et Tanja sont éditeurs pour toutes les catégories.

Le service informatique a quant à lui la responsabilité de l’hébergement du serveur web lui-même.

Mesures de sécurité
-------------------

Dans le document « Avis CPSI nouveau projet; Serveur Web du Laboratoire », le comité de pilotage de la sécurité informatique (CPSI) a préconisé un certain nombre de mesures (les notes \[MesXXX\] ci-dessous font référence à ce document) à mettre en place avant la mise en production du site. Certaines sont à la charge du service informatique uniquement, d’autres, que nous détaillons ci-dessous, sont à la charge (au moins en partie) du comité web et/ou de chaque éditeur.

### Insister sur la responsabilité des détenteurs de comptes au sein de l’application en ce qui concerne la protection de leur compte et mot de passe

Mentioné dans la charte de la publication.

### Capacité à réagir en cas de publication de contenus inappropriés ou illégaux

Mentioné dans la charte de la publication.

### Configuration la plus restreinte possible pour les applications web

Voici la liste des modules et plugins (ne faisant pas partie de l’installation par défaut de Joomla) activés au moment de la mise en exploitation.

*   LDAP search (module, développé à Subatech) pour l’affichage automatisé de la liste des membres des groupes
*   AllVideos by JoomlaWorks (plugin) pour l’insertion de vidéos
*   SIGE - Simple Image Gallery Extended J2.5 (plugin) pour l’insertion de galleries d’images
*   *   Content - NotifyArticleSubmit (plugin) pour informer par mél de toute modification (utilisé par le comité web pour le suivi du contenu)
*   Quick Icon - Subatech Seminars (plugin) pour afficher le menu séminaires dans la partie backend
*   Xmap - Content Plugin (plugin) pour générer la « sitemap »

Les deux plugins ci-dessous sont activés actuellement mais seront certainement sujets à modification à court terme.

*   Content - ARI Sexy Lightbox Lite (plugin) pour l’affichage de contenu avec effect « lightbox ». Ce plugin est basé sur jQuery, ce qui fait un peu double emploi avec MooTools qui vient avec Joomla. Un plugin de substitution serait souhaitable (à l’étude).
*   Cartes Google Map (plugin) pour afficher l’accès au laboratoire (actuellement désactivé pour un problème de conflit CSS avec le template maison)

A noter également que le composant « subatech » (développé à Subatech) est installé pour gérer les séminaires (déjà en production), les événements et les offres de stages (dans un avenir proche).

Tout changement ultérieur devra faire l’objet d’une courte étude d’impact et notifié à l’hébergeur.

### Ne pas déposer d’informations confidentielles sur le serveur

Noté dans la charte de publication : ne pas déposer d’informations confidentielles sur le serveur web public.

### Identifier les lois à respecter

Faire référence aux principales lois à respecter dans la charte de publication.

### Contrôler régulièrement les contenus publiés

Le plugin NotifyArticleSubmit envoie un mél au comité à chaque modification/ajout d’article.

### Informer et responsabiliser les personnes qui ajoutent du contenu

C’est l’objet de la charte de publication

### Etre capable de rectifier rapidement

Les personnes capables de rectifier un contenu sont :

1.  l’auteur du document
2.  les administrateurs Joomla
3.  l’hébergeur

Cet ordre (processus d’escalade) sera respecté dans la mesure du possible.

### Soumettre la mise en ligne des informations à un processus d’approbation/validation

Cette mesure jugée trop lourde ne sera pas appliquée tant que le risque n’augmente pas par rapport à l’étude initiale. La surveillance des modifications (aidée par la mise en place du plugin de notification) par le comité web devrait suffire jusqu’à preuve du contraire.
