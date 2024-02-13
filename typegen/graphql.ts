/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** A ChatGPT reply for an article with no human fact-checks yet */
export type AiReply = AiResponse & Node & {
  createdAt: Scalars['String']['output'];
  /** The id for the document that this AI response is for. */
  docId: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  /** Processing status of AI */
  status: AiResponseStatusEnum;
  /** AI response text. Populated after status becomes SUCCESS. */
  text: Maybe<Scalars['String']['output']>;
  /** AI response type */
  type: AiResponseTypeEnum;
  updatedAt: Maybe<Scalars['String']['output']>;
  /** The usage returned from OpenAI. Populated after status becomes SUCCESS. */
  usage: Maybe<OpenAiCompletionUsage>;
  /** The user triggered this AI response */
  user: Maybe<User>;
};

/** Denotes an AI processed response and its processing status. */
export type AiResponse = {
  createdAt: Scalars['String']['output'];
  /** The id for the document that this AI response is for. */
  docId: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  /** Processing status of AI */
  status: AiResponseStatusEnum;
  /** AI response text. Populated after status becomes SUCCESS. */
  text: Maybe<Scalars['String']['output']>;
  /** AI response type */
  type: AiResponseTypeEnum;
  updatedAt: Maybe<Scalars['String']['output']>;
  /** The user triggered this AI response */
  user: Maybe<User>;
};

export type AiResponseConnection = Connection & {
  edges: Array<AiResponseConnectionEdge>;
  pageInfo: AiResponseConnectionPageInfo;
  /** The total count of the entire collection, regardless of "before", "after". */
  totalCount: Scalars['Int']['output'];
};

export type AiResponseConnectionEdge = Edge & {
  cursor: Scalars['String']['output'];
  highlight: Maybe<Highlights>;
  node: AiResponse;
  score: Maybe<Scalars['Float']['output']>;
};

export type AiResponseConnectionPageInfo = PageInfo & {
  firstCursor: Maybe<Scalars['String']['output']>;
  lastCursor: Maybe<Scalars['String']['output']>;
};

export type AiResponseStatusEnum =
  | 'ERROR'
  | 'LOADING'
  | 'SUCCESS';

export type AiResponseTypeEnum =
  /** The AI Response is an automated analysis / reply of an article. */
  | 'AI_REPLY'
  /** AI transcribed text of the specified article. */
  | 'TRANSCRIPT';

/** Transcript from OCR or speech-to-text AI models for the specified MediaEntry ID as docId. */
export type AiTranscript = AiResponse & Node & {
  createdAt: Scalars['String']['output'];
  /** The id for the document that this AI response is for. */
  docId: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  /** Processing status of AI */
  status: AiResponseStatusEnum;
  /** AI response text. Populated after status becomes SUCCESS. */
  text: Maybe<Scalars['String']['output']>;
  /** AI response type */
  type: AiResponseTypeEnum;
  updatedAt: Maybe<Scalars['String']['output']>;
  /** The user triggered this AI response */
  user: Maybe<User>;
};

export type Analytics = Node & {
  /** The day this analytic datapoint is represented, in YYYY-MM-DD format */
  date: Scalars['String']['output'];
  /** Authoring app ID of the document that this analytic datapoint measures. */
  docAppId: Maybe<Scalars['ID']['output']>;
  /** The id for the document that this analytic datapoint is for. */
  docId: Scalars['ID']['output'];
  /** Author of the document that this analytic datapoint measures. */
  docUserId: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  liff: Array<AnalyticsLiffEntry>;
  /** Sum of LIFF visitor count from all sources */
  liffUser: Scalars['Int']['output'];
  /** Sum of LIFF view count from all sources */
  liffVisit: Scalars['Int']['output'];
  lineUser: Maybe<Scalars['Int']['output']>;
  lineVisit: Maybe<Scalars['Int']['output']>;
  /** Type of document that this analytic datapoint is for. */
  type: AnalyticsDocTypeEnum;
  webUser: Maybe<Scalars['Int']['output']>;
  webVisit: Maybe<Scalars['Int']['output']>;
};

export type AnalyticsConnection = Connection & {
  edges: Array<AnalyticsConnectionEdge>;
  pageInfo: AnalyticsConnectionPageInfo;
  /** The total count of the entire collection, regardless of "before", "after". */
  totalCount: Scalars['Int']['output'];
};

export type AnalyticsConnectionEdge = Edge & {
  cursor: Scalars['String']['output'];
  highlight: Maybe<Highlights>;
  node: Analytics;
  score: Maybe<Scalars['Float']['output']>;
};

export type AnalyticsConnectionPageInfo = PageInfo & {
  firstCursor: Maybe<Scalars['String']['output']>;
  lastCursor: Maybe<Scalars['String']['output']>;
};

export type AnalyticsDocTypeEnum =
  | 'ARTICLE'
  | 'REPLY';

export type AnalyticsLiffEntry = {
  /** utm_source for this LIFF stat entry. Empty string if not set. */
  source: Scalars['String']['output'];
  user: Scalars['Int']['output'];
  visit: Scalars['Int']['output'];
};

export type Article = Node & {
  /** Automated reply from AI before human fact checkers compose an fact check */
  aiReplies: Array<AiReply>;
  /** Automated transcript */
  aiTranscripts: Array<AiTranscript>;
  articleCategories: Array<ArticleCategory>;
  /** Connections between this article and replies. Sorted by the logic described in https://github.com/cofacts/rumors-line-bot/issues/78. */
  articleReplies: Array<ArticleReply>;
  /** Message event type */
  articleType: ArticleTypeEnum;
  /** Attachment hash to search or identify files */
  attachmentHash: Maybe<Scalars['String']['output']>;
  /** Attachment URL for this article. */
  attachmentUrl: Maybe<Scalars['String']['output']>;
  /** Number of normal article categories */
  categoryCount: Scalars['Int']['output'];
  cooccurrences: Maybe<Array<Cooccurrence>>;
  /** May be null for legacy articles */
  createdAt: Maybe<Scalars['String']['output']>;
  /** Hyperlinks in article text */
  hyperlinks: Maybe<Array<Maybe<Hyperlink>>>;
  id: Scalars['ID']['output'];
  lastRequestedAt: Maybe<Scalars['String']['output']>;
  references: Maybe<Array<Maybe<ArticleReference>>>;
  relatedArticles: ArticleConnection;
  /** Number of normal article replies */
  replyCount: Scalars['Int']['output'];
  replyRequestCount: Maybe<Scalars['Int']['output']>;
  replyRequests: Maybe<Array<Maybe<ReplyRequest>>>;
  /** If the current user has requested for reply for this article. Null if not logged in. */
  requestedForReply: Maybe<Scalars['Boolean']['output']>;
  /** Activities analytics for the given article */
  stats: Maybe<Array<Maybe<Analytics>>>;
  status: ReplyRequestStatusEnum;
  text: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['String']['output']>;
  /** The user submitted this article */
  user: Maybe<User>;
};


export type ArticleArticleCategoriesArgs = {
  status: InputMaybe<ArticleCategoryStatusEnum>;
  statuses?: InputMaybe<Array<ArticleCategoryStatusEnum>>;
};


export type ArticleArticleRepliesArgs = {
  appId: InputMaybe<Scalars['String']['input']>;
  selfOnly: InputMaybe<Scalars['Boolean']['input']>;
  status: InputMaybe<ArticleReplyStatusEnum>;
  statuses?: InputMaybe<Array<ArticleReplyStatusEnum>>;
  userId: InputMaybe<Scalars['String']['input']>;
  userIds: InputMaybe<Array<Scalars['String']['input']>>;
};


export type ArticleAttachmentUrlArgs = {
  variant: InputMaybe<AttachmentVariantEnum>;
};


export type ArticleRelatedArticlesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<RelatedArticleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Array<InputMaybe<RelatedArticleOrderBy>>>;
};


export type ArticleReplyRequestsArgs = {
  statuses?: InputMaybe<Array<ReplyRequestStatusEnum>>;
};


export type ArticleStatsArgs = {
  dateRange: InputMaybe<TimeRangeInput>;
};

/** The linkage between an Article and a Category */
export type ArticleCategory = Node & {
  aiConfidence: Maybe<Scalars['Float']['output']>;
  aiModel: Maybe<Scalars['String']['output']>;
  appId: Scalars['String']['output'];
  article: Maybe<Article>;
  articleId: Maybe<Scalars['String']['output']>;
  canUpdateStatus: Maybe<Scalars['Boolean']['output']>;
  category: Maybe<Category>;
  categoryId: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['String']['output']>;
  feedbackCount: Maybe<Scalars['Int']['output']>;
  feedbacks: Maybe<Array<Maybe<ArticleCategoryFeedback>>>;
  id: Scalars['ID']['output'];
  negativeFeedbackCount: Maybe<Scalars['Int']['output']>;
  /** The feedback of current user. null when not logged in or not voted yet. */
  ownVote: Maybe<FeedbackVote>;
  positiveFeedbackCount: Maybe<Scalars['Int']['output']>;
  status: Maybe<ArticleCategoryStatusEnum>;
  updatedAt: Maybe<Scalars['String']['output']>;
  /** The user who updated this category with this article. */
  user: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type ArticleCategoryConnection = Connection & {
  edges: Array<ArticleCategoryConnectionEdge>;
  pageInfo: ArticleCategoryConnectionPageInfo;
  /** The total count of the entire collection, regardless of "before", "after". */
  totalCount: Scalars['Int']['output'];
};

export type ArticleCategoryConnectionEdge = Edge & {
  cursor: Scalars['String']['output'];
  highlight: Maybe<Highlights>;
  node: ArticleCategory;
  score: Maybe<Scalars['Float']['output']>;
};

export type ArticleCategoryConnectionPageInfo = PageInfo & {
  firstCursor: Maybe<Scalars['String']['output']>;
  lastCursor: Maybe<Scalars['String']['output']>;
};

/** User feedback to an ArticleCategory */
export type ArticleCategoryFeedback = {
  comment: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['String']['output']>;
  user: Maybe<User>;
  /** User's vote on the articleCategory */
  vote: Maybe<FeedbackVote>;
};

export type ArticleCategoryStatusEnum =
  /** Created by a blocked user violating terms of use. */
  | 'BLOCKED'
  | 'DELETED'
  | 'NORMAL';

export type ArticleConnection = Connection & {
  edges: Array<ArticleConnectionEdge>;
  pageInfo: ArticleConnectionPageInfo;
  /** The total count of the entire collection, regardless of "before", "after". */
  totalCount: Scalars['Int']['output'];
};

export type ArticleConnectionEdge = Edge & {
  cursor: Scalars['String']['output'];
  highlight: Maybe<Highlights>;
  /**
   * The search hit's similarity with provided mediaUrl.
   *           Ranges from 0 to 1. 0 if mediaUrl is not provided, or the hit is not matched by mediaUrl.
   */
  mediaSimilarity: Scalars['Float']['output'];
  node: Article;
  score: Maybe<Scalars['Float']['output']>;
};

export type ArticleConnectionPageInfo = PageInfo & {
  firstCursor: Maybe<Scalars['String']['output']>;
  lastCursor: Maybe<Scalars['String']['output']>;
};

export type ArticleReference = {
  createdAt: Scalars['String']['output'];
  permalink: Maybe<Scalars['String']['output']>;
  type: ArticleReferenceTypeEnum;
};

export type ArticleReferenceInput = {
  permalink: InputMaybe<Scalars['String']['input']>;
  type: ArticleReferenceTypeEnum;
};

/** Where this article is collected from. */
export type ArticleReferenceTypeEnum =
  /** The article is collected from conversations in LINE messengers. */
  | 'LINE'
  /** The article is collected from the Internet, with a link to the article available. */
  | 'URL';

/** The linkage between an Article and a Reply */
export type ArticleReply = {
  appId: Scalars['String']['output'];
  article: Maybe<Article>;
  articleId: Scalars['String']['output'];
  canUpdateStatus: Scalars['Boolean']['output'];
  /** May be null for legacy article-replies */
  createdAt: Maybe<Scalars['String']['output']>;
  feedbackCount: Scalars['Int']['output'];
  feedbacks: Array<ArticleReplyFeedback>;
  negativeFeedbackCount: Scalars['Int']['output'];
  /** The feedback of current user. null when not logged in or not voted yet. */
  ownVote: Maybe<FeedbackVote>;
  positiveFeedbackCount: Scalars['Int']['output'];
  reply: Maybe<Reply>;
  replyId: Scalars['String']['output'];
  /** Cached reply type value stored in ArticleReply */
  replyType: Maybe<ReplyTypeEnum>;
  status: ArticleReplyStatusEnum;
  updatedAt: Maybe<Scalars['String']['output']>;
  /** The user who conencted this reply and this article. */
  user: Maybe<User>;
  userId: Scalars['String']['output'];
};


/** The linkage between an Article and a Reply */
export type ArticleReplyFeedbacksArgs = {
  statuses?: InputMaybe<Array<ArticleReplyFeedbackStatusEnum>>;
};

/** User feedback to an ArticleReply */
export type ArticleReplyFeedback = Node & {
  appId: Maybe<Scalars['String']['output']>;
  /** The scored article-reply's article */
  article: Maybe<Article>;
  /** The scored article-reply */
  articleReply: Maybe<ArticleReply>;
  /** User ID of the article-reply's author */
  articleReplyUserId: Scalars['String']['output'];
  comment: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The scored article-reply's reply */
  reply: Maybe<Reply>;
  /** User ID of the reply's author */
  replyUserId: Scalars['String']['output'];
  /**
   * One of 1, 0 and -1. Representing upvote, neutral and downvote, respectively
   * @deprecated Use vote instead
   */
  score: Maybe<Scalars['Int']['output']>;
  status: ArticleReplyFeedbackStatusEnum;
  updatedAt: Maybe<Scalars['String']['output']>;
  user: Maybe<User>;
  userId: Maybe<Scalars['String']['output']>;
  /** User's vote on the articleReply */
  vote: Maybe<FeedbackVote>;
};

export type ArticleReplyFeedbackStatusEnum =
  /** Created by a blocked user violating terms of use. */
  | 'BLOCKED'
  | 'NORMAL';

export type ArticleReplyFilterInput = {
  /** Show only articleReplies created by a specific app. */
  appId: InputMaybe<Scalars['String']['input']>;
  /** List only the articleReplies that were created between the specific time range. */
  createdAt: InputMaybe<TimeRangeInput>;
  replyTypes: InputMaybe<Array<InputMaybe<ReplyTypeEnum>>>;
  /** Only list the articleReplies created by the currently logged in user */
  selfOnly: InputMaybe<Scalars['Boolean']['input']>;
  statuses: InputMaybe<Array<ArticleReplyStatusEnum>>;
  /** Show only articleReplies created by the specific user. */
  userId: InputMaybe<Scalars['String']['input']>;
  /** Show only articleReplies created by the specified users. */
  userIds: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ArticleReplyStatusEnum =
  /** Created by a blocked user violating terms of use. */
  | 'BLOCKED'
  | 'DELETED'
  | 'NORMAL';

export type ArticleStatusEnum =
  /** Created by a blocked user violating terms of use. */
  | 'BLOCKED'
  | 'NORMAL';

export type ArticleTypeEnum =
  | 'AUDIO'
  | 'IMAGE'
  | 'TEXT'
  | 'VIDEO';

export type AttachmentVariantEnum =
  /** The original file. Only available to logged-in users. */
  | 'ORIGINAL'
  /** Downsized file. Fixed-width webp for images; other type TBD. */
  | 'PREVIEW'
  /** Tiny, static image representing the attachment. Fixed-height jpeg for images; other types TBD. */
  | 'THUMBNAIL';

export type AvatarTypeEnum =
  | 'Facebook'
  | 'Github'
  | 'Gravatar'
  | 'OpenPeeps';

/** Category label for specific topic */
export type Category = Node & {
  articleCategories: Maybe<ArticleCategoryConnection>;
  createdAt: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['String']['output']>;
};


/** Category label for specific topic */
export type CategoryArticleCategoriesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Array<InputMaybe<CategoryArticleCategoriesOrderBy>>>;
  status: InputMaybe<ArticleCategoryStatusEnum>;
};

/** An entry of orderBy argument. Specifies field name and the sort order. Only one field name is allowd per entry. */
export type CategoryArticleCategoriesOrderBy = {
  createdAt: InputMaybe<SortOrderEnum>;
};

/** Connection model for a list of nodes. Modeled after Relay's GraphQL Server Specification. */
export type Connection = {
  edges: Array<Edge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Contribution = {
  count: Maybe<Scalars['Int']['output']>;
  date: Maybe<Scalars['String']['output']>;
};

export type Cooccurrence = Node & {
  appId: Scalars['String']['output'];
  articleIds: Array<Scalars['String']['output']>;
  articles: Array<Article>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

/** Edge in Connection. Modeled after GraphQL connection model. */
export type Edge = {
  cursor: Scalars['String']['output'];
  node: Node;
};

export type FeedbackVote =
  | 'DOWNVOTE'
  | 'NEUTRAL'
  | 'UPVOTE';

export type Highlights = {
  /** Article or Reply hyperlinks */
  hyperlinks: Maybe<Array<Maybe<Hyperlink>>>;
  /** Reply reference */
  reference: Maybe<Scalars['String']['output']>;
  /** Article or Reply text */
  text: Maybe<Scalars['String']['output']>;
};

/** Data behind a hyperlink */
export type Hyperlink = {
  error: Maybe<Scalars['String']['output']>;
  fetchedAt: Maybe<Scalars['String']['output']>;
  /** URL normalized by scrapUrl */
  normalizedUrl: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  summary: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
  topImageUrl: Maybe<Scalars['String']['output']>;
  /** URL in text */
  url: Maybe<Scalars['String']['output']>;
};

export type ListAiResponsesFilter = {
  /** Show only AI responses created by a specific app. */
  appId: InputMaybe<Scalars['String']['input']>;
  /** List only the AI responses that were created between the specific time range. */
  createdAt: InputMaybe<TimeRangeInput>;
  /** If specified, only return AI repsonses under the specified doc IDs. */
  docIds: InputMaybe<Array<Scalars['ID']['input']>>;
  /** If given, only list out AI responses with specific IDs */
  ids: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Only list the AI responses created by the currently logged in user */
  selfOnly: InputMaybe<Scalars['Boolean']['input']>;
  /** If specified, only return AI repsonses under the specified statuses. */
  statuses: InputMaybe<Array<AiResponseStatusEnum>>;
  /** If specified, only return AI repsonses with the specified types. */
  types: InputMaybe<Array<AiResponseTypeEnum>>;
  /** List only the AI responses updated within the specific time range. */
  updatedAt: InputMaybe<TimeRangeInput>;
  /** Show only AI responses created by the specific user. */
  userId: InputMaybe<Scalars['String']['input']>;
  /** Show only AI responses created by the specified users. */
  userIds: InputMaybe<Array<Scalars['String']['input']>>;
};

/** An entry of orderBy argument. Specifies field name and the sort order. Only one field name is allowd per entry. */
export type ListAiResponsesOrderBy = {
  createdAt: InputMaybe<SortOrderEnum>;
  updatedAt: InputMaybe<SortOrderEnum>;
};

export type ListAnalyticsFilter = {
  /** List only the activities between the specific time range. */
  date: InputMaybe<TimeRangeInput>;
  docAppId: InputMaybe<Scalars['ID']['input']>;
  docId: InputMaybe<Scalars['ID']['input']>;
  docUserId: InputMaybe<Scalars['ID']['input']>;
  type: InputMaybe<AnalyticsDocTypeEnum>;
};

/** An entry of orderBy argument. Specifies field name and the sort order. Only one field name is allowd per entry. */
export type ListAnalyticsOrderBy = {
  date: InputMaybe<SortOrderEnum>;
};

export type ListArticleFilter = {
  /** Show only articles created by a specific app. */
  appId: InputMaybe<Scalars['String']['input']>;
  /** Show only articles with(out) article replies created by specified user */
  articleRepliesFrom: InputMaybe<UserAndExistInput>;
  /** Show articles with article replies matching this criteria */
  articleReply: InputMaybe<ArticleReplyFilterInput>;
  /** List the articles with certain types */
  articleTypes: InputMaybe<Array<InputMaybe<ArticleTypeEnum>>>;
  /** List only the articles whose number of categories match the criteria. */
  categoryCount: InputMaybe<RangeInput>;
  /** List only articles that match any of the specified categories.ArticleCategories that are deleted or has more negative feedbacks than positive ones are not taken into account. */
  categoryIds: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** List only the articles that were created between the specific time range. */
  createdAt: InputMaybe<TimeRangeInput>;
  /** Specify an articleId here to show only articles from the sender of that specified article. */
  fromUserOfArticleId: InputMaybe<Scalars['String']['input']>;
  /**
   *
   *             When true, return only articles with any article replies that has more positive feedback than negative.
   *             When false, return articles with none of its article replies that has more positive feedback, including those with no replies yet.
   *             In both scenario, deleted article replies are not taken into account.
   *
   */
  hasArticleReplyWithMorePositiveFeedback: InputMaybe<Scalars['Boolean']['input']>;
  /** If given, only list out articles with specific IDs */
  ids: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Show the media article similar to the input url */
  mediaUrl: InputMaybe<Scalars['String']['input']>;
  /** List all articles related to a given string. */
  moreLikeThis: InputMaybe<MoreLikeThisInput>;
  /** [Deprecated] use articleReply filter instead. List only the articles that were replied between the specific time range. */
  repliedAt: InputMaybe<TimeRangeInput>;
  /** List only the articles whose number of replies matches the criteria. */
  replyCount: InputMaybe<RangeInput>;
  /** List only the articles whose number of replies matches the criteria. */
  replyRequestCount: InputMaybe<RangeInput>;
  /** [Deprecated] use articleReply filter instead. List the articles with replies of certain types */
  replyTypes: InputMaybe<Array<InputMaybe<ReplyTypeEnum>>>;
  /** Only list the articles created by the currently logged in user */
  selfOnly: InputMaybe<Scalars['Boolean']['input']>;
  /** Returns only articles with the specified statuses */
  statuses: InputMaybe<Array<ArticleStatusEnum>>;
  /** Specifies how the transcript of `mediaUrl` can be used to search. Can only specify `transcript` when `mediaUrl` is specified. */
  transcript: InputMaybe<TranscriptFilter>;
  /** Show only articles created by the specific user. */
  userId: InputMaybe<Scalars['String']['input']>;
  /** Show only articles created by the specified users. */
  userIds: InputMaybe<Array<Scalars['String']['input']>>;
};

/** An entry of orderBy argument. Specifies field name and the sort order. Only one field name is allowd per entry. */
export type ListArticleOrderBy = {
  _score: InputMaybe<SortOrderEnum>;
  createdAt: InputMaybe<SortOrderEnum>;
  lastMatchingArticleReplyCreatedAt: InputMaybe<SortOrderEnum>;
  lastRepliedAt: InputMaybe<SortOrderEnum>;
  lastRequestedAt: InputMaybe<SortOrderEnum>;
  replyCount: InputMaybe<SortOrderEnum>;
  replyRequestCount: InputMaybe<SortOrderEnum>;
  updatedAt: InputMaybe<SortOrderEnum>;
};

export type ListArticleReplyFeedbackConnection = Connection & {
  edges: Array<ListArticleReplyFeedbackConnectionEdge>;
  pageInfo: ListArticleReplyFeedbackConnectionPageInfo;
  /** The total count of the entire collection, regardless of "before", "after". */
  totalCount: Scalars['Int']['output'];
};

export type ListArticleReplyFeedbackConnectionEdge = Edge & {
  cursor: Scalars['String']['output'];
  highlight: Maybe<Highlights>;
  node: ArticleReplyFeedback;
  score: Maybe<Scalars['Float']['output']>;
};

export type ListArticleReplyFeedbackConnectionPageInfo = PageInfo & {
  firstCursor: Maybe<Scalars['String']['output']>;
  lastCursor: Maybe<Scalars['String']['output']>;
};

export type ListArticleReplyFeedbackFilter = {
  /** Show only article reply feedbacks created by a specific app. */
  appId: InputMaybe<Scalars['String']['input']>;
  articleId: InputMaybe<Scalars['String']['input']>;
  /** List only the feedbacks to the article-replies created by this user ID */
  articleReplyUserId: InputMaybe<Scalars['String']['input']>;
  /** List only the feedbacks whose `replyUserId` *or* `articleReplyUserId` is this user ID */
  authorId: InputMaybe<Scalars['String']['input']>;
  /** List only the article reply feedbacks that were created between the specific time range. */
  createdAt: InputMaybe<TimeRangeInput>;
  /** If given, only list out article reply feedbacks with specific IDs */
  ids: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Search for comment field using more_like_this query */
  moreLikeThis: InputMaybe<MoreLikeThisInput>;
  replyId: InputMaybe<Scalars['String']['input']>;
  /** List only the feedbacks to the replies created by this user ID */
  replyUserId: InputMaybe<Scalars['String']['input']>;
  /** Only list the article reply feedbacks created by the currently logged in user */
  selfOnly: InputMaybe<Scalars['Boolean']['input']>;
  /** List only the article reply feedbacks with the selected statuses */
  statuses: InputMaybe<Array<ArticleReplyFeedbackStatusEnum>>;
  /** List only the article reply feedbacks that were last updated within the specific time range. */
  updatedAt: InputMaybe<TimeRangeInput>;
  /** Show only article reply feedbacks created by the specific user. */
  userId: InputMaybe<Scalars['String']['input']>;
  /** Show only article reply feedbacks created by the specified users. */
  userIds: InputMaybe<Array<Scalars['String']['input']>>;
  /** When specified, list only article reply feedbacks with specified vote */
  vote: InputMaybe<Array<InputMaybe<FeedbackVote>>>;
};

/** An entry of orderBy argument. Specifies field name and the sort order. Only one field name is allowd per entry. */
export type ListArticleReplyFeedbackOrderBy = {
  /** Full text relevance for comment field queries */
  _score: InputMaybe<SortOrderEnum>;
  createdAt: InputMaybe<SortOrderEnum>;
  updatedAt: InputMaybe<SortOrderEnum>;
  vote: InputMaybe<SortOrderEnum>;
};

export type ListBlockedUsersFilter = {
  /** List only the blocked users that were registered between the specific time range. */
  createdAt: InputMaybe<TimeRangeInput>;
};

/** An entry of orderBy argument. Specifies field name and the sort order. Only one field name is allowd per entry. */
export type ListBlockedUsersOrderBy = {
  createdAt: InputMaybe<SortOrderEnum>;
};

export type ListCategoryConnection = Connection & {
  edges: Array<ListCategoryConnectionEdge>;
  pageInfo: ListCategoryConnectionPageInfo;
  /** The total count of the entire collection, regardless of "before", "after". */
  totalCount: Scalars['Int']['output'];
};

export type ListCategoryConnectionEdge = Edge & {
  cursor: Scalars['String']['output'];
  highlight: Maybe<Highlights>;
  node: Category;
  score: Maybe<Scalars['Float']['output']>;
};

export type ListCategoryConnectionPageInfo = PageInfo & {
  firstCursor: Maybe<Scalars['String']['output']>;
  lastCursor: Maybe<Scalars['String']['output']>;
};

/** An entry of orderBy argument. Specifies field name and the sort order. Only one field name is allowd per entry. */
export type ListCategoryOrderBy = {
  createdAt: InputMaybe<SortOrderEnum>;
};

export type ListCooccurrenceConnection = Connection & {
  edges: Array<ListCooccurrenceConnectionEdge>;
  pageInfo: ListCooccurrenceConnectionPageInfo;
  /** The total count of the entire collection, regardless of "before", "after". */
  totalCount: Scalars['Int']['output'];
};

export type ListCooccurrenceConnectionEdge = Edge & {
  cursor: Scalars['String']['output'];
  highlight: Maybe<Highlights>;
  node: Cooccurrence;
  score: Maybe<Scalars['Float']['output']>;
};

export type ListCooccurrenceConnectionPageInfo = PageInfo & {
  firstCursor: Maybe<Scalars['String']['output']>;
  lastCursor: Maybe<Scalars['String']['output']>;
};

export type ListCooccurrenceFilter = {
  /** List only the cooccurrence that were last updated within the specific time range. */
  updatedAt: InputMaybe<TimeRangeInput>;
};

/** An entry of orderBy argument. Specifies field name and the sort order. Only one field name is allowd per entry. */
export type ListCooccurrenceOrderBy = {
  createdAt: InputMaybe<SortOrderEnum>;
  updatedAt: InputMaybe<SortOrderEnum>;
};

export type ListReplyFilter = {
  /** Show only replies created by a specific app. */
  appId: InputMaybe<Scalars['String']['input']>;
  /** List only the replies that were created between the specific time range. */
  createdAt: InputMaybe<TimeRangeInput>;
  /** If given, only list out replies with specific IDs */
  ids: InputMaybe<Array<Scalars['ID']['input']>>;
  moreLikeThis: InputMaybe<MoreLikeThisInput>;
  /** Only list the replies created by the currently logged in user */
  selfOnly: InputMaybe<Scalars['Boolean']['input']>;
  /** [Deprecated] use types instead. */
  type: InputMaybe<ReplyTypeEnum>;
  /** List the replies of certain types */
  types: InputMaybe<Array<InputMaybe<ReplyTypeEnum>>>;
  /** Show only replies created by the specific user. */
  userId: InputMaybe<Scalars['String']['input']>;
  /** Show only replies created by the specified users. */
  userIds: InputMaybe<Array<Scalars['String']['input']>>;
};

/** An entry of orderBy argument. Specifies field name and the sort order. Only one field name is allowd per entry. */
export type ListReplyOrderBy = {
  _score: InputMaybe<SortOrderEnum>;
  createdAt: InputMaybe<SortOrderEnum>;
};

export type ListReplyRequestConnection = Connection & {
  edges: Array<ListReplyRequestConnectionEdge>;
  pageInfo: ListReplyRequestConnectionPageInfo;
  /** The total count of the entire collection, regardless of "before", "after". */
  totalCount: Scalars['Int']['output'];
};

export type ListReplyRequestConnectionEdge = Edge & {
  cursor: Scalars['String']['output'];
  highlight: Maybe<Highlights>;
  node: ReplyRequest;
  score: Maybe<Scalars['Float']['output']>;
};

export type ListReplyRequestConnectionPageInfo = PageInfo & {
  firstCursor: Maybe<Scalars['String']['output']>;
  lastCursor: Maybe<Scalars['String']['output']>;
};

export type ListReplyRequestFilter = {
  /** Show only reply requests created by a specific app. */
  appId: InputMaybe<Scalars['String']['input']>;
  articleId: InputMaybe<Scalars['String']['input']>;
  /** List only the reply requests that were created between the specific time range. */
  createdAt: InputMaybe<TimeRangeInput>;
  /** If given, only list out reply requests with specific IDs */
  ids: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Only list the reply requests created by the currently logged in user */
  selfOnly: InputMaybe<Scalars['Boolean']['input']>;
  /** List only reply requests with specified statuses */
  statuses: InputMaybe<Array<ReplyRequestStatusEnum>>;
  /** Show only reply requests created by the specific user. */
  userId: InputMaybe<Scalars['String']['input']>;
  /** Show only reply requests created by the specified users. */
  userIds: InputMaybe<Array<Scalars['String']['input']>>;
};

/** An entry of orderBy argument. Specifies field name and the sort order. Only one field name is allowd per entry. */
export type ListReplyRequestOrderBy = {
  createdAt: InputMaybe<SortOrderEnum>;
  vote: InputMaybe<SortOrderEnum>;
};

/**
 * Parameters for Elasticsearch more_like_this query.
 * See: https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-mlt-query.html
 */
export type MoreLikeThisInput = {
  /** The text string to search for. */
  like: InputMaybe<Scalars['String']['input']>;
  /**
   * more_like_this query's "minimum_should_match" query param.
   * See https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-minimum-should-match.html for possible values.
   */
  minimumShouldMatch: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  /** Create an AI reply for a specific article. If existed, returns an existing one. If information in the article is not sufficient for AI, return null. */
  CreateAIReply: Maybe<AiReply>;
  /** Create an article and/or a replyRequest */
  CreateArticle: Maybe<MutationResult>;
  /** Adds specified category to specified article. */
  CreateArticleCategory: Maybe<Array<Maybe<ArticleCategory>>>;
  /** Connects specified reply and specified article. */
  CreateArticleReply: Maybe<Array<Maybe<ArticleReply>>>;
  /** Create a category */
  CreateCategory: Maybe<MutationResult>;
  /** Create a media article and/or a replyRequest */
  CreateMediaArticle: Maybe<MutationResult>;
  /** Create or update a feedback on an article-category connection */
  CreateOrUpdateArticleCategoryFeedback: Maybe<ArticleCategory>;
  /** Create or update a feedback on an article-reply connection */
  CreateOrUpdateArticleReplyFeedback: Maybe<ArticleReply>;
  /** Create or update a cooccurrence for the given articles */
  CreateOrUpdateCooccurrence: Maybe<Cooccurrence>;
  /** Create or update a reply request for the given article */
  CreateOrUpdateReplyRequest: Maybe<Article>;
  /** Create or update a feedback on a reply request reason */
  CreateOrUpdateReplyRequestFeedback: Maybe<ReplyRequest>;
  /** Create a reply that replies to the specified article. */
  CreateReply: Maybe<MutationResult>;
  /**
   * Create or update a reply request for the given article
   * @deprecated Use CreateOrUpdateReplyRequest instead
   */
  CreateReplyRequest: Maybe<Article>;
  /** Change status of specified articleCategory */
  UpdateArticleCategoryStatus: Maybe<Array<Maybe<ArticleCategory>>>;
  /** Change status of specified articleReplies */
  UpdateArticleReplyStatus: Maybe<Array<Maybe<ArticleReply>>>;
  /** Change attribute of a user */
  UpdateUser: Maybe<User>;
};


export type MutationCreateAiReplyArgs = {
  articleId: Scalars['String']['input'];
};


export type MutationCreateArticleArgs = {
  reason: InputMaybe<Scalars['String']['input']>;
  reference: ArticleReferenceInput;
  text: Scalars['String']['input'];
};


export type MutationCreateArticleCategoryArgs = {
  aiConfidence: InputMaybe<Scalars['Float']['input']>;
  aiModel: InputMaybe<Scalars['String']['input']>;
  articleId: Scalars['String']['input'];
  categoryId: Scalars['String']['input'];
};


export type MutationCreateArticleReplyArgs = {
  articleId: Scalars['String']['input'];
  replyId: Scalars['String']['input'];
};


export type MutationCreateCategoryArgs = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateMediaArticleArgs = {
  articleType: ArticleTypeEnum;
  mediaUrl: Scalars['String']['input'];
  reason: InputMaybe<Scalars['String']['input']>;
  reference: ArticleReferenceInput;
};


export type MutationCreateOrUpdateArticleCategoryFeedbackArgs = {
  articleId: Scalars['String']['input'];
  categoryId: Scalars['String']['input'];
  comment: InputMaybe<Scalars['String']['input']>;
  vote: FeedbackVote;
};


export type MutationCreateOrUpdateArticleReplyFeedbackArgs = {
  articleId: Scalars['String']['input'];
  comment: InputMaybe<Scalars['String']['input']>;
  replyId: Scalars['String']['input'];
  vote: FeedbackVote;
};


export type MutationCreateOrUpdateCooccurrenceArgs = {
  articleIds: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationCreateOrUpdateReplyRequestArgs = {
  articleId: Scalars['String']['input'];
  reason: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateOrUpdateReplyRequestFeedbackArgs = {
  replyRequestId: Scalars['String']['input'];
  vote: FeedbackVote;
};


export type MutationCreateReplyArgs = {
  articleId: Scalars['String']['input'];
  reference: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
  type: ReplyTypeEnum;
  waitForHyperlinks?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateReplyRequestArgs = {
  articleId: Scalars['String']['input'];
  reason: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateArticleCategoryStatusArgs = {
  articleId: Scalars['String']['input'];
  categoryId: Scalars['String']['input'];
  status: ArticleCategoryStatusEnum;
};


export type MutationUpdateArticleReplyStatusArgs = {
  articleId: Scalars['String']['input'];
  replyId: Scalars['String']['input'];
  status: ArticleReplyStatusEnum;
};


export type MutationUpdateUserArgs = {
  avatarData: InputMaybe<Scalars['String']['input']>;
  avatarType: InputMaybe<AvatarTypeEnum>;
  bio: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
};

export type MutationResult = {
  id: Maybe<Scalars['String']['output']>;
};

/** Basic entity. Modeled after Relay's GraphQL Server Specification. */
export type Node = {
  id: Scalars['ID']['output'];
};

export type OpenAiCompletionUsage = {
  completionTokens: Scalars['Int']['output'];
  promptTokens: Scalars['Int']['output'];
  totalTokens: Scalars['Int']['output'];
};

/** PageInfo in Connection. Modeled after GraphQL connection model. */
export type PageInfo = {
  /** The cursor pointing to the first node of the entire collection, regardless of "before" and "after". Can be used to determine if is in the last page. Null when the collection is empty. */
  firstCursor: Maybe<Scalars['String']['output']>;
  /** The cursor pointing to the last node of the entire collection, regardless of "before" and "after". Can be used to determine if is in the last page. Null when the collection is empty. */
  lastCursor: Maybe<Scalars['String']['output']>;
};

/** Information of a user's point. Only available for current user. */
export type PointInfo = {
  /** Points required for current level */
  currentLevel: Scalars['Int']['output'];
  /** Points required for next level. null when there is no next level. */
  nextLevel: Scalars['Int']['output'];
  /** Points earned by the current user */
  total: Scalars['Int']['output'];
};

export type Query = {
  GetArticle: Maybe<Article>;
  GetCategory: Maybe<Category>;
  GetReply: Maybe<Reply>;
  /**
   *
   *     Gets specified user. If id is not given, returns the currently logged-in user.
   *     Note that some fields like email is not visible to other users.
   *
   */
  GetUser: Maybe<User>;
  GetYdoc: Maybe<Ydoc>;
  ListAIResponses: AiResponseConnection;
  ListAnalytics: AnalyticsConnection;
  ListArticleReplyFeedbacks: Maybe<ListArticleReplyFeedbackConnection>;
  ListArticles: Maybe<ArticleConnection>;
  ListBlockedUsers: UserConnection;
  ListCategories: Maybe<ListCategoryConnection>;
  ListCooccurrences: Maybe<ListCooccurrenceConnection>;
  ListReplies: Maybe<ReplyConnection>;
  ListReplyRequests: Maybe<ListReplyRequestConnection>;
  ValidateSlug: Maybe<ValidationResult>;
};


export type QueryGetArticleArgs = {
  id: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetCategoryArgs = {
  id: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetReplyArgs = {
  id: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetUserArgs = {
  id: InputMaybe<Scalars['String']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetYdocArgs = {
  id: Scalars['String']['input'];
};


export type QueryListAiResponsesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<ListAiResponsesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Array<InputMaybe<ListAiResponsesOrderBy>>>;
};


export type QueryListAnalyticsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<ListAnalyticsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Array<InputMaybe<ListAnalyticsOrderBy>>>;
};


export type QueryListArticleReplyFeedbacksArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<ListArticleReplyFeedbackFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Array<InputMaybe<ListArticleReplyFeedbackOrderBy>>>;
};


export type QueryListArticlesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<ListArticleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Array<InputMaybe<ListArticleOrderBy>>>;
};


export type QueryListBlockedUsersArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<ListBlockedUsersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Array<InputMaybe<ListBlockedUsersOrderBy>>>;
};


export type QueryListCategoriesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Array<InputMaybe<ListCategoryOrderBy>>>;
};


export type QueryListCooccurrencesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<ListCooccurrenceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Array<InputMaybe<ListCooccurrenceOrderBy>>>;
};


export type QueryListRepliesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<ListReplyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Array<InputMaybe<ListReplyOrderBy>>>;
};


export type QueryListReplyRequestsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<ListReplyRequestFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Array<InputMaybe<ListReplyRequestOrderBy>>>;
};


export type QueryValidateSlugArgs = {
  slug: Scalars['String']['input'];
};

/** List only the entries whose field match the criteria. */
export type RangeInput = {
  EQ: InputMaybe<Scalars['Int']['input']>;
  GT: InputMaybe<Scalars['Int']['input']>;
  GTE: InputMaybe<Scalars['Int']['input']>;
  LT: InputMaybe<Scalars['Int']['input']>;
  LTE: InputMaybe<Scalars['Int']['input']>;
};

export type RelatedArticleFilter = {
  replyCount: InputMaybe<RangeInput>;
};

/** An entry of orderBy argument. Specifies field name and the sort order. Only one field name is allowd per entry. */
export type RelatedArticleOrderBy = {
  _score: InputMaybe<SortOrderEnum>;
  updatedAt: InputMaybe<SortOrderEnum>;
};

export type Reply = Node & {
  articleReplies: Array<ArticleReply>;
  /** May be null for legacy replies */
  createdAt: Maybe<Scalars['String']['output']>;
  /** Hyperlinks in reply text or reference. May be empty array if no URLs are included. `null` when hyperlinks are still fetching. */
  hyperlinks: Maybe<Array<Maybe<Hyperlink>>>;
  id: Scalars['ID']['output'];
  reference: Maybe<Scalars['String']['output']>;
  /** Replies that has similar text or references of this current reply */
  similarReplies: ReplyConnection;
  text: Maybe<Scalars['String']['output']>;
  type: ReplyTypeEnum;
  /** The user submitted this reply version */
  user: Maybe<User>;
};


export type ReplyArticleRepliesArgs = {
  status: InputMaybe<ArticleReplyStatusEnum>;
  statuses?: InputMaybe<Array<ArticleReplyStatusEnum>>;
};


export type ReplySimilarRepliesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Array<InputMaybe<SimilarReplyOrderBy>>>;
};

export type ReplyConnection = Connection & {
  edges: Array<ReplyConnectionEdge>;
  pageInfo: ReplyConnectionPageInfo;
  /** The total count of the entire collection, regardless of "before", "after". */
  totalCount: Scalars['Int']['output'];
};

export type ReplyConnectionEdge = Edge & {
  cursor: Scalars['String']['output'];
  highlight: Maybe<Highlights>;
  node: Reply;
  score: Maybe<Scalars['Float']['output']>;
};

export type ReplyConnectionPageInfo = PageInfo & {
  firstCursor: Maybe<Scalars['String']['output']>;
  lastCursor: Maybe<Scalars['String']['output']>;
};

export type ReplyRequest = Node & {
  appId: Maybe<Scalars['String']['output']>;
  article: Article;
  articleId: Scalars['ID']['output'];
  createdAt: Maybe<Scalars['String']['output']>;
  feedbackCount: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  negativeFeedbackCount: Maybe<Scalars['Int']['output']>;
  /** The feedback of current user. null when not logged in or not voted yet. */
  ownVote: Maybe<FeedbackVote>;
  positiveFeedbackCount: Maybe<Scalars['Int']['output']>;
  reason: Maybe<Scalars['String']['output']>;
  status: ReplyRequestStatusEnum;
  updatedAt: Maybe<Scalars['String']['output']>;
  /** The author of reply request. */
  user: Maybe<User>;
  userId: Maybe<Scalars['String']['output']>;
};

export type ReplyRequestStatusEnum =
  /** Created by a blocked user violating terms of use. */
  | 'BLOCKED'
  | 'NORMAL';

/** Reflects how the replier categories the replied article. */
export type ReplyTypeEnum =
  /** The replier thinks that the article is actually not a complete article on the internet or passed around in messengers. */
  | 'NOT_ARTICLE'
  /** The replier thinks that the articles contains no false information. */
  | 'NOT_RUMOR'
  /** The replier thinks that the article contains personal viewpoint and is not objective. */
  | 'OPINIONATED'
  /** The replier thinks that the article contains false information. */
  | 'RUMOR';

/** An entry of orderBy argument. Specifies field name and the sort order. Only one field name is allowd per entry. */
export type SimilarReplyOrderBy = {
  _score: InputMaybe<SortOrderEnum>;
  createdAt: InputMaybe<SortOrderEnum>;
};

/** Slug of canot */
export type SlugErrorEnum =
  /** Slug is empty */
  | 'EMPTY'
  /** Slug has URI component inside, which can be misleading to browsers */
  | 'HAS_URI_COMPONENT'
  /** Slug have leading or trailing spaces or line ends */
  | 'NOT_TRIMMED'
  /** Slug has already been taken by someone else */
  | 'TAKEN';

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

/** List only the entries that were created between the specific time range. The time range value is in elasticsearch date format (https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-date-format.html) */
export type TimeRangeInput = {
  EQ: InputMaybe<Scalars['String']['input']>;
  GT: InputMaybe<Scalars['String']['input']>;
  GTE: InputMaybe<Scalars['String']['input']>;
  LT: InputMaybe<Scalars['String']['input']>;
  LTE: InputMaybe<Scalars['String']['input']>;
};

export type TranscriptFilter = {
  /**
   * more_like_this query's "minimum_should_match" query param for the transcript of `mediaUrl`
   * See https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-minimum-should-match.html for possible values.
   */
  minimumShouldMatch: InputMaybe<Scalars['String']['input']>;
  /** Only used when `filter.mediaUrl` is provided. Generates transcript if provided `filter.mediaUrl` is not transcribed previously. */
  shouldCreate: InputMaybe<Scalars['Boolean']['input']>;
};

export type User = Node & {
  appId: Maybe<Scalars['String']['output']>;
  /** Returns only for current user. Returns `null` otherwise. */
  appUserId: Maybe<Scalars['String']['output']>;
  /** Returns only for current user. Returns `null` otherwise. */
  availableAvatarTypes: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** return avatar data as JSON string, currently only used when avatarType is OpenPeeps */
  avatarData: Maybe<Scalars['String']['output']>;
  avatarType: Maybe<AvatarTypeEnum>;
  /** returns avatar url from facebook, github or gravatar */
  avatarUrl: Maybe<Scalars['String']['output']>;
  bio: Maybe<Scalars['String']['output']>;
  /** If not null, the user is blocked with the announcement in this string. */
  blockedReason: Maybe<Scalars['String']['output']>;
  /** List of contributions made by the user */
  contributions: Maybe<Array<Maybe<Contribution>>>;
  createdAt: Maybe<Scalars['String']['output']>;
  /** Returns only for current user. Returns `null` otherwise. */
  email: Maybe<Scalars['String']['output']>;
  /** Returns only for current user. Returns `null` otherwise. */
  facebookId: Maybe<Scalars['String']['output']>;
  /** Returns only for current user. Returns `null` otherwise. */
  githubId: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastActiveAt: Maybe<Scalars['String']['output']>;
  level: Scalars['Int']['output'];
  name: Maybe<Scalars['String']['output']>;
  points: PointInfo;
  /** Number of articles this user has replied to */
  repliedArticleCount: Scalars['Int']['output'];
  slug: Maybe<Scalars['String']['output']>;
  /** Returns only for current user. Returns `null` otherwise. */
  twitterId: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['String']['output']>;
  /** Number of article replies this user has given feedbacks */
  votedArticleReplyCount: Scalars['Int']['output'];
};


export type UserContributionsArgs = {
  dateRange: InputMaybe<TimeRangeInput>;
};

export type UserAndExistInput = {
  /**
   *
   *                   When true (or not specified), return only entries with the specified user's involvement.
   *                   When false, return only entries that the specified user did not involve.
   *
   */
  exists: InputMaybe<Scalars['Boolean']['input']>;
  userId: Scalars['String']['input'];
};

export type UserConnection = Connection & {
  edges: Array<UserConnectionEdge>;
  pageInfo: UserConnectionPageInfo;
  /** The total count of the entire collection, regardless of "before", "after". */
  totalCount: Scalars['Int']['output'];
};

export type UserConnectionEdge = Edge & {
  cursor: Scalars['String']['output'];
  highlight: Maybe<Highlights>;
  node: User;
  score: Maybe<Scalars['Float']['output']>;
};

export type UserConnectionPageInfo = PageInfo & {
  firstCursor: Maybe<Scalars['String']['output']>;
  lastCursor: Maybe<Scalars['String']['output']>;
};

export type ValidationResult = {
  error: Maybe<SlugErrorEnum>;
  success: Scalars['Boolean']['output'];
};

export type Ydoc = {
  /** Binary that stores as base64 encoded string */
  data: Maybe<Scalars['String']['output']>;
  /** Ydoc snapshots which are used to restore to specific version */
  versions: Maybe<Array<Maybe<YdocVersion>>>;
};

export type YdocVersion = {
  createdAt: Maybe<Scalars['String']['output']>;
  /** Binary that stores as base64 encoded string */
  snapshot: Maybe<Scalars['String']['output']>;
};

export type LoadApiStatsQueryVariables = Exact<{
  bar: Scalars['Boolean']['input'];
}>;


export type LoadApiStatsQuery = { allArticles: { totalCount: number } | null, allRepliedArticles: { totalCount: number } | null, articlesHasUsefulReplies: { totalCount: number } | null };


export const LoadApiStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LoadAPIStats"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bar"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"allArticles"},"name":{"kind":"Name","value":"ListArticles"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"skip"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bar"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"allRepliedArticles"},"name":{"kind":"Name","value":"ListArticles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"replyCount"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"GTE"},"value":{"kind":"IntValue","value":"1"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"articlesHasUsefulReplies"},"name":{"kind":"Name","value":"ListArticles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"hasArticleReplyWithMorePositiveFeedback"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<LoadApiStatsQuery, LoadApiStatsQueryVariables>;