import type { GraphQLResolveInfo } from 'graphql';
export type DeepPartialGraphqlType<T> = T extends unknow
  ? T extends Function | Data | Promise<unknown> | (() => any) | undefined
    ? T
    : T extends Array<infer U>
    ? Array<undefined | DeepPartialGraphqlType<U>>
    : T extends ReadonlyArray<infer V>
    ? ReadonlyArray<undefined | DeepPartialGraphqlType<V>>
    : T extends object
    ? { [P in keyof T]?: undefined | DeepPartialGraphqlType<T[P]> }
    : T
  : never;

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

export type Classe = {
  readonly __typename: 'Classe';
  readonly id: Scalars['Int']['output'];
  readonly nom: Scalars['String']['output'];
  readonly salle: Scalars['String']['output'];
};

export type Cour = {
  readonly __typename: 'Cour';
  readonly classe: Classe;
  readonly debut: Scalars['String']['output'];
  readonly duree: Scalars['Int']['output'];
  readonly fin: Scalars['String']['output'];
  readonly id: Scalars['Int']['output'];
  readonly intervenant: Intervenant;
  readonly jour: Jours;
  readonly matiere: Matiere;
};

export type Ecole = {
  readonly __typename: 'Ecole';
  readonly adresse: Scalars['String']['output'];
  readonly description: Scalars['String']['output'];
  readonly id: Scalars['Int']['output'];
  readonly nom: Scalars['String']['output'];
};

export type Etudiant = {
  readonly __typename: 'Etudiant';
  readonly classe: Classe;
  readonly email: Scalars['String']['output'];
  readonly id: Scalars['Int']['output'];
  readonly matiere: ReadonlyArray<Matiere>;
  readonly nom: Scalars['String']['output'];
  readonly prenom: Scalars['String']['output'];
  readonly telephone: Scalars['String']['output'];
};

export type Intervenant = {
  readonly __typename: 'Intervenant';
  readonly classe: ReadonlyArray<Classe>;
  readonly email: Scalars['String']['output'];
  readonly id: Scalars['Int']['output'];
  readonly matiere: Matiere;
  readonly nom: Scalars['String']['output'];
  readonly prenom: Scalars['String']['output'];
  readonly telephone: Scalars['String']['output'];
};

export enum Jours {
  Jeudi = 'Jeudi',
  Lundi = 'Lundi',
  Mardi = 'Mardi',
  Mercredi = 'Mercredi',
  Vendredi = 'Vendredi'
}

export type Matiere = {
  readonly __typename: 'Matiere';
  readonly id: Scalars['Int']['output'];
  readonly nom: Scalars['String']['output'];
};

export type Note = {
  readonly __typename: 'Note';
  readonly classe: Classe;
  readonly etudiant: Etudiant;
  readonly id: Scalars['Int']['output'];
  readonly intervenant: Intervenant;
  readonly matiere: Matiere;
  readonly val: Scalars['Int']['output'];
};

export type Utilisateur = {
  readonly __typename: 'Utilisateur';
  readonly id: Scalars['Int']['output'];
  readonly motdepasse: Scalars['String']['output'];
  readonly pseudo: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Partial<Scalars['Boolean']['output']>>;
  Classe: ResolverTypeWrapper<Partial<Classe>>;
  Cour: ResolverTypeWrapper<Partial<Cour>>;
  Ecole: ResolverTypeWrapper<Partial<Ecole>>;
  Etudiant: ResolverTypeWrapper<Partial<Etudiant>>;
  Int: ResolverTypeWrapper<Partial<Scalars['Int']['output']>>;
  Intervenant: ResolverTypeWrapper<Partial<Intervenant>>;
  Jours: ResolverTypeWrapper<Partial<Jours>>;
  Matiere: ResolverTypeWrapper<Partial<Matiere>>;
  Note: ResolverTypeWrapper<Partial<Note>>;
  String: ResolverTypeWrapper<Partial<Scalars['String']['output']>>;
  Utilisateur: ResolverTypeWrapper<Partial<Utilisateur>>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Partial<Scalars['Boolean']['output']>;
  Classe: Partial<Classe>;
  Cour: Partial<Cour>;
  Ecole: Partial<Ecole>;
  Etudiant: Partial<Etudiant>;
  Int: Partial<Scalars['Int']['output']>;
  Intervenant: Partial<Intervenant>;
  Matiere: Partial<Matiere>;
  Note: Partial<Note>;
  String: Partial<Scalars['String']['output']>;
  Utilisateur: Partial<Utilisateur>;
};

export type ClasseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Classe'] = ResolversParentTypes['Classe']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nom?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  salle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CourResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cour'] = ResolversParentTypes['Cour']> = {
  classe?: Resolver<ResolversTypes['Classe'], ParentType, ContextType>;
  debut?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  duree?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  fin?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  intervenant?: Resolver<ResolversTypes['Intervenant'], ParentType, ContextType>;
  jour?: Resolver<ResolversTypes['Jours'], ParentType, ContextType>;
  matiere?: Resolver<ResolversTypes['Matiere'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EcoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ecole'] = ResolversParentTypes['Ecole']> = {
  adresse?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nom?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EtudiantResolvers<ContextType = any, ParentType extends ResolversParentTypes['Etudiant'] = ResolversParentTypes['Etudiant']> = {
  classe?: Resolver<ResolversTypes['Classe'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matiere?: Resolver<ReadonlyArray<ResolversTypes['Matiere']>, ParentType, ContextType>;
  nom?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prenom?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  telephone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IntervenantResolvers<ContextType = any, ParentType extends ResolversParentTypes['Intervenant'] = ResolversParentTypes['Intervenant']> = {
  classe?: Resolver<ReadonlyArray<ResolversTypes['Classe']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matiere?: Resolver<ResolversTypes['Matiere'], ParentType, ContextType>;
  nom?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prenom?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  telephone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatiereResolvers<ContextType = any, ParentType extends ResolversParentTypes['Matiere'] = ResolversParentTypes['Matiere']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nom?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Note'] = ResolversParentTypes['Note']> = {
  classe?: Resolver<ResolversTypes['Classe'], ParentType, ContextType>;
  etudiant?: Resolver<ResolversTypes['Etudiant'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  intervenant?: Resolver<ResolversTypes['Intervenant'], ParentType, ContextType>;
  matiere?: Resolver<ResolversTypes['Matiere'], ParentType, ContextType>;
  val?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UtilisateurResolvers<ContextType = any, ParentType extends ResolversParentTypes['Utilisateur'] = ResolversParentTypes['Utilisateur']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  motdepasse?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pseudo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Classe?: ClasseResolvers<ContextType>;
  Cour?: CourResolvers<ContextType>;
  Ecole?: EcoleResolvers<ContextType>;
  Etudiant?: EtudiantResolvers<ContextType>;
  Intervenant?: IntervenantResolvers<ContextType>;
  Matiere?: MatiereResolvers<ContextType>;
  Note?: NoteResolvers<ContextType>;
  Utilisateur?: UtilisateurResolvers<ContextType>;
};

