/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly url: Maybe<Scalars['String']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly author: Maybe<Scalars['String']>;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly context: Maybe<SitePageContext>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
  readonly componentPath: Maybe<Scalars['String']>;
};

type SitePageContext = {
  readonly id: Maybe<Scalars['String']>;
  readonly limit: Maybe<Scalars['Int']>;
  readonly skip: Maybe<Scalars['Int']>;
  readonly numPages: Maybe<Scalars['Int']>;
  readonly currentPage: Maybe<Scalars['Int']>;
};

type WpNode = {
  /** The globally unique ID for the object */
  readonly id: Scalars['ID'];
};

type WpContentNode = {
  /** Connection between the ContentNode type and the ContentType type */
  readonly contentType: Maybe<WpContentNodeToContentTypeConnectionEdge>;
  /** The ID of the node in the database. */
  readonly databaseId: Scalars['Int'];
  /** Post publishing date. */
  readonly date: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  readonly dateGmt: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  readonly desiredSlug: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  readonly enclosure: Maybe<Scalars['String']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post->guid and the guid column in the "post_objects" database table. */
  readonly guid: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** The user that most recently edited the node */
  readonly lastEditedBy: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  readonly link: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  readonly modified: Maybe<Scalars['Date']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  readonly modifiedGmt: Maybe<Scalars['Date']>;
  /** The uri slug for the post. This is equivalent to the WP_Post->post_name field and the post_name column in the database for the "post_objects" table. */
  readonly slug: Maybe<Scalars['String']>;
  /** The current status of the object */
  readonly status: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  readonly template: Maybe<WpContentTemplate>;
  /** URI path for the resource */
  readonly uri: Scalars['String'];
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type WpContentNode_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type WpContentNode_dateGmtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type WpContentNode_modifiedArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type WpContentNode_modifiedGmtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Connection between the ContentNode type and the ContentType type */
type WpContentNodeToContentTypeConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpContentType>;
};

/** An Post Type object */
type WpContentType = Node & WpNode & WpUniformResourceIdentifiable & {
  /** The url path of the first page of the archive page for this content type. */
  readonly archivePath: Maybe<Scalars['String']>;
  /** Whether this content type should can be exported. */
  readonly canExport: Maybe<Scalars['Boolean']>;
  /** Connection between the ContentType type and the Taxonomy type */
  readonly connectedTaxonomies: Maybe<WpContentTypeToTaxonomyConnection>;
  /** Connection between the ContentType type and the ContentNode type */
  readonly contentNodes: Maybe<WpContentTypeToContentNodeConnection>;
  /** Whether content of this type should be deleted when the author of it is deleted from the system. */
  readonly deleteWithUser: Maybe<Scalars['Boolean']>;
  /** Description of the content type. */
  readonly description: Maybe<Scalars['String']>;
  /** Whether to exclude nodes of this content type from front end search results. */
  readonly excludeFromSearch: Maybe<Scalars['Boolean']>;
  /** The plural name of the content type within the GraphQL Schema. */
  readonly graphqlPluralName: Maybe<Scalars['String']>;
  /** The singular name of the content type within the GraphQL Schema. */
  readonly graphqlSingleName: Maybe<Scalars['String']>;
  /** Whether this content type should have archives. Content archives are generated by type and by date. */
  readonly hasArchive: Maybe<Scalars['Boolean']>;
  /** Whether the content type is hierarchical, for example pages. */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  readonly id: Scalars['ID'];
  /** Whether this page is set to the static front page. */
  readonly isFrontPage: Scalars['Boolean'];
  /** Whether this page is set to the blog posts page. */
  readonly isPostsPage: Scalars['Boolean'];
  /** Display name of the content type. */
  readonly label: Maybe<Scalars['String']>;
  /** Details about the content type labels. */
  readonly labels: Maybe<WpPostTypeLabelDetails>;
  /** The name of the icon file to display as a menu icon. */
  readonly menuIcon: Maybe<Scalars['String']>;
  /** The position of this post type in the menu. Only applies if show_in_menu is true. */
  readonly menuPosition: Maybe<Scalars['Int']>;
  /** The internal name of the post type. This should not be used for display purposes. */
  readonly name: Maybe<Scalars['String']>;
  /** Whether a content type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention. */
  readonly public: Maybe<Scalars['Boolean']>;
  /** Whether queries can be performed on the front end for the content type as part of parse_request(). */
  readonly publiclyQueryable: Maybe<Scalars['Boolean']>;
  /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
  readonly restBase: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  readonly restControllerClass: Maybe<Scalars['String']>;
  /** Makes this content type available via the admin bar. */
  readonly showInAdminBar: Maybe<Scalars['Boolean']>;
  /** Whether to add the content type to the GraphQL Schema. */
  readonly showInGraphql: Maybe<Scalars['Boolean']>;
  /** Where to show the content type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that. */
  readonly showInMenu: Maybe<Scalars['Boolean']>;
  /** Makes this content type available for selection in navigation menus. */
  readonly showInNavMenus: Maybe<Scalars['Boolean']>;
  /** Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace. */
  readonly showInRest: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing this content type in the admin. */
  readonly showUi: Maybe<Scalars['Boolean']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type WpUniformResourceIdentifiable = {
  /** The unique resource identifier path */
  readonly id: Scalars['ID'];
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
};

/** Connection between the ContentType type and the Taxonomy type */
type WpContentTypeToTaxonomyConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpTaxonomy>>>;
};

/** A taxonomy object */
type WpTaxonomy = Node & WpNode & {
  /** The url path of the first page of the archive page for this content type. */
  readonly archivePath: Maybe<Scalars['String']>;
  /** List of Content Types associated with the Taxonomy */
  readonly connectedContentTypes: Maybe<WpTaxonomyToContentTypeConnection>;
  /** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
  readonly description: Maybe<Scalars['String']>;
  /** The plural name of the post type within the GraphQL Schema. */
  readonly graphqlPluralName: Maybe<Scalars['String']>;
  /** The singular name of the post type within the GraphQL Schema. */
  readonly graphqlSingleName: Maybe<Scalars['String']>;
  /** Whether the taxonomy is hierarchical */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  readonly id: Scalars['ID'];
  /** Name of the taxonomy shown in the menu. Usually plural. */
  readonly label: Maybe<Scalars['String']>;
  /** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
  readonly name: Maybe<Scalars['String']>;
  /** Whether the taxonomy is publicly queryable */
  readonly public: Maybe<Scalars['Boolean']>;
  /** Name of content type to diplay in REST API &quot;wp/v2&quot; namespace. */
  readonly restBase: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  readonly restControllerClass: Maybe<Scalars['String']>;
  /** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
  readonly showCloud: Maybe<Scalars['Boolean']>;
  /** Whether to display a column for the taxonomy on its post type listing screens. */
  readonly showInAdminColumn: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type to the GraphQL Schema. */
  readonly showInGraphql: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the admin menu */
  readonly showInMenu: Maybe<Scalars['Boolean']>;
  /** Whether the taxonomy is available for selection in navigation menus. */
  readonly showInNavMenus: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the quick/bulk edit panel. */
  readonly showInQuickEdit: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
  readonly showInRest: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
  readonly showUi: Maybe<Scalars['Boolean']>;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

/** Connection between the Taxonomy type and the ContentType type */
type WpTaxonomyToContentTypeConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpContentType>>>;
};

/** Connection between the ContentType type and the ContentNode type */
type WpContentTypeToContentNodeConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpContentNode>>>;
};

/** Details for labels of the PostType */
type WpPostTypeLabelDetails = {
  /** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
  readonly addNew: Maybe<Scalars['String']>;
  /** Label for adding a new singular item. */
  readonly addNewItem: Maybe<Scalars['String']>;
  /** Label to signify all items in a submenu link. */
  readonly allItems: Maybe<Scalars['String']>;
  /** Label for archives in nav menus */
  readonly archives: Maybe<Scalars['String']>;
  /** Label for the attributes meta box. */
  readonly attributes: Maybe<Scalars['String']>;
  /** Label for editing a singular item. */
  readonly editItem: Maybe<Scalars['String']>;
  /** Label for the Featured Image meta box title. */
  readonly featuredImage: Maybe<Scalars['String']>;
  /** Label for the table views hidden heading. */
  readonly filterItemsList: Maybe<Scalars['String']>;
  /** Label for the media frame button. */
  readonly insertIntoItem: Maybe<Scalars['String']>;
  /** Label for the table hidden heading. */
  readonly itemsList: Maybe<Scalars['String']>;
  /** Label for the table pagination hidden heading. */
  readonly itemsListNavigation: Maybe<Scalars['String']>;
  /** Label for the menu name. */
  readonly menuName: Maybe<Scalars['String']>;
  /** General name for the post type, usually plural. */
  readonly name: Maybe<Scalars['String']>;
  /** Label for the new item page title. */
  readonly newItem: Maybe<Scalars['String']>;
  /** Label used when no items are found. */
  readonly notFound: Maybe<Scalars['String']>;
  /** Label used when no items are in the trash. */
  readonly notFoundInTrash: Maybe<Scalars['String']>;
  /** Label used to prefix parents of hierarchical items. */
  readonly parentItemColon: Maybe<Scalars['String']>;
  /** Label for removing the featured image. */
  readonly removeFeaturedImage: Maybe<Scalars['String']>;
  /** Label for searching plural items. */
  readonly searchItems: Maybe<Scalars['String']>;
  /** Label for setting the featured image. */
  readonly setFeaturedImage: Maybe<Scalars['String']>;
  /** Name for one object of this post type. */
  readonly singularName: Maybe<Scalars['String']>;
  /** Label for the media frame filter. */
  readonly uploadedToThisItem: Maybe<Scalars['String']>;
  /** Label in the media frame for using a featured image. */
  readonly useFeaturedImage: Maybe<Scalars['String']>;
  /** Label for viewing a singular item. */
  readonly viewItem: Maybe<Scalars['String']>;
  /** Label for viewing post type archives. */
  readonly viewItems: Maybe<Scalars['String']>;
};

/** Connection between the ContentNode type and the User type */
type WpContentNodeToEditLockConnectionEdge = {
  /** The timestamp for when the node was last edited */
  readonly lockTimestamp: Maybe<Scalars['String']>;
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpUser>;
};

/** A User object */
type WpUser = Node & WpNode & WpUniformResourceIdentifiable & WpCommenter & WpDatabaseIdentifier & {
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  readonly avatar: Maybe<WpAvatar>;
  /** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
  readonly capKey: Maybe<Scalars['String']>;
  /** A list of capabilities (permissions) granted to the user */
  readonly capabilities: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Connection between the User type and the Comment type */
  readonly comments: Maybe<WpUserToCommentConnection>;
  /** Identifies the primary key from the database. */
  readonly databaseId: Scalars['Int'];
  /** Description of the user. */
  readonly description: Maybe<Scalars['String']>;
  /** Email address of the user. This is equivalent to the WP_User-&gt;user_email property. */
  readonly email: Maybe<Scalars['String']>;
  /** A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps. */
  readonly extraCapabilities: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
  readonly firstName: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
  readonly lastName: Maybe<Scalars['String']>;
  /** The preferred language locale set for the user. Value derived from get_user_locale(). */
  readonly locale: Maybe<Scalars['String']>;
  /** Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property. */
  readonly name: Maybe<Scalars['String']>;
  /** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
  readonly nicename: Maybe<Scalars['String']>;
  /** Nickname of the user. */
  readonly nickname: Maybe<Scalars['String']>;
  /** Connection between the User type and the page type */
  readonly pages: Maybe<WpUserToPageConnection>;
  /** Connection between the User type and the post type */
  readonly posts: Maybe<WpUserToPostConnection>;
  /** The date the user registered or was created. The field follows a full ISO8601 date string format. */
  readonly registeredDate: Maybe<Scalars['String']>;
  /** Connection between the User type and the UserRole type */
  readonly roles: Maybe<WpUserToUserRoleConnection>;
  /** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
  readonly slug: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
  /** A website url that is associated with the user. */
  readonly url: Maybe<Scalars['String']>;
  /** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
  readonly username: Maybe<Scalars['String']>;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type WpCommenter = {
  /** Identifies the primary key from the database. */
  readonly databaseId: Scalars['Int'];
  /** The email address of the author of a comment. */
  readonly email: Maybe<Scalars['String']>;
  /** The globally unique identifier for the comment author. */
  readonly id: Scalars['ID'];
  /** The name of the author of a comment. */
  readonly name: Maybe<Scalars['String']>;
  /** The url of the author of a comment. */
  readonly url: Maybe<Scalars['String']>;
};

type WpDatabaseIdentifier = {
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
};

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
type WpAvatar = {
  /** URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo). */
  readonly default: Maybe<Scalars['String']>;
  /** HTML attributes to insert in the IMG element. Is not sanitized. */
  readonly extraAttr: Maybe<Scalars['String']>;
  /** Whether to always show the default image, never the Gravatar. */
  readonly forceDefault: Maybe<Scalars['Boolean']>;
  /** Whether the avatar was successfully found. */
  readonly foundAvatar: Maybe<Scalars['Boolean']>;
  /** Height of the avatar image. */
  readonly height: Maybe<Scalars['Int']>;
  /** What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order. */
  readonly rating: Maybe<Scalars['String']>;
  /** Type of url scheme to use. Typically HTTP vs. HTTPS. */
  readonly scheme: Maybe<Scalars['String']>;
  /** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
  readonly size: Maybe<Scalars['Int']>;
  /** URL for the gravatar image source. */
  readonly url: Maybe<Scalars['String']>;
  /** Width of the avatar image. */
  readonly width: Maybe<Scalars['Int']>;
};

/** Connection between the User type and the Comment type */
type WpUserToCommentConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpComment>>>;
};

/** A Comment object */
type WpComment = Node & WpNode & WpDatabaseIdentifier & {
  /** User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL. */
  readonly agent: Maybe<Scalars['String']>;
  /** The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL. */
  readonly approved: Maybe<Scalars['Boolean']>;
  /** The author of the comment */
  readonly author: Maybe<WpCommentToCommenterConnectionEdge>;
  /** IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL. */
  readonly authorIp: Maybe<Scalars['String']>;
  /** Connection between the Comment type and the ContentNode type */
  readonly commentedOn: Maybe<WpCommentToContentNodeConnectionEdge>;
  /** Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL. */
  readonly content: Maybe<Scalars['String']>;
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
  /** Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL. */
  readonly date: Maybe<Scalars['Date']>;
  /** Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL. */
  readonly dateGmt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  /** Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL. */
  readonly karma: Maybe<Scalars['Int']>;
  /** Connection between the Comment type and the Comment type */
  readonly wpParent: Maybe<WpCommentToParentCommentConnectionEdge>;
  /** The database id of the parent comment node or null if it is the root comment */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent comment node. */
  readonly parentId: Maybe<Scalars['ID']>;
  /** Connection between the Comment type and the Comment type */
  readonly replies: Maybe<WpCommentToCommentConnection>;
  /** Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL. */
  readonly type: Maybe<Scalars['String']>;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


/** A Comment object */
type WpComment_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


/** A Comment object */
type WpComment_dateGmtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Connection between the Comment type and the Commenter type */
type WpCommentToCommenterConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpCommenter>;
};

/** Connection between the Comment type and the ContentNode type */
type WpCommentToContentNodeConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpContentNode>;
};

/** Connection between the Comment type and the Comment type */
type WpCommentToParentCommentConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpComment>;
};

/** Connection between the Comment type and the Comment type */
type WpCommentToCommentConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpComment>>>;
};

/** The mediaItem type */
type WpMediaItem = Node & WpNode & WpContentNode & WpDatabaseIdentifier & WpNodeWithTemplate & WpUniformResourceIdentifiable & WpNodeWithTitle & WpNodeWithAuthor & WpNodeWithComments & WpHierarchicalContentNode & {
  /** Alternative text to display when resource is not displayed */
  readonly altText: Maybe<Scalars['String']>;
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  readonly ancestors: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  readonly author: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  readonly authorDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  readonly authorId: Maybe<Scalars['ID']>;
  /** The caption for the resource */
  readonly caption: Maybe<Scalars['String']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  readonly wpChildren: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  readonly commentCount: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  readonly commentStatus: Maybe<Scalars['String']>;
  /** Connection between the mediaItem type and the Comment type */
  readonly comments: Maybe<WpMediaItemToCommentConnection>;
  /** Connection between the ContentNode type and the ContentType type */
  readonly contentType: Maybe<WpContentNodeToContentTypeConnectionEdge>;
  /** The ID of the node in the database. */
  readonly databaseId: Scalars['Int'];
  /** Post publishing date. */
  readonly date: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  readonly dateGmt: Maybe<Scalars['Date']>;
  /** Description of the image (stored as post_content) */
  readonly description: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  readonly desiredSlug: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  readonly enclosure: Maybe<Scalars['String']>;
  /** The filesize in bytes of the resource */
  readonly fileSize: Maybe<Scalars['Int']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  readonly guid: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** The user that most recently edited the node */
  readonly lastEditedBy: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  readonly link: Maybe<Scalars['String']>;
  /** Details about the mediaItem */
  readonly mediaDetails: Maybe<WpMediaDetails>;
  /** Url of the mediaItem */
  readonly mediaItemUrl: Maybe<Scalars['String']>;
  /** Type of resource */
  readonly mediaType: Maybe<Scalars['String']>;
  /** The mime type of the mediaItem */
  readonly mimeType: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  readonly modified: Maybe<Scalars['Date']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  readonly modifiedGmt: Maybe<Scalars['Date']>;
  /** The parent of the node. The parent object can be of various types */
  readonly wpParent: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  readonly parentId: Maybe<Scalars['ID']>;
  /** The sizes attribute value for an image. */
  readonly sizes: Maybe<Scalars['String']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  readonly slug: Maybe<Scalars['String']>;
  /** Url of the mediaItem */
  readonly sourceUrl: Maybe<Scalars['String']>;
  /** The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths. */
  readonly srcSet: Maybe<Scalars['String']>;
  /** The current status of the object */
  readonly status: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  readonly template: Maybe<WpContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  readonly title: Maybe<Scalars['String']>;
  /** URI path for the resource */
  readonly uri: Scalars['String'];
  readonly nodeType: Maybe<Scalars['String']>;
  /** @deprecated MediaItem.remoteFile was renamed to localFile */
  readonly remoteFile: Maybe<File>;
  readonly localFile: Maybe<File>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


/** The mediaItem type */
type WpMediaItem_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


/** The mediaItem type */
type WpMediaItem_dateGmtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


/** The mediaItem type */
type WpMediaItem_modifiedArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


/** The mediaItem type */
type WpMediaItem_modifiedGmtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type WpNodeWithTemplate = {
  /** The template assigned to the node */
  readonly template: Maybe<WpContentTemplate>;
};

type WpNodeWithTitle = {
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  readonly title: Maybe<Scalars['String']>;
};

type WpNodeWithAuthor = {
  /** Connection between the NodeWithAuthor type and the User type */
  readonly author: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  readonly authorDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  readonly authorId: Maybe<Scalars['ID']>;
};

type WpNodeWithComments = {
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  readonly commentCount: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  readonly commentStatus: Maybe<Scalars['String']>;
};

type WpHierarchicalContentNode = {
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  readonly ancestors: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  readonly wpChildren: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The parent of the node. The parent object can be of various types */
  readonly wpParent: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  readonly parentId: Maybe<Scalars['ID']>;
};

type WpContentTemplate = {
  /** The name of the template */
  readonly templateName: Maybe<Scalars['String']>;
};

/** Connection between the NodeWithAuthor type and the User type */
type WpNodeWithAuthorToUserConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpUser>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
type WpHierarchicalContentNodeToContentNodeAncestorsConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpContentNode>>>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
type WpHierarchicalContentNodeToContentNodeChildrenConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpContentNode>>>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
type WpHierarchicalContentNodeToParentContentNodeConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpContentNode>;
};

/** Connection between the mediaItem type and the Comment type */
type WpMediaItemToCommentConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpComment>>>;
};

/** Connection between the ContentNode type and the User type */
type WpContentNodeToEditLastConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpUser>;
};

/** File details for a Media Item */
type WpMediaDetails = {
  /** The height of the mediaItem */
  readonly file: Maybe<Scalars['String']>;
  /** The height of the mediaItem */
  readonly height: Maybe<Scalars['Int']>;
  readonly meta: Maybe<WpMediaItemMeta>;
  /** The available sizes of the mediaItem */
  readonly sizes: Maybe<ReadonlyArray<Maybe<WpMediaSize>>>;
  /** The width of the mediaItem */
  readonly width: Maybe<Scalars['Int']>;
};

/** Meta connected to a MediaItem */
type WpMediaItemMeta = {
  readonly aperture: Maybe<Scalars['Float']>;
  readonly camera: Maybe<Scalars['String']>;
  readonly caption: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly createdTimestamp: Maybe<Scalars['Int']>;
  readonly credit: Maybe<Scalars['String']>;
  readonly focalLength: Maybe<Scalars['Float']>;
  readonly iso: Maybe<Scalars['Int']>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly orientation: Maybe<Scalars['String']>;
  readonly shutterSpeed: Maybe<Scalars['Float']>;
  readonly title: Maybe<Scalars['String']>;
};

/** Details of an available size for a media item */
type WpMediaSize = {
  /** The file of the for the referenced size */
  readonly file: Maybe<Scalars['String']>;
  /** The filesize of the resource */
  readonly fileSize: Maybe<Scalars['Int']>;
  /** The height of the for the referenced size */
  readonly height: Maybe<Scalars['String']>;
  /** The mime type of the resource */
  readonly mimeType: Maybe<Scalars['String']>;
  /** The referenced size name */
  readonly name: Maybe<Scalars['String']>;
  /** The url of the for the referenced size */
  readonly sourceUrl: Maybe<Scalars['String']>;
  /** The width of the for the referenced size */
  readonly width: Maybe<Scalars['String']>;
};

/** Connection between the User type and the page type */
type WpUserToPageConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpPage>>>;
};

/** The page type */
type WpPage = Node & WpNode & WpContentNode & WpDatabaseIdentifier & WpNodeWithTemplate & WpUniformResourceIdentifiable & WpNodeWithTitle & WpNodeWithContentEditor & WpNodeWithAuthor & WpNodeWithFeaturedImage & WpNodeWithComments & WpNodeWithRevisions & WpNodeWithPageAttributes & WpHierarchicalContentNode & WpMenuItemLinkable & {
  readonly acf: WpPage_Acf;
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  readonly ancestors: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  readonly author: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  readonly authorDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  readonly authorId: Maybe<Scalars['ID']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  readonly wpChildren: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  readonly commentCount: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  readonly commentStatus: Maybe<Scalars['String']>;
  /** Connection between the page type and the Comment type */
  readonly comments: Maybe<WpPageToCommentConnection>;
  readonly content: Scalars['String'];
  /** Connection between the ContentNode type and the ContentType type */
  readonly contentType: Maybe<WpContentNodeToContentTypeConnectionEdge>;
  /** The ID of the node in the database. */
  readonly databaseId: Scalars['Int'];
  readonly date: Scalars['Date'];
  /** The publishing date set in GMT. */
  readonly dateGmt: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  readonly desiredSlug: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  readonly enclosure: Maybe<Scalars['String']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  readonly featuredImage: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  readonly featuredImageDatabaseId: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  readonly featuredImageId: Maybe<Scalars['ID']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  readonly guid: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** Whether this page is set to the static front page. */
  readonly isFrontPage: Scalars['Boolean'];
  /** Whether this page is set to the blog posts page. */
  readonly isPostsPage: Scalars['Boolean'];
  /** Whether this page is set to the privacy page. */
  readonly isPrivacyPage: Scalars['Boolean'];
  /** True if the node is a revision of another node */
  readonly isRevision: Maybe<Scalars['Boolean']>;
  /** The user that most recently edited the node */
  readonly lastEditedBy: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  readonly link: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  readonly menuOrder: Maybe<Scalars['Int']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  readonly modified: Maybe<Scalars['Date']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  readonly modifiedGmt: Maybe<Scalars['Date']>;
  /** The parent of the node. The parent object can be of various types */
  readonly wpParent: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  readonly parentId: Maybe<Scalars['ID']>;
  readonly slug: Scalars['String'];
  /** The current status of the object */
  readonly status: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  readonly template: Maybe<WpContentTemplate>;
  readonly title: Scalars['String'];
  /** URI path for the resource */
  readonly uri: Scalars['String'];
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


/** The page type */
type WpPage_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


/** The page type */
type WpPage_dateGmtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


/** The page type */
type WpPage_modifiedArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


/** The page type */
type WpPage_modifiedGmtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type WpNodeWithContentEditor = {
  /** The content of the post. */
  readonly content: Maybe<Scalars['String']>;
};

type WpNodeWithFeaturedImage = {
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  readonly featuredImage: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  readonly featuredImageDatabaseId: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  readonly featuredImageId: Maybe<Scalars['ID']>;
};

type WpNodeWithRevisions = {
  /** True if the node is a revision of another node */
  readonly isRevision: Maybe<Scalars['Boolean']>;
};

type WpNodeWithPageAttributes = {
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  readonly menuOrder: Maybe<Scalars['Int']>;
};

type WpMenuItemLinkable = {
  /** The unique resource identifier path */
  readonly databaseId: Scalars['Int'];
  /** The unique resource identifier path */
  readonly id: Scalars['ID'];
  /** The unique resource identifier path */
  readonly uri: Scalars['String'];
};

/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
type WpNodeWithFeaturedImageToMediaItemConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpMediaItem>;
};

/** Connection between the NodeWithRevisions type and the ContentNode type */
type WpNodeWithRevisionsToContentNodeConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpContentNode>;
};

/** Field Group */
type WpPage_Acf = {
  readonly description: Maybe<Scalars['String']>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly fieldGroupName: Maybe<Scalars['String']>;
  readonly metaDescription: Maybe<Scalars['String']>;
};

/** Connection between the page type and the Comment type */
type WpPageToCommentConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpComment>>>;
};

/** Connection between the User type and the post type */
type WpUserToPostConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpPost>>>;
};

/** The post type */
type WpPost = Node & WpNode & WpContentNode & WpDatabaseIdentifier & WpNodeWithTemplate & WpUniformResourceIdentifiable & WpNodeWithTitle & WpNodeWithContentEditor & WpNodeWithAuthor & WpNodeWithFeaturedImage & WpNodeWithExcerpt & WpNodeWithComments & WpNodeWithTrackbacks & WpNodeWithRevisions & WpMenuItemLinkable & {
  readonly acf: WpPost_Acf;
  /** Connection between the NodeWithAuthor type and the User type */
  readonly author: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  readonly authorDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  readonly authorId: Maybe<Scalars['ID']>;
  /** Connection between the post type and the category type */
  readonly categories: Maybe<WpPostToCategoryConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  readonly commentCount: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  readonly commentStatus: Maybe<Scalars['String']>;
  /** Connection between the post type and the Comment type */
  readonly comments: Maybe<WpPostToCommentConnection>;
  readonly content: Scalars['String'];
  /** Connection between the ContentNode type and the ContentType type */
  readonly contentType: Maybe<WpContentNodeToContentTypeConnectionEdge>;
  /** The ID of the node in the database. */
  readonly databaseId: Scalars['Int'];
  readonly date: Scalars['Date'];
  /** The publishing date set in GMT. */
  readonly dateGmt: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  readonly desiredSlug: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  readonly enclosure: Maybe<Scalars['String']>;
  /** The excerpt of the post. */
  readonly excerpt: Maybe<Scalars['String']>;
  readonly featuredImage: WpNodeWithFeaturedImageToMediaItemConnectionEdge;
  /** The database identifier for the featured image node assigned to the content node */
  readonly featuredImageDatabaseId: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  readonly featuredImageId: Maybe<Scalars['ID']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  readonly guid: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** True if the node is a revision of another node */
  readonly isRevision: Maybe<Scalars['Boolean']>;
  /** Whether this page is sticky */
  readonly isSticky: Scalars['Boolean'];
  /** The user that most recently edited the node */
  readonly lastEditedBy: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  readonly link: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  readonly modified: Maybe<Scalars['Date']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  readonly modifiedGmt: Maybe<Scalars['Date']>;
  /** Whether the pings are open or closed for this particular post. */
  readonly pingStatus: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  readonly pinged: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Connection between the post type and the postFormat type */
  readonly postFormats: Maybe<WpPostToPostFormatConnection>;
  readonly slug: Scalars['String'];
  /** The current status of the object */
  readonly status: Maybe<Scalars['String']>;
  /** Connection between the post type and the tag type */
  readonly tags: Maybe<WpPostToTagConnection>;
  /** The template assigned to a node of content */
  readonly template: Maybe<WpContentTemplate>;
  /** Connection between the post type and the TermNode type */
  readonly terms: Maybe<WpPostToTermNodeConnection>;
  readonly title: Scalars['String'];
  /** URLs queued to be pinged. */
  readonly toPing: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** URI path for the resource */
  readonly uri: Scalars['String'];
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


/** The post type */
type WpPost_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


/** The post type */
type WpPost_dateGmtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


/** The post type */
type WpPost_modifiedArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


/** The post type */
type WpPost_modifiedGmtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type WpNodeWithExcerpt = {
  /** The excerpt of the post. */
  readonly excerpt: Maybe<Scalars['String']>;
};

type WpNodeWithTrackbacks = {
  /** Whether the pings are open or closed for this particular post. */
  readonly pingStatus: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  readonly pinged: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** URLs queued to be pinged. */
  readonly toPing: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

/** Field Group */
type WpPost_Acf = {
  readonly description: Maybe<Scalars['String']>;
  readonly fieldGroupName: Maybe<Scalars['String']>;
  readonly metaDescription: Maybe<Scalars['String']>;
  readonly metaKeywords: Maybe<Scalars['String']>;
};

/** Connection between the post type and the category type */
type WpPostToCategoryConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpCategory>>>;
};

/** The category type */
type WpCategory = Node & WpNode & WpTermNode & WpDatabaseIdentifier & WpUniformResourceIdentifiable & WpHierarchicalTermNode & WpMenuItemLinkable & {
  /** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  readonly ancestors: Maybe<WpCategoryToAncestorsCategoryConnection>;
  /** Connection between the category type and the category type */
  readonly wpChildren: Maybe<WpCategoryToCategoryConnection>;
  /** Connection between the category type and the ContentNode type */
  readonly contentNodes: Maybe<WpCategoryToContentNodeConnection>;
  /** The number of objects connected to the object */
  readonly count: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  readonly databaseId: Scalars['Int'];
  /** The description of the object */
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** The link to the term */
  readonly link: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  readonly name: Maybe<Scalars['String']>;
  /** Connection between the category type and the category type */
  readonly wpParent: Maybe<WpCategoryToParentCategoryConnectionEdge>;
  /** Database id of the parent node */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  readonly parentId: Maybe<Scalars['ID']>;
  /** Connection between the category type and the post type */
  readonly posts: Maybe<WpCategoryToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  readonly slug: Maybe<Scalars['String']>;
  /** Connection between the category type and the Taxonomy type */
  readonly taxonomy: Maybe<WpCategoryToTaxonomyConnectionEdge>;
  /** The ID of the term group that this term object belongs to */
  readonly termGroupId: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  readonly termTaxonomyId: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  readonly uri: Scalars['String'];
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type WpHierarchicalTermNode = {
  /** Database id of the parent node */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  readonly parentId: Maybe<Scalars['ID']>;
};

/** Connection between the category type and the category type */
type WpCategoryToAncestorsCategoryConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpCategory>>>;
};

/** Connection between the category type and the category type */
type WpCategoryToCategoryConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpCategory>>>;
};

/** Connection between the category type and the ContentNode type */
type WpCategoryToContentNodeConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpContentNode>>>;
};

/** Connection between the category type and the category type */
type WpCategoryToParentCategoryConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpCategory>;
};

/** Connection between the category type and the post type */
type WpCategoryToPostConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpPost>>>;
};

/** Connection between the category type and the Taxonomy type */
type WpCategoryToTaxonomyConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpTaxonomy>;
};

/** Connection between the post type and the Comment type */
type WpPostToCommentConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpComment>>>;
};

/** Connection between the post type and the postFormat type */
type WpPostToPostFormatConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpPostFormat>>>;
};

/** The postFormat type */
type WpPostFormat = Node & WpNode & WpTermNode & WpDatabaseIdentifier & WpUniformResourceIdentifiable & {
  /** Connection between the postFormat type and the ContentNode type */
  readonly contentNodes: Maybe<WpPostFormatToContentNodeConnection>;
  /** The number of objects connected to the object */
  readonly count: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  readonly databaseId: Scalars['Int'];
  /** The description of the object */
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** The link to the term */
  readonly link: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  readonly name: Maybe<Scalars['String']>;
  /** Connection between the postFormat type and the post type */
  readonly posts: Maybe<WpPostFormatToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  readonly slug: Maybe<Scalars['String']>;
  /** Connection between the postFormat type and the Taxonomy type */
  readonly taxonomy: Maybe<WpPostFormatToTaxonomyConnectionEdge>;
  /** The ID of the term group that this term object belongs to */
  readonly termGroupId: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  readonly termTaxonomyId: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  readonly uri: Scalars['String'];
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

/** Connection between the postFormat type and the ContentNode type */
type WpPostFormatToContentNodeConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpContentNode>>>;
};

/** Connection between the postFormat type and the post type */
type WpPostFormatToPostConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpPost>>>;
};

/** Connection between the postFormat type and the Taxonomy type */
type WpPostFormatToTaxonomyConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpTaxonomy>;
};

/** Connection between the post type and the tag type */
type WpPostToTagConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpTag>>>;
};

/** The tag type */
type WpTag = Node & WpNode & WpTermNode & WpDatabaseIdentifier & WpUniformResourceIdentifiable & WpMenuItemLinkable & {
  /** Connection between the tag type and the ContentNode type */
  readonly contentNodes: Maybe<WpTagToContentNodeConnection>;
  /** The number of objects connected to the object */
  readonly count: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  readonly databaseId: Scalars['Int'];
  /** The description of the object */
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** The link to the term */
  readonly link: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  readonly name: Maybe<Scalars['String']>;
  /** Connection between the tag type and the post type */
  readonly posts: Maybe<WpTagToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  readonly slug: Maybe<Scalars['String']>;
  /** Connection between the tag type and the Taxonomy type */
  readonly taxonomy: Maybe<WpTagToTaxonomyConnectionEdge>;
  /** The ID of the term group that this term object belongs to */
  readonly termGroupId: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  readonly termTaxonomyId: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  readonly uri: Scalars['String'];
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

/** Connection between the tag type and the ContentNode type */
type WpTagToContentNodeConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpContentNode>>>;
};

/** Connection between the tag type and the post type */
type WpTagToPostConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpPost>>>;
};

/** Connection between the tag type and the Taxonomy type */
type WpTagToTaxonomyConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpTaxonomy>;
};

/** Connection between the post type and the TermNode type */
type WpPostToTermNodeConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpTermNode>>>;
};

/** Connection between the User type and the UserRole type */
type WpUserToUserRoleConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpUserRole>>>;
};

/** A user role object */
type WpUserRole = Node & WpNode & {
  /** The capabilities that belong to this role */
  readonly capabilities: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** The display name of the role */
  readonly displayName: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** The registered name of the role */
  readonly name: Maybe<Scalars['String']>;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

/** All of the registered settings */
type WpSettings = {
  /** Allow people to submit comments on new posts. */
  readonly discussionSettingsDefaultCommentStatus: Maybe<Scalars['String']>;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  readonly discussionSettingsDefaultPingStatus: Maybe<Scalars['String']>;
  /** A date format for all date strings. */
  readonly generalSettingsDateFormat: Maybe<Scalars['String']>;
  /** Site tagline. */
  readonly generalSettingsDescription: Maybe<Scalars['String']>;
  /** This address is used for admin purposes, like new user notification. */
  readonly generalSettingsEmail: Maybe<Scalars['String']>;
  /** WordPress locale code. */
  readonly generalSettingsLanguage: Maybe<Scalars['String']>;
  /** A day number of the week that the week should start on. */
  readonly generalSettingsStartOfWeek: Maybe<Scalars['Int']>;
  /** A time format for all time strings. */
  readonly generalSettingsTimeFormat: Maybe<Scalars['String']>;
  /** A city in the same timezone as you. */
  readonly generalSettingsTimezone: Maybe<Scalars['String']>;
  /** Site title. */
  readonly generalSettingsTitle: Maybe<Scalars['String']>;
  /** Site URL. */
  readonly generalSettingsUrl: Maybe<Scalars['String']>;
  /** Blog pages show at most. */
  readonly readingSettingsPostsPerPage: Maybe<Scalars['Int']>;
  /** Default post category. */
  readonly writingSettingsDefaultCategory: Maybe<Scalars['Int']>;
  /** Default post format. */
  readonly writingSettingsDefaultPostFormat: Maybe<Scalars['String']>;
  /** Convert emoticons like :-) and :-P to graphics on display. */
  readonly writingSettingsUseSmilies: Maybe<Scalars['Boolean']>;
};

/** The discussion setting type */
type WpDiscussionSettings = {
  /** Allow people to submit comments on new posts. */
  readonly defaultCommentStatus: Maybe<Scalars['String']>;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  readonly defaultPingStatus: Maybe<Scalars['String']>;
};

/** The general setting type */
type WpGeneralSettings = {
  /** A date format for all date strings. */
  readonly dateFormat: Maybe<Scalars['String']>;
  /** Site tagline. */
  readonly description: Maybe<Scalars['String']>;
  /** This address is used for admin purposes, like new user notification. */
  readonly email: Maybe<Scalars['String']>;
  /** WordPress locale code. */
  readonly language: Maybe<Scalars['String']>;
  /** A day number of the week that the week should start on. */
  readonly startOfWeek: Maybe<Scalars['Int']>;
  /** A time format for all time strings. */
  readonly timeFormat: Maybe<Scalars['String']>;
  /** A city in the same timezone as you. */
  readonly timezone: Maybe<Scalars['String']>;
  /** Site title. */
  readonly title: Maybe<Scalars['String']>;
  /** Site URL. */
  readonly url: Maybe<Scalars['String']>;
};

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
type WpMenu = Node & WpNode & WpDatabaseIdentifier & {
  /** The number of items in the menu */
  readonly count: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly locations: Maybe<ReadonlyArray<Maybe<WpMenuLocationEnum>>>;
  /** Connection between the Menu type and the MenuItem type */
  readonly menuItems: Maybe<WpMenuToMenuItemConnection>;
  /** Display name of the menu. Equivalent to WP_Term-&gt;name. */
  readonly name: Maybe<Scalars['String']>;
  /** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
  readonly slug: Maybe<Scalars['String']>;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

/** Registered menu locations */
type WpMenuLocationEnum =
  | 'EMPTY';

/** Connection between the Menu type and the MenuItem type */
type WpMenuToMenuItemConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpMenuItem>>>;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
type WpMenuItem = Node & WpNode & WpDatabaseIdentifier & {
  /** Connection between the MenuItem type and the MenuItem type */
  readonly childItems: Maybe<WpMenuItemToMenuItemConnection>;
  /** Connection from MenuItem to it&#039;s connected node */
  readonly connectedNode: Maybe<WpMenuItemToMenuItemLinkableConnectionEdge>;
  /** Class attribute for the menu item link */
  readonly cssClasses: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
  /** Description of the menu item. */
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** Label or title of the menu item. */
  readonly label: Maybe<Scalars['String']>;
  /** Link relationship (XFN) of the menu item. */
  readonly linkRelationship: Maybe<Scalars['String']>;
  readonly locations: Maybe<ReadonlyArray<Maybe<WpMenuLocationEnum>>>;
  /** The Menu a MenuItem is part of */
  readonly menu: Maybe<WpMenuItemToMenuConnectionEdge>;
  /** Menu item order */
  readonly order: Maybe<Scalars['Int']>;
  /** The database id of the parent menu item or null if it is the root */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent nav menu item object. */
  readonly parentId: Maybe<Scalars['ID']>;
  /** Path for the resource. Relative path for internal resources. Absolute path for external resources. */
  readonly path: Scalars['String'];
  /** Target attribute for the menu item link. */
  readonly target: Maybe<Scalars['String']>;
  /** Title attribute for the menu item link */
  readonly title: Maybe<Scalars['String']>;
  /** URL or destination of the menu item. */
  readonly url: Maybe<Scalars['String']>;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

/** Connection between the MenuItem type and the MenuItem type */
type WpMenuItemToMenuItemConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpMenuItem>>>;
};

/** Connection between the MenuItem type and the MenuItemLinkable type */
type WpMenuItemToMenuItemLinkableConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpMenuItemLinkable>;
};

/** The shelf type */
type WpShelf = Node & WpNode & WpContentNode & WpDatabaseIdentifier & WpNodeWithTemplate & WpUniformResourceIdentifiable & WpNodeWithTitle & WpNodeWithContentEditor & WpNodeWithFeaturedImage & WpMenuItemLinkable & {
  readonly acf: WpShelf_Acf;
  readonly content: Scalars['String'];
  /** Connection between the ContentNode type and the ContentType type */
  readonly contentType: Maybe<WpContentNodeToContentTypeConnectionEdge>;
  /** The ID of the node in the database. */
  readonly databaseId: Scalars['Int'];
  readonly date: Scalars['Date'];
  /** The publishing date set in GMT. */
  readonly dateGmt: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  readonly desiredSlug: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  readonly enclosure: Maybe<Scalars['String']>;
  readonly featuredImage: WpNodeWithFeaturedImageToMediaItemConnectionEdge;
  /** The database identifier for the featured image node assigned to the content node */
  readonly featuredImageDatabaseId: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  readonly featuredImageId: Maybe<Scalars['ID']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  readonly guid: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** The user that most recently edited the node */
  readonly lastEditedBy: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  readonly link: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  readonly modified: Maybe<Scalars['Date']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  readonly modifiedGmt: Maybe<Scalars['Date']>;
  readonly slug: Scalars['String'];
  /** The current status of the object */
  readonly status: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  readonly template: Maybe<WpContentTemplate>;
  readonly title: Scalars['String'];
  /** URI path for the resource */
  readonly uri: Scalars['String'];
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


/** The shelf type */
type WpShelf_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


/** The shelf type */
type WpShelf_dateGmtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


/** The shelf type */
type WpShelf_modifiedArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


/** The shelf type */
type WpShelf_modifiedGmtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Field Group */
type WpShelf_Acf = {
  readonly description: Maybe<Scalars['String']>;
  readonly fieldGroupName: Maybe<Scalars['String']>;
  readonly metaDescription: Maybe<Scalars['String']>;
  readonly metaKeywords: Maybe<Scalars['String']>;
};

/** Connection between the MenuItem type and the Menu type */
type WpMenuItemToMenuConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpMenu>;
};

/** The reading setting type */
type WpReadingSettings = {
  /** Blog pages show at most. */
  readonly postsPerPage: Maybe<Scalars['Int']>;
};

/** Information needed by gatsby-source-wordpress. */
type WpWPGatsby = {
  /** Returns wether or not pretty permalinks are enabled. */
  readonly arePrettyPermalinksEnabled: Maybe<Scalars['Boolean']>;
};

/** The writing setting type */
type WpWritingSettings = {
  /** Default post category. */
  readonly defaultCategory: Maybe<Scalars['Int']>;
  /** Default post format. */
  readonly defaultPostFormat: Maybe<Scalars['String']>;
  /** Convert emoticons like :-) and :-P to graphics on display. */
  readonly useSmilies: Maybe<Scalars['Boolean']>;
};

/** The template assigned to the node */
type WpDefaultTemplate = WpContentTemplate & {
  /** The name of the template */
  readonly templateName: Maybe<Scalars['String']>;
};

/** Non-node WPGraphQL root fields. */
type Wp = Node & {
  /** Entry point to get all settings for the site */
  readonly allSettings: Maybe<WpSettings>;
  readonly discussionSettings: Maybe<WpDiscussionSettings>;
  readonly generalSettings: Maybe<WpGeneralSettings>;
  readonly readingSettings: Maybe<WpReadingSettings>;
  /** Information needed by gatsby-source-wordpress. */
  readonly wpGatsby: Maybe<WpWPGatsby>;
  readonly writingSettings: Maybe<WpWritingSettings>;
  readonly nodeType: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type ImageFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ImageCropFocus =
  | 'CENTER'
  | 1
  | 5
  | 2
  | 6
  | 3
  | 7
  | 4
  | 8
  | 16
  | 17;

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'white'
  | 'left'
  | 'right'
  | 'minority'
  | 'majority';

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AVIFOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};


type ImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: Maybe<ImageFormat>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SitePlugin = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

type SitePluginPluginOptions = {
  readonly url: Maybe<Scalars['String']>;
  readonly verbose: Maybe<Scalars['Boolean']>;
  readonly name: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly outputPath: Maybe<Scalars['String']>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchema>;
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocuments>;
  readonly components: Maybe<Scalars['String']>;
  readonly utils: Maybe<Scalars['String']>;
  readonly pages: Maybe<Scalars['String']>;
  readonly templates: Maybe<Scalars['String']>;
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly output: Maybe<Scalars['String']>;
  readonly createLinkInHead: Maybe<Scalars['Boolean']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsEmitSchema = {
  readonly src___generated___gatsby_introspection_json: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsEmitPluginDocuments = {
  readonly src___generated___gatsby_plugin_documents_graphql: Maybe<Scalars['Boolean']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type WpTermNode = {
  /** The number of objects connected to the object */
  readonly count: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  readonly databaseId: Scalars['Int'];
  /** The description of the object */
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** The link to the term */
  readonly link: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  readonly name: Maybe<Scalars['String']>;
  /** An alphanumeric identifier for the object unique to its type. */
  readonly slug: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  readonly termGroupId: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  readonly termTaxonomyId: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  readonly uri: Scalars['String'];
  readonly nodeType: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly wpContentNode: Maybe<WpContentNode>;
  readonly allWpContentNode: WpContentNodeConnection;
  readonly wpContentType: Maybe<WpContentType>;
  readonly allWpContentType: WpContentTypeConnection;
  readonly wpTaxonomy: Maybe<WpTaxonomy>;
  readonly allWpTaxonomy: WpTaxonomyConnection;
  readonly wpUser: Maybe<WpUser>;
  readonly allWpUser: WpUserConnection;
  readonly wpComment: Maybe<WpComment>;
  readonly allWpComment: WpCommentConnection;
  readonly wpMediaItem: Maybe<WpMediaItem>;
  readonly allWpMediaItem: WpMediaItemConnection;
  readonly wpPage: Maybe<WpPage>;
  readonly allWpPage: WpPageConnection;
  readonly wpPost: Maybe<WpPost>;
  readonly allWpPost: WpPostConnection;
  readonly wpTermNode: Maybe<WpTermNode>;
  readonly allWpTermNode: WpTermNodeConnection;
  readonly wpCategory: Maybe<WpCategory>;
  readonly allWpCategory: WpCategoryConnection;
  readonly wpPostFormat: Maybe<WpPostFormat>;
  readonly allWpPostFormat: WpPostFormatConnection;
  readonly wpTag: Maybe<WpTag>;
  readonly allWpTag: WpTagConnection;
  readonly wpUserRole: Maybe<WpUserRole>;
  readonly allWpUserRole: WpUserRoleConnection;
  readonly wpMenu: Maybe<WpMenu>;
  readonly allWpMenu: WpMenuConnection;
  readonly wpMenuItem: Maybe<WpMenuItem>;
  readonly allWpMenuItem: WpMenuItemConnection;
  readonly wpShelf: Maybe<WpShelf>;
  readonly allWpShelf: WpShelfConnection;
  readonly wp: Maybe<Wp>;
  readonly allWp: WpConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wpContentNodeArgs = {
  contentType: Maybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  databaseId: Maybe<IntQueryOperatorInput>;
  date: Maybe<DateQueryOperatorInput>;
  dateGmt: Maybe<DateQueryOperatorInput>;
  desiredSlug: Maybe<StringQueryOperatorInput>;
  enclosure: Maybe<StringQueryOperatorInput>;
  guid: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  lastEditedBy: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link: Maybe<StringQueryOperatorInput>;
  modified: Maybe<DateQueryOperatorInput>;
  modifiedGmt: Maybe<DateQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  status: Maybe<StringQueryOperatorInput>;
  template: Maybe<WpContentTemplateFilterInput>;
  uri: Maybe<StringQueryOperatorInput>;
  nodeType: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allWpContentNodeArgs = {
  filter: Maybe<WpContentNodeFilterInput>;
  sort: Maybe<WpContentNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wpContentTypeArgs = {
  archivePath: Maybe<StringQueryOperatorInput>;
  canExport: Maybe<BooleanQueryOperatorInput>;
  connectedTaxonomies: Maybe<WpContentTypeToTaxonomyConnectionFilterInput>;
  contentNodes: Maybe<WpContentTypeToContentNodeConnectionFilterInput>;
  deleteWithUser: Maybe<BooleanQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  excludeFromSearch: Maybe<BooleanQueryOperatorInput>;
  graphqlPluralName: Maybe<StringQueryOperatorInput>;
  graphqlSingleName: Maybe<StringQueryOperatorInput>;
  hasArchive: Maybe<BooleanQueryOperatorInput>;
  hierarchical: Maybe<BooleanQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  isFrontPage: Maybe<BooleanQueryOperatorInput>;
  isPostsPage: Maybe<BooleanQueryOperatorInput>;
  label: Maybe<StringQueryOperatorInput>;
  labels: Maybe<WpPostTypeLabelDetailsFilterInput>;
  menuIcon: Maybe<StringQueryOperatorInput>;
  menuPosition: Maybe<IntQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  public: Maybe<BooleanQueryOperatorInput>;
  publiclyQueryable: Maybe<BooleanQueryOperatorInput>;
  restBase: Maybe<StringQueryOperatorInput>;
  restControllerClass: Maybe<StringQueryOperatorInput>;
  showInAdminBar: Maybe<BooleanQueryOperatorInput>;
  showInGraphql: Maybe<BooleanQueryOperatorInput>;
  showInMenu: Maybe<BooleanQueryOperatorInput>;
  showInNavMenus: Maybe<BooleanQueryOperatorInput>;
  showInRest: Maybe<BooleanQueryOperatorInput>;
  showUi: Maybe<BooleanQueryOperatorInput>;
  uri: Maybe<StringQueryOperatorInput>;
  nodeType: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allWpContentTypeArgs = {
  filter: Maybe<WpContentTypeFilterInput>;
  sort: Maybe<WpContentTypeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wpTaxonomyArgs = {
  archivePath: Maybe<StringQueryOperatorInput>;
  connectedContentTypes: Maybe<WpTaxonomyToContentTypeConnectionFilterInput>;
  description: Maybe<StringQueryOperatorInput>;
  graphqlPluralName: Maybe<StringQueryOperatorInput>;
  graphqlSingleName: Maybe<StringQueryOperatorInput>;
  hierarchical: Maybe<BooleanQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  label: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  public: Maybe<BooleanQueryOperatorInput>;
  restBase: Maybe<StringQueryOperatorInput>;
  restControllerClass: Maybe<StringQueryOperatorInput>;
  showCloud: Maybe<BooleanQueryOperatorInput>;
  showInAdminColumn: Maybe<BooleanQueryOperatorInput>;
  showInGraphql: Maybe<BooleanQueryOperatorInput>;
  showInMenu: Maybe<BooleanQueryOperatorInput>;
  showInNavMenus: Maybe<BooleanQueryOperatorInput>;
  showInQuickEdit: Maybe<BooleanQueryOperatorInput>;
  showInRest: Maybe<BooleanQueryOperatorInput>;
  showUi: Maybe<BooleanQueryOperatorInput>;
  nodeType: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allWpTaxonomyArgs = {
  filter: Maybe<WpTaxonomyFilterInput>;
  sort: Maybe<WpTaxonomySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wpUserArgs = {
  avatar: Maybe<WpAvatarFilterInput>;
  capKey: Maybe<StringQueryOperatorInput>;
  capabilities: Maybe<StringQueryOperatorInput>;
  comments: Maybe<WpUserToCommentConnectionFilterInput>;
  databaseId: Maybe<IntQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  email: Maybe<StringQueryOperatorInput>;
  extraCapabilities: Maybe<StringQueryOperatorInput>;
  firstName: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  lastName: Maybe<StringQueryOperatorInput>;
  locale: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  nicename: Maybe<StringQueryOperatorInput>;
  nickname: Maybe<StringQueryOperatorInput>;
  pages: Maybe<WpUserToPageConnectionFilterInput>;
  posts: Maybe<WpUserToPostConnectionFilterInput>;
  registeredDate: Maybe<StringQueryOperatorInput>;
  roles: Maybe<WpUserToUserRoleConnectionFilterInput>;
  slug: Maybe<StringQueryOperatorInput>;
  uri: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  username: Maybe<StringQueryOperatorInput>;
  nodeType: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allWpUserArgs = {
  filter: Maybe<WpUserFilterInput>;
  sort: Maybe<WpUserSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wpCommentArgs = {
  agent: Maybe<StringQueryOperatorInput>;
  approved: Maybe<BooleanQueryOperatorInput>;
  author: Maybe<WpCommentToCommenterConnectionEdgeFilterInput>;
  authorIp: Maybe<StringQueryOperatorInput>;
  commentedOn: Maybe<WpCommentToContentNodeConnectionEdgeFilterInput>;
  content: Maybe<StringQueryOperatorInput>;
  databaseId: Maybe<IntQueryOperatorInput>;
  date: Maybe<DateQueryOperatorInput>;
  dateGmt: Maybe<DateQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  karma: Maybe<IntQueryOperatorInput>;
  wpParent: Maybe<WpCommentToParentCommentConnectionEdgeFilterInput>;
  parentDatabaseId: Maybe<IntQueryOperatorInput>;
  parentId: Maybe<IDQueryOperatorInput>;
  replies: Maybe<WpCommentToCommentConnectionFilterInput>;
  type: Maybe<StringQueryOperatorInput>;
  nodeType: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allWpCommentArgs = {
  filter: Maybe<WpCommentFilterInput>;
  sort: Maybe<WpCommentSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wpMediaItemArgs = {
  altText: Maybe<StringQueryOperatorInput>;
  ancestors: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput>;
  author: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId: Maybe<IntQueryOperatorInput>;
  authorId: Maybe<IDQueryOperatorInput>;
  caption: Maybe<StringQueryOperatorInput>;
  wpChildren: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput>;
  commentCount: Maybe<IntQueryOperatorInput>;
  commentStatus: Maybe<StringQueryOperatorInput>;
  comments: Maybe<WpMediaItemToCommentConnectionFilterInput>;
  contentType: Maybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  databaseId: Maybe<IntQueryOperatorInput>;
  date: Maybe<DateQueryOperatorInput>;
  dateGmt: Maybe<DateQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  desiredSlug: Maybe<StringQueryOperatorInput>;
  enclosure: Maybe<StringQueryOperatorInput>;
  fileSize: Maybe<IntQueryOperatorInput>;
  guid: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  lastEditedBy: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link: Maybe<StringQueryOperatorInput>;
  mediaDetails: Maybe<WpMediaDetailsFilterInput>;
  mediaItemUrl: Maybe<StringQueryOperatorInput>;
  mediaType: Maybe<StringQueryOperatorInput>;
  mimeType: Maybe<StringQueryOperatorInput>;
  modified: Maybe<DateQueryOperatorInput>;
  modifiedGmt: Maybe<DateQueryOperatorInput>;
  wpParent: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput>;
  parentDatabaseId: Maybe<IntQueryOperatorInput>;
  parentId: Maybe<IDQueryOperatorInput>;
  sizes: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  sourceUrl: Maybe<StringQueryOperatorInput>;
  srcSet: Maybe<StringQueryOperatorInput>;
  status: Maybe<StringQueryOperatorInput>;
  template: Maybe<WpContentTemplateFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  uri: Maybe<StringQueryOperatorInput>;
  nodeType: Maybe<StringQueryOperatorInput>;
  remoteFile: Maybe<FileFilterInput>;
  localFile: Maybe<FileFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allWpMediaItemArgs = {
  filter: Maybe<WpMediaItemFilterInput>;
  sort: Maybe<WpMediaItemSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wpPageArgs = {
  acf: Maybe<WpPage_AcfFilterInput>;
  ancestors: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput>;
  author: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId: Maybe<IntQueryOperatorInput>;
  authorId: Maybe<IDQueryOperatorInput>;
  wpChildren: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput>;
  commentCount: Maybe<IntQueryOperatorInput>;
  commentStatus: Maybe<StringQueryOperatorInput>;
  comments: Maybe<WpPageToCommentConnectionFilterInput>;
  content: Maybe<StringQueryOperatorInput>;
  contentType: Maybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  databaseId: Maybe<IntQueryOperatorInput>;
  date: Maybe<DateQueryOperatorInput>;
  dateGmt: Maybe<DateQueryOperatorInput>;
  desiredSlug: Maybe<StringQueryOperatorInput>;
  enclosure: Maybe<StringQueryOperatorInput>;
  featuredImage: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  featuredImageDatabaseId: Maybe<IntQueryOperatorInput>;
  featuredImageId: Maybe<IDQueryOperatorInput>;
  guid: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  isFrontPage: Maybe<BooleanQueryOperatorInput>;
  isPostsPage: Maybe<BooleanQueryOperatorInput>;
  isPrivacyPage: Maybe<BooleanQueryOperatorInput>;
  isRevision: Maybe<BooleanQueryOperatorInput>;
  lastEditedBy: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link: Maybe<StringQueryOperatorInput>;
  menuOrder: Maybe<IntQueryOperatorInput>;
  modified: Maybe<DateQueryOperatorInput>;
  modifiedGmt: Maybe<DateQueryOperatorInput>;
  wpParent: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput>;
  parentDatabaseId: Maybe<IntQueryOperatorInput>;
  parentId: Maybe<IDQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  status: Maybe<StringQueryOperatorInput>;
  template: Maybe<WpContentTemplateFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  uri: Maybe<StringQueryOperatorInput>;
  nodeType: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allWpPageArgs = {
  filter: Maybe<WpPageFilterInput>;
  sort: Maybe<WpPageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wpPostArgs = {
  acf: Maybe<WpPost_AcfFilterInput>;
  author: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId: Maybe<IntQueryOperatorInput>;
  authorId: Maybe<IDQueryOperatorInput>;
  categories: Maybe<WpPostToCategoryConnectionFilterInput>;
  commentCount: Maybe<IntQueryOperatorInput>;
  commentStatus: Maybe<StringQueryOperatorInput>;
  comments: Maybe<WpPostToCommentConnectionFilterInput>;
  content: Maybe<StringQueryOperatorInput>;
  contentType: Maybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  databaseId: Maybe<IntQueryOperatorInput>;
  date: Maybe<DateQueryOperatorInput>;
  dateGmt: Maybe<DateQueryOperatorInput>;
  desiredSlug: Maybe<StringQueryOperatorInput>;
  enclosure: Maybe<StringQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  featuredImage: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  featuredImageDatabaseId: Maybe<IntQueryOperatorInput>;
  featuredImageId: Maybe<IDQueryOperatorInput>;
  guid: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  isRevision: Maybe<BooleanQueryOperatorInput>;
  isSticky: Maybe<BooleanQueryOperatorInput>;
  lastEditedBy: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link: Maybe<StringQueryOperatorInput>;
  modified: Maybe<DateQueryOperatorInput>;
  modifiedGmt: Maybe<DateQueryOperatorInput>;
  pingStatus: Maybe<StringQueryOperatorInput>;
  pinged: Maybe<StringQueryOperatorInput>;
  postFormats: Maybe<WpPostToPostFormatConnectionFilterInput>;
  slug: Maybe<StringQueryOperatorInput>;
  status: Maybe<StringQueryOperatorInput>;
  tags: Maybe<WpPostToTagConnectionFilterInput>;
  template: Maybe<WpContentTemplateFilterInput>;
  terms: Maybe<WpPostToTermNodeConnectionFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  toPing: Maybe<StringQueryOperatorInput>;
  uri: Maybe<StringQueryOperatorInput>;
  nodeType: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allWpPostArgs = {
  filter: Maybe<WpPostFilterInput>;
  sort: Maybe<WpPostSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wpTermNodeArgs = {
  count: Maybe<IntQueryOperatorInput>;
  databaseId: Maybe<IntQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  link: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  termGroupId: Maybe<IntQueryOperatorInput>;
  termTaxonomyId: Maybe<IntQueryOperatorInput>;
  uri: Maybe<StringQueryOperatorInput>;
  nodeType: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allWpTermNodeArgs = {
  filter: Maybe<WpTermNodeFilterInput>;
  sort: Maybe<WpTermNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wpCategoryArgs = {
  ancestors: Maybe<WpCategoryToAncestorsCategoryConnectionFilterInput>;
  wpChildren: Maybe<WpCategoryToCategoryConnectionFilterInput>;
  contentNodes: Maybe<WpCategoryToContentNodeConnectionFilterInput>;
  count: Maybe<IntQueryOperatorInput>;
  databaseId: Maybe<IntQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  link: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  wpParent: Maybe<WpCategoryToParentCategoryConnectionEdgeFilterInput>;
  parentDatabaseId: Maybe<IntQueryOperatorInput>;
  parentId: Maybe<IDQueryOperatorInput>;
  posts: Maybe<WpCategoryToPostConnectionFilterInput>;
  slug: Maybe<StringQueryOperatorInput>;
  taxonomy: Maybe<WpCategoryToTaxonomyConnectionEdgeFilterInput>;
  termGroupId: Maybe<IntQueryOperatorInput>;
  termTaxonomyId: Maybe<IntQueryOperatorInput>;
  uri: Maybe<StringQueryOperatorInput>;
  nodeType: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allWpCategoryArgs = {
  filter: Maybe<WpCategoryFilterInput>;
  sort: Maybe<WpCategorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wpPostFormatArgs = {
  contentNodes: Maybe<WpPostFormatToContentNodeConnectionFilterInput>;
  count: Maybe<IntQueryOperatorInput>;
  databaseId: Maybe<IntQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  link: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  posts: Maybe<WpPostFormatToPostConnectionFilterInput>;
  slug: Maybe<StringQueryOperatorInput>;
  taxonomy: Maybe<WpPostFormatToTaxonomyConnectionEdgeFilterInput>;
  termGroupId: Maybe<IntQueryOperatorInput>;
  termTaxonomyId: Maybe<IntQueryOperatorInput>;
  uri: Maybe<StringQueryOperatorInput>;
  nodeType: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allWpPostFormatArgs = {
  filter: Maybe<WpPostFormatFilterInput>;
  sort: Maybe<WpPostFormatSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wpTagArgs = {
  contentNodes: Maybe<WpTagToContentNodeConnectionFilterInput>;
  count: Maybe<IntQueryOperatorInput>;
  databaseId: Maybe<IntQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  link: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  posts: Maybe<WpTagToPostConnectionFilterInput>;
  slug: Maybe<StringQueryOperatorInput>;
  taxonomy: Maybe<WpTagToTaxonomyConnectionEdgeFilterInput>;
  termGroupId: Maybe<IntQueryOperatorInput>;
  termTaxonomyId: Maybe<IntQueryOperatorInput>;
  uri: Maybe<StringQueryOperatorInput>;
  nodeType: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allWpTagArgs = {
  filter: Maybe<WpTagFilterInput>;
  sort: Maybe<WpTagSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wpUserRoleArgs = {
  capabilities: Maybe<StringQueryOperatorInput>;
  displayName: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  nodeType: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allWpUserRoleArgs = {
  filter: Maybe<WpUserRoleFilterInput>;
  sort: Maybe<WpUserRoleSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wpMenuArgs = {
  count: Maybe<IntQueryOperatorInput>;
  databaseId: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  locations: Maybe<WpMenuLocationEnumQueryOperatorInput>;
  menuItems: Maybe<WpMenuToMenuItemConnectionFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  nodeType: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allWpMenuArgs = {
  filter: Maybe<WpMenuFilterInput>;
  sort: Maybe<WpMenuSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wpMenuItemArgs = {
  childItems: Maybe<WpMenuItemToMenuItemConnectionFilterInput>;
  connectedNode: Maybe<WpMenuItemToMenuItemLinkableConnectionEdgeFilterInput>;
  cssClasses: Maybe<StringQueryOperatorInput>;
  databaseId: Maybe<IntQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  label: Maybe<StringQueryOperatorInput>;
  linkRelationship: Maybe<StringQueryOperatorInput>;
  locations: Maybe<WpMenuLocationEnumQueryOperatorInput>;
  menu: Maybe<WpMenuItemToMenuConnectionEdgeFilterInput>;
  order: Maybe<IntQueryOperatorInput>;
  parentDatabaseId: Maybe<IntQueryOperatorInput>;
  parentId: Maybe<IDQueryOperatorInput>;
  path: Maybe<StringQueryOperatorInput>;
  target: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  nodeType: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allWpMenuItemArgs = {
  filter: Maybe<WpMenuItemFilterInput>;
  sort: Maybe<WpMenuItemSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wpShelfArgs = {
  acf: Maybe<WpShelf_AcfFilterInput>;
  content: Maybe<StringQueryOperatorInput>;
  contentType: Maybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  databaseId: Maybe<IntQueryOperatorInput>;
  date: Maybe<DateQueryOperatorInput>;
  dateGmt: Maybe<DateQueryOperatorInput>;
  desiredSlug: Maybe<StringQueryOperatorInput>;
  enclosure: Maybe<StringQueryOperatorInput>;
  featuredImage: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  featuredImageDatabaseId: Maybe<IntQueryOperatorInput>;
  featuredImageId: Maybe<IDQueryOperatorInput>;
  guid: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  lastEditedBy: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link: Maybe<StringQueryOperatorInput>;
  modified: Maybe<DateQueryOperatorInput>;
  modifiedGmt: Maybe<DateQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  status: Maybe<StringQueryOperatorInput>;
  template: Maybe<WpContentTemplateFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  uri: Maybe<StringQueryOperatorInput>;
  nodeType: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allWpShelfArgs = {
  filter: Maybe<WpShelfFilterInput>;
  sort: Maybe<WpShelfSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wpArgs = {
  allSettings: Maybe<WpSettingsFilterInput>;
  discussionSettings: Maybe<WpDiscussionSettingsFilterInput>;
  generalSettings: Maybe<WpGeneralSettingsFilterInput>;
  readingSettings: Maybe<WpReadingSettingsFilterInput>;
  wpGatsby: Maybe<WpWPGatsbyFilterInput>;
  writingSettings: Maybe<WpWritingSettingsFilterInput>;
  nodeType: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allWpArgs = {
  filter: Maybe<WpFilterInput>;
  sort: Maybe<WpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
};

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'url'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.original.width'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.children'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<StringQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.siteUrl'
  | 'siteMetadata.author'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePageContextFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly limit: Maybe<IntQueryOperatorInput>;
  readonly skip: Maybe<IntQueryOperatorInput>;
  readonly numPages: Maybe<IntQueryOperatorInput>;
  readonly currentPage: Maybe<IntQueryOperatorInput>;
};

type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly verbose: Maybe<BooleanQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly outputPath: Maybe<StringQueryOperatorInput>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchemaFilterInput>;
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocumentsFilterInput>;
  readonly components: Maybe<StringQueryOperatorInput>;
  readonly utils: Maybe<StringQueryOperatorInput>;
  readonly pages: Maybe<StringQueryOperatorInput>;
  readonly templates: Maybe<StringQueryOperatorInput>;
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly output: Maybe<StringQueryOperatorInput>;
  readonly createLinkInHead: Maybe<BooleanQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsEmitSchemaFilterInput = {
  readonly src___generated___gatsby_introspection_json: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsEmitPluginDocumentsFilterInput = {
  readonly src___generated___gatsby_plugin_documents_graphql: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'isCreatedByStatefulCreatePages'
  | 'context.id'
  | 'context.limit'
  | 'context.skip'
  | 'context.numPages'
  | 'context.currentPage'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.pluginOptions.url'
  | 'pluginCreator.pluginOptions.verbose'
  | 'pluginCreator.pluginOptions.name'
  | 'pluginCreator.pluginOptions.path'
  | 'pluginCreator.pluginOptions.outputPath'
  | 'pluginCreator.pluginOptions.emitSchema.src___generated___gatsby_introspection_json'
  | 'pluginCreator.pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql'
  | 'pluginCreator.pluginOptions.components'
  | 'pluginCreator.pluginOptions.utils'
  | 'pluginCreator.pluginOptions.pages'
  | 'pluginCreator.pluginOptions.templates'
  | 'pluginCreator.pluginOptions.base64Width'
  | 'pluginCreator.pluginOptions.stripMetadata'
  | 'pluginCreator.pluginOptions.defaultQuality'
  | 'pluginCreator.pluginOptions.failOnError'
  | 'pluginCreator.pluginOptions.output'
  | 'pluginCreator.pluginOptions.createLinkInHead'
  | 'pluginCreator.pluginOptions.pathCheck'
  | 'pluginCreator.pluginOptions.allExtensions'
  | 'pluginCreator.pluginOptions.isTSX'
  | 'pluginCreator.pluginOptions.jsxPragma'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.packageJson.name'
  | 'pluginCreator.packageJson.description'
  | 'pluginCreator.packageJson.version'
  | 'pluginCreator.packageJson.main'
  | 'pluginCreator.packageJson.license'
  | 'pluginCreator.packageJson.dependencies'
  | 'pluginCreator.packageJson.dependencies.name'
  | 'pluginCreator.packageJson.dependencies.version'
  | 'pluginCreator.packageJson.devDependencies'
  | 'pluginCreator.packageJson.devDependencies.name'
  | 'pluginCreator.packageJson.devDependencies.version'
  | 'pluginCreator.packageJson.peerDependencies'
  | 'pluginCreator.packageJson.peerDependencies.name'
  | 'pluginCreator.packageJson.peerDependencies.version'
  | 'pluginCreator.packageJson.keywords'
  | 'pluginCreatorId'
  | 'componentPath';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  readonly componentPath: Maybe<StringQueryOperatorInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type WpContentNodeToContentTypeConnectionEdgeFilterInput = {
  readonly node: Maybe<WpContentTypeFilterInput>;
};

type WpContentTypeFilterInput = {
  readonly archivePath: Maybe<StringQueryOperatorInput>;
  readonly canExport: Maybe<BooleanQueryOperatorInput>;
  readonly connectedTaxonomies: Maybe<WpContentTypeToTaxonomyConnectionFilterInput>;
  readonly contentNodes: Maybe<WpContentTypeToContentNodeConnectionFilterInput>;
  readonly deleteWithUser: Maybe<BooleanQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly excludeFromSearch: Maybe<BooleanQueryOperatorInput>;
  readonly graphqlPluralName: Maybe<StringQueryOperatorInput>;
  readonly graphqlSingleName: Maybe<StringQueryOperatorInput>;
  readonly hasArchive: Maybe<BooleanQueryOperatorInput>;
  readonly hierarchical: Maybe<BooleanQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly isFrontPage: Maybe<BooleanQueryOperatorInput>;
  readonly isPostsPage: Maybe<BooleanQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly labels: Maybe<WpPostTypeLabelDetailsFilterInput>;
  readonly menuIcon: Maybe<StringQueryOperatorInput>;
  readonly menuPosition: Maybe<IntQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly public: Maybe<BooleanQueryOperatorInput>;
  readonly publiclyQueryable: Maybe<BooleanQueryOperatorInput>;
  readonly restBase: Maybe<StringQueryOperatorInput>;
  readonly restControllerClass: Maybe<StringQueryOperatorInput>;
  readonly showInAdminBar: Maybe<BooleanQueryOperatorInput>;
  readonly showInGraphql: Maybe<BooleanQueryOperatorInput>;
  readonly showInMenu: Maybe<BooleanQueryOperatorInput>;
  readonly showInNavMenus: Maybe<BooleanQueryOperatorInput>;
  readonly showInRest: Maybe<BooleanQueryOperatorInput>;
  readonly showUi: Maybe<BooleanQueryOperatorInput>;
  readonly uri: Maybe<StringQueryOperatorInput>;
  readonly nodeType: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type WpContentTypeToTaxonomyConnectionFilterInput = {
  readonly nodes: Maybe<WpTaxonomyFilterListInput>;
};

type WpTaxonomyFilterListInput = {
  readonly elemMatch: Maybe<WpTaxonomyFilterInput>;
};

type WpTaxonomyFilterInput = {
  readonly archivePath: Maybe<StringQueryOperatorInput>;
  readonly connectedContentTypes: Maybe<WpTaxonomyToContentTypeConnectionFilterInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly graphqlPluralName: Maybe<StringQueryOperatorInput>;
  readonly graphqlSingleName: Maybe<StringQueryOperatorInput>;
  readonly hierarchical: Maybe<BooleanQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly public: Maybe<BooleanQueryOperatorInput>;
  readonly restBase: Maybe<StringQueryOperatorInput>;
  readonly restControllerClass: Maybe<StringQueryOperatorInput>;
  readonly showCloud: Maybe<BooleanQueryOperatorInput>;
  readonly showInAdminColumn: Maybe<BooleanQueryOperatorInput>;
  readonly showInGraphql: Maybe<BooleanQueryOperatorInput>;
  readonly showInMenu: Maybe<BooleanQueryOperatorInput>;
  readonly showInNavMenus: Maybe<BooleanQueryOperatorInput>;
  readonly showInQuickEdit: Maybe<BooleanQueryOperatorInput>;
  readonly showInRest: Maybe<BooleanQueryOperatorInput>;
  readonly showUi: Maybe<BooleanQueryOperatorInput>;
  readonly nodeType: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type WpTaxonomyToContentTypeConnectionFilterInput = {
  readonly nodes: Maybe<WpContentTypeFilterListInput>;
};

type WpContentTypeFilterListInput = {
  readonly elemMatch: Maybe<WpContentTypeFilterInput>;
};

type WpContentTypeToContentNodeConnectionFilterInput = {
  readonly nodes: Maybe<WpContentNodeFilterListInput>;
};

type WpContentNodeFilterListInput = {
  readonly elemMatch: Maybe<WpContentNodeFilterInput>;
};

type WpContentNodeFilterInput = {
  readonly contentType: Maybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  readonly databaseId: Maybe<IntQueryOperatorInput>;
  readonly date: Maybe<DateQueryOperatorInput>;
  readonly dateGmt: Maybe<DateQueryOperatorInput>;
  readonly desiredSlug: Maybe<StringQueryOperatorInput>;
  readonly enclosure: Maybe<StringQueryOperatorInput>;
  readonly guid: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly lastEditedBy: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  readonly link: Maybe<StringQueryOperatorInput>;
  readonly modified: Maybe<DateQueryOperatorInput>;
  readonly modifiedGmt: Maybe<DateQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly status: Maybe<StringQueryOperatorInput>;
  readonly template: Maybe<WpContentTemplateFilterInput>;
  readonly uri: Maybe<StringQueryOperatorInput>;
  readonly nodeType: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type WpContentNodeToEditLastConnectionEdgeFilterInput = {
  readonly node: Maybe<WpUserFilterInput>;
};

type WpUserFilterInput = {
  readonly avatar: Maybe<WpAvatarFilterInput>;
  readonly capKey: Maybe<StringQueryOperatorInput>;
  readonly capabilities: Maybe<StringQueryOperatorInput>;
  readonly comments: Maybe<WpUserToCommentConnectionFilterInput>;
  readonly databaseId: Maybe<IntQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly email: Maybe<StringQueryOperatorInput>;
  readonly extraCapabilities: Maybe<StringQueryOperatorInput>;
  readonly firstName: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly lastName: Maybe<StringQueryOperatorInput>;
  readonly locale: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly nicename: Maybe<StringQueryOperatorInput>;
  readonly nickname: Maybe<StringQueryOperatorInput>;
  readonly pages: Maybe<WpUserToPageConnectionFilterInput>;
  readonly posts: Maybe<WpUserToPostConnectionFilterInput>;
  readonly registeredDate: Maybe<StringQueryOperatorInput>;
  readonly roles: Maybe<WpUserToUserRoleConnectionFilterInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly uri: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly username: Maybe<StringQueryOperatorInput>;
  readonly nodeType: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type WpAvatarFilterInput = {
  readonly default: Maybe<StringQueryOperatorInput>;
  readonly extraAttr: Maybe<StringQueryOperatorInput>;
  readonly forceDefault: Maybe<BooleanQueryOperatorInput>;
  readonly foundAvatar: Maybe<BooleanQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly rating: Maybe<StringQueryOperatorInput>;
  readonly scheme: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
};

type WpUserToCommentConnectionFilterInput = {
  readonly nodes: Maybe<WpCommentFilterListInput>;
};

type WpCommentFilterListInput = {
  readonly elemMatch: Maybe<WpCommentFilterInput>;
};

type WpCommentFilterInput = {
  readonly agent: Maybe<StringQueryOperatorInput>;
  readonly approved: Maybe<BooleanQueryOperatorInput>;
  readonly author: Maybe<WpCommentToCommenterConnectionEdgeFilterInput>;
  readonly authorIp: Maybe<StringQueryOperatorInput>;
  readonly commentedOn: Maybe<WpCommentToContentNodeConnectionEdgeFilterInput>;
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly databaseId: Maybe<IntQueryOperatorInput>;
  readonly date: Maybe<DateQueryOperatorInput>;
  readonly dateGmt: Maybe<DateQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly karma: Maybe<IntQueryOperatorInput>;
  readonly wpParent: Maybe<WpCommentToParentCommentConnectionEdgeFilterInput>;
  readonly parentDatabaseId: Maybe<IntQueryOperatorInput>;
  readonly parentId: Maybe<IDQueryOperatorInput>;
  readonly replies: Maybe<WpCommentToCommentConnectionFilterInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly nodeType: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type WpCommentToCommenterConnectionEdgeFilterInput = {
  readonly node: Maybe<WpCommenterFilterInput>;
};

type WpCommenterFilterInput = {
  readonly databaseId: Maybe<IntQueryOperatorInput>;
  readonly email: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<IDQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
};

type IDQueryOperatorInput = {
  readonly eq: Maybe<Scalars['ID']>;
  readonly ne: Maybe<Scalars['ID']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
};

type WpCommentToContentNodeConnectionEdgeFilterInput = {
  readonly node: Maybe<WpContentNodeFilterInput>;
};

type WpCommentToParentCommentConnectionEdgeFilterInput = {
  readonly node: Maybe<WpCommentFilterInput>;
};

type WpCommentToCommentConnectionFilterInput = {
  readonly nodes: Maybe<WpCommentFilterListInput>;
};

type WpUserToPageConnectionFilterInput = {
  readonly nodes: Maybe<WpPageFilterListInput>;
};

type WpPageFilterListInput = {
  readonly elemMatch: Maybe<WpPageFilterInput>;
};

type WpPageFilterInput = {
  readonly acf: Maybe<WpPage_AcfFilterInput>;
  readonly ancestors: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput>;
  readonly author: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  readonly authorDatabaseId: Maybe<IntQueryOperatorInput>;
  readonly authorId: Maybe<IDQueryOperatorInput>;
  readonly wpChildren: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput>;
  readonly commentCount: Maybe<IntQueryOperatorInput>;
  readonly commentStatus: Maybe<StringQueryOperatorInput>;
  readonly comments: Maybe<WpPageToCommentConnectionFilterInput>;
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentType: Maybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  readonly databaseId: Maybe<IntQueryOperatorInput>;
  readonly date: Maybe<DateQueryOperatorInput>;
  readonly dateGmt: Maybe<DateQueryOperatorInput>;
  readonly desiredSlug: Maybe<StringQueryOperatorInput>;
  readonly enclosure: Maybe<StringQueryOperatorInput>;
  readonly featuredImage: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  readonly featuredImageDatabaseId: Maybe<IntQueryOperatorInput>;
  readonly featuredImageId: Maybe<IDQueryOperatorInput>;
  readonly guid: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly isFrontPage: Maybe<BooleanQueryOperatorInput>;
  readonly isPostsPage: Maybe<BooleanQueryOperatorInput>;
  readonly isPrivacyPage: Maybe<BooleanQueryOperatorInput>;
  readonly isRevision: Maybe<BooleanQueryOperatorInput>;
  readonly lastEditedBy: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  readonly link: Maybe<StringQueryOperatorInput>;
  readonly menuOrder: Maybe<IntQueryOperatorInput>;
  readonly modified: Maybe<DateQueryOperatorInput>;
  readonly modifiedGmt: Maybe<DateQueryOperatorInput>;
  readonly wpParent: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput>;
  readonly parentDatabaseId: Maybe<IntQueryOperatorInput>;
  readonly parentId: Maybe<IDQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly status: Maybe<StringQueryOperatorInput>;
  readonly template: Maybe<WpContentTemplateFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly uri: Maybe<StringQueryOperatorInput>;
  readonly nodeType: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type WpPage_AcfFilterInput = {
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly fieldGroupName: Maybe<StringQueryOperatorInput>;
  readonly metaDescription: Maybe<StringQueryOperatorInput>;
};

type WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput = {
  readonly nodes: Maybe<WpContentNodeFilterListInput>;
};

type WpNodeWithAuthorToUserConnectionEdgeFilterInput = {
  readonly node: Maybe<WpUserFilterInput>;
};

type WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput = {
  readonly nodes: Maybe<WpContentNodeFilterListInput>;
};

type WpPageToCommentConnectionFilterInput = {
  readonly nodes: Maybe<WpCommentFilterListInput>;
};

type WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput = {
  readonly node: Maybe<WpMediaItemFilterInput>;
};

type WpMediaItemFilterInput = {
  readonly altText: Maybe<StringQueryOperatorInput>;
  readonly ancestors: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput>;
  readonly author: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  readonly authorDatabaseId: Maybe<IntQueryOperatorInput>;
  readonly authorId: Maybe<IDQueryOperatorInput>;
  readonly caption: Maybe<StringQueryOperatorInput>;
  readonly wpChildren: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput>;
  readonly commentCount: Maybe<IntQueryOperatorInput>;
  readonly commentStatus: Maybe<StringQueryOperatorInput>;
  readonly comments: Maybe<WpMediaItemToCommentConnectionFilterInput>;
  readonly contentType: Maybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  readonly databaseId: Maybe<IntQueryOperatorInput>;
  readonly date: Maybe<DateQueryOperatorInput>;
  readonly dateGmt: Maybe<DateQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly desiredSlug: Maybe<StringQueryOperatorInput>;
  readonly enclosure: Maybe<StringQueryOperatorInput>;
  readonly fileSize: Maybe<IntQueryOperatorInput>;
  readonly guid: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly lastEditedBy: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  readonly link: Maybe<StringQueryOperatorInput>;
  readonly mediaDetails: Maybe<WpMediaDetailsFilterInput>;
  readonly mediaItemUrl: Maybe<StringQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly mimeType: Maybe<StringQueryOperatorInput>;
  readonly modified: Maybe<DateQueryOperatorInput>;
  readonly modifiedGmt: Maybe<DateQueryOperatorInput>;
  readonly wpParent: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput>;
  readonly parentDatabaseId: Maybe<IntQueryOperatorInput>;
  readonly parentId: Maybe<IDQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly sourceUrl: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly status: Maybe<StringQueryOperatorInput>;
  readonly template: Maybe<WpContentTemplateFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly uri: Maybe<StringQueryOperatorInput>;
  readonly nodeType: Maybe<StringQueryOperatorInput>;
  readonly remoteFile: Maybe<FileFilterInput>;
  readonly localFile: Maybe<FileFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type WpMediaItemToCommentConnectionFilterInput = {
  readonly nodes: Maybe<WpCommentFilterListInput>;
};

type WpMediaDetailsFilterInput = {
  readonly file: Maybe<StringQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly meta: Maybe<WpMediaItemMetaFilterInput>;
  readonly sizes: Maybe<WpMediaSizeFilterListInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
};

type WpMediaItemMetaFilterInput = {
  readonly aperture: Maybe<FloatQueryOperatorInput>;
  readonly camera: Maybe<StringQueryOperatorInput>;
  readonly caption: Maybe<StringQueryOperatorInput>;
  readonly copyright: Maybe<StringQueryOperatorInput>;
  readonly createdTimestamp: Maybe<IntQueryOperatorInput>;
  readonly credit: Maybe<StringQueryOperatorInput>;
  readonly focalLength: Maybe<FloatQueryOperatorInput>;
  readonly iso: Maybe<IntQueryOperatorInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
  readonly orientation: Maybe<StringQueryOperatorInput>;
  readonly shutterSpeed: Maybe<FloatQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
};

type WpMediaSizeFilterListInput = {
  readonly elemMatch: Maybe<WpMediaSizeFilterInput>;
};

type WpMediaSizeFilterInput = {
  readonly file: Maybe<StringQueryOperatorInput>;
  readonly fileSize: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<StringQueryOperatorInput>;
  readonly mimeType: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly sourceUrl: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<StringQueryOperatorInput>;
};

type WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput = {
  readonly node: Maybe<WpContentNodeFilterInput>;
};

type WpContentTemplateFilterInput = {
  readonly templateName: Maybe<StringQueryOperatorInput>;
};

type WpUserToPostConnectionFilterInput = {
  readonly nodes: Maybe<WpPostFilterListInput>;
};

type WpPostFilterListInput = {
  readonly elemMatch: Maybe<WpPostFilterInput>;
};

type WpPostFilterInput = {
  readonly acf: Maybe<WpPost_AcfFilterInput>;
  readonly author: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  readonly authorDatabaseId: Maybe<IntQueryOperatorInput>;
  readonly authorId: Maybe<IDQueryOperatorInput>;
  readonly categories: Maybe<WpPostToCategoryConnectionFilterInput>;
  readonly commentCount: Maybe<IntQueryOperatorInput>;
  readonly commentStatus: Maybe<StringQueryOperatorInput>;
  readonly comments: Maybe<WpPostToCommentConnectionFilterInput>;
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentType: Maybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  readonly databaseId: Maybe<IntQueryOperatorInput>;
  readonly date: Maybe<DateQueryOperatorInput>;
  readonly dateGmt: Maybe<DateQueryOperatorInput>;
  readonly desiredSlug: Maybe<StringQueryOperatorInput>;
  readonly enclosure: Maybe<StringQueryOperatorInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly featuredImage: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  readonly featuredImageDatabaseId: Maybe<IntQueryOperatorInput>;
  readonly featuredImageId: Maybe<IDQueryOperatorInput>;
  readonly guid: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly isRevision: Maybe<BooleanQueryOperatorInput>;
  readonly isSticky: Maybe<BooleanQueryOperatorInput>;
  readonly lastEditedBy: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  readonly link: Maybe<StringQueryOperatorInput>;
  readonly modified: Maybe<DateQueryOperatorInput>;
  readonly modifiedGmt: Maybe<DateQueryOperatorInput>;
  readonly pingStatus: Maybe<StringQueryOperatorInput>;
  readonly pinged: Maybe<StringQueryOperatorInput>;
  readonly postFormats: Maybe<WpPostToPostFormatConnectionFilterInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly status: Maybe<StringQueryOperatorInput>;
  readonly tags: Maybe<WpPostToTagConnectionFilterInput>;
  readonly template: Maybe<WpContentTemplateFilterInput>;
  readonly terms: Maybe<WpPostToTermNodeConnectionFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly toPing: Maybe<StringQueryOperatorInput>;
  readonly uri: Maybe<StringQueryOperatorInput>;
  readonly nodeType: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type WpPost_AcfFilterInput = {
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldGroupName: Maybe<StringQueryOperatorInput>;
  readonly metaDescription: Maybe<StringQueryOperatorInput>;
  readonly metaKeywords: Maybe<StringQueryOperatorInput>;
};

type WpPostToCategoryConnectionFilterInput = {
  readonly nodes: Maybe<WpCategoryFilterListInput>;
};

type WpCategoryFilterListInput = {
  readonly elemMatch: Maybe<WpCategoryFilterInput>;
};

type WpCategoryFilterInput = {
  readonly ancestors: Maybe<WpCategoryToAncestorsCategoryConnectionFilterInput>;
  readonly wpChildren: Maybe<WpCategoryToCategoryConnectionFilterInput>;
  readonly contentNodes: Maybe<WpCategoryToContentNodeConnectionFilterInput>;
  readonly count: Maybe<IntQueryOperatorInput>;
  readonly databaseId: Maybe<IntQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly link: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly wpParent: Maybe<WpCategoryToParentCategoryConnectionEdgeFilterInput>;
  readonly parentDatabaseId: Maybe<IntQueryOperatorInput>;
  readonly parentId: Maybe<IDQueryOperatorInput>;
  readonly posts: Maybe<WpCategoryToPostConnectionFilterInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly taxonomy: Maybe<WpCategoryToTaxonomyConnectionEdgeFilterInput>;
  readonly termGroupId: Maybe<IntQueryOperatorInput>;
  readonly termTaxonomyId: Maybe<IntQueryOperatorInput>;
  readonly uri: Maybe<StringQueryOperatorInput>;
  readonly nodeType: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type WpCategoryToAncestorsCategoryConnectionFilterInput = {
  readonly nodes: Maybe<WpCategoryFilterListInput>;
};

type WpCategoryToCategoryConnectionFilterInput = {
  readonly nodes: Maybe<WpCategoryFilterListInput>;
};

type WpCategoryToContentNodeConnectionFilterInput = {
  readonly nodes: Maybe<WpContentNodeFilterListInput>;
};

type WpCategoryToParentCategoryConnectionEdgeFilterInput = {
  readonly node: Maybe<WpCategoryFilterInput>;
};

type WpCategoryToPostConnectionFilterInput = {
  readonly nodes: Maybe<WpPostFilterListInput>;
};

type WpCategoryToTaxonomyConnectionEdgeFilterInput = {
  readonly node: Maybe<WpTaxonomyFilterInput>;
};

type WpPostToCommentConnectionFilterInput = {
  readonly nodes: Maybe<WpCommentFilterListInput>;
};

type WpPostToPostFormatConnectionFilterInput = {
  readonly nodes: Maybe<WpPostFormatFilterListInput>;
};

type WpPostFormatFilterListInput = {
  readonly elemMatch: Maybe<WpPostFormatFilterInput>;
};

type WpPostFormatFilterInput = {
  readonly contentNodes: Maybe<WpPostFormatToContentNodeConnectionFilterInput>;
  readonly count: Maybe<IntQueryOperatorInput>;
  readonly databaseId: Maybe<IntQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly link: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly posts: Maybe<WpPostFormatToPostConnectionFilterInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly taxonomy: Maybe<WpPostFormatToTaxonomyConnectionEdgeFilterInput>;
  readonly termGroupId: Maybe<IntQueryOperatorInput>;
  readonly termTaxonomyId: Maybe<IntQueryOperatorInput>;
  readonly uri: Maybe<StringQueryOperatorInput>;
  readonly nodeType: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type WpPostFormatToContentNodeConnectionFilterInput = {
  readonly nodes: Maybe<WpContentNodeFilterListInput>;
};

type WpPostFormatToPostConnectionFilterInput = {
  readonly nodes: Maybe<WpPostFilterListInput>;
};

type WpPostFormatToTaxonomyConnectionEdgeFilterInput = {
  readonly node: Maybe<WpTaxonomyFilterInput>;
};

type WpPostToTagConnectionFilterInput = {
  readonly nodes: Maybe<WpTagFilterListInput>;
};

type WpTagFilterListInput = {
  readonly elemMatch: Maybe<WpTagFilterInput>;
};

type WpTagFilterInput = {
  readonly contentNodes: Maybe<WpTagToContentNodeConnectionFilterInput>;
  readonly count: Maybe<IntQueryOperatorInput>;
  readonly databaseId: Maybe<IntQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly link: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly posts: Maybe<WpTagToPostConnectionFilterInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly taxonomy: Maybe<WpTagToTaxonomyConnectionEdgeFilterInput>;
  readonly termGroupId: Maybe<IntQueryOperatorInput>;
  readonly termTaxonomyId: Maybe<IntQueryOperatorInput>;
  readonly uri: Maybe<StringQueryOperatorInput>;
  readonly nodeType: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type WpTagToContentNodeConnectionFilterInput = {
  readonly nodes: Maybe<WpContentNodeFilterListInput>;
};

type WpTagToPostConnectionFilterInput = {
  readonly nodes: Maybe<WpPostFilterListInput>;
};

type WpTagToTaxonomyConnectionEdgeFilterInput = {
  readonly node: Maybe<WpTaxonomyFilterInput>;
};

type WpPostToTermNodeConnectionFilterInput = {
  readonly nodes: Maybe<WpTermNodeFilterListInput>;
};

type WpTermNodeFilterListInput = {
  readonly elemMatch: Maybe<WpTermNodeFilterInput>;
};

type WpTermNodeFilterInput = {
  readonly count: Maybe<IntQueryOperatorInput>;
  readonly databaseId: Maybe<IntQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly link: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly termGroupId: Maybe<IntQueryOperatorInput>;
  readonly termTaxonomyId: Maybe<IntQueryOperatorInput>;
  readonly uri: Maybe<StringQueryOperatorInput>;
  readonly nodeType: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type WpUserToUserRoleConnectionFilterInput = {
  readonly nodes: Maybe<WpUserRoleFilterListInput>;
};

type WpUserRoleFilterListInput = {
  readonly elemMatch: Maybe<WpUserRoleFilterInput>;
};

type WpUserRoleFilterInput = {
  readonly capabilities: Maybe<StringQueryOperatorInput>;
  readonly displayName: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly nodeType: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type WpPostTypeLabelDetailsFilterInput = {
  readonly addNew: Maybe<StringQueryOperatorInput>;
  readonly addNewItem: Maybe<StringQueryOperatorInput>;
  readonly allItems: Maybe<StringQueryOperatorInput>;
  readonly archives: Maybe<StringQueryOperatorInput>;
  readonly attributes: Maybe<StringQueryOperatorInput>;
  readonly editItem: Maybe<StringQueryOperatorInput>;
  readonly featuredImage: Maybe<StringQueryOperatorInput>;
  readonly filterItemsList: Maybe<StringQueryOperatorInput>;
  readonly insertIntoItem: Maybe<StringQueryOperatorInput>;
  readonly itemsList: Maybe<StringQueryOperatorInput>;
  readonly itemsListNavigation: Maybe<StringQueryOperatorInput>;
  readonly menuName: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly newItem: Maybe<StringQueryOperatorInput>;
  readonly notFound: Maybe<StringQueryOperatorInput>;
  readonly notFoundInTrash: Maybe<StringQueryOperatorInput>;
  readonly parentItemColon: Maybe<StringQueryOperatorInput>;
  readonly removeFeaturedImage: Maybe<StringQueryOperatorInput>;
  readonly searchItems: Maybe<StringQueryOperatorInput>;
  readonly setFeaturedImage: Maybe<StringQueryOperatorInput>;
  readonly singularName: Maybe<StringQueryOperatorInput>;
  readonly uploadedToThisItem: Maybe<StringQueryOperatorInput>;
  readonly useFeaturedImage: Maybe<StringQueryOperatorInput>;
  readonly viewItem: Maybe<StringQueryOperatorInput>;
  readonly viewItems: Maybe<StringQueryOperatorInput>;
};

type WpContentNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpContentNodeEdge>;
  readonly nodes: ReadonlyArray<WpContentNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<WpContentNodeGroupConnection>;
};


type WpContentNodeConnection_distinctArgs = {
  field: WpContentNodeFieldsEnum;
};


type WpContentNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: WpContentNodeFieldsEnum;
};

type WpContentNodeEdge = {
  readonly next: Maybe<WpContentNode>;
  readonly node: WpContentNode;
  readonly previous: Maybe<WpContentNode>;
};

type WpContentNodeFieldsEnum =
  | 'contentType.node.archivePath'
  | 'contentType.node.canExport'
  | 'contentType.node.connectedTaxonomies.nodes'
  | 'contentType.node.contentNodes.nodes'
  | 'contentType.node.deleteWithUser'
  | 'contentType.node.description'
  | 'contentType.node.excludeFromSearch'
  | 'contentType.node.graphqlPluralName'
  | 'contentType.node.graphqlSingleName'
  | 'contentType.node.hasArchive'
  | 'contentType.node.hierarchical'
  | 'contentType.node.id'
  | 'contentType.node.isFrontPage'
  | 'contentType.node.isPostsPage'
  | 'contentType.node.label'
  | 'contentType.node.labels.addNew'
  | 'contentType.node.labels.addNewItem'
  | 'contentType.node.labels.allItems'
  | 'contentType.node.labels.archives'
  | 'contentType.node.labels.attributes'
  | 'contentType.node.labels.editItem'
  | 'contentType.node.labels.featuredImage'
  | 'contentType.node.labels.filterItemsList'
  | 'contentType.node.labels.insertIntoItem'
  | 'contentType.node.labels.itemsList'
  | 'contentType.node.labels.itemsListNavigation'
  | 'contentType.node.labels.menuName'
  | 'contentType.node.labels.name'
  | 'contentType.node.labels.newItem'
  | 'contentType.node.labels.notFound'
  | 'contentType.node.labels.notFoundInTrash'
  | 'contentType.node.labels.parentItemColon'
  | 'contentType.node.labels.removeFeaturedImage'
  | 'contentType.node.labels.searchItems'
  | 'contentType.node.labels.setFeaturedImage'
  | 'contentType.node.labels.singularName'
  | 'contentType.node.labels.uploadedToThisItem'
  | 'contentType.node.labels.useFeaturedImage'
  | 'contentType.node.labels.viewItem'
  | 'contentType.node.labels.viewItems'
  | 'contentType.node.menuIcon'
  | 'contentType.node.menuPosition'
  | 'contentType.node.name'
  | 'contentType.node.public'
  | 'contentType.node.publiclyQueryable'
  | 'contentType.node.restBase'
  | 'contentType.node.restControllerClass'
  | 'contentType.node.showInAdminBar'
  | 'contentType.node.showInGraphql'
  | 'contentType.node.showInMenu'
  | 'contentType.node.showInNavMenus'
  | 'contentType.node.showInRest'
  | 'contentType.node.showUi'
  | 'contentType.node.uri'
  | 'contentType.node.nodeType'
  | 'contentType.node.parent.id'
  | 'contentType.node.parent.children'
  | 'contentType.node.children'
  | 'contentType.node.children.id'
  | 'contentType.node.children.children'
  | 'contentType.node.internal.content'
  | 'contentType.node.internal.contentDigest'
  | 'contentType.node.internal.description'
  | 'contentType.node.internal.fieldOwners'
  | 'contentType.node.internal.ignoreType'
  | 'contentType.node.internal.mediaType'
  | 'contentType.node.internal.owner'
  | 'contentType.node.internal.type'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'desiredSlug'
  | 'enclosure'
  | 'guid'
  | 'id'
  | 'lastEditedBy.node.avatar.default'
  | 'lastEditedBy.node.avatar.extraAttr'
  | 'lastEditedBy.node.avatar.forceDefault'
  | 'lastEditedBy.node.avatar.foundAvatar'
  | 'lastEditedBy.node.avatar.height'
  | 'lastEditedBy.node.avatar.rating'
  | 'lastEditedBy.node.avatar.scheme'
  | 'lastEditedBy.node.avatar.size'
  | 'lastEditedBy.node.avatar.url'
  | 'lastEditedBy.node.avatar.width'
  | 'lastEditedBy.node.capKey'
  | 'lastEditedBy.node.capabilities'
  | 'lastEditedBy.node.comments.nodes'
  | 'lastEditedBy.node.databaseId'
  | 'lastEditedBy.node.description'
  | 'lastEditedBy.node.email'
  | 'lastEditedBy.node.extraCapabilities'
  | 'lastEditedBy.node.firstName'
  | 'lastEditedBy.node.id'
  | 'lastEditedBy.node.lastName'
  | 'lastEditedBy.node.locale'
  | 'lastEditedBy.node.name'
  | 'lastEditedBy.node.nicename'
  | 'lastEditedBy.node.nickname'
  | 'lastEditedBy.node.pages.nodes'
  | 'lastEditedBy.node.posts.nodes'
  | 'lastEditedBy.node.registeredDate'
  | 'lastEditedBy.node.roles.nodes'
  | 'lastEditedBy.node.slug'
  | 'lastEditedBy.node.uri'
  | 'lastEditedBy.node.url'
  | 'lastEditedBy.node.username'
  | 'lastEditedBy.node.nodeType'
  | 'lastEditedBy.node.parent.id'
  | 'lastEditedBy.node.parent.children'
  | 'lastEditedBy.node.children'
  | 'lastEditedBy.node.children.id'
  | 'lastEditedBy.node.children.children'
  | 'lastEditedBy.node.internal.content'
  | 'lastEditedBy.node.internal.contentDigest'
  | 'lastEditedBy.node.internal.description'
  | 'lastEditedBy.node.internal.fieldOwners'
  | 'lastEditedBy.node.internal.ignoreType'
  | 'lastEditedBy.node.internal.mediaType'
  | 'lastEditedBy.node.internal.owner'
  | 'lastEditedBy.node.internal.type'
  | 'link'
  | 'modified'
  | 'modifiedGmt'
  | 'slug'
  | 'status'
  | 'template.templateName'
  | 'uri'
  | 'nodeType'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type WpContentNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpContentNodeEdge>;
  readonly nodes: ReadonlyArray<WpContentNode>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type WpContentNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<WpContentNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type WpContentTypeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpContentTypeEdge>;
  readonly nodes: ReadonlyArray<WpContentType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<WpContentTypeGroupConnection>;
};


type WpContentTypeConnection_distinctArgs = {
  field: WpContentTypeFieldsEnum;
};


type WpContentTypeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: WpContentTypeFieldsEnum;
};

type WpContentTypeEdge = {
  readonly next: Maybe<WpContentType>;
  readonly node: WpContentType;
  readonly previous: Maybe<WpContentType>;
};

type WpContentTypeFieldsEnum =
  | 'archivePath'
  | 'canExport'
  | 'connectedTaxonomies.nodes'
  | 'connectedTaxonomies.nodes.archivePath'
  | 'connectedTaxonomies.nodes.connectedContentTypes.nodes'
  | 'connectedTaxonomies.nodes.description'
  | 'connectedTaxonomies.nodes.graphqlPluralName'
  | 'connectedTaxonomies.nodes.graphqlSingleName'
  | 'connectedTaxonomies.nodes.hierarchical'
  | 'connectedTaxonomies.nodes.id'
  | 'connectedTaxonomies.nodes.label'
  | 'connectedTaxonomies.nodes.name'
  | 'connectedTaxonomies.nodes.public'
  | 'connectedTaxonomies.nodes.restBase'
  | 'connectedTaxonomies.nodes.restControllerClass'
  | 'connectedTaxonomies.nodes.showCloud'
  | 'connectedTaxonomies.nodes.showInAdminColumn'
  | 'connectedTaxonomies.nodes.showInGraphql'
  | 'connectedTaxonomies.nodes.showInMenu'
  | 'connectedTaxonomies.nodes.showInNavMenus'
  | 'connectedTaxonomies.nodes.showInQuickEdit'
  | 'connectedTaxonomies.nodes.showInRest'
  | 'connectedTaxonomies.nodes.showUi'
  | 'connectedTaxonomies.nodes.nodeType'
  | 'connectedTaxonomies.nodes.parent.id'
  | 'connectedTaxonomies.nodes.parent.children'
  | 'connectedTaxonomies.nodes.children'
  | 'connectedTaxonomies.nodes.children.id'
  | 'connectedTaxonomies.nodes.children.children'
  | 'connectedTaxonomies.nodes.internal.content'
  | 'connectedTaxonomies.nodes.internal.contentDigest'
  | 'connectedTaxonomies.nodes.internal.description'
  | 'connectedTaxonomies.nodes.internal.fieldOwners'
  | 'connectedTaxonomies.nodes.internal.ignoreType'
  | 'connectedTaxonomies.nodes.internal.mediaType'
  | 'connectedTaxonomies.nodes.internal.owner'
  | 'connectedTaxonomies.nodes.internal.type'
  | 'contentNodes.nodes'
  | 'contentNodes.nodes.databaseId'
  | 'contentNodes.nodes.date'
  | 'contentNodes.nodes.dateGmt'
  | 'contentNodes.nodes.desiredSlug'
  | 'contentNodes.nodes.enclosure'
  | 'contentNodes.nodes.guid'
  | 'contentNodes.nodes.id'
  | 'contentNodes.nodes.link'
  | 'contentNodes.nodes.modified'
  | 'contentNodes.nodes.modifiedGmt'
  | 'contentNodes.nodes.slug'
  | 'contentNodes.nodes.status'
  | 'contentNodes.nodes.template.templateName'
  | 'contentNodes.nodes.uri'
  | 'contentNodes.nodes.nodeType'
  | 'contentNodes.nodes.parent.id'
  | 'contentNodes.nodes.parent.children'
  | 'contentNodes.nodes.children'
  | 'contentNodes.nodes.children.id'
  | 'contentNodes.nodes.children.children'
  | 'contentNodes.nodes.internal.content'
  | 'contentNodes.nodes.internal.contentDigest'
  | 'contentNodes.nodes.internal.description'
  | 'contentNodes.nodes.internal.fieldOwners'
  | 'contentNodes.nodes.internal.ignoreType'
  | 'contentNodes.nodes.internal.mediaType'
  | 'contentNodes.nodes.internal.owner'
  | 'contentNodes.nodes.internal.type'
  | 'deleteWithUser'
  | 'description'
  | 'excludeFromSearch'
  | 'graphqlPluralName'
  | 'graphqlSingleName'
  | 'hasArchive'
  | 'hierarchical'
  | 'id'
  | 'isFrontPage'
  | 'isPostsPage'
  | 'label'
  | 'labels.addNew'
  | 'labels.addNewItem'
  | 'labels.allItems'
  | 'labels.archives'
  | 'labels.attributes'
  | 'labels.editItem'
  | 'labels.featuredImage'
  | 'labels.filterItemsList'
  | 'labels.insertIntoItem'
  | 'labels.itemsList'
  | 'labels.itemsListNavigation'
  | 'labels.menuName'
  | 'labels.name'
  | 'labels.newItem'
  | 'labels.notFound'
  | 'labels.notFoundInTrash'
  | 'labels.parentItemColon'
  | 'labels.removeFeaturedImage'
  | 'labels.searchItems'
  | 'labels.setFeaturedImage'
  | 'labels.singularName'
  | 'labels.uploadedToThisItem'
  | 'labels.useFeaturedImage'
  | 'labels.viewItem'
  | 'labels.viewItems'
  | 'menuIcon'
  | 'menuPosition'
  | 'name'
  | 'public'
  | 'publiclyQueryable'
  | 'restBase'
  | 'restControllerClass'
  | 'showInAdminBar'
  | 'showInGraphql'
  | 'showInMenu'
  | 'showInNavMenus'
  | 'showInRest'
  | 'showUi'
  | 'uri'
  | 'nodeType'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type WpContentTypeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpContentTypeEdge>;
  readonly nodes: ReadonlyArray<WpContentType>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type WpContentTypeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<WpContentTypeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type WpTaxonomyConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpTaxonomyEdge>;
  readonly nodes: ReadonlyArray<WpTaxonomy>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<WpTaxonomyGroupConnection>;
};


type WpTaxonomyConnection_distinctArgs = {
  field: WpTaxonomyFieldsEnum;
};


type WpTaxonomyConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: WpTaxonomyFieldsEnum;
};

type WpTaxonomyEdge = {
  readonly next: Maybe<WpTaxonomy>;
  readonly node: WpTaxonomy;
  readonly previous: Maybe<WpTaxonomy>;
};

type WpTaxonomyFieldsEnum =
  | 'archivePath'
  | 'connectedContentTypes.nodes'
  | 'connectedContentTypes.nodes.archivePath'
  | 'connectedContentTypes.nodes.canExport'
  | 'connectedContentTypes.nodes.connectedTaxonomies.nodes'
  | 'connectedContentTypes.nodes.contentNodes.nodes'
  | 'connectedContentTypes.nodes.deleteWithUser'
  | 'connectedContentTypes.nodes.description'
  | 'connectedContentTypes.nodes.excludeFromSearch'
  | 'connectedContentTypes.nodes.graphqlPluralName'
  | 'connectedContentTypes.nodes.graphqlSingleName'
  | 'connectedContentTypes.nodes.hasArchive'
  | 'connectedContentTypes.nodes.hierarchical'
  | 'connectedContentTypes.nodes.id'
  | 'connectedContentTypes.nodes.isFrontPage'
  | 'connectedContentTypes.nodes.isPostsPage'
  | 'connectedContentTypes.nodes.label'
  | 'connectedContentTypes.nodes.labels.addNew'
  | 'connectedContentTypes.nodes.labels.addNewItem'
  | 'connectedContentTypes.nodes.labels.allItems'
  | 'connectedContentTypes.nodes.labels.archives'
  | 'connectedContentTypes.nodes.labels.attributes'
  | 'connectedContentTypes.nodes.labels.editItem'
  | 'connectedContentTypes.nodes.labels.featuredImage'
  | 'connectedContentTypes.nodes.labels.filterItemsList'
  | 'connectedContentTypes.nodes.labels.insertIntoItem'
  | 'connectedContentTypes.nodes.labels.itemsList'
  | 'connectedContentTypes.nodes.labels.itemsListNavigation'
  | 'connectedContentTypes.nodes.labels.menuName'
  | 'connectedContentTypes.nodes.labels.name'
  | 'connectedContentTypes.nodes.labels.newItem'
  | 'connectedContentTypes.nodes.labels.notFound'
  | 'connectedContentTypes.nodes.labels.notFoundInTrash'
  | 'connectedContentTypes.nodes.labels.parentItemColon'
  | 'connectedContentTypes.nodes.labels.removeFeaturedImage'
  | 'connectedContentTypes.nodes.labels.searchItems'
  | 'connectedContentTypes.nodes.labels.setFeaturedImage'
  | 'connectedContentTypes.nodes.labels.singularName'
  | 'connectedContentTypes.nodes.labels.uploadedToThisItem'
  | 'connectedContentTypes.nodes.labels.useFeaturedImage'
  | 'connectedContentTypes.nodes.labels.viewItem'
  | 'connectedContentTypes.nodes.labels.viewItems'
  | 'connectedContentTypes.nodes.menuIcon'
  | 'connectedContentTypes.nodes.menuPosition'
  | 'connectedContentTypes.nodes.name'
  | 'connectedContentTypes.nodes.public'
  | 'connectedContentTypes.nodes.publiclyQueryable'
  | 'connectedContentTypes.nodes.restBase'
  | 'connectedContentTypes.nodes.restControllerClass'
  | 'connectedContentTypes.nodes.showInAdminBar'
  | 'connectedContentTypes.nodes.showInGraphql'
  | 'connectedContentTypes.nodes.showInMenu'
  | 'connectedContentTypes.nodes.showInNavMenus'
  | 'connectedContentTypes.nodes.showInRest'
  | 'connectedContentTypes.nodes.showUi'
  | 'connectedContentTypes.nodes.uri'
  | 'connectedContentTypes.nodes.nodeType'
  | 'connectedContentTypes.nodes.parent.id'
  | 'connectedContentTypes.nodes.parent.children'
  | 'connectedContentTypes.nodes.children'
  | 'connectedContentTypes.nodes.children.id'
  | 'connectedContentTypes.nodes.children.children'
  | 'connectedContentTypes.nodes.internal.content'
  | 'connectedContentTypes.nodes.internal.contentDigest'
  | 'connectedContentTypes.nodes.internal.description'
  | 'connectedContentTypes.nodes.internal.fieldOwners'
  | 'connectedContentTypes.nodes.internal.ignoreType'
  | 'connectedContentTypes.nodes.internal.mediaType'
  | 'connectedContentTypes.nodes.internal.owner'
  | 'connectedContentTypes.nodes.internal.type'
  | 'description'
  | 'graphqlPluralName'
  | 'graphqlSingleName'
  | 'hierarchical'
  | 'id'
  | 'label'
  | 'name'
  | 'public'
  | 'restBase'
  | 'restControllerClass'
  | 'showCloud'
  | 'showInAdminColumn'
  | 'showInGraphql'
  | 'showInMenu'
  | 'showInNavMenus'
  | 'showInQuickEdit'
  | 'showInRest'
  | 'showUi'
  | 'nodeType'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type WpTaxonomyGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpTaxonomyEdge>;
  readonly nodes: ReadonlyArray<WpTaxonomy>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type WpTaxonomySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<WpTaxonomyFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type WpUserConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpUserEdge>;
  readonly nodes: ReadonlyArray<WpUser>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<WpUserGroupConnection>;
};


type WpUserConnection_distinctArgs = {
  field: WpUserFieldsEnum;
};


type WpUserConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: WpUserFieldsEnum;
};

type WpUserEdge = {
  readonly next: Maybe<WpUser>;
  readonly node: WpUser;
  readonly previous: Maybe<WpUser>;
};

type WpUserFieldsEnum =
  | 'avatar.default'
  | 'avatar.extraAttr'
  | 'avatar.forceDefault'
  | 'avatar.foundAvatar'
  | 'avatar.height'
  | 'avatar.rating'
  | 'avatar.scheme'
  | 'avatar.size'
  | 'avatar.url'
  | 'avatar.width'
  | 'capKey'
  | 'capabilities'
  | 'comments.nodes'
  | 'comments.nodes.agent'
  | 'comments.nodes.approved'
  | 'comments.nodes.authorIp'
  | 'comments.nodes.content'
  | 'comments.nodes.databaseId'
  | 'comments.nodes.date'
  | 'comments.nodes.dateGmt'
  | 'comments.nodes.id'
  | 'comments.nodes.karma'
  | 'comments.nodes.parentDatabaseId'
  | 'comments.nodes.parentId'
  | 'comments.nodes.replies.nodes'
  | 'comments.nodes.type'
  | 'comments.nodes.nodeType'
  | 'comments.nodes.parent.id'
  | 'comments.nodes.parent.children'
  | 'comments.nodes.children'
  | 'comments.nodes.children.id'
  | 'comments.nodes.children.children'
  | 'comments.nodes.internal.content'
  | 'comments.nodes.internal.contentDigest'
  | 'comments.nodes.internal.description'
  | 'comments.nodes.internal.fieldOwners'
  | 'comments.nodes.internal.ignoreType'
  | 'comments.nodes.internal.mediaType'
  | 'comments.nodes.internal.owner'
  | 'comments.nodes.internal.type'
  | 'databaseId'
  | 'description'
  | 'email'
  | 'extraCapabilities'
  | 'firstName'
  | 'id'
  | 'lastName'
  | 'locale'
  | 'name'
  | 'nicename'
  | 'nickname'
  | 'pages.nodes'
  | 'pages.nodes.acf.description'
  | 'pages.nodes.acf.excerpt'
  | 'pages.nodes.acf.fieldGroupName'
  | 'pages.nodes.acf.metaDescription'
  | 'pages.nodes.ancestors.nodes'
  | 'pages.nodes.authorDatabaseId'
  | 'pages.nodes.authorId'
  | 'pages.nodes.wpChildren.nodes'
  | 'pages.nodes.commentCount'
  | 'pages.nodes.commentStatus'
  | 'pages.nodes.comments.nodes'
  | 'pages.nodes.content'
  | 'pages.nodes.databaseId'
  | 'pages.nodes.date'
  | 'pages.nodes.dateGmt'
  | 'pages.nodes.desiredSlug'
  | 'pages.nodes.enclosure'
  | 'pages.nodes.featuredImageDatabaseId'
  | 'pages.nodes.featuredImageId'
  | 'pages.nodes.guid'
  | 'pages.nodes.id'
  | 'pages.nodes.isFrontPage'
  | 'pages.nodes.isPostsPage'
  | 'pages.nodes.isPrivacyPage'
  | 'pages.nodes.isRevision'
  | 'pages.nodes.link'
  | 'pages.nodes.menuOrder'
  | 'pages.nodes.modified'
  | 'pages.nodes.modifiedGmt'
  | 'pages.nodes.parentDatabaseId'
  | 'pages.nodes.parentId'
  | 'pages.nodes.slug'
  | 'pages.nodes.status'
  | 'pages.nodes.template.templateName'
  | 'pages.nodes.title'
  | 'pages.nodes.uri'
  | 'pages.nodes.nodeType'
  | 'pages.nodes.parent.id'
  | 'pages.nodes.parent.children'
  | 'pages.nodes.children'
  | 'pages.nodes.children.id'
  | 'pages.nodes.children.children'
  | 'pages.nodes.internal.content'
  | 'pages.nodes.internal.contentDigest'
  | 'pages.nodes.internal.description'
  | 'pages.nodes.internal.fieldOwners'
  | 'pages.nodes.internal.ignoreType'
  | 'pages.nodes.internal.mediaType'
  | 'pages.nodes.internal.owner'
  | 'pages.nodes.internal.type'
  | 'posts.nodes'
  | 'posts.nodes.acf.description'
  | 'posts.nodes.acf.fieldGroupName'
  | 'posts.nodes.acf.metaDescription'
  | 'posts.nodes.acf.metaKeywords'
  | 'posts.nodes.authorDatabaseId'
  | 'posts.nodes.authorId'
  | 'posts.nodes.categories.nodes'
  | 'posts.nodes.commentCount'
  | 'posts.nodes.commentStatus'
  | 'posts.nodes.comments.nodes'
  | 'posts.nodes.content'
  | 'posts.nodes.databaseId'
  | 'posts.nodes.date'
  | 'posts.nodes.dateGmt'
  | 'posts.nodes.desiredSlug'
  | 'posts.nodes.enclosure'
  | 'posts.nodes.excerpt'
  | 'posts.nodes.featuredImageDatabaseId'
  | 'posts.nodes.featuredImageId'
  | 'posts.nodes.guid'
  | 'posts.nodes.id'
  | 'posts.nodes.isRevision'
  | 'posts.nodes.isSticky'
  | 'posts.nodes.link'
  | 'posts.nodes.modified'
  | 'posts.nodes.modifiedGmt'
  | 'posts.nodes.pingStatus'
  | 'posts.nodes.pinged'
  | 'posts.nodes.postFormats.nodes'
  | 'posts.nodes.slug'
  | 'posts.nodes.status'
  | 'posts.nodes.tags.nodes'
  | 'posts.nodes.template.templateName'
  | 'posts.nodes.terms.nodes'
  | 'posts.nodes.title'
  | 'posts.nodes.toPing'
  | 'posts.nodes.uri'
  | 'posts.nodes.nodeType'
  | 'posts.nodes.parent.id'
  | 'posts.nodes.parent.children'
  | 'posts.nodes.children'
  | 'posts.nodes.children.id'
  | 'posts.nodes.children.children'
  | 'posts.nodes.internal.content'
  | 'posts.nodes.internal.contentDigest'
  | 'posts.nodes.internal.description'
  | 'posts.nodes.internal.fieldOwners'
  | 'posts.nodes.internal.ignoreType'
  | 'posts.nodes.internal.mediaType'
  | 'posts.nodes.internal.owner'
  | 'posts.nodes.internal.type'
  | 'registeredDate'
  | 'roles.nodes'
  | 'roles.nodes.capabilities'
  | 'roles.nodes.displayName'
  | 'roles.nodes.id'
  | 'roles.nodes.name'
  | 'roles.nodes.nodeType'
  | 'roles.nodes.parent.id'
  | 'roles.nodes.parent.children'
  | 'roles.nodes.children'
  | 'roles.nodes.children.id'
  | 'roles.nodes.children.children'
  | 'roles.nodes.internal.content'
  | 'roles.nodes.internal.contentDigest'
  | 'roles.nodes.internal.description'
  | 'roles.nodes.internal.fieldOwners'
  | 'roles.nodes.internal.ignoreType'
  | 'roles.nodes.internal.mediaType'
  | 'roles.nodes.internal.owner'
  | 'roles.nodes.internal.type'
  | 'slug'
  | 'uri'
  | 'url'
  | 'username'
  | 'nodeType'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type WpUserGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpUserEdge>;
  readonly nodes: ReadonlyArray<WpUser>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type WpUserSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<WpUserFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type WpCommentConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpCommentEdge>;
  readonly nodes: ReadonlyArray<WpComment>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<WpCommentGroupConnection>;
};


type WpCommentConnection_distinctArgs = {
  field: WpCommentFieldsEnum;
};


type WpCommentConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: WpCommentFieldsEnum;
};

type WpCommentEdge = {
  readonly next: Maybe<WpComment>;
  readonly node: WpComment;
  readonly previous: Maybe<WpComment>;
};

type WpCommentFieldsEnum =
  | 'agent'
  | 'approved'
  | 'author.node.databaseId'
  | 'author.node.email'
  | 'author.node.id'
  | 'author.node.name'
  | 'author.node.url'
  | 'authorIp'
  | 'commentedOn.node.databaseId'
  | 'commentedOn.node.date'
  | 'commentedOn.node.dateGmt'
  | 'commentedOn.node.desiredSlug'
  | 'commentedOn.node.enclosure'
  | 'commentedOn.node.guid'
  | 'commentedOn.node.id'
  | 'commentedOn.node.link'
  | 'commentedOn.node.modified'
  | 'commentedOn.node.modifiedGmt'
  | 'commentedOn.node.slug'
  | 'commentedOn.node.status'
  | 'commentedOn.node.template.templateName'
  | 'commentedOn.node.uri'
  | 'commentedOn.node.nodeType'
  | 'commentedOn.node.parent.id'
  | 'commentedOn.node.parent.children'
  | 'commentedOn.node.children'
  | 'commentedOn.node.children.id'
  | 'commentedOn.node.children.children'
  | 'commentedOn.node.internal.content'
  | 'commentedOn.node.internal.contentDigest'
  | 'commentedOn.node.internal.description'
  | 'commentedOn.node.internal.fieldOwners'
  | 'commentedOn.node.internal.ignoreType'
  | 'commentedOn.node.internal.mediaType'
  | 'commentedOn.node.internal.owner'
  | 'commentedOn.node.internal.type'
  | 'content'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'id'
  | 'karma'
  | 'wpParent.node.agent'
  | 'wpParent.node.approved'
  | 'wpParent.node.authorIp'
  | 'wpParent.node.content'
  | 'wpParent.node.databaseId'
  | 'wpParent.node.date'
  | 'wpParent.node.dateGmt'
  | 'wpParent.node.id'
  | 'wpParent.node.karma'
  | 'wpParent.node.parentDatabaseId'
  | 'wpParent.node.parentId'
  | 'wpParent.node.replies.nodes'
  | 'wpParent.node.type'
  | 'wpParent.node.nodeType'
  | 'wpParent.node.parent.id'
  | 'wpParent.node.parent.children'
  | 'wpParent.node.children'
  | 'wpParent.node.children.id'
  | 'wpParent.node.children.children'
  | 'wpParent.node.internal.content'
  | 'wpParent.node.internal.contentDigest'
  | 'wpParent.node.internal.description'
  | 'wpParent.node.internal.fieldOwners'
  | 'wpParent.node.internal.ignoreType'
  | 'wpParent.node.internal.mediaType'
  | 'wpParent.node.internal.owner'
  | 'wpParent.node.internal.type'
  | 'parentDatabaseId'
  | 'parentId'
  | 'replies.nodes'
  | 'replies.nodes.agent'
  | 'replies.nodes.approved'
  | 'replies.nodes.authorIp'
  | 'replies.nodes.content'
  | 'replies.nodes.databaseId'
  | 'replies.nodes.date'
  | 'replies.nodes.dateGmt'
  | 'replies.nodes.id'
  | 'replies.nodes.karma'
  | 'replies.nodes.parentDatabaseId'
  | 'replies.nodes.parentId'
  | 'replies.nodes.replies.nodes'
  | 'replies.nodes.type'
  | 'replies.nodes.nodeType'
  | 'replies.nodes.parent.id'
  | 'replies.nodes.parent.children'
  | 'replies.nodes.children'
  | 'replies.nodes.children.id'
  | 'replies.nodes.children.children'
  | 'replies.nodes.internal.content'
  | 'replies.nodes.internal.contentDigest'
  | 'replies.nodes.internal.description'
  | 'replies.nodes.internal.fieldOwners'
  | 'replies.nodes.internal.ignoreType'
  | 'replies.nodes.internal.mediaType'
  | 'replies.nodes.internal.owner'
  | 'replies.nodes.internal.type'
  | 'type'
  | 'nodeType'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type WpCommentGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpCommentEdge>;
  readonly nodes: ReadonlyArray<WpComment>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type WpCommentSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<WpCommentFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type WpMediaItemConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpMediaItemEdge>;
  readonly nodes: ReadonlyArray<WpMediaItem>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<WpMediaItemGroupConnection>;
};


type WpMediaItemConnection_distinctArgs = {
  field: WpMediaItemFieldsEnum;
};


type WpMediaItemConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: WpMediaItemFieldsEnum;
};

type WpMediaItemEdge = {
  readonly next: Maybe<WpMediaItem>;
  readonly node: WpMediaItem;
  readonly previous: Maybe<WpMediaItem>;
};

type WpMediaItemFieldsEnum =
  | 'altText'
  | 'ancestors.nodes'
  | 'ancestors.nodes.databaseId'
  | 'ancestors.nodes.date'
  | 'ancestors.nodes.dateGmt'
  | 'ancestors.nodes.desiredSlug'
  | 'ancestors.nodes.enclosure'
  | 'ancestors.nodes.guid'
  | 'ancestors.nodes.id'
  | 'ancestors.nodes.link'
  | 'ancestors.nodes.modified'
  | 'ancestors.nodes.modifiedGmt'
  | 'ancestors.nodes.slug'
  | 'ancestors.nodes.status'
  | 'ancestors.nodes.template.templateName'
  | 'ancestors.nodes.uri'
  | 'ancestors.nodes.nodeType'
  | 'ancestors.nodes.parent.id'
  | 'ancestors.nodes.parent.children'
  | 'ancestors.nodes.children'
  | 'ancestors.nodes.children.id'
  | 'ancestors.nodes.children.children'
  | 'ancestors.nodes.internal.content'
  | 'ancestors.nodes.internal.contentDigest'
  | 'ancestors.nodes.internal.description'
  | 'ancestors.nodes.internal.fieldOwners'
  | 'ancestors.nodes.internal.ignoreType'
  | 'ancestors.nodes.internal.mediaType'
  | 'ancestors.nodes.internal.owner'
  | 'ancestors.nodes.internal.type'
  | 'author.node.avatar.default'
  | 'author.node.avatar.extraAttr'
  | 'author.node.avatar.forceDefault'
  | 'author.node.avatar.foundAvatar'
  | 'author.node.avatar.height'
  | 'author.node.avatar.rating'
  | 'author.node.avatar.scheme'
  | 'author.node.avatar.size'
  | 'author.node.avatar.url'
  | 'author.node.avatar.width'
  | 'author.node.capKey'
  | 'author.node.capabilities'
  | 'author.node.comments.nodes'
  | 'author.node.databaseId'
  | 'author.node.description'
  | 'author.node.email'
  | 'author.node.extraCapabilities'
  | 'author.node.firstName'
  | 'author.node.id'
  | 'author.node.lastName'
  | 'author.node.locale'
  | 'author.node.name'
  | 'author.node.nicename'
  | 'author.node.nickname'
  | 'author.node.pages.nodes'
  | 'author.node.posts.nodes'
  | 'author.node.registeredDate'
  | 'author.node.roles.nodes'
  | 'author.node.slug'
  | 'author.node.uri'
  | 'author.node.url'
  | 'author.node.username'
  | 'author.node.nodeType'
  | 'author.node.parent.id'
  | 'author.node.parent.children'
  | 'author.node.children'
  | 'author.node.children.id'
  | 'author.node.children.children'
  | 'author.node.internal.content'
  | 'author.node.internal.contentDigest'
  | 'author.node.internal.description'
  | 'author.node.internal.fieldOwners'
  | 'author.node.internal.ignoreType'
  | 'author.node.internal.mediaType'
  | 'author.node.internal.owner'
  | 'author.node.internal.type'
  | 'authorDatabaseId'
  | 'authorId'
  | 'caption'
  | 'wpChildren.nodes'
  | 'wpChildren.nodes.databaseId'
  | 'wpChildren.nodes.date'
  | 'wpChildren.nodes.dateGmt'
  | 'wpChildren.nodes.desiredSlug'
  | 'wpChildren.nodes.enclosure'
  | 'wpChildren.nodes.guid'
  | 'wpChildren.nodes.id'
  | 'wpChildren.nodes.link'
  | 'wpChildren.nodes.modified'
  | 'wpChildren.nodes.modifiedGmt'
  | 'wpChildren.nodes.slug'
  | 'wpChildren.nodes.status'
  | 'wpChildren.nodes.template.templateName'
  | 'wpChildren.nodes.uri'
  | 'wpChildren.nodes.nodeType'
  | 'wpChildren.nodes.parent.id'
  | 'wpChildren.nodes.parent.children'
  | 'wpChildren.nodes.children'
  | 'wpChildren.nodes.children.id'
  | 'wpChildren.nodes.children.children'
  | 'wpChildren.nodes.internal.content'
  | 'wpChildren.nodes.internal.contentDigest'
  | 'wpChildren.nodes.internal.description'
  | 'wpChildren.nodes.internal.fieldOwners'
  | 'wpChildren.nodes.internal.ignoreType'
  | 'wpChildren.nodes.internal.mediaType'
  | 'wpChildren.nodes.internal.owner'
  | 'wpChildren.nodes.internal.type'
  | 'commentCount'
  | 'commentStatus'
  | 'comments.nodes'
  | 'comments.nodes.agent'
  | 'comments.nodes.approved'
  | 'comments.nodes.authorIp'
  | 'comments.nodes.content'
  | 'comments.nodes.databaseId'
  | 'comments.nodes.date'
  | 'comments.nodes.dateGmt'
  | 'comments.nodes.id'
  | 'comments.nodes.karma'
  | 'comments.nodes.parentDatabaseId'
  | 'comments.nodes.parentId'
  | 'comments.nodes.replies.nodes'
  | 'comments.nodes.type'
  | 'comments.nodes.nodeType'
  | 'comments.nodes.parent.id'
  | 'comments.nodes.parent.children'
  | 'comments.nodes.children'
  | 'comments.nodes.children.id'
  | 'comments.nodes.children.children'
  | 'comments.nodes.internal.content'
  | 'comments.nodes.internal.contentDigest'
  | 'comments.nodes.internal.description'
  | 'comments.nodes.internal.fieldOwners'
  | 'comments.nodes.internal.ignoreType'
  | 'comments.nodes.internal.mediaType'
  | 'comments.nodes.internal.owner'
  | 'comments.nodes.internal.type'
  | 'contentType.node.archivePath'
  | 'contentType.node.canExport'
  | 'contentType.node.connectedTaxonomies.nodes'
  | 'contentType.node.contentNodes.nodes'
  | 'contentType.node.deleteWithUser'
  | 'contentType.node.description'
  | 'contentType.node.excludeFromSearch'
  | 'contentType.node.graphqlPluralName'
  | 'contentType.node.graphqlSingleName'
  | 'contentType.node.hasArchive'
  | 'contentType.node.hierarchical'
  | 'contentType.node.id'
  | 'contentType.node.isFrontPage'
  | 'contentType.node.isPostsPage'
  | 'contentType.node.label'
  | 'contentType.node.labels.addNew'
  | 'contentType.node.labels.addNewItem'
  | 'contentType.node.labels.allItems'
  | 'contentType.node.labels.archives'
  | 'contentType.node.labels.attributes'
  | 'contentType.node.labels.editItem'
  | 'contentType.node.labels.featuredImage'
  | 'contentType.node.labels.filterItemsList'
  | 'contentType.node.labels.insertIntoItem'
  | 'contentType.node.labels.itemsList'
  | 'contentType.node.labels.itemsListNavigation'
  | 'contentType.node.labels.menuName'
  | 'contentType.node.labels.name'
  | 'contentType.node.labels.newItem'
  | 'contentType.node.labels.notFound'
  | 'contentType.node.labels.notFoundInTrash'
  | 'contentType.node.labels.parentItemColon'
  | 'contentType.node.labels.removeFeaturedImage'
  | 'contentType.node.labels.searchItems'
  | 'contentType.node.labels.setFeaturedImage'
  | 'contentType.node.labels.singularName'
  | 'contentType.node.labels.uploadedToThisItem'
  | 'contentType.node.labels.useFeaturedImage'
  | 'contentType.node.labels.viewItem'
  | 'contentType.node.labels.viewItems'
  | 'contentType.node.menuIcon'
  | 'contentType.node.menuPosition'
  | 'contentType.node.name'
  | 'contentType.node.public'
  | 'contentType.node.publiclyQueryable'
  | 'contentType.node.restBase'
  | 'contentType.node.restControllerClass'
  | 'contentType.node.showInAdminBar'
  | 'contentType.node.showInGraphql'
  | 'contentType.node.showInMenu'
  | 'contentType.node.showInNavMenus'
  | 'contentType.node.showInRest'
  | 'contentType.node.showUi'
  | 'contentType.node.uri'
  | 'contentType.node.nodeType'
  | 'contentType.node.parent.id'
  | 'contentType.node.parent.children'
  | 'contentType.node.children'
  | 'contentType.node.children.id'
  | 'contentType.node.children.children'
  | 'contentType.node.internal.content'
  | 'contentType.node.internal.contentDigest'
  | 'contentType.node.internal.description'
  | 'contentType.node.internal.fieldOwners'
  | 'contentType.node.internal.ignoreType'
  | 'contentType.node.internal.mediaType'
  | 'contentType.node.internal.owner'
  | 'contentType.node.internal.type'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'description'
  | 'desiredSlug'
  | 'enclosure'
  | 'fileSize'
  | 'guid'
  | 'id'
  | 'lastEditedBy.node.avatar.default'
  | 'lastEditedBy.node.avatar.extraAttr'
  | 'lastEditedBy.node.avatar.forceDefault'
  | 'lastEditedBy.node.avatar.foundAvatar'
  | 'lastEditedBy.node.avatar.height'
  | 'lastEditedBy.node.avatar.rating'
  | 'lastEditedBy.node.avatar.scheme'
  | 'lastEditedBy.node.avatar.size'
  | 'lastEditedBy.node.avatar.url'
  | 'lastEditedBy.node.avatar.width'
  | 'lastEditedBy.node.capKey'
  | 'lastEditedBy.node.capabilities'
  | 'lastEditedBy.node.comments.nodes'
  | 'lastEditedBy.node.databaseId'
  | 'lastEditedBy.node.description'
  | 'lastEditedBy.node.email'
  | 'lastEditedBy.node.extraCapabilities'
  | 'lastEditedBy.node.firstName'
  | 'lastEditedBy.node.id'
  | 'lastEditedBy.node.lastName'
  | 'lastEditedBy.node.locale'
  | 'lastEditedBy.node.name'
  | 'lastEditedBy.node.nicename'
  | 'lastEditedBy.node.nickname'
  | 'lastEditedBy.node.pages.nodes'
  | 'lastEditedBy.node.posts.nodes'
  | 'lastEditedBy.node.registeredDate'
  | 'lastEditedBy.node.roles.nodes'
  | 'lastEditedBy.node.slug'
  | 'lastEditedBy.node.uri'
  | 'lastEditedBy.node.url'
  | 'lastEditedBy.node.username'
  | 'lastEditedBy.node.nodeType'
  | 'lastEditedBy.node.parent.id'
  | 'lastEditedBy.node.parent.children'
  | 'lastEditedBy.node.children'
  | 'lastEditedBy.node.children.id'
  | 'lastEditedBy.node.children.children'
  | 'lastEditedBy.node.internal.content'
  | 'lastEditedBy.node.internal.contentDigest'
  | 'lastEditedBy.node.internal.description'
  | 'lastEditedBy.node.internal.fieldOwners'
  | 'lastEditedBy.node.internal.ignoreType'
  | 'lastEditedBy.node.internal.mediaType'
  | 'lastEditedBy.node.internal.owner'
  | 'lastEditedBy.node.internal.type'
  | 'link'
  | 'mediaDetails.file'
  | 'mediaDetails.height'
  | 'mediaDetails.meta.aperture'
  | 'mediaDetails.meta.camera'
  | 'mediaDetails.meta.caption'
  | 'mediaDetails.meta.copyright'
  | 'mediaDetails.meta.createdTimestamp'
  | 'mediaDetails.meta.credit'
  | 'mediaDetails.meta.focalLength'
  | 'mediaDetails.meta.iso'
  | 'mediaDetails.meta.keywords'
  | 'mediaDetails.meta.orientation'
  | 'mediaDetails.meta.shutterSpeed'
  | 'mediaDetails.meta.title'
  | 'mediaDetails.sizes'
  | 'mediaDetails.sizes.file'
  | 'mediaDetails.sizes.fileSize'
  | 'mediaDetails.sizes.height'
  | 'mediaDetails.sizes.mimeType'
  | 'mediaDetails.sizes.name'
  | 'mediaDetails.sizes.sourceUrl'
  | 'mediaDetails.sizes.width'
  | 'mediaDetails.width'
  | 'mediaItemUrl'
  | 'mediaType'
  | 'mimeType'
  | 'modified'
  | 'modifiedGmt'
  | 'wpParent.node.databaseId'
  | 'wpParent.node.date'
  | 'wpParent.node.dateGmt'
  | 'wpParent.node.desiredSlug'
  | 'wpParent.node.enclosure'
  | 'wpParent.node.guid'
  | 'wpParent.node.id'
  | 'wpParent.node.link'
  | 'wpParent.node.modified'
  | 'wpParent.node.modifiedGmt'
  | 'wpParent.node.slug'
  | 'wpParent.node.status'
  | 'wpParent.node.template.templateName'
  | 'wpParent.node.uri'
  | 'wpParent.node.nodeType'
  | 'wpParent.node.parent.id'
  | 'wpParent.node.parent.children'
  | 'wpParent.node.children'
  | 'wpParent.node.children.id'
  | 'wpParent.node.children.children'
  | 'wpParent.node.internal.content'
  | 'wpParent.node.internal.contentDigest'
  | 'wpParent.node.internal.description'
  | 'wpParent.node.internal.fieldOwners'
  | 'wpParent.node.internal.ignoreType'
  | 'wpParent.node.internal.mediaType'
  | 'wpParent.node.internal.owner'
  | 'wpParent.node.internal.type'
  | 'parentDatabaseId'
  | 'parentId'
  | 'sizes'
  | 'slug'
  | 'sourceUrl'
  | 'srcSet'
  | 'status'
  | 'template.templateName'
  | 'title'
  | 'uri'
  | 'nodeType'
  | 'remoteFile.sourceInstanceName'
  | 'remoteFile.absolutePath'
  | 'remoteFile.relativePath'
  | 'remoteFile.extension'
  | 'remoteFile.size'
  | 'remoteFile.prettySize'
  | 'remoteFile.modifiedTime'
  | 'remoteFile.accessTime'
  | 'remoteFile.changeTime'
  | 'remoteFile.birthTime'
  | 'remoteFile.root'
  | 'remoteFile.dir'
  | 'remoteFile.base'
  | 'remoteFile.ext'
  | 'remoteFile.name'
  | 'remoteFile.relativeDirectory'
  | 'remoteFile.dev'
  | 'remoteFile.mode'
  | 'remoteFile.nlink'
  | 'remoteFile.uid'
  | 'remoteFile.gid'
  | 'remoteFile.rdev'
  | 'remoteFile.ino'
  | 'remoteFile.atimeMs'
  | 'remoteFile.mtimeMs'
  | 'remoteFile.ctimeMs'
  | 'remoteFile.atime'
  | 'remoteFile.mtime'
  | 'remoteFile.ctime'
  | 'remoteFile.birthtime'
  | 'remoteFile.birthtimeMs'
  | 'remoteFile.blksize'
  | 'remoteFile.blocks'
  | 'remoteFile.url'
  | 'remoteFile.publicURL'
  | 'remoteFile.childrenImageSharp'
  | 'remoteFile.childrenImageSharp.fixed.base64'
  | 'remoteFile.childrenImageSharp.fixed.tracedSVG'
  | 'remoteFile.childrenImageSharp.fixed.aspectRatio'
  | 'remoteFile.childrenImageSharp.fixed.width'
  | 'remoteFile.childrenImageSharp.fixed.height'
  | 'remoteFile.childrenImageSharp.fixed.src'
  | 'remoteFile.childrenImageSharp.fixed.srcSet'
  | 'remoteFile.childrenImageSharp.fixed.srcWebp'
  | 'remoteFile.childrenImageSharp.fixed.srcSetWebp'
  | 'remoteFile.childrenImageSharp.fixed.originalName'
  | 'remoteFile.childrenImageSharp.fluid.base64'
  | 'remoteFile.childrenImageSharp.fluid.tracedSVG'
  | 'remoteFile.childrenImageSharp.fluid.aspectRatio'
  | 'remoteFile.childrenImageSharp.fluid.src'
  | 'remoteFile.childrenImageSharp.fluid.srcSet'
  | 'remoteFile.childrenImageSharp.fluid.srcWebp'
  | 'remoteFile.childrenImageSharp.fluid.srcSetWebp'
  | 'remoteFile.childrenImageSharp.fluid.sizes'
  | 'remoteFile.childrenImageSharp.fluid.originalImg'
  | 'remoteFile.childrenImageSharp.fluid.originalName'
  | 'remoteFile.childrenImageSharp.fluid.presentationWidth'
  | 'remoteFile.childrenImageSharp.fluid.presentationHeight'
  | 'remoteFile.childrenImageSharp.gatsbyImageData'
  | 'remoteFile.childrenImageSharp.original.width'
  | 'remoteFile.childrenImageSharp.original.height'
  | 'remoteFile.childrenImageSharp.original.src'
  | 'remoteFile.childrenImageSharp.resize.src'
  | 'remoteFile.childrenImageSharp.resize.tracedSVG'
  | 'remoteFile.childrenImageSharp.resize.width'
  | 'remoteFile.childrenImageSharp.resize.height'
  | 'remoteFile.childrenImageSharp.resize.aspectRatio'
  | 'remoteFile.childrenImageSharp.resize.originalName'
  | 'remoteFile.childrenImageSharp.id'
  | 'remoteFile.childrenImageSharp.parent.id'
  | 'remoteFile.childrenImageSharp.parent.children'
  | 'remoteFile.childrenImageSharp.children'
  | 'remoteFile.childrenImageSharp.children.id'
  | 'remoteFile.childrenImageSharp.children.children'
  | 'remoteFile.childrenImageSharp.internal.content'
  | 'remoteFile.childrenImageSharp.internal.contentDigest'
  | 'remoteFile.childrenImageSharp.internal.description'
  | 'remoteFile.childrenImageSharp.internal.fieldOwners'
  | 'remoteFile.childrenImageSharp.internal.ignoreType'
  | 'remoteFile.childrenImageSharp.internal.mediaType'
  | 'remoteFile.childrenImageSharp.internal.owner'
  | 'remoteFile.childrenImageSharp.internal.type'
  | 'remoteFile.childImageSharp.fixed.base64'
  | 'remoteFile.childImageSharp.fixed.tracedSVG'
  | 'remoteFile.childImageSharp.fixed.aspectRatio'
  | 'remoteFile.childImageSharp.fixed.width'
  | 'remoteFile.childImageSharp.fixed.height'
  | 'remoteFile.childImageSharp.fixed.src'
  | 'remoteFile.childImageSharp.fixed.srcSet'
  | 'remoteFile.childImageSharp.fixed.srcWebp'
  | 'remoteFile.childImageSharp.fixed.srcSetWebp'
  | 'remoteFile.childImageSharp.fixed.originalName'
  | 'remoteFile.childImageSharp.fluid.base64'
  | 'remoteFile.childImageSharp.fluid.tracedSVG'
  | 'remoteFile.childImageSharp.fluid.aspectRatio'
  | 'remoteFile.childImageSharp.fluid.src'
  | 'remoteFile.childImageSharp.fluid.srcSet'
  | 'remoteFile.childImageSharp.fluid.srcWebp'
  | 'remoteFile.childImageSharp.fluid.srcSetWebp'
  | 'remoteFile.childImageSharp.fluid.sizes'
  | 'remoteFile.childImageSharp.fluid.originalImg'
  | 'remoteFile.childImageSharp.fluid.originalName'
  | 'remoteFile.childImageSharp.fluid.presentationWidth'
  | 'remoteFile.childImageSharp.fluid.presentationHeight'
  | 'remoteFile.childImageSharp.gatsbyImageData'
  | 'remoteFile.childImageSharp.original.width'
  | 'remoteFile.childImageSharp.original.height'
  | 'remoteFile.childImageSharp.original.src'
  | 'remoteFile.childImageSharp.resize.src'
  | 'remoteFile.childImageSharp.resize.tracedSVG'
  | 'remoteFile.childImageSharp.resize.width'
  | 'remoteFile.childImageSharp.resize.height'
  | 'remoteFile.childImageSharp.resize.aspectRatio'
  | 'remoteFile.childImageSharp.resize.originalName'
  | 'remoteFile.childImageSharp.id'
  | 'remoteFile.childImageSharp.parent.id'
  | 'remoteFile.childImageSharp.parent.children'
  | 'remoteFile.childImageSharp.children'
  | 'remoteFile.childImageSharp.children.id'
  | 'remoteFile.childImageSharp.children.children'
  | 'remoteFile.childImageSharp.internal.content'
  | 'remoteFile.childImageSharp.internal.contentDigest'
  | 'remoteFile.childImageSharp.internal.description'
  | 'remoteFile.childImageSharp.internal.fieldOwners'
  | 'remoteFile.childImageSharp.internal.ignoreType'
  | 'remoteFile.childImageSharp.internal.mediaType'
  | 'remoteFile.childImageSharp.internal.owner'
  | 'remoteFile.childImageSharp.internal.type'
  | 'remoteFile.id'
  | 'remoteFile.parent.id'
  | 'remoteFile.parent.parent.id'
  | 'remoteFile.parent.parent.children'
  | 'remoteFile.parent.children'
  | 'remoteFile.parent.children.id'
  | 'remoteFile.parent.children.children'
  | 'remoteFile.parent.internal.content'
  | 'remoteFile.parent.internal.contentDigest'
  | 'remoteFile.parent.internal.description'
  | 'remoteFile.parent.internal.fieldOwners'
  | 'remoteFile.parent.internal.ignoreType'
  | 'remoteFile.parent.internal.mediaType'
  | 'remoteFile.parent.internal.owner'
  | 'remoteFile.parent.internal.type'
  | 'remoteFile.children'
  | 'remoteFile.children.id'
  | 'remoteFile.children.parent.id'
  | 'remoteFile.children.parent.children'
  | 'remoteFile.children.children'
  | 'remoteFile.children.children.id'
  | 'remoteFile.children.children.children'
  | 'remoteFile.children.internal.content'
  | 'remoteFile.children.internal.contentDigest'
  | 'remoteFile.children.internal.description'
  | 'remoteFile.children.internal.fieldOwners'
  | 'remoteFile.children.internal.ignoreType'
  | 'remoteFile.children.internal.mediaType'
  | 'remoteFile.children.internal.owner'
  | 'remoteFile.children.internal.type'
  | 'remoteFile.internal.content'
  | 'remoteFile.internal.contentDigest'
  | 'remoteFile.internal.description'
  | 'remoteFile.internal.fieldOwners'
  | 'remoteFile.internal.ignoreType'
  | 'remoteFile.internal.mediaType'
  | 'remoteFile.internal.owner'
  | 'remoteFile.internal.type'
  | 'localFile.sourceInstanceName'
  | 'localFile.absolutePath'
  | 'localFile.relativePath'
  | 'localFile.extension'
  | 'localFile.size'
  | 'localFile.prettySize'
  | 'localFile.modifiedTime'
  | 'localFile.accessTime'
  | 'localFile.changeTime'
  | 'localFile.birthTime'
  | 'localFile.root'
  | 'localFile.dir'
  | 'localFile.base'
  | 'localFile.ext'
  | 'localFile.name'
  | 'localFile.relativeDirectory'
  | 'localFile.dev'
  | 'localFile.mode'
  | 'localFile.nlink'
  | 'localFile.uid'
  | 'localFile.gid'
  | 'localFile.rdev'
  | 'localFile.ino'
  | 'localFile.atimeMs'
  | 'localFile.mtimeMs'
  | 'localFile.ctimeMs'
  | 'localFile.atime'
  | 'localFile.mtime'
  | 'localFile.ctime'
  | 'localFile.birthtime'
  | 'localFile.birthtimeMs'
  | 'localFile.blksize'
  | 'localFile.blocks'
  | 'localFile.url'
  | 'localFile.publicURL'
  | 'localFile.childrenImageSharp'
  | 'localFile.childrenImageSharp.fixed.base64'
  | 'localFile.childrenImageSharp.fixed.tracedSVG'
  | 'localFile.childrenImageSharp.fixed.aspectRatio'
  | 'localFile.childrenImageSharp.fixed.width'
  | 'localFile.childrenImageSharp.fixed.height'
  | 'localFile.childrenImageSharp.fixed.src'
  | 'localFile.childrenImageSharp.fixed.srcSet'
  | 'localFile.childrenImageSharp.fixed.srcWebp'
  | 'localFile.childrenImageSharp.fixed.srcSetWebp'
  | 'localFile.childrenImageSharp.fixed.originalName'
  | 'localFile.childrenImageSharp.fluid.base64'
  | 'localFile.childrenImageSharp.fluid.tracedSVG'
  | 'localFile.childrenImageSharp.fluid.aspectRatio'
  | 'localFile.childrenImageSharp.fluid.src'
  | 'localFile.childrenImageSharp.fluid.srcSet'
  | 'localFile.childrenImageSharp.fluid.srcWebp'
  | 'localFile.childrenImageSharp.fluid.srcSetWebp'
  | 'localFile.childrenImageSharp.fluid.sizes'
  | 'localFile.childrenImageSharp.fluid.originalImg'
  | 'localFile.childrenImageSharp.fluid.originalName'
  | 'localFile.childrenImageSharp.fluid.presentationWidth'
  | 'localFile.childrenImageSharp.fluid.presentationHeight'
  | 'localFile.childrenImageSharp.gatsbyImageData'
  | 'localFile.childrenImageSharp.original.width'
  | 'localFile.childrenImageSharp.original.height'
  | 'localFile.childrenImageSharp.original.src'
  | 'localFile.childrenImageSharp.resize.src'
  | 'localFile.childrenImageSharp.resize.tracedSVG'
  | 'localFile.childrenImageSharp.resize.width'
  | 'localFile.childrenImageSharp.resize.height'
  | 'localFile.childrenImageSharp.resize.aspectRatio'
  | 'localFile.childrenImageSharp.resize.originalName'
  | 'localFile.childrenImageSharp.id'
  | 'localFile.childrenImageSharp.parent.id'
  | 'localFile.childrenImageSharp.parent.children'
  | 'localFile.childrenImageSharp.children'
  | 'localFile.childrenImageSharp.children.id'
  | 'localFile.childrenImageSharp.children.children'
  | 'localFile.childrenImageSharp.internal.content'
  | 'localFile.childrenImageSharp.internal.contentDigest'
  | 'localFile.childrenImageSharp.internal.description'
  | 'localFile.childrenImageSharp.internal.fieldOwners'
  | 'localFile.childrenImageSharp.internal.ignoreType'
  | 'localFile.childrenImageSharp.internal.mediaType'
  | 'localFile.childrenImageSharp.internal.owner'
  | 'localFile.childrenImageSharp.internal.type'
  | 'localFile.childImageSharp.fixed.base64'
  | 'localFile.childImageSharp.fixed.tracedSVG'
  | 'localFile.childImageSharp.fixed.aspectRatio'
  | 'localFile.childImageSharp.fixed.width'
  | 'localFile.childImageSharp.fixed.height'
  | 'localFile.childImageSharp.fixed.src'
  | 'localFile.childImageSharp.fixed.srcSet'
  | 'localFile.childImageSharp.fixed.srcWebp'
  | 'localFile.childImageSharp.fixed.srcSetWebp'
  | 'localFile.childImageSharp.fixed.originalName'
  | 'localFile.childImageSharp.fluid.base64'
  | 'localFile.childImageSharp.fluid.tracedSVG'
  | 'localFile.childImageSharp.fluid.aspectRatio'
  | 'localFile.childImageSharp.fluid.src'
  | 'localFile.childImageSharp.fluid.srcSet'
  | 'localFile.childImageSharp.fluid.srcWebp'
  | 'localFile.childImageSharp.fluid.srcSetWebp'
  | 'localFile.childImageSharp.fluid.sizes'
  | 'localFile.childImageSharp.fluid.originalImg'
  | 'localFile.childImageSharp.fluid.originalName'
  | 'localFile.childImageSharp.fluid.presentationWidth'
  | 'localFile.childImageSharp.fluid.presentationHeight'
  | 'localFile.childImageSharp.gatsbyImageData'
  | 'localFile.childImageSharp.original.width'
  | 'localFile.childImageSharp.original.height'
  | 'localFile.childImageSharp.original.src'
  | 'localFile.childImageSharp.resize.src'
  | 'localFile.childImageSharp.resize.tracedSVG'
  | 'localFile.childImageSharp.resize.width'
  | 'localFile.childImageSharp.resize.height'
  | 'localFile.childImageSharp.resize.aspectRatio'
  | 'localFile.childImageSharp.resize.originalName'
  | 'localFile.childImageSharp.id'
  | 'localFile.childImageSharp.parent.id'
  | 'localFile.childImageSharp.parent.children'
  | 'localFile.childImageSharp.children'
  | 'localFile.childImageSharp.children.id'
  | 'localFile.childImageSharp.children.children'
  | 'localFile.childImageSharp.internal.content'
  | 'localFile.childImageSharp.internal.contentDigest'
  | 'localFile.childImageSharp.internal.description'
  | 'localFile.childImageSharp.internal.fieldOwners'
  | 'localFile.childImageSharp.internal.ignoreType'
  | 'localFile.childImageSharp.internal.mediaType'
  | 'localFile.childImageSharp.internal.owner'
  | 'localFile.childImageSharp.internal.type'
  | 'localFile.id'
  | 'localFile.parent.id'
  | 'localFile.parent.parent.id'
  | 'localFile.parent.parent.children'
  | 'localFile.parent.children'
  | 'localFile.parent.children.id'
  | 'localFile.parent.children.children'
  | 'localFile.parent.internal.content'
  | 'localFile.parent.internal.contentDigest'
  | 'localFile.parent.internal.description'
  | 'localFile.parent.internal.fieldOwners'
  | 'localFile.parent.internal.ignoreType'
  | 'localFile.parent.internal.mediaType'
  | 'localFile.parent.internal.owner'
  | 'localFile.parent.internal.type'
  | 'localFile.children'
  | 'localFile.children.id'
  | 'localFile.children.parent.id'
  | 'localFile.children.parent.children'
  | 'localFile.children.children'
  | 'localFile.children.children.id'
  | 'localFile.children.children.children'
  | 'localFile.children.internal.content'
  | 'localFile.children.internal.contentDigest'
  | 'localFile.children.internal.description'
  | 'localFile.children.internal.fieldOwners'
  | 'localFile.children.internal.ignoreType'
  | 'localFile.children.internal.mediaType'
  | 'localFile.children.internal.owner'
  | 'localFile.children.internal.type'
  | 'localFile.internal.content'
  | 'localFile.internal.contentDigest'
  | 'localFile.internal.description'
  | 'localFile.internal.fieldOwners'
  | 'localFile.internal.ignoreType'
  | 'localFile.internal.mediaType'
  | 'localFile.internal.owner'
  | 'localFile.internal.type'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type WpMediaItemGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpMediaItemEdge>;
  readonly nodes: ReadonlyArray<WpMediaItem>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type WpMediaItemSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<WpMediaItemFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type WpPageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpPageEdge>;
  readonly nodes: ReadonlyArray<WpPage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<WpPageGroupConnection>;
};


type WpPageConnection_distinctArgs = {
  field: WpPageFieldsEnum;
};


type WpPageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: WpPageFieldsEnum;
};

type WpPageEdge = {
  readonly next: Maybe<WpPage>;
  readonly node: WpPage;
  readonly previous: Maybe<WpPage>;
};

type WpPageFieldsEnum =
  | 'acf.description'
  | 'acf.excerpt'
  | 'acf.fieldGroupName'
  | 'acf.metaDescription'
  | 'ancestors.nodes'
  | 'ancestors.nodes.databaseId'
  | 'ancestors.nodes.date'
  | 'ancestors.nodes.dateGmt'
  | 'ancestors.nodes.desiredSlug'
  | 'ancestors.nodes.enclosure'
  | 'ancestors.nodes.guid'
  | 'ancestors.nodes.id'
  | 'ancestors.nodes.link'
  | 'ancestors.nodes.modified'
  | 'ancestors.nodes.modifiedGmt'
  | 'ancestors.nodes.slug'
  | 'ancestors.nodes.status'
  | 'ancestors.nodes.template.templateName'
  | 'ancestors.nodes.uri'
  | 'ancestors.nodes.nodeType'
  | 'ancestors.nodes.parent.id'
  | 'ancestors.nodes.parent.children'
  | 'ancestors.nodes.children'
  | 'ancestors.nodes.children.id'
  | 'ancestors.nodes.children.children'
  | 'ancestors.nodes.internal.content'
  | 'ancestors.nodes.internal.contentDigest'
  | 'ancestors.nodes.internal.description'
  | 'ancestors.nodes.internal.fieldOwners'
  | 'ancestors.nodes.internal.ignoreType'
  | 'ancestors.nodes.internal.mediaType'
  | 'ancestors.nodes.internal.owner'
  | 'ancestors.nodes.internal.type'
  | 'author.node.avatar.default'
  | 'author.node.avatar.extraAttr'
  | 'author.node.avatar.forceDefault'
  | 'author.node.avatar.foundAvatar'
  | 'author.node.avatar.height'
  | 'author.node.avatar.rating'
  | 'author.node.avatar.scheme'
  | 'author.node.avatar.size'
  | 'author.node.avatar.url'
  | 'author.node.avatar.width'
  | 'author.node.capKey'
  | 'author.node.capabilities'
  | 'author.node.comments.nodes'
  | 'author.node.databaseId'
  | 'author.node.description'
  | 'author.node.email'
  | 'author.node.extraCapabilities'
  | 'author.node.firstName'
  | 'author.node.id'
  | 'author.node.lastName'
  | 'author.node.locale'
  | 'author.node.name'
  | 'author.node.nicename'
  | 'author.node.nickname'
  | 'author.node.pages.nodes'
  | 'author.node.posts.nodes'
  | 'author.node.registeredDate'
  | 'author.node.roles.nodes'
  | 'author.node.slug'
  | 'author.node.uri'
  | 'author.node.url'
  | 'author.node.username'
  | 'author.node.nodeType'
  | 'author.node.parent.id'
  | 'author.node.parent.children'
  | 'author.node.children'
  | 'author.node.children.id'
  | 'author.node.children.children'
  | 'author.node.internal.content'
  | 'author.node.internal.contentDigest'
  | 'author.node.internal.description'
  | 'author.node.internal.fieldOwners'
  | 'author.node.internal.ignoreType'
  | 'author.node.internal.mediaType'
  | 'author.node.internal.owner'
  | 'author.node.internal.type'
  | 'authorDatabaseId'
  | 'authorId'
  | 'wpChildren.nodes'
  | 'wpChildren.nodes.databaseId'
  | 'wpChildren.nodes.date'
  | 'wpChildren.nodes.dateGmt'
  | 'wpChildren.nodes.desiredSlug'
  | 'wpChildren.nodes.enclosure'
  | 'wpChildren.nodes.guid'
  | 'wpChildren.nodes.id'
  | 'wpChildren.nodes.link'
  | 'wpChildren.nodes.modified'
  | 'wpChildren.nodes.modifiedGmt'
  | 'wpChildren.nodes.slug'
  | 'wpChildren.nodes.status'
  | 'wpChildren.nodes.template.templateName'
  | 'wpChildren.nodes.uri'
  | 'wpChildren.nodes.nodeType'
  | 'wpChildren.nodes.parent.id'
  | 'wpChildren.nodes.parent.children'
  | 'wpChildren.nodes.children'
  | 'wpChildren.nodes.children.id'
  | 'wpChildren.nodes.children.children'
  | 'wpChildren.nodes.internal.content'
  | 'wpChildren.nodes.internal.contentDigest'
  | 'wpChildren.nodes.internal.description'
  | 'wpChildren.nodes.internal.fieldOwners'
  | 'wpChildren.nodes.internal.ignoreType'
  | 'wpChildren.nodes.internal.mediaType'
  | 'wpChildren.nodes.internal.owner'
  | 'wpChildren.nodes.internal.type'
  | 'commentCount'
  | 'commentStatus'
  | 'comments.nodes'
  | 'comments.nodes.agent'
  | 'comments.nodes.approved'
  | 'comments.nodes.authorIp'
  | 'comments.nodes.content'
  | 'comments.nodes.databaseId'
  | 'comments.nodes.date'
  | 'comments.nodes.dateGmt'
  | 'comments.nodes.id'
  | 'comments.nodes.karma'
  | 'comments.nodes.parentDatabaseId'
  | 'comments.nodes.parentId'
  | 'comments.nodes.replies.nodes'
  | 'comments.nodes.type'
  | 'comments.nodes.nodeType'
  | 'comments.nodes.parent.id'
  | 'comments.nodes.parent.children'
  | 'comments.nodes.children'
  | 'comments.nodes.children.id'
  | 'comments.nodes.children.children'
  | 'comments.nodes.internal.content'
  | 'comments.nodes.internal.contentDigest'
  | 'comments.nodes.internal.description'
  | 'comments.nodes.internal.fieldOwners'
  | 'comments.nodes.internal.ignoreType'
  | 'comments.nodes.internal.mediaType'
  | 'comments.nodes.internal.owner'
  | 'comments.nodes.internal.type'
  | 'content'
  | 'contentType.node.archivePath'
  | 'contentType.node.canExport'
  | 'contentType.node.connectedTaxonomies.nodes'
  | 'contentType.node.contentNodes.nodes'
  | 'contentType.node.deleteWithUser'
  | 'contentType.node.description'
  | 'contentType.node.excludeFromSearch'
  | 'contentType.node.graphqlPluralName'
  | 'contentType.node.graphqlSingleName'
  | 'contentType.node.hasArchive'
  | 'contentType.node.hierarchical'
  | 'contentType.node.id'
  | 'contentType.node.isFrontPage'
  | 'contentType.node.isPostsPage'
  | 'contentType.node.label'
  | 'contentType.node.labels.addNew'
  | 'contentType.node.labels.addNewItem'
  | 'contentType.node.labels.allItems'
  | 'contentType.node.labels.archives'
  | 'contentType.node.labels.attributes'
  | 'contentType.node.labels.editItem'
  | 'contentType.node.labels.featuredImage'
  | 'contentType.node.labels.filterItemsList'
  | 'contentType.node.labels.insertIntoItem'
  | 'contentType.node.labels.itemsList'
  | 'contentType.node.labels.itemsListNavigation'
  | 'contentType.node.labels.menuName'
  | 'contentType.node.labels.name'
  | 'contentType.node.labels.newItem'
  | 'contentType.node.labels.notFound'
  | 'contentType.node.labels.notFoundInTrash'
  | 'contentType.node.labels.parentItemColon'
  | 'contentType.node.labels.removeFeaturedImage'
  | 'contentType.node.labels.searchItems'
  | 'contentType.node.labels.setFeaturedImage'
  | 'contentType.node.labels.singularName'
  | 'contentType.node.labels.uploadedToThisItem'
  | 'contentType.node.labels.useFeaturedImage'
  | 'contentType.node.labels.viewItem'
  | 'contentType.node.labels.viewItems'
  | 'contentType.node.menuIcon'
  | 'contentType.node.menuPosition'
  | 'contentType.node.name'
  | 'contentType.node.public'
  | 'contentType.node.publiclyQueryable'
  | 'contentType.node.restBase'
  | 'contentType.node.restControllerClass'
  | 'contentType.node.showInAdminBar'
  | 'contentType.node.showInGraphql'
  | 'contentType.node.showInMenu'
  | 'contentType.node.showInNavMenus'
  | 'contentType.node.showInRest'
  | 'contentType.node.showUi'
  | 'contentType.node.uri'
  | 'contentType.node.nodeType'
  | 'contentType.node.parent.id'
  | 'contentType.node.parent.children'
  | 'contentType.node.children'
  | 'contentType.node.children.id'
  | 'contentType.node.children.children'
  | 'contentType.node.internal.content'
  | 'contentType.node.internal.contentDigest'
  | 'contentType.node.internal.description'
  | 'contentType.node.internal.fieldOwners'
  | 'contentType.node.internal.ignoreType'
  | 'contentType.node.internal.mediaType'
  | 'contentType.node.internal.owner'
  | 'contentType.node.internal.type'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'desiredSlug'
  | 'enclosure'
  | 'featuredImage.node.altText'
  | 'featuredImage.node.ancestors.nodes'
  | 'featuredImage.node.authorDatabaseId'
  | 'featuredImage.node.authorId'
  | 'featuredImage.node.caption'
  | 'featuredImage.node.wpChildren.nodes'
  | 'featuredImage.node.commentCount'
  | 'featuredImage.node.commentStatus'
  | 'featuredImage.node.comments.nodes'
  | 'featuredImage.node.databaseId'
  | 'featuredImage.node.date'
  | 'featuredImage.node.dateGmt'
  | 'featuredImage.node.description'
  | 'featuredImage.node.desiredSlug'
  | 'featuredImage.node.enclosure'
  | 'featuredImage.node.fileSize'
  | 'featuredImage.node.guid'
  | 'featuredImage.node.id'
  | 'featuredImage.node.link'
  | 'featuredImage.node.mediaDetails.file'
  | 'featuredImage.node.mediaDetails.height'
  | 'featuredImage.node.mediaDetails.sizes'
  | 'featuredImage.node.mediaDetails.width'
  | 'featuredImage.node.mediaItemUrl'
  | 'featuredImage.node.mediaType'
  | 'featuredImage.node.mimeType'
  | 'featuredImage.node.modified'
  | 'featuredImage.node.modifiedGmt'
  | 'featuredImage.node.parentDatabaseId'
  | 'featuredImage.node.parentId'
  | 'featuredImage.node.sizes'
  | 'featuredImage.node.slug'
  | 'featuredImage.node.sourceUrl'
  | 'featuredImage.node.srcSet'
  | 'featuredImage.node.status'
  | 'featuredImage.node.template.templateName'
  | 'featuredImage.node.title'
  | 'featuredImage.node.uri'
  | 'featuredImage.node.nodeType'
  | 'featuredImage.node.remoteFile.sourceInstanceName'
  | 'featuredImage.node.remoteFile.absolutePath'
  | 'featuredImage.node.remoteFile.relativePath'
  | 'featuredImage.node.remoteFile.extension'
  | 'featuredImage.node.remoteFile.size'
  | 'featuredImage.node.remoteFile.prettySize'
  | 'featuredImage.node.remoteFile.modifiedTime'
  | 'featuredImage.node.remoteFile.accessTime'
  | 'featuredImage.node.remoteFile.changeTime'
  | 'featuredImage.node.remoteFile.birthTime'
  | 'featuredImage.node.remoteFile.root'
  | 'featuredImage.node.remoteFile.dir'
  | 'featuredImage.node.remoteFile.base'
  | 'featuredImage.node.remoteFile.ext'
  | 'featuredImage.node.remoteFile.name'
  | 'featuredImage.node.remoteFile.relativeDirectory'
  | 'featuredImage.node.remoteFile.dev'
  | 'featuredImage.node.remoteFile.mode'
  | 'featuredImage.node.remoteFile.nlink'
  | 'featuredImage.node.remoteFile.uid'
  | 'featuredImage.node.remoteFile.gid'
  | 'featuredImage.node.remoteFile.rdev'
  | 'featuredImage.node.remoteFile.ino'
  | 'featuredImage.node.remoteFile.atimeMs'
  | 'featuredImage.node.remoteFile.mtimeMs'
  | 'featuredImage.node.remoteFile.ctimeMs'
  | 'featuredImage.node.remoteFile.atime'
  | 'featuredImage.node.remoteFile.mtime'
  | 'featuredImage.node.remoteFile.ctime'
  | 'featuredImage.node.remoteFile.birthtime'
  | 'featuredImage.node.remoteFile.birthtimeMs'
  | 'featuredImage.node.remoteFile.blksize'
  | 'featuredImage.node.remoteFile.blocks'
  | 'featuredImage.node.remoteFile.url'
  | 'featuredImage.node.remoteFile.publicURL'
  | 'featuredImage.node.remoteFile.childrenImageSharp'
  | 'featuredImage.node.remoteFile.id'
  | 'featuredImage.node.remoteFile.children'
  | 'featuredImage.node.localFile.sourceInstanceName'
  | 'featuredImage.node.localFile.absolutePath'
  | 'featuredImage.node.localFile.relativePath'
  | 'featuredImage.node.localFile.extension'
  | 'featuredImage.node.localFile.size'
  | 'featuredImage.node.localFile.prettySize'
  | 'featuredImage.node.localFile.modifiedTime'
  | 'featuredImage.node.localFile.accessTime'
  | 'featuredImage.node.localFile.changeTime'
  | 'featuredImage.node.localFile.birthTime'
  | 'featuredImage.node.localFile.root'
  | 'featuredImage.node.localFile.dir'
  | 'featuredImage.node.localFile.base'
  | 'featuredImage.node.localFile.ext'
  | 'featuredImage.node.localFile.name'
  | 'featuredImage.node.localFile.relativeDirectory'
  | 'featuredImage.node.localFile.dev'
  | 'featuredImage.node.localFile.mode'
  | 'featuredImage.node.localFile.nlink'
  | 'featuredImage.node.localFile.uid'
  | 'featuredImage.node.localFile.gid'
  | 'featuredImage.node.localFile.rdev'
  | 'featuredImage.node.localFile.ino'
  | 'featuredImage.node.localFile.atimeMs'
  | 'featuredImage.node.localFile.mtimeMs'
  | 'featuredImage.node.localFile.ctimeMs'
  | 'featuredImage.node.localFile.atime'
  | 'featuredImage.node.localFile.mtime'
  | 'featuredImage.node.localFile.ctime'
  | 'featuredImage.node.localFile.birthtime'
  | 'featuredImage.node.localFile.birthtimeMs'
  | 'featuredImage.node.localFile.blksize'
  | 'featuredImage.node.localFile.blocks'
  | 'featuredImage.node.localFile.url'
  | 'featuredImage.node.localFile.publicURL'
  | 'featuredImage.node.localFile.childrenImageSharp'
  | 'featuredImage.node.localFile.id'
  | 'featuredImage.node.localFile.children'
  | 'featuredImage.node.parent.id'
  | 'featuredImage.node.parent.children'
  | 'featuredImage.node.children'
  | 'featuredImage.node.children.id'
  | 'featuredImage.node.children.children'
  | 'featuredImage.node.internal.content'
  | 'featuredImage.node.internal.contentDigest'
  | 'featuredImage.node.internal.description'
  | 'featuredImage.node.internal.fieldOwners'
  | 'featuredImage.node.internal.ignoreType'
  | 'featuredImage.node.internal.mediaType'
  | 'featuredImage.node.internal.owner'
  | 'featuredImage.node.internal.type'
  | 'featuredImageDatabaseId'
  | 'featuredImageId'
  | 'guid'
  | 'id'
  | 'isFrontPage'
  | 'isPostsPage'
  | 'isPrivacyPage'
  | 'isRevision'
  | 'lastEditedBy.node.avatar.default'
  | 'lastEditedBy.node.avatar.extraAttr'
  | 'lastEditedBy.node.avatar.forceDefault'
  | 'lastEditedBy.node.avatar.foundAvatar'
  | 'lastEditedBy.node.avatar.height'
  | 'lastEditedBy.node.avatar.rating'
  | 'lastEditedBy.node.avatar.scheme'
  | 'lastEditedBy.node.avatar.size'
  | 'lastEditedBy.node.avatar.url'
  | 'lastEditedBy.node.avatar.width'
  | 'lastEditedBy.node.capKey'
  | 'lastEditedBy.node.capabilities'
  | 'lastEditedBy.node.comments.nodes'
  | 'lastEditedBy.node.databaseId'
  | 'lastEditedBy.node.description'
  | 'lastEditedBy.node.email'
  | 'lastEditedBy.node.extraCapabilities'
  | 'lastEditedBy.node.firstName'
  | 'lastEditedBy.node.id'
  | 'lastEditedBy.node.lastName'
  | 'lastEditedBy.node.locale'
  | 'lastEditedBy.node.name'
  | 'lastEditedBy.node.nicename'
  | 'lastEditedBy.node.nickname'
  | 'lastEditedBy.node.pages.nodes'
  | 'lastEditedBy.node.posts.nodes'
  | 'lastEditedBy.node.registeredDate'
  | 'lastEditedBy.node.roles.nodes'
  | 'lastEditedBy.node.slug'
  | 'lastEditedBy.node.uri'
  | 'lastEditedBy.node.url'
  | 'lastEditedBy.node.username'
  | 'lastEditedBy.node.nodeType'
  | 'lastEditedBy.node.parent.id'
  | 'lastEditedBy.node.parent.children'
  | 'lastEditedBy.node.children'
  | 'lastEditedBy.node.children.id'
  | 'lastEditedBy.node.children.children'
  | 'lastEditedBy.node.internal.content'
  | 'lastEditedBy.node.internal.contentDigest'
  | 'lastEditedBy.node.internal.description'
  | 'lastEditedBy.node.internal.fieldOwners'
  | 'lastEditedBy.node.internal.ignoreType'
  | 'lastEditedBy.node.internal.mediaType'
  | 'lastEditedBy.node.internal.owner'
  | 'lastEditedBy.node.internal.type'
  | 'link'
  | 'menuOrder'
  | 'modified'
  | 'modifiedGmt'
  | 'wpParent.node.databaseId'
  | 'wpParent.node.date'
  | 'wpParent.node.dateGmt'
  | 'wpParent.node.desiredSlug'
  | 'wpParent.node.enclosure'
  | 'wpParent.node.guid'
  | 'wpParent.node.id'
  | 'wpParent.node.link'
  | 'wpParent.node.modified'
  | 'wpParent.node.modifiedGmt'
  | 'wpParent.node.slug'
  | 'wpParent.node.status'
  | 'wpParent.node.template.templateName'
  | 'wpParent.node.uri'
  | 'wpParent.node.nodeType'
  | 'wpParent.node.parent.id'
  | 'wpParent.node.parent.children'
  | 'wpParent.node.children'
  | 'wpParent.node.children.id'
  | 'wpParent.node.children.children'
  | 'wpParent.node.internal.content'
  | 'wpParent.node.internal.contentDigest'
  | 'wpParent.node.internal.description'
  | 'wpParent.node.internal.fieldOwners'
  | 'wpParent.node.internal.ignoreType'
  | 'wpParent.node.internal.mediaType'
  | 'wpParent.node.internal.owner'
  | 'wpParent.node.internal.type'
  | 'parentDatabaseId'
  | 'parentId'
  | 'slug'
  | 'status'
  | 'template.templateName'
  | 'title'
  | 'uri'
  | 'nodeType'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type WpPageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpPageEdge>;
  readonly nodes: ReadonlyArray<WpPage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type WpPageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<WpPageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type WpPostConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpPostEdge>;
  readonly nodes: ReadonlyArray<WpPost>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<WpPostGroupConnection>;
};


type WpPostConnection_distinctArgs = {
  field: WpPostFieldsEnum;
};


type WpPostConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: WpPostFieldsEnum;
};

type WpPostEdge = {
  readonly next: Maybe<WpPost>;
  readonly node: WpPost;
  readonly previous: Maybe<WpPost>;
};

type WpPostFieldsEnum =
  | 'acf.description'
  | 'acf.fieldGroupName'
  | 'acf.metaDescription'
  | 'acf.metaKeywords'
  | 'author.node.avatar.default'
  | 'author.node.avatar.extraAttr'
  | 'author.node.avatar.forceDefault'
  | 'author.node.avatar.foundAvatar'
  | 'author.node.avatar.height'
  | 'author.node.avatar.rating'
  | 'author.node.avatar.scheme'
  | 'author.node.avatar.size'
  | 'author.node.avatar.url'
  | 'author.node.avatar.width'
  | 'author.node.capKey'
  | 'author.node.capabilities'
  | 'author.node.comments.nodes'
  | 'author.node.databaseId'
  | 'author.node.description'
  | 'author.node.email'
  | 'author.node.extraCapabilities'
  | 'author.node.firstName'
  | 'author.node.id'
  | 'author.node.lastName'
  | 'author.node.locale'
  | 'author.node.name'
  | 'author.node.nicename'
  | 'author.node.nickname'
  | 'author.node.pages.nodes'
  | 'author.node.posts.nodes'
  | 'author.node.registeredDate'
  | 'author.node.roles.nodes'
  | 'author.node.slug'
  | 'author.node.uri'
  | 'author.node.url'
  | 'author.node.username'
  | 'author.node.nodeType'
  | 'author.node.parent.id'
  | 'author.node.parent.children'
  | 'author.node.children'
  | 'author.node.children.id'
  | 'author.node.children.children'
  | 'author.node.internal.content'
  | 'author.node.internal.contentDigest'
  | 'author.node.internal.description'
  | 'author.node.internal.fieldOwners'
  | 'author.node.internal.ignoreType'
  | 'author.node.internal.mediaType'
  | 'author.node.internal.owner'
  | 'author.node.internal.type'
  | 'authorDatabaseId'
  | 'authorId'
  | 'categories.nodes'
  | 'categories.nodes.ancestors.nodes'
  | 'categories.nodes.wpChildren.nodes'
  | 'categories.nodes.contentNodes.nodes'
  | 'categories.nodes.count'
  | 'categories.nodes.databaseId'
  | 'categories.nodes.description'
  | 'categories.nodes.id'
  | 'categories.nodes.link'
  | 'categories.nodes.name'
  | 'categories.nodes.parentDatabaseId'
  | 'categories.nodes.parentId'
  | 'categories.nodes.posts.nodes'
  | 'categories.nodes.slug'
  | 'categories.nodes.termGroupId'
  | 'categories.nodes.termTaxonomyId'
  | 'categories.nodes.uri'
  | 'categories.nodes.nodeType'
  | 'categories.nodes.parent.id'
  | 'categories.nodes.parent.children'
  | 'categories.nodes.children'
  | 'categories.nodes.children.id'
  | 'categories.nodes.children.children'
  | 'categories.nodes.internal.content'
  | 'categories.nodes.internal.contentDigest'
  | 'categories.nodes.internal.description'
  | 'categories.nodes.internal.fieldOwners'
  | 'categories.nodes.internal.ignoreType'
  | 'categories.nodes.internal.mediaType'
  | 'categories.nodes.internal.owner'
  | 'categories.nodes.internal.type'
  | 'commentCount'
  | 'commentStatus'
  | 'comments.nodes'
  | 'comments.nodes.agent'
  | 'comments.nodes.approved'
  | 'comments.nodes.authorIp'
  | 'comments.nodes.content'
  | 'comments.nodes.databaseId'
  | 'comments.nodes.date'
  | 'comments.nodes.dateGmt'
  | 'comments.nodes.id'
  | 'comments.nodes.karma'
  | 'comments.nodes.parentDatabaseId'
  | 'comments.nodes.parentId'
  | 'comments.nodes.replies.nodes'
  | 'comments.nodes.type'
  | 'comments.nodes.nodeType'
  | 'comments.nodes.parent.id'
  | 'comments.nodes.parent.children'
  | 'comments.nodes.children'
  | 'comments.nodes.children.id'
  | 'comments.nodes.children.children'
  | 'comments.nodes.internal.content'
  | 'comments.nodes.internal.contentDigest'
  | 'comments.nodes.internal.description'
  | 'comments.nodes.internal.fieldOwners'
  | 'comments.nodes.internal.ignoreType'
  | 'comments.nodes.internal.mediaType'
  | 'comments.nodes.internal.owner'
  | 'comments.nodes.internal.type'
  | 'content'
  | 'contentType.node.archivePath'
  | 'contentType.node.canExport'
  | 'contentType.node.connectedTaxonomies.nodes'
  | 'contentType.node.contentNodes.nodes'
  | 'contentType.node.deleteWithUser'
  | 'contentType.node.description'
  | 'contentType.node.excludeFromSearch'
  | 'contentType.node.graphqlPluralName'
  | 'contentType.node.graphqlSingleName'
  | 'contentType.node.hasArchive'
  | 'contentType.node.hierarchical'
  | 'contentType.node.id'
  | 'contentType.node.isFrontPage'
  | 'contentType.node.isPostsPage'
  | 'contentType.node.label'
  | 'contentType.node.labels.addNew'
  | 'contentType.node.labels.addNewItem'
  | 'contentType.node.labels.allItems'
  | 'contentType.node.labels.archives'
  | 'contentType.node.labels.attributes'
  | 'contentType.node.labels.editItem'
  | 'contentType.node.labels.featuredImage'
  | 'contentType.node.labels.filterItemsList'
  | 'contentType.node.labels.insertIntoItem'
  | 'contentType.node.labels.itemsList'
  | 'contentType.node.labels.itemsListNavigation'
  | 'contentType.node.labels.menuName'
  | 'contentType.node.labels.name'
  | 'contentType.node.labels.newItem'
  | 'contentType.node.labels.notFound'
  | 'contentType.node.labels.notFoundInTrash'
  | 'contentType.node.labels.parentItemColon'
  | 'contentType.node.labels.removeFeaturedImage'
  | 'contentType.node.labels.searchItems'
  | 'contentType.node.labels.setFeaturedImage'
  | 'contentType.node.labels.singularName'
  | 'contentType.node.labels.uploadedToThisItem'
  | 'contentType.node.labels.useFeaturedImage'
  | 'contentType.node.labels.viewItem'
  | 'contentType.node.labels.viewItems'
  | 'contentType.node.menuIcon'
  | 'contentType.node.menuPosition'
  | 'contentType.node.name'
  | 'contentType.node.public'
  | 'contentType.node.publiclyQueryable'
  | 'contentType.node.restBase'
  | 'contentType.node.restControllerClass'
  | 'contentType.node.showInAdminBar'
  | 'contentType.node.showInGraphql'
  | 'contentType.node.showInMenu'
  | 'contentType.node.showInNavMenus'
  | 'contentType.node.showInRest'
  | 'contentType.node.showUi'
  | 'contentType.node.uri'
  | 'contentType.node.nodeType'
  | 'contentType.node.parent.id'
  | 'contentType.node.parent.children'
  | 'contentType.node.children'
  | 'contentType.node.children.id'
  | 'contentType.node.children.children'
  | 'contentType.node.internal.content'
  | 'contentType.node.internal.contentDigest'
  | 'contentType.node.internal.description'
  | 'contentType.node.internal.fieldOwners'
  | 'contentType.node.internal.ignoreType'
  | 'contentType.node.internal.mediaType'
  | 'contentType.node.internal.owner'
  | 'contentType.node.internal.type'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'desiredSlug'
  | 'enclosure'
  | 'excerpt'
  | 'featuredImage.node.altText'
  | 'featuredImage.node.ancestors.nodes'
  | 'featuredImage.node.authorDatabaseId'
  | 'featuredImage.node.authorId'
  | 'featuredImage.node.caption'
  | 'featuredImage.node.wpChildren.nodes'
  | 'featuredImage.node.commentCount'
  | 'featuredImage.node.commentStatus'
  | 'featuredImage.node.comments.nodes'
  | 'featuredImage.node.databaseId'
  | 'featuredImage.node.date'
  | 'featuredImage.node.dateGmt'
  | 'featuredImage.node.description'
  | 'featuredImage.node.desiredSlug'
  | 'featuredImage.node.enclosure'
  | 'featuredImage.node.fileSize'
  | 'featuredImage.node.guid'
  | 'featuredImage.node.id'
  | 'featuredImage.node.link'
  | 'featuredImage.node.mediaDetails.file'
  | 'featuredImage.node.mediaDetails.height'
  | 'featuredImage.node.mediaDetails.sizes'
  | 'featuredImage.node.mediaDetails.width'
  | 'featuredImage.node.mediaItemUrl'
  | 'featuredImage.node.mediaType'
  | 'featuredImage.node.mimeType'
  | 'featuredImage.node.modified'
  | 'featuredImage.node.modifiedGmt'
  | 'featuredImage.node.parentDatabaseId'
  | 'featuredImage.node.parentId'
  | 'featuredImage.node.sizes'
  | 'featuredImage.node.slug'
  | 'featuredImage.node.sourceUrl'
  | 'featuredImage.node.srcSet'
  | 'featuredImage.node.status'
  | 'featuredImage.node.template.templateName'
  | 'featuredImage.node.title'
  | 'featuredImage.node.uri'
  | 'featuredImage.node.nodeType'
  | 'featuredImage.node.remoteFile.sourceInstanceName'
  | 'featuredImage.node.remoteFile.absolutePath'
  | 'featuredImage.node.remoteFile.relativePath'
  | 'featuredImage.node.remoteFile.extension'
  | 'featuredImage.node.remoteFile.size'
  | 'featuredImage.node.remoteFile.prettySize'
  | 'featuredImage.node.remoteFile.modifiedTime'
  | 'featuredImage.node.remoteFile.accessTime'
  | 'featuredImage.node.remoteFile.changeTime'
  | 'featuredImage.node.remoteFile.birthTime'
  | 'featuredImage.node.remoteFile.root'
  | 'featuredImage.node.remoteFile.dir'
  | 'featuredImage.node.remoteFile.base'
  | 'featuredImage.node.remoteFile.ext'
  | 'featuredImage.node.remoteFile.name'
  | 'featuredImage.node.remoteFile.relativeDirectory'
  | 'featuredImage.node.remoteFile.dev'
  | 'featuredImage.node.remoteFile.mode'
  | 'featuredImage.node.remoteFile.nlink'
  | 'featuredImage.node.remoteFile.uid'
  | 'featuredImage.node.remoteFile.gid'
  | 'featuredImage.node.remoteFile.rdev'
  | 'featuredImage.node.remoteFile.ino'
  | 'featuredImage.node.remoteFile.atimeMs'
  | 'featuredImage.node.remoteFile.mtimeMs'
  | 'featuredImage.node.remoteFile.ctimeMs'
  | 'featuredImage.node.remoteFile.atime'
  | 'featuredImage.node.remoteFile.mtime'
  | 'featuredImage.node.remoteFile.ctime'
  | 'featuredImage.node.remoteFile.birthtime'
  | 'featuredImage.node.remoteFile.birthtimeMs'
  | 'featuredImage.node.remoteFile.blksize'
  | 'featuredImage.node.remoteFile.blocks'
  | 'featuredImage.node.remoteFile.url'
  | 'featuredImage.node.remoteFile.publicURL'
  | 'featuredImage.node.remoteFile.childrenImageSharp'
  | 'featuredImage.node.remoteFile.id'
  | 'featuredImage.node.remoteFile.children'
  | 'featuredImage.node.localFile.sourceInstanceName'
  | 'featuredImage.node.localFile.absolutePath'
  | 'featuredImage.node.localFile.relativePath'
  | 'featuredImage.node.localFile.extension'
  | 'featuredImage.node.localFile.size'
  | 'featuredImage.node.localFile.prettySize'
  | 'featuredImage.node.localFile.modifiedTime'
  | 'featuredImage.node.localFile.accessTime'
  | 'featuredImage.node.localFile.changeTime'
  | 'featuredImage.node.localFile.birthTime'
  | 'featuredImage.node.localFile.root'
  | 'featuredImage.node.localFile.dir'
  | 'featuredImage.node.localFile.base'
  | 'featuredImage.node.localFile.ext'
  | 'featuredImage.node.localFile.name'
  | 'featuredImage.node.localFile.relativeDirectory'
  | 'featuredImage.node.localFile.dev'
  | 'featuredImage.node.localFile.mode'
  | 'featuredImage.node.localFile.nlink'
  | 'featuredImage.node.localFile.uid'
  | 'featuredImage.node.localFile.gid'
  | 'featuredImage.node.localFile.rdev'
  | 'featuredImage.node.localFile.ino'
  | 'featuredImage.node.localFile.atimeMs'
  | 'featuredImage.node.localFile.mtimeMs'
  | 'featuredImage.node.localFile.ctimeMs'
  | 'featuredImage.node.localFile.atime'
  | 'featuredImage.node.localFile.mtime'
  | 'featuredImage.node.localFile.ctime'
  | 'featuredImage.node.localFile.birthtime'
  | 'featuredImage.node.localFile.birthtimeMs'
  | 'featuredImage.node.localFile.blksize'
  | 'featuredImage.node.localFile.blocks'
  | 'featuredImage.node.localFile.url'
  | 'featuredImage.node.localFile.publicURL'
  | 'featuredImage.node.localFile.childrenImageSharp'
  | 'featuredImage.node.localFile.id'
  | 'featuredImage.node.localFile.children'
  | 'featuredImage.node.parent.id'
  | 'featuredImage.node.parent.children'
  | 'featuredImage.node.children'
  | 'featuredImage.node.children.id'
  | 'featuredImage.node.children.children'
  | 'featuredImage.node.internal.content'
  | 'featuredImage.node.internal.contentDigest'
  | 'featuredImage.node.internal.description'
  | 'featuredImage.node.internal.fieldOwners'
  | 'featuredImage.node.internal.ignoreType'
  | 'featuredImage.node.internal.mediaType'
  | 'featuredImage.node.internal.owner'
  | 'featuredImage.node.internal.type'
  | 'featuredImageDatabaseId'
  | 'featuredImageId'
  | 'guid'
  | 'id'
  | 'isRevision'
  | 'isSticky'
  | 'lastEditedBy.node.avatar.default'
  | 'lastEditedBy.node.avatar.extraAttr'
  | 'lastEditedBy.node.avatar.forceDefault'
  | 'lastEditedBy.node.avatar.foundAvatar'
  | 'lastEditedBy.node.avatar.height'
  | 'lastEditedBy.node.avatar.rating'
  | 'lastEditedBy.node.avatar.scheme'
  | 'lastEditedBy.node.avatar.size'
  | 'lastEditedBy.node.avatar.url'
  | 'lastEditedBy.node.avatar.width'
  | 'lastEditedBy.node.capKey'
  | 'lastEditedBy.node.capabilities'
  | 'lastEditedBy.node.comments.nodes'
  | 'lastEditedBy.node.databaseId'
  | 'lastEditedBy.node.description'
  | 'lastEditedBy.node.email'
  | 'lastEditedBy.node.extraCapabilities'
  | 'lastEditedBy.node.firstName'
  | 'lastEditedBy.node.id'
  | 'lastEditedBy.node.lastName'
  | 'lastEditedBy.node.locale'
  | 'lastEditedBy.node.name'
  | 'lastEditedBy.node.nicename'
  | 'lastEditedBy.node.nickname'
  | 'lastEditedBy.node.pages.nodes'
  | 'lastEditedBy.node.posts.nodes'
  | 'lastEditedBy.node.registeredDate'
  | 'lastEditedBy.node.roles.nodes'
  | 'lastEditedBy.node.slug'
  | 'lastEditedBy.node.uri'
  | 'lastEditedBy.node.url'
  | 'lastEditedBy.node.username'
  | 'lastEditedBy.node.nodeType'
  | 'lastEditedBy.node.parent.id'
  | 'lastEditedBy.node.parent.children'
  | 'lastEditedBy.node.children'
  | 'lastEditedBy.node.children.id'
  | 'lastEditedBy.node.children.children'
  | 'lastEditedBy.node.internal.content'
  | 'lastEditedBy.node.internal.contentDigest'
  | 'lastEditedBy.node.internal.description'
  | 'lastEditedBy.node.internal.fieldOwners'
  | 'lastEditedBy.node.internal.ignoreType'
  | 'lastEditedBy.node.internal.mediaType'
  | 'lastEditedBy.node.internal.owner'
  | 'lastEditedBy.node.internal.type'
  | 'link'
  | 'modified'
  | 'modifiedGmt'
  | 'pingStatus'
  | 'pinged'
  | 'postFormats.nodes'
  | 'postFormats.nodes.contentNodes.nodes'
  | 'postFormats.nodes.count'
  | 'postFormats.nodes.databaseId'
  | 'postFormats.nodes.description'
  | 'postFormats.nodes.id'
  | 'postFormats.nodes.link'
  | 'postFormats.nodes.name'
  | 'postFormats.nodes.posts.nodes'
  | 'postFormats.nodes.slug'
  | 'postFormats.nodes.termGroupId'
  | 'postFormats.nodes.termTaxonomyId'
  | 'postFormats.nodes.uri'
  | 'postFormats.nodes.nodeType'
  | 'postFormats.nodes.parent.id'
  | 'postFormats.nodes.parent.children'
  | 'postFormats.nodes.children'
  | 'postFormats.nodes.children.id'
  | 'postFormats.nodes.children.children'
  | 'postFormats.nodes.internal.content'
  | 'postFormats.nodes.internal.contentDigest'
  | 'postFormats.nodes.internal.description'
  | 'postFormats.nodes.internal.fieldOwners'
  | 'postFormats.nodes.internal.ignoreType'
  | 'postFormats.nodes.internal.mediaType'
  | 'postFormats.nodes.internal.owner'
  | 'postFormats.nodes.internal.type'
  | 'slug'
  | 'status'
  | 'tags.nodes'
  | 'tags.nodes.contentNodes.nodes'
  | 'tags.nodes.count'
  | 'tags.nodes.databaseId'
  | 'tags.nodes.description'
  | 'tags.nodes.id'
  | 'tags.nodes.link'
  | 'tags.nodes.name'
  | 'tags.nodes.posts.nodes'
  | 'tags.nodes.slug'
  | 'tags.nodes.termGroupId'
  | 'tags.nodes.termTaxonomyId'
  | 'tags.nodes.uri'
  | 'tags.nodes.nodeType'
  | 'tags.nodes.parent.id'
  | 'tags.nodes.parent.children'
  | 'tags.nodes.children'
  | 'tags.nodes.children.id'
  | 'tags.nodes.children.children'
  | 'tags.nodes.internal.content'
  | 'tags.nodes.internal.contentDigest'
  | 'tags.nodes.internal.description'
  | 'tags.nodes.internal.fieldOwners'
  | 'tags.nodes.internal.ignoreType'
  | 'tags.nodes.internal.mediaType'
  | 'tags.nodes.internal.owner'
  | 'tags.nodes.internal.type'
  | 'template.templateName'
  | 'terms.nodes'
  | 'terms.nodes.count'
  | 'terms.nodes.databaseId'
  | 'terms.nodes.description'
  | 'terms.nodes.id'
  | 'terms.nodes.link'
  | 'terms.nodes.name'
  | 'terms.nodes.slug'
  | 'terms.nodes.termGroupId'
  | 'terms.nodes.termTaxonomyId'
  | 'terms.nodes.uri'
  | 'terms.nodes.nodeType'
  | 'terms.nodes.parent.id'
  | 'terms.nodes.parent.children'
  | 'terms.nodes.children'
  | 'terms.nodes.children.id'
  | 'terms.nodes.children.children'
  | 'terms.nodes.internal.content'
  | 'terms.nodes.internal.contentDigest'
  | 'terms.nodes.internal.description'
  | 'terms.nodes.internal.fieldOwners'
  | 'terms.nodes.internal.ignoreType'
  | 'terms.nodes.internal.mediaType'
  | 'terms.nodes.internal.owner'
  | 'terms.nodes.internal.type'
  | 'title'
  | 'toPing'
  | 'uri'
  | 'nodeType'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type WpPostGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpPostEdge>;
  readonly nodes: ReadonlyArray<WpPost>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type WpPostSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<WpPostFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type WpTermNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpTermNodeEdge>;
  readonly nodes: ReadonlyArray<WpTermNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<WpTermNodeGroupConnection>;
};


type WpTermNodeConnection_distinctArgs = {
  field: WpTermNodeFieldsEnum;
};


type WpTermNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: WpTermNodeFieldsEnum;
};

type WpTermNodeEdge = {
  readonly next: Maybe<WpTermNode>;
  readonly node: WpTermNode;
  readonly previous: Maybe<WpTermNode>;
};

type WpTermNodeFieldsEnum =
  | 'count'
  | 'databaseId'
  | 'description'
  | 'id'
  | 'link'
  | 'name'
  | 'slug'
  | 'termGroupId'
  | 'termTaxonomyId'
  | 'uri'
  | 'nodeType'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type WpTermNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpTermNodeEdge>;
  readonly nodes: ReadonlyArray<WpTermNode>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type WpTermNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<WpTermNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type WpCategoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpCategoryEdge>;
  readonly nodes: ReadonlyArray<WpCategory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<WpCategoryGroupConnection>;
};


type WpCategoryConnection_distinctArgs = {
  field: WpCategoryFieldsEnum;
};


type WpCategoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: WpCategoryFieldsEnum;
};

type WpCategoryEdge = {
  readonly next: Maybe<WpCategory>;
  readonly node: WpCategory;
  readonly previous: Maybe<WpCategory>;
};

type WpCategoryFieldsEnum =
  | 'ancestors.nodes'
  | 'ancestors.nodes.ancestors.nodes'
  | 'ancestors.nodes.wpChildren.nodes'
  | 'ancestors.nodes.contentNodes.nodes'
  | 'ancestors.nodes.count'
  | 'ancestors.nodes.databaseId'
  | 'ancestors.nodes.description'
  | 'ancestors.nodes.id'
  | 'ancestors.nodes.link'
  | 'ancestors.nodes.name'
  | 'ancestors.nodes.parentDatabaseId'
  | 'ancestors.nodes.parentId'
  | 'ancestors.nodes.posts.nodes'
  | 'ancestors.nodes.slug'
  | 'ancestors.nodes.termGroupId'
  | 'ancestors.nodes.termTaxonomyId'
  | 'ancestors.nodes.uri'
  | 'ancestors.nodes.nodeType'
  | 'ancestors.nodes.parent.id'
  | 'ancestors.nodes.parent.children'
  | 'ancestors.nodes.children'
  | 'ancestors.nodes.children.id'
  | 'ancestors.nodes.children.children'
  | 'ancestors.nodes.internal.content'
  | 'ancestors.nodes.internal.contentDigest'
  | 'ancestors.nodes.internal.description'
  | 'ancestors.nodes.internal.fieldOwners'
  | 'ancestors.nodes.internal.ignoreType'
  | 'ancestors.nodes.internal.mediaType'
  | 'ancestors.nodes.internal.owner'
  | 'ancestors.nodes.internal.type'
  | 'wpChildren.nodes'
  | 'wpChildren.nodes.ancestors.nodes'
  | 'wpChildren.nodes.wpChildren.nodes'
  | 'wpChildren.nodes.contentNodes.nodes'
  | 'wpChildren.nodes.count'
  | 'wpChildren.nodes.databaseId'
  | 'wpChildren.nodes.description'
  | 'wpChildren.nodes.id'
  | 'wpChildren.nodes.link'
  | 'wpChildren.nodes.name'
  | 'wpChildren.nodes.parentDatabaseId'
  | 'wpChildren.nodes.parentId'
  | 'wpChildren.nodes.posts.nodes'
  | 'wpChildren.nodes.slug'
  | 'wpChildren.nodes.termGroupId'
  | 'wpChildren.nodes.termTaxonomyId'
  | 'wpChildren.nodes.uri'
  | 'wpChildren.nodes.nodeType'
  | 'wpChildren.nodes.parent.id'
  | 'wpChildren.nodes.parent.children'
  | 'wpChildren.nodes.children'
  | 'wpChildren.nodes.children.id'
  | 'wpChildren.nodes.children.children'
  | 'wpChildren.nodes.internal.content'
  | 'wpChildren.nodes.internal.contentDigest'
  | 'wpChildren.nodes.internal.description'
  | 'wpChildren.nodes.internal.fieldOwners'
  | 'wpChildren.nodes.internal.ignoreType'
  | 'wpChildren.nodes.internal.mediaType'
  | 'wpChildren.nodes.internal.owner'
  | 'wpChildren.nodes.internal.type'
  | 'contentNodes.nodes'
  | 'contentNodes.nodes.databaseId'
  | 'contentNodes.nodes.date'
  | 'contentNodes.nodes.dateGmt'
  | 'contentNodes.nodes.desiredSlug'
  | 'contentNodes.nodes.enclosure'
  | 'contentNodes.nodes.guid'
  | 'contentNodes.nodes.id'
  | 'contentNodes.nodes.link'
  | 'contentNodes.nodes.modified'
  | 'contentNodes.nodes.modifiedGmt'
  | 'contentNodes.nodes.slug'
  | 'contentNodes.nodes.status'
  | 'contentNodes.nodes.template.templateName'
  | 'contentNodes.nodes.uri'
  | 'contentNodes.nodes.nodeType'
  | 'contentNodes.nodes.parent.id'
  | 'contentNodes.nodes.parent.children'
  | 'contentNodes.nodes.children'
  | 'contentNodes.nodes.children.id'
  | 'contentNodes.nodes.children.children'
  | 'contentNodes.nodes.internal.content'
  | 'contentNodes.nodes.internal.contentDigest'
  | 'contentNodes.nodes.internal.description'
  | 'contentNodes.nodes.internal.fieldOwners'
  | 'contentNodes.nodes.internal.ignoreType'
  | 'contentNodes.nodes.internal.mediaType'
  | 'contentNodes.nodes.internal.owner'
  | 'contentNodes.nodes.internal.type'
  | 'count'
  | 'databaseId'
  | 'description'
  | 'id'
  | 'link'
  | 'name'
  | 'wpParent.node.ancestors.nodes'
  | 'wpParent.node.wpChildren.nodes'
  | 'wpParent.node.contentNodes.nodes'
  | 'wpParent.node.count'
  | 'wpParent.node.databaseId'
  | 'wpParent.node.description'
  | 'wpParent.node.id'
  | 'wpParent.node.link'
  | 'wpParent.node.name'
  | 'wpParent.node.parentDatabaseId'
  | 'wpParent.node.parentId'
  | 'wpParent.node.posts.nodes'
  | 'wpParent.node.slug'
  | 'wpParent.node.termGroupId'
  | 'wpParent.node.termTaxonomyId'
  | 'wpParent.node.uri'
  | 'wpParent.node.nodeType'
  | 'wpParent.node.parent.id'
  | 'wpParent.node.parent.children'
  | 'wpParent.node.children'
  | 'wpParent.node.children.id'
  | 'wpParent.node.children.children'
  | 'wpParent.node.internal.content'
  | 'wpParent.node.internal.contentDigest'
  | 'wpParent.node.internal.description'
  | 'wpParent.node.internal.fieldOwners'
  | 'wpParent.node.internal.ignoreType'
  | 'wpParent.node.internal.mediaType'
  | 'wpParent.node.internal.owner'
  | 'wpParent.node.internal.type'
  | 'parentDatabaseId'
  | 'parentId'
  | 'posts.nodes'
  | 'posts.nodes.acf.description'
  | 'posts.nodes.acf.fieldGroupName'
  | 'posts.nodes.acf.metaDescription'
  | 'posts.nodes.acf.metaKeywords'
  | 'posts.nodes.authorDatabaseId'
  | 'posts.nodes.authorId'
  | 'posts.nodes.categories.nodes'
  | 'posts.nodes.commentCount'
  | 'posts.nodes.commentStatus'
  | 'posts.nodes.comments.nodes'
  | 'posts.nodes.content'
  | 'posts.nodes.databaseId'
  | 'posts.nodes.date'
  | 'posts.nodes.dateGmt'
  | 'posts.nodes.desiredSlug'
  | 'posts.nodes.enclosure'
  | 'posts.nodes.excerpt'
  | 'posts.nodes.featuredImageDatabaseId'
  | 'posts.nodes.featuredImageId'
  | 'posts.nodes.guid'
  | 'posts.nodes.id'
  | 'posts.nodes.isRevision'
  | 'posts.nodes.isSticky'
  | 'posts.nodes.link'
  | 'posts.nodes.modified'
  | 'posts.nodes.modifiedGmt'
  | 'posts.nodes.pingStatus'
  | 'posts.nodes.pinged'
  | 'posts.nodes.postFormats.nodes'
  | 'posts.nodes.slug'
  | 'posts.nodes.status'
  | 'posts.nodes.tags.nodes'
  | 'posts.nodes.template.templateName'
  | 'posts.nodes.terms.nodes'
  | 'posts.nodes.title'
  | 'posts.nodes.toPing'
  | 'posts.nodes.uri'
  | 'posts.nodes.nodeType'
  | 'posts.nodes.parent.id'
  | 'posts.nodes.parent.children'
  | 'posts.nodes.children'
  | 'posts.nodes.children.id'
  | 'posts.nodes.children.children'
  | 'posts.nodes.internal.content'
  | 'posts.nodes.internal.contentDigest'
  | 'posts.nodes.internal.description'
  | 'posts.nodes.internal.fieldOwners'
  | 'posts.nodes.internal.ignoreType'
  | 'posts.nodes.internal.mediaType'
  | 'posts.nodes.internal.owner'
  | 'posts.nodes.internal.type'
  | 'slug'
  | 'taxonomy.node.archivePath'
  | 'taxonomy.node.connectedContentTypes.nodes'
  | 'taxonomy.node.description'
  | 'taxonomy.node.graphqlPluralName'
  | 'taxonomy.node.graphqlSingleName'
  | 'taxonomy.node.hierarchical'
  | 'taxonomy.node.id'
  | 'taxonomy.node.label'
  | 'taxonomy.node.name'
  | 'taxonomy.node.public'
  | 'taxonomy.node.restBase'
  | 'taxonomy.node.restControllerClass'
  | 'taxonomy.node.showCloud'
  | 'taxonomy.node.showInAdminColumn'
  | 'taxonomy.node.showInGraphql'
  | 'taxonomy.node.showInMenu'
  | 'taxonomy.node.showInNavMenus'
  | 'taxonomy.node.showInQuickEdit'
  | 'taxonomy.node.showInRest'
  | 'taxonomy.node.showUi'
  | 'taxonomy.node.nodeType'
  | 'taxonomy.node.parent.id'
  | 'taxonomy.node.parent.children'
  | 'taxonomy.node.children'
  | 'taxonomy.node.children.id'
  | 'taxonomy.node.children.children'
  | 'taxonomy.node.internal.content'
  | 'taxonomy.node.internal.contentDigest'
  | 'taxonomy.node.internal.description'
  | 'taxonomy.node.internal.fieldOwners'
  | 'taxonomy.node.internal.ignoreType'
  | 'taxonomy.node.internal.mediaType'
  | 'taxonomy.node.internal.owner'
  | 'taxonomy.node.internal.type'
  | 'termGroupId'
  | 'termTaxonomyId'
  | 'uri'
  | 'nodeType'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type WpCategoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpCategoryEdge>;
  readonly nodes: ReadonlyArray<WpCategory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type WpCategorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<WpCategoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type WpPostFormatConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpPostFormatEdge>;
  readonly nodes: ReadonlyArray<WpPostFormat>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<WpPostFormatGroupConnection>;
};


type WpPostFormatConnection_distinctArgs = {
  field: WpPostFormatFieldsEnum;
};


type WpPostFormatConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: WpPostFormatFieldsEnum;
};

type WpPostFormatEdge = {
  readonly next: Maybe<WpPostFormat>;
  readonly node: WpPostFormat;
  readonly previous: Maybe<WpPostFormat>;
};

type WpPostFormatFieldsEnum =
  | 'contentNodes.nodes'
  | 'contentNodes.nodes.databaseId'
  | 'contentNodes.nodes.date'
  | 'contentNodes.nodes.dateGmt'
  | 'contentNodes.nodes.desiredSlug'
  | 'contentNodes.nodes.enclosure'
  | 'contentNodes.nodes.guid'
  | 'contentNodes.nodes.id'
  | 'contentNodes.nodes.link'
  | 'contentNodes.nodes.modified'
  | 'contentNodes.nodes.modifiedGmt'
  | 'contentNodes.nodes.slug'
  | 'contentNodes.nodes.status'
  | 'contentNodes.nodes.template.templateName'
  | 'contentNodes.nodes.uri'
  | 'contentNodes.nodes.nodeType'
  | 'contentNodes.nodes.parent.id'
  | 'contentNodes.nodes.parent.children'
  | 'contentNodes.nodes.children'
  | 'contentNodes.nodes.children.id'
  | 'contentNodes.nodes.children.children'
  | 'contentNodes.nodes.internal.content'
  | 'contentNodes.nodes.internal.contentDigest'
  | 'contentNodes.nodes.internal.description'
  | 'contentNodes.nodes.internal.fieldOwners'
  | 'contentNodes.nodes.internal.ignoreType'
  | 'contentNodes.nodes.internal.mediaType'
  | 'contentNodes.nodes.internal.owner'
  | 'contentNodes.nodes.internal.type'
  | 'count'
  | 'databaseId'
  | 'description'
  | 'id'
  | 'link'
  | 'name'
  | 'posts.nodes'
  | 'posts.nodes.acf.description'
  | 'posts.nodes.acf.fieldGroupName'
  | 'posts.nodes.acf.metaDescription'
  | 'posts.nodes.acf.metaKeywords'
  | 'posts.nodes.authorDatabaseId'
  | 'posts.nodes.authorId'
  | 'posts.nodes.categories.nodes'
  | 'posts.nodes.commentCount'
  | 'posts.nodes.commentStatus'
  | 'posts.nodes.comments.nodes'
  | 'posts.nodes.content'
  | 'posts.nodes.databaseId'
  | 'posts.nodes.date'
  | 'posts.nodes.dateGmt'
  | 'posts.nodes.desiredSlug'
  | 'posts.nodes.enclosure'
  | 'posts.nodes.excerpt'
  | 'posts.nodes.featuredImageDatabaseId'
  | 'posts.nodes.featuredImageId'
  | 'posts.nodes.guid'
  | 'posts.nodes.id'
  | 'posts.nodes.isRevision'
  | 'posts.nodes.isSticky'
  | 'posts.nodes.link'
  | 'posts.nodes.modified'
  | 'posts.nodes.modifiedGmt'
  | 'posts.nodes.pingStatus'
  | 'posts.nodes.pinged'
  | 'posts.nodes.postFormats.nodes'
  | 'posts.nodes.slug'
  | 'posts.nodes.status'
  | 'posts.nodes.tags.nodes'
  | 'posts.nodes.template.templateName'
  | 'posts.nodes.terms.nodes'
  | 'posts.nodes.title'
  | 'posts.nodes.toPing'
  | 'posts.nodes.uri'
  | 'posts.nodes.nodeType'
  | 'posts.nodes.parent.id'
  | 'posts.nodes.parent.children'
  | 'posts.nodes.children'
  | 'posts.nodes.children.id'
  | 'posts.nodes.children.children'
  | 'posts.nodes.internal.content'
  | 'posts.nodes.internal.contentDigest'
  | 'posts.nodes.internal.description'
  | 'posts.nodes.internal.fieldOwners'
  | 'posts.nodes.internal.ignoreType'
  | 'posts.nodes.internal.mediaType'
  | 'posts.nodes.internal.owner'
  | 'posts.nodes.internal.type'
  | 'slug'
  | 'taxonomy.node.archivePath'
  | 'taxonomy.node.connectedContentTypes.nodes'
  | 'taxonomy.node.description'
  | 'taxonomy.node.graphqlPluralName'
  | 'taxonomy.node.graphqlSingleName'
  | 'taxonomy.node.hierarchical'
  | 'taxonomy.node.id'
  | 'taxonomy.node.label'
  | 'taxonomy.node.name'
  | 'taxonomy.node.public'
  | 'taxonomy.node.restBase'
  | 'taxonomy.node.restControllerClass'
  | 'taxonomy.node.showCloud'
  | 'taxonomy.node.showInAdminColumn'
  | 'taxonomy.node.showInGraphql'
  | 'taxonomy.node.showInMenu'
  | 'taxonomy.node.showInNavMenus'
  | 'taxonomy.node.showInQuickEdit'
  | 'taxonomy.node.showInRest'
  | 'taxonomy.node.showUi'
  | 'taxonomy.node.nodeType'
  | 'taxonomy.node.parent.id'
  | 'taxonomy.node.parent.children'
  | 'taxonomy.node.children'
  | 'taxonomy.node.children.id'
  | 'taxonomy.node.children.children'
  | 'taxonomy.node.internal.content'
  | 'taxonomy.node.internal.contentDigest'
  | 'taxonomy.node.internal.description'
  | 'taxonomy.node.internal.fieldOwners'
  | 'taxonomy.node.internal.ignoreType'
  | 'taxonomy.node.internal.mediaType'
  | 'taxonomy.node.internal.owner'
  | 'taxonomy.node.internal.type'
  | 'termGroupId'
  | 'termTaxonomyId'
  | 'uri'
  | 'nodeType'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type WpPostFormatGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpPostFormatEdge>;
  readonly nodes: ReadonlyArray<WpPostFormat>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type WpPostFormatSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<WpPostFormatFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type WpTagConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpTagEdge>;
  readonly nodes: ReadonlyArray<WpTag>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<WpTagGroupConnection>;
};


type WpTagConnection_distinctArgs = {
  field: WpTagFieldsEnum;
};


type WpTagConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: WpTagFieldsEnum;
};

type WpTagEdge = {
  readonly next: Maybe<WpTag>;
  readonly node: WpTag;
  readonly previous: Maybe<WpTag>;
};

type WpTagFieldsEnum =
  | 'contentNodes.nodes'
  | 'contentNodes.nodes.databaseId'
  | 'contentNodes.nodes.date'
  | 'contentNodes.nodes.dateGmt'
  | 'contentNodes.nodes.desiredSlug'
  | 'contentNodes.nodes.enclosure'
  | 'contentNodes.nodes.guid'
  | 'contentNodes.nodes.id'
  | 'contentNodes.nodes.link'
  | 'contentNodes.nodes.modified'
  | 'contentNodes.nodes.modifiedGmt'
  | 'contentNodes.nodes.slug'
  | 'contentNodes.nodes.status'
  | 'contentNodes.nodes.template.templateName'
  | 'contentNodes.nodes.uri'
  | 'contentNodes.nodes.nodeType'
  | 'contentNodes.nodes.parent.id'
  | 'contentNodes.nodes.parent.children'
  | 'contentNodes.nodes.children'
  | 'contentNodes.nodes.children.id'
  | 'contentNodes.nodes.children.children'
  | 'contentNodes.nodes.internal.content'
  | 'contentNodes.nodes.internal.contentDigest'
  | 'contentNodes.nodes.internal.description'
  | 'contentNodes.nodes.internal.fieldOwners'
  | 'contentNodes.nodes.internal.ignoreType'
  | 'contentNodes.nodes.internal.mediaType'
  | 'contentNodes.nodes.internal.owner'
  | 'contentNodes.nodes.internal.type'
  | 'count'
  | 'databaseId'
  | 'description'
  | 'id'
  | 'link'
  | 'name'
  | 'posts.nodes'
  | 'posts.nodes.acf.description'
  | 'posts.nodes.acf.fieldGroupName'
  | 'posts.nodes.acf.metaDescription'
  | 'posts.nodes.acf.metaKeywords'
  | 'posts.nodes.authorDatabaseId'
  | 'posts.nodes.authorId'
  | 'posts.nodes.categories.nodes'
  | 'posts.nodes.commentCount'
  | 'posts.nodes.commentStatus'
  | 'posts.nodes.comments.nodes'
  | 'posts.nodes.content'
  | 'posts.nodes.databaseId'
  | 'posts.nodes.date'
  | 'posts.nodes.dateGmt'
  | 'posts.nodes.desiredSlug'
  | 'posts.nodes.enclosure'
  | 'posts.nodes.excerpt'
  | 'posts.nodes.featuredImageDatabaseId'
  | 'posts.nodes.featuredImageId'
  | 'posts.nodes.guid'
  | 'posts.nodes.id'
  | 'posts.nodes.isRevision'
  | 'posts.nodes.isSticky'
  | 'posts.nodes.link'
  | 'posts.nodes.modified'
  | 'posts.nodes.modifiedGmt'
  | 'posts.nodes.pingStatus'
  | 'posts.nodes.pinged'
  | 'posts.nodes.postFormats.nodes'
  | 'posts.nodes.slug'
  | 'posts.nodes.status'
  | 'posts.nodes.tags.nodes'
  | 'posts.nodes.template.templateName'
  | 'posts.nodes.terms.nodes'
  | 'posts.nodes.title'
  | 'posts.nodes.toPing'
  | 'posts.nodes.uri'
  | 'posts.nodes.nodeType'
  | 'posts.nodes.parent.id'
  | 'posts.nodes.parent.children'
  | 'posts.nodes.children'
  | 'posts.nodes.children.id'
  | 'posts.nodes.children.children'
  | 'posts.nodes.internal.content'
  | 'posts.nodes.internal.contentDigest'
  | 'posts.nodes.internal.description'
  | 'posts.nodes.internal.fieldOwners'
  | 'posts.nodes.internal.ignoreType'
  | 'posts.nodes.internal.mediaType'
  | 'posts.nodes.internal.owner'
  | 'posts.nodes.internal.type'
  | 'slug'
  | 'taxonomy.node.archivePath'
  | 'taxonomy.node.connectedContentTypes.nodes'
  | 'taxonomy.node.description'
  | 'taxonomy.node.graphqlPluralName'
  | 'taxonomy.node.graphqlSingleName'
  | 'taxonomy.node.hierarchical'
  | 'taxonomy.node.id'
  | 'taxonomy.node.label'
  | 'taxonomy.node.name'
  | 'taxonomy.node.public'
  | 'taxonomy.node.restBase'
  | 'taxonomy.node.restControllerClass'
  | 'taxonomy.node.showCloud'
  | 'taxonomy.node.showInAdminColumn'
  | 'taxonomy.node.showInGraphql'
  | 'taxonomy.node.showInMenu'
  | 'taxonomy.node.showInNavMenus'
  | 'taxonomy.node.showInQuickEdit'
  | 'taxonomy.node.showInRest'
  | 'taxonomy.node.showUi'
  | 'taxonomy.node.nodeType'
  | 'taxonomy.node.parent.id'
  | 'taxonomy.node.parent.children'
  | 'taxonomy.node.children'
  | 'taxonomy.node.children.id'
  | 'taxonomy.node.children.children'
  | 'taxonomy.node.internal.content'
  | 'taxonomy.node.internal.contentDigest'
  | 'taxonomy.node.internal.description'
  | 'taxonomy.node.internal.fieldOwners'
  | 'taxonomy.node.internal.ignoreType'
  | 'taxonomy.node.internal.mediaType'
  | 'taxonomy.node.internal.owner'
  | 'taxonomy.node.internal.type'
  | 'termGroupId'
  | 'termTaxonomyId'
  | 'uri'
  | 'nodeType'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type WpTagGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpTagEdge>;
  readonly nodes: ReadonlyArray<WpTag>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type WpTagSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<WpTagFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type WpUserRoleConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpUserRoleEdge>;
  readonly nodes: ReadonlyArray<WpUserRole>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<WpUserRoleGroupConnection>;
};


type WpUserRoleConnection_distinctArgs = {
  field: WpUserRoleFieldsEnum;
};


type WpUserRoleConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: WpUserRoleFieldsEnum;
};

type WpUserRoleEdge = {
  readonly next: Maybe<WpUserRole>;
  readonly node: WpUserRole;
  readonly previous: Maybe<WpUserRole>;
};

type WpUserRoleFieldsEnum =
  | 'capabilities'
  | 'displayName'
  | 'id'
  | 'name'
  | 'nodeType'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type WpUserRoleGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpUserRoleEdge>;
  readonly nodes: ReadonlyArray<WpUserRole>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type WpUserRoleSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<WpUserRoleFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type WpMenuLocationEnumQueryOperatorInput = {
  readonly eq: Maybe<WpMenuLocationEnum>;
  readonly ne: Maybe<WpMenuLocationEnum>;
  readonly in: Maybe<ReadonlyArray<Maybe<WpMenuLocationEnum>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<WpMenuLocationEnum>>>;
};

type WpMenuToMenuItemConnectionFilterInput = {
  readonly nodes: Maybe<WpMenuItemFilterListInput>;
};

type WpMenuItemFilterListInput = {
  readonly elemMatch: Maybe<WpMenuItemFilterInput>;
};

type WpMenuItemFilterInput = {
  readonly childItems: Maybe<WpMenuItemToMenuItemConnectionFilterInput>;
  readonly connectedNode: Maybe<WpMenuItemToMenuItemLinkableConnectionEdgeFilterInput>;
  readonly cssClasses: Maybe<StringQueryOperatorInput>;
  readonly databaseId: Maybe<IntQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly linkRelationship: Maybe<StringQueryOperatorInput>;
  readonly locations: Maybe<WpMenuLocationEnumQueryOperatorInput>;
  readonly menu: Maybe<WpMenuItemToMenuConnectionEdgeFilterInput>;
  readonly order: Maybe<IntQueryOperatorInput>;
  readonly parentDatabaseId: Maybe<IntQueryOperatorInput>;
  readonly parentId: Maybe<IDQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly target: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly nodeType: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type WpMenuItemToMenuItemConnectionFilterInput = {
  readonly nodes: Maybe<WpMenuItemFilterListInput>;
};

type WpMenuItemToMenuItemLinkableConnectionEdgeFilterInput = {
  readonly node: Maybe<WpMenuItemLinkableFilterInput>;
};

type WpMenuItemLinkableFilterInput = {
  readonly databaseId: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<IDQueryOperatorInput>;
  readonly uri: Maybe<StringQueryOperatorInput>;
};

type WpMenuItemToMenuConnectionEdgeFilterInput = {
  readonly node: Maybe<WpMenuFilterInput>;
};

type WpMenuFilterInput = {
  readonly count: Maybe<IntQueryOperatorInput>;
  readonly databaseId: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly locations: Maybe<WpMenuLocationEnumQueryOperatorInput>;
  readonly menuItems: Maybe<WpMenuToMenuItemConnectionFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly nodeType: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type WpMenuConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpMenuEdge>;
  readonly nodes: ReadonlyArray<WpMenu>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<WpMenuGroupConnection>;
};


type WpMenuConnection_distinctArgs = {
  field: WpMenuFieldsEnum;
};


type WpMenuConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: WpMenuFieldsEnum;
};

type WpMenuEdge = {
  readonly next: Maybe<WpMenu>;
  readonly node: WpMenu;
  readonly previous: Maybe<WpMenu>;
};

type WpMenuFieldsEnum =
  | 'count'
  | 'databaseId'
  | 'id'
  | 'locations'
  | 'menuItems.nodes'
  | 'menuItems.nodes.childItems.nodes'
  | 'menuItems.nodes.cssClasses'
  | 'menuItems.nodes.databaseId'
  | 'menuItems.nodes.description'
  | 'menuItems.nodes.id'
  | 'menuItems.nodes.label'
  | 'menuItems.nodes.linkRelationship'
  | 'menuItems.nodes.locations'
  | 'menuItems.nodes.order'
  | 'menuItems.nodes.parentDatabaseId'
  | 'menuItems.nodes.parentId'
  | 'menuItems.nodes.path'
  | 'menuItems.nodes.target'
  | 'menuItems.nodes.title'
  | 'menuItems.nodes.url'
  | 'menuItems.nodes.nodeType'
  | 'menuItems.nodes.parent.id'
  | 'menuItems.nodes.parent.children'
  | 'menuItems.nodes.children'
  | 'menuItems.nodes.children.id'
  | 'menuItems.nodes.children.children'
  | 'menuItems.nodes.internal.content'
  | 'menuItems.nodes.internal.contentDigest'
  | 'menuItems.nodes.internal.description'
  | 'menuItems.nodes.internal.fieldOwners'
  | 'menuItems.nodes.internal.ignoreType'
  | 'menuItems.nodes.internal.mediaType'
  | 'menuItems.nodes.internal.owner'
  | 'menuItems.nodes.internal.type'
  | 'name'
  | 'slug'
  | 'nodeType'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type WpMenuGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpMenuEdge>;
  readonly nodes: ReadonlyArray<WpMenu>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type WpMenuSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<WpMenuFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type WpMenuItemConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpMenuItemEdge>;
  readonly nodes: ReadonlyArray<WpMenuItem>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<WpMenuItemGroupConnection>;
};


type WpMenuItemConnection_distinctArgs = {
  field: WpMenuItemFieldsEnum;
};


type WpMenuItemConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: WpMenuItemFieldsEnum;
};

type WpMenuItemEdge = {
  readonly next: Maybe<WpMenuItem>;
  readonly node: WpMenuItem;
  readonly previous: Maybe<WpMenuItem>;
};

type WpMenuItemFieldsEnum =
  | 'childItems.nodes'
  | 'childItems.nodes.childItems.nodes'
  | 'childItems.nodes.cssClasses'
  | 'childItems.nodes.databaseId'
  | 'childItems.nodes.description'
  | 'childItems.nodes.id'
  | 'childItems.nodes.label'
  | 'childItems.nodes.linkRelationship'
  | 'childItems.nodes.locations'
  | 'childItems.nodes.order'
  | 'childItems.nodes.parentDatabaseId'
  | 'childItems.nodes.parentId'
  | 'childItems.nodes.path'
  | 'childItems.nodes.target'
  | 'childItems.nodes.title'
  | 'childItems.nodes.url'
  | 'childItems.nodes.nodeType'
  | 'childItems.nodes.parent.id'
  | 'childItems.nodes.parent.children'
  | 'childItems.nodes.children'
  | 'childItems.nodes.children.id'
  | 'childItems.nodes.children.children'
  | 'childItems.nodes.internal.content'
  | 'childItems.nodes.internal.contentDigest'
  | 'childItems.nodes.internal.description'
  | 'childItems.nodes.internal.fieldOwners'
  | 'childItems.nodes.internal.ignoreType'
  | 'childItems.nodes.internal.mediaType'
  | 'childItems.nodes.internal.owner'
  | 'childItems.nodes.internal.type'
  | 'connectedNode.node.databaseId'
  | 'connectedNode.node.id'
  | 'connectedNode.node.uri'
  | 'cssClasses'
  | 'databaseId'
  | 'description'
  | 'id'
  | 'label'
  | 'linkRelationship'
  | 'locations'
  | 'menu.node.count'
  | 'menu.node.databaseId'
  | 'menu.node.id'
  | 'menu.node.locations'
  | 'menu.node.menuItems.nodes'
  | 'menu.node.name'
  | 'menu.node.slug'
  | 'menu.node.nodeType'
  | 'menu.node.parent.id'
  | 'menu.node.parent.children'
  | 'menu.node.children'
  | 'menu.node.children.id'
  | 'menu.node.children.children'
  | 'menu.node.internal.content'
  | 'menu.node.internal.contentDigest'
  | 'menu.node.internal.description'
  | 'menu.node.internal.fieldOwners'
  | 'menu.node.internal.ignoreType'
  | 'menu.node.internal.mediaType'
  | 'menu.node.internal.owner'
  | 'menu.node.internal.type'
  | 'order'
  | 'parentDatabaseId'
  | 'parentId'
  | 'path'
  | 'target'
  | 'title'
  | 'url'
  | 'nodeType'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type WpMenuItemGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpMenuItemEdge>;
  readonly nodes: ReadonlyArray<WpMenuItem>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type WpMenuItemSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<WpMenuItemFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type WpShelf_AcfFilterInput = {
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldGroupName: Maybe<StringQueryOperatorInput>;
  readonly metaDescription: Maybe<StringQueryOperatorInput>;
  readonly metaKeywords: Maybe<StringQueryOperatorInput>;
};

type WpShelfConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpShelfEdge>;
  readonly nodes: ReadonlyArray<WpShelf>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<WpShelfGroupConnection>;
};


type WpShelfConnection_distinctArgs = {
  field: WpShelfFieldsEnum;
};


type WpShelfConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: WpShelfFieldsEnum;
};

type WpShelfEdge = {
  readonly next: Maybe<WpShelf>;
  readonly node: WpShelf;
  readonly previous: Maybe<WpShelf>;
};

type WpShelfFieldsEnum =
  | 'acf.description'
  | 'acf.fieldGroupName'
  | 'acf.metaDescription'
  | 'acf.metaKeywords'
  | 'content'
  | 'contentType.node.archivePath'
  | 'contentType.node.canExport'
  | 'contentType.node.connectedTaxonomies.nodes'
  | 'contentType.node.contentNodes.nodes'
  | 'contentType.node.deleteWithUser'
  | 'contentType.node.description'
  | 'contentType.node.excludeFromSearch'
  | 'contentType.node.graphqlPluralName'
  | 'contentType.node.graphqlSingleName'
  | 'contentType.node.hasArchive'
  | 'contentType.node.hierarchical'
  | 'contentType.node.id'
  | 'contentType.node.isFrontPage'
  | 'contentType.node.isPostsPage'
  | 'contentType.node.label'
  | 'contentType.node.labels.addNew'
  | 'contentType.node.labels.addNewItem'
  | 'contentType.node.labels.allItems'
  | 'contentType.node.labels.archives'
  | 'contentType.node.labels.attributes'
  | 'contentType.node.labels.editItem'
  | 'contentType.node.labels.featuredImage'
  | 'contentType.node.labels.filterItemsList'
  | 'contentType.node.labels.insertIntoItem'
  | 'contentType.node.labels.itemsList'
  | 'contentType.node.labels.itemsListNavigation'
  | 'contentType.node.labels.menuName'
  | 'contentType.node.labels.name'
  | 'contentType.node.labels.newItem'
  | 'contentType.node.labels.notFound'
  | 'contentType.node.labels.notFoundInTrash'
  | 'contentType.node.labels.parentItemColon'
  | 'contentType.node.labels.removeFeaturedImage'
  | 'contentType.node.labels.searchItems'
  | 'contentType.node.labels.setFeaturedImage'
  | 'contentType.node.labels.singularName'
  | 'contentType.node.labels.uploadedToThisItem'
  | 'contentType.node.labels.useFeaturedImage'
  | 'contentType.node.labels.viewItem'
  | 'contentType.node.labels.viewItems'
  | 'contentType.node.menuIcon'
  | 'contentType.node.menuPosition'
  | 'contentType.node.name'
  | 'contentType.node.public'
  | 'contentType.node.publiclyQueryable'
  | 'contentType.node.restBase'
  | 'contentType.node.restControllerClass'
  | 'contentType.node.showInAdminBar'
  | 'contentType.node.showInGraphql'
  | 'contentType.node.showInMenu'
  | 'contentType.node.showInNavMenus'
  | 'contentType.node.showInRest'
  | 'contentType.node.showUi'
  | 'contentType.node.uri'
  | 'contentType.node.nodeType'
  | 'contentType.node.parent.id'
  | 'contentType.node.parent.children'
  | 'contentType.node.children'
  | 'contentType.node.children.id'
  | 'contentType.node.children.children'
  | 'contentType.node.internal.content'
  | 'contentType.node.internal.contentDigest'
  | 'contentType.node.internal.description'
  | 'contentType.node.internal.fieldOwners'
  | 'contentType.node.internal.ignoreType'
  | 'contentType.node.internal.mediaType'
  | 'contentType.node.internal.owner'
  | 'contentType.node.internal.type'
  | 'databaseId'
  | 'date'
  | 'dateGmt'
  | 'desiredSlug'
  | 'enclosure'
  | 'featuredImage.node.altText'
  | 'featuredImage.node.ancestors.nodes'
  | 'featuredImage.node.authorDatabaseId'
  | 'featuredImage.node.authorId'
  | 'featuredImage.node.caption'
  | 'featuredImage.node.wpChildren.nodes'
  | 'featuredImage.node.commentCount'
  | 'featuredImage.node.commentStatus'
  | 'featuredImage.node.comments.nodes'
  | 'featuredImage.node.databaseId'
  | 'featuredImage.node.date'
  | 'featuredImage.node.dateGmt'
  | 'featuredImage.node.description'
  | 'featuredImage.node.desiredSlug'
  | 'featuredImage.node.enclosure'
  | 'featuredImage.node.fileSize'
  | 'featuredImage.node.guid'
  | 'featuredImage.node.id'
  | 'featuredImage.node.link'
  | 'featuredImage.node.mediaDetails.file'
  | 'featuredImage.node.mediaDetails.height'
  | 'featuredImage.node.mediaDetails.sizes'
  | 'featuredImage.node.mediaDetails.width'
  | 'featuredImage.node.mediaItemUrl'
  | 'featuredImage.node.mediaType'
  | 'featuredImage.node.mimeType'
  | 'featuredImage.node.modified'
  | 'featuredImage.node.modifiedGmt'
  | 'featuredImage.node.parentDatabaseId'
  | 'featuredImage.node.parentId'
  | 'featuredImage.node.sizes'
  | 'featuredImage.node.slug'
  | 'featuredImage.node.sourceUrl'
  | 'featuredImage.node.srcSet'
  | 'featuredImage.node.status'
  | 'featuredImage.node.template.templateName'
  | 'featuredImage.node.title'
  | 'featuredImage.node.uri'
  | 'featuredImage.node.nodeType'
  | 'featuredImage.node.remoteFile.sourceInstanceName'
  | 'featuredImage.node.remoteFile.absolutePath'
  | 'featuredImage.node.remoteFile.relativePath'
  | 'featuredImage.node.remoteFile.extension'
  | 'featuredImage.node.remoteFile.size'
  | 'featuredImage.node.remoteFile.prettySize'
  | 'featuredImage.node.remoteFile.modifiedTime'
  | 'featuredImage.node.remoteFile.accessTime'
  | 'featuredImage.node.remoteFile.changeTime'
  | 'featuredImage.node.remoteFile.birthTime'
  | 'featuredImage.node.remoteFile.root'
  | 'featuredImage.node.remoteFile.dir'
  | 'featuredImage.node.remoteFile.base'
  | 'featuredImage.node.remoteFile.ext'
  | 'featuredImage.node.remoteFile.name'
  | 'featuredImage.node.remoteFile.relativeDirectory'
  | 'featuredImage.node.remoteFile.dev'
  | 'featuredImage.node.remoteFile.mode'
  | 'featuredImage.node.remoteFile.nlink'
  | 'featuredImage.node.remoteFile.uid'
  | 'featuredImage.node.remoteFile.gid'
  | 'featuredImage.node.remoteFile.rdev'
  | 'featuredImage.node.remoteFile.ino'
  | 'featuredImage.node.remoteFile.atimeMs'
  | 'featuredImage.node.remoteFile.mtimeMs'
  | 'featuredImage.node.remoteFile.ctimeMs'
  | 'featuredImage.node.remoteFile.atime'
  | 'featuredImage.node.remoteFile.mtime'
  | 'featuredImage.node.remoteFile.ctime'
  | 'featuredImage.node.remoteFile.birthtime'
  | 'featuredImage.node.remoteFile.birthtimeMs'
  | 'featuredImage.node.remoteFile.blksize'
  | 'featuredImage.node.remoteFile.blocks'
  | 'featuredImage.node.remoteFile.url'
  | 'featuredImage.node.remoteFile.publicURL'
  | 'featuredImage.node.remoteFile.childrenImageSharp'
  | 'featuredImage.node.remoteFile.id'
  | 'featuredImage.node.remoteFile.children'
  | 'featuredImage.node.localFile.sourceInstanceName'
  | 'featuredImage.node.localFile.absolutePath'
  | 'featuredImage.node.localFile.relativePath'
  | 'featuredImage.node.localFile.extension'
  | 'featuredImage.node.localFile.size'
  | 'featuredImage.node.localFile.prettySize'
  | 'featuredImage.node.localFile.modifiedTime'
  | 'featuredImage.node.localFile.accessTime'
  | 'featuredImage.node.localFile.changeTime'
  | 'featuredImage.node.localFile.birthTime'
  | 'featuredImage.node.localFile.root'
  | 'featuredImage.node.localFile.dir'
  | 'featuredImage.node.localFile.base'
  | 'featuredImage.node.localFile.ext'
  | 'featuredImage.node.localFile.name'
  | 'featuredImage.node.localFile.relativeDirectory'
  | 'featuredImage.node.localFile.dev'
  | 'featuredImage.node.localFile.mode'
  | 'featuredImage.node.localFile.nlink'
  | 'featuredImage.node.localFile.uid'
  | 'featuredImage.node.localFile.gid'
  | 'featuredImage.node.localFile.rdev'
  | 'featuredImage.node.localFile.ino'
  | 'featuredImage.node.localFile.atimeMs'
  | 'featuredImage.node.localFile.mtimeMs'
  | 'featuredImage.node.localFile.ctimeMs'
  | 'featuredImage.node.localFile.atime'
  | 'featuredImage.node.localFile.mtime'
  | 'featuredImage.node.localFile.ctime'
  | 'featuredImage.node.localFile.birthtime'
  | 'featuredImage.node.localFile.birthtimeMs'
  | 'featuredImage.node.localFile.blksize'
  | 'featuredImage.node.localFile.blocks'
  | 'featuredImage.node.localFile.url'
  | 'featuredImage.node.localFile.publicURL'
  | 'featuredImage.node.localFile.childrenImageSharp'
  | 'featuredImage.node.localFile.id'
  | 'featuredImage.node.localFile.children'
  | 'featuredImage.node.parent.id'
  | 'featuredImage.node.parent.children'
  | 'featuredImage.node.children'
  | 'featuredImage.node.children.id'
  | 'featuredImage.node.children.children'
  | 'featuredImage.node.internal.content'
  | 'featuredImage.node.internal.contentDigest'
  | 'featuredImage.node.internal.description'
  | 'featuredImage.node.internal.fieldOwners'
  | 'featuredImage.node.internal.ignoreType'
  | 'featuredImage.node.internal.mediaType'
  | 'featuredImage.node.internal.owner'
  | 'featuredImage.node.internal.type'
  | 'featuredImageDatabaseId'
  | 'featuredImageId'
  | 'guid'
  | 'id'
  | 'lastEditedBy.node.avatar.default'
  | 'lastEditedBy.node.avatar.extraAttr'
  | 'lastEditedBy.node.avatar.forceDefault'
  | 'lastEditedBy.node.avatar.foundAvatar'
  | 'lastEditedBy.node.avatar.height'
  | 'lastEditedBy.node.avatar.rating'
  | 'lastEditedBy.node.avatar.scheme'
  | 'lastEditedBy.node.avatar.size'
  | 'lastEditedBy.node.avatar.url'
  | 'lastEditedBy.node.avatar.width'
  | 'lastEditedBy.node.capKey'
  | 'lastEditedBy.node.capabilities'
  | 'lastEditedBy.node.comments.nodes'
  | 'lastEditedBy.node.databaseId'
  | 'lastEditedBy.node.description'
  | 'lastEditedBy.node.email'
  | 'lastEditedBy.node.extraCapabilities'
  | 'lastEditedBy.node.firstName'
  | 'lastEditedBy.node.id'
  | 'lastEditedBy.node.lastName'
  | 'lastEditedBy.node.locale'
  | 'lastEditedBy.node.name'
  | 'lastEditedBy.node.nicename'
  | 'lastEditedBy.node.nickname'
  | 'lastEditedBy.node.pages.nodes'
  | 'lastEditedBy.node.posts.nodes'
  | 'lastEditedBy.node.registeredDate'
  | 'lastEditedBy.node.roles.nodes'
  | 'lastEditedBy.node.slug'
  | 'lastEditedBy.node.uri'
  | 'lastEditedBy.node.url'
  | 'lastEditedBy.node.username'
  | 'lastEditedBy.node.nodeType'
  | 'lastEditedBy.node.parent.id'
  | 'lastEditedBy.node.parent.children'
  | 'lastEditedBy.node.children'
  | 'lastEditedBy.node.children.id'
  | 'lastEditedBy.node.children.children'
  | 'lastEditedBy.node.internal.content'
  | 'lastEditedBy.node.internal.contentDigest'
  | 'lastEditedBy.node.internal.description'
  | 'lastEditedBy.node.internal.fieldOwners'
  | 'lastEditedBy.node.internal.ignoreType'
  | 'lastEditedBy.node.internal.mediaType'
  | 'lastEditedBy.node.internal.owner'
  | 'lastEditedBy.node.internal.type'
  | 'link'
  | 'modified'
  | 'modifiedGmt'
  | 'slug'
  | 'status'
  | 'template.templateName'
  | 'title'
  | 'uri'
  | 'nodeType'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type WpShelfGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpShelfEdge>;
  readonly nodes: ReadonlyArray<WpShelf>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type WpShelfFilterInput = {
  readonly acf: Maybe<WpShelf_AcfFilterInput>;
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentType: Maybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  readonly databaseId: Maybe<IntQueryOperatorInput>;
  readonly date: Maybe<DateQueryOperatorInput>;
  readonly dateGmt: Maybe<DateQueryOperatorInput>;
  readonly desiredSlug: Maybe<StringQueryOperatorInput>;
  readonly enclosure: Maybe<StringQueryOperatorInput>;
  readonly featuredImage: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  readonly featuredImageDatabaseId: Maybe<IntQueryOperatorInput>;
  readonly featuredImageId: Maybe<IDQueryOperatorInput>;
  readonly guid: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly lastEditedBy: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  readonly link: Maybe<StringQueryOperatorInput>;
  readonly modified: Maybe<DateQueryOperatorInput>;
  readonly modifiedGmt: Maybe<DateQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly status: Maybe<StringQueryOperatorInput>;
  readonly template: Maybe<WpContentTemplateFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly uri: Maybe<StringQueryOperatorInput>;
  readonly nodeType: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type WpShelfSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<WpShelfFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type WpSettingsFilterInput = {
  readonly discussionSettingsDefaultCommentStatus: Maybe<StringQueryOperatorInput>;
  readonly discussionSettingsDefaultPingStatus: Maybe<StringQueryOperatorInput>;
  readonly generalSettingsDateFormat: Maybe<StringQueryOperatorInput>;
  readonly generalSettingsDescription: Maybe<StringQueryOperatorInput>;
  readonly generalSettingsEmail: Maybe<StringQueryOperatorInput>;
  readonly generalSettingsLanguage: Maybe<StringQueryOperatorInput>;
  readonly generalSettingsStartOfWeek: Maybe<IntQueryOperatorInput>;
  readonly generalSettingsTimeFormat: Maybe<StringQueryOperatorInput>;
  readonly generalSettingsTimezone: Maybe<StringQueryOperatorInput>;
  readonly generalSettingsTitle: Maybe<StringQueryOperatorInput>;
  readonly generalSettingsUrl: Maybe<StringQueryOperatorInput>;
  readonly readingSettingsPostsPerPage: Maybe<IntQueryOperatorInput>;
  readonly writingSettingsDefaultCategory: Maybe<IntQueryOperatorInput>;
  readonly writingSettingsDefaultPostFormat: Maybe<StringQueryOperatorInput>;
  readonly writingSettingsUseSmilies: Maybe<BooleanQueryOperatorInput>;
};

type WpDiscussionSettingsFilterInput = {
  readonly defaultCommentStatus: Maybe<StringQueryOperatorInput>;
  readonly defaultPingStatus: Maybe<StringQueryOperatorInput>;
};

type WpGeneralSettingsFilterInput = {
  readonly dateFormat: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly email: Maybe<StringQueryOperatorInput>;
  readonly language: Maybe<StringQueryOperatorInput>;
  readonly startOfWeek: Maybe<IntQueryOperatorInput>;
  readonly timeFormat: Maybe<StringQueryOperatorInput>;
  readonly timezone: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
};

type WpReadingSettingsFilterInput = {
  readonly postsPerPage: Maybe<IntQueryOperatorInput>;
};

type WpWPGatsbyFilterInput = {
  readonly arePrettyPermalinksEnabled: Maybe<BooleanQueryOperatorInput>;
};

type WpWritingSettingsFilterInput = {
  readonly defaultCategory: Maybe<IntQueryOperatorInput>;
  readonly defaultPostFormat: Maybe<StringQueryOperatorInput>;
  readonly useSmilies: Maybe<BooleanQueryOperatorInput>;
};

type WpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpEdge>;
  readonly nodes: ReadonlyArray<Wp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<WpGroupConnection>;
};


type WpConnection_distinctArgs = {
  field: WpFieldsEnum;
};


type WpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: WpFieldsEnum;
};

type WpEdge = {
  readonly next: Maybe<Wp>;
  readonly node: Wp;
  readonly previous: Maybe<Wp>;
};

type WpFieldsEnum =
  | 'allSettings.discussionSettingsDefaultCommentStatus'
  | 'allSettings.discussionSettingsDefaultPingStatus'
  | 'allSettings.generalSettingsDateFormat'
  | 'allSettings.generalSettingsDescription'
  | 'allSettings.generalSettingsEmail'
  | 'allSettings.generalSettingsLanguage'
  | 'allSettings.generalSettingsStartOfWeek'
  | 'allSettings.generalSettingsTimeFormat'
  | 'allSettings.generalSettingsTimezone'
  | 'allSettings.generalSettingsTitle'
  | 'allSettings.generalSettingsUrl'
  | 'allSettings.readingSettingsPostsPerPage'
  | 'allSettings.writingSettingsDefaultCategory'
  | 'allSettings.writingSettingsDefaultPostFormat'
  | 'allSettings.writingSettingsUseSmilies'
  | 'discussionSettings.defaultCommentStatus'
  | 'discussionSettings.defaultPingStatus'
  | 'generalSettings.dateFormat'
  | 'generalSettings.description'
  | 'generalSettings.email'
  | 'generalSettings.language'
  | 'generalSettings.startOfWeek'
  | 'generalSettings.timeFormat'
  | 'generalSettings.timezone'
  | 'generalSettings.title'
  | 'generalSettings.url'
  | 'readingSettings.postsPerPage'
  | 'wpGatsby.arePrettyPermalinksEnabled'
  | 'writingSettings.defaultCategory'
  | 'writingSettings.defaultPostFormat'
  | 'writingSettings.useSmilies'
  | 'nodeType'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type WpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpEdge>;
  readonly nodes: ReadonlyArray<Wp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type WpFilterInput = {
  readonly allSettings: Maybe<WpSettingsFilterInput>;
  readonly discussionSettings: Maybe<WpDiscussionSettingsFilterInput>;
  readonly generalSettings: Maybe<WpGeneralSettingsFilterInput>;
  readonly readingSettings: Maybe<WpReadingSettingsFilterInput>;
  readonly wpGatsby: Maybe<WpWPGatsbyFilterInput>;
  readonly writingSettings: Maybe<WpWritingSettingsFilterInput>;
  readonly nodeType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type WpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<WpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fixed.originalName'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationWidth'
  | 'fluid.presentationHeight'
  | 'gatsbyImageData'
  | 'original.width'
  | 'original.height'
  | 'original.src'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'resize.originalName'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'buildTime';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions.url'
  | 'pluginOptions.verbose'
  | 'pluginOptions.name'
  | 'pluginOptions.path'
  | 'pluginOptions.outputPath'
  | 'pluginOptions.emitSchema.src___generated___gatsby_introspection_json'
  | 'pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql'
  | 'pluginOptions.components'
  | 'pluginOptions.utils'
  | 'pluginOptions.pages'
  | 'pluginOptions.templates'
  | 'pluginOptions.base64Width'
  | 'pluginOptions.stripMetadata'
  | 'pluginOptions.defaultQuality'
  | 'pluginOptions.failOnError'
  | 'pluginOptions.output'
  | 'pluginOptions.createLinkInHead'
  | 'pluginOptions.pathCheck'
  | 'pluginOptions.allExtensions'
  | 'pluginOptions.isTSX'
  | 'pluginOptions.jsxPragma'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson.name'
  | 'packageJson.description'
  | 'packageJson.version'
  | 'packageJson.main'
  | 'packageJson.license'
  | 'packageJson.dependencies'
  | 'packageJson.dependencies.name'
  | 'packageJson.dependencies.version'
  | 'packageJson.devDependencies'
  | 'packageJson.devDependencies.name'
  | 'packageJson.devDependencies.version'
  | 'packageJson.peerDependencies'
  | 'packageJson.peerDependencies.name'
  | 'packageJson.peerDependencies.version'
  | 'packageJson.keywords';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type PageSingleQueryVariables = Exact<{
  id: Scalars['String'];
}>;


type PageSingleQuery = { readonly query: Maybe<(
    Pick<WpPage, 'databaseId' | 'title' | 'content' | 'date' | 'modified'>
    & { readonly acf: Pick<WpPage_Acf, 'description' | 'metaDescription'>, readonly featuredImage: Maybe<{ readonly node: Maybe<{ readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<(
              Pick<ImageSharpFluid, 'base64'>
              & GatsbyImageSharpFluidFragment
            )> }> }> }> }> }
  )> };

type BlogSingleQueryVariables = Exact<{
  id: Scalars['String'];
}>;


type BlogSingleQuery = { readonly query: Maybe<(
    Pick<WpPost, 'databaseId' | 'title' | 'content' | 'date' | 'modified'>
    & { readonly acf: Pick<WpPost_Acf, 'description' | 'metaDescription' | 'metaKeywords'>, readonly featuredImage: { readonly node: Maybe<{ readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<(
              Pick<ImageSharpFluid, 'base64'>
              & GatsbyImageSharpFluidFragment
            )> }> }> }> } }
  )> };

type ShelfSingleQueryVariables = Exact<{
  id: Scalars['String'];
}>;


type ShelfSingleQuery = { readonly query: Maybe<(
    Pick<WpShelf, 'databaseId' | 'title' | 'content' | 'date' | 'modified'>
    & { readonly acf: Pick<WpShelf_Acf, 'description' | 'metaDescription' | 'metaKeywords'>, readonly featuredImage: { readonly node: Maybe<{ readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<(
              Pick<ImageSharpFluid, 'base64'>
              & GatsbyImageSharpFluidFragment
            )> }> }> }> } }
  )> };

type ShelfPageQueryVariables = Exact<{
  skip: Scalars['Int'];
  limit: Scalars['Int'];
}>;


type ShelfPageQuery = { readonly cardimage: Maybe<{ readonly childImageSharp: Maybe<{ readonly original: Maybe<Pick<ImageSharpOriginal, 'src'>> }> }>, readonly shelf: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<WpShelf, 'id' | 'slug' | 'title' | 'date'>
        & { readonly acf: Pick<WpShelf_Acf, 'description'>, readonly featuredImage: { readonly node: Maybe<{ readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<(
                  Pick<ImageSharpFluid, 'src'>
                  & GatsbyImageSharpFluidFragment
                )> }> }> }> } }
      ) }> } };

type BlogPageQueryVariables = Exact<{
  skip: Scalars['Int'];
  limit: Scalars['Int'];
}>;


type BlogPageQuery = { readonly cardimage: Maybe<{ readonly childImageSharp: Maybe<{ readonly original: Maybe<Pick<ImageSharpOriginal, 'src'>> }> }>, readonly blog: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<WpPost, 'id' | 'slug' | 'title' | 'date'>
        & { readonly acf: Pick<WpPost_Acf, 'description'>, readonly featuredImage: { readonly node: Maybe<{ readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<(
                  Pick<ImageSharpFluid, 'src'>
                  & GatsbyImageSharpFluidFragment
                )> }> }> }> } }
      ) }> } };

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type ContactCardImageQueryVariables = Exact<{ [key: string]: never; }>;


type ContactCardImageQuery = { readonly file: Maybe<{ readonly childImageSharp: Maybe<{ readonly original: Maybe<Pick<ImageSharpOriginal, 'src'>> }> }> };

type IndexMainQueryVariables = Exact<{ [key: string]: never; }>;


type IndexMainQuery = { readonly maincardimage: Maybe<{ readonly childImageSharp: Maybe<{ readonly original: Maybe<Pick<ImageSharpOriginal, 'src'>> }> }>, readonly blog: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<WpPost, 'id' | 'slug' | 'title' | 'date'>
        & { readonly acf: Pick<WpPost_Acf, 'description'>, readonly featuredImage: { readonly node: Maybe<{ readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<(
                  Pick<ImageSharpFluid, 'src'>
                  & GatsbyImageSharpFluidFragment
                )> }> }> }> } }
      ) }> }, readonly shelf: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<WpShelf, 'id' | 'slug' | 'title' | 'date'>
        & { readonly acf: Pick<WpShelf_Acf, 'description'>, readonly featuredImage: { readonly node: Maybe<{ readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<(
                  Pick<ImageSharpFluid, 'src'>
                  & GatsbyImageSharpFluidFragment
                )> }> }> }> } }
      ) }> } };

type ManageSubscriptionsCardImageQueryVariables = Exact<{ [key: string]: never; }>;


type ManageSubscriptionsCardImageQuery = { readonly file: Maybe<{ readonly childImageSharp: Maybe<{ readonly original: Maybe<Pick<ImageSharpOriginal, 'src'>> }> }> };

type DefaultCardImageQueryQueryVariables = Exact<{ [key: string]: never; }>;


type DefaultCardImageQueryQuery = { readonly file: Maybe<{ readonly childImageSharp: Maybe<{ readonly original: Maybe<Pick<ImageSharpOriginal, 'src'>> }> }> };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

}