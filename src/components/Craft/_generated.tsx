import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null | undefined
export type InputMaybe<T> = T | null | undefined
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string
	String: string
	Boolean: boolean
	Int: number
	Float: number
	DateTime: any
	QueryArgument: any
}

export type AssetCriteriaInput = {
	/** Narrows the query results based on the elements’ creation dates. */
	dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the assets’ files’ last-modified dates. */
	dateModified: InputMaybe<Scalars['String']>
	/** Narrows the query results based on the elements’ last-updated dates. */
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on whether the elements are enabled in the site they’re being queried in, per the `site` argument. */
	enabledForSite: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the assets’ filenames. */
	filename: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Causes the query results to be returned in the order specified by the `id` argument. */
	fixedOrder: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the folders the assets belong to, per the folders’ IDs. */
	folderId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on the assets’ image heights. */
	height: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the elements’ IDs. */
	id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Causes the query results to be returned in reverse order. */
	inReverse: InputMaybe<Scalars['Boolean']>
	/** Broadens the query results to include assets from any of the subfolders of the folder specified by `folderId`. */
	includeSubfolders: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the assets’ file kinds. */
	kind: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Sets the limit for paginated results. */
	limit: InputMaybe<Scalars['Int']>
	/** Sets the offset for paginated results. */
	offset: InputMaybe<Scalars['Int']>
	/** Sets the field the returned elements should be ordered by. */
	orderBy: InputMaybe<Scalars['String']>
	/** Narrows the query results based on a reference string. */
	ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
	relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results to elements that relate to an asset list defined with this argument. */
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	/** Narrows the query results to elements that relate to a category list defined with this argument. */
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	/** Narrows the query results to elements that relate to an entry list defined with this argument. */
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	/** Narrows the query results to elements that relate to a tag list defined with this argument. */
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	/** Narrows the query results to elements that relate to a use list defined with this argument. */
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	/** Narrows the query results to only elements that match a search query. */
	search: InputMaybe<Scalars['String']>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	site: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on the assets’ file sizes (in bytes). */
	size: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the elements’ slugs. */
	slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the elements’ titles. */
	title: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the elements’ UIDs. */
	uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Determines whether only elements with unique IDs should be returned by the query. */
	unique: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the user the assets were uploaded by, per the user’s ID. */
	uploader: InputMaybe<Scalars['QueryArgument']>
	/** Narrows the query results based on the elements’ URIs. */
	uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the volumes the assets belong to, per the volumes’ handles. */
	volume: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the volumes the assets belong to, per the volumes’ IDs. */
	volumeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on the assets’ image widths. */
	width: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** A list of transform handles to preload. */
	withTransforms: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type CategoryCriteriaInput = {
	/** Narrows the query results to only elements that are up to a certain distance away from the element specified by `ancestorOf`. */
	ancestorDist: InputMaybe<Scalars['Int']>
	/** Narrows the query results to only elements that are ancestors of another element, provided by its ID. */
	ancestorOf: InputMaybe<Scalars['Int']>
	/** Narrows the query results based on the elements’ creation dates. */
	dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the elements’ last-updated dates. */
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results to only elements that are up to a certain distance away from the element specified by `descendantOf`. */
	descendantDist: InputMaybe<Scalars['Int']>
	/** Narrows the query results to only elements that are descendants of another element, provided by its ID. */
	descendantOf: InputMaybe<Scalars['Int']>
	/** Whether to only return categories that the user has permission to edit. */
	editable: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on whether the elements are enabled in the site they’re being queried in, per the `site` argument. */
	enabledForSite: InputMaybe<Scalars['Boolean']>
	/** Causes the query results to be returned in the order specified by the `id` argument. */
	fixedOrder: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the category groups the categories belong to per the group’s handles. */
	group: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the category groups the categories belong to, per the groups’ IDs. */
	groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on whether the elements have any descendants. */
	hasDescendants: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the elements’ IDs. */
	id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Causes the query results to be returned in reverse order. */
	inReverse: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on whether the elements are “leaves” (element with no descendants). */
	leaves: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the elements’ level within the structure. */
	level: InputMaybe<Scalars['Int']>
	/** Sets the limit for paginated results. */
	limit: InputMaybe<Scalars['Int']>
	/** Narrows the query results to only the entry that comes immediately after another element, provided by its ID. */
	nextSiblingOf: InputMaybe<Scalars['Int']>
	/** Sets the offset for paginated results. */
	offset: InputMaybe<Scalars['Int']>
	/** Sets the field the returned elements should be ordered by. */
	orderBy: InputMaybe<Scalars['String']>
	/** Narrows the query results to only entries that are positioned after another element, provided by its ID. */
	positionedAfter: InputMaybe<Scalars['Int']>
	/** Narrows the query results to only entries that are positioned before another element, provided by its ID. */
	positionedBefore: InputMaybe<Scalars['Int']>
	/** Narrows the query results to only the entry that comes immediately before another element, provided by its ID. */
	prevSiblingOf: InputMaybe<Scalars['Int']>
	/** Narrows the query results based on a reference string. */
	ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
	relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results to elements that relate to an asset list defined with this argument. */
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	/** Narrows the query results to elements that relate to a category list defined with this argument. */
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	/** Narrows the query results to elements that relate to an entry list defined with this argument. */
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	/** Narrows the query results to elements that relate to a tag list defined with this argument. */
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	/** Narrows the query results to elements that relate to a use list defined with this argument. */
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	/** Narrows the query results to only elements that match a search query. */
	search: InputMaybe<Scalars['String']>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	site: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on the elements’ slugs. */
	slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Determines which structure data should be joined into the query. */
	structureId: InputMaybe<Scalars['Int']>
	/** Narrows the query results based on the elements’ titles. */
	title: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the elements’ UIDs. */
	uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Determines whether only elements with unique IDs should be returned by the query. */
	unique: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the elements’ URIs. */
	uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Explicitly determines whether the query should join in the structure data. */
	withStructure: InputMaybe<Scalars['Boolean']>
}

export type Element = ElementInterface & {
	__typename?: 'Element'
	/** Return a number of related elements for a field. */
	_count: Maybe<Scalars['Int']>
	/** Whether the element is archived or not. */
	archived: Maybe<Scalars['Boolean']>
	/** The date the element was created. */
	dateCreated: Maybe<Scalars['DateTime']>
	/** The date the element was last updated. */
	dateUpdated: Maybe<Scalars['DateTime']>
	/** Whether the element is enabled or not. */
	enabled: Maybe<Scalars['Boolean']>
	/** The id of the entity */
	id: Maybe<Scalars['ID']>
	/** The language of the site element is associated with. */
	language: Maybe<Scalars['String']>
	/** The element’s search score, if the `search` parameter was used when querying for the element. */
	searchScore: Maybe<Scalars['String']>
	/** The ID of the site the element is associated with. */
	siteId: Maybe<Scalars['Int']>
	/** The element’s slug. */
	slug: Maybe<Scalars['String']>
	/** The element's status. */
	status: Maybe<Scalars['String']>
	/** The element’s title. */
	title: Maybe<Scalars['String']>
	/** Whether the element has been soft-deleted or not. */
	trashed: Maybe<Scalars['Boolean']>
	/** The uid of the entity */
	uid: Maybe<Scalars['String']>
	/** The element’s URI. */
	uri: Maybe<Scalars['String']>
}

export type Element_CountArgs = {
	field: Scalars['String']
}

/** This is the interface implemented by all elements. */
export type ElementInterface = {
	/** Return a number of related elements for a field. */
	_count: Maybe<Scalars['Int']>
	/** Whether the element is archived or not. */
	archived: Maybe<Scalars['Boolean']>
	/** The date the element was created. */
	dateCreated: Maybe<Scalars['DateTime']>
	/** The date the element was last updated. */
	dateUpdated: Maybe<Scalars['DateTime']>
	/** Whether the element is enabled or not. */
	enabled: Maybe<Scalars['Boolean']>
	/** The id of the entity */
	id: Maybe<Scalars['ID']>
	/** The language of the site element is associated with. */
	language: Maybe<Scalars['String']>
	/** The element’s search score, if the `search` parameter was used when querying for the element. */
	searchScore: Maybe<Scalars['String']>
	/** The ID of the site the element is associated with. */
	siteId: Maybe<Scalars['Int']>
	/** The element’s slug. */
	slug: Maybe<Scalars['String']>
	/** The element's status. */
	status: Maybe<Scalars['String']>
	/** The element’s title. */
	title: Maybe<Scalars['String']>
	/** Whether the element has been soft-deleted or not. */
	trashed: Maybe<Scalars['Boolean']>
	/** The uid of the entity */
	uid: Maybe<Scalars['String']>
	/** The element’s URI. */
	uri: Maybe<Scalars['String']>
}

/** This is the interface implemented by all elements. */
export type ElementInterface_CountArgs = {
	field: Scalars['String']
}

export type EntryCriteriaInput = {
	/** Narrows the query results to only entries that were posted on or after a certain date. */
	after: InputMaybe<Scalars['String']>
	/** Narrows the query results to only elements that are up to a certain distance away from the element specified by `ancestorOf`. */
	ancestorDist: InputMaybe<Scalars['Int']>
	/** Narrows the query results to only elements that are ancestors of another element, provided by its ID. */
	ancestorOf: InputMaybe<Scalars['Int']>
	/** Narrows the query results based on the user group the entries’ authors belong to. */
	authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the user group the entries’ authors belong to, per the groups’ IDs. */
	authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on the entries’ authors. */
	authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results to only entries that were posted before a certain date. */
	before: InputMaybe<Scalars['String']>
	/** Narrows the query results based on the elements’ creation dates. */
	dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the elements’ last-updated dates. */
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results to only elements that are up to a certain distance away from the element specified by `descendantOf`. */
	descendantDist: InputMaybe<Scalars['Int']>
	/** Narrows the query results to only elements that are descendants of another element, provided by its ID. */
	descendantOf: InputMaybe<Scalars['Int']>
	/** Whether to only return entries that the user has permission to edit. */
	editable: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on whether the elements are enabled in the site they’re being queried in, per the `site` argument. */
	enabledForSite: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the entries’ expiry dates. */
	expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Causes the query results to be returned in the order specified by the `id` argument. */
	fixedOrder: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on whether the elements have any descendants. */
	hasDescendants: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the elements’ IDs. */
	id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Causes the query results to be returned in reverse order. */
	inReverse: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on whether the elements are “leaves” (element with no descendants). */
	leaves: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the elements’ level within the structure. */
	level: InputMaybe<Scalars['Int']>
	/** Sets the limit for paginated results. */
	limit: InputMaybe<Scalars['Int']>
	/** Narrows the query results to only the entry that comes immediately after another element, provided by its ID. */
	nextSiblingOf: InputMaybe<Scalars['Int']>
	/** Sets the offset for paginated results. */
	offset: InputMaybe<Scalars['Int']>
	/** Sets the field the returned elements should be ordered by. */
	orderBy: InputMaybe<Scalars['String']>
	/** Narrows the query results to only entries that are positioned after another element, provided by its ID. */
	positionedAfter: InputMaybe<Scalars['Int']>
	/** Narrows the query results to only entries that are positioned before another element, provided by its ID. */
	positionedBefore: InputMaybe<Scalars['Int']>
	/** Narrows the query results based on the entries’ post dates. */
	postDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results to only the entry that comes immediately before another element, provided by its ID. */
	prevSiblingOf: InputMaybe<Scalars['Int']>
	recipeServings: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	recipeTotalTime: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on a reference string. */
	ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
	relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results to elements that relate to an asset list defined with this argument. */
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	/** Narrows the query results to elements that relate to a category list defined with this argument. */
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	/** Narrows the query results to elements that relate to an entry list defined with this argument. */
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	/** Narrows the query results to elements that relate to a tag list defined with this argument. */
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	/** Narrows the query results to elements that relate to a use list defined with this argument. */
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	/** Narrows the query results to only elements that match a search query. */
	search: InputMaybe<Scalars['String']>
	/** Narrows the query results based on the section handles the entries belong to. */
	section: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the sections the entries belong to, per the sections’ IDs. */
	sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	site: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on the elements’ slugs. */
	slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Determines which structure data should be joined into the query. */
	structureId: InputMaybe<Scalars['Int']>
	/** Narrows the query results based on the elements’ titles. */
	title: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the entries’ entry type handles. */
	type: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the entries’ entry types, per the types’ IDs. */
	typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on the elements’ UIDs. */
	uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Determines whether only elements with unique IDs should be returned by the query. */
	unique: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the elements’ URIs. */
	uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Explicitly determines whether the query should join in the structure data. */
	withStructure: InputMaybe<Scalars['Boolean']>
}

/** This is the interface implemented by all entries. */
export type EntryInterface = {
	/** Return a number of related elements for a field. */
	_count: Maybe<Scalars['Int']>
	/** Whether the element is archived or not. */
	archived: Maybe<Scalars['Boolean']>
	/** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
	children: Maybe<Array<Maybe<EntryInterface>>>
	/** The date the element was created. */
	dateCreated: Maybe<Scalars['DateTime']>
	/** The date the element was last updated. */
	dateUpdated: Maybe<Scalars['DateTime']>
	/** The ID of the draft to return (from the `drafts` table) */
	draftId: Maybe<Scalars['Int']>
	/** The name of the draft. */
	draftName: Maybe<Scalars['String']>
	/** The notes for the draft. */
	draftNotes: Maybe<Scalars['String']>
	/** Whether the element is enabled or not. */
	enabled: Maybe<Scalars['Boolean']>
	/** The expiry date of the entry. */
	expiryDate: Maybe<Scalars['DateTime']>
	/** The id of the entity */
	id: Maybe<Scalars['ID']>
	/** Returns whether this is a draft. */
	isDraft: Maybe<Scalars['Boolean']>
	/** Returns whether this is a revision. */
	isRevision: Maybe<Scalars['Boolean']>
	/** Returns whether this is an unpublished draft. */
	isUnpublishedDraft: Maybe<Scalars['Boolean']>
	/** Returns whether this is an unpublished draft. **This field is deprecated.** `isUnpublishedDraft` should be used instead. */
	isUnsavedDraft: Maybe<Scalars['Boolean']>
	/** The language of the site element is associated with. */
	language: Maybe<Scalars['String']>
	/** The element’s level within its structure */
	level: Maybe<Scalars['Int']>
	/** The element’s left position within its structure. */
	lft: Maybe<Scalars['Int']>
	/** The same element in other locales. */
	localized: Maybe<Array<Maybe<EntryInterface>>>
	/** Returns the next element relative to this one, from a given set of criteria. */
	next: Maybe<EntryInterface>
	/** The entry’s parent, if the section is a structure. */
	parent: Maybe<EntryInterface>
	/** The entry's post date. */
	postDate: Maybe<Scalars['DateTime']>
	/** Returns the previous element relative to this one, from a given set of criteria. */
	prev: Maybe<EntryInterface>
	/** The element’s right position within its structure. */
	rgt: Maybe<Scalars['Int']>
	/** The element’s structure’s root ID */
	root: Maybe<Scalars['Int']>
	/** The element’s search score, if the `search` parameter was used when querying for the element. */
	searchScore: Maybe<Scalars['String']>
	/** The handle of the section that contains the entry. */
	sectionHandle: Maybe<Scalars['String']>
	/** The ID of the section that contains the entry. */
	sectionId: Maybe<Scalars['Int']>
	/** The ID of the site the element is associated with. */
	siteId: Maybe<Scalars['Int']>
	/** The element’s slug. */
	slug: Maybe<Scalars['String']>
	/** Returns the element’s ID, or if it’s a draft/revision, its source element’s ID. */
	sourceId: Maybe<Scalars['Int']>
	/** Returns the element’s UUID, or if it’s a draft/revision, its source element’s UUID. */
	sourceUid: Maybe<Scalars['String']>
	/** The element's status. */
	status: Maybe<Scalars['String']>
	/** The element’s structure ID. */
	structureId: Maybe<Scalars['Int']>
	/** The element’s title. */
	title: Maybe<Scalars['String']>
	/** Whether the element has been soft-deleted or not. */
	trashed: Maybe<Scalars['Boolean']>
	/** The handle of the entry type that contains the entry. */
	typeHandle: Maybe<Scalars['String']>
	/** The ID of the entry type that contains the entry. */
	typeId: Maybe<Scalars['Int']>
	/** The uid of the entity */
	uid: Maybe<Scalars['String']>
	/** The element’s URI. */
	uri: Maybe<Scalars['String']>
	/** The element’s full URL */
	url: Maybe<Scalars['String']>
}

/** This is the interface implemented by all entries. */
export type EntryInterface_CountArgs = {
	field: Scalars['String']
}

/** This is the interface implemented by all entries. */
export type EntryInterfaceChildrenArgs = {
	after: InputMaybe<Scalars['String']>
	ancestorDist: InputMaybe<Scalars['Int']>
	ancestorOf: InputMaybe<Scalars['Int']>
	authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	before: InputMaybe<Scalars['String']>
	dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	descendantDist: InputMaybe<Scalars['Int']>
	descendantOf: InputMaybe<Scalars['Int']>
	editable: InputMaybe<Scalars['Boolean']>
	enabledForSite: InputMaybe<Scalars['Boolean']>
	expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	fixedOrder: InputMaybe<Scalars['Boolean']>
	hasDescendants: InputMaybe<Scalars['Boolean']>
	id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	inReverse: InputMaybe<Scalars['Boolean']>
	leaves: InputMaybe<Scalars['Boolean']>
	level: InputMaybe<Scalars['Int']>
	limit: InputMaybe<Scalars['Int']>
	nextSiblingOf: InputMaybe<Scalars['Int']>
	offset: InputMaybe<Scalars['Int']>
	orderBy: InputMaybe<Scalars['String']>
	positionedAfter: InputMaybe<Scalars['Int']>
	positionedBefore: InputMaybe<Scalars['Int']>
	postDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	prevSiblingOf: InputMaybe<Scalars['Int']>
	recipeServings: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	recipeTotalTime: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	search: InputMaybe<Scalars['String']>
	section: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	site: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	structureId: InputMaybe<Scalars['Int']>
	title: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	type: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	unique: InputMaybe<Scalars['Boolean']>
	uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	withStructure: InputMaybe<Scalars['Boolean']>
}

/** This is the interface implemented by all entries. */
export type EntryInterfaceLocalizedArgs = {
	after: InputMaybe<Scalars['String']>
	ancestorDist: InputMaybe<Scalars['Int']>
	ancestorOf: InputMaybe<Scalars['Int']>
	authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	before: InputMaybe<Scalars['String']>
	dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	descendantDist: InputMaybe<Scalars['Int']>
	descendantOf: InputMaybe<Scalars['Int']>
	editable: InputMaybe<Scalars['Boolean']>
	enabledForSite: InputMaybe<Scalars['Boolean']>
	expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	fixedOrder: InputMaybe<Scalars['Boolean']>
	hasDescendants: InputMaybe<Scalars['Boolean']>
	id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	inReverse: InputMaybe<Scalars['Boolean']>
	leaves: InputMaybe<Scalars['Boolean']>
	level: InputMaybe<Scalars['Int']>
	limit: InputMaybe<Scalars['Int']>
	nextSiblingOf: InputMaybe<Scalars['Int']>
	offset: InputMaybe<Scalars['Int']>
	orderBy: InputMaybe<Scalars['String']>
	positionedAfter: InputMaybe<Scalars['Int']>
	positionedBefore: InputMaybe<Scalars['Int']>
	postDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	prevSiblingOf: InputMaybe<Scalars['Int']>
	recipeServings: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	recipeTotalTime: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	search: InputMaybe<Scalars['String']>
	section: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	site: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	structureId: InputMaybe<Scalars['Int']>
	title: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	type: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	unique: InputMaybe<Scalars['Boolean']>
	uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	withStructure: InputMaybe<Scalars['Boolean']>
}

/** This is the interface implemented by all entries. */
export type EntryInterfaceNextArgs = {
	after: InputMaybe<Scalars['String']>
	ancestorDist: InputMaybe<Scalars['Int']>
	ancestorOf: InputMaybe<Scalars['Int']>
	authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	before: InputMaybe<Scalars['String']>
	dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	descendantDist: InputMaybe<Scalars['Int']>
	descendantOf: InputMaybe<Scalars['Int']>
	editable: InputMaybe<Scalars['Boolean']>
	enabledForSite: InputMaybe<Scalars['Boolean']>
	expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	fixedOrder: InputMaybe<Scalars['Boolean']>
	hasDescendants: InputMaybe<Scalars['Boolean']>
	id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	inReverse: InputMaybe<Scalars['Boolean']>
	leaves: InputMaybe<Scalars['Boolean']>
	level: InputMaybe<Scalars['Int']>
	limit: InputMaybe<Scalars['Int']>
	nextSiblingOf: InputMaybe<Scalars['Int']>
	offset: InputMaybe<Scalars['Int']>
	orderBy: InputMaybe<Scalars['String']>
	positionedAfter: InputMaybe<Scalars['Int']>
	positionedBefore: InputMaybe<Scalars['Int']>
	postDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	prevSiblingOf: InputMaybe<Scalars['Int']>
	recipeServings: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	recipeTotalTime: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	search: InputMaybe<Scalars['String']>
	section: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	site: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	structureId: InputMaybe<Scalars['Int']>
	title: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	type: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	unique: InputMaybe<Scalars['Boolean']>
	uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	withStructure: InputMaybe<Scalars['Boolean']>
}

/** This is the interface implemented by all entries. */
export type EntryInterfaceParentArgs = {
	after: InputMaybe<Scalars['String']>
	ancestorDist: InputMaybe<Scalars['Int']>
	ancestorOf: InputMaybe<Scalars['Int']>
	authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	before: InputMaybe<Scalars['String']>
	dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	descendantDist: InputMaybe<Scalars['Int']>
	descendantOf: InputMaybe<Scalars['Int']>
	editable: InputMaybe<Scalars['Boolean']>
	enabledForSite: InputMaybe<Scalars['Boolean']>
	expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	fixedOrder: InputMaybe<Scalars['Boolean']>
	hasDescendants: InputMaybe<Scalars['Boolean']>
	id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	inReverse: InputMaybe<Scalars['Boolean']>
	leaves: InputMaybe<Scalars['Boolean']>
	level: InputMaybe<Scalars['Int']>
	limit: InputMaybe<Scalars['Int']>
	nextSiblingOf: InputMaybe<Scalars['Int']>
	offset: InputMaybe<Scalars['Int']>
	orderBy: InputMaybe<Scalars['String']>
	positionedAfter: InputMaybe<Scalars['Int']>
	positionedBefore: InputMaybe<Scalars['Int']>
	postDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	prevSiblingOf: InputMaybe<Scalars['Int']>
	recipeServings: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	recipeTotalTime: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	search: InputMaybe<Scalars['String']>
	section: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	site: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	structureId: InputMaybe<Scalars['Int']>
	title: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	type: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	unique: InputMaybe<Scalars['Boolean']>
	uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	withStructure: InputMaybe<Scalars['Boolean']>
}

/** This is the interface implemented by all entries. */
export type EntryInterfacePrevArgs = {
	after: InputMaybe<Scalars['String']>
	ancestorDist: InputMaybe<Scalars['Int']>
	ancestorOf: InputMaybe<Scalars['Int']>
	authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	before: InputMaybe<Scalars['String']>
	dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	descendantDist: InputMaybe<Scalars['Int']>
	descendantOf: InputMaybe<Scalars['Int']>
	editable: InputMaybe<Scalars['Boolean']>
	enabledForSite: InputMaybe<Scalars['Boolean']>
	expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	fixedOrder: InputMaybe<Scalars['Boolean']>
	hasDescendants: InputMaybe<Scalars['Boolean']>
	id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	inReverse: InputMaybe<Scalars['Boolean']>
	leaves: InputMaybe<Scalars['Boolean']>
	level: InputMaybe<Scalars['Int']>
	limit: InputMaybe<Scalars['Int']>
	nextSiblingOf: InputMaybe<Scalars['Int']>
	offset: InputMaybe<Scalars['Int']>
	orderBy: InputMaybe<Scalars['String']>
	positionedAfter: InputMaybe<Scalars['Int']>
	positionedBefore: InputMaybe<Scalars['Int']>
	postDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	prevSiblingOf: InputMaybe<Scalars['Int']>
	recipeServings: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	recipeTotalTime: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	search: InputMaybe<Scalars['String']>
	section: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	site: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	structureId: InputMaybe<Scalars['Int']>
	title: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	type: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	unique: InputMaybe<Scalars['Boolean']>
	uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	withStructure: InputMaybe<Scalars['Boolean']>
}

/** This is the interface implemented by all matrix blocks. */
export type MatrixBlockInterface = {
	/** Return a number of related elements for a field. */
	_count: Maybe<Scalars['Int']>
	/** Whether the element is archived or not. */
	archived: Maybe<Scalars['Boolean']>
	/** The date the element was created. */
	dateCreated: Maybe<Scalars['DateTime']>
	/** The date the element was last updated. */
	dateUpdated: Maybe<Scalars['DateTime']>
	/** Whether the element is enabled or not. */
	enabled: Maybe<Scalars['Boolean']>
	/** The ID of the field that owns the matrix block. */
	fieldId: Maybe<Scalars['Int']>
	/** The id of the entity */
	id: Maybe<Scalars['ID']>
	/** The language of the site element is associated with. */
	language: Maybe<Scalars['String']>
	/** The ID of the element that owns the matrix block. */
	ownerId: Maybe<Scalars['Int']>
	/** The element’s search score, if the `search` parameter was used when querying for the element. */
	searchScore: Maybe<Scalars['String']>
	/** The ID of the site the element is associated with. */
	siteId: Maybe<Scalars['Int']>
	/** The element’s slug. */
	slug: Maybe<Scalars['String']>
	/** The sort order of the matrix block within the owner element field. */
	sortOrder: Maybe<Scalars['Int']>
	/** The element's status. */
	status: Maybe<Scalars['String']>
	/** The element’s title. */
	title: Maybe<Scalars['String']>
	/** Whether the element has been soft-deleted or not. */
	trashed: Maybe<Scalars['Boolean']>
	/** The handle of the matrix block's type. */
	typeHandle: Maybe<Scalars['String']>
	/** The ID of the matrix block's type. */
	typeId: Maybe<Scalars['Int']>
	/** The uid of the entity */
	uid: Maybe<Scalars['String']>
	/** The element’s URI. */
	uri: Maybe<Scalars['String']>
}

/** This is the interface implemented by all matrix blocks. */
export type MatrixBlockInterface_CountArgs = {
	field: Scalars['String']
}

export type Mutation = {
	__typename?: 'Mutation'
	ping: Maybe<Scalars['String']>
}

export type Query = {
	__typename?: 'Query'
	/** This query is used to query for entries. */
	entries: Maybe<Array<Maybe<EntryInterface>>>
	/** This query is used to query for a single entry. */
	entry: Maybe<EntryInterface>
	/** This query is used to return the number of entries. */
	entryCount: Scalars['Int']
	ping: Maybe<Scalars['String']>
}

export type QueryEntriesArgs = {
	after: InputMaybe<Scalars['String']>
	ancestorDist: InputMaybe<Scalars['Int']>
	ancestorOf: InputMaybe<Scalars['Int']>
	authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	before: InputMaybe<Scalars['String']>
	dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	descendantDist: InputMaybe<Scalars['Int']>
	descendantOf: InputMaybe<Scalars['Int']>
	editable: InputMaybe<Scalars['Boolean']>
	enabledForSite: InputMaybe<Scalars['Boolean']>
	expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	fixedOrder: InputMaybe<Scalars['Boolean']>
	hasDescendants: InputMaybe<Scalars['Boolean']>
	id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	inReverse: InputMaybe<Scalars['Boolean']>
	leaves: InputMaybe<Scalars['Boolean']>
	level: InputMaybe<Scalars['Int']>
	limit: InputMaybe<Scalars['Int']>
	nextSiblingOf: InputMaybe<Scalars['Int']>
	offset: InputMaybe<Scalars['Int']>
	orderBy: InputMaybe<Scalars['String']>
	positionedAfter: InputMaybe<Scalars['Int']>
	positionedBefore: InputMaybe<Scalars['Int']>
	postDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	prevSiblingOf: InputMaybe<Scalars['Int']>
	recipeServings: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	recipeTotalTime: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	search: InputMaybe<Scalars['String']>
	section: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	site: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	structureId: InputMaybe<Scalars['Int']>
	title: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	type: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	unique: InputMaybe<Scalars['Boolean']>
	uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	withStructure: InputMaybe<Scalars['Boolean']>
}

export type QueryEntryArgs = {
	after: InputMaybe<Scalars['String']>
	ancestorDist: InputMaybe<Scalars['Int']>
	ancestorOf: InputMaybe<Scalars['Int']>
	authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	before: InputMaybe<Scalars['String']>
	dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	descendantDist: InputMaybe<Scalars['Int']>
	descendantOf: InputMaybe<Scalars['Int']>
	editable: InputMaybe<Scalars['Boolean']>
	enabledForSite: InputMaybe<Scalars['Boolean']>
	expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	fixedOrder: InputMaybe<Scalars['Boolean']>
	hasDescendants: InputMaybe<Scalars['Boolean']>
	id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	inReverse: InputMaybe<Scalars['Boolean']>
	leaves: InputMaybe<Scalars['Boolean']>
	level: InputMaybe<Scalars['Int']>
	limit: InputMaybe<Scalars['Int']>
	nextSiblingOf: InputMaybe<Scalars['Int']>
	offset: InputMaybe<Scalars['Int']>
	orderBy: InputMaybe<Scalars['String']>
	positionedAfter: InputMaybe<Scalars['Int']>
	positionedBefore: InputMaybe<Scalars['Int']>
	postDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	prevSiblingOf: InputMaybe<Scalars['Int']>
	recipeServings: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	recipeTotalTime: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	search: InputMaybe<Scalars['String']>
	section: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	site: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	structureId: InputMaybe<Scalars['Int']>
	title: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	type: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	unique: InputMaybe<Scalars['Boolean']>
	uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	withStructure: InputMaybe<Scalars['Boolean']>
}

export type QueryEntryCountArgs = {
	after: InputMaybe<Scalars['String']>
	ancestorDist: InputMaybe<Scalars['Int']>
	ancestorOf: InputMaybe<Scalars['Int']>
	authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	before: InputMaybe<Scalars['String']>
	dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	descendantDist: InputMaybe<Scalars['Int']>
	descendantOf: InputMaybe<Scalars['Int']>
	editable: InputMaybe<Scalars['Boolean']>
	enabledForSite: InputMaybe<Scalars['Boolean']>
	expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	fixedOrder: InputMaybe<Scalars['Boolean']>
	hasDescendants: InputMaybe<Scalars['Boolean']>
	id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	inReverse: InputMaybe<Scalars['Boolean']>
	leaves: InputMaybe<Scalars['Boolean']>
	level: InputMaybe<Scalars['Int']>
	limit: InputMaybe<Scalars['Int']>
	nextSiblingOf: InputMaybe<Scalars['Int']>
	offset: InputMaybe<Scalars['Int']>
	orderBy: InputMaybe<Scalars['String']>
	positionedAfter: InputMaybe<Scalars['Int']>
	positionedBefore: InputMaybe<Scalars['Int']>
	postDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	prevSiblingOf: InputMaybe<Scalars['Int']>
	recipeServings: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	recipeTotalTime: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	search: InputMaybe<Scalars['String']>
	section: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	site: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	structureId: InputMaybe<Scalars['Int']>
	title: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	type: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	unique: InputMaybe<Scalars['Boolean']>
	uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	withStructure: InputMaybe<Scalars['Boolean']>
}

export type TagCriteriaInput = {
	/** Narrows the query results based on the elements’ creation dates. */
	dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the elements’ last-updated dates. */
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on whether the elements are enabled in the site they’re being queried in, per the `site` argument. */
	enabledForSite: InputMaybe<Scalars['Boolean']>
	/** Causes the query results to be returned in the order specified by the `id` argument. */
	fixedOrder: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the tag groups the tags belong to per the group’s handles. */
	group: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the tag groups the tags belong to, per the groups’ IDs. */
	groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on the elements’ IDs. */
	id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Causes the query results to be returned in reverse order. */
	inReverse: InputMaybe<Scalars['Boolean']>
	/** Sets the limit for paginated results. */
	limit: InputMaybe<Scalars['Int']>
	/** Sets the offset for paginated results. */
	offset: InputMaybe<Scalars['Int']>
	/** Sets the field the returned elements should be ordered by. */
	orderBy: InputMaybe<Scalars['String']>
	/** Narrows the query results based on a reference string. */
	ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
	relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results to elements that relate to an asset list defined with this argument. */
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	/** Narrows the query results to elements that relate to a category list defined with this argument. */
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	/** Narrows the query results to elements that relate to an entry list defined with this argument. */
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	/** Narrows the query results to elements that relate to a tag list defined with this argument. */
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	/** Narrows the query results to elements that relate to a use list defined with this argument. */
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	/** Narrows the query results to only elements that match a search query. */
	search: InputMaybe<Scalars['String']>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	site: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on the elements’ slugs. */
	slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the elements’ titles. */
	title: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the elements’ UIDs. */
	uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Determines whether only elements with unique IDs should be returned by the query. */
	unique: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the elements’ URIs. */
	uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type User = ElementInterface &
	UserInterface & {
		__typename?: 'User'
		/** Return a number of related elements for a field. */
		_count: Maybe<Scalars['Int']>
		/** Whether the element is archived or not. */
		archived: Maybe<Scalars['Boolean']>
		/** The date the element was created. */
		dateCreated: Maybe<Scalars['DateTime']>
		/** The date the element was last updated. */
		dateUpdated: Maybe<Scalars['DateTime']>
		/** The user's email. */
		email: Maybe<Scalars['String']>
		/** Whether the element is enabled or not. */
		enabled: Maybe<Scalars['Boolean']>
		/** The user's first name. */
		firstName: Maybe<Scalars['String']>
		/** The user's first name or username. */
		friendlyName: Maybe<Scalars['String']>
		/** The user's full name. */
		fullName: Maybe<Scalars['String']>
		/** The id of the entity */
		id: Maybe<Scalars['ID']>
		/** The language of the site element is associated with. */
		language: Maybe<Scalars['String']>
		/** The user's last name. */
		lastName: Maybe<Scalars['String']>
		/** The user's full name or username. */
		name: Maybe<Scalars['String']>
		/** The user’s preferences. */
		preferences: Maybe<Scalars['String']>
		/** The user’s preferred language. */
		preferredLanguage: Maybe<Scalars['String']>
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore: Maybe<Scalars['String']>
		/** The ID of the site the element is associated with. */
		siteId: Maybe<Scalars['Int']>
		/** The element’s slug. */
		slug: Maybe<Scalars['String']>
		/** The element's status. */
		status: Maybe<Scalars['String']>
		/** The element’s title. */
		title: Maybe<Scalars['String']>
		/** Whether the element has been soft-deleted or not. */
		trashed: Maybe<Scalars['Boolean']>
		/** The uid of the entity */
		uid: Maybe<Scalars['String']>
		/** The element’s URI. */
		uri: Maybe<Scalars['String']>
		/** The username. */
		username: Maybe<Scalars['String']>
	}

export type User_CountArgs = {
	field: Scalars['String']
}

export type UserCriteriaInput = {
	/** Narrows the query results based on the elements’ creation dates. */
	dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the elements’ last-updated dates. */
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the users’ email addresses. */
	email: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on whether the elements are enabled in the site they’re being queried in, per the `site` argument. */
	enabledForSite: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the users’ first names. */
	firstName: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Causes the query results to be returned in the order specified by the `id` argument. */
	fixedOrder: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the user group the users belong to. */
	group: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on the user group the users belong to, per the groups’ IDs. */
	groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results to only users that have (or don’t have) a user photo. */
	hasPhoto: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the elements’ IDs. */
	id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Causes the query results to be returned in reverse order. */
	inReverse: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the users’ last names. */
	lastName: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Sets the limit for paginated results. */
	limit: InputMaybe<Scalars['Int']>
	/** Sets the offset for paginated results. */
	offset: InputMaybe<Scalars['Int']>
	/** Sets the field the returned elements should be ordered by. */
	orderBy: InputMaybe<Scalars['String']>
	/** Narrows the query results based on a reference string. */
	ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
	relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results to elements that relate to an asset list defined with this argument. */
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	/** Narrows the query results to elements that relate to a category list defined with this argument. */
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	/** Narrows the query results to elements that relate to an entry list defined with this argument. */
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	/** Narrows the query results to elements that relate to a tag list defined with this argument. */
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	/** Narrows the query results to elements that relate to a use list defined with this argument. */
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	/** Narrows the query results to only elements that match a search query. */
	search: InputMaybe<Scalars['String']>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	site: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on the elements’ slugs. */
	slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the elements’ titles. */
	title: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the elements’ UIDs. */
	uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Determines whether only elements with unique IDs should be returned by the query. */
	unique: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the elements’ URIs. */
	uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the users’ usernames. */
	username: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** This is the interface implemented by all users. */
export type UserInterface = {
	/** Return a number of related elements for a field. */
	_count: Maybe<Scalars['Int']>
	/** Whether the element is archived or not. */
	archived: Maybe<Scalars['Boolean']>
	/** The date the element was created. */
	dateCreated: Maybe<Scalars['DateTime']>
	/** The date the element was last updated. */
	dateUpdated: Maybe<Scalars['DateTime']>
	/** The user's email. */
	email: Maybe<Scalars['String']>
	/** Whether the element is enabled or not. */
	enabled: Maybe<Scalars['Boolean']>
	/** The user's first name. */
	firstName: Maybe<Scalars['String']>
	/** The user's first name or username. */
	friendlyName: Maybe<Scalars['String']>
	/** The user's full name. */
	fullName: Maybe<Scalars['String']>
	/** The id of the entity */
	id: Maybe<Scalars['ID']>
	/** The language of the site element is associated with. */
	language: Maybe<Scalars['String']>
	/** The user's last name. */
	lastName: Maybe<Scalars['String']>
	/** The user's full name or username. */
	name: Maybe<Scalars['String']>
	/** The user’s preferences. */
	preferences: Maybe<Scalars['String']>
	/** The user’s preferred language. */
	preferredLanguage: Maybe<Scalars['String']>
	/** The element’s search score, if the `search` parameter was used when querying for the element. */
	searchScore: Maybe<Scalars['String']>
	/** The ID of the site the element is associated with. */
	siteId: Maybe<Scalars['Int']>
	/** The element’s slug. */
	slug: Maybe<Scalars['String']>
	/** The element's status. */
	status: Maybe<Scalars['String']>
	/** The element’s title. */
	title: Maybe<Scalars['String']>
	/** Whether the element has been soft-deleted or not. */
	trashed: Maybe<Scalars['Boolean']>
	/** The uid of the entity */
	uid: Maybe<Scalars['String']>
	/** The element’s URI. */
	uri: Maybe<Scalars['String']>
	/** The username. */
	username: Maybe<Scalars['String']>
}

/** This is the interface implemented by all users. */
export type UserInterface_CountArgs = {
	field: Scalars['String']
}

export type RecipeDirections_MatrixField = RecipeDirections_Direction_BlockType

export type RecipeDirections_Direction_BlockType = ElementInterface &
	MatrixBlockInterface & {
		__typename?: 'recipeDirections_direction_BlockType'
		/** Return a number of related elements for a field. */
		_count: Maybe<Scalars['Int']>
		/** Whether the element is archived or not. */
		archived: Maybe<Scalars['Boolean']>
		/** The date the element was created. */
		dateCreated: Maybe<Scalars['DateTime']>
		/** The date the element was last updated. */
		dateUpdated: Maybe<Scalars['DateTime']>
		direction: Maybe<Scalars['String']>
		/** Whether the element is enabled or not. */
		enabled: Maybe<Scalars['Boolean']>
		/** The ID of the field that owns the matrix block. */
		fieldId: Maybe<Scalars['Int']>
		/** The id of the entity */
		id: Maybe<Scalars['ID']>
		/** The language of the site element is associated with. */
		language: Maybe<Scalars['String']>
		/** The ID of the element that owns the matrix block. */
		ownerId: Maybe<Scalars['Int']>
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore: Maybe<Scalars['String']>
		/** The ID of the site the element is associated with. */
		siteId: Maybe<Scalars['Int']>
		/** The element’s slug. */
		slug: Maybe<Scalars['String']>
		/** The sort order of the matrix block within the owner element field. */
		sortOrder: Maybe<Scalars['Int']>
		/** The element's status. */
		status: Maybe<Scalars['String']>
		/** The element’s title. */
		title: Maybe<Scalars['String']>
		/** Whether the element has been soft-deleted or not. */
		trashed: Maybe<Scalars['Boolean']>
		/** The handle of the matrix block's type. */
		typeHandle: Maybe<Scalars['String']>
		/** The ID of the matrix block's type. */
		typeId: Maybe<Scalars['Int']>
		/** The uid of the entity */
		uid: Maybe<Scalars['String']>
		/** The element’s URI. */
		uri: Maybe<Scalars['String']>
	}

export type RecipeDirections_Direction_BlockType_CountArgs = {
	field: Scalars['String']
}

export type RecipeIngredients_MatrixField = RecipeIngredients_Ingredient_BlockType

export type RecipeIngredients_Ingredient_BlockType = ElementInterface &
	MatrixBlockInterface & {
		__typename?: 'recipeIngredients_ingredient_BlockType'
		/** Return a number of related elements for a field. */
		_count: Maybe<Scalars['Int']>
		/** Whether the element is archived or not. */
		archived: Maybe<Scalars['Boolean']>
		/** The date the element was created. */
		dateCreated: Maybe<Scalars['DateTime']>
		/** The date the element was last updated. */
		dateUpdated: Maybe<Scalars['DateTime']>
		/** Whether the element is enabled or not. */
		enabled: Maybe<Scalars['Boolean']>
		/** The ID of the field that owns the matrix block. */
		fieldId: Maybe<Scalars['Int']>
		/** The id of the entity */
		id: Maybe<Scalars['ID']>
		ingredient: Maybe<Scalars['String']>
		/** The language of the site element is associated with. */
		language: Maybe<Scalars['String']>
		/** The ID of the element that owns the matrix block. */
		ownerId: Maybe<Scalars['Int']>
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore: Maybe<Scalars['String']>
		/** The ID of the site the element is associated with. */
		siteId: Maybe<Scalars['Int']>
		/** The element’s slug. */
		slug: Maybe<Scalars['String']>
		/** The sort order of the matrix block within the owner element field. */
		sortOrder: Maybe<Scalars['Int']>
		/** The element's status. */
		status: Maybe<Scalars['String']>
		/** The element’s title. */
		title: Maybe<Scalars['String']>
		/** Whether the element has been soft-deleted or not. */
		trashed: Maybe<Scalars['Boolean']>
		/** The handle of the matrix block's type. */
		typeHandle: Maybe<Scalars['String']>
		/** The ID of the matrix block's type. */
		typeId: Maybe<Scalars['Int']>
		/** The uid of the entity */
		uid: Maybe<Scalars['String']>
		/** The element’s URI. */
		uri: Maybe<Scalars['String']>
	}

export type RecipeIngredients_Ingredient_BlockType_CountArgs = {
	field: Scalars['String']
}

export type Recipes_Recipes_Entry = ElementInterface &
	EntryInterface & {
		__typename?: 'recipes_recipes_Entry'
		/** Return a number of related elements for a field. */
		_count: Maybe<Scalars['Int']>
		/** Whether the element is archived or not. */
		archived: Maybe<Scalars['Boolean']>
		/** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
		children: Maybe<Array<Maybe<EntryInterface>>>
		/** The date the element was created. */
		dateCreated: Maybe<Scalars['DateTime']>
		/** The date the element was last updated. */
		dateUpdated: Maybe<Scalars['DateTime']>
		/** The ID of the draft to return (from the `drafts` table) */
		draftId: Maybe<Scalars['Int']>
		/** The name of the draft. */
		draftName: Maybe<Scalars['String']>
		/** The notes for the draft. */
		draftNotes: Maybe<Scalars['String']>
		/** Whether the element is enabled or not. */
		enabled: Maybe<Scalars['Boolean']>
		/** The expiry date of the entry. */
		expiryDate: Maybe<Scalars['DateTime']>
		/** The id of the entity */
		id: Maybe<Scalars['ID']>
		/** Returns whether this is a draft. */
		isDraft: Maybe<Scalars['Boolean']>
		/** Returns whether this is a revision. */
		isRevision: Maybe<Scalars['Boolean']>
		/** Returns whether this is an unpublished draft. */
		isUnpublishedDraft: Maybe<Scalars['Boolean']>
		/** Returns whether this is an unpublished draft. **This field is deprecated.** `isUnpublishedDraft` should be used instead. */
		isUnsavedDraft: Maybe<Scalars['Boolean']>
		/** The language of the site element is associated with. */
		language: Maybe<Scalars['String']>
		/** The element’s level within its structure */
		level: Maybe<Scalars['Int']>
		/** The element’s left position within its structure. */
		lft: Maybe<Scalars['Int']>
		/** The same element in other locales. */
		localized: Maybe<Array<Maybe<EntryInterface>>>
		/** Returns the next element relative to this one, from a given set of criteria. */
		next: Maybe<EntryInterface>
		/** The entry’s parent, if the section is a structure. */
		parent: Maybe<EntryInterface>
		/** The entry's post date. */
		postDate: Maybe<Scalars['DateTime']>
		/** Returns the previous element relative to this one, from a given set of criteria. */
		prev: Maybe<EntryInterface>
		recipeDirections: Maybe<Array<Maybe<RecipeDirections_MatrixField>>>
		recipeIngredients: Maybe<Array<Maybe<RecipeIngredients_MatrixField>>>
		recipeServings: Maybe<Scalars['String']>
		recipeTotalTime: Maybe<Scalars['String']>
		/** The element’s right position within its structure. */
		rgt: Maybe<Scalars['Int']>
		/** The element’s structure’s root ID */
		root: Maybe<Scalars['Int']>
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore: Maybe<Scalars['String']>
		/** The handle of the section that contains the entry. */
		sectionHandle: Maybe<Scalars['String']>
		/** The ID of the section that contains the entry. */
		sectionId: Maybe<Scalars['Int']>
		/** The ID of the site the element is associated with. */
		siteId: Maybe<Scalars['Int']>
		/** The element’s slug. */
		slug: Maybe<Scalars['String']>
		/** Returns the element’s ID, or if it’s a draft/revision, its source element’s ID. */
		sourceId: Maybe<Scalars['Int']>
		/** Returns the element’s UUID, or if it’s a draft/revision, its source element’s UUID. */
		sourceUid: Maybe<Scalars['String']>
		/** The element's status. */
		status: Maybe<Scalars['String']>
		/** The element’s structure ID. */
		structureId: Maybe<Scalars['Int']>
		/** The element’s title. */
		title: Maybe<Scalars['String']>
		/** Whether the element has been soft-deleted or not. */
		trashed: Maybe<Scalars['Boolean']>
		/** The handle of the entry type that contains the entry. */
		typeHandle: Maybe<Scalars['String']>
		/** The ID of the entry type that contains the entry. */
		typeId: Maybe<Scalars['Int']>
		/** The uid of the entity */
		uid: Maybe<Scalars['String']>
		/** The element’s URI. */
		uri: Maybe<Scalars['String']>
		/** The element’s full URL */
		url: Maybe<Scalars['String']>
	}

export type Recipes_Recipes_Entry_CountArgs = {
	field: Scalars['String']
}

export type Recipes_Recipes_EntryChildrenArgs = {
	after: InputMaybe<Scalars['String']>
	ancestorDist: InputMaybe<Scalars['Int']>
	ancestorOf: InputMaybe<Scalars['Int']>
	authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	before: InputMaybe<Scalars['String']>
	dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	descendantDist: InputMaybe<Scalars['Int']>
	descendantOf: InputMaybe<Scalars['Int']>
	editable: InputMaybe<Scalars['Boolean']>
	enabledForSite: InputMaybe<Scalars['Boolean']>
	expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	fixedOrder: InputMaybe<Scalars['Boolean']>
	hasDescendants: InputMaybe<Scalars['Boolean']>
	id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	inReverse: InputMaybe<Scalars['Boolean']>
	leaves: InputMaybe<Scalars['Boolean']>
	level: InputMaybe<Scalars['Int']>
	limit: InputMaybe<Scalars['Int']>
	nextSiblingOf: InputMaybe<Scalars['Int']>
	offset: InputMaybe<Scalars['Int']>
	orderBy: InputMaybe<Scalars['String']>
	positionedAfter: InputMaybe<Scalars['Int']>
	positionedBefore: InputMaybe<Scalars['Int']>
	postDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	prevSiblingOf: InputMaybe<Scalars['Int']>
	recipeServings: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	recipeTotalTime: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	search: InputMaybe<Scalars['String']>
	section: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	site: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	structureId: InputMaybe<Scalars['Int']>
	title: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	type: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	unique: InputMaybe<Scalars['Boolean']>
	uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	withStructure: InputMaybe<Scalars['Boolean']>
}

export type Recipes_Recipes_EntryLocalizedArgs = {
	after: InputMaybe<Scalars['String']>
	ancestorDist: InputMaybe<Scalars['Int']>
	ancestorOf: InputMaybe<Scalars['Int']>
	authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	before: InputMaybe<Scalars['String']>
	dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	descendantDist: InputMaybe<Scalars['Int']>
	descendantOf: InputMaybe<Scalars['Int']>
	editable: InputMaybe<Scalars['Boolean']>
	enabledForSite: InputMaybe<Scalars['Boolean']>
	expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	fixedOrder: InputMaybe<Scalars['Boolean']>
	hasDescendants: InputMaybe<Scalars['Boolean']>
	id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	inReverse: InputMaybe<Scalars['Boolean']>
	leaves: InputMaybe<Scalars['Boolean']>
	level: InputMaybe<Scalars['Int']>
	limit: InputMaybe<Scalars['Int']>
	nextSiblingOf: InputMaybe<Scalars['Int']>
	offset: InputMaybe<Scalars['Int']>
	orderBy: InputMaybe<Scalars['String']>
	positionedAfter: InputMaybe<Scalars['Int']>
	positionedBefore: InputMaybe<Scalars['Int']>
	postDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	prevSiblingOf: InputMaybe<Scalars['Int']>
	recipeServings: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	recipeTotalTime: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	search: InputMaybe<Scalars['String']>
	section: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	site: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	structureId: InputMaybe<Scalars['Int']>
	title: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	type: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	unique: InputMaybe<Scalars['Boolean']>
	uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	withStructure: InputMaybe<Scalars['Boolean']>
}

export type Recipes_Recipes_EntryNextArgs = {
	after: InputMaybe<Scalars['String']>
	ancestorDist: InputMaybe<Scalars['Int']>
	ancestorOf: InputMaybe<Scalars['Int']>
	authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	before: InputMaybe<Scalars['String']>
	dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	descendantDist: InputMaybe<Scalars['Int']>
	descendantOf: InputMaybe<Scalars['Int']>
	editable: InputMaybe<Scalars['Boolean']>
	enabledForSite: InputMaybe<Scalars['Boolean']>
	expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	fixedOrder: InputMaybe<Scalars['Boolean']>
	hasDescendants: InputMaybe<Scalars['Boolean']>
	id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	inReverse: InputMaybe<Scalars['Boolean']>
	leaves: InputMaybe<Scalars['Boolean']>
	level: InputMaybe<Scalars['Int']>
	limit: InputMaybe<Scalars['Int']>
	nextSiblingOf: InputMaybe<Scalars['Int']>
	offset: InputMaybe<Scalars['Int']>
	orderBy: InputMaybe<Scalars['String']>
	positionedAfter: InputMaybe<Scalars['Int']>
	positionedBefore: InputMaybe<Scalars['Int']>
	postDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	prevSiblingOf: InputMaybe<Scalars['Int']>
	recipeServings: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	recipeTotalTime: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	search: InputMaybe<Scalars['String']>
	section: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	site: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	structureId: InputMaybe<Scalars['Int']>
	title: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	type: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	unique: InputMaybe<Scalars['Boolean']>
	uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	withStructure: InputMaybe<Scalars['Boolean']>
}

export type Recipes_Recipes_EntryParentArgs = {
	after: InputMaybe<Scalars['String']>
	ancestorDist: InputMaybe<Scalars['Int']>
	ancestorOf: InputMaybe<Scalars['Int']>
	authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	before: InputMaybe<Scalars['String']>
	dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	descendantDist: InputMaybe<Scalars['Int']>
	descendantOf: InputMaybe<Scalars['Int']>
	editable: InputMaybe<Scalars['Boolean']>
	enabledForSite: InputMaybe<Scalars['Boolean']>
	expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	fixedOrder: InputMaybe<Scalars['Boolean']>
	hasDescendants: InputMaybe<Scalars['Boolean']>
	id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	inReverse: InputMaybe<Scalars['Boolean']>
	leaves: InputMaybe<Scalars['Boolean']>
	level: InputMaybe<Scalars['Int']>
	limit: InputMaybe<Scalars['Int']>
	nextSiblingOf: InputMaybe<Scalars['Int']>
	offset: InputMaybe<Scalars['Int']>
	orderBy: InputMaybe<Scalars['String']>
	positionedAfter: InputMaybe<Scalars['Int']>
	positionedBefore: InputMaybe<Scalars['Int']>
	postDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	prevSiblingOf: InputMaybe<Scalars['Int']>
	recipeServings: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	recipeTotalTime: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	search: InputMaybe<Scalars['String']>
	section: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	site: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	structureId: InputMaybe<Scalars['Int']>
	title: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	type: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	unique: InputMaybe<Scalars['Boolean']>
	uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	withStructure: InputMaybe<Scalars['Boolean']>
}

export type Recipes_Recipes_EntryPrevArgs = {
	after: InputMaybe<Scalars['String']>
	ancestorDist: InputMaybe<Scalars['Int']>
	ancestorOf: InputMaybe<Scalars['Int']>
	authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	before: InputMaybe<Scalars['String']>
	dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	descendantDist: InputMaybe<Scalars['Int']>
	descendantOf: InputMaybe<Scalars['Int']>
	editable: InputMaybe<Scalars['Boolean']>
	enabledForSite: InputMaybe<Scalars['Boolean']>
	expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	fixedOrder: InputMaybe<Scalars['Boolean']>
	hasDescendants: InputMaybe<Scalars['Boolean']>
	id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	inReverse: InputMaybe<Scalars['Boolean']>
	leaves: InputMaybe<Scalars['Boolean']>
	level: InputMaybe<Scalars['Int']>
	limit: InputMaybe<Scalars['Int']>
	nextSiblingOf: InputMaybe<Scalars['Int']>
	offset: InputMaybe<Scalars['Int']>
	orderBy: InputMaybe<Scalars['String']>
	positionedAfter: InputMaybe<Scalars['Int']>
	positionedBefore: InputMaybe<Scalars['Int']>
	postDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	prevSiblingOf: InputMaybe<Scalars['Int']>
	recipeServings: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	recipeTotalTime: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	search: InputMaybe<Scalars['String']>
	section: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	site: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	structureId: InputMaybe<Scalars['Int']>
	title: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	type: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	unique: InputMaybe<Scalars['Boolean']>
	uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	withStructure: InputMaybe<Scalars['Boolean']>
}

export type Recipes_Recipes_EntryRecipeDirectionsArgs = {
	dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	enabledForSite: InputMaybe<Scalars['Boolean']>
	fieldId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	fixedOrder: InputMaybe<Scalars['Boolean']>
	id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	inReverse: InputMaybe<Scalars['Boolean']>
	limit: InputMaybe<Scalars['Int']>
	offset: InputMaybe<Scalars['Int']>
	orderBy: InputMaybe<Scalars['String']>
	ownerId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	search: InputMaybe<Scalars['String']>
	site: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	title: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	type: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	unique: InputMaybe<Scalars['Boolean']>
	uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type Recipes_Recipes_EntryRecipeIngredientsArgs = {
	dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	enabledForSite: InputMaybe<Scalars['Boolean']>
	fieldId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	fixedOrder: InputMaybe<Scalars['Boolean']>
	id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	inReverse: InputMaybe<Scalars['Boolean']>
	limit: InputMaybe<Scalars['Int']>
	offset: InputMaybe<Scalars['Int']>
	orderBy: InputMaybe<Scalars['String']>
	ownerId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	search: InputMaybe<Scalars['String']>
	site: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	title: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	type: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	unique: InputMaybe<Scalars['Boolean']>
	uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type RecipeFieldsFragment = {
	__typename?: 'recipes_recipes_Entry'
	id: string | null | undefined
	recipeTotalTime: string | null | undefined
	recipeServings: string | null | undefined
	title: string | null | undefined
	slug: string | null | undefined
	recipeIngredients:
		| Array<
				| {
						__typename?: 'recipeIngredients_ingredient_BlockType'
						id: string | null | undefined
						ingredient: string | null | undefined
				  }
				| null
				| undefined
		  >
		| null
		| undefined
	recipeDirections:
		| Array<
				| {
						__typename?: 'recipeDirections_direction_BlockType'
						id: string | null | undefined
						direction: string | null | undefined
				  }
				| null
				| undefined
		  >
		| null
		| undefined
}

export type RecipesQueryVariables = Exact<{
	slug: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>
}>

export type RecipesQuery = {
	__typename?: 'Query'
	entries:
		| Array<
				| {
						__typename?: 'recipes_recipes_Entry'
						id: string | null | undefined
						recipeTotalTime: string | null | undefined
						recipeServings: string | null | undefined
						title: string | null | undefined
						slug: string | null | undefined
						recipeIngredients:
							| Array<
									| {
											__typename?: 'recipeIngredients_ingredient_BlockType'
											id: string | null | undefined
											ingredient: string | null | undefined
									  }
									| null
									| undefined
							  >
							| null
							| undefined
						recipeDirections:
							| Array<
									| {
											__typename?: 'recipeDirections_direction_BlockType'
											id: string | null | undefined
											direction: string | null | undefined
									  }
									| null
									| undefined
							  >
							| null
							| undefined
				  }
				| null
				| undefined
		  >
		| null
		| undefined
}

export const RecipeFieldsFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'RecipeFields' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'recipes_recipes_Entry' }
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{
						kind: 'InlineFragment',
						typeCondition: {
							kind: 'NamedType',
							name: { kind: 'Name', value: 'recipes_recipes_Entry' }
						},
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'recipeTotalTime' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'recipeServings' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'recipeIngredients' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'InlineFragment',
												typeCondition: {
													kind: 'NamedType',
													name: {
														kind: 'Name',
														value: 'recipeIngredients_ingredient_BlockType'
													}
												},
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'id' }
														},
														{
															kind: 'Field',
															name: {
																kind: 'Name',
																value: 'ingredient'
															}
														}
													]
												}
											}
										]
									}
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'recipeDirections' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'InlineFragment',
												typeCondition: {
													kind: 'NamedType',
													name: {
														kind: 'Name',
														value: 'recipeDirections_direction_BlockType'
													}
												},
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'id' }
														},
														{
															kind: 'Field',
															name: {
																kind: 'Name',
																value: 'direction'
															}
														}
													]
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<RecipeFieldsFragment, unknown>
export const RecipesDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'Recipes' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
					type: {
						kind: 'ListType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
					}
				}
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'entries' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'section' },
								value: { kind: 'StringValue', value: 'recipes', block: false }
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'slug' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } }
							}
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: { kind: 'Name', value: 'RecipeFields' }
								}
							]
						}
					}
				]
			}
		},
		...RecipeFieldsFragmentDoc.definitions
	]
} as unknown as DocumentNode<RecipesQuery, RecipesQueryVariables>
