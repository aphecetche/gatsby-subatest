
Each `gatsby-theme-XXX` brings a different functionality to the site. It is by no means a requirement to organize a Gatsby site like that but I thought it would ease the development by separating concerns a bit.

> Note that a theme in Gatsby is just a plugin-on-steroid

The `test-gatsby-theme-XXX` directories build a minimal site that test the given functionality.

## gatsby-theme-article

Creates nodes of type `Article` from `Mdx` nodes and the corresponding pages.

## gatsby-theme-intl

Provides helpers to deal with the french to english (and reverse) manipulations.

The `intl/en.json` and `intl/fr.json` contain translations of keys used within the site components.

## gatsby-theme-ldap

Provides a `Member` component that fetches data about team members from the IN2P3 LDAP. Only works from within the IN2P3 domain.

## gatsby-theme-mdx

A theme to configure a bunch of plugins related to MDX and images handling. Is used by `gatsby-theme-article` and `gatsby-theme-seminar`

## gatsby-theme-mui

Some site-specific customizations over `material-ui` 

## gatsby-theme-nav

Provides the `PrimaryNavigation` and `SecondaryNavigation` components.

## gatsby-theme-search

(TBD) intended for search data generation and display component.

## gatsby-theme-seminar

Introduce the `Seminar` node type, from `Mdx` data, and the corresponding pages (one page per seminar), as well as a couple of components to display seminars.

## gatsby-theme-seo

(TBD?) SEO related stuff
