# Path vs Slug vs LocalizedSlug

## At (GraphQL) Node level

For seminars, menus, articles that are all children of GraphQL File type, we should ensure the following.

`path` is the file path, and we can use the File type fields for that, e.g. `absolutePath` which is the full file name with its full path, `name` which is just the file name, _without_ the extension, `extension` which is the extension (`md`,`yaml`, etc...), `dir` which is the absolute dirname (ie. absolutePath without the filename), `base` is the file name (including extension, but without any path)

`slug` is the URL without language part, so for instance one article in two languages will result in the same slug (but different `language` field)

`language` is the language for which the element should be used. Can _only_ be one of `fr`,`en`,`xx` where `xx` means valid for both French and English pages. Anything beyond those 3 values _must_ treated as an error.

`localizedSlug` is `language/slug` basically

At the `Node` (GraphQL type) level the `path, name, dir, extension, base` fields can accessed from the parent `File`. 

But they should also be added (e.g. as `fileXXX` resolvers,`filePath, fileName, fileDir, fileExtension, fileBase`) to `pageContext` for queries (see below) and for display control (typically `language` is needed there)

## At the level of queries

Some fields must also be made available to the queries' parameters. 

Type                        | Used fields | Extra fields to considered 
---:                           | --- | ---
Seminar                  | `id` (of that seminar) | -
Seminars                | - | date range ?
Article                      | `id` (of that article) | - 
Article + Menu | `id` of article and `fileDir` to match article and menu | -
Articles                    | `language` to select articles of a given language | -
Menu                        | `id` of menu | -

## At the level of page context

One example of `pageContext` is for the right side menu, to be able to match the target of the link with the current url and style differently the currently active link.

Type                        | Page context fields | Typical usage
---:                           | --- | --
Seminar                  | - | -
Seminars                | - | -
Article                      | language | to allow matching (with or without slug)
-                                 | slug | to allow matching  (with or without language) 
-                                 | translations | an array of languages this article exist in, e.g. ["fr","en"]
Article with Menu | - | -
Articles                    | - | -
Menu                        | - |-

