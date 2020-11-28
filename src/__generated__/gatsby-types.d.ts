/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  JSON: never;
};











type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  readonly toFormat: Maybe<ImageFormat>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
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

enum DirectoryFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

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

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
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

enum FileFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  url = 'url',
  publicURL = 'publicURL',
  childImageSharp___fixed___base64 = 'childImageSharp.fixed.base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp.fixed.tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp.fixed.aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp.fixed.width',
  childImageSharp___fixed___height = 'childImageSharp.fixed.height',
  childImageSharp___fixed___src = 'childImageSharp.fixed.src',
  childImageSharp___fixed___srcSet = 'childImageSharp.fixed.srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp.fixed.srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp.fixed.srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp.fixed.originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp.resolutions.base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp.resolutions.tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp.resolutions.aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp.resolutions.width',
  childImageSharp___resolutions___height = 'childImageSharp.resolutions.height',
  childImageSharp___resolutions___src = 'childImageSharp.resolutions.src',
  childImageSharp___resolutions___srcSet = 'childImageSharp.resolutions.srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp.resolutions.srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp.resolutions.srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp.resolutions.originalName',
  childImageSharp___fluid___base64 = 'childImageSharp.fluid.base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp.fluid.tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp.fluid.aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp.fluid.src',
  childImageSharp___fluid___srcSet = 'childImageSharp.fluid.srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp.fluid.srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp.fluid.srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp.fluid.sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp.fluid.originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp.fluid.originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp.fluid.presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp.fluid.presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp.sizes.base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp.sizes.tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp.sizes.aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp.sizes.src',
  childImageSharp___sizes___srcSet = 'childImageSharp.sizes.srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp.sizes.srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp.sizes.srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp.sizes.sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp.sizes.originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp.sizes.originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp.sizes.presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp.sizes.presentationHeight',
  childImageSharp___gatsbyImageData = 'childImageSharp.gatsbyImageData',
  childImageSharp___original___width = 'childImageSharp.original.width',
  childImageSharp___original___height = 'childImageSharp.original.height',
  childImageSharp___original___src = 'childImageSharp.original.src',
  childImageSharp___resize___src = 'childImageSharp.resize.src',
  childImageSharp___resize___tracedSVG = 'childImageSharp.resize.tracedSVG',
  childImageSharp___resize___width = 'childImageSharp.resize.width',
  childImageSharp___resize___height = 'childImageSharp.resize.height',
  childImageSharp___resize___aspectRatio = 'childImageSharp.resize.aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp.resize.originalName',
  childImageSharp___id = 'childImageSharp.id',
  childImageSharp___parent___id = 'childImageSharp.parent.id',
  childImageSharp___parent___parent___id = 'childImageSharp.parent.parent.id',
  childImageSharp___parent___parent___children = 'childImageSharp.parent.parent.children',
  childImageSharp___parent___children = 'childImageSharp.parent.children',
  childImageSharp___parent___children___id = 'childImageSharp.parent.children.id',
  childImageSharp___parent___children___children = 'childImageSharp.parent.children.children',
  childImageSharp___parent___internal___content = 'childImageSharp.parent.internal.content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp.parent.internal.contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp.parent.internal.description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp.parent.internal.fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp.parent.internal.ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp.parent.internal.mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp.parent.internal.owner',
  childImageSharp___parent___internal___type = 'childImageSharp.parent.internal.type',
  childImageSharp___children = 'childImageSharp.children',
  childImageSharp___children___id = 'childImageSharp.children.id',
  childImageSharp___children___parent___id = 'childImageSharp.children.parent.id',
  childImageSharp___children___parent___children = 'childImageSharp.children.parent.children',
  childImageSharp___children___children = 'childImageSharp.children.children',
  childImageSharp___children___children___id = 'childImageSharp.children.children.id',
  childImageSharp___children___children___children = 'childImageSharp.children.children.children',
  childImageSharp___children___internal___content = 'childImageSharp.children.internal.content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp.children.internal.contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp.children.internal.description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp.children.internal.fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp.children.internal.ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp.children.internal.mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp.children.internal.owner',
  childImageSharp___children___internal___type = 'childImageSharp.children.internal.type',
  childImageSharp___internal___content = 'childImageSharp.internal.content',
  childImageSharp___internal___contentDigest = 'childImageSharp.internal.contentDigest',
  childImageSharp___internal___description = 'childImageSharp.internal.description',
  childImageSharp___internal___fieldOwners = 'childImageSharp.internal.fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp.internal.ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp.internal.mediaType',
  childImageSharp___internal___owner = 'childImageSharp.internal.owner',
  childImageSharp___internal___type = 'childImageSharp.internal.type',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

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
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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

type IDQueryOperatorInput = {
  readonly eq: Maybe<Scalars['ID']>;
  readonly ne: Maybe<Scalars['ID']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
};

enum ImageCropFocus {
  CENTER = 0,
  NORTH = 1,
  NORTHEAST = 5,
  EAST = 2,
  SOUTHEAST = 6,
  SOUTH = 3,
  SOUTHWEST = 7,
  WEST = 4,
  NORTHWEST = 8,
  ENTROPY = 16,
  ATTENTION = 17
}

enum ImageFit {
  COVER = 'cover',
  CONTAIN = 'contain',
  FILL = 'fill',
  INSIDE = 'inside',
  OUTSIDE = 'outside'
}

enum ImageFormat {
  NO_CHANGE = '',
  AUTO = '',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp'
}

enum ImageLayout {
  FIXED = 'fixed',
  FLUID = 'fluid',
  CONSTRAINED = 'constrained'
}

enum ImagePlaceholder {
  DOMINANT_COLOR = 'dominantColor',
  TRACED_SVG = 'tracedSVG',
  BLURRED = 'blurred',
  NONE = 'none'
}

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  readonly resolutions: Maybe<ImageSharpResolutions>;
  readonly fluid: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  readonly sizes: Maybe<ImageSharpSizes>;
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


type ImageSharp_resolutionsArgs = {
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


type ImageSharp_sizesArgs = {
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
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats?: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  transformOptions: Maybe<TransformOptions>;
  background?: Maybe<Scalars['String']>;
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

enum ImageSharpFieldsEnum {
  fixed___base64 = 'fixed.base64',
  fixed___tracedSVG = 'fixed.tracedSVG',
  fixed___aspectRatio = 'fixed.aspectRatio',
  fixed___width = 'fixed.width',
  fixed___height = 'fixed.height',
  fixed___src = 'fixed.src',
  fixed___srcSet = 'fixed.srcSet',
  fixed___srcWebp = 'fixed.srcWebp',
  fixed___srcSetWebp = 'fixed.srcSetWebp',
  fixed___originalName = 'fixed.originalName',
  resolutions___base64 = 'resolutions.base64',
  resolutions___tracedSVG = 'resolutions.tracedSVG',
  resolutions___aspectRatio = 'resolutions.aspectRatio',
  resolutions___width = 'resolutions.width',
  resolutions___height = 'resolutions.height',
  resolutions___src = 'resolutions.src',
  resolutions___srcSet = 'resolutions.srcSet',
  resolutions___srcWebp = 'resolutions.srcWebp',
  resolutions___srcSetWebp = 'resolutions.srcSetWebp',
  resolutions___originalName = 'resolutions.originalName',
  fluid___base64 = 'fluid.base64',
  fluid___tracedSVG = 'fluid.tracedSVG',
  fluid___aspectRatio = 'fluid.aspectRatio',
  fluid___src = 'fluid.src',
  fluid___srcSet = 'fluid.srcSet',
  fluid___srcWebp = 'fluid.srcWebp',
  fluid___srcSetWebp = 'fluid.srcSetWebp',
  fluid___sizes = 'fluid.sizes',
  fluid___originalImg = 'fluid.originalImg',
  fluid___originalName = 'fluid.originalName',
  fluid___presentationWidth = 'fluid.presentationWidth',
  fluid___presentationHeight = 'fluid.presentationHeight',
  sizes___base64 = 'sizes.base64',
  sizes___tracedSVG = 'sizes.tracedSVG',
  sizes___aspectRatio = 'sizes.aspectRatio',
  sizes___src = 'sizes.src',
  sizes___srcSet = 'sizes.srcSet',
  sizes___srcWebp = 'sizes.srcWebp',
  sizes___srcSetWebp = 'sizes.srcSetWebp',
  sizes___sizes = 'sizes.sizes',
  sizes___originalImg = 'sizes.originalImg',
  sizes___originalName = 'sizes.originalName',
  sizes___presentationWidth = 'sizes.presentationWidth',
  sizes___presentationHeight = 'sizes.presentationHeight',
  gatsbyImageData = 'gatsbyImageData',
  original___width = 'original.width',
  original___height = 'original.height',
  original___src = 'original.src',
  resize___src = 'resize.src',
  resize___tracedSVG = 'resize.tracedSVG',
  resize___width = 'resize.width',
  resize___height = 'resize.height',
  resize___aspectRatio = 'resize.aspectRatio',
  resize___originalName = 'resize.originalName',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly sizes: Maybe<ImageSharpSizesFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
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

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResolutions = {
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

type ImageSharpResolutionsFilterInput = {
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

type ImageSharpSizes = {
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

type ImageSharpSizesFilterInput = {
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

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};


type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
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

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

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

enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'black',
  TURNPOLICY_WHITE = 'white',
  TURNPOLICY_LEFT = 'left',
  TURNPOLICY_RIGHT = 'right',
  TURNPOLICY_MINORITY = 'minority',
  TURNPOLICY_MAJORITY = 'majority'
}

type Query = {
  readonly wpContentNode: Maybe<WpContentNode>;
  readonly allWpContentNode: WpContentNodeConnection;
  readonly wpTermNode: Maybe<WpTermNode>;
  readonly allWpTermNode: WpTermNodeConnection;
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly wpUser: Maybe<WpUser>;
  readonly allWpUser: WpUserConnection;
  readonly wpComment: Maybe<WpComment>;
  readonly allWpComment: WpCommentConnection;
  readonly wpMediaItem: Maybe<WpMediaItem>;
  readonly allWpMediaItem: WpMediaItemConnection;
  readonly wpContentType: Maybe<WpContentType>;
  readonly allWpContentType: WpContentTypeConnection;
  readonly wpTaxonomy: Maybe<WpTaxonomy>;
  readonly allWpTaxonomy: WpTaxonomyConnection;
  readonly wpPage: Maybe<WpPage>;
  readonly allWpPage: WpPageConnection;
  readonly wpPost: Maybe<WpPost>;
  readonly allWpPost: WpPostConnection;
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


type Query_wpContentNodeArgs = {
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
};


type Query_allWpContentNodeArgs = {
  filter: Maybe<WpContentNodeFilterInput>;
  sort: Maybe<WpContentNodeSortInput>;
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
};


type Query_allWpTermNodeArgs = {
  filter: Maybe<WpTermNodeFilterInput>;
  sort: Maybe<WpTermNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
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
  contentType: Maybe<WpMediaItemToContentTypeConnectionEdgeFilterInput>;
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


type Query_wpPageArgs = {
  ancestors: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput>;
  author: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId: Maybe<IntQueryOperatorInput>;
  authorId: Maybe<IDQueryOperatorInput>;
  wpChildren: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput>;
  commentCount: Maybe<IntQueryOperatorInput>;
  commentStatus: Maybe<StringQueryOperatorInput>;
  comments: Maybe<WpPageToCommentConnectionFilterInput>;
  content: Maybe<StringQueryOperatorInput>;
  contentType: Maybe<WpPageToContentTypeConnectionEdgeFilterInput>;
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
  author: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId: Maybe<IntQueryOperatorInput>;
  authorId: Maybe<IDQueryOperatorInput>;
  categories: Maybe<WpPostToCategoryConnectionFilterInput>;
  commentCount: Maybe<IntQueryOperatorInput>;
  commentStatus: Maybe<StringQueryOperatorInput>;
  comments: Maybe<WpPostToCommentConnectionFilterInput>;
  content: Maybe<StringQueryOperatorInput>;
  contentType: Maybe<WpPostToContentTypeConnectionEdgeFilterInput>;
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
  content: Maybe<StringQueryOperatorInput>;
  contentType: Maybe<WpShelfToContentTypeConnectionEdgeFilterInput>;
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
  resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  sizes: Maybe<ImageSharpSizesFilterInput>;
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

enum SiteBuildMetadataFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  buildTime = 'buildTime'
}

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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

enum SiteFieldsEnum {
  buildTime = 'buildTime',
  siteMetadata___title = 'siteMetadata.title',
  siteMetadata___description = 'siteMetadata.description',
  siteMetadata___siteUrl = 'siteMetadata.siteUrl',
  siteMetadata___author = 'siteMetadata.author',
  port = 'port',
  host = 'host',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

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

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
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

type SitePageContext = {
  readonly id: Maybe<Scalars['String']>;
  readonly limit: Maybe<Scalars['Int']>;
  readonly skip: Maybe<Scalars['Int']>;
  readonly numPages: Maybe<Scalars['Int']>;
  readonly currentPage: Maybe<Scalars['Int']>;
};

type SitePageContextFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly limit: Maybe<IntQueryOperatorInput>;
  readonly skip: Maybe<IntQueryOperatorInput>;
  readonly numPages: Maybe<IntQueryOperatorInput>;
  readonly currentPage: Maybe<IntQueryOperatorInput>;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

enum SitePageFieldsEnum {
  path = 'path',
  component = 'component',
  internalComponentName = 'internalComponentName',
  componentChunkName = 'componentChunkName',
  matchPath = 'matchPath',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context___id = 'context.id',
  context___limit = 'context.limit',
  context___skip = 'context.skip',
  context___numPages = 'context.numPages',
  context___currentPage = 'context.currentPage',
  pluginCreator___id = 'pluginCreator.id',
  pluginCreator___parent___id = 'pluginCreator.parent.id',
  pluginCreator___parent___parent___id = 'pluginCreator.parent.parent.id',
  pluginCreator___parent___parent___children = 'pluginCreator.parent.parent.children',
  pluginCreator___parent___children = 'pluginCreator.parent.children',
  pluginCreator___parent___children___id = 'pluginCreator.parent.children.id',
  pluginCreator___parent___children___children = 'pluginCreator.parent.children.children',
  pluginCreator___parent___internal___content = 'pluginCreator.parent.internal.content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator.parent.internal.contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator.parent.internal.description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator.parent.internal.fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator.parent.internal.ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator.parent.internal.mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator.parent.internal.owner',
  pluginCreator___parent___internal___type = 'pluginCreator.parent.internal.type',
  pluginCreator___children = 'pluginCreator.children',
  pluginCreator___children___id = 'pluginCreator.children.id',
  pluginCreator___children___parent___id = 'pluginCreator.children.parent.id',
  pluginCreator___children___parent___children = 'pluginCreator.children.parent.children',
  pluginCreator___children___children = 'pluginCreator.children.children',
  pluginCreator___children___children___id = 'pluginCreator.children.children.id',
  pluginCreator___children___children___children = 'pluginCreator.children.children.children',
  pluginCreator___children___internal___content = 'pluginCreator.children.internal.content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator.children.internal.contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator.children.internal.description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator.children.internal.fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator.children.internal.ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator.children.internal.mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator.children.internal.owner',
  pluginCreator___children___internal___type = 'pluginCreator.children.internal.type',
  pluginCreator___internal___content = 'pluginCreator.internal.content',
  pluginCreator___internal___contentDigest = 'pluginCreator.internal.contentDigest',
  pluginCreator___internal___description = 'pluginCreator.internal.description',
  pluginCreator___internal___fieldOwners = 'pluginCreator.internal.fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator.internal.ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator.internal.mediaType',
  pluginCreator___internal___owner = 'pluginCreator.internal.owner',
  pluginCreator___internal___type = 'pluginCreator.internal.type',
  pluginCreator___resolve = 'pluginCreator.resolve',
  pluginCreator___name = 'pluginCreator.name',
  pluginCreator___version = 'pluginCreator.version',
  pluginCreator___pluginOptions___url = 'pluginCreator.pluginOptions.url',
  pluginCreator___pluginOptions___useACF = 'pluginCreator.pluginOptions.useACF',
  pluginCreator___pluginOptions___name = 'pluginCreator.pluginOptions.name',
  pluginCreator___pluginOptions___path = 'pluginCreator.pluginOptions.path',
  pluginCreator___pluginOptions___outputPath = 'pluginCreator.pluginOptions.outputPath',
  pluginCreator___pluginOptions___emitSchema___src___generated___gatsby_introspection_json = 'pluginCreator.pluginOptions.emitSchema.src___generated___gatsby_introspection_json',
  pluginCreator___pluginOptions___emitPluginDocuments___src___generated___gatsby_plugin_documents_graphql = 'pluginCreator.pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql',
  pluginCreator___pluginOptions___base64Width = 'pluginCreator.pluginOptions.base64Width',
  pluginCreator___pluginOptions___stripMetadata = 'pluginCreator.pluginOptions.stripMetadata',
  pluginCreator___pluginOptions___defaultQuality = 'pluginCreator.pluginOptions.defaultQuality',
  pluginCreator___pluginOptions___failOnError = 'pluginCreator.pluginOptions.failOnError',
  pluginCreator___pluginOptions___indentedSyntax = 'pluginCreator.pluginOptions.indentedSyntax',
  pluginCreator___pluginOptions___indentType = 'pluginCreator.pluginOptions.indentType',
  pluginCreator___pluginOptions___indentWidth = 'pluginCreator.pluginOptions.indentWidth',
  pluginCreator___pluginOptions___linefeed = 'pluginCreator.pluginOptions.linefeed',
  pluginCreator___pluginOptions___omitSourceMapUrl = 'pluginCreator.pluginOptions.omitSourceMapUrl',
  pluginCreator___pluginOptions___precision = 'pluginCreator.pluginOptions.precision',
  pluginCreator___pluginOptions___sourceComments = 'pluginCreator.pluginOptions.sourceComments',
  pluginCreator___pluginOptions___sourceMapContents = 'pluginCreator.pluginOptions.sourceMapContents',
  pluginCreator___pluginOptions___sourceMapEmbed = 'pluginCreator.pluginOptions.sourceMapEmbed',
  pluginCreator___pluginOptions___output = 'pluginCreator.pluginOptions.output',
  pluginCreator___pluginOptions___createLinkInHead = 'pluginCreator.pluginOptions.createLinkInHead',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator.pluginOptions.pathCheck',
  pluginCreator___pluginOptions___allExtensions = 'pluginCreator.pluginOptions.allExtensions',
  pluginCreator___pluginOptions___isTSX = 'pluginCreator.pluginOptions.isTSX',
  pluginCreator___pluginOptions___jsxPragma = 'pluginCreator.pluginOptions.jsxPragma',
  pluginCreator___nodeAPIs = 'pluginCreator.nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator.browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator.ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator.pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator.packageJson.name',
  pluginCreator___packageJson___description = 'pluginCreator.packageJson.description',
  pluginCreator___packageJson___version = 'pluginCreator.packageJson.version',
  pluginCreator___packageJson___main = 'pluginCreator.packageJson.main',
  pluginCreator___packageJson___license = 'pluginCreator.packageJson.license',
  pluginCreator___packageJson___dependencies = 'pluginCreator.packageJson.dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator.packageJson.dependencies.name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator.packageJson.dependencies.version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator.packageJson.devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator.packageJson.devDependencies.name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator.packageJson.devDependencies.version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator.packageJson.peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator.packageJson.peerDependencies.name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator.packageJson.peerDependencies.version',
  pluginCreator___packageJson___keywords = 'pluginCreator.packageJson.keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath'
}

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

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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

enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___url = 'pluginOptions.url',
  pluginOptions___useACF = 'pluginOptions.useACF',
  pluginOptions___name = 'pluginOptions.name',
  pluginOptions___path = 'pluginOptions.path',
  pluginOptions___outputPath = 'pluginOptions.outputPath',
  pluginOptions___emitSchema___src___generated___gatsby_introspection_json = 'pluginOptions.emitSchema.src___generated___gatsby_introspection_json',
  pluginOptions___emitPluginDocuments___src___generated___gatsby_plugin_documents_graphql = 'pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql',
  pluginOptions___base64Width = 'pluginOptions.base64Width',
  pluginOptions___stripMetadata = 'pluginOptions.stripMetadata',
  pluginOptions___defaultQuality = 'pluginOptions.defaultQuality',
  pluginOptions___failOnError = 'pluginOptions.failOnError',
  pluginOptions___indentedSyntax = 'pluginOptions.indentedSyntax',
  pluginOptions___indentType = 'pluginOptions.indentType',
  pluginOptions___indentWidth = 'pluginOptions.indentWidth',
  pluginOptions___linefeed = 'pluginOptions.linefeed',
  pluginOptions___omitSourceMapUrl = 'pluginOptions.omitSourceMapUrl',
  pluginOptions___precision = 'pluginOptions.precision',
  pluginOptions___sourceComments = 'pluginOptions.sourceComments',
  pluginOptions___sourceMapContents = 'pluginOptions.sourceMapContents',
  pluginOptions___sourceMapEmbed = 'pluginOptions.sourceMapEmbed',
  pluginOptions___output = 'pluginOptions.output',
  pluginOptions___createLinkInHead = 'pluginOptions.createLinkInHead',
  pluginOptions___pathCheck = 'pluginOptions.pathCheck',
  pluginOptions___allExtensions = 'pluginOptions.allExtensions',
  pluginOptions___isTSX = 'pluginOptions.isTSX',
  pluginOptions___jsxPragma = 'pluginOptions.jsxPragma',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson.name',
  packageJson___description = 'packageJson.description',
  packageJson___version = 'packageJson.version',
  packageJson___main = 'packageJson.main',
  packageJson___license = 'packageJson.license',
  packageJson___dependencies = 'packageJson.dependencies',
  packageJson___dependencies___name = 'packageJson.dependencies.name',
  packageJson___dependencies___version = 'packageJson.dependencies.version',
  packageJson___devDependencies = 'packageJson.devDependencies',
  packageJson___devDependencies___name = 'packageJson.devDependencies.name',
  packageJson___devDependencies___version = 'packageJson.devDependencies.version',
  packageJson___peerDependencies = 'packageJson.peerDependencies',
  packageJson___peerDependencies___name = 'packageJson.peerDependencies.name',
  packageJson___peerDependencies___version = 'packageJson.peerDependencies.version',
  packageJson___keywords = 'packageJson.keywords'
}

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

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
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

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
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

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPluginOptions = {
  readonly url: Maybe<Scalars['String']>;
  readonly useACF: Maybe<Scalars['Boolean']>;
  readonly name: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly outputPath: Maybe<Scalars['String']>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchema>;
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocuments>;
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly indentedSyntax: Maybe<Scalars['Boolean']>;
  readonly indentType: Maybe<Scalars['String']>;
  readonly indentWidth: Maybe<Scalars['Int']>;
  readonly linefeed: Maybe<Scalars['String']>;
  readonly omitSourceMapUrl: Maybe<Scalars['Boolean']>;
  readonly precision: Maybe<Scalars['Int']>;
  readonly sourceComments: Maybe<Scalars['Boolean']>;
  readonly sourceMapContents: Maybe<Scalars['Boolean']>;
  readonly sourceMapEmbed: Maybe<Scalars['Boolean']>;
  readonly output: Maybe<Scalars['String']>;
  readonly createLinkInHead: Maybe<Scalars['Boolean']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsEmitPluginDocuments = {
  readonly src___generated___gatsby_plugin_documents_graphql: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsEmitPluginDocumentsFilterInput = {
  readonly src___generated___gatsby_plugin_documents_graphql: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsEmitSchema = {
  readonly src___generated___gatsby_introspection_json: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsEmitSchemaFilterInput = {
  readonly src___generated___gatsby_introspection_json: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly useACF: Maybe<BooleanQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly outputPath: Maybe<StringQueryOperatorInput>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchemaFilterInput>;
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocumentsFilterInput>;
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly indentedSyntax: Maybe<BooleanQueryOperatorInput>;
  readonly indentType: Maybe<StringQueryOperatorInput>;
  readonly indentWidth: Maybe<IntQueryOperatorInput>;
  readonly linefeed: Maybe<StringQueryOperatorInput>;
  readonly omitSourceMapUrl: Maybe<BooleanQueryOperatorInput>;
  readonly precision: Maybe<IntQueryOperatorInput>;
  readonly sourceComments: Maybe<BooleanQueryOperatorInput>;
  readonly sourceMapContents: Maybe<BooleanQueryOperatorInput>;
  readonly sourceMapEmbed: Maybe<BooleanQueryOperatorInput>;
  readonly output: Maybe<StringQueryOperatorInput>;
  readonly createLinkInHead: Maybe<BooleanQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly author: Maybe<Scalars['String']>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<StringQueryOperatorInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
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

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
type WpAvatar = {
  /**
   * URL for the default image or a default type. Accepts &#039;404&#039; (return a
   * 404 instead of a default image), &#039;retro&#039; (8bit),
   * &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face),
   * &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;,
   * &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039;
   * (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo).
   */
  readonly default: Maybe<Scalars['String']>;
  /** HTML attributes to insert in the IMG element. Is not sanitized. */
  readonly extraAttr: Maybe<Scalars['String']>;
  /** Whether to always show the default image, never the Gravatar. */
  readonly forceDefault: Maybe<Scalars['Boolean']>;
  /** Whether the avatar was successfully found. */
  readonly foundAvatar: Maybe<Scalars['Boolean']>;
  /** Height of the avatar image. */
  readonly height: Maybe<Scalars['Int']>;
  /**
   * What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;,
   * &#039;R&#039;, &#039;X&#039;, and are judged in that order.
   */
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

enum WpCategoryFieldsEnum {
  ancestors___nodes = 'ancestors.nodes',
  ancestors___nodes___ancestors___nodes = 'ancestors.nodes.ancestors.nodes',
  ancestors___nodes___wpChildren___nodes = 'ancestors.nodes.wpChildren.nodes',
  ancestors___nodes___contentNodes___nodes = 'ancestors.nodes.contentNodes.nodes',
  ancestors___nodes___count = 'ancestors.nodes.count',
  ancestors___nodes___databaseId = 'ancestors.nodes.databaseId',
  ancestors___nodes___description = 'ancestors.nodes.description',
  ancestors___nodes___id = 'ancestors.nodes.id',
  ancestors___nodes___link = 'ancestors.nodes.link',
  ancestors___nodes___name = 'ancestors.nodes.name',
  ancestors___nodes___parentDatabaseId = 'ancestors.nodes.parentDatabaseId',
  ancestors___nodes___parentId = 'ancestors.nodes.parentId',
  ancestors___nodes___posts___nodes = 'ancestors.nodes.posts.nodes',
  ancestors___nodes___slug = 'ancestors.nodes.slug',
  ancestors___nodes___termGroupId = 'ancestors.nodes.termGroupId',
  ancestors___nodes___termTaxonomyId = 'ancestors.nodes.termTaxonomyId',
  ancestors___nodes___uri = 'ancestors.nodes.uri',
  ancestors___nodes___nodeType = 'ancestors.nodes.nodeType',
  ancestors___nodes___parent___id = 'ancestors.nodes.parent.id',
  ancestors___nodes___parent___children = 'ancestors.nodes.parent.children',
  ancestors___nodes___children = 'ancestors.nodes.children',
  ancestors___nodes___children___id = 'ancestors.nodes.children.id',
  ancestors___nodes___children___children = 'ancestors.nodes.children.children',
  ancestors___nodes___internal___content = 'ancestors.nodes.internal.content',
  ancestors___nodes___internal___contentDigest = 'ancestors.nodes.internal.contentDigest',
  ancestors___nodes___internal___description = 'ancestors.nodes.internal.description',
  ancestors___nodes___internal___fieldOwners = 'ancestors.nodes.internal.fieldOwners',
  ancestors___nodes___internal___ignoreType = 'ancestors.nodes.internal.ignoreType',
  ancestors___nodes___internal___mediaType = 'ancestors.nodes.internal.mediaType',
  ancestors___nodes___internal___owner = 'ancestors.nodes.internal.owner',
  ancestors___nodes___internal___type = 'ancestors.nodes.internal.type',
  wpChildren___nodes = 'wpChildren.nodes',
  wpChildren___nodes___ancestors___nodes = 'wpChildren.nodes.ancestors.nodes',
  wpChildren___nodes___wpChildren___nodes = 'wpChildren.nodes.wpChildren.nodes',
  wpChildren___nodes___contentNodes___nodes = 'wpChildren.nodes.contentNodes.nodes',
  wpChildren___nodes___count = 'wpChildren.nodes.count',
  wpChildren___nodes___databaseId = 'wpChildren.nodes.databaseId',
  wpChildren___nodes___description = 'wpChildren.nodes.description',
  wpChildren___nodes___id = 'wpChildren.nodes.id',
  wpChildren___nodes___link = 'wpChildren.nodes.link',
  wpChildren___nodes___name = 'wpChildren.nodes.name',
  wpChildren___nodes___parentDatabaseId = 'wpChildren.nodes.parentDatabaseId',
  wpChildren___nodes___parentId = 'wpChildren.nodes.parentId',
  wpChildren___nodes___posts___nodes = 'wpChildren.nodes.posts.nodes',
  wpChildren___nodes___slug = 'wpChildren.nodes.slug',
  wpChildren___nodes___termGroupId = 'wpChildren.nodes.termGroupId',
  wpChildren___nodes___termTaxonomyId = 'wpChildren.nodes.termTaxonomyId',
  wpChildren___nodes___uri = 'wpChildren.nodes.uri',
  wpChildren___nodes___nodeType = 'wpChildren.nodes.nodeType',
  wpChildren___nodes___parent___id = 'wpChildren.nodes.parent.id',
  wpChildren___nodes___parent___children = 'wpChildren.nodes.parent.children',
  wpChildren___nodes___children = 'wpChildren.nodes.children',
  wpChildren___nodes___children___id = 'wpChildren.nodes.children.id',
  wpChildren___nodes___children___children = 'wpChildren.nodes.children.children',
  wpChildren___nodes___internal___content = 'wpChildren.nodes.internal.content',
  wpChildren___nodes___internal___contentDigest = 'wpChildren.nodes.internal.contentDigest',
  wpChildren___nodes___internal___description = 'wpChildren.nodes.internal.description',
  wpChildren___nodes___internal___fieldOwners = 'wpChildren.nodes.internal.fieldOwners',
  wpChildren___nodes___internal___ignoreType = 'wpChildren.nodes.internal.ignoreType',
  wpChildren___nodes___internal___mediaType = 'wpChildren.nodes.internal.mediaType',
  wpChildren___nodes___internal___owner = 'wpChildren.nodes.internal.owner',
  wpChildren___nodes___internal___type = 'wpChildren.nodes.internal.type',
  contentNodes___nodes = 'contentNodes.nodes',
  contentNodes___nodes___databaseId = 'contentNodes.nodes.databaseId',
  contentNodes___nodes___date = 'contentNodes.nodes.date',
  contentNodes___nodes___dateGmt = 'contentNodes.nodes.dateGmt',
  contentNodes___nodes___desiredSlug = 'contentNodes.nodes.desiredSlug',
  contentNodes___nodes___enclosure = 'contentNodes.nodes.enclosure',
  contentNodes___nodes___guid = 'contentNodes.nodes.guid',
  contentNodes___nodes___id = 'contentNodes.nodes.id',
  contentNodes___nodes___link = 'contentNodes.nodes.link',
  contentNodes___nodes___modified = 'contentNodes.nodes.modified',
  contentNodes___nodes___modifiedGmt = 'contentNodes.nodes.modifiedGmt',
  contentNodes___nodes___slug = 'contentNodes.nodes.slug',
  contentNodes___nodes___status = 'contentNodes.nodes.status',
  contentNodes___nodes___template___templateName = 'contentNodes.nodes.template.templateName',
  contentNodes___nodes___uri = 'contentNodes.nodes.uri',
  contentNodes___nodes___nodeType = 'contentNodes.nodes.nodeType',
  count = 'count',
  databaseId = 'databaseId',
  description = 'description',
  id = 'id',
  link = 'link',
  name = 'name',
  wpParent___node___ancestors___nodes = 'wpParent.node.ancestors.nodes',
  wpParent___node___wpChildren___nodes = 'wpParent.node.wpChildren.nodes',
  wpParent___node___contentNodes___nodes = 'wpParent.node.contentNodes.nodes',
  wpParent___node___count = 'wpParent.node.count',
  wpParent___node___databaseId = 'wpParent.node.databaseId',
  wpParent___node___description = 'wpParent.node.description',
  wpParent___node___id = 'wpParent.node.id',
  wpParent___node___link = 'wpParent.node.link',
  wpParent___node___name = 'wpParent.node.name',
  wpParent___node___parentDatabaseId = 'wpParent.node.parentDatabaseId',
  wpParent___node___parentId = 'wpParent.node.parentId',
  wpParent___node___posts___nodes = 'wpParent.node.posts.nodes',
  wpParent___node___slug = 'wpParent.node.slug',
  wpParent___node___termGroupId = 'wpParent.node.termGroupId',
  wpParent___node___termTaxonomyId = 'wpParent.node.termTaxonomyId',
  wpParent___node___uri = 'wpParent.node.uri',
  wpParent___node___nodeType = 'wpParent.node.nodeType',
  wpParent___node___parent___id = 'wpParent.node.parent.id',
  wpParent___node___parent___children = 'wpParent.node.parent.children',
  wpParent___node___children = 'wpParent.node.children',
  wpParent___node___children___id = 'wpParent.node.children.id',
  wpParent___node___children___children = 'wpParent.node.children.children',
  wpParent___node___internal___content = 'wpParent.node.internal.content',
  wpParent___node___internal___contentDigest = 'wpParent.node.internal.contentDigest',
  wpParent___node___internal___description = 'wpParent.node.internal.description',
  wpParent___node___internal___fieldOwners = 'wpParent.node.internal.fieldOwners',
  wpParent___node___internal___ignoreType = 'wpParent.node.internal.ignoreType',
  wpParent___node___internal___mediaType = 'wpParent.node.internal.mediaType',
  wpParent___node___internal___owner = 'wpParent.node.internal.owner',
  wpParent___node___internal___type = 'wpParent.node.internal.type',
  parentDatabaseId = 'parentDatabaseId',
  parentId = 'parentId',
  posts___nodes = 'posts.nodes',
  posts___nodes___authorDatabaseId = 'posts.nodes.authorDatabaseId',
  posts___nodes___authorId = 'posts.nodes.authorId',
  posts___nodes___categories___nodes = 'posts.nodes.categories.nodes',
  posts___nodes___commentCount = 'posts.nodes.commentCount',
  posts___nodes___commentStatus = 'posts.nodes.commentStatus',
  posts___nodes___comments___nodes = 'posts.nodes.comments.nodes',
  posts___nodes___content = 'posts.nodes.content',
  posts___nodes___databaseId = 'posts.nodes.databaseId',
  posts___nodes___date = 'posts.nodes.date',
  posts___nodes___dateGmt = 'posts.nodes.dateGmt',
  posts___nodes___desiredSlug = 'posts.nodes.desiredSlug',
  posts___nodes___enclosure = 'posts.nodes.enclosure',
  posts___nodes___excerpt = 'posts.nodes.excerpt',
  posts___nodes___featuredImageDatabaseId = 'posts.nodes.featuredImageDatabaseId',
  posts___nodes___featuredImageId = 'posts.nodes.featuredImageId',
  posts___nodes___guid = 'posts.nodes.guid',
  posts___nodes___id = 'posts.nodes.id',
  posts___nodes___isRevision = 'posts.nodes.isRevision',
  posts___nodes___isSticky = 'posts.nodes.isSticky',
  posts___nodes___link = 'posts.nodes.link',
  posts___nodes___modified = 'posts.nodes.modified',
  posts___nodes___modifiedGmt = 'posts.nodes.modifiedGmt',
  posts___nodes___pingStatus = 'posts.nodes.pingStatus',
  posts___nodes___pinged = 'posts.nodes.pinged',
  posts___nodes___postFormats___nodes = 'posts.nodes.postFormats.nodes',
  posts___nodes___slug = 'posts.nodes.slug',
  posts___nodes___status = 'posts.nodes.status',
  posts___nodes___tags___nodes = 'posts.nodes.tags.nodes',
  posts___nodes___template___templateName = 'posts.nodes.template.templateName',
  posts___nodes___terms___nodes = 'posts.nodes.terms.nodes',
  posts___nodes___title = 'posts.nodes.title',
  posts___nodes___toPing = 'posts.nodes.toPing',
  posts___nodes___uri = 'posts.nodes.uri',
  posts___nodes___nodeType = 'posts.nodes.nodeType',
  posts___nodes___parent___id = 'posts.nodes.parent.id',
  posts___nodes___parent___children = 'posts.nodes.parent.children',
  posts___nodes___children = 'posts.nodes.children',
  posts___nodes___children___id = 'posts.nodes.children.id',
  posts___nodes___children___children = 'posts.nodes.children.children',
  posts___nodes___internal___content = 'posts.nodes.internal.content',
  posts___nodes___internal___contentDigest = 'posts.nodes.internal.contentDigest',
  posts___nodes___internal___description = 'posts.nodes.internal.description',
  posts___nodes___internal___fieldOwners = 'posts.nodes.internal.fieldOwners',
  posts___nodes___internal___ignoreType = 'posts.nodes.internal.ignoreType',
  posts___nodes___internal___mediaType = 'posts.nodes.internal.mediaType',
  posts___nodes___internal___owner = 'posts.nodes.internal.owner',
  posts___nodes___internal___type = 'posts.nodes.internal.type',
  slug = 'slug',
  taxonomy___node___archivePath = 'taxonomy.node.archivePath',
  taxonomy___node___connectedContentTypes___nodes = 'taxonomy.node.connectedContentTypes.nodes',
  taxonomy___node___description = 'taxonomy.node.description',
  taxonomy___node___graphqlPluralName = 'taxonomy.node.graphqlPluralName',
  taxonomy___node___graphqlSingleName = 'taxonomy.node.graphqlSingleName',
  taxonomy___node___hierarchical = 'taxonomy.node.hierarchical',
  taxonomy___node___id = 'taxonomy.node.id',
  taxonomy___node___label = 'taxonomy.node.label',
  taxonomy___node___name = 'taxonomy.node.name',
  taxonomy___node___public = 'taxonomy.node.public',
  taxonomy___node___restBase = 'taxonomy.node.restBase',
  taxonomy___node___restControllerClass = 'taxonomy.node.restControllerClass',
  taxonomy___node___showCloud = 'taxonomy.node.showCloud',
  taxonomy___node___showInAdminColumn = 'taxonomy.node.showInAdminColumn',
  taxonomy___node___showInGraphql = 'taxonomy.node.showInGraphql',
  taxonomy___node___showInMenu = 'taxonomy.node.showInMenu',
  taxonomy___node___showInNavMenus = 'taxonomy.node.showInNavMenus',
  taxonomy___node___showInQuickEdit = 'taxonomy.node.showInQuickEdit',
  taxonomy___node___showInRest = 'taxonomy.node.showInRest',
  taxonomy___node___showUi = 'taxonomy.node.showUi',
  taxonomy___node___nodeType = 'taxonomy.node.nodeType',
  taxonomy___node___parent___id = 'taxonomy.node.parent.id',
  taxonomy___node___parent___children = 'taxonomy.node.parent.children',
  taxonomy___node___children = 'taxonomy.node.children',
  taxonomy___node___children___id = 'taxonomy.node.children.id',
  taxonomy___node___children___children = 'taxonomy.node.children.children',
  taxonomy___node___internal___content = 'taxonomy.node.internal.content',
  taxonomy___node___internal___contentDigest = 'taxonomy.node.internal.contentDigest',
  taxonomy___node___internal___description = 'taxonomy.node.internal.description',
  taxonomy___node___internal___fieldOwners = 'taxonomy.node.internal.fieldOwners',
  taxonomy___node___internal___ignoreType = 'taxonomy.node.internal.ignoreType',
  taxonomy___node___internal___mediaType = 'taxonomy.node.internal.mediaType',
  taxonomy___node___internal___owner = 'taxonomy.node.internal.owner',
  taxonomy___node___internal___type = 'taxonomy.node.internal.type',
  termGroupId = 'termGroupId',
  termTaxonomyId = 'termTaxonomyId',
  uri = 'uri',
  nodeType = 'nodeType',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

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

type WpCategoryFilterListInput = {
  readonly elemMatch: Maybe<WpCategoryFilterInput>;
};

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

/** Connection between the category type and the category type */
type WpCategoryToAncestorsCategoryConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpCategory>>>;
};

type WpCategoryToAncestorsCategoryConnectionFilterInput = {
  readonly nodes: Maybe<WpCategoryFilterListInput>;
};

/** Connection between the category type and the category type */
type WpCategoryToCategoryConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpCategory>>>;
};

type WpCategoryToCategoryConnectionFilterInput = {
  readonly nodes: Maybe<WpCategoryFilterListInput>;
};

/** Connection between the category type and the ContentNode type */
type WpCategoryToContentNodeConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpContentNode>>>;
};

type WpCategoryToContentNodeConnectionFilterInput = {
  readonly nodes: Maybe<WpContentNodeFilterListInput>;
};

/** Connection between the category type and the category type */
type WpCategoryToParentCategoryConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpCategory>;
};

type WpCategoryToParentCategoryConnectionEdgeFilterInput = {
  readonly node: Maybe<WpCategoryFilterInput>;
};

/** Connection between the category type and the post type */
type WpCategoryToPostConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpPost>>>;
};

type WpCategoryToPostConnectionFilterInput = {
  readonly nodes: Maybe<WpPostFilterListInput>;
};

/** Connection between the category type and the Taxonomy type */
type WpCategoryToTaxonomyConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpTaxonomy>;
};

type WpCategoryToTaxonomyConnectionEdgeFilterInput = {
  readonly node: Maybe<WpTaxonomyFilterInput>;
};

/** A Comment object */
type WpComment = Node & WpNode & WpDatabaseIdentifier & {
  /**
   * User agent used to post the comment. This field is equivalent to
   * WP_Comment-&gt;comment_agent and the value matching the
   * &quot;comment_agent&quot; column in SQL.
   */
  readonly agent: Maybe<Scalars['String']>;
  /**
   * The approval status of the comment. This field is equivalent to
   * WP_Comment-&gt;comment_approved and the value matching the
   * &quot;comment_approved&quot; column in SQL.
   */
  readonly approved: Maybe<Scalars['Boolean']>;
  /** The author of the comment */
  readonly author: Maybe<WpCommentToCommenterConnectionEdge>;
  /**
   * IP address for the author. This field is equivalent to
   * WP_Comment-&gt;comment_author_IP and the value matching the
   * &quot;comment_author_IP&quot; column in SQL.
   */
  readonly authorIp: Maybe<Scalars['String']>;
  /** Connection between the Comment type and the ContentNode type */
  readonly commentedOn: Maybe<WpCommentToContentNodeConnectionEdge>;
  /**
   * Content of the comment. This field is equivalent to
   * WP_Comment-&gt;comment_content and the value matching the
   * &quot;comment_content&quot; column in SQL.
   */
  readonly content: Maybe<Scalars['String']>;
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
  /**
   * Date the comment was posted in local time. This field is equivalent to
   * WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL.
   */
  readonly date: Maybe<Scalars['Date']>;
  /**
   * Date the comment was posted in GMT. This field is equivalent to
   * WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL.
   */
  readonly dateGmt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  /**
   * Karma value for the comment. This field is equivalent to
   * WP_Comment-&gt;comment_karma and the value matching the
   * &quot;comment_karma&quot; column in SQL.
   */
  readonly karma: Maybe<Scalars['Int']>;
  /** Connection between the Comment type and the Comment type */
  readonly wpParent: Maybe<WpCommentToParentCommentConnectionEdge>;
  /** The database id of the parent comment node or null if it is the root comment */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent comment node. */
  readonly parentId: Maybe<Scalars['ID']>;
  /** Connection between the Comment type and the Comment type */
  readonly replies: Maybe<WpCommentToCommentConnection>;
  /**
   * Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and
   * the value matching the &quot;comment_type&quot; column in SQL.
   */
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

type WpCommenterFilterInput = {
  readonly databaseId: Maybe<IntQueryOperatorInput>;
  readonly email: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<IDQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
};

enum WpCommentFieldsEnum {
  agent = 'agent',
  approved = 'approved',
  author___node___databaseId = 'author.node.databaseId',
  author___node___email = 'author.node.email',
  author___node___id = 'author.node.id',
  author___node___name = 'author.node.name',
  author___node___url = 'author.node.url',
  authorIp = 'authorIp',
  commentedOn___node___databaseId = 'commentedOn.node.databaseId',
  commentedOn___node___date = 'commentedOn.node.date',
  commentedOn___node___dateGmt = 'commentedOn.node.dateGmt',
  commentedOn___node___desiredSlug = 'commentedOn.node.desiredSlug',
  commentedOn___node___enclosure = 'commentedOn.node.enclosure',
  commentedOn___node___guid = 'commentedOn.node.guid',
  commentedOn___node___id = 'commentedOn.node.id',
  commentedOn___node___link = 'commentedOn.node.link',
  commentedOn___node___modified = 'commentedOn.node.modified',
  commentedOn___node___modifiedGmt = 'commentedOn.node.modifiedGmt',
  commentedOn___node___slug = 'commentedOn.node.slug',
  commentedOn___node___status = 'commentedOn.node.status',
  commentedOn___node___template___templateName = 'commentedOn.node.template.templateName',
  commentedOn___node___uri = 'commentedOn.node.uri',
  commentedOn___node___nodeType = 'commentedOn.node.nodeType',
  content = 'content',
  databaseId = 'databaseId',
  date = 'date',
  dateGmt = 'dateGmt',
  id = 'id',
  karma = 'karma',
  wpParent___node___agent = 'wpParent.node.agent',
  wpParent___node___approved = 'wpParent.node.approved',
  wpParent___node___authorIp = 'wpParent.node.authorIp',
  wpParent___node___content = 'wpParent.node.content',
  wpParent___node___databaseId = 'wpParent.node.databaseId',
  wpParent___node___date = 'wpParent.node.date',
  wpParent___node___dateGmt = 'wpParent.node.dateGmt',
  wpParent___node___id = 'wpParent.node.id',
  wpParent___node___karma = 'wpParent.node.karma',
  wpParent___node___parentDatabaseId = 'wpParent.node.parentDatabaseId',
  wpParent___node___parentId = 'wpParent.node.parentId',
  wpParent___node___replies___nodes = 'wpParent.node.replies.nodes',
  wpParent___node___type = 'wpParent.node.type',
  wpParent___node___nodeType = 'wpParent.node.nodeType',
  wpParent___node___parent___id = 'wpParent.node.parent.id',
  wpParent___node___parent___children = 'wpParent.node.parent.children',
  wpParent___node___children = 'wpParent.node.children',
  wpParent___node___children___id = 'wpParent.node.children.id',
  wpParent___node___children___children = 'wpParent.node.children.children',
  wpParent___node___internal___content = 'wpParent.node.internal.content',
  wpParent___node___internal___contentDigest = 'wpParent.node.internal.contentDigest',
  wpParent___node___internal___description = 'wpParent.node.internal.description',
  wpParent___node___internal___fieldOwners = 'wpParent.node.internal.fieldOwners',
  wpParent___node___internal___ignoreType = 'wpParent.node.internal.ignoreType',
  wpParent___node___internal___mediaType = 'wpParent.node.internal.mediaType',
  wpParent___node___internal___owner = 'wpParent.node.internal.owner',
  wpParent___node___internal___type = 'wpParent.node.internal.type',
  parentDatabaseId = 'parentDatabaseId',
  parentId = 'parentId',
  replies___nodes = 'replies.nodes',
  replies___nodes___agent = 'replies.nodes.agent',
  replies___nodes___approved = 'replies.nodes.approved',
  replies___nodes___authorIp = 'replies.nodes.authorIp',
  replies___nodes___content = 'replies.nodes.content',
  replies___nodes___databaseId = 'replies.nodes.databaseId',
  replies___nodes___date = 'replies.nodes.date',
  replies___nodes___dateGmt = 'replies.nodes.dateGmt',
  replies___nodes___id = 'replies.nodes.id',
  replies___nodes___karma = 'replies.nodes.karma',
  replies___nodes___parentDatabaseId = 'replies.nodes.parentDatabaseId',
  replies___nodes___parentId = 'replies.nodes.parentId',
  replies___nodes___replies___nodes = 'replies.nodes.replies.nodes',
  replies___nodes___type = 'replies.nodes.type',
  replies___nodes___nodeType = 'replies.nodes.nodeType',
  replies___nodes___parent___id = 'replies.nodes.parent.id',
  replies___nodes___parent___children = 'replies.nodes.parent.children',
  replies___nodes___children = 'replies.nodes.children',
  replies___nodes___children___id = 'replies.nodes.children.id',
  replies___nodes___children___children = 'replies.nodes.children.children',
  replies___nodes___internal___content = 'replies.nodes.internal.content',
  replies___nodes___internal___contentDigest = 'replies.nodes.internal.contentDigest',
  replies___nodes___internal___description = 'replies.nodes.internal.description',
  replies___nodes___internal___fieldOwners = 'replies.nodes.internal.fieldOwners',
  replies___nodes___internal___ignoreType = 'replies.nodes.internal.ignoreType',
  replies___nodes___internal___mediaType = 'replies.nodes.internal.mediaType',
  replies___nodes___internal___owner = 'replies.nodes.internal.owner',
  replies___nodes___internal___type = 'replies.nodes.internal.type',
  type = 'type',
  nodeType = 'nodeType',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

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

type WpCommentFilterListInput = {
  readonly elemMatch: Maybe<WpCommentFilterInput>;
};

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

/** Connection between the Comment type and the Comment type */
type WpCommentToCommentConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpComment>>>;
};

type WpCommentToCommentConnectionFilterInput = {
  readonly nodes: Maybe<WpCommentFilterListInput>;
};

/** Connection between the Comment type and the Commenter type */
type WpCommentToCommenterConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpCommenter>;
};

type WpCommentToCommenterConnectionEdgeFilterInput = {
  readonly node: Maybe<WpCommenterFilterInput>;
};

/** Connection between the Comment type and the ContentNode type */
type WpCommentToContentNodeConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpContentNode>;
};

type WpCommentToContentNodeConnectionEdgeFilterInput = {
  readonly node: Maybe<WpContentNodeFilterInput>;
};

/** Connection between the Comment type and the Comment type */
type WpCommentToParentCommentConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpComment>;
};

type WpCommentToParentCommentConnectionEdgeFilterInput = {
  readonly node: Maybe<WpCommentFilterInput>;
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

type WpContentNode = {
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
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post->guid and the guid column in the "post_objects" database table.
   */
  readonly guid: Maybe<Scalars['String']>;
  /** The globally unique identifier of the node. */
  readonly id: Scalars['ID'];
  /** The user that most recently edited the node */
  readonly lastEditedBy: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  readonly link: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  readonly modified: Maybe<Scalars['Date']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  readonly modifiedGmt: Maybe<Scalars['Date']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post->post_name field
   * and the post_name column in the database for the "post_objects" table.
   */
  readonly slug: Maybe<Scalars['String']>;
  /** The current status of the object */
  readonly status: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  readonly template: Maybe<WpContentTemplate>;
  /** URI path for the resource */
  readonly uri: Scalars['String'];
  readonly nodeType: Maybe<Scalars['String']>;
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

enum WpContentNodeFieldsEnum {
  databaseId = 'databaseId',
  date = 'date',
  dateGmt = 'dateGmt',
  desiredSlug = 'desiredSlug',
  enclosure = 'enclosure',
  guid = 'guid',
  id = 'id',
  lastEditedBy___node___avatar___default = 'lastEditedBy.node.avatar.default',
  lastEditedBy___node___avatar___extraAttr = 'lastEditedBy.node.avatar.extraAttr',
  lastEditedBy___node___avatar___forceDefault = 'lastEditedBy.node.avatar.forceDefault',
  lastEditedBy___node___avatar___foundAvatar = 'lastEditedBy.node.avatar.foundAvatar',
  lastEditedBy___node___avatar___height = 'lastEditedBy.node.avatar.height',
  lastEditedBy___node___avatar___rating = 'lastEditedBy.node.avatar.rating',
  lastEditedBy___node___avatar___scheme = 'lastEditedBy.node.avatar.scheme',
  lastEditedBy___node___avatar___size = 'lastEditedBy.node.avatar.size',
  lastEditedBy___node___avatar___url = 'lastEditedBy.node.avatar.url',
  lastEditedBy___node___avatar___width = 'lastEditedBy.node.avatar.width',
  lastEditedBy___node___capKey = 'lastEditedBy.node.capKey',
  lastEditedBy___node___capabilities = 'lastEditedBy.node.capabilities',
  lastEditedBy___node___comments___nodes = 'lastEditedBy.node.comments.nodes',
  lastEditedBy___node___databaseId = 'lastEditedBy.node.databaseId',
  lastEditedBy___node___description = 'lastEditedBy.node.description',
  lastEditedBy___node___email = 'lastEditedBy.node.email',
  lastEditedBy___node___extraCapabilities = 'lastEditedBy.node.extraCapabilities',
  lastEditedBy___node___firstName = 'lastEditedBy.node.firstName',
  lastEditedBy___node___id = 'lastEditedBy.node.id',
  lastEditedBy___node___lastName = 'lastEditedBy.node.lastName',
  lastEditedBy___node___locale = 'lastEditedBy.node.locale',
  lastEditedBy___node___name = 'lastEditedBy.node.name',
  lastEditedBy___node___nicename = 'lastEditedBy.node.nicename',
  lastEditedBy___node___nickname = 'lastEditedBy.node.nickname',
  lastEditedBy___node___pages___nodes = 'lastEditedBy.node.pages.nodes',
  lastEditedBy___node___posts___nodes = 'lastEditedBy.node.posts.nodes',
  lastEditedBy___node___registeredDate = 'lastEditedBy.node.registeredDate',
  lastEditedBy___node___roles___nodes = 'lastEditedBy.node.roles.nodes',
  lastEditedBy___node___slug = 'lastEditedBy.node.slug',
  lastEditedBy___node___uri = 'lastEditedBy.node.uri',
  lastEditedBy___node___url = 'lastEditedBy.node.url',
  lastEditedBy___node___username = 'lastEditedBy.node.username',
  lastEditedBy___node___nodeType = 'lastEditedBy.node.nodeType',
  lastEditedBy___node___parent___id = 'lastEditedBy.node.parent.id',
  lastEditedBy___node___parent___children = 'lastEditedBy.node.parent.children',
  lastEditedBy___node___children = 'lastEditedBy.node.children',
  lastEditedBy___node___children___id = 'lastEditedBy.node.children.id',
  lastEditedBy___node___children___children = 'lastEditedBy.node.children.children',
  lastEditedBy___node___internal___content = 'lastEditedBy.node.internal.content',
  lastEditedBy___node___internal___contentDigest = 'lastEditedBy.node.internal.contentDigest',
  lastEditedBy___node___internal___description = 'lastEditedBy.node.internal.description',
  lastEditedBy___node___internal___fieldOwners = 'lastEditedBy.node.internal.fieldOwners',
  lastEditedBy___node___internal___ignoreType = 'lastEditedBy.node.internal.ignoreType',
  lastEditedBy___node___internal___mediaType = 'lastEditedBy.node.internal.mediaType',
  lastEditedBy___node___internal___owner = 'lastEditedBy.node.internal.owner',
  lastEditedBy___node___internal___type = 'lastEditedBy.node.internal.type',
  link = 'link',
  modified = 'modified',
  modifiedGmt = 'modifiedGmt',
  slug = 'slug',
  status = 'status',
  template___templateName = 'template.templateName',
  uri = 'uri',
  nodeType = 'nodeType'
}

type WpContentNodeFilterInput = {
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
};

type WpContentNodeFilterListInput = {
  readonly elemMatch: Maybe<WpContentNodeFilterInput>;
};

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

/** Connection between the ContentNode type and the User type */
type WpContentNodeToEditLastConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpUser>;
};

type WpContentNodeToEditLastConnectionEdgeFilterInput = {
  readonly node: Maybe<WpUserFilterInput>;
};

/** Connection between the ContentNode type and the User type */
type WpContentNodeToEditLockConnectionEdge = {
  /** The timestamp for when the node was last edited */
  readonly lockTimestamp: Maybe<Scalars['String']>;
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpUser>;
};

type WpContentTemplate = {
  /** The name of the template */
  readonly templateName: Maybe<Scalars['String']>;
};

type WpContentTemplateFilterInput = {
  readonly templateName: Maybe<StringQueryOperatorInput>;
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
  /**
   * Whether a content type is intended for use publicly either via the admin
   * interface or by front-end users. While the default settings of
   * exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are
   * inherited from public, each does not rely on this relationship and controls a
   * very specific intention.
   */
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
  /**
   * Where to show the content type in the admin menu. To work, $show_ui must be
   * true. If true, the post type is shown in its own top level menu. If false, no
   * menu is shown. If a string of an existing top level menu (eg.
   * &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type
   * will be placed as a sub-menu of that.
   */
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

enum WpContentTypeFieldsEnum {
  archivePath = 'archivePath',
  canExport = 'canExport',
  connectedTaxonomies___nodes = 'connectedTaxonomies.nodes',
  connectedTaxonomies___nodes___archivePath = 'connectedTaxonomies.nodes.archivePath',
  connectedTaxonomies___nodes___connectedContentTypes___nodes = 'connectedTaxonomies.nodes.connectedContentTypes.nodes',
  connectedTaxonomies___nodes___description = 'connectedTaxonomies.nodes.description',
  connectedTaxonomies___nodes___graphqlPluralName = 'connectedTaxonomies.nodes.graphqlPluralName',
  connectedTaxonomies___nodes___graphqlSingleName = 'connectedTaxonomies.nodes.graphqlSingleName',
  connectedTaxonomies___nodes___hierarchical = 'connectedTaxonomies.nodes.hierarchical',
  connectedTaxonomies___nodes___id = 'connectedTaxonomies.nodes.id',
  connectedTaxonomies___nodes___label = 'connectedTaxonomies.nodes.label',
  connectedTaxonomies___nodes___name = 'connectedTaxonomies.nodes.name',
  connectedTaxonomies___nodes___public = 'connectedTaxonomies.nodes.public',
  connectedTaxonomies___nodes___restBase = 'connectedTaxonomies.nodes.restBase',
  connectedTaxonomies___nodes___restControllerClass = 'connectedTaxonomies.nodes.restControllerClass',
  connectedTaxonomies___nodes___showCloud = 'connectedTaxonomies.nodes.showCloud',
  connectedTaxonomies___nodes___showInAdminColumn = 'connectedTaxonomies.nodes.showInAdminColumn',
  connectedTaxonomies___nodes___showInGraphql = 'connectedTaxonomies.nodes.showInGraphql',
  connectedTaxonomies___nodes___showInMenu = 'connectedTaxonomies.nodes.showInMenu',
  connectedTaxonomies___nodes___showInNavMenus = 'connectedTaxonomies.nodes.showInNavMenus',
  connectedTaxonomies___nodes___showInQuickEdit = 'connectedTaxonomies.nodes.showInQuickEdit',
  connectedTaxonomies___nodes___showInRest = 'connectedTaxonomies.nodes.showInRest',
  connectedTaxonomies___nodes___showUi = 'connectedTaxonomies.nodes.showUi',
  connectedTaxonomies___nodes___nodeType = 'connectedTaxonomies.nodes.nodeType',
  connectedTaxonomies___nodes___parent___id = 'connectedTaxonomies.nodes.parent.id',
  connectedTaxonomies___nodes___parent___children = 'connectedTaxonomies.nodes.parent.children',
  connectedTaxonomies___nodes___children = 'connectedTaxonomies.nodes.children',
  connectedTaxonomies___nodes___children___id = 'connectedTaxonomies.nodes.children.id',
  connectedTaxonomies___nodes___children___children = 'connectedTaxonomies.nodes.children.children',
  connectedTaxonomies___nodes___internal___content = 'connectedTaxonomies.nodes.internal.content',
  connectedTaxonomies___nodes___internal___contentDigest = 'connectedTaxonomies.nodes.internal.contentDigest',
  connectedTaxonomies___nodes___internal___description = 'connectedTaxonomies.nodes.internal.description',
  connectedTaxonomies___nodes___internal___fieldOwners = 'connectedTaxonomies.nodes.internal.fieldOwners',
  connectedTaxonomies___nodes___internal___ignoreType = 'connectedTaxonomies.nodes.internal.ignoreType',
  connectedTaxonomies___nodes___internal___mediaType = 'connectedTaxonomies.nodes.internal.mediaType',
  connectedTaxonomies___nodes___internal___owner = 'connectedTaxonomies.nodes.internal.owner',
  connectedTaxonomies___nodes___internal___type = 'connectedTaxonomies.nodes.internal.type',
  contentNodes___nodes = 'contentNodes.nodes',
  contentNodes___nodes___databaseId = 'contentNodes.nodes.databaseId',
  contentNodes___nodes___date = 'contentNodes.nodes.date',
  contentNodes___nodes___dateGmt = 'contentNodes.nodes.dateGmt',
  contentNodes___nodes___desiredSlug = 'contentNodes.nodes.desiredSlug',
  contentNodes___nodes___enclosure = 'contentNodes.nodes.enclosure',
  contentNodes___nodes___guid = 'contentNodes.nodes.guid',
  contentNodes___nodes___id = 'contentNodes.nodes.id',
  contentNodes___nodes___link = 'contentNodes.nodes.link',
  contentNodes___nodes___modified = 'contentNodes.nodes.modified',
  contentNodes___nodes___modifiedGmt = 'contentNodes.nodes.modifiedGmt',
  contentNodes___nodes___slug = 'contentNodes.nodes.slug',
  contentNodes___nodes___status = 'contentNodes.nodes.status',
  contentNodes___nodes___template___templateName = 'contentNodes.nodes.template.templateName',
  contentNodes___nodes___uri = 'contentNodes.nodes.uri',
  contentNodes___nodes___nodeType = 'contentNodes.nodes.nodeType',
  deleteWithUser = 'deleteWithUser',
  description = 'description',
  excludeFromSearch = 'excludeFromSearch',
  graphqlPluralName = 'graphqlPluralName',
  graphqlSingleName = 'graphqlSingleName',
  hasArchive = 'hasArchive',
  hierarchical = 'hierarchical',
  id = 'id',
  isFrontPage = 'isFrontPage',
  isPostsPage = 'isPostsPage',
  label = 'label',
  labels___addNew = 'labels.addNew',
  labels___addNewItem = 'labels.addNewItem',
  labels___allItems = 'labels.allItems',
  labels___archives = 'labels.archives',
  labels___attributes = 'labels.attributes',
  labels___editItem = 'labels.editItem',
  labels___featuredImage = 'labels.featuredImage',
  labels___filterItemsList = 'labels.filterItemsList',
  labels___insertIntoItem = 'labels.insertIntoItem',
  labels___itemsList = 'labels.itemsList',
  labels___itemsListNavigation = 'labels.itemsListNavigation',
  labels___menuName = 'labels.menuName',
  labels___name = 'labels.name',
  labels___newItem = 'labels.newItem',
  labels___notFound = 'labels.notFound',
  labels___notFoundInTrash = 'labels.notFoundInTrash',
  labels___parentItemColon = 'labels.parentItemColon',
  labels___removeFeaturedImage = 'labels.removeFeaturedImage',
  labels___searchItems = 'labels.searchItems',
  labels___setFeaturedImage = 'labels.setFeaturedImage',
  labels___singularName = 'labels.singularName',
  labels___uploadedToThisItem = 'labels.uploadedToThisItem',
  labels___useFeaturedImage = 'labels.useFeaturedImage',
  labels___viewItem = 'labels.viewItem',
  labels___viewItems = 'labels.viewItems',
  menuIcon = 'menuIcon',
  menuPosition = 'menuPosition',
  name = 'name',
  public = 'public',
  publiclyQueryable = 'publiclyQueryable',
  restBase = 'restBase',
  restControllerClass = 'restControllerClass',
  showInAdminBar = 'showInAdminBar',
  showInGraphql = 'showInGraphql',
  showInMenu = 'showInMenu',
  showInNavMenus = 'showInNavMenus',
  showInRest = 'showInRest',
  showUi = 'showUi',
  uri = 'uri',
  nodeType = 'nodeType',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

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

type WpContentTypeFilterListInput = {
  readonly elemMatch: Maybe<WpContentTypeFilterInput>;
};

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

/** Connection between the ContentType type and the ContentNode type */
type WpContentTypeToContentNodeConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpContentNode>>>;
};

type WpContentTypeToContentNodeConnectionFilterInput = {
  readonly nodes: Maybe<WpContentNodeFilterListInput>;
};

/** Connection between the ContentType type and the Taxonomy type */
type WpContentTypeToTaxonomyConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpTaxonomy>>>;
};

type WpContentTypeToTaxonomyConnectionFilterInput = {
  readonly nodes: Maybe<WpTaxonomyFilterListInput>;
};

type WpDatabaseIdentifier = {
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
};

/** The discussion setting type */
type WpDiscussionSettings = {
  /** Allow people to submit comments on new posts. */
  readonly defaultCommentStatus: Maybe<Scalars['String']>;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  readonly defaultPingStatus: Maybe<Scalars['String']>;
};

type WpDiscussionSettingsFilterInput = {
  readonly defaultCommentStatus: Maybe<StringQueryOperatorInput>;
  readonly defaultPingStatus: Maybe<StringQueryOperatorInput>;
};

type WpEdge = {
  readonly next: Maybe<Wp>;
  readonly node: Wp;
  readonly previous: Maybe<Wp>;
};

enum WpFieldsEnum {
  allSettings___discussionSettingsDefaultCommentStatus = 'allSettings.discussionSettingsDefaultCommentStatus',
  allSettings___discussionSettingsDefaultPingStatus = 'allSettings.discussionSettingsDefaultPingStatus',
  allSettings___generalSettingsDateFormat = 'allSettings.generalSettingsDateFormat',
  allSettings___generalSettingsDescription = 'allSettings.generalSettingsDescription',
  allSettings___generalSettingsEmail = 'allSettings.generalSettingsEmail',
  allSettings___generalSettingsLanguage = 'allSettings.generalSettingsLanguage',
  allSettings___generalSettingsStartOfWeek = 'allSettings.generalSettingsStartOfWeek',
  allSettings___generalSettingsTimeFormat = 'allSettings.generalSettingsTimeFormat',
  allSettings___generalSettingsTimezone = 'allSettings.generalSettingsTimezone',
  allSettings___generalSettingsTitle = 'allSettings.generalSettingsTitle',
  allSettings___generalSettingsUrl = 'allSettings.generalSettingsUrl',
  allSettings___readingSettingsPostsPerPage = 'allSettings.readingSettingsPostsPerPage',
  allSettings___writingSettingsDefaultCategory = 'allSettings.writingSettingsDefaultCategory',
  allSettings___writingSettingsDefaultPostFormat = 'allSettings.writingSettingsDefaultPostFormat',
  allSettings___writingSettingsUseSmilies = 'allSettings.writingSettingsUseSmilies',
  discussionSettings___defaultCommentStatus = 'discussionSettings.defaultCommentStatus',
  discussionSettings___defaultPingStatus = 'discussionSettings.defaultPingStatus',
  generalSettings___dateFormat = 'generalSettings.dateFormat',
  generalSettings___description = 'generalSettings.description',
  generalSettings___email = 'generalSettings.email',
  generalSettings___language = 'generalSettings.language',
  generalSettings___startOfWeek = 'generalSettings.startOfWeek',
  generalSettings___timeFormat = 'generalSettings.timeFormat',
  generalSettings___timezone = 'generalSettings.timezone',
  generalSettings___title = 'generalSettings.title',
  generalSettings___url = 'generalSettings.url',
  readingSettings___postsPerPage = 'readingSettings.postsPerPage',
  wpGatsby___arePrettyPermalinksEnabled = 'wpGatsby.arePrettyPermalinksEnabled',
  writingSettings___defaultCategory = 'writingSettings.defaultCategory',
  writingSettings___defaultPostFormat = 'writingSettings.defaultPostFormat',
  writingSettings___useSmilies = 'writingSettings.useSmilies',
  nodeType = 'nodeType',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

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

type WpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpEdge>;
  readonly nodes: ReadonlyArray<Wp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
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

/** Connection between the HierarchicalContentNode type and the ContentNode type */
type WpHierarchicalContentNodeToContentNodeAncestorsConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpContentNode>>>;
};

type WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput = {
  readonly nodes: Maybe<WpContentNodeFilterListInput>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
type WpHierarchicalContentNodeToContentNodeChildrenConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpContentNode>>>;
};

type WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput = {
  readonly nodes: Maybe<WpContentNodeFilterListInput>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
type WpHierarchicalContentNodeToParentContentNodeConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpContentNode>;
};

type WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput = {
  readonly node: Maybe<WpContentNodeFilterInput>;
};

type WpHierarchicalTermNode = {
  /** Database id of the parent node */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  readonly parentId: Maybe<Scalars['ID']>;
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

type WpMediaDetailsFilterInput = {
  readonly file: Maybe<StringQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly meta: Maybe<WpMediaItemMetaFilterInput>;
  readonly sizes: Maybe<WpMediaSizeFilterListInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
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
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for compatibility.
   */
  readonly commentCount: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  readonly commentStatus: Maybe<Scalars['String']>;
  /** Connection between the mediaItem type and the Comment type */
  readonly comments: Maybe<WpMediaItemToCommentConnection>;
  /** Connection between the mediaItem type and the ContentType type */
  readonly contentType: Maybe<WpMediaItemToContentTypeConnectionEdge>;
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
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
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
  /**
   * The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  readonly modified: Maybe<Scalars['Date']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  readonly modifiedGmt: Maybe<Scalars['Date']>;
  /** The parent of the node. The parent object can be of various types */
  readonly wpParent: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  readonly parentId: Maybe<Scalars['ID']>;
  /** The sizes attribute value for an image. */
  readonly sizes: Maybe<Scalars['String']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  readonly slug: Maybe<Scalars['String']>;
  /** Url of the mediaItem */
  readonly sourceUrl: Maybe<Scalars['String']>;
  /**
   * The srcset attribute specifies the URL of the image to use in different
   * situations. It is a comma separated string of urls and their widths.
   */
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

enum WpMediaItemFieldsEnum {
  altText = 'altText',
  ancestors___nodes = 'ancestors.nodes',
  ancestors___nodes___databaseId = 'ancestors.nodes.databaseId',
  ancestors___nodes___date = 'ancestors.nodes.date',
  ancestors___nodes___dateGmt = 'ancestors.nodes.dateGmt',
  ancestors___nodes___desiredSlug = 'ancestors.nodes.desiredSlug',
  ancestors___nodes___enclosure = 'ancestors.nodes.enclosure',
  ancestors___nodes___guid = 'ancestors.nodes.guid',
  ancestors___nodes___id = 'ancestors.nodes.id',
  ancestors___nodes___link = 'ancestors.nodes.link',
  ancestors___nodes___modified = 'ancestors.nodes.modified',
  ancestors___nodes___modifiedGmt = 'ancestors.nodes.modifiedGmt',
  ancestors___nodes___slug = 'ancestors.nodes.slug',
  ancestors___nodes___status = 'ancestors.nodes.status',
  ancestors___nodes___template___templateName = 'ancestors.nodes.template.templateName',
  ancestors___nodes___uri = 'ancestors.nodes.uri',
  ancestors___nodes___nodeType = 'ancestors.nodes.nodeType',
  author___node___avatar___default = 'author.node.avatar.default',
  author___node___avatar___extraAttr = 'author.node.avatar.extraAttr',
  author___node___avatar___forceDefault = 'author.node.avatar.forceDefault',
  author___node___avatar___foundAvatar = 'author.node.avatar.foundAvatar',
  author___node___avatar___height = 'author.node.avatar.height',
  author___node___avatar___rating = 'author.node.avatar.rating',
  author___node___avatar___scheme = 'author.node.avatar.scheme',
  author___node___avatar___size = 'author.node.avatar.size',
  author___node___avatar___url = 'author.node.avatar.url',
  author___node___avatar___width = 'author.node.avatar.width',
  author___node___capKey = 'author.node.capKey',
  author___node___capabilities = 'author.node.capabilities',
  author___node___comments___nodes = 'author.node.comments.nodes',
  author___node___databaseId = 'author.node.databaseId',
  author___node___description = 'author.node.description',
  author___node___email = 'author.node.email',
  author___node___extraCapabilities = 'author.node.extraCapabilities',
  author___node___firstName = 'author.node.firstName',
  author___node___id = 'author.node.id',
  author___node___lastName = 'author.node.lastName',
  author___node___locale = 'author.node.locale',
  author___node___name = 'author.node.name',
  author___node___nicename = 'author.node.nicename',
  author___node___nickname = 'author.node.nickname',
  author___node___pages___nodes = 'author.node.pages.nodes',
  author___node___posts___nodes = 'author.node.posts.nodes',
  author___node___registeredDate = 'author.node.registeredDate',
  author___node___roles___nodes = 'author.node.roles.nodes',
  author___node___slug = 'author.node.slug',
  author___node___uri = 'author.node.uri',
  author___node___url = 'author.node.url',
  author___node___username = 'author.node.username',
  author___node___nodeType = 'author.node.nodeType',
  author___node___parent___id = 'author.node.parent.id',
  author___node___parent___children = 'author.node.parent.children',
  author___node___children = 'author.node.children',
  author___node___children___id = 'author.node.children.id',
  author___node___children___children = 'author.node.children.children',
  author___node___internal___content = 'author.node.internal.content',
  author___node___internal___contentDigest = 'author.node.internal.contentDigest',
  author___node___internal___description = 'author.node.internal.description',
  author___node___internal___fieldOwners = 'author.node.internal.fieldOwners',
  author___node___internal___ignoreType = 'author.node.internal.ignoreType',
  author___node___internal___mediaType = 'author.node.internal.mediaType',
  author___node___internal___owner = 'author.node.internal.owner',
  author___node___internal___type = 'author.node.internal.type',
  authorDatabaseId = 'authorDatabaseId',
  authorId = 'authorId',
  caption = 'caption',
  wpChildren___nodes = 'wpChildren.nodes',
  wpChildren___nodes___databaseId = 'wpChildren.nodes.databaseId',
  wpChildren___nodes___date = 'wpChildren.nodes.date',
  wpChildren___nodes___dateGmt = 'wpChildren.nodes.dateGmt',
  wpChildren___nodes___desiredSlug = 'wpChildren.nodes.desiredSlug',
  wpChildren___nodes___enclosure = 'wpChildren.nodes.enclosure',
  wpChildren___nodes___guid = 'wpChildren.nodes.guid',
  wpChildren___nodes___id = 'wpChildren.nodes.id',
  wpChildren___nodes___link = 'wpChildren.nodes.link',
  wpChildren___nodes___modified = 'wpChildren.nodes.modified',
  wpChildren___nodes___modifiedGmt = 'wpChildren.nodes.modifiedGmt',
  wpChildren___nodes___slug = 'wpChildren.nodes.slug',
  wpChildren___nodes___status = 'wpChildren.nodes.status',
  wpChildren___nodes___template___templateName = 'wpChildren.nodes.template.templateName',
  wpChildren___nodes___uri = 'wpChildren.nodes.uri',
  wpChildren___nodes___nodeType = 'wpChildren.nodes.nodeType',
  commentCount = 'commentCount',
  commentStatus = 'commentStatus',
  comments___nodes = 'comments.nodes',
  comments___nodes___agent = 'comments.nodes.agent',
  comments___nodes___approved = 'comments.nodes.approved',
  comments___nodes___authorIp = 'comments.nodes.authorIp',
  comments___nodes___content = 'comments.nodes.content',
  comments___nodes___databaseId = 'comments.nodes.databaseId',
  comments___nodes___date = 'comments.nodes.date',
  comments___nodes___dateGmt = 'comments.nodes.dateGmt',
  comments___nodes___id = 'comments.nodes.id',
  comments___nodes___karma = 'comments.nodes.karma',
  comments___nodes___parentDatabaseId = 'comments.nodes.parentDatabaseId',
  comments___nodes___parentId = 'comments.nodes.parentId',
  comments___nodes___replies___nodes = 'comments.nodes.replies.nodes',
  comments___nodes___type = 'comments.nodes.type',
  comments___nodes___nodeType = 'comments.nodes.nodeType',
  comments___nodes___parent___id = 'comments.nodes.parent.id',
  comments___nodes___parent___children = 'comments.nodes.parent.children',
  comments___nodes___children = 'comments.nodes.children',
  comments___nodes___children___id = 'comments.nodes.children.id',
  comments___nodes___children___children = 'comments.nodes.children.children',
  comments___nodes___internal___content = 'comments.nodes.internal.content',
  comments___nodes___internal___contentDigest = 'comments.nodes.internal.contentDigest',
  comments___nodes___internal___description = 'comments.nodes.internal.description',
  comments___nodes___internal___fieldOwners = 'comments.nodes.internal.fieldOwners',
  comments___nodes___internal___ignoreType = 'comments.nodes.internal.ignoreType',
  comments___nodes___internal___mediaType = 'comments.nodes.internal.mediaType',
  comments___nodes___internal___owner = 'comments.nodes.internal.owner',
  comments___nodes___internal___type = 'comments.nodes.internal.type',
  contentType___node___archivePath = 'contentType.node.archivePath',
  contentType___node___canExport = 'contentType.node.canExport',
  contentType___node___connectedTaxonomies___nodes = 'contentType.node.connectedTaxonomies.nodes',
  contentType___node___contentNodes___nodes = 'contentType.node.contentNodes.nodes',
  contentType___node___deleteWithUser = 'contentType.node.deleteWithUser',
  contentType___node___description = 'contentType.node.description',
  contentType___node___excludeFromSearch = 'contentType.node.excludeFromSearch',
  contentType___node___graphqlPluralName = 'contentType.node.graphqlPluralName',
  contentType___node___graphqlSingleName = 'contentType.node.graphqlSingleName',
  contentType___node___hasArchive = 'contentType.node.hasArchive',
  contentType___node___hierarchical = 'contentType.node.hierarchical',
  contentType___node___id = 'contentType.node.id',
  contentType___node___isFrontPage = 'contentType.node.isFrontPage',
  contentType___node___isPostsPage = 'contentType.node.isPostsPage',
  contentType___node___label = 'contentType.node.label',
  contentType___node___labels___addNew = 'contentType.node.labels.addNew',
  contentType___node___labels___addNewItem = 'contentType.node.labels.addNewItem',
  contentType___node___labels___allItems = 'contentType.node.labels.allItems',
  contentType___node___labels___archives = 'contentType.node.labels.archives',
  contentType___node___labels___attributes = 'contentType.node.labels.attributes',
  contentType___node___labels___editItem = 'contentType.node.labels.editItem',
  contentType___node___labels___featuredImage = 'contentType.node.labels.featuredImage',
  contentType___node___labels___filterItemsList = 'contentType.node.labels.filterItemsList',
  contentType___node___labels___insertIntoItem = 'contentType.node.labels.insertIntoItem',
  contentType___node___labels___itemsList = 'contentType.node.labels.itemsList',
  contentType___node___labels___itemsListNavigation = 'contentType.node.labels.itemsListNavigation',
  contentType___node___labels___menuName = 'contentType.node.labels.menuName',
  contentType___node___labels___name = 'contentType.node.labels.name',
  contentType___node___labels___newItem = 'contentType.node.labels.newItem',
  contentType___node___labels___notFound = 'contentType.node.labels.notFound',
  contentType___node___labels___notFoundInTrash = 'contentType.node.labels.notFoundInTrash',
  contentType___node___labels___parentItemColon = 'contentType.node.labels.parentItemColon',
  contentType___node___labels___removeFeaturedImage = 'contentType.node.labels.removeFeaturedImage',
  contentType___node___labels___searchItems = 'contentType.node.labels.searchItems',
  contentType___node___labels___setFeaturedImage = 'contentType.node.labels.setFeaturedImage',
  contentType___node___labels___singularName = 'contentType.node.labels.singularName',
  contentType___node___labels___uploadedToThisItem = 'contentType.node.labels.uploadedToThisItem',
  contentType___node___labels___useFeaturedImage = 'contentType.node.labels.useFeaturedImage',
  contentType___node___labels___viewItem = 'contentType.node.labels.viewItem',
  contentType___node___labels___viewItems = 'contentType.node.labels.viewItems',
  contentType___node___menuIcon = 'contentType.node.menuIcon',
  contentType___node___menuPosition = 'contentType.node.menuPosition',
  contentType___node___name = 'contentType.node.name',
  contentType___node___public = 'contentType.node.public',
  contentType___node___publiclyQueryable = 'contentType.node.publiclyQueryable',
  contentType___node___restBase = 'contentType.node.restBase',
  contentType___node___restControllerClass = 'contentType.node.restControllerClass',
  contentType___node___showInAdminBar = 'contentType.node.showInAdminBar',
  contentType___node___showInGraphql = 'contentType.node.showInGraphql',
  contentType___node___showInMenu = 'contentType.node.showInMenu',
  contentType___node___showInNavMenus = 'contentType.node.showInNavMenus',
  contentType___node___showInRest = 'contentType.node.showInRest',
  contentType___node___showUi = 'contentType.node.showUi',
  contentType___node___uri = 'contentType.node.uri',
  contentType___node___nodeType = 'contentType.node.nodeType',
  contentType___node___parent___id = 'contentType.node.parent.id',
  contentType___node___parent___children = 'contentType.node.parent.children',
  contentType___node___children = 'contentType.node.children',
  contentType___node___children___id = 'contentType.node.children.id',
  contentType___node___children___children = 'contentType.node.children.children',
  contentType___node___internal___content = 'contentType.node.internal.content',
  contentType___node___internal___contentDigest = 'contentType.node.internal.contentDigest',
  contentType___node___internal___description = 'contentType.node.internal.description',
  contentType___node___internal___fieldOwners = 'contentType.node.internal.fieldOwners',
  contentType___node___internal___ignoreType = 'contentType.node.internal.ignoreType',
  contentType___node___internal___mediaType = 'contentType.node.internal.mediaType',
  contentType___node___internal___owner = 'contentType.node.internal.owner',
  contentType___node___internal___type = 'contentType.node.internal.type',
  databaseId = 'databaseId',
  date = 'date',
  dateGmt = 'dateGmt',
  description = 'description',
  desiredSlug = 'desiredSlug',
  enclosure = 'enclosure',
  fileSize = 'fileSize',
  guid = 'guid',
  id = 'id',
  lastEditedBy___node___avatar___default = 'lastEditedBy.node.avatar.default',
  lastEditedBy___node___avatar___extraAttr = 'lastEditedBy.node.avatar.extraAttr',
  lastEditedBy___node___avatar___forceDefault = 'lastEditedBy.node.avatar.forceDefault',
  lastEditedBy___node___avatar___foundAvatar = 'lastEditedBy.node.avatar.foundAvatar',
  lastEditedBy___node___avatar___height = 'lastEditedBy.node.avatar.height',
  lastEditedBy___node___avatar___rating = 'lastEditedBy.node.avatar.rating',
  lastEditedBy___node___avatar___scheme = 'lastEditedBy.node.avatar.scheme',
  lastEditedBy___node___avatar___size = 'lastEditedBy.node.avatar.size',
  lastEditedBy___node___avatar___url = 'lastEditedBy.node.avatar.url',
  lastEditedBy___node___avatar___width = 'lastEditedBy.node.avatar.width',
  lastEditedBy___node___capKey = 'lastEditedBy.node.capKey',
  lastEditedBy___node___capabilities = 'lastEditedBy.node.capabilities',
  lastEditedBy___node___comments___nodes = 'lastEditedBy.node.comments.nodes',
  lastEditedBy___node___databaseId = 'lastEditedBy.node.databaseId',
  lastEditedBy___node___description = 'lastEditedBy.node.description',
  lastEditedBy___node___email = 'lastEditedBy.node.email',
  lastEditedBy___node___extraCapabilities = 'lastEditedBy.node.extraCapabilities',
  lastEditedBy___node___firstName = 'lastEditedBy.node.firstName',
  lastEditedBy___node___id = 'lastEditedBy.node.id',
  lastEditedBy___node___lastName = 'lastEditedBy.node.lastName',
  lastEditedBy___node___locale = 'lastEditedBy.node.locale',
  lastEditedBy___node___name = 'lastEditedBy.node.name',
  lastEditedBy___node___nicename = 'lastEditedBy.node.nicename',
  lastEditedBy___node___nickname = 'lastEditedBy.node.nickname',
  lastEditedBy___node___pages___nodes = 'lastEditedBy.node.pages.nodes',
  lastEditedBy___node___posts___nodes = 'lastEditedBy.node.posts.nodes',
  lastEditedBy___node___registeredDate = 'lastEditedBy.node.registeredDate',
  lastEditedBy___node___roles___nodes = 'lastEditedBy.node.roles.nodes',
  lastEditedBy___node___slug = 'lastEditedBy.node.slug',
  lastEditedBy___node___uri = 'lastEditedBy.node.uri',
  lastEditedBy___node___url = 'lastEditedBy.node.url',
  lastEditedBy___node___username = 'lastEditedBy.node.username',
  lastEditedBy___node___nodeType = 'lastEditedBy.node.nodeType',
  lastEditedBy___node___parent___id = 'lastEditedBy.node.parent.id',
  lastEditedBy___node___parent___children = 'lastEditedBy.node.parent.children',
  lastEditedBy___node___children = 'lastEditedBy.node.children',
  lastEditedBy___node___children___id = 'lastEditedBy.node.children.id',
  lastEditedBy___node___children___children = 'lastEditedBy.node.children.children',
  lastEditedBy___node___internal___content = 'lastEditedBy.node.internal.content',
  lastEditedBy___node___internal___contentDigest = 'lastEditedBy.node.internal.contentDigest',
  lastEditedBy___node___internal___description = 'lastEditedBy.node.internal.description',
  lastEditedBy___node___internal___fieldOwners = 'lastEditedBy.node.internal.fieldOwners',
  lastEditedBy___node___internal___ignoreType = 'lastEditedBy.node.internal.ignoreType',
  lastEditedBy___node___internal___mediaType = 'lastEditedBy.node.internal.mediaType',
  lastEditedBy___node___internal___owner = 'lastEditedBy.node.internal.owner',
  lastEditedBy___node___internal___type = 'lastEditedBy.node.internal.type',
  link = 'link',
  mediaDetails___file = 'mediaDetails.file',
  mediaDetails___height = 'mediaDetails.height',
  mediaDetails___meta___aperture = 'mediaDetails.meta.aperture',
  mediaDetails___meta___camera = 'mediaDetails.meta.camera',
  mediaDetails___meta___caption = 'mediaDetails.meta.caption',
  mediaDetails___meta___copyright = 'mediaDetails.meta.copyright',
  mediaDetails___meta___createdTimestamp = 'mediaDetails.meta.createdTimestamp',
  mediaDetails___meta___credit = 'mediaDetails.meta.credit',
  mediaDetails___meta___focalLength = 'mediaDetails.meta.focalLength',
  mediaDetails___meta___iso = 'mediaDetails.meta.iso',
  mediaDetails___meta___keywords = 'mediaDetails.meta.keywords',
  mediaDetails___meta___orientation = 'mediaDetails.meta.orientation',
  mediaDetails___meta___shutterSpeed = 'mediaDetails.meta.shutterSpeed',
  mediaDetails___meta___title = 'mediaDetails.meta.title',
  mediaDetails___sizes = 'mediaDetails.sizes',
  mediaDetails___sizes___file = 'mediaDetails.sizes.file',
  mediaDetails___sizes___fileSize = 'mediaDetails.sizes.fileSize',
  mediaDetails___sizes___height = 'mediaDetails.sizes.height',
  mediaDetails___sizes___mimeType = 'mediaDetails.sizes.mimeType',
  mediaDetails___sizes___name = 'mediaDetails.sizes.name',
  mediaDetails___sizes___sourceUrl = 'mediaDetails.sizes.sourceUrl',
  mediaDetails___sizes___width = 'mediaDetails.sizes.width',
  mediaDetails___width = 'mediaDetails.width',
  mediaItemUrl = 'mediaItemUrl',
  mediaType = 'mediaType',
  mimeType = 'mimeType',
  modified = 'modified',
  modifiedGmt = 'modifiedGmt',
  wpParent___node___databaseId = 'wpParent.node.databaseId',
  wpParent___node___date = 'wpParent.node.date',
  wpParent___node___dateGmt = 'wpParent.node.dateGmt',
  wpParent___node___desiredSlug = 'wpParent.node.desiredSlug',
  wpParent___node___enclosure = 'wpParent.node.enclosure',
  wpParent___node___guid = 'wpParent.node.guid',
  wpParent___node___id = 'wpParent.node.id',
  wpParent___node___link = 'wpParent.node.link',
  wpParent___node___modified = 'wpParent.node.modified',
  wpParent___node___modifiedGmt = 'wpParent.node.modifiedGmt',
  wpParent___node___slug = 'wpParent.node.slug',
  wpParent___node___status = 'wpParent.node.status',
  wpParent___node___template___templateName = 'wpParent.node.template.templateName',
  wpParent___node___uri = 'wpParent.node.uri',
  wpParent___node___nodeType = 'wpParent.node.nodeType',
  parentDatabaseId = 'parentDatabaseId',
  parentId = 'parentId',
  sizes = 'sizes',
  slug = 'slug',
  sourceUrl = 'sourceUrl',
  srcSet = 'srcSet',
  status = 'status',
  template___templateName = 'template.templateName',
  title = 'title',
  uri = 'uri',
  nodeType = 'nodeType',
  remoteFile___sourceInstanceName = 'remoteFile.sourceInstanceName',
  remoteFile___absolutePath = 'remoteFile.absolutePath',
  remoteFile___relativePath = 'remoteFile.relativePath',
  remoteFile___extension = 'remoteFile.extension',
  remoteFile___size = 'remoteFile.size',
  remoteFile___prettySize = 'remoteFile.prettySize',
  remoteFile___modifiedTime = 'remoteFile.modifiedTime',
  remoteFile___accessTime = 'remoteFile.accessTime',
  remoteFile___changeTime = 'remoteFile.changeTime',
  remoteFile___birthTime = 'remoteFile.birthTime',
  remoteFile___root = 'remoteFile.root',
  remoteFile___dir = 'remoteFile.dir',
  remoteFile___base = 'remoteFile.base',
  remoteFile___ext = 'remoteFile.ext',
  remoteFile___name = 'remoteFile.name',
  remoteFile___relativeDirectory = 'remoteFile.relativeDirectory',
  remoteFile___dev = 'remoteFile.dev',
  remoteFile___mode = 'remoteFile.mode',
  remoteFile___nlink = 'remoteFile.nlink',
  remoteFile___uid = 'remoteFile.uid',
  remoteFile___gid = 'remoteFile.gid',
  remoteFile___rdev = 'remoteFile.rdev',
  remoteFile___ino = 'remoteFile.ino',
  remoteFile___atimeMs = 'remoteFile.atimeMs',
  remoteFile___mtimeMs = 'remoteFile.mtimeMs',
  remoteFile___ctimeMs = 'remoteFile.ctimeMs',
  remoteFile___atime = 'remoteFile.atime',
  remoteFile___mtime = 'remoteFile.mtime',
  remoteFile___ctime = 'remoteFile.ctime',
  remoteFile___birthtime = 'remoteFile.birthtime',
  remoteFile___birthtimeMs = 'remoteFile.birthtimeMs',
  remoteFile___blksize = 'remoteFile.blksize',
  remoteFile___blocks = 'remoteFile.blocks',
  remoteFile___url = 'remoteFile.url',
  remoteFile___publicURL = 'remoteFile.publicURL',
  remoteFile___childImageSharp___fixed___base64 = 'remoteFile.childImageSharp.fixed.base64',
  remoteFile___childImageSharp___fixed___tracedSVG = 'remoteFile.childImageSharp.fixed.tracedSVG',
  remoteFile___childImageSharp___fixed___aspectRatio = 'remoteFile.childImageSharp.fixed.aspectRatio',
  remoteFile___childImageSharp___fixed___width = 'remoteFile.childImageSharp.fixed.width',
  remoteFile___childImageSharp___fixed___height = 'remoteFile.childImageSharp.fixed.height',
  remoteFile___childImageSharp___fixed___src = 'remoteFile.childImageSharp.fixed.src',
  remoteFile___childImageSharp___fixed___srcSet = 'remoteFile.childImageSharp.fixed.srcSet',
  remoteFile___childImageSharp___fixed___srcWebp = 'remoteFile.childImageSharp.fixed.srcWebp',
  remoteFile___childImageSharp___fixed___srcSetWebp = 'remoteFile.childImageSharp.fixed.srcSetWebp',
  remoteFile___childImageSharp___fixed___originalName = 'remoteFile.childImageSharp.fixed.originalName',
  remoteFile___childImageSharp___resolutions___base64 = 'remoteFile.childImageSharp.resolutions.base64',
  remoteFile___childImageSharp___resolutions___tracedSVG = 'remoteFile.childImageSharp.resolutions.tracedSVG',
  remoteFile___childImageSharp___resolutions___aspectRatio = 'remoteFile.childImageSharp.resolutions.aspectRatio',
  remoteFile___childImageSharp___resolutions___width = 'remoteFile.childImageSharp.resolutions.width',
  remoteFile___childImageSharp___resolutions___height = 'remoteFile.childImageSharp.resolutions.height',
  remoteFile___childImageSharp___resolutions___src = 'remoteFile.childImageSharp.resolutions.src',
  remoteFile___childImageSharp___resolutions___srcSet = 'remoteFile.childImageSharp.resolutions.srcSet',
  remoteFile___childImageSharp___resolutions___srcWebp = 'remoteFile.childImageSharp.resolutions.srcWebp',
  remoteFile___childImageSharp___resolutions___srcSetWebp = 'remoteFile.childImageSharp.resolutions.srcSetWebp',
  remoteFile___childImageSharp___resolutions___originalName = 'remoteFile.childImageSharp.resolutions.originalName',
  remoteFile___childImageSharp___fluid___base64 = 'remoteFile.childImageSharp.fluid.base64',
  remoteFile___childImageSharp___fluid___tracedSVG = 'remoteFile.childImageSharp.fluid.tracedSVG',
  remoteFile___childImageSharp___fluid___aspectRatio = 'remoteFile.childImageSharp.fluid.aspectRatio',
  remoteFile___childImageSharp___fluid___src = 'remoteFile.childImageSharp.fluid.src',
  remoteFile___childImageSharp___fluid___srcSet = 'remoteFile.childImageSharp.fluid.srcSet',
  remoteFile___childImageSharp___fluid___srcWebp = 'remoteFile.childImageSharp.fluid.srcWebp',
  remoteFile___childImageSharp___fluid___srcSetWebp = 'remoteFile.childImageSharp.fluid.srcSetWebp',
  remoteFile___childImageSharp___fluid___sizes = 'remoteFile.childImageSharp.fluid.sizes',
  remoteFile___childImageSharp___fluid___originalImg = 'remoteFile.childImageSharp.fluid.originalImg',
  remoteFile___childImageSharp___fluid___originalName = 'remoteFile.childImageSharp.fluid.originalName',
  remoteFile___childImageSharp___fluid___presentationWidth = 'remoteFile.childImageSharp.fluid.presentationWidth',
  remoteFile___childImageSharp___fluid___presentationHeight = 'remoteFile.childImageSharp.fluid.presentationHeight',
  remoteFile___childImageSharp___sizes___base64 = 'remoteFile.childImageSharp.sizes.base64',
  remoteFile___childImageSharp___sizes___tracedSVG = 'remoteFile.childImageSharp.sizes.tracedSVG',
  remoteFile___childImageSharp___sizes___aspectRatio = 'remoteFile.childImageSharp.sizes.aspectRatio',
  remoteFile___childImageSharp___sizes___src = 'remoteFile.childImageSharp.sizes.src',
  remoteFile___childImageSharp___sizes___srcSet = 'remoteFile.childImageSharp.sizes.srcSet',
  remoteFile___childImageSharp___sizes___srcWebp = 'remoteFile.childImageSharp.sizes.srcWebp',
  remoteFile___childImageSharp___sizes___srcSetWebp = 'remoteFile.childImageSharp.sizes.srcSetWebp',
  remoteFile___childImageSharp___sizes___sizes = 'remoteFile.childImageSharp.sizes.sizes',
  remoteFile___childImageSharp___sizes___originalImg = 'remoteFile.childImageSharp.sizes.originalImg',
  remoteFile___childImageSharp___sizes___originalName = 'remoteFile.childImageSharp.sizes.originalName',
  remoteFile___childImageSharp___sizes___presentationWidth = 'remoteFile.childImageSharp.sizes.presentationWidth',
  remoteFile___childImageSharp___sizes___presentationHeight = 'remoteFile.childImageSharp.sizes.presentationHeight',
  remoteFile___childImageSharp___gatsbyImageData = 'remoteFile.childImageSharp.gatsbyImageData',
  remoteFile___childImageSharp___original___width = 'remoteFile.childImageSharp.original.width',
  remoteFile___childImageSharp___original___height = 'remoteFile.childImageSharp.original.height',
  remoteFile___childImageSharp___original___src = 'remoteFile.childImageSharp.original.src',
  remoteFile___childImageSharp___resize___src = 'remoteFile.childImageSharp.resize.src',
  remoteFile___childImageSharp___resize___tracedSVG = 'remoteFile.childImageSharp.resize.tracedSVG',
  remoteFile___childImageSharp___resize___width = 'remoteFile.childImageSharp.resize.width',
  remoteFile___childImageSharp___resize___height = 'remoteFile.childImageSharp.resize.height',
  remoteFile___childImageSharp___resize___aspectRatio = 'remoteFile.childImageSharp.resize.aspectRatio',
  remoteFile___childImageSharp___resize___originalName = 'remoteFile.childImageSharp.resize.originalName',
  remoteFile___childImageSharp___id = 'remoteFile.childImageSharp.id',
  remoteFile___childImageSharp___parent___id = 'remoteFile.childImageSharp.parent.id',
  remoteFile___childImageSharp___parent___children = 'remoteFile.childImageSharp.parent.children',
  remoteFile___childImageSharp___children = 'remoteFile.childImageSharp.children',
  remoteFile___childImageSharp___children___id = 'remoteFile.childImageSharp.children.id',
  remoteFile___childImageSharp___children___children = 'remoteFile.childImageSharp.children.children',
  remoteFile___childImageSharp___internal___content = 'remoteFile.childImageSharp.internal.content',
  remoteFile___childImageSharp___internal___contentDigest = 'remoteFile.childImageSharp.internal.contentDigest',
  remoteFile___childImageSharp___internal___description = 'remoteFile.childImageSharp.internal.description',
  remoteFile___childImageSharp___internal___fieldOwners = 'remoteFile.childImageSharp.internal.fieldOwners',
  remoteFile___childImageSharp___internal___ignoreType = 'remoteFile.childImageSharp.internal.ignoreType',
  remoteFile___childImageSharp___internal___mediaType = 'remoteFile.childImageSharp.internal.mediaType',
  remoteFile___childImageSharp___internal___owner = 'remoteFile.childImageSharp.internal.owner',
  remoteFile___childImageSharp___internal___type = 'remoteFile.childImageSharp.internal.type',
  remoteFile___id = 'remoteFile.id',
  remoteFile___parent___id = 'remoteFile.parent.id',
  remoteFile___parent___parent___id = 'remoteFile.parent.parent.id',
  remoteFile___parent___parent___children = 'remoteFile.parent.parent.children',
  remoteFile___parent___children = 'remoteFile.parent.children',
  remoteFile___parent___children___id = 'remoteFile.parent.children.id',
  remoteFile___parent___children___children = 'remoteFile.parent.children.children',
  remoteFile___parent___internal___content = 'remoteFile.parent.internal.content',
  remoteFile___parent___internal___contentDigest = 'remoteFile.parent.internal.contentDigest',
  remoteFile___parent___internal___description = 'remoteFile.parent.internal.description',
  remoteFile___parent___internal___fieldOwners = 'remoteFile.parent.internal.fieldOwners',
  remoteFile___parent___internal___ignoreType = 'remoteFile.parent.internal.ignoreType',
  remoteFile___parent___internal___mediaType = 'remoteFile.parent.internal.mediaType',
  remoteFile___parent___internal___owner = 'remoteFile.parent.internal.owner',
  remoteFile___parent___internal___type = 'remoteFile.parent.internal.type',
  remoteFile___children = 'remoteFile.children',
  remoteFile___children___id = 'remoteFile.children.id',
  remoteFile___children___parent___id = 'remoteFile.children.parent.id',
  remoteFile___children___parent___children = 'remoteFile.children.parent.children',
  remoteFile___children___children = 'remoteFile.children.children',
  remoteFile___children___children___id = 'remoteFile.children.children.id',
  remoteFile___children___children___children = 'remoteFile.children.children.children',
  remoteFile___children___internal___content = 'remoteFile.children.internal.content',
  remoteFile___children___internal___contentDigest = 'remoteFile.children.internal.contentDigest',
  remoteFile___children___internal___description = 'remoteFile.children.internal.description',
  remoteFile___children___internal___fieldOwners = 'remoteFile.children.internal.fieldOwners',
  remoteFile___children___internal___ignoreType = 'remoteFile.children.internal.ignoreType',
  remoteFile___children___internal___mediaType = 'remoteFile.children.internal.mediaType',
  remoteFile___children___internal___owner = 'remoteFile.children.internal.owner',
  remoteFile___children___internal___type = 'remoteFile.children.internal.type',
  remoteFile___internal___content = 'remoteFile.internal.content',
  remoteFile___internal___contentDigest = 'remoteFile.internal.contentDigest',
  remoteFile___internal___description = 'remoteFile.internal.description',
  remoteFile___internal___fieldOwners = 'remoteFile.internal.fieldOwners',
  remoteFile___internal___ignoreType = 'remoteFile.internal.ignoreType',
  remoteFile___internal___mediaType = 'remoteFile.internal.mediaType',
  remoteFile___internal___owner = 'remoteFile.internal.owner',
  remoteFile___internal___type = 'remoteFile.internal.type',
  localFile___sourceInstanceName = 'localFile.sourceInstanceName',
  localFile___absolutePath = 'localFile.absolutePath',
  localFile___relativePath = 'localFile.relativePath',
  localFile___extension = 'localFile.extension',
  localFile___size = 'localFile.size',
  localFile___prettySize = 'localFile.prettySize',
  localFile___modifiedTime = 'localFile.modifiedTime',
  localFile___accessTime = 'localFile.accessTime',
  localFile___changeTime = 'localFile.changeTime',
  localFile___birthTime = 'localFile.birthTime',
  localFile___root = 'localFile.root',
  localFile___dir = 'localFile.dir',
  localFile___base = 'localFile.base',
  localFile___ext = 'localFile.ext',
  localFile___name = 'localFile.name',
  localFile___relativeDirectory = 'localFile.relativeDirectory',
  localFile___dev = 'localFile.dev',
  localFile___mode = 'localFile.mode',
  localFile___nlink = 'localFile.nlink',
  localFile___uid = 'localFile.uid',
  localFile___gid = 'localFile.gid',
  localFile___rdev = 'localFile.rdev',
  localFile___ino = 'localFile.ino',
  localFile___atimeMs = 'localFile.atimeMs',
  localFile___mtimeMs = 'localFile.mtimeMs',
  localFile___ctimeMs = 'localFile.ctimeMs',
  localFile___atime = 'localFile.atime',
  localFile___mtime = 'localFile.mtime',
  localFile___ctime = 'localFile.ctime',
  localFile___birthtime = 'localFile.birthtime',
  localFile___birthtimeMs = 'localFile.birthtimeMs',
  localFile___blksize = 'localFile.blksize',
  localFile___blocks = 'localFile.blocks',
  localFile___url = 'localFile.url',
  localFile___publicURL = 'localFile.publicURL',
  localFile___childImageSharp___fixed___base64 = 'localFile.childImageSharp.fixed.base64',
  localFile___childImageSharp___fixed___tracedSVG = 'localFile.childImageSharp.fixed.tracedSVG',
  localFile___childImageSharp___fixed___aspectRatio = 'localFile.childImageSharp.fixed.aspectRatio',
  localFile___childImageSharp___fixed___width = 'localFile.childImageSharp.fixed.width',
  localFile___childImageSharp___fixed___height = 'localFile.childImageSharp.fixed.height',
  localFile___childImageSharp___fixed___src = 'localFile.childImageSharp.fixed.src',
  localFile___childImageSharp___fixed___srcSet = 'localFile.childImageSharp.fixed.srcSet',
  localFile___childImageSharp___fixed___srcWebp = 'localFile.childImageSharp.fixed.srcWebp',
  localFile___childImageSharp___fixed___srcSetWebp = 'localFile.childImageSharp.fixed.srcSetWebp',
  localFile___childImageSharp___fixed___originalName = 'localFile.childImageSharp.fixed.originalName',
  localFile___childImageSharp___resolutions___base64 = 'localFile.childImageSharp.resolutions.base64',
  localFile___childImageSharp___resolutions___tracedSVG = 'localFile.childImageSharp.resolutions.tracedSVG',
  localFile___childImageSharp___resolutions___aspectRatio = 'localFile.childImageSharp.resolutions.aspectRatio',
  localFile___childImageSharp___resolutions___width = 'localFile.childImageSharp.resolutions.width',
  localFile___childImageSharp___resolutions___height = 'localFile.childImageSharp.resolutions.height',
  localFile___childImageSharp___resolutions___src = 'localFile.childImageSharp.resolutions.src',
  localFile___childImageSharp___resolutions___srcSet = 'localFile.childImageSharp.resolutions.srcSet',
  localFile___childImageSharp___resolutions___srcWebp = 'localFile.childImageSharp.resolutions.srcWebp',
  localFile___childImageSharp___resolutions___srcSetWebp = 'localFile.childImageSharp.resolutions.srcSetWebp',
  localFile___childImageSharp___resolutions___originalName = 'localFile.childImageSharp.resolutions.originalName',
  localFile___childImageSharp___fluid___base64 = 'localFile.childImageSharp.fluid.base64',
  localFile___childImageSharp___fluid___tracedSVG = 'localFile.childImageSharp.fluid.tracedSVG',
  localFile___childImageSharp___fluid___aspectRatio = 'localFile.childImageSharp.fluid.aspectRatio',
  localFile___childImageSharp___fluid___src = 'localFile.childImageSharp.fluid.src',
  localFile___childImageSharp___fluid___srcSet = 'localFile.childImageSharp.fluid.srcSet',
  localFile___childImageSharp___fluid___srcWebp = 'localFile.childImageSharp.fluid.srcWebp',
  localFile___childImageSharp___fluid___srcSetWebp = 'localFile.childImageSharp.fluid.srcSetWebp',
  localFile___childImageSharp___fluid___sizes = 'localFile.childImageSharp.fluid.sizes',
  localFile___childImageSharp___fluid___originalImg = 'localFile.childImageSharp.fluid.originalImg',
  localFile___childImageSharp___fluid___originalName = 'localFile.childImageSharp.fluid.originalName',
  localFile___childImageSharp___fluid___presentationWidth = 'localFile.childImageSharp.fluid.presentationWidth',
  localFile___childImageSharp___fluid___presentationHeight = 'localFile.childImageSharp.fluid.presentationHeight',
  localFile___childImageSharp___sizes___base64 = 'localFile.childImageSharp.sizes.base64',
  localFile___childImageSharp___sizes___tracedSVG = 'localFile.childImageSharp.sizes.tracedSVG',
  localFile___childImageSharp___sizes___aspectRatio = 'localFile.childImageSharp.sizes.aspectRatio',
  localFile___childImageSharp___sizes___src = 'localFile.childImageSharp.sizes.src',
  localFile___childImageSharp___sizes___srcSet = 'localFile.childImageSharp.sizes.srcSet',
  localFile___childImageSharp___sizes___srcWebp = 'localFile.childImageSharp.sizes.srcWebp',
  localFile___childImageSharp___sizes___srcSetWebp = 'localFile.childImageSharp.sizes.srcSetWebp',
  localFile___childImageSharp___sizes___sizes = 'localFile.childImageSharp.sizes.sizes',
  localFile___childImageSharp___sizes___originalImg = 'localFile.childImageSharp.sizes.originalImg',
  localFile___childImageSharp___sizes___originalName = 'localFile.childImageSharp.sizes.originalName',
  localFile___childImageSharp___sizes___presentationWidth = 'localFile.childImageSharp.sizes.presentationWidth',
  localFile___childImageSharp___sizes___presentationHeight = 'localFile.childImageSharp.sizes.presentationHeight',
  localFile___childImageSharp___gatsbyImageData = 'localFile.childImageSharp.gatsbyImageData',
  localFile___childImageSharp___original___width = 'localFile.childImageSharp.original.width',
  localFile___childImageSharp___original___height = 'localFile.childImageSharp.original.height',
  localFile___childImageSharp___original___src = 'localFile.childImageSharp.original.src',
  localFile___childImageSharp___resize___src = 'localFile.childImageSharp.resize.src',
  localFile___childImageSharp___resize___tracedSVG = 'localFile.childImageSharp.resize.tracedSVG',
  localFile___childImageSharp___resize___width = 'localFile.childImageSharp.resize.width',
  localFile___childImageSharp___resize___height = 'localFile.childImageSharp.resize.height',
  localFile___childImageSharp___resize___aspectRatio = 'localFile.childImageSharp.resize.aspectRatio',
  localFile___childImageSharp___resize___originalName = 'localFile.childImageSharp.resize.originalName',
  localFile___childImageSharp___id = 'localFile.childImageSharp.id',
  localFile___childImageSharp___parent___id = 'localFile.childImageSharp.parent.id',
  localFile___childImageSharp___parent___children = 'localFile.childImageSharp.parent.children',
  localFile___childImageSharp___children = 'localFile.childImageSharp.children',
  localFile___childImageSharp___children___id = 'localFile.childImageSharp.children.id',
  localFile___childImageSharp___children___children = 'localFile.childImageSharp.children.children',
  localFile___childImageSharp___internal___content = 'localFile.childImageSharp.internal.content',
  localFile___childImageSharp___internal___contentDigest = 'localFile.childImageSharp.internal.contentDigest',
  localFile___childImageSharp___internal___description = 'localFile.childImageSharp.internal.description',
  localFile___childImageSharp___internal___fieldOwners = 'localFile.childImageSharp.internal.fieldOwners',
  localFile___childImageSharp___internal___ignoreType = 'localFile.childImageSharp.internal.ignoreType',
  localFile___childImageSharp___internal___mediaType = 'localFile.childImageSharp.internal.mediaType',
  localFile___childImageSharp___internal___owner = 'localFile.childImageSharp.internal.owner',
  localFile___childImageSharp___internal___type = 'localFile.childImageSharp.internal.type',
  localFile___id = 'localFile.id',
  localFile___parent___id = 'localFile.parent.id',
  localFile___parent___parent___id = 'localFile.parent.parent.id',
  localFile___parent___parent___children = 'localFile.parent.parent.children',
  localFile___parent___children = 'localFile.parent.children',
  localFile___parent___children___id = 'localFile.parent.children.id',
  localFile___parent___children___children = 'localFile.parent.children.children',
  localFile___parent___internal___content = 'localFile.parent.internal.content',
  localFile___parent___internal___contentDigest = 'localFile.parent.internal.contentDigest',
  localFile___parent___internal___description = 'localFile.parent.internal.description',
  localFile___parent___internal___fieldOwners = 'localFile.parent.internal.fieldOwners',
  localFile___parent___internal___ignoreType = 'localFile.parent.internal.ignoreType',
  localFile___parent___internal___mediaType = 'localFile.parent.internal.mediaType',
  localFile___parent___internal___owner = 'localFile.parent.internal.owner',
  localFile___parent___internal___type = 'localFile.parent.internal.type',
  localFile___children = 'localFile.children',
  localFile___children___id = 'localFile.children.id',
  localFile___children___parent___id = 'localFile.children.parent.id',
  localFile___children___parent___children = 'localFile.children.parent.children',
  localFile___children___children = 'localFile.children.children',
  localFile___children___children___id = 'localFile.children.children.id',
  localFile___children___children___children = 'localFile.children.children.children',
  localFile___children___internal___content = 'localFile.children.internal.content',
  localFile___children___internal___contentDigest = 'localFile.children.internal.contentDigest',
  localFile___children___internal___description = 'localFile.children.internal.description',
  localFile___children___internal___fieldOwners = 'localFile.children.internal.fieldOwners',
  localFile___children___internal___ignoreType = 'localFile.children.internal.ignoreType',
  localFile___children___internal___mediaType = 'localFile.children.internal.mediaType',
  localFile___children___internal___owner = 'localFile.children.internal.owner',
  localFile___children___internal___type = 'localFile.children.internal.type',
  localFile___internal___content = 'localFile.internal.content',
  localFile___internal___contentDigest = 'localFile.internal.contentDigest',
  localFile___internal___description = 'localFile.internal.description',
  localFile___internal___fieldOwners = 'localFile.internal.fieldOwners',
  localFile___internal___ignoreType = 'localFile.internal.ignoreType',
  localFile___internal___mediaType = 'localFile.internal.mediaType',
  localFile___internal___owner = 'localFile.internal.owner',
  localFile___internal___type = 'localFile.internal.type',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

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
  readonly contentType: Maybe<WpMediaItemToContentTypeConnectionEdgeFilterInput>;
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

type WpMediaItemGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpMediaItemEdge>;
  readonly nodes: ReadonlyArray<WpMediaItem>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
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

type WpMediaItemSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<WpMediaItemFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

/** Connection between the mediaItem type and the Comment type */
type WpMediaItemToCommentConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpComment>>>;
};

type WpMediaItemToCommentConnectionFilterInput = {
  readonly nodes: Maybe<WpCommentFilterListInput>;
};

/** Connection between the mediaItem type and the ContentType type */
type WpMediaItemToContentTypeConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpContentType>;
};

type WpMediaItemToContentTypeConnectionEdgeFilterInput = {
  readonly node: Maybe<WpContentTypeFilterInput>;
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

type WpMediaSizeFilterInput = {
  readonly file: Maybe<StringQueryOperatorInput>;
  readonly fileSize: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<StringQueryOperatorInput>;
  readonly mimeType: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly sourceUrl: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<StringQueryOperatorInput>;
};

type WpMediaSizeFilterListInput = {
  readonly elemMatch: Maybe<WpMediaSizeFilterInput>;
};

/**
 * Menus are the containers for navigation items. Menus can be assigned to menu
 * locations, which are typically registered by the active theme.
 */
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

enum WpMenuFieldsEnum {
  count = 'count',
  databaseId = 'databaseId',
  id = 'id',
  locations = 'locations',
  menuItems___nodes = 'menuItems.nodes',
  menuItems___nodes___childItems___nodes = 'menuItems.nodes.childItems.nodes',
  menuItems___nodes___cssClasses = 'menuItems.nodes.cssClasses',
  menuItems___nodes___databaseId = 'menuItems.nodes.databaseId',
  menuItems___nodes___description = 'menuItems.nodes.description',
  menuItems___nodes___id = 'menuItems.nodes.id',
  menuItems___nodes___label = 'menuItems.nodes.label',
  menuItems___nodes___linkRelationship = 'menuItems.nodes.linkRelationship',
  menuItems___nodes___locations = 'menuItems.nodes.locations',
  menuItems___nodes___order = 'menuItems.nodes.order',
  menuItems___nodes___parentDatabaseId = 'menuItems.nodes.parentDatabaseId',
  menuItems___nodes___parentId = 'menuItems.nodes.parentId',
  menuItems___nodes___path = 'menuItems.nodes.path',
  menuItems___nodes___target = 'menuItems.nodes.target',
  menuItems___nodes___title = 'menuItems.nodes.title',
  menuItems___nodes___url = 'menuItems.nodes.url',
  menuItems___nodes___nodeType = 'menuItems.nodes.nodeType',
  menuItems___nodes___parent___id = 'menuItems.nodes.parent.id',
  menuItems___nodes___parent___children = 'menuItems.nodes.parent.children',
  menuItems___nodes___children = 'menuItems.nodes.children',
  menuItems___nodes___children___id = 'menuItems.nodes.children.id',
  menuItems___nodes___children___children = 'menuItems.nodes.children.children',
  menuItems___nodes___internal___content = 'menuItems.nodes.internal.content',
  menuItems___nodes___internal___contentDigest = 'menuItems.nodes.internal.contentDigest',
  menuItems___nodes___internal___description = 'menuItems.nodes.internal.description',
  menuItems___nodes___internal___fieldOwners = 'menuItems.nodes.internal.fieldOwners',
  menuItems___nodes___internal___ignoreType = 'menuItems.nodes.internal.ignoreType',
  menuItems___nodes___internal___mediaType = 'menuItems.nodes.internal.mediaType',
  menuItems___nodes___internal___owner = 'menuItems.nodes.internal.owner',
  menuItems___nodes___internal___type = 'menuItems.nodes.internal.type',
  name = 'name',
  slug = 'slug',
  nodeType = 'nodeType',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

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

type WpMenuGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpMenuEdge>;
  readonly nodes: ReadonlyArray<WpMenu>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
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

enum WpMenuItemFieldsEnum {
  childItems___nodes = 'childItems.nodes',
  childItems___nodes___childItems___nodes = 'childItems.nodes.childItems.nodes',
  childItems___nodes___cssClasses = 'childItems.nodes.cssClasses',
  childItems___nodes___databaseId = 'childItems.nodes.databaseId',
  childItems___nodes___description = 'childItems.nodes.description',
  childItems___nodes___id = 'childItems.nodes.id',
  childItems___nodes___label = 'childItems.nodes.label',
  childItems___nodes___linkRelationship = 'childItems.nodes.linkRelationship',
  childItems___nodes___locations = 'childItems.nodes.locations',
  childItems___nodes___order = 'childItems.nodes.order',
  childItems___nodes___parentDatabaseId = 'childItems.nodes.parentDatabaseId',
  childItems___nodes___parentId = 'childItems.nodes.parentId',
  childItems___nodes___path = 'childItems.nodes.path',
  childItems___nodes___target = 'childItems.nodes.target',
  childItems___nodes___title = 'childItems.nodes.title',
  childItems___nodes___url = 'childItems.nodes.url',
  childItems___nodes___nodeType = 'childItems.nodes.nodeType',
  childItems___nodes___parent___id = 'childItems.nodes.parent.id',
  childItems___nodes___parent___children = 'childItems.nodes.parent.children',
  childItems___nodes___children = 'childItems.nodes.children',
  childItems___nodes___children___id = 'childItems.nodes.children.id',
  childItems___nodes___children___children = 'childItems.nodes.children.children',
  childItems___nodes___internal___content = 'childItems.nodes.internal.content',
  childItems___nodes___internal___contentDigest = 'childItems.nodes.internal.contentDigest',
  childItems___nodes___internal___description = 'childItems.nodes.internal.description',
  childItems___nodes___internal___fieldOwners = 'childItems.nodes.internal.fieldOwners',
  childItems___nodes___internal___ignoreType = 'childItems.nodes.internal.ignoreType',
  childItems___nodes___internal___mediaType = 'childItems.nodes.internal.mediaType',
  childItems___nodes___internal___owner = 'childItems.nodes.internal.owner',
  childItems___nodes___internal___type = 'childItems.nodes.internal.type',
  connectedNode___node___databaseId = 'connectedNode.node.databaseId',
  connectedNode___node___id = 'connectedNode.node.id',
  connectedNode___node___uri = 'connectedNode.node.uri',
  cssClasses = 'cssClasses',
  databaseId = 'databaseId',
  description = 'description',
  id = 'id',
  label = 'label',
  linkRelationship = 'linkRelationship',
  locations = 'locations',
  menu___node___count = 'menu.node.count',
  menu___node___databaseId = 'menu.node.databaseId',
  menu___node___id = 'menu.node.id',
  menu___node___locations = 'menu.node.locations',
  menu___node___menuItems___nodes = 'menu.node.menuItems.nodes',
  menu___node___name = 'menu.node.name',
  menu___node___slug = 'menu.node.slug',
  menu___node___nodeType = 'menu.node.nodeType',
  menu___node___parent___id = 'menu.node.parent.id',
  menu___node___parent___children = 'menu.node.parent.children',
  menu___node___children = 'menu.node.children',
  menu___node___children___id = 'menu.node.children.id',
  menu___node___children___children = 'menu.node.children.children',
  menu___node___internal___content = 'menu.node.internal.content',
  menu___node___internal___contentDigest = 'menu.node.internal.contentDigest',
  menu___node___internal___description = 'menu.node.internal.description',
  menu___node___internal___fieldOwners = 'menu.node.internal.fieldOwners',
  menu___node___internal___ignoreType = 'menu.node.internal.ignoreType',
  menu___node___internal___mediaType = 'menu.node.internal.mediaType',
  menu___node___internal___owner = 'menu.node.internal.owner',
  menu___node___internal___type = 'menu.node.internal.type',
  order = 'order',
  parentDatabaseId = 'parentDatabaseId',
  parentId = 'parentId',
  path = 'path',
  target = 'target',
  title = 'title',
  url = 'url',
  nodeType = 'nodeType',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

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

type WpMenuItemFilterListInput = {
  readonly elemMatch: Maybe<WpMenuItemFilterInput>;
};

type WpMenuItemGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpMenuItemEdge>;
  readonly nodes: ReadonlyArray<WpMenuItem>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type WpMenuItemLinkable = {
  /** The unique resource identifier path */
  readonly databaseId: Scalars['Int'];
  /** The unique resource identifier path */
  readonly id: Scalars['ID'];
  /** The unique resource identifier path */
  readonly uri: Scalars['String'];
};

type WpMenuItemLinkableFilterInput = {
  readonly databaseId: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<IDQueryOperatorInput>;
  readonly uri: Maybe<StringQueryOperatorInput>;
};

type WpMenuItemSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<WpMenuItemFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

/** Connection between the MenuItem type and the Menu type */
type WpMenuItemToMenuConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpMenu>;
};

type WpMenuItemToMenuConnectionEdgeFilterInput = {
  readonly node: Maybe<WpMenuFilterInput>;
};

/** Connection between the MenuItem type and the MenuItem type */
type WpMenuItemToMenuItemConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpMenuItem>>>;
};

type WpMenuItemToMenuItemConnectionFilterInput = {
  readonly nodes: Maybe<WpMenuItemFilterListInput>;
};

/** Connection between the MenuItem type and the MenuItemLinkable type */
type WpMenuItemToMenuItemLinkableConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpMenuItemLinkable>;
};

type WpMenuItemToMenuItemLinkableConnectionEdgeFilterInput = {
  readonly node: Maybe<WpMenuItemLinkableFilterInput>;
};

/** Registered menu locations */
enum WpMenuLocationEnum {
  EMPTY = 'EMPTY'
}

type WpMenuLocationEnumQueryOperatorInput = {
  readonly eq: Maybe<WpMenuLocationEnum>;
  readonly ne: Maybe<WpMenuLocationEnum>;
  readonly in: Maybe<ReadonlyArray<Maybe<WpMenuLocationEnum>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<WpMenuLocationEnum>>>;
};

type WpMenuSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<WpMenuFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

/** Connection between the Menu type and the MenuItem type */
type WpMenuToMenuItemConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpMenuItem>>>;
};

type WpMenuToMenuItemConnectionFilterInput = {
  readonly nodes: Maybe<WpMenuItemFilterListInput>;
};

type WpNode = {
  /** The globally unique ID for the object */
  readonly id: Scalars['ID'];
};

type WpNodeWithAuthor = {
  /** Connection between the NodeWithAuthor type and the User type */
  readonly author: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  readonly authorDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  readonly authorId: Maybe<Scalars['ID']>;
};

/** Connection between the NodeWithAuthor type and the User type */
type WpNodeWithAuthorToUserConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpUser>;
};

type WpNodeWithAuthorToUserConnectionEdgeFilterInput = {
  readonly node: Maybe<WpUserFilterInput>;
};

type WpNodeWithComments = {
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for compatibility.
   */
  readonly commentCount: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  readonly commentStatus: Maybe<Scalars['String']>;
};

type WpNodeWithContentEditor = {
  /** The content of the post. */
  readonly content: Maybe<Scalars['String']>;
};

type WpNodeWithExcerpt = {
  /** The excerpt of the post. */
  readonly excerpt: Maybe<Scalars['String']>;
};

type WpNodeWithFeaturedImage = {
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  readonly featuredImage: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  readonly featuredImageDatabaseId: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  readonly featuredImageId: Maybe<Scalars['ID']>;
};

/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
type WpNodeWithFeaturedImageToMediaItemConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpMediaItem>;
};

type WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput = {
  readonly node: Maybe<WpMediaItemFilterInput>;
};

type WpNodeWithPageAttributes = {
  /**
   * A field used for ordering posts. This is typically used with nav menu items or
   * for special ordering of hierarchical content types.
   */
  readonly menuOrder: Maybe<Scalars['Int']>;
};

type WpNodeWithRevisions = {
  /** True if the node is a revision of another node */
  readonly isRevision: Maybe<Scalars['Boolean']>;
};

/** Connection between the NodeWithRevisions type and the ContentNode type */
type WpNodeWithRevisionsToContentNodeConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpContentNode>;
};

type WpNodeWithTemplate = {
  /** The template assigned to the node */
  readonly template: Maybe<WpContentTemplate>;
};

type WpNodeWithTitle = {
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  readonly title: Maybe<Scalars['String']>;
};

type WpNodeWithTrackbacks = {
  /** Whether the pings are open or closed for this particular post. */
  readonly pingStatus: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  readonly pinged: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** URLs queued to be pinged. */
  readonly toPing: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

/** The page type */
type WpPage = Node & WpNode & WpContentNode & WpDatabaseIdentifier & WpNodeWithTemplate & WpUniformResourceIdentifiable & WpNodeWithTitle & WpNodeWithContentEditor & WpNodeWithAuthor & WpNodeWithFeaturedImage & WpNodeWithComments & WpNodeWithRevisions & WpNodeWithPageAttributes & WpHierarchicalContentNode & WpMenuItemLinkable & {
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
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for compatibility.
   */
  readonly commentCount: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  readonly commentStatus: Maybe<Scalars['String']>;
  /** Connection between the page type and the Comment type */
  readonly comments: Maybe<WpPageToCommentConnection>;
  /** The content of the post. */
  readonly content: Maybe<Scalars['String']>;
  /** Connection between the page type and the ContentType type */
  readonly contentType: Maybe<WpPageToContentTypeConnectionEdge>;
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
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  readonly featuredImage: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  readonly featuredImageDatabaseId: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  readonly featuredImageId: Maybe<Scalars['ID']>;
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
  readonly guid: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** Whether this page is set to the static front page. */
  readonly isFrontPage: Scalars['Boolean'];
  /** Whether this page is set to the blog posts page. */
  readonly isPostsPage: Scalars['Boolean'];
  /** True if the node is a revision of another node */
  readonly isRevision: Maybe<Scalars['Boolean']>;
  /** The user that most recently edited the node */
  readonly lastEditedBy: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  readonly link: Maybe<Scalars['String']>;
  /**
   * A field used for ordering posts. This is typically used with nav menu items or
   * for special ordering of hierarchical content types.
   */
  readonly menuOrder: Maybe<Scalars['Int']>;
  /**
   * The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  readonly modified: Maybe<Scalars['Date']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  readonly modifiedGmt: Maybe<Scalars['Date']>;
  /** The parent of the node. The parent object can be of various types */
  readonly wpParent: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  readonly parentId: Maybe<Scalars['ID']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  readonly slug: Maybe<Scalars['String']>;
  /** The current status of the object */
  readonly status: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  readonly template: Maybe<WpContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  readonly title: Maybe<Scalars['String']>;
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

enum WpPageFieldsEnum {
  ancestors___nodes = 'ancestors.nodes',
  ancestors___nodes___databaseId = 'ancestors.nodes.databaseId',
  ancestors___nodes___date = 'ancestors.nodes.date',
  ancestors___nodes___dateGmt = 'ancestors.nodes.dateGmt',
  ancestors___nodes___desiredSlug = 'ancestors.nodes.desiredSlug',
  ancestors___nodes___enclosure = 'ancestors.nodes.enclosure',
  ancestors___nodes___guid = 'ancestors.nodes.guid',
  ancestors___nodes___id = 'ancestors.nodes.id',
  ancestors___nodes___link = 'ancestors.nodes.link',
  ancestors___nodes___modified = 'ancestors.nodes.modified',
  ancestors___nodes___modifiedGmt = 'ancestors.nodes.modifiedGmt',
  ancestors___nodes___slug = 'ancestors.nodes.slug',
  ancestors___nodes___status = 'ancestors.nodes.status',
  ancestors___nodes___template___templateName = 'ancestors.nodes.template.templateName',
  ancestors___nodes___uri = 'ancestors.nodes.uri',
  ancestors___nodes___nodeType = 'ancestors.nodes.nodeType',
  author___node___avatar___default = 'author.node.avatar.default',
  author___node___avatar___extraAttr = 'author.node.avatar.extraAttr',
  author___node___avatar___forceDefault = 'author.node.avatar.forceDefault',
  author___node___avatar___foundAvatar = 'author.node.avatar.foundAvatar',
  author___node___avatar___height = 'author.node.avatar.height',
  author___node___avatar___rating = 'author.node.avatar.rating',
  author___node___avatar___scheme = 'author.node.avatar.scheme',
  author___node___avatar___size = 'author.node.avatar.size',
  author___node___avatar___url = 'author.node.avatar.url',
  author___node___avatar___width = 'author.node.avatar.width',
  author___node___capKey = 'author.node.capKey',
  author___node___capabilities = 'author.node.capabilities',
  author___node___comments___nodes = 'author.node.comments.nodes',
  author___node___databaseId = 'author.node.databaseId',
  author___node___description = 'author.node.description',
  author___node___email = 'author.node.email',
  author___node___extraCapabilities = 'author.node.extraCapabilities',
  author___node___firstName = 'author.node.firstName',
  author___node___id = 'author.node.id',
  author___node___lastName = 'author.node.lastName',
  author___node___locale = 'author.node.locale',
  author___node___name = 'author.node.name',
  author___node___nicename = 'author.node.nicename',
  author___node___nickname = 'author.node.nickname',
  author___node___pages___nodes = 'author.node.pages.nodes',
  author___node___posts___nodes = 'author.node.posts.nodes',
  author___node___registeredDate = 'author.node.registeredDate',
  author___node___roles___nodes = 'author.node.roles.nodes',
  author___node___slug = 'author.node.slug',
  author___node___uri = 'author.node.uri',
  author___node___url = 'author.node.url',
  author___node___username = 'author.node.username',
  author___node___nodeType = 'author.node.nodeType',
  author___node___parent___id = 'author.node.parent.id',
  author___node___parent___children = 'author.node.parent.children',
  author___node___children = 'author.node.children',
  author___node___children___id = 'author.node.children.id',
  author___node___children___children = 'author.node.children.children',
  author___node___internal___content = 'author.node.internal.content',
  author___node___internal___contentDigest = 'author.node.internal.contentDigest',
  author___node___internal___description = 'author.node.internal.description',
  author___node___internal___fieldOwners = 'author.node.internal.fieldOwners',
  author___node___internal___ignoreType = 'author.node.internal.ignoreType',
  author___node___internal___mediaType = 'author.node.internal.mediaType',
  author___node___internal___owner = 'author.node.internal.owner',
  author___node___internal___type = 'author.node.internal.type',
  authorDatabaseId = 'authorDatabaseId',
  authorId = 'authorId',
  wpChildren___nodes = 'wpChildren.nodes',
  wpChildren___nodes___databaseId = 'wpChildren.nodes.databaseId',
  wpChildren___nodes___date = 'wpChildren.nodes.date',
  wpChildren___nodes___dateGmt = 'wpChildren.nodes.dateGmt',
  wpChildren___nodes___desiredSlug = 'wpChildren.nodes.desiredSlug',
  wpChildren___nodes___enclosure = 'wpChildren.nodes.enclosure',
  wpChildren___nodes___guid = 'wpChildren.nodes.guid',
  wpChildren___nodes___id = 'wpChildren.nodes.id',
  wpChildren___nodes___link = 'wpChildren.nodes.link',
  wpChildren___nodes___modified = 'wpChildren.nodes.modified',
  wpChildren___nodes___modifiedGmt = 'wpChildren.nodes.modifiedGmt',
  wpChildren___nodes___slug = 'wpChildren.nodes.slug',
  wpChildren___nodes___status = 'wpChildren.nodes.status',
  wpChildren___nodes___template___templateName = 'wpChildren.nodes.template.templateName',
  wpChildren___nodes___uri = 'wpChildren.nodes.uri',
  wpChildren___nodes___nodeType = 'wpChildren.nodes.nodeType',
  commentCount = 'commentCount',
  commentStatus = 'commentStatus',
  comments___nodes = 'comments.nodes',
  comments___nodes___agent = 'comments.nodes.agent',
  comments___nodes___approved = 'comments.nodes.approved',
  comments___nodes___authorIp = 'comments.nodes.authorIp',
  comments___nodes___content = 'comments.nodes.content',
  comments___nodes___databaseId = 'comments.nodes.databaseId',
  comments___nodes___date = 'comments.nodes.date',
  comments___nodes___dateGmt = 'comments.nodes.dateGmt',
  comments___nodes___id = 'comments.nodes.id',
  comments___nodes___karma = 'comments.nodes.karma',
  comments___nodes___parentDatabaseId = 'comments.nodes.parentDatabaseId',
  comments___nodes___parentId = 'comments.nodes.parentId',
  comments___nodes___replies___nodes = 'comments.nodes.replies.nodes',
  comments___nodes___type = 'comments.nodes.type',
  comments___nodes___nodeType = 'comments.nodes.nodeType',
  comments___nodes___parent___id = 'comments.nodes.parent.id',
  comments___nodes___parent___children = 'comments.nodes.parent.children',
  comments___nodes___children = 'comments.nodes.children',
  comments___nodes___children___id = 'comments.nodes.children.id',
  comments___nodes___children___children = 'comments.nodes.children.children',
  comments___nodes___internal___content = 'comments.nodes.internal.content',
  comments___nodes___internal___contentDigest = 'comments.nodes.internal.contentDigest',
  comments___nodes___internal___description = 'comments.nodes.internal.description',
  comments___nodes___internal___fieldOwners = 'comments.nodes.internal.fieldOwners',
  comments___nodes___internal___ignoreType = 'comments.nodes.internal.ignoreType',
  comments___nodes___internal___mediaType = 'comments.nodes.internal.mediaType',
  comments___nodes___internal___owner = 'comments.nodes.internal.owner',
  comments___nodes___internal___type = 'comments.nodes.internal.type',
  content = 'content',
  contentType___node___archivePath = 'contentType.node.archivePath',
  contentType___node___canExport = 'contentType.node.canExport',
  contentType___node___connectedTaxonomies___nodes = 'contentType.node.connectedTaxonomies.nodes',
  contentType___node___contentNodes___nodes = 'contentType.node.contentNodes.nodes',
  contentType___node___deleteWithUser = 'contentType.node.deleteWithUser',
  contentType___node___description = 'contentType.node.description',
  contentType___node___excludeFromSearch = 'contentType.node.excludeFromSearch',
  contentType___node___graphqlPluralName = 'contentType.node.graphqlPluralName',
  contentType___node___graphqlSingleName = 'contentType.node.graphqlSingleName',
  contentType___node___hasArchive = 'contentType.node.hasArchive',
  contentType___node___hierarchical = 'contentType.node.hierarchical',
  contentType___node___id = 'contentType.node.id',
  contentType___node___isFrontPage = 'contentType.node.isFrontPage',
  contentType___node___isPostsPage = 'contentType.node.isPostsPage',
  contentType___node___label = 'contentType.node.label',
  contentType___node___labels___addNew = 'contentType.node.labels.addNew',
  contentType___node___labels___addNewItem = 'contentType.node.labels.addNewItem',
  contentType___node___labels___allItems = 'contentType.node.labels.allItems',
  contentType___node___labels___archives = 'contentType.node.labels.archives',
  contentType___node___labels___attributes = 'contentType.node.labels.attributes',
  contentType___node___labels___editItem = 'contentType.node.labels.editItem',
  contentType___node___labels___featuredImage = 'contentType.node.labels.featuredImage',
  contentType___node___labels___filterItemsList = 'contentType.node.labels.filterItemsList',
  contentType___node___labels___insertIntoItem = 'contentType.node.labels.insertIntoItem',
  contentType___node___labels___itemsList = 'contentType.node.labels.itemsList',
  contentType___node___labels___itemsListNavigation = 'contentType.node.labels.itemsListNavigation',
  contentType___node___labels___menuName = 'contentType.node.labels.menuName',
  contentType___node___labels___name = 'contentType.node.labels.name',
  contentType___node___labels___newItem = 'contentType.node.labels.newItem',
  contentType___node___labels___notFound = 'contentType.node.labels.notFound',
  contentType___node___labels___notFoundInTrash = 'contentType.node.labels.notFoundInTrash',
  contentType___node___labels___parentItemColon = 'contentType.node.labels.parentItemColon',
  contentType___node___labels___removeFeaturedImage = 'contentType.node.labels.removeFeaturedImage',
  contentType___node___labels___searchItems = 'contentType.node.labels.searchItems',
  contentType___node___labels___setFeaturedImage = 'contentType.node.labels.setFeaturedImage',
  contentType___node___labels___singularName = 'contentType.node.labels.singularName',
  contentType___node___labels___uploadedToThisItem = 'contentType.node.labels.uploadedToThisItem',
  contentType___node___labels___useFeaturedImage = 'contentType.node.labels.useFeaturedImage',
  contentType___node___labels___viewItem = 'contentType.node.labels.viewItem',
  contentType___node___labels___viewItems = 'contentType.node.labels.viewItems',
  contentType___node___menuIcon = 'contentType.node.menuIcon',
  contentType___node___menuPosition = 'contentType.node.menuPosition',
  contentType___node___name = 'contentType.node.name',
  contentType___node___public = 'contentType.node.public',
  contentType___node___publiclyQueryable = 'contentType.node.publiclyQueryable',
  contentType___node___restBase = 'contentType.node.restBase',
  contentType___node___restControllerClass = 'contentType.node.restControllerClass',
  contentType___node___showInAdminBar = 'contentType.node.showInAdminBar',
  contentType___node___showInGraphql = 'contentType.node.showInGraphql',
  contentType___node___showInMenu = 'contentType.node.showInMenu',
  contentType___node___showInNavMenus = 'contentType.node.showInNavMenus',
  contentType___node___showInRest = 'contentType.node.showInRest',
  contentType___node___showUi = 'contentType.node.showUi',
  contentType___node___uri = 'contentType.node.uri',
  contentType___node___nodeType = 'contentType.node.nodeType',
  contentType___node___parent___id = 'contentType.node.parent.id',
  contentType___node___parent___children = 'contentType.node.parent.children',
  contentType___node___children = 'contentType.node.children',
  contentType___node___children___id = 'contentType.node.children.id',
  contentType___node___children___children = 'contentType.node.children.children',
  contentType___node___internal___content = 'contentType.node.internal.content',
  contentType___node___internal___contentDigest = 'contentType.node.internal.contentDigest',
  contentType___node___internal___description = 'contentType.node.internal.description',
  contentType___node___internal___fieldOwners = 'contentType.node.internal.fieldOwners',
  contentType___node___internal___ignoreType = 'contentType.node.internal.ignoreType',
  contentType___node___internal___mediaType = 'contentType.node.internal.mediaType',
  contentType___node___internal___owner = 'contentType.node.internal.owner',
  contentType___node___internal___type = 'contentType.node.internal.type',
  databaseId = 'databaseId',
  date = 'date',
  dateGmt = 'dateGmt',
  desiredSlug = 'desiredSlug',
  enclosure = 'enclosure',
  featuredImage___node___altText = 'featuredImage.node.altText',
  featuredImage___node___ancestors___nodes = 'featuredImage.node.ancestors.nodes',
  featuredImage___node___authorDatabaseId = 'featuredImage.node.authorDatabaseId',
  featuredImage___node___authorId = 'featuredImage.node.authorId',
  featuredImage___node___caption = 'featuredImage.node.caption',
  featuredImage___node___wpChildren___nodes = 'featuredImage.node.wpChildren.nodes',
  featuredImage___node___commentCount = 'featuredImage.node.commentCount',
  featuredImage___node___commentStatus = 'featuredImage.node.commentStatus',
  featuredImage___node___comments___nodes = 'featuredImage.node.comments.nodes',
  featuredImage___node___databaseId = 'featuredImage.node.databaseId',
  featuredImage___node___date = 'featuredImage.node.date',
  featuredImage___node___dateGmt = 'featuredImage.node.dateGmt',
  featuredImage___node___description = 'featuredImage.node.description',
  featuredImage___node___desiredSlug = 'featuredImage.node.desiredSlug',
  featuredImage___node___enclosure = 'featuredImage.node.enclosure',
  featuredImage___node___fileSize = 'featuredImage.node.fileSize',
  featuredImage___node___guid = 'featuredImage.node.guid',
  featuredImage___node___id = 'featuredImage.node.id',
  featuredImage___node___link = 'featuredImage.node.link',
  featuredImage___node___mediaDetails___file = 'featuredImage.node.mediaDetails.file',
  featuredImage___node___mediaDetails___height = 'featuredImage.node.mediaDetails.height',
  featuredImage___node___mediaDetails___sizes = 'featuredImage.node.mediaDetails.sizes',
  featuredImage___node___mediaDetails___width = 'featuredImage.node.mediaDetails.width',
  featuredImage___node___mediaItemUrl = 'featuredImage.node.mediaItemUrl',
  featuredImage___node___mediaType = 'featuredImage.node.mediaType',
  featuredImage___node___mimeType = 'featuredImage.node.mimeType',
  featuredImage___node___modified = 'featuredImage.node.modified',
  featuredImage___node___modifiedGmt = 'featuredImage.node.modifiedGmt',
  featuredImage___node___parentDatabaseId = 'featuredImage.node.parentDatabaseId',
  featuredImage___node___parentId = 'featuredImage.node.parentId',
  featuredImage___node___sizes = 'featuredImage.node.sizes',
  featuredImage___node___slug = 'featuredImage.node.slug',
  featuredImage___node___sourceUrl = 'featuredImage.node.sourceUrl',
  featuredImage___node___srcSet = 'featuredImage.node.srcSet',
  featuredImage___node___status = 'featuredImage.node.status',
  featuredImage___node___template___templateName = 'featuredImage.node.template.templateName',
  featuredImage___node___title = 'featuredImage.node.title',
  featuredImage___node___uri = 'featuredImage.node.uri',
  featuredImage___node___nodeType = 'featuredImage.node.nodeType',
  featuredImage___node___remoteFile___sourceInstanceName = 'featuredImage.node.remoteFile.sourceInstanceName',
  featuredImage___node___remoteFile___absolutePath = 'featuredImage.node.remoteFile.absolutePath',
  featuredImage___node___remoteFile___relativePath = 'featuredImage.node.remoteFile.relativePath',
  featuredImage___node___remoteFile___extension = 'featuredImage.node.remoteFile.extension',
  featuredImage___node___remoteFile___size = 'featuredImage.node.remoteFile.size',
  featuredImage___node___remoteFile___prettySize = 'featuredImage.node.remoteFile.prettySize',
  featuredImage___node___remoteFile___modifiedTime = 'featuredImage.node.remoteFile.modifiedTime',
  featuredImage___node___remoteFile___accessTime = 'featuredImage.node.remoteFile.accessTime',
  featuredImage___node___remoteFile___changeTime = 'featuredImage.node.remoteFile.changeTime',
  featuredImage___node___remoteFile___birthTime = 'featuredImage.node.remoteFile.birthTime',
  featuredImage___node___remoteFile___root = 'featuredImage.node.remoteFile.root',
  featuredImage___node___remoteFile___dir = 'featuredImage.node.remoteFile.dir',
  featuredImage___node___remoteFile___base = 'featuredImage.node.remoteFile.base',
  featuredImage___node___remoteFile___ext = 'featuredImage.node.remoteFile.ext',
  featuredImage___node___remoteFile___name = 'featuredImage.node.remoteFile.name',
  featuredImage___node___remoteFile___relativeDirectory = 'featuredImage.node.remoteFile.relativeDirectory',
  featuredImage___node___remoteFile___dev = 'featuredImage.node.remoteFile.dev',
  featuredImage___node___remoteFile___mode = 'featuredImage.node.remoteFile.mode',
  featuredImage___node___remoteFile___nlink = 'featuredImage.node.remoteFile.nlink',
  featuredImage___node___remoteFile___uid = 'featuredImage.node.remoteFile.uid',
  featuredImage___node___remoteFile___gid = 'featuredImage.node.remoteFile.gid',
  featuredImage___node___remoteFile___rdev = 'featuredImage.node.remoteFile.rdev',
  featuredImage___node___remoteFile___ino = 'featuredImage.node.remoteFile.ino',
  featuredImage___node___remoteFile___atimeMs = 'featuredImage.node.remoteFile.atimeMs',
  featuredImage___node___remoteFile___mtimeMs = 'featuredImage.node.remoteFile.mtimeMs',
  featuredImage___node___remoteFile___ctimeMs = 'featuredImage.node.remoteFile.ctimeMs',
  featuredImage___node___remoteFile___atime = 'featuredImage.node.remoteFile.atime',
  featuredImage___node___remoteFile___mtime = 'featuredImage.node.remoteFile.mtime',
  featuredImage___node___remoteFile___ctime = 'featuredImage.node.remoteFile.ctime',
  featuredImage___node___remoteFile___birthtime = 'featuredImage.node.remoteFile.birthtime',
  featuredImage___node___remoteFile___birthtimeMs = 'featuredImage.node.remoteFile.birthtimeMs',
  featuredImage___node___remoteFile___blksize = 'featuredImage.node.remoteFile.blksize',
  featuredImage___node___remoteFile___blocks = 'featuredImage.node.remoteFile.blocks',
  featuredImage___node___remoteFile___url = 'featuredImage.node.remoteFile.url',
  featuredImage___node___remoteFile___publicURL = 'featuredImage.node.remoteFile.publicURL',
  featuredImage___node___remoteFile___id = 'featuredImage.node.remoteFile.id',
  featuredImage___node___remoteFile___children = 'featuredImage.node.remoteFile.children',
  featuredImage___node___localFile___sourceInstanceName = 'featuredImage.node.localFile.sourceInstanceName',
  featuredImage___node___localFile___absolutePath = 'featuredImage.node.localFile.absolutePath',
  featuredImage___node___localFile___relativePath = 'featuredImage.node.localFile.relativePath',
  featuredImage___node___localFile___extension = 'featuredImage.node.localFile.extension',
  featuredImage___node___localFile___size = 'featuredImage.node.localFile.size',
  featuredImage___node___localFile___prettySize = 'featuredImage.node.localFile.prettySize',
  featuredImage___node___localFile___modifiedTime = 'featuredImage.node.localFile.modifiedTime',
  featuredImage___node___localFile___accessTime = 'featuredImage.node.localFile.accessTime',
  featuredImage___node___localFile___changeTime = 'featuredImage.node.localFile.changeTime',
  featuredImage___node___localFile___birthTime = 'featuredImage.node.localFile.birthTime',
  featuredImage___node___localFile___root = 'featuredImage.node.localFile.root',
  featuredImage___node___localFile___dir = 'featuredImage.node.localFile.dir',
  featuredImage___node___localFile___base = 'featuredImage.node.localFile.base',
  featuredImage___node___localFile___ext = 'featuredImage.node.localFile.ext',
  featuredImage___node___localFile___name = 'featuredImage.node.localFile.name',
  featuredImage___node___localFile___relativeDirectory = 'featuredImage.node.localFile.relativeDirectory',
  featuredImage___node___localFile___dev = 'featuredImage.node.localFile.dev',
  featuredImage___node___localFile___mode = 'featuredImage.node.localFile.mode',
  featuredImage___node___localFile___nlink = 'featuredImage.node.localFile.nlink',
  featuredImage___node___localFile___uid = 'featuredImage.node.localFile.uid',
  featuredImage___node___localFile___gid = 'featuredImage.node.localFile.gid',
  featuredImage___node___localFile___rdev = 'featuredImage.node.localFile.rdev',
  featuredImage___node___localFile___ino = 'featuredImage.node.localFile.ino',
  featuredImage___node___localFile___atimeMs = 'featuredImage.node.localFile.atimeMs',
  featuredImage___node___localFile___mtimeMs = 'featuredImage.node.localFile.mtimeMs',
  featuredImage___node___localFile___ctimeMs = 'featuredImage.node.localFile.ctimeMs',
  featuredImage___node___localFile___atime = 'featuredImage.node.localFile.atime',
  featuredImage___node___localFile___mtime = 'featuredImage.node.localFile.mtime',
  featuredImage___node___localFile___ctime = 'featuredImage.node.localFile.ctime',
  featuredImage___node___localFile___birthtime = 'featuredImage.node.localFile.birthtime',
  featuredImage___node___localFile___birthtimeMs = 'featuredImage.node.localFile.birthtimeMs',
  featuredImage___node___localFile___blksize = 'featuredImage.node.localFile.blksize',
  featuredImage___node___localFile___blocks = 'featuredImage.node.localFile.blocks',
  featuredImage___node___localFile___url = 'featuredImage.node.localFile.url',
  featuredImage___node___localFile___publicURL = 'featuredImage.node.localFile.publicURL',
  featuredImage___node___localFile___id = 'featuredImage.node.localFile.id',
  featuredImage___node___localFile___children = 'featuredImage.node.localFile.children',
  featuredImage___node___parent___id = 'featuredImage.node.parent.id',
  featuredImage___node___parent___children = 'featuredImage.node.parent.children',
  featuredImage___node___children = 'featuredImage.node.children',
  featuredImage___node___children___id = 'featuredImage.node.children.id',
  featuredImage___node___children___children = 'featuredImage.node.children.children',
  featuredImage___node___internal___content = 'featuredImage.node.internal.content',
  featuredImage___node___internal___contentDigest = 'featuredImage.node.internal.contentDigest',
  featuredImage___node___internal___description = 'featuredImage.node.internal.description',
  featuredImage___node___internal___fieldOwners = 'featuredImage.node.internal.fieldOwners',
  featuredImage___node___internal___ignoreType = 'featuredImage.node.internal.ignoreType',
  featuredImage___node___internal___mediaType = 'featuredImage.node.internal.mediaType',
  featuredImage___node___internal___owner = 'featuredImage.node.internal.owner',
  featuredImage___node___internal___type = 'featuredImage.node.internal.type',
  featuredImageDatabaseId = 'featuredImageDatabaseId',
  featuredImageId = 'featuredImageId',
  guid = 'guid',
  id = 'id',
  isFrontPage = 'isFrontPage',
  isPostsPage = 'isPostsPage',
  isRevision = 'isRevision',
  lastEditedBy___node___avatar___default = 'lastEditedBy.node.avatar.default',
  lastEditedBy___node___avatar___extraAttr = 'lastEditedBy.node.avatar.extraAttr',
  lastEditedBy___node___avatar___forceDefault = 'lastEditedBy.node.avatar.forceDefault',
  lastEditedBy___node___avatar___foundAvatar = 'lastEditedBy.node.avatar.foundAvatar',
  lastEditedBy___node___avatar___height = 'lastEditedBy.node.avatar.height',
  lastEditedBy___node___avatar___rating = 'lastEditedBy.node.avatar.rating',
  lastEditedBy___node___avatar___scheme = 'lastEditedBy.node.avatar.scheme',
  lastEditedBy___node___avatar___size = 'lastEditedBy.node.avatar.size',
  lastEditedBy___node___avatar___url = 'lastEditedBy.node.avatar.url',
  lastEditedBy___node___avatar___width = 'lastEditedBy.node.avatar.width',
  lastEditedBy___node___capKey = 'lastEditedBy.node.capKey',
  lastEditedBy___node___capabilities = 'lastEditedBy.node.capabilities',
  lastEditedBy___node___comments___nodes = 'lastEditedBy.node.comments.nodes',
  lastEditedBy___node___databaseId = 'lastEditedBy.node.databaseId',
  lastEditedBy___node___description = 'lastEditedBy.node.description',
  lastEditedBy___node___email = 'lastEditedBy.node.email',
  lastEditedBy___node___extraCapabilities = 'lastEditedBy.node.extraCapabilities',
  lastEditedBy___node___firstName = 'lastEditedBy.node.firstName',
  lastEditedBy___node___id = 'lastEditedBy.node.id',
  lastEditedBy___node___lastName = 'lastEditedBy.node.lastName',
  lastEditedBy___node___locale = 'lastEditedBy.node.locale',
  lastEditedBy___node___name = 'lastEditedBy.node.name',
  lastEditedBy___node___nicename = 'lastEditedBy.node.nicename',
  lastEditedBy___node___nickname = 'lastEditedBy.node.nickname',
  lastEditedBy___node___pages___nodes = 'lastEditedBy.node.pages.nodes',
  lastEditedBy___node___posts___nodes = 'lastEditedBy.node.posts.nodes',
  lastEditedBy___node___registeredDate = 'lastEditedBy.node.registeredDate',
  lastEditedBy___node___roles___nodes = 'lastEditedBy.node.roles.nodes',
  lastEditedBy___node___slug = 'lastEditedBy.node.slug',
  lastEditedBy___node___uri = 'lastEditedBy.node.uri',
  lastEditedBy___node___url = 'lastEditedBy.node.url',
  lastEditedBy___node___username = 'lastEditedBy.node.username',
  lastEditedBy___node___nodeType = 'lastEditedBy.node.nodeType',
  lastEditedBy___node___parent___id = 'lastEditedBy.node.parent.id',
  lastEditedBy___node___parent___children = 'lastEditedBy.node.parent.children',
  lastEditedBy___node___children = 'lastEditedBy.node.children',
  lastEditedBy___node___children___id = 'lastEditedBy.node.children.id',
  lastEditedBy___node___children___children = 'lastEditedBy.node.children.children',
  lastEditedBy___node___internal___content = 'lastEditedBy.node.internal.content',
  lastEditedBy___node___internal___contentDigest = 'lastEditedBy.node.internal.contentDigest',
  lastEditedBy___node___internal___description = 'lastEditedBy.node.internal.description',
  lastEditedBy___node___internal___fieldOwners = 'lastEditedBy.node.internal.fieldOwners',
  lastEditedBy___node___internal___ignoreType = 'lastEditedBy.node.internal.ignoreType',
  lastEditedBy___node___internal___mediaType = 'lastEditedBy.node.internal.mediaType',
  lastEditedBy___node___internal___owner = 'lastEditedBy.node.internal.owner',
  lastEditedBy___node___internal___type = 'lastEditedBy.node.internal.type',
  link = 'link',
  menuOrder = 'menuOrder',
  modified = 'modified',
  modifiedGmt = 'modifiedGmt',
  wpParent___node___databaseId = 'wpParent.node.databaseId',
  wpParent___node___date = 'wpParent.node.date',
  wpParent___node___dateGmt = 'wpParent.node.dateGmt',
  wpParent___node___desiredSlug = 'wpParent.node.desiredSlug',
  wpParent___node___enclosure = 'wpParent.node.enclosure',
  wpParent___node___guid = 'wpParent.node.guid',
  wpParent___node___id = 'wpParent.node.id',
  wpParent___node___link = 'wpParent.node.link',
  wpParent___node___modified = 'wpParent.node.modified',
  wpParent___node___modifiedGmt = 'wpParent.node.modifiedGmt',
  wpParent___node___slug = 'wpParent.node.slug',
  wpParent___node___status = 'wpParent.node.status',
  wpParent___node___template___templateName = 'wpParent.node.template.templateName',
  wpParent___node___uri = 'wpParent.node.uri',
  wpParent___node___nodeType = 'wpParent.node.nodeType',
  parentDatabaseId = 'parentDatabaseId',
  parentId = 'parentId',
  slug = 'slug',
  status = 'status',
  template___templateName = 'template.templateName',
  title = 'title',
  uri = 'uri',
  nodeType = 'nodeType',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type WpPageFilterInput = {
  readonly ancestors: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput>;
  readonly author: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  readonly authorDatabaseId: Maybe<IntQueryOperatorInput>;
  readonly authorId: Maybe<IDQueryOperatorInput>;
  readonly wpChildren: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput>;
  readonly commentCount: Maybe<IntQueryOperatorInput>;
  readonly commentStatus: Maybe<StringQueryOperatorInput>;
  readonly comments: Maybe<WpPageToCommentConnectionFilterInput>;
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentType: Maybe<WpPageToContentTypeConnectionEdgeFilterInput>;
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

type WpPageFilterListInput = {
  readonly elemMatch: Maybe<WpPageFilterInput>;
};

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

/** Connection between the page type and the Comment type */
type WpPageToCommentConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpComment>>>;
};

type WpPageToCommentConnectionFilterInput = {
  readonly nodes: Maybe<WpCommentFilterListInput>;
};

/** Connection between the page type and the ContentType type */
type WpPageToContentTypeConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpContentType>;
};

type WpPageToContentTypeConnectionEdgeFilterInput = {
  readonly node: Maybe<WpContentTypeFilterInput>;
};

/** The post type */
type WpPost = Node & WpNode & WpContentNode & WpDatabaseIdentifier & WpNodeWithTemplate & WpUniformResourceIdentifiable & WpNodeWithTitle & WpNodeWithContentEditor & WpNodeWithAuthor & WpNodeWithFeaturedImage & WpNodeWithExcerpt & WpNodeWithComments & WpNodeWithTrackbacks & WpNodeWithRevisions & WpMenuItemLinkable & {
  /** Connection between the NodeWithAuthor type and the User type */
  readonly author: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  readonly authorDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  readonly authorId: Maybe<Scalars['ID']>;
  /** Connection between the post type and the category type */
  readonly categories: Maybe<WpPostToCategoryConnection>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for compatibility.
   */
  readonly commentCount: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  readonly commentStatus: Maybe<Scalars['String']>;
  /** Connection between the post type and the Comment type */
  readonly comments: Maybe<WpPostToCommentConnection>;
  readonly content: Scalars['String'];
  /** Connection between the post type and the ContentType type */
  readonly contentType: Maybe<WpPostToContentTypeConnectionEdge>;
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
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
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
  /**
   * The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  readonly modified: Maybe<Scalars['Date']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
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

enum WpPostFieldsEnum {
  author___node___avatar___default = 'author.node.avatar.default',
  author___node___avatar___extraAttr = 'author.node.avatar.extraAttr',
  author___node___avatar___forceDefault = 'author.node.avatar.forceDefault',
  author___node___avatar___foundAvatar = 'author.node.avatar.foundAvatar',
  author___node___avatar___height = 'author.node.avatar.height',
  author___node___avatar___rating = 'author.node.avatar.rating',
  author___node___avatar___scheme = 'author.node.avatar.scheme',
  author___node___avatar___size = 'author.node.avatar.size',
  author___node___avatar___url = 'author.node.avatar.url',
  author___node___avatar___width = 'author.node.avatar.width',
  author___node___capKey = 'author.node.capKey',
  author___node___capabilities = 'author.node.capabilities',
  author___node___comments___nodes = 'author.node.comments.nodes',
  author___node___databaseId = 'author.node.databaseId',
  author___node___description = 'author.node.description',
  author___node___email = 'author.node.email',
  author___node___extraCapabilities = 'author.node.extraCapabilities',
  author___node___firstName = 'author.node.firstName',
  author___node___id = 'author.node.id',
  author___node___lastName = 'author.node.lastName',
  author___node___locale = 'author.node.locale',
  author___node___name = 'author.node.name',
  author___node___nicename = 'author.node.nicename',
  author___node___nickname = 'author.node.nickname',
  author___node___pages___nodes = 'author.node.pages.nodes',
  author___node___posts___nodes = 'author.node.posts.nodes',
  author___node___registeredDate = 'author.node.registeredDate',
  author___node___roles___nodes = 'author.node.roles.nodes',
  author___node___slug = 'author.node.slug',
  author___node___uri = 'author.node.uri',
  author___node___url = 'author.node.url',
  author___node___username = 'author.node.username',
  author___node___nodeType = 'author.node.nodeType',
  author___node___parent___id = 'author.node.parent.id',
  author___node___parent___children = 'author.node.parent.children',
  author___node___children = 'author.node.children',
  author___node___children___id = 'author.node.children.id',
  author___node___children___children = 'author.node.children.children',
  author___node___internal___content = 'author.node.internal.content',
  author___node___internal___contentDigest = 'author.node.internal.contentDigest',
  author___node___internal___description = 'author.node.internal.description',
  author___node___internal___fieldOwners = 'author.node.internal.fieldOwners',
  author___node___internal___ignoreType = 'author.node.internal.ignoreType',
  author___node___internal___mediaType = 'author.node.internal.mediaType',
  author___node___internal___owner = 'author.node.internal.owner',
  author___node___internal___type = 'author.node.internal.type',
  authorDatabaseId = 'authorDatabaseId',
  authorId = 'authorId',
  categories___nodes = 'categories.nodes',
  categories___nodes___ancestors___nodes = 'categories.nodes.ancestors.nodes',
  categories___nodes___wpChildren___nodes = 'categories.nodes.wpChildren.nodes',
  categories___nodes___contentNodes___nodes = 'categories.nodes.contentNodes.nodes',
  categories___nodes___count = 'categories.nodes.count',
  categories___nodes___databaseId = 'categories.nodes.databaseId',
  categories___nodes___description = 'categories.nodes.description',
  categories___nodes___id = 'categories.nodes.id',
  categories___nodes___link = 'categories.nodes.link',
  categories___nodes___name = 'categories.nodes.name',
  categories___nodes___parentDatabaseId = 'categories.nodes.parentDatabaseId',
  categories___nodes___parentId = 'categories.nodes.parentId',
  categories___nodes___posts___nodes = 'categories.nodes.posts.nodes',
  categories___nodes___slug = 'categories.nodes.slug',
  categories___nodes___termGroupId = 'categories.nodes.termGroupId',
  categories___nodes___termTaxonomyId = 'categories.nodes.termTaxonomyId',
  categories___nodes___uri = 'categories.nodes.uri',
  categories___nodes___nodeType = 'categories.nodes.nodeType',
  categories___nodes___parent___id = 'categories.nodes.parent.id',
  categories___nodes___parent___children = 'categories.nodes.parent.children',
  categories___nodes___children = 'categories.nodes.children',
  categories___nodes___children___id = 'categories.nodes.children.id',
  categories___nodes___children___children = 'categories.nodes.children.children',
  categories___nodes___internal___content = 'categories.nodes.internal.content',
  categories___nodes___internal___contentDigest = 'categories.nodes.internal.contentDigest',
  categories___nodes___internal___description = 'categories.nodes.internal.description',
  categories___nodes___internal___fieldOwners = 'categories.nodes.internal.fieldOwners',
  categories___nodes___internal___ignoreType = 'categories.nodes.internal.ignoreType',
  categories___nodes___internal___mediaType = 'categories.nodes.internal.mediaType',
  categories___nodes___internal___owner = 'categories.nodes.internal.owner',
  categories___nodes___internal___type = 'categories.nodes.internal.type',
  commentCount = 'commentCount',
  commentStatus = 'commentStatus',
  comments___nodes = 'comments.nodes',
  comments___nodes___agent = 'comments.nodes.agent',
  comments___nodes___approved = 'comments.nodes.approved',
  comments___nodes___authorIp = 'comments.nodes.authorIp',
  comments___nodes___content = 'comments.nodes.content',
  comments___nodes___databaseId = 'comments.nodes.databaseId',
  comments___nodes___date = 'comments.nodes.date',
  comments___nodes___dateGmt = 'comments.nodes.dateGmt',
  comments___nodes___id = 'comments.nodes.id',
  comments___nodes___karma = 'comments.nodes.karma',
  comments___nodes___parentDatabaseId = 'comments.nodes.parentDatabaseId',
  comments___nodes___parentId = 'comments.nodes.parentId',
  comments___nodes___replies___nodes = 'comments.nodes.replies.nodes',
  comments___nodes___type = 'comments.nodes.type',
  comments___nodes___nodeType = 'comments.nodes.nodeType',
  comments___nodes___parent___id = 'comments.nodes.parent.id',
  comments___nodes___parent___children = 'comments.nodes.parent.children',
  comments___nodes___children = 'comments.nodes.children',
  comments___nodes___children___id = 'comments.nodes.children.id',
  comments___nodes___children___children = 'comments.nodes.children.children',
  comments___nodes___internal___content = 'comments.nodes.internal.content',
  comments___nodes___internal___contentDigest = 'comments.nodes.internal.contentDigest',
  comments___nodes___internal___description = 'comments.nodes.internal.description',
  comments___nodes___internal___fieldOwners = 'comments.nodes.internal.fieldOwners',
  comments___nodes___internal___ignoreType = 'comments.nodes.internal.ignoreType',
  comments___nodes___internal___mediaType = 'comments.nodes.internal.mediaType',
  comments___nodes___internal___owner = 'comments.nodes.internal.owner',
  comments___nodes___internal___type = 'comments.nodes.internal.type',
  content = 'content',
  contentType___node___archivePath = 'contentType.node.archivePath',
  contentType___node___canExport = 'contentType.node.canExport',
  contentType___node___connectedTaxonomies___nodes = 'contentType.node.connectedTaxonomies.nodes',
  contentType___node___contentNodes___nodes = 'contentType.node.contentNodes.nodes',
  contentType___node___deleteWithUser = 'contentType.node.deleteWithUser',
  contentType___node___description = 'contentType.node.description',
  contentType___node___excludeFromSearch = 'contentType.node.excludeFromSearch',
  contentType___node___graphqlPluralName = 'contentType.node.graphqlPluralName',
  contentType___node___graphqlSingleName = 'contentType.node.graphqlSingleName',
  contentType___node___hasArchive = 'contentType.node.hasArchive',
  contentType___node___hierarchical = 'contentType.node.hierarchical',
  contentType___node___id = 'contentType.node.id',
  contentType___node___isFrontPage = 'contentType.node.isFrontPage',
  contentType___node___isPostsPage = 'contentType.node.isPostsPage',
  contentType___node___label = 'contentType.node.label',
  contentType___node___labels___addNew = 'contentType.node.labels.addNew',
  contentType___node___labels___addNewItem = 'contentType.node.labels.addNewItem',
  contentType___node___labels___allItems = 'contentType.node.labels.allItems',
  contentType___node___labels___archives = 'contentType.node.labels.archives',
  contentType___node___labels___attributes = 'contentType.node.labels.attributes',
  contentType___node___labels___editItem = 'contentType.node.labels.editItem',
  contentType___node___labels___featuredImage = 'contentType.node.labels.featuredImage',
  contentType___node___labels___filterItemsList = 'contentType.node.labels.filterItemsList',
  contentType___node___labels___insertIntoItem = 'contentType.node.labels.insertIntoItem',
  contentType___node___labels___itemsList = 'contentType.node.labels.itemsList',
  contentType___node___labels___itemsListNavigation = 'contentType.node.labels.itemsListNavigation',
  contentType___node___labels___menuName = 'contentType.node.labels.menuName',
  contentType___node___labels___name = 'contentType.node.labels.name',
  contentType___node___labels___newItem = 'contentType.node.labels.newItem',
  contentType___node___labels___notFound = 'contentType.node.labels.notFound',
  contentType___node___labels___notFoundInTrash = 'contentType.node.labels.notFoundInTrash',
  contentType___node___labels___parentItemColon = 'contentType.node.labels.parentItemColon',
  contentType___node___labels___removeFeaturedImage = 'contentType.node.labels.removeFeaturedImage',
  contentType___node___labels___searchItems = 'contentType.node.labels.searchItems',
  contentType___node___labels___setFeaturedImage = 'contentType.node.labels.setFeaturedImage',
  contentType___node___labels___singularName = 'contentType.node.labels.singularName',
  contentType___node___labels___uploadedToThisItem = 'contentType.node.labels.uploadedToThisItem',
  contentType___node___labels___useFeaturedImage = 'contentType.node.labels.useFeaturedImage',
  contentType___node___labels___viewItem = 'contentType.node.labels.viewItem',
  contentType___node___labels___viewItems = 'contentType.node.labels.viewItems',
  contentType___node___menuIcon = 'contentType.node.menuIcon',
  contentType___node___menuPosition = 'contentType.node.menuPosition',
  contentType___node___name = 'contentType.node.name',
  contentType___node___public = 'contentType.node.public',
  contentType___node___publiclyQueryable = 'contentType.node.publiclyQueryable',
  contentType___node___restBase = 'contentType.node.restBase',
  contentType___node___restControllerClass = 'contentType.node.restControllerClass',
  contentType___node___showInAdminBar = 'contentType.node.showInAdminBar',
  contentType___node___showInGraphql = 'contentType.node.showInGraphql',
  contentType___node___showInMenu = 'contentType.node.showInMenu',
  contentType___node___showInNavMenus = 'contentType.node.showInNavMenus',
  contentType___node___showInRest = 'contentType.node.showInRest',
  contentType___node___showUi = 'contentType.node.showUi',
  contentType___node___uri = 'contentType.node.uri',
  contentType___node___nodeType = 'contentType.node.nodeType',
  contentType___node___parent___id = 'contentType.node.parent.id',
  contentType___node___parent___children = 'contentType.node.parent.children',
  contentType___node___children = 'contentType.node.children',
  contentType___node___children___id = 'contentType.node.children.id',
  contentType___node___children___children = 'contentType.node.children.children',
  contentType___node___internal___content = 'contentType.node.internal.content',
  contentType___node___internal___contentDigest = 'contentType.node.internal.contentDigest',
  contentType___node___internal___description = 'contentType.node.internal.description',
  contentType___node___internal___fieldOwners = 'contentType.node.internal.fieldOwners',
  contentType___node___internal___ignoreType = 'contentType.node.internal.ignoreType',
  contentType___node___internal___mediaType = 'contentType.node.internal.mediaType',
  contentType___node___internal___owner = 'contentType.node.internal.owner',
  contentType___node___internal___type = 'contentType.node.internal.type',
  databaseId = 'databaseId',
  date = 'date',
  dateGmt = 'dateGmt',
  desiredSlug = 'desiredSlug',
  enclosure = 'enclosure',
  excerpt = 'excerpt',
  featuredImage___node___altText = 'featuredImage.node.altText',
  featuredImage___node___ancestors___nodes = 'featuredImage.node.ancestors.nodes',
  featuredImage___node___authorDatabaseId = 'featuredImage.node.authorDatabaseId',
  featuredImage___node___authorId = 'featuredImage.node.authorId',
  featuredImage___node___caption = 'featuredImage.node.caption',
  featuredImage___node___wpChildren___nodes = 'featuredImage.node.wpChildren.nodes',
  featuredImage___node___commentCount = 'featuredImage.node.commentCount',
  featuredImage___node___commentStatus = 'featuredImage.node.commentStatus',
  featuredImage___node___comments___nodes = 'featuredImage.node.comments.nodes',
  featuredImage___node___databaseId = 'featuredImage.node.databaseId',
  featuredImage___node___date = 'featuredImage.node.date',
  featuredImage___node___dateGmt = 'featuredImage.node.dateGmt',
  featuredImage___node___description = 'featuredImage.node.description',
  featuredImage___node___desiredSlug = 'featuredImage.node.desiredSlug',
  featuredImage___node___enclosure = 'featuredImage.node.enclosure',
  featuredImage___node___fileSize = 'featuredImage.node.fileSize',
  featuredImage___node___guid = 'featuredImage.node.guid',
  featuredImage___node___id = 'featuredImage.node.id',
  featuredImage___node___link = 'featuredImage.node.link',
  featuredImage___node___mediaDetails___file = 'featuredImage.node.mediaDetails.file',
  featuredImage___node___mediaDetails___height = 'featuredImage.node.mediaDetails.height',
  featuredImage___node___mediaDetails___sizes = 'featuredImage.node.mediaDetails.sizes',
  featuredImage___node___mediaDetails___width = 'featuredImage.node.mediaDetails.width',
  featuredImage___node___mediaItemUrl = 'featuredImage.node.mediaItemUrl',
  featuredImage___node___mediaType = 'featuredImage.node.mediaType',
  featuredImage___node___mimeType = 'featuredImage.node.mimeType',
  featuredImage___node___modified = 'featuredImage.node.modified',
  featuredImage___node___modifiedGmt = 'featuredImage.node.modifiedGmt',
  featuredImage___node___parentDatabaseId = 'featuredImage.node.parentDatabaseId',
  featuredImage___node___parentId = 'featuredImage.node.parentId',
  featuredImage___node___sizes = 'featuredImage.node.sizes',
  featuredImage___node___slug = 'featuredImage.node.slug',
  featuredImage___node___sourceUrl = 'featuredImage.node.sourceUrl',
  featuredImage___node___srcSet = 'featuredImage.node.srcSet',
  featuredImage___node___status = 'featuredImage.node.status',
  featuredImage___node___template___templateName = 'featuredImage.node.template.templateName',
  featuredImage___node___title = 'featuredImage.node.title',
  featuredImage___node___uri = 'featuredImage.node.uri',
  featuredImage___node___nodeType = 'featuredImage.node.nodeType',
  featuredImage___node___remoteFile___sourceInstanceName = 'featuredImage.node.remoteFile.sourceInstanceName',
  featuredImage___node___remoteFile___absolutePath = 'featuredImage.node.remoteFile.absolutePath',
  featuredImage___node___remoteFile___relativePath = 'featuredImage.node.remoteFile.relativePath',
  featuredImage___node___remoteFile___extension = 'featuredImage.node.remoteFile.extension',
  featuredImage___node___remoteFile___size = 'featuredImage.node.remoteFile.size',
  featuredImage___node___remoteFile___prettySize = 'featuredImage.node.remoteFile.prettySize',
  featuredImage___node___remoteFile___modifiedTime = 'featuredImage.node.remoteFile.modifiedTime',
  featuredImage___node___remoteFile___accessTime = 'featuredImage.node.remoteFile.accessTime',
  featuredImage___node___remoteFile___changeTime = 'featuredImage.node.remoteFile.changeTime',
  featuredImage___node___remoteFile___birthTime = 'featuredImage.node.remoteFile.birthTime',
  featuredImage___node___remoteFile___root = 'featuredImage.node.remoteFile.root',
  featuredImage___node___remoteFile___dir = 'featuredImage.node.remoteFile.dir',
  featuredImage___node___remoteFile___base = 'featuredImage.node.remoteFile.base',
  featuredImage___node___remoteFile___ext = 'featuredImage.node.remoteFile.ext',
  featuredImage___node___remoteFile___name = 'featuredImage.node.remoteFile.name',
  featuredImage___node___remoteFile___relativeDirectory = 'featuredImage.node.remoteFile.relativeDirectory',
  featuredImage___node___remoteFile___dev = 'featuredImage.node.remoteFile.dev',
  featuredImage___node___remoteFile___mode = 'featuredImage.node.remoteFile.mode',
  featuredImage___node___remoteFile___nlink = 'featuredImage.node.remoteFile.nlink',
  featuredImage___node___remoteFile___uid = 'featuredImage.node.remoteFile.uid',
  featuredImage___node___remoteFile___gid = 'featuredImage.node.remoteFile.gid',
  featuredImage___node___remoteFile___rdev = 'featuredImage.node.remoteFile.rdev',
  featuredImage___node___remoteFile___ino = 'featuredImage.node.remoteFile.ino',
  featuredImage___node___remoteFile___atimeMs = 'featuredImage.node.remoteFile.atimeMs',
  featuredImage___node___remoteFile___mtimeMs = 'featuredImage.node.remoteFile.mtimeMs',
  featuredImage___node___remoteFile___ctimeMs = 'featuredImage.node.remoteFile.ctimeMs',
  featuredImage___node___remoteFile___atime = 'featuredImage.node.remoteFile.atime',
  featuredImage___node___remoteFile___mtime = 'featuredImage.node.remoteFile.mtime',
  featuredImage___node___remoteFile___ctime = 'featuredImage.node.remoteFile.ctime',
  featuredImage___node___remoteFile___birthtime = 'featuredImage.node.remoteFile.birthtime',
  featuredImage___node___remoteFile___birthtimeMs = 'featuredImage.node.remoteFile.birthtimeMs',
  featuredImage___node___remoteFile___blksize = 'featuredImage.node.remoteFile.blksize',
  featuredImage___node___remoteFile___blocks = 'featuredImage.node.remoteFile.blocks',
  featuredImage___node___remoteFile___url = 'featuredImage.node.remoteFile.url',
  featuredImage___node___remoteFile___publicURL = 'featuredImage.node.remoteFile.publicURL',
  featuredImage___node___remoteFile___id = 'featuredImage.node.remoteFile.id',
  featuredImage___node___remoteFile___children = 'featuredImage.node.remoteFile.children',
  featuredImage___node___localFile___sourceInstanceName = 'featuredImage.node.localFile.sourceInstanceName',
  featuredImage___node___localFile___absolutePath = 'featuredImage.node.localFile.absolutePath',
  featuredImage___node___localFile___relativePath = 'featuredImage.node.localFile.relativePath',
  featuredImage___node___localFile___extension = 'featuredImage.node.localFile.extension',
  featuredImage___node___localFile___size = 'featuredImage.node.localFile.size',
  featuredImage___node___localFile___prettySize = 'featuredImage.node.localFile.prettySize',
  featuredImage___node___localFile___modifiedTime = 'featuredImage.node.localFile.modifiedTime',
  featuredImage___node___localFile___accessTime = 'featuredImage.node.localFile.accessTime',
  featuredImage___node___localFile___changeTime = 'featuredImage.node.localFile.changeTime',
  featuredImage___node___localFile___birthTime = 'featuredImage.node.localFile.birthTime',
  featuredImage___node___localFile___root = 'featuredImage.node.localFile.root',
  featuredImage___node___localFile___dir = 'featuredImage.node.localFile.dir',
  featuredImage___node___localFile___base = 'featuredImage.node.localFile.base',
  featuredImage___node___localFile___ext = 'featuredImage.node.localFile.ext',
  featuredImage___node___localFile___name = 'featuredImage.node.localFile.name',
  featuredImage___node___localFile___relativeDirectory = 'featuredImage.node.localFile.relativeDirectory',
  featuredImage___node___localFile___dev = 'featuredImage.node.localFile.dev',
  featuredImage___node___localFile___mode = 'featuredImage.node.localFile.mode',
  featuredImage___node___localFile___nlink = 'featuredImage.node.localFile.nlink',
  featuredImage___node___localFile___uid = 'featuredImage.node.localFile.uid',
  featuredImage___node___localFile___gid = 'featuredImage.node.localFile.gid',
  featuredImage___node___localFile___rdev = 'featuredImage.node.localFile.rdev',
  featuredImage___node___localFile___ino = 'featuredImage.node.localFile.ino',
  featuredImage___node___localFile___atimeMs = 'featuredImage.node.localFile.atimeMs',
  featuredImage___node___localFile___mtimeMs = 'featuredImage.node.localFile.mtimeMs',
  featuredImage___node___localFile___ctimeMs = 'featuredImage.node.localFile.ctimeMs',
  featuredImage___node___localFile___atime = 'featuredImage.node.localFile.atime',
  featuredImage___node___localFile___mtime = 'featuredImage.node.localFile.mtime',
  featuredImage___node___localFile___ctime = 'featuredImage.node.localFile.ctime',
  featuredImage___node___localFile___birthtime = 'featuredImage.node.localFile.birthtime',
  featuredImage___node___localFile___birthtimeMs = 'featuredImage.node.localFile.birthtimeMs',
  featuredImage___node___localFile___blksize = 'featuredImage.node.localFile.blksize',
  featuredImage___node___localFile___blocks = 'featuredImage.node.localFile.blocks',
  featuredImage___node___localFile___url = 'featuredImage.node.localFile.url',
  featuredImage___node___localFile___publicURL = 'featuredImage.node.localFile.publicURL',
  featuredImage___node___localFile___id = 'featuredImage.node.localFile.id',
  featuredImage___node___localFile___children = 'featuredImage.node.localFile.children',
  featuredImage___node___parent___id = 'featuredImage.node.parent.id',
  featuredImage___node___parent___children = 'featuredImage.node.parent.children',
  featuredImage___node___children = 'featuredImage.node.children',
  featuredImage___node___children___id = 'featuredImage.node.children.id',
  featuredImage___node___children___children = 'featuredImage.node.children.children',
  featuredImage___node___internal___content = 'featuredImage.node.internal.content',
  featuredImage___node___internal___contentDigest = 'featuredImage.node.internal.contentDigest',
  featuredImage___node___internal___description = 'featuredImage.node.internal.description',
  featuredImage___node___internal___fieldOwners = 'featuredImage.node.internal.fieldOwners',
  featuredImage___node___internal___ignoreType = 'featuredImage.node.internal.ignoreType',
  featuredImage___node___internal___mediaType = 'featuredImage.node.internal.mediaType',
  featuredImage___node___internal___owner = 'featuredImage.node.internal.owner',
  featuredImage___node___internal___type = 'featuredImage.node.internal.type',
  featuredImageDatabaseId = 'featuredImageDatabaseId',
  featuredImageId = 'featuredImageId',
  guid = 'guid',
  id = 'id',
  isRevision = 'isRevision',
  isSticky = 'isSticky',
  lastEditedBy___node___avatar___default = 'lastEditedBy.node.avatar.default',
  lastEditedBy___node___avatar___extraAttr = 'lastEditedBy.node.avatar.extraAttr',
  lastEditedBy___node___avatar___forceDefault = 'lastEditedBy.node.avatar.forceDefault',
  lastEditedBy___node___avatar___foundAvatar = 'lastEditedBy.node.avatar.foundAvatar',
  lastEditedBy___node___avatar___height = 'lastEditedBy.node.avatar.height',
  lastEditedBy___node___avatar___rating = 'lastEditedBy.node.avatar.rating',
  lastEditedBy___node___avatar___scheme = 'lastEditedBy.node.avatar.scheme',
  lastEditedBy___node___avatar___size = 'lastEditedBy.node.avatar.size',
  lastEditedBy___node___avatar___url = 'lastEditedBy.node.avatar.url',
  lastEditedBy___node___avatar___width = 'lastEditedBy.node.avatar.width',
  lastEditedBy___node___capKey = 'lastEditedBy.node.capKey',
  lastEditedBy___node___capabilities = 'lastEditedBy.node.capabilities',
  lastEditedBy___node___comments___nodes = 'lastEditedBy.node.comments.nodes',
  lastEditedBy___node___databaseId = 'lastEditedBy.node.databaseId',
  lastEditedBy___node___description = 'lastEditedBy.node.description',
  lastEditedBy___node___email = 'lastEditedBy.node.email',
  lastEditedBy___node___extraCapabilities = 'lastEditedBy.node.extraCapabilities',
  lastEditedBy___node___firstName = 'lastEditedBy.node.firstName',
  lastEditedBy___node___id = 'lastEditedBy.node.id',
  lastEditedBy___node___lastName = 'lastEditedBy.node.lastName',
  lastEditedBy___node___locale = 'lastEditedBy.node.locale',
  lastEditedBy___node___name = 'lastEditedBy.node.name',
  lastEditedBy___node___nicename = 'lastEditedBy.node.nicename',
  lastEditedBy___node___nickname = 'lastEditedBy.node.nickname',
  lastEditedBy___node___pages___nodes = 'lastEditedBy.node.pages.nodes',
  lastEditedBy___node___posts___nodes = 'lastEditedBy.node.posts.nodes',
  lastEditedBy___node___registeredDate = 'lastEditedBy.node.registeredDate',
  lastEditedBy___node___roles___nodes = 'lastEditedBy.node.roles.nodes',
  lastEditedBy___node___slug = 'lastEditedBy.node.slug',
  lastEditedBy___node___uri = 'lastEditedBy.node.uri',
  lastEditedBy___node___url = 'lastEditedBy.node.url',
  lastEditedBy___node___username = 'lastEditedBy.node.username',
  lastEditedBy___node___nodeType = 'lastEditedBy.node.nodeType',
  lastEditedBy___node___parent___id = 'lastEditedBy.node.parent.id',
  lastEditedBy___node___parent___children = 'lastEditedBy.node.parent.children',
  lastEditedBy___node___children = 'lastEditedBy.node.children',
  lastEditedBy___node___children___id = 'lastEditedBy.node.children.id',
  lastEditedBy___node___children___children = 'lastEditedBy.node.children.children',
  lastEditedBy___node___internal___content = 'lastEditedBy.node.internal.content',
  lastEditedBy___node___internal___contentDigest = 'lastEditedBy.node.internal.contentDigest',
  lastEditedBy___node___internal___description = 'lastEditedBy.node.internal.description',
  lastEditedBy___node___internal___fieldOwners = 'lastEditedBy.node.internal.fieldOwners',
  lastEditedBy___node___internal___ignoreType = 'lastEditedBy.node.internal.ignoreType',
  lastEditedBy___node___internal___mediaType = 'lastEditedBy.node.internal.mediaType',
  lastEditedBy___node___internal___owner = 'lastEditedBy.node.internal.owner',
  lastEditedBy___node___internal___type = 'lastEditedBy.node.internal.type',
  link = 'link',
  modified = 'modified',
  modifiedGmt = 'modifiedGmt',
  pingStatus = 'pingStatus',
  pinged = 'pinged',
  postFormats___nodes = 'postFormats.nodes',
  postFormats___nodes___contentNodes___nodes = 'postFormats.nodes.contentNodes.nodes',
  postFormats___nodes___count = 'postFormats.nodes.count',
  postFormats___nodes___databaseId = 'postFormats.nodes.databaseId',
  postFormats___nodes___description = 'postFormats.nodes.description',
  postFormats___nodes___id = 'postFormats.nodes.id',
  postFormats___nodes___link = 'postFormats.nodes.link',
  postFormats___nodes___name = 'postFormats.nodes.name',
  postFormats___nodes___posts___nodes = 'postFormats.nodes.posts.nodes',
  postFormats___nodes___slug = 'postFormats.nodes.slug',
  postFormats___nodes___termGroupId = 'postFormats.nodes.termGroupId',
  postFormats___nodes___termTaxonomyId = 'postFormats.nodes.termTaxonomyId',
  postFormats___nodes___uri = 'postFormats.nodes.uri',
  postFormats___nodes___nodeType = 'postFormats.nodes.nodeType',
  postFormats___nodes___parent___id = 'postFormats.nodes.parent.id',
  postFormats___nodes___parent___children = 'postFormats.nodes.parent.children',
  postFormats___nodes___children = 'postFormats.nodes.children',
  postFormats___nodes___children___id = 'postFormats.nodes.children.id',
  postFormats___nodes___children___children = 'postFormats.nodes.children.children',
  postFormats___nodes___internal___content = 'postFormats.nodes.internal.content',
  postFormats___nodes___internal___contentDigest = 'postFormats.nodes.internal.contentDigest',
  postFormats___nodes___internal___description = 'postFormats.nodes.internal.description',
  postFormats___nodes___internal___fieldOwners = 'postFormats.nodes.internal.fieldOwners',
  postFormats___nodes___internal___ignoreType = 'postFormats.nodes.internal.ignoreType',
  postFormats___nodes___internal___mediaType = 'postFormats.nodes.internal.mediaType',
  postFormats___nodes___internal___owner = 'postFormats.nodes.internal.owner',
  postFormats___nodes___internal___type = 'postFormats.nodes.internal.type',
  slug = 'slug',
  status = 'status',
  tags___nodes = 'tags.nodes',
  tags___nodes___contentNodes___nodes = 'tags.nodes.contentNodes.nodes',
  tags___nodes___count = 'tags.nodes.count',
  tags___nodes___databaseId = 'tags.nodes.databaseId',
  tags___nodes___description = 'tags.nodes.description',
  tags___nodes___id = 'tags.nodes.id',
  tags___nodes___link = 'tags.nodes.link',
  tags___nodes___name = 'tags.nodes.name',
  tags___nodes___posts___nodes = 'tags.nodes.posts.nodes',
  tags___nodes___slug = 'tags.nodes.slug',
  tags___nodes___termGroupId = 'tags.nodes.termGroupId',
  tags___nodes___termTaxonomyId = 'tags.nodes.termTaxonomyId',
  tags___nodes___uri = 'tags.nodes.uri',
  tags___nodes___nodeType = 'tags.nodes.nodeType',
  tags___nodes___parent___id = 'tags.nodes.parent.id',
  tags___nodes___parent___children = 'tags.nodes.parent.children',
  tags___nodes___children = 'tags.nodes.children',
  tags___nodes___children___id = 'tags.nodes.children.id',
  tags___nodes___children___children = 'tags.nodes.children.children',
  tags___nodes___internal___content = 'tags.nodes.internal.content',
  tags___nodes___internal___contentDigest = 'tags.nodes.internal.contentDigest',
  tags___nodes___internal___description = 'tags.nodes.internal.description',
  tags___nodes___internal___fieldOwners = 'tags.nodes.internal.fieldOwners',
  tags___nodes___internal___ignoreType = 'tags.nodes.internal.ignoreType',
  tags___nodes___internal___mediaType = 'tags.nodes.internal.mediaType',
  tags___nodes___internal___owner = 'tags.nodes.internal.owner',
  tags___nodes___internal___type = 'tags.nodes.internal.type',
  template___templateName = 'template.templateName',
  terms___nodes = 'terms.nodes',
  terms___nodes___count = 'terms.nodes.count',
  terms___nodes___databaseId = 'terms.nodes.databaseId',
  terms___nodes___description = 'terms.nodes.description',
  terms___nodes___id = 'terms.nodes.id',
  terms___nodes___link = 'terms.nodes.link',
  terms___nodes___name = 'terms.nodes.name',
  terms___nodes___slug = 'terms.nodes.slug',
  terms___nodes___termGroupId = 'terms.nodes.termGroupId',
  terms___nodes___termTaxonomyId = 'terms.nodes.termTaxonomyId',
  terms___nodes___uri = 'terms.nodes.uri',
  terms___nodes___nodeType = 'terms.nodes.nodeType',
  title = 'title',
  toPing = 'toPing',
  uri = 'uri',
  nodeType = 'nodeType',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type WpPostFilterInput = {
  readonly author: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  readonly authorDatabaseId: Maybe<IntQueryOperatorInput>;
  readonly authorId: Maybe<IDQueryOperatorInput>;
  readonly categories: Maybe<WpPostToCategoryConnectionFilterInput>;
  readonly commentCount: Maybe<IntQueryOperatorInput>;
  readonly commentStatus: Maybe<StringQueryOperatorInput>;
  readonly comments: Maybe<WpPostToCommentConnectionFilterInput>;
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentType: Maybe<WpPostToContentTypeConnectionEdgeFilterInput>;
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

type WpPostFilterListInput = {
  readonly elemMatch: Maybe<WpPostFilterInput>;
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

enum WpPostFormatFieldsEnum {
  contentNodes___nodes = 'contentNodes.nodes',
  contentNodes___nodes___databaseId = 'contentNodes.nodes.databaseId',
  contentNodes___nodes___date = 'contentNodes.nodes.date',
  contentNodes___nodes___dateGmt = 'contentNodes.nodes.dateGmt',
  contentNodes___nodes___desiredSlug = 'contentNodes.nodes.desiredSlug',
  contentNodes___nodes___enclosure = 'contentNodes.nodes.enclosure',
  contentNodes___nodes___guid = 'contentNodes.nodes.guid',
  contentNodes___nodes___id = 'contentNodes.nodes.id',
  contentNodes___nodes___link = 'contentNodes.nodes.link',
  contentNodes___nodes___modified = 'contentNodes.nodes.modified',
  contentNodes___nodes___modifiedGmt = 'contentNodes.nodes.modifiedGmt',
  contentNodes___nodes___slug = 'contentNodes.nodes.slug',
  contentNodes___nodes___status = 'contentNodes.nodes.status',
  contentNodes___nodes___template___templateName = 'contentNodes.nodes.template.templateName',
  contentNodes___nodes___uri = 'contentNodes.nodes.uri',
  contentNodes___nodes___nodeType = 'contentNodes.nodes.nodeType',
  count = 'count',
  databaseId = 'databaseId',
  description = 'description',
  id = 'id',
  link = 'link',
  name = 'name',
  posts___nodes = 'posts.nodes',
  posts___nodes___authorDatabaseId = 'posts.nodes.authorDatabaseId',
  posts___nodes___authorId = 'posts.nodes.authorId',
  posts___nodes___categories___nodes = 'posts.nodes.categories.nodes',
  posts___nodes___commentCount = 'posts.nodes.commentCount',
  posts___nodes___commentStatus = 'posts.nodes.commentStatus',
  posts___nodes___comments___nodes = 'posts.nodes.comments.nodes',
  posts___nodes___content = 'posts.nodes.content',
  posts___nodes___databaseId = 'posts.nodes.databaseId',
  posts___nodes___date = 'posts.nodes.date',
  posts___nodes___dateGmt = 'posts.nodes.dateGmt',
  posts___nodes___desiredSlug = 'posts.nodes.desiredSlug',
  posts___nodes___enclosure = 'posts.nodes.enclosure',
  posts___nodes___excerpt = 'posts.nodes.excerpt',
  posts___nodes___featuredImageDatabaseId = 'posts.nodes.featuredImageDatabaseId',
  posts___nodes___featuredImageId = 'posts.nodes.featuredImageId',
  posts___nodes___guid = 'posts.nodes.guid',
  posts___nodes___id = 'posts.nodes.id',
  posts___nodes___isRevision = 'posts.nodes.isRevision',
  posts___nodes___isSticky = 'posts.nodes.isSticky',
  posts___nodes___link = 'posts.nodes.link',
  posts___nodes___modified = 'posts.nodes.modified',
  posts___nodes___modifiedGmt = 'posts.nodes.modifiedGmt',
  posts___nodes___pingStatus = 'posts.nodes.pingStatus',
  posts___nodes___pinged = 'posts.nodes.pinged',
  posts___nodes___postFormats___nodes = 'posts.nodes.postFormats.nodes',
  posts___nodes___slug = 'posts.nodes.slug',
  posts___nodes___status = 'posts.nodes.status',
  posts___nodes___tags___nodes = 'posts.nodes.tags.nodes',
  posts___nodes___template___templateName = 'posts.nodes.template.templateName',
  posts___nodes___terms___nodes = 'posts.nodes.terms.nodes',
  posts___nodes___title = 'posts.nodes.title',
  posts___nodes___toPing = 'posts.nodes.toPing',
  posts___nodes___uri = 'posts.nodes.uri',
  posts___nodes___nodeType = 'posts.nodes.nodeType',
  posts___nodes___parent___id = 'posts.nodes.parent.id',
  posts___nodes___parent___children = 'posts.nodes.parent.children',
  posts___nodes___children = 'posts.nodes.children',
  posts___nodes___children___id = 'posts.nodes.children.id',
  posts___nodes___children___children = 'posts.nodes.children.children',
  posts___nodes___internal___content = 'posts.nodes.internal.content',
  posts___nodes___internal___contentDigest = 'posts.nodes.internal.contentDigest',
  posts___nodes___internal___description = 'posts.nodes.internal.description',
  posts___nodes___internal___fieldOwners = 'posts.nodes.internal.fieldOwners',
  posts___nodes___internal___ignoreType = 'posts.nodes.internal.ignoreType',
  posts___nodes___internal___mediaType = 'posts.nodes.internal.mediaType',
  posts___nodes___internal___owner = 'posts.nodes.internal.owner',
  posts___nodes___internal___type = 'posts.nodes.internal.type',
  slug = 'slug',
  taxonomy___node___archivePath = 'taxonomy.node.archivePath',
  taxonomy___node___connectedContentTypes___nodes = 'taxonomy.node.connectedContentTypes.nodes',
  taxonomy___node___description = 'taxonomy.node.description',
  taxonomy___node___graphqlPluralName = 'taxonomy.node.graphqlPluralName',
  taxonomy___node___graphqlSingleName = 'taxonomy.node.graphqlSingleName',
  taxonomy___node___hierarchical = 'taxonomy.node.hierarchical',
  taxonomy___node___id = 'taxonomy.node.id',
  taxonomy___node___label = 'taxonomy.node.label',
  taxonomy___node___name = 'taxonomy.node.name',
  taxonomy___node___public = 'taxonomy.node.public',
  taxonomy___node___restBase = 'taxonomy.node.restBase',
  taxonomy___node___restControllerClass = 'taxonomy.node.restControllerClass',
  taxonomy___node___showCloud = 'taxonomy.node.showCloud',
  taxonomy___node___showInAdminColumn = 'taxonomy.node.showInAdminColumn',
  taxonomy___node___showInGraphql = 'taxonomy.node.showInGraphql',
  taxonomy___node___showInMenu = 'taxonomy.node.showInMenu',
  taxonomy___node___showInNavMenus = 'taxonomy.node.showInNavMenus',
  taxonomy___node___showInQuickEdit = 'taxonomy.node.showInQuickEdit',
  taxonomy___node___showInRest = 'taxonomy.node.showInRest',
  taxonomy___node___showUi = 'taxonomy.node.showUi',
  taxonomy___node___nodeType = 'taxonomy.node.nodeType',
  taxonomy___node___parent___id = 'taxonomy.node.parent.id',
  taxonomy___node___parent___children = 'taxonomy.node.parent.children',
  taxonomy___node___children = 'taxonomy.node.children',
  taxonomy___node___children___id = 'taxonomy.node.children.id',
  taxonomy___node___children___children = 'taxonomy.node.children.children',
  taxonomy___node___internal___content = 'taxonomy.node.internal.content',
  taxonomy___node___internal___contentDigest = 'taxonomy.node.internal.contentDigest',
  taxonomy___node___internal___description = 'taxonomy.node.internal.description',
  taxonomy___node___internal___fieldOwners = 'taxonomy.node.internal.fieldOwners',
  taxonomy___node___internal___ignoreType = 'taxonomy.node.internal.ignoreType',
  taxonomy___node___internal___mediaType = 'taxonomy.node.internal.mediaType',
  taxonomy___node___internal___owner = 'taxonomy.node.internal.owner',
  taxonomy___node___internal___type = 'taxonomy.node.internal.type',
  termGroupId = 'termGroupId',
  termTaxonomyId = 'termTaxonomyId',
  uri = 'uri',
  nodeType = 'nodeType',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

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

type WpPostFormatFilterListInput = {
  readonly elemMatch: Maybe<WpPostFormatFilterInput>;
};

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

/** Connection between the postFormat type and the ContentNode type */
type WpPostFormatToContentNodeConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpContentNode>>>;
};

type WpPostFormatToContentNodeConnectionFilterInput = {
  readonly nodes: Maybe<WpContentNodeFilterListInput>;
};

/** Connection between the postFormat type and the post type */
type WpPostFormatToPostConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpPost>>>;
};

type WpPostFormatToPostConnectionFilterInput = {
  readonly nodes: Maybe<WpPostFilterListInput>;
};

/** Connection between the postFormat type and the Taxonomy type */
type WpPostFormatToTaxonomyConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpTaxonomy>;
};

type WpPostFormatToTaxonomyConnectionEdgeFilterInput = {
  readonly node: Maybe<WpTaxonomyFilterInput>;
};

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

/** Connection between the post type and the category type */
type WpPostToCategoryConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpCategory>>>;
};

type WpPostToCategoryConnectionFilterInput = {
  readonly nodes: Maybe<WpCategoryFilterListInput>;
};

/** Connection between the post type and the Comment type */
type WpPostToCommentConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpComment>>>;
};

type WpPostToCommentConnectionFilterInput = {
  readonly nodes: Maybe<WpCommentFilterListInput>;
};

/** Connection between the post type and the ContentType type */
type WpPostToContentTypeConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpContentType>;
};

type WpPostToContentTypeConnectionEdgeFilterInput = {
  readonly node: Maybe<WpContentTypeFilterInput>;
};

/** Connection between the post type and the postFormat type */
type WpPostToPostFormatConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpPostFormat>>>;
};

type WpPostToPostFormatConnectionFilterInput = {
  readonly nodes: Maybe<WpPostFormatFilterListInput>;
};

/** Connection between the post type and the tag type */
type WpPostToTagConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpTag>>>;
};

type WpPostToTagConnectionFilterInput = {
  readonly nodes: Maybe<WpTagFilterListInput>;
};

/** Connection between the post type and the TermNode type */
type WpPostToTermNodeConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpTermNode>>>;
};

type WpPostToTermNodeConnectionFilterInput = {
  readonly nodes: Maybe<WpTermNodeFilterListInput>;
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

/** The reading setting type */
type WpReadingSettings = {
  /** Blog pages show at most. */
  readonly postsPerPage: Maybe<Scalars['Int']>;
};

type WpReadingSettingsFilterInput = {
  readonly postsPerPage: Maybe<IntQueryOperatorInput>;
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

/** The shelf type */
type WpShelf = Node & WpNode & WpContentNode & WpDatabaseIdentifier & WpNodeWithTemplate & WpUniformResourceIdentifiable & WpNodeWithTitle & WpNodeWithContentEditor & WpNodeWithFeaturedImage & WpMenuItemLinkable & {
  /** The content of the post. */
  readonly content: Maybe<Scalars['String']>;
  /** Connection between the shelf type and the ContentType type */
  readonly contentType: Maybe<WpShelfToContentTypeConnectionEdge>;
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
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  readonly featuredImage: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  readonly featuredImageDatabaseId: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  readonly featuredImageId: Maybe<Scalars['ID']>;
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
  readonly guid: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** The user that most recently edited the node */
  readonly lastEditedBy: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  readonly link: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  readonly modified: Maybe<Scalars['Date']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  readonly modifiedGmt: Maybe<Scalars['Date']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  readonly slug: Maybe<Scalars['String']>;
  /** The current status of the object */
  readonly status: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  readonly template: Maybe<WpContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  readonly title: Maybe<Scalars['String']>;
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

enum WpShelfFieldsEnum {
  content = 'content',
  contentType___node___archivePath = 'contentType.node.archivePath',
  contentType___node___canExport = 'contentType.node.canExport',
  contentType___node___connectedTaxonomies___nodes = 'contentType.node.connectedTaxonomies.nodes',
  contentType___node___contentNodes___nodes = 'contentType.node.contentNodes.nodes',
  contentType___node___deleteWithUser = 'contentType.node.deleteWithUser',
  contentType___node___description = 'contentType.node.description',
  contentType___node___excludeFromSearch = 'contentType.node.excludeFromSearch',
  contentType___node___graphqlPluralName = 'contentType.node.graphqlPluralName',
  contentType___node___graphqlSingleName = 'contentType.node.graphqlSingleName',
  contentType___node___hasArchive = 'contentType.node.hasArchive',
  contentType___node___hierarchical = 'contentType.node.hierarchical',
  contentType___node___id = 'contentType.node.id',
  contentType___node___isFrontPage = 'contentType.node.isFrontPage',
  contentType___node___isPostsPage = 'contentType.node.isPostsPage',
  contentType___node___label = 'contentType.node.label',
  contentType___node___labels___addNew = 'contentType.node.labels.addNew',
  contentType___node___labels___addNewItem = 'contentType.node.labels.addNewItem',
  contentType___node___labels___allItems = 'contentType.node.labels.allItems',
  contentType___node___labels___archives = 'contentType.node.labels.archives',
  contentType___node___labels___attributes = 'contentType.node.labels.attributes',
  contentType___node___labels___editItem = 'contentType.node.labels.editItem',
  contentType___node___labels___featuredImage = 'contentType.node.labels.featuredImage',
  contentType___node___labels___filterItemsList = 'contentType.node.labels.filterItemsList',
  contentType___node___labels___insertIntoItem = 'contentType.node.labels.insertIntoItem',
  contentType___node___labels___itemsList = 'contentType.node.labels.itemsList',
  contentType___node___labels___itemsListNavigation = 'contentType.node.labels.itemsListNavigation',
  contentType___node___labels___menuName = 'contentType.node.labels.menuName',
  contentType___node___labels___name = 'contentType.node.labels.name',
  contentType___node___labels___newItem = 'contentType.node.labels.newItem',
  contentType___node___labels___notFound = 'contentType.node.labels.notFound',
  contentType___node___labels___notFoundInTrash = 'contentType.node.labels.notFoundInTrash',
  contentType___node___labels___parentItemColon = 'contentType.node.labels.parentItemColon',
  contentType___node___labels___removeFeaturedImage = 'contentType.node.labels.removeFeaturedImage',
  contentType___node___labels___searchItems = 'contentType.node.labels.searchItems',
  contentType___node___labels___setFeaturedImage = 'contentType.node.labels.setFeaturedImage',
  contentType___node___labels___singularName = 'contentType.node.labels.singularName',
  contentType___node___labels___uploadedToThisItem = 'contentType.node.labels.uploadedToThisItem',
  contentType___node___labels___useFeaturedImage = 'contentType.node.labels.useFeaturedImage',
  contentType___node___labels___viewItem = 'contentType.node.labels.viewItem',
  contentType___node___labels___viewItems = 'contentType.node.labels.viewItems',
  contentType___node___menuIcon = 'contentType.node.menuIcon',
  contentType___node___menuPosition = 'contentType.node.menuPosition',
  contentType___node___name = 'contentType.node.name',
  contentType___node___public = 'contentType.node.public',
  contentType___node___publiclyQueryable = 'contentType.node.publiclyQueryable',
  contentType___node___restBase = 'contentType.node.restBase',
  contentType___node___restControllerClass = 'contentType.node.restControllerClass',
  contentType___node___showInAdminBar = 'contentType.node.showInAdminBar',
  contentType___node___showInGraphql = 'contentType.node.showInGraphql',
  contentType___node___showInMenu = 'contentType.node.showInMenu',
  contentType___node___showInNavMenus = 'contentType.node.showInNavMenus',
  contentType___node___showInRest = 'contentType.node.showInRest',
  contentType___node___showUi = 'contentType.node.showUi',
  contentType___node___uri = 'contentType.node.uri',
  contentType___node___nodeType = 'contentType.node.nodeType',
  contentType___node___parent___id = 'contentType.node.parent.id',
  contentType___node___parent___children = 'contentType.node.parent.children',
  contentType___node___children = 'contentType.node.children',
  contentType___node___children___id = 'contentType.node.children.id',
  contentType___node___children___children = 'contentType.node.children.children',
  contentType___node___internal___content = 'contentType.node.internal.content',
  contentType___node___internal___contentDigest = 'contentType.node.internal.contentDigest',
  contentType___node___internal___description = 'contentType.node.internal.description',
  contentType___node___internal___fieldOwners = 'contentType.node.internal.fieldOwners',
  contentType___node___internal___ignoreType = 'contentType.node.internal.ignoreType',
  contentType___node___internal___mediaType = 'contentType.node.internal.mediaType',
  contentType___node___internal___owner = 'contentType.node.internal.owner',
  contentType___node___internal___type = 'contentType.node.internal.type',
  databaseId = 'databaseId',
  date = 'date',
  dateGmt = 'dateGmt',
  desiredSlug = 'desiredSlug',
  enclosure = 'enclosure',
  featuredImage___node___altText = 'featuredImage.node.altText',
  featuredImage___node___ancestors___nodes = 'featuredImage.node.ancestors.nodes',
  featuredImage___node___authorDatabaseId = 'featuredImage.node.authorDatabaseId',
  featuredImage___node___authorId = 'featuredImage.node.authorId',
  featuredImage___node___caption = 'featuredImage.node.caption',
  featuredImage___node___wpChildren___nodes = 'featuredImage.node.wpChildren.nodes',
  featuredImage___node___commentCount = 'featuredImage.node.commentCount',
  featuredImage___node___commentStatus = 'featuredImage.node.commentStatus',
  featuredImage___node___comments___nodes = 'featuredImage.node.comments.nodes',
  featuredImage___node___databaseId = 'featuredImage.node.databaseId',
  featuredImage___node___date = 'featuredImage.node.date',
  featuredImage___node___dateGmt = 'featuredImage.node.dateGmt',
  featuredImage___node___description = 'featuredImage.node.description',
  featuredImage___node___desiredSlug = 'featuredImage.node.desiredSlug',
  featuredImage___node___enclosure = 'featuredImage.node.enclosure',
  featuredImage___node___fileSize = 'featuredImage.node.fileSize',
  featuredImage___node___guid = 'featuredImage.node.guid',
  featuredImage___node___id = 'featuredImage.node.id',
  featuredImage___node___link = 'featuredImage.node.link',
  featuredImage___node___mediaDetails___file = 'featuredImage.node.mediaDetails.file',
  featuredImage___node___mediaDetails___height = 'featuredImage.node.mediaDetails.height',
  featuredImage___node___mediaDetails___sizes = 'featuredImage.node.mediaDetails.sizes',
  featuredImage___node___mediaDetails___width = 'featuredImage.node.mediaDetails.width',
  featuredImage___node___mediaItemUrl = 'featuredImage.node.mediaItemUrl',
  featuredImage___node___mediaType = 'featuredImage.node.mediaType',
  featuredImage___node___mimeType = 'featuredImage.node.mimeType',
  featuredImage___node___modified = 'featuredImage.node.modified',
  featuredImage___node___modifiedGmt = 'featuredImage.node.modifiedGmt',
  featuredImage___node___parentDatabaseId = 'featuredImage.node.parentDatabaseId',
  featuredImage___node___parentId = 'featuredImage.node.parentId',
  featuredImage___node___sizes = 'featuredImage.node.sizes',
  featuredImage___node___slug = 'featuredImage.node.slug',
  featuredImage___node___sourceUrl = 'featuredImage.node.sourceUrl',
  featuredImage___node___srcSet = 'featuredImage.node.srcSet',
  featuredImage___node___status = 'featuredImage.node.status',
  featuredImage___node___template___templateName = 'featuredImage.node.template.templateName',
  featuredImage___node___title = 'featuredImage.node.title',
  featuredImage___node___uri = 'featuredImage.node.uri',
  featuredImage___node___nodeType = 'featuredImage.node.nodeType',
  featuredImage___node___remoteFile___sourceInstanceName = 'featuredImage.node.remoteFile.sourceInstanceName',
  featuredImage___node___remoteFile___absolutePath = 'featuredImage.node.remoteFile.absolutePath',
  featuredImage___node___remoteFile___relativePath = 'featuredImage.node.remoteFile.relativePath',
  featuredImage___node___remoteFile___extension = 'featuredImage.node.remoteFile.extension',
  featuredImage___node___remoteFile___size = 'featuredImage.node.remoteFile.size',
  featuredImage___node___remoteFile___prettySize = 'featuredImage.node.remoteFile.prettySize',
  featuredImage___node___remoteFile___modifiedTime = 'featuredImage.node.remoteFile.modifiedTime',
  featuredImage___node___remoteFile___accessTime = 'featuredImage.node.remoteFile.accessTime',
  featuredImage___node___remoteFile___changeTime = 'featuredImage.node.remoteFile.changeTime',
  featuredImage___node___remoteFile___birthTime = 'featuredImage.node.remoteFile.birthTime',
  featuredImage___node___remoteFile___root = 'featuredImage.node.remoteFile.root',
  featuredImage___node___remoteFile___dir = 'featuredImage.node.remoteFile.dir',
  featuredImage___node___remoteFile___base = 'featuredImage.node.remoteFile.base',
  featuredImage___node___remoteFile___ext = 'featuredImage.node.remoteFile.ext',
  featuredImage___node___remoteFile___name = 'featuredImage.node.remoteFile.name',
  featuredImage___node___remoteFile___relativeDirectory = 'featuredImage.node.remoteFile.relativeDirectory',
  featuredImage___node___remoteFile___dev = 'featuredImage.node.remoteFile.dev',
  featuredImage___node___remoteFile___mode = 'featuredImage.node.remoteFile.mode',
  featuredImage___node___remoteFile___nlink = 'featuredImage.node.remoteFile.nlink',
  featuredImage___node___remoteFile___uid = 'featuredImage.node.remoteFile.uid',
  featuredImage___node___remoteFile___gid = 'featuredImage.node.remoteFile.gid',
  featuredImage___node___remoteFile___rdev = 'featuredImage.node.remoteFile.rdev',
  featuredImage___node___remoteFile___ino = 'featuredImage.node.remoteFile.ino',
  featuredImage___node___remoteFile___atimeMs = 'featuredImage.node.remoteFile.atimeMs',
  featuredImage___node___remoteFile___mtimeMs = 'featuredImage.node.remoteFile.mtimeMs',
  featuredImage___node___remoteFile___ctimeMs = 'featuredImage.node.remoteFile.ctimeMs',
  featuredImage___node___remoteFile___atime = 'featuredImage.node.remoteFile.atime',
  featuredImage___node___remoteFile___mtime = 'featuredImage.node.remoteFile.mtime',
  featuredImage___node___remoteFile___ctime = 'featuredImage.node.remoteFile.ctime',
  featuredImage___node___remoteFile___birthtime = 'featuredImage.node.remoteFile.birthtime',
  featuredImage___node___remoteFile___birthtimeMs = 'featuredImage.node.remoteFile.birthtimeMs',
  featuredImage___node___remoteFile___blksize = 'featuredImage.node.remoteFile.blksize',
  featuredImage___node___remoteFile___blocks = 'featuredImage.node.remoteFile.blocks',
  featuredImage___node___remoteFile___url = 'featuredImage.node.remoteFile.url',
  featuredImage___node___remoteFile___publicURL = 'featuredImage.node.remoteFile.publicURL',
  featuredImage___node___remoteFile___id = 'featuredImage.node.remoteFile.id',
  featuredImage___node___remoteFile___children = 'featuredImage.node.remoteFile.children',
  featuredImage___node___localFile___sourceInstanceName = 'featuredImage.node.localFile.sourceInstanceName',
  featuredImage___node___localFile___absolutePath = 'featuredImage.node.localFile.absolutePath',
  featuredImage___node___localFile___relativePath = 'featuredImage.node.localFile.relativePath',
  featuredImage___node___localFile___extension = 'featuredImage.node.localFile.extension',
  featuredImage___node___localFile___size = 'featuredImage.node.localFile.size',
  featuredImage___node___localFile___prettySize = 'featuredImage.node.localFile.prettySize',
  featuredImage___node___localFile___modifiedTime = 'featuredImage.node.localFile.modifiedTime',
  featuredImage___node___localFile___accessTime = 'featuredImage.node.localFile.accessTime',
  featuredImage___node___localFile___changeTime = 'featuredImage.node.localFile.changeTime',
  featuredImage___node___localFile___birthTime = 'featuredImage.node.localFile.birthTime',
  featuredImage___node___localFile___root = 'featuredImage.node.localFile.root',
  featuredImage___node___localFile___dir = 'featuredImage.node.localFile.dir',
  featuredImage___node___localFile___base = 'featuredImage.node.localFile.base',
  featuredImage___node___localFile___ext = 'featuredImage.node.localFile.ext',
  featuredImage___node___localFile___name = 'featuredImage.node.localFile.name',
  featuredImage___node___localFile___relativeDirectory = 'featuredImage.node.localFile.relativeDirectory',
  featuredImage___node___localFile___dev = 'featuredImage.node.localFile.dev',
  featuredImage___node___localFile___mode = 'featuredImage.node.localFile.mode',
  featuredImage___node___localFile___nlink = 'featuredImage.node.localFile.nlink',
  featuredImage___node___localFile___uid = 'featuredImage.node.localFile.uid',
  featuredImage___node___localFile___gid = 'featuredImage.node.localFile.gid',
  featuredImage___node___localFile___rdev = 'featuredImage.node.localFile.rdev',
  featuredImage___node___localFile___ino = 'featuredImage.node.localFile.ino',
  featuredImage___node___localFile___atimeMs = 'featuredImage.node.localFile.atimeMs',
  featuredImage___node___localFile___mtimeMs = 'featuredImage.node.localFile.mtimeMs',
  featuredImage___node___localFile___ctimeMs = 'featuredImage.node.localFile.ctimeMs',
  featuredImage___node___localFile___atime = 'featuredImage.node.localFile.atime',
  featuredImage___node___localFile___mtime = 'featuredImage.node.localFile.mtime',
  featuredImage___node___localFile___ctime = 'featuredImage.node.localFile.ctime',
  featuredImage___node___localFile___birthtime = 'featuredImage.node.localFile.birthtime',
  featuredImage___node___localFile___birthtimeMs = 'featuredImage.node.localFile.birthtimeMs',
  featuredImage___node___localFile___blksize = 'featuredImage.node.localFile.blksize',
  featuredImage___node___localFile___blocks = 'featuredImage.node.localFile.blocks',
  featuredImage___node___localFile___url = 'featuredImage.node.localFile.url',
  featuredImage___node___localFile___publicURL = 'featuredImage.node.localFile.publicURL',
  featuredImage___node___localFile___id = 'featuredImage.node.localFile.id',
  featuredImage___node___localFile___children = 'featuredImage.node.localFile.children',
  featuredImage___node___parent___id = 'featuredImage.node.parent.id',
  featuredImage___node___parent___children = 'featuredImage.node.parent.children',
  featuredImage___node___children = 'featuredImage.node.children',
  featuredImage___node___children___id = 'featuredImage.node.children.id',
  featuredImage___node___children___children = 'featuredImage.node.children.children',
  featuredImage___node___internal___content = 'featuredImage.node.internal.content',
  featuredImage___node___internal___contentDigest = 'featuredImage.node.internal.contentDigest',
  featuredImage___node___internal___description = 'featuredImage.node.internal.description',
  featuredImage___node___internal___fieldOwners = 'featuredImage.node.internal.fieldOwners',
  featuredImage___node___internal___ignoreType = 'featuredImage.node.internal.ignoreType',
  featuredImage___node___internal___mediaType = 'featuredImage.node.internal.mediaType',
  featuredImage___node___internal___owner = 'featuredImage.node.internal.owner',
  featuredImage___node___internal___type = 'featuredImage.node.internal.type',
  featuredImageDatabaseId = 'featuredImageDatabaseId',
  featuredImageId = 'featuredImageId',
  guid = 'guid',
  id = 'id',
  lastEditedBy___node___avatar___default = 'lastEditedBy.node.avatar.default',
  lastEditedBy___node___avatar___extraAttr = 'lastEditedBy.node.avatar.extraAttr',
  lastEditedBy___node___avatar___forceDefault = 'lastEditedBy.node.avatar.forceDefault',
  lastEditedBy___node___avatar___foundAvatar = 'lastEditedBy.node.avatar.foundAvatar',
  lastEditedBy___node___avatar___height = 'lastEditedBy.node.avatar.height',
  lastEditedBy___node___avatar___rating = 'lastEditedBy.node.avatar.rating',
  lastEditedBy___node___avatar___scheme = 'lastEditedBy.node.avatar.scheme',
  lastEditedBy___node___avatar___size = 'lastEditedBy.node.avatar.size',
  lastEditedBy___node___avatar___url = 'lastEditedBy.node.avatar.url',
  lastEditedBy___node___avatar___width = 'lastEditedBy.node.avatar.width',
  lastEditedBy___node___capKey = 'lastEditedBy.node.capKey',
  lastEditedBy___node___capabilities = 'lastEditedBy.node.capabilities',
  lastEditedBy___node___comments___nodes = 'lastEditedBy.node.comments.nodes',
  lastEditedBy___node___databaseId = 'lastEditedBy.node.databaseId',
  lastEditedBy___node___description = 'lastEditedBy.node.description',
  lastEditedBy___node___email = 'lastEditedBy.node.email',
  lastEditedBy___node___extraCapabilities = 'lastEditedBy.node.extraCapabilities',
  lastEditedBy___node___firstName = 'lastEditedBy.node.firstName',
  lastEditedBy___node___id = 'lastEditedBy.node.id',
  lastEditedBy___node___lastName = 'lastEditedBy.node.lastName',
  lastEditedBy___node___locale = 'lastEditedBy.node.locale',
  lastEditedBy___node___name = 'lastEditedBy.node.name',
  lastEditedBy___node___nicename = 'lastEditedBy.node.nicename',
  lastEditedBy___node___nickname = 'lastEditedBy.node.nickname',
  lastEditedBy___node___pages___nodes = 'lastEditedBy.node.pages.nodes',
  lastEditedBy___node___posts___nodes = 'lastEditedBy.node.posts.nodes',
  lastEditedBy___node___registeredDate = 'lastEditedBy.node.registeredDate',
  lastEditedBy___node___roles___nodes = 'lastEditedBy.node.roles.nodes',
  lastEditedBy___node___slug = 'lastEditedBy.node.slug',
  lastEditedBy___node___uri = 'lastEditedBy.node.uri',
  lastEditedBy___node___url = 'lastEditedBy.node.url',
  lastEditedBy___node___username = 'lastEditedBy.node.username',
  lastEditedBy___node___nodeType = 'lastEditedBy.node.nodeType',
  lastEditedBy___node___parent___id = 'lastEditedBy.node.parent.id',
  lastEditedBy___node___parent___children = 'lastEditedBy.node.parent.children',
  lastEditedBy___node___children = 'lastEditedBy.node.children',
  lastEditedBy___node___children___id = 'lastEditedBy.node.children.id',
  lastEditedBy___node___children___children = 'lastEditedBy.node.children.children',
  lastEditedBy___node___internal___content = 'lastEditedBy.node.internal.content',
  lastEditedBy___node___internal___contentDigest = 'lastEditedBy.node.internal.contentDigest',
  lastEditedBy___node___internal___description = 'lastEditedBy.node.internal.description',
  lastEditedBy___node___internal___fieldOwners = 'lastEditedBy.node.internal.fieldOwners',
  lastEditedBy___node___internal___ignoreType = 'lastEditedBy.node.internal.ignoreType',
  lastEditedBy___node___internal___mediaType = 'lastEditedBy.node.internal.mediaType',
  lastEditedBy___node___internal___owner = 'lastEditedBy.node.internal.owner',
  lastEditedBy___node___internal___type = 'lastEditedBy.node.internal.type',
  link = 'link',
  modified = 'modified',
  modifiedGmt = 'modifiedGmt',
  slug = 'slug',
  status = 'status',
  template___templateName = 'template.templateName',
  title = 'title',
  uri = 'uri',
  nodeType = 'nodeType',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type WpShelfFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentType: Maybe<WpShelfToContentTypeConnectionEdgeFilterInput>;
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

type WpShelfGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpShelfEdge>;
  readonly nodes: ReadonlyArray<WpShelf>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type WpShelfSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<WpShelfFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

/** Connection between the shelf type and the ContentType type */
type WpShelfToContentTypeConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpContentType>;
};

type WpShelfToContentTypeConnectionEdgeFilterInput = {
  readonly node: Maybe<WpContentTypeFilterInput>;
};

type WpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<WpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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

enum WpTagFieldsEnum {
  contentNodes___nodes = 'contentNodes.nodes',
  contentNodes___nodes___databaseId = 'contentNodes.nodes.databaseId',
  contentNodes___nodes___date = 'contentNodes.nodes.date',
  contentNodes___nodes___dateGmt = 'contentNodes.nodes.dateGmt',
  contentNodes___nodes___desiredSlug = 'contentNodes.nodes.desiredSlug',
  contentNodes___nodes___enclosure = 'contentNodes.nodes.enclosure',
  contentNodes___nodes___guid = 'contentNodes.nodes.guid',
  contentNodes___nodes___id = 'contentNodes.nodes.id',
  contentNodes___nodes___link = 'contentNodes.nodes.link',
  contentNodes___nodes___modified = 'contentNodes.nodes.modified',
  contentNodes___nodes___modifiedGmt = 'contentNodes.nodes.modifiedGmt',
  contentNodes___nodes___slug = 'contentNodes.nodes.slug',
  contentNodes___nodes___status = 'contentNodes.nodes.status',
  contentNodes___nodes___template___templateName = 'contentNodes.nodes.template.templateName',
  contentNodes___nodes___uri = 'contentNodes.nodes.uri',
  contentNodes___nodes___nodeType = 'contentNodes.nodes.nodeType',
  count = 'count',
  databaseId = 'databaseId',
  description = 'description',
  id = 'id',
  link = 'link',
  name = 'name',
  posts___nodes = 'posts.nodes',
  posts___nodes___authorDatabaseId = 'posts.nodes.authorDatabaseId',
  posts___nodes___authorId = 'posts.nodes.authorId',
  posts___nodes___categories___nodes = 'posts.nodes.categories.nodes',
  posts___nodes___commentCount = 'posts.nodes.commentCount',
  posts___nodes___commentStatus = 'posts.nodes.commentStatus',
  posts___nodes___comments___nodes = 'posts.nodes.comments.nodes',
  posts___nodes___content = 'posts.nodes.content',
  posts___nodes___databaseId = 'posts.nodes.databaseId',
  posts___nodes___date = 'posts.nodes.date',
  posts___nodes___dateGmt = 'posts.nodes.dateGmt',
  posts___nodes___desiredSlug = 'posts.nodes.desiredSlug',
  posts___nodes___enclosure = 'posts.nodes.enclosure',
  posts___nodes___excerpt = 'posts.nodes.excerpt',
  posts___nodes___featuredImageDatabaseId = 'posts.nodes.featuredImageDatabaseId',
  posts___nodes___featuredImageId = 'posts.nodes.featuredImageId',
  posts___nodes___guid = 'posts.nodes.guid',
  posts___nodes___id = 'posts.nodes.id',
  posts___nodes___isRevision = 'posts.nodes.isRevision',
  posts___nodes___isSticky = 'posts.nodes.isSticky',
  posts___nodes___link = 'posts.nodes.link',
  posts___nodes___modified = 'posts.nodes.modified',
  posts___nodes___modifiedGmt = 'posts.nodes.modifiedGmt',
  posts___nodes___pingStatus = 'posts.nodes.pingStatus',
  posts___nodes___pinged = 'posts.nodes.pinged',
  posts___nodes___postFormats___nodes = 'posts.nodes.postFormats.nodes',
  posts___nodes___slug = 'posts.nodes.slug',
  posts___nodes___status = 'posts.nodes.status',
  posts___nodes___tags___nodes = 'posts.nodes.tags.nodes',
  posts___nodes___template___templateName = 'posts.nodes.template.templateName',
  posts___nodes___terms___nodes = 'posts.nodes.terms.nodes',
  posts___nodes___title = 'posts.nodes.title',
  posts___nodes___toPing = 'posts.nodes.toPing',
  posts___nodes___uri = 'posts.nodes.uri',
  posts___nodes___nodeType = 'posts.nodes.nodeType',
  posts___nodes___parent___id = 'posts.nodes.parent.id',
  posts___nodes___parent___children = 'posts.nodes.parent.children',
  posts___nodes___children = 'posts.nodes.children',
  posts___nodes___children___id = 'posts.nodes.children.id',
  posts___nodes___children___children = 'posts.nodes.children.children',
  posts___nodes___internal___content = 'posts.nodes.internal.content',
  posts___nodes___internal___contentDigest = 'posts.nodes.internal.contentDigest',
  posts___nodes___internal___description = 'posts.nodes.internal.description',
  posts___nodes___internal___fieldOwners = 'posts.nodes.internal.fieldOwners',
  posts___nodes___internal___ignoreType = 'posts.nodes.internal.ignoreType',
  posts___nodes___internal___mediaType = 'posts.nodes.internal.mediaType',
  posts___nodes___internal___owner = 'posts.nodes.internal.owner',
  posts___nodes___internal___type = 'posts.nodes.internal.type',
  slug = 'slug',
  taxonomy___node___archivePath = 'taxonomy.node.archivePath',
  taxonomy___node___connectedContentTypes___nodes = 'taxonomy.node.connectedContentTypes.nodes',
  taxonomy___node___description = 'taxonomy.node.description',
  taxonomy___node___graphqlPluralName = 'taxonomy.node.graphqlPluralName',
  taxonomy___node___graphqlSingleName = 'taxonomy.node.graphqlSingleName',
  taxonomy___node___hierarchical = 'taxonomy.node.hierarchical',
  taxonomy___node___id = 'taxonomy.node.id',
  taxonomy___node___label = 'taxonomy.node.label',
  taxonomy___node___name = 'taxonomy.node.name',
  taxonomy___node___public = 'taxonomy.node.public',
  taxonomy___node___restBase = 'taxonomy.node.restBase',
  taxonomy___node___restControllerClass = 'taxonomy.node.restControllerClass',
  taxonomy___node___showCloud = 'taxonomy.node.showCloud',
  taxonomy___node___showInAdminColumn = 'taxonomy.node.showInAdminColumn',
  taxonomy___node___showInGraphql = 'taxonomy.node.showInGraphql',
  taxonomy___node___showInMenu = 'taxonomy.node.showInMenu',
  taxonomy___node___showInNavMenus = 'taxonomy.node.showInNavMenus',
  taxonomy___node___showInQuickEdit = 'taxonomy.node.showInQuickEdit',
  taxonomy___node___showInRest = 'taxonomy.node.showInRest',
  taxonomy___node___showUi = 'taxonomy.node.showUi',
  taxonomy___node___nodeType = 'taxonomy.node.nodeType',
  taxonomy___node___parent___id = 'taxonomy.node.parent.id',
  taxonomy___node___parent___children = 'taxonomy.node.parent.children',
  taxonomy___node___children = 'taxonomy.node.children',
  taxonomy___node___children___id = 'taxonomy.node.children.id',
  taxonomy___node___children___children = 'taxonomy.node.children.children',
  taxonomy___node___internal___content = 'taxonomy.node.internal.content',
  taxonomy___node___internal___contentDigest = 'taxonomy.node.internal.contentDigest',
  taxonomy___node___internal___description = 'taxonomy.node.internal.description',
  taxonomy___node___internal___fieldOwners = 'taxonomy.node.internal.fieldOwners',
  taxonomy___node___internal___ignoreType = 'taxonomy.node.internal.ignoreType',
  taxonomy___node___internal___mediaType = 'taxonomy.node.internal.mediaType',
  taxonomy___node___internal___owner = 'taxonomy.node.internal.owner',
  taxonomy___node___internal___type = 'taxonomy.node.internal.type',
  termGroupId = 'termGroupId',
  termTaxonomyId = 'termTaxonomyId',
  uri = 'uri',
  nodeType = 'nodeType',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

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

type WpTagFilterListInput = {
  readonly elemMatch: Maybe<WpTagFilterInput>;
};

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

/** Connection between the tag type and the ContentNode type */
type WpTagToContentNodeConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpContentNode>>>;
};

type WpTagToContentNodeConnectionFilterInput = {
  readonly nodes: Maybe<WpContentNodeFilterListInput>;
};

/** Connection between the tag type and the post type */
type WpTagToPostConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpPost>>>;
};

type WpTagToPostConnectionFilterInput = {
  readonly nodes: Maybe<WpPostFilterListInput>;
};

/** Connection between the tag type and the Taxonomy type */
type WpTagToTaxonomyConnectionEdge = {
  /** The nodes of the connection, without the edges */
  readonly node: Maybe<WpTaxonomy>;
};

type WpTagToTaxonomyConnectionEdgeFilterInput = {
  readonly node: Maybe<WpTaxonomyFilterInput>;
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

enum WpTaxonomyFieldsEnum {
  archivePath = 'archivePath',
  connectedContentTypes___nodes = 'connectedContentTypes.nodes',
  connectedContentTypes___nodes___archivePath = 'connectedContentTypes.nodes.archivePath',
  connectedContentTypes___nodes___canExport = 'connectedContentTypes.nodes.canExport',
  connectedContentTypes___nodes___connectedTaxonomies___nodes = 'connectedContentTypes.nodes.connectedTaxonomies.nodes',
  connectedContentTypes___nodes___contentNodes___nodes = 'connectedContentTypes.nodes.contentNodes.nodes',
  connectedContentTypes___nodes___deleteWithUser = 'connectedContentTypes.nodes.deleteWithUser',
  connectedContentTypes___nodes___description = 'connectedContentTypes.nodes.description',
  connectedContentTypes___nodes___excludeFromSearch = 'connectedContentTypes.nodes.excludeFromSearch',
  connectedContentTypes___nodes___graphqlPluralName = 'connectedContentTypes.nodes.graphqlPluralName',
  connectedContentTypes___nodes___graphqlSingleName = 'connectedContentTypes.nodes.graphqlSingleName',
  connectedContentTypes___nodes___hasArchive = 'connectedContentTypes.nodes.hasArchive',
  connectedContentTypes___nodes___hierarchical = 'connectedContentTypes.nodes.hierarchical',
  connectedContentTypes___nodes___id = 'connectedContentTypes.nodes.id',
  connectedContentTypes___nodes___isFrontPage = 'connectedContentTypes.nodes.isFrontPage',
  connectedContentTypes___nodes___isPostsPage = 'connectedContentTypes.nodes.isPostsPage',
  connectedContentTypes___nodes___label = 'connectedContentTypes.nodes.label',
  connectedContentTypes___nodes___labels___addNew = 'connectedContentTypes.nodes.labels.addNew',
  connectedContentTypes___nodes___labels___addNewItem = 'connectedContentTypes.nodes.labels.addNewItem',
  connectedContentTypes___nodes___labels___allItems = 'connectedContentTypes.nodes.labels.allItems',
  connectedContentTypes___nodes___labels___archives = 'connectedContentTypes.nodes.labels.archives',
  connectedContentTypes___nodes___labels___attributes = 'connectedContentTypes.nodes.labels.attributes',
  connectedContentTypes___nodes___labels___editItem = 'connectedContentTypes.nodes.labels.editItem',
  connectedContentTypes___nodes___labels___featuredImage = 'connectedContentTypes.nodes.labels.featuredImage',
  connectedContentTypes___nodes___labels___filterItemsList = 'connectedContentTypes.nodes.labels.filterItemsList',
  connectedContentTypes___nodes___labels___insertIntoItem = 'connectedContentTypes.nodes.labels.insertIntoItem',
  connectedContentTypes___nodes___labels___itemsList = 'connectedContentTypes.nodes.labels.itemsList',
  connectedContentTypes___nodes___labels___itemsListNavigation = 'connectedContentTypes.nodes.labels.itemsListNavigation',
  connectedContentTypes___nodes___labels___menuName = 'connectedContentTypes.nodes.labels.menuName',
  connectedContentTypes___nodes___labels___name = 'connectedContentTypes.nodes.labels.name',
  connectedContentTypes___nodes___labels___newItem = 'connectedContentTypes.nodes.labels.newItem',
  connectedContentTypes___nodes___labels___notFound = 'connectedContentTypes.nodes.labels.notFound',
  connectedContentTypes___nodes___labels___notFoundInTrash = 'connectedContentTypes.nodes.labels.notFoundInTrash',
  connectedContentTypes___nodes___labels___parentItemColon = 'connectedContentTypes.nodes.labels.parentItemColon',
  connectedContentTypes___nodes___labels___removeFeaturedImage = 'connectedContentTypes.nodes.labels.removeFeaturedImage',
  connectedContentTypes___nodes___labels___searchItems = 'connectedContentTypes.nodes.labels.searchItems',
  connectedContentTypes___nodes___labels___setFeaturedImage = 'connectedContentTypes.nodes.labels.setFeaturedImage',
  connectedContentTypes___nodes___labels___singularName = 'connectedContentTypes.nodes.labels.singularName',
  connectedContentTypes___nodes___labels___uploadedToThisItem = 'connectedContentTypes.nodes.labels.uploadedToThisItem',
  connectedContentTypes___nodes___labels___useFeaturedImage = 'connectedContentTypes.nodes.labels.useFeaturedImage',
  connectedContentTypes___nodes___labels___viewItem = 'connectedContentTypes.nodes.labels.viewItem',
  connectedContentTypes___nodes___labels___viewItems = 'connectedContentTypes.nodes.labels.viewItems',
  connectedContentTypes___nodes___menuIcon = 'connectedContentTypes.nodes.menuIcon',
  connectedContentTypes___nodes___menuPosition = 'connectedContentTypes.nodes.menuPosition',
  connectedContentTypes___nodes___name = 'connectedContentTypes.nodes.name',
  connectedContentTypes___nodes___public = 'connectedContentTypes.nodes.public',
  connectedContentTypes___nodes___publiclyQueryable = 'connectedContentTypes.nodes.publiclyQueryable',
  connectedContentTypes___nodes___restBase = 'connectedContentTypes.nodes.restBase',
  connectedContentTypes___nodes___restControllerClass = 'connectedContentTypes.nodes.restControllerClass',
  connectedContentTypes___nodes___showInAdminBar = 'connectedContentTypes.nodes.showInAdminBar',
  connectedContentTypes___nodes___showInGraphql = 'connectedContentTypes.nodes.showInGraphql',
  connectedContentTypes___nodes___showInMenu = 'connectedContentTypes.nodes.showInMenu',
  connectedContentTypes___nodes___showInNavMenus = 'connectedContentTypes.nodes.showInNavMenus',
  connectedContentTypes___nodes___showInRest = 'connectedContentTypes.nodes.showInRest',
  connectedContentTypes___nodes___showUi = 'connectedContentTypes.nodes.showUi',
  connectedContentTypes___nodes___uri = 'connectedContentTypes.nodes.uri',
  connectedContentTypes___nodes___nodeType = 'connectedContentTypes.nodes.nodeType',
  connectedContentTypes___nodes___parent___id = 'connectedContentTypes.nodes.parent.id',
  connectedContentTypes___nodes___parent___children = 'connectedContentTypes.nodes.parent.children',
  connectedContentTypes___nodes___children = 'connectedContentTypes.nodes.children',
  connectedContentTypes___nodes___children___id = 'connectedContentTypes.nodes.children.id',
  connectedContentTypes___nodes___children___children = 'connectedContentTypes.nodes.children.children',
  connectedContentTypes___nodes___internal___content = 'connectedContentTypes.nodes.internal.content',
  connectedContentTypes___nodes___internal___contentDigest = 'connectedContentTypes.nodes.internal.contentDigest',
  connectedContentTypes___nodes___internal___description = 'connectedContentTypes.nodes.internal.description',
  connectedContentTypes___nodes___internal___fieldOwners = 'connectedContentTypes.nodes.internal.fieldOwners',
  connectedContentTypes___nodes___internal___ignoreType = 'connectedContentTypes.nodes.internal.ignoreType',
  connectedContentTypes___nodes___internal___mediaType = 'connectedContentTypes.nodes.internal.mediaType',
  connectedContentTypes___nodes___internal___owner = 'connectedContentTypes.nodes.internal.owner',
  connectedContentTypes___nodes___internal___type = 'connectedContentTypes.nodes.internal.type',
  description = 'description',
  graphqlPluralName = 'graphqlPluralName',
  graphqlSingleName = 'graphqlSingleName',
  hierarchical = 'hierarchical',
  id = 'id',
  label = 'label',
  name = 'name',
  public = 'public',
  restBase = 'restBase',
  restControllerClass = 'restControllerClass',
  showCloud = 'showCloud',
  showInAdminColumn = 'showInAdminColumn',
  showInGraphql = 'showInGraphql',
  showInMenu = 'showInMenu',
  showInNavMenus = 'showInNavMenus',
  showInQuickEdit = 'showInQuickEdit',
  showInRest = 'showInRest',
  showUi = 'showUi',
  nodeType = 'nodeType',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

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

type WpTaxonomyFilterListInput = {
  readonly elemMatch: Maybe<WpTaxonomyFilterInput>;
};

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

/** Connection between the Taxonomy type and the ContentType type */
type WpTaxonomyToContentTypeConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpContentType>>>;
};

type WpTaxonomyToContentTypeConnectionFilterInput = {
  readonly nodes: Maybe<WpContentTypeFilterListInput>;
};

type WpTermNode = {
  /** The number of objects connected to the object */
  readonly count: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  readonly databaseId: Scalars['Int'];
  /** The description of the object */
  readonly description: Maybe<Scalars['String']>;
  /** Unique identifier for the term */
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

enum WpTermNodeFieldsEnum {
  count = 'count',
  databaseId = 'databaseId',
  description = 'description',
  id = 'id',
  link = 'link',
  name = 'name',
  slug = 'slug',
  termGroupId = 'termGroupId',
  termTaxonomyId = 'termTaxonomyId',
  uri = 'uri',
  nodeType = 'nodeType'
}

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
};

type WpTermNodeFilterListInput = {
  readonly elemMatch: Maybe<WpTermNodeFilterInput>;
};

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

type WpUniformResourceIdentifiable = {
  /** The unique resource identifier path */
  readonly id: Scalars['ID'];
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
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
  /**
   * A complete list of capabilities including capabilities inherited from a role.
   * This is equivalent to the array keys of WP_User-&gt;allcaps.
   */
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

enum WpUserFieldsEnum {
  avatar___default = 'avatar.default',
  avatar___extraAttr = 'avatar.extraAttr',
  avatar___forceDefault = 'avatar.forceDefault',
  avatar___foundAvatar = 'avatar.foundAvatar',
  avatar___height = 'avatar.height',
  avatar___rating = 'avatar.rating',
  avatar___scheme = 'avatar.scheme',
  avatar___size = 'avatar.size',
  avatar___url = 'avatar.url',
  avatar___width = 'avatar.width',
  capKey = 'capKey',
  capabilities = 'capabilities',
  comments___nodes = 'comments.nodes',
  comments___nodes___agent = 'comments.nodes.agent',
  comments___nodes___approved = 'comments.nodes.approved',
  comments___nodes___authorIp = 'comments.nodes.authorIp',
  comments___nodes___content = 'comments.nodes.content',
  comments___nodes___databaseId = 'comments.nodes.databaseId',
  comments___nodes___date = 'comments.nodes.date',
  comments___nodes___dateGmt = 'comments.nodes.dateGmt',
  comments___nodes___id = 'comments.nodes.id',
  comments___nodes___karma = 'comments.nodes.karma',
  comments___nodes___parentDatabaseId = 'comments.nodes.parentDatabaseId',
  comments___nodes___parentId = 'comments.nodes.parentId',
  comments___nodes___replies___nodes = 'comments.nodes.replies.nodes',
  comments___nodes___type = 'comments.nodes.type',
  comments___nodes___nodeType = 'comments.nodes.nodeType',
  comments___nodes___parent___id = 'comments.nodes.parent.id',
  comments___nodes___parent___children = 'comments.nodes.parent.children',
  comments___nodes___children = 'comments.nodes.children',
  comments___nodes___children___id = 'comments.nodes.children.id',
  comments___nodes___children___children = 'comments.nodes.children.children',
  comments___nodes___internal___content = 'comments.nodes.internal.content',
  comments___nodes___internal___contentDigest = 'comments.nodes.internal.contentDigest',
  comments___nodes___internal___description = 'comments.nodes.internal.description',
  comments___nodes___internal___fieldOwners = 'comments.nodes.internal.fieldOwners',
  comments___nodes___internal___ignoreType = 'comments.nodes.internal.ignoreType',
  comments___nodes___internal___mediaType = 'comments.nodes.internal.mediaType',
  comments___nodes___internal___owner = 'comments.nodes.internal.owner',
  comments___nodes___internal___type = 'comments.nodes.internal.type',
  databaseId = 'databaseId',
  description = 'description',
  email = 'email',
  extraCapabilities = 'extraCapabilities',
  firstName = 'firstName',
  id = 'id',
  lastName = 'lastName',
  locale = 'locale',
  name = 'name',
  nicename = 'nicename',
  nickname = 'nickname',
  pages___nodes = 'pages.nodes',
  pages___nodes___ancestors___nodes = 'pages.nodes.ancestors.nodes',
  pages___nodes___authorDatabaseId = 'pages.nodes.authorDatabaseId',
  pages___nodes___authorId = 'pages.nodes.authorId',
  pages___nodes___wpChildren___nodes = 'pages.nodes.wpChildren.nodes',
  pages___nodes___commentCount = 'pages.nodes.commentCount',
  pages___nodes___commentStatus = 'pages.nodes.commentStatus',
  pages___nodes___comments___nodes = 'pages.nodes.comments.nodes',
  pages___nodes___content = 'pages.nodes.content',
  pages___nodes___databaseId = 'pages.nodes.databaseId',
  pages___nodes___date = 'pages.nodes.date',
  pages___nodes___dateGmt = 'pages.nodes.dateGmt',
  pages___nodes___desiredSlug = 'pages.nodes.desiredSlug',
  pages___nodes___enclosure = 'pages.nodes.enclosure',
  pages___nodes___featuredImageDatabaseId = 'pages.nodes.featuredImageDatabaseId',
  pages___nodes___featuredImageId = 'pages.nodes.featuredImageId',
  pages___nodes___guid = 'pages.nodes.guid',
  pages___nodes___id = 'pages.nodes.id',
  pages___nodes___isFrontPage = 'pages.nodes.isFrontPage',
  pages___nodes___isPostsPage = 'pages.nodes.isPostsPage',
  pages___nodes___isRevision = 'pages.nodes.isRevision',
  pages___nodes___link = 'pages.nodes.link',
  pages___nodes___menuOrder = 'pages.nodes.menuOrder',
  pages___nodes___modified = 'pages.nodes.modified',
  pages___nodes___modifiedGmt = 'pages.nodes.modifiedGmt',
  pages___nodes___parentDatabaseId = 'pages.nodes.parentDatabaseId',
  pages___nodes___parentId = 'pages.nodes.parentId',
  pages___nodes___slug = 'pages.nodes.slug',
  pages___nodes___status = 'pages.nodes.status',
  pages___nodes___template___templateName = 'pages.nodes.template.templateName',
  pages___nodes___title = 'pages.nodes.title',
  pages___nodes___uri = 'pages.nodes.uri',
  pages___nodes___nodeType = 'pages.nodes.nodeType',
  pages___nodes___parent___id = 'pages.nodes.parent.id',
  pages___nodes___parent___children = 'pages.nodes.parent.children',
  pages___nodes___children = 'pages.nodes.children',
  pages___nodes___children___id = 'pages.nodes.children.id',
  pages___nodes___children___children = 'pages.nodes.children.children',
  pages___nodes___internal___content = 'pages.nodes.internal.content',
  pages___nodes___internal___contentDigest = 'pages.nodes.internal.contentDigest',
  pages___nodes___internal___description = 'pages.nodes.internal.description',
  pages___nodes___internal___fieldOwners = 'pages.nodes.internal.fieldOwners',
  pages___nodes___internal___ignoreType = 'pages.nodes.internal.ignoreType',
  pages___nodes___internal___mediaType = 'pages.nodes.internal.mediaType',
  pages___nodes___internal___owner = 'pages.nodes.internal.owner',
  pages___nodes___internal___type = 'pages.nodes.internal.type',
  posts___nodes = 'posts.nodes',
  posts___nodes___authorDatabaseId = 'posts.nodes.authorDatabaseId',
  posts___nodes___authorId = 'posts.nodes.authorId',
  posts___nodes___categories___nodes = 'posts.nodes.categories.nodes',
  posts___nodes___commentCount = 'posts.nodes.commentCount',
  posts___nodes___commentStatus = 'posts.nodes.commentStatus',
  posts___nodes___comments___nodes = 'posts.nodes.comments.nodes',
  posts___nodes___content = 'posts.nodes.content',
  posts___nodes___databaseId = 'posts.nodes.databaseId',
  posts___nodes___date = 'posts.nodes.date',
  posts___nodes___dateGmt = 'posts.nodes.dateGmt',
  posts___nodes___desiredSlug = 'posts.nodes.desiredSlug',
  posts___nodes___enclosure = 'posts.nodes.enclosure',
  posts___nodes___excerpt = 'posts.nodes.excerpt',
  posts___nodes___featuredImageDatabaseId = 'posts.nodes.featuredImageDatabaseId',
  posts___nodes___featuredImageId = 'posts.nodes.featuredImageId',
  posts___nodes___guid = 'posts.nodes.guid',
  posts___nodes___id = 'posts.nodes.id',
  posts___nodes___isRevision = 'posts.nodes.isRevision',
  posts___nodes___isSticky = 'posts.nodes.isSticky',
  posts___nodes___link = 'posts.nodes.link',
  posts___nodes___modified = 'posts.nodes.modified',
  posts___nodes___modifiedGmt = 'posts.nodes.modifiedGmt',
  posts___nodes___pingStatus = 'posts.nodes.pingStatus',
  posts___nodes___pinged = 'posts.nodes.pinged',
  posts___nodes___postFormats___nodes = 'posts.nodes.postFormats.nodes',
  posts___nodes___slug = 'posts.nodes.slug',
  posts___nodes___status = 'posts.nodes.status',
  posts___nodes___tags___nodes = 'posts.nodes.tags.nodes',
  posts___nodes___template___templateName = 'posts.nodes.template.templateName',
  posts___nodes___terms___nodes = 'posts.nodes.terms.nodes',
  posts___nodes___title = 'posts.nodes.title',
  posts___nodes___toPing = 'posts.nodes.toPing',
  posts___nodes___uri = 'posts.nodes.uri',
  posts___nodes___nodeType = 'posts.nodes.nodeType',
  posts___nodes___parent___id = 'posts.nodes.parent.id',
  posts___nodes___parent___children = 'posts.nodes.parent.children',
  posts___nodes___children = 'posts.nodes.children',
  posts___nodes___children___id = 'posts.nodes.children.id',
  posts___nodes___children___children = 'posts.nodes.children.children',
  posts___nodes___internal___content = 'posts.nodes.internal.content',
  posts___nodes___internal___contentDigest = 'posts.nodes.internal.contentDigest',
  posts___nodes___internal___description = 'posts.nodes.internal.description',
  posts___nodes___internal___fieldOwners = 'posts.nodes.internal.fieldOwners',
  posts___nodes___internal___ignoreType = 'posts.nodes.internal.ignoreType',
  posts___nodes___internal___mediaType = 'posts.nodes.internal.mediaType',
  posts___nodes___internal___owner = 'posts.nodes.internal.owner',
  posts___nodes___internal___type = 'posts.nodes.internal.type',
  registeredDate = 'registeredDate',
  roles___nodes = 'roles.nodes',
  roles___nodes___capabilities = 'roles.nodes.capabilities',
  roles___nodes___displayName = 'roles.nodes.displayName',
  roles___nodes___id = 'roles.nodes.id',
  roles___nodes___name = 'roles.nodes.name',
  roles___nodes___nodeType = 'roles.nodes.nodeType',
  roles___nodes___parent___id = 'roles.nodes.parent.id',
  roles___nodes___parent___children = 'roles.nodes.parent.children',
  roles___nodes___children = 'roles.nodes.children',
  roles___nodes___children___id = 'roles.nodes.children.id',
  roles___nodes___children___children = 'roles.nodes.children.children',
  roles___nodes___internal___content = 'roles.nodes.internal.content',
  roles___nodes___internal___contentDigest = 'roles.nodes.internal.contentDigest',
  roles___nodes___internal___description = 'roles.nodes.internal.description',
  roles___nodes___internal___fieldOwners = 'roles.nodes.internal.fieldOwners',
  roles___nodes___internal___ignoreType = 'roles.nodes.internal.ignoreType',
  roles___nodes___internal___mediaType = 'roles.nodes.internal.mediaType',
  roles___nodes___internal___owner = 'roles.nodes.internal.owner',
  roles___nodes___internal___type = 'roles.nodes.internal.type',
  slug = 'slug',
  uri = 'uri',
  url = 'url',
  username = 'username',
  nodeType = 'nodeType',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

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

type WpUserGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<WpUserEdge>;
  readonly nodes: ReadonlyArray<WpUser>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
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

enum WpUserRoleFieldsEnum {
  capabilities = 'capabilities',
  displayName = 'displayName',
  id = 'id',
  name = 'name',
  nodeType = 'nodeType',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

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

type WpUserRoleFilterListInput = {
  readonly elemMatch: Maybe<WpUserRoleFilterInput>;
};

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

type WpUserSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<WpUserFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

/** Connection between the User type and the Comment type */
type WpUserToCommentConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpComment>>>;
};

type WpUserToCommentConnectionFilterInput = {
  readonly nodes: Maybe<WpCommentFilterListInput>;
};

/** Connection between the User type and the page type */
type WpUserToPageConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpPage>>>;
};

type WpUserToPageConnectionFilterInput = {
  readonly nodes: Maybe<WpPageFilterListInput>;
};

/** Connection between the User type and the post type */
type WpUserToPostConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpPost>>>;
};

type WpUserToPostConnectionFilterInput = {
  readonly nodes: Maybe<WpPostFilterListInput>;
};

/** Connection between the User type and the UserRole type */
type WpUserToUserRoleConnection = {
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<WpUserRole>>>;
};

type WpUserToUserRoleConnectionFilterInput = {
  readonly nodes: Maybe<WpUserRoleFilterListInput>;
};

/** Information needed by gatsby-source-wordpress. */
type WpWPGatsby = {
  /** Returns wether or not pretty permalinks are enabled. */
  readonly arePrettyPermalinksEnabled: Maybe<Scalars['Boolean']>;
};

type WpWPGatsbyFilterInput = {
  readonly arePrettyPermalinksEnabled: Maybe<BooleanQueryOperatorInput>;
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

type WpWritingSettingsFilterInput = {
  readonly defaultCategory: Maybe<IntQueryOperatorInput>;
  readonly defaultPostFormat: Maybe<StringQueryOperatorInput>;
  readonly useSmilies: Maybe<BooleanQueryOperatorInput>;
};

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type IndexMainQueryVariables = Exact<{ [key: string]: never; }>;


type IndexMainQuery = { readonly blog: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<WpPost, 'id' | 'slug' | 'title' | 'date'>
        & { readonly featuredImage: { readonly node: Maybe<{ readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<(
                  Pick<ImageSharpFluid, 'src'>
                  & GatsbyImageSharpFluidFragment
                )> }> }> }> } }
      ) }> } };

}