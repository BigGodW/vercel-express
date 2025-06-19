
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model cms_article
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type cms_article = $Result.DefaultSelection<Prisma.$cms_articlePayload>
/**
 * Model cms_articletag
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type cms_articletag = $Result.DefaultSelection<Prisma.$cms_articletagPayload>
/**
 * Model cms_category
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type cms_category = $Result.DefaultSelection<Prisma.$cms_categoryPayload>
/**
 * Model cms_field
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type cms_field = $Result.DefaultSelection<Prisma.$cms_fieldPayload>
/**
 * Model cms_frag
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type cms_frag = $Result.DefaultSelection<Prisma.$cms_fragPayload>
/**
 * Model cms_friendlink
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type cms_friendlink = $Result.DefaultSelection<Prisma.$cms_friendlinkPayload>
/**
 * Model cms_message
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type cms_message = $Result.DefaultSelection<Prisma.$cms_messagePayload>
/**
 * Model cms_model
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type cms_model = $Result.DefaultSelection<Prisma.$cms_modelPayload>
/**
 * Model cms_site
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type cms_site = $Result.DefaultSelection<Prisma.$cms_sitePayload>
/**
 * Model cms_slide
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type cms_slide = $Result.DefaultSelection<Prisma.$cms_slidePayload>
/**
 * Model cms_tag
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type cms_tag = $Result.DefaultSelection<Prisma.$cms_tagPayload>
/**
 * Model ext_download
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type ext_download = $Result.DefaultSelection<Prisma.$ext_downloadPayload>
/**
 * Model ext_lanhua
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type ext_lanhua = $Result.DefaultSelection<Prisma.$ext_lanhuaPayload>
/**
 * Model plus_collect
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type plus_collect = $Result.DefaultSelection<Prisma.$plus_collectPayload>
/**
 * Model plus_gather
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type plus_gather = $Result.DefaultSelection<Prisma.$plus_gatherPayload>
/**
 * Model sys_config
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type sys_config = $Result.DefaultSelection<Prisma.$sys_configPayload>
/**
 * Model sys_loginlog
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type sys_loginlog = $Result.DefaultSelection<Prisma.$sys_loginlogPayload>
/**
 * Model sys_menu
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type sys_menu = $Result.DefaultSelection<Prisma.$sys_menuPayload>
/**
 * Model sys_notice
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type sys_notice = $Result.DefaultSelection<Prisma.$sys_noticePayload>
/**
 * Model sys_role
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type sys_role = $Result.DefaultSelection<Prisma.$sys_rolePayload>
/**
 * Model sys_user
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type sys_user = $Result.DefaultSelection<Prisma.$sys_userPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cms_articles
 * const cms_articles = await prisma.cms_article.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cms_articles
   * const cms_articles = await prisma.cms_article.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cms_article`: Exposes CRUD operations for the **cms_article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cms_articles
    * const cms_articles = await prisma.cms_article.findMany()
    * ```
    */
  get cms_article(): Prisma.cms_articleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cms_articletag`: Exposes CRUD operations for the **cms_articletag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cms_articletags
    * const cms_articletags = await prisma.cms_articletag.findMany()
    * ```
    */
  get cms_articletag(): Prisma.cms_articletagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cms_category`: Exposes CRUD operations for the **cms_category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cms_categories
    * const cms_categories = await prisma.cms_category.findMany()
    * ```
    */
  get cms_category(): Prisma.cms_categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cms_field`: Exposes CRUD operations for the **cms_field** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cms_fields
    * const cms_fields = await prisma.cms_field.findMany()
    * ```
    */
  get cms_field(): Prisma.cms_fieldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cms_frag`: Exposes CRUD operations for the **cms_frag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cms_frags
    * const cms_frags = await prisma.cms_frag.findMany()
    * ```
    */
  get cms_frag(): Prisma.cms_fragDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cms_friendlink`: Exposes CRUD operations for the **cms_friendlink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cms_friendlinks
    * const cms_friendlinks = await prisma.cms_friendlink.findMany()
    * ```
    */
  get cms_friendlink(): Prisma.cms_friendlinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cms_message`: Exposes CRUD operations for the **cms_message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cms_messages
    * const cms_messages = await prisma.cms_message.findMany()
    * ```
    */
  get cms_message(): Prisma.cms_messageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cms_model`: Exposes CRUD operations for the **cms_model** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cms_models
    * const cms_models = await prisma.cms_model.findMany()
    * ```
    */
  get cms_model(): Prisma.cms_modelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cms_site`: Exposes CRUD operations for the **cms_site** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cms_sites
    * const cms_sites = await prisma.cms_site.findMany()
    * ```
    */
  get cms_site(): Prisma.cms_siteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cms_slide`: Exposes CRUD operations for the **cms_slide** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cms_slides
    * const cms_slides = await prisma.cms_slide.findMany()
    * ```
    */
  get cms_slide(): Prisma.cms_slideDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cms_tag`: Exposes CRUD operations for the **cms_tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cms_tags
    * const cms_tags = await prisma.cms_tag.findMany()
    * ```
    */
  get cms_tag(): Prisma.cms_tagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ext_download`: Exposes CRUD operations for the **ext_download** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ext_downloads
    * const ext_downloads = await prisma.ext_download.findMany()
    * ```
    */
  get ext_download(): Prisma.ext_downloadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ext_lanhua`: Exposes CRUD operations for the **ext_lanhua** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ext_lanhuas
    * const ext_lanhuas = await prisma.ext_lanhua.findMany()
    * ```
    */
  get ext_lanhua(): Prisma.ext_lanhuaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plus_collect`: Exposes CRUD operations for the **plus_collect** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plus_collects
    * const plus_collects = await prisma.plus_collect.findMany()
    * ```
    */
  get plus_collect(): Prisma.plus_collectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plus_gather`: Exposes CRUD operations for the **plus_gather** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plus_gathers
    * const plus_gathers = await prisma.plus_gather.findMany()
    * ```
    */
  get plus_gather(): Prisma.plus_gatherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sys_config`: Exposes CRUD operations for the **sys_config** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_configs
    * const sys_configs = await prisma.sys_config.findMany()
    * ```
    */
  get sys_config(): Prisma.sys_configDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sys_loginlog`: Exposes CRUD operations for the **sys_loginlog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_loginlogs
    * const sys_loginlogs = await prisma.sys_loginlog.findMany()
    * ```
    */
  get sys_loginlog(): Prisma.sys_loginlogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sys_menu`: Exposes CRUD operations for the **sys_menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_menus
    * const sys_menus = await prisma.sys_menu.findMany()
    * ```
    */
  get sys_menu(): Prisma.sys_menuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sys_notice`: Exposes CRUD operations for the **sys_notice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_notices
    * const sys_notices = await prisma.sys_notice.findMany()
    * ```
    */
  get sys_notice(): Prisma.sys_noticeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sys_role`: Exposes CRUD operations for the **sys_role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_roles
    * const sys_roles = await prisma.sys_role.findMany()
    * ```
    */
  get sys_role(): Prisma.sys_roleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sys_user`: Exposes CRUD operations for the **sys_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_users
    * const sys_users = await prisma.sys_user.findMany()
    * ```
    */
  get sys_user(): Prisma.sys_userDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    cms_article: 'cms_article',
    cms_articletag: 'cms_articletag',
    cms_category: 'cms_category',
    cms_field: 'cms_field',
    cms_frag: 'cms_frag',
    cms_friendlink: 'cms_friendlink',
    cms_message: 'cms_message',
    cms_model: 'cms_model',
    cms_site: 'cms_site',
    cms_slide: 'cms_slide',
    cms_tag: 'cms_tag',
    ext_download: 'ext_download',
    ext_lanhua: 'ext_lanhua',
    plus_collect: 'plus_collect',
    plus_gather: 'plus_gather',
    sys_config: 'sys_config',
    sys_loginlog: 'sys_loginlog',
    sys_menu: 'sys_menu',
    sys_notice: 'sys_notice',
    sys_role: 'sys_role',
    sys_user: 'sys_user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cms_article" | "cms_articletag" | "cms_category" | "cms_field" | "cms_frag" | "cms_friendlink" | "cms_message" | "cms_model" | "cms_site" | "cms_slide" | "cms_tag" | "ext_download" | "ext_lanhua" | "plus_collect" | "plus_gather" | "sys_config" | "sys_loginlog" | "sys_menu" | "sys_notice" | "sys_role" | "sys_user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      cms_article: {
        payload: Prisma.$cms_articlePayload<ExtArgs>
        fields: Prisma.cms_articleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cms_articleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_articlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cms_articleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_articlePayload>
          }
          findFirst: {
            args: Prisma.cms_articleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_articlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cms_articleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_articlePayload>
          }
          findMany: {
            args: Prisma.cms_articleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_articlePayload>[]
          }
          create: {
            args: Prisma.cms_articleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_articlePayload>
          }
          createMany: {
            args: Prisma.cms_articleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cms_articleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_articlePayload>
          }
          update: {
            args: Prisma.cms_articleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_articlePayload>
          }
          deleteMany: {
            args: Prisma.cms_articleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cms_articleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cms_articleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_articlePayload>
          }
          aggregate: {
            args: Prisma.Cms_articleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCms_article>
          }
          groupBy: {
            args: Prisma.cms_articleGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cms_articleGroupByOutputType>[]
          }
          count: {
            args: Prisma.cms_articleCountArgs<ExtArgs>
            result: $Utils.Optional<Cms_articleCountAggregateOutputType> | number
          }
        }
      }
      cms_articletag: {
        payload: Prisma.$cms_articletagPayload<ExtArgs>
        fields: Prisma.cms_articletagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cms_articletagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_articletagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cms_articletagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_articletagPayload>
          }
          findFirst: {
            args: Prisma.cms_articletagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_articletagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cms_articletagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_articletagPayload>
          }
          findMany: {
            args: Prisma.cms_articletagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_articletagPayload>[]
          }
          create: {
            args: Prisma.cms_articletagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_articletagPayload>
          }
          createMany: {
            args: Prisma.cms_articletagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cms_articletagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_articletagPayload>
          }
          update: {
            args: Prisma.cms_articletagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_articletagPayload>
          }
          deleteMany: {
            args: Prisma.cms_articletagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cms_articletagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cms_articletagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_articletagPayload>
          }
          aggregate: {
            args: Prisma.Cms_articletagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCms_articletag>
          }
          groupBy: {
            args: Prisma.cms_articletagGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cms_articletagGroupByOutputType>[]
          }
          count: {
            args: Prisma.cms_articletagCountArgs<ExtArgs>
            result: $Utils.Optional<Cms_articletagCountAggregateOutputType> | number
          }
        }
      }
      cms_category: {
        payload: Prisma.$cms_categoryPayload<ExtArgs>
        fields: Prisma.cms_categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cms_categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cms_categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_categoryPayload>
          }
          findFirst: {
            args: Prisma.cms_categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cms_categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_categoryPayload>
          }
          findMany: {
            args: Prisma.cms_categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_categoryPayload>[]
          }
          create: {
            args: Prisma.cms_categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_categoryPayload>
          }
          createMany: {
            args: Prisma.cms_categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cms_categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_categoryPayload>
          }
          update: {
            args: Prisma.cms_categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_categoryPayload>
          }
          deleteMany: {
            args: Prisma.cms_categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cms_categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cms_categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_categoryPayload>
          }
          aggregate: {
            args: Prisma.Cms_categoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCms_category>
          }
          groupBy: {
            args: Prisma.cms_categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cms_categoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.cms_categoryCountArgs<ExtArgs>
            result: $Utils.Optional<Cms_categoryCountAggregateOutputType> | number
          }
        }
      }
      cms_field: {
        payload: Prisma.$cms_fieldPayload<ExtArgs>
        fields: Prisma.cms_fieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cms_fieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_fieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cms_fieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_fieldPayload>
          }
          findFirst: {
            args: Prisma.cms_fieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_fieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cms_fieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_fieldPayload>
          }
          findMany: {
            args: Prisma.cms_fieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_fieldPayload>[]
          }
          create: {
            args: Prisma.cms_fieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_fieldPayload>
          }
          createMany: {
            args: Prisma.cms_fieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cms_fieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_fieldPayload>
          }
          update: {
            args: Prisma.cms_fieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_fieldPayload>
          }
          deleteMany: {
            args: Prisma.cms_fieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cms_fieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cms_fieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_fieldPayload>
          }
          aggregate: {
            args: Prisma.Cms_fieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCms_field>
          }
          groupBy: {
            args: Prisma.cms_fieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cms_fieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.cms_fieldCountArgs<ExtArgs>
            result: $Utils.Optional<Cms_fieldCountAggregateOutputType> | number
          }
        }
      }
      cms_frag: {
        payload: Prisma.$cms_fragPayload<ExtArgs>
        fields: Prisma.cms_fragFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cms_fragFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_fragPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cms_fragFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_fragPayload>
          }
          findFirst: {
            args: Prisma.cms_fragFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_fragPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cms_fragFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_fragPayload>
          }
          findMany: {
            args: Prisma.cms_fragFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_fragPayload>[]
          }
          create: {
            args: Prisma.cms_fragCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_fragPayload>
          }
          createMany: {
            args: Prisma.cms_fragCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cms_fragDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_fragPayload>
          }
          update: {
            args: Prisma.cms_fragUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_fragPayload>
          }
          deleteMany: {
            args: Prisma.cms_fragDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cms_fragUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cms_fragUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_fragPayload>
          }
          aggregate: {
            args: Prisma.Cms_fragAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCms_frag>
          }
          groupBy: {
            args: Prisma.cms_fragGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cms_fragGroupByOutputType>[]
          }
          count: {
            args: Prisma.cms_fragCountArgs<ExtArgs>
            result: $Utils.Optional<Cms_fragCountAggregateOutputType> | number
          }
        }
      }
      cms_friendlink: {
        payload: Prisma.$cms_friendlinkPayload<ExtArgs>
        fields: Prisma.cms_friendlinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cms_friendlinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_friendlinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cms_friendlinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_friendlinkPayload>
          }
          findFirst: {
            args: Prisma.cms_friendlinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_friendlinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cms_friendlinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_friendlinkPayload>
          }
          findMany: {
            args: Prisma.cms_friendlinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_friendlinkPayload>[]
          }
          create: {
            args: Prisma.cms_friendlinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_friendlinkPayload>
          }
          createMany: {
            args: Prisma.cms_friendlinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cms_friendlinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_friendlinkPayload>
          }
          update: {
            args: Prisma.cms_friendlinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_friendlinkPayload>
          }
          deleteMany: {
            args: Prisma.cms_friendlinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cms_friendlinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cms_friendlinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_friendlinkPayload>
          }
          aggregate: {
            args: Prisma.Cms_friendlinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCms_friendlink>
          }
          groupBy: {
            args: Prisma.cms_friendlinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cms_friendlinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.cms_friendlinkCountArgs<ExtArgs>
            result: $Utils.Optional<Cms_friendlinkCountAggregateOutputType> | number
          }
        }
      }
      cms_message: {
        payload: Prisma.$cms_messagePayload<ExtArgs>
        fields: Prisma.cms_messageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cms_messageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_messagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cms_messageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_messagePayload>
          }
          findFirst: {
            args: Prisma.cms_messageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_messagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cms_messageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_messagePayload>
          }
          findMany: {
            args: Prisma.cms_messageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_messagePayload>[]
          }
          create: {
            args: Prisma.cms_messageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_messagePayload>
          }
          createMany: {
            args: Prisma.cms_messageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cms_messageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_messagePayload>
          }
          update: {
            args: Prisma.cms_messageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_messagePayload>
          }
          deleteMany: {
            args: Prisma.cms_messageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cms_messageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cms_messageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_messagePayload>
          }
          aggregate: {
            args: Prisma.Cms_messageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCms_message>
          }
          groupBy: {
            args: Prisma.cms_messageGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cms_messageGroupByOutputType>[]
          }
          count: {
            args: Prisma.cms_messageCountArgs<ExtArgs>
            result: $Utils.Optional<Cms_messageCountAggregateOutputType> | number
          }
        }
      }
      cms_model: {
        payload: Prisma.$cms_modelPayload<ExtArgs>
        fields: Prisma.cms_modelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cms_modelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_modelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cms_modelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_modelPayload>
          }
          findFirst: {
            args: Prisma.cms_modelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_modelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cms_modelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_modelPayload>
          }
          findMany: {
            args: Prisma.cms_modelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_modelPayload>[]
          }
          create: {
            args: Prisma.cms_modelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_modelPayload>
          }
          createMany: {
            args: Prisma.cms_modelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cms_modelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_modelPayload>
          }
          update: {
            args: Prisma.cms_modelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_modelPayload>
          }
          deleteMany: {
            args: Prisma.cms_modelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cms_modelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cms_modelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_modelPayload>
          }
          aggregate: {
            args: Prisma.Cms_modelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCms_model>
          }
          groupBy: {
            args: Prisma.cms_modelGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cms_modelGroupByOutputType>[]
          }
          count: {
            args: Prisma.cms_modelCountArgs<ExtArgs>
            result: $Utils.Optional<Cms_modelCountAggregateOutputType> | number
          }
        }
      }
      cms_site: {
        payload: Prisma.$cms_sitePayload<ExtArgs>
        fields: Prisma.cms_siteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cms_siteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_sitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cms_siteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_sitePayload>
          }
          findFirst: {
            args: Prisma.cms_siteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_sitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cms_siteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_sitePayload>
          }
          findMany: {
            args: Prisma.cms_siteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_sitePayload>[]
          }
          create: {
            args: Prisma.cms_siteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_sitePayload>
          }
          createMany: {
            args: Prisma.cms_siteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cms_siteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_sitePayload>
          }
          update: {
            args: Prisma.cms_siteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_sitePayload>
          }
          deleteMany: {
            args: Prisma.cms_siteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cms_siteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cms_siteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_sitePayload>
          }
          aggregate: {
            args: Prisma.Cms_siteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCms_site>
          }
          groupBy: {
            args: Prisma.cms_siteGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cms_siteGroupByOutputType>[]
          }
          count: {
            args: Prisma.cms_siteCountArgs<ExtArgs>
            result: $Utils.Optional<Cms_siteCountAggregateOutputType> | number
          }
        }
      }
      cms_slide: {
        payload: Prisma.$cms_slidePayload<ExtArgs>
        fields: Prisma.cms_slideFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cms_slideFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_slidePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cms_slideFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_slidePayload>
          }
          findFirst: {
            args: Prisma.cms_slideFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_slidePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cms_slideFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_slidePayload>
          }
          findMany: {
            args: Prisma.cms_slideFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_slidePayload>[]
          }
          create: {
            args: Prisma.cms_slideCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_slidePayload>
          }
          createMany: {
            args: Prisma.cms_slideCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cms_slideDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_slidePayload>
          }
          update: {
            args: Prisma.cms_slideUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_slidePayload>
          }
          deleteMany: {
            args: Prisma.cms_slideDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cms_slideUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cms_slideUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_slidePayload>
          }
          aggregate: {
            args: Prisma.Cms_slideAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCms_slide>
          }
          groupBy: {
            args: Prisma.cms_slideGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cms_slideGroupByOutputType>[]
          }
          count: {
            args: Prisma.cms_slideCountArgs<ExtArgs>
            result: $Utils.Optional<Cms_slideCountAggregateOutputType> | number
          }
        }
      }
      cms_tag: {
        payload: Prisma.$cms_tagPayload<ExtArgs>
        fields: Prisma.cms_tagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cms_tagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_tagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cms_tagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_tagPayload>
          }
          findFirst: {
            args: Prisma.cms_tagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_tagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cms_tagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_tagPayload>
          }
          findMany: {
            args: Prisma.cms_tagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_tagPayload>[]
          }
          create: {
            args: Prisma.cms_tagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_tagPayload>
          }
          createMany: {
            args: Prisma.cms_tagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cms_tagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_tagPayload>
          }
          update: {
            args: Prisma.cms_tagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_tagPayload>
          }
          deleteMany: {
            args: Prisma.cms_tagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cms_tagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cms_tagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cms_tagPayload>
          }
          aggregate: {
            args: Prisma.Cms_tagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCms_tag>
          }
          groupBy: {
            args: Prisma.cms_tagGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cms_tagGroupByOutputType>[]
          }
          count: {
            args: Prisma.cms_tagCountArgs<ExtArgs>
            result: $Utils.Optional<Cms_tagCountAggregateOutputType> | number
          }
        }
      }
      ext_download: {
        payload: Prisma.$ext_downloadPayload<ExtArgs>
        fields: Prisma.ext_downloadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ext_downloadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ext_downloadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ext_downloadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ext_downloadPayload>
          }
          findFirst: {
            args: Prisma.ext_downloadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ext_downloadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ext_downloadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ext_downloadPayload>
          }
          findMany: {
            args: Prisma.ext_downloadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ext_downloadPayload>[]
          }
          create: {
            args: Prisma.ext_downloadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ext_downloadPayload>
          }
          createMany: {
            args: Prisma.ext_downloadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ext_downloadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ext_downloadPayload>
          }
          update: {
            args: Prisma.ext_downloadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ext_downloadPayload>
          }
          deleteMany: {
            args: Prisma.ext_downloadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ext_downloadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ext_downloadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ext_downloadPayload>
          }
          aggregate: {
            args: Prisma.Ext_downloadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExt_download>
          }
          groupBy: {
            args: Prisma.ext_downloadGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ext_downloadGroupByOutputType>[]
          }
          count: {
            args: Prisma.ext_downloadCountArgs<ExtArgs>
            result: $Utils.Optional<Ext_downloadCountAggregateOutputType> | number
          }
        }
      }
      ext_lanhua: {
        payload: Prisma.$ext_lanhuaPayload<ExtArgs>
        fields: Prisma.ext_lanhuaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ext_lanhuaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ext_lanhuaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ext_lanhuaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ext_lanhuaPayload>
          }
          findFirst: {
            args: Prisma.ext_lanhuaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ext_lanhuaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ext_lanhuaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ext_lanhuaPayload>
          }
          findMany: {
            args: Prisma.ext_lanhuaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ext_lanhuaPayload>[]
          }
          create: {
            args: Prisma.ext_lanhuaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ext_lanhuaPayload>
          }
          createMany: {
            args: Prisma.ext_lanhuaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ext_lanhuaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ext_lanhuaPayload>
          }
          update: {
            args: Prisma.ext_lanhuaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ext_lanhuaPayload>
          }
          deleteMany: {
            args: Prisma.ext_lanhuaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ext_lanhuaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ext_lanhuaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ext_lanhuaPayload>
          }
          aggregate: {
            args: Prisma.Ext_lanhuaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExt_lanhua>
          }
          groupBy: {
            args: Prisma.ext_lanhuaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ext_lanhuaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ext_lanhuaCountArgs<ExtArgs>
            result: $Utils.Optional<Ext_lanhuaCountAggregateOutputType> | number
          }
        }
      }
      plus_collect: {
        payload: Prisma.$plus_collectPayload<ExtArgs>
        fields: Prisma.plus_collectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.plus_collectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plus_collectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.plus_collectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plus_collectPayload>
          }
          findFirst: {
            args: Prisma.plus_collectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plus_collectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.plus_collectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plus_collectPayload>
          }
          findMany: {
            args: Prisma.plus_collectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plus_collectPayload>[]
          }
          create: {
            args: Prisma.plus_collectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plus_collectPayload>
          }
          createMany: {
            args: Prisma.plus_collectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.plus_collectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plus_collectPayload>
          }
          update: {
            args: Prisma.plus_collectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plus_collectPayload>
          }
          deleteMany: {
            args: Prisma.plus_collectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.plus_collectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.plus_collectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plus_collectPayload>
          }
          aggregate: {
            args: Prisma.Plus_collectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlus_collect>
          }
          groupBy: {
            args: Prisma.plus_collectGroupByArgs<ExtArgs>
            result: $Utils.Optional<Plus_collectGroupByOutputType>[]
          }
          count: {
            args: Prisma.plus_collectCountArgs<ExtArgs>
            result: $Utils.Optional<Plus_collectCountAggregateOutputType> | number
          }
        }
      }
      plus_gather: {
        payload: Prisma.$plus_gatherPayload<ExtArgs>
        fields: Prisma.plus_gatherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.plus_gatherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plus_gatherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.plus_gatherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plus_gatherPayload>
          }
          findFirst: {
            args: Prisma.plus_gatherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plus_gatherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.plus_gatherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plus_gatherPayload>
          }
          findMany: {
            args: Prisma.plus_gatherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plus_gatherPayload>[]
          }
          create: {
            args: Prisma.plus_gatherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plus_gatherPayload>
          }
          createMany: {
            args: Prisma.plus_gatherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.plus_gatherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plus_gatherPayload>
          }
          update: {
            args: Prisma.plus_gatherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plus_gatherPayload>
          }
          deleteMany: {
            args: Prisma.plus_gatherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.plus_gatherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.plus_gatherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plus_gatherPayload>
          }
          aggregate: {
            args: Prisma.Plus_gatherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlus_gather>
          }
          groupBy: {
            args: Prisma.plus_gatherGroupByArgs<ExtArgs>
            result: $Utils.Optional<Plus_gatherGroupByOutputType>[]
          }
          count: {
            args: Prisma.plus_gatherCountArgs<ExtArgs>
            result: $Utils.Optional<Plus_gatherCountAggregateOutputType> | number
          }
        }
      }
      sys_config: {
        payload: Prisma.$sys_configPayload<ExtArgs>
        fields: Prisma.sys_configFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sys_configFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_configPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sys_configFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_configPayload>
          }
          findFirst: {
            args: Prisma.sys_configFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_configPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sys_configFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_configPayload>
          }
          findMany: {
            args: Prisma.sys_configFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_configPayload>[]
          }
          create: {
            args: Prisma.sys_configCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_configPayload>
          }
          createMany: {
            args: Prisma.sys_configCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sys_configDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_configPayload>
          }
          update: {
            args: Prisma.sys_configUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_configPayload>
          }
          deleteMany: {
            args: Prisma.sys_configDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sys_configUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sys_configUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_configPayload>
          }
          aggregate: {
            args: Prisma.Sys_configAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSys_config>
          }
          groupBy: {
            args: Prisma.sys_configGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sys_configGroupByOutputType>[]
          }
          count: {
            args: Prisma.sys_configCountArgs<ExtArgs>
            result: $Utils.Optional<Sys_configCountAggregateOutputType> | number
          }
        }
      }
      sys_loginlog: {
        payload: Prisma.$sys_loginlogPayload<ExtArgs>
        fields: Prisma.sys_loginlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sys_loginlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_loginlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sys_loginlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_loginlogPayload>
          }
          findFirst: {
            args: Prisma.sys_loginlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_loginlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sys_loginlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_loginlogPayload>
          }
          findMany: {
            args: Prisma.sys_loginlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_loginlogPayload>[]
          }
          create: {
            args: Prisma.sys_loginlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_loginlogPayload>
          }
          createMany: {
            args: Prisma.sys_loginlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sys_loginlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_loginlogPayload>
          }
          update: {
            args: Prisma.sys_loginlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_loginlogPayload>
          }
          deleteMany: {
            args: Prisma.sys_loginlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sys_loginlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sys_loginlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_loginlogPayload>
          }
          aggregate: {
            args: Prisma.Sys_loginlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSys_loginlog>
          }
          groupBy: {
            args: Prisma.sys_loginlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sys_loginlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.sys_loginlogCountArgs<ExtArgs>
            result: $Utils.Optional<Sys_loginlogCountAggregateOutputType> | number
          }
        }
      }
      sys_menu: {
        payload: Prisma.$sys_menuPayload<ExtArgs>
        fields: Prisma.sys_menuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sys_menuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sys_menuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menuPayload>
          }
          findFirst: {
            args: Prisma.sys_menuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sys_menuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menuPayload>
          }
          findMany: {
            args: Prisma.sys_menuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menuPayload>[]
          }
          create: {
            args: Prisma.sys_menuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menuPayload>
          }
          createMany: {
            args: Prisma.sys_menuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sys_menuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menuPayload>
          }
          update: {
            args: Prisma.sys_menuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menuPayload>
          }
          deleteMany: {
            args: Prisma.sys_menuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sys_menuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sys_menuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menuPayload>
          }
          aggregate: {
            args: Prisma.Sys_menuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSys_menu>
          }
          groupBy: {
            args: Prisma.sys_menuGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sys_menuGroupByOutputType>[]
          }
          count: {
            args: Prisma.sys_menuCountArgs<ExtArgs>
            result: $Utils.Optional<Sys_menuCountAggregateOutputType> | number
          }
        }
      }
      sys_notice: {
        payload: Prisma.$sys_noticePayload<ExtArgs>
        fields: Prisma.sys_noticeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sys_noticeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_noticePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sys_noticeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_noticePayload>
          }
          findFirst: {
            args: Prisma.sys_noticeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_noticePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sys_noticeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_noticePayload>
          }
          findMany: {
            args: Prisma.sys_noticeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_noticePayload>[]
          }
          create: {
            args: Prisma.sys_noticeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_noticePayload>
          }
          createMany: {
            args: Prisma.sys_noticeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sys_noticeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_noticePayload>
          }
          update: {
            args: Prisma.sys_noticeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_noticePayload>
          }
          deleteMany: {
            args: Prisma.sys_noticeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sys_noticeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sys_noticeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_noticePayload>
          }
          aggregate: {
            args: Prisma.Sys_noticeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSys_notice>
          }
          groupBy: {
            args: Prisma.sys_noticeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sys_noticeGroupByOutputType>[]
          }
          count: {
            args: Prisma.sys_noticeCountArgs<ExtArgs>
            result: $Utils.Optional<Sys_noticeCountAggregateOutputType> | number
          }
        }
      }
      sys_role: {
        payload: Prisma.$sys_rolePayload<ExtArgs>
        fields: Prisma.sys_roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sys_roleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sys_roleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_rolePayload>
          }
          findFirst: {
            args: Prisma.sys_roleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sys_roleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_rolePayload>
          }
          findMany: {
            args: Prisma.sys_roleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_rolePayload>[]
          }
          create: {
            args: Prisma.sys_roleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_rolePayload>
          }
          createMany: {
            args: Prisma.sys_roleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sys_roleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_rolePayload>
          }
          update: {
            args: Prisma.sys_roleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_rolePayload>
          }
          deleteMany: {
            args: Prisma.sys_roleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sys_roleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sys_roleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_rolePayload>
          }
          aggregate: {
            args: Prisma.Sys_roleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSys_role>
          }
          groupBy: {
            args: Prisma.sys_roleGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sys_roleGroupByOutputType>[]
          }
          count: {
            args: Prisma.sys_roleCountArgs<ExtArgs>
            result: $Utils.Optional<Sys_roleCountAggregateOutputType> | number
          }
        }
      }
      sys_user: {
        payload: Prisma.$sys_userPayload<ExtArgs>
        fields: Prisma.sys_userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sys_userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sys_userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_userPayload>
          }
          findFirst: {
            args: Prisma.sys_userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sys_userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_userPayload>
          }
          findMany: {
            args: Prisma.sys_userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_userPayload>[]
          }
          create: {
            args: Prisma.sys_userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_userPayload>
          }
          createMany: {
            args: Prisma.sys_userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sys_userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_userPayload>
          }
          update: {
            args: Prisma.sys_userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_userPayload>
          }
          deleteMany: {
            args: Prisma.sys_userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sys_userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sys_userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_userPayload>
          }
          aggregate: {
            args: Prisma.Sys_userAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSys_user>
          }
          groupBy: {
            args: Prisma.sys_userGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sys_userGroupByOutputType>[]
          }
          count: {
            args: Prisma.sys_userCountArgs<ExtArgs>
            result: $Utils.Optional<Sys_userCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cms_article?: cms_articleOmit
    cms_articletag?: cms_articletagOmit
    cms_category?: cms_categoryOmit
    cms_field?: cms_fieldOmit
    cms_frag?: cms_fragOmit
    cms_friendlink?: cms_friendlinkOmit
    cms_message?: cms_messageOmit
    cms_model?: cms_modelOmit
    cms_site?: cms_siteOmit
    cms_slide?: cms_slideOmit
    cms_tag?: cms_tagOmit
    ext_download?: ext_downloadOmit
    ext_lanhua?: ext_lanhuaOmit
    plus_collect?: plus_collectOmit
    plus_gather?: plus_gatherOmit
    sys_config?: sys_configOmit
    sys_loginlog?: sys_loginlogOmit
    sys_menu?: sys_menuOmit
    sys_notice?: sys_noticeOmit
    sys_role?: sys_roleOmit
    sys_user?: sys_userOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model cms_article
   */

  export type AggregateCms_article = {
    _count: Cms_articleCountAggregateOutputType | null
    _avg: Cms_articleAvgAggregateOutputType | null
    _sum: Cms_articleSumAggregateOutputType | null
    _min: Cms_articleMinAggregateOutputType | null
    _max: Cms_articleMaxAggregateOutputType | null
  }

  export type Cms_articleAvgAggregateOutputType = {
    id: number | null
    cid: number | null
    status: number | null
    pv: number | null
  }

  export type Cms_articleSumAggregateOutputType = {
    id: number | null
    cid: number | null
    status: number | null
    pv: number | null
  }

  export type Cms_articleMinAggregateOutputType = {
    id: number | null
    cid: number | null
    subCid: string | null
    title: string | null
    shortTitle: string | null
    tagId: string | null
    attr: string | null
    articleView: string | null
    source: string | null
    author: string | null
    description: string | null
    img: string | null
    content: string | null
    status: number | null
    pv: number | null
    link: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Cms_articleMaxAggregateOutputType = {
    id: number | null
    cid: number | null
    subCid: string | null
    title: string | null
    shortTitle: string | null
    tagId: string | null
    attr: string | null
    articleView: string | null
    source: string | null
    author: string | null
    description: string | null
    img: string | null
    content: string | null
    status: number | null
    pv: number | null
    link: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Cms_articleCountAggregateOutputType = {
    id: number
    cid: number
    subCid: number
    title: number
    shortTitle: number
    tagId: number
    attr: number
    articleView: number
    source: number
    author: number
    description: number
    img: number
    content: number
    status: number
    pv: number
    link: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Cms_articleAvgAggregateInputType = {
    id?: true
    cid?: true
    status?: true
    pv?: true
  }

  export type Cms_articleSumAggregateInputType = {
    id?: true
    cid?: true
    status?: true
    pv?: true
  }

  export type Cms_articleMinAggregateInputType = {
    id?: true
    cid?: true
    subCid?: true
    title?: true
    shortTitle?: true
    tagId?: true
    attr?: true
    articleView?: true
    source?: true
    author?: true
    description?: true
    img?: true
    content?: true
    status?: true
    pv?: true
    link?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Cms_articleMaxAggregateInputType = {
    id?: true
    cid?: true
    subCid?: true
    title?: true
    shortTitle?: true
    tagId?: true
    attr?: true
    articleView?: true
    source?: true
    author?: true
    description?: true
    img?: true
    content?: true
    status?: true
    pv?: true
    link?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Cms_articleCountAggregateInputType = {
    id?: true
    cid?: true
    subCid?: true
    title?: true
    shortTitle?: true
    tagId?: true
    attr?: true
    articleView?: true
    source?: true
    author?: true
    description?: true
    img?: true
    content?: true
    status?: true
    pv?: true
    link?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Cms_articleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cms_article to aggregate.
     */
    where?: cms_articleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_articles to fetch.
     */
    orderBy?: cms_articleOrderByWithRelationInput | cms_articleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cms_articleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cms_articles
    **/
    _count?: true | Cms_articleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cms_articleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cms_articleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cms_articleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cms_articleMaxAggregateInputType
  }

  export type GetCms_articleAggregateType<T extends Cms_articleAggregateArgs> = {
        [P in keyof T & keyof AggregateCms_article]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCms_article[P]>
      : GetScalarType<T[P], AggregateCms_article[P]>
  }




  export type cms_articleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cms_articleWhereInput
    orderBy?: cms_articleOrderByWithAggregationInput | cms_articleOrderByWithAggregationInput[]
    by: Cms_articleScalarFieldEnum[] | Cms_articleScalarFieldEnum
    having?: cms_articleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cms_articleCountAggregateInputType | true
    _avg?: Cms_articleAvgAggregateInputType
    _sum?: Cms_articleSumAggregateInputType
    _min?: Cms_articleMinAggregateInputType
    _max?: Cms_articleMaxAggregateInputType
  }

  export type Cms_articleGroupByOutputType = {
    id: number
    cid: number | null
    subCid: string | null
    title: string | null
    shortTitle: string | null
    tagId: string | null
    attr: string | null
    articleView: string | null
    source: string | null
    author: string | null
    description: string | null
    img: string | null
    content: string | null
    status: number | null
    pv: number | null
    link: string | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: Cms_articleCountAggregateOutputType | null
    _avg: Cms_articleAvgAggregateOutputType | null
    _sum: Cms_articleSumAggregateOutputType | null
    _min: Cms_articleMinAggregateOutputType | null
    _max: Cms_articleMaxAggregateOutputType | null
  }

  type GetCms_articleGroupByPayload<T extends cms_articleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cms_articleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cms_articleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cms_articleGroupByOutputType[P]>
            : GetScalarType<T[P], Cms_articleGroupByOutputType[P]>
        }
      >
    >


  export type cms_articleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cid?: boolean
    subCid?: boolean
    title?: boolean
    shortTitle?: boolean
    tagId?: boolean
    attr?: boolean
    articleView?: boolean
    source?: boolean
    author?: boolean
    description?: boolean
    img?: boolean
    content?: boolean
    status?: boolean
    pv?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cms_article"]>



  export type cms_articleSelectScalar = {
    id?: boolean
    cid?: boolean
    subCid?: boolean
    title?: boolean
    shortTitle?: boolean
    tagId?: boolean
    attr?: boolean
    articleView?: boolean
    source?: boolean
    author?: boolean
    description?: boolean
    img?: boolean
    content?: boolean
    status?: boolean
    pv?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type cms_articleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cid" | "subCid" | "title" | "shortTitle" | "tagId" | "attr" | "articleView" | "source" | "author" | "description" | "img" | "content" | "status" | "pv" | "link" | "createdAt" | "updatedAt", ExtArgs["result"]["cms_article"]>

  export type $cms_articlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cms_article"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cid: number | null
      subCid: string | null
      title: string | null
      shortTitle: string | null
      tagId: string | null
      attr: string | null
      articleView: string | null
      source: string | null
      author: string | null
      description: string | null
      img: string | null
      content: string | null
      status: number | null
      pv: number | null
      link: string | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["cms_article"]>
    composites: {}
  }

  type cms_articleGetPayload<S extends boolean | null | undefined | cms_articleDefaultArgs> = $Result.GetResult<Prisma.$cms_articlePayload, S>

  type cms_articleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cms_articleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cms_articleCountAggregateInputType | true
    }

  export interface cms_articleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cms_article'], meta: { name: 'cms_article' } }
    /**
     * Find zero or one Cms_article that matches the filter.
     * @param {cms_articleFindUniqueArgs} args - Arguments to find a Cms_article
     * @example
     * // Get one Cms_article
     * const cms_article = await prisma.cms_article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cms_articleFindUniqueArgs>(args: SelectSubset<T, cms_articleFindUniqueArgs<ExtArgs>>): Prisma__cms_articleClient<$Result.GetResult<Prisma.$cms_articlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cms_article that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cms_articleFindUniqueOrThrowArgs} args - Arguments to find a Cms_article
     * @example
     * // Get one Cms_article
     * const cms_article = await prisma.cms_article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cms_articleFindUniqueOrThrowArgs>(args: SelectSubset<T, cms_articleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cms_articleClient<$Result.GetResult<Prisma.$cms_articlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cms_article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_articleFindFirstArgs} args - Arguments to find a Cms_article
     * @example
     * // Get one Cms_article
     * const cms_article = await prisma.cms_article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cms_articleFindFirstArgs>(args?: SelectSubset<T, cms_articleFindFirstArgs<ExtArgs>>): Prisma__cms_articleClient<$Result.GetResult<Prisma.$cms_articlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cms_article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_articleFindFirstOrThrowArgs} args - Arguments to find a Cms_article
     * @example
     * // Get one Cms_article
     * const cms_article = await prisma.cms_article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cms_articleFindFirstOrThrowArgs>(args?: SelectSubset<T, cms_articleFindFirstOrThrowArgs<ExtArgs>>): Prisma__cms_articleClient<$Result.GetResult<Prisma.$cms_articlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cms_articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_articleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cms_articles
     * const cms_articles = await prisma.cms_article.findMany()
     * 
     * // Get first 10 Cms_articles
     * const cms_articles = await prisma.cms_article.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cms_articleWithIdOnly = await prisma.cms_article.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cms_articleFindManyArgs>(args?: SelectSubset<T, cms_articleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cms_articlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cms_article.
     * @param {cms_articleCreateArgs} args - Arguments to create a Cms_article.
     * @example
     * // Create one Cms_article
     * const Cms_article = await prisma.cms_article.create({
     *   data: {
     *     // ... data to create a Cms_article
     *   }
     * })
     * 
     */
    create<T extends cms_articleCreateArgs>(args: SelectSubset<T, cms_articleCreateArgs<ExtArgs>>): Prisma__cms_articleClient<$Result.GetResult<Prisma.$cms_articlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cms_articles.
     * @param {cms_articleCreateManyArgs} args - Arguments to create many Cms_articles.
     * @example
     * // Create many Cms_articles
     * const cms_article = await prisma.cms_article.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cms_articleCreateManyArgs>(args?: SelectSubset<T, cms_articleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cms_article.
     * @param {cms_articleDeleteArgs} args - Arguments to delete one Cms_article.
     * @example
     * // Delete one Cms_article
     * const Cms_article = await prisma.cms_article.delete({
     *   where: {
     *     // ... filter to delete one Cms_article
     *   }
     * })
     * 
     */
    delete<T extends cms_articleDeleteArgs>(args: SelectSubset<T, cms_articleDeleteArgs<ExtArgs>>): Prisma__cms_articleClient<$Result.GetResult<Prisma.$cms_articlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cms_article.
     * @param {cms_articleUpdateArgs} args - Arguments to update one Cms_article.
     * @example
     * // Update one Cms_article
     * const cms_article = await prisma.cms_article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cms_articleUpdateArgs>(args: SelectSubset<T, cms_articleUpdateArgs<ExtArgs>>): Prisma__cms_articleClient<$Result.GetResult<Prisma.$cms_articlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cms_articles.
     * @param {cms_articleDeleteManyArgs} args - Arguments to filter Cms_articles to delete.
     * @example
     * // Delete a few Cms_articles
     * const { count } = await prisma.cms_article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cms_articleDeleteManyArgs>(args?: SelectSubset<T, cms_articleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cms_articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_articleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cms_articles
     * const cms_article = await prisma.cms_article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cms_articleUpdateManyArgs>(args: SelectSubset<T, cms_articleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cms_article.
     * @param {cms_articleUpsertArgs} args - Arguments to update or create a Cms_article.
     * @example
     * // Update or create a Cms_article
     * const cms_article = await prisma.cms_article.upsert({
     *   create: {
     *     // ... data to create a Cms_article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cms_article we want to update
     *   }
     * })
     */
    upsert<T extends cms_articleUpsertArgs>(args: SelectSubset<T, cms_articleUpsertArgs<ExtArgs>>): Prisma__cms_articleClient<$Result.GetResult<Prisma.$cms_articlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cms_articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_articleCountArgs} args - Arguments to filter Cms_articles to count.
     * @example
     * // Count the number of Cms_articles
     * const count = await prisma.cms_article.count({
     *   where: {
     *     // ... the filter for the Cms_articles we want to count
     *   }
     * })
    **/
    count<T extends cms_articleCountArgs>(
      args?: Subset<T, cms_articleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cms_articleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cms_article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cms_articleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cms_articleAggregateArgs>(args: Subset<T, Cms_articleAggregateArgs>): Prisma.PrismaPromise<GetCms_articleAggregateType<T>>

    /**
     * Group by Cms_article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_articleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cms_articleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cms_articleGroupByArgs['orderBy'] }
        : { orderBy?: cms_articleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cms_articleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCms_articleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cms_article model
   */
  readonly fields: cms_articleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cms_article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cms_articleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cms_article model
   */
  interface cms_articleFieldRefs {
    readonly id: FieldRef<"cms_article", 'Int'>
    readonly cid: FieldRef<"cms_article", 'Int'>
    readonly subCid: FieldRef<"cms_article", 'String'>
    readonly title: FieldRef<"cms_article", 'String'>
    readonly shortTitle: FieldRef<"cms_article", 'String'>
    readonly tagId: FieldRef<"cms_article", 'String'>
    readonly attr: FieldRef<"cms_article", 'String'>
    readonly articleView: FieldRef<"cms_article", 'String'>
    readonly source: FieldRef<"cms_article", 'String'>
    readonly author: FieldRef<"cms_article", 'String'>
    readonly description: FieldRef<"cms_article", 'String'>
    readonly img: FieldRef<"cms_article", 'String'>
    readonly content: FieldRef<"cms_article", 'String'>
    readonly status: FieldRef<"cms_article", 'Int'>
    readonly pv: FieldRef<"cms_article", 'Int'>
    readonly link: FieldRef<"cms_article", 'String'>
    readonly createdAt: FieldRef<"cms_article", 'DateTime'>
    readonly updatedAt: FieldRef<"cms_article", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cms_article findUnique
   */
  export type cms_articleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_article
     */
    select?: cms_articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_article
     */
    omit?: cms_articleOmit<ExtArgs> | null
    /**
     * Filter, which cms_article to fetch.
     */
    where: cms_articleWhereUniqueInput
  }

  /**
   * cms_article findUniqueOrThrow
   */
  export type cms_articleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_article
     */
    select?: cms_articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_article
     */
    omit?: cms_articleOmit<ExtArgs> | null
    /**
     * Filter, which cms_article to fetch.
     */
    where: cms_articleWhereUniqueInput
  }

  /**
   * cms_article findFirst
   */
  export type cms_articleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_article
     */
    select?: cms_articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_article
     */
    omit?: cms_articleOmit<ExtArgs> | null
    /**
     * Filter, which cms_article to fetch.
     */
    where?: cms_articleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_articles to fetch.
     */
    orderBy?: cms_articleOrderByWithRelationInput | cms_articleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cms_articles.
     */
    cursor?: cms_articleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cms_articles.
     */
    distinct?: Cms_articleScalarFieldEnum | Cms_articleScalarFieldEnum[]
  }

  /**
   * cms_article findFirstOrThrow
   */
  export type cms_articleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_article
     */
    select?: cms_articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_article
     */
    omit?: cms_articleOmit<ExtArgs> | null
    /**
     * Filter, which cms_article to fetch.
     */
    where?: cms_articleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_articles to fetch.
     */
    orderBy?: cms_articleOrderByWithRelationInput | cms_articleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cms_articles.
     */
    cursor?: cms_articleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cms_articles.
     */
    distinct?: Cms_articleScalarFieldEnum | Cms_articleScalarFieldEnum[]
  }

  /**
   * cms_article findMany
   */
  export type cms_articleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_article
     */
    select?: cms_articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_article
     */
    omit?: cms_articleOmit<ExtArgs> | null
    /**
     * Filter, which cms_articles to fetch.
     */
    where?: cms_articleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_articles to fetch.
     */
    orderBy?: cms_articleOrderByWithRelationInput | cms_articleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cms_articles.
     */
    cursor?: cms_articleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_articles.
     */
    skip?: number
    distinct?: Cms_articleScalarFieldEnum | Cms_articleScalarFieldEnum[]
  }

  /**
   * cms_article create
   */
  export type cms_articleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_article
     */
    select?: cms_articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_article
     */
    omit?: cms_articleOmit<ExtArgs> | null
    /**
     * The data needed to create a cms_article.
     */
    data?: XOR<cms_articleCreateInput, cms_articleUncheckedCreateInput>
  }

  /**
   * cms_article createMany
   */
  export type cms_articleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cms_articles.
     */
    data: cms_articleCreateManyInput | cms_articleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cms_article update
   */
  export type cms_articleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_article
     */
    select?: cms_articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_article
     */
    omit?: cms_articleOmit<ExtArgs> | null
    /**
     * The data needed to update a cms_article.
     */
    data: XOR<cms_articleUpdateInput, cms_articleUncheckedUpdateInput>
    /**
     * Choose, which cms_article to update.
     */
    where: cms_articleWhereUniqueInput
  }

  /**
   * cms_article updateMany
   */
  export type cms_articleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cms_articles.
     */
    data: XOR<cms_articleUpdateManyMutationInput, cms_articleUncheckedUpdateManyInput>
    /**
     * Filter which cms_articles to update
     */
    where?: cms_articleWhereInput
    /**
     * Limit how many cms_articles to update.
     */
    limit?: number
  }

  /**
   * cms_article upsert
   */
  export type cms_articleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_article
     */
    select?: cms_articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_article
     */
    omit?: cms_articleOmit<ExtArgs> | null
    /**
     * The filter to search for the cms_article to update in case it exists.
     */
    where: cms_articleWhereUniqueInput
    /**
     * In case the cms_article found by the `where` argument doesn't exist, create a new cms_article with this data.
     */
    create: XOR<cms_articleCreateInput, cms_articleUncheckedCreateInput>
    /**
     * In case the cms_article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cms_articleUpdateInput, cms_articleUncheckedUpdateInput>
  }

  /**
   * cms_article delete
   */
  export type cms_articleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_article
     */
    select?: cms_articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_article
     */
    omit?: cms_articleOmit<ExtArgs> | null
    /**
     * Filter which cms_article to delete.
     */
    where: cms_articleWhereUniqueInput
  }

  /**
   * cms_article deleteMany
   */
  export type cms_articleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cms_articles to delete
     */
    where?: cms_articleWhereInput
    /**
     * Limit how many cms_articles to delete.
     */
    limit?: number
  }

  /**
   * cms_article without action
   */
  export type cms_articleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_article
     */
    select?: cms_articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_article
     */
    omit?: cms_articleOmit<ExtArgs> | null
  }


  /**
   * Model cms_articletag
   */

  export type AggregateCms_articletag = {
    _count: Cms_articletagCountAggregateOutputType | null
    _avg: Cms_articletagAvgAggregateOutputType | null
    _sum: Cms_articletagSumAggregateOutputType | null
    _min: Cms_articletagMinAggregateOutputType | null
    _max: Cms_articletagMaxAggregateOutputType | null
  }

  export type Cms_articletagAvgAggregateOutputType = {
    id: number | null
    aid: number | null
    tid: number | null
  }

  export type Cms_articletagSumAggregateOutputType = {
    id: number | null
    aid: number | null
    tid: number | null
  }

  export type Cms_articletagMinAggregateOutputType = {
    id: number | null
    aid: number | null
    tid: number | null
  }

  export type Cms_articletagMaxAggregateOutputType = {
    id: number | null
    aid: number | null
    tid: number | null
  }

  export type Cms_articletagCountAggregateOutputType = {
    id: number
    aid: number
    tid: number
    _all: number
  }


  export type Cms_articletagAvgAggregateInputType = {
    id?: true
    aid?: true
    tid?: true
  }

  export type Cms_articletagSumAggregateInputType = {
    id?: true
    aid?: true
    tid?: true
  }

  export type Cms_articletagMinAggregateInputType = {
    id?: true
    aid?: true
    tid?: true
  }

  export type Cms_articletagMaxAggregateInputType = {
    id?: true
    aid?: true
    tid?: true
  }

  export type Cms_articletagCountAggregateInputType = {
    id?: true
    aid?: true
    tid?: true
    _all?: true
  }

  export type Cms_articletagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cms_articletag to aggregate.
     */
    where?: cms_articletagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_articletags to fetch.
     */
    orderBy?: cms_articletagOrderByWithRelationInput | cms_articletagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cms_articletagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_articletags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_articletags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cms_articletags
    **/
    _count?: true | Cms_articletagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cms_articletagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cms_articletagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cms_articletagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cms_articletagMaxAggregateInputType
  }

  export type GetCms_articletagAggregateType<T extends Cms_articletagAggregateArgs> = {
        [P in keyof T & keyof AggregateCms_articletag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCms_articletag[P]>
      : GetScalarType<T[P], AggregateCms_articletag[P]>
  }




  export type cms_articletagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cms_articletagWhereInput
    orderBy?: cms_articletagOrderByWithAggregationInput | cms_articletagOrderByWithAggregationInput[]
    by: Cms_articletagScalarFieldEnum[] | Cms_articletagScalarFieldEnum
    having?: cms_articletagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cms_articletagCountAggregateInputType | true
    _avg?: Cms_articletagAvgAggregateInputType
    _sum?: Cms_articletagSumAggregateInputType
    _min?: Cms_articletagMinAggregateInputType
    _max?: Cms_articletagMaxAggregateInputType
  }

  export type Cms_articletagGroupByOutputType = {
    id: number
    aid: number | null
    tid: number | null
    _count: Cms_articletagCountAggregateOutputType | null
    _avg: Cms_articletagAvgAggregateOutputType | null
    _sum: Cms_articletagSumAggregateOutputType | null
    _min: Cms_articletagMinAggregateOutputType | null
    _max: Cms_articletagMaxAggregateOutputType | null
  }

  type GetCms_articletagGroupByPayload<T extends cms_articletagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cms_articletagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cms_articletagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cms_articletagGroupByOutputType[P]>
            : GetScalarType<T[P], Cms_articletagGroupByOutputType[P]>
        }
      >
    >


  export type cms_articletagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aid?: boolean
    tid?: boolean
  }, ExtArgs["result"]["cms_articletag"]>



  export type cms_articletagSelectScalar = {
    id?: boolean
    aid?: boolean
    tid?: boolean
  }

  export type cms_articletagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "aid" | "tid", ExtArgs["result"]["cms_articletag"]>

  export type $cms_articletagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cms_articletag"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      aid: number | null
      tid: number | null
    }, ExtArgs["result"]["cms_articletag"]>
    composites: {}
  }

  type cms_articletagGetPayload<S extends boolean | null | undefined | cms_articletagDefaultArgs> = $Result.GetResult<Prisma.$cms_articletagPayload, S>

  type cms_articletagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cms_articletagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cms_articletagCountAggregateInputType | true
    }

  export interface cms_articletagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cms_articletag'], meta: { name: 'cms_articletag' } }
    /**
     * Find zero or one Cms_articletag that matches the filter.
     * @param {cms_articletagFindUniqueArgs} args - Arguments to find a Cms_articletag
     * @example
     * // Get one Cms_articletag
     * const cms_articletag = await prisma.cms_articletag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cms_articletagFindUniqueArgs>(args: SelectSubset<T, cms_articletagFindUniqueArgs<ExtArgs>>): Prisma__cms_articletagClient<$Result.GetResult<Prisma.$cms_articletagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cms_articletag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cms_articletagFindUniqueOrThrowArgs} args - Arguments to find a Cms_articletag
     * @example
     * // Get one Cms_articletag
     * const cms_articletag = await prisma.cms_articletag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cms_articletagFindUniqueOrThrowArgs>(args: SelectSubset<T, cms_articletagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cms_articletagClient<$Result.GetResult<Prisma.$cms_articletagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cms_articletag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_articletagFindFirstArgs} args - Arguments to find a Cms_articletag
     * @example
     * // Get one Cms_articletag
     * const cms_articletag = await prisma.cms_articletag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cms_articletagFindFirstArgs>(args?: SelectSubset<T, cms_articletagFindFirstArgs<ExtArgs>>): Prisma__cms_articletagClient<$Result.GetResult<Prisma.$cms_articletagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cms_articletag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_articletagFindFirstOrThrowArgs} args - Arguments to find a Cms_articletag
     * @example
     * // Get one Cms_articletag
     * const cms_articletag = await prisma.cms_articletag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cms_articletagFindFirstOrThrowArgs>(args?: SelectSubset<T, cms_articletagFindFirstOrThrowArgs<ExtArgs>>): Prisma__cms_articletagClient<$Result.GetResult<Prisma.$cms_articletagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cms_articletags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_articletagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cms_articletags
     * const cms_articletags = await prisma.cms_articletag.findMany()
     * 
     * // Get first 10 Cms_articletags
     * const cms_articletags = await prisma.cms_articletag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cms_articletagWithIdOnly = await prisma.cms_articletag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cms_articletagFindManyArgs>(args?: SelectSubset<T, cms_articletagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cms_articletagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cms_articletag.
     * @param {cms_articletagCreateArgs} args - Arguments to create a Cms_articletag.
     * @example
     * // Create one Cms_articletag
     * const Cms_articletag = await prisma.cms_articletag.create({
     *   data: {
     *     // ... data to create a Cms_articletag
     *   }
     * })
     * 
     */
    create<T extends cms_articletagCreateArgs>(args: SelectSubset<T, cms_articletagCreateArgs<ExtArgs>>): Prisma__cms_articletagClient<$Result.GetResult<Prisma.$cms_articletagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cms_articletags.
     * @param {cms_articletagCreateManyArgs} args - Arguments to create many Cms_articletags.
     * @example
     * // Create many Cms_articletags
     * const cms_articletag = await prisma.cms_articletag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cms_articletagCreateManyArgs>(args?: SelectSubset<T, cms_articletagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cms_articletag.
     * @param {cms_articletagDeleteArgs} args - Arguments to delete one Cms_articletag.
     * @example
     * // Delete one Cms_articletag
     * const Cms_articletag = await prisma.cms_articletag.delete({
     *   where: {
     *     // ... filter to delete one Cms_articletag
     *   }
     * })
     * 
     */
    delete<T extends cms_articletagDeleteArgs>(args: SelectSubset<T, cms_articletagDeleteArgs<ExtArgs>>): Prisma__cms_articletagClient<$Result.GetResult<Prisma.$cms_articletagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cms_articletag.
     * @param {cms_articletagUpdateArgs} args - Arguments to update one Cms_articletag.
     * @example
     * // Update one Cms_articletag
     * const cms_articletag = await prisma.cms_articletag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cms_articletagUpdateArgs>(args: SelectSubset<T, cms_articletagUpdateArgs<ExtArgs>>): Prisma__cms_articletagClient<$Result.GetResult<Prisma.$cms_articletagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cms_articletags.
     * @param {cms_articletagDeleteManyArgs} args - Arguments to filter Cms_articletags to delete.
     * @example
     * // Delete a few Cms_articletags
     * const { count } = await prisma.cms_articletag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cms_articletagDeleteManyArgs>(args?: SelectSubset<T, cms_articletagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cms_articletags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_articletagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cms_articletags
     * const cms_articletag = await prisma.cms_articletag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cms_articletagUpdateManyArgs>(args: SelectSubset<T, cms_articletagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cms_articletag.
     * @param {cms_articletagUpsertArgs} args - Arguments to update or create a Cms_articletag.
     * @example
     * // Update or create a Cms_articletag
     * const cms_articletag = await prisma.cms_articletag.upsert({
     *   create: {
     *     // ... data to create a Cms_articletag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cms_articletag we want to update
     *   }
     * })
     */
    upsert<T extends cms_articletagUpsertArgs>(args: SelectSubset<T, cms_articletagUpsertArgs<ExtArgs>>): Prisma__cms_articletagClient<$Result.GetResult<Prisma.$cms_articletagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cms_articletags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_articletagCountArgs} args - Arguments to filter Cms_articletags to count.
     * @example
     * // Count the number of Cms_articletags
     * const count = await prisma.cms_articletag.count({
     *   where: {
     *     // ... the filter for the Cms_articletags we want to count
     *   }
     * })
    **/
    count<T extends cms_articletagCountArgs>(
      args?: Subset<T, cms_articletagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cms_articletagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cms_articletag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cms_articletagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cms_articletagAggregateArgs>(args: Subset<T, Cms_articletagAggregateArgs>): Prisma.PrismaPromise<GetCms_articletagAggregateType<T>>

    /**
     * Group by Cms_articletag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_articletagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cms_articletagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cms_articletagGroupByArgs['orderBy'] }
        : { orderBy?: cms_articletagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cms_articletagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCms_articletagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cms_articletag model
   */
  readonly fields: cms_articletagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cms_articletag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cms_articletagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cms_articletag model
   */
  interface cms_articletagFieldRefs {
    readonly id: FieldRef<"cms_articletag", 'Int'>
    readonly aid: FieldRef<"cms_articletag", 'Int'>
    readonly tid: FieldRef<"cms_articletag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * cms_articletag findUnique
   */
  export type cms_articletagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_articletag
     */
    select?: cms_articletagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_articletag
     */
    omit?: cms_articletagOmit<ExtArgs> | null
    /**
     * Filter, which cms_articletag to fetch.
     */
    where: cms_articletagWhereUniqueInput
  }

  /**
   * cms_articletag findUniqueOrThrow
   */
  export type cms_articletagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_articletag
     */
    select?: cms_articletagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_articletag
     */
    omit?: cms_articletagOmit<ExtArgs> | null
    /**
     * Filter, which cms_articletag to fetch.
     */
    where: cms_articletagWhereUniqueInput
  }

  /**
   * cms_articletag findFirst
   */
  export type cms_articletagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_articletag
     */
    select?: cms_articletagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_articletag
     */
    omit?: cms_articletagOmit<ExtArgs> | null
    /**
     * Filter, which cms_articletag to fetch.
     */
    where?: cms_articletagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_articletags to fetch.
     */
    orderBy?: cms_articletagOrderByWithRelationInput | cms_articletagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cms_articletags.
     */
    cursor?: cms_articletagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_articletags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_articletags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cms_articletags.
     */
    distinct?: Cms_articletagScalarFieldEnum | Cms_articletagScalarFieldEnum[]
  }

  /**
   * cms_articletag findFirstOrThrow
   */
  export type cms_articletagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_articletag
     */
    select?: cms_articletagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_articletag
     */
    omit?: cms_articletagOmit<ExtArgs> | null
    /**
     * Filter, which cms_articletag to fetch.
     */
    where?: cms_articletagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_articletags to fetch.
     */
    orderBy?: cms_articletagOrderByWithRelationInput | cms_articletagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cms_articletags.
     */
    cursor?: cms_articletagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_articletags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_articletags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cms_articletags.
     */
    distinct?: Cms_articletagScalarFieldEnum | Cms_articletagScalarFieldEnum[]
  }

  /**
   * cms_articletag findMany
   */
  export type cms_articletagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_articletag
     */
    select?: cms_articletagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_articletag
     */
    omit?: cms_articletagOmit<ExtArgs> | null
    /**
     * Filter, which cms_articletags to fetch.
     */
    where?: cms_articletagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_articletags to fetch.
     */
    orderBy?: cms_articletagOrderByWithRelationInput | cms_articletagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cms_articletags.
     */
    cursor?: cms_articletagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_articletags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_articletags.
     */
    skip?: number
    distinct?: Cms_articletagScalarFieldEnum | Cms_articletagScalarFieldEnum[]
  }

  /**
   * cms_articletag create
   */
  export type cms_articletagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_articletag
     */
    select?: cms_articletagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_articletag
     */
    omit?: cms_articletagOmit<ExtArgs> | null
    /**
     * The data needed to create a cms_articletag.
     */
    data?: XOR<cms_articletagCreateInput, cms_articletagUncheckedCreateInput>
  }

  /**
   * cms_articletag createMany
   */
  export type cms_articletagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cms_articletags.
     */
    data: cms_articletagCreateManyInput | cms_articletagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cms_articletag update
   */
  export type cms_articletagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_articletag
     */
    select?: cms_articletagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_articletag
     */
    omit?: cms_articletagOmit<ExtArgs> | null
    /**
     * The data needed to update a cms_articletag.
     */
    data: XOR<cms_articletagUpdateInput, cms_articletagUncheckedUpdateInput>
    /**
     * Choose, which cms_articletag to update.
     */
    where: cms_articletagWhereUniqueInput
  }

  /**
   * cms_articletag updateMany
   */
  export type cms_articletagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cms_articletags.
     */
    data: XOR<cms_articletagUpdateManyMutationInput, cms_articletagUncheckedUpdateManyInput>
    /**
     * Filter which cms_articletags to update
     */
    where?: cms_articletagWhereInput
    /**
     * Limit how many cms_articletags to update.
     */
    limit?: number
  }

  /**
   * cms_articletag upsert
   */
  export type cms_articletagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_articletag
     */
    select?: cms_articletagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_articletag
     */
    omit?: cms_articletagOmit<ExtArgs> | null
    /**
     * The filter to search for the cms_articletag to update in case it exists.
     */
    where: cms_articletagWhereUniqueInput
    /**
     * In case the cms_articletag found by the `where` argument doesn't exist, create a new cms_articletag with this data.
     */
    create: XOR<cms_articletagCreateInput, cms_articletagUncheckedCreateInput>
    /**
     * In case the cms_articletag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cms_articletagUpdateInput, cms_articletagUncheckedUpdateInput>
  }

  /**
   * cms_articletag delete
   */
  export type cms_articletagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_articletag
     */
    select?: cms_articletagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_articletag
     */
    omit?: cms_articletagOmit<ExtArgs> | null
    /**
     * Filter which cms_articletag to delete.
     */
    where: cms_articletagWhereUniqueInput
  }

  /**
   * cms_articletag deleteMany
   */
  export type cms_articletagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cms_articletags to delete
     */
    where?: cms_articletagWhereInput
    /**
     * Limit how many cms_articletags to delete.
     */
    limit?: number
  }

  /**
   * cms_articletag without action
   */
  export type cms_articletagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_articletag
     */
    select?: cms_articletagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_articletag
     */
    omit?: cms_articletagOmit<ExtArgs> | null
  }


  /**
   * Model cms_category
   */

  export type AggregateCms_category = {
    _count: Cms_categoryCountAggregateOutputType | null
    _avg: Cms_categoryAvgAggregateOutputType | null
    _sum: Cms_categorySumAggregateOutputType | null
    _min: Cms_categoryMinAggregateOutputType | null
    _max: Cms_categoryMaxAggregateOutputType | null
  }

  export type Cms_categoryAvgAggregateOutputType = {
    id: number | null
    pid: number | null
    orderBy: number | null
  }

  export type Cms_categorySumAggregateOutputType = {
    id: number | null
    pid: number | null
    orderBy: number | null
  }

  export type Cms_categoryMinAggregateOutputType = {
    id: number | null
    pid: number | null
    seoTitle: string | null
    seoKeywords: string | null
    seoDescription: string | null
    name: string | null
    pinyin: string | null
    path: string | null
    description: string | null
    type: string | null
    url: string | null
    orderBy: number | null
    target: string | null
    status: string | null
    mid: string | null
    listView: string | null
    articleView: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Cms_categoryMaxAggregateOutputType = {
    id: number | null
    pid: number | null
    seoTitle: string | null
    seoKeywords: string | null
    seoDescription: string | null
    name: string | null
    pinyin: string | null
    path: string | null
    description: string | null
    type: string | null
    url: string | null
    orderBy: number | null
    target: string | null
    status: string | null
    mid: string | null
    listView: string | null
    articleView: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Cms_categoryCountAggregateOutputType = {
    id: number
    pid: number
    seoTitle: number
    seoKeywords: number
    seoDescription: number
    name: number
    pinyin: number
    path: number
    description: number
    type: number
    url: number
    orderBy: number
    target: number
    status: number
    mid: number
    listView: number
    articleView: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Cms_categoryAvgAggregateInputType = {
    id?: true
    pid?: true
    orderBy?: true
  }

  export type Cms_categorySumAggregateInputType = {
    id?: true
    pid?: true
    orderBy?: true
  }

  export type Cms_categoryMinAggregateInputType = {
    id?: true
    pid?: true
    seoTitle?: true
    seoKeywords?: true
    seoDescription?: true
    name?: true
    pinyin?: true
    path?: true
    description?: true
    type?: true
    url?: true
    orderBy?: true
    target?: true
    status?: true
    mid?: true
    listView?: true
    articleView?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Cms_categoryMaxAggregateInputType = {
    id?: true
    pid?: true
    seoTitle?: true
    seoKeywords?: true
    seoDescription?: true
    name?: true
    pinyin?: true
    path?: true
    description?: true
    type?: true
    url?: true
    orderBy?: true
    target?: true
    status?: true
    mid?: true
    listView?: true
    articleView?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Cms_categoryCountAggregateInputType = {
    id?: true
    pid?: true
    seoTitle?: true
    seoKeywords?: true
    seoDescription?: true
    name?: true
    pinyin?: true
    path?: true
    description?: true
    type?: true
    url?: true
    orderBy?: true
    target?: true
    status?: true
    mid?: true
    listView?: true
    articleView?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Cms_categoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cms_category to aggregate.
     */
    where?: cms_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_categories to fetch.
     */
    orderBy?: cms_categoryOrderByWithRelationInput | cms_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cms_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cms_categories
    **/
    _count?: true | Cms_categoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cms_categoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cms_categorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cms_categoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cms_categoryMaxAggregateInputType
  }

  export type GetCms_categoryAggregateType<T extends Cms_categoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCms_category]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCms_category[P]>
      : GetScalarType<T[P], AggregateCms_category[P]>
  }




  export type cms_categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cms_categoryWhereInput
    orderBy?: cms_categoryOrderByWithAggregationInput | cms_categoryOrderByWithAggregationInput[]
    by: Cms_categoryScalarFieldEnum[] | Cms_categoryScalarFieldEnum
    having?: cms_categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cms_categoryCountAggregateInputType | true
    _avg?: Cms_categoryAvgAggregateInputType
    _sum?: Cms_categorySumAggregateInputType
    _min?: Cms_categoryMinAggregateInputType
    _max?: Cms_categoryMaxAggregateInputType
  }

  export type Cms_categoryGroupByOutputType = {
    id: number
    pid: number
    seoTitle: string | null
    seoKeywords: string | null
    seoDescription: string | null
    name: string | null
    pinyin: string | null
    path: string
    description: string | null
    type: string | null
    url: string | null
    orderBy: number | null
    target: string | null
    status: string | null
    mid: string | null
    listView: string | null
    articleView: string | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: Cms_categoryCountAggregateOutputType | null
    _avg: Cms_categoryAvgAggregateOutputType | null
    _sum: Cms_categorySumAggregateOutputType | null
    _min: Cms_categoryMinAggregateOutputType | null
    _max: Cms_categoryMaxAggregateOutputType | null
  }

  type GetCms_categoryGroupByPayload<T extends cms_categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cms_categoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cms_categoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cms_categoryGroupByOutputType[P]>
            : GetScalarType<T[P], Cms_categoryGroupByOutputType[P]>
        }
      >
    >


  export type cms_categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pid?: boolean
    seoTitle?: boolean
    seoKeywords?: boolean
    seoDescription?: boolean
    name?: boolean
    pinyin?: boolean
    path?: boolean
    description?: boolean
    type?: boolean
    url?: boolean
    orderBy?: boolean
    target?: boolean
    status?: boolean
    mid?: boolean
    listView?: boolean
    articleView?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cms_category"]>



  export type cms_categorySelectScalar = {
    id?: boolean
    pid?: boolean
    seoTitle?: boolean
    seoKeywords?: boolean
    seoDescription?: boolean
    name?: boolean
    pinyin?: boolean
    path?: boolean
    description?: boolean
    type?: boolean
    url?: boolean
    orderBy?: boolean
    target?: boolean
    status?: boolean
    mid?: boolean
    listView?: boolean
    articleView?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type cms_categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pid" | "seoTitle" | "seoKeywords" | "seoDescription" | "name" | "pinyin" | "path" | "description" | "type" | "url" | "orderBy" | "target" | "status" | "mid" | "listView" | "articleView" | "createdAt" | "updatedAt", ExtArgs["result"]["cms_category"]>

  export type $cms_categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cms_category"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pid: number
      seoTitle: string | null
      seoKeywords: string | null
      seoDescription: string | null
      name: string | null
      pinyin: string | null
      path: string
      description: string | null
      type: string | null
      url: string | null
      orderBy: number | null
      target: string | null
      status: string | null
      mid: string | null
      listView: string | null
      articleView: string | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["cms_category"]>
    composites: {}
  }

  type cms_categoryGetPayload<S extends boolean | null | undefined | cms_categoryDefaultArgs> = $Result.GetResult<Prisma.$cms_categoryPayload, S>

  type cms_categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cms_categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cms_categoryCountAggregateInputType | true
    }

  export interface cms_categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cms_category'], meta: { name: 'cms_category' } }
    /**
     * Find zero or one Cms_category that matches the filter.
     * @param {cms_categoryFindUniqueArgs} args - Arguments to find a Cms_category
     * @example
     * // Get one Cms_category
     * const cms_category = await prisma.cms_category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cms_categoryFindUniqueArgs>(args: SelectSubset<T, cms_categoryFindUniqueArgs<ExtArgs>>): Prisma__cms_categoryClient<$Result.GetResult<Prisma.$cms_categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cms_category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cms_categoryFindUniqueOrThrowArgs} args - Arguments to find a Cms_category
     * @example
     * // Get one Cms_category
     * const cms_category = await prisma.cms_category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cms_categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, cms_categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cms_categoryClient<$Result.GetResult<Prisma.$cms_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cms_category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_categoryFindFirstArgs} args - Arguments to find a Cms_category
     * @example
     * // Get one Cms_category
     * const cms_category = await prisma.cms_category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cms_categoryFindFirstArgs>(args?: SelectSubset<T, cms_categoryFindFirstArgs<ExtArgs>>): Prisma__cms_categoryClient<$Result.GetResult<Prisma.$cms_categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cms_category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_categoryFindFirstOrThrowArgs} args - Arguments to find a Cms_category
     * @example
     * // Get one Cms_category
     * const cms_category = await prisma.cms_category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cms_categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, cms_categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__cms_categoryClient<$Result.GetResult<Prisma.$cms_categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cms_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cms_categories
     * const cms_categories = await prisma.cms_category.findMany()
     * 
     * // Get first 10 Cms_categories
     * const cms_categories = await prisma.cms_category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cms_categoryWithIdOnly = await prisma.cms_category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cms_categoryFindManyArgs>(args?: SelectSubset<T, cms_categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cms_categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cms_category.
     * @param {cms_categoryCreateArgs} args - Arguments to create a Cms_category.
     * @example
     * // Create one Cms_category
     * const Cms_category = await prisma.cms_category.create({
     *   data: {
     *     // ... data to create a Cms_category
     *   }
     * })
     * 
     */
    create<T extends cms_categoryCreateArgs>(args: SelectSubset<T, cms_categoryCreateArgs<ExtArgs>>): Prisma__cms_categoryClient<$Result.GetResult<Prisma.$cms_categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cms_categories.
     * @param {cms_categoryCreateManyArgs} args - Arguments to create many Cms_categories.
     * @example
     * // Create many Cms_categories
     * const cms_category = await prisma.cms_category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cms_categoryCreateManyArgs>(args?: SelectSubset<T, cms_categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cms_category.
     * @param {cms_categoryDeleteArgs} args - Arguments to delete one Cms_category.
     * @example
     * // Delete one Cms_category
     * const Cms_category = await prisma.cms_category.delete({
     *   where: {
     *     // ... filter to delete one Cms_category
     *   }
     * })
     * 
     */
    delete<T extends cms_categoryDeleteArgs>(args: SelectSubset<T, cms_categoryDeleteArgs<ExtArgs>>): Prisma__cms_categoryClient<$Result.GetResult<Prisma.$cms_categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cms_category.
     * @param {cms_categoryUpdateArgs} args - Arguments to update one Cms_category.
     * @example
     * // Update one Cms_category
     * const cms_category = await prisma.cms_category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cms_categoryUpdateArgs>(args: SelectSubset<T, cms_categoryUpdateArgs<ExtArgs>>): Prisma__cms_categoryClient<$Result.GetResult<Prisma.$cms_categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cms_categories.
     * @param {cms_categoryDeleteManyArgs} args - Arguments to filter Cms_categories to delete.
     * @example
     * // Delete a few Cms_categories
     * const { count } = await prisma.cms_category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cms_categoryDeleteManyArgs>(args?: SelectSubset<T, cms_categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cms_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cms_categories
     * const cms_category = await prisma.cms_category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cms_categoryUpdateManyArgs>(args: SelectSubset<T, cms_categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cms_category.
     * @param {cms_categoryUpsertArgs} args - Arguments to update or create a Cms_category.
     * @example
     * // Update or create a Cms_category
     * const cms_category = await prisma.cms_category.upsert({
     *   create: {
     *     // ... data to create a Cms_category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cms_category we want to update
     *   }
     * })
     */
    upsert<T extends cms_categoryUpsertArgs>(args: SelectSubset<T, cms_categoryUpsertArgs<ExtArgs>>): Prisma__cms_categoryClient<$Result.GetResult<Prisma.$cms_categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cms_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_categoryCountArgs} args - Arguments to filter Cms_categories to count.
     * @example
     * // Count the number of Cms_categories
     * const count = await prisma.cms_category.count({
     *   where: {
     *     // ... the filter for the Cms_categories we want to count
     *   }
     * })
    **/
    count<T extends cms_categoryCountArgs>(
      args?: Subset<T, cms_categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cms_categoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cms_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cms_categoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cms_categoryAggregateArgs>(args: Subset<T, Cms_categoryAggregateArgs>): Prisma.PrismaPromise<GetCms_categoryAggregateType<T>>

    /**
     * Group by Cms_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cms_categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cms_categoryGroupByArgs['orderBy'] }
        : { orderBy?: cms_categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cms_categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCms_categoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cms_category model
   */
  readonly fields: cms_categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cms_category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cms_categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cms_category model
   */
  interface cms_categoryFieldRefs {
    readonly id: FieldRef<"cms_category", 'Int'>
    readonly pid: FieldRef<"cms_category", 'Int'>
    readonly seoTitle: FieldRef<"cms_category", 'String'>
    readonly seoKeywords: FieldRef<"cms_category", 'String'>
    readonly seoDescription: FieldRef<"cms_category", 'String'>
    readonly name: FieldRef<"cms_category", 'String'>
    readonly pinyin: FieldRef<"cms_category", 'String'>
    readonly path: FieldRef<"cms_category", 'String'>
    readonly description: FieldRef<"cms_category", 'String'>
    readonly type: FieldRef<"cms_category", 'String'>
    readonly url: FieldRef<"cms_category", 'String'>
    readonly orderBy: FieldRef<"cms_category", 'Int'>
    readonly target: FieldRef<"cms_category", 'String'>
    readonly status: FieldRef<"cms_category", 'String'>
    readonly mid: FieldRef<"cms_category", 'String'>
    readonly listView: FieldRef<"cms_category", 'String'>
    readonly articleView: FieldRef<"cms_category", 'String'>
    readonly createdAt: FieldRef<"cms_category", 'DateTime'>
    readonly updatedAt: FieldRef<"cms_category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cms_category findUnique
   */
  export type cms_categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_category
     */
    select?: cms_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_category
     */
    omit?: cms_categoryOmit<ExtArgs> | null
    /**
     * Filter, which cms_category to fetch.
     */
    where: cms_categoryWhereUniqueInput
  }

  /**
   * cms_category findUniqueOrThrow
   */
  export type cms_categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_category
     */
    select?: cms_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_category
     */
    omit?: cms_categoryOmit<ExtArgs> | null
    /**
     * Filter, which cms_category to fetch.
     */
    where: cms_categoryWhereUniqueInput
  }

  /**
   * cms_category findFirst
   */
  export type cms_categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_category
     */
    select?: cms_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_category
     */
    omit?: cms_categoryOmit<ExtArgs> | null
    /**
     * Filter, which cms_category to fetch.
     */
    where?: cms_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_categories to fetch.
     */
    orderBy?: cms_categoryOrderByWithRelationInput | cms_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cms_categories.
     */
    cursor?: cms_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cms_categories.
     */
    distinct?: Cms_categoryScalarFieldEnum | Cms_categoryScalarFieldEnum[]
  }

  /**
   * cms_category findFirstOrThrow
   */
  export type cms_categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_category
     */
    select?: cms_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_category
     */
    omit?: cms_categoryOmit<ExtArgs> | null
    /**
     * Filter, which cms_category to fetch.
     */
    where?: cms_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_categories to fetch.
     */
    orderBy?: cms_categoryOrderByWithRelationInput | cms_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cms_categories.
     */
    cursor?: cms_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cms_categories.
     */
    distinct?: Cms_categoryScalarFieldEnum | Cms_categoryScalarFieldEnum[]
  }

  /**
   * cms_category findMany
   */
  export type cms_categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_category
     */
    select?: cms_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_category
     */
    omit?: cms_categoryOmit<ExtArgs> | null
    /**
     * Filter, which cms_categories to fetch.
     */
    where?: cms_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_categories to fetch.
     */
    orderBy?: cms_categoryOrderByWithRelationInput | cms_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cms_categories.
     */
    cursor?: cms_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_categories.
     */
    skip?: number
    distinct?: Cms_categoryScalarFieldEnum | Cms_categoryScalarFieldEnum[]
  }

  /**
   * cms_category create
   */
  export type cms_categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_category
     */
    select?: cms_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_category
     */
    omit?: cms_categoryOmit<ExtArgs> | null
    /**
     * The data needed to create a cms_category.
     */
    data: XOR<cms_categoryCreateInput, cms_categoryUncheckedCreateInput>
  }

  /**
   * cms_category createMany
   */
  export type cms_categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cms_categories.
     */
    data: cms_categoryCreateManyInput | cms_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cms_category update
   */
  export type cms_categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_category
     */
    select?: cms_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_category
     */
    omit?: cms_categoryOmit<ExtArgs> | null
    /**
     * The data needed to update a cms_category.
     */
    data: XOR<cms_categoryUpdateInput, cms_categoryUncheckedUpdateInput>
    /**
     * Choose, which cms_category to update.
     */
    where: cms_categoryWhereUniqueInput
  }

  /**
   * cms_category updateMany
   */
  export type cms_categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cms_categories.
     */
    data: XOR<cms_categoryUpdateManyMutationInput, cms_categoryUncheckedUpdateManyInput>
    /**
     * Filter which cms_categories to update
     */
    where?: cms_categoryWhereInput
    /**
     * Limit how many cms_categories to update.
     */
    limit?: number
  }

  /**
   * cms_category upsert
   */
  export type cms_categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_category
     */
    select?: cms_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_category
     */
    omit?: cms_categoryOmit<ExtArgs> | null
    /**
     * The filter to search for the cms_category to update in case it exists.
     */
    where: cms_categoryWhereUniqueInput
    /**
     * In case the cms_category found by the `where` argument doesn't exist, create a new cms_category with this data.
     */
    create: XOR<cms_categoryCreateInput, cms_categoryUncheckedCreateInput>
    /**
     * In case the cms_category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cms_categoryUpdateInput, cms_categoryUncheckedUpdateInput>
  }

  /**
   * cms_category delete
   */
  export type cms_categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_category
     */
    select?: cms_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_category
     */
    omit?: cms_categoryOmit<ExtArgs> | null
    /**
     * Filter which cms_category to delete.
     */
    where: cms_categoryWhereUniqueInput
  }

  /**
   * cms_category deleteMany
   */
  export type cms_categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cms_categories to delete
     */
    where?: cms_categoryWhereInput
    /**
     * Limit how many cms_categories to delete.
     */
    limit?: number
  }

  /**
   * cms_category without action
   */
  export type cms_categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_category
     */
    select?: cms_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_category
     */
    omit?: cms_categoryOmit<ExtArgs> | null
  }


  /**
   * Model cms_field
   */

  export type AggregateCms_field = {
    _count: Cms_fieldCountAggregateOutputType | null
    _avg: Cms_fieldAvgAggregateOutputType | null
    _sum: Cms_fieldSumAggregateOutputType | null
    _min: Cms_fieldMinAggregateOutputType | null
    _max: Cms_fieldMaxAggregateOutputType | null
  }

  export type Cms_fieldAvgAggregateOutputType = {
    id: number | null
    mid: number | null
  }

  export type Cms_fieldSumAggregateOutputType = {
    id: number | null
    mid: number | null
  }

  export type Cms_fieldMinAggregateOutputType = {
    id: number | null
    mid: number | null
    cname: string | null
    ename: string | null
    type: string | null
    val: string | null
    defaultVal: string | null
    orderBy: string | null
    length: string | null
  }

  export type Cms_fieldMaxAggregateOutputType = {
    id: number | null
    mid: number | null
    cname: string | null
    ename: string | null
    type: string | null
    val: string | null
    defaultVal: string | null
    orderBy: string | null
    length: string | null
  }

  export type Cms_fieldCountAggregateOutputType = {
    id: number
    mid: number
    cname: number
    ename: number
    type: number
    val: number
    defaultVal: number
    orderBy: number
    length: number
    _all: number
  }


  export type Cms_fieldAvgAggregateInputType = {
    id?: true
    mid?: true
  }

  export type Cms_fieldSumAggregateInputType = {
    id?: true
    mid?: true
  }

  export type Cms_fieldMinAggregateInputType = {
    id?: true
    mid?: true
    cname?: true
    ename?: true
    type?: true
    val?: true
    defaultVal?: true
    orderBy?: true
    length?: true
  }

  export type Cms_fieldMaxAggregateInputType = {
    id?: true
    mid?: true
    cname?: true
    ename?: true
    type?: true
    val?: true
    defaultVal?: true
    orderBy?: true
    length?: true
  }

  export type Cms_fieldCountAggregateInputType = {
    id?: true
    mid?: true
    cname?: true
    ename?: true
    type?: true
    val?: true
    defaultVal?: true
    orderBy?: true
    length?: true
    _all?: true
  }

  export type Cms_fieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cms_field to aggregate.
     */
    where?: cms_fieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_fields to fetch.
     */
    orderBy?: cms_fieldOrderByWithRelationInput | cms_fieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cms_fieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cms_fields
    **/
    _count?: true | Cms_fieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cms_fieldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cms_fieldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cms_fieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cms_fieldMaxAggregateInputType
  }

  export type GetCms_fieldAggregateType<T extends Cms_fieldAggregateArgs> = {
        [P in keyof T & keyof AggregateCms_field]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCms_field[P]>
      : GetScalarType<T[P], AggregateCms_field[P]>
  }




  export type cms_fieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cms_fieldWhereInput
    orderBy?: cms_fieldOrderByWithAggregationInput | cms_fieldOrderByWithAggregationInput[]
    by: Cms_fieldScalarFieldEnum[] | Cms_fieldScalarFieldEnum
    having?: cms_fieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cms_fieldCountAggregateInputType | true
    _avg?: Cms_fieldAvgAggregateInputType
    _sum?: Cms_fieldSumAggregateInputType
    _min?: Cms_fieldMinAggregateInputType
    _max?: Cms_fieldMaxAggregateInputType
  }

  export type Cms_fieldGroupByOutputType = {
    id: number
    mid: number | null
    cname: string | null
    ename: string | null
    type: string | null
    val: string | null
    defaultVal: string | null
    orderBy: string | null
    length: string | null
    _count: Cms_fieldCountAggregateOutputType | null
    _avg: Cms_fieldAvgAggregateOutputType | null
    _sum: Cms_fieldSumAggregateOutputType | null
    _min: Cms_fieldMinAggregateOutputType | null
    _max: Cms_fieldMaxAggregateOutputType | null
  }

  type GetCms_fieldGroupByPayload<T extends cms_fieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cms_fieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cms_fieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cms_fieldGroupByOutputType[P]>
            : GetScalarType<T[P], Cms_fieldGroupByOutputType[P]>
        }
      >
    >


  export type cms_fieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mid?: boolean
    cname?: boolean
    ename?: boolean
    type?: boolean
    val?: boolean
    defaultVal?: boolean
    orderBy?: boolean
    length?: boolean
  }, ExtArgs["result"]["cms_field"]>



  export type cms_fieldSelectScalar = {
    id?: boolean
    mid?: boolean
    cname?: boolean
    ename?: boolean
    type?: boolean
    val?: boolean
    defaultVal?: boolean
    orderBy?: boolean
    length?: boolean
  }

  export type cms_fieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mid" | "cname" | "ename" | "type" | "val" | "defaultVal" | "orderBy" | "length", ExtArgs["result"]["cms_field"]>

  export type $cms_fieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cms_field"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mid: number | null
      cname: string | null
      ename: string | null
      type: string | null
      val: string | null
      defaultVal: string | null
      orderBy: string | null
      length: string | null
    }, ExtArgs["result"]["cms_field"]>
    composites: {}
  }

  type cms_fieldGetPayload<S extends boolean | null | undefined | cms_fieldDefaultArgs> = $Result.GetResult<Prisma.$cms_fieldPayload, S>

  type cms_fieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cms_fieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cms_fieldCountAggregateInputType | true
    }

  export interface cms_fieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cms_field'], meta: { name: 'cms_field' } }
    /**
     * Find zero or one Cms_field that matches the filter.
     * @param {cms_fieldFindUniqueArgs} args - Arguments to find a Cms_field
     * @example
     * // Get one Cms_field
     * const cms_field = await prisma.cms_field.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cms_fieldFindUniqueArgs>(args: SelectSubset<T, cms_fieldFindUniqueArgs<ExtArgs>>): Prisma__cms_fieldClient<$Result.GetResult<Prisma.$cms_fieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cms_field that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cms_fieldFindUniqueOrThrowArgs} args - Arguments to find a Cms_field
     * @example
     * // Get one Cms_field
     * const cms_field = await prisma.cms_field.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cms_fieldFindUniqueOrThrowArgs>(args: SelectSubset<T, cms_fieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cms_fieldClient<$Result.GetResult<Prisma.$cms_fieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cms_field that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_fieldFindFirstArgs} args - Arguments to find a Cms_field
     * @example
     * // Get one Cms_field
     * const cms_field = await prisma.cms_field.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cms_fieldFindFirstArgs>(args?: SelectSubset<T, cms_fieldFindFirstArgs<ExtArgs>>): Prisma__cms_fieldClient<$Result.GetResult<Prisma.$cms_fieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cms_field that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_fieldFindFirstOrThrowArgs} args - Arguments to find a Cms_field
     * @example
     * // Get one Cms_field
     * const cms_field = await prisma.cms_field.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cms_fieldFindFirstOrThrowArgs>(args?: SelectSubset<T, cms_fieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__cms_fieldClient<$Result.GetResult<Prisma.$cms_fieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cms_fields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_fieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cms_fields
     * const cms_fields = await prisma.cms_field.findMany()
     * 
     * // Get first 10 Cms_fields
     * const cms_fields = await prisma.cms_field.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cms_fieldWithIdOnly = await prisma.cms_field.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cms_fieldFindManyArgs>(args?: SelectSubset<T, cms_fieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cms_fieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cms_field.
     * @param {cms_fieldCreateArgs} args - Arguments to create a Cms_field.
     * @example
     * // Create one Cms_field
     * const Cms_field = await prisma.cms_field.create({
     *   data: {
     *     // ... data to create a Cms_field
     *   }
     * })
     * 
     */
    create<T extends cms_fieldCreateArgs>(args: SelectSubset<T, cms_fieldCreateArgs<ExtArgs>>): Prisma__cms_fieldClient<$Result.GetResult<Prisma.$cms_fieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cms_fields.
     * @param {cms_fieldCreateManyArgs} args - Arguments to create many Cms_fields.
     * @example
     * // Create many Cms_fields
     * const cms_field = await prisma.cms_field.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cms_fieldCreateManyArgs>(args?: SelectSubset<T, cms_fieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cms_field.
     * @param {cms_fieldDeleteArgs} args - Arguments to delete one Cms_field.
     * @example
     * // Delete one Cms_field
     * const Cms_field = await prisma.cms_field.delete({
     *   where: {
     *     // ... filter to delete one Cms_field
     *   }
     * })
     * 
     */
    delete<T extends cms_fieldDeleteArgs>(args: SelectSubset<T, cms_fieldDeleteArgs<ExtArgs>>): Prisma__cms_fieldClient<$Result.GetResult<Prisma.$cms_fieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cms_field.
     * @param {cms_fieldUpdateArgs} args - Arguments to update one Cms_field.
     * @example
     * // Update one Cms_field
     * const cms_field = await prisma.cms_field.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cms_fieldUpdateArgs>(args: SelectSubset<T, cms_fieldUpdateArgs<ExtArgs>>): Prisma__cms_fieldClient<$Result.GetResult<Prisma.$cms_fieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cms_fields.
     * @param {cms_fieldDeleteManyArgs} args - Arguments to filter Cms_fields to delete.
     * @example
     * // Delete a few Cms_fields
     * const { count } = await prisma.cms_field.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cms_fieldDeleteManyArgs>(args?: SelectSubset<T, cms_fieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cms_fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_fieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cms_fields
     * const cms_field = await prisma.cms_field.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cms_fieldUpdateManyArgs>(args: SelectSubset<T, cms_fieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cms_field.
     * @param {cms_fieldUpsertArgs} args - Arguments to update or create a Cms_field.
     * @example
     * // Update or create a Cms_field
     * const cms_field = await prisma.cms_field.upsert({
     *   create: {
     *     // ... data to create a Cms_field
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cms_field we want to update
     *   }
     * })
     */
    upsert<T extends cms_fieldUpsertArgs>(args: SelectSubset<T, cms_fieldUpsertArgs<ExtArgs>>): Prisma__cms_fieldClient<$Result.GetResult<Prisma.$cms_fieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cms_fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_fieldCountArgs} args - Arguments to filter Cms_fields to count.
     * @example
     * // Count the number of Cms_fields
     * const count = await prisma.cms_field.count({
     *   where: {
     *     // ... the filter for the Cms_fields we want to count
     *   }
     * })
    **/
    count<T extends cms_fieldCountArgs>(
      args?: Subset<T, cms_fieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cms_fieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cms_field.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cms_fieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cms_fieldAggregateArgs>(args: Subset<T, Cms_fieldAggregateArgs>): Prisma.PrismaPromise<GetCms_fieldAggregateType<T>>

    /**
     * Group by Cms_field.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_fieldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cms_fieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cms_fieldGroupByArgs['orderBy'] }
        : { orderBy?: cms_fieldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cms_fieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCms_fieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cms_field model
   */
  readonly fields: cms_fieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cms_field.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cms_fieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cms_field model
   */
  interface cms_fieldFieldRefs {
    readonly id: FieldRef<"cms_field", 'Int'>
    readonly mid: FieldRef<"cms_field", 'Int'>
    readonly cname: FieldRef<"cms_field", 'String'>
    readonly ename: FieldRef<"cms_field", 'String'>
    readonly type: FieldRef<"cms_field", 'String'>
    readonly val: FieldRef<"cms_field", 'String'>
    readonly defaultVal: FieldRef<"cms_field", 'String'>
    readonly orderBy: FieldRef<"cms_field", 'String'>
    readonly length: FieldRef<"cms_field", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cms_field findUnique
   */
  export type cms_fieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_field
     */
    select?: cms_fieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_field
     */
    omit?: cms_fieldOmit<ExtArgs> | null
    /**
     * Filter, which cms_field to fetch.
     */
    where: cms_fieldWhereUniqueInput
  }

  /**
   * cms_field findUniqueOrThrow
   */
  export type cms_fieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_field
     */
    select?: cms_fieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_field
     */
    omit?: cms_fieldOmit<ExtArgs> | null
    /**
     * Filter, which cms_field to fetch.
     */
    where: cms_fieldWhereUniqueInput
  }

  /**
   * cms_field findFirst
   */
  export type cms_fieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_field
     */
    select?: cms_fieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_field
     */
    omit?: cms_fieldOmit<ExtArgs> | null
    /**
     * Filter, which cms_field to fetch.
     */
    where?: cms_fieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_fields to fetch.
     */
    orderBy?: cms_fieldOrderByWithRelationInput | cms_fieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cms_fields.
     */
    cursor?: cms_fieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cms_fields.
     */
    distinct?: Cms_fieldScalarFieldEnum | Cms_fieldScalarFieldEnum[]
  }

  /**
   * cms_field findFirstOrThrow
   */
  export type cms_fieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_field
     */
    select?: cms_fieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_field
     */
    omit?: cms_fieldOmit<ExtArgs> | null
    /**
     * Filter, which cms_field to fetch.
     */
    where?: cms_fieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_fields to fetch.
     */
    orderBy?: cms_fieldOrderByWithRelationInput | cms_fieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cms_fields.
     */
    cursor?: cms_fieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cms_fields.
     */
    distinct?: Cms_fieldScalarFieldEnum | Cms_fieldScalarFieldEnum[]
  }

  /**
   * cms_field findMany
   */
  export type cms_fieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_field
     */
    select?: cms_fieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_field
     */
    omit?: cms_fieldOmit<ExtArgs> | null
    /**
     * Filter, which cms_fields to fetch.
     */
    where?: cms_fieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_fields to fetch.
     */
    orderBy?: cms_fieldOrderByWithRelationInput | cms_fieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cms_fields.
     */
    cursor?: cms_fieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_fields.
     */
    skip?: number
    distinct?: Cms_fieldScalarFieldEnum | Cms_fieldScalarFieldEnum[]
  }

  /**
   * cms_field create
   */
  export type cms_fieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_field
     */
    select?: cms_fieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_field
     */
    omit?: cms_fieldOmit<ExtArgs> | null
    /**
     * The data needed to create a cms_field.
     */
    data?: XOR<cms_fieldCreateInput, cms_fieldUncheckedCreateInput>
  }

  /**
   * cms_field createMany
   */
  export type cms_fieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cms_fields.
     */
    data: cms_fieldCreateManyInput | cms_fieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cms_field update
   */
  export type cms_fieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_field
     */
    select?: cms_fieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_field
     */
    omit?: cms_fieldOmit<ExtArgs> | null
    /**
     * The data needed to update a cms_field.
     */
    data: XOR<cms_fieldUpdateInput, cms_fieldUncheckedUpdateInput>
    /**
     * Choose, which cms_field to update.
     */
    where: cms_fieldWhereUniqueInput
  }

  /**
   * cms_field updateMany
   */
  export type cms_fieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cms_fields.
     */
    data: XOR<cms_fieldUpdateManyMutationInput, cms_fieldUncheckedUpdateManyInput>
    /**
     * Filter which cms_fields to update
     */
    where?: cms_fieldWhereInput
    /**
     * Limit how many cms_fields to update.
     */
    limit?: number
  }

  /**
   * cms_field upsert
   */
  export type cms_fieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_field
     */
    select?: cms_fieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_field
     */
    omit?: cms_fieldOmit<ExtArgs> | null
    /**
     * The filter to search for the cms_field to update in case it exists.
     */
    where: cms_fieldWhereUniqueInput
    /**
     * In case the cms_field found by the `where` argument doesn't exist, create a new cms_field with this data.
     */
    create: XOR<cms_fieldCreateInput, cms_fieldUncheckedCreateInput>
    /**
     * In case the cms_field was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cms_fieldUpdateInput, cms_fieldUncheckedUpdateInput>
  }

  /**
   * cms_field delete
   */
  export type cms_fieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_field
     */
    select?: cms_fieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_field
     */
    omit?: cms_fieldOmit<ExtArgs> | null
    /**
     * Filter which cms_field to delete.
     */
    where: cms_fieldWhereUniqueInput
  }

  /**
   * cms_field deleteMany
   */
  export type cms_fieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cms_fields to delete
     */
    where?: cms_fieldWhereInput
    /**
     * Limit how many cms_fields to delete.
     */
    limit?: number
  }

  /**
   * cms_field without action
   */
  export type cms_fieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_field
     */
    select?: cms_fieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_field
     */
    omit?: cms_fieldOmit<ExtArgs> | null
  }


  /**
   * Model cms_frag
   */

  export type AggregateCms_frag = {
    _count: Cms_fragCountAggregateOutputType | null
    _avg: Cms_fragAvgAggregateOutputType | null
    _sum: Cms_fragSumAggregateOutputType | null
    _min: Cms_fragMinAggregateOutputType | null
    _max: Cms_fragMaxAggregateOutputType | null
  }

  export type Cms_fragAvgAggregateOutputType = {
    id: number | null
  }

  export type Cms_fragSumAggregateOutputType = {
    id: number | null
  }

  export type Cms_fragMinAggregateOutputType = {
    id: number | null
    name: string | null
    mark: string | null
    content: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Cms_fragMaxAggregateOutputType = {
    id: number | null
    name: string | null
    mark: string | null
    content: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Cms_fragCountAggregateOutputType = {
    id: number
    name: number
    mark: number
    content: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Cms_fragAvgAggregateInputType = {
    id?: true
  }

  export type Cms_fragSumAggregateInputType = {
    id?: true
  }

  export type Cms_fragMinAggregateInputType = {
    id?: true
    name?: true
    mark?: true
    content?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Cms_fragMaxAggregateInputType = {
    id?: true
    name?: true
    mark?: true
    content?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Cms_fragCountAggregateInputType = {
    id?: true
    name?: true
    mark?: true
    content?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Cms_fragAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cms_frag to aggregate.
     */
    where?: cms_fragWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_frags to fetch.
     */
    orderBy?: cms_fragOrderByWithRelationInput | cms_fragOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cms_fragWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_frags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_frags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cms_frags
    **/
    _count?: true | Cms_fragCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cms_fragAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cms_fragSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cms_fragMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cms_fragMaxAggregateInputType
  }

  export type GetCms_fragAggregateType<T extends Cms_fragAggregateArgs> = {
        [P in keyof T & keyof AggregateCms_frag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCms_frag[P]>
      : GetScalarType<T[P], AggregateCms_frag[P]>
  }




  export type cms_fragGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cms_fragWhereInput
    orderBy?: cms_fragOrderByWithAggregationInput | cms_fragOrderByWithAggregationInput[]
    by: Cms_fragScalarFieldEnum[] | Cms_fragScalarFieldEnum
    having?: cms_fragScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cms_fragCountAggregateInputType | true
    _avg?: Cms_fragAvgAggregateInputType
    _sum?: Cms_fragSumAggregateInputType
    _min?: Cms_fragMinAggregateInputType
    _max?: Cms_fragMaxAggregateInputType
  }

  export type Cms_fragGroupByOutputType = {
    id: number
    name: string | null
    mark: string | null
    content: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: Cms_fragCountAggregateOutputType | null
    _avg: Cms_fragAvgAggregateOutputType | null
    _sum: Cms_fragSumAggregateOutputType | null
    _min: Cms_fragMinAggregateOutputType | null
    _max: Cms_fragMaxAggregateOutputType | null
  }

  type GetCms_fragGroupByPayload<T extends cms_fragGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cms_fragGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cms_fragGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cms_fragGroupByOutputType[P]>
            : GetScalarType<T[P], Cms_fragGroupByOutputType[P]>
        }
      >
    >


  export type cms_fragSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mark?: boolean
    content?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cms_frag"]>



  export type cms_fragSelectScalar = {
    id?: boolean
    name?: boolean
    mark?: boolean
    content?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type cms_fragOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "mark" | "content" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["cms_frag"]>

  export type $cms_fragPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cms_frag"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      mark: string | null
      content: string | null
      type: string | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["cms_frag"]>
    composites: {}
  }

  type cms_fragGetPayload<S extends boolean | null | undefined | cms_fragDefaultArgs> = $Result.GetResult<Prisma.$cms_fragPayload, S>

  type cms_fragCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cms_fragFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cms_fragCountAggregateInputType | true
    }

  export interface cms_fragDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cms_frag'], meta: { name: 'cms_frag' } }
    /**
     * Find zero or one Cms_frag that matches the filter.
     * @param {cms_fragFindUniqueArgs} args - Arguments to find a Cms_frag
     * @example
     * // Get one Cms_frag
     * const cms_frag = await prisma.cms_frag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cms_fragFindUniqueArgs>(args: SelectSubset<T, cms_fragFindUniqueArgs<ExtArgs>>): Prisma__cms_fragClient<$Result.GetResult<Prisma.$cms_fragPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cms_frag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cms_fragFindUniqueOrThrowArgs} args - Arguments to find a Cms_frag
     * @example
     * // Get one Cms_frag
     * const cms_frag = await prisma.cms_frag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cms_fragFindUniqueOrThrowArgs>(args: SelectSubset<T, cms_fragFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cms_fragClient<$Result.GetResult<Prisma.$cms_fragPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cms_frag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_fragFindFirstArgs} args - Arguments to find a Cms_frag
     * @example
     * // Get one Cms_frag
     * const cms_frag = await prisma.cms_frag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cms_fragFindFirstArgs>(args?: SelectSubset<T, cms_fragFindFirstArgs<ExtArgs>>): Prisma__cms_fragClient<$Result.GetResult<Prisma.$cms_fragPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cms_frag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_fragFindFirstOrThrowArgs} args - Arguments to find a Cms_frag
     * @example
     * // Get one Cms_frag
     * const cms_frag = await prisma.cms_frag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cms_fragFindFirstOrThrowArgs>(args?: SelectSubset<T, cms_fragFindFirstOrThrowArgs<ExtArgs>>): Prisma__cms_fragClient<$Result.GetResult<Prisma.$cms_fragPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cms_frags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_fragFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cms_frags
     * const cms_frags = await prisma.cms_frag.findMany()
     * 
     * // Get first 10 Cms_frags
     * const cms_frags = await prisma.cms_frag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cms_fragWithIdOnly = await prisma.cms_frag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cms_fragFindManyArgs>(args?: SelectSubset<T, cms_fragFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cms_fragPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cms_frag.
     * @param {cms_fragCreateArgs} args - Arguments to create a Cms_frag.
     * @example
     * // Create one Cms_frag
     * const Cms_frag = await prisma.cms_frag.create({
     *   data: {
     *     // ... data to create a Cms_frag
     *   }
     * })
     * 
     */
    create<T extends cms_fragCreateArgs>(args: SelectSubset<T, cms_fragCreateArgs<ExtArgs>>): Prisma__cms_fragClient<$Result.GetResult<Prisma.$cms_fragPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cms_frags.
     * @param {cms_fragCreateManyArgs} args - Arguments to create many Cms_frags.
     * @example
     * // Create many Cms_frags
     * const cms_frag = await prisma.cms_frag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cms_fragCreateManyArgs>(args?: SelectSubset<T, cms_fragCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cms_frag.
     * @param {cms_fragDeleteArgs} args - Arguments to delete one Cms_frag.
     * @example
     * // Delete one Cms_frag
     * const Cms_frag = await prisma.cms_frag.delete({
     *   where: {
     *     // ... filter to delete one Cms_frag
     *   }
     * })
     * 
     */
    delete<T extends cms_fragDeleteArgs>(args: SelectSubset<T, cms_fragDeleteArgs<ExtArgs>>): Prisma__cms_fragClient<$Result.GetResult<Prisma.$cms_fragPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cms_frag.
     * @param {cms_fragUpdateArgs} args - Arguments to update one Cms_frag.
     * @example
     * // Update one Cms_frag
     * const cms_frag = await prisma.cms_frag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cms_fragUpdateArgs>(args: SelectSubset<T, cms_fragUpdateArgs<ExtArgs>>): Prisma__cms_fragClient<$Result.GetResult<Prisma.$cms_fragPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cms_frags.
     * @param {cms_fragDeleteManyArgs} args - Arguments to filter Cms_frags to delete.
     * @example
     * // Delete a few Cms_frags
     * const { count } = await prisma.cms_frag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cms_fragDeleteManyArgs>(args?: SelectSubset<T, cms_fragDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cms_frags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_fragUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cms_frags
     * const cms_frag = await prisma.cms_frag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cms_fragUpdateManyArgs>(args: SelectSubset<T, cms_fragUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cms_frag.
     * @param {cms_fragUpsertArgs} args - Arguments to update or create a Cms_frag.
     * @example
     * // Update or create a Cms_frag
     * const cms_frag = await prisma.cms_frag.upsert({
     *   create: {
     *     // ... data to create a Cms_frag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cms_frag we want to update
     *   }
     * })
     */
    upsert<T extends cms_fragUpsertArgs>(args: SelectSubset<T, cms_fragUpsertArgs<ExtArgs>>): Prisma__cms_fragClient<$Result.GetResult<Prisma.$cms_fragPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cms_frags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_fragCountArgs} args - Arguments to filter Cms_frags to count.
     * @example
     * // Count the number of Cms_frags
     * const count = await prisma.cms_frag.count({
     *   where: {
     *     // ... the filter for the Cms_frags we want to count
     *   }
     * })
    **/
    count<T extends cms_fragCountArgs>(
      args?: Subset<T, cms_fragCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cms_fragCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cms_frag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cms_fragAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cms_fragAggregateArgs>(args: Subset<T, Cms_fragAggregateArgs>): Prisma.PrismaPromise<GetCms_fragAggregateType<T>>

    /**
     * Group by Cms_frag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_fragGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cms_fragGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cms_fragGroupByArgs['orderBy'] }
        : { orderBy?: cms_fragGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cms_fragGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCms_fragGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cms_frag model
   */
  readonly fields: cms_fragFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cms_frag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cms_fragClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cms_frag model
   */
  interface cms_fragFieldRefs {
    readonly id: FieldRef<"cms_frag", 'Int'>
    readonly name: FieldRef<"cms_frag", 'String'>
    readonly mark: FieldRef<"cms_frag", 'String'>
    readonly content: FieldRef<"cms_frag", 'String'>
    readonly type: FieldRef<"cms_frag", 'String'>
    readonly createdAt: FieldRef<"cms_frag", 'DateTime'>
    readonly updatedAt: FieldRef<"cms_frag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cms_frag findUnique
   */
  export type cms_fragFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_frag
     */
    select?: cms_fragSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_frag
     */
    omit?: cms_fragOmit<ExtArgs> | null
    /**
     * Filter, which cms_frag to fetch.
     */
    where: cms_fragWhereUniqueInput
  }

  /**
   * cms_frag findUniqueOrThrow
   */
  export type cms_fragFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_frag
     */
    select?: cms_fragSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_frag
     */
    omit?: cms_fragOmit<ExtArgs> | null
    /**
     * Filter, which cms_frag to fetch.
     */
    where: cms_fragWhereUniqueInput
  }

  /**
   * cms_frag findFirst
   */
  export type cms_fragFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_frag
     */
    select?: cms_fragSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_frag
     */
    omit?: cms_fragOmit<ExtArgs> | null
    /**
     * Filter, which cms_frag to fetch.
     */
    where?: cms_fragWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_frags to fetch.
     */
    orderBy?: cms_fragOrderByWithRelationInput | cms_fragOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cms_frags.
     */
    cursor?: cms_fragWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_frags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_frags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cms_frags.
     */
    distinct?: Cms_fragScalarFieldEnum | Cms_fragScalarFieldEnum[]
  }

  /**
   * cms_frag findFirstOrThrow
   */
  export type cms_fragFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_frag
     */
    select?: cms_fragSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_frag
     */
    omit?: cms_fragOmit<ExtArgs> | null
    /**
     * Filter, which cms_frag to fetch.
     */
    where?: cms_fragWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_frags to fetch.
     */
    orderBy?: cms_fragOrderByWithRelationInput | cms_fragOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cms_frags.
     */
    cursor?: cms_fragWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_frags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_frags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cms_frags.
     */
    distinct?: Cms_fragScalarFieldEnum | Cms_fragScalarFieldEnum[]
  }

  /**
   * cms_frag findMany
   */
  export type cms_fragFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_frag
     */
    select?: cms_fragSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_frag
     */
    omit?: cms_fragOmit<ExtArgs> | null
    /**
     * Filter, which cms_frags to fetch.
     */
    where?: cms_fragWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_frags to fetch.
     */
    orderBy?: cms_fragOrderByWithRelationInput | cms_fragOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cms_frags.
     */
    cursor?: cms_fragWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_frags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_frags.
     */
    skip?: number
    distinct?: Cms_fragScalarFieldEnum | Cms_fragScalarFieldEnum[]
  }

  /**
   * cms_frag create
   */
  export type cms_fragCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_frag
     */
    select?: cms_fragSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_frag
     */
    omit?: cms_fragOmit<ExtArgs> | null
    /**
     * The data needed to create a cms_frag.
     */
    data?: XOR<cms_fragCreateInput, cms_fragUncheckedCreateInput>
  }

  /**
   * cms_frag createMany
   */
  export type cms_fragCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cms_frags.
     */
    data: cms_fragCreateManyInput | cms_fragCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cms_frag update
   */
  export type cms_fragUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_frag
     */
    select?: cms_fragSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_frag
     */
    omit?: cms_fragOmit<ExtArgs> | null
    /**
     * The data needed to update a cms_frag.
     */
    data: XOR<cms_fragUpdateInput, cms_fragUncheckedUpdateInput>
    /**
     * Choose, which cms_frag to update.
     */
    where: cms_fragWhereUniqueInput
  }

  /**
   * cms_frag updateMany
   */
  export type cms_fragUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cms_frags.
     */
    data: XOR<cms_fragUpdateManyMutationInput, cms_fragUncheckedUpdateManyInput>
    /**
     * Filter which cms_frags to update
     */
    where?: cms_fragWhereInput
    /**
     * Limit how many cms_frags to update.
     */
    limit?: number
  }

  /**
   * cms_frag upsert
   */
  export type cms_fragUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_frag
     */
    select?: cms_fragSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_frag
     */
    omit?: cms_fragOmit<ExtArgs> | null
    /**
     * The filter to search for the cms_frag to update in case it exists.
     */
    where: cms_fragWhereUniqueInput
    /**
     * In case the cms_frag found by the `where` argument doesn't exist, create a new cms_frag with this data.
     */
    create: XOR<cms_fragCreateInput, cms_fragUncheckedCreateInput>
    /**
     * In case the cms_frag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cms_fragUpdateInput, cms_fragUncheckedUpdateInput>
  }

  /**
   * cms_frag delete
   */
  export type cms_fragDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_frag
     */
    select?: cms_fragSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_frag
     */
    omit?: cms_fragOmit<ExtArgs> | null
    /**
     * Filter which cms_frag to delete.
     */
    where: cms_fragWhereUniqueInput
  }

  /**
   * cms_frag deleteMany
   */
  export type cms_fragDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cms_frags to delete
     */
    where?: cms_fragWhereInput
    /**
     * Limit how many cms_frags to delete.
     */
    limit?: number
  }

  /**
   * cms_frag without action
   */
  export type cms_fragDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_frag
     */
    select?: cms_fragSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_frag
     */
    omit?: cms_fragOmit<ExtArgs> | null
  }


  /**
   * Model cms_friendlink
   */

  export type AggregateCms_friendlink = {
    _count: Cms_friendlinkCountAggregateOutputType | null
    _avg: Cms_friendlinkAvgAggregateOutputType | null
    _sum: Cms_friendlinkSumAggregateOutputType | null
    _min: Cms_friendlinkMinAggregateOutputType | null
    _max: Cms_friendlinkMaxAggregateOutputType | null
  }

  export type Cms_friendlinkAvgAggregateOutputType = {
    id: number | null
    orderBy: number | null
  }

  export type Cms_friendlinkSumAggregateOutputType = {
    id: number | null
    orderBy: number | null
  }

  export type Cms_friendlinkMinAggregateOutputType = {
    id: number | null
    title: string | null
    link: string | null
    orderBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Cms_friendlinkMaxAggregateOutputType = {
    id: number | null
    title: string | null
    link: string | null
    orderBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Cms_friendlinkCountAggregateOutputType = {
    id: number
    title: number
    link: number
    orderBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Cms_friendlinkAvgAggregateInputType = {
    id?: true
    orderBy?: true
  }

  export type Cms_friendlinkSumAggregateInputType = {
    id?: true
    orderBy?: true
  }

  export type Cms_friendlinkMinAggregateInputType = {
    id?: true
    title?: true
    link?: true
    orderBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Cms_friendlinkMaxAggregateInputType = {
    id?: true
    title?: true
    link?: true
    orderBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Cms_friendlinkCountAggregateInputType = {
    id?: true
    title?: true
    link?: true
    orderBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Cms_friendlinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cms_friendlink to aggregate.
     */
    where?: cms_friendlinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_friendlinks to fetch.
     */
    orderBy?: cms_friendlinkOrderByWithRelationInput | cms_friendlinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cms_friendlinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_friendlinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_friendlinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cms_friendlinks
    **/
    _count?: true | Cms_friendlinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cms_friendlinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cms_friendlinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cms_friendlinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cms_friendlinkMaxAggregateInputType
  }

  export type GetCms_friendlinkAggregateType<T extends Cms_friendlinkAggregateArgs> = {
        [P in keyof T & keyof AggregateCms_friendlink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCms_friendlink[P]>
      : GetScalarType<T[P], AggregateCms_friendlink[P]>
  }




  export type cms_friendlinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cms_friendlinkWhereInput
    orderBy?: cms_friendlinkOrderByWithAggregationInput | cms_friendlinkOrderByWithAggregationInput[]
    by: Cms_friendlinkScalarFieldEnum[] | Cms_friendlinkScalarFieldEnum
    having?: cms_friendlinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cms_friendlinkCountAggregateInputType | true
    _avg?: Cms_friendlinkAvgAggregateInputType
    _sum?: Cms_friendlinkSumAggregateInputType
    _min?: Cms_friendlinkMinAggregateInputType
    _max?: Cms_friendlinkMaxAggregateInputType
  }

  export type Cms_friendlinkGroupByOutputType = {
    id: number
    title: string | null
    link: string | null
    orderBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: Cms_friendlinkCountAggregateOutputType | null
    _avg: Cms_friendlinkAvgAggregateOutputType | null
    _sum: Cms_friendlinkSumAggregateOutputType | null
    _min: Cms_friendlinkMinAggregateOutputType | null
    _max: Cms_friendlinkMaxAggregateOutputType | null
  }

  type GetCms_friendlinkGroupByPayload<T extends cms_friendlinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cms_friendlinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cms_friendlinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cms_friendlinkGroupByOutputType[P]>
            : GetScalarType<T[P], Cms_friendlinkGroupByOutputType[P]>
        }
      >
    >


  export type cms_friendlinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    link?: boolean
    orderBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cms_friendlink"]>



  export type cms_friendlinkSelectScalar = {
    id?: boolean
    title?: boolean
    link?: boolean
    orderBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type cms_friendlinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "link" | "orderBy" | "createdAt" | "updatedAt", ExtArgs["result"]["cms_friendlink"]>

  export type $cms_friendlinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cms_friendlink"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      link: string | null
      orderBy: number | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["cms_friendlink"]>
    composites: {}
  }

  type cms_friendlinkGetPayload<S extends boolean | null | undefined | cms_friendlinkDefaultArgs> = $Result.GetResult<Prisma.$cms_friendlinkPayload, S>

  type cms_friendlinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cms_friendlinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cms_friendlinkCountAggregateInputType | true
    }

  export interface cms_friendlinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cms_friendlink'], meta: { name: 'cms_friendlink' } }
    /**
     * Find zero or one Cms_friendlink that matches the filter.
     * @param {cms_friendlinkFindUniqueArgs} args - Arguments to find a Cms_friendlink
     * @example
     * // Get one Cms_friendlink
     * const cms_friendlink = await prisma.cms_friendlink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cms_friendlinkFindUniqueArgs>(args: SelectSubset<T, cms_friendlinkFindUniqueArgs<ExtArgs>>): Prisma__cms_friendlinkClient<$Result.GetResult<Prisma.$cms_friendlinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cms_friendlink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cms_friendlinkFindUniqueOrThrowArgs} args - Arguments to find a Cms_friendlink
     * @example
     * // Get one Cms_friendlink
     * const cms_friendlink = await prisma.cms_friendlink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cms_friendlinkFindUniqueOrThrowArgs>(args: SelectSubset<T, cms_friendlinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cms_friendlinkClient<$Result.GetResult<Prisma.$cms_friendlinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cms_friendlink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_friendlinkFindFirstArgs} args - Arguments to find a Cms_friendlink
     * @example
     * // Get one Cms_friendlink
     * const cms_friendlink = await prisma.cms_friendlink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cms_friendlinkFindFirstArgs>(args?: SelectSubset<T, cms_friendlinkFindFirstArgs<ExtArgs>>): Prisma__cms_friendlinkClient<$Result.GetResult<Prisma.$cms_friendlinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cms_friendlink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_friendlinkFindFirstOrThrowArgs} args - Arguments to find a Cms_friendlink
     * @example
     * // Get one Cms_friendlink
     * const cms_friendlink = await prisma.cms_friendlink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cms_friendlinkFindFirstOrThrowArgs>(args?: SelectSubset<T, cms_friendlinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__cms_friendlinkClient<$Result.GetResult<Prisma.$cms_friendlinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cms_friendlinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_friendlinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cms_friendlinks
     * const cms_friendlinks = await prisma.cms_friendlink.findMany()
     * 
     * // Get first 10 Cms_friendlinks
     * const cms_friendlinks = await prisma.cms_friendlink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cms_friendlinkWithIdOnly = await prisma.cms_friendlink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cms_friendlinkFindManyArgs>(args?: SelectSubset<T, cms_friendlinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cms_friendlinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cms_friendlink.
     * @param {cms_friendlinkCreateArgs} args - Arguments to create a Cms_friendlink.
     * @example
     * // Create one Cms_friendlink
     * const Cms_friendlink = await prisma.cms_friendlink.create({
     *   data: {
     *     // ... data to create a Cms_friendlink
     *   }
     * })
     * 
     */
    create<T extends cms_friendlinkCreateArgs>(args: SelectSubset<T, cms_friendlinkCreateArgs<ExtArgs>>): Prisma__cms_friendlinkClient<$Result.GetResult<Prisma.$cms_friendlinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cms_friendlinks.
     * @param {cms_friendlinkCreateManyArgs} args - Arguments to create many Cms_friendlinks.
     * @example
     * // Create many Cms_friendlinks
     * const cms_friendlink = await prisma.cms_friendlink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cms_friendlinkCreateManyArgs>(args?: SelectSubset<T, cms_friendlinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cms_friendlink.
     * @param {cms_friendlinkDeleteArgs} args - Arguments to delete one Cms_friendlink.
     * @example
     * // Delete one Cms_friendlink
     * const Cms_friendlink = await prisma.cms_friendlink.delete({
     *   where: {
     *     // ... filter to delete one Cms_friendlink
     *   }
     * })
     * 
     */
    delete<T extends cms_friendlinkDeleteArgs>(args: SelectSubset<T, cms_friendlinkDeleteArgs<ExtArgs>>): Prisma__cms_friendlinkClient<$Result.GetResult<Prisma.$cms_friendlinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cms_friendlink.
     * @param {cms_friendlinkUpdateArgs} args - Arguments to update one Cms_friendlink.
     * @example
     * // Update one Cms_friendlink
     * const cms_friendlink = await prisma.cms_friendlink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cms_friendlinkUpdateArgs>(args: SelectSubset<T, cms_friendlinkUpdateArgs<ExtArgs>>): Prisma__cms_friendlinkClient<$Result.GetResult<Prisma.$cms_friendlinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cms_friendlinks.
     * @param {cms_friendlinkDeleteManyArgs} args - Arguments to filter Cms_friendlinks to delete.
     * @example
     * // Delete a few Cms_friendlinks
     * const { count } = await prisma.cms_friendlink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cms_friendlinkDeleteManyArgs>(args?: SelectSubset<T, cms_friendlinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cms_friendlinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_friendlinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cms_friendlinks
     * const cms_friendlink = await prisma.cms_friendlink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cms_friendlinkUpdateManyArgs>(args: SelectSubset<T, cms_friendlinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cms_friendlink.
     * @param {cms_friendlinkUpsertArgs} args - Arguments to update or create a Cms_friendlink.
     * @example
     * // Update or create a Cms_friendlink
     * const cms_friendlink = await prisma.cms_friendlink.upsert({
     *   create: {
     *     // ... data to create a Cms_friendlink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cms_friendlink we want to update
     *   }
     * })
     */
    upsert<T extends cms_friendlinkUpsertArgs>(args: SelectSubset<T, cms_friendlinkUpsertArgs<ExtArgs>>): Prisma__cms_friendlinkClient<$Result.GetResult<Prisma.$cms_friendlinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cms_friendlinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_friendlinkCountArgs} args - Arguments to filter Cms_friendlinks to count.
     * @example
     * // Count the number of Cms_friendlinks
     * const count = await prisma.cms_friendlink.count({
     *   where: {
     *     // ... the filter for the Cms_friendlinks we want to count
     *   }
     * })
    **/
    count<T extends cms_friendlinkCountArgs>(
      args?: Subset<T, cms_friendlinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cms_friendlinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cms_friendlink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cms_friendlinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cms_friendlinkAggregateArgs>(args: Subset<T, Cms_friendlinkAggregateArgs>): Prisma.PrismaPromise<GetCms_friendlinkAggregateType<T>>

    /**
     * Group by Cms_friendlink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_friendlinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cms_friendlinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cms_friendlinkGroupByArgs['orderBy'] }
        : { orderBy?: cms_friendlinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cms_friendlinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCms_friendlinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cms_friendlink model
   */
  readonly fields: cms_friendlinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cms_friendlink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cms_friendlinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cms_friendlink model
   */
  interface cms_friendlinkFieldRefs {
    readonly id: FieldRef<"cms_friendlink", 'Int'>
    readonly title: FieldRef<"cms_friendlink", 'String'>
    readonly link: FieldRef<"cms_friendlink", 'String'>
    readonly orderBy: FieldRef<"cms_friendlink", 'Int'>
    readonly createdAt: FieldRef<"cms_friendlink", 'DateTime'>
    readonly updatedAt: FieldRef<"cms_friendlink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cms_friendlink findUnique
   */
  export type cms_friendlinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_friendlink
     */
    select?: cms_friendlinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_friendlink
     */
    omit?: cms_friendlinkOmit<ExtArgs> | null
    /**
     * Filter, which cms_friendlink to fetch.
     */
    where: cms_friendlinkWhereUniqueInput
  }

  /**
   * cms_friendlink findUniqueOrThrow
   */
  export type cms_friendlinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_friendlink
     */
    select?: cms_friendlinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_friendlink
     */
    omit?: cms_friendlinkOmit<ExtArgs> | null
    /**
     * Filter, which cms_friendlink to fetch.
     */
    where: cms_friendlinkWhereUniqueInput
  }

  /**
   * cms_friendlink findFirst
   */
  export type cms_friendlinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_friendlink
     */
    select?: cms_friendlinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_friendlink
     */
    omit?: cms_friendlinkOmit<ExtArgs> | null
    /**
     * Filter, which cms_friendlink to fetch.
     */
    where?: cms_friendlinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_friendlinks to fetch.
     */
    orderBy?: cms_friendlinkOrderByWithRelationInput | cms_friendlinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cms_friendlinks.
     */
    cursor?: cms_friendlinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_friendlinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_friendlinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cms_friendlinks.
     */
    distinct?: Cms_friendlinkScalarFieldEnum | Cms_friendlinkScalarFieldEnum[]
  }

  /**
   * cms_friendlink findFirstOrThrow
   */
  export type cms_friendlinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_friendlink
     */
    select?: cms_friendlinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_friendlink
     */
    omit?: cms_friendlinkOmit<ExtArgs> | null
    /**
     * Filter, which cms_friendlink to fetch.
     */
    where?: cms_friendlinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_friendlinks to fetch.
     */
    orderBy?: cms_friendlinkOrderByWithRelationInput | cms_friendlinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cms_friendlinks.
     */
    cursor?: cms_friendlinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_friendlinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_friendlinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cms_friendlinks.
     */
    distinct?: Cms_friendlinkScalarFieldEnum | Cms_friendlinkScalarFieldEnum[]
  }

  /**
   * cms_friendlink findMany
   */
  export type cms_friendlinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_friendlink
     */
    select?: cms_friendlinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_friendlink
     */
    omit?: cms_friendlinkOmit<ExtArgs> | null
    /**
     * Filter, which cms_friendlinks to fetch.
     */
    where?: cms_friendlinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_friendlinks to fetch.
     */
    orderBy?: cms_friendlinkOrderByWithRelationInput | cms_friendlinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cms_friendlinks.
     */
    cursor?: cms_friendlinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_friendlinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_friendlinks.
     */
    skip?: number
    distinct?: Cms_friendlinkScalarFieldEnum | Cms_friendlinkScalarFieldEnum[]
  }

  /**
   * cms_friendlink create
   */
  export type cms_friendlinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_friendlink
     */
    select?: cms_friendlinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_friendlink
     */
    omit?: cms_friendlinkOmit<ExtArgs> | null
    /**
     * The data needed to create a cms_friendlink.
     */
    data?: XOR<cms_friendlinkCreateInput, cms_friendlinkUncheckedCreateInput>
  }

  /**
   * cms_friendlink createMany
   */
  export type cms_friendlinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cms_friendlinks.
     */
    data: cms_friendlinkCreateManyInput | cms_friendlinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cms_friendlink update
   */
  export type cms_friendlinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_friendlink
     */
    select?: cms_friendlinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_friendlink
     */
    omit?: cms_friendlinkOmit<ExtArgs> | null
    /**
     * The data needed to update a cms_friendlink.
     */
    data: XOR<cms_friendlinkUpdateInput, cms_friendlinkUncheckedUpdateInput>
    /**
     * Choose, which cms_friendlink to update.
     */
    where: cms_friendlinkWhereUniqueInput
  }

  /**
   * cms_friendlink updateMany
   */
  export type cms_friendlinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cms_friendlinks.
     */
    data: XOR<cms_friendlinkUpdateManyMutationInput, cms_friendlinkUncheckedUpdateManyInput>
    /**
     * Filter which cms_friendlinks to update
     */
    where?: cms_friendlinkWhereInput
    /**
     * Limit how many cms_friendlinks to update.
     */
    limit?: number
  }

  /**
   * cms_friendlink upsert
   */
  export type cms_friendlinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_friendlink
     */
    select?: cms_friendlinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_friendlink
     */
    omit?: cms_friendlinkOmit<ExtArgs> | null
    /**
     * The filter to search for the cms_friendlink to update in case it exists.
     */
    where: cms_friendlinkWhereUniqueInput
    /**
     * In case the cms_friendlink found by the `where` argument doesn't exist, create a new cms_friendlink with this data.
     */
    create: XOR<cms_friendlinkCreateInput, cms_friendlinkUncheckedCreateInput>
    /**
     * In case the cms_friendlink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cms_friendlinkUpdateInput, cms_friendlinkUncheckedUpdateInput>
  }

  /**
   * cms_friendlink delete
   */
  export type cms_friendlinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_friendlink
     */
    select?: cms_friendlinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_friendlink
     */
    omit?: cms_friendlinkOmit<ExtArgs> | null
    /**
     * Filter which cms_friendlink to delete.
     */
    where: cms_friendlinkWhereUniqueInput
  }

  /**
   * cms_friendlink deleteMany
   */
  export type cms_friendlinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cms_friendlinks to delete
     */
    where?: cms_friendlinkWhereInput
    /**
     * Limit how many cms_friendlinks to delete.
     */
    limit?: number
  }

  /**
   * cms_friendlink without action
   */
  export type cms_friendlinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_friendlink
     */
    select?: cms_friendlinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_friendlink
     */
    omit?: cms_friendlinkOmit<ExtArgs> | null
  }


  /**
   * Model cms_message
   */

  export type AggregateCms_message = {
    _count: Cms_messageCountAggregateOutputType | null
    _avg: Cms_messageAvgAggregateOutputType | null
    _sum: Cms_messageSumAggregateOutputType | null
    _min: Cms_messageMinAggregateOutputType | null
    _max: Cms_messageMaxAggregateOutputType | null
  }

  export type Cms_messageAvgAggregateOutputType = {
    id: number | null
    type: number | null
  }

  export type Cms_messageSumAggregateOutputType = {
    id: number | null
    type: number | null
  }

  export type Cms_messageMinAggregateOutputType = {
    id: number | null
    type: number | null
    title: string | null
    name: string | null
    tel: string | null
    wechat: string | null
    company: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Cms_messageMaxAggregateOutputType = {
    id: number | null
    type: number | null
    title: string | null
    name: string | null
    tel: string | null
    wechat: string | null
    company: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Cms_messageCountAggregateOutputType = {
    id: number
    type: number
    title: number
    name: number
    tel: number
    wechat: number
    company: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Cms_messageAvgAggregateInputType = {
    id?: true
    type?: true
  }

  export type Cms_messageSumAggregateInputType = {
    id?: true
    type?: true
  }

  export type Cms_messageMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    name?: true
    tel?: true
    wechat?: true
    company?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Cms_messageMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    name?: true
    tel?: true
    wechat?: true
    company?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Cms_messageCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    name?: true
    tel?: true
    wechat?: true
    company?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Cms_messageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cms_message to aggregate.
     */
    where?: cms_messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_messages to fetch.
     */
    orderBy?: cms_messageOrderByWithRelationInput | cms_messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cms_messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cms_messages
    **/
    _count?: true | Cms_messageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cms_messageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cms_messageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cms_messageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cms_messageMaxAggregateInputType
  }

  export type GetCms_messageAggregateType<T extends Cms_messageAggregateArgs> = {
        [P in keyof T & keyof AggregateCms_message]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCms_message[P]>
      : GetScalarType<T[P], AggregateCms_message[P]>
  }




  export type cms_messageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cms_messageWhereInput
    orderBy?: cms_messageOrderByWithAggregationInput | cms_messageOrderByWithAggregationInput[]
    by: Cms_messageScalarFieldEnum[] | Cms_messageScalarFieldEnum
    having?: cms_messageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cms_messageCountAggregateInputType | true
    _avg?: Cms_messageAvgAggregateInputType
    _sum?: Cms_messageSumAggregateInputType
    _min?: Cms_messageMinAggregateInputType
    _max?: Cms_messageMaxAggregateInputType
  }

  export type Cms_messageGroupByOutputType = {
    id: number
    type: number | null
    title: string | null
    name: string | null
    tel: string | null
    wechat: string | null
    company: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: Cms_messageCountAggregateOutputType | null
    _avg: Cms_messageAvgAggregateOutputType | null
    _sum: Cms_messageSumAggregateOutputType | null
    _min: Cms_messageMinAggregateOutputType | null
    _max: Cms_messageMaxAggregateOutputType | null
  }

  type GetCms_messageGroupByPayload<T extends cms_messageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cms_messageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cms_messageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cms_messageGroupByOutputType[P]>
            : GetScalarType<T[P], Cms_messageGroupByOutputType[P]>
        }
      >
    >


  export type cms_messageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    name?: boolean
    tel?: boolean
    wechat?: boolean
    company?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cms_message"]>



  export type cms_messageSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    name?: boolean
    tel?: boolean
    wechat?: boolean
    company?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type cms_messageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "title" | "name" | "tel" | "wechat" | "company" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["cms_message"]>

  export type $cms_messagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cms_message"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: number | null
      title: string | null
      name: string | null
      tel: string | null
      wechat: string | null
      company: string | null
      content: string | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["cms_message"]>
    composites: {}
  }

  type cms_messageGetPayload<S extends boolean | null | undefined | cms_messageDefaultArgs> = $Result.GetResult<Prisma.$cms_messagePayload, S>

  type cms_messageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cms_messageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cms_messageCountAggregateInputType | true
    }

  export interface cms_messageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cms_message'], meta: { name: 'cms_message' } }
    /**
     * Find zero or one Cms_message that matches the filter.
     * @param {cms_messageFindUniqueArgs} args - Arguments to find a Cms_message
     * @example
     * // Get one Cms_message
     * const cms_message = await prisma.cms_message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cms_messageFindUniqueArgs>(args: SelectSubset<T, cms_messageFindUniqueArgs<ExtArgs>>): Prisma__cms_messageClient<$Result.GetResult<Prisma.$cms_messagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cms_message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cms_messageFindUniqueOrThrowArgs} args - Arguments to find a Cms_message
     * @example
     * // Get one Cms_message
     * const cms_message = await prisma.cms_message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cms_messageFindUniqueOrThrowArgs>(args: SelectSubset<T, cms_messageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cms_messageClient<$Result.GetResult<Prisma.$cms_messagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cms_message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_messageFindFirstArgs} args - Arguments to find a Cms_message
     * @example
     * // Get one Cms_message
     * const cms_message = await prisma.cms_message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cms_messageFindFirstArgs>(args?: SelectSubset<T, cms_messageFindFirstArgs<ExtArgs>>): Prisma__cms_messageClient<$Result.GetResult<Prisma.$cms_messagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cms_message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_messageFindFirstOrThrowArgs} args - Arguments to find a Cms_message
     * @example
     * // Get one Cms_message
     * const cms_message = await prisma.cms_message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cms_messageFindFirstOrThrowArgs>(args?: SelectSubset<T, cms_messageFindFirstOrThrowArgs<ExtArgs>>): Prisma__cms_messageClient<$Result.GetResult<Prisma.$cms_messagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cms_messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_messageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cms_messages
     * const cms_messages = await prisma.cms_message.findMany()
     * 
     * // Get first 10 Cms_messages
     * const cms_messages = await prisma.cms_message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cms_messageWithIdOnly = await prisma.cms_message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cms_messageFindManyArgs>(args?: SelectSubset<T, cms_messageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cms_messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cms_message.
     * @param {cms_messageCreateArgs} args - Arguments to create a Cms_message.
     * @example
     * // Create one Cms_message
     * const Cms_message = await prisma.cms_message.create({
     *   data: {
     *     // ... data to create a Cms_message
     *   }
     * })
     * 
     */
    create<T extends cms_messageCreateArgs>(args: SelectSubset<T, cms_messageCreateArgs<ExtArgs>>): Prisma__cms_messageClient<$Result.GetResult<Prisma.$cms_messagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cms_messages.
     * @param {cms_messageCreateManyArgs} args - Arguments to create many Cms_messages.
     * @example
     * // Create many Cms_messages
     * const cms_message = await prisma.cms_message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cms_messageCreateManyArgs>(args?: SelectSubset<T, cms_messageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cms_message.
     * @param {cms_messageDeleteArgs} args - Arguments to delete one Cms_message.
     * @example
     * // Delete one Cms_message
     * const Cms_message = await prisma.cms_message.delete({
     *   where: {
     *     // ... filter to delete one Cms_message
     *   }
     * })
     * 
     */
    delete<T extends cms_messageDeleteArgs>(args: SelectSubset<T, cms_messageDeleteArgs<ExtArgs>>): Prisma__cms_messageClient<$Result.GetResult<Prisma.$cms_messagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cms_message.
     * @param {cms_messageUpdateArgs} args - Arguments to update one Cms_message.
     * @example
     * // Update one Cms_message
     * const cms_message = await prisma.cms_message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cms_messageUpdateArgs>(args: SelectSubset<T, cms_messageUpdateArgs<ExtArgs>>): Prisma__cms_messageClient<$Result.GetResult<Prisma.$cms_messagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cms_messages.
     * @param {cms_messageDeleteManyArgs} args - Arguments to filter Cms_messages to delete.
     * @example
     * // Delete a few Cms_messages
     * const { count } = await prisma.cms_message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cms_messageDeleteManyArgs>(args?: SelectSubset<T, cms_messageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cms_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_messageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cms_messages
     * const cms_message = await prisma.cms_message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cms_messageUpdateManyArgs>(args: SelectSubset<T, cms_messageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cms_message.
     * @param {cms_messageUpsertArgs} args - Arguments to update or create a Cms_message.
     * @example
     * // Update or create a Cms_message
     * const cms_message = await prisma.cms_message.upsert({
     *   create: {
     *     // ... data to create a Cms_message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cms_message we want to update
     *   }
     * })
     */
    upsert<T extends cms_messageUpsertArgs>(args: SelectSubset<T, cms_messageUpsertArgs<ExtArgs>>): Prisma__cms_messageClient<$Result.GetResult<Prisma.$cms_messagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cms_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_messageCountArgs} args - Arguments to filter Cms_messages to count.
     * @example
     * // Count the number of Cms_messages
     * const count = await prisma.cms_message.count({
     *   where: {
     *     // ... the filter for the Cms_messages we want to count
     *   }
     * })
    **/
    count<T extends cms_messageCountArgs>(
      args?: Subset<T, cms_messageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cms_messageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cms_message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cms_messageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cms_messageAggregateArgs>(args: Subset<T, Cms_messageAggregateArgs>): Prisma.PrismaPromise<GetCms_messageAggregateType<T>>

    /**
     * Group by Cms_message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_messageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cms_messageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cms_messageGroupByArgs['orderBy'] }
        : { orderBy?: cms_messageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cms_messageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCms_messageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cms_message model
   */
  readonly fields: cms_messageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cms_message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cms_messageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cms_message model
   */
  interface cms_messageFieldRefs {
    readonly id: FieldRef<"cms_message", 'Int'>
    readonly type: FieldRef<"cms_message", 'Int'>
    readonly title: FieldRef<"cms_message", 'String'>
    readonly name: FieldRef<"cms_message", 'String'>
    readonly tel: FieldRef<"cms_message", 'String'>
    readonly wechat: FieldRef<"cms_message", 'String'>
    readonly company: FieldRef<"cms_message", 'String'>
    readonly content: FieldRef<"cms_message", 'String'>
    readonly createdAt: FieldRef<"cms_message", 'DateTime'>
    readonly updatedAt: FieldRef<"cms_message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cms_message findUnique
   */
  export type cms_messageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_message
     */
    select?: cms_messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_message
     */
    omit?: cms_messageOmit<ExtArgs> | null
    /**
     * Filter, which cms_message to fetch.
     */
    where: cms_messageWhereUniqueInput
  }

  /**
   * cms_message findUniqueOrThrow
   */
  export type cms_messageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_message
     */
    select?: cms_messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_message
     */
    omit?: cms_messageOmit<ExtArgs> | null
    /**
     * Filter, which cms_message to fetch.
     */
    where: cms_messageWhereUniqueInput
  }

  /**
   * cms_message findFirst
   */
  export type cms_messageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_message
     */
    select?: cms_messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_message
     */
    omit?: cms_messageOmit<ExtArgs> | null
    /**
     * Filter, which cms_message to fetch.
     */
    where?: cms_messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_messages to fetch.
     */
    orderBy?: cms_messageOrderByWithRelationInput | cms_messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cms_messages.
     */
    cursor?: cms_messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cms_messages.
     */
    distinct?: Cms_messageScalarFieldEnum | Cms_messageScalarFieldEnum[]
  }

  /**
   * cms_message findFirstOrThrow
   */
  export type cms_messageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_message
     */
    select?: cms_messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_message
     */
    omit?: cms_messageOmit<ExtArgs> | null
    /**
     * Filter, which cms_message to fetch.
     */
    where?: cms_messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_messages to fetch.
     */
    orderBy?: cms_messageOrderByWithRelationInput | cms_messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cms_messages.
     */
    cursor?: cms_messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cms_messages.
     */
    distinct?: Cms_messageScalarFieldEnum | Cms_messageScalarFieldEnum[]
  }

  /**
   * cms_message findMany
   */
  export type cms_messageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_message
     */
    select?: cms_messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_message
     */
    omit?: cms_messageOmit<ExtArgs> | null
    /**
     * Filter, which cms_messages to fetch.
     */
    where?: cms_messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_messages to fetch.
     */
    orderBy?: cms_messageOrderByWithRelationInput | cms_messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cms_messages.
     */
    cursor?: cms_messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_messages.
     */
    skip?: number
    distinct?: Cms_messageScalarFieldEnum | Cms_messageScalarFieldEnum[]
  }

  /**
   * cms_message create
   */
  export type cms_messageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_message
     */
    select?: cms_messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_message
     */
    omit?: cms_messageOmit<ExtArgs> | null
    /**
     * The data needed to create a cms_message.
     */
    data?: XOR<cms_messageCreateInput, cms_messageUncheckedCreateInput>
  }

  /**
   * cms_message createMany
   */
  export type cms_messageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cms_messages.
     */
    data: cms_messageCreateManyInput | cms_messageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cms_message update
   */
  export type cms_messageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_message
     */
    select?: cms_messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_message
     */
    omit?: cms_messageOmit<ExtArgs> | null
    /**
     * The data needed to update a cms_message.
     */
    data: XOR<cms_messageUpdateInput, cms_messageUncheckedUpdateInput>
    /**
     * Choose, which cms_message to update.
     */
    where: cms_messageWhereUniqueInput
  }

  /**
   * cms_message updateMany
   */
  export type cms_messageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cms_messages.
     */
    data: XOR<cms_messageUpdateManyMutationInput, cms_messageUncheckedUpdateManyInput>
    /**
     * Filter which cms_messages to update
     */
    where?: cms_messageWhereInput
    /**
     * Limit how many cms_messages to update.
     */
    limit?: number
  }

  /**
   * cms_message upsert
   */
  export type cms_messageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_message
     */
    select?: cms_messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_message
     */
    omit?: cms_messageOmit<ExtArgs> | null
    /**
     * The filter to search for the cms_message to update in case it exists.
     */
    where: cms_messageWhereUniqueInput
    /**
     * In case the cms_message found by the `where` argument doesn't exist, create a new cms_message with this data.
     */
    create: XOR<cms_messageCreateInput, cms_messageUncheckedCreateInput>
    /**
     * In case the cms_message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cms_messageUpdateInput, cms_messageUncheckedUpdateInput>
  }

  /**
   * cms_message delete
   */
  export type cms_messageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_message
     */
    select?: cms_messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_message
     */
    omit?: cms_messageOmit<ExtArgs> | null
    /**
     * Filter which cms_message to delete.
     */
    where: cms_messageWhereUniqueInput
  }

  /**
   * cms_message deleteMany
   */
  export type cms_messageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cms_messages to delete
     */
    where?: cms_messageWhereInput
    /**
     * Limit how many cms_messages to delete.
     */
    limit?: number
  }

  /**
   * cms_message without action
   */
  export type cms_messageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_message
     */
    select?: cms_messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_message
     */
    omit?: cms_messageOmit<ExtArgs> | null
  }


  /**
   * Model cms_model
   */

  export type AggregateCms_model = {
    _count: Cms_modelCountAggregateOutputType | null
    _avg: Cms_modelAvgAggregateOutputType | null
    _sum: Cms_modelSumAggregateOutputType | null
    _min: Cms_modelMinAggregateOutputType | null
    _max: Cms_modelMaxAggregateOutputType | null
  }

  export type Cms_modelAvgAggregateOutputType = {
    id: number | null
  }

  export type Cms_modelSumAggregateOutputType = {
    id: number | null
  }

  export type Cms_modelMinAggregateOutputType = {
    id: number | null
    model: string | null
    tableName: string | null
    status: string | null
    remark: string | null
  }

  export type Cms_modelMaxAggregateOutputType = {
    id: number | null
    model: string | null
    tableName: string | null
    status: string | null
    remark: string | null
  }

  export type Cms_modelCountAggregateOutputType = {
    id: number
    model: number
    tableName: number
    status: number
    remark: number
    _all: number
  }


  export type Cms_modelAvgAggregateInputType = {
    id?: true
  }

  export type Cms_modelSumAggregateInputType = {
    id?: true
  }

  export type Cms_modelMinAggregateInputType = {
    id?: true
    model?: true
    tableName?: true
    status?: true
    remark?: true
  }

  export type Cms_modelMaxAggregateInputType = {
    id?: true
    model?: true
    tableName?: true
    status?: true
    remark?: true
  }

  export type Cms_modelCountAggregateInputType = {
    id?: true
    model?: true
    tableName?: true
    status?: true
    remark?: true
    _all?: true
  }

  export type Cms_modelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cms_model to aggregate.
     */
    where?: cms_modelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_models to fetch.
     */
    orderBy?: cms_modelOrderByWithRelationInput | cms_modelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cms_modelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cms_models
    **/
    _count?: true | Cms_modelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cms_modelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cms_modelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cms_modelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cms_modelMaxAggregateInputType
  }

  export type GetCms_modelAggregateType<T extends Cms_modelAggregateArgs> = {
        [P in keyof T & keyof AggregateCms_model]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCms_model[P]>
      : GetScalarType<T[P], AggregateCms_model[P]>
  }




  export type cms_modelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cms_modelWhereInput
    orderBy?: cms_modelOrderByWithAggregationInput | cms_modelOrderByWithAggregationInput[]
    by: Cms_modelScalarFieldEnum[] | Cms_modelScalarFieldEnum
    having?: cms_modelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cms_modelCountAggregateInputType | true
    _avg?: Cms_modelAvgAggregateInputType
    _sum?: Cms_modelSumAggregateInputType
    _min?: Cms_modelMinAggregateInputType
    _max?: Cms_modelMaxAggregateInputType
  }

  export type Cms_modelGroupByOutputType = {
    id: number
    model: string | null
    tableName: string | null
    status: string | null
    remark: string | null
    _count: Cms_modelCountAggregateOutputType | null
    _avg: Cms_modelAvgAggregateOutputType | null
    _sum: Cms_modelSumAggregateOutputType | null
    _min: Cms_modelMinAggregateOutputType | null
    _max: Cms_modelMaxAggregateOutputType | null
  }

  type GetCms_modelGroupByPayload<T extends cms_modelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cms_modelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cms_modelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cms_modelGroupByOutputType[P]>
            : GetScalarType<T[P], Cms_modelGroupByOutputType[P]>
        }
      >
    >


  export type cms_modelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    tableName?: boolean
    status?: boolean
    remark?: boolean
  }, ExtArgs["result"]["cms_model"]>



  export type cms_modelSelectScalar = {
    id?: boolean
    model?: boolean
    tableName?: boolean
    status?: boolean
    remark?: boolean
  }

  export type cms_modelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "model" | "tableName" | "status" | "remark", ExtArgs["result"]["cms_model"]>

  export type $cms_modelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cms_model"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      model: string | null
      tableName: string | null
      status: string | null
      remark: string | null
    }, ExtArgs["result"]["cms_model"]>
    composites: {}
  }

  type cms_modelGetPayload<S extends boolean | null | undefined | cms_modelDefaultArgs> = $Result.GetResult<Prisma.$cms_modelPayload, S>

  type cms_modelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cms_modelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cms_modelCountAggregateInputType | true
    }

  export interface cms_modelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cms_model'], meta: { name: 'cms_model' } }
    /**
     * Find zero or one Cms_model that matches the filter.
     * @param {cms_modelFindUniqueArgs} args - Arguments to find a Cms_model
     * @example
     * // Get one Cms_model
     * const cms_model = await prisma.cms_model.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cms_modelFindUniqueArgs>(args: SelectSubset<T, cms_modelFindUniqueArgs<ExtArgs>>): Prisma__cms_modelClient<$Result.GetResult<Prisma.$cms_modelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cms_model that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cms_modelFindUniqueOrThrowArgs} args - Arguments to find a Cms_model
     * @example
     * // Get one Cms_model
     * const cms_model = await prisma.cms_model.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cms_modelFindUniqueOrThrowArgs>(args: SelectSubset<T, cms_modelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cms_modelClient<$Result.GetResult<Prisma.$cms_modelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cms_model that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_modelFindFirstArgs} args - Arguments to find a Cms_model
     * @example
     * // Get one Cms_model
     * const cms_model = await prisma.cms_model.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cms_modelFindFirstArgs>(args?: SelectSubset<T, cms_modelFindFirstArgs<ExtArgs>>): Prisma__cms_modelClient<$Result.GetResult<Prisma.$cms_modelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cms_model that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_modelFindFirstOrThrowArgs} args - Arguments to find a Cms_model
     * @example
     * // Get one Cms_model
     * const cms_model = await prisma.cms_model.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cms_modelFindFirstOrThrowArgs>(args?: SelectSubset<T, cms_modelFindFirstOrThrowArgs<ExtArgs>>): Prisma__cms_modelClient<$Result.GetResult<Prisma.$cms_modelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cms_models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_modelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cms_models
     * const cms_models = await prisma.cms_model.findMany()
     * 
     * // Get first 10 Cms_models
     * const cms_models = await prisma.cms_model.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cms_modelWithIdOnly = await prisma.cms_model.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cms_modelFindManyArgs>(args?: SelectSubset<T, cms_modelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cms_modelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cms_model.
     * @param {cms_modelCreateArgs} args - Arguments to create a Cms_model.
     * @example
     * // Create one Cms_model
     * const Cms_model = await prisma.cms_model.create({
     *   data: {
     *     // ... data to create a Cms_model
     *   }
     * })
     * 
     */
    create<T extends cms_modelCreateArgs>(args: SelectSubset<T, cms_modelCreateArgs<ExtArgs>>): Prisma__cms_modelClient<$Result.GetResult<Prisma.$cms_modelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cms_models.
     * @param {cms_modelCreateManyArgs} args - Arguments to create many Cms_models.
     * @example
     * // Create many Cms_models
     * const cms_model = await prisma.cms_model.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cms_modelCreateManyArgs>(args?: SelectSubset<T, cms_modelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cms_model.
     * @param {cms_modelDeleteArgs} args - Arguments to delete one Cms_model.
     * @example
     * // Delete one Cms_model
     * const Cms_model = await prisma.cms_model.delete({
     *   where: {
     *     // ... filter to delete one Cms_model
     *   }
     * })
     * 
     */
    delete<T extends cms_modelDeleteArgs>(args: SelectSubset<T, cms_modelDeleteArgs<ExtArgs>>): Prisma__cms_modelClient<$Result.GetResult<Prisma.$cms_modelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cms_model.
     * @param {cms_modelUpdateArgs} args - Arguments to update one Cms_model.
     * @example
     * // Update one Cms_model
     * const cms_model = await prisma.cms_model.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cms_modelUpdateArgs>(args: SelectSubset<T, cms_modelUpdateArgs<ExtArgs>>): Prisma__cms_modelClient<$Result.GetResult<Prisma.$cms_modelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cms_models.
     * @param {cms_modelDeleteManyArgs} args - Arguments to filter Cms_models to delete.
     * @example
     * // Delete a few Cms_models
     * const { count } = await prisma.cms_model.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cms_modelDeleteManyArgs>(args?: SelectSubset<T, cms_modelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cms_models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_modelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cms_models
     * const cms_model = await prisma.cms_model.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cms_modelUpdateManyArgs>(args: SelectSubset<T, cms_modelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cms_model.
     * @param {cms_modelUpsertArgs} args - Arguments to update or create a Cms_model.
     * @example
     * // Update or create a Cms_model
     * const cms_model = await prisma.cms_model.upsert({
     *   create: {
     *     // ... data to create a Cms_model
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cms_model we want to update
     *   }
     * })
     */
    upsert<T extends cms_modelUpsertArgs>(args: SelectSubset<T, cms_modelUpsertArgs<ExtArgs>>): Prisma__cms_modelClient<$Result.GetResult<Prisma.$cms_modelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cms_models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_modelCountArgs} args - Arguments to filter Cms_models to count.
     * @example
     * // Count the number of Cms_models
     * const count = await prisma.cms_model.count({
     *   where: {
     *     // ... the filter for the Cms_models we want to count
     *   }
     * })
    **/
    count<T extends cms_modelCountArgs>(
      args?: Subset<T, cms_modelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cms_modelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cms_model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cms_modelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cms_modelAggregateArgs>(args: Subset<T, Cms_modelAggregateArgs>): Prisma.PrismaPromise<GetCms_modelAggregateType<T>>

    /**
     * Group by Cms_model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_modelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cms_modelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cms_modelGroupByArgs['orderBy'] }
        : { orderBy?: cms_modelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cms_modelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCms_modelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cms_model model
   */
  readonly fields: cms_modelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cms_model.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cms_modelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cms_model model
   */
  interface cms_modelFieldRefs {
    readonly id: FieldRef<"cms_model", 'Int'>
    readonly model: FieldRef<"cms_model", 'String'>
    readonly tableName: FieldRef<"cms_model", 'String'>
    readonly status: FieldRef<"cms_model", 'String'>
    readonly remark: FieldRef<"cms_model", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cms_model findUnique
   */
  export type cms_modelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_model
     */
    select?: cms_modelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_model
     */
    omit?: cms_modelOmit<ExtArgs> | null
    /**
     * Filter, which cms_model to fetch.
     */
    where: cms_modelWhereUniqueInput
  }

  /**
   * cms_model findUniqueOrThrow
   */
  export type cms_modelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_model
     */
    select?: cms_modelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_model
     */
    omit?: cms_modelOmit<ExtArgs> | null
    /**
     * Filter, which cms_model to fetch.
     */
    where: cms_modelWhereUniqueInput
  }

  /**
   * cms_model findFirst
   */
  export type cms_modelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_model
     */
    select?: cms_modelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_model
     */
    omit?: cms_modelOmit<ExtArgs> | null
    /**
     * Filter, which cms_model to fetch.
     */
    where?: cms_modelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_models to fetch.
     */
    orderBy?: cms_modelOrderByWithRelationInput | cms_modelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cms_models.
     */
    cursor?: cms_modelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cms_models.
     */
    distinct?: Cms_modelScalarFieldEnum | Cms_modelScalarFieldEnum[]
  }

  /**
   * cms_model findFirstOrThrow
   */
  export type cms_modelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_model
     */
    select?: cms_modelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_model
     */
    omit?: cms_modelOmit<ExtArgs> | null
    /**
     * Filter, which cms_model to fetch.
     */
    where?: cms_modelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_models to fetch.
     */
    orderBy?: cms_modelOrderByWithRelationInput | cms_modelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cms_models.
     */
    cursor?: cms_modelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cms_models.
     */
    distinct?: Cms_modelScalarFieldEnum | Cms_modelScalarFieldEnum[]
  }

  /**
   * cms_model findMany
   */
  export type cms_modelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_model
     */
    select?: cms_modelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_model
     */
    omit?: cms_modelOmit<ExtArgs> | null
    /**
     * Filter, which cms_models to fetch.
     */
    where?: cms_modelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_models to fetch.
     */
    orderBy?: cms_modelOrderByWithRelationInput | cms_modelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cms_models.
     */
    cursor?: cms_modelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_models.
     */
    skip?: number
    distinct?: Cms_modelScalarFieldEnum | Cms_modelScalarFieldEnum[]
  }

  /**
   * cms_model create
   */
  export type cms_modelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_model
     */
    select?: cms_modelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_model
     */
    omit?: cms_modelOmit<ExtArgs> | null
    /**
     * The data needed to create a cms_model.
     */
    data?: XOR<cms_modelCreateInput, cms_modelUncheckedCreateInput>
  }

  /**
   * cms_model createMany
   */
  export type cms_modelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cms_models.
     */
    data: cms_modelCreateManyInput | cms_modelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cms_model update
   */
  export type cms_modelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_model
     */
    select?: cms_modelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_model
     */
    omit?: cms_modelOmit<ExtArgs> | null
    /**
     * The data needed to update a cms_model.
     */
    data: XOR<cms_modelUpdateInput, cms_modelUncheckedUpdateInput>
    /**
     * Choose, which cms_model to update.
     */
    where: cms_modelWhereUniqueInput
  }

  /**
   * cms_model updateMany
   */
  export type cms_modelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cms_models.
     */
    data: XOR<cms_modelUpdateManyMutationInput, cms_modelUncheckedUpdateManyInput>
    /**
     * Filter which cms_models to update
     */
    where?: cms_modelWhereInput
    /**
     * Limit how many cms_models to update.
     */
    limit?: number
  }

  /**
   * cms_model upsert
   */
  export type cms_modelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_model
     */
    select?: cms_modelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_model
     */
    omit?: cms_modelOmit<ExtArgs> | null
    /**
     * The filter to search for the cms_model to update in case it exists.
     */
    where: cms_modelWhereUniqueInput
    /**
     * In case the cms_model found by the `where` argument doesn't exist, create a new cms_model with this data.
     */
    create: XOR<cms_modelCreateInput, cms_modelUncheckedCreateInput>
    /**
     * In case the cms_model was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cms_modelUpdateInput, cms_modelUncheckedUpdateInput>
  }

  /**
   * cms_model delete
   */
  export type cms_modelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_model
     */
    select?: cms_modelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_model
     */
    omit?: cms_modelOmit<ExtArgs> | null
    /**
     * Filter which cms_model to delete.
     */
    where: cms_modelWhereUniqueInput
  }

  /**
   * cms_model deleteMany
   */
  export type cms_modelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cms_models to delete
     */
    where?: cms_modelWhereInput
    /**
     * Limit how many cms_models to delete.
     */
    limit?: number
  }

  /**
   * cms_model without action
   */
  export type cms_modelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_model
     */
    select?: cms_modelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_model
     */
    omit?: cms_modelOmit<ExtArgs> | null
  }


  /**
   * Model cms_site
   */

  export type AggregateCms_site = {
    _count: Cms_siteCountAggregateOutputType | null
    _avg: Cms_siteAvgAggregateOutputType | null
    _sum: Cms_siteSumAggregateOutputType | null
    _min: Cms_siteMinAggregateOutputType | null
    _max: Cms_siteMaxAggregateOutputType | null
  }

  export type Cms_siteAvgAggregateOutputType = {
    id: number | null
  }

  export type Cms_siteSumAggregateOutputType = {
    id: number | null
  }

  export type Cms_siteMinAggregateOutputType = {
    id: number | null
    name: string | null
    domain: string | null
    email: string | null
    wx: string | null
    icp: string | null
    code: string | null
    json: string | null
    title: string | null
    keywords: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Cms_siteMaxAggregateOutputType = {
    id: number | null
    name: string | null
    domain: string | null
    email: string | null
    wx: string | null
    icp: string | null
    code: string | null
    json: string | null
    title: string | null
    keywords: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Cms_siteCountAggregateOutputType = {
    id: number
    name: number
    domain: number
    email: number
    wx: number
    icp: number
    code: number
    json: number
    title: number
    keywords: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Cms_siteAvgAggregateInputType = {
    id?: true
  }

  export type Cms_siteSumAggregateInputType = {
    id?: true
  }

  export type Cms_siteMinAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    email?: true
    wx?: true
    icp?: true
    code?: true
    json?: true
    title?: true
    keywords?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Cms_siteMaxAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    email?: true
    wx?: true
    icp?: true
    code?: true
    json?: true
    title?: true
    keywords?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Cms_siteCountAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    email?: true
    wx?: true
    icp?: true
    code?: true
    json?: true
    title?: true
    keywords?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Cms_siteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cms_site to aggregate.
     */
    where?: cms_siteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_sites to fetch.
     */
    orderBy?: cms_siteOrderByWithRelationInput | cms_siteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cms_siteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cms_sites
    **/
    _count?: true | Cms_siteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cms_siteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cms_siteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cms_siteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cms_siteMaxAggregateInputType
  }

  export type GetCms_siteAggregateType<T extends Cms_siteAggregateArgs> = {
        [P in keyof T & keyof AggregateCms_site]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCms_site[P]>
      : GetScalarType<T[P], AggregateCms_site[P]>
  }




  export type cms_siteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cms_siteWhereInput
    orderBy?: cms_siteOrderByWithAggregationInput | cms_siteOrderByWithAggregationInput[]
    by: Cms_siteScalarFieldEnum[] | Cms_siteScalarFieldEnum
    having?: cms_siteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cms_siteCountAggregateInputType | true
    _avg?: Cms_siteAvgAggregateInputType
    _sum?: Cms_siteSumAggregateInputType
    _min?: Cms_siteMinAggregateInputType
    _max?: Cms_siteMaxAggregateInputType
  }

  export type Cms_siteGroupByOutputType = {
    id: number
    name: string | null
    domain: string | null
    email: string | null
    wx: string | null
    icp: string | null
    code: string | null
    json: string | null
    title: string | null
    keywords: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: Cms_siteCountAggregateOutputType | null
    _avg: Cms_siteAvgAggregateOutputType | null
    _sum: Cms_siteSumAggregateOutputType | null
    _min: Cms_siteMinAggregateOutputType | null
    _max: Cms_siteMaxAggregateOutputType | null
  }

  type GetCms_siteGroupByPayload<T extends cms_siteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cms_siteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cms_siteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cms_siteGroupByOutputType[P]>
            : GetScalarType<T[P], Cms_siteGroupByOutputType[P]>
        }
      >
    >


  export type cms_siteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    email?: boolean
    wx?: boolean
    icp?: boolean
    code?: boolean
    json?: boolean
    title?: boolean
    keywords?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cms_site"]>



  export type cms_siteSelectScalar = {
    id?: boolean
    name?: boolean
    domain?: boolean
    email?: boolean
    wx?: boolean
    icp?: boolean
    code?: boolean
    json?: boolean
    title?: boolean
    keywords?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type cms_siteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "domain" | "email" | "wx" | "icp" | "code" | "json" | "title" | "keywords" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["cms_site"]>

  export type $cms_sitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cms_site"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      domain: string | null
      email: string | null
      wx: string | null
      icp: string | null
      code: string | null
      json: string | null
      title: string | null
      keywords: string | null
      description: string | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["cms_site"]>
    composites: {}
  }

  type cms_siteGetPayload<S extends boolean | null | undefined | cms_siteDefaultArgs> = $Result.GetResult<Prisma.$cms_sitePayload, S>

  type cms_siteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cms_siteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cms_siteCountAggregateInputType | true
    }

  export interface cms_siteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cms_site'], meta: { name: 'cms_site' } }
    /**
     * Find zero or one Cms_site that matches the filter.
     * @param {cms_siteFindUniqueArgs} args - Arguments to find a Cms_site
     * @example
     * // Get one Cms_site
     * const cms_site = await prisma.cms_site.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cms_siteFindUniqueArgs>(args: SelectSubset<T, cms_siteFindUniqueArgs<ExtArgs>>): Prisma__cms_siteClient<$Result.GetResult<Prisma.$cms_sitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cms_site that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cms_siteFindUniqueOrThrowArgs} args - Arguments to find a Cms_site
     * @example
     * // Get one Cms_site
     * const cms_site = await prisma.cms_site.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cms_siteFindUniqueOrThrowArgs>(args: SelectSubset<T, cms_siteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cms_siteClient<$Result.GetResult<Prisma.$cms_sitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cms_site that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_siteFindFirstArgs} args - Arguments to find a Cms_site
     * @example
     * // Get one Cms_site
     * const cms_site = await prisma.cms_site.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cms_siteFindFirstArgs>(args?: SelectSubset<T, cms_siteFindFirstArgs<ExtArgs>>): Prisma__cms_siteClient<$Result.GetResult<Prisma.$cms_sitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cms_site that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_siteFindFirstOrThrowArgs} args - Arguments to find a Cms_site
     * @example
     * // Get one Cms_site
     * const cms_site = await prisma.cms_site.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cms_siteFindFirstOrThrowArgs>(args?: SelectSubset<T, cms_siteFindFirstOrThrowArgs<ExtArgs>>): Prisma__cms_siteClient<$Result.GetResult<Prisma.$cms_sitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cms_sites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_siteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cms_sites
     * const cms_sites = await prisma.cms_site.findMany()
     * 
     * // Get first 10 Cms_sites
     * const cms_sites = await prisma.cms_site.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cms_siteWithIdOnly = await prisma.cms_site.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cms_siteFindManyArgs>(args?: SelectSubset<T, cms_siteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cms_sitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cms_site.
     * @param {cms_siteCreateArgs} args - Arguments to create a Cms_site.
     * @example
     * // Create one Cms_site
     * const Cms_site = await prisma.cms_site.create({
     *   data: {
     *     // ... data to create a Cms_site
     *   }
     * })
     * 
     */
    create<T extends cms_siteCreateArgs>(args: SelectSubset<T, cms_siteCreateArgs<ExtArgs>>): Prisma__cms_siteClient<$Result.GetResult<Prisma.$cms_sitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cms_sites.
     * @param {cms_siteCreateManyArgs} args - Arguments to create many Cms_sites.
     * @example
     * // Create many Cms_sites
     * const cms_site = await prisma.cms_site.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cms_siteCreateManyArgs>(args?: SelectSubset<T, cms_siteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cms_site.
     * @param {cms_siteDeleteArgs} args - Arguments to delete one Cms_site.
     * @example
     * // Delete one Cms_site
     * const Cms_site = await prisma.cms_site.delete({
     *   where: {
     *     // ... filter to delete one Cms_site
     *   }
     * })
     * 
     */
    delete<T extends cms_siteDeleteArgs>(args: SelectSubset<T, cms_siteDeleteArgs<ExtArgs>>): Prisma__cms_siteClient<$Result.GetResult<Prisma.$cms_sitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cms_site.
     * @param {cms_siteUpdateArgs} args - Arguments to update one Cms_site.
     * @example
     * // Update one Cms_site
     * const cms_site = await prisma.cms_site.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cms_siteUpdateArgs>(args: SelectSubset<T, cms_siteUpdateArgs<ExtArgs>>): Prisma__cms_siteClient<$Result.GetResult<Prisma.$cms_sitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cms_sites.
     * @param {cms_siteDeleteManyArgs} args - Arguments to filter Cms_sites to delete.
     * @example
     * // Delete a few Cms_sites
     * const { count } = await prisma.cms_site.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cms_siteDeleteManyArgs>(args?: SelectSubset<T, cms_siteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cms_sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_siteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cms_sites
     * const cms_site = await prisma.cms_site.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cms_siteUpdateManyArgs>(args: SelectSubset<T, cms_siteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cms_site.
     * @param {cms_siteUpsertArgs} args - Arguments to update or create a Cms_site.
     * @example
     * // Update or create a Cms_site
     * const cms_site = await prisma.cms_site.upsert({
     *   create: {
     *     // ... data to create a Cms_site
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cms_site we want to update
     *   }
     * })
     */
    upsert<T extends cms_siteUpsertArgs>(args: SelectSubset<T, cms_siteUpsertArgs<ExtArgs>>): Prisma__cms_siteClient<$Result.GetResult<Prisma.$cms_sitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cms_sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_siteCountArgs} args - Arguments to filter Cms_sites to count.
     * @example
     * // Count the number of Cms_sites
     * const count = await prisma.cms_site.count({
     *   where: {
     *     // ... the filter for the Cms_sites we want to count
     *   }
     * })
    **/
    count<T extends cms_siteCountArgs>(
      args?: Subset<T, cms_siteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cms_siteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cms_site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cms_siteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cms_siteAggregateArgs>(args: Subset<T, Cms_siteAggregateArgs>): Prisma.PrismaPromise<GetCms_siteAggregateType<T>>

    /**
     * Group by Cms_site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_siteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cms_siteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cms_siteGroupByArgs['orderBy'] }
        : { orderBy?: cms_siteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cms_siteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCms_siteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cms_site model
   */
  readonly fields: cms_siteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cms_site.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cms_siteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cms_site model
   */
  interface cms_siteFieldRefs {
    readonly id: FieldRef<"cms_site", 'Int'>
    readonly name: FieldRef<"cms_site", 'String'>
    readonly domain: FieldRef<"cms_site", 'String'>
    readonly email: FieldRef<"cms_site", 'String'>
    readonly wx: FieldRef<"cms_site", 'String'>
    readonly icp: FieldRef<"cms_site", 'String'>
    readonly code: FieldRef<"cms_site", 'String'>
    readonly json: FieldRef<"cms_site", 'String'>
    readonly title: FieldRef<"cms_site", 'String'>
    readonly keywords: FieldRef<"cms_site", 'String'>
    readonly description: FieldRef<"cms_site", 'String'>
    readonly createdAt: FieldRef<"cms_site", 'DateTime'>
    readonly updatedAt: FieldRef<"cms_site", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cms_site findUnique
   */
  export type cms_siteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_site
     */
    select?: cms_siteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_site
     */
    omit?: cms_siteOmit<ExtArgs> | null
    /**
     * Filter, which cms_site to fetch.
     */
    where: cms_siteWhereUniqueInput
  }

  /**
   * cms_site findUniqueOrThrow
   */
  export type cms_siteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_site
     */
    select?: cms_siteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_site
     */
    omit?: cms_siteOmit<ExtArgs> | null
    /**
     * Filter, which cms_site to fetch.
     */
    where: cms_siteWhereUniqueInput
  }

  /**
   * cms_site findFirst
   */
  export type cms_siteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_site
     */
    select?: cms_siteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_site
     */
    omit?: cms_siteOmit<ExtArgs> | null
    /**
     * Filter, which cms_site to fetch.
     */
    where?: cms_siteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_sites to fetch.
     */
    orderBy?: cms_siteOrderByWithRelationInput | cms_siteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cms_sites.
     */
    cursor?: cms_siteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cms_sites.
     */
    distinct?: Cms_siteScalarFieldEnum | Cms_siteScalarFieldEnum[]
  }

  /**
   * cms_site findFirstOrThrow
   */
  export type cms_siteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_site
     */
    select?: cms_siteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_site
     */
    omit?: cms_siteOmit<ExtArgs> | null
    /**
     * Filter, which cms_site to fetch.
     */
    where?: cms_siteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_sites to fetch.
     */
    orderBy?: cms_siteOrderByWithRelationInput | cms_siteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cms_sites.
     */
    cursor?: cms_siteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cms_sites.
     */
    distinct?: Cms_siteScalarFieldEnum | Cms_siteScalarFieldEnum[]
  }

  /**
   * cms_site findMany
   */
  export type cms_siteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_site
     */
    select?: cms_siteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_site
     */
    omit?: cms_siteOmit<ExtArgs> | null
    /**
     * Filter, which cms_sites to fetch.
     */
    where?: cms_siteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_sites to fetch.
     */
    orderBy?: cms_siteOrderByWithRelationInput | cms_siteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cms_sites.
     */
    cursor?: cms_siteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_sites.
     */
    skip?: number
    distinct?: Cms_siteScalarFieldEnum | Cms_siteScalarFieldEnum[]
  }

  /**
   * cms_site create
   */
  export type cms_siteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_site
     */
    select?: cms_siteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_site
     */
    omit?: cms_siteOmit<ExtArgs> | null
    /**
     * The data needed to create a cms_site.
     */
    data?: XOR<cms_siteCreateInput, cms_siteUncheckedCreateInput>
  }

  /**
   * cms_site createMany
   */
  export type cms_siteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cms_sites.
     */
    data: cms_siteCreateManyInput | cms_siteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cms_site update
   */
  export type cms_siteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_site
     */
    select?: cms_siteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_site
     */
    omit?: cms_siteOmit<ExtArgs> | null
    /**
     * The data needed to update a cms_site.
     */
    data: XOR<cms_siteUpdateInput, cms_siteUncheckedUpdateInput>
    /**
     * Choose, which cms_site to update.
     */
    where: cms_siteWhereUniqueInput
  }

  /**
   * cms_site updateMany
   */
  export type cms_siteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cms_sites.
     */
    data: XOR<cms_siteUpdateManyMutationInput, cms_siteUncheckedUpdateManyInput>
    /**
     * Filter which cms_sites to update
     */
    where?: cms_siteWhereInput
    /**
     * Limit how many cms_sites to update.
     */
    limit?: number
  }

  /**
   * cms_site upsert
   */
  export type cms_siteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_site
     */
    select?: cms_siteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_site
     */
    omit?: cms_siteOmit<ExtArgs> | null
    /**
     * The filter to search for the cms_site to update in case it exists.
     */
    where: cms_siteWhereUniqueInput
    /**
     * In case the cms_site found by the `where` argument doesn't exist, create a new cms_site with this data.
     */
    create: XOR<cms_siteCreateInput, cms_siteUncheckedCreateInput>
    /**
     * In case the cms_site was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cms_siteUpdateInput, cms_siteUncheckedUpdateInput>
  }

  /**
   * cms_site delete
   */
  export type cms_siteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_site
     */
    select?: cms_siteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_site
     */
    omit?: cms_siteOmit<ExtArgs> | null
    /**
     * Filter which cms_site to delete.
     */
    where: cms_siteWhereUniqueInput
  }

  /**
   * cms_site deleteMany
   */
  export type cms_siteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cms_sites to delete
     */
    where?: cms_siteWhereInput
    /**
     * Limit how many cms_sites to delete.
     */
    limit?: number
  }

  /**
   * cms_site without action
   */
  export type cms_siteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_site
     */
    select?: cms_siteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_site
     */
    omit?: cms_siteOmit<ExtArgs> | null
  }


  /**
   * Model cms_slide
   */

  export type AggregateCms_slide = {
    _count: Cms_slideCountAggregateOutputType | null
    _avg: Cms_slideAvgAggregateOutputType | null
    _sum: Cms_slideSumAggregateOutputType | null
    _min: Cms_slideMinAggregateOutputType | null
    _max: Cms_slideMaxAggregateOutputType | null
  }

  export type Cms_slideAvgAggregateOutputType = {
    id: number | null
  }

  export type Cms_slideSumAggregateOutputType = {
    id: number | null
  }

  export type Cms_slideMinAggregateOutputType = {
    id: number | null
    title: string | null
    imgUrl: string | null
    linkUrl: string | null
    mark: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Cms_slideMaxAggregateOutputType = {
    id: number | null
    title: string | null
    imgUrl: string | null
    linkUrl: string | null
    mark: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Cms_slideCountAggregateOutputType = {
    id: number
    title: number
    imgUrl: number
    linkUrl: number
    mark: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Cms_slideAvgAggregateInputType = {
    id?: true
  }

  export type Cms_slideSumAggregateInputType = {
    id?: true
  }

  export type Cms_slideMinAggregateInputType = {
    id?: true
    title?: true
    imgUrl?: true
    linkUrl?: true
    mark?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Cms_slideMaxAggregateInputType = {
    id?: true
    title?: true
    imgUrl?: true
    linkUrl?: true
    mark?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Cms_slideCountAggregateInputType = {
    id?: true
    title?: true
    imgUrl?: true
    linkUrl?: true
    mark?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Cms_slideAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cms_slide to aggregate.
     */
    where?: cms_slideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_slides to fetch.
     */
    orderBy?: cms_slideOrderByWithRelationInput | cms_slideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cms_slideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_slides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_slides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cms_slides
    **/
    _count?: true | Cms_slideCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cms_slideAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cms_slideSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cms_slideMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cms_slideMaxAggregateInputType
  }

  export type GetCms_slideAggregateType<T extends Cms_slideAggregateArgs> = {
        [P in keyof T & keyof AggregateCms_slide]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCms_slide[P]>
      : GetScalarType<T[P], AggregateCms_slide[P]>
  }




  export type cms_slideGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cms_slideWhereInput
    orderBy?: cms_slideOrderByWithAggregationInput | cms_slideOrderByWithAggregationInput[]
    by: Cms_slideScalarFieldEnum[] | Cms_slideScalarFieldEnum
    having?: cms_slideScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cms_slideCountAggregateInputType | true
    _avg?: Cms_slideAvgAggregateInputType
    _sum?: Cms_slideSumAggregateInputType
    _min?: Cms_slideMinAggregateInputType
    _max?: Cms_slideMaxAggregateInputType
  }

  export type Cms_slideGroupByOutputType = {
    id: number
    title: string | null
    imgUrl: string | null
    linkUrl: string | null
    mark: string | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: Cms_slideCountAggregateOutputType | null
    _avg: Cms_slideAvgAggregateOutputType | null
    _sum: Cms_slideSumAggregateOutputType | null
    _min: Cms_slideMinAggregateOutputType | null
    _max: Cms_slideMaxAggregateOutputType | null
  }

  type GetCms_slideGroupByPayload<T extends cms_slideGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cms_slideGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cms_slideGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cms_slideGroupByOutputType[P]>
            : GetScalarType<T[P], Cms_slideGroupByOutputType[P]>
        }
      >
    >


  export type cms_slideSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    imgUrl?: boolean
    linkUrl?: boolean
    mark?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cms_slide"]>



  export type cms_slideSelectScalar = {
    id?: boolean
    title?: boolean
    imgUrl?: boolean
    linkUrl?: boolean
    mark?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type cms_slideOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "imgUrl" | "linkUrl" | "mark" | "createdAt" | "updatedAt", ExtArgs["result"]["cms_slide"]>

  export type $cms_slidePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cms_slide"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      imgUrl: string | null
      linkUrl: string | null
      mark: string | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["cms_slide"]>
    composites: {}
  }

  type cms_slideGetPayload<S extends boolean | null | undefined | cms_slideDefaultArgs> = $Result.GetResult<Prisma.$cms_slidePayload, S>

  type cms_slideCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cms_slideFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cms_slideCountAggregateInputType | true
    }

  export interface cms_slideDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cms_slide'], meta: { name: 'cms_slide' } }
    /**
     * Find zero or one Cms_slide that matches the filter.
     * @param {cms_slideFindUniqueArgs} args - Arguments to find a Cms_slide
     * @example
     * // Get one Cms_slide
     * const cms_slide = await prisma.cms_slide.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cms_slideFindUniqueArgs>(args: SelectSubset<T, cms_slideFindUniqueArgs<ExtArgs>>): Prisma__cms_slideClient<$Result.GetResult<Prisma.$cms_slidePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cms_slide that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cms_slideFindUniqueOrThrowArgs} args - Arguments to find a Cms_slide
     * @example
     * // Get one Cms_slide
     * const cms_slide = await prisma.cms_slide.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cms_slideFindUniqueOrThrowArgs>(args: SelectSubset<T, cms_slideFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cms_slideClient<$Result.GetResult<Prisma.$cms_slidePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cms_slide that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_slideFindFirstArgs} args - Arguments to find a Cms_slide
     * @example
     * // Get one Cms_slide
     * const cms_slide = await prisma.cms_slide.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cms_slideFindFirstArgs>(args?: SelectSubset<T, cms_slideFindFirstArgs<ExtArgs>>): Prisma__cms_slideClient<$Result.GetResult<Prisma.$cms_slidePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cms_slide that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_slideFindFirstOrThrowArgs} args - Arguments to find a Cms_slide
     * @example
     * // Get one Cms_slide
     * const cms_slide = await prisma.cms_slide.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cms_slideFindFirstOrThrowArgs>(args?: SelectSubset<T, cms_slideFindFirstOrThrowArgs<ExtArgs>>): Prisma__cms_slideClient<$Result.GetResult<Prisma.$cms_slidePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cms_slides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_slideFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cms_slides
     * const cms_slides = await prisma.cms_slide.findMany()
     * 
     * // Get first 10 Cms_slides
     * const cms_slides = await prisma.cms_slide.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cms_slideWithIdOnly = await prisma.cms_slide.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cms_slideFindManyArgs>(args?: SelectSubset<T, cms_slideFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cms_slidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cms_slide.
     * @param {cms_slideCreateArgs} args - Arguments to create a Cms_slide.
     * @example
     * // Create one Cms_slide
     * const Cms_slide = await prisma.cms_slide.create({
     *   data: {
     *     // ... data to create a Cms_slide
     *   }
     * })
     * 
     */
    create<T extends cms_slideCreateArgs>(args: SelectSubset<T, cms_slideCreateArgs<ExtArgs>>): Prisma__cms_slideClient<$Result.GetResult<Prisma.$cms_slidePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cms_slides.
     * @param {cms_slideCreateManyArgs} args - Arguments to create many Cms_slides.
     * @example
     * // Create many Cms_slides
     * const cms_slide = await prisma.cms_slide.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cms_slideCreateManyArgs>(args?: SelectSubset<T, cms_slideCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cms_slide.
     * @param {cms_slideDeleteArgs} args - Arguments to delete one Cms_slide.
     * @example
     * // Delete one Cms_slide
     * const Cms_slide = await prisma.cms_slide.delete({
     *   where: {
     *     // ... filter to delete one Cms_slide
     *   }
     * })
     * 
     */
    delete<T extends cms_slideDeleteArgs>(args: SelectSubset<T, cms_slideDeleteArgs<ExtArgs>>): Prisma__cms_slideClient<$Result.GetResult<Prisma.$cms_slidePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cms_slide.
     * @param {cms_slideUpdateArgs} args - Arguments to update one Cms_slide.
     * @example
     * // Update one Cms_slide
     * const cms_slide = await prisma.cms_slide.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cms_slideUpdateArgs>(args: SelectSubset<T, cms_slideUpdateArgs<ExtArgs>>): Prisma__cms_slideClient<$Result.GetResult<Prisma.$cms_slidePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cms_slides.
     * @param {cms_slideDeleteManyArgs} args - Arguments to filter Cms_slides to delete.
     * @example
     * // Delete a few Cms_slides
     * const { count } = await prisma.cms_slide.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cms_slideDeleteManyArgs>(args?: SelectSubset<T, cms_slideDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cms_slides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_slideUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cms_slides
     * const cms_slide = await prisma.cms_slide.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cms_slideUpdateManyArgs>(args: SelectSubset<T, cms_slideUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cms_slide.
     * @param {cms_slideUpsertArgs} args - Arguments to update or create a Cms_slide.
     * @example
     * // Update or create a Cms_slide
     * const cms_slide = await prisma.cms_slide.upsert({
     *   create: {
     *     // ... data to create a Cms_slide
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cms_slide we want to update
     *   }
     * })
     */
    upsert<T extends cms_slideUpsertArgs>(args: SelectSubset<T, cms_slideUpsertArgs<ExtArgs>>): Prisma__cms_slideClient<$Result.GetResult<Prisma.$cms_slidePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cms_slides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_slideCountArgs} args - Arguments to filter Cms_slides to count.
     * @example
     * // Count the number of Cms_slides
     * const count = await prisma.cms_slide.count({
     *   where: {
     *     // ... the filter for the Cms_slides we want to count
     *   }
     * })
    **/
    count<T extends cms_slideCountArgs>(
      args?: Subset<T, cms_slideCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cms_slideCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cms_slide.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cms_slideAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cms_slideAggregateArgs>(args: Subset<T, Cms_slideAggregateArgs>): Prisma.PrismaPromise<GetCms_slideAggregateType<T>>

    /**
     * Group by Cms_slide.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_slideGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cms_slideGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cms_slideGroupByArgs['orderBy'] }
        : { orderBy?: cms_slideGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cms_slideGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCms_slideGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cms_slide model
   */
  readonly fields: cms_slideFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cms_slide.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cms_slideClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cms_slide model
   */
  interface cms_slideFieldRefs {
    readonly id: FieldRef<"cms_slide", 'Int'>
    readonly title: FieldRef<"cms_slide", 'String'>
    readonly imgUrl: FieldRef<"cms_slide", 'String'>
    readonly linkUrl: FieldRef<"cms_slide", 'String'>
    readonly mark: FieldRef<"cms_slide", 'String'>
    readonly createdAt: FieldRef<"cms_slide", 'DateTime'>
    readonly updatedAt: FieldRef<"cms_slide", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cms_slide findUnique
   */
  export type cms_slideFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_slide
     */
    select?: cms_slideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_slide
     */
    omit?: cms_slideOmit<ExtArgs> | null
    /**
     * Filter, which cms_slide to fetch.
     */
    where: cms_slideWhereUniqueInput
  }

  /**
   * cms_slide findUniqueOrThrow
   */
  export type cms_slideFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_slide
     */
    select?: cms_slideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_slide
     */
    omit?: cms_slideOmit<ExtArgs> | null
    /**
     * Filter, which cms_slide to fetch.
     */
    where: cms_slideWhereUniqueInput
  }

  /**
   * cms_slide findFirst
   */
  export type cms_slideFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_slide
     */
    select?: cms_slideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_slide
     */
    omit?: cms_slideOmit<ExtArgs> | null
    /**
     * Filter, which cms_slide to fetch.
     */
    where?: cms_slideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_slides to fetch.
     */
    orderBy?: cms_slideOrderByWithRelationInput | cms_slideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cms_slides.
     */
    cursor?: cms_slideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_slides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_slides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cms_slides.
     */
    distinct?: Cms_slideScalarFieldEnum | Cms_slideScalarFieldEnum[]
  }

  /**
   * cms_slide findFirstOrThrow
   */
  export type cms_slideFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_slide
     */
    select?: cms_slideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_slide
     */
    omit?: cms_slideOmit<ExtArgs> | null
    /**
     * Filter, which cms_slide to fetch.
     */
    where?: cms_slideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_slides to fetch.
     */
    orderBy?: cms_slideOrderByWithRelationInput | cms_slideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cms_slides.
     */
    cursor?: cms_slideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_slides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_slides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cms_slides.
     */
    distinct?: Cms_slideScalarFieldEnum | Cms_slideScalarFieldEnum[]
  }

  /**
   * cms_slide findMany
   */
  export type cms_slideFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_slide
     */
    select?: cms_slideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_slide
     */
    omit?: cms_slideOmit<ExtArgs> | null
    /**
     * Filter, which cms_slides to fetch.
     */
    where?: cms_slideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_slides to fetch.
     */
    orderBy?: cms_slideOrderByWithRelationInput | cms_slideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cms_slides.
     */
    cursor?: cms_slideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_slides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_slides.
     */
    skip?: number
    distinct?: Cms_slideScalarFieldEnum | Cms_slideScalarFieldEnum[]
  }

  /**
   * cms_slide create
   */
  export type cms_slideCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_slide
     */
    select?: cms_slideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_slide
     */
    omit?: cms_slideOmit<ExtArgs> | null
    /**
     * The data needed to create a cms_slide.
     */
    data?: XOR<cms_slideCreateInput, cms_slideUncheckedCreateInput>
  }

  /**
   * cms_slide createMany
   */
  export type cms_slideCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cms_slides.
     */
    data: cms_slideCreateManyInput | cms_slideCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cms_slide update
   */
  export type cms_slideUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_slide
     */
    select?: cms_slideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_slide
     */
    omit?: cms_slideOmit<ExtArgs> | null
    /**
     * The data needed to update a cms_slide.
     */
    data: XOR<cms_slideUpdateInput, cms_slideUncheckedUpdateInput>
    /**
     * Choose, which cms_slide to update.
     */
    where: cms_slideWhereUniqueInput
  }

  /**
   * cms_slide updateMany
   */
  export type cms_slideUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cms_slides.
     */
    data: XOR<cms_slideUpdateManyMutationInput, cms_slideUncheckedUpdateManyInput>
    /**
     * Filter which cms_slides to update
     */
    where?: cms_slideWhereInput
    /**
     * Limit how many cms_slides to update.
     */
    limit?: number
  }

  /**
   * cms_slide upsert
   */
  export type cms_slideUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_slide
     */
    select?: cms_slideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_slide
     */
    omit?: cms_slideOmit<ExtArgs> | null
    /**
     * The filter to search for the cms_slide to update in case it exists.
     */
    where: cms_slideWhereUniqueInput
    /**
     * In case the cms_slide found by the `where` argument doesn't exist, create a new cms_slide with this data.
     */
    create: XOR<cms_slideCreateInput, cms_slideUncheckedCreateInput>
    /**
     * In case the cms_slide was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cms_slideUpdateInput, cms_slideUncheckedUpdateInput>
  }

  /**
   * cms_slide delete
   */
  export type cms_slideDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_slide
     */
    select?: cms_slideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_slide
     */
    omit?: cms_slideOmit<ExtArgs> | null
    /**
     * Filter which cms_slide to delete.
     */
    where: cms_slideWhereUniqueInput
  }

  /**
   * cms_slide deleteMany
   */
  export type cms_slideDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cms_slides to delete
     */
    where?: cms_slideWhereInput
    /**
     * Limit how many cms_slides to delete.
     */
    limit?: number
  }

  /**
   * cms_slide without action
   */
  export type cms_slideDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_slide
     */
    select?: cms_slideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_slide
     */
    omit?: cms_slideOmit<ExtArgs> | null
  }


  /**
   * Model cms_tag
   */

  export type AggregateCms_tag = {
    _count: Cms_tagCountAggregateOutputType | null
    _avg: Cms_tagAvgAggregateOutputType | null
    _sum: Cms_tagSumAggregateOutputType | null
    _min: Cms_tagMinAggregateOutputType | null
    _max: Cms_tagMaxAggregateOutputType | null
  }

  export type Cms_tagAvgAggregateOutputType = {
    id: number | null
    count: number | null
  }

  export type Cms_tagSumAggregateOutputType = {
    id: number | null
    count: number | null
  }

  export type Cms_tagMinAggregateOutputType = {
    id: number | null
    name: string | null
    path: string | null
    count: number | null
  }

  export type Cms_tagMaxAggregateOutputType = {
    id: number | null
    name: string | null
    path: string | null
    count: number | null
  }

  export type Cms_tagCountAggregateOutputType = {
    id: number
    name: number
    path: number
    count: number
    _all: number
  }


  export type Cms_tagAvgAggregateInputType = {
    id?: true
    count?: true
  }

  export type Cms_tagSumAggregateInputType = {
    id?: true
    count?: true
  }

  export type Cms_tagMinAggregateInputType = {
    id?: true
    name?: true
    path?: true
    count?: true
  }

  export type Cms_tagMaxAggregateInputType = {
    id?: true
    name?: true
    path?: true
    count?: true
  }

  export type Cms_tagCountAggregateInputType = {
    id?: true
    name?: true
    path?: true
    count?: true
    _all?: true
  }

  export type Cms_tagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cms_tag to aggregate.
     */
    where?: cms_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_tags to fetch.
     */
    orderBy?: cms_tagOrderByWithRelationInput | cms_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cms_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cms_tags
    **/
    _count?: true | Cms_tagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cms_tagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cms_tagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cms_tagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cms_tagMaxAggregateInputType
  }

  export type GetCms_tagAggregateType<T extends Cms_tagAggregateArgs> = {
        [P in keyof T & keyof AggregateCms_tag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCms_tag[P]>
      : GetScalarType<T[P], AggregateCms_tag[P]>
  }




  export type cms_tagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cms_tagWhereInput
    orderBy?: cms_tagOrderByWithAggregationInput | cms_tagOrderByWithAggregationInput[]
    by: Cms_tagScalarFieldEnum[] | Cms_tagScalarFieldEnum
    having?: cms_tagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cms_tagCountAggregateInputType | true
    _avg?: Cms_tagAvgAggregateInputType
    _sum?: Cms_tagSumAggregateInputType
    _min?: Cms_tagMinAggregateInputType
    _max?: Cms_tagMaxAggregateInputType
  }

  export type Cms_tagGroupByOutputType = {
    id: number
    name: string | null
    path: string | null
    count: number | null
    _count: Cms_tagCountAggregateOutputType | null
    _avg: Cms_tagAvgAggregateOutputType | null
    _sum: Cms_tagSumAggregateOutputType | null
    _min: Cms_tagMinAggregateOutputType | null
    _max: Cms_tagMaxAggregateOutputType | null
  }

  type GetCms_tagGroupByPayload<T extends cms_tagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cms_tagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cms_tagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cms_tagGroupByOutputType[P]>
            : GetScalarType<T[P], Cms_tagGroupByOutputType[P]>
        }
      >
    >


  export type cms_tagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    path?: boolean
    count?: boolean
  }, ExtArgs["result"]["cms_tag"]>



  export type cms_tagSelectScalar = {
    id?: boolean
    name?: boolean
    path?: boolean
    count?: boolean
  }

  export type cms_tagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "path" | "count", ExtArgs["result"]["cms_tag"]>

  export type $cms_tagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cms_tag"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      path: string | null
      count: number | null
    }, ExtArgs["result"]["cms_tag"]>
    composites: {}
  }

  type cms_tagGetPayload<S extends boolean | null | undefined | cms_tagDefaultArgs> = $Result.GetResult<Prisma.$cms_tagPayload, S>

  type cms_tagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cms_tagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cms_tagCountAggregateInputType | true
    }

  export interface cms_tagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cms_tag'], meta: { name: 'cms_tag' } }
    /**
     * Find zero or one Cms_tag that matches the filter.
     * @param {cms_tagFindUniqueArgs} args - Arguments to find a Cms_tag
     * @example
     * // Get one Cms_tag
     * const cms_tag = await prisma.cms_tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cms_tagFindUniqueArgs>(args: SelectSubset<T, cms_tagFindUniqueArgs<ExtArgs>>): Prisma__cms_tagClient<$Result.GetResult<Prisma.$cms_tagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cms_tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cms_tagFindUniqueOrThrowArgs} args - Arguments to find a Cms_tag
     * @example
     * // Get one Cms_tag
     * const cms_tag = await prisma.cms_tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cms_tagFindUniqueOrThrowArgs>(args: SelectSubset<T, cms_tagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cms_tagClient<$Result.GetResult<Prisma.$cms_tagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cms_tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_tagFindFirstArgs} args - Arguments to find a Cms_tag
     * @example
     * // Get one Cms_tag
     * const cms_tag = await prisma.cms_tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cms_tagFindFirstArgs>(args?: SelectSubset<T, cms_tagFindFirstArgs<ExtArgs>>): Prisma__cms_tagClient<$Result.GetResult<Prisma.$cms_tagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cms_tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_tagFindFirstOrThrowArgs} args - Arguments to find a Cms_tag
     * @example
     * // Get one Cms_tag
     * const cms_tag = await prisma.cms_tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cms_tagFindFirstOrThrowArgs>(args?: SelectSubset<T, cms_tagFindFirstOrThrowArgs<ExtArgs>>): Prisma__cms_tagClient<$Result.GetResult<Prisma.$cms_tagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cms_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_tagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cms_tags
     * const cms_tags = await prisma.cms_tag.findMany()
     * 
     * // Get first 10 Cms_tags
     * const cms_tags = await prisma.cms_tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cms_tagWithIdOnly = await prisma.cms_tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cms_tagFindManyArgs>(args?: SelectSubset<T, cms_tagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cms_tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cms_tag.
     * @param {cms_tagCreateArgs} args - Arguments to create a Cms_tag.
     * @example
     * // Create one Cms_tag
     * const Cms_tag = await prisma.cms_tag.create({
     *   data: {
     *     // ... data to create a Cms_tag
     *   }
     * })
     * 
     */
    create<T extends cms_tagCreateArgs>(args: SelectSubset<T, cms_tagCreateArgs<ExtArgs>>): Prisma__cms_tagClient<$Result.GetResult<Prisma.$cms_tagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cms_tags.
     * @param {cms_tagCreateManyArgs} args - Arguments to create many Cms_tags.
     * @example
     * // Create many Cms_tags
     * const cms_tag = await prisma.cms_tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cms_tagCreateManyArgs>(args?: SelectSubset<T, cms_tagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cms_tag.
     * @param {cms_tagDeleteArgs} args - Arguments to delete one Cms_tag.
     * @example
     * // Delete one Cms_tag
     * const Cms_tag = await prisma.cms_tag.delete({
     *   where: {
     *     // ... filter to delete one Cms_tag
     *   }
     * })
     * 
     */
    delete<T extends cms_tagDeleteArgs>(args: SelectSubset<T, cms_tagDeleteArgs<ExtArgs>>): Prisma__cms_tagClient<$Result.GetResult<Prisma.$cms_tagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cms_tag.
     * @param {cms_tagUpdateArgs} args - Arguments to update one Cms_tag.
     * @example
     * // Update one Cms_tag
     * const cms_tag = await prisma.cms_tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cms_tagUpdateArgs>(args: SelectSubset<T, cms_tagUpdateArgs<ExtArgs>>): Prisma__cms_tagClient<$Result.GetResult<Prisma.$cms_tagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cms_tags.
     * @param {cms_tagDeleteManyArgs} args - Arguments to filter Cms_tags to delete.
     * @example
     * // Delete a few Cms_tags
     * const { count } = await prisma.cms_tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cms_tagDeleteManyArgs>(args?: SelectSubset<T, cms_tagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cms_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_tagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cms_tags
     * const cms_tag = await prisma.cms_tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cms_tagUpdateManyArgs>(args: SelectSubset<T, cms_tagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cms_tag.
     * @param {cms_tagUpsertArgs} args - Arguments to update or create a Cms_tag.
     * @example
     * // Update or create a Cms_tag
     * const cms_tag = await prisma.cms_tag.upsert({
     *   create: {
     *     // ... data to create a Cms_tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cms_tag we want to update
     *   }
     * })
     */
    upsert<T extends cms_tagUpsertArgs>(args: SelectSubset<T, cms_tagUpsertArgs<ExtArgs>>): Prisma__cms_tagClient<$Result.GetResult<Prisma.$cms_tagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cms_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_tagCountArgs} args - Arguments to filter Cms_tags to count.
     * @example
     * // Count the number of Cms_tags
     * const count = await prisma.cms_tag.count({
     *   where: {
     *     // ... the filter for the Cms_tags we want to count
     *   }
     * })
    **/
    count<T extends cms_tagCountArgs>(
      args?: Subset<T, cms_tagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cms_tagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cms_tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cms_tagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cms_tagAggregateArgs>(args: Subset<T, Cms_tagAggregateArgs>): Prisma.PrismaPromise<GetCms_tagAggregateType<T>>

    /**
     * Group by Cms_tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cms_tagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cms_tagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cms_tagGroupByArgs['orderBy'] }
        : { orderBy?: cms_tagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cms_tagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCms_tagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cms_tag model
   */
  readonly fields: cms_tagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cms_tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cms_tagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cms_tag model
   */
  interface cms_tagFieldRefs {
    readonly id: FieldRef<"cms_tag", 'Int'>
    readonly name: FieldRef<"cms_tag", 'String'>
    readonly path: FieldRef<"cms_tag", 'String'>
    readonly count: FieldRef<"cms_tag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * cms_tag findUnique
   */
  export type cms_tagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_tag
     */
    select?: cms_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_tag
     */
    omit?: cms_tagOmit<ExtArgs> | null
    /**
     * Filter, which cms_tag to fetch.
     */
    where: cms_tagWhereUniqueInput
  }

  /**
   * cms_tag findUniqueOrThrow
   */
  export type cms_tagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_tag
     */
    select?: cms_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_tag
     */
    omit?: cms_tagOmit<ExtArgs> | null
    /**
     * Filter, which cms_tag to fetch.
     */
    where: cms_tagWhereUniqueInput
  }

  /**
   * cms_tag findFirst
   */
  export type cms_tagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_tag
     */
    select?: cms_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_tag
     */
    omit?: cms_tagOmit<ExtArgs> | null
    /**
     * Filter, which cms_tag to fetch.
     */
    where?: cms_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_tags to fetch.
     */
    orderBy?: cms_tagOrderByWithRelationInput | cms_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cms_tags.
     */
    cursor?: cms_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cms_tags.
     */
    distinct?: Cms_tagScalarFieldEnum | Cms_tagScalarFieldEnum[]
  }

  /**
   * cms_tag findFirstOrThrow
   */
  export type cms_tagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_tag
     */
    select?: cms_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_tag
     */
    omit?: cms_tagOmit<ExtArgs> | null
    /**
     * Filter, which cms_tag to fetch.
     */
    where?: cms_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_tags to fetch.
     */
    orderBy?: cms_tagOrderByWithRelationInput | cms_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cms_tags.
     */
    cursor?: cms_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cms_tags.
     */
    distinct?: Cms_tagScalarFieldEnum | Cms_tagScalarFieldEnum[]
  }

  /**
   * cms_tag findMany
   */
  export type cms_tagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_tag
     */
    select?: cms_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_tag
     */
    omit?: cms_tagOmit<ExtArgs> | null
    /**
     * Filter, which cms_tags to fetch.
     */
    where?: cms_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms_tags to fetch.
     */
    orderBy?: cms_tagOrderByWithRelationInput | cms_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cms_tags.
     */
    cursor?: cms_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms_tags.
     */
    skip?: number
    distinct?: Cms_tagScalarFieldEnum | Cms_tagScalarFieldEnum[]
  }

  /**
   * cms_tag create
   */
  export type cms_tagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_tag
     */
    select?: cms_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_tag
     */
    omit?: cms_tagOmit<ExtArgs> | null
    /**
     * The data needed to create a cms_tag.
     */
    data?: XOR<cms_tagCreateInput, cms_tagUncheckedCreateInput>
  }

  /**
   * cms_tag createMany
   */
  export type cms_tagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cms_tags.
     */
    data: cms_tagCreateManyInput | cms_tagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cms_tag update
   */
  export type cms_tagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_tag
     */
    select?: cms_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_tag
     */
    omit?: cms_tagOmit<ExtArgs> | null
    /**
     * The data needed to update a cms_tag.
     */
    data: XOR<cms_tagUpdateInput, cms_tagUncheckedUpdateInput>
    /**
     * Choose, which cms_tag to update.
     */
    where: cms_tagWhereUniqueInput
  }

  /**
   * cms_tag updateMany
   */
  export type cms_tagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cms_tags.
     */
    data: XOR<cms_tagUpdateManyMutationInput, cms_tagUncheckedUpdateManyInput>
    /**
     * Filter which cms_tags to update
     */
    where?: cms_tagWhereInput
    /**
     * Limit how many cms_tags to update.
     */
    limit?: number
  }

  /**
   * cms_tag upsert
   */
  export type cms_tagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_tag
     */
    select?: cms_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_tag
     */
    omit?: cms_tagOmit<ExtArgs> | null
    /**
     * The filter to search for the cms_tag to update in case it exists.
     */
    where: cms_tagWhereUniqueInput
    /**
     * In case the cms_tag found by the `where` argument doesn't exist, create a new cms_tag with this data.
     */
    create: XOR<cms_tagCreateInput, cms_tagUncheckedCreateInput>
    /**
     * In case the cms_tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cms_tagUpdateInput, cms_tagUncheckedUpdateInput>
  }

  /**
   * cms_tag delete
   */
  export type cms_tagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_tag
     */
    select?: cms_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_tag
     */
    omit?: cms_tagOmit<ExtArgs> | null
    /**
     * Filter which cms_tag to delete.
     */
    where: cms_tagWhereUniqueInput
  }

  /**
   * cms_tag deleteMany
   */
  export type cms_tagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cms_tags to delete
     */
    where?: cms_tagWhereInput
    /**
     * Limit how many cms_tags to delete.
     */
    limit?: number
  }

  /**
   * cms_tag without action
   */
  export type cms_tagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms_tag
     */
    select?: cms_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms_tag
     */
    omit?: cms_tagOmit<ExtArgs> | null
  }


  /**
   * Model ext_download
   */

  export type AggregateExt_download = {
    _count: Ext_downloadCountAggregateOutputType | null
    _avg: Ext_downloadAvgAggregateOutputType | null
    _sum: Ext_downloadSumAggregateOutputType | null
    _min: Ext_downloadMinAggregateOutputType | null
    _max: Ext_downloadMaxAggregateOutputType | null
  }

  export type Ext_downloadAvgAggregateOutputType = {
    id: number | null
    aid: number | null
  }

  export type Ext_downloadSumAggregateOutputType = {
    id: number | null
    aid: number | null
  }

  export type Ext_downloadMinAggregateOutputType = {
    id: number | null
    aid: number | null
    fileName: string | null
    fileVersion: string | null
    fileLink: string | null
    test1: string | null
  }

  export type Ext_downloadMaxAggregateOutputType = {
    id: number | null
    aid: number | null
    fileName: string | null
    fileVersion: string | null
    fileLink: string | null
    test1: string | null
  }

  export type Ext_downloadCountAggregateOutputType = {
    id: number
    aid: number
    fileName: number
    fileVersion: number
    fileLink: number
    test1: number
    _all: number
  }


  export type Ext_downloadAvgAggregateInputType = {
    id?: true
    aid?: true
  }

  export type Ext_downloadSumAggregateInputType = {
    id?: true
    aid?: true
  }

  export type Ext_downloadMinAggregateInputType = {
    id?: true
    aid?: true
    fileName?: true
    fileVersion?: true
    fileLink?: true
    test1?: true
  }

  export type Ext_downloadMaxAggregateInputType = {
    id?: true
    aid?: true
    fileName?: true
    fileVersion?: true
    fileLink?: true
    test1?: true
  }

  export type Ext_downloadCountAggregateInputType = {
    id?: true
    aid?: true
    fileName?: true
    fileVersion?: true
    fileLink?: true
    test1?: true
    _all?: true
  }

  export type Ext_downloadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ext_download to aggregate.
     */
    where?: ext_downloadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ext_downloads to fetch.
     */
    orderBy?: ext_downloadOrderByWithRelationInput | ext_downloadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ext_downloadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ext_downloads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ext_downloads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ext_downloads
    **/
    _count?: true | Ext_downloadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ext_downloadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ext_downloadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ext_downloadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ext_downloadMaxAggregateInputType
  }

  export type GetExt_downloadAggregateType<T extends Ext_downloadAggregateArgs> = {
        [P in keyof T & keyof AggregateExt_download]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExt_download[P]>
      : GetScalarType<T[P], AggregateExt_download[P]>
  }




  export type ext_downloadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ext_downloadWhereInput
    orderBy?: ext_downloadOrderByWithAggregationInput | ext_downloadOrderByWithAggregationInput[]
    by: Ext_downloadScalarFieldEnum[] | Ext_downloadScalarFieldEnum
    having?: ext_downloadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ext_downloadCountAggregateInputType | true
    _avg?: Ext_downloadAvgAggregateInputType
    _sum?: Ext_downloadSumAggregateInputType
    _min?: Ext_downloadMinAggregateInputType
    _max?: Ext_downloadMaxAggregateInputType
  }

  export type Ext_downloadGroupByOutputType = {
    id: number
    aid: number
    fileName: string | null
    fileVersion: string | null
    fileLink: string | null
    test1: string | null
    _count: Ext_downloadCountAggregateOutputType | null
    _avg: Ext_downloadAvgAggregateOutputType | null
    _sum: Ext_downloadSumAggregateOutputType | null
    _min: Ext_downloadMinAggregateOutputType | null
    _max: Ext_downloadMaxAggregateOutputType | null
  }

  type GetExt_downloadGroupByPayload<T extends ext_downloadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ext_downloadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ext_downloadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ext_downloadGroupByOutputType[P]>
            : GetScalarType<T[P], Ext_downloadGroupByOutputType[P]>
        }
      >
    >


  export type ext_downloadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aid?: boolean
    fileName?: boolean
    fileVersion?: boolean
    fileLink?: boolean
    test1?: boolean
  }, ExtArgs["result"]["ext_download"]>



  export type ext_downloadSelectScalar = {
    id?: boolean
    aid?: boolean
    fileName?: boolean
    fileVersion?: boolean
    fileLink?: boolean
    test1?: boolean
  }

  export type ext_downloadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "aid" | "fileName" | "fileVersion" | "fileLink" | "test1", ExtArgs["result"]["ext_download"]>

  export type $ext_downloadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ext_download"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      aid: number
      fileName: string | null
      fileVersion: string | null
      fileLink: string | null
      test1: string | null
    }, ExtArgs["result"]["ext_download"]>
    composites: {}
  }

  type ext_downloadGetPayload<S extends boolean | null | undefined | ext_downloadDefaultArgs> = $Result.GetResult<Prisma.$ext_downloadPayload, S>

  type ext_downloadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ext_downloadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ext_downloadCountAggregateInputType | true
    }

  export interface ext_downloadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ext_download'], meta: { name: 'ext_download' } }
    /**
     * Find zero or one Ext_download that matches the filter.
     * @param {ext_downloadFindUniqueArgs} args - Arguments to find a Ext_download
     * @example
     * // Get one Ext_download
     * const ext_download = await prisma.ext_download.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ext_downloadFindUniqueArgs>(args: SelectSubset<T, ext_downloadFindUniqueArgs<ExtArgs>>): Prisma__ext_downloadClient<$Result.GetResult<Prisma.$ext_downloadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ext_download that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ext_downloadFindUniqueOrThrowArgs} args - Arguments to find a Ext_download
     * @example
     * // Get one Ext_download
     * const ext_download = await prisma.ext_download.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ext_downloadFindUniqueOrThrowArgs>(args: SelectSubset<T, ext_downloadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ext_downloadClient<$Result.GetResult<Prisma.$ext_downloadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ext_download that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ext_downloadFindFirstArgs} args - Arguments to find a Ext_download
     * @example
     * // Get one Ext_download
     * const ext_download = await prisma.ext_download.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ext_downloadFindFirstArgs>(args?: SelectSubset<T, ext_downloadFindFirstArgs<ExtArgs>>): Prisma__ext_downloadClient<$Result.GetResult<Prisma.$ext_downloadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ext_download that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ext_downloadFindFirstOrThrowArgs} args - Arguments to find a Ext_download
     * @example
     * // Get one Ext_download
     * const ext_download = await prisma.ext_download.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ext_downloadFindFirstOrThrowArgs>(args?: SelectSubset<T, ext_downloadFindFirstOrThrowArgs<ExtArgs>>): Prisma__ext_downloadClient<$Result.GetResult<Prisma.$ext_downloadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ext_downloads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ext_downloadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ext_downloads
     * const ext_downloads = await prisma.ext_download.findMany()
     * 
     * // Get first 10 Ext_downloads
     * const ext_downloads = await prisma.ext_download.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ext_downloadWithIdOnly = await prisma.ext_download.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ext_downloadFindManyArgs>(args?: SelectSubset<T, ext_downloadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ext_downloadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ext_download.
     * @param {ext_downloadCreateArgs} args - Arguments to create a Ext_download.
     * @example
     * // Create one Ext_download
     * const Ext_download = await prisma.ext_download.create({
     *   data: {
     *     // ... data to create a Ext_download
     *   }
     * })
     * 
     */
    create<T extends ext_downloadCreateArgs>(args: SelectSubset<T, ext_downloadCreateArgs<ExtArgs>>): Prisma__ext_downloadClient<$Result.GetResult<Prisma.$ext_downloadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ext_downloads.
     * @param {ext_downloadCreateManyArgs} args - Arguments to create many Ext_downloads.
     * @example
     * // Create many Ext_downloads
     * const ext_download = await prisma.ext_download.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ext_downloadCreateManyArgs>(args?: SelectSubset<T, ext_downloadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ext_download.
     * @param {ext_downloadDeleteArgs} args - Arguments to delete one Ext_download.
     * @example
     * // Delete one Ext_download
     * const Ext_download = await prisma.ext_download.delete({
     *   where: {
     *     // ... filter to delete one Ext_download
     *   }
     * })
     * 
     */
    delete<T extends ext_downloadDeleteArgs>(args: SelectSubset<T, ext_downloadDeleteArgs<ExtArgs>>): Prisma__ext_downloadClient<$Result.GetResult<Prisma.$ext_downloadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ext_download.
     * @param {ext_downloadUpdateArgs} args - Arguments to update one Ext_download.
     * @example
     * // Update one Ext_download
     * const ext_download = await prisma.ext_download.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ext_downloadUpdateArgs>(args: SelectSubset<T, ext_downloadUpdateArgs<ExtArgs>>): Prisma__ext_downloadClient<$Result.GetResult<Prisma.$ext_downloadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ext_downloads.
     * @param {ext_downloadDeleteManyArgs} args - Arguments to filter Ext_downloads to delete.
     * @example
     * // Delete a few Ext_downloads
     * const { count } = await prisma.ext_download.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ext_downloadDeleteManyArgs>(args?: SelectSubset<T, ext_downloadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ext_downloads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ext_downloadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ext_downloads
     * const ext_download = await prisma.ext_download.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ext_downloadUpdateManyArgs>(args: SelectSubset<T, ext_downloadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ext_download.
     * @param {ext_downloadUpsertArgs} args - Arguments to update or create a Ext_download.
     * @example
     * // Update or create a Ext_download
     * const ext_download = await prisma.ext_download.upsert({
     *   create: {
     *     // ... data to create a Ext_download
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ext_download we want to update
     *   }
     * })
     */
    upsert<T extends ext_downloadUpsertArgs>(args: SelectSubset<T, ext_downloadUpsertArgs<ExtArgs>>): Prisma__ext_downloadClient<$Result.GetResult<Prisma.$ext_downloadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ext_downloads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ext_downloadCountArgs} args - Arguments to filter Ext_downloads to count.
     * @example
     * // Count the number of Ext_downloads
     * const count = await prisma.ext_download.count({
     *   where: {
     *     // ... the filter for the Ext_downloads we want to count
     *   }
     * })
    **/
    count<T extends ext_downloadCountArgs>(
      args?: Subset<T, ext_downloadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ext_downloadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ext_download.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ext_downloadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ext_downloadAggregateArgs>(args: Subset<T, Ext_downloadAggregateArgs>): Prisma.PrismaPromise<GetExt_downloadAggregateType<T>>

    /**
     * Group by Ext_download.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ext_downloadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ext_downloadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ext_downloadGroupByArgs['orderBy'] }
        : { orderBy?: ext_downloadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ext_downloadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExt_downloadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ext_download model
   */
  readonly fields: ext_downloadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ext_download.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ext_downloadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ext_download model
   */
  interface ext_downloadFieldRefs {
    readonly id: FieldRef<"ext_download", 'Int'>
    readonly aid: FieldRef<"ext_download", 'Int'>
    readonly fileName: FieldRef<"ext_download", 'String'>
    readonly fileVersion: FieldRef<"ext_download", 'String'>
    readonly fileLink: FieldRef<"ext_download", 'String'>
    readonly test1: FieldRef<"ext_download", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ext_download findUnique
   */
  export type ext_downloadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ext_download
     */
    select?: ext_downloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ext_download
     */
    omit?: ext_downloadOmit<ExtArgs> | null
    /**
     * Filter, which ext_download to fetch.
     */
    where: ext_downloadWhereUniqueInput
  }

  /**
   * ext_download findUniqueOrThrow
   */
  export type ext_downloadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ext_download
     */
    select?: ext_downloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ext_download
     */
    omit?: ext_downloadOmit<ExtArgs> | null
    /**
     * Filter, which ext_download to fetch.
     */
    where: ext_downloadWhereUniqueInput
  }

  /**
   * ext_download findFirst
   */
  export type ext_downloadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ext_download
     */
    select?: ext_downloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ext_download
     */
    omit?: ext_downloadOmit<ExtArgs> | null
    /**
     * Filter, which ext_download to fetch.
     */
    where?: ext_downloadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ext_downloads to fetch.
     */
    orderBy?: ext_downloadOrderByWithRelationInput | ext_downloadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ext_downloads.
     */
    cursor?: ext_downloadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ext_downloads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ext_downloads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ext_downloads.
     */
    distinct?: Ext_downloadScalarFieldEnum | Ext_downloadScalarFieldEnum[]
  }

  /**
   * ext_download findFirstOrThrow
   */
  export type ext_downloadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ext_download
     */
    select?: ext_downloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ext_download
     */
    omit?: ext_downloadOmit<ExtArgs> | null
    /**
     * Filter, which ext_download to fetch.
     */
    where?: ext_downloadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ext_downloads to fetch.
     */
    orderBy?: ext_downloadOrderByWithRelationInput | ext_downloadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ext_downloads.
     */
    cursor?: ext_downloadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ext_downloads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ext_downloads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ext_downloads.
     */
    distinct?: Ext_downloadScalarFieldEnum | Ext_downloadScalarFieldEnum[]
  }

  /**
   * ext_download findMany
   */
  export type ext_downloadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ext_download
     */
    select?: ext_downloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ext_download
     */
    omit?: ext_downloadOmit<ExtArgs> | null
    /**
     * Filter, which ext_downloads to fetch.
     */
    where?: ext_downloadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ext_downloads to fetch.
     */
    orderBy?: ext_downloadOrderByWithRelationInput | ext_downloadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ext_downloads.
     */
    cursor?: ext_downloadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ext_downloads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ext_downloads.
     */
    skip?: number
    distinct?: Ext_downloadScalarFieldEnum | Ext_downloadScalarFieldEnum[]
  }

  /**
   * ext_download create
   */
  export type ext_downloadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ext_download
     */
    select?: ext_downloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ext_download
     */
    omit?: ext_downloadOmit<ExtArgs> | null
    /**
     * The data needed to create a ext_download.
     */
    data: XOR<ext_downloadCreateInput, ext_downloadUncheckedCreateInput>
  }

  /**
   * ext_download createMany
   */
  export type ext_downloadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ext_downloads.
     */
    data: ext_downloadCreateManyInput | ext_downloadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ext_download update
   */
  export type ext_downloadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ext_download
     */
    select?: ext_downloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ext_download
     */
    omit?: ext_downloadOmit<ExtArgs> | null
    /**
     * The data needed to update a ext_download.
     */
    data: XOR<ext_downloadUpdateInput, ext_downloadUncheckedUpdateInput>
    /**
     * Choose, which ext_download to update.
     */
    where: ext_downloadWhereUniqueInput
  }

  /**
   * ext_download updateMany
   */
  export type ext_downloadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ext_downloads.
     */
    data: XOR<ext_downloadUpdateManyMutationInput, ext_downloadUncheckedUpdateManyInput>
    /**
     * Filter which ext_downloads to update
     */
    where?: ext_downloadWhereInput
    /**
     * Limit how many ext_downloads to update.
     */
    limit?: number
  }

  /**
   * ext_download upsert
   */
  export type ext_downloadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ext_download
     */
    select?: ext_downloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ext_download
     */
    omit?: ext_downloadOmit<ExtArgs> | null
    /**
     * The filter to search for the ext_download to update in case it exists.
     */
    where: ext_downloadWhereUniqueInput
    /**
     * In case the ext_download found by the `where` argument doesn't exist, create a new ext_download with this data.
     */
    create: XOR<ext_downloadCreateInput, ext_downloadUncheckedCreateInput>
    /**
     * In case the ext_download was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ext_downloadUpdateInput, ext_downloadUncheckedUpdateInput>
  }

  /**
   * ext_download delete
   */
  export type ext_downloadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ext_download
     */
    select?: ext_downloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ext_download
     */
    omit?: ext_downloadOmit<ExtArgs> | null
    /**
     * Filter which ext_download to delete.
     */
    where: ext_downloadWhereUniqueInput
  }

  /**
   * ext_download deleteMany
   */
  export type ext_downloadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ext_downloads to delete
     */
    where?: ext_downloadWhereInput
    /**
     * Limit how many ext_downloads to delete.
     */
    limit?: number
  }

  /**
   * ext_download without action
   */
  export type ext_downloadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ext_download
     */
    select?: ext_downloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ext_download
     */
    omit?: ext_downloadOmit<ExtArgs> | null
  }


  /**
   * Model ext_lanhua
   */

  export type AggregateExt_lanhua = {
    _count: Ext_lanhuaCountAggregateOutputType | null
    _avg: Ext_lanhuaAvgAggregateOutputType | null
    _sum: Ext_lanhuaSumAggregateOutputType | null
    _min: Ext_lanhuaMinAggregateOutputType | null
    _max: Ext_lanhuaMaxAggregateOutputType | null
  }

  export type Ext_lanhuaAvgAggregateOutputType = {
    id: number | null
    aid: number | null
  }

  export type Ext_lanhuaSumAggregateOutputType = {
    id: number | null
    aid: number | null
  }

  export type Ext_lanhuaMinAggregateOutputType = {
    id: number | null
    aid: number | null
    lanName: string | null
    lanFenlei: string | null
    lanType: string | null
  }

  export type Ext_lanhuaMaxAggregateOutputType = {
    id: number | null
    aid: number | null
    lanName: string | null
    lanFenlei: string | null
    lanType: string | null
  }

  export type Ext_lanhuaCountAggregateOutputType = {
    id: number
    aid: number
    lanName: number
    lanFenlei: number
    lanType: number
    _all: number
  }


  export type Ext_lanhuaAvgAggregateInputType = {
    id?: true
    aid?: true
  }

  export type Ext_lanhuaSumAggregateInputType = {
    id?: true
    aid?: true
  }

  export type Ext_lanhuaMinAggregateInputType = {
    id?: true
    aid?: true
    lanName?: true
    lanFenlei?: true
    lanType?: true
  }

  export type Ext_lanhuaMaxAggregateInputType = {
    id?: true
    aid?: true
    lanName?: true
    lanFenlei?: true
    lanType?: true
  }

  export type Ext_lanhuaCountAggregateInputType = {
    id?: true
    aid?: true
    lanName?: true
    lanFenlei?: true
    lanType?: true
    _all?: true
  }

  export type Ext_lanhuaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ext_lanhua to aggregate.
     */
    where?: ext_lanhuaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ext_lanhuas to fetch.
     */
    orderBy?: ext_lanhuaOrderByWithRelationInput | ext_lanhuaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ext_lanhuaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ext_lanhuas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ext_lanhuas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ext_lanhuas
    **/
    _count?: true | Ext_lanhuaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ext_lanhuaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ext_lanhuaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ext_lanhuaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ext_lanhuaMaxAggregateInputType
  }

  export type GetExt_lanhuaAggregateType<T extends Ext_lanhuaAggregateArgs> = {
        [P in keyof T & keyof AggregateExt_lanhua]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExt_lanhua[P]>
      : GetScalarType<T[P], AggregateExt_lanhua[P]>
  }




  export type ext_lanhuaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ext_lanhuaWhereInput
    orderBy?: ext_lanhuaOrderByWithAggregationInput | ext_lanhuaOrderByWithAggregationInput[]
    by: Ext_lanhuaScalarFieldEnum[] | Ext_lanhuaScalarFieldEnum
    having?: ext_lanhuaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ext_lanhuaCountAggregateInputType | true
    _avg?: Ext_lanhuaAvgAggregateInputType
    _sum?: Ext_lanhuaSumAggregateInputType
    _min?: Ext_lanhuaMinAggregateInputType
    _max?: Ext_lanhuaMaxAggregateInputType
  }

  export type Ext_lanhuaGroupByOutputType = {
    id: number
    aid: number
    lanName: string | null
    lanFenlei: string | null
    lanType: string | null
    _count: Ext_lanhuaCountAggregateOutputType | null
    _avg: Ext_lanhuaAvgAggregateOutputType | null
    _sum: Ext_lanhuaSumAggregateOutputType | null
    _min: Ext_lanhuaMinAggregateOutputType | null
    _max: Ext_lanhuaMaxAggregateOutputType | null
  }

  type GetExt_lanhuaGroupByPayload<T extends ext_lanhuaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ext_lanhuaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ext_lanhuaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ext_lanhuaGroupByOutputType[P]>
            : GetScalarType<T[P], Ext_lanhuaGroupByOutputType[P]>
        }
      >
    >


  export type ext_lanhuaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aid?: boolean
    lanName?: boolean
    lanFenlei?: boolean
    lanType?: boolean
  }, ExtArgs["result"]["ext_lanhua"]>



  export type ext_lanhuaSelectScalar = {
    id?: boolean
    aid?: boolean
    lanName?: boolean
    lanFenlei?: boolean
    lanType?: boolean
  }

  export type ext_lanhuaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "aid" | "lanName" | "lanFenlei" | "lanType", ExtArgs["result"]["ext_lanhua"]>

  export type $ext_lanhuaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ext_lanhua"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      aid: number
      lanName: string | null
      lanFenlei: string | null
      lanType: string | null
    }, ExtArgs["result"]["ext_lanhua"]>
    composites: {}
  }

  type ext_lanhuaGetPayload<S extends boolean | null | undefined | ext_lanhuaDefaultArgs> = $Result.GetResult<Prisma.$ext_lanhuaPayload, S>

  type ext_lanhuaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ext_lanhuaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ext_lanhuaCountAggregateInputType | true
    }

  export interface ext_lanhuaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ext_lanhua'], meta: { name: 'ext_lanhua' } }
    /**
     * Find zero or one Ext_lanhua that matches the filter.
     * @param {ext_lanhuaFindUniqueArgs} args - Arguments to find a Ext_lanhua
     * @example
     * // Get one Ext_lanhua
     * const ext_lanhua = await prisma.ext_lanhua.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ext_lanhuaFindUniqueArgs>(args: SelectSubset<T, ext_lanhuaFindUniqueArgs<ExtArgs>>): Prisma__ext_lanhuaClient<$Result.GetResult<Prisma.$ext_lanhuaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ext_lanhua that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ext_lanhuaFindUniqueOrThrowArgs} args - Arguments to find a Ext_lanhua
     * @example
     * // Get one Ext_lanhua
     * const ext_lanhua = await prisma.ext_lanhua.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ext_lanhuaFindUniqueOrThrowArgs>(args: SelectSubset<T, ext_lanhuaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ext_lanhuaClient<$Result.GetResult<Prisma.$ext_lanhuaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ext_lanhua that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ext_lanhuaFindFirstArgs} args - Arguments to find a Ext_lanhua
     * @example
     * // Get one Ext_lanhua
     * const ext_lanhua = await prisma.ext_lanhua.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ext_lanhuaFindFirstArgs>(args?: SelectSubset<T, ext_lanhuaFindFirstArgs<ExtArgs>>): Prisma__ext_lanhuaClient<$Result.GetResult<Prisma.$ext_lanhuaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ext_lanhua that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ext_lanhuaFindFirstOrThrowArgs} args - Arguments to find a Ext_lanhua
     * @example
     * // Get one Ext_lanhua
     * const ext_lanhua = await prisma.ext_lanhua.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ext_lanhuaFindFirstOrThrowArgs>(args?: SelectSubset<T, ext_lanhuaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ext_lanhuaClient<$Result.GetResult<Prisma.$ext_lanhuaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ext_lanhuas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ext_lanhuaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ext_lanhuas
     * const ext_lanhuas = await prisma.ext_lanhua.findMany()
     * 
     * // Get first 10 Ext_lanhuas
     * const ext_lanhuas = await prisma.ext_lanhua.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ext_lanhuaWithIdOnly = await prisma.ext_lanhua.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ext_lanhuaFindManyArgs>(args?: SelectSubset<T, ext_lanhuaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ext_lanhuaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ext_lanhua.
     * @param {ext_lanhuaCreateArgs} args - Arguments to create a Ext_lanhua.
     * @example
     * // Create one Ext_lanhua
     * const Ext_lanhua = await prisma.ext_lanhua.create({
     *   data: {
     *     // ... data to create a Ext_lanhua
     *   }
     * })
     * 
     */
    create<T extends ext_lanhuaCreateArgs>(args: SelectSubset<T, ext_lanhuaCreateArgs<ExtArgs>>): Prisma__ext_lanhuaClient<$Result.GetResult<Prisma.$ext_lanhuaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ext_lanhuas.
     * @param {ext_lanhuaCreateManyArgs} args - Arguments to create many Ext_lanhuas.
     * @example
     * // Create many Ext_lanhuas
     * const ext_lanhua = await prisma.ext_lanhua.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ext_lanhuaCreateManyArgs>(args?: SelectSubset<T, ext_lanhuaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ext_lanhua.
     * @param {ext_lanhuaDeleteArgs} args - Arguments to delete one Ext_lanhua.
     * @example
     * // Delete one Ext_lanhua
     * const Ext_lanhua = await prisma.ext_lanhua.delete({
     *   where: {
     *     // ... filter to delete one Ext_lanhua
     *   }
     * })
     * 
     */
    delete<T extends ext_lanhuaDeleteArgs>(args: SelectSubset<T, ext_lanhuaDeleteArgs<ExtArgs>>): Prisma__ext_lanhuaClient<$Result.GetResult<Prisma.$ext_lanhuaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ext_lanhua.
     * @param {ext_lanhuaUpdateArgs} args - Arguments to update one Ext_lanhua.
     * @example
     * // Update one Ext_lanhua
     * const ext_lanhua = await prisma.ext_lanhua.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ext_lanhuaUpdateArgs>(args: SelectSubset<T, ext_lanhuaUpdateArgs<ExtArgs>>): Prisma__ext_lanhuaClient<$Result.GetResult<Prisma.$ext_lanhuaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ext_lanhuas.
     * @param {ext_lanhuaDeleteManyArgs} args - Arguments to filter Ext_lanhuas to delete.
     * @example
     * // Delete a few Ext_lanhuas
     * const { count } = await prisma.ext_lanhua.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ext_lanhuaDeleteManyArgs>(args?: SelectSubset<T, ext_lanhuaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ext_lanhuas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ext_lanhuaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ext_lanhuas
     * const ext_lanhua = await prisma.ext_lanhua.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ext_lanhuaUpdateManyArgs>(args: SelectSubset<T, ext_lanhuaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ext_lanhua.
     * @param {ext_lanhuaUpsertArgs} args - Arguments to update or create a Ext_lanhua.
     * @example
     * // Update or create a Ext_lanhua
     * const ext_lanhua = await prisma.ext_lanhua.upsert({
     *   create: {
     *     // ... data to create a Ext_lanhua
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ext_lanhua we want to update
     *   }
     * })
     */
    upsert<T extends ext_lanhuaUpsertArgs>(args: SelectSubset<T, ext_lanhuaUpsertArgs<ExtArgs>>): Prisma__ext_lanhuaClient<$Result.GetResult<Prisma.$ext_lanhuaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ext_lanhuas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ext_lanhuaCountArgs} args - Arguments to filter Ext_lanhuas to count.
     * @example
     * // Count the number of Ext_lanhuas
     * const count = await prisma.ext_lanhua.count({
     *   where: {
     *     // ... the filter for the Ext_lanhuas we want to count
     *   }
     * })
    **/
    count<T extends ext_lanhuaCountArgs>(
      args?: Subset<T, ext_lanhuaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ext_lanhuaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ext_lanhua.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ext_lanhuaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ext_lanhuaAggregateArgs>(args: Subset<T, Ext_lanhuaAggregateArgs>): Prisma.PrismaPromise<GetExt_lanhuaAggregateType<T>>

    /**
     * Group by Ext_lanhua.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ext_lanhuaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ext_lanhuaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ext_lanhuaGroupByArgs['orderBy'] }
        : { orderBy?: ext_lanhuaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ext_lanhuaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExt_lanhuaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ext_lanhua model
   */
  readonly fields: ext_lanhuaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ext_lanhua.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ext_lanhuaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ext_lanhua model
   */
  interface ext_lanhuaFieldRefs {
    readonly id: FieldRef<"ext_lanhua", 'Int'>
    readonly aid: FieldRef<"ext_lanhua", 'Int'>
    readonly lanName: FieldRef<"ext_lanhua", 'String'>
    readonly lanFenlei: FieldRef<"ext_lanhua", 'String'>
    readonly lanType: FieldRef<"ext_lanhua", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ext_lanhua findUnique
   */
  export type ext_lanhuaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ext_lanhua
     */
    select?: ext_lanhuaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ext_lanhua
     */
    omit?: ext_lanhuaOmit<ExtArgs> | null
    /**
     * Filter, which ext_lanhua to fetch.
     */
    where: ext_lanhuaWhereUniqueInput
  }

  /**
   * ext_lanhua findUniqueOrThrow
   */
  export type ext_lanhuaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ext_lanhua
     */
    select?: ext_lanhuaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ext_lanhua
     */
    omit?: ext_lanhuaOmit<ExtArgs> | null
    /**
     * Filter, which ext_lanhua to fetch.
     */
    where: ext_lanhuaWhereUniqueInput
  }

  /**
   * ext_lanhua findFirst
   */
  export type ext_lanhuaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ext_lanhua
     */
    select?: ext_lanhuaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ext_lanhua
     */
    omit?: ext_lanhuaOmit<ExtArgs> | null
    /**
     * Filter, which ext_lanhua to fetch.
     */
    where?: ext_lanhuaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ext_lanhuas to fetch.
     */
    orderBy?: ext_lanhuaOrderByWithRelationInput | ext_lanhuaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ext_lanhuas.
     */
    cursor?: ext_lanhuaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ext_lanhuas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ext_lanhuas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ext_lanhuas.
     */
    distinct?: Ext_lanhuaScalarFieldEnum | Ext_lanhuaScalarFieldEnum[]
  }

  /**
   * ext_lanhua findFirstOrThrow
   */
  export type ext_lanhuaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ext_lanhua
     */
    select?: ext_lanhuaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ext_lanhua
     */
    omit?: ext_lanhuaOmit<ExtArgs> | null
    /**
     * Filter, which ext_lanhua to fetch.
     */
    where?: ext_lanhuaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ext_lanhuas to fetch.
     */
    orderBy?: ext_lanhuaOrderByWithRelationInput | ext_lanhuaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ext_lanhuas.
     */
    cursor?: ext_lanhuaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ext_lanhuas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ext_lanhuas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ext_lanhuas.
     */
    distinct?: Ext_lanhuaScalarFieldEnum | Ext_lanhuaScalarFieldEnum[]
  }

  /**
   * ext_lanhua findMany
   */
  export type ext_lanhuaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ext_lanhua
     */
    select?: ext_lanhuaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ext_lanhua
     */
    omit?: ext_lanhuaOmit<ExtArgs> | null
    /**
     * Filter, which ext_lanhuas to fetch.
     */
    where?: ext_lanhuaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ext_lanhuas to fetch.
     */
    orderBy?: ext_lanhuaOrderByWithRelationInput | ext_lanhuaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ext_lanhuas.
     */
    cursor?: ext_lanhuaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ext_lanhuas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ext_lanhuas.
     */
    skip?: number
    distinct?: Ext_lanhuaScalarFieldEnum | Ext_lanhuaScalarFieldEnum[]
  }

  /**
   * ext_lanhua create
   */
  export type ext_lanhuaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ext_lanhua
     */
    select?: ext_lanhuaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ext_lanhua
     */
    omit?: ext_lanhuaOmit<ExtArgs> | null
    /**
     * The data needed to create a ext_lanhua.
     */
    data: XOR<ext_lanhuaCreateInput, ext_lanhuaUncheckedCreateInput>
  }

  /**
   * ext_lanhua createMany
   */
  export type ext_lanhuaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ext_lanhuas.
     */
    data: ext_lanhuaCreateManyInput | ext_lanhuaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ext_lanhua update
   */
  export type ext_lanhuaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ext_lanhua
     */
    select?: ext_lanhuaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ext_lanhua
     */
    omit?: ext_lanhuaOmit<ExtArgs> | null
    /**
     * The data needed to update a ext_lanhua.
     */
    data: XOR<ext_lanhuaUpdateInput, ext_lanhuaUncheckedUpdateInput>
    /**
     * Choose, which ext_lanhua to update.
     */
    where: ext_lanhuaWhereUniqueInput
  }

  /**
   * ext_lanhua updateMany
   */
  export type ext_lanhuaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ext_lanhuas.
     */
    data: XOR<ext_lanhuaUpdateManyMutationInput, ext_lanhuaUncheckedUpdateManyInput>
    /**
     * Filter which ext_lanhuas to update
     */
    where?: ext_lanhuaWhereInput
    /**
     * Limit how many ext_lanhuas to update.
     */
    limit?: number
  }

  /**
   * ext_lanhua upsert
   */
  export type ext_lanhuaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ext_lanhua
     */
    select?: ext_lanhuaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ext_lanhua
     */
    omit?: ext_lanhuaOmit<ExtArgs> | null
    /**
     * The filter to search for the ext_lanhua to update in case it exists.
     */
    where: ext_lanhuaWhereUniqueInput
    /**
     * In case the ext_lanhua found by the `where` argument doesn't exist, create a new ext_lanhua with this data.
     */
    create: XOR<ext_lanhuaCreateInput, ext_lanhuaUncheckedCreateInput>
    /**
     * In case the ext_lanhua was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ext_lanhuaUpdateInput, ext_lanhuaUncheckedUpdateInput>
  }

  /**
   * ext_lanhua delete
   */
  export type ext_lanhuaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ext_lanhua
     */
    select?: ext_lanhuaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ext_lanhua
     */
    omit?: ext_lanhuaOmit<ExtArgs> | null
    /**
     * Filter which ext_lanhua to delete.
     */
    where: ext_lanhuaWhereUniqueInput
  }

  /**
   * ext_lanhua deleteMany
   */
  export type ext_lanhuaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ext_lanhuas to delete
     */
    where?: ext_lanhuaWhereInput
    /**
     * Limit how many ext_lanhuas to delete.
     */
    limit?: number
  }

  /**
   * ext_lanhua without action
   */
  export type ext_lanhuaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ext_lanhua
     */
    select?: ext_lanhuaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ext_lanhua
     */
    omit?: ext_lanhuaOmit<ExtArgs> | null
  }


  /**
   * Model plus_collect
   */

  export type AggregatePlus_collect = {
    _count: Plus_collectCountAggregateOutputType | null
    _avg: Plus_collectAvgAggregateOutputType | null
    _sum: Plus_collectSumAggregateOutputType | null
    _min: Plus_collectMinAggregateOutputType | null
    _max: Plus_collectMaxAggregateOutputType | null
  }

  export type Plus_collectAvgAggregateOutputType = {
    id: number | null
    startNum: number | null
    endNum: number | null
    cid: number | null
  }

  export type Plus_collectSumAggregateOutputType = {
    id: number | null
    startNum: number | null
    endNum: number | null
    cid: number | null
  }

  export type Plus_collectMinAggregateOutputType = {
    id: number | null
    taskName: string | null
    targetUrl: string | null
    listTag: string | null
    startNum: number | null
    endNum: number | null
    increment: string | null
    titleTag: string | null
    articleTag: string | null
    charset: string | null
    pages: string | null
    parseData: string | null
    cid: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Plus_collectMaxAggregateOutputType = {
    id: number | null
    taskName: string | null
    targetUrl: string | null
    listTag: string | null
    startNum: number | null
    endNum: number | null
    increment: string | null
    titleTag: string | null
    articleTag: string | null
    charset: string | null
    pages: string | null
    parseData: string | null
    cid: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Plus_collectCountAggregateOutputType = {
    id: number
    taskName: number
    targetUrl: number
    listTag: number
    startNum: number
    endNum: number
    increment: number
    titleTag: number
    articleTag: number
    charset: number
    pages: number
    parseData: number
    cid: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Plus_collectAvgAggregateInputType = {
    id?: true
    startNum?: true
    endNum?: true
    cid?: true
  }

  export type Plus_collectSumAggregateInputType = {
    id?: true
    startNum?: true
    endNum?: true
    cid?: true
  }

  export type Plus_collectMinAggregateInputType = {
    id?: true
    taskName?: true
    targetUrl?: true
    listTag?: true
    startNum?: true
    endNum?: true
    increment?: true
    titleTag?: true
    articleTag?: true
    charset?: true
    pages?: true
    parseData?: true
    cid?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Plus_collectMaxAggregateInputType = {
    id?: true
    taskName?: true
    targetUrl?: true
    listTag?: true
    startNum?: true
    endNum?: true
    increment?: true
    titleTag?: true
    articleTag?: true
    charset?: true
    pages?: true
    parseData?: true
    cid?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Plus_collectCountAggregateInputType = {
    id?: true
    taskName?: true
    targetUrl?: true
    listTag?: true
    startNum?: true
    endNum?: true
    increment?: true
    titleTag?: true
    articleTag?: true
    charset?: true
    pages?: true
    parseData?: true
    cid?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Plus_collectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which plus_collect to aggregate.
     */
    where?: plus_collectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plus_collects to fetch.
     */
    orderBy?: plus_collectOrderByWithRelationInput | plus_collectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: plus_collectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plus_collects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plus_collects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned plus_collects
    **/
    _count?: true | Plus_collectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Plus_collectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Plus_collectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Plus_collectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Plus_collectMaxAggregateInputType
  }

  export type GetPlus_collectAggregateType<T extends Plus_collectAggregateArgs> = {
        [P in keyof T & keyof AggregatePlus_collect]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlus_collect[P]>
      : GetScalarType<T[P], AggregatePlus_collect[P]>
  }




  export type plus_collectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: plus_collectWhereInput
    orderBy?: plus_collectOrderByWithAggregationInput | plus_collectOrderByWithAggregationInput[]
    by: Plus_collectScalarFieldEnum[] | Plus_collectScalarFieldEnum
    having?: plus_collectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Plus_collectCountAggregateInputType | true
    _avg?: Plus_collectAvgAggregateInputType
    _sum?: Plus_collectSumAggregateInputType
    _min?: Plus_collectMinAggregateInputType
    _max?: Plus_collectMaxAggregateInputType
  }

  export type Plus_collectGroupByOutputType = {
    id: number
    taskName: string | null
    targetUrl: string | null
    listTag: string | null
    startNum: number | null
    endNum: number | null
    increment: string | null
    titleTag: string | null
    articleTag: string | null
    charset: string | null
    pages: string | null
    parseData: string | null
    cid: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: Plus_collectCountAggregateOutputType | null
    _avg: Plus_collectAvgAggregateOutputType | null
    _sum: Plus_collectSumAggregateOutputType | null
    _min: Plus_collectMinAggregateOutputType | null
    _max: Plus_collectMaxAggregateOutputType | null
  }

  type GetPlus_collectGroupByPayload<T extends plus_collectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Plus_collectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Plus_collectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Plus_collectGroupByOutputType[P]>
            : GetScalarType<T[P], Plus_collectGroupByOutputType[P]>
        }
      >
    >


  export type plus_collectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskName?: boolean
    targetUrl?: boolean
    listTag?: boolean
    startNum?: boolean
    endNum?: boolean
    increment?: boolean
    titleTag?: boolean
    articleTag?: boolean
    charset?: boolean
    pages?: boolean
    parseData?: boolean
    cid?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["plus_collect"]>



  export type plus_collectSelectScalar = {
    id?: boolean
    taskName?: boolean
    targetUrl?: boolean
    listTag?: boolean
    startNum?: boolean
    endNum?: boolean
    increment?: boolean
    titleTag?: boolean
    articleTag?: boolean
    charset?: boolean
    pages?: boolean
    parseData?: boolean
    cid?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type plus_collectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskName" | "targetUrl" | "listTag" | "startNum" | "endNum" | "increment" | "titleTag" | "articleTag" | "charset" | "pages" | "parseData" | "cid" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["plus_collect"]>

  export type $plus_collectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "plus_collect"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      taskName: string | null
      targetUrl: string | null
      listTag: string | null
      startNum: number | null
      endNum: number | null
      increment: string | null
      titleTag: string | null
      articleTag: string | null
      charset: string | null
      pages: string | null
      parseData: string | null
      cid: number | null
      status: string | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["plus_collect"]>
    composites: {}
  }

  type plus_collectGetPayload<S extends boolean | null | undefined | plus_collectDefaultArgs> = $Result.GetResult<Prisma.$plus_collectPayload, S>

  type plus_collectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<plus_collectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Plus_collectCountAggregateInputType | true
    }

  export interface plus_collectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['plus_collect'], meta: { name: 'plus_collect' } }
    /**
     * Find zero or one Plus_collect that matches the filter.
     * @param {plus_collectFindUniqueArgs} args - Arguments to find a Plus_collect
     * @example
     * // Get one Plus_collect
     * const plus_collect = await prisma.plus_collect.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends plus_collectFindUniqueArgs>(args: SelectSubset<T, plus_collectFindUniqueArgs<ExtArgs>>): Prisma__plus_collectClient<$Result.GetResult<Prisma.$plus_collectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plus_collect that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {plus_collectFindUniqueOrThrowArgs} args - Arguments to find a Plus_collect
     * @example
     * // Get one Plus_collect
     * const plus_collect = await prisma.plus_collect.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends plus_collectFindUniqueOrThrowArgs>(args: SelectSubset<T, plus_collectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__plus_collectClient<$Result.GetResult<Prisma.$plus_collectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plus_collect that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plus_collectFindFirstArgs} args - Arguments to find a Plus_collect
     * @example
     * // Get one Plus_collect
     * const plus_collect = await prisma.plus_collect.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends plus_collectFindFirstArgs>(args?: SelectSubset<T, plus_collectFindFirstArgs<ExtArgs>>): Prisma__plus_collectClient<$Result.GetResult<Prisma.$plus_collectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plus_collect that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plus_collectFindFirstOrThrowArgs} args - Arguments to find a Plus_collect
     * @example
     * // Get one Plus_collect
     * const plus_collect = await prisma.plus_collect.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends plus_collectFindFirstOrThrowArgs>(args?: SelectSubset<T, plus_collectFindFirstOrThrowArgs<ExtArgs>>): Prisma__plus_collectClient<$Result.GetResult<Prisma.$plus_collectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plus_collects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plus_collectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plus_collects
     * const plus_collects = await prisma.plus_collect.findMany()
     * 
     * // Get first 10 Plus_collects
     * const plus_collects = await prisma.plus_collect.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plus_collectWithIdOnly = await prisma.plus_collect.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends plus_collectFindManyArgs>(args?: SelectSubset<T, plus_collectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$plus_collectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plus_collect.
     * @param {plus_collectCreateArgs} args - Arguments to create a Plus_collect.
     * @example
     * // Create one Plus_collect
     * const Plus_collect = await prisma.plus_collect.create({
     *   data: {
     *     // ... data to create a Plus_collect
     *   }
     * })
     * 
     */
    create<T extends plus_collectCreateArgs>(args: SelectSubset<T, plus_collectCreateArgs<ExtArgs>>): Prisma__plus_collectClient<$Result.GetResult<Prisma.$plus_collectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plus_collects.
     * @param {plus_collectCreateManyArgs} args - Arguments to create many Plus_collects.
     * @example
     * // Create many Plus_collects
     * const plus_collect = await prisma.plus_collect.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends plus_collectCreateManyArgs>(args?: SelectSubset<T, plus_collectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Plus_collect.
     * @param {plus_collectDeleteArgs} args - Arguments to delete one Plus_collect.
     * @example
     * // Delete one Plus_collect
     * const Plus_collect = await prisma.plus_collect.delete({
     *   where: {
     *     // ... filter to delete one Plus_collect
     *   }
     * })
     * 
     */
    delete<T extends plus_collectDeleteArgs>(args: SelectSubset<T, plus_collectDeleteArgs<ExtArgs>>): Prisma__plus_collectClient<$Result.GetResult<Prisma.$plus_collectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plus_collect.
     * @param {plus_collectUpdateArgs} args - Arguments to update one Plus_collect.
     * @example
     * // Update one Plus_collect
     * const plus_collect = await prisma.plus_collect.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends plus_collectUpdateArgs>(args: SelectSubset<T, plus_collectUpdateArgs<ExtArgs>>): Prisma__plus_collectClient<$Result.GetResult<Prisma.$plus_collectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plus_collects.
     * @param {plus_collectDeleteManyArgs} args - Arguments to filter Plus_collects to delete.
     * @example
     * // Delete a few Plus_collects
     * const { count } = await prisma.plus_collect.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends plus_collectDeleteManyArgs>(args?: SelectSubset<T, plus_collectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plus_collects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plus_collectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plus_collects
     * const plus_collect = await prisma.plus_collect.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends plus_collectUpdateManyArgs>(args: SelectSubset<T, plus_collectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plus_collect.
     * @param {plus_collectUpsertArgs} args - Arguments to update or create a Plus_collect.
     * @example
     * // Update or create a Plus_collect
     * const plus_collect = await prisma.plus_collect.upsert({
     *   create: {
     *     // ... data to create a Plus_collect
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plus_collect we want to update
     *   }
     * })
     */
    upsert<T extends plus_collectUpsertArgs>(args: SelectSubset<T, plus_collectUpsertArgs<ExtArgs>>): Prisma__plus_collectClient<$Result.GetResult<Prisma.$plus_collectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plus_collects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plus_collectCountArgs} args - Arguments to filter Plus_collects to count.
     * @example
     * // Count the number of Plus_collects
     * const count = await prisma.plus_collect.count({
     *   where: {
     *     // ... the filter for the Plus_collects we want to count
     *   }
     * })
    **/
    count<T extends plus_collectCountArgs>(
      args?: Subset<T, plus_collectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Plus_collectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plus_collect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Plus_collectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Plus_collectAggregateArgs>(args: Subset<T, Plus_collectAggregateArgs>): Prisma.PrismaPromise<GetPlus_collectAggregateType<T>>

    /**
     * Group by Plus_collect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plus_collectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends plus_collectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: plus_collectGroupByArgs['orderBy'] }
        : { orderBy?: plus_collectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, plus_collectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlus_collectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the plus_collect model
   */
  readonly fields: plus_collectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for plus_collect.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__plus_collectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the plus_collect model
   */
  interface plus_collectFieldRefs {
    readonly id: FieldRef<"plus_collect", 'Int'>
    readonly taskName: FieldRef<"plus_collect", 'String'>
    readonly targetUrl: FieldRef<"plus_collect", 'String'>
    readonly listTag: FieldRef<"plus_collect", 'String'>
    readonly startNum: FieldRef<"plus_collect", 'Int'>
    readonly endNum: FieldRef<"plus_collect", 'Int'>
    readonly increment: FieldRef<"plus_collect", 'String'>
    readonly titleTag: FieldRef<"plus_collect", 'String'>
    readonly articleTag: FieldRef<"plus_collect", 'String'>
    readonly charset: FieldRef<"plus_collect", 'String'>
    readonly pages: FieldRef<"plus_collect", 'String'>
    readonly parseData: FieldRef<"plus_collect", 'String'>
    readonly cid: FieldRef<"plus_collect", 'Int'>
    readonly status: FieldRef<"plus_collect", 'String'>
    readonly createdAt: FieldRef<"plus_collect", 'DateTime'>
    readonly updatedAt: FieldRef<"plus_collect", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * plus_collect findUnique
   */
  export type plus_collectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plus_collect
     */
    select?: plus_collectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plus_collect
     */
    omit?: plus_collectOmit<ExtArgs> | null
    /**
     * Filter, which plus_collect to fetch.
     */
    where: plus_collectWhereUniqueInput
  }

  /**
   * plus_collect findUniqueOrThrow
   */
  export type plus_collectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plus_collect
     */
    select?: plus_collectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plus_collect
     */
    omit?: plus_collectOmit<ExtArgs> | null
    /**
     * Filter, which plus_collect to fetch.
     */
    where: plus_collectWhereUniqueInput
  }

  /**
   * plus_collect findFirst
   */
  export type plus_collectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plus_collect
     */
    select?: plus_collectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plus_collect
     */
    omit?: plus_collectOmit<ExtArgs> | null
    /**
     * Filter, which plus_collect to fetch.
     */
    where?: plus_collectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plus_collects to fetch.
     */
    orderBy?: plus_collectOrderByWithRelationInput | plus_collectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for plus_collects.
     */
    cursor?: plus_collectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plus_collects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plus_collects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of plus_collects.
     */
    distinct?: Plus_collectScalarFieldEnum | Plus_collectScalarFieldEnum[]
  }

  /**
   * plus_collect findFirstOrThrow
   */
  export type plus_collectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plus_collect
     */
    select?: plus_collectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plus_collect
     */
    omit?: plus_collectOmit<ExtArgs> | null
    /**
     * Filter, which plus_collect to fetch.
     */
    where?: plus_collectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plus_collects to fetch.
     */
    orderBy?: plus_collectOrderByWithRelationInput | plus_collectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for plus_collects.
     */
    cursor?: plus_collectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plus_collects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plus_collects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of plus_collects.
     */
    distinct?: Plus_collectScalarFieldEnum | Plus_collectScalarFieldEnum[]
  }

  /**
   * plus_collect findMany
   */
  export type plus_collectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plus_collect
     */
    select?: plus_collectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plus_collect
     */
    omit?: plus_collectOmit<ExtArgs> | null
    /**
     * Filter, which plus_collects to fetch.
     */
    where?: plus_collectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plus_collects to fetch.
     */
    orderBy?: plus_collectOrderByWithRelationInput | plus_collectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing plus_collects.
     */
    cursor?: plus_collectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plus_collects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plus_collects.
     */
    skip?: number
    distinct?: Plus_collectScalarFieldEnum | Plus_collectScalarFieldEnum[]
  }

  /**
   * plus_collect create
   */
  export type plus_collectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plus_collect
     */
    select?: plus_collectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plus_collect
     */
    omit?: plus_collectOmit<ExtArgs> | null
    /**
     * The data needed to create a plus_collect.
     */
    data?: XOR<plus_collectCreateInput, plus_collectUncheckedCreateInput>
  }

  /**
   * plus_collect createMany
   */
  export type plus_collectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many plus_collects.
     */
    data: plus_collectCreateManyInput | plus_collectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * plus_collect update
   */
  export type plus_collectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plus_collect
     */
    select?: plus_collectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plus_collect
     */
    omit?: plus_collectOmit<ExtArgs> | null
    /**
     * The data needed to update a plus_collect.
     */
    data: XOR<plus_collectUpdateInput, plus_collectUncheckedUpdateInput>
    /**
     * Choose, which plus_collect to update.
     */
    where: plus_collectWhereUniqueInput
  }

  /**
   * plus_collect updateMany
   */
  export type plus_collectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update plus_collects.
     */
    data: XOR<plus_collectUpdateManyMutationInput, plus_collectUncheckedUpdateManyInput>
    /**
     * Filter which plus_collects to update
     */
    where?: plus_collectWhereInput
    /**
     * Limit how many plus_collects to update.
     */
    limit?: number
  }

  /**
   * plus_collect upsert
   */
  export type plus_collectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plus_collect
     */
    select?: plus_collectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plus_collect
     */
    omit?: plus_collectOmit<ExtArgs> | null
    /**
     * The filter to search for the plus_collect to update in case it exists.
     */
    where: plus_collectWhereUniqueInput
    /**
     * In case the plus_collect found by the `where` argument doesn't exist, create a new plus_collect with this data.
     */
    create: XOR<plus_collectCreateInput, plus_collectUncheckedCreateInput>
    /**
     * In case the plus_collect was found with the provided `where` argument, update it with this data.
     */
    update: XOR<plus_collectUpdateInput, plus_collectUncheckedUpdateInput>
  }

  /**
   * plus_collect delete
   */
  export type plus_collectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plus_collect
     */
    select?: plus_collectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plus_collect
     */
    omit?: plus_collectOmit<ExtArgs> | null
    /**
     * Filter which plus_collect to delete.
     */
    where: plus_collectWhereUniqueInput
  }

  /**
   * plus_collect deleteMany
   */
  export type plus_collectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which plus_collects to delete
     */
    where?: plus_collectWhereInput
    /**
     * Limit how many plus_collects to delete.
     */
    limit?: number
  }

  /**
   * plus_collect without action
   */
  export type plus_collectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plus_collect
     */
    select?: plus_collectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plus_collect
     */
    omit?: plus_collectOmit<ExtArgs> | null
  }


  /**
   * Model plus_gather
   */

  export type AggregatePlus_gather = {
    _count: Plus_gatherCountAggregateOutputType | null
    _avg: Plus_gatherAvgAggregateOutputType | null
    _sum: Plus_gatherSumAggregateOutputType | null
    _min: Plus_gatherMinAggregateOutputType | null
    _max: Plus_gatherMaxAggregateOutputType | null
  }

  export type Plus_gatherAvgAggregateOutputType = {
    id: number | null
    cid: number | null
  }

  export type Plus_gatherSumAggregateOutputType = {
    id: number | null
    cid: number | null
  }

  export type Plus_gatherMinAggregateOutputType = {
    id: number | null
    taskName: string | null
    targetUrl: string | null
    parseData: string | null
    cid: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Plus_gatherMaxAggregateOutputType = {
    id: number | null
    taskName: string | null
    targetUrl: string | null
    parseData: string | null
    cid: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Plus_gatherCountAggregateOutputType = {
    id: number
    taskName: number
    targetUrl: number
    parseData: number
    cid: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Plus_gatherAvgAggregateInputType = {
    id?: true
    cid?: true
  }

  export type Plus_gatherSumAggregateInputType = {
    id?: true
    cid?: true
  }

  export type Plus_gatherMinAggregateInputType = {
    id?: true
    taskName?: true
    targetUrl?: true
    parseData?: true
    cid?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Plus_gatherMaxAggregateInputType = {
    id?: true
    taskName?: true
    targetUrl?: true
    parseData?: true
    cid?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Plus_gatherCountAggregateInputType = {
    id?: true
    taskName?: true
    targetUrl?: true
    parseData?: true
    cid?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Plus_gatherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which plus_gather to aggregate.
     */
    where?: plus_gatherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plus_gathers to fetch.
     */
    orderBy?: plus_gatherOrderByWithRelationInput | plus_gatherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: plus_gatherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plus_gathers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plus_gathers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned plus_gathers
    **/
    _count?: true | Plus_gatherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Plus_gatherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Plus_gatherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Plus_gatherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Plus_gatherMaxAggregateInputType
  }

  export type GetPlus_gatherAggregateType<T extends Plus_gatherAggregateArgs> = {
        [P in keyof T & keyof AggregatePlus_gather]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlus_gather[P]>
      : GetScalarType<T[P], AggregatePlus_gather[P]>
  }




  export type plus_gatherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: plus_gatherWhereInput
    orderBy?: plus_gatherOrderByWithAggregationInput | plus_gatherOrderByWithAggregationInput[]
    by: Plus_gatherScalarFieldEnum[] | Plus_gatherScalarFieldEnum
    having?: plus_gatherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Plus_gatherCountAggregateInputType | true
    _avg?: Plus_gatherAvgAggregateInputType
    _sum?: Plus_gatherSumAggregateInputType
    _min?: Plus_gatherMinAggregateInputType
    _max?: Plus_gatherMaxAggregateInputType
  }

  export type Plus_gatherGroupByOutputType = {
    id: number
    taskName: string | null
    targetUrl: string | null
    parseData: string | null
    cid: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: Plus_gatherCountAggregateOutputType | null
    _avg: Plus_gatherAvgAggregateOutputType | null
    _sum: Plus_gatherSumAggregateOutputType | null
    _min: Plus_gatherMinAggregateOutputType | null
    _max: Plus_gatherMaxAggregateOutputType | null
  }

  type GetPlus_gatherGroupByPayload<T extends plus_gatherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Plus_gatherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Plus_gatherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Plus_gatherGroupByOutputType[P]>
            : GetScalarType<T[P], Plus_gatherGroupByOutputType[P]>
        }
      >
    >


  export type plus_gatherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskName?: boolean
    targetUrl?: boolean
    parseData?: boolean
    cid?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["plus_gather"]>



  export type plus_gatherSelectScalar = {
    id?: boolean
    taskName?: boolean
    targetUrl?: boolean
    parseData?: boolean
    cid?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type plus_gatherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskName" | "targetUrl" | "parseData" | "cid" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["plus_gather"]>

  export type $plus_gatherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "plus_gather"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      taskName: string | null
      targetUrl: string | null
      parseData: string | null
      cid: number | null
      status: string | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["plus_gather"]>
    composites: {}
  }

  type plus_gatherGetPayload<S extends boolean | null | undefined | plus_gatherDefaultArgs> = $Result.GetResult<Prisma.$plus_gatherPayload, S>

  type plus_gatherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<plus_gatherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Plus_gatherCountAggregateInputType | true
    }

  export interface plus_gatherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['plus_gather'], meta: { name: 'plus_gather' } }
    /**
     * Find zero or one Plus_gather that matches the filter.
     * @param {plus_gatherFindUniqueArgs} args - Arguments to find a Plus_gather
     * @example
     * // Get one Plus_gather
     * const plus_gather = await prisma.plus_gather.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends plus_gatherFindUniqueArgs>(args: SelectSubset<T, plus_gatherFindUniqueArgs<ExtArgs>>): Prisma__plus_gatherClient<$Result.GetResult<Prisma.$plus_gatherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plus_gather that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {plus_gatherFindUniqueOrThrowArgs} args - Arguments to find a Plus_gather
     * @example
     * // Get one Plus_gather
     * const plus_gather = await prisma.plus_gather.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends plus_gatherFindUniqueOrThrowArgs>(args: SelectSubset<T, plus_gatherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__plus_gatherClient<$Result.GetResult<Prisma.$plus_gatherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plus_gather that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plus_gatherFindFirstArgs} args - Arguments to find a Plus_gather
     * @example
     * // Get one Plus_gather
     * const plus_gather = await prisma.plus_gather.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends plus_gatherFindFirstArgs>(args?: SelectSubset<T, plus_gatherFindFirstArgs<ExtArgs>>): Prisma__plus_gatherClient<$Result.GetResult<Prisma.$plus_gatherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plus_gather that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plus_gatherFindFirstOrThrowArgs} args - Arguments to find a Plus_gather
     * @example
     * // Get one Plus_gather
     * const plus_gather = await prisma.plus_gather.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends plus_gatherFindFirstOrThrowArgs>(args?: SelectSubset<T, plus_gatherFindFirstOrThrowArgs<ExtArgs>>): Prisma__plus_gatherClient<$Result.GetResult<Prisma.$plus_gatherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plus_gathers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plus_gatherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plus_gathers
     * const plus_gathers = await prisma.plus_gather.findMany()
     * 
     * // Get first 10 Plus_gathers
     * const plus_gathers = await prisma.plus_gather.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plus_gatherWithIdOnly = await prisma.plus_gather.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends plus_gatherFindManyArgs>(args?: SelectSubset<T, plus_gatherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$plus_gatherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plus_gather.
     * @param {plus_gatherCreateArgs} args - Arguments to create a Plus_gather.
     * @example
     * // Create one Plus_gather
     * const Plus_gather = await prisma.plus_gather.create({
     *   data: {
     *     // ... data to create a Plus_gather
     *   }
     * })
     * 
     */
    create<T extends plus_gatherCreateArgs>(args: SelectSubset<T, plus_gatherCreateArgs<ExtArgs>>): Prisma__plus_gatherClient<$Result.GetResult<Prisma.$plus_gatherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plus_gathers.
     * @param {plus_gatherCreateManyArgs} args - Arguments to create many Plus_gathers.
     * @example
     * // Create many Plus_gathers
     * const plus_gather = await prisma.plus_gather.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends plus_gatherCreateManyArgs>(args?: SelectSubset<T, plus_gatherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Plus_gather.
     * @param {plus_gatherDeleteArgs} args - Arguments to delete one Plus_gather.
     * @example
     * // Delete one Plus_gather
     * const Plus_gather = await prisma.plus_gather.delete({
     *   where: {
     *     // ... filter to delete one Plus_gather
     *   }
     * })
     * 
     */
    delete<T extends plus_gatherDeleteArgs>(args: SelectSubset<T, plus_gatherDeleteArgs<ExtArgs>>): Prisma__plus_gatherClient<$Result.GetResult<Prisma.$plus_gatherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plus_gather.
     * @param {plus_gatherUpdateArgs} args - Arguments to update one Plus_gather.
     * @example
     * // Update one Plus_gather
     * const plus_gather = await prisma.plus_gather.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends plus_gatherUpdateArgs>(args: SelectSubset<T, plus_gatherUpdateArgs<ExtArgs>>): Prisma__plus_gatherClient<$Result.GetResult<Prisma.$plus_gatherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plus_gathers.
     * @param {plus_gatherDeleteManyArgs} args - Arguments to filter Plus_gathers to delete.
     * @example
     * // Delete a few Plus_gathers
     * const { count } = await prisma.plus_gather.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends plus_gatherDeleteManyArgs>(args?: SelectSubset<T, plus_gatherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plus_gathers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plus_gatherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plus_gathers
     * const plus_gather = await prisma.plus_gather.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends plus_gatherUpdateManyArgs>(args: SelectSubset<T, plus_gatherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plus_gather.
     * @param {plus_gatherUpsertArgs} args - Arguments to update or create a Plus_gather.
     * @example
     * // Update or create a Plus_gather
     * const plus_gather = await prisma.plus_gather.upsert({
     *   create: {
     *     // ... data to create a Plus_gather
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plus_gather we want to update
     *   }
     * })
     */
    upsert<T extends plus_gatherUpsertArgs>(args: SelectSubset<T, plus_gatherUpsertArgs<ExtArgs>>): Prisma__plus_gatherClient<$Result.GetResult<Prisma.$plus_gatherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plus_gathers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plus_gatherCountArgs} args - Arguments to filter Plus_gathers to count.
     * @example
     * // Count the number of Plus_gathers
     * const count = await prisma.plus_gather.count({
     *   where: {
     *     // ... the filter for the Plus_gathers we want to count
     *   }
     * })
    **/
    count<T extends plus_gatherCountArgs>(
      args?: Subset<T, plus_gatherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Plus_gatherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plus_gather.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Plus_gatherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Plus_gatherAggregateArgs>(args: Subset<T, Plus_gatherAggregateArgs>): Prisma.PrismaPromise<GetPlus_gatherAggregateType<T>>

    /**
     * Group by Plus_gather.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plus_gatherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends plus_gatherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: plus_gatherGroupByArgs['orderBy'] }
        : { orderBy?: plus_gatherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, plus_gatherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlus_gatherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the plus_gather model
   */
  readonly fields: plus_gatherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for plus_gather.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__plus_gatherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the plus_gather model
   */
  interface plus_gatherFieldRefs {
    readonly id: FieldRef<"plus_gather", 'Int'>
    readonly taskName: FieldRef<"plus_gather", 'String'>
    readonly targetUrl: FieldRef<"plus_gather", 'String'>
    readonly parseData: FieldRef<"plus_gather", 'String'>
    readonly cid: FieldRef<"plus_gather", 'Int'>
    readonly status: FieldRef<"plus_gather", 'String'>
    readonly createdAt: FieldRef<"plus_gather", 'DateTime'>
    readonly updatedAt: FieldRef<"plus_gather", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * plus_gather findUnique
   */
  export type plus_gatherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plus_gather
     */
    select?: plus_gatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plus_gather
     */
    omit?: plus_gatherOmit<ExtArgs> | null
    /**
     * Filter, which plus_gather to fetch.
     */
    where: plus_gatherWhereUniqueInput
  }

  /**
   * plus_gather findUniqueOrThrow
   */
  export type plus_gatherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plus_gather
     */
    select?: plus_gatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plus_gather
     */
    omit?: plus_gatherOmit<ExtArgs> | null
    /**
     * Filter, which plus_gather to fetch.
     */
    where: plus_gatherWhereUniqueInput
  }

  /**
   * plus_gather findFirst
   */
  export type plus_gatherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plus_gather
     */
    select?: plus_gatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plus_gather
     */
    omit?: plus_gatherOmit<ExtArgs> | null
    /**
     * Filter, which plus_gather to fetch.
     */
    where?: plus_gatherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plus_gathers to fetch.
     */
    orderBy?: plus_gatherOrderByWithRelationInput | plus_gatherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for plus_gathers.
     */
    cursor?: plus_gatherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plus_gathers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plus_gathers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of plus_gathers.
     */
    distinct?: Plus_gatherScalarFieldEnum | Plus_gatherScalarFieldEnum[]
  }

  /**
   * plus_gather findFirstOrThrow
   */
  export type plus_gatherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plus_gather
     */
    select?: plus_gatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plus_gather
     */
    omit?: plus_gatherOmit<ExtArgs> | null
    /**
     * Filter, which plus_gather to fetch.
     */
    where?: plus_gatherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plus_gathers to fetch.
     */
    orderBy?: plus_gatherOrderByWithRelationInput | plus_gatherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for plus_gathers.
     */
    cursor?: plus_gatherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plus_gathers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plus_gathers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of plus_gathers.
     */
    distinct?: Plus_gatherScalarFieldEnum | Plus_gatherScalarFieldEnum[]
  }

  /**
   * plus_gather findMany
   */
  export type plus_gatherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plus_gather
     */
    select?: plus_gatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plus_gather
     */
    omit?: plus_gatherOmit<ExtArgs> | null
    /**
     * Filter, which plus_gathers to fetch.
     */
    where?: plus_gatherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plus_gathers to fetch.
     */
    orderBy?: plus_gatherOrderByWithRelationInput | plus_gatherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing plus_gathers.
     */
    cursor?: plus_gatherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plus_gathers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plus_gathers.
     */
    skip?: number
    distinct?: Plus_gatherScalarFieldEnum | Plus_gatherScalarFieldEnum[]
  }

  /**
   * plus_gather create
   */
  export type plus_gatherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plus_gather
     */
    select?: plus_gatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plus_gather
     */
    omit?: plus_gatherOmit<ExtArgs> | null
    /**
     * The data needed to create a plus_gather.
     */
    data?: XOR<plus_gatherCreateInput, plus_gatherUncheckedCreateInput>
  }

  /**
   * plus_gather createMany
   */
  export type plus_gatherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many plus_gathers.
     */
    data: plus_gatherCreateManyInput | plus_gatherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * plus_gather update
   */
  export type plus_gatherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plus_gather
     */
    select?: plus_gatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plus_gather
     */
    omit?: plus_gatherOmit<ExtArgs> | null
    /**
     * The data needed to update a plus_gather.
     */
    data: XOR<plus_gatherUpdateInput, plus_gatherUncheckedUpdateInput>
    /**
     * Choose, which plus_gather to update.
     */
    where: plus_gatherWhereUniqueInput
  }

  /**
   * plus_gather updateMany
   */
  export type plus_gatherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update plus_gathers.
     */
    data: XOR<plus_gatherUpdateManyMutationInput, plus_gatherUncheckedUpdateManyInput>
    /**
     * Filter which plus_gathers to update
     */
    where?: plus_gatherWhereInput
    /**
     * Limit how many plus_gathers to update.
     */
    limit?: number
  }

  /**
   * plus_gather upsert
   */
  export type plus_gatherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plus_gather
     */
    select?: plus_gatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plus_gather
     */
    omit?: plus_gatherOmit<ExtArgs> | null
    /**
     * The filter to search for the plus_gather to update in case it exists.
     */
    where: plus_gatherWhereUniqueInput
    /**
     * In case the plus_gather found by the `where` argument doesn't exist, create a new plus_gather with this data.
     */
    create: XOR<plus_gatherCreateInput, plus_gatherUncheckedCreateInput>
    /**
     * In case the plus_gather was found with the provided `where` argument, update it with this data.
     */
    update: XOR<plus_gatherUpdateInput, plus_gatherUncheckedUpdateInput>
  }

  /**
   * plus_gather delete
   */
  export type plus_gatherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plus_gather
     */
    select?: plus_gatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plus_gather
     */
    omit?: plus_gatherOmit<ExtArgs> | null
    /**
     * Filter which plus_gather to delete.
     */
    where: plus_gatherWhereUniqueInput
  }

  /**
   * plus_gather deleteMany
   */
  export type plus_gatherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which plus_gathers to delete
     */
    where?: plus_gatherWhereInput
    /**
     * Limit how many plus_gathers to delete.
     */
    limit?: number
  }

  /**
   * plus_gather without action
   */
  export type plus_gatherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plus_gather
     */
    select?: plus_gatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plus_gather
     */
    omit?: plus_gatherOmit<ExtArgs> | null
  }


  /**
   * Model sys_config
   */

  export type AggregateSys_config = {
    _count: Sys_configCountAggregateOutputType | null
    _avg: Sys_configAvgAggregateOutputType | null
    _sum: Sys_configSumAggregateOutputType | null
    _min: Sys_configMinAggregateOutputType | null
    _max: Sys_configMaxAggregateOutputType | null
  }

  export type Sys_configAvgAggregateOutputType = {
    id: number | null
  }

  export type Sys_configSumAggregateOutputType = {
    id: number | null
  }

  export type Sys_configMinAggregateOutputType = {
    id: number | null
    template: string | null
    appid: string | null
    secret: string | null
    accessKey: string | null
    secretKey: string | null
    domain: string | null
    bucket: string | null
    uploadWay: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Sys_configMaxAggregateOutputType = {
    id: number | null
    template: string | null
    appid: string | null
    secret: string | null
    accessKey: string | null
    secretKey: string | null
    domain: string | null
    bucket: string | null
    uploadWay: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Sys_configCountAggregateOutputType = {
    id: number
    template: number
    appid: number
    secret: number
    accessKey: number
    secretKey: number
    domain: number
    bucket: number
    uploadWay: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Sys_configAvgAggregateInputType = {
    id?: true
  }

  export type Sys_configSumAggregateInputType = {
    id?: true
  }

  export type Sys_configMinAggregateInputType = {
    id?: true
    template?: true
    appid?: true
    secret?: true
    accessKey?: true
    secretKey?: true
    domain?: true
    bucket?: true
    uploadWay?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Sys_configMaxAggregateInputType = {
    id?: true
    template?: true
    appid?: true
    secret?: true
    accessKey?: true
    secretKey?: true
    domain?: true
    bucket?: true
    uploadWay?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Sys_configCountAggregateInputType = {
    id?: true
    template?: true
    appid?: true
    secret?: true
    accessKey?: true
    secretKey?: true
    domain?: true
    bucket?: true
    uploadWay?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Sys_configAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_config to aggregate.
     */
    where?: sys_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_configs to fetch.
     */
    orderBy?: sys_configOrderByWithRelationInput | sys_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sys_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_configs
    **/
    _count?: true | Sys_configCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sys_configAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sys_configSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_configMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_configMaxAggregateInputType
  }

  export type GetSys_configAggregateType<T extends Sys_configAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_config]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_config[P]>
      : GetScalarType<T[P], AggregateSys_config[P]>
  }




  export type sys_configGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_configWhereInput
    orderBy?: sys_configOrderByWithAggregationInput | sys_configOrderByWithAggregationInput[]
    by: Sys_configScalarFieldEnum[] | Sys_configScalarFieldEnum
    having?: sys_configScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_configCountAggregateInputType | true
    _avg?: Sys_configAvgAggregateInputType
    _sum?: Sys_configSumAggregateInputType
    _min?: Sys_configMinAggregateInputType
    _max?: Sys_configMaxAggregateInputType
  }

  export type Sys_configGroupByOutputType = {
    id: number
    template: string | null
    appid: string | null
    secret: string | null
    accessKey: string | null
    secretKey: string | null
    domain: string | null
    bucket: string | null
    uploadWay: string | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: Sys_configCountAggregateOutputType | null
    _avg: Sys_configAvgAggregateOutputType | null
    _sum: Sys_configSumAggregateOutputType | null
    _min: Sys_configMinAggregateOutputType | null
    _max: Sys_configMaxAggregateOutputType | null
  }

  type GetSys_configGroupByPayload<T extends sys_configGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sys_configGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_configGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_configGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_configGroupByOutputType[P]>
        }
      >
    >


  export type sys_configSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    template?: boolean
    appid?: boolean
    secret?: boolean
    accessKey?: boolean
    secretKey?: boolean
    domain?: boolean
    bucket?: boolean
    uploadWay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sys_config"]>



  export type sys_configSelectScalar = {
    id?: boolean
    template?: boolean
    appid?: boolean
    secret?: boolean
    accessKey?: boolean
    secretKey?: boolean
    domain?: boolean
    bucket?: boolean
    uploadWay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type sys_configOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "template" | "appid" | "secret" | "accessKey" | "secretKey" | "domain" | "bucket" | "uploadWay" | "createdAt" | "updatedAt", ExtArgs["result"]["sys_config"]>

  export type $sys_configPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sys_config"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      template: string | null
      appid: string | null
      secret: string | null
      accessKey: string | null
      secretKey: string | null
      domain: string | null
      bucket: string | null
      uploadWay: string | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["sys_config"]>
    composites: {}
  }

  type sys_configGetPayload<S extends boolean | null | undefined | sys_configDefaultArgs> = $Result.GetResult<Prisma.$sys_configPayload, S>

  type sys_configCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sys_configFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sys_configCountAggregateInputType | true
    }

  export interface sys_configDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sys_config'], meta: { name: 'sys_config' } }
    /**
     * Find zero or one Sys_config that matches the filter.
     * @param {sys_configFindUniqueArgs} args - Arguments to find a Sys_config
     * @example
     * // Get one Sys_config
     * const sys_config = await prisma.sys_config.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sys_configFindUniqueArgs>(args: SelectSubset<T, sys_configFindUniqueArgs<ExtArgs>>): Prisma__sys_configClient<$Result.GetResult<Prisma.$sys_configPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sys_config that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sys_configFindUniqueOrThrowArgs} args - Arguments to find a Sys_config
     * @example
     * // Get one Sys_config
     * const sys_config = await prisma.sys_config.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sys_configFindUniqueOrThrowArgs>(args: SelectSubset<T, sys_configFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sys_configClient<$Result.GetResult<Prisma.$sys_configPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_config that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_configFindFirstArgs} args - Arguments to find a Sys_config
     * @example
     * // Get one Sys_config
     * const sys_config = await prisma.sys_config.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sys_configFindFirstArgs>(args?: SelectSubset<T, sys_configFindFirstArgs<ExtArgs>>): Prisma__sys_configClient<$Result.GetResult<Prisma.$sys_configPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_config that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_configFindFirstOrThrowArgs} args - Arguments to find a Sys_config
     * @example
     * // Get one Sys_config
     * const sys_config = await prisma.sys_config.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sys_configFindFirstOrThrowArgs>(args?: SelectSubset<T, sys_configFindFirstOrThrowArgs<ExtArgs>>): Prisma__sys_configClient<$Result.GetResult<Prisma.$sys_configPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sys_configs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_configFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_configs
     * const sys_configs = await prisma.sys_config.findMany()
     * 
     * // Get first 10 Sys_configs
     * const sys_configs = await prisma.sys_config.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sys_configWithIdOnly = await prisma.sys_config.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sys_configFindManyArgs>(args?: SelectSubset<T, sys_configFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_configPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sys_config.
     * @param {sys_configCreateArgs} args - Arguments to create a Sys_config.
     * @example
     * // Create one Sys_config
     * const Sys_config = await prisma.sys_config.create({
     *   data: {
     *     // ... data to create a Sys_config
     *   }
     * })
     * 
     */
    create<T extends sys_configCreateArgs>(args: SelectSubset<T, sys_configCreateArgs<ExtArgs>>): Prisma__sys_configClient<$Result.GetResult<Prisma.$sys_configPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sys_configs.
     * @param {sys_configCreateManyArgs} args - Arguments to create many Sys_configs.
     * @example
     * // Create many Sys_configs
     * const sys_config = await prisma.sys_config.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sys_configCreateManyArgs>(args?: SelectSubset<T, sys_configCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_config.
     * @param {sys_configDeleteArgs} args - Arguments to delete one Sys_config.
     * @example
     * // Delete one Sys_config
     * const Sys_config = await prisma.sys_config.delete({
     *   where: {
     *     // ... filter to delete one Sys_config
     *   }
     * })
     * 
     */
    delete<T extends sys_configDeleteArgs>(args: SelectSubset<T, sys_configDeleteArgs<ExtArgs>>): Prisma__sys_configClient<$Result.GetResult<Prisma.$sys_configPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sys_config.
     * @param {sys_configUpdateArgs} args - Arguments to update one Sys_config.
     * @example
     * // Update one Sys_config
     * const sys_config = await prisma.sys_config.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sys_configUpdateArgs>(args: SelectSubset<T, sys_configUpdateArgs<ExtArgs>>): Prisma__sys_configClient<$Result.GetResult<Prisma.$sys_configPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sys_configs.
     * @param {sys_configDeleteManyArgs} args - Arguments to filter Sys_configs to delete.
     * @example
     * // Delete a few Sys_configs
     * const { count } = await prisma.sys_config.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sys_configDeleteManyArgs>(args?: SelectSubset<T, sys_configDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_configUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_configs
     * const sys_config = await prisma.sys_config.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sys_configUpdateManyArgs>(args: SelectSubset<T, sys_configUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_config.
     * @param {sys_configUpsertArgs} args - Arguments to update or create a Sys_config.
     * @example
     * // Update or create a Sys_config
     * const sys_config = await prisma.sys_config.upsert({
     *   create: {
     *     // ... data to create a Sys_config
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_config we want to update
     *   }
     * })
     */
    upsert<T extends sys_configUpsertArgs>(args: SelectSubset<T, sys_configUpsertArgs<ExtArgs>>): Prisma__sys_configClient<$Result.GetResult<Prisma.$sys_configPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sys_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_configCountArgs} args - Arguments to filter Sys_configs to count.
     * @example
     * // Count the number of Sys_configs
     * const count = await prisma.sys_config.count({
     *   where: {
     *     // ... the filter for the Sys_configs we want to count
     *   }
     * })
    **/
    count<T extends sys_configCountArgs>(
      args?: Subset<T, sys_configCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_configCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_configAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sys_configAggregateArgs>(args: Subset<T, Sys_configAggregateArgs>): Prisma.PrismaPromise<GetSys_configAggregateType<T>>

    /**
     * Group by Sys_config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_configGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sys_configGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sys_configGroupByArgs['orderBy'] }
        : { orderBy?: sys_configGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sys_configGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_configGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sys_config model
   */
  readonly fields: sys_configFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_config.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sys_configClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sys_config model
   */
  interface sys_configFieldRefs {
    readonly id: FieldRef<"sys_config", 'Int'>
    readonly template: FieldRef<"sys_config", 'String'>
    readonly appid: FieldRef<"sys_config", 'String'>
    readonly secret: FieldRef<"sys_config", 'String'>
    readonly accessKey: FieldRef<"sys_config", 'String'>
    readonly secretKey: FieldRef<"sys_config", 'String'>
    readonly domain: FieldRef<"sys_config", 'String'>
    readonly bucket: FieldRef<"sys_config", 'String'>
    readonly uploadWay: FieldRef<"sys_config", 'String'>
    readonly createdAt: FieldRef<"sys_config", 'DateTime'>
    readonly updatedAt: FieldRef<"sys_config", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sys_config findUnique
   */
  export type sys_configFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_config
     */
    select?: sys_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_config
     */
    omit?: sys_configOmit<ExtArgs> | null
    /**
     * Filter, which sys_config to fetch.
     */
    where: sys_configWhereUniqueInput
  }

  /**
   * sys_config findUniqueOrThrow
   */
  export type sys_configFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_config
     */
    select?: sys_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_config
     */
    omit?: sys_configOmit<ExtArgs> | null
    /**
     * Filter, which sys_config to fetch.
     */
    where: sys_configWhereUniqueInput
  }

  /**
   * sys_config findFirst
   */
  export type sys_configFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_config
     */
    select?: sys_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_config
     */
    omit?: sys_configOmit<ExtArgs> | null
    /**
     * Filter, which sys_config to fetch.
     */
    where?: sys_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_configs to fetch.
     */
    orderBy?: sys_configOrderByWithRelationInput | sys_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_configs.
     */
    cursor?: sys_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_configs.
     */
    distinct?: Sys_configScalarFieldEnum | Sys_configScalarFieldEnum[]
  }

  /**
   * sys_config findFirstOrThrow
   */
  export type sys_configFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_config
     */
    select?: sys_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_config
     */
    omit?: sys_configOmit<ExtArgs> | null
    /**
     * Filter, which sys_config to fetch.
     */
    where?: sys_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_configs to fetch.
     */
    orderBy?: sys_configOrderByWithRelationInput | sys_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_configs.
     */
    cursor?: sys_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_configs.
     */
    distinct?: Sys_configScalarFieldEnum | Sys_configScalarFieldEnum[]
  }

  /**
   * sys_config findMany
   */
  export type sys_configFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_config
     */
    select?: sys_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_config
     */
    omit?: sys_configOmit<ExtArgs> | null
    /**
     * Filter, which sys_configs to fetch.
     */
    where?: sys_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_configs to fetch.
     */
    orderBy?: sys_configOrderByWithRelationInput | sys_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_configs.
     */
    cursor?: sys_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_configs.
     */
    skip?: number
    distinct?: Sys_configScalarFieldEnum | Sys_configScalarFieldEnum[]
  }

  /**
   * sys_config create
   */
  export type sys_configCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_config
     */
    select?: sys_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_config
     */
    omit?: sys_configOmit<ExtArgs> | null
    /**
     * The data needed to create a sys_config.
     */
    data?: XOR<sys_configCreateInput, sys_configUncheckedCreateInput>
  }

  /**
   * sys_config createMany
   */
  export type sys_configCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sys_configs.
     */
    data: sys_configCreateManyInput | sys_configCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sys_config update
   */
  export type sys_configUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_config
     */
    select?: sys_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_config
     */
    omit?: sys_configOmit<ExtArgs> | null
    /**
     * The data needed to update a sys_config.
     */
    data: XOR<sys_configUpdateInput, sys_configUncheckedUpdateInput>
    /**
     * Choose, which sys_config to update.
     */
    where: sys_configWhereUniqueInput
  }

  /**
   * sys_config updateMany
   */
  export type sys_configUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sys_configs.
     */
    data: XOR<sys_configUpdateManyMutationInput, sys_configUncheckedUpdateManyInput>
    /**
     * Filter which sys_configs to update
     */
    where?: sys_configWhereInput
    /**
     * Limit how many sys_configs to update.
     */
    limit?: number
  }

  /**
   * sys_config upsert
   */
  export type sys_configUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_config
     */
    select?: sys_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_config
     */
    omit?: sys_configOmit<ExtArgs> | null
    /**
     * The filter to search for the sys_config to update in case it exists.
     */
    where: sys_configWhereUniqueInput
    /**
     * In case the sys_config found by the `where` argument doesn't exist, create a new sys_config with this data.
     */
    create: XOR<sys_configCreateInput, sys_configUncheckedCreateInput>
    /**
     * In case the sys_config was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sys_configUpdateInput, sys_configUncheckedUpdateInput>
  }

  /**
   * sys_config delete
   */
  export type sys_configDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_config
     */
    select?: sys_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_config
     */
    omit?: sys_configOmit<ExtArgs> | null
    /**
     * Filter which sys_config to delete.
     */
    where: sys_configWhereUniqueInput
  }

  /**
   * sys_config deleteMany
   */
  export type sys_configDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_configs to delete
     */
    where?: sys_configWhereInput
    /**
     * Limit how many sys_configs to delete.
     */
    limit?: number
  }

  /**
   * sys_config without action
   */
  export type sys_configDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_config
     */
    select?: sys_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_config
     */
    omit?: sys_configOmit<ExtArgs> | null
  }


  /**
   * Model sys_loginlog
   */

  export type AggregateSys_loginlog = {
    _count: Sys_loginlogCountAggregateOutputType | null
    _avg: Sys_loginlogAvgAggregateOutputType | null
    _sum: Sys_loginlogSumAggregateOutputType | null
    _min: Sys_loginlogMinAggregateOutputType | null
    _max: Sys_loginlogMaxAggregateOutputType | null
  }

  export type Sys_loginlogAvgAggregateOutputType = {
    id: number | null
    uid: number | null
  }

  export type Sys_loginlogSumAggregateOutputType = {
    id: number | null
    uid: number | null
  }

  export type Sys_loginlogMinAggregateOutputType = {
    id: number | null
    uid: number | null
    ip: string | null
    country: string | null
    prov: string | null
    city: string | null
    district: string | null
    isp: string | null
    lat: string | null
    lng: string | null
    createdAt: Date | null
  }

  export type Sys_loginlogMaxAggregateOutputType = {
    id: number | null
    uid: number | null
    ip: string | null
    country: string | null
    prov: string | null
    city: string | null
    district: string | null
    isp: string | null
    lat: string | null
    lng: string | null
    createdAt: Date | null
  }

  export type Sys_loginlogCountAggregateOutputType = {
    id: number
    uid: number
    ip: number
    country: number
    prov: number
    city: number
    district: number
    isp: number
    lat: number
    lng: number
    createdAt: number
    _all: number
  }


  export type Sys_loginlogAvgAggregateInputType = {
    id?: true
    uid?: true
  }

  export type Sys_loginlogSumAggregateInputType = {
    id?: true
    uid?: true
  }

  export type Sys_loginlogMinAggregateInputType = {
    id?: true
    uid?: true
    ip?: true
    country?: true
    prov?: true
    city?: true
    district?: true
    isp?: true
    lat?: true
    lng?: true
    createdAt?: true
  }

  export type Sys_loginlogMaxAggregateInputType = {
    id?: true
    uid?: true
    ip?: true
    country?: true
    prov?: true
    city?: true
    district?: true
    isp?: true
    lat?: true
    lng?: true
    createdAt?: true
  }

  export type Sys_loginlogCountAggregateInputType = {
    id?: true
    uid?: true
    ip?: true
    country?: true
    prov?: true
    city?: true
    district?: true
    isp?: true
    lat?: true
    lng?: true
    createdAt?: true
    _all?: true
  }

  export type Sys_loginlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_loginlog to aggregate.
     */
    where?: sys_loginlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_loginlogs to fetch.
     */
    orderBy?: sys_loginlogOrderByWithRelationInput | sys_loginlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sys_loginlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_loginlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_loginlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_loginlogs
    **/
    _count?: true | Sys_loginlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sys_loginlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sys_loginlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_loginlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_loginlogMaxAggregateInputType
  }

  export type GetSys_loginlogAggregateType<T extends Sys_loginlogAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_loginlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_loginlog[P]>
      : GetScalarType<T[P], AggregateSys_loginlog[P]>
  }




  export type sys_loginlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_loginlogWhereInput
    orderBy?: sys_loginlogOrderByWithAggregationInput | sys_loginlogOrderByWithAggregationInput[]
    by: Sys_loginlogScalarFieldEnum[] | Sys_loginlogScalarFieldEnum
    having?: sys_loginlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_loginlogCountAggregateInputType | true
    _avg?: Sys_loginlogAvgAggregateInputType
    _sum?: Sys_loginlogSumAggregateInputType
    _min?: Sys_loginlogMinAggregateInputType
    _max?: Sys_loginlogMaxAggregateInputType
  }

  export type Sys_loginlogGroupByOutputType = {
    id: number
    uid: number
    ip: string | null
    country: string | null
    prov: string | null
    city: string | null
    district: string | null
    isp: string | null
    lat: string | null
    lng: string | null
    createdAt: Date | null
    _count: Sys_loginlogCountAggregateOutputType | null
    _avg: Sys_loginlogAvgAggregateOutputType | null
    _sum: Sys_loginlogSumAggregateOutputType | null
    _min: Sys_loginlogMinAggregateOutputType | null
    _max: Sys_loginlogMaxAggregateOutputType | null
  }

  type GetSys_loginlogGroupByPayload<T extends sys_loginlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sys_loginlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_loginlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_loginlogGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_loginlogGroupByOutputType[P]>
        }
      >
    >


  export type sys_loginlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uid?: boolean
    ip?: boolean
    country?: boolean
    prov?: boolean
    city?: boolean
    district?: boolean
    isp?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sys_loginlog"]>



  export type sys_loginlogSelectScalar = {
    id?: boolean
    uid?: boolean
    ip?: boolean
    country?: boolean
    prov?: boolean
    city?: boolean
    district?: boolean
    isp?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
  }

  export type sys_loginlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uid" | "ip" | "country" | "prov" | "city" | "district" | "isp" | "lat" | "lng" | "createdAt", ExtArgs["result"]["sys_loginlog"]>

  export type $sys_loginlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sys_loginlog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uid: number
      ip: string | null
      country: string | null
      prov: string | null
      city: string | null
      district: string | null
      isp: string | null
      lat: string | null
      lng: string | null
      createdAt: Date | null
    }, ExtArgs["result"]["sys_loginlog"]>
    composites: {}
  }

  type sys_loginlogGetPayload<S extends boolean | null | undefined | sys_loginlogDefaultArgs> = $Result.GetResult<Prisma.$sys_loginlogPayload, S>

  type sys_loginlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sys_loginlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sys_loginlogCountAggregateInputType | true
    }

  export interface sys_loginlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sys_loginlog'], meta: { name: 'sys_loginlog' } }
    /**
     * Find zero or one Sys_loginlog that matches the filter.
     * @param {sys_loginlogFindUniqueArgs} args - Arguments to find a Sys_loginlog
     * @example
     * // Get one Sys_loginlog
     * const sys_loginlog = await prisma.sys_loginlog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sys_loginlogFindUniqueArgs>(args: SelectSubset<T, sys_loginlogFindUniqueArgs<ExtArgs>>): Prisma__sys_loginlogClient<$Result.GetResult<Prisma.$sys_loginlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sys_loginlog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sys_loginlogFindUniqueOrThrowArgs} args - Arguments to find a Sys_loginlog
     * @example
     * // Get one Sys_loginlog
     * const sys_loginlog = await prisma.sys_loginlog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sys_loginlogFindUniqueOrThrowArgs>(args: SelectSubset<T, sys_loginlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sys_loginlogClient<$Result.GetResult<Prisma.$sys_loginlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_loginlog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_loginlogFindFirstArgs} args - Arguments to find a Sys_loginlog
     * @example
     * // Get one Sys_loginlog
     * const sys_loginlog = await prisma.sys_loginlog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sys_loginlogFindFirstArgs>(args?: SelectSubset<T, sys_loginlogFindFirstArgs<ExtArgs>>): Prisma__sys_loginlogClient<$Result.GetResult<Prisma.$sys_loginlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_loginlog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_loginlogFindFirstOrThrowArgs} args - Arguments to find a Sys_loginlog
     * @example
     * // Get one Sys_loginlog
     * const sys_loginlog = await prisma.sys_loginlog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sys_loginlogFindFirstOrThrowArgs>(args?: SelectSubset<T, sys_loginlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__sys_loginlogClient<$Result.GetResult<Prisma.$sys_loginlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sys_loginlogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_loginlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_loginlogs
     * const sys_loginlogs = await prisma.sys_loginlog.findMany()
     * 
     * // Get first 10 Sys_loginlogs
     * const sys_loginlogs = await prisma.sys_loginlog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sys_loginlogWithIdOnly = await prisma.sys_loginlog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sys_loginlogFindManyArgs>(args?: SelectSubset<T, sys_loginlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_loginlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sys_loginlog.
     * @param {sys_loginlogCreateArgs} args - Arguments to create a Sys_loginlog.
     * @example
     * // Create one Sys_loginlog
     * const Sys_loginlog = await prisma.sys_loginlog.create({
     *   data: {
     *     // ... data to create a Sys_loginlog
     *   }
     * })
     * 
     */
    create<T extends sys_loginlogCreateArgs>(args: SelectSubset<T, sys_loginlogCreateArgs<ExtArgs>>): Prisma__sys_loginlogClient<$Result.GetResult<Prisma.$sys_loginlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sys_loginlogs.
     * @param {sys_loginlogCreateManyArgs} args - Arguments to create many Sys_loginlogs.
     * @example
     * // Create many Sys_loginlogs
     * const sys_loginlog = await prisma.sys_loginlog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sys_loginlogCreateManyArgs>(args?: SelectSubset<T, sys_loginlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_loginlog.
     * @param {sys_loginlogDeleteArgs} args - Arguments to delete one Sys_loginlog.
     * @example
     * // Delete one Sys_loginlog
     * const Sys_loginlog = await prisma.sys_loginlog.delete({
     *   where: {
     *     // ... filter to delete one Sys_loginlog
     *   }
     * })
     * 
     */
    delete<T extends sys_loginlogDeleteArgs>(args: SelectSubset<T, sys_loginlogDeleteArgs<ExtArgs>>): Prisma__sys_loginlogClient<$Result.GetResult<Prisma.$sys_loginlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sys_loginlog.
     * @param {sys_loginlogUpdateArgs} args - Arguments to update one Sys_loginlog.
     * @example
     * // Update one Sys_loginlog
     * const sys_loginlog = await prisma.sys_loginlog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sys_loginlogUpdateArgs>(args: SelectSubset<T, sys_loginlogUpdateArgs<ExtArgs>>): Prisma__sys_loginlogClient<$Result.GetResult<Prisma.$sys_loginlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sys_loginlogs.
     * @param {sys_loginlogDeleteManyArgs} args - Arguments to filter Sys_loginlogs to delete.
     * @example
     * // Delete a few Sys_loginlogs
     * const { count } = await prisma.sys_loginlog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sys_loginlogDeleteManyArgs>(args?: SelectSubset<T, sys_loginlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_loginlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_loginlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_loginlogs
     * const sys_loginlog = await prisma.sys_loginlog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sys_loginlogUpdateManyArgs>(args: SelectSubset<T, sys_loginlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_loginlog.
     * @param {sys_loginlogUpsertArgs} args - Arguments to update or create a Sys_loginlog.
     * @example
     * // Update or create a Sys_loginlog
     * const sys_loginlog = await prisma.sys_loginlog.upsert({
     *   create: {
     *     // ... data to create a Sys_loginlog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_loginlog we want to update
     *   }
     * })
     */
    upsert<T extends sys_loginlogUpsertArgs>(args: SelectSubset<T, sys_loginlogUpsertArgs<ExtArgs>>): Prisma__sys_loginlogClient<$Result.GetResult<Prisma.$sys_loginlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sys_loginlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_loginlogCountArgs} args - Arguments to filter Sys_loginlogs to count.
     * @example
     * // Count the number of Sys_loginlogs
     * const count = await prisma.sys_loginlog.count({
     *   where: {
     *     // ... the filter for the Sys_loginlogs we want to count
     *   }
     * })
    **/
    count<T extends sys_loginlogCountArgs>(
      args?: Subset<T, sys_loginlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_loginlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_loginlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_loginlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sys_loginlogAggregateArgs>(args: Subset<T, Sys_loginlogAggregateArgs>): Prisma.PrismaPromise<GetSys_loginlogAggregateType<T>>

    /**
     * Group by Sys_loginlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_loginlogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sys_loginlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sys_loginlogGroupByArgs['orderBy'] }
        : { orderBy?: sys_loginlogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sys_loginlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_loginlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sys_loginlog model
   */
  readonly fields: sys_loginlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_loginlog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sys_loginlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sys_loginlog model
   */
  interface sys_loginlogFieldRefs {
    readonly id: FieldRef<"sys_loginlog", 'Int'>
    readonly uid: FieldRef<"sys_loginlog", 'Int'>
    readonly ip: FieldRef<"sys_loginlog", 'String'>
    readonly country: FieldRef<"sys_loginlog", 'String'>
    readonly prov: FieldRef<"sys_loginlog", 'String'>
    readonly city: FieldRef<"sys_loginlog", 'String'>
    readonly district: FieldRef<"sys_loginlog", 'String'>
    readonly isp: FieldRef<"sys_loginlog", 'String'>
    readonly lat: FieldRef<"sys_loginlog", 'String'>
    readonly lng: FieldRef<"sys_loginlog", 'String'>
    readonly createdAt: FieldRef<"sys_loginlog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sys_loginlog findUnique
   */
  export type sys_loginlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_loginlog
     */
    select?: sys_loginlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_loginlog
     */
    omit?: sys_loginlogOmit<ExtArgs> | null
    /**
     * Filter, which sys_loginlog to fetch.
     */
    where: sys_loginlogWhereUniqueInput
  }

  /**
   * sys_loginlog findUniqueOrThrow
   */
  export type sys_loginlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_loginlog
     */
    select?: sys_loginlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_loginlog
     */
    omit?: sys_loginlogOmit<ExtArgs> | null
    /**
     * Filter, which sys_loginlog to fetch.
     */
    where: sys_loginlogWhereUniqueInput
  }

  /**
   * sys_loginlog findFirst
   */
  export type sys_loginlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_loginlog
     */
    select?: sys_loginlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_loginlog
     */
    omit?: sys_loginlogOmit<ExtArgs> | null
    /**
     * Filter, which sys_loginlog to fetch.
     */
    where?: sys_loginlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_loginlogs to fetch.
     */
    orderBy?: sys_loginlogOrderByWithRelationInput | sys_loginlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_loginlogs.
     */
    cursor?: sys_loginlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_loginlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_loginlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_loginlogs.
     */
    distinct?: Sys_loginlogScalarFieldEnum | Sys_loginlogScalarFieldEnum[]
  }

  /**
   * sys_loginlog findFirstOrThrow
   */
  export type sys_loginlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_loginlog
     */
    select?: sys_loginlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_loginlog
     */
    omit?: sys_loginlogOmit<ExtArgs> | null
    /**
     * Filter, which sys_loginlog to fetch.
     */
    where?: sys_loginlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_loginlogs to fetch.
     */
    orderBy?: sys_loginlogOrderByWithRelationInput | sys_loginlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_loginlogs.
     */
    cursor?: sys_loginlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_loginlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_loginlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_loginlogs.
     */
    distinct?: Sys_loginlogScalarFieldEnum | Sys_loginlogScalarFieldEnum[]
  }

  /**
   * sys_loginlog findMany
   */
  export type sys_loginlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_loginlog
     */
    select?: sys_loginlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_loginlog
     */
    omit?: sys_loginlogOmit<ExtArgs> | null
    /**
     * Filter, which sys_loginlogs to fetch.
     */
    where?: sys_loginlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_loginlogs to fetch.
     */
    orderBy?: sys_loginlogOrderByWithRelationInput | sys_loginlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_loginlogs.
     */
    cursor?: sys_loginlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_loginlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_loginlogs.
     */
    skip?: number
    distinct?: Sys_loginlogScalarFieldEnum | Sys_loginlogScalarFieldEnum[]
  }

  /**
   * sys_loginlog create
   */
  export type sys_loginlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_loginlog
     */
    select?: sys_loginlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_loginlog
     */
    omit?: sys_loginlogOmit<ExtArgs> | null
    /**
     * The data needed to create a sys_loginlog.
     */
    data: XOR<sys_loginlogCreateInput, sys_loginlogUncheckedCreateInput>
  }

  /**
   * sys_loginlog createMany
   */
  export type sys_loginlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sys_loginlogs.
     */
    data: sys_loginlogCreateManyInput | sys_loginlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sys_loginlog update
   */
  export type sys_loginlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_loginlog
     */
    select?: sys_loginlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_loginlog
     */
    omit?: sys_loginlogOmit<ExtArgs> | null
    /**
     * The data needed to update a sys_loginlog.
     */
    data: XOR<sys_loginlogUpdateInput, sys_loginlogUncheckedUpdateInput>
    /**
     * Choose, which sys_loginlog to update.
     */
    where: sys_loginlogWhereUniqueInput
  }

  /**
   * sys_loginlog updateMany
   */
  export type sys_loginlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sys_loginlogs.
     */
    data: XOR<sys_loginlogUpdateManyMutationInput, sys_loginlogUncheckedUpdateManyInput>
    /**
     * Filter which sys_loginlogs to update
     */
    where?: sys_loginlogWhereInput
    /**
     * Limit how many sys_loginlogs to update.
     */
    limit?: number
  }

  /**
   * sys_loginlog upsert
   */
  export type sys_loginlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_loginlog
     */
    select?: sys_loginlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_loginlog
     */
    omit?: sys_loginlogOmit<ExtArgs> | null
    /**
     * The filter to search for the sys_loginlog to update in case it exists.
     */
    where: sys_loginlogWhereUniqueInput
    /**
     * In case the sys_loginlog found by the `where` argument doesn't exist, create a new sys_loginlog with this data.
     */
    create: XOR<sys_loginlogCreateInput, sys_loginlogUncheckedCreateInput>
    /**
     * In case the sys_loginlog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sys_loginlogUpdateInput, sys_loginlogUncheckedUpdateInput>
  }

  /**
   * sys_loginlog delete
   */
  export type sys_loginlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_loginlog
     */
    select?: sys_loginlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_loginlog
     */
    omit?: sys_loginlogOmit<ExtArgs> | null
    /**
     * Filter which sys_loginlog to delete.
     */
    where: sys_loginlogWhereUniqueInput
  }

  /**
   * sys_loginlog deleteMany
   */
  export type sys_loginlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_loginlogs to delete
     */
    where?: sys_loginlogWhereInput
    /**
     * Limit how many sys_loginlogs to delete.
     */
    limit?: number
  }

  /**
   * sys_loginlog without action
   */
  export type sys_loginlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_loginlog
     */
    select?: sys_loginlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_loginlog
     */
    omit?: sys_loginlogOmit<ExtArgs> | null
  }


  /**
   * Model sys_menu
   */

  export type AggregateSys_menu = {
    _count: Sys_menuCountAggregateOutputType | null
    _avg: Sys_menuAvgAggregateOutputType | null
    _sum: Sys_menuSumAggregateOutputType | null
    _min: Sys_menuMinAggregateOutputType | null
    _max: Sys_menuMaxAggregateOutputType | null
  }

  export type Sys_menuAvgAggregateOutputType = {
    id: number | null
  }

  export type Sys_menuSumAggregateOutputType = {
    id: bigint | null
  }

  export type Sys_menuMinAggregateOutputType = {
    id: bigint | null
    content: string | null
    remark: string | null
  }

  export type Sys_menuMaxAggregateOutputType = {
    id: bigint | null
    content: string | null
    remark: string | null
  }

  export type Sys_menuCountAggregateOutputType = {
    id: number
    content: number
    remark: number
    _all: number
  }


  export type Sys_menuAvgAggregateInputType = {
    id?: true
  }

  export type Sys_menuSumAggregateInputType = {
    id?: true
  }

  export type Sys_menuMinAggregateInputType = {
    id?: true
    content?: true
    remark?: true
  }

  export type Sys_menuMaxAggregateInputType = {
    id?: true
    content?: true
    remark?: true
  }

  export type Sys_menuCountAggregateInputType = {
    id?: true
    content?: true
    remark?: true
    _all?: true
  }

  export type Sys_menuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_menu to aggregate.
     */
    where?: sys_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_menus to fetch.
     */
    orderBy?: sys_menuOrderByWithRelationInput | sys_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sys_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_menus
    **/
    _count?: true | Sys_menuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sys_menuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sys_menuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_menuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_menuMaxAggregateInputType
  }

  export type GetSys_menuAggregateType<T extends Sys_menuAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_menu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_menu[P]>
      : GetScalarType<T[P], AggregateSys_menu[P]>
  }




  export type sys_menuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_menuWhereInput
    orderBy?: sys_menuOrderByWithAggregationInput | sys_menuOrderByWithAggregationInput[]
    by: Sys_menuScalarFieldEnum[] | Sys_menuScalarFieldEnum
    having?: sys_menuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_menuCountAggregateInputType | true
    _avg?: Sys_menuAvgAggregateInputType
    _sum?: Sys_menuSumAggregateInputType
    _min?: Sys_menuMinAggregateInputType
    _max?: Sys_menuMaxAggregateInputType
  }

  export type Sys_menuGroupByOutputType = {
    id: bigint
    content: string | null
    remark: string | null
    _count: Sys_menuCountAggregateOutputType | null
    _avg: Sys_menuAvgAggregateOutputType | null
    _sum: Sys_menuSumAggregateOutputType | null
    _min: Sys_menuMinAggregateOutputType | null
    _max: Sys_menuMaxAggregateOutputType | null
  }

  type GetSys_menuGroupByPayload<T extends sys_menuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sys_menuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_menuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_menuGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_menuGroupByOutputType[P]>
        }
      >
    >


  export type sys_menuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    remark?: boolean
  }, ExtArgs["result"]["sys_menu"]>



  export type sys_menuSelectScalar = {
    id?: boolean
    content?: boolean
    remark?: boolean
  }

  export type sys_menuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "remark", ExtArgs["result"]["sys_menu"]>

  export type $sys_menuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sys_menu"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      content: string | null
      remark: string | null
    }, ExtArgs["result"]["sys_menu"]>
    composites: {}
  }

  type sys_menuGetPayload<S extends boolean | null | undefined | sys_menuDefaultArgs> = $Result.GetResult<Prisma.$sys_menuPayload, S>

  type sys_menuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sys_menuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sys_menuCountAggregateInputType | true
    }

  export interface sys_menuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sys_menu'], meta: { name: 'sys_menu' } }
    /**
     * Find zero or one Sys_menu that matches the filter.
     * @param {sys_menuFindUniqueArgs} args - Arguments to find a Sys_menu
     * @example
     * // Get one Sys_menu
     * const sys_menu = await prisma.sys_menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sys_menuFindUniqueArgs>(args: SelectSubset<T, sys_menuFindUniqueArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sys_menu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sys_menuFindUniqueOrThrowArgs} args - Arguments to find a Sys_menu
     * @example
     * // Get one Sys_menu
     * const sys_menu = await prisma.sys_menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sys_menuFindUniqueOrThrowArgs>(args: SelectSubset<T, sys_menuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_menuFindFirstArgs} args - Arguments to find a Sys_menu
     * @example
     * // Get one Sys_menu
     * const sys_menu = await prisma.sys_menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sys_menuFindFirstArgs>(args?: SelectSubset<T, sys_menuFindFirstArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_menuFindFirstOrThrowArgs} args - Arguments to find a Sys_menu
     * @example
     * // Get one Sys_menu
     * const sys_menu = await prisma.sys_menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sys_menuFindFirstOrThrowArgs>(args?: SelectSubset<T, sys_menuFindFirstOrThrowArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sys_menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_menuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_menus
     * const sys_menus = await prisma.sys_menu.findMany()
     * 
     * // Get first 10 Sys_menus
     * const sys_menus = await prisma.sys_menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sys_menuWithIdOnly = await prisma.sys_menu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sys_menuFindManyArgs>(args?: SelectSubset<T, sys_menuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sys_menu.
     * @param {sys_menuCreateArgs} args - Arguments to create a Sys_menu.
     * @example
     * // Create one Sys_menu
     * const Sys_menu = await prisma.sys_menu.create({
     *   data: {
     *     // ... data to create a Sys_menu
     *   }
     * })
     * 
     */
    create<T extends sys_menuCreateArgs>(args: SelectSubset<T, sys_menuCreateArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sys_menus.
     * @param {sys_menuCreateManyArgs} args - Arguments to create many Sys_menus.
     * @example
     * // Create many Sys_menus
     * const sys_menu = await prisma.sys_menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sys_menuCreateManyArgs>(args?: SelectSubset<T, sys_menuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_menu.
     * @param {sys_menuDeleteArgs} args - Arguments to delete one Sys_menu.
     * @example
     * // Delete one Sys_menu
     * const Sys_menu = await prisma.sys_menu.delete({
     *   where: {
     *     // ... filter to delete one Sys_menu
     *   }
     * })
     * 
     */
    delete<T extends sys_menuDeleteArgs>(args: SelectSubset<T, sys_menuDeleteArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sys_menu.
     * @param {sys_menuUpdateArgs} args - Arguments to update one Sys_menu.
     * @example
     * // Update one Sys_menu
     * const sys_menu = await prisma.sys_menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sys_menuUpdateArgs>(args: SelectSubset<T, sys_menuUpdateArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sys_menus.
     * @param {sys_menuDeleteManyArgs} args - Arguments to filter Sys_menus to delete.
     * @example
     * // Delete a few Sys_menus
     * const { count } = await prisma.sys_menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sys_menuDeleteManyArgs>(args?: SelectSubset<T, sys_menuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_menuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_menus
     * const sys_menu = await prisma.sys_menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sys_menuUpdateManyArgs>(args: SelectSubset<T, sys_menuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_menu.
     * @param {sys_menuUpsertArgs} args - Arguments to update or create a Sys_menu.
     * @example
     * // Update or create a Sys_menu
     * const sys_menu = await prisma.sys_menu.upsert({
     *   create: {
     *     // ... data to create a Sys_menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_menu we want to update
     *   }
     * })
     */
    upsert<T extends sys_menuUpsertArgs>(args: SelectSubset<T, sys_menuUpsertArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sys_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_menuCountArgs} args - Arguments to filter Sys_menus to count.
     * @example
     * // Count the number of Sys_menus
     * const count = await prisma.sys_menu.count({
     *   where: {
     *     // ... the filter for the Sys_menus we want to count
     *   }
     * })
    **/
    count<T extends sys_menuCountArgs>(
      args?: Subset<T, sys_menuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_menuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_menuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sys_menuAggregateArgs>(args: Subset<T, Sys_menuAggregateArgs>): Prisma.PrismaPromise<GetSys_menuAggregateType<T>>

    /**
     * Group by Sys_menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_menuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sys_menuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sys_menuGroupByArgs['orderBy'] }
        : { orderBy?: sys_menuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sys_menuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_menuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sys_menu model
   */
  readonly fields: sys_menuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sys_menuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sys_menu model
   */
  interface sys_menuFieldRefs {
    readonly id: FieldRef<"sys_menu", 'BigInt'>
    readonly content: FieldRef<"sys_menu", 'String'>
    readonly remark: FieldRef<"sys_menu", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sys_menu findUnique
   */
  export type sys_menuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Filter, which sys_menu to fetch.
     */
    where: sys_menuWhereUniqueInput
  }

  /**
   * sys_menu findUniqueOrThrow
   */
  export type sys_menuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Filter, which sys_menu to fetch.
     */
    where: sys_menuWhereUniqueInput
  }

  /**
   * sys_menu findFirst
   */
  export type sys_menuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Filter, which sys_menu to fetch.
     */
    where?: sys_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_menus to fetch.
     */
    orderBy?: sys_menuOrderByWithRelationInput | sys_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_menus.
     */
    cursor?: sys_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_menus.
     */
    distinct?: Sys_menuScalarFieldEnum | Sys_menuScalarFieldEnum[]
  }

  /**
   * sys_menu findFirstOrThrow
   */
  export type sys_menuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Filter, which sys_menu to fetch.
     */
    where?: sys_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_menus to fetch.
     */
    orderBy?: sys_menuOrderByWithRelationInput | sys_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_menus.
     */
    cursor?: sys_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_menus.
     */
    distinct?: Sys_menuScalarFieldEnum | Sys_menuScalarFieldEnum[]
  }

  /**
   * sys_menu findMany
   */
  export type sys_menuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Filter, which sys_menus to fetch.
     */
    where?: sys_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_menus to fetch.
     */
    orderBy?: sys_menuOrderByWithRelationInput | sys_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_menus.
     */
    cursor?: sys_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_menus.
     */
    skip?: number
    distinct?: Sys_menuScalarFieldEnum | Sys_menuScalarFieldEnum[]
  }

  /**
   * sys_menu create
   */
  export type sys_menuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * The data needed to create a sys_menu.
     */
    data?: XOR<sys_menuCreateInput, sys_menuUncheckedCreateInput>
  }

  /**
   * sys_menu createMany
   */
  export type sys_menuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sys_menus.
     */
    data: sys_menuCreateManyInput | sys_menuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sys_menu update
   */
  export type sys_menuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * The data needed to update a sys_menu.
     */
    data: XOR<sys_menuUpdateInput, sys_menuUncheckedUpdateInput>
    /**
     * Choose, which sys_menu to update.
     */
    where: sys_menuWhereUniqueInput
  }

  /**
   * sys_menu updateMany
   */
  export type sys_menuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sys_menus.
     */
    data: XOR<sys_menuUpdateManyMutationInput, sys_menuUncheckedUpdateManyInput>
    /**
     * Filter which sys_menus to update
     */
    where?: sys_menuWhereInput
    /**
     * Limit how many sys_menus to update.
     */
    limit?: number
  }

  /**
   * sys_menu upsert
   */
  export type sys_menuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * The filter to search for the sys_menu to update in case it exists.
     */
    where: sys_menuWhereUniqueInput
    /**
     * In case the sys_menu found by the `where` argument doesn't exist, create a new sys_menu with this data.
     */
    create: XOR<sys_menuCreateInput, sys_menuUncheckedCreateInput>
    /**
     * In case the sys_menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sys_menuUpdateInput, sys_menuUncheckedUpdateInput>
  }

  /**
   * sys_menu delete
   */
  export type sys_menuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Filter which sys_menu to delete.
     */
    where: sys_menuWhereUniqueInput
  }

  /**
   * sys_menu deleteMany
   */
  export type sys_menuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_menus to delete
     */
    where?: sys_menuWhereInput
    /**
     * Limit how many sys_menus to delete.
     */
    limit?: number
  }

  /**
   * sys_menu without action
   */
  export type sys_menuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
  }


  /**
   * Model sys_notice
   */

  export type AggregateSys_notice = {
    _count: Sys_noticeCountAggregateOutputType | null
    _avg: Sys_noticeAvgAggregateOutputType | null
    _sum: Sys_noticeSumAggregateOutputType | null
    _min: Sys_noticeMinAggregateOutputType | null
    _max: Sys_noticeMaxAggregateOutputType | null
  }

  export type Sys_noticeAvgAggregateOutputType = {
    id: number | null
  }

  export type Sys_noticeSumAggregateOutputType = {
    id: number | null
  }

  export type Sys_noticeMinAggregateOutputType = {
    id: number | null
    title: string | null
    type: string | null
    content: string | null
    status: string | null
    remark: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Sys_noticeMaxAggregateOutputType = {
    id: number | null
    title: string | null
    type: string | null
    content: string | null
    status: string | null
    remark: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Sys_noticeCountAggregateOutputType = {
    id: number
    title: number
    type: number
    content: number
    status: number
    remark: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Sys_noticeAvgAggregateInputType = {
    id?: true
  }

  export type Sys_noticeSumAggregateInputType = {
    id?: true
  }

  export type Sys_noticeMinAggregateInputType = {
    id?: true
    title?: true
    type?: true
    content?: true
    status?: true
    remark?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Sys_noticeMaxAggregateInputType = {
    id?: true
    title?: true
    type?: true
    content?: true
    status?: true
    remark?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Sys_noticeCountAggregateInputType = {
    id?: true
    title?: true
    type?: true
    content?: true
    status?: true
    remark?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Sys_noticeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_notice to aggregate.
     */
    where?: sys_noticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_notices to fetch.
     */
    orderBy?: sys_noticeOrderByWithRelationInput | sys_noticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sys_noticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_notices
    **/
    _count?: true | Sys_noticeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sys_noticeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sys_noticeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_noticeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_noticeMaxAggregateInputType
  }

  export type GetSys_noticeAggregateType<T extends Sys_noticeAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_notice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_notice[P]>
      : GetScalarType<T[P], AggregateSys_notice[P]>
  }




  export type sys_noticeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_noticeWhereInput
    orderBy?: sys_noticeOrderByWithAggregationInput | sys_noticeOrderByWithAggregationInput[]
    by: Sys_noticeScalarFieldEnum[] | Sys_noticeScalarFieldEnum
    having?: sys_noticeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_noticeCountAggregateInputType | true
    _avg?: Sys_noticeAvgAggregateInputType
    _sum?: Sys_noticeSumAggregateInputType
    _min?: Sys_noticeMinAggregateInputType
    _max?: Sys_noticeMaxAggregateInputType
  }

  export type Sys_noticeGroupByOutputType = {
    id: number
    title: string
    type: string
    content: string | null
    status: string | null
    remark: string | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: Sys_noticeCountAggregateOutputType | null
    _avg: Sys_noticeAvgAggregateOutputType | null
    _sum: Sys_noticeSumAggregateOutputType | null
    _min: Sys_noticeMinAggregateOutputType | null
    _max: Sys_noticeMaxAggregateOutputType | null
  }

  type GetSys_noticeGroupByPayload<T extends sys_noticeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sys_noticeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_noticeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_noticeGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_noticeGroupByOutputType[P]>
        }
      >
    >


  export type sys_noticeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    content?: boolean
    status?: boolean
    remark?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sys_notice"]>



  export type sys_noticeSelectScalar = {
    id?: boolean
    title?: boolean
    type?: boolean
    content?: boolean
    status?: boolean
    remark?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type sys_noticeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "type" | "content" | "status" | "remark" | "createdAt" | "updatedAt", ExtArgs["result"]["sys_notice"]>

  export type $sys_noticePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sys_notice"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      type: string
      content: string | null
      status: string | null
      remark: string | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["sys_notice"]>
    composites: {}
  }

  type sys_noticeGetPayload<S extends boolean | null | undefined | sys_noticeDefaultArgs> = $Result.GetResult<Prisma.$sys_noticePayload, S>

  type sys_noticeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sys_noticeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sys_noticeCountAggregateInputType | true
    }

  export interface sys_noticeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sys_notice'], meta: { name: 'sys_notice' } }
    /**
     * Find zero or one Sys_notice that matches the filter.
     * @param {sys_noticeFindUniqueArgs} args - Arguments to find a Sys_notice
     * @example
     * // Get one Sys_notice
     * const sys_notice = await prisma.sys_notice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sys_noticeFindUniqueArgs>(args: SelectSubset<T, sys_noticeFindUniqueArgs<ExtArgs>>): Prisma__sys_noticeClient<$Result.GetResult<Prisma.$sys_noticePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sys_notice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sys_noticeFindUniqueOrThrowArgs} args - Arguments to find a Sys_notice
     * @example
     * // Get one Sys_notice
     * const sys_notice = await prisma.sys_notice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sys_noticeFindUniqueOrThrowArgs>(args: SelectSubset<T, sys_noticeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sys_noticeClient<$Result.GetResult<Prisma.$sys_noticePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_notice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_noticeFindFirstArgs} args - Arguments to find a Sys_notice
     * @example
     * // Get one Sys_notice
     * const sys_notice = await prisma.sys_notice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sys_noticeFindFirstArgs>(args?: SelectSubset<T, sys_noticeFindFirstArgs<ExtArgs>>): Prisma__sys_noticeClient<$Result.GetResult<Prisma.$sys_noticePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_notice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_noticeFindFirstOrThrowArgs} args - Arguments to find a Sys_notice
     * @example
     * // Get one Sys_notice
     * const sys_notice = await prisma.sys_notice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sys_noticeFindFirstOrThrowArgs>(args?: SelectSubset<T, sys_noticeFindFirstOrThrowArgs<ExtArgs>>): Prisma__sys_noticeClient<$Result.GetResult<Prisma.$sys_noticePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sys_notices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_noticeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_notices
     * const sys_notices = await prisma.sys_notice.findMany()
     * 
     * // Get first 10 Sys_notices
     * const sys_notices = await prisma.sys_notice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sys_noticeWithIdOnly = await prisma.sys_notice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sys_noticeFindManyArgs>(args?: SelectSubset<T, sys_noticeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_noticePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sys_notice.
     * @param {sys_noticeCreateArgs} args - Arguments to create a Sys_notice.
     * @example
     * // Create one Sys_notice
     * const Sys_notice = await prisma.sys_notice.create({
     *   data: {
     *     // ... data to create a Sys_notice
     *   }
     * })
     * 
     */
    create<T extends sys_noticeCreateArgs>(args: SelectSubset<T, sys_noticeCreateArgs<ExtArgs>>): Prisma__sys_noticeClient<$Result.GetResult<Prisma.$sys_noticePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sys_notices.
     * @param {sys_noticeCreateManyArgs} args - Arguments to create many Sys_notices.
     * @example
     * // Create many Sys_notices
     * const sys_notice = await prisma.sys_notice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sys_noticeCreateManyArgs>(args?: SelectSubset<T, sys_noticeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_notice.
     * @param {sys_noticeDeleteArgs} args - Arguments to delete one Sys_notice.
     * @example
     * // Delete one Sys_notice
     * const Sys_notice = await prisma.sys_notice.delete({
     *   where: {
     *     // ... filter to delete one Sys_notice
     *   }
     * })
     * 
     */
    delete<T extends sys_noticeDeleteArgs>(args: SelectSubset<T, sys_noticeDeleteArgs<ExtArgs>>): Prisma__sys_noticeClient<$Result.GetResult<Prisma.$sys_noticePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sys_notice.
     * @param {sys_noticeUpdateArgs} args - Arguments to update one Sys_notice.
     * @example
     * // Update one Sys_notice
     * const sys_notice = await prisma.sys_notice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sys_noticeUpdateArgs>(args: SelectSubset<T, sys_noticeUpdateArgs<ExtArgs>>): Prisma__sys_noticeClient<$Result.GetResult<Prisma.$sys_noticePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sys_notices.
     * @param {sys_noticeDeleteManyArgs} args - Arguments to filter Sys_notices to delete.
     * @example
     * // Delete a few Sys_notices
     * const { count } = await prisma.sys_notice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sys_noticeDeleteManyArgs>(args?: SelectSubset<T, sys_noticeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_noticeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_notices
     * const sys_notice = await prisma.sys_notice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sys_noticeUpdateManyArgs>(args: SelectSubset<T, sys_noticeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_notice.
     * @param {sys_noticeUpsertArgs} args - Arguments to update or create a Sys_notice.
     * @example
     * // Update or create a Sys_notice
     * const sys_notice = await prisma.sys_notice.upsert({
     *   create: {
     *     // ... data to create a Sys_notice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_notice we want to update
     *   }
     * })
     */
    upsert<T extends sys_noticeUpsertArgs>(args: SelectSubset<T, sys_noticeUpsertArgs<ExtArgs>>): Prisma__sys_noticeClient<$Result.GetResult<Prisma.$sys_noticePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sys_notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_noticeCountArgs} args - Arguments to filter Sys_notices to count.
     * @example
     * // Count the number of Sys_notices
     * const count = await prisma.sys_notice.count({
     *   where: {
     *     // ... the filter for the Sys_notices we want to count
     *   }
     * })
    **/
    count<T extends sys_noticeCountArgs>(
      args?: Subset<T, sys_noticeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_noticeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_noticeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sys_noticeAggregateArgs>(args: Subset<T, Sys_noticeAggregateArgs>): Prisma.PrismaPromise<GetSys_noticeAggregateType<T>>

    /**
     * Group by Sys_notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_noticeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sys_noticeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sys_noticeGroupByArgs['orderBy'] }
        : { orderBy?: sys_noticeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sys_noticeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_noticeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sys_notice model
   */
  readonly fields: sys_noticeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_notice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sys_noticeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sys_notice model
   */
  interface sys_noticeFieldRefs {
    readonly id: FieldRef<"sys_notice", 'Int'>
    readonly title: FieldRef<"sys_notice", 'String'>
    readonly type: FieldRef<"sys_notice", 'String'>
    readonly content: FieldRef<"sys_notice", 'String'>
    readonly status: FieldRef<"sys_notice", 'String'>
    readonly remark: FieldRef<"sys_notice", 'String'>
    readonly createdAt: FieldRef<"sys_notice", 'DateTime'>
    readonly updatedAt: FieldRef<"sys_notice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sys_notice findUnique
   */
  export type sys_noticeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_notice
     */
    select?: sys_noticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_notice
     */
    omit?: sys_noticeOmit<ExtArgs> | null
    /**
     * Filter, which sys_notice to fetch.
     */
    where: sys_noticeWhereUniqueInput
  }

  /**
   * sys_notice findUniqueOrThrow
   */
  export type sys_noticeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_notice
     */
    select?: sys_noticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_notice
     */
    omit?: sys_noticeOmit<ExtArgs> | null
    /**
     * Filter, which sys_notice to fetch.
     */
    where: sys_noticeWhereUniqueInput
  }

  /**
   * sys_notice findFirst
   */
  export type sys_noticeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_notice
     */
    select?: sys_noticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_notice
     */
    omit?: sys_noticeOmit<ExtArgs> | null
    /**
     * Filter, which sys_notice to fetch.
     */
    where?: sys_noticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_notices to fetch.
     */
    orderBy?: sys_noticeOrderByWithRelationInput | sys_noticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_notices.
     */
    cursor?: sys_noticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_notices.
     */
    distinct?: Sys_noticeScalarFieldEnum | Sys_noticeScalarFieldEnum[]
  }

  /**
   * sys_notice findFirstOrThrow
   */
  export type sys_noticeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_notice
     */
    select?: sys_noticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_notice
     */
    omit?: sys_noticeOmit<ExtArgs> | null
    /**
     * Filter, which sys_notice to fetch.
     */
    where?: sys_noticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_notices to fetch.
     */
    orderBy?: sys_noticeOrderByWithRelationInput | sys_noticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_notices.
     */
    cursor?: sys_noticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_notices.
     */
    distinct?: Sys_noticeScalarFieldEnum | Sys_noticeScalarFieldEnum[]
  }

  /**
   * sys_notice findMany
   */
  export type sys_noticeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_notice
     */
    select?: sys_noticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_notice
     */
    omit?: sys_noticeOmit<ExtArgs> | null
    /**
     * Filter, which sys_notices to fetch.
     */
    where?: sys_noticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_notices to fetch.
     */
    orderBy?: sys_noticeOrderByWithRelationInput | sys_noticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_notices.
     */
    cursor?: sys_noticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_notices.
     */
    skip?: number
    distinct?: Sys_noticeScalarFieldEnum | Sys_noticeScalarFieldEnum[]
  }

  /**
   * sys_notice create
   */
  export type sys_noticeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_notice
     */
    select?: sys_noticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_notice
     */
    omit?: sys_noticeOmit<ExtArgs> | null
    /**
     * The data needed to create a sys_notice.
     */
    data: XOR<sys_noticeCreateInput, sys_noticeUncheckedCreateInput>
  }

  /**
   * sys_notice createMany
   */
  export type sys_noticeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sys_notices.
     */
    data: sys_noticeCreateManyInput | sys_noticeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sys_notice update
   */
  export type sys_noticeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_notice
     */
    select?: sys_noticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_notice
     */
    omit?: sys_noticeOmit<ExtArgs> | null
    /**
     * The data needed to update a sys_notice.
     */
    data: XOR<sys_noticeUpdateInput, sys_noticeUncheckedUpdateInput>
    /**
     * Choose, which sys_notice to update.
     */
    where: sys_noticeWhereUniqueInput
  }

  /**
   * sys_notice updateMany
   */
  export type sys_noticeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sys_notices.
     */
    data: XOR<sys_noticeUpdateManyMutationInput, sys_noticeUncheckedUpdateManyInput>
    /**
     * Filter which sys_notices to update
     */
    where?: sys_noticeWhereInput
    /**
     * Limit how many sys_notices to update.
     */
    limit?: number
  }

  /**
   * sys_notice upsert
   */
  export type sys_noticeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_notice
     */
    select?: sys_noticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_notice
     */
    omit?: sys_noticeOmit<ExtArgs> | null
    /**
     * The filter to search for the sys_notice to update in case it exists.
     */
    where: sys_noticeWhereUniqueInput
    /**
     * In case the sys_notice found by the `where` argument doesn't exist, create a new sys_notice with this data.
     */
    create: XOR<sys_noticeCreateInput, sys_noticeUncheckedCreateInput>
    /**
     * In case the sys_notice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sys_noticeUpdateInput, sys_noticeUncheckedUpdateInput>
  }

  /**
   * sys_notice delete
   */
  export type sys_noticeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_notice
     */
    select?: sys_noticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_notice
     */
    omit?: sys_noticeOmit<ExtArgs> | null
    /**
     * Filter which sys_notice to delete.
     */
    where: sys_noticeWhereUniqueInput
  }

  /**
   * sys_notice deleteMany
   */
  export type sys_noticeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_notices to delete
     */
    where?: sys_noticeWhereInput
    /**
     * Limit how many sys_notices to delete.
     */
    limit?: number
  }

  /**
   * sys_notice without action
   */
  export type sys_noticeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_notice
     */
    select?: sys_noticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_notice
     */
    omit?: sys_noticeOmit<ExtArgs> | null
  }


  /**
   * Model sys_role
   */

  export type AggregateSys_role = {
    _count: Sys_roleCountAggregateOutputType | null
    _avg: Sys_roleAvgAggregateOutputType | null
    _sum: Sys_roleSumAggregateOutputType | null
    _min: Sys_roleMinAggregateOutputType | null
    _max: Sys_roleMaxAggregateOutputType | null
  }

  export type Sys_roleAvgAggregateOutputType = {
    id: number | null
    sort: number | null
  }

  export type Sys_roleSumAggregateOutputType = {
    id: number | null
    sort: number | null
  }

  export type Sys_roleMinAggregateOutputType = {
    id: number | null
    name: string | null
    value: string | null
    sort: number | null
    status: string | null
    remark: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Sys_roleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    value: string | null
    sort: number | null
    status: string | null
    remark: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Sys_roleCountAggregateOutputType = {
    id: number
    name: number
    value: number
    sort: number
    status: number
    remark: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Sys_roleAvgAggregateInputType = {
    id?: true
    sort?: true
  }

  export type Sys_roleSumAggregateInputType = {
    id?: true
    sort?: true
  }

  export type Sys_roleMinAggregateInputType = {
    id?: true
    name?: true
    value?: true
    sort?: true
    status?: true
    remark?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Sys_roleMaxAggregateInputType = {
    id?: true
    name?: true
    value?: true
    sort?: true
    status?: true
    remark?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Sys_roleCountAggregateInputType = {
    id?: true
    name?: true
    value?: true
    sort?: true
    status?: true
    remark?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Sys_roleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_role to aggregate.
     */
    where?: sys_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_roles to fetch.
     */
    orderBy?: sys_roleOrderByWithRelationInput | sys_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sys_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_roles
    **/
    _count?: true | Sys_roleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sys_roleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sys_roleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_roleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_roleMaxAggregateInputType
  }

  export type GetSys_roleAggregateType<T extends Sys_roleAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_role[P]>
      : GetScalarType<T[P], AggregateSys_role[P]>
  }




  export type sys_roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_roleWhereInput
    orderBy?: sys_roleOrderByWithAggregationInput | sys_roleOrderByWithAggregationInput[]
    by: Sys_roleScalarFieldEnum[] | Sys_roleScalarFieldEnum
    having?: sys_roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_roleCountAggregateInputType | true
    _avg?: Sys_roleAvgAggregateInputType
    _sum?: Sys_roleSumAggregateInputType
    _min?: Sys_roleMinAggregateInputType
    _max?: Sys_roleMaxAggregateInputType
  }

  export type Sys_roleGroupByOutputType = {
    id: number
    name: string
    value: string | null
    sort: number
    status: string | null
    remark: string | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: Sys_roleCountAggregateOutputType | null
    _avg: Sys_roleAvgAggregateOutputType | null
    _sum: Sys_roleSumAggregateOutputType | null
    _min: Sys_roleMinAggregateOutputType | null
    _max: Sys_roleMaxAggregateOutputType | null
  }

  type GetSys_roleGroupByPayload<T extends sys_roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sys_roleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_roleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_roleGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_roleGroupByOutputType[P]>
        }
      >
    >


  export type sys_roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    sort?: boolean
    status?: boolean
    remark?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sys_role"]>



  export type sys_roleSelectScalar = {
    id?: boolean
    name?: boolean
    value?: boolean
    sort?: boolean
    status?: boolean
    remark?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type sys_roleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "value" | "sort" | "status" | "remark" | "createdAt" | "updatedAt", ExtArgs["result"]["sys_role"]>

  export type $sys_rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sys_role"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      value: string | null
      sort: number
      status: string | null
      remark: string | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["sys_role"]>
    composites: {}
  }

  type sys_roleGetPayload<S extends boolean | null | undefined | sys_roleDefaultArgs> = $Result.GetResult<Prisma.$sys_rolePayload, S>

  type sys_roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sys_roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sys_roleCountAggregateInputType | true
    }

  export interface sys_roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sys_role'], meta: { name: 'sys_role' } }
    /**
     * Find zero or one Sys_role that matches the filter.
     * @param {sys_roleFindUniqueArgs} args - Arguments to find a Sys_role
     * @example
     * // Get one Sys_role
     * const sys_role = await prisma.sys_role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sys_roleFindUniqueArgs>(args: SelectSubset<T, sys_roleFindUniqueArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sys_role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sys_roleFindUniqueOrThrowArgs} args - Arguments to find a Sys_role
     * @example
     * // Get one Sys_role
     * const sys_role = await prisma.sys_role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sys_roleFindUniqueOrThrowArgs>(args: SelectSubset<T, sys_roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_roleFindFirstArgs} args - Arguments to find a Sys_role
     * @example
     * // Get one Sys_role
     * const sys_role = await prisma.sys_role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sys_roleFindFirstArgs>(args?: SelectSubset<T, sys_roleFindFirstArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_roleFindFirstOrThrowArgs} args - Arguments to find a Sys_role
     * @example
     * // Get one Sys_role
     * const sys_role = await prisma.sys_role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sys_roleFindFirstOrThrowArgs>(args?: SelectSubset<T, sys_roleFindFirstOrThrowArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sys_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_roles
     * const sys_roles = await prisma.sys_role.findMany()
     * 
     * // Get first 10 Sys_roles
     * const sys_roles = await prisma.sys_role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sys_roleWithIdOnly = await prisma.sys_role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sys_roleFindManyArgs>(args?: SelectSubset<T, sys_roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sys_role.
     * @param {sys_roleCreateArgs} args - Arguments to create a Sys_role.
     * @example
     * // Create one Sys_role
     * const Sys_role = await prisma.sys_role.create({
     *   data: {
     *     // ... data to create a Sys_role
     *   }
     * })
     * 
     */
    create<T extends sys_roleCreateArgs>(args: SelectSubset<T, sys_roleCreateArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sys_roles.
     * @param {sys_roleCreateManyArgs} args - Arguments to create many Sys_roles.
     * @example
     * // Create many Sys_roles
     * const sys_role = await prisma.sys_role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sys_roleCreateManyArgs>(args?: SelectSubset<T, sys_roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_role.
     * @param {sys_roleDeleteArgs} args - Arguments to delete one Sys_role.
     * @example
     * // Delete one Sys_role
     * const Sys_role = await prisma.sys_role.delete({
     *   where: {
     *     // ... filter to delete one Sys_role
     *   }
     * })
     * 
     */
    delete<T extends sys_roleDeleteArgs>(args: SelectSubset<T, sys_roleDeleteArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sys_role.
     * @param {sys_roleUpdateArgs} args - Arguments to update one Sys_role.
     * @example
     * // Update one Sys_role
     * const sys_role = await prisma.sys_role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sys_roleUpdateArgs>(args: SelectSubset<T, sys_roleUpdateArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sys_roles.
     * @param {sys_roleDeleteManyArgs} args - Arguments to filter Sys_roles to delete.
     * @example
     * // Delete a few Sys_roles
     * const { count } = await prisma.sys_role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sys_roleDeleteManyArgs>(args?: SelectSubset<T, sys_roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_roles
     * const sys_role = await prisma.sys_role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sys_roleUpdateManyArgs>(args: SelectSubset<T, sys_roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_role.
     * @param {sys_roleUpsertArgs} args - Arguments to update or create a Sys_role.
     * @example
     * // Update or create a Sys_role
     * const sys_role = await prisma.sys_role.upsert({
     *   create: {
     *     // ... data to create a Sys_role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_role we want to update
     *   }
     * })
     */
    upsert<T extends sys_roleUpsertArgs>(args: SelectSubset<T, sys_roleUpsertArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sys_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_roleCountArgs} args - Arguments to filter Sys_roles to count.
     * @example
     * // Count the number of Sys_roles
     * const count = await prisma.sys_role.count({
     *   where: {
     *     // ... the filter for the Sys_roles we want to count
     *   }
     * })
    **/
    count<T extends sys_roleCountArgs>(
      args?: Subset<T, sys_roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_roleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_roleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sys_roleAggregateArgs>(args: Subset<T, Sys_roleAggregateArgs>): Prisma.PrismaPromise<GetSys_roleAggregateType<T>>

    /**
     * Group by Sys_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_roleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sys_roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sys_roleGroupByArgs['orderBy'] }
        : { orderBy?: sys_roleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sys_roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_roleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sys_role model
   */
  readonly fields: sys_roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sys_roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sys_role model
   */
  interface sys_roleFieldRefs {
    readonly id: FieldRef<"sys_role", 'Int'>
    readonly name: FieldRef<"sys_role", 'String'>
    readonly value: FieldRef<"sys_role", 'String'>
    readonly sort: FieldRef<"sys_role", 'Int'>
    readonly status: FieldRef<"sys_role", 'String'>
    readonly remark: FieldRef<"sys_role", 'String'>
    readonly createdAt: FieldRef<"sys_role", 'DateTime'>
    readonly updatedAt: FieldRef<"sys_role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sys_role findUnique
   */
  export type sys_roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Filter, which sys_role to fetch.
     */
    where: sys_roleWhereUniqueInput
  }

  /**
   * sys_role findUniqueOrThrow
   */
  export type sys_roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Filter, which sys_role to fetch.
     */
    where: sys_roleWhereUniqueInput
  }

  /**
   * sys_role findFirst
   */
  export type sys_roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Filter, which sys_role to fetch.
     */
    where?: sys_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_roles to fetch.
     */
    orderBy?: sys_roleOrderByWithRelationInput | sys_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_roles.
     */
    cursor?: sys_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_roles.
     */
    distinct?: Sys_roleScalarFieldEnum | Sys_roleScalarFieldEnum[]
  }

  /**
   * sys_role findFirstOrThrow
   */
  export type sys_roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Filter, which sys_role to fetch.
     */
    where?: sys_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_roles to fetch.
     */
    orderBy?: sys_roleOrderByWithRelationInput | sys_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_roles.
     */
    cursor?: sys_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_roles.
     */
    distinct?: Sys_roleScalarFieldEnum | Sys_roleScalarFieldEnum[]
  }

  /**
   * sys_role findMany
   */
  export type sys_roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Filter, which sys_roles to fetch.
     */
    where?: sys_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_roles to fetch.
     */
    orderBy?: sys_roleOrderByWithRelationInput | sys_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_roles.
     */
    cursor?: sys_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_roles.
     */
    skip?: number
    distinct?: Sys_roleScalarFieldEnum | Sys_roleScalarFieldEnum[]
  }

  /**
   * sys_role create
   */
  export type sys_roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * The data needed to create a sys_role.
     */
    data: XOR<sys_roleCreateInput, sys_roleUncheckedCreateInput>
  }

  /**
   * sys_role createMany
   */
  export type sys_roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sys_roles.
     */
    data: sys_roleCreateManyInput | sys_roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sys_role update
   */
  export type sys_roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * The data needed to update a sys_role.
     */
    data: XOR<sys_roleUpdateInput, sys_roleUncheckedUpdateInput>
    /**
     * Choose, which sys_role to update.
     */
    where: sys_roleWhereUniqueInput
  }

  /**
   * sys_role updateMany
   */
  export type sys_roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sys_roles.
     */
    data: XOR<sys_roleUpdateManyMutationInput, sys_roleUncheckedUpdateManyInput>
    /**
     * Filter which sys_roles to update
     */
    where?: sys_roleWhereInput
    /**
     * Limit how many sys_roles to update.
     */
    limit?: number
  }

  /**
   * sys_role upsert
   */
  export type sys_roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * The filter to search for the sys_role to update in case it exists.
     */
    where: sys_roleWhereUniqueInput
    /**
     * In case the sys_role found by the `where` argument doesn't exist, create a new sys_role with this data.
     */
    create: XOR<sys_roleCreateInput, sys_roleUncheckedCreateInput>
    /**
     * In case the sys_role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sys_roleUpdateInput, sys_roleUncheckedUpdateInput>
  }

  /**
   * sys_role delete
   */
  export type sys_roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Filter which sys_role to delete.
     */
    where: sys_roleWhereUniqueInput
  }

  /**
   * sys_role deleteMany
   */
  export type sys_roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_roles to delete
     */
    where?: sys_roleWhereInput
    /**
     * Limit how many sys_roles to delete.
     */
    limit?: number
  }

  /**
   * sys_role without action
   */
  export type sys_roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
  }


  /**
   * Model sys_user
   */

  export type AggregateSys_user = {
    _count: Sys_userCountAggregateOutputType | null
    _avg: Sys_userAvgAggregateOutputType | null
    _sum: Sys_userSumAggregateOutputType | null
    _min: Sys_userMinAggregateOutputType | null
    _max: Sys_userMaxAggregateOutputType | null
  }

  export type Sys_userAvgAggregateOutputType = {
    id: number | null
  }

  export type Sys_userSumAggregateOutputType = {
    id: number | null
  }

  export type Sys_userMinAggregateOutputType = {
    id: number | null
    role_id: string | null
    username: string | null
    password: string | null
    status: string | null
    remark: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Sys_userMaxAggregateOutputType = {
    id: number | null
    role_id: string | null
    username: string | null
    password: string | null
    status: string | null
    remark: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Sys_userCountAggregateOutputType = {
    id: number
    role_id: number
    username: number
    password: number
    status: number
    remark: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Sys_userAvgAggregateInputType = {
    id?: true
  }

  export type Sys_userSumAggregateInputType = {
    id?: true
  }

  export type Sys_userMinAggregateInputType = {
    id?: true
    role_id?: true
    username?: true
    password?: true
    status?: true
    remark?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Sys_userMaxAggregateInputType = {
    id?: true
    role_id?: true
    username?: true
    password?: true
    status?: true
    remark?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Sys_userCountAggregateInputType = {
    id?: true
    role_id?: true
    username?: true
    password?: true
    status?: true
    remark?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Sys_userAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_user to aggregate.
     */
    where?: sys_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_users to fetch.
     */
    orderBy?: sys_userOrderByWithRelationInput | sys_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sys_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_users
    **/
    _count?: true | Sys_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sys_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sys_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_userMaxAggregateInputType
  }

  export type GetSys_userAggregateType<T extends Sys_userAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_user[P]>
      : GetScalarType<T[P], AggregateSys_user[P]>
  }




  export type sys_userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_userWhereInput
    orderBy?: sys_userOrderByWithAggregationInput | sys_userOrderByWithAggregationInput[]
    by: Sys_userScalarFieldEnum[] | Sys_userScalarFieldEnum
    having?: sys_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_userCountAggregateInputType | true
    _avg?: Sys_userAvgAggregateInputType
    _sum?: Sys_userSumAggregateInputType
    _min?: Sys_userMinAggregateInputType
    _max?: Sys_userMaxAggregateInputType
  }

  export type Sys_userGroupByOutputType = {
    id: number
    role_id: string
    username: string
    password: string
    status: string | null
    remark: string | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: Sys_userCountAggregateOutputType | null
    _avg: Sys_userAvgAggregateOutputType | null
    _sum: Sys_userSumAggregateOutputType | null
    _min: Sys_userMinAggregateOutputType | null
    _max: Sys_userMaxAggregateOutputType | null
  }

  type GetSys_userGroupByPayload<T extends sys_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sys_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_userGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_userGroupByOutputType[P]>
        }
      >
    >


  export type sys_userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_id?: boolean
    username?: boolean
    password?: boolean
    status?: boolean
    remark?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sys_user"]>



  export type sys_userSelectScalar = {
    id?: boolean
    role_id?: boolean
    username?: boolean
    password?: boolean
    status?: boolean
    remark?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type sys_userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role_id" | "username" | "password" | "status" | "remark" | "createdAt" | "updatedAt", ExtArgs["result"]["sys_user"]>

  export type $sys_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sys_user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role_id: string
      username: string
      password: string
      status: string | null
      remark: string | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["sys_user"]>
    composites: {}
  }

  type sys_userGetPayload<S extends boolean | null | undefined | sys_userDefaultArgs> = $Result.GetResult<Prisma.$sys_userPayload, S>

  type sys_userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sys_userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sys_userCountAggregateInputType | true
    }

  export interface sys_userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sys_user'], meta: { name: 'sys_user' } }
    /**
     * Find zero or one Sys_user that matches the filter.
     * @param {sys_userFindUniqueArgs} args - Arguments to find a Sys_user
     * @example
     * // Get one Sys_user
     * const sys_user = await prisma.sys_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sys_userFindUniqueArgs>(args: SelectSubset<T, sys_userFindUniqueArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sys_user that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sys_userFindUniqueOrThrowArgs} args - Arguments to find a Sys_user
     * @example
     * // Get one Sys_user
     * const sys_user = await prisma.sys_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sys_userFindUniqueOrThrowArgs>(args: SelectSubset<T, sys_userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_userFindFirstArgs} args - Arguments to find a Sys_user
     * @example
     * // Get one Sys_user
     * const sys_user = await prisma.sys_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sys_userFindFirstArgs>(args?: SelectSubset<T, sys_userFindFirstArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_user that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_userFindFirstOrThrowArgs} args - Arguments to find a Sys_user
     * @example
     * // Get one Sys_user
     * const sys_user = await prisma.sys_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sys_userFindFirstOrThrowArgs>(args?: SelectSubset<T, sys_userFindFirstOrThrowArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sys_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_users
     * const sys_users = await prisma.sys_user.findMany()
     * 
     * // Get first 10 Sys_users
     * const sys_users = await prisma.sys_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sys_userWithIdOnly = await prisma.sys_user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sys_userFindManyArgs>(args?: SelectSubset<T, sys_userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sys_user.
     * @param {sys_userCreateArgs} args - Arguments to create a Sys_user.
     * @example
     * // Create one Sys_user
     * const Sys_user = await prisma.sys_user.create({
     *   data: {
     *     // ... data to create a Sys_user
     *   }
     * })
     * 
     */
    create<T extends sys_userCreateArgs>(args: SelectSubset<T, sys_userCreateArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sys_users.
     * @param {sys_userCreateManyArgs} args - Arguments to create many Sys_users.
     * @example
     * // Create many Sys_users
     * const sys_user = await prisma.sys_user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sys_userCreateManyArgs>(args?: SelectSubset<T, sys_userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_user.
     * @param {sys_userDeleteArgs} args - Arguments to delete one Sys_user.
     * @example
     * // Delete one Sys_user
     * const Sys_user = await prisma.sys_user.delete({
     *   where: {
     *     // ... filter to delete one Sys_user
     *   }
     * })
     * 
     */
    delete<T extends sys_userDeleteArgs>(args: SelectSubset<T, sys_userDeleteArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sys_user.
     * @param {sys_userUpdateArgs} args - Arguments to update one Sys_user.
     * @example
     * // Update one Sys_user
     * const sys_user = await prisma.sys_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sys_userUpdateArgs>(args: SelectSubset<T, sys_userUpdateArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sys_users.
     * @param {sys_userDeleteManyArgs} args - Arguments to filter Sys_users to delete.
     * @example
     * // Delete a few Sys_users
     * const { count } = await prisma.sys_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sys_userDeleteManyArgs>(args?: SelectSubset<T, sys_userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_users
     * const sys_user = await prisma.sys_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sys_userUpdateManyArgs>(args: SelectSubset<T, sys_userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_user.
     * @param {sys_userUpsertArgs} args - Arguments to update or create a Sys_user.
     * @example
     * // Update or create a Sys_user
     * const sys_user = await prisma.sys_user.upsert({
     *   create: {
     *     // ... data to create a Sys_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_user we want to update
     *   }
     * })
     */
    upsert<T extends sys_userUpsertArgs>(args: SelectSubset<T, sys_userUpsertArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sys_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_userCountArgs} args - Arguments to filter Sys_users to count.
     * @example
     * // Count the number of Sys_users
     * const count = await prisma.sys_user.count({
     *   where: {
     *     // ... the filter for the Sys_users we want to count
     *   }
     * })
    **/
    count<T extends sys_userCountArgs>(
      args?: Subset<T, sys_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sys_userAggregateArgs>(args: Subset<T, Sys_userAggregateArgs>): Prisma.PrismaPromise<GetSys_userAggregateType<T>>

    /**
     * Group by Sys_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sys_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sys_userGroupByArgs['orderBy'] }
        : { orderBy?: sys_userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sys_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sys_user model
   */
  readonly fields: sys_userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sys_userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sys_user model
   */
  interface sys_userFieldRefs {
    readonly id: FieldRef<"sys_user", 'Int'>
    readonly role_id: FieldRef<"sys_user", 'String'>
    readonly username: FieldRef<"sys_user", 'String'>
    readonly password: FieldRef<"sys_user", 'String'>
    readonly status: FieldRef<"sys_user", 'String'>
    readonly remark: FieldRef<"sys_user", 'String'>
    readonly createdAt: FieldRef<"sys_user", 'DateTime'>
    readonly updatedAt: FieldRef<"sys_user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sys_user findUnique
   */
  export type sys_userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Filter, which sys_user to fetch.
     */
    where: sys_userWhereUniqueInput
  }

  /**
   * sys_user findUniqueOrThrow
   */
  export type sys_userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Filter, which sys_user to fetch.
     */
    where: sys_userWhereUniqueInput
  }

  /**
   * sys_user findFirst
   */
  export type sys_userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Filter, which sys_user to fetch.
     */
    where?: sys_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_users to fetch.
     */
    orderBy?: sys_userOrderByWithRelationInput | sys_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_users.
     */
    cursor?: sys_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_users.
     */
    distinct?: Sys_userScalarFieldEnum | Sys_userScalarFieldEnum[]
  }

  /**
   * sys_user findFirstOrThrow
   */
  export type sys_userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Filter, which sys_user to fetch.
     */
    where?: sys_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_users to fetch.
     */
    orderBy?: sys_userOrderByWithRelationInput | sys_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_users.
     */
    cursor?: sys_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_users.
     */
    distinct?: Sys_userScalarFieldEnum | Sys_userScalarFieldEnum[]
  }

  /**
   * sys_user findMany
   */
  export type sys_userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Filter, which sys_users to fetch.
     */
    where?: sys_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_users to fetch.
     */
    orderBy?: sys_userOrderByWithRelationInput | sys_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_users.
     */
    cursor?: sys_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_users.
     */
    skip?: number
    distinct?: Sys_userScalarFieldEnum | Sys_userScalarFieldEnum[]
  }

  /**
   * sys_user create
   */
  export type sys_userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * The data needed to create a sys_user.
     */
    data: XOR<sys_userCreateInput, sys_userUncheckedCreateInput>
  }

  /**
   * sys_user createMany
   */
  export type sys_userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sys_users.
     */
    data: sys_userCreateManyInput | sys_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sys_user update
   */
  export type sys_userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * The data needed to update a sys_user.
     */
    data: XOR<sys_userUpdateInput, sys_userUncheckedUpdateInput>
    /**
     * Choose, which sys_user to update.
     */
    where: sys_userWhereUniqueInput
  }

  /**
   * sys_user updateMany
   */
  export type sys_userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sys_users.
     */
    data: XOR<sys_userUpdateManyMutationInput, sys_userUncheckedUpdateManyInput>
    /**
     * Filter which sys_users to update
     */
    where?: sys_userWhereInput
    /**
     * Limit how many sys_users to update.
     */
    limit?: number
  }

  /**
   * sys_user upsert
   */
  export type sys_userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * The filter to search for the sys_user to update in case it exists.
     */
    where: sys_userWhereUniqueInput
    /**
     * In case the sys_user found by the `where` argument doesn't exist, create a new sys_user with this data.
     */
    create: XOR<sys_userCreateInput, sys_userUncheckedCreateInput>
    /**
     * In case the sys_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sys_userUpdateInput, sys_userUncheckedUpdateInput>
  }

  /**
   * sys_user delete
   */
  export type sys_userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Filter which sys_user to delete.
     */
    where: sys_userWhereUniqueInput
  }

  /**
   * sys_user deleteMany
   */
  export type sys_userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_users to delete
     */
    where?: sys_userWhereInput
    /**
     * Limit how many sys_users to delete.
     */
    limit?: number
  }

  /**
   * sys_user without action
   */
  export type sys_userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Cms_articleScalarFieldEnum: {
    id: 'id',
    cid: 'cid',
    subCid: 'subCid',
    title: 'title',
    shortTitle: 'shortTitle',
    tagId: 'tagId',
    attr: 'attr',
    articleView: 'articleView',
    source: 'source',
    author: 'author',
    description: 'description',
    img: 'img',
    content: 'content',
    status: 'status',
    pv: 'pv',
    link: 'link',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Cms_articleScalarFieldEnum = (typeof Cms_articleScalarFieldEnum)[keyof typeof Cms_articleScalarFieldEnum]


  export const Cms_articletagScalarFieldEnum: {
    id: 'id',
    aid: 'aid',
    tid: 'tid'
  };

  export type Cms_articletagScalarFieldEnum = (typeof Cms_articletagScalarFieldEnum)[keyof typeof Cms_articletagScalarFieldEnum]


  export const Cms_categoryScalarFieldEnum: {
    id: 'id',
    pid: 'pid',
    seoTitle: 'seoTitle',
    seoKeywords: 'seoKeywords',
    seoDescription: 'seoDescription',
    name: 'name',
    pinyin: 'pinyin',
    path: 'path',
    description: 'description',
    type: 'type',
    url: 'url',
    orderBy: 'orderBy',
    target: 'target',
    status: 'status',
    mid: 'mid',
    listView: 'listView',
    articleView: 'articleView',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Cms_categoryScalarFieldEnum = (typeof Cms_categoryScalarFieldEnum)[keyof typeof Cms_categoryScalarFieldEnum]


  export const Cms_fieldScalarFieldEnum: {
    id: 'id',
    mid: 'mid',
    cname: 'cname',
    ename: 'ename',
    type: 'type',
    val: 'val',
    defaultVal: 'defaultVal',
    orderBy: 'orderBy',
    length: 'length'
  };

  export type Cms_fieldScalarFieldEnum = (typeof Cms_fieldScalarFieldEnum)[keyof typeof Cms_fieldScalarFieldEnum]


  export const Cms_fragScalarFieldEnum: {
    id: 'id',
    name: 'name',
    mark: 'mark',
    content: 'content',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Cms_fragScalarFieldEnum = (typeof Cms_fragScalarFieldEnum)[keyof typeof Cms_fragScalarFieldEnum]


  export const Cms_friendlinkScalarFieldEnum: {
    id: 'id',
    title: 'title',
    link: 'link',
    orderBy: 'orderBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Cms_friendlinkScalarFieldEnum = (typeof Cms_friendlinkScalarFieldEnum)[keyof typeof Cms_friendlinkScalarFieldEnum]


  export const Cms_messageScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    name: 'name',
    tel: 'tel',
    wechat: 'wechat',
    company: 'company',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Cms_messageScalarFieldEnum = (typeof Cms_messageScalarFieldEnum)[keyof typeof Cms_messageScalarFieldEnum]


  export const Cms_modelScalarFieldEnum: {
    id: 'id',
    model: 'model',
    tableName: 'tableName',
    status: 'status',
    remark: 'remark'
  };

  export type Cms_modelScalarFieldEnum = (typeof Cms_modelScalarFieldEnum)[keyof typeof Cms_modelScalarFieldEnum]


  export const Cms_siteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    domain: 'domain',
    email: 'email',
    wx: 'wx',
    icp: 'icp',
    code: 'code',
    json: 'json',
    title: 'title',
    keywords: 'keywords',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Cms_siteScalarFieldEnum = (typeof Cms_siteScalarFieldEnum)[keyof typeof Cms_siteScalarFieldEnum]


  export const Cms_slideScalarFieldEnum: {
    id: 'id',
    title: 'title',
    imgUrl: 'imgUrl',
    linkUrl: 'linkUrl',
    mark: 'mark',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Cms_slideScalarFieldEnum = (typeof Cms_slideScalarFieldEnum)[keyof typeof Cms_slideScalarFieldEnum]


  export const Cms_tagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    path: 'path',
    count: 'count'
  };

  export type Cms_tagScalarFieldEnum = (typeof Cms_tagScalarFieldEnum)[keyof typeof Cms_tagScalarFieldEnum]


  export const Ext_downloadScalarFieldEnum: {
    id: 'id',
    aid: 'aid',
    fileName: 'fileName',
    fileVersion: 'fileVersion',
    fileLink: 'fileLink',
    test1: 'test1'
  };

  export type Ext_downloadScalarFieldEnum = (typeof Ext_downloadScalarFieldEnum)[keyof typeof Ext_downloadScalarFieldEnum]


  export const Ext_lanhuaScalarFieldEnum: {
    id: 'id',
    aid: 'aid',
    lanName: 'lanName',
    lanFenlei: 'lanFenlei',
    lanType: 'lanType'
  };

  export type Ext_lanhuaScalarFieldEnum = (typeof Ext_lanhuaScalarFieldEnum)[keyof typeof Ext_lanhuaScalarFieldEnum]


  export const Plus_collectScalarFieldEnum: {
    id: 'id',
    taskName: 'taskName',
    targetUrl: 'targetUrl',
    listTag: 'listTag',
    startNum: 'startNum',
    endNum: 'endNum',
    increment: 'increment',
    titleTag: 'titleTag',
    articleTag: 'articleTag',
    charset: 'charset',
    pages: 'pages',
    parseData: 'parseData',
    cid: 'cid',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Plus_collectScalarFieldEnum = (typeof Plus_collectScalarFieldEnum)[keyof typeof Plus_collectScalarFieldEnum]


  export const Plus_gatherScalarFieldEnum: {
    id: 'id',
    taskName: 'taskName',
    targetUrl: 'targetUrl',
    parseData: 'parseData',
    cid: 'cid',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Plus_gatherScalarFieldEnum = (typeof Plus_gatherScalarFieldEnum)[keyof typeof Plus_gatherScalarFieldEnum]


  export const Sys_configScalarFieldEnum: {
    id: 'id',
    template: 'template',
    appid: 'appid',
    secret: 'secret',
    accessKey: 'accessKey',
    secretKey: 'secretKey',
    domain: 'domain',
    bucket: 'bucket',
    uploadWay: 'uploadWay',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Sys_configScalarFieldEnum = (typeof Sys_configScalarFieldEnum)[keyof typeof Sys_configScalarFieldEnum]


  export const Sys_loginlogScalarFieldEnum: {
    id: 'id',
    uid: 'uid',
    ip: 'ip',
    country: 'country',
    prov: 'prov',
    city: 'city',
    district: 'district',
    isp: 'isp',
    lat: 'lat',
    lng: 'lng',
    createdAt: 'createdAt'
  };

  export type Sys_loginlogScalarFieldEnum = (typeof Sys_loginlogScalarFieldEnum)[keyof typeof Sys_loginlogScalarFieldEnum]


  export const Sys_menuScalarFieldEnum: {
    id: 'id',
    content: 'content',
    remark: 'remark'
  };

  export type Sys_menuScalarFieldEnum = (typeof Sys_menuScalarFieldEnum)[keyof typeof Sys_menuScalarFieldEnum]


  export const Sys_noticeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    type: 'type',
    content: 'content',
    status: 'status',
    remark: 'remark',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Sys_noticeScalarFieldEnum = (typeof Sys_noticeScalarFieldEnum)[keyof typeof Sys_noticeScalarFieldEnum]


  export const Sys_roleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    value: 'value',
    sort: 'sort',
    status: 'status',
    remark: 'remark',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Sys_roleScalarFieldEnum = (typeof Sys_roleScalarFieldEnum)[keyof typeof Sys_roleScalarFieldEnum]


  export const Sys_userScalarFieldEnum: {
    id: 'id',
    role_id: 'role_id',
    username: 'username',
    password: 'password',
    status: 'status',
    remark: 'remark',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Sys_userScalarFieldEnum = (typeof Sys_userScalarFieldEnum)[keyof typeof Sys_userScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const cms_articleOrderByRelevanceFieldEnum: {
    subCid: 'subCid',
    title: 'title',
    shortTitle: 'shortTitle',
    tagId: 'tagId',
    attr: 'attr',
    articleView: 'articleView',
    source: 'source',
    author: 'author',
    description: 'description',
    img: 'img',
    content: 'content',
    link: 'link'
  };

  export type cms_articleOrderByRelevanceFieldEnum = (typeof cms_articleOrderByRelevanceFieldEnum)[keyof typeof cms_articleOrderByRelevanceFieldEnum]


  export const cms_categoryOrderByRelevanceFieldEnum: {
    seoTitle: 'seoTitle',
    seoKeywords: 'seoKeywords',
    seoDescription: 'seoDescription',
    name: 'name',
    pinyin: 'pinyin',
    path: 'path',
    description: 'description',
    type: 'type',
    url: 'url',
    target: 'target',
    status: 'status',
    mid: 'mid',
    listView: 'listView',
    articleView: 'articleView'
  };

  export type cms_categoryOrderByRelevanceFieldEnum = (typeof cms_categoryOrderByRelevanceFieldEnum)[keyof typeof cms_categoryOrderByRelevanceFieldEnum]


  export const cms_fieldOrderByRelevanceFieldEnum: {
    cname: 'cname',
    ename: 'ename',
    type: 'type',
    val: 'val',
    defaultVal: 'defaultVal',
    orderBy: 'orderBy',
    length: 'length'
  };

  export type cms_fieldOrderByRelevanceFieldEnum = (typeof cms_fieldOrderByRelevanceFieldEnum)[keyof typeof cms_fieldOrderByRelevanceFieldEnum]


  export const cms_fragOrderByRelevanceFieldEnum: {
    name: 'name',
    mark: 'mark',
    content: 'content',
    type: 'type'
  };

  export type cms_fragOrderByRelevanceFieldEnum = (typeof cms_fragOrderByRelevanceFieldEnum)[keyof typeof cms_fragOrderByRelevanceFieldEnum]


  export const cms_friendlinkOrderByRelevanceFieldEnum: {
    title: 'title',
    link: 'link'
  };

  export type cms_friendlinkOrderByRelevanceFieldEnum = (typeof cms_friendlinkOrderByRelevanceFieldEnum)[keyof typeof cms_friendlinkOrderByRelevanceFieldEnum]


  export const cms_messageOrderByRelevanceFieldEnum: {
    title: 'title',
    name: 'name',
    tel: 'tel',
    wechat: 'wechat',
    company: 'company',
    content: 'content'
  };

  export type cms_messageOrderByRelevanceFieldEnum = (typeof cms_messageOrderByRelevanceFieldEnum)[keyof typeof cms_messageOrderByRelevanceFieldEnum]


  export const cms_modelOrderByRelevanceFieldEnum: {
    model: 'model',
    tableName: 'tableName',
    status: 'status',
    remark: 'remark'
  };

  export type cms_modelOrderByRelevanceFieldEnum = (typeof cms_modelOrderByRelevanceFieldEnum)[keyof typeof cms_modelOrderByRelevanceFieldEnum]


  export const cms_siteOrderByRelevanceFieldEnum: {
    name: 'name',
    domain: 'domain',
    email: 'email',
    wx: 'wx',
    icp: 'icp',
    code: 'code',
    json: 'json',
    title: 'title',
    keywords: 'keywords',
    description: 'description'
  };

  export type cms_siteOrderByRelevanceFieldEnum = (typeof cms_siteOrderByRelevanceFieldEnum)[keyof typeof cms_siteOrderByRelevanceFieldEnum]


  export const cms_slideOrderByRelevanceFieldEnum: {
    title: 'title',
    imgUrl: 'imgUrl',
    linkUrl: 'linkUrl',
    mark: 'mark'
  };

  export type cms_slideOrderByRelevanceFieldEnum = (typeof cms_slideOrderByRelevanceFieldEnum)[keyof typeof cms_slideOrderByRelevanceFieldEnum]


  export const cms_tagOrderByRelevanceFieldEnum: {
    name: 'name',
    path: 'path'
  };

  export type cms_tagOrderByRelevanceFieldEnum = (typeof cms_tagOrderByRelevanceFieldEnum)[keyof typeof cms_tagOrderByRelevanceFieldEnum]


  export const ext_downloadOrderByRelevanceFieldEnum: {
    fileName: 'fileName',
    fileVersion: 'fileVersion',
    fileLink: 'fileLink',
    test1: 'test1'
  };

  export type ext_downloadOrderByRelevanceFieldEnum = (typeof ext_downloadOrderByRelevanceFieldEnum)[keyof typeof ext_downloadOrderByRelevanceFieldEnum]


  export const ext_lanhuaOrderByRelevanceFieldEnum: {
    lanName: 'lanName',
    lanFenlei: 'lanFenlei',
    lanType: 'lanType'
  };

  export type ext_lanhuaOrderByRelevanceFieldEnum = (typeof ext_lanhuaOrderByRelevanceFieldEnum)[keyof typeof ext_lanhuaOrderByRelevanceFieldEnum]


  export const plus_collectOrderByRelevanceFieldEnum: {
    taskName: 'taskName',
    targetUrl: 'targetUrl',
    listTag: 'listTag',
    increment: 'increment',
    titleTag: 'titleTag',
    articleTag: 'articleTag',
    charset: 'charset',
    pages: 'pages',
    parseData: 'parseData',
    status: 'status'
  };

  export type plus_collectOrderByRelevanceFieldEnum = (typeof plus_collectOrderByRelevanceFieldEnum)[keyof typeof plus_collectOrderByRelevanceFieldEnum]


  export const plus_gatherOrderByRelevanceFieldEnum: {
    taskName: 'taskName',
    targetUrl: 'targetUrl',
    parseData: 'parseData',
    status: 'status'
  };

  export type plus_gatherOrderByRelevanceFieldEnum = (typeof plus_gatherOrderByRelevanceFieldEnum)[keyof typeof plus_gatherOrderByRelevanceFieldEnum]


  export const sys_configOrderByRelevanceFieldEnum: {
    template: 'template',
    appid: 'appid',
    secret: 'secret',
    accessKey: 'accessKey',
    secretKey: 'secretKey',
    domain: 'domain',
    bucket: 'bucket',
    uploadWay: 'uploadWay'
  };

  export type sys_configOrderByRelevanceFieldEnum = (typeof sys_configOrderByRelevanceFieldEnum)[keyof typeof sys_configOrderByRelevanceFieldEnum]


  export const sys_loginlogOrderByRelevanceFieldEnum: {
    ip: 'ip',
    country: 'country',
    prov: 'prov',
    city: 'city',
    district: 'district',
    isp: 'isp',
    lat: 'lat',
    lng: 'lng'
  };

  export type sys_loginlogOrderByRelevanceFieldEnum = (typeof sys_loginlogOrderByRelevanceFieldEnum)[keyof typeof sys_loginlogOrderByRelevanceFieldEnum]


  export const sys_menuOrderByRelevanceFieldEnum: {
    content: 'content',
    remark: 'remark'
  };

  export type sys_menuOrderByRelevanceFieldEnum = (typeof sys_menuOrderByRelevanceFieldEnum)[keyof typeof sys_menuOrderByRelevanceFieldEnum]


  export const sys_noticeOrderByRelevanceFieldEnum: {
    title: 'title',
    type: 'type',
    content: 'content',
    status: 'status',
    remark: 'remark'
  };

  export type sys_noticeOrderByRelevanceFieldEnum = (typeof sys_noticeOrderByRelevanceFieldEnum)[keyof typeof sys_noticeOrderByRelevanceFieldEnum]


  export const sys_roleOrderByRelevanceFieldEnum: {
    name: 'name',
    value: 'value',
    status: 'status',
    remark: 'remark'
  };

  export type sys_roleOrderByRelevanceFieldEnum = (typeof sys_roleOrderByRelevanceFieldEnum)[keyof typeof sys_roleOrderByRelevanceFieldEnum]


  export const sys_userOrderByRelevanceFieldEnum: {
    role_id: 'role_id',
    username: 'username',
    password: 'password',
    status: 'status',
    remark: 'remark'
  };

  export type sys_userOrderByRelevanceFieldEnum = (typeof sys_userOrderByRelevanceFieldEnum)[keyof typeof sys_userOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type cms_articleWhereInput = {
    AND?: cms_articleWhereInput | cms_articleWhereInput[]
    OR?: cms_articleWhereInput[]
    NOT?: cms_articleWhereInput | cms_articleWhereInput[]
    id?: IntFilter<"cms_article"> | number
    cid?: IntNullableFilter<"cms_article"> | number | null
    subCid?: StringNullableFilter<"cms_article"> | string | null
    title?: StringNullableFilter<"cms_article"> | string | null
    shortTitle?: StringNullableFilter<"cms_article"> | string | null
    tagId?: StringNullableFilter<"cms_article"> | string | null
    attr?: StringNullableFilter<"cms_article"> | string | null
    articleView?: StringNullableFilter<"cms_article"> | string | null
    source?: StringNullableFilter<"cms_article"> | string | null
    author?: StringNullableFilter<"cms_article"> | string | null
    description?: StringNullableFilter<"cms_article"> | string | null
    img?: StringNullableFilter<"cms_article"> | string | null
    content?: StringNullableFilter<"cms_article"> | string | null
    status?: IntNullableFilter<"cms_article"> | number | null
    pv?: IntNullableFilter<"cms_article"> | number | null
    link?: StringNullableFilter<"cms_article"> | string | null
    createdAt?: DateTimeNullableFilter<"cms_article"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"cms_article"> | Date | string | null
  }

  export type cms_articleOrderByWithRelationInput = {
    id?: SortOrder
    cid?: SortOrderInput | SortOrder
    subCid?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    shortTitle?: SortOrderInput | SortOrder
    tagId?: SortOrderInput | SortOrder
    attr?: SortOrderInput | SortOrder
    articleView?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    img?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    pv?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: cms_articleOrderByRelevanceInput
  }

  export type cms_articleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cms_articleWhereInput | cms_articleWhereInput[]
    OR?: cms_articleWhereInput[]
    NOT?: cms_articleWhereInput | cms_articleWhereInput[]
    cid?: IntNullableFilter<"cms_article"> | number | null
    subCid?: StringNullableFilter<"cms_article"> | string | null
    title?: StringNullableFilter<"cms_article"> | string | null
    shortTitle?: StringNullableFilter<"cms_article"> | string | null
    tagId?: StringNullableFilter<"cms_article"> | string | null
    attr?: StringNullableFilter<"cms_article"> | string | null
    articleView?: StringNullableFilter<"cms_article"> | string | null
    source?: StringNullableFilter<"cms_article"> | string | null
    author?: StringNullableFilter<"cms_article"> | string | null
    description?: StringNullableFilter<"cms_article"> | string | null
    img?: StringNullableFilter<"cms_article"> | string | null
    content?: StringNullableFilter<"cms_article"> | string | null
    status?: IntNullableFilter<"cms_article"> | number | null
    pv?: IntNullableFilter<"cms_article"> | number | null
    link?: StringNullableFilter<"cms_article"> | string | null
    createdAt?: DateTimeNullableFilter<"cms_article"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"cms_article"> | Date | string | null
  }, "id">

  export type cms_articleOrderByWithAggregationInput = {
    id?: SortOrder
    cid?: SortOrderInput | SortOrder
    subCid?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    shortTitle?: SortOrderInput | SortOrder
    tagId?: SortOrderInput | SortOrder
    attr?: SortOrderInput | SortOrder
    articleView?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    img?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    pv?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: cms_articleCountOrderByAggregateInput
    _avg?: cms_articleAvgOrderByAggregateInput
    _max?: cms_articleMaxOrderByAggregateInput
    _min?: cms_articleMinOrderByAggregateInput
    _sum?: cms_articleSumOrderByAggregateInput
  }

  export type cms_articleScalarWhereWithAggregatesInput = {
    AND?: cms_articleScalarWhereWithAggregatesInput | cms_articleScalarWhereWithAggregatesInput[]
    OR?: cms_articleScalarWhereWithAggregatesInput[]
    NOT?: cms_articleScalarWhereWithAggregatesInput | cms_articleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cms_article"> | number
    cid?: IntNullableWithAggregatesFilter<"cms_article"> | number | null
    subCid?: StringNullableWithAggregatesFilter<"cms_article"> | string | null
    title?: StringNullableWithAggregatesFilter<"cms_article"> | string | null
    shortTitle?: StringNullableWithAggregatesFilter<"cms_article"> | string | null
    tagId?: StringNullableWithAggregatesFilter<"cms_article"> | string | null
    attr?: StringNullableWithAggregatesFilter<"cms_article"> | string | null
    articleView?: StringNullableWithAggregatesFilter<"cms_article"> | string | null
    source?: StringNullableWithAggregatesFilter<"cms_article"> | string | null
    author?: StringNullableWithAggregatesFilter<"cms_article"> | string | null
    description?: StringNullableWithAggregatesFilter<"cms_article"> | string | null
    img?: StringNullableWithAggregatesFilter<"cms_article"> | string | null
    content?: StringNullableWithAggregatesFilter<"cms_article"> | string | null
    status?: IntNullableWithAggregatesFilter<"cms_article"> | number | null
    pv?: IntNullableWithAggregatesFilter<"cms_article"> | number | null
    link?: StringNullableWithAggregatesFilter<"cms_article"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"cms_article"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"cms_article"> | Date | string | null
  }

  export type cms_articletagWhereInput = {
    AND?: cms_articletagWhereInput | cms_articletagWhereInput[]
    OR?: cms_articletagWhereInput[]
    NOT?: cms_articletagWhereInput | cms_articletagWhereInput[]
    id?: IntFilter<"cms_articletag"> | number
    aid?: IntNullableFilter<"cms_articletag"> | number | null
    tid?: IntNullableFilter<"cms_articletag"> | number | null
  }

  export type cms_articletagOrderByWithRelationInput = {
    id?: SortOrder
    aid?: SortOrderInput | SortOrder
    tid?: SortOrderInput | SortOrder
  }

  export type cms_articletagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cms_articletagWhereInput | cms_articletagWhereInput[]
    OR?: cms_articletagWhereInput[]
    NOT?: cms_articletagWhereInput | cms_articletagWhereInput[]
    aid?: IntNullableFilter<"cms_articletag"> | number | null
    tid?: IntNullableFilter<"cms_articletag"> | number | null
  }, "id">

  export type cms_articletagOrderByWithAggregationInput = {
    id?: SortOrder
    aid?: SortOrderInput | SortOrder
    tid?: SortOrderInput | SortOrder
    _count?: cms_articletagCountOrderByAggregateInput
    _avg?: cms_articletagAvgOrderByAggregateInput
    _max?: cms_articletagMaxOrderByAggregateInput
    _min?: cms_articletagMinOrderByAggregateInput
    _sum?: cms_articletagSumOrderByAggregateInput
  }

  export type cms_articletagScalarWhereWithAggregatesInput = {
    AND?: cms_articletagScalarWhereWithAggregatesInput | cms_articletagScalarWhereWithAggregatesInput[]
    OR?: cms_articletagScalarWhereWithAggregatesInput[]
    NOT?: cms_articletagScalarWhereWithAggregatesInput | cms_articletagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cms_articletag"> | number
    aid?: IntNullableWithAggregatesFilter<"cms_articletag"> | number | null
    tid?: IntNullableWithAggregatesFilter<"cms_articletag"> | number | null
  }

  export type cms_categoryWhereInput = {
    AND?: cms_categoryWhereInput | cms_categoryWhereInput[]
    OR?: cms_categoryWhereInput[]
    NOT?: cms_categoryWhereInput | cms_categoryWhereInput[]
    id?: IntFilter<"cms_category"> | number
    pid?: IntFilter<"cms_category"> | number
    seoTitle?: StringNullableFilter<"cms_category"> | string | null
    seoKeywords?: StringNullableFilter<"cms_category"> | string | null
    seoDescription?: StringNullableFilter<"cms_category"> | string | null
    name?: StringNullableFilter<"cms_category"> | string | null
    pinyin?: StringNullableFilter<"cms_category"> | string | null
    path?: StringFilter<"cms_category"> | string
    description?: StringNullableFilter<"cms_category"> | string | null
    type?: StringNullableFilter<"cms_category"> | string | null
    url?: StringNullableFilter<"cms_category"> | string | null
    orderBy?: IntNullableFilter<"cms_category"> | number | null
    target?: StringNullableFilter<"cms_category"> | string | null
    status?: StringNullableFilter<"cms_category"> | string | null
    mid?: StringNullableFilter<"cms_category"> | string | null
    listView?: StringNullableFilter<"cms_category"> | string | null
    articleView?: StringNullableFilter<"cms_category"> | string | null
    createdAt?: DateTimeNullableFilter<"cms_category"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"cms_category"> | Date | string | null
  }

  export type cms_categoryOrderByWithRelationInput = {
    id?: SortOrder
    pid?: SortOrder
    seoTitle?: SortOrderInput | SortOrder
    seoKeywords?: SortOrderInput | SortOrder
    seoDescription?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    pinyin?: SortOrderInput | SortOrder
    path?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    orderBy?: SortOrderInput | SortOrder
    target?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    mid?: SortOrderInput | SortOrder
    listView?: SortOrderInput | SortOrder
    articleView?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: cms_categoryOrderByRelevanceInput
  }

  export type cms_categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cms_categoryWhereInput | cms_categoryWhereInput[]
    OR?: cms_categoryWhereInput[]
    NOT?: cms_categoryWhereInput | cms_categoryWhereInput[]
    pid?: IntFilter<"cms_category"> | number
    seoTitle?: StringNullableFilter<"cms_category"> | string | null
    seoKeywords?: StringNullableFilter<"cms_category"> | string | null
    seoDescription?: StringNullableFilter<"cms_category"> | string | null
    name?: StringNullableFilter<"cms_category"> | string | null
    pinyin?: StringNullableFilter<"cms_category"> | string | null
    path?: StringFilter<"cms_category"> | string
    description?: StringNullableFilter<"cms_category"> | string | null
    type?: StringNullableFilter<"cms_category"> | string | null
    url?: StringNullableFilter<"cms_category"> | string | null
    orderBy?: IntNullableFilter<"cms_category"> | number | null
    target?: StringNullableFilter<"cms_category"> | string | null
    status?: StringNullableFilter<"cms_category"> | string | null
    mid?: StringNullableFilter<"cms_category"> | string | null
    listView?: StringNullableFilter<"cms_category"> | string | null
    articleView?: StringNullableFilter<"cms_category"> | string | null
    createdAt?: DateTimeNullableFilter<"cms_category"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"cms_category"> | Date | string | null
  }, "id">

  export type cms_categoryOrderByWithAggregationInput = {
    id?: SortOrder
    pid?: SortOrder
    seoTitle?: SortOrderInput | SortOrder
    seoKeywords?: SortOrderInput | SortOrder
    seoDescription?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    pinyin?: SortOrderInput | SortOrder
    path?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    orderBy?: SortOrderInput | SortOrder
    target?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    mid?: SortOrderInput | SortOrder
    listView?: SortOrderInput | SortOrder
    articleView?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: cms_categoryCountOrderByAggregateInput
    _avg?: cms_categoryAvgOrderByAggregateInput
    _max?: cms_categoryMaxOrderByAggregateInput
    _min?: cms_categoryMinOrderByAggregateInput
    _sum?: cms_categorySumOrderByAggregateInput
  }

  export type cms_categoryScalarWhereWithAggregatesInput = {
    AND?: cms_categoryScalarWhereWithAggregatesInput | cms_categoryScalarWhereWithAggregatesInput[]
    OR?: cms_categoryScalarWhereWithAggregatesInput[]
    NOT?: cms_categoryScalarWhereWithAggregatesInput | cms_categoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cms_category"> | number
    pid?: IntWithAggregatesFilter<"cms_category"> | number
    seoTitle?: StringNullableWithAggregatesFilter<"cms_category"> | string | null
    seoKeywords?: StringNullableWithAggregatesFilter<"cms_category"> | string | null
    seoDescription?: StringNullableWithAggregatesFilter<"cms_category"> | string | null
    name?: StringNullableWithAggregatesFilter<"cms_category"> | string | null
    pinyin?: StringNullableWithAggregatesFilter<"cms_category"> | string | null
    path?: StringWithAggregatesFilter<"cms_category"> | string
    description?: StringNullableWithAggregatesFilter<"cms_category"> | string | null
    type?: StringNullableWithAggregatesFilter<"cms_category"> | string | null
    url?: StringNullableWithAggregatesFilter<"cms_category"> | string | null
    orderBy?: IntNullableWithAggregatesFilter<"cms_category"> | number | null
    target?: StringNullableWithAggregatesFilter<"cms_category"> | string | null
    status?: StringNullableWithAggregatesFilter<"cms_category"> | string | null
    mid?: StringNullableWithAggregatesFilter<"cms_category"> | string | null
    listView?: StringNullableWithAggregatesFilter<"cms_category"> | string | null
    articleView?: StringNullableWithAggregatesFilter<"cms_category"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"cms_category"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"cms_category"> | Date | string | null
  }

  export type cms_fieldWhereInput = {
    AND?: cms_fieldWhereInput | cms_fieldWhereInput[]
    OR?: cms_fieldWhereInput[]
    NOT?: cms_fieldWhereInput | cms_fieldWhereInput[]
    id?: IntFilter<"cms_field"> | number
    mid?: IntNullableFilter<"cms_field"> | number | null
    cname?: StringNullableFilter<"cms_field"> | string | null
    ename?: StringNullableFilter<"cms_field"> | string | null
    type?: StringNullableFilter<"cms_field"> | string | null
    val?: StringNullableFilter<"cms_field"> | string | null
    defaultVal?: StringNullableFilter<"cms_field"> | string | null
    orderBy?: StringNullableFilter<"cms_field"> | string | null
    length?: StringNullableFilter<"cms_field"> | string | null
  }

  export type cms_fieldOrderByWithRelationInput = {
    id?: SortOrder
    mid?: SortOrderInput | SortOrder
    cname?: SortOrderInput | SortOrder
    ename?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    val?: SortOrderInput | SortOrder
    defaultVal?: SortOrderInput | SortOrder
    orderBy?: SortOrderInput | SortOrder
    length?: SortOrderInput | SortOrder
    _relevance?: cms_fieldOrderByRelevanceInput
  }

  export type cms_fieldWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cms_fieldWhereInput | cms_fieldWhereInput[]
    OR?: cms_fieldWhereInput[]
    NOT?: cms_fieldWhereInput | cms_fieldWhereInput[]
    mid?: IntNullableFilter<"cms_field"> | number | null
    cname?: StringNullableFilter<"cms_field"> | string | null
    ename?: StringNullableFilter<"cms_field"> | string | null
    type?: StringNullableFilter<"cms_field"> | string | null
    val?: StringNullableFilter<"cms_field"> | string | null
    defaultVal?: StringNullableFilter<"cms_field"> | string | null
    orderBy?: StringNullableFilter<"cms_field"> | string | null
    length?: StringNullableFilter<"cms_field"> | string | null
  }, "id">

  export type cms_fieldOrderByWithAggregationInput = {
    id?: SortOrder
    mid?: SortOrderInput | SortOrder
    cname?: SortOrderInput | SortOrder
    ename?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    val?: SortOrderInput | SortOrder
    defaultVal?: SortOrderInput | SortOrder
    orderBy?: SortOrderInput | SortOrder
    length?: SortOrderInput | SortOrder
    _count?: cms_fieldCountOrderByAggregateInput
    _avg?: cms_fieldAvgOrderByAggregateInput
    _max?: cms_fieldMaxOrderByAggregateInput
    _min?: cms_fieldMinOrderByAggregateInput
    _sum?: cms_fieldSumOrderByAggregateInput
  }

  export type cms_fieldScalarWhereWithAggregatesInput = {
    AND?: cms_fieldScalarWhereWithAggregatesInput | cms_fieldScalarWhereWithAggregatesInput[]
    OR?: cms_fieldScalarWhereWithAggregatesInput[]
    NOT?: cms_fieldScalarWhereWithAggregatesInput | cms_fieldScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cms_field"> | number
    mid?: IntNullableWithAggregatesFilter<"cms_field"> | number | null
    cname?: StringNullableWithAggregatesFilter<"cms_field"> | string | null
    ename?: StringNullableWithAggregatesFilter<"cms_field"> | string | null
    type?: StringNullableWithAggregatesFilter<"cms_field"> | string | null
    val?: StringNullableWithAggregatesFilter<"cms_field"> | string | null
    defaultVal?: StringNullableWithAggregatesFilter<"cms_field"> | string | null
    orderBy?: StringNullableWithAggregatesFilter<"cms_field"> | string | null
    length?: StringNullableWithAggregatesFilter<"cms_field"> | string | null
  }

  export type cms_fragWhereInput = {
    AND?: cms_fragWhereInput | cms_fragWhereInput[]
    OR?: cms_fragWhereInput[]
    NOT?: cms_fragWhereInput | cms_fragWhereInput[]
    id?: IntFilter<"cms_frag"> | number
    name?: StringNullableFilter<"cms_frag"> | string | null
    mark?: StringNullableFilter<"cms_frag"> | string | null
    content?: StringNullableFilter<"cms_frag"> | string | null
    type?: StringNullableFilter<"cms_frag"> | string | null
    createdAt?: DateTimeNullableFilter<"cms_frag"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"cms_frag"> | Date | string | null
  }

  export type cms_fragOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    mark?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: cms_fragOrderByRelevanceInput
  }

  export type cms_fragWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cms_fragWhereInput | cms_fragWhereInput[]
    OR?: cms_fragWhereInput[]
    NOT?: cms_fragWhereInput | cms_fragWhereInput[]
    name?: StringNullableFilter<"cms_frag"> | string | null
    mark?: StringNullableFilter<"cms_frag"> | string | null
    content?: StringNullableFilter<"cms_frag"> | string | null
    type?: StringNullableFilter<"cms_frag"> | string | null
    createdAt?: DateTimeNullableFilter<"cms_frag"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"cms_frag"> | Date | string | null
  }, "id">

  export type cms_fragOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    mark?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: cms_fragCountOrderByAggregateInput
    _avg?: cms_fragAvgOrderByAggregateInput
    _max?: cms_fragMaxOrderByAggregateInput
    _min?: cms_fragMinOrderByAggregateInput
    _sum?: cms_fragSumOrderByAggregateInput
  }

  export type cms_fragScalarWhereWithAggregatesInput = {
    AND?: cms_fragScalarWhereWithAggregatesInput | cms_fragScalarWhereWithAggregatesInput[]
    OR?: cms_fragScalarWhereWithAggregatesInput[]
    NOT?: cms_fragScalarWhereWithAggregatesInput | cms_fragScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cms_frag"> | number
    name?: StringNullableWithAggregatesFilter<"cms_frag"> | string | null
    mark?: StringNullableWithAggregatesFilter<"cms_frag"> | string | null
    content?: StringNullableWithAggregatesFilter<"cms_frag"> | string | null
    type?: StringNullableWithAggregatesFilter<"cms_frag"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"cms_frag"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"cms_frag"> | Date | string | null
  }

  export type cms_friendlinkWhereInput = {
    AND?: cms_friendlinkWhereInput | cms_friendlinkWhereInput[]
    OR?: cms_friendlinkWhereInput[]
    NOT?: cms_friendlinkWhereInput | cms_friendlinkWhereInput[]
    id?: IntFilter<"cms_friendlink"> | number
    title?: StringNullableFilter<"cms_friendlink"> | string | null
    link?: StringNullableFilter<"cms_friendlink"> | string | null
    orderBy?: IntNullableFilter<"cms_friendlink"> | number | null
    createdAt?: DateTimeNullableFilter<"cms_friendlink"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"cms_friendlink"> | Date | string | null
  }

  export type cms_friendlinkOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    orderBy?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: cms_friendlinkOrderByRelevanceInput
  }

  export type cms_friendlinkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cms_friendlinkWhereInput | cms_friendlinkWhereInput[]
    OR?: cms_friendlinkWhereInput[]
    NOT?: cms_friendlinkWhereInput | cms_friendlinkWhereInput[]
    title?: StringNullableFilter<"cms_friendlink"> | string | null
    link?: StringNullableFilter<"cms_friendlink"> | string | null
    orderBy?: IntNullableFilter<"cms_friendlink"> | number | null
    createdAt?: DateTimeNullableFilter<"cms_friendlink"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"cms_friendlink"> | Date | string | null
  }, "id">

  export type cms_friendlinkOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    orderBy?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: cms_friendlinkCountOrderByAggregateInput
    _avg?: cms_friendlinkAvgOrderByAggregateInput
    _max?: cms_friendlinkMaxOrderByAggregateInput
    _min?: cms_friendlinkMinOrderByAggregateInput
    _sum?: cms_friendlinkSumOrderByAggregateInput
  }

  export type cms_friendlinkScalarWhereWithAggregatesInput = {
    AND?: cms_friendlinkScalarWhereWithAggregatesInput | cms_friendlinkScalarWhereWithAggregatesInput[]
    OR?: cms_friendlinkScalarWhereWithAggregatesInput[]
    NOT?: cms_friendlinkScalarWhereWithAggregatesInput | cms_friendlinkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cms_friendlink"> | number
    title?: StringNullableWithAggregatesFilter<"cms_friendlink"> | string | null
    link?: StringNullableWithAggregatesFilter<"cms_friendlink"> | string | null
    orderBy?: IntNullableWithAggregatesFilter<"cms_friendlink"> | number | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"cms_friendlink"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"cms_friendlink"> | Date | string | null
  }

  export type cms_messageWhereInput = {
    AND?: cms_messageWhereInput | cms_messageWhereInput[]
    OR?: cms_messageWhereInput[]
    NOT?: cms_messageWhereInput | cms_messageWhereInput[]
    id?: IntFilter<"cms_message"> | number
    type?: IntNullableFilter<"cms_message"> | number | null
    title?: StringNullableFilter<"cms_message"> | string | null
    name?: StringNullableFilter<"cms_message"> | string | null
    tel?: StringNullableFilter<"cms_message"> | string | null
    wechat?: StringNullableFilter<"cms_message"> | string | null
    company?: StringNullableFilter<"cms_message"> | string | null
    content?: StringNullableFilter<"cms_message"> | string | null
    createdAt?: DateTimeNullableFilter<"cms_message"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"cms_message"> | Date | string | null
  }

  export type cms_messageOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    tel?: SortOrderInput | SortOrder
    wechat?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: cms_messageOrderByRelevanceInput
  }

  export type cms_messageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cms_messageWhereInput | cms_messageWhereInput[]
    OR?: cms_messageWhereInput[]
    NOT?: cms_messageWhereInput | cms_messageWhereInput[]
    type?: IntNullableFilter<"cms_message"> | number | null
    title?: StringNullableFilter<"cms_message"> | string | null
    name?: StringNullableFilter<"cms_message"> | string | null
    tel?: StringNullableFilter<"cms_message"> | string | null
    wechat?: StringNullableFilter<"cms_message"> | string | null
    company?: StringNullableFilter<"cms_message"> | string | null
    content?: StringNullableFilter<"cms_message"> | string | null
    createdAt?: DateTimeNullableFilter<"cms_message"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"cms_message"> | Date | string | null
  }, "id">

  export type cms_messageOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    tel?: SortOrderInput | SortOrder
    wechat?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: cms_messageCountOrderByAggregateInput
    _avg?: cms_messageAvgOrderByAggregateInput
    _max?: cms_messageMaxOrderByAggregateInput
    _min?: cms_messageMinOrderByAggregateInput
    _sum?: cms_messageSumOrderByAggregateInput
  }

  export type cms_messageScalarWhereWithAggregatesInput = {
    AND?: cms_messageScalarWhereWithAggregatesInput | cms_messageScalarWhereWithAggregatesInput[]
    OR?: cms_messageScalarWhereWithAggregatesInput[]
    NOT?: cms_messageScalarWhereWithAggregatesInput | cms_messageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cms_message"> | number
    type?: IntNullableWithAggregatesFilter<"cms_message"> | number | null
    title?: StringNullableWithAggregatesFilter<"cms_message"> | string | null
    name?: StringNullableWithAggregatesFilter<"cms_message"> | string | null
    tel?: StringNullableWithAggregatesFilter<"cms_message"> | string | null
    wechat?: StringNullableWithAggregatesFilter<"cms_message"> | string | null
    company?: StringNullableWithAggregatesFilter<"cms_message"> | string | null
    content?: StringNullableWithAggregatesFilter<"cms_message"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"cms_message"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"cms_message"> | Date | string | null
  }

  export type cms_modelWhereInput = {
    AND?: cms_modelWhereInput | cms_modelWhereInput[]
    OR?: cms_modelWhereInput[]
    NOT?: cms_modelWhereInput | cms_modelWhereInput[]
    id?: IntFilter<"cms_model"> | number
    model?: StringNullableFilter<"cms_model"> | string | null
    tableName?: StringNullableFilter<"cms_model"> | string | null
    status?: StringNullableFilter<"cms_model"> | string | null
    remark?: StringNullableFilter<"cms_model"> | string | null
  }

  export type cms_modelOrderByWithRelationInput = {
    id?: SortOrder
    model?: SortOrderInput | SortOrder
    tableName?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    _relevance?: cms_modelOrderByRelevanceInput
  }

  export type cms_modelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cms_modelWhereInput | cms_modelWhereInput[]
    OR?: cms_modelWhereInput[]
    NOT?: cms_modelWhereInput | cms_modelWhereInput[]
    model?: StringNullableFilter<"cms_model"> | string | null
    tableName?: StringNullableFilter<"cms_model"> | string | null
    status?: StringNullableFilter<"cms_model"> | string | null
    remark?: StringNullableFilter<"cms_model"> | string | null
  }, "id">

  export type cms_modelOrderByWithAggregationInput = {
    id?: SortOrder
    model?: SortOrderInput | SortOrder
    tableName?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    _count?: cms_modelCountOrderByAggregateInput
    _avg?: cms_modelAvgOrderByAggregateInput
    _max?: cms_modelMaxOrderByAggregateInput
    _min?: cms_modelMinOrderByAggregateInput
    _sum?: cms_modelSumOrderByAggregateInput
  }

  export type cms_modelScalarWhereWithAggregatesInput = {
    AND?: cms_modelScalarWhereWithAggregatesInput | cms_modelScalarWhereWithAggregatesInput[]
    OR?: cms_modelScalarWhereWithAggregatesInput[]
    NOT?: cms_modelScalarWhereWithAggregatesInput | cms_modelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cms_model"> | number
    model?: StringNullableWithAggregatesFilter<"cms_model"> | string | null
    tableName?: StringNullableWithAggregatesFilter<"cms_model"> | string | null
    status?: StringNullableWithAggregatesFilter<"cms_model"> | string | null
    remark?: StringNullableWithAggregatesFilter<"cms_model"> | string | null
  }

  export type cms_siteWhereInput = {
    AND?: cms_siteWhereInput | cms_siteWhereInput[]
    OR?: cms_siteWhereInput[]
    NOT?: cms_siteWhereInput | cms_siteWhereInput[]
    id?: IntFilter<"cms_site"> | number
    name?: StringNullableFilter<"cms_site"> | string | null
    domain?: StringNullableFilter<"cms_site"> | string | null
    email?: StringNullableFilter<"cms_site"> | string | null
    wx?: StringNullableFilter<"cms_site"> | string | null
    icp?: StringNullableFilter<"cms_site"> | string | null
    code?: StringNullableFilter<"cms_site"> | string | null
    json?: StringNullableFilter<"cms_site"> | string | null
    title?: StringNullableFilter<"cms_site"> | string | null
    keywords?: StringNullableFilter<"cms_site"> | string | null
    description?: StringNullableFilter<"cms_site"> | string | null
    createdAt?: DateTimeNullableFilter<"cms_site"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"cms_site"> | Date | string | null
  }

  export type cms_siteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    domain?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    wx?: SortOrderInput | SortOrder
    icp?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    json?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: cms_siteOrderByRelevanceInput
  }

  export type cms_siteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cms_siteWhereInput | cms_siteWhereInput[]
    OR?: cms_siteWhereInput[]
    NOT?: cms_siteWhereInput | cms_siteWhereInput[]
    name?: StringNullableFilter<"cms_site"> | string | null
    domain?: StringNullableFilter<"cms_site"> | string | null
    email?: StringNullableFilter<"cms_site"> | string | null
    wx?: StringNullableFilter<"cms_site"> | string | null
    icp?: StringNullableFilter<"cms_site"> | string | null
    code?: StringNullableFilter<"cms_site"> | string | null
    json?: StringNullableFilter<"cms_site"> | string | null
    title?: StringNullableFilter<"cms_site"> | string | null
    keywords?: StringNullableFilter<"cms_site"> | string | null
    description?: StringNullableFilter<"cms_site"> | string | null
    createdAt?: DateTimeNullableFilter<"cms_site"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"cms_site"> | Date | string | null
  }, "id">

  export type cms_siteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    domain?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    wx?: SortOrderInput | SortOrder
    icp?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    json?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: cms_siteCountOrderByAggregateInput
    _avg?: cms_siteAvgOrderByAggregateInput
    _max?: cms_siteMaxOrderByAggregateInput
    _min?: cms_siteMinOrderByAggregateInput
    _sum?: cms_siteSumOrderByAggregateInput
  }

  export type cms_siteScalarWhereWithAggregatesInput = {
    AND?: cms_siteScalarWhereWithAggregatesInput | cms_siteScalarWhereWithAggregatesInput[]
    OR?: cms_siteScalarWhereWithAggregatesInput[]
    NOT?: cms_siteScalarWhereWithAggregatesInput | cms_siteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cms_site"> | number
    name?: StringNullableWithAggregatesFilter<"cms_site"> | string | null
    domain?: StringNullableWithAggregatesFilter<"cms_site"> | string | null
    email?: StringNullableWithAggregatesFilter<"cms_site"> | string | null
    wx?: StringNullableWithAggregatesFilter<"cms_site"> | string | null
    icp?: StringNullableWithAggregatesFilter<"cms_site"> | string | null
    code?: StringNullableWithAggregatesFilter<"cms_site"> | string | null
    json?: StringNullableWithAggregatesFilter<"cms_site"> | string | null
    title?: StringNullableWithAggregatesFilter<"cms_site"> | string | null
    keywords?: StringNullableWithAggregatesFilter<"cms_site"> | string | null
    description?: StringNullableWithAggregatesFilter<"cms_site"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"cms_site"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"cms_site"> | Date | string | null
  }

  export type cms_slideWhereInput = {
    AND?: cms_slideWhereInput | cms_slideWhereInput[]
    OR?: cms_slideWhereInput[]
    NOT?: cms_slideWhereInput | cms_slideWhereInput[]
    id?: IntFilter<"cms_slide"> | number
    title?: StringNullableFilter<"cms_slide"> | string | null
    imgUrl?: StringNullableFilter<"cms_slide"> | string | null
    linkUrl?: StringNullableFilter<"cms_slide"> | string | null
    mark?: StringNullableFilter<"cms_slide"> | string | null
    createdAt?: DateTimeNullableFilter<"cms_slide"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"cms_slide"> | Date | string | null
  }

  export type cms_slideOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    imgUrl?: SortOrderInput | SortOrder
    linkUrl?: SortOrderInput | SortOrder
    mark?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: cms_slideOrderByRelevanceInput
  }

  export type cms_slideWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cms_slideWhereInput | cms_slideWhereInput[]
    OR?: cms_slideWhereInput[]
    NOT?: cms_slideWhereInput | cms_slideWhereInput[]
    title?: StringNullableFilter<"cms_slide"> | string | null
    imgUrl?: StringNullableFilter<"cms_slide"> | string | null
    linkUrl?: StringNullableFilter<"cms_slide"> | string | null
    mark?: StringNullableFilter<"cms_slide"> | string | null
    createdAt?: DateTimeNullableFilter<"cms_slide"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"cms_slide"> | Date | string | null
  }, "id">

  export type cms_slideOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    imgUrl?: SortOrderInput | SortOrder
    linkUrl?: SortOrderInput | SortOrder
    mark?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: cms_slideCountOrderByAggregateInput
    _avg?: cms_slideAvgOrderByAggregateInput
    _max?: cms_slideMaxOrderByAggregateInput
    _min?: cms_slideMinOrderByAggregateInput
    _sum?: cms_slideSumOrderByAggregateInput
  }

  export type cms_slideScalarWhereWithAggregatesInput = {
    AND?: cms_slideScalarWhereWithAggregatesInput | cms_slideScalarWhereWithAggregatesInput[]
    OR?: cms_slideScalarWhereWithAggregatesInput[]
    NOT?: cms_slideScalarWhereWithAggregatesInput | cms_slideScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cms_slide"> | number
    title?: StringNullableWithAggregatesFilter<"cms_slide"> | string | null
    imgUrl?: StringNullableWithAggregatesFilter<"cms_slide"> | string | null
    linkUrl?: StringNullableWithAggregatesFilter<"cms_slide"> | string | null
    mark?: StringNullableWithAggregatesFilter<"cms_slide"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"cms_slide"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"cms_slide"> | Date | string | null
  }

  export type cms_tagWhereInput = {
    AND?: cms_tagWhereInput | cms_tagWhereInput[]
    OR?: cms_tagWhereInput[]
    NOT?: cms_tagWhereInput | cms_tagWhereInput[]
    id?: IntFilter<"cms_tag"> | number
    name?: StringNullableFilter<"cms_tag"> | string | null
    path?: StringNullableFilter<"cms_tag"> | string | null
    count?: IntNullableFilter<"cms_tag"> | number | null
  }

  export type cms_tagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    path?: SortOrderInput | SortOrder
    count?: SortOrderInput | SortOrder
    _relevance?: cms_tagOrderByRelevanceInput
  }

  export type cms_tagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cms_tagWhereInput | cms_tagWhereInput[]
    OR?: cms_tagWhereInput[]
    NOT?: cms_tagWhereInput | cms_tagWhereInput[]
    name?: StringNullableFilter<"cms_tag"> | string | null
    path?: StringNullableFilter<"cms_tag"> | string | null
    count?: IntNullableFilter<"cms_tag"> | number | null
  }, "id">

  export type cms_tagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    path?: SortOrderInput | SortOrder
    count?: SortOrderInput | SortOrder
    _count?: cms_tagCountOrderByAggregateInput
    _avg?: cms_tagAvgOrderByAggregateInput
    _max?: cms_tagMaxOrderByAggregateInput
    _min?: cms_tagMinOrderByAggregateInput
    _sum?: cms_tagSumOrderByAggregateInput
  }

  export type cms_tagScalarWhereWithAggregatesInput = {
    AND?: cms_tagScalarWhereWithAggregatesInput | cms_tagScalarWhereWithAggregatesInput[]
    OR?: cms_tagScalarWhereWithAggregatesInput[]
    NOT?: cms_tagScalarWhereWithAggregatesInput | cms_tagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cms_tag"> | number
    name?: StringNullableWithAggregatesFilter<"cms_tag"> | string | null
    path?: StringNullableWithAggregatesFilter<"cms_tag"> | string | null
    count?: IntNullableWithAggregatesFilter<"cms_tag"> | number | null
  }

  export type ext_downloadWhereInput = {
    AND?: ext_downloadWhereInput | ext_downloadWhereInput[]
    OR?: ext_downloadWhereInput[]
    NOT?: ext_downloadWhereInput | ext_downloadWhereInput[]
    id?: IntFilter<"ext_download"> | number
    aid?: IntFilter<"ext_download"> | number
    fileName?: StringNullableFilter<"ext_download"> | string | null
    fileVersion?: StringNullableFilter<"ext_download"> | string | null
    fileLink?: StringNullableFilter<"ext_download"> | string | null
    test1?: StringNullableFilter<"ext_download"> | string | null
  }

  export type ext_downloadOrderByWithRelationInput = {
    id?: SortOrder
    aid?: SortOrder
    fileName?: SortOrderInput | SortOrder
    fileVersion?: SortOrderInput | SortOrder
    fileLink?: SortOrderInput | SortOrder
    test1?: SortOrderInput | SortOrder
    _relevance?: ext_downloadOrderByRelevanceInput
  }

  export type ext_downloadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ext_downloadWhereInput | ext_downloadWhereInput[]
    OR?: ext_downloadWhereInput[]
    NOT?: ext_downloadWhereInput | ext_downloadWhereInput[]
    aid?: IntFilter<"ext_download"> | number
    fileName?: StringNullableFilter<"ext_download"> | string | null
    fileVersion?: StringNullableFilter<"ext_download"> | string | null
    fileLink?: StringNullableFilter<"ext_download"> | string | null
    test1?: StringNullableFilter<"ext_download"> | string | null
  }, "id">

  export type ext_downloadOrderByWithAggregationInput = {
    id?: SortOrder
    aid?: SortOrder
    fileName?: SortOrderInput | SortOrder
    fileVersion?: SortOrderInput | SortOrder
    fileLink?: SortOrderInput | SortOrder
    test1?: SortOrderInput | SortOrder
    _count?: ext_downloadCountOrderByAggregateInput
    _avg?: ext_downloadAvgOrderByAggregateInput
    _max?: ext_downloadMaxOrderByAggregateInput
    _min?: ext_downloadMinOrderByAggregateInput
    _sum?: ext_downloadSumOrderByAggregateInput
  }

  export type ext_downloadScalarWhereWithAggregatesInput = {
    AND?: ext_downloadScalarWhereWithAggregatesInput | ext_downloadScalarWhereWithAggregatesInput[]
    OR?: ext_downloadScalarWhereWithAggregatesInput[]
    NOT?: ext_downloadScalarWhereWithAggregatesInput | ext_downloadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ext_download"> | number
    aid?: IntWithAggregatesFilter<"ext_download"> | number
    fileName?: StringNullableWithAggregatesFilter<"ext_download"> | string | null
    fileVersion?: StringNullableWithAggregatesFilter<"ext_download"> | string | null
    fileLink?: StringNullableWithAggregatesFilter<"ext_download"> | string | null
    test1?: StringNullableWithAggregatesFilter<"ext_download"> | string | null
  }

  export type ext_lanhuaWhereInput = {
    AND?: ext_lanhuaWhereInput | ext_lanhuaWhereInput[]
    OR?: ext_lanhuaWhereInput[]
    NOT?: ext_lanhuaWhereInput | ext_lanhuaWhereInput[]
    id?: IntFilter<"ext_lanhua"> | number
    aid?: IntFilter<"ext_lanhua"> | number
    lanName?: StringNullableFilter<"ext_lanhua"> | string | null
    lanFenlei?: StringNullableFilter<"ext_lanhua"> | string | null
    lanType?: StringNullableFilter<"ext_lanhua"> | string | null
  }

  export type ext_lanhuaOrderByWithRelationInput = {
    id?: SortOrder
    aid?: SortOrder
    lanName?: SortOrderInput | SortOrder
    lanFenlei?: SortOrderInput | SortOrder
    lanType?: SortOrderInput | SortOrder
    _relevance?: ext_lanhuaOrderByRelevanceInput
  }

  export type ext_lanhuaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ext_lanhuaWhereInput | ext_lanhuaWhereInput[]
    OR?: ext_lanhuaWhereInput[]
    NOT?: ext_lanhuaWhereInput | ext_lanhuaWhereInput[]
    aid?: IntFilter<"ext_lanhua"> | number
    lanName?: StringNullableFilter<"ext_lanhua"> | string | null
    lanFenlei?: StringNullableFilter<"ext_lanhua"> | string | null
    lanType?: StringNullableFilter<"ext_lanhua"> | string | null
  }, "id">

  export type ext_lanhuaOrderByWithAggregationInput = {
    id?: SortOrder
    aid?: SortOrder
    lanName?: SortOrderInput | SortOrder
    lanFenlei?: SortOrderInput | SortOrder
    lanType?: SortOrderInput | SortOrder
    _count?: ext_lanhuaCountOrderByAggregateInput
    _avg?: ext_lanhuaAvgOrderByAggregateInput
    _max?: ext_lanhuaMaxOrderByAggregateInput
    _min?: ext_lanhuaMinOrderByAggregateInput
    _sum?: ext_lanhuaSumOrderByAggregateInput
  }

  export type ext_lanhuaScalarWhereWithAggregatesInput = {
    AND?: ext_lanhuaScalarWhereWithAggregatesInput | ext_lanhuaScalarWhereWithAggregatesInput[]
    OR?: ext_lanhuaScalarWhereWithAggregatesInput[]
    NOT?: ext_lanhuaScalarWhereWithAggregatesInput | ext_lanhuaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ext_lanhua"> | number
    aid?: IntWithAggregatesFilter<"ext_lanhua"> | number
    lanName?: StringNullableWithAggregatesFilter<"ext_lanhua"> | string | null
    lanFenlei?: StringNullableWithAggregatesFilter<"ext_lanhua"> | string | null
    lanType?: StringNullableWithAggregatesFilter<"ext_lanhua"> | string | null
  }

  export type plus_collectWhereInput = {
    AND?: plus_collectWhereInput | plus_collectWhereInput[]
    OR?: plus_collectWhereInput[]
    NOT?: plus_collectWhereInput | plus_collectWhereInput[]
    id?: IntFilter<"plus_collect"> | number
    taskName?: StringNullableFilter<"plus_collect"> | string | null
    targetUrl?: StringNullableFilter<"plus_collect"> | string | null
    listTag?: StringNullableFilter<"plus_collect"> | string | null
    startNum?: IntNullableFilter<"plus_collect"> | number | null
    endNum?: IntNullableFilter<"plus_collect"> | number | null
    increment?: StringNullableFilter<"plus_collect"> | string | null
    titleTag?: StringNullableFilter<"plus_collect"> | string | null
    articleTag?: StringNullableFilter<"plus_collect"> | string | null
    charset?: StringNullableFilter<"plus_collect"> | string | null
    pages?: StringNullableFilter<"plus_collect"> | string | null
    parseData?: StringNullableFilter<"plus_collect"> | string | null
    cid?: IntNullableFilter<"plus_collect"> | number | null
    status?: StringNullableFilter<"plus_collect"> | string | null
    createdAt?: DateTimeNullableFilter<"plus_collect"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"plus_collect"> | Date | string | null
  }

  export type plus_collectOrderByWithRelationInput = {
    id?: SortOrder
    taskName?: SortOrderInput | SortOrder
    targetUrl?: SortOrderInput | SortOrder
    listTag?: SortOrderInput | SortOrder
    startNum?: SortOrderInput | SortOrder
    endNum?: SortOrderInput | SortOrder
    increment?: SortOrderInput | SortOrder
    titleTag?: SortOrderInput | SortOrder
    articleTag?: SortOrderInput | SortOrder
    charset?: SortOrderInput | SortOrder
    pages?: SortOrderInput | SortOrder
    parseData?: SortOrderInput | SortOrder
    cid?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: plus_collectOrderByRelevanceInput
  }

  export type plus_collectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: plus_collectWhereInput | plus_collectWhereInput[]
    OR?: plus_collectWhereInput[]
    NOT?: plus_collectWhereInput | plus_collectWhereInput[]
    taskName?: StringNullableFilter<"plus_collect"> | string | null
    targetUrl?: StringNullableFilter<"plus_collect"> | string | null
    listTag?: StringNullableFilter<"plus_collect"> | string | null
    startNum?: IntNullableFilter<"plus_collect"> | number | null
    endNum?: IntNullableFilter<"plus_collect"> | number | null
    increment?: StringNullableFilter<"plus_collect"> | string | null
    titleTag?: StringNullableFilter<"plus_collect"> | string | null
    articleTag?: StringNullableFilter<"plus_collect"> | string | null
    charset?: StringNullableFilter<"plus_collect"> | string | null
    pages?: StringNullableFilter<"plus_collect"> | string | null
    parseData?: StringNullableFilter<"plus_collect"> | string | null
    cid?: IntNullableFilter<"plus_collect"> | number | null
    status?: StringNullableFilter<"plus_collect"> | string | null
    createdAt?: DateTimeNullableFilter<"plus_collect"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"plus_collect"> | Date | string | null
  }, "id">

  export type plus_collectOrderByWithAggregationInput = {
    id?: SortOrder
    taskName?: SortOrderInput | SortOrder
    targetUrl?: SortOrderInput | SortOrder
    listTag?: SortOrderInput | SortOrder
    startNum?: SortOrderInput | SortOrder
    endNum?: SortOrderInput | SortOrder
    increment?: SortOrderInput | SortOrder
    titleTag?: SortOrderInput | SortOrder
    articleTag?: SortOrderInput | SortOrder
    charset?: SortOrderInput | SortOrder
    pages?: SortOrderInput | SortOrder
    parseData?: SortOrderInput | SortOrder
    cid?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: plus_collectCountOrderByAggregateInput
    _avg?: plus_collectAvgOrderByAggregateInput
    _max?: plus_collectMaxOrderByAggregateInput
    _min?: plus_collectMinOrderByAggregateInput
    _sum?: plus_collectSumOrderByAggregateInput
  }

  export type plus_collectScalarWhereWithAggregatesInput = {
    AND?: plus_collectScalarWhereWithAggregatesInput | plus_collectScalarWhereWithAggregatesInput[]
    OR?: plus_collectScalarWhereWithAggregatesInput[]
    NOT?: plus_collectScalarWhereWithAggregatesInput | plus_collectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"plus_collect"> | number
    taskName?: StringNullableWithAggregatesFilter<"plus_collect"> | string | null
    targetUrl?: StringNullableWithAggregatesFilter<"plus_collect"> | string | null
    listTag?: StringNullableWithAggregatesFilter<"plus_collect"> | string | null
    startNum?: IntNullableWithAggregatesFilter<"plus_collect"> | number | null
    endNum?: IntNullableWithAggregatesFilter<"plus_collect"> | number | null
    increment?: StringNullableWithAggregatesFilter<"plus_collect"> | string | null
    titleTag?: StringNullableWithAggregatesFilter<"plus_collect"> | string | null
    articleTag?: StringNullableWithAggregatesFilter<"plus_collect"> | string | null
    charset?: StringNullableWithAggregatesFilter<"plus_collect"> | string | null
    pages?: StringNullableWithAggregatesFilter<"plus_collect"> | string | null
    parseData?: StringNullableWithAggregatesFilter<"plus_collect"> | string | null
    cid?: IntNullableWithAggregatesFilter<"plus_collect"> | number | null
    status?: StringNullableWithAggregatesFilter<"plus_collect"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"plus_collect"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"plus_collect"> | Date | string | null
  }

  export type plus_gatherWhereInput = {
    AND?: plus_gatherWhereInput | plus_gatherWhereInput[]
    OR?: plus_gatherWhereInput[]
    NOT?: plus_gatherWhereInput | plus_gatherWhereInput[]
    id?: IntFilter<"plus_gather"> | number
    taskName?: StringNullableFilter<"plus_gather"> | string | null
    targetUrl?: StringNullableFilter<"plus_gather"> | string | null
    parseData?: StringNullableFilter<"plus_gather"> | string | null
    cid?: IntNullableFilter<"plus_gather"> | number | null
    status?: StringNullableFilter<"plus_gather"> | string | null
    createdAt?: DateTimeNullableFilter<"plus_gather"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"plus_gather"> | Date | string | null
  }

  export type plus_gatherOrderByWithRelationInput = {
    id?: SortOrder
    taskName?: SortOrderInput | SortOrder
    targetUrl?: SortOrderInput | SortOrder
    parseData?: SortOrderInput | SortOrder
    cid?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: plus_gatherOrderByRelevanceInput
  }

  export type plus_gatherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: plus_gatherWhereInput | plus_gatherWhereInput[]
    OR?: plus_gatherWhereInput[]
    NOT?: plus_gatherWhereInput | plus_gatherWhereInput[]
    taskName?: StringNullableFilter<"plus_gather"> | string | null
    targetUrl?: StringNullableFilter<"plus_gather"> | string | null
    parseData?: StringNullableFilter<"plus_gather"> | string | null
    cid?: IntNullableFilter<"plus_gather"> | number | null
    status?: StringNullableFilter<"plus_gather"> | string | null
    createdAt?: DateTimeNullableFilter<"plus_gather"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"plus_gather"> | Date | string | null
  }, "id">

  export type plus_gatherOrderByWithAggregationInput = {
    id?: SortOrder
    taskName?: SortOrderInput | SortOrder
    targetUrl?: SortOrderInput | SortOrder
    parseData?: SortOrderInput | SortOrder
    cid?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: plus_gatherCountOrderByAggregateInput
    _avg?: plus_gatherAvgOrderByAggregateInput
    _max?: plus_gatherMaxOrderByAggregateInput
    _min?: plus_gatherMinOrderByAggregateInput
    _sum?: plus_gatherSumOrderByAggregateInput
  }

  export type plus_gatherScalarWhereWithAggregatesInput = {
    AND?: plus_gatherScalarWhereWithAggregatesInput | plus_gatherScalarWhereWithAggregatesInput[]
    OR?: plus_gatherScalarWhereWithAggregatesInput[]
    NOT?: plus_gatherScalarWhereWithAggregatesInput | plus_gatherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"plus_gather"> | number
    taskName?: StringNullableWithAggregatesFilter<"plus_gather"> | string | null
    targetUrl?: StringNullableWithAggregatesFilter<"plus_gather"> | string | null
    parseData?: StringNullableWithAggregatesFilter<"plus_gather"> | string | null
    cid?: IntNullableWithAggregatesFilter<"plus_gather"> | number | null
    status?: StringNullableWithAggregatesFilter<"plus_gather"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"plus_gather"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"plus_gather"> | Date | string | null
  }

  export type sys_configWhereInput = {
    AND?: sys_configWhereInput | sys_configWhereInput[]
    OR?: sys_configWhereInput[]
    NOT?: sys_configWhereInput | sys_configWhereInput[]
    id?: IntFilter<"sys_config"> | number
    template?: StringNullableFilter<"sys_config"> | string | null
    appid?: StringNullableFilter<"sys_config"> | string | null
    secret?: StringNullableFilter<"sys_config"> | string | null
    accessKey?: StringNullableFilter<"sys_config"> | string | null
    secretKey?: StringNullableFilter<"sys_config"> | string | null
    domain?: StringNullableFilter<"sys_config"> | string | null
    bucket?: StringNullableFilter<"sys_config"> | string | null
    uploadWay?: StringNullableFilter<"sys_config"> | string | null
    createdAt?: DateTimeNullableFilter<"sys_config"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"sys_config"> | Date | string | null
  }

  export type sys_configOrderByWithRelationInput = {
    id?: SortOrder
    template?: SortOrderInput | SortOrder
    appid?: SortOrderInput | SortOrder
    secret?: SortOrderInput | SortOrder
    accessKey?: SortOrderInput | SortOrder
    secretKey?: SortOrderInput | SortOrder
    domain?: SortOrderInput | SortOrder
    bucket?: SortOrderInput | SortOrder
    uploadWay?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: sys_configOrderByRelevanceInput
  }

  export type sys_configWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sys_configWhereInput | sys_configWhereInput[]
    OR?: sys_configWhereInput[]
    NOT?: sys_configWhereInput | sys_configWhereInput[]
    template?: StringNullableFilter<"sys_config"> | string | null
    appid?: StringNullableFilter<"sys_config"> | string | null
    secret?: StringNullableFilter<"sys_config"> | string | null
    accessKey?: StringNullableFilter<"sys_config"> | string | null
    secretKey?: StringNullableFilter<"sys_config"> | string | null
    domain?: StringNullableFilter<"sys_config"> | string | null
    bucket?: StringNullableFilter<"sys_config"> | string | null
    uploadWay?: StringNullableFilter<"sys_config"> | string | null
    createdAt?: DateTimeNullableFilter<"sys_config"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"sys_config"> | Date | string | null
  }, "id">

  export type sys_configOrderByWithAggregationInput = {
    id?: SortOrder
    template?: SortOrderInput | SortOrder
    appid?: SortOrderInput | SortOrder
    secret?: SortOrderInput | SortOrder
    accessKey?: SortOrderInput | SortOrder
    secretKey?: SortOrderInput | SortOrder
    domain?: SortOrderInput | SortOrder
    bucket?: SortOrderInput | SortOrder
    uploadWay?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: sys_configCountOrderByAggregateInput
    _avg?: sys_configAvgOrderByAggregateInput
    _max?: sys_configMaxOrderByAggregateInput
    _min?: sys_configMinOrderByAggregateInput
    _sum?: sys_configSumOrderByAggregateInput
  }

  export type sys_configScalarWhereWithAggregatesInput = {
    AND?: sys_configScalarWhereWithAggregatesInput | sys_configScalarWhereWithAggregatesInput[]
    OR?: sys_configScalarWhereWithAggregatesInput[]
    NOT?: sys_configScalarWhereWithAggregatesInput | sys_configScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sys_config"> | number
    template?: StringNullableWithAggregatesFilter<"sys_config"> | string | null
    appid?: StringNullableWithAggregatesFilter<"sys_config"> | string | null
    secret?: StringNullableWithAggregatesFilter<"sys_config"> | string | null
    accessKey?: StringNullableWithAggregatesFilter<"sys_config"> | string | null
    secretKey?: StringNullableWithAggregatesFilter<"sys_config"> | string | null
    domain?: StringNullableWithAggregatesFilter<"sys_config"> | string | null
    bucket?: StringNullableWithAggregatesFilter<"sys_config"> | string | null
    uploadWay?: StringNullableWithAggregatesFilter<"sys_config"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"sys_config"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"sys_config"> | Date | string | null
  }

  export type sys_loginlogWhereInput = {
    AND?: sys_loginlogWhereInput | sys_loginlogWhereInput[]
    OR?: sys_loginlogWhereInput[]
    NOT?: sys_loginlogWhereInput | sys_loginlogWhereInput[]
    id?: IntFilter<"sys_loginlog"> | number
    uid?: IntFilter<"sys_loginlog"> | number
    ip?: StringNullableFilter<"sys_loginlog"> | string | null
    country?: StringNullableFilter<"sys_loginlog"> | string | null
    prov?: StringNullableFilter<"sys_loginlog"> | string | null
    city?: StringNullableFilter<"sys_loginlog"> | string | null
    district?: StringNullableFilter<"sys_loginlog"> | string | null
    isp?: StringNullableFilter<"sys_loginlog"> | string | null
    lat?: StringNullableFilter<"sys_loginlog"> | string | null
    lng?: StringNullableFilter<"sys_loginlog"> | string | null
    createdAt?: DateTimeNullableFilter<"sys_loginlog"> | Date | string | null
  }

  export type sys_loginlogOrderByWithRelationInput = {
    id?: SortOrder
    uid?: SortOrder
    ip?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    prov?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    isp?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    _relevance?: sys_loginlogOrderByRelevanceInput
  }

  export type sys_loginlogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sys_loginlogWhereInput | sys_loginlogWhereInput[]
    OR?: sys_loginlogWhereInput[]
    NOT?: sys_loginlogWhereInput | sys_loginlogWhereInput[]
    uid?: IntFilter<"sys_loginlog"> | number
    ip?: StringNullableFilter<"sys_loginlog"> | string | null
    country?: StringNullableFilter<"sys_loginlog"> | string | null
    prov?: StringNullableFilter<"sys_loginlog"> | string | null
    city?: StringNullableFilter<"sys_loginlog"> | string | null
    district?: StringNullableFilter<"sys_loginlog"> | string | null
    isp?: StringNullableFilter<"sys_loginlog"> | string | null
    lat?: StringNullableFilter<"sys_loginlog"> | string | null
    lng?: StringNullableFilter<"sys_loginlog"> | string | null
    createdAt?: DateTimeNullableFilter<"sys_loginlog"> | Date | string | null
  }, "id">

  export type sys_loginlogOrderByWithAggregationInput = {
    id?: SortOrder
    uid?: SortOrder
    ip?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    prov?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    isp?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: sys_loginlogCountOrderByAggregateInput
    _avg?: sys_loginlogAvgOrderByAggregateInput
    _max?: sys_loginlogMaxOrderByAggregateInput
    _min?: sys_loginlogMinOrderByAggregateInput
    _sum?: sys_loginlogSumOrderByAggregateInput
  }

  export type sys_loginlogScalarWhereWithAggregatesInput = {
    AND?: sys_loginlogScalarWhereWithAggregatesInput | sys_loginlogScalarWhereWithAggregatesInput[]
    OR?: sys_loginlogScalarWhereWithAggregatesInput[]
    NOT?: sys_loginlogScalarWhereWithAggregatesInput | sys_loginlogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sys_loginlog"> | number
    uid?: IntWithAggregatesFilter<"sys_loginlog"> | number
    ip?: StringNullableWithAggregatesFilter<"sys_loginlog"> | string | null
    country?: StringNullableWithAggregatesFilter<"sys_loginlog"> | string | null
    prov?: StringNullableWithAggregatesFilter<"sys_loginlog"> | string | null
    city?: StringNullableWithAggregatesFilter<"sys_loginlog"> | string | null
    district?: StringNullableWithAggregatesFilter<"sys_loginlog"> | string | null
    isp?: StringNullableWithAggregatesFilter<"sys_loginlog"> | string | null
    lat?: StringNullableWithAggregatesFilter<"sys_loginlog"> | string | null
    lng?: StringNullableWithAggregatesFilter<"sys_loginlog"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"sys_loginlog"> | Date | string | null
  }

  export type sys_menuWhereInput = {
    AND?: sys_menuWhereInput | sys_menuWhereInput[]
    OR?: sys_menuWhereInput[]
    NOT?: sys_menuWhereInput | sys_menuWhereInput[]
    id?: BigIntFilter<"sys_menu"> | bigint | number
    content?: StringNullableFilter<"sys_menu"> | string | null
    remark?: StringNullableFilter<"sys_menu"> | string | null
  }

  export type sys_menuOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    _relevance?: sys_menuOrderByRelevanceInput
  }

  export type sys_menuWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: sys_menuWhereInput | sys_menuWhereInput[]
    OR?: sys_menuWhereInput[]
    NOT?: sys_menuWhereInput | sys_menuWhereInput[]
    content?: StringNullableFilter<"sys_menu"> | string | null
    remark?: StringNullableFilter<"sys_menu"> | string | null
  }, "id">

  export type sys_menuOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    _count?: sys_menuCountOrderByAggregateInput
    _avg?: sys_menuAvgOrderByAggregateInput
    _max?: sys_menuMaxOrderByAggregateInput
    _min?: sys_menuMinOrderByAggregateInput
    _sum?: sys_menuSumOrderByAggregateInput
  }

  export type sys_menuScalarWhereWithAggregatesInput = {
    AND?: sys_menuScalarWhereWithAggregatesInput | sys_menuScalarWhereWithAggregatesInput[]
    OR?: sys_menuScalarWhereWithAggregatesInput[]
    NOT?: sys_menuScalarWhereWithAggregatesInput | sys_menuScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"sys_menu"> | bigint | number
    content?: StringNullableWithAggregatesFilter<"sys_menu"> | string | null
    remark?: StringNullableWithAggregatesFilter<"sys_menu"> | string | null
  }

  export type sys_noticeWhereInput = {
    AND?: sys_noticeWhereInput | sys_noticeWhereInput[]
    OR?: sys_noticeWhereInput[]
    NOT?: sys_noticeWhereInput | sys_noticeWhereInput[]
    id?: IntFilter<"sys_notice"> | number
    title?: StringFilter<"sys_notice"> | string
    type?: StringFilter<"sys_notice"> | string
    content?: StringNullableFilter<"sys_notice"> | string | null
    status?: StringNullableFilter<"sys_notice"> | string | null
    remark?: StringNullableFilter<"sys_notice"> | string | null
    createdAt?: DateTimeNullableFilter<"sys_notice"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"sys_notice"> | Date | string | null
  }

  export type sys_noticeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    content?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: sys_noticeOrderByRelevanceInput
  }

  export type sys_noticeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sys_noticeWhereInput | sys_noticeWhereInput[]
    OR?: sys_noticeWhereInput[]
    NOT?: sys_noticeWhereInput | sys_noticeWhereInput[]
    title?: StringFilter<"sys_notice"> | string
    type?: StringFilter<"sys_notice"> | string
    content?: StringNullableFilter<"sys_notice"> | string | null
    status?: StringNullableFilter<"sys_notice"> | string | null
    remark?: StringNullableFilter<"sys_notice"> | string | null
    createdAt?: DateTimeNullableFilter<"sys_notice"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"sys_notice"> | Date | string | null
  }, "id">

  export type sys_noticeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    content?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: sys_noticeCountOrderByAggregateInput
    _avg?: sys_noticeAvgOrderByAggregateInput
    _max?: sys_noticeMaxOrderByAggregateInput
    _min?: sys_noticeMinOrderByAggregateInput
    _sum?: sys_noticeSumOrderByAggregateInput
  }

  export type sys_noticeScalarWhereWithAggregatesInput = {
    AND?: sys_noticeScalarWhereWithAggregatesInput | sys_noticeScalarWhereWithAggregatesInput[]
    OR?: sys_noticeScalarWhereWithAggregatesInput[]
    NOT?: sys_noticeScalarWhereWithAggregatesInput | sys_noticeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sys_notice"> | number
    title?: StringWithAggregatesFilter<"sys_notice"> | string
    type?: StringWithAggregatesFilter<"sys_notice"> | string
    content?: StringNullableWithAggregatesFilter<"sys_notice"> | string | null
    status?: StringNullableWithAggregatesFilter<"sys_notice"> | string | null
    remark?: StringNullableWithAggregatesFilter<"sys_notice"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"sys_notice"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"sys_notice"> | Date | string | null
  }

  export type sys_roleWhereInput = {
    AND?: sys_roleWhereInput | sys_roleWhereInput[]
    OR?: sys_roleWhereInput[]
    NOT?: sys_roleWhereInput | sys_roleWhereInput[]
    id?: IntFilter<"sys_role"> | number
    name?: StringFilter<"sys_role"> | string
    value?: StringNullableFilter<"sys_role"> | string | null
    sort?: IntFilter<"sys_role"> | number
    status?: StringNullableFilter<"sys_role"> | string | null
    remark?: StringNullableFilter<"sys_role"> | string | null
    createdAt?: DateTimeNullableFilter<"sys_role"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"sys_role"> | Date | string | null
  }

  export type sys_roleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrderInput | SortOrder
    sort?: SortOrder
    status?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: sys_roleOrderByRelevanceInput
  }

  export type sys_roleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sys_roleWhereInput | sys_roleWhereInput[]
    OR?: sys_roleWhereInput[]
    NOT?: sys_roleWhereInput | sys_roleWhereInput[]
    name?: StringFilter<"sys_role"> | string
    value?: StringNullableFilter<"sys_role"> | string | null
    sort?: IntFilter<"sys_role"> | number
    status?: StringNullableFilter<"sys_role"> | string | null
    remark?: StringNullableFilter<"sys_role"> | string | null
    createdAt?: DateTimeNullableFilter<"sys_role"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"sys_role"> | Date | string | null
  }, "id">

  export type sys_roleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrderInput | SortOrder
    sort?: SortOrder
    status?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: sys_roleCountOrderByAggregateInput
    _avg?: sys_roleAvgOrderByAggregateInput
    _max?: sys_roleMaxOrderByAggregateInput
    _min?: sys_roleMinOrderByAggregateInput
    _sum?: sys_roleSumOrderByAggregateInput
  }

  export type sys_roleScalarWhereWithAggregatesInput = {
    AND?: sys_roleScalarWhereWithAggregatesInput | sys_roleScalarWhereWithAggregatesInput[]
    OR?: sys_roleScalarWhereWithAggregatesInput[]
    NOT?: sys_roleScalarWhereWithAggregatesInput | sys_roleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sys_role"> | number
    name?: StringWithAggregatesFilter<"sys_role"> | string
    value?: StringNullableWithAggregatesFilter<"sys_role"> | string | null
    sort?: IntWithAggregatesFilter<"sys_role"> | number
    status?: StringNullableWithAggregatesFilter<"sys_role"> | string | null
    remark?: StringNullableWithAggregatesFilter<"sys_role"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"sys_role"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"sys_role"> | Date | string | null
  }

  export type sys_userWhereInput = {
    AND?: sys_userWhereInput | sys_userWhereInput[]
    OR?: sys_userWhereInput[]
    NOT?: sys_userWhereInput | sys_userWhereInput[]
    id?: IntFilter<"sys_user"> | number
    role_id?: StringFilter<"sys_user"> | string
    username?: StringFilter<"sys_user"> | string
    password?: StringFilter<"sys_user"> | string
    status?: StringNullableFilter<"sys_user"> | string | null
    remark?: StringNullableFilter<"sys_user"> | string | null
    createdAt?: DateTimeNullableFilter<"sys_user"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"sys_user"> | Date | string | null
  }

  export type sys_userOrderByWithRelationInput = {
    id?: SortOrder
    role_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    status?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: sys_userOrderByRelevanceInput
  }

  export type sys_userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sys_userWhereInput | sys_userWhereInput[]
    OR?: sys_userWhereInput[]
    NOT?: sys_userWhereInput | sys_userWhereInput[]
    role_id?: StringFilter<"sys_user"> | string
    username?: StringFilter<"sys_user"> | string
    password?: StringFilter<"sys_user"> | string
    status?: StringNullableFilter<"sys_user"> | string | null
    remark?: StringNullableFilter<"sys_user"> | string | null
    createdAt?: DateTimeNullableFilter<"sys_user"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"sys_user"> | Date | string | null
  }, "id">

  export type sys_userOrderByWithAggregationInput = {
    id?: SortOrder
    role_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    status?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: sys_userCountOrderByAggregateInput
    _avg?: sys_userAvgOrderByAggregateInput
    _max?: sys_userMaxOrderByAggregateInput
    _min?: sys_userMinOrderByAggregateInput
    _sum?: sys_userSumOrderByAggregateInput
  }

  export type sys_userScalarWhereWithAggregatesInput = {
    AND?: sys_userScalarWhereWithAggregatesInput | sys_userScalarWhereWithAggregatesInput[]
    OR?: sys_userScalarWhereWithAggregatesInput[]
    NOT?: sys_userScalarWhereWithAggregatesInput | sys_userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sys_user"> | number
    role_id?: StringWithAggregatesFilter<"sys_user"> | string
    username?: StringWithAggregatesFilter<"sys_user"> | string
    password?: StringWithAggregatesFilter<"sys_user"> | string
    status?: StringNullableWithAggregatesFilter<"sys_user"> | string | null
    remark?: StringNullableWithAggregatesFilter<"sys_user"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"sys_user"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"sys_user"> | Date | string | null
  }

  export type cms_articleCreateInput = {
    cid?: number | null
    subCid?: string | null
    title?: string | null
    shortTitle?: string | null
    tagId?: string | null
    attr?: string | null
    articleView?: string | null
    source?: string | null
    author?: string | null
    description?: string | null
    img?: string | null
    content?: string | null
    status?: number | null
    pv?: number | null
    link?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type cms_articleUncheckedCreateInput = {
    id?: number
    cid?: number | null
    subCid?: string | null
    title?: string | null
    shortTitle?: string | null
    tagId?: string | null
    attr?: string | null
    articleView?: string | null
    source?: string | null
    author?: string | null
    description?: string | null
    img?: string | null
    content?: string | null
    status?: number | null
    pv?: number | null
    link?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type cms_articleUpdateInput = {
    cid?: NullableIntFieldUpdateOperationsInput | number | null
    subCid?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    shortTitle?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
    attr?: NullableStringFieldUpdateOperationsInput | string | null
    articleView?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    pv?: NullableIntFieldUpdateOperationsInput | number | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_articleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cid?: NullableIntFieldUpdateOperationsInput | number | null
    subCid?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    shortTitle?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
    attr?: NullableStringFieldUpdateOperationsInput | string | null
    articleView?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    pv?: NullableIntFieldUpdateOperationsInput | number | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_articleCreateManyInput = {
    id?: number
    cid?: number | null
    subCid?: string | null
    title?: string | null
    shortTitle?: string | null
    tagId?: string | null
    attr?: string | null
    articleView?: string | null
    source?: string | null
    author?: string | null
    description?: string | null
    img?: string | null
    content?: string | null
    status?: number | null
    pv?: number | null
    link?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type cms_articleUpdateManyMutationInput = {
    cid?: NullableIntFieldUpdateOperationsInput | number | null
    subCid?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    shortTitle?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
    attr?: NullableStringFieldUpdateOperationsInput | string | null
    articleView?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    pv?: NullableIntFieldUpdateOperationsInput | number | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_articleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cid?: NullableIntFieldUpdateOperationsInput | number | null
    subCid?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    shortTitle?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
    attr?: NullableStringFieldUpdateOperationsInput | string | null
    articleView?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    pv?: NullableIntFieldUpdateOperationsInput | number | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_articletagCreateInput = {
    aid?: number | null
    tid?: number | null
  }

  export type cms_articletagUncheckedCreateInput = {
    id?: number
    aid?: number | null
    tid?: number | null
  }

  export type cms_articletagUpdateInput = {
    aid?: NullableIntFieldUpdateOperationsInput | number | null
    tid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cms_articletagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    aid?: NullableIntFieldUpdateOperationsInput | number | null
    tid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cms_articletagCreateManyInput = {
    id?: number
    aid?: number | null
    tid?: number | null
  }

  export type cms_articletagUpdateManyMutationInput = {
    aid?: NullableIntFieldUpdateOperationsInput | number | null
    tid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cms_articletagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    aid?: NullableIntFieldUpdateOperationsInput | number | null
    tid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cms_categoryCreateInput = {
    pid?: number
    seoTitle?: string | null
    seoKeywords?: string | null
    seoDescription?: string | null
    name?: string | null
    pinyin?: string | null
    path: string
    description?: string | null
    type?: string | null
    url?: string | null
    orderBy?: number | null
    target?: string | null
    status?: string | null
    mid?: string | null
    listView?: string | null
    articleView?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type cms_categoryUncheckedCreateInput = {
    id?: number
    pid?: number
    seoTitle?: string | null
    seoKeywords?: string | null
    seoDescription?: string | null
    name?: string | null
    pinyin?: string | null
    path: string
    description?: string | null
    type?: string | null
    url?: string | null
    orderBy?: number | null
    target?: string | null
    status?: string | null
    mid?: string | null
    listView?: string | null
    articleView?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type cms_categoryUpdateInput = {
    pid?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    orderBy?: NullableIntFieldUpdateOperationsInput | number | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    mid?: NullableStringFieldUpdateOperationsInput | string | null
    listView?: NullableStringFieldUpdateOperationsInput | string | null
    articleView?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_categoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pid?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    orderBy?: NullableIntFieldUpdateOperationsInput | number | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    mid?: NullableStringFieldUpdateOperationsInput | string | null
    listView?: NullableStringFieldUpdateOperationsInput | string | null
    articleView?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_categoryCreateManyInput = {
    id?: number
    pid?: number
    seoTitle?: string | null
    seoKeywords?: string | null
    seoDescription?: string | null
    name?: string | null
    pinyin?: string | null
    path: string
    description?: string | null
    type?: string | null
    url?: string | null
    orderBy?: number | null
    target?: string | null
    status?: string | null
    mid?: string | null
    listView?: string | null
    articleView?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type cms_categoryUpdateManyMutationInput = {
    pid?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    orderBy?: NullableIntFieldUpdateOperationsInput | number | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    mid?: NullableStringFieldUpdateOperationsInput | string | null
    listView?: NullableStringFieldUpdateOperationsInput | string | null
    articleView?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_categoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pid?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    orderBy?: NullableIntFieldUpdateOperationsInput | number | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    mid?: NullableStringFieldUpdateOperationsInput | string | null
    listView?: NullableStringFieldUpdateOperationsInput | string | null
    articleView?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_fieldCreateInput = {
    mid?: number | null
    cname?: string | null
    ename?: string | null
    type?: string | null
    val?: string | null
    defaultVal?: string | null
    orderBy?: string | null
    length?: string | null
  }

  export type cms_fieldUncheckedCreateInput = {
    id?: number
    mid?: number | null
    cname?: string | null
    ename?: string | null
    type?: string | null
    val?: string | null
    defaultVal?: string | null
    orderBy?: string | null
    length?: string | null
  }

  export type cms_fieldUpdateInput = {
    mid?: NullableIntFieldUpdateOperationsInput | number | null
    cname?: NullableStringFieldUpdateOperationsInput | string | null
    ename?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    val?: NullableStringFieldUpdateOperationsInput | string | null
    defaultVal?: NullableStringFieldUpdateOperationsInput | string | null
    orderBy?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cms_fieldUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mid?: NullableIntFieldUpdateOperationsInput | number | null
    cname?: NullableStringFieldUpdateOperationsInput | string | null
    ename?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    val?: NullableStringFieldUpdateOperationsInput | string | null
    defaultVal?: NullableStringFieldUpdateOperationsInput | string | null
    orderBy?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cms_fieldCreateManyInput = {
    id?: number
    mid?: number | null
    cname?: string | null
    ename?: string | null
    type?: string | null
    val?: string | null
    defaultVal?: string | null
    orderBy?: string | null
    length?: string | null
  }

  export type cms_fieldUpdateManyMutationInput = {
    mid?: NullableIntFieldUpdateOperationsInput | number | null
    cname?: NullableStringFieldUpdateOperationsInput | string | null
    ename?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    val?: NullableStringFieldUpdateOperationsInput | string | null
    defaultVal?: NullableStringFieldUpdateOperationsInput | string | null
    orderBy?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cms_fieldUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mid?: NullableIntFieldUpdateOperationsInput | number | null
    cname?: NullableStringFieldUpdateOperationsInput | string | null
    ename?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    val?: NullableStringFieldUpdateOperationsInput | string | null
    defaultVal?: NullableStringFieldUpdateOperationsInput | string | null
    orderBy?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cms_fragCreateInput = {
    name?: string | null
    mark?: string | null
    content?: string | null
    type?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type cms_fragUncheckedCreateInput = {
    id?: number
    name?: string | null
    mark?: string | null
    content?: string | null
    type?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type cms_fragUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mark?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_fragUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mark?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_fragCreateManyInput = {
    id?: number
    name?: string | null
    mark?: string | null
    content?: string | null
    type?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type cms_fragUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mark?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_fragUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mark?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_friendlinkCreateInput = {
    title?: string | null
    link?: string | null
    orderBy?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type cms_friendlinkUncheckedCreateInput = {
    id?: number
    title?: string | null
    link?: string | null
    orderBy?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type cms_friendlinkUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    orderBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_friendlinkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    orderBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_friendlinkCreateManyInput = {
    id?: number
    title?: string | null
    link?: string | null
    orderBy?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type cms_friendlinkUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    orderBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_friendlinkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    orderBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_messageCreateInput = {
    type?: number | null
    title?: string | null
    name?: string | null
    tel?: string | null
    wechat?: string | null
    company?: string | null
    content?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type cms_messageUncheckedCreateInput = {
    id?: number
    type?: number | null
    title?: string | null
    name?: string | null
    tel?: string | null
    wechat?: string | null
    company?: string | null
    content?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type cms_messageUpdateInput = {
    type?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    wechat?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_messageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    wechat?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_messageCreateManyInput = {
    id?: number
    type?: number | null
    title?: string | null
    name?: string | null
    tel?: string | null
    wechat?: string | null
    company?: string | null
    content?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type cms_messageUpdateManyMutationInput = {
    type?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    wechat?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_messageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    wechat?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_modelCreateInput = {
    model?: string | null
    tableName?: string | null
    status?: string | null
    remark?: string | null
  }

  export type cms_modelUncheckedCreateInput = {
    id?: number
    model?: string | null
    tableName?: string | null
    status?: string | null
    remark?: string | null
  }

  export type cms_modelUpdateInput = {
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tableName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cms_modelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tableName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cms_modelCreateManyInput = {
    id?: number
    model?: string | null
    tableName?: string | null
    status?: string | null
    remark?: string | null
  }

  export type cms_modelUpdateManyMutationInput = {
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tableName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cms_modelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tableName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cms_siteCreateInput = {
    name?: string | null
    domain?: string | null
    email?: string | null
    wx?: string | null
    icp?: string | null
    code?: string | null
    json?: string | null
    title?: string | null
    keywords?: string | null
    description?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type cms_siteUncheckedCreateInput = {
    id?: number
    name?: string | null
    domain?: string | null
    email?: string | null
    wx?: string | null
    icp?: string | null
    code?: string | null
    json?: string | null
    title?: string | null
    keywords?: string | null
    description?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type cms_siteUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    wx?: NullableStringFieldUpdateOperationsInput | string | null
    icp?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    json?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_siteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    wx?: NullableStringFieldUpdateOperationsInput | string | null
    icp?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    json?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_siteCreateManyInput = {
    id?: number
    name?: string | null
    domain?: string | null
    email?: string | null
    wx?: string | null
    icp?: string | null
    code?: string | null
    json?: string | null
    title?: string | null
    keywords?: string | null
    description?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type cms_siteUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    wx?: NullableStringFieldUpdateOperationsInput | string | null
    icp?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    json?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_siteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    wx?: NullableStringFieldUpdateOperationsInput | string | null
    icp?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    json?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_slideCreateInput = {
    title?: string | null
    imgUrl?: string | null
    linkUrl?: string | null
    mark?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type cms_slideUncheckedCreateInput = {
    id?: number
    title?: string | null
    imgUrl?: string | null
    linkUrl?: string | null
    mark?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type cms_slideUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_slideUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_slideCreateManyInput = {
    id?: number
    title?: string | null
    imgUrl?: string | null
    linkUrl?: string | null
    mark?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type cms_slideUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_slideUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cms_tagCreateInput = {
    name?: string | null
    path?: string | null
    count?: number | null
  }

  export type cms_tagUncheckedCreateInput = {
    id?: number
    name?: string | null
    path?: string | null
    count?: number | null
  }

  export type cms_tagUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cms_tagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cms_tagCreateManyInput = {
    id?: number
    name?: string | null
    path?: string | null
    count?: number | null
  }

  export type cms_tagUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cms_tagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ext_downloadCreateInput = {
    aid: number
    fileName?: string | null
    fileVersion?: string | null
    fileLink?: string | null
    test1?: string | null
  }

  export type ext_downloadUncheckedCreateInput = {
    id?: number
    aid: number
    fileName?: string | null
    fileVersion?: string | null
    fileLink?: string | null
    test1?: string | null
  }

  export type ext_downloadUpdateInput = {
    aid?: IntFieldUpdateOperationsInput | number
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileVersion?: NullableStringFieldUpdateOperationsInput | string | null
    fileLink?: NullableStringFieldUpdateOperationsInput | string | null
    test1?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ext_downloadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    aid?: IntFieldUpdateOperationsInput | number
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileVersion?: NullableStringFieldUpdateOperationsInput | string | null
    fileLink?: NullableStringFieldUpdateOperationsInput | string | null
    test1?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ext_downloadCreateManyInput = {
    id?: number
    aid: number
    fileName?: string | null
    fileVersion?: string | null
    fileLink?: string | null
    test1?: string | null
  }

  export type ext_downloadUpdateManyMutationInput = {
    aid?: IntFieldUpdateOperationsInput | number
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileVersion?: NullableStringFieldUpdateOperationsInput | string | null
    fileLink?: NullableStringFieldUpdateOperationsInput | string | null
    test1?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ext_downloadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    aid?: IntFieldUpdateOperationsInput | number
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileVersion?: NullableStringFieldUpdateOperationsInput | string | null
    fileLink?: NullableStringFieldUpdateOperationsInput | string | null
    test1?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ext_lanhuaCreateInput = {
    aid: number
    lanName?: string | null
    lanFenlei?: string | null
    lanType?: string | null
  }

  export type ext_lanhuaUncheckedCreateInput = {
    id?: number
    aid: number
    lanName?: string | null
    lanFenlei?: string | null
    lanType?: string | null
  }

  export type ext_lanhuaUpdateInput = {
    aid?: IntFieldUpdateOperationsInput | number
    lanName?: NullableStringFieldUpdateOperationsInput | string | null
    lanFenlei?: NullableStringFieldUpdateOperationsInput | string | null
    lanType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ext_lanhuaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    aid?: IntFieldUpdateOperationsInput | number
    lanName?: NullableStringFieldUpdateOperationsInput | string | null
    lanFenlei?: NullableStringFieldUpdateOperationsInput | string | null
    lanType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ext_lanhuaCreateManyInput = {
    id?: number
    aid: number
    lanName?: string | null
    lanFenlei?: string | null
    lanType?: string | null
  }

  export type ext_lanhuaUpdateManyMutationInput = {
    aid?: IntFieldUpdateOperationsInput | number
    lanName?: NullableStringFieldUpdateOperationsInput | string | null
    lanFenlei?: NullableStringFieldUpdateOperationsInput | string | null
    lanType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ext_lanhuaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    aid?: IntFieldUpdateOperationsInput | number
    lanName?: NullableStringFieldUpdateOperationsInput | string | null
    lanFenlei?: NullableStringFieldUpdateOperationsInput | string | null
    lanType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type plus_collectCreateInput = {
    taskName?: string | null
    targetUrl?: string | null
    listTag?: string | null
    startNum?: number | null
    endNum?: number | null
    increment?: string | null
    titleTag?: string | null
    articleTag?: string | null
    charset?: string | null
    pages?: string | null
    parseData?: string | null
    cid?: number | null
    status?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type plus_collectUncheckedCreateInput = {
    id?: number
    taskName?: string | null
    targetUrl?: string | null
    listTag?: string | null
    startNum?: number | null
    endNum?: number | null
    increment?: string | null
    titleTag?: string | null
    articleTag?: string | null
    charset?: string | null
    pages?: string | null
    parseData?: string | null
    cid?: number | null
    status?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type plus_collectUpdateInput = {
    taskName?: NullableStringFieldUpdateOperationsInput | string | null
    targetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    listTag?: NullableStringFieldUpdateOperationsInput | string | null
    startNum?: NullableIntFieldUpdateOperationsInput | number | null
    endNum?: NullableIntFieldUpdateOperationsInput | number | null
    increment?: NullableStringFieldUpdateOperationsInput | string | null
    titleTag?: NullableStringFieldUpdateOperationsInput | string | null
    articleTag?: NullableStringFieldUpdateOperationsInput | string | null
    charset?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableStringFieldUpdateOperationsInput | string | null
    parseData?: NullableStringFieldUpdateOperationsInput | string | null
    cid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type plus_collectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskName?: NullableStringFieldUpdateOperationsInput | string | null
    targetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    listTag?: NullableStringFieldUpdateOperationsInput | string | null
    startNum?: NullableIntFieldUpdateOperationsInput | number | null
    endNum?: NullableIntFieldUpdateOperationsInput | number | null
    increment?: NullableStringFieldUpdateOperationsInput | string | null
    titleTag?: NullableStringFieldUpdateOperationsInput | string | null
    articleTag?: NullableStringFieldUpdateOperationsInput | string | null
    charset?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableStringFieldUpdateOperationsInput | string | null
    parseData?: NullableStringFieldUpdateOperationsInput | string | null
    cid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type plus_collectCreateManyInput = {
    id?: number
    taskName?: string | null
    targetUrl?: string | null
    listTag?: string | null
    startNum?: number | null
    endNum?: number | null
    increment?: string | null
    titleTag?: string | null
    articleTag?: string | null
    charset?: string | null
    pages?: string | null
    parseData?: string | null
    cid?: number | null
    status?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type plus_collectUpdateManyMutationInput = {
    taskName?: NullableStringFieldUpdateOperationsInput | string | null
    targetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    listTag?: NullableStringFieldUpdateOperationsInput | string | null
    startNum?: NullableIntFieldUpdateOperationsInput | number | null
    endNum?: NullableIntFieldUpdateOperationsInput | number | null
    increment?: NullableStringFieldUpdateOperationsInput | string | null
    titleTag?: NullableStringFieldUpdateOperationsInput | string | null
    articleTag?: NullableStringFieldUpdateOperationsInput | string | null
    charset?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableStringFieldUpdateOperationsInput | string | null
    parseData?: NullableStringFieldUpdateOperationsInput | string | null
    cid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type plus_collectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskName?: NullableStringFieldUpdateOperationsInput | string | null
    targetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    listTag?: NullableStringFieldUpdateOperationsInput | string | null
    startNum?: NullableIntFieldUpdateOperationsInput | number | null
    endNum?: NullableIntFieldUpdateOperationsInput | number | null
    increment?: NullableStringFieldUpdateOperationsInput | string | null
    titleTag?: NullableStringFieldUpdateOperationsInput | string | null
    articleTag?: NullableStringFieldUpdateOperationsInput | string | null
    charset?: NullableStringFieldUpdateOperationsInput | string | null
    pages?: NullableStringFieldUpdateOperationsInput | string | null
    parseData?: NullableStringFieldUpdateOperationsInput | string | null
    cid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type plus_gatherCreateInput = {
    taskName?: string | null
    targetUrl?: string | null
    parseData?: string | null
    cid?: number | null
    status?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type plus_gatherUncheckedCreateInput = {
    id?: number
    taskName?: string | null
    targetUrl?: string | null
    parseData?: string | null
    cid?: number | null
    status?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type plus_gatherUpdateInput = {
    taskName?: NullableStringFieldUpdateOperationsInput | string | null
    targetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parseData?: NullableStringFieldUpdateOperationsInput | string | null
    cid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type plus_gatherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskName?: NullableStringFieldUpdateOperationsInput | string | null
    targetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parseData?: NullableStringFieldUpdateOperationsInput | string | null
    cid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type plus_gatherCreateManyInput = {
    id?: number
    taskName?: string | null
    targetUrl?: string | null
    parseData?: string | null
    cid?: number | null
    status?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type plus_gatherUpdateManyMutationInput = {
    taskName?: NullableStringFieldUpdateOperationsInput | string | null
    targetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parseData?: NullableStringFieldUpdateOperationsInput | string | null
    cid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type plus_gatherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskName?: NullableStringFieldUpdateOperationsInput | string | null
    targetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parseData?: NullableStringFieldUpdateOperationsInput | string | null
    cid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_configCreateInput = {
    template?: string | null
    appid?: string | null
    secret?: string | null
    accessKey?: string | null
    secretKey?: string | null
    domain?: string | null
    bucket?: string | null
    uploadWay?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type sys_configUncheckedCreateInput = {
    id?: number
    template?: string | null
    appid?: string | null
    secret?: string | null
    accessKey?: string | null
    secretKey?: string | null
    domain?: string | null
    bucket?: string | null
    uploadWay?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type sys_configUpdateInput = {
    template?: NullableStringFieldUpdateOperationsInput | string | null
    appid?: NullableStringFieldUpdateOperationsInput | string | null
    secret?: NullableStringFieldUpdateOperationsInput | string | null
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    secretKey?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    uploadWay?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_configUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    template?: NullableStringFieldUpdateOperationsInput | string | null
    appid?: NullableStringFieldUpdateOperationsInput | string | null
    secret?: NullableStringFieldUpdateOperationsInput | string | null
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    secretKey?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    uploadWay?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_configCreateManyInput = {
    id?: number
    template?: string | null
    appid?: string | null
    secret?: string | null
    accessKey?: string | null
    secretKey?: string | null
    domain?: string | null
    bucket?: string | null
    uploadWay?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type sys_configUpdateManyMutationInput = {
    template?: NullableStringFieldUpdateOperationsInput | string | null
    appid?: NullableStringFieldUpdateOperationsInput | string | null
    secret?: NullableStringFieldUpdateOperationsInput | string | null
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    secretKey?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    uploadWay?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_configUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    template?: NullableStringFieldUpdateOperationsInput | string | null
    appid?: NullableStringFieldUpdateOperationsInput | string | null
    secret?: NullableStringFieldUpdateOperationsInput | string | null
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    secretKey?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    bucket?: NullableStringFieldUpdateOperationsInput | string | null
    uploadWay?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_loginlogCreateInput = {
    uid: number
    ip?: string | null
    country?: string | null
    prov?: string | null
    city?: string | null
    district?: string | null
    isp?: string | null
    lat?: string | null
    lng?: string | null
    createdAt?: Date | string | null
  }

  export type sys_loginlogUncheckedCreateInput = {
    id?: number
    uid: number
    ip?: string | null
    country?: string | null
    prov?: string | null
    city?: string | null
    district?: string | null
    isp?: string | null
    lat?: string | null
    lng?: string | null
    createdAt?: Date | string | null
  }

  export type sys_loginlogUpdateInput = {
    uid?: IntFieldUpdateOperationsInput | number
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    prov?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    lng?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_loginlogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: IntFieldUpdateOperationsInput | number
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    prov?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    lng?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_loginlogCreateManyInput = {
    id?: number
    uid: number
    ip?: string | null
    country?: string | null
    prov?: string | null
    city?: string | null
    district?: string | null
    isp?: string | null
    lat?: string | null
    lng?: string | null
    createdAt?: Date | string | null
  }

  export type sys_loginlogUpdateManyMutationInput = {
    uid?: IntFieldUpdateOperationsInput | number
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    prov?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    lng?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_loginlogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: IntFieldUpdateOperationsInput | number
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    prov?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    lng?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_menuCreateInput = {
    id?: bigint | number
    content?: string | null
    remark?: string | null
  }

  export type sys_menuUncheckedCreateInput = {
    id?: bigint | number
    content?: string | null
    remark?: string | null
  }

  export type sys_menuUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sys_menuUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sys_menuCreateManyInput = {
    id?: bigint | number
    content?: string | null
    remark?: string | null
  }

  export type sys_menuUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sys_menuUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sys_noticeCreateInput = {
    title: string
    type: string
    content?: string | null
    status?: string | null
    remark?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type sys_noticeUncheckedCreateInput = {
    id?: number
    title: string
    type: string
    content?: string | null
    status?: string | null
    remark?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type sys_noticeUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_noticeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_noticeCreateManyInput = {
    id?: number
    title: string
    type: string
    content?: string | null
    status?: string | null
    remark?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type sys_noticeUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_noticeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_roleCreateInput = {
    name: string
    value?: string | null
    sort?: number
    status?: string | null
    remark?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type sys_roleUncheckedCreateInput = {
    id?: number
    name: string
    value?: string | null
    sort?: number
    status?: string | null
    remark?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type sys_roleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_roleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_roleCreateManyInput = {
    id?: number
    name: string
    value?: string | null
    sort?: number
    status?: string | null
    remark?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type sys_roleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_roleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_userCreateInput = {
    role_id: string
    username: string
    password: string
    status?: string | null
    remark?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type sys_userUncheckedCreateInput = {
    id?: number
    role_id: string
    username: string
    password: string
    status?: string | null
    remark?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type sys_userUpdateInput = {
    role_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_userCreateManyInput = {
    id?: number
    role_id: string
    username: string
    password: string
    status?: string | null
    remark?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type sys_userUpdateManyMutationInput = {
    role_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sys_userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type cms_articleOrderByRelevanceInput = {
    fields: cms_articleOrderByRelevanceFieldEnum | cms_articleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cms_articleCountOrderByAggregateInput = {
    id?: SortOrder
    cid?: SortOrder
    subCid?: SortOrder
    title?: SortOrder
    shortTitle?: SortOrder
    tagId?: SortOrder
    attr?: SortOrder
    articleView?: SortOrder
    source?: SortOrder
    author?: SortOrder
    description?: SortOrder
    img?: SortOrder
    content?: SortOrder
    status?: SortOrder
    pv?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cms_articleAvgOrderByAggregateInput = {
    id?: SortOrder
    cid?: SortOrder
    status?: SortOrder
    pv?: SortOrder
  }

  export type cms_articleMaxOrderByAggregateInput = {
    id?: SortOrder
    cid?: SortOrder
    subCid?: SortOrder
    title?: SortOrder
    shortTitle?: SortOrder
    tagId?: SortOrder
    attr?: SortOrder
    articleView?: SortOrder
    source?: SortOrder
    author?: SortOrder
    description?: SortOrder
    img?: SortOrder
    content?: SortOrder
    status?: SortOrder
    pv?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cms_articleMinOrderByAggregateInput = {
    id?: SortOrder
    cid?: SortOrder
    subCid?: SortOrder
    title?: SortOrder
    shortTitle?: SortOrder
    tagId?: SortOrder
    attr?: SortOrder
    articleView?: SortOrder
    source?: SortOrder
    author?: SortOrder
    description?: SortOrder
    img?: SortOrder
    content?: SortOrder
    status?: SortOrder
    pv?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cms_articleSumOrderByAggregateInput = {
    id?: SortOrder
    cid?: SortOrder
    status?: SortOrder
    pv?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type cms_articletagCountOrderByAggregateInput = {
    id?: SortOrder
    aid?: SortOrder
    tid?: SortOrder
  }

  export type cms_articletagAvgOrderByAggregateInput = {
    id?: SortOrder
    aid?: SortOrder
    tid?: SortOrder
  }

  export type cms_articletagMaxOrderByAggregateInput = {
    id?: SortOrder
    aid?: SortOrder
    tid?: SortOrder
  }

  export type cms_articletagMinOrderByAggregateInput = {
    id?: SortOrder
    aid?: SortOrder
    tid?: SortOrder
  }

  export type cms_articletagSumOrderByAggregateInput = {
    id?: SortOrder
    aid?: SortOrder
    tid?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type cms_categoryOrderByRelevanceInput = {
    fields: cms_categoryOrderByRelevanceFieldEnum | cms_categoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cms_categoryCountOrderByAggregateInput = {
    id?: SortOrder
    pid?: SortOrder
    seoTitle?: SortOrder
    seoKeywords?: SortOrder
    seoDescription?: SortOrder
    name?: SortOrder
    pinyin?: SortOrder
    path?: SortOrder
    description?: SortOrder
    type?: SortOrder
    url?: SortOrder
    orderBy?: SortOrder
    target?: SortOrder
    status?: SortOrder
    mid?: SortOrder
    listView?: SortOrder
    articleView?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cms_categoryAvgOrderByAggregateInput = {
    id?: SortOrder
    pid?: SortOrder
    orderBy?: SortOrder
  }

  export type cms_categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    pid?: SortOrder
    seoTitle?: SortOrder
    seoKeywords?: SortOrder
    seoDescription?: SortOrder
    name?: SortOrder
    pinyin?: SortOrder
    path?: SortOrder
    description?: SortOrder
    type?: SortOrder
    url?: SortOrder
    orderBy?: SortOrder
    target?: SortOrder
    status?: SortOrder
    mid?: SortOrder
    listView?: SortOrder
    articleView?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cms_categoryMinOrderByAggregateInput = {
    id?: SortOrder
    pid?: SortOrder
    seoTitle?: SortOrder
    seoKeywords?: SortOrder
    seoDescription?: SortOrder
    name?: SortOrder
    pinyin?: SortOrder
    path?: SortOrder
    description?: SortOrder
    type?: SortOrder
    url?: SortOrder
    orderBy?: SortOrder
    target?: SortOrder
    status?: SortOrder
    mid?: SortOrder
    listView?: SortOrder
    articleView?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cms_categorySumOrderByAggregateInput = {
    id?: SortOrder
    pid?: SortOrder
    orderBy?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type cms_fieldOrderByRelevanceInput = {
    fields: cms_fieldOrderByRelevanceFieldEnum | cms_fieldOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cms_fieldCountOrderByAggregateInput = {
    id?: SortOrder
    mid?: SortOrder
    cname?: SortOrder
    ename?: SortOrder
    type?: SortOrder
    val?: SortOrder
    defaultVal?: SortOrder
    orderBy?: SortOrder
    length?: SortOrder
  }

  export type cms_fieldAvgOrderByAggregateInput = {
    id?: SortOrder
    mid?: SortOrder
  }

  export type cms_fieldMaxOrderByAggregateInput = {
    id?: SortOrder
    mid?: SortOrder
    cname?: SortOrder
    ename?: SortOrder
    type?: SortOrder
    val?: SortOrder
    defaultVal?: SortOrder
    orderBy?: SortOrder
    length?: SortOrder
  }

  export type cms_fieldMinOrderByAggregateInput = {
    id?: SortOrder
    mid?: SortOrder
    cname?: SortOrder
    ename?: SortOrder
    type?: SortOrder
    val?: SortOrder
    defaultVal?: SortOrder
    orderBy?: SortOrder
    length?: SortOrder
  }

  export type cms_fieldSumOrderByAggregateInput = {
    id?: SortOrder
    mid?: SortOrder
  }

  export type cms_fragOrderByRelevanceInput = {
    fields: cms_fragOrderByRelevanceFieldEnum | cms_fragOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cms_fragCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mark?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cms_fragAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cms_fragMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mark?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cms_fragMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mark?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cms_fragSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cms_friendlinkOrderByRelevanceInput = {
    fields: cms_friendlinkOrderByRelevanceFieldEnum | cms_friendlinkOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cms_friendlinkCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    orderBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cms_friendlinkAvgOrderByAggregateInput = {
    id?: SortOrder
    orderBy?: SortOrder
  }

  export type cms_friendlinkMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    orderBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cms_friendlinkMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    orderBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cms_friendlinkSumOrderByAggregateInput = {
    id?: SortOrder
    orderBy?: SortOrder
  }

  export type cms_messageOrderByRelevanceInput = {
    fields: cms_messageOrderByRelevanceFieldEnum | cms_messageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cms_messageCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    name?: SortOrder
    tel?: SortOrder
    wechat?: SortOrder
    company?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cms_messageAvgOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type cms_messageMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    name?: SortOrder
    tel?: SortOrder
    wechat?: SortOrder
    company?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cms_messageMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    name?: SortOrder
    tel?: SortOrder
    wechat?: SortOrder
    company?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cms_messageSumOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type cms_modelOrderByRelevanceInput = {
    fields: cms_modelOrderByRelevanceFieldEnum | cms_modelOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cms_modelCountOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    tableName?: SortOrder
    status?: SortOrder
    remark?: SortOrder
  }

  export type cms_modelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cms_modelMaxOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    tableName?: SortOrder
    status?: SortOrder
    remark?: SortOrder
  }

  export type cms_modelMinOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    tableName?: SortOrder
    status?: SortOrder
    remark?: SortOrder
  }

  export type cms_modelSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cms_siteOrderByRelevanceInput = {
    fields: cms_siteOrderByRelevanceFieldEnum | cms_siteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cms_siteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    email?: SortOrder
    wx?: SortOrder
    icp?: SortOrder
    code?: SortOrder
    json?: SortOrder
    title?: SortOrder
    keywords?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cms_siteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cms_siteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    email?: SortOrder
    wx?: SortOrder
    icp?: SortOrder
    code?: SortOrder
    json?: SortOrder
    title?: SortOrder
    keywords?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cms_siteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    email?: SortOrder
    wx?: SortOrder
    icp?: SortOrder
    code?: SortOrder
    json?: SortOrder
    title?: SortOrder
    keywords?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cms_siteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cms_slideOrderByRelevanceInput = {
    fields: cms_slideOrderByRelevanceFieldEnum | cms_slideOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cms_slideCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imgUrl?: SortOrder
    linkUrl?: SortOrder
    mark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cms_slideAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cms_slideMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imgUrl?: SortOrder
    linkUrl?: SortOrder
    mark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cms_slideMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imgUrl?: SortOrder
    linkUrl?: SortOrder
    mark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cms_slideSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cms_tagOrderByRelevanceInput = {
    fields: cms_tagOrderByRelevanceFieldEnum | cms_tagOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cms_tagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    count?: SortOrder
  }

  export type cms_tagAvgOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
  }

  export type cms_tagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    count?: SortOrder
  }

  export type cms_tagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    count?: SortOrder
  }

  export type cms_tagSumOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
  }

  export type ext_downloadOrderByRelevanceInput = {
    fields: ext_downloadOrderByRelevanceFieldEnum | ext_downloadOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ext_downloadCountOrderByAggregateInput = {
    id?: SortOrder
    aid?: SortOrder
    fileName?: SortOrder
    fileVersion?: SortOrder
    fileLink?: SortOrder
    test1?: SortOrder
  }

  export type ext_downloadAvgOrderByAggregateInput = {
    id?: SortOrder
    aid?: SortOrder
  }

  export type ext_downloadMaxOrderByAggregateInput = {
    id?: SortOrder
    aid?: SortOrder
    fileName?: SortOrder
    fileVersion?: SortOrder
    fileLink?: SortOrder
    test1?: SortOrder
  }

  export type ext_downloadMinOrderByAggregateInput = {
    id?: SortOrder
    aid?: SortOrder
    fileName?: SortOrder
    fileVersion?: SortOrder
    fileLink?: SortOrder
    test1?: SortOrder
  }

  export type ext_downloadSumOrderByAggregateInput = {
    id?: SortOrder
    aid?: SortOrder
  }

  export type ext_lanhuaOrderByRelevanceInput = {
    fields: ext_lanhuaOrderByRelevanceFieldEnum | ext_lanhuaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ext_lanhuaCountOrderByAggregateInput = {
    id?: SortOrder
    aid?: SortOrder
    lanName?: SortOrder
    lanFenlei?: SortOrder
    lanType?: SortOrder
  }

  export type ext_lanhuaAvgOrderByAggregateInput = {
    id?: SortOrder
    aid?: SortOrder
  }

  export type ext_lanhuaMaxOrderByAggregateInput = {
    id?: SortOrder
    aid?: SortOrder
    lanName?: SortOrder
    lanFenlei?: SortOrder
    lanType?: SortOrder
  }

  export type ext_lanhuaMinOrderByAggregateInput = {
    id?: SortOrder
    aid?: SortOrder
    lanName?: SortOrder
    lanFenlei?: SortOrder
    lanType?: SortOrder
  }

  export type ext_lanhuaSumOrderByAggregateInput = {
    id?: SortOrder
    aid?: SortOrder
  }

  export type plus_collectOrderByRelevanceInput = {
    fields: plus_collectOrderByRelevanceFieldEnum | plus_collectOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type plus_collectCountOrderByAggregateInput = {
    id?: SortOrder
    taskName?: SortOrder
    targetUrl?: SortOrder
    listTag?: SortOrder
    startNum?: SortOrder
    endNum?: SortOrder
    increment?: SortOrder
    titleTag?: SortOrder
    articleTag?: SortOrder
    charset?: SortOrder
    pages?: SortOrder
    parseData?: SortOrder
    cid?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type plus_collectAvgOrderByAggregateInput = {
    id?: SortOrder
    startNum?: SortOrder
    endNum?: SortOrder
    cid?: SortOrder
  }

  export type plus_collectMaxOrderByAggregateInput = {
    id?: SortOrder
    taskName?: SortOrder
    targetUrl?: SortOrder
    listTag?: SortOrder
    startNum?: SortOrder
    endNum?: SortOrder
    increment?: SortOrder
    titleTag?: SortOrder
    articleTag?: SortOrder
    charset?: SortOrder
    pages?: SortOrder
    parseData?: SortOrder
    cid?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type plus_collectMinOrderByAggregateInput = {
    id?: SortOrder
    taskName?: SortOrder
    targetUrl?: SortOrder
    listTag?: SortOrder
    startNum?: SortOrder
    endNum?: SortOrder
    increment?: SortOrder
    titleTag?: SortOrder
    articleTag?: SortOrder
    charset?: SortOrder
    pages?: SortOrder
    parseData?: SortOrder
    cid?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type plus_collectSumOrderByAggregateInput = {
    id?: SortOrder
    startNum?: SortOrder
    endNum?: SortOrder
    cid?: SortOrder
  }

  export type plus_gatherOrderByRelevanceInput = {
    fields: plus_gatherOrderByRelevanceFieldEnum | plus_gatherOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type plus_gatherCountOrderByAggregateInput = {
    id?: SortOrder
    taskName?: SortOrder
    targetUrl?: SortOrder
    parseData?: SortOrder
    cid?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type plus_gatherAvgOrderByAggregateInput = {
    id?: SortOrder
    cid?: SortOrder
  }

  export type plus_gatherMaxOrderByAggregateInput = {
    id?: SortOrder
    taskName?: SortOrder
    targetUrl?: SortOrder
    parseData?: SortOrder
    cid?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type plus_gatherMinOrderByAggregateInput = {
    id?: SortOrder
    taskName?: SortOrder
    targetUrl?: SortOrder
    parseData?: SortOrder
    cid?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type plus_gatherSumOrderByAggregateInput = {
    id?: SortOrder
    cid?: SortOrder
  }

  export type sys_configOrderByRelevanceInput = {
    fields: sys_configOrderByRelevanceFieldEnum | sys_configOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sys_configCountOrderByAggregateInput = {
    id?: SortOrder
    template?: SortOrder
    appid?: SortOrder
    secret?: SortOrder
    accessKey?: SortOrder
    secretKey?: SortOrder
    domain?: SortOrder
    bucket?: SortOrder
    uploadWay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sys_configAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type sys_configMaxOrderByAggregateInput = {
    id?: SortOrder
    template?: SortOrder
    appid?: SortOrder
    secret?: SortOrder
    accessKey?: SortOrder
    secretKey?: SortOrder
    domain?: SortOrder
    bucket?: SortOrder
    uploadWay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sys_configMinOrderByAggregateInput = {
    id?: SortOrder
    template?: SortOrder
    appid?: SortOrder
    secret?: SortOrder
    accessKey?: SortOrder
    secretKey?: SortOrder
    domain?: SortOrder
    bucket?: SortOrder
    uploadWay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sys_configSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type sys_loginlogOrderByRelevanceInput = {
    fields: sys_loginlogOrderByRelevanceFieldEnum | sys_loginlogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sys_loginlogCountOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    ip?: SortOrder
    country?: SortOrder
    prov?: SortOrder
    city?: SortOrder
    district?: SortOrder
    isp?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
  }

  export type sys_loginlogAvgOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
  }

  export type sys_loginlogMaxOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    ip?: SortOrder
    country?: SortOrder
    prov?: SortOrder
    city?: SortOrder
    district?: SortOrder
    isp?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
  }

  export type sys_loginlogMinOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    ip?: SortOrder
    country?: SortOrder
    prov?: SortOrder
    city?: SortOrder
    district?: SortOrder
    isp?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
  }

  export type sys_loginlogSumOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type sys_menuOrderByRelevanceInput = {
    fields: sys_menuOrderByRelevanceFieldEnum | sys_menuOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sys_menuCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    remark?: SortOrder
  }

  export type sys_menuAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type sys_menuMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    remark?: SortOrder
  }

  export type sys_menuMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    remark?: SortOrder
  }

  export type sys_menuSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type sys_noticeOrderByRelevanceInput = {
    fields: sys_noticeOrderByRelevanceFieldEnum | sys_noticeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sys_noticeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    content?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sys_noticeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type sys_noticeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    content?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sys_noticeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    content?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sys_noticeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type sys_roleOrderByRelevanceInput = {
    fields: sys_roleOrderByRelevanceFieldEnum | sys_roleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sys_roleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    sort?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sys_roleAvgOrderByAggregateInput = {
    id?: SortOrder
    sort?: SortOrder
  }

  export type sys_roleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    sort?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sys_roleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    sort?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sys_roleSumOrderByAggregateInput = {
    id?: SortOrder
    sort?: SortOrder
  }

  export type sys_userOrderByRelevanceInput = {
    fields: sys_userOrderByRelevanceFieldEnum | sys_userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sys_userCountOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sys_userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type sys_userMaxOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sys_userMinOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sys_userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}