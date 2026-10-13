
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
 * Model accesoqr
 * 
 */
export type accesoqr = $Result.DefaultSelection<Prisma.$accesoqrPayload>
/**
 * Model categoria
 * 
 */
export type categoria = $Result.DefaultSelection<Prisma.$categoriaPayload>
/**
 * Model comprobante
 * 
 */
export type comprobante = $Result.DefaultSelection<Prisma.$comprobantePayload>
/**
 * Model detalleventa
 * 
 */
export type detalleventa = $Result.DefaultSelection<Prisma.$detalleventaPayload>
/**
 * Model metodopago
 * 
 */
export type metodopago = $Result.DefaultSelection<Prisma.$metodopagoPayload>
/**
 * Model productos
 * 
 */
export type productos = $Result.DefaultSelection<Prisma.$productosPayload>
/**
 * Model tipoacceso
 * 
 */
export type tipoacceso = $Result.DefaultSelection<Prisma.$tipoaccesoPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>
/**
 * Model ventas
 * 
 */
export type ventas = $Result.DefaultSelection<Prisma.$ventasPayload>
/**
 * Model alergenoproducto
 * 
 */
export type alergenoproducto = $Result.DefaultSelection<Prisma.$alergenoproductoPayload>
/**
 * Model ingredienteproducto
 * 
 */
export type ingredienteproducto = $Result.DefaultSelection<Prisma.$ingredienteproductoPayload>
/**
 * Model tickets
 * 
 */
export type tickets = $Result.DefaultSelection<Prisma.$ticketsPayload>
/**
 * Model reseteo_semanal
 * 
 */
export type reseteo_semanal = $Result.DefaultSelection<Prisma.$reseteo_semanalPayload>
/**
 * Model ia_conversaciones
 * Registro de conversaciones para medir resolución en el primer contacto,
 * tiempo de respuesta e intenciones más frecuentes del asistente.
 */
export type ia_conversaciones = $Result.DefaultSelection<Prisma.$ia_conversacionesPayload>
/**
 * Model feedback
 * Feedback del cliente (reseñas, quejas, sugerencias y encuestas NPS).
 */
export type feedback = $Result.DefaultSelection<Prisma.$feedbackPayload>
/**
 * Model email_eventos
 * Eventos de los correos de bienvenida para medir apertura y clics.
 */
export type email_eventos = $Result.DefaultSelection<Prisma.$email_eventosPayload>
/**
 * Model reservas
 * Solicitudes de reserva que puede capturar el asistente o el formulario web.
 */
export type reservas = $Result.DefaultSelection<Prisma.$reservasPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accesoqrs
 * const accesoqrs = await prisma.accesoqr.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Accesoqrs
   * const accesoqrs = await prisma.accesoqr.findMany()
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
   * `prisma.accesoqr`: Exposes CRUD operations for the **accesoqr** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accesoqrs
    * const accesoqrs = await prisma.accesoqr.findMany()
    * ```
    */
  get accesoqr(): Prisma.accesoqrDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.categoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comprobante`: Exposes CRUD operations for the **comprobante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comprobantes
    * const comprobantes = await prisma.comprobante.findMany()
    * ```
    */
  get comprobante(): Prisma.comprobanteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalleventa`: Exposes CRUD operations for the **detalleventa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detalleventas
    * const detalleventas = await prisma.detalleventa.findMany()
    * ```
    */
  get detalleventa(): Prisma.detalleventaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metodopago`: Exposes CRUD operations for the **metodopago** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metodopagos
    * const metodopagos = await prisma.metodopago.findMany()
    * ```
    */
  get metodopago(): Prisma.metodopagoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productos`: Exposes CRUD operations for the **productos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.productos.findMany()
    * ```
    */
  get productos(): Prisma.productosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoacceso`: Exposes CRUD operations for the **tipoacceso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipoaccesos
    * const tipoaccesos = await prisma.tipoacceso.findMany()
    * ```
    */
  get tipoacceso(): Prisma.tipoaccesoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ventas`: Exposes CRUD operations for the **ventas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ventas
    * const ventas = await prisma.ventas.findMany()
    * ```
    */
  get ventas(): Prisma.ventasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alergenoproducto`: Exposes CRUD operations for the **alergenoproducto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alergenoproductos
    * const alergenoproductos = await prisma.alergenoproducto.findMany()
    * ```
    */
  get alergenoproducto(): Prisma.alergenoproductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredienteproducto`: Exposes CRUD operations for the **ingredienteproducto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredienteproductos
    * const ingredienteproductos = await prisma.ingredienteproducto.findMany()
    * ```
    */
  get ingredienteproducto(): Prisma.ingredienteproductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tickets`: Exposes CRUD operations for the **tickets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.tickets.findMany()
    * ```
    */
  get tickets(): Prisma.ticketsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reseteo_semanal`: Exposes CRUD operations for the **reseteo_semanal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reseteo_semanals
    * const reseteo_semanals = await prisma.reseteo_semanal.findMany()
    * ```
    */
  get reseteo_semanal(): Prisma.reseteo_semanalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ia_conversaciones`: Exposes CRUD operations for the **ia_conversaciones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ia_conversaciones
    * const ia_conversaciones = await prisma.ia_conversaciones.findMany()
    * ```
    */
  get ia_conversaciones(): Prisma.ia_conversacionesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.feedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.email_eventos`: Exposes CRUD operations for the **email_eventos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Email_eventos
    * const email_eventos = await prisma.email_eventos.findMany()
    * ```
    */
  get email_eventos(): Prisma.email_eventosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservas`: Exposes CRUD operations for the **reservas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservas
    * const reservas = await prisma.reservas.findMany()
    * ```
    */
  get reservas(): Prisma.reservasDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    accesoqr: 'accesoqr',
    categoria: 'categoria',
    comprobante: 'comprobante',
    detalleventa: 'detalleventa',
    metodopago: 'metodopago',
    productos: 'productos',
    tipoacceso: 'tipoacceso',
    usuarios: 'usuarios',
    ventas: 'ventas',
    alergenoproducto: 'alergenoproducto',
    ingredienteproducto: 'ingredienteproducto',
    tickets: 'tickets',
    reseteo_semanal: 'reseteo_semanal',
    ia_conversaciones: 'ia_conversaciones',
    feedback: 'feedback',
    email_eventos: 'email_eventos',
    reservas: 'reservas'
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
      modelProps: "accesoqr" | "categoria" | "comprobante" | "detalleventa" | "metodopago" | "productos" | "tipoacceso" | "usuarios" | "ventas" | "alergenoproducto" | "ingredienteproducto" | "tickets" | "reseteo_semanal" | "ia_conversaciones" | "feedback" | "email_eventos" | "reservas"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      accesoqr: {
        payload: Prisma.$accesoqrPayload<ExtArgs>
        fields: Prisma.accesoqrFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accesoqrFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accesoqrPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accesoqrFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accesoqrPayload>
          }
          findFirst: {
            args: Prisma.accesoqrFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accesoqrPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accesoqrFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accesoqrPayload>
          }
          findMany: {
            args: Prisma.accesoqrFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accesoqrPayload>[]
          }
          create: {
            args: Prisma.accesoqrCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accesoqrPayload>
          }
          createMany: {
            args: Prisma.accesoqrCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.accesoqrDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accesoqrPayload>
          }
          update: {
            args: Prisma.accesoqrUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accesoqrPayload>
          }
          deleteMany: {
            args: Prisma.accesoqrDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.accesoqrUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.accesoqrUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accesoqrPayload>
          }
          aggregate: {
            args: Prisma.AccesoqrAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccesoqr>
          }
          groupBy: {
            args: Prisma.accesoqrGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccesoqrGroupByOutputType>[]
          }
          count: {
            args: Prisma.accesoqrCountArgs<ExtArgs>
            result: $Utils.Optional<AccesoqrCountAggregateOutputType> | number
          }
        }
      }
      categoria: {
        payload: Prisma.$categoriaPayload<ExtArgs>
        fields: Prisma.categoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          findFirst: {
            args: Prisma.categoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          findMany: {
            args: Prisma.categoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>[]
          }
          create: {
            args: Prisma.categoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          createMany: {
            args: Prisma.categoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.categoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          update: {
            args: Prisma.categoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          deleteMany: {
            args: Prisma.categoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.categoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      comprobante: {
        payload: Prisma.$comprobantePayload<ExtArgs>
        fields: Prisma.comprobanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.comprobanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comprobantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.comprobanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comprobantePayload>
          }
          findFirst: {
            args: Prisma.comprobanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comprobantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.comprobanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comprobantePayload>
          }
          findMany: {
            args: Prisma.comprobanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comprobantePayload>[]
          }
          create: {
            args: Prisma.comprobanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comprobantePayload>
          }
          createMany: {
            args: Prisma.comprobanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.comprobanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comprobantePayload>
          }
          update: {
            args: Prisma.comprobanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comprobantePayload>
          }
          deleteMany: {
            args: Prisma.comprobanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.comprobanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.comprobanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comprobantePayload>
          }
          aggregate: {
            args: Prisma.ComprobanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComprobante>
          }
          groupBy: {
            args: Prisma.comprobanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComprobanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.comprobanteCountArgs<ExtArgs>
            result: $Utils.Optional<ComprobanteCountAggregateOutputType> | number
          }
        }
      }
      detalleventa: {
        payload: Prisma.$detalleventaPayload<ExtArgs>
        fields: Prisma.detalleventaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.detalleventaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleventaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.detalleventaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleventaPayload>
          }
          findFirst: {
            args: Prisma.detalleventaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleventaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.detalleventaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleventaPayload>
          }
          findMany: {
            args: Prisma.detalleventaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleventaPayload>[]
          }
          create: {
            args: Prisma.detalleventaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleventaPayload>
          }
          createMany: {
            args: Prisma.detalleventaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.detalleventaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleventaPayload>
          }
          update: {
            args: Prisma.detalleventaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleventaPayload>
          }
          deleteMany: {
            args: Prisma.detalleventaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.detalleventaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.detalleventaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalleventaPayload>
          }
          aggregate: {
            args: Prisma.DetalleventaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalleventa>
          }
          groupBy: {
            args: Prisma.detalleventaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetalleventaGroupByOutputType>[]
          }
          count: {
            args: Prisma.detalleventaCountArgs<ExtArgs>
            result: $Utils.Optional<DetalleventaCountAggregateOutputType> | number
          }
        }
      }
      metodopago: {
        payload: Prisma.$metodopagoPayload<ExtArgs>
        fields: Prisma.metodopagoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.metodopagoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metodopagoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.metodopagoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metodopagoPayload>
          }
          findFirst: {
            args: Prisma.metodopagoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metodopagoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.metodopagoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metodopagoPayload>
          }
          findMany: {
            args: Prisma.metodopagoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metodopagoPayload>[]
          }
          create: {
            args: Prisma.metodopagoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metodopagoPayload>
          }
          createMany: {
            args: Prisma.metodopagoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.metodopagoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metodopagoPayload>
          }
          update: {
            args: Prisma.metodopagoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metodopagoPayload>
          }
          deleteMany: {
            args: Prisma.metodopagoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.metodopagoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.metodopagoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metodopagoPayload>
          }
          aggregate: {
            args: Prisma.MetodopagoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetodopago>
          }
          groupBy: {
            args: Prisma.metodopagoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetodopagoGroupByOutputType>[]
          }
          count: {
            args: Prisma.metodopagoCountArgs<ExtArgs>
            result: $Utils.Optional<MetodopagoCountAggregateOutputType> | number
          }
        }
      }
      productos: {
        payload: Prisma.$productosPayload<ExtArgs>
        fields: Prisma.productosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          findFirst: {
            args: Prisma.productosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          findMany: {
            args: Prisma.productosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>[]
          }
          create: {
            args: Prisma.productosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          createMany: {
            args: Prisma.productosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.productosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          update: {
            args: Prisma.productosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          deleteMany: {
            args: Prisma.productosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          aggregate: {
            args: Prisma.ProductosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductos>
          }
          groupBy: {
            args: Prisma.productosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductosGroupByOutputType>[]
          }
          count: {
            args: Prisma.productosCountArgs<ExtArgs>
            result: $Utils.Optional<ProductosCountAggregateOutputType> | number
          }
        }
      }
      tipoacceso: {
        payload: Prisma.$tipoaccesoPayload<ExtArgs>
        fields: Prisma.tipoaccesoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tipoaccesoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoaccesoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tipoaccesoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoaccesoPayload>
          }
          findFirst: {
            args: Prisma.tipoaccesoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoaccesoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tipoaccesoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoaccesoPayload>
          }
          findMany: {
            args: Prisma.tipoaccesoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoaccesoPayload>[]
          }
          create: {
            args: Prisma.tipoaccesoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoaccesoPayload>
          }
          createMany: {
            args: Prisma.tipoaccesoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tipoaccesoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoaccesoPayload>
          }
          update: {
            args: Prisma.tipoaccesoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoaccesoPayload>
          }
          deleteMany: {
            args: Prisma.tipoaccesoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tipoaccesoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tipoaccesoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoaccesoPayload>
          }
          aggregate: {
            args: Prisma.TipoaccesoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoacceso>
          }
          groupBy: {
            args: Prisma.tipoaccesoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoaccesoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tipoaccesoCountArgs<ExtArgs>
            result: $Utils.Optional<TipoaccesoCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      ventas: {
        payload: Prisma.$ventasPayload<ExtArgs>
        fields: Prisma.ventasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ventasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ventasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>
          }
          findFirst: {
            args: Prisma.ventasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ventasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>
          }
          findMany: {
            args: Prisma.ventasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>[]
          }
          create: {
            args: Prisma.ventasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>
          }
          createMany: {
            args: Prisma.ventasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ventasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>
          }
          update: {
            args: Prisma.ventasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>
          }
          deleteMany: {
            args: Prisma.ventasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ventasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ventasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>
          }
          aggregate: {
            args: Prisma.VentasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVentas>
          }
          groupBy: {
            args: Prisma.ventasGroupByArgs<ExtArgs>
            result: $Utils.Optional<VentasGroupByOutputType>[]
          }
          count: {
            args: Prisma.ventasCountArgs<ExtArgs>
            result: $Utils.Optional<VentasCountAggregateOutputType> | number
          }
        }
      }
      alergenoproducto: {
        payload: Prisma.$alergenoproductoPayload<ExtArgs>
        fields: Prisma.alergenoproductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.alergenoproductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alergenoproductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.alergenoproductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alergenoproductoPayload>
          }
          findFirst: {
            args: Prisma.alergenoproductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alergenoproductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.alergenoproductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alergenoproductoPayload>
          }
          findMany: {
            args: Prisma.alergenoproductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alergenoproductoPayload>[]
          }
          create: {
            args: Prisma.alergenoproductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alergenoproductoPayload>
          }
          createMany: {
            args: Prisma.alergenoproductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.alergenoproductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alergenoproductoPayload>
          }
          update: {
            args: Prisma.alergenoproductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alergenoproductoPayload>
          }
          deleteMany: {
            args: Prisma.alergenoproductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.alergenoproductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.alergenoproductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alergenoproductoPayload>
          }
          aggregate: {
            args: Prisma.AlergenoproductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlergenoproducto>
          }
          groupBy: {
            args: Prisma.alergenoproductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlergenoproductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.alergenoproductoCountArgs<ExtArgs>
            result: $Utils.Optional<AlergenoproductoCountAggregateOutputType> | number
          }
        }
      }
      ingredienteproducto: {
        payload: Prisma.$ingredienteproductoPayload<ExtArgs>
        fields: Prisma.ingredienteproductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ingredienteproductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredienteproductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ingredienteproductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredienteproductoPayload>
          }
          findFirst: {
            args: Prisma.ingredienteproductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredienteproductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ingredienteproductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredienteproductoPayload>
          }
          findMany: {
            args: Prisma.ingredienteproductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredienteproductoPayload>[]
          }
          create: {
            args: Prisma.ingredienteproductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredienteproductoPayload>
          }
          createMany: {
            args: Prisma.ingredienteproductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ingredienteproductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredienteproductoPayload>
          }
          update: {
            args: Prisma.ingredienteproductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredienteproductoPayload>
          }
          deleteMany: {
            args: Prisma.ingredienteproductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ingredienteproductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ingredienteproductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredienteproductoPayload>
          }
          aggregate: {
            args: Prisma.IngredienteproductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredienteproducto>
          }
          groupBy: {
            args: Prisma.ingredienteproductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredienteproductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ingredienteproductoCountArgs<ExtArgs>
            result: $Utils.Optional<IngredienteproductoCountAggregateOutputType> | number
          }
        }
      }
      tickets: {
        payload: Prisma.$ticketsPayload<ExtArgs>
        fields: Prisma.ticketsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ticketsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ticketsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          findFirst: {
            args: Prisma.ticketsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ticketsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          findMany: {
            args: Prisma.ticketsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>[]
          }
          create: {
            args: Prisma.ticketsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          createMany: {
            args: Prisma.ticketsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ticketsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          update: {
            args: Prisma.ticketsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          deleteMany: {
            args: Prisma.ticketsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ticketsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ticketsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          aggregate: {
            args: Prisma.TicketsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTickets>
          }
          groupBy: {
            args: Prisma.ticketsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ticketsCountArgs<ExtArgs>
            result: $Utils.Optional<TicketsCountAggregateOutputType> | number
          }
        }
      }
      reseteo_semanal: {
        payload: Prisma.$reseteo_semanalPayload<ExtArgs>
        fields: Prisma.reseteo_semanalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reseteo_semanalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reseteo_semanalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reseteo_semanalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reseteo_semanalPayload>
          }
          findFirst: {
            args: Prisma.reseteo_semanalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reseteo_semanalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reseteo_semanalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reseteo_semanalPayload>
          }
          findMany: {
            args: Prisma.reseteo_semanalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reseteo_semanalPayload>[]
          }
          create: {
            args: Prisma.reseteo_semanalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reseteo_semanalPayload>
          }
          createMany: {
            args: Prisma.reseteo_semanalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.reseteo_semanalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reseteo_semanalPayload>
          }
          update: {
            args: Prisma.reseteo_semanalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reseteo_semanalPayload>
          }
          deleteMany: {
            args: Prisma.reseteo_semanalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reseteo_semanalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.reseteo_semanalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reseteo_semanalPayload>
          }
          aggregate: {
            args: Prisma.Reseteo_semanalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReseteo_semanal>
          }
          groupBy: {
            args: Prisma.reseteo_semanalGroupByArgs<ExtArgs>
            result: $Utils.Optional<Reseteo_semanalGroupByOutputType>[]
          }
          count: {
            args: Prisma.reseteo_semanalCountArgs<ExtArgs>
            result: $Utils.Optional<Reseteo_semanalCountAggregateOutputType> | number
          }
        }
      }
      ia_conversaciones: {
        payload: Prisma.$ia_conversacionesPayload<ExtArgs>
        fields: Prisma.ia_conversacionesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ia_conversacionesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ia_conversacionesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ia_conversacionesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ia_conversacionesPayload>
          }
          findFirst: {
            args: Prisma.ia_conversacionesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ia_conversacionesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ia_conversacionesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ia_conversacionesPayload>
          }
          findMany: {
            args: Prisma.ia_conversacionesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ia_conversacionesPayload>[]
          }
          create: {
            args: Prisma.ia_conversacionesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ia_conversacionesPayload>
          }
          createMany: {
            args: Prisma.ia_conversacionesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ia_conversacionesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ia_conversacionesPayload>
          }
          update: {
            args: Prisma.ia_conversacionesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ia_conversacionesPayload>
          }
          deleteMany: {
            args: Prisma.ia_conversacionesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ia_conversacionesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ia_conversacionesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ia_conversacionesPayload>
          }
          aggregate: {
            args: Prisma.Ia_conversacionesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIa_conversaciones>
          }
          groupBy: {
            args: Prisma.ia_conversacionesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ia_conversacionesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ia_conversacionesCountArgs<ExtArgs>
            result: $Utils.Optional<Ia_conversacionesCountAggregateOutputType> | number
          }
        }
      }
      feedback: {
        payload: Prisma.$feedbackPayload<ExtArgs>
        fields: Prisma.feedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.feedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.feedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          findFirst: {
            args: Prisma.feedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.feedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          findMany: {
            args: Prisma.feedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>[]
          }
          create: {
            args: Prisma.feedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          createMany: {
            args: Prisma.feedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.feedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          update: {
            args: Prisma.feedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          deleteMany: {
            args: Prisma.feedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.feedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.feedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.feedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.feedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
      email_eventos: {
        payload: Prisma.$email_eventosPayload<ExtArgs>
        fields: Prisma.email_eventosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.email_eventosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_eventosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.email_eventosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_eventosPayload>
          }
          findFirst: {
            args: Prisma.email_eventosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_eventosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.email_eventosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_eventosPayload>
          }
          findMany: {
            args: Prisma.email_eventosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_eventosPayload>[]
          }
          create: {
            args: Prisma.email_eventosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_eventosPayload>
          }
          createMany: {
            args: Prisma.email_eventosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.email_eventosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_eventosPayload>
          }
          update: {
            args: Prisma.email_eventosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_eventosPayload>
          }
          deleteMany: {
            args: Prisma.email_eventosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.email_eventosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.email_eventosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_eventosPayload>
          }
          aggregate: {
            args: Prisma.Email_eventosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmail_eventos>
          }
          groupBy: {
            args: Prisma.email_eventosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Email_eventosGroupByOutputType>[]
          }
          count: {
            args: Prisma.email_eventosCountArgs<ExtArgs>
            result: $Utils.Optional<Email_eventosCountAggregateOutputType> | number
          }
        }
      }
      reservas: {
        payload: Prisma.$reservasPayload<ExtArgs>
        fields: Prisma.reservasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reservasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reservasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          findFirst: {
            args: Prisma.reservasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reservasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          findMany: {
            args: Prisma.reservasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>[]
          }
          create: {
            args: Prisma.reservasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          createMany: {
            args: Prisma.reservasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.reservasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          update: {
            args: Prisma.reservasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          deleteMany: {
            args: Prisma.reservasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reservasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.reservasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          aggregate: {
            args: Prisma.ReservasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservas>
          }
          groupBy: {
            args: Prisma.reservasGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservasGroupByOutputType>[]
          }
          count: {
            args: Prisma.reservasCountArgs<ExtArgs>
            result: $Utils.Optional<ReservasCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    accesoqr?: accesoqrOmit
    categoria?: categoriaOmit
    comprobante?: comprobanteOmit
    detalleventa?: detalleventaOmit
    metodopago?: metodopagoOmit
    productos?: productosOmit
    tipoacceso?: tipoaccesoOmit
    usuarios?: usuariosOmit
    ventas?: ventasOmit
    alergenoproducto?: alergenoproductoOmit
    ingredienteproducto?: ingredienteproductoOmit
    tickets?: ticketsOmit
    reseteo_semanal?: reseteo_semanalOmit
    ia_conversaciones?: ia_conversacionesOmit
    feedback?: feedbackOmit
    email_eventos?: email_eventosOmit
    reservas?: reservasOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    productos: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | CategoriaCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productosWhereInput
  }


  /**
   * Count Type ComprobanteCountOutputType
   */

  export type ComprobanteCountOutputType = {
    ventas: number
  }

  export type ComprobanteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventas?: boolean | ComprobanteCountOutputTypeCountVentasArgs
  }

  // Custom InputTypes
  /**
   * ComprobanteCountOutputType without action
   */
  export type ComprobanteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComprobanteCountOutputType
     */
    select?: ComprobanteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComprobanteCountOutputType without action
   */
  export type ComprobanteCountOutputTypeCountVentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ventasWhereInput
  }


  /**
   * Count Type MetodopagoCountOutputType
   */

  export type MetodopagoCountOutputType = {
    ventas: number
  }

  export type MetodopagoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventas?: boolean | MetodopagoCountOutputTypeCountVentasArgs
  }

  // Custom InputTypes
  /**
   * MetodopagoCountOutputType without action
   */
  export type MetodopagoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodopagoCountOutputType
     */
    select?: MetodopagoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MetodopagoCountOutputType without action
   */
  export type MetodopagoCountOutputTypeCountVentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ventasWhereInput
  }


  /**
   * Count Type ProductosCountOutputType
   */

  export type ProductosCountOutputType = {
    alergenoproducto: number
    detalleventa: number
    ingredienteproducto: number
  }

  export type ProductosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alergenoproducto?: boolean | ProductosCountOutputTypeCountAlergenoproductoArgs
    detalleventa?: boolean | ProductosCountOutputTypeCountDetalleventaArgs
    ingredienteproducto?: boolean | ProductosCountOutputTypeCountIngredienteproductoArgs
  }

  // Custom InputTypes
  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductosCountOutputType
     */
    select?: ProductosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeCountAlergenoproductoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alergenoproductoWhereInput
  }

  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeCountDetalleventaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalleventaWhereInput
  }

  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeCountIngredienteproductoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ingredienteproductoWhereInput
  }


  /**
   * Count Type TipoaccesoCountOutputType
   */

  export type TipoaccesoCountOutputType = {
    accesoqr: number
  }

  export type TipoaccesoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accesoqr?: boolean | TipoaccesoCountOutputTypeCountAccesoqrArgs
  }

  // Custom InputTypes
  /**
   * TipoaccesoCountOutputType without action
   */
  export type TipoaccesoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoaccesoCountOutputType
     */
    select?: TipoaccesoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoaccesoCountOutputType without action
   */
  export type TipoaccesoCountOutputTypeCountAccesoqrArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accesoqrWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    tickets: number
    ventas: number
    ia_conversaciones: number
    email_eventos: number
    reservas: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | UsuariosCountOutputTypeCountTicketsArgs
    ventas?: boolean | UsuariosCountOutputTypeCountVentasArgs
    ia_conversaciones?: boolean | UsuariosCountOutputTypeCountIa_conversacionesArgs
    email_eventos?: boolean | UsuariosCountOutputTypeCountEmail_eventosArgs
    reservas?: boolean | UsuariosCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketsWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountVentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ventasWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountIa_conversacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ia_conversacionesWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountEmail_eventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: email_eventosWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservasWhereInput
  }


  /**
   * Count Type VentasCountOutputType
   */

  export type VentasCountOutputType = {
    detalleventa: number
  }

  export type VentasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalleventa?: boolean | VentasCountOutputTypeCountDetalleventaArgs
  }

  // Custom InputTypes
  /**
   * VentasCountOutputType without action
   */
  export type VentasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentasCountOutputType
     */
    select?: VentasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VentasCountOutputType without action
   */
  export type VentasCountOutputTypeCountDetalleventaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalleventaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model accesoqr
   */

  export type AggregateAccesoqr = {
    _count: AccesoqrCountAggregateOutputType | null
    _avg: AccesoqrAvgAggregateOutputType | null
    _sum: AccesoqrSumAggregateOutputType | null
    _min: AccesoqrMinAggregateOutputType | null
    _max: AccesoqrMaxAggregateOutputType | null
  }

  export type AccesoqrAvgAggregateOutputType = {
    id_accesoQR: number | null
    id_usuario: number | null
    id_tipoAcceso: number | null
  }

  export type AccesoqrSumAggregateOutputType = {
    id_accesoQR: number | null
    id_usuario: number | null
    id_tipoAcceso: number | null
  }

  export type AccesoqrMinAggregateOutputType = {
    id_accesoQR: number | null
    id_usuario: number | null
    fecha_acceso: Date | null
    id_tipoAcceso: number | null
  }

  export type AccesoqrMaxAggregateOutputType = {
    id_accesoQR: number | null
    id_usuario: number | null
    fecha_acceso: Date | null
    id_tipoAcceso: number | null
  }

  export type AccesoqrCountAggregateOutputType = {
    id_accesoQR: number
    id_usuario: number
    fecha_acceso: number
    id_tipoAcceso: number
    _all: number
  }


  export type AccesoqrAvgAggregateInputType = {
    id_accesoQR?: true
    id_usuario?: true
    id_tipoAcceso?: true
  }

  export type AccesoqrSumAggregateInputType = {
    id_accesoQR?: true
    id_usuario?: true
    id_tipoAcceso?: true
  }

  export type AccesoqrMinAggregateInputType = {
    id_accesoQR?: true
    id_usuario?: true
    fecha_acceso?: true
    id_tipoAcceso?: true
  }

  export type AccesoqrMaxAggregateInputType = {
    id_accesoQR?: true
    id_usuario?: true
    fecha_acceso?: true
    id_tipoAcceso?: true
  }

  export type AccesoqrCountAggregateInputType = {
    id_accesoQR?: true
    id_usuario?: true
    fecha_acceso?: true
    id_tipoAcceso?: true
    _all?: true
  }

  export type AccesoqrAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accesoqr to aggregate.
     */
    where?: accesoqrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accesoqrs to fetch.
     */
    orderBy?: accesoqrOrderByWithRelationInput | accesoqrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accesoqrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accesoqrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accesoqrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accesoqrs
    **/
    _count?: true | AccesoqrCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccesoqrAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccesoqrSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccesoqrMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccesoqrMaxAggregateInputType
  }

  export type GetAccesoqrAggregateType<T extends AccesoqrAggregateArgs> = {
        [P in keyof T & keyof AggregateAccesoqr]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccesoqr[P]>
      : GetScalarType<T[P], AggregateAccesoqr[P]>
  }




  export type accesoqrGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accesoqrWhereInput
    orderBy?: accesoqrOrderByWithAggregationInput | accesoqrOrderByWithAggregationInput[]
    by: AccesoqrScalarFieldEnum[] | AccesoqrScalarFieldEnum
    having?: accesoqrScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccesoqrCountAggregateInputType | true
    _avg?: AccesoqrAvgAggregateInputType
    _sum?: AccesoqrSumAggregateInputType
    _min?: AccesoqrMinAggregateInputType
    _max?: AccesoqrMaxAggregateInputType
  }

  export type AccesoqrGroupByOutputType = {
    id_accesoQR: number
    id_usuario: number | null
    fecha_acceso: Date
    id_tipoAcceso: number
    _count: AccesoqrCountAggregateOutputType | null
    _avg: AccesoqrAvgAggregateOutputType | null
    _sum: AccesoqrSumAggregateOutputType | null
    _min: AccesoqrMinAggregateOutputType | null
    _max: AccesoqrMaxAggregateOutputType | null
  }

  type GetAccesoqrGroupByPayload<T extends accesoqrGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccesoqrGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccesoqrGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccesoqrGroupByOutputType[P]>
            : GetScalarType<T[P], AccesoqrGroupByOutputType[P]>
        }
      >
    >


  export type accesoqrSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_accesoQR?: boolean
    id_usuario?: boolean
    fecha_acceso?: boolean
    id_tipoAcceso?: boolean
    tipoacceso?: boolean | tipoaccesoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accesoqr"]>



  export type accesoqrSelectScalar = {
    id_accesoQR?: boolean
    id_usuario?: boolean
    fecha_acceso?: boolean
    id_tipoAcceso?: boolean
  }

  export type accesoqrOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_accesoQR" | "id_usuario" | "fecha_acceso" | "id_tipoAcceso", ExtArgs["result"]["accesoqr"]>
  export type accesoqrInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoacceso?: boolean | tipoaccesoDefaultArgs<ExtArgs>
  }

  export type $accesoqrPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "accesoqr"
    objects: {
      tipoacceso: Prisma.$tipoaccesoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_accesoQR: number
      id_usuario: number | null
      fecha_acceso: Date
      id_tipoAcceso: number
    }, ExtArgs["result"]["accesoqr"]>
    composites: {}
  }

  type accesoqrGetPayload<S extends boolean | null | undefined | accesoqrDefaultArgs> = $Result.GetResult<Prisma.$accesoqrPayload, S>

  type accesoqrCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<accesoqrFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccesoqrCountAggregateInputType | true
    }

  export interface accesoqrDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['accesoqr'], meta: { name: 'accesoqr' } }
    /**
     * Find zero or one Accesoqr that matches the filter.
     * @param {accesoqrFindUniqueArgs} args - Arguments to find a Accesoqr
     * @example
     * // Get one Accesoqr
     * const accesoqr = await prisma.accesoqr.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends accesoqrFindUniqueArgs>(args: SelectSubset<T, accesoqrFindUniqueArgs<ExtArgs>>): Prisma__accesoqrClient<$Result.GetResult<Prisma.$accesoqrPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Accesoqr that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {accesoqrFindUniqueOrThrowArgs} args - Arguments to find a Accesoqr
     * @example
     * // Get one Accesoqr
     * const accesoqr = await prisma.accesoqr.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends accesoqrFindUniqueOrThrowArgs>(args: SelectSubset<T, accesoqrFindUniqueOrThrowArgs<ExtArgs>>): Prisma__accesoqrClient<$Result.GetResult<Prisma.$accesoqrPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accesoqr that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accesoqrFindFirstArgs} args - Arguments to find a Accesoqr
     * @example
     * // Get one Accesoqr
     * const accesoqr = await prisma.accesoqr.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends accesoqrFindFirstArgs>(args?: SelectSubset<T, accesoqrFindFirstArgs<ExtArgs>>): Prisma__accesoqrClient<$Result.GetResult<Prisma.$accesoqrPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accesoqr that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accesoqrFindFirstOrThrowArgs} args - Arguments to find a Accesoqr
     * @example
     * // Get one Accesoqr
     * const accesoqr = await prisma.accesoqr.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends accesoqrFindFirstOrThrowArgs>(args?: SelectSubset<T, accesoqrFindFirstOrThrowArgs<ExtArgs>>): Prisma__accesoqrClient<$Result.GetResult<Prisma.$accesoqrPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accesoqrs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accesoqrFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accesoqrs
     * const accesoqrs = await prisma.accesoqr.findMany()
     * 
     * // Get first 10 Accesoqrs
     * const accesoqrs = await prisma.accesoqr.findMany({ take: 10 })
     * 
     * // Only select the `id_accesoQR`
     * const accesoqrWithId_accesoQROnly = await prisma.accesoqr.findMany({ select: { id_accesoQR: true } })
     * 
     */
    findMany<T extends accesoqrFindManyArgs>(args?: SelectSubset<T, accesoqrFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accesoqrPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Accesoqr.
     * @param {accesoqrCreateArgs} args - Arguments to create a Accesoqr.
     * @example
     * // Create one Accesoqr
     * const Accesoqr = await prisma.accesoqr.create({
     *   data: {
     *     // ... data to create a Accesoqr
     *   }
     * })
     * 
     */
    create<T extends accesoqrCreateArgs>(args: SelectSubset<T, accesoqrCreateArgs<ExtArgs>>): Prisma__accesoqrClient<$Result.GetResult<Prisma.$accesoqrPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accesoqrs.
     * @param {accesoqrCreateManyArgs} args - Arguments to create many Accesoqrs.
     * @example
     * // Create many Accesoqrs
     * const accesoqr = await prisma.accesoqr.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends accesoqrCreateManyArgs>(args?: SelectSubset<T, accesoqrCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Accesoqr.
     * @param {accesoqrDeleteArgs} args - Arguments to delete one Accesoqr.
     * @example
     * // Delete one Accesoqr
     * const Accesoqr = await prisma.accesoqr.delete({
     *   where: {
     *     // ... filter to delete one Accesoqr
     *   }
     * })
     * 
     */
    delete<T extends accesoqrDeleteArgs>(args: SelectSubset<T, accesoqrDeleteArgs<ExtArgs>>): Prisma__accesoqrClient<$Result.GetResult<Prisma.$accesoqrPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Accesoqr.
     * @param {accesoqrUpdateArgs} args - Arguments to update one Accesoqr.
     * @example
     * // Update one Accesoqr
     * const accesoqr = await prisma.accesoqr.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends accesoqrUpdateArgs>(args: SelectSubset<T, accesoqrUpdateArgs<ExtArgs>>): Prisma__accesoqrClient<$Result.GetResult<Prisma.$accesoqrPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accesoqrs.
     * @param {accesoqrDeleteManyArgs} args - Arguments to filter Accesoqrs to delete.
     * @example
     * // Delete a few Accesoqrs
     * const { count } = await prisma.accesoqr.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends accesoqrDeleteManyArgs>(args?: SelectSubset<T, accesoqrDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accesoqrs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accesoqrUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accesoqrs
     * const accesoqr = await prisma.accesoqr.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends accesoqrUpdateManyArgs>(args: SelectSubset<T, accesoqrUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Accesoqr.
     * @param {accesoqrUpsertArgs} args - Arguments to update or create a Accesoqr.
     * @example
     * // Update or create a Accesoqr
     * const accesoqr = await prisma.accesoqr.upsert({
     *   create: {
     *     // ... data to create a Accesoqr
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accesoqr we want to update
     *   }
     * })
     */
    upsert<T extends accesoqrUpsertArgs>(args: SelectSubset<T, accesoqrUpsertArgs<ExtArgs>>): Prisma__accesoqrClient<$Result.GetResult<Prisma.$accesoqrPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accesoqrs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accesoqrCountArgs} args - Arguments to filter Accesoqrs to count.
     * @example
     * // Count the number of Accesoqrs
     * const count = await prisma.accesoqr.count({
     *   where: {
     *     // ... the filter for the Accesoqrs we want to count
     *   }
     * })
    **/
    count<T extends accesoqrCountArgs>(
      args?: Subset<T, accesoqrCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccesoqrCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accesoqr.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccesoqrAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccesoqrAggregateArgs>(args: Subset<T, AccesoqrAggregateArgs>): Prisma.PrismaPromise<GetAccesoqrAggregateType<T>>

    /**
     * Group by Accesoqr.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accesoqrGroupByArgs} args - Group by arguments.
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
      T extends accesoqrGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accesoqrGroupByArgs['orderBy'] }
        : { orderBy?: accesoqrGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, accesoqrGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccesoqrGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the accesoqr model
   */
  readonly fields: accesoqrFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for accesoqr.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accesoqrClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipoacceso<T extends tipoaccesoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tipoaccesoDefaultArgs<ExtArgs>>): Prisma__tipoaccesoClient<$Result.GetResult<Prisma.$tipoaccesoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the accesoqr model
   */
  interface accesoqrFieldRefs {
    readonly id_accesoQR: FieldRef<"accesoqr", 'Int'>
    readonly id_usuario: FieldRef<"accesoqr", 'Int'>
    readonly fecha_acceso: FieldRef<"accesoqr", 'DateTime'>
    readonly id_tipoAcceso: FieldRef<"accesoqr", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * accesoqr findUnique
   */
  export type accesoqrFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accesoqr
     */
    select?: accesoqrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accesoqr
     */
    omit?: accesoqrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accesoqrInclude<ExtArgs> | null
    /**
     * Filter, which accesoqr to fetch.
     */
    where: accesoqrWhereUniqueInput
  }

  /**
   * accesoqr findUniqueOrThrow
   */
  export type accesoqrFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accesoqr
     */
    select?: accesoqrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accesoqr
     */
    omit?: accesoqrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accesoqrInclude<ExtArgs> | null
    /**
     * Filter, which accesoqr to fetch.
     */
    where: accesoqrWhereUniqueInput
  }

  /**
   * accesoqr findFirst
   */
  export type accesoqrFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accesoqr
     */
    select?: accesoqrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accesoqr
     */
    omit?: accesoqrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accesoqrInclude<ExtArgs> | null
    /**
     * Filter, which accesoqr to fetch.
     */
    where?: accesoqrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accesoqrs to fetch.
     */
    orderBy?: accesoqrOrderByWithRelationInput | accesoqrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accesoqrs.
     */
    cursor?: accesoqrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accesoqrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accesoqrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accesoqrs.
     */
    distinct?: AccesoqrScalarFieldEnum | AccesoqrScalarFieldEnum[]
  }

  /**
   * accesoqr findFirstOrThrow
   */
  export type accesoqrFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accesoqr
     */
    select?: accesoqrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accesoqr
     */
    omit?: accesoqrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accesoqrInclude<ExtArgs> | null
    /**
     * Filter, which accesoqr to fetch.
     */
    where?: accesoqrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accesoqrs to fetch.
     */
    orderBy?: accesoqrOrderByWithRelationInput | accesoqrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accesoqrs.
     */
    cursor?: accesoqrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accesoqrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accesoqrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accesoqrs.
     */
    distinct?: AccesoqrScalarFieldEnum | AccesoqrScalarFieldEnum[]
  }

  /**
   * accesoqr findMany
   */
  export type accesoqrFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accesoqr
     */
    select?: accesoqrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accesoqr
     */
    omit?: accesoqrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accesoqrInclude<ExtArgs> | null
    /**
     * Filter, which accesoqrs to fetch.
     */
    where?: accesoqrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accesoqrs to fetch.
     */
    orderBy?: accesoqrOrderByWithRelationInput | accesoqrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accesoqrs.
     */
    cursor?: accesoqrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accesoqrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accesoqrs.
     */
    skip?: number
    distinct?: AccesoqrScalarFieldEnum | AccesoqrScalarFieldEnum[]
  }

  /**
   * accesoqr create
   */
  export type accesoqrCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accesoqr
     */
    select?: accesoqrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accesoqr
     */
    omit?: accesoqrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accesoqrInclude<ExtArgs> | null
    /**
     * The data needed to create a accesoqr.
     */
    data: XOR<accesoqrCreateInput, accesoqrUncheckedCreateInput>
  }

  /**
   * accesoqr createMany
   */
  export type accesoqrCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accesoqrs.
     */
    data: accesoqrCreateManyInput | accesoqrCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * accesoqr update
   */
  export type accesoqrUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accesoqr
     */
    select?: accesoqrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accesoqr
     */
    omit?: accesoqrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accesoqrInclude<ExtArgs> | null
    /**
     * The data needed to update a accesoqr.
     */
    data: XOR<accesoqrUpdateInput, accesoqrUncheckedUpdateInput>
    /**
     * Choose, which accesoqr to update.
     */
    where: accesoqrWhereUniqueInput
  }

  /**
   * accesoqr updateMany
   */
  export type accesoqrUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accesoqrs.
     */
    data: XOR<accesoqrUpdateManyMutationInput, accesoqrUncheckedUpdateManyInput>
    /**
     * Filter which accesoqrs to update
     */
    where?: accesoqrWhereInput
    /**
     * Limit how many accesoqrs to update.
     */
    limit?: number
  }

  /**
   * accesoqr upsert
   */
  export type accesoqrUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accesoqr
     */
    select?: accesoqrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accesoqr
     */
    omit?: accesoqrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accesoqrInclude<ExtArgs> | null
    /**
     * The filter to search for the accesoqr to update in case it exists.
     */
    where: accesoqrWhereUniqueInput
    /**
     * In case the accesoqr found by the `where` argument doesn't exist, create a new accesoqr with this data.
     */
    create: XOR<accesoqrCreateInput, accesoqrUncheckedCreateInput>
    /**
     * In case the accesoqr was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accesoqrUpdateInput, accesoqrUncheckedUpdateInput>
  }

  /**
   * accesoqr delete
   */
  export type accesoqrDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accesoqr
     */
    select?: accesoqrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accesoqr
     */
    omit?: accesoqrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accesoqrInclude<ExtArgs> | null
    /**
     * Filter which accesoqr to delete.
     */
    where: accesoqrWhereUniqueInput
  }

  /**
   * accesoqr deleteMany
   */
  export type accesoqrDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accesoqrs to delete
     */
    where?: accesoqrWhereInput
    /**
     * Limit how many accesoqrs to delete.
     */
    limit?: number
  }

  /**
   * accesoqr without action
   */
  export type accesoqrDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accesoqr
     */
    select?: accesoqrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accesoqr
     */
    omit?: accesoqrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accesoqrInclude<ExtArgs> | null
  }


  /**
   * Model categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id_categoria: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id_categoria: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id_categoria: number | null
    nombre_categoria: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id_categoria: number | null
    nombre_categoria: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id_categoria: number
    nombre_categoria: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id_categoria?: true
  }

  export type CategoriaSumAggregateInputType = {
    id_categoria?: true
  }

  export type CategoriaMinAggregateInputType = {
    id_categoria?: true
    nombre_categoria?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id_categoria?: true
    nombre_categoria?: true
  }

  export type CategoriaCountAggregateInputType = {
    id_categoria?: true
    nombre_categoria?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categoria to aggregate.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type categoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriaWhereInput
    orderBy?: categoriaOrderByWithAggregationInput | categoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: categoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id_categoria: number
    nombre_categoria: string
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends categoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type categoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria?: boolean
    nombre_categoria?: boolean
    productos?: boolean | categoria$productosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>



  export type categoriaSelectScalar = {
    id_categoria?: boolean
    nombre_categoria?: boolean
  }

  export type categoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_categoria" | "nombre_categoria", ExtArgs["result"]["categoria"]>
  export type categoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | categoria$productosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $categoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categoria"
    objects: {
      productos: Prisma.$productosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_categoria: number
      nombre_categoria: string
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type categoriaGetPayload<S extends boolean | null | undefined | categoriaDefaultArgs> = $Result.GetResult<Prisma.$categoriaPayload, S>

  type categoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface categoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categoria'], meta: { name: 'categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {categoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriaFindUniqueArgs>(args: SelectSubset<T, categoriaFindUniqueArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriaFindFirstArgs>(args?: SelectSubset<T, categoriaFindFirstArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id_categoria`
     * const categoriaWithId_categoriaOnly = await prisma.categoria.findMany({ select: { id_categoria: true } })
     * 
     */
    findMany<T extends categoriaFindManyArgs>(args?: SelectSubset<T, categoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {categoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends categoriaCreateArgs>(args: SelectSubset<T, categoriaCreateArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {categoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriaCreateManyArgs>(args?: SelectSubset<T, categoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categoria.
     * @param {categoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends categoriaDeleteArgs>(args: SelectSubset<T, categoriaDeleteArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {categoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriaUpdateArgs>(args: SelectSubset<T, categoriaUpdateArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {categoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriaDeleteManyArgs>(args?: SelectSubset<T, categoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriaUpdateManyArgs>(args: SelectSubset<T, categoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categoria.
     * @param {categoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends categoriaUpsertArgs>(args: SelectSubset<T, categoriaUpsertArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends categoriaCountArgs>(
      args?: Subset<T, categoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaGroupByArgs} args - Group by arguments.
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
      T extends categoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriaGroupByArgs['orderBy'] }
        : { orderBy?: categoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categoria model
   */
  readonly fields: categoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends categoria$productosArgs<ExtArgs> = {}>(args?: Subset<T, categoria$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the categoria model
   */
  interface categoriaFieldRefs {
    readonly id_categoria: FieldRef<"categoria", 'Int'>
    readonly nombre_categoria: FieldRef<"categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categoria findUnique
   */
  export type categoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria findUniqueOrThrow
   */
  export type categoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria findFirst
   */
  export type categoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria findFirstOrThrow
   */
  export type categoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria findMany
   */
  export type categoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria create
   */
  export type categoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a categoria.
     */
    data: XOR<categoriaCreateInput, categoriaUncheckedCreateInput>
  }

  /**
   * categoria createMany
   */
  export type categoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categorias.
     */
    data: categoriaCreateManyInput | categoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categoria update
   */
  export type categoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a categoria.
     */
    data: XOR<categoriaUpdateInput, categoriaUncheckedUpdateInput>
    /**
     * Choose, which categoria to update.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria updateMany
   */
  export type categoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriaUpdateManyMutationInput, categoriaUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriaWhereInput
    /**
     * Limit how many categorias to update.
     */
    limit?: number
  }

  /**
   * categoria upsert
   */
  export type categoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the categoria to update in case it exists.
     */
    where: categoriaWhereUniqueInput
    /**
     * In case the categoria found by the `where` argument doesn't exist, create a new categoria with this data.
     */
    create: XOR<categoriaCreateInput, categoriaUncheckedCreateInput>
    /**
     * In case the categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriaUpdateInput, categoriaUncheckedUpdateInput>
  }

  /**
   * categoria delete
   */
  export type categoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter which categoria to delete.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria deleteMany
   */
  export type categoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to delete
     */
    where?: categoriaWhereInput
    /**
     * Limit how many categorias to delete.
     */
    limit?: number
  }

  /**
   * categoria.productos
   */
  export type categoria$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    where?: productosWhereInput
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    cursor?: productosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * categoria without action
   */
  export type categoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
  }


  /**
   * Model comprobante
   */

  export type AggregateComprobante = {
    _count: ComprobanteCountAggregateOutputType | null
    _avg: ComprobanteAvgAggregateOutputType | null
    _sum: ComprobanteSumAggregateOutputType | null
    _min: ComprobanteMinAggregateOutputType | null
    _max: ComprobanteMaxAggregateOutputType | null
  }

  export type ComprobanteAvgAggregateOutputType = {
    id_comprobante: number | null
  }

  export type ComprobanteSumAggregateOutputType = {
    id_comprobante: number | null
  }

  export type ComprobanteMinAggregateOutputType = {
    id_comprobante: number | null
    nombre_comprobante: string | null
  }

  export type ComprobanteMaxAggregateOutputType = {
    id_comprobante: number | null
    nombre_comprobante: string | null
  }

  export type ComprobanteCountAggregateOutputType = {
    id_comprobante: number
    nombre_comprobante: number
    _all: number
  }


  export type ComprobanteAvgAggregateInputType = {
    id_comprobante?: true
  }

  export type ComprobanteSumAggregateInputType = {
    id_comprobante?: true
  }

  export type ComprobanteMinAggregateInputType = {
    id_comprobante?: true
    nombre_comprobante?: true
  }

  export type ComprobanteMaxAggregateInputType = {
    id_comprobante?: true
    nombre_comprobante?: true
  }

  export type ComprobanteCountAggregateInputType = {
    id_comprobante?: true
    nombre_comprobante?: true
    _all?: true
  }

  export type ComprobanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comprobante to aggregate.
     */
    where?: comprobanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comprobantes to fetch.
     */
    orderBy?: comprobanteOrderByWithRelationInput | comprobanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: comprobanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comprobantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comprobantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comprobantes
    **/
    _count?: true | ComprobanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComprobanteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComprobanteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComprobanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComprobanteMaxAggregateInputType
  }

  export type GetComprobanteAggregateType<T extends ComprobanteAggregateArgs> = {
        [P in keyof T & keyof AggregateComprobante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComprobante[P]>
      : GetScalarType<T[P], AggregateComprobante[P]>
  }




  export type comprobanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: comprobanteWhereInput
    orderBy?: comprobanteOrderByWithAggregationInput | comprobanteOrderByWithAggregationInput[]
    by: ComprobanteScalarFieldEnum[] | ComprobanteScalarFieldEnum
    having?: comprobanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComprobanteCountAggregateInputType | true
    _avg?: ComprobanteAvgAggregateInputType
    _sum?: ComprobanteSumAggregateInputType
    _min?: ComprobanteMinAggregateInputType
    _max?: ComprobanteMaxAggregateInputType
  }

  export type ComprobanteGroupByOutputType = {
    id_comprobante: number
    nombre_comprobante: string
    _count: ComprobanteCountAggregateOutputType | null
    _avg: ComprobanteAvgAggregateOutputType | null
    _sum: ComprobanteSumAggregateOutputType | null
    _min: ComprobanteMinAggregateOutputType | null
    _max: ComprobanteMaxAggregateOutputType | null
  }

  type GetComprobanteGroupByPayload<T extends comprobanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComprobanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComprobanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComprobanteGroupByOutputType[P]>
            : GetScalarType<T[P], ComprobanteGroupByOutputType[P]>
        }
      >
    >


  export type comprobanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_comprobante?: boolean
    nombre_comprobante?: boolean
    ventas?: boolean | comprobante$ventasArgs<ExtArgs>
    _count?: boolean | ComprobanteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comprobante"]>



  export type comprobanteSelectScalar = {
    id_comprobante?: boolean
    nombre_comprobante?: boolean
  }

  export type comprobanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_comprobante" | "nombre_comprobante", ExtArgs["result"]["comprobante"]>
  export type comprobanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventas?: boolean | comprobante$ventasArgs<ExtArgs>
    _count?: boolean | ComprobanteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $comprobantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comprobante"
    objects: {
      ventas: Prisma.$ventasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_comprobante: number
      nombre_comprobante: string
    }, ExtArgs["result"]["comprobante"]>
    composites: {}
  }

  type comprobanteGetPayload<S extends boolean | null | undefined | comprobanteDefaultArgs> = $Result.GetResult<Prisma.$comprobantePayload, S>

  type comprobanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<comprobanteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComprobanteCountAggregateInputType | true
    }

  export interface comprobanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comprobante'], meta: { name: 'comprobante' } }
    /**
     * Find zero or one Comprobante that matches the filter.
     * @param {comprobanteFindUniqueArgs} args - Arguments to find a Comprobante
     * @example
     * // Get one Comprobante
     * const comprobante = await prisma.comprobante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends comprobanteFindUniqueArgs>(args: SelectSubset<T, comprobanteFindUniqueArgs<ExtArgs>>): Prisma__comprobanteClient<$Result.GetResult<Prisma.$comprobantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comprobante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {comprobanteFindUniqueOrThrowArgs} args - Arguments to find a Comprobante
     * @example
     * // Get one Comprobante
     * const comprobante = await prisma.comprobante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends comprobanteFindUniqueOrThrowArgs>(args: SelectSubset<T, comprobanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__comprobanteClient<$Result.GetResult<Prisma.$comprobantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comprobante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comprobanteFindFirstArgs} args - Arguments to find a Comprobante
     * @example
     * // Get one Comprobante
     * const comprobante = await prisma.comprobante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends comprobanteFindFirstArgs>(args?: SelectSubset<T, comprobanteFindFirstArgs<ExtArgs>>): Prisma__comprobanteClient<$Result.GetResult<Prisma.$comprobantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comprobante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comprobanteFindFirstOrThrowArgs} args - Arguments to find a Comprobante
     * @example
     * // Get one Comprobante
     * const comprobante = await prisma.comprobante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends comprobanteFindFirstOrThrowArgs>(args?: SelectSubset<T, comprobanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__comprobanteClient<$Result.GetResult<Prisma.$comprobantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comprobantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comprobanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comprobantes
     * const comprobantes = await prisma.comprobante.findMany()
     * 
     * // Get first 10 Comprobantes
     * const comprobantes = await prisma.comprobante.findMany({ take: 10 })
     * 
     * // Only select the `id_comprobante`
     * const comprobanteWithId_comprobanteOnly = await prisma.comprobante.findMany({ select: { id_comprobante: true } })
     * 
     */
    findMany<T extends comprobanteFindManyArgs>(args?: SelectSubset<T, comprobanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comprobantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comprobante.
     * @param {comprobanteCreateArgs} args - Arguments to create a Comprobante.
     * @example
     * // Create one Comprobante
     * const Comprobante = await prisma.comprobante.create({
     *   data: {
     *     // ... data to create a Comprobante
     *   }
     * })
     * 
     */
    create<T extends comprobanteCreateArgs>(args: SelectSubset<T, comprobanteCreateArgs<ExtArgs>>): Prisma__comprobanteClient<$Result.GetResult<Prisma.$comprobantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comprobantes.
     * @param {comprobanteCreateManyArgs} args - Arguments to create many Comprobantes.
     * @example
     * // Create many Comprobantes
     * const comprobante = await prisma.comprobante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends comprobanteCreateManyArgs>(args?: SelectSubset<T, comprobanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comprobante.
     * @param {comprobanteDeleteArgs} args - Arguments to delete one Comprobante.
     * @example
     * // Delete one Comprobante
     * const Comprobante = await prisma.comprobante.delete({
     *   where: {
     *     // ... filter to delete one Comprobante
     *   }
     * })
     * 
     */
    delete<T extends comprobanteDeleteArgs>(args: SelectSubset<T, comprobanteDeleteArgs<ExtArgs>>): Prisma__comprobanteClient<$Result.GetResult<Prisma.$comprobantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comprobante.
     * @param {comprobanteUpdateArgs} args - Arguments to update one Comprobante.
     * @example
     * // Update one Comprobante
     * const comprobante = await prisma.comprobante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends comprobanteUpdateArgs>(args: SelectSubset<T, comprobanteUpdateArgs<ExtArgs>>): Prisma__comprobanteClient<$Result.GetResult<Prisma.$comprobantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comprobantes.
     * @param {comprobanteDeleteManyArgs} args - Arguments to filter Comprobantes to delete.
     * @example
     * // Delete a few Comprobantes
     * const { count } = await prisma.comprobante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends comprobanteDeleteManyArgs>(args?: SelectSubset<T, comprobanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comprobantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comprobanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comprobantes
     * const comprobante = await prisma.comprobante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends comprobanteUpdateManyArgs>(args: SelectSubset<T, comprobanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comprobante.
     * @param {comprobanteUpsertArgs} args - Arguments to update or create a Comprobante.
     * @example
     * // Update or create a Comprobante
     * const comprobante = await prisma.comprobante.upsert({
     *   create: {
     *     // ... data to create a Comprobante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comprobante we want to update
     *   }
     * })
     */
    upsert<T extends comprobanteUpsertArgs>(args: SelectSubset<T, comprobanteUpsertArgs<ExtArgs>>): Prisma__comprobanteClient<$Result.GetResult<Prisma.$comprobantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comprobantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comprobanteCountArgs} args - Arguments to filter Comprobantes to count.
     * @example
     * // Count the number of Comprobantes
     * const count = await prisma.comprobante.count({
     *   where: {
     *     // ... the filter for the Comprobantes we want to count
     *   }
     * })
    **/
    count<T extends comprobanteCountArgs>(
      args?: Subset<T, comprobanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComprobanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comprobante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComprobanteAggregateArgs>(args: Subset<T, ComprobanteAggregateArgs>): Prisma.PrismaPromise<GetComprobanteAggregateType<T>>

    /**
     * Group by Comprobante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comprobanteGroupByArgs} args - Group by arguments.
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
      T extends comprobanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: comprobanteGroupByArgs['orderBy'] }
        : { orderBy?: comprobanteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, comprobanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComprobanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comprobante model
   */
  readonly fields: comprobanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comprobante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__comprobanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ventas<T extends comprobante$ventasArgs<ExtArgs> = {}>(args?: Subset<T, comprobante$ventasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the comprobante model
   */
  interface comprobanteFieldRefs {
    readonly id_comprobante: FieldRef<"comprobante", 'Int'>
    readonly nombre_comprobante: FieldRef<"comprobante", 'String'>
  }
    

  // Custom InputTypes
  /**
   * comprobante findUnique
   */
  export type comprobanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comprobante
     */
    select?: comprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comprobante
     */
    omit?: comprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comprobanteInclude<ExtArgs> | null
    /**
     * Filter, which comprobante to fetch.
     */
    where: comprobanteWhereUniqueInput
  }

  /**
   * comprobante findUniqueOrThrow
   */
  export type comprobanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comprobante
     */
    select?: comprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comprobante
     */
    omit?: comprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comprobanteInclude<ExtArgs> | null
    /**
     * Filter, which comprobante to fetch.
     */
    where: comprobanteWhereUniqueInput
  }

  /**
   * comprobante findFirst
   */
  export type comprobanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comprobante
     */
    select?: comprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comprobante
     */
    omit?: comprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comprobanteInclude<ExtArgs> | null
    /**
     * Filter, which comprobante to fetch.
     */
    where?: comprobanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comprobantes to fetch.
     */
    orderBy?: comprobanteOrderByWithRelationInput | comprobanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comprobantes.
     */
    cursor?: comprobanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comprobantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comprobantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comprobantes.
     */
    distinct?: ComprobanteScalarFieldEnum | ComprobanteScalarFieldEnum[]
  }

  /**
   * comprobante findFirstOrThrow
   */
  export type comprobanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comprobante
     */
    select?: comprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comprobante
     */
    omit?: comprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comprobanteInclude<ExtArgs> | null
    /**
     * Filter, which comprobante to fetch.
     */
    where?: comprobanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comprobantes to fetch.
     */
    orderBy?: comprobanteOrderByWithRelationInput | comprobanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comprobantes.
     */
    cursor?: comprobanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comprobantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comprobantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comprobantes.
     */
    distinct?: ComprobanteScalarFieldEnum | ComprobanteScalarFieldEnum[]
  }

  /**
   * comprobante findMany
   */
  export type comprobanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comprobante
     */
    select?: comprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comprobante
     */
    omit?: comprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comprobanteInclude<ExtArgs> | null
    /**
     * Filter, which comprobantes to fetch.
     */
    where?: comprobanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comprobantes to fetch.
     */
    orderBy?: comprobanteOrderByWithRelationInput | comprobanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comprobantes.
     */
    cursor?: comprobanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comprobantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comprobantes.
     */
    skip?: number
    distinct?: ComprobanteScalarFieldEnum | ComprobanteScalarFieldEnum[]
  }

  /**
   * comprobante create
   */
  export type comprobanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comprobante
     */
    select?: comprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comprobante
     */
    omit?: comprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comprobanteInclude<ExtArgs> | null
    /**
     * The data needed to create a comprobante.
     */
    data: XOR<comprobanteCreateInput, comprobanteUncheckedCreateInput>
  }

  /**
   * comprobante createMany
   */
  export type comprobanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comprobantes.
     */
    data: comprobanteCreateManyInput | comprobanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comprobante update
   */
  export type comprobanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comprobante
     */
    select?: comprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comprobante
     */
    omit?: comprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comprobanteInclude<ExtArgs> | null
    /**
     * The data needed to update a comprobante.
     */
    data: XOR<comprobanteUpdateInput, comprobanteUncheckedUpdateInput>
    /**
     * Choose, which comprobante to update.
     */
    where: comprobanteWhereUniqueInput
  }

  /**
   * comprobante updateMany
   */
  export type comprobanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comprobantes.
     */
    data: XOR<comprobanteUpdateManyMutationInput, comprobanteUncheckedUpdateManyInput>
    /**
     * Filter which comprobantes to update
     */
    where?: comprobanteWhereInput
    /**
     * Limit how many comprobantes to update.
     */
    limit?: number
  }

  /**
   * comprobante upsert
   */
  export type comprobanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comprobante
     */
    select?: comprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comprobante
     */
    omit?: comprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comprobanteInclude<ExtArgs> | null
    /**
     * The filter to search for the comprobante to update in case it exists.
     */
    where: comprobanteWhereUniqueInput
    /**
     * In case the comprobante found by the `where` argument doesn't exist, create a new comprobante with this data.
     */
    create: XOR<comprobanteCreateInput, comprobanteUncheckedCreateInput>
    /**
     * In case the comprobante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<comprobanteUpdateInput, comprobanteUncheckedUpdateInput>
  }

  /**
   * comprobante delete
   */
  export type comprobanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comprobante
     */
    select?: comprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comprobante
     */
    omit?: comprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comprobanteInclude<ExtArgs> | null
    /**
     * Filter which comprobante to delete.
     */
    where: comprobanteWhereUniqueInput
  }

  /**
   * comprobante deleteMany
   */
  export type comprobanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comprobantes to delete
     */
    where?: comprobanteWhereInput
    /**
     * Limit how many comprobantes to delete.
     */
    limit?: number
  }

  /**
   * comprobante.ventas
   */
  export type comprobante$ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    where?: ventasWhereInput
    orderBy?: ventasOrderByWithRelationInput | ventasOrderByWithRelationInput[]
    cursor?: ventasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentasScalarFieldEnum | VentasScalarFieldEnum[]
  }

  /**
   * comprobante without action
   */
  export type comprobanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comprobante
     */
    select?: comprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comprobante
     */
    omit?: comprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comprobanteInclude<ExtArgs> | null
  }


  /**
   * Model detalleventa
   */

  export type AggregateDetalleventa = {
    _count: DetalleventaCountAggregateOutputType | null
    _avg: DetalleventaAvgAggregateOutputType | null
    _sum: DetalleventaSumAggregateOutputType | null
    _min: DetalleventaMinAggregateOutputType | null
    _max: DetalleventaMaxAggregateOutputType | null
  }

  export type DetalleventaAvgAggregateOutputType = {
    id_detalleVenta: number | null
    id_venta: number | null
    id_producto: number | null
    cantidad: number | null
    subtotal: Decimal | null
  }

  export type DetalleventaSumAggregateOutputType = {
    id_detalleVenta: number | null
    id_venta: number | null
    id_producto: number | null
    cantidad: number | null
    subtotal: Decimal | null
  }

  export type DetalleventaMinAggregateOutputType = {
    id_detalleVenta: number | null
    id_venta: number | null
    id_producto: number | null
    cantidad: number | null
    subtotal: Decimal | null
  }

  export type DetalleventaMaxAggregateOutputType = {
    id_detalleVenta: number | null
    id_venta: number | null
    id_producto: number | null
    cantidad: number | null
    subtotal: Decimal | null
  }

  export type DetalleventaCountAggregateOutputType = {
    id_detalleVenta: number
    id_venta: number
    id_producto: number
    cantidad: number
    subtotal: number
    _all: number
  }


  export type DetalleventaAvgAggregateInputType = {
    id_detalleVenta?: true
    id_venta?: true
    id_producto?: true
    cantidad?: true
    subtotal?: true
  }

  export type DetalleventaSumAggregateInputType = {
    id_detalleVenta?: true
    id_venta?: true
    id_producto?: true
    cantidad?: true
    subtotal?: true
  }

  export type DetalleventaMinAggregateInputType = {
    id_detalleVenta?: true
    id_venta?: true
    id_producto?: true
    cantidad?: true
    subtotal?: true
  }

  export type DetalleventaMaxAggregateInputType = {
    id_detalleVenta?: true
    id_venta?: true
    id_producto?: true
    cantidad?: true
    subtotal?: true
  }

  export type DetalleventaCountAggregateInputType = {
    id_detalleVenta?: true
    id_venta?: true
    id_producto?: true
    cantidad?: true
    subtotal?: true
    _all?: true
  }

  export type DetalleventaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detalleventa to aggregate.
     */
    where?: detalleventaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalleventas to fetch.
     */
    orderBy?: detalleventaOrderByWithRelationInput | detalleventaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: detalleventaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalleventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalleventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned detalleventas
    **/
    _count?: true | DetalleventaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetalleventaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetalleventaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetalleventaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetalleventaMaxAggregateInputType
  }

  export type GetDetalleventaAggregateType<T extends DetalleventaAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalleventa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalleventa[P]>
      : GetScalarType<T[P], AggregateDetalleventa[P]>
  }




  export type detalleventaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalleventaWhereInput
    orderBy?: detalleventaOrderByWithAggregationInput | detalleventaOrderByWithAggregationInput[]
    by: DetalleventaScalarFieldEnum[] | DetalleventaScalarFieldEnum
    having?: detalleventaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetalleventaCountAggregateInputType | true
    _avg?: DetalleventaAvgAggregateInputType
    _sum?: DetalleventaSumAggregateInputType
    _min?: DetalleventaMinAggregateInputType
    _max?: DetalleventaMaxAggregateInputType
  }

  export type DetalleventaGroupByOutputType = {
    id_detalleVenta: number
    id_venta: number
    id_producto: number
    cantidad: number
    subtotal: Decimal
    _count: DetalleventaCountAggregateOutputType | null
    _avg: DetalleventaAvgAggregateOutputType | null
    _sum: DetalleventaSumAggregateOutputType | null
    _min: DetalleventaMinAggregateOutputType | null
    _max: DetalleventaMaxAggregateOutputType | null
  }

  type GetDetalleventaGroupByPayload<T extends detalleventaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetalleventaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetalleventaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetalleventaGroupByOutputType[P]>
            : GetScalarType<T[P], DetalleventaGroupByOutputType[P]>
        }
      >
    >


  export type detalleventaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_detalleVenta?: boolean
    id_venta?: boolean
    id_producto?: boolean
    cantidad?: boolean
    subtotal?: boolean
    productos?: boolean | productosDefaultArgs<ExtArgs>
    ventas?: boolean | ventasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleventa"]>



  export type detalleventaSelectScalar = {
    id_detalleVenta?: boolean
    id_venta?: boolean
    id_producto?: boolean
    cantidad?: boolean
    subtotal?: boolean
  }

  export type detalleventaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_detalleVenta" | "id_venta" | "id_producto" | "cantidad" | "subtotal", ExtArgs["result"]["detalleventa"]>
  export type detalleventaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | productosDefaultArgs<ExtArgs>
    ventas?: boolean | ventasDefaultArgs<ExtArgs>
  }

  export type $detalleventaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "detalleventa"
    objects: {
      productos: Prisma.$productosPayload<ExtArgs>
      ventas: Prisma.$ventasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_detalleVenta: number
      id_venta: number
      id_producto: number
      cantidad: number
      subtotal: Prisma.Decimal
    }, ExtArgs["result"]["detalleventa"]>
    composites: {}
  }

  type detalleventaGetPayload<S extends boolean | null | undefined | detalleventaDefaultArgs> = $Result.GetResult<Prisma.$detalleventaPayload, S>

  type detalleventaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<detalleventaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetalleventaCountAggregateInputType | true
    }

  export interface detalleventaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['detalleventa'], meta: { name: 'detalleventa' } }
    /**
     * Find zero or one Detalleventa that matches the filter.
     * @param {detalleventaFindUniqueArgs} args - Arguments to find a Detalleventa
     * @example
     * // Get one Detalleventa
     * const detalleventa = await prisma.detalleventa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends detalleventaFindUniqueArgs>(args: SelectSubset<T, detalleventaFindUniqueArgs<ExtArgs>>): Prisma__detalleventaClient<$Result.GetResult<Prisma.$detalleventaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detalleventa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {detalleventaFindUniqueOrThrowArgs} args - Arguments to find a Detalleventa
     * @example
     * // Get one Detalleventa
     * const detalleventa = await prisma.detalleventa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends detalleventaFindUniqueOrThrowArgs>(args: SelectSubset<T, detalleventaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__detalleventaClient<$Result.GetResult<Prisma.$detalleventaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalleventa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalleventaFindFirstArgs} args - Arguments to find a Detalleventa
     * @example
     * // Get one Detalleventa
     * const detalleventa = await prisma.detalleventa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends detalleventaFindFirstArgs>(args?: SelectSubset<T, detalleventaFindFirstArgs<ExtArgs>>): Prisma__detalleventaClient<$Result.GetResult<Prisma.$detalleventaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalleventa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalleventaFindFirstOrThrowArgs} args - Arguments to find a Detalleventa
     * @example
     * // Get one Detalleventa
     * const detalleventa = await prisma.detalleventa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends detalleventaFindFirstOrThrowArgs>(args?: SelectSubset<T, detalleventaFindFirstOrThrowArgs<ExtArgs>>): Prisma__detalleventaClient<$Result.GetResult<Prisma.$detalleventaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detalleventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalleventaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detalleventas
     * const detalleventas = await prisma.detalleventa.findMany()
     * 
     * // Get first 10 Detalleventas
     * const detalleventas = await prisma.detalleventa.findMany({ take: 10 })
     * 
     * // Only select the `id_detalleVenta`
     * const detalleventaWithId_detalleVentaOnly = await prisma.detalleventa.findMany({ select: { id_detalleVenta: true } })
     * 
     */
    findMany<T extends detalleventaFindManyArgs>(args?: SelectSubset<T, detalleventaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalleventaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detalleventa.
     * @param {detalleventaCreateArgs} args - Arguments to create a Detalleventa.
     * @example
     * // Create one Detalleventa
     * const Detalleventa = await prisma.detalleventa.create({
     *   data: {
     *     // ... data to create a Detalleventa
     *   }
     * })
     * 
     */
    create<T extends detalleventaCreateArgs>(args: SelectSubset<T, detalleventaCreateArgs<ExtArgs>>): Prisma__detalleventaClient<$Result.GetResult<Prisma.$detalleventaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detalleventas.
     * @param {detalleventaCreateManyArgs} args - Arguments to create many Detalleventas.
     * @example
     * // Create many Detalleventas
     * const detalleventa = await prisma.detalleventa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends detalleventaCreateManyArgs>(args?: SelectSubset<T, detalleventaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Detalleventa.
     * @param {detalleventaDeleteArgs} args - Arguments to delete one Detalleventa.
     * @example
     * // Delete one Detalleventa
     * const Detalleventa = await prisma.detalleventa.delete({
     *   where: {
     *     // ... filter to delete one Detalleventa
     *   }
     * })
     * 
     */
    delete<T extends detalleventaDeleteArgs>(args: SelectSubset<T, detalleventaDeleteArgs<ExtArgs>>): Prisma__detalleventaClient<$Result.GetResult<Prisma.$detalleventaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detalleventa.
     * @param {detalleventaUpdateArgs} args - Arguments to update one Detalleventa.
     * @example
     * // Update one Detalleventa
     * const detalleventa = await prisma.detalleventa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends detalleventaUpdateArgs>(args: SelectSubset<T, detalleventaUpdateArgs<ExtArgs>>): Prisma__detalleventaClient<$Result.GetResult<Prisma.$detalleventaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detalleventas.
     * @param {detalleventaDeleteManyArgs} args - Arguments to filter Detalleventas to delete.
     * @example
     * // Delete a few Detalleventas
     * const { count } = await prisma.detalleventa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends detalleventaDeleteManyArgs>(args?: SelectSubset<T, detalleventaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detalleventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalleventaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detalleventas
     * const detalleventa = await prisma.detalleventa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends detalleventaUpdateManyArgs>(args: SelectSubset<T, detalleventaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Detalleventa.
     * @param {detalleventaUpsertArgs} args - Arguments to update or create a Detalleventa.
     * @example
     * // Update or create a Detalleventa
     * const detalleventa = await prisma.detalleventa.upsert({
     *   create: {
     *     // ... data to create a Detalleventa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detalleventa we want to update
     *   }
     * })
     */
    upsert<T extends detalleventaUpsertArgs>(args: SelectSubset<T, detalleventaUpsertArgs<ExtArgs>>): Prisma__detalleventaClient<$Result.GetResult<Prisma.$detalleventaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detalleventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalleventaCountArgs} args - Arguments to filter Detalleventas to count.
     * @example
     * // Count the number of Detalleventas
     * const count = await prisma.detalleventa.count({
     *   where: {
     *     // ... the filter for the Detalleventas we want to count
     *   }
     * })
    **/
    count<T extends detalleventaCountArgs>(
      args?: Subset<T, detalleventaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetalleventaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detalleventa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleventaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DetalleventaAggregateArgs>(args: Subset<T, DetalleventaAggregateArgs>): Prisma.PrismaPromise<GetDetalleventaAggregateType<T>>

    /**
     * Group by Detalleventa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalleventaGroupByArgs} args - Group by arguments.
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
      T extends detalleventaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: detalleventaGroupByArgs['orderBy'] }
        : { orderBy?: detalleventaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, detalleventaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalleventaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the detalleventa model
   */
  readonly fields: detalleventaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for detalleventa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__detalleventaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends productosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productosDefaultArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ventas<T extends ventasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ventasDefaultArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the detalleventa model
   */
  interface detalleventaFieldRefs {
    readonly id_detalleVenta: FieldRef<"detalleventa", 'Int'>
    readonly id_venta: FieldRef<"detalleventa", 'Int'>
    readonly id_producto: FieldRef<"detalleventa", 'Int'>
    readonly cantidad: FieldRef<"detalleventa", 'Int'>
    readonly subtotal: FieldRef<"detalleventa", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * detalleventa findUnique
   */
  export type detalleventaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleventa
     */
    select?: detalleventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleventa
     */
    omit?: detalleventaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleventaInclude<ExtArgs> | null
    /**
     * Filter, which detalleventa to fetch.
     */
    where: detalleventaWhereUniqueInput
  }

  /**
   * detalleventa findUniqueOrThrow
   */
  export type detalleventaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleventa
     */
    select?: detalleventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleventa
     */
    omit?: detalleventaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleventaInclude<ExtArgs> | null
    /**
     * Filter, which detalleventa to fetch.
     */
    where: detalleventaWhereUniqueInput
  }

  /**
   * detalleventa findFirst
   */
  export type detalleventaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleventa
     */
    select?: detalleventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleventa
     */
    omit?: detalleventaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleventaInclude<ExtArgs> | null
    /**
     * Filter, which detalleventa to fetch.
     */
    where?: detalleventaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalleventas to fetch.
     */
    orderBy?: detalleventaOrderByWithRelationInput | detalleventaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detalleventas.
     */
    cursor?: detalleventaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalleventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalleventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detalleventas.
     */
    distinct?: DetalleventaScalarFieldEnum | DetalleventaScalarFieldEnum[]
  }

  /**
   * detalleventa findFirstOrThrow
   */
  export type detalleventaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleventa
     */
    select?: detalleventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleventa
     */
    omit?: detalleventaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleventaInclude<ExtArgs> | null
    /**
     * Filter, which detalleventa to fetch.
     */
    where?: detalleventaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalleventas to fetch.
     */
    orderBy?: detalleventaOrderByWithRelationInput | detalleventaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detalleventas.
     */
    cursor?: detalleventaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalleventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalleventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detalleventas.
     */
    distinct?: DetalleventaScalarFieldEnum | DetalleventaScalarFieldEnum[]
  }

  /**
   * detalleventa findMany
   */
  export type detalleventaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleventa
     */
    select?: detalleventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleventa
     */
    omit?: detalleventaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleventaInclude<ExtArgs> | null
    /**
     * Filter, which detalleventas to fetch.
     */
    where?: detalleventaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalleventas to fetch.
     */
    orderBy?: detalleventaOrderByWithRelationInput | detalleventaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing detalleventas.
     */
    cursor?: detalleventaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalleventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalleventas.
     */
    skip?: number
    distinct?: DetalleventaScalarFieldEnum | DetalleventaScalarFieldEnum[]
  }

  /**
   * detalleventa create
   */
  export type detalleventaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleventa
     */
    select?: detalleventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleventa
     */
    omit?: detalleventaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleventaInclude<ExtArgs> | null
    /**
     * The data needed to create a detalleventa.
     */
    data: XOR<detalleventaCreateInput, detalleventaUncheckedCreateInput>
  }

  /**
   * detalleventa createMany
   */
  export type detalleventaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many detalleventas.
     */
    data: detalleventaCreateManyInput | detalleventaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * detalleventa update
   */
  export type detalleventaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleventa
     */
    select?: detalleventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleventa
     */
    omit?: detalleventaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleventaInclude<ExtArgs> | null
    /**
     * The data needed to update a detalleventa.
     */
    data: XOR<detalleventaUpdateInput, detalleventaUncheckedUpdateInput>
    /**
     * Choose, which detalleventa to update.
     */
    where: detalleventaWhereUniqueInput
  }

  /**
   * detalleventa updateMany
   */
  export type detalleventaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update detalleventas.
     */
    data: XOR<detalleventaUpdateManyMutationInput, detalleventaUncheckedUpdateManyInput>
    /**
     * Filter which detalleventas to update
     */
    where?: detalleventaWhereInput
    /**
     * Limit how many detalleventas to update.
     */
    limit?: number
  }

  /**
   * detalleventa upsert
   */
  export type detalleventaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleventa
     */
    select?: detalleventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleventa
     */
    omit?: detalleventaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleventaInclude<ExtArgs> | null
    /**
     * The filter to search for the detalleventa to update in case it exists.
     */
    where: detalleventaWhereUniqueInput
    /**
     * In case the detalleventa found by the `where` argument doesn't exist, create a new detalleventa with this data.
     */
    create: XOR<detalleventaCreateInput, detalleventaUncheckedCreateInput>
    /**
     * In case the detalleventa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<detalleventaUpdateInput, detalleventaUncheckedUpdateInput>
  }

  /**
   * detalleventa delete
   */
  export type detalleventaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleventa
     */
    select?: detalleventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleventa
     */
    omit?: detalleventaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleventaInclude<ExtArgs> | null
    /**
     * Filter which detalleventa to delete.
     */
    where: detalleventaWhereUniqueInput
  }

  /**
   * detalleventa deleteMany
   */
  export type detalleventaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detalleventas to delete
     */
    where?: detalleventaWhereInput
    /**
     * Limit how many detalleventas to delete.
     */
    limit?: number
  }

  /**
   * detalleventa without action
   */
  export type detalleventaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleventa
     */
    select?: detalleventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleventa
     */
    omit?: detalleventaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleventaInclude<ExtArgs> | null
  }


  /**
   * Model metodopago
   */

  export type AggregateMetodopago = {
    _count: MetodopagoCountAggregateOutputType | null
    _avg: MetodopagoAvgAggregateOutputType | null
    _sum: MetodopagoSumAggregateOutputType | null
    _min: MetodopagoMinAggregateOutputType | null
    _max: MetodopagoMaxAggregateOutputType | null
  }

  export type MetodopagoAvgAggregateOutputType = {
    id_metodoPago: number | null
  }

  export type MetodopagoSumAggregateOutputType = {
    id_metodoPago: number | null
  }

  export type MetodopagoMinAggregateOutputType = {
    id_metodoPago: number | null
    nombre_metodoPago: string | null
  }

  export type MetodopagoMaxAggregateOutputType = {
    id_metodoPago: number | null
    nombre_metodoPago: string | null
  }

  export type MetodopagoCountAggregateOutputType = {
    id_metodoPago: number
    nombre_metodoPago: number
    _all: number
  }


  export type MetodopagoAvgAggregateInputType = {
    id_metodoPago?: true
  }

  export type MetodopagoSumAggregateInputType = {
    id_metodoPago?: true
  }

  export type MetodopagoMinAggregateInputType = {
    id_metodoPago?: true
    nombre_metodoPago?: true
  }

  export type MetodopagoMaxAggregateInputType = {
    id_metodoPago?: true
    nombre_metodoPago?: true
  }

  export type MetodopagoCountAggregateInputType = {
    id_metodoPago?: true
    nombre_metodoPago?: true
    _all?: true
  }

  export type MetodopagoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which metodopago to aggregate.
     */
    where?: metodopagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of metodopagos to fetch.
     */
    orderBy?: metodopagoOrderByWithRelationInput | metodopagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: metodopagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` metodopagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` metodopagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned metodopagos
    **/
    _count?: true | MetodopagoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetodopagoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetodopagoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetodopagoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetodopagoMaxAggregateInputType
  }

  export type GetMetodopagoAggregateType<T extends MetodopagoAggregateArgs> = {
        [P in keyof T & keyof AggregateMetodopago]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetodopago[P]>
      : GetScalarType<T[P], AggregateMetodopago[P]>
  }




  export type metodopagoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: metodopagoWhereInput
    orderBy?: metodopagoOrderByWithAggregationInput | metodopagoOrderByWithAggregationInput[]
    by: MetodopagoScalarFieldEnum[] | MetodopagoScalarFieldEnum
    having?: metodopagoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetodopagoCountAggregateInputType | true
    _avg?: MetodopagoAvgAggregateInputType
    _sum?: MetodopagoSumAggregateInputType
    _min?: MetodopagoMinAggregateInputType
    _max?: MetodopagoMaxAggregateInputType
  }

  export type MetodopagoGroupByOutputType = {
    id_metodoPago: number
    nombre_metodoPago: string
    _count: MetodopagoCountAggregateOutputType | null
    _avg: MetodopagoAvgAggregateOutputType | null
    _sum: MetodopagoSumAggregateOutputType | null
    _min: MetodopagoMinAggregateOutputType | null
    _max: MetodopagoMaxAggregateOutputType | null
  }

  type GetMetodopagoGroupByPayload<T extends metodopagoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetodopagoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetodopagoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetodopagoGroupByOutputType[P]>
            : GetScalarType<T[P], MetodopagoGroupByOutputType[P]>
        }
      >
    >


  export type metodopagoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_metodoPago?: boolean
    nombre_metodoPago?: boolean
    ventas?: boolean | metodopago$ventasArgs<ExtArgs>
    _count?: boolean | MetodopagoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metodopago"]>



  export type metodopagoSelectScalar = {
    id_metodoPago?: boolean
    nombre_metodoPago?: boolean
  }

  export type metodopagoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_metodoPago" | "nombre_metodoPago", ExtArgs["result"]["metodopago"]>
  export type metodopagoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventas?: boolean | metodopago$ventasArgs<ExtArgs>
    _count?: boolean | MetodopagoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $metodopagoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "metodopago"
    objects: {
      ventas: Prisma.$ventasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_metodoPago: number
      nombre_metodoPago: string
    }, ExtArgs["result"]["metodopago"]>
    composites: {}
  }

  type metodopagoGetPayload<S extends boolean | null | undefined | metodopagoDefaultArgs> = $Result.GetResult<Prisma.$metodopagoPayload, S>

  type metodopagoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<metodopagoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetodopagoCountAggregateInputType | true
    }

  export interface metodopagoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['metodopago'], meta: { name: 'metodopago' } }
    /**
     * Find zero or one Metodopago that matches the filter.
     * @param {metodopagoFindUniqueArgs} args - Arguments to find a Metodopago
     * @example
     * // Get one Metodopago
     * const metodopago = await prisma.metodopago.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends metodopagoFindUniqueArgs>(args: SelectSubset<T, metodopagoFindUniqueArgs<ExtArgs>>): Prisma__metodopagoClient<$Result.GetResult<Prisma.$metodopagoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Metodopago that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {metodopagoFindUniqueOrThrowArgs} args - Arguments to find a Metodopago
     * @example
     * // Get one Metodopago
     * const metodopago = await prisma.metodopago.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends metodopagoFindUniqueOrThrowArgs>(args: SelectSubset<T, metodopagoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__metodopagoClient<$Result.GetResult<Prisma.$metodopagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metodopago that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metodopagoFindFirstArgs} args - Arguments to find a Metodopago
     * @example
     * // Get one Metodopago
     * const metodopago = await prisma.metodopago.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends metodopagoFindFirstArgs>(args?: SelectSubset<T, metodopagoFindFirstArgs<ExtArgs>>): Prisma__metodopagoClient<$Result.GetResult<Prisma.$metodopagoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metodopago that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metodopagoFindFirstOrThrowArgs} args - Arguments to find a Metodopago
     * @example
     * // Get one Metodopago
     * const metodopago = await prisma.metodopago.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends metodopagoFindFirstOrThrowArgs>(args?: SelectSubset<T, metodopagoFindFirstOrThrowArgs<ExtArgs>>): Prisma__metodopagoClient<$Result.GetResult<Prisma.$metodopagoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metodopagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metodopagoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metodopagos
     * const metodopagos = await prisma.metodopago.findMany()
     * 
     * // Get first 10 Metodopagos
     * const metodopagos = await prisma.metodopago.findMany({ take: 10 })
     * 
     * // Only select the `id_metodoPago`
     * const metodopagoWithId_metodoPagoOnly = await prisma.metodopago.findMany({ select: { id_metodoPago: true } })
     * 
     */
    findMany<T extends metodopagoFindManyArgs>(args?: SelectSubset<T, metodopagoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$metodopagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Metodopago.
     * @param {metodopagoCreateArgs} args - Arguments to create a Metodopago.
     * @example
     * // Create one Metodopago
     * const Metodopago = await prisma.metodopago.create({
     *   data: {
     *     // ... data to create a Metodopago
     *   }
     * })
     * 
     */
    create<T extends metodopagoCreateArgs>(args: SelectSubset<T, metodopagoCreateArgs<ExtArgs>>): Prisma__metodopagoClient<$Result.GetResult<Prisma.$metodopagoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metodopagos.
     * @param {metodopagoCreateManyArgs} args - Arguments to create many Metodopagos.
     * @example
     * // Create many Metodopagos
     * const metodopago = await prisma.metodopago.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends metodopagoCreateManyArgs>(args?: SelectSubset<T, metodopagoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Metodopago.
     * @param {metodopagoDeleteArgs} args - Arguments to delete one Metodopago.
     * @example
     * // Delete one Metodopago
     * const Metodopago = await prisma.metodopago.delete({
     *   where: {
     *     // ... filter to delete one Metodopago
     *   }
     * })
     * 
     */
    delete<T extends metodopagoDeleteArgs>(args: SelectSubset<T, metodopagoDeleteArgs<ExtArgs>>): Prisma__metodopagoClient<$Result.GetResult<Prisma.$metodopagoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Metodopago.
     * @param {metodopagoUpdateArgs} args - Arguments to update one Metodopago.
     * @example
     * // Update one Metodopago
     * const metodopago = await prisma.metodopago.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends metodopagoUpdateArgs>(args: SelectSubset<T, metodopagoUpdateArgs<ExtArgs>>): Prisma__metodopagoClient<$Result.GetResult<Prisma.$metodopagoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metodopagos.
     * @param {metodopagoDeleteManyArgs} args - Arguments to filter Metodopagos to delete.
     * @example
     * // Delete a few Metodopagos
     * const { count } = await prisma.metodopago.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends metodopagoDeleteManyArgs>(args?: SelectSubset<T, metodopagoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metodopagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metodopagoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metodopagos
     * const metodopago = await prisma.metodopago.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends metodopagoUpdateManyArgs>(args: SelectSubset<T, metodopagoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Metodopago.
     * @param {metodopagoUpsertArgs} args - Arguments to update or create a Metodopago.
     * @example
     * // Update or create a Metodopago
     * const metodopago = await prisma.metodopago.upsert({
     *   create: {
     *     // ... data to create a Metodopago
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Metodopago we want to update
     *   }
     * })
     */
    upsert<T extends metodopagoUpsertArgs>(args: SelectSubset<T, metodopagoUpsertArgs<ExtArgs>>): Prisma__metodopagoClient<$Result.GetResult<Prisma.$metodopagoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Metodopagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metodopagoCountArgs} args - Arguments to filter Metodopagos to count.
     * @example
     * // Count the number of Metodopagos
     * const count = await prisma.metodopago.count({
     *   where: {
     *     // ... the filter for the Metodopagos we want to count
     *   }
     * })
    **/
    count<T extends metodopagoCountArgs>(
      args?: Subset<T, metodopagoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetodopagoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Metodopago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodopagoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MetodopagoAggregateArgs>(args: Subset<T, MetodopagoAggregateArgs>): Prisma.PrismaPromise<GetMetodopagoAggregateType<T>>

    /**
     * Group by Metodopago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metodopagoGroupByArgs} args - Group by arguments.
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
      T extends metodopagoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: metodopagoGroupByArgs['orderBy'] }
        : { orderBy?: metodopagoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, metodopagoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetodopagoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the metodopago model
   */
  readonly fields: metodopagoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for metodopago.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__metodopagoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ventas<T extends metodopago$ventasArgs<ExtArgs> = {}>(args?: Subset<T, metodopago$ventasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the metodopago model
   */
  interface metodopagoFieldRefs {
    readonly id_metodoPago: FieldRef<"metodopago", 'Int'>
    readonly nombre_metodoPago: FieldRef<"metodopago", 'String'>
  }
    

  // Custom InputTypes
  /**
   * metodopago findUnique
   */
  export type metodopagoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metodopago
     */
    select?: metodopagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metodopago
     */
    omit?: metodopagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metodopagoInclude<ExtArgs> | null
    /**
     * Filter, which metodopago to fetch.
     */
    where: metodopagoWhereUniqueInput
  }

  /**
   * metodopago findUniqueOrThrow
   */
  export type metodopagoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metodopago
     */
    select?: metodopagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metodopago
     */
    omit?: metodopagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metodopagoInclude<ExtArgs> | null
    /**
     * Filter, which metodopago to fetch.
     */
    where: metodopagoWhereUniqueInput
  }

  /**
   * metodopago findFirst
   */
  export type metodopagoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metodopago
     */
    select?: metodopagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metodopago
     */
    omit?: metodopagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metodopagoInclude<ExtArgs> | null
    /**
     * Filter, which metodopago to fetch.
     */
    where?: metodopagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of metodopagos to fetch.
     */
    orderBy?: metodopagoOrderByWithRelationInput | metodopagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for metodopagos.
     */
    cursor?: metodopagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` metodopagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` metodopagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of metodopagos.
     */
    distinct?: MetodopagoScalarFieldEnum | MetodopagoScalarFieldEnum[]
  }

  /**
   * metodopago findFirstOrThrow
   */
  export type metodopagoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metodopago
     */
    select?: metodopagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metodopago
     */
    omit?: metodopagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metodopagoInclude<ExtArgs> | null
    /**
     * Filter, which metodopago to fetch.
     */
    where?: metodopagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of metodopagos to fetch.
     */
    orderBy?: metodopagoOrderByWithRelationInput | metodopagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for metodopagos.
     */
    cursor?: metodopagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` metodopagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` metodopagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of metodopagos.
     */
    distinct?: MetodopagoScalarFieldEnum | MetodopagoScalarFieldEnum[]
  }

  /**
   * metodopago findMany
   */
  export type metodopagoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metodopago
     */
    select?: metodopagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metodopago
     */
    omit?: metodopagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metodopagoInclude<ExtArgs> | null
    /**
     * Filter, which metodopagos to fetch.
     */
    where?: metodopagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of metodopagos to fetch.
     */
    orderBy?: metodopagoOrderByWithRelationInput | metodopagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing metodopagos.
     */
    cursor?: metodopagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` metodopagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` metodopagos.
     */
    skip?: number
    distinct?: MetodopagoScalarFieldEnum | MetodopagoScalarFieldEnum[]
  }

  /**
   * metodopago create
   */
  export type metodopagoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metodopago
     */
    select?: metodopagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metodopago
     */
    omit?: metodopagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metodopagoInclude<ExtArgs> | null
    /**
     * The data needed to create a metodopago.
     */
    data: XOR<metodopagoCreateInput, metodopagoUncheckedCreateInput>
  }

  /**
   * metodopago createMany
   */
  export type metodopagoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many metodopagos.
     */
    data: metodopagoCreateManyInput | metodopagoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * metodopago update
   */
  export type metodopagoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metodopago
     */
    select?: metodopagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metodopago
     */
    omit?: metodopagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metodopagoInclude<ExtArgs> | null
    /**
     * The data needed to update a metodopago.
     */
    data: XOR<metodopagoUpdateInput, metodopagoUncheckedUpdateInput>
    /**
     * Choose, which metodopago to update.
     */
    where: metodopagoWhereUniqueInput
  }

  /**
   * metodopago updateMany
   */
  export type metodopagoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update metodopagos.
     */
    data: XOR<metodopagoUpdateManyMutationInput, metodopagoUncheckedUpdateManyInput>
    /**
     * Filter which metodopagos to update
     */
    where?: metodopagoWhereInput
    /**
     * Limit how many metodopagos to update.
     */
    limit?: number
  }

  /**
   * metodopago upsert
   */
  export type metodopagoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metodopago
     */
    select?: metodopagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metodopago
     */
    omit?: metodopagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metodopagoInclude<ExtArgs> | null
    /**
     * The filter to search for the metodopago to update in case it exists.
     */
    where: metodopagoWhereUniqueInput
    /**
     * In case the metodopago found by the `where` argument doesn't exist, create a new metodopago with this data.
     */
    create: XOR<metodopagoCreateInput, metodopagoUncheckedCreateInput>
    /**
     * In case the metodopago was found with the provided `where` argument, update it with this data.
     */
    update: XOR<metodopagoUpdateInput, metodopagoUncheckedUpdateInput>
  }

  /**
   * metodopago delete
   */
  export type metodopagoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metodopago
     */
    select?: metodopagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metodopago
     */
    omit?: metodopagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metodopagoInclude<ExtArgs> | null
    /**
     * Filter which metodopago to delete.
     */
    where: metodopagoWhereUniqueInput
  }

  /**
   * metodopago deleteMany
   */
  export type metodopagoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which metodopagos to delete
     */
    where?: metodopagoWhereInput
    /**
     * Limit how many metodopagos to delete.
     */
    limit?: number
  }

  /**
   * metodopago.ventas
   */
  export type metodopago$ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    where?: ventasWhereInput
    orderBy?: ventasOrderByWithRelationInput | ventasOrderByWithRelationInput[]
    cursor?: ventasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentasScalarFieldEnum | VentasScalarFieldEnum[]
  }

  /**
   * metodopago without action
   */
  export type metodopagoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metodopago
     */
    select?: metodopagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metodopago
     */
    omit?: metodopagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metodopagoInclude<ExtArgs> | null
  }


  /**
   * Model productos
   */

  export type AggregateProductos = {
    _count: ProductosCountAggregateOutputType | null
    _avg: ProductosAvgAggregateOutputType | null
    _sum: ProductosSumAggregateOutputType | null
    _min: ProductosMinAggregateOutputType | null
    _max: ProductosMaxAggregateOutputType | null
  }

  export type ProductosAvgAggregateOutputType = {
    id_producto: number | null
    id_categoria: number | null
    stock: number | null
    precio: Decimal | null
    descuento: Decimal | null
  }

  export type ProductosSumAggregateOutputType = {
    id_producto: number | null
    id_categoria: number | null
    stock: number | null
    precio: Decimal | null
    descuento: Decimal | null
  }

  export type ProductosMinAggregateOutputType = {
    id_producto: number | null
    nombre_producto: string | null
    descripcion: string | null
    descripcion_corta: string | null
    tags_seo: string | null
    seo_generado_en: Date | null
    id_categoria: number | null
    stock: number | null
    precio: Decimal | null
    descuento: Decimal | null
  }

  export type ProductosMaxAggregateOutputType = {
    id_producto: number | null
    nombre_producto: string | null
    descripcion: string | null
    descripcion_corta: string | null
    tags_seo: string | null
    seo_generado_en: Date | null
    id_categoria: number | null
    stock: number | null
    precio: Decimal | null
    descuento: Decimal | null
  }

  export type ProductosCountAggregateOutputType = {
    id_producto: number
    nombre_producto: number
    descripcion: number
    descripcion_corta: number
    tags_seo: number
    seo_generado_en: number
    id_categoria: number
    stock: number
    precio: number
    descuento: number
    _all: number
  }


  export type ProductosAvgAggregateInputType = {
    id_producto?: true
    id_categoria?: true
    stock?: true
    precio?: true
    descuento?: true
  }

  export type ProductosSumAggregateInputType = {
    id_producto?: true
    id_categoria?: true
    stock?: true
    precio?: true
    descuento?: true
  }

  export type ProductosMinAggregateInputType = {
    id_producto?: true
    nombre_producto?: true
    descripcion?: true
    descripcion_corta?: true
    tags_seo?: true
    seo_generado_en?: true
    id_categoria?: true
    stock?: true
    precio?: true
    descuento?: true
  }

  export type ProductosMaxAggregateInputType = {
    id_producto?: true
    nombre_producto?: true
    descripcion?: true
    descripcion_corta?: true
    tags_seo?: true
    seo_generado_en?: true
    id_categoria?: true
    stock?: true
    precio?: true
    descuento?: true
  }

  export type ProductosCountAggregateInputType = {
    id_producto?: true
    nombre_producto?: true
    descripcion?: true
    descripcion_corta?: true
    tags_seo?: true
    seo_generado_en?: true
    id_categoria?: true
    stock?: true
    precio?: true
    descuento?: true
    _all?: true
  }

  export type ProductosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productos to aggregate.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productos
    **/
    _count?: true | ProductosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductosMaxAggregateInputType
  }

  export type GetProductosAggregateType<T extends ProductosAggregateArgs> = {
        [P in keyof T & keyof AggregateProductos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductos[P]>
      : GetScalarType<T[P], AggregateProductos[P]>
  }




  export type productosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productosWhereInput
    orderBy?: productosOrderByWithAggregationInput | productosOrderByWithAggregationInput[]
    by: ProductosScalarFieldEnum[] | ProductosScalarFieldEnum
    having?: productosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductosCountAggregateInputType | true
    _avg?: ProductosAvgAggregateInputType
    _sum?: ProductosSumAggregateInputType
    _min?: ProductosMinAggregateInputType
    _max?: ProductosMaxAggregateInputType
  }

  export type ProductosGroupByOutputType = {
    id_producto: number
    nombre_producto: string
    descripcion: string | null
    descripcion_corta: string | null
    tags_seo: string | null
    seo_generado_en: Date | null
    id_categoria: number
    stock: number
    precio: Decimal
    descuento: Decimal
    _count: ProductosCountAggregateOutputType | null
    _avg: ProductosAvgAggregateOutputType | null
    _sum: ProductosSumAggregateOutputType | null
    _min: ProductosMinAggregateOutputType | null
    _max: ProductosMaxAggregateOutputType | null
  }

  type GetProductosGroupByPayload<T extends productosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductosGroupByOutputType[P]>
            : GetScalarType<T[P], ProductosGroupByOutputType[P]>
        }
      >
    >


  export type productosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_producto?: boolean
    nombre_producto?: boolean
    descripcion?: boolean
    descripcion_corta?: boolean
    tags_seo?: boolean
    seo_generado_en?: boolean
    id_categoria?: boolean
    stock?: boolean
    precio?: boolean
    descuento?: boolean
    alergenoproducto?: boolean | productos$alergenoproductoArgs<ExtArgs>
    detalleventa?: boolean | productos$detalleventaArgs<ExtArgs>
    ingredienteproducto?: boolean | productos$ingredienteproductoArgs<ExtArgs>
    categoria?: boolean | categoriaDefaultArgs<ExtArgs>
    _count?: boolean | ProductosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productos"]>



  export type productosSelectScalar = {
    id_producto?: boolean
    nombre_producto?: boolean
    descripcion?: boolean
    descripcion_corta?: boolean
    tags_seo?: boolean
    seo_generado_en?: boolean
    id_categoria?: boolean
    stock?: boolean
    precio?: boolean
    descuento?: boolean
  }

  export type productosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_producto" | "nombre_producto" | "descripcion" | "descripcion_corta" | "tags_seo" | "seo_generado_en" | "id_categoria" | "stock" | "precio" | "descuento", ExtArgs["result"]["productos"]>
  export type productosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alergenoproducto?: boolean | productos$alergenoproductoArgs<ExtArgs>
    detalleventa?: boolean | productos$detalleventaArgs<ExtArgs>
    ingredienteproducto?: boolean | productos$ingredienteproductoArgs<ExtArgs>
    categoria?: boolean | categoriaDefaultArgs<ExtArgs>
    _count?: boolean | ProductosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $productosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "productos"
    objects: {
      alergenoproducto: Prisma.$alergenoproductoPayload<ExtArgs>[]
      detalleventa: Prisma.$detalleventaPayload<ExtArgs>[]
      ingredienteproducto: Prisma.$ingredienteproductoPayload<ExtArgs>[]
      categoria: Prisma.$categoriaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_producto: number
      nombre_producto: string
      descripcion: string | null
      descripcion_corta: string | null
      tags_seo: string | null
      seo_generado_en: Date | null
      id_categoria: number
      stock: number
      precio: Prisma.Decimal
      descuento: Prisma.Decimal
    }, ExtArgs["result"]["productos"]>
    composites: {}
  }

  type productosGetPayload<S extends boolean | null | undefined | productosDefaultArgs> = $Result.GetResult<Prisma.$productosPayload, S>

  type productosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductosCountAggregateInputType | true
    }

  export interface productosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['productos'], meta: { name: 'productos' } }
    /**
     * Find zero or one Productos that matches the filter.
     * @param {productosFindUniqueArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productosFindUniqueArgs>(args: SelectSubset<T, productosFindUniqueArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Productos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productosFindUniqueOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productosFindUniqueOrThrowArgs>(args: SelectSubset<T, productosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosFindFirstArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productosFindFirstArgs>(args?: SelectSubset<T, productosFindFirstArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosFindFirstOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productosFindFirstOrThrowArgs>(args?: SelectSubset<T, productosFindFirstOrThrowArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.productos.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.productos.findMany({ take: 10 })
     * 
     * // Only select the `id_producto`
     * const productosWithId_productoOnly = await prisma.productos.findMany({ select: { id_producto: true } })
     * 
     */
    findMany<T extends productosFindManyArgs>(args?: SelectSubset<T, productosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Productos.
     * @param {productosCreateArgs} args - Arguments to create a Productos.
     * @example
     * // Create one Productos
     * const Productos = await prisma.productos.create({
     *   data: {
     *     // ... data to create a Productos
     *   }
     * })
     * 
     */
    create<T extends productosCreateArgs>(args: SelectSubset<T, productosCreateArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {productosCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const productos = await prisma.productos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productosCreateManyArgs>(args?: SelectSubset<T, productosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Productos.
     * @param {productosDeleteArgs} args - Arguments to delete one Productos.
     * @example
     * // Delete one Productos
     * const Productos = await prisma.productos.delete({
     *   where: {
     *     // ... filter to delete one Productos
     *   }
     * })
     * 
     */
    delete<T extends productosDeleteArgs>(args: SelectSubset<T, productosDeleteArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Productos.
     * @param {productosUpdateArgs} args - Arguments to update one Productos.
     * @example
     * // Update one Productos
     * const productos = await prisma.productos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productosUpdateArgs>(args: SelectSubset<T, productosUpdateArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {productosDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.productos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productosDeleteManyArgs>(args?: SelectSubset<T, productosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const productos = await prisma.productos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productosUpdateManyArgs>(args: SelectSubset<T, productosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Productos.
     * @param {productosUpsertArgs} args - Arguments to update or create a Productos.
     * @example
     * // Update or create a Productos
     * const productos = await prisma.productos.upsert({
     *   create: {
     *     // ... data to create a Productos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Productos we want to update
     *   }
     * })
     */
    upsert<T extends productosUpsertArgs>(args: SelectSubset<T, productosUpsertArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.productos.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends productosCountArgs>(
      args?: Subset<T, productosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductosAggregateArgs>(args: Subset<T, ProductosAggregateArgs>): Prisma.PrismaPromise<GetProductosAggregateType<T>>

    /**
     * Group by Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosGroupByArgs} args - Group by arguments.
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
      T extends productosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productosGroupByArgs['orderBy'] }
        : { orderBy?: productosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the productos model
   */
  readonly fields: productosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for productos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alergenoproducto<T extends productos$alergenoproductoArgs<ExtArgs> = {}>(args?: Subset<T, productos$alergenoproductoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alergenoproductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    detalleventa<T extends productos$detalleventaArgs<ExtArgs> = {}>(args?: Subset<T, productos$detalleventaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalleventaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ingredienteproducto<T extends productos$ingredienteproductoArgs<ExtArgs> = {}>(args?: Subset<T, productos$ingredienteproductoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingredienteproductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categoria<T extends categoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriaDefaultArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the productos model
   */
  interface productosFieldRefs {
    readonly id_producto: FieldRef<"productos", 'Int'>
    readonly nombre_producto: FieldRef<"productos", 'String'>
    readonly descripcion: FieldRef<"productos", 'String'>
    readonly descripcion_corta: FieldRef<"productos", 'String'>
    readonly tags_seo: FieldRef<"productos", 'String'>
    readonly seo_generado_en: FieldRef<"productos", 'DateTime'>
    readonly id_categoria: FieldRef<"productos", 'Int'>
    readonly stock: FieldRef<"productos", 'Int'>
    readonly precio: FieldRef<"productos", 'Decimal'>
    readonly descuento: FieldRef<"productos", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * productos findUnique
   */
  export type productosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos findUniqueOrThrow
   */
  export type productosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos findFirst
   */
  export type productosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * productos findFirstOrThrow
   */
  export type productosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * productos findMany
   */
  export type productosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productos.
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * productos create
   */
  export type productosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * The data needed to create a productos.
     */
    data: XOR<productosCreateInput, productosUncheckedCreateInput>
  }

  /**
   * productos createMany
   */
  export type productosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productos.
     */
    data: productosCreateManyInput | productosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * productos update
   */
  export type productosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * The data needed to update a productos.
     */
    data: XOR<productosUpdateInput, productosUncheckedUpdateInput>
    /**
     * Choose, which productos to update.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos updateMany
   */
  export type productosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productos.
     */
    data: XOR<productosUpdateManyMutationInput, productosUncheckedUpdateManyInput>
    /**
     * Filter which productos to update
     */
    where?: productosWhereInput
    /**
     * Limit how many productos to update.
     */
    limit?: number
  }

  /**
   * productos upsert
   */
  export type productosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * The filter to search for the productos to update in case it exists.
     */
    where: productosWhereUniqueInput
    /**
     * In case the productos found by the `where` argument doesn't exist, create a new productos with this data.
     */
    create: XOR<productosCreateInput, productosUncheckedCreateInput>
    /**
     * In case the productos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productosUpdateInput, productosUncheckedUpdateInput>
  }

  /**
   * productos delete
   */
  export type productosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter which productos to delete.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos deleteMany
   */
  export type productosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productos to delete
     */
    where?: productosWhereInput
    /**
     * Limit how many productos to delete.
     */
    limit?: number
  }

  /**
   * productos.alergenoproducto
   */
  export type productos$alergenoproductoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alergenoproducto
     */
    select?: alergenoproductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alergenoproducto
     */
    omit?: alergenoproductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alergenoproductoInclude<ExtArgs> | null
    where?: alergenoproductoWhereInput
    orderBy?: alergenoproductoOrderByWithRelationInput | alergenoproductoOrderByWithRelationInput[]
    cursor?: alergenoproductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlergenoproductoScalarFieldEnum | AlergenoproductoScalarFieldEnum[]
  }

  /**
   * productos.detalleventa
   */
  export type productos$detalleventaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleventa
     */
    select?: detalleventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleventa
     */
    omit?: detalleventaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleventaInclude<ExtArgs> | null
    where?: detalleventaWhereInput
    orderBy?: detalleventaOrderByWithRelationInput | detalleventaOrderByWithRelationInput[]
    cursor?: detalleventaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleventaScalarFieldEnum | DetalleventaScalarFieldEnum[]
  }

  /**
   * productos.ingredienteproducto
   */
  export type productos$ingredienteproductoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredienteproducto
     */
    select?: ingredienteproductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredienteproducto
     */
    omit?: ingredienteproductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredienteproductoInclude<ExtArgs> | null
    where?: ingredienteproductoWhereInput
    orderBy?: ingredienteproductoOrderByWithRelationInput | ingredienteproductoOrderByWithRelationInput[]
    cursor?: ingredienteproductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredienteproductoScalarFieldEnum | IngredienteproductoScalarFieldEnum[]
  }

  /**
   * productos without action
   */
  export type productosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
  }


  /**
   * Model tipoacceso
   */

  export type AggregateTipoacceso = {
    _count: TipoaccesoCountAggregateOutputType | null
    _avg: TipoaccesoAvgAggregateOutputType | null
    _sum: TipoaccesoSumAggregateOutputType | null
    _min: TipoaccesoMinAggregateOutputType | null
    _max: TipoaccesoMaxAggregateOutputType | null
  }

  export type TipoaccesoAvgAggregateOutputType = {
    id_tipoAcceso: number | null
  }

  export type TipoaccesoSumAggregateOutputType = {
    id_tipoAcceso: number | null
  }

  export type TipoaccesoMinAggregateOutputType = {
    id_tipoAcceso: number | null
    nombre_tipoAcceso: string | null
  }

  export type TipoaccesoMaxAggregateOutputType = {
    id_tipoAcceso: number | null
    nombre_tipoAcceso: string | null
  }

  export type TipoaccesoCountAggregateOutputType = {
    id_tipoAcceso: number
    nombre_tipoAcceso: number
    _all: number
  }


  export type TipoaccesoAvgAggregateInputType = {
    id_tipoAcceso?: true
  }

  export type TipoaccesoSumAggregateInputType = {
    id_tipoAcceso?: true
  }

  export type TipoaccesoMinAggregateInputType = {
    id_tipoAcceso?: true
    nombre_tipoAcceso?: true
  }

  export type TipoaccesoMaxAggregateInputType = {
    id_tipoAcceso?: true
    nombre_tipoAcceso?: true
  }

  export type TipoaccesoCountAggregateInputType = {
    id_tipoAcceso?: true
    nombre_tipoAcceso?: true
    _all?: true
  }

  export type TipoaccesoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipoacceso to aggregate.
     */
    where?: tipoaccesoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipoaccesos to fetch.
     */
    orderBy?: tipoaccesoOrderByWithRelationInput | tipoaccesoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipoaccesoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipoaccesos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipoaccesos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipoaccesos
    **/
    _count?: true | TipoaccesoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoaccesoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoaccesoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoaccesoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoaccesoMaxAggregateInputType
  }

  export type GetTipoaccesoAggregateType<T extends TipoaccesoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoacceso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoacceso[P]>
      : GetScalarType<T[P], AggregateTipoacceso[P]>
  }




  export type tipoaccesoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipoaccesoWhereInput
    orderBy?: tipoaccesoOrderByWithAggregationInput | tipoaccesoOrderByWithAggregationInput[]
    by: TipoaccesoScalarFieldEnum[] | TipoaccesoScalarFieldEnum
    having?: tipoaccesoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoaccesoCountAggregateInputType | true
    _avg?: TipoaccesoAvgAggregateInputType
    _sum?: TipoaccesoSumAggregateInputType
    _min?: TipoaccesoMinAggregateInputType
    _max?: TipoaccesoMaxAggregateInputType
  }

  export type TipoaccesoGroupByOutputType = {
    id_tipoAcceso: number
    nombre_tipoAcceso: string
    _count: TipoaccesoCountAggregateOutputType | null
    _avg: TipoaccesoAvgAggregateOutputType | null
    _sum: TipoaccesoSumAggregateOutputType | null
    _min: TipoaccesoMinAggregateOutputType | null
    _max: TipoaccesoMaxAggregateOutputType | null
  }

  type GetTipoaccesoGroupByPayload<T extends tipoaccesoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoaccesoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoaccesoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoaccesoGroupByOutputType[P]>
            : GetScalarType<T[P], TipoaccesoGroupByOutputType[P]>
        }
      >
    >


  export type tipoaccesoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipoAcceso?: boolean
    nombre_tipoAcceso?: boolean
    accesoqr?: boolean | tipoacceso$accesoqrArgs<ExtArgs>
    _count?: boolean | TipoaccesoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoacceso"]>



  export type tipoaccesoSelectScalar = {
    id_tipoAcceso?: boolean
    nombre_tipoAcceso?: boolean
  }

  export type tipoaccesoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_tipoAcceso" | "nombre_tipoAcceso", ExtArgs["result"]["tipoacceso"]>
  export type tipoaccesoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accesoqr?: boolean | tipoacceso$accesoqrArgs<ExtArgs>
    _count?: boolean | TipoaccesoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tipoaccesoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tipoacceso"
    objects: {
      accesoqr: Prisma.$accesoqrPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_tipoAcceso: number
      nombre_tipoAcceso: string
    }, ExtArgs["result"]["tipoacceso"]>
    composites: {}
  }

  type tipoaccesoGetPayload<S extends boolean | null | undefined | tipoaccesoDefaultArgs> = $Result.GetResult<Prisma.$tipoaccesoPayload, S>

  type tipoaccesoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tipoaccesoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoaccesoCountAggregateInputType | true
    }

  export interface tipoaccesoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tipoacceso'], meta: { name: 'tipoacceso' } }
    /**
     * Find zero or one Tipoacceso that matches the filter.
     * @param {tipoaccesoFindUniqueArgs} args - Arguments to find a Tipoacceso
     * @example
     * // Get one Tipoacceso
     * const tipoacceso = await prisma.tipoacceso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tipoaccesoFindUniqueArgs>(args: SelectSubset<T, tipoaccesoFindUniqueArgs<ExtArgs>>): Prisma__tipoaccesoClient<$Result.GetResult<Prisma.$tipoaccesoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tipoacceso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tipoaccesoFindUniqueOrThrowArgs} args - Arguments to find a Tipoacceso
     * @example
     * // Get one Tipoacceso
     * const tipoacceso = await prisma.tipoacceso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tipoaccesoFindUniqueOrThrowArgs>(args: SelectSubset<T, tipoaccesoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tipoaccesoClient<$Result.GetResult<Prisma.$tipoaccesoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipoacceso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipoaccesoFindFirstArgs} args - Arguments to find a Tipoacceso
     * @example
     * // Get one Tipoacceso
     * const tipoacceso = await prisma.tipoacceso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tipoaccesoFindFirstArgs>(args?: SelectSubset<T, tipoaccesoFindFirstArgs<ExtArgs>>): Prisma__tipoaccesoClient<$Result.GetResult<Prisma.$tipoaccesoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipoacceso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipoaccesoFindFirstOrThrowArgs} args - Arguments to find a Tipoacceso
     * @example
     * // Get one Tipoacceso
     * const tipoacceso = await prisma.tipoacceso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tipoaccesoFindFirstOrThrowArgs>(args?: SelectSubset<T, tipoaccesoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tipoaccesoClient<$Result.GetResult<Prisma.$tipoaccesoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tipoaccesos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipoaccesoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipoaccesos
     * const tipoaccesos = await prisma.tipoacceso.findMany()
     * 
     * // Get first 10 Tipoaccesos
     * const tipoaccesos = await prisma.tipoacceso.findMany({ take: 10 })
     * 
     * // Only select the `id_tipoAcceso`
     * const tipoaccesoWithId_tipoAccesoOnly = await prisma.tipoacceso.findMany({ select: { id_tipoAcceso: true } })
     * 
     */
    findMany<T extends tipoaccesoFindManyArgs>(args?: SelectSubset<T, tipoaccesoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipoaccesoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tipoacceso.
     * @param {tipoaccesoCreateArgs} args - Arguments to create a Tipoacceso.
     * @example
     * // Create one Tipoacceso
     * const Tipoacceso = await prisma.tipoacceso.create({
     *   data: {
     *     // ... data to create a Tipoacceso
     *   }
     * })
     * 
     */
    create<T extends tipoaccesoCreateArgs>(args: SelectSubset<T, tipoaccesoCreateArgs<ExtArgs>>): Prisma__tipoaccesoClient<$Result.GetResult<Prisma.$tipoaccesoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tipoaccesos.
     * @param {tipoaccesoCreateManyArgs} args - Arguments to create many Tipoaccesos.
     * @example
     * // Create many Tipoaccesos
     * const tipoacceso = await prisma.tipoacceso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tipoaccesoCreateManyArgs>(args?: SelectSubset<T, tipoaccesoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tipoacceso.
     * @param {tipoaccesoDeleteArgs} args - Arguments to delete one Tipoacceso.
     * @example
     * // Delete one Tipoacceso
     * const Tipoacceso = await prisma.tipoacceso.delete({
     *   where: {
     *     // ... filter to delete one Tipoacceso
     *   }
     * })
     * 
     */
    delete<T extends tipoaccesoDeleteArgs>(args: SelectSubset<T, tipoaccesoDeleteArgs<ExtArgs>>): Prisma__tipoaccesoClient<$Result.GetResult<Prisma.$tipoaccesoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tipoacceso.
     * @param {tipoaccesoUpdateArgs} args - Arguments to update one Tipoacceso.
     * @example
     * // Update one Tipoacceso
     * const tipoacceso = await prisma.tipoacceso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tipoaccesoUpdateArgs>(args: SelectSubset<T, tipoaccesoUpdateArgs<ExtArgs>>): Prisma__tipoaccesoClient<$Result.GetResult<Prisma.$tipoaccesoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tipoaccesos.
     * @param {tipoaccesoDeleteManyArgs} args - Arguments to filter Tipoaccesos to delete.
     * @example
     * // Delete a few Tipoaccesos
     * const { count } = await prisma.tipoacceso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tipoaccesoDeleteManyArgs>(args?: SelectSubset<T, tipoaccesoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipoaccesos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipoaccesoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipoaccesos
     * const tipoacceso = await prisma.tipoacceso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tipoaccesoUpdateManyArgs>(args: SelectSubset<T, tipoaccesoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tipoacceso.
     * @param {tipoaccesoUpsertArgs} args - Arguments to update or create a Tipoacceso.
     * @example
     * // Update or create a Tipoacceso
     * const tipoacceso = await prisma.tipoacceso.upsert({
     *   create: {
     *     // ... data to create a Tipoacceso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipoacceso we want to update
     *   }
     * })
     */
    upsert<T extends tipoaccesoUpsertArgs>(args: SelectSubset<T, tipoaccesoUpsertArgs<ExtArgs>>): Prisma__tipoaccesoClient<$Result.GetResult<Prisma.$tipoaccesoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tipoaccesos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipoaccesoCountArgs} args - Arguments to filter Tipoaccesos to count.
     * @example
     * // Count the number of Tipoaccesos
     * const count = await prisma.tipoacceso.count({
     *   where: {
     *     // ... the filter for the Tipoaccesos we want to count
     *   }
     * })
    **/
    count<T extends tipoaccesoCountArgs>(
      args?: Subset<T, tipoaccesoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoaccesoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipoacceso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoaccesoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipoaccesoAggregateArgs>(args: Subset<T, TipoaccesoAggregateArgs>): Prisma.PrismaPromise<GetTipoaccesoAggregateType<T>>

    /**
     * Group by Tipoacceso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipoaccesoGroupByArgs} args - Group by arguments.
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
      T extends tipoaccesoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tipoaccesoGroupByArgs['orderBy'] }
        : { orderBy?: tipoaccesoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tipoaccesoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoaccesoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tipoacceso model
   */
  readonly fields: tipoaccesoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tipoacceso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tipoaccesoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accesoqr<T extends tipoacceso$accesoqrArgs<ExtArgs> = {}>(args?: Subset<T, tipoacceso$accesoqrArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accesoqrPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tipoacceso model
   */
  interface tipoaccesoFieldRefs {
    readonly id_tipoAcceso: FieldRef<"tipoacceso", 'Int'>
    readonly nombre_tipoAcceso: FieldRef<"tipoacceso", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tipoacceso findUnique
   */
  export type tipoaccesoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoacceso
     */
    select?: tipoaccesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoacceso
     */
    omit?: tipoaccesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoaccesoInclude<ExtArgs> | null
    /**
     * Filter, which tipoacceso to fetch.
     */
    where: tipoaccesoWhereUniqueInput
  }

  /**
   * tipoacceso findUniqueOrThrow
   */
  export type tipoaccesoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoacceso
     */
    select?: tipoaccesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoacceso
     */
    omit?: tipoaccesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoaccesoInclude<ExtArgs> | null
    /**
     * Filter, which tipoacceso to fetch.
     */
    where: tipoaccesoWhereUniqueInput
  }

  /**
   * tipoacceso findFirst
   */
  export type tipoaccesoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoacceso
     */
    select?: tipoaccesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoacceso
     */
    omit?: tipoaccesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoaccesoInclude<ExtArgs> | null
    /**
     * Filter, which tipoacceso to fetch.
     */
    where?: tipoaccesoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipoaccesos to fetch.
     */
    orderBy?: tipoaccesoOrderByWithRelationInput | tipoaccesoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipoaccesos.
     */
    cursor?: tipoaccesoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipoaccesos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipoaccesos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipoaccesos.
     */
    distinct?: TipoaccesoScalarFieldEnum | TipoaccesoScalarFieldEnum[]
  }

  /**
   * tipoacceso findFirstOrThrow
   */
  export type tipoaccesoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoacceso
     */
    select?: tipoaccesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoacceso
     */
    omit?: tipoaccesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoaccesoInclude<ExtArgs> | null
    /**
     * Filter, which tipoacceso to fetch.
     */
    where?: tipoaccesoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipoaccesos to fetch.
     */
    orderBy?: tipoaccesoOrderByWithRelationInput | tipoaccesoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipoaccesos.
     */
    cursor?: tipoaccesoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipoaccesos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipoaccesos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipoaccesos.
     */
    distinct?: TipoaccesoScalarFieldEnum | TipoaccesoScalarFieldEnum[]
  }

  /**
   * tipoacceso findMany
   */
  export type tipoaccesoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoacceso
     */
    select?: tipoaccesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoacceso
     */
    omit?: tipoaccesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoaccesoInclude<ExtArgs> | null
    /**
     * Filter, which tipoaccesos to fetch.
     */
    where?: tipoaccesoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipoaccesos to fetch.
     */
    orderBy?: tipoaccesoOrderByWithRelationInput | tipoaccesoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipoaccesos.
     */
    cursor?: tipoaccesoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipoaccesos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipoaccesos.
     */
    skip?: number
    distinct?: TipoaccesoScalarFieldEnum | TipoaccesoScalarFieldEnum[]
  }

  /**
   * tipoacceso create
   */
  export type tipoaccesoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoacceso
     */
    select?: tipoaccesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoacceso
     */
    omit?: tipoaccesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoaccesoInclude<ExtArgs> | null
    /**
     * The data needed to create a tipoacceso.
     */
    data: XOR<tipoaccesoCreateInput, tipoaccesoUncheckedCreateInput>
  }

  /**
   * tipoacceso createMany
   */
  export type tipoaccesoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tipoaccesos.
     */
    data: tipoaccesoCreateManyInput | tipoaccesoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipoacceso update
   */
  export type tipoaccesoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoacceso
     */
    select?: tipoaccesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoacceso
     */
    omit?: tipoaccesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoaccesoInclude<ExtArgs> | null
    /**
     * The data needed to update a tipoacceso.
     */
    data: XOR<tipoaccesoUpdateInput, tipoaccesoUncheckedUpdateInput>
    /**
     * Choose, which tipoacceso to update.
     */
    where: tipoaccesoWhereUniqueInput
  }

  /**
   * tipoacceso updateMany
   */
  export type tipoaccesoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tipoaccesos.
     */
    data: XOR<tipoaccesoUpdateManyMutationInput, tipoaccesoUncheckedUpdateManyInput>
    /**
     * Filter which tipoaccesos to update
     */
    where?: tipoaccesoWhereInput
    /**
     * Limit how many tipoaccesos to update.
     */
    limit?: number
  }

  /**
   * tipoacceso upsert
   */
  export type tipoaccesoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoacceso
     */
    select?: tipoaccesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoacceso
     */
    omit?: tipoaccesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoaccesoInclude<ExtArgs> | null
    /**
     * The filter to search for the tipoacceso to update in case it exists.
     */
    where: tipoaccesoWhereUniqueInput
    /**
     * In case the tipoacceso found by the `where` argument doesn't exist, create a new tipoacceso with this data.
     */
    create: XOR<tipoaccesoCreateInput, tipoaccesoUncheckedCreateInput>
    /**
     * In case the tipoacceso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipoaccesoUpdateInput, tipoaccesoUncheckedUpdateInput>
  }

  /**
   * tipoacceso delete
   */
  export type tipoaccesoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoacceso
     */
    select?: tipoaccesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoacceso
     */
    omit?: tipoaccesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoaccesoInclude<ExtArgs> | null
    /**
     * Filter which tipoacceso to delete.
     */
    where: tipoaccesoWhereUniqueInput
  }

  /**
   * tipoacceso deleteMany
   */
  export type tipoaccesoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipoaccesos to delete
     */
    where?: tipoaccesoWhereInput
    /**
     * Limit how many tipoaccesos to delete.
     */
    limit?: number
  }

  /**
   * tipoacceso.accesoqr
   */
  export type tipoacceso$accesoqrArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accesoqr
     */
    select?: accesoqrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accesoqr
     */
    omit?: accesoqrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accesoqrInclude<ExtArgs> | null
    where?: accesoqrWhereInput
    orderBy?: accesoqrOrderByWithRelationInput | accesoqrOrderByWithRelationInput[]
    cursor?: accesoqrWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccesoqrScalarFieldEnum | AccesoqrScalarFieldEnum[]
  }

  /**
   * tipoacceso without action
   */
  export type tipoaccesoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoacceso
     */
    select?: tipoaccesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoacceso
     */
    omit?: tipoaccesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoaccesoInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id_usuario: number | null
    rol_usuario: number | null
    contador_bubbleTea: number | null
    regalo_bubbleTea: number | null
    score: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id_usuario: number | null
    rol_usuario: number | null
    contador_bubbleTea: number | null
    regalo_bubbleTea: number | null
    score: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id_usuario: number | null
    rol_usuario: number | null
    nombre_usuario: string | null
    correo_usuario: string | null
    clave_usuario: string | null
    telefono_usuario: string | null
    direccion_usuario: string | null
    fecha_registro: Date | null
    contador_bubbleTea: number | null
    regalo_bubbleTea: number | null
    score: number | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id_usuario: number | null
    rol_usuario: number | null
    nombre_usuario: string | null
    correo_usuario: string | null
    clave_usuario: string | null
    telefono_usuario: string | null
    direccion_usuario: string | null
    fecha_registro: Date | null
    contador_bubbleTea: number | null
    regalo_bubbleTea: number | null
    score: number | null
  }

  export type UsuariosCountAggregateOutputType = {
    id_usuario: number
    rol_usuario: number
    nombre_usuario: number
    correo_usuario: number
    clave_usuario: number
    telefono_usuario: number
    direccion_usuario: number
    fecha_registro: number
    contador_bubbleTea: number
    regalo_bubbleTea: number
    score: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id_usuario?: true
    rol_usuario?: true
    contador_bubbleTea?: true
    regalo_bubbleTea?: true
    score?: true
  }

  export type UsuariosSumAggregateInputType = {
    id_usuario?: true
    rol_usuario?: true
    contador_bubbleTea?: true
    regalo_bubbleTea?: true
    score?: true
  }

  export type UsuariosMinAggregateInputType = {
    id_usuario?: true
    rol_usuario?: true
    nombre_usuario?: true
    correo_usuario?: true
    clave_usuario?: true
    telefono_usuario?: true
    direccion_usuario?: true
    fecha_registro?: true
    contador_bubbleTea?: true
    regalo_bubbleTea?: true
    score?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id_usuario?: true
    rol_usuario?: true
    nombre_usuario?: true
    correo_usuario?: true
    clave_usuario?: true
    telefono_usuario?: true
    direccion_usuario?: true
    fecha_registro?: true
    contador_bubbleTea?: true
    regalo_bubbleTea?: true
    score?: true
  }

  export type UsuariosCountAggregateInputType = {
    id_usuario?: true
    rol_usuario?: true
    nombre_usuario?: true
    correo_usuario?: true
    clave_usuario?: true
    telefono_usuario?: true
    direccion_usuario?: true
    fecha_registro?: true
    contador_bubbleTea?: true
    regalo_bubbleTea?: true
    score?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id_usuario: number
    rol_usuario: number
    nombre_usuario: string
    correo_usuario: string
    clave_usuario: string
    telefono_usuario: string | null
    direccion_usuario: string | null
    fecha_registro: Date
    contador_bubbleTea: number
    regalo_bubbleTea: number | null
    score: number | null
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    rol_usuario?: boolean
    nombre_usuario?: boolean
    correo_usuario?: boolean
    clave_usuario?: boolean
    telefono_usuario?: boolean
    direccion_usuario?: boolean
    fecha_registro?: boolean
    contador_bubbleTea?: boolean
    regalo_bubbleTea?: boolean
    score?: boolean
    tickets?: boolean | usuarios$ticketsArgs<ExtArgs>
    ventas?: boolean | usuarios$ventasArgs<ExtArgs>
    ia_conversaciones?: boolean | usuarios$ia_conversacionesArgs<ExtArgs>
    email_eventos?: boolean | usuarios$email_eventosArgs<ExtArgs>
    reservas?: boolean | usuarios$reservasArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>



  export type usuariosSelectScalar = {
    id_usuario?: boolean
    rol_usuario?: boolean
    nombre_usuario?: boolean
    correo_usuario?: boolean
    clave_usuario?: boolean
    telefono_usuario?: boolean
    direccion_usuario?: boolean
    fecha_registro?: boolean
    contador_bubbleTea?: boolean
    regalo_bubbleTea?: boolean
    score?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "rol_usuario" | "nombre_usuario" | "correo_usuario" | "clave_usuario" | "telefono_usuario" | "direccion_usuario" | "fecha_registro" | "contador_bubbleTea" | "regalo_bubbleTea" | "score", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | usuarios$ticketsArgs<ExtArgs>
    ventas?: boolean | usuarios$ventasArgs<ExtArgs>
    ia_conversaciones?: boolean | usuarios$ia_conversacionesArgs<ExtArgs>
    email_eventos?: boolean | usuarios$email_eventosArgs<ExtArgs>
    reservas?: boolean | usuarios$reservasArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      tickets: Prisma.$ticketsPayload<ExtArgs>[]
      ventas: Prisma.$ventasPayload<ExtArgs>[]
      ia_conversaciones: Prisma.$ia_conversacionesPayload<ExtArgs>[]
      email_eventos: Prisma.$email_eventosPayload<ExtArgs>[]
      reservas: Prisma.$reservasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      rol_usuario: number
      nombre_usuario: string
      correo_usuario: string
      clave_usuario: string
      telefono_usuario: string | null
      direccion_usuario: string | null
      fecha_registro: Date
      contador_bubbleTea: number
      regalo_bubbleTea: number | null
      score: number | null
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
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
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends usuarios$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ventas<T extends usuarios$ventasArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$ventasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ia_conversaciones<T extends usuarios$ia_conversacionesArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$ia_conversacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ia_conversacionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    email_eventos<T extends usuarios$email_eventosArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$email_eventosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_eventosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservas<T extends usuarios$reservasArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id_usuario: FieldRef<"usuarios", 'Int'>
    readonly rol_usuario: FieldRef<"usuarios", 'Int'>
    readonly nombre_usuario: FieldRef<"usuarios", 'String'>
    readonly correo_usuario: FieldRef<"usuarios", 'String'>
    readonly clave_usuario: FieldRef<"usuarios", 'String'>
    readonly telefono_usuario: FieldRef<"usuarios", 'String'>
    readonly direccion_usuario: FieldRef<"usuarios", 'String'>
    readonly fecha_registro: FieldRef<"usuarios", 'DateTime'>
    readonly contador_bubbleTea: FieldRef<"usuarios", 'Int'>
    readonly regalo_bubbleTea: FieldRef<"usuarios", 'Int'>
    readonly score: FieldRef<"usuarios", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.tickets
   */
  export type usuarios$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    where?: ticketsWhereInput
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    cursor?: ticketsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * usuarios.ventas
   */
  export type usuarios$ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    where?: ventasWhereInput
    orderBy?: ventasOrderByWithRelationInput | ventasOrderByWithRelationInput[]
    cursor?: ventasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentasScalarFieldEnum | VentasScalarFieldEnum[]
  }

  /**
   * usuarios.ia_conversaciones
   */
  export type usuarios$ia_conversacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ia_conversaciones
     */
    select?: ia_conversacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ia_conversaciones
     */
    omit?: ia_conversacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ia_conversacionesInclude<ExtArgs> | null
    where?: ia_conversacionesWhereInput
    orderBy?: ia_conversacionesOrderByWithRelationInput | ia_conversacionesOrderByWithRelationInput[]
    cursor?: ia_conversacionesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ia_conversacionesScalarFieldEnum | Ia_conversacionesScalarFieldEnum[]
  }

  /**
   * usuarios.email_eventos
   */
  export type usuarios$email_eventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_eventos
     */
    select?: email_eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_eventos
     */
    omit?: email_eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_eventosInclude<ExtArgs> | null
    where?: email_eventosWhereInput
    orderBy?: email_eventosOrderByWithRelationInput | email_eventosOrderByWithRelationInput[]
    cursor?: email_eventosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Email_eventosScalarFieldEnum | Email_eventosScalarFieldEnum[]
  }

  /**
   * usuarios.reservas
   */
  export type usuarios$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    where?: reservasWhereInput
    orderBy?: reservasOrderByWithRelationInput | reservasOrderByWithRelationInput[]
    cursor?: reservasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
  }


  /**
   * Model ventas
   */

  export type AggregateVentas = {
    _count: VentasCountAggregateOutputType | null
    _avg: VentasAvgAggregateOutputType | null
    _sum: VentasSumAggregateOutputType | null
    _min: VentasMinAggregateOutputType | null
    _max: VentasMaxAggregateOutputType | null
  }

  export type VentasAvgAggregateOutputType = {
    id_venta: number | null
    id_usuario: number | null
    total: Decimal | null
    id_metodoPago: number | null
    id_comprobante: number | null
    tiempo_estimado_min: number | null
  }

  export type VentasSumAggregateOutputType = {
    id_venta: number | null
    id_usuario: number | null
    total: Decimal | null
    id_metodoPago: number | null
    id_comprobante: number | null
    tiempo_estimado_min: number | null
  }

  export type VentasMinAggregateOutputType = {
    id_venta: number | null
    id_usuario: number | null
    fecha_venta: Date | null
    total: Decimal | null
    id_metodoPago: number | null
    id_comprobante: number | null
    estado: string | null
    metodo_entrega: string | null
    direccion_entrega: string | null
    referencia_entrega: string | null
    repartidor: string | null
    telefono_repartidor: string | null
    tiempo_estimado_min: number | null
    entregado_en: Date | null
  }

  export type VentasMaxAggregateOutputType = {
    id_venta: number | null
    id_usuario: number | null
    fecha_venta: Date | null
    total: Decimal | null
    id_metodoPago: number | null
    id_comprobante: number | null
    estado: string | null
    metodo_entrega: string | null
    direccion_entrega: string | null
    referencia_entrega: string | null
    repartidor: string | null
    telefono_repartidor: string | null
    tiempo_estimado_min: number | null
    entregado_en: Date | null
  }

  export type VentasCountAggregateOutputType = {
    id_venta: number
    id_usuario: number
    fecha_venta: number
    total: number
    id_metodoPago: number
    id_comprobante: number
    estado: number
    metodo_entrega: number
    direccion_entrega: number
    referencia_entrega: number
    repartidor: number
    telefono_repartidor: number
    tiempo_estimado_min: number
    entregado_en: number
    _all: number
  }


  export type VentasAvgAggregateInputType = {
    id_venta?: true
    id_usuario?: true
    total?: true
    id_metodoPago?: true
    id_comprobante?: true
    tiempo_estimado_min?: true
  }

  export type VentasSumAggregateInputType = {
    id_venta?: true
    id_usuario?: true
    total?: true
    id_metodoPago?: true
    id_comprobante?: true
    tiempo_estimado_min?: true
  }

  export type VentasMinAggregateInputType = {
    id_venta?: true
    id_usuario?: true
    fecha_venta?: true
    total?: true
    id_metodoPago?: true
    id_comprobante?: true
    estado?: true
    metodo_entrega?: true
    direccion_entrega?: true
    referencia_entrega?: true
    repartidor?: true
    telefono_repartidor?: true
    tiempo_estimado_min?: true
    entregado_en?: true
  }

  export type VentasMaxAggregateInputType = {
    id_venta?: true
    id_usuario?: true
    fecha_venta?: true
    total?: true
    id_metodoPago?: true
    id_comprobante?: true
    estado?: true
    metodo_entrega?: true
    direccion_entrega?: true
    referencia_entrega?: true
    repartidor?: true
    telefono_repartidor?: true
    tiempo_estimado_min?: true
    entregado_en?: true
  }

  export type VentasCountAggregateInputType = {
    id_venta?: true
    id_usuario?: true
    fecha_venta?: true
    total?: true
    id_metodoPago?: true
    id_comprobante?: true
    estado?: true
    metodo_entrega?: true
    direccion_entrega?: true
    referencia_entrega?: true
    repartidor?: true
    telefono_repartidor?: true
    tiempo_estimado_min?: true
    entregado_en?: true
    _all?: true
  }

  export type VentasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ventas to aggregate.
     */
    where?: ventasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ventas to fetch.
     */
    orderBy?: ventasOrderByWithRelationInput | ventasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ventasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ventas
    **/
    _count?: true | VentasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VentasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VentasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VentasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VentasMaxAggregateInputType
  }

  export type GetVentasAggregateType<T extends VentasAggregateArgs> = {
        [P in keyof T & keyof AggregateVentas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVentas[P]>
      : GetScalarType<T[P], AggregateVentas[P]>
  }




  export type ventasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ventasWhereInput
    orderBy?: ventasOrderByWithAggregationInput | ventasOrderByWithAggregationInput[]
    by: VentasScalarFieldEnum[] | VentasScalarFieldEnum
    having?: ventasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VentasCountAggregateInputType | true
    _avg?: VentasAvgAggregateInputType
    _sum?: VentasSumAggregateInputType
    _min?: VentasMinAggregateInputType
    _max?: VentasMaxAggregateInputType
  }

  export type VentasGroupByOutputType = {
    id_venta: number
    id_usuario: number
    fecha_venta: Date
    total: Decimal
    id_metodoPago: number
    id_comprobante: number
    estado: string | null
    metodo_entrega: string | null
    direccion_entrega: string | null
    referencia_entrega: string | null
    repartidor: string | null
    telefono_repartidor: string | null
    tiempo_estimado_min: number | null
    entregado_en: Date | null
    _count: VentasCountAggregateOutputType | null
    _avg: VentasAvgAggregateOutputType | null
    _sum: VentasSumAggregateOutputType | null
    _min: VentasMinAggregateOutputType | null
    _max: VentasMaxAggregateOutputType | null
  }

  type GetVentasGroupByPayload<T extends ventasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VentasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VentasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VentasGroupByOutputType[P]>
            : GetScalarType<T[P], VentasGroupByOutputType[P]>
        }
      >
    >


  export type ventasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_venta?: boolean
    id_usuario?: boolean
    fecha_venta?: boolean
    total?: boolean
    id_metodoPago?: boolean
    id_comprobante?: boolean
    estado?: boolean
    metodo_entrega?: boolean
    direccion_entrega?: boolean
    referencia_entrega?: boolean
    repartidor?: boolean
    telefono_repartidor?: boolean
    tiempo_estimado_min?: boolean
    entregado_en?: boolean
    detalleventa?: boolean | ventas$detalleventaArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    metodopago?: boolean | metodopagoDefaultArgs<ExtArgs>
    comprobante?: boolean | comprobanteDefaultArgs<ExtArgs>
    _count?: boolean | VentasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ventas"]>



  export type ventasSelectScalar = {
    id_venta?: boolean
    id_usuario?: boolean
    fecha_venta?: boolean
    total?: boolean
    id_metodoPago?: boolean
    id_comprobante?: boolean
    estado?: boolean
    metodo_entrega?: boolean
    direccion_entrega?: boolean
    referencia_entrega?: boolean
    repartidor?: boolean
    telefono_repartidor?: boolean
    tiempo_estimado_min?: boolean
    entregado_en?: boolean
  }

  export type ventasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_venta" | "id_usuario" | "fecha_venta" | "total" | "id_metodoPago" | "id_comprobante" | "estado" | "metodo_entrega" | "direccion_entrega" | "referencia_entrega" | "repartidor" | "telefono_repartidor" | "tiempo_estimado_min" | "entregado_en", ExtArgs["result"]["ventas"]>
  export type ventasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalleventa?: boolean | ventas$detalleventaArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    metodopago?: boolean | metodopagoDefaultArgs<ExtArgs>
    comprobante?: boolean | comprobanteDefaultArgs<ExtArgs>
    _count?: boolean | VentasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ventasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ventas"
    objects: {
      detalleventa: Prisma.$detalleventaPayload<ExtArgs>[]
      usuarios: Prisma.$usuariosPayload<ExtArgs>
      metodopago: Prisma.$metodopagoPayload<ExtArgs>
      comprobante: Prisma.$comprobantePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_venta: number
      id_usuario: number
      fecha_venta: Date
      total: Prisma.Decimal
      id_metodoPago: number
      id_comprobante: number
      estado: string | null
      metodo_entrega: string | null
      direccion_entrega: string | null
      referencia_entrega: string | null
      repartidor: string | null
      telefono_repartidor: string | null
      tiempo_estimado_min: number | null
      entregado_en: Date | null
    }, ExtArgs["result"]["ventas"]>
    composites: {}
  }

  type ventasGetPayload<S extends boolean | null | undefined | ventasDefaultArgs> = $Result.GetResult<Prisma.$ventasPayload, S>

  type ventasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ventasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VentasCountAggregateInputType | true
    }

  export interface ventasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ventas'], meta: { name: 'ventas' } }
    /**
     * Find zero or one Ventas that matches the filter.
     * @param {ventasFindUniqueArgs} args - Arguments to find a Ventas
     * @example
     * // Get one Ventas
     * const ventas = await prisma.ventas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ventasFindUniqueArgs>(args: SelectSubset<T, ventasFindUniqueArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ventas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ventasFindUniqueOrThrowArgs} args - Arguments to find a Ventas
     * @example
     * // Get one Ventas
     * const ventas = await prisma.ventas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ventasFindUniqueOrThrowArgs>(args: SelectSubset<T, ventasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventasFindFirstArgs} args - Arguments to find a Ventas
     * @example
     * // Get one Ventas
     * const ventas = await prisma.ventas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ventasFindFirstArgs>(args?: SelectSubset<T, ventasFindFirstArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ventas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventasFindFirstOrThrowArgs} args - Arguments to find a Ventas
     * @example
     * // Get one Ventas
     * const ventas = await prisma.ventas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ventasFindFirstOrThrowArgs>(args?: SelectSubset<T, ventasFindFirstOrThrowArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ventas
     * const ventas = await prisma.ventas.findMany()
     * 
     * // Get first 10 Ventas
     * const ventas = await prisma.ventas.findMany({ take: 10 })
     * 
     * // Only select the `id_venta`
     * const ventasWithId_ventaOnly = await prisma.ventas.findMany({ select: { id_venta: true } })
     * 
     */
    findMany<T extends ventasFindManyArgs>(args?: SelectSubset<T, ventasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ventas.
     * @param {ventasCreateArgs} args - Arguments to create a Ventas.
     * @example
     * // Create one Ventas
     * const Ventas = await prisma.ventas.create({
     *   data: {
     *     // ... data to create a Ventas
     *   }
     * })
     * 
     */
    create<T extends ventasCreateArgs>(args: SelectSubset<T, ventasCreateArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ventas.
     * @param {ventasCreateManyArgs} args - Arguments to create many Ventas.
     * @example
     * // Create many Ventas
     * const ventas = await prisma.ventas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ventasCreateManyArgs>(args?: SelectSubset<T, ventasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ventas.
     * @param {ventasDeleteArgs} args - Arguments to delete one Ventas.
     * @example
     * // Delete one Ventas
     * const Ventas = await prisma.ventas.delete({
     *   where: {
     *     // ... filter to delete one Ventas
     *   }
     * })
     * 
     */
    delete<T extends ventasDeleteArgs>(args: SelectSubset<T, ventasDeleteArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ventas.
     * @param {ventasUpdateArgs} args - Arguments to update one Ventas.
     * @example
     * // Update one Ventas
     * const ventas = await prisma.ventas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ventasUpdateArgs>(args: SelectSubset<T, ventasUpdateArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ventas.
     * @param {ventasDeleteManyArgs} args - Arguments to filter Ventas to delete.
     * @example
     * // Delete a few Ventas
     * const { count } = await prisma.ventas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ventasDeleteManyArgs>(args?: SelectSubset<T, ventasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ventas
     * const ventas = await prisma.ventas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ventasUpdateManyArgs>(args: SelectSubset<T, ventasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ventas.
     * @param {ventasUpsertArgs} args - Arguments to update or create a Ventas.
     * @example
     * // Update or create a Ventas
     * const ventas = await prisma.ventas.upsert({
     *   create: {
     *     // ... data to create a Ventas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ventas we want to update
     *   }
     * })
     */
    upsert<T extends ventasUpsertArgs>(args: SelectSubset<T, ventasUpsertArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventasCountArgs} args - Arguments to filter Ventas to count.
     * @example
     * // Count the number of Ventas
     * const count = await prisma.ventas.count({
     *   where: {
     *     // ... the filter for the Ventas we want to count
     *   }
     * })
    **/
    count<T extends ventasCountArgs>(
      args?: Subset<T, ventasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VentasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VentasAggregateArgs>(args: Subset<T, VentasAggregateArgs>): Prisma.PrismaPromise<GetVentasAggregateType<T>>

    /**
     * Group by Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventasGroupByArgs} args - Group by arguments.
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
      T extends ventasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ventasGroupByArgs['orderBy'] }
        : { orderBy?: ventasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ventasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVentasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ventas model
   */
  readonly fields: ventasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ventas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ventasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detalleventa<T extends ventas$detalleventaArgs<ExtArgs> = {}>(args?: Subset<T, ventas$detalleventaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalleventaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    metodopago<T extends metodopagoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, metodopagoDefaultArgs<ExtArgs>>): Prisma__metodopagoClient<$Result.GetResult<Prisma.$metodopagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comprobante<T extends comprobanteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, comprobanteDefaultArgs<ExtArgs>>): Prisma__comprobanteClient<$Result.GetResult<Prisma.$comprobantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ventas model
   */
  interface ventasFieldRefs {
    readonly id_venta: FieldRef<"ventas", 'Int'>
    readonly id_usuario: FieldRef<"ventas", 'Int'>
    readonly fecha_venta: FieldRef<"ventas", 'DateTime'>
    readonly total: FieldRef<"ventas", 'Decimal'>
    readonly id_metodoPago: FieldRef<"ventas", 'Int'>
    readonly id_comprobante: FieldRef<"ventas", 'Int'>
    readonly estado: FieldRef<"ventas", 'String'>
    readonly metodo_entrega: FieldRef<"ventas", 'String'>
    readonly direccion_entrega: FieldRef<"ventas", 'String'>
    readonly referencia_entrega: FieldRef<"ventas", 'String'>
    readonly repartidor: FieldRef<"ventas", 'String'>
    readonly telefono_repartidor: FieldRef<"ventas", 'String'>
    readonly tiempo_estimado_min: FieldRef<"ventas", 'Int'>
    readonly entregado_en: FieldRef<"ventas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ventas findUnique
   */
  export type ventasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * Filter, which ventas to fetch.
     */
    where: ventasWhereUniqueInput
  }

  /**
   * ventas findUniqueOrThrow
   */
  export type ventasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * Filter, which ventas to fetch.
     */
    where: ventasWhereUniqueInput
  }

  /**
   * ventas findFirst
   */
  export type ventasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * Filter, which ventas to fetch.
     */
    where?: ventasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ventas to fetch.
     */
    orderBy?: ventasOrderByWithRelationInput | ventasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ventas.
     */
    cursor?: ventasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ventas.
     */
    distinct?: VentasScalarFieldEnum | VentasScalarFieldEnum[]
  }

  /**
   * ventas findFirstOrThrow
   */
  export type ventasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * Filter, which ventas to fetch.
     */
    where?: ventasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ventas to fetch.
     */
    orderBy?: ventasOrderByWithRelationInput | ventasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ventas.
     */
    cursor?: ventasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ventas.
     */
    distinct?: VentasScalarFieldEnum | VentasScalarFieldEnum[]
  }

  /**
   * ventas findMany
   */
  export type ventasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * Filter, which ventas to fetch.
     */
    where?: ventasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ventas to fetch.
     */
    orderBy?: ventasOrderByWithRelationInput | ventasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ventas.
     */
    cursor?: ventasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ventas.
     */
    skip?: number
    distinct?: VentasScalarFieldEnum | VentasScalarFieldEnum[]
  }

  /**
   * ventas create
   */
  export type ventasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * The data needed to create a ventas.
     */
    data: XOR<ventasCreateInput, ventasUncheckedCreateInput>
  }

  /**
   * ventas createMany
   */
  export type ventasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ventas.
     */
    data: ventasCreateManyInput | ventasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ventas update
   */
  export type ventasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * The data needed to update a ventas.
     */
    data: XOR<ventasUpdateInput, ventasUncheckedUpdateInput>
    /**
     * Choose, which ventas to update.
     */
    where: ventasWhereUniqueInput
  }

  /**
   * ventas updateMany
   */
  export type ventasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ventas.
     */
    data: XOR<ventasUpdateManyMutationInput, ventasUncheckedUpdateManyInput>
    /**
     * Filter which ventas to update
     */
    where?: ventasWhereInput
    /**
     * Limit how many ventas to update.
     */
    limit?: number
  }

  /**
   * ventas upsert
   */
  export type ventasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * The filter to search for the ventas to update in case it exists.
     */
    where: ventasWhereUniqueInput
    /**
     * In case the ventas found by the `where` argument doesn't exist, create a new ventas with this data.
     */
    create: XOR<ventasCreateInput, ventasUncheckedCreateInput>
    /**
     * In case the ventas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ventasUpdateInput, ventasUncheckedUpdateInput>
  }

  /**
   * ventas delete
   */
  export type ventasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * Filter which ventas to delete.
     */
    where: ventasWhereUniqueInput
  }

  /**
   * ventas deleteMany
   */
  export type ventasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ventas to delete
     */
    where?: ventasWhereInput
    /**
     * Limit how many ventas to delete.
     */
    limit?: number
  }

  /**
   * ventas.detalleventa
   */
  export type ventas$detalleventaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalleventa
     */
    select?: detalleventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalleventa
     */
    omit?: detalleventaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalleventaInclude<ExtArgs> | null
    where?: detalleventaWhereInput
    orderBy?: detalleventaOrderByWithRelationInput | detalleventaOrderByWithRelationInput[]
    cursor?: detalleventaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleventaScalarFieldEnum | DetalleventaScalarFieldEnum[]
  }

  /**
   * ventas without action
   */
  export type ventasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
  }


  /**
   * Model alergenoproducto
   */

  export type AggregateAlergenoproducto = {
    _count: AlergenoproductoCountAggregateOutputType | null
    _avg: AlergenoproductoAvgAggregateOutputType | null
    _sum: AlergenoproductoSumAggregateOutputType | null
    _min: AlergenoproductoMinAggregateOutputType | null
    _max: AlergenoproductoMaxAggregateOutputType | null
  }

  export type AlergenoproductoAvgAggregateOutputType = {
    id_alergeno: number | null
    id_producto: number | null
  }

  export type AlergenoproductoSumAggregateOutputType = {
    id_alergeno: number | null
    id_producto: number | null
  }

  export type AlergenoproductoMinAggregateOutputType = {
    id_alergeno: number | null
    id_producto: number | null
    nombre: string | null
  }

  export type AlergenoproductoMaxAggregateOutputType = {
    id_alergeno: number | null
    id_producto: number | null
    nombre: string | null
  }

  export type AlergenoproductoCountAggregateOutputType = {
    id_alergeno: number
    id_producto: number
    nombre: number
    _all: number
  }


  export type AlergenoproductoAvgAggregateInputType = {
    id_alergeno?: true
    id_producto?: true
  }

  export type AlergenoproductoSumAggregateInputType = {
    id_alergeno?: true
    id_producto?: true
  }

  export type AlergenoproductoMinAggregateInputType = {
    id_alergeno?: true
    id_producto?: true
    nombre?: true
  }

  export type AlergenoproductoMaxAggregateInputType = {
    id_alergeno?: true
    id_producto?: true
    nombre?: true
  }

  export type AlergenoproductoCountAggregateInputType = {
    id_alergeno?: true
    id_producto?: true
    nombre?: true
    _all?: true
  }

  export type AlergenoproductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alergenoproducto to aggregate.
     */
    where?: alergenoproductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alergenoproductos to fetch.
     */
    orderBy?: alergenoproductoOrderByWithRelationInput | alergenoproductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: alergenoproductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alergenoproductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alergenoproductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned alergenoproductos
    **/
    _count?: true | AlergenoproductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlergenoproductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlergenoproductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlergenoproductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlergenoproductoMaxAggregateInputType
  }

  export type GetAlergenoproductoAggregateType<T extends AlergenoproductoAggregateArgs> = {
        [P in keyof T & keyof AggregateAlergenoproducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlergenoproducto[P]>
      : GetScalarType<T[P], AggregateAlergenoproducto[P]>
  }




  export type alergenoproductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alergenoproductoWhereInput
    orderBy?: alergenoproductoOrderByWithAggregationInput | alergenoproductoOrderByWithAggregationInput[]
    by: AlergenoproductoScalarFieldEnum[] | AlergenoproductoScalarFieldEnum
    having?: alergenoproductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlergenoproductoCountAggregateInputType | true
    _avg?: AlergenoproductoAvgAggregateInputType
    _sum?: AlergenoproductoSumAggregateInputType
    _min?: AlergenoproductoMinAggregateInputType
    _max?: AlergenoproductoMaxAggregateInputType
  }

  export type AlergenoproductoGroupByOutputType = {
    id_alergeno: number
    id_producto: number
    nombre: string
    _count: AlergenoproductoCountAggregateOutputType | null
    _avg: AlergenoproductoAvgAggregateOutputType | null
    _sum: AlergenoproductoSumAggregateOutputType | null
    _min: AlergenoproductoMinAggregateOutputType | null
    _max: AlergenoproductoMaxAggregateOutputType | null
  }

  type GetAlergenoproductoGroupByPayload<T extends alergenoproductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlergenoproductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlergenoproductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlergenoproductoGroupByOutputType[P]>
            : GetScalarType<T[P], AlergenoproductoGroupByOutputType[P]>
        }
      >
    >


  export type alergenoproductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_alergeno?: boolean
    id_producto?: boolean
    nombre?: boolean
    productos?: boolean | productosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alergenoproducto"]>



  export type alergenoproductoSelectScalar = {
    id_alergeno?: boolean
    id_producto?: boolean
    nombre?: boolean
  }

  export type alergenoproductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_alergeno" | "id_producto" | "nombre", ExtArgs["result"]["alergenoproducto"]>
  export type alergenoproductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | productosDefaultArgs<ExtArgs>
  }

  export type $alergenoproductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "alergenoproducto"
    objects: {
      productos: Prisma.$productosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_alergeno: number
      id_producto: number
      nombre: string
    }, ExtArgs["result"]["alergenoproducto"]>
    composites: {}
  }

  type alergenoproductoGetPayload<S extends boolean | null | undefined | alergenoproductoDefaultArgs> = $Result.GetResult<Prisma.$alergenoproductoPayload, S>

  type alergenoproductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<alergenoproductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlergenoproductoCountAggregateInputType | true
    }

  export interface alergenoproductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['alergenoproducto'], meta: { name: 'alergenoproducto' } }
    /**
     * Find zero or one Alergenoproducto that matches the filter.
     * @param {alergenoproductoFindUniqueArgs} args - Arguments to find a Alergenoproducto
     * @example
     * // Get one Alergenoproducto
     * const alergenoproducto = await prisma.alergenoproducto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends alergenoproductoFindUniqueArgs>(args: SelectSubset<T, alergenoproductoFindUniqueArgs<ExtArgs>>): Prisma__alergenoproductoClient<$Result.GetResult<Prisma.$alergenoproductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alergenoproducto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {alergenoproductoFindUniqueOrThrowArgs} args - Arguments to find a Alergenoproducto
     * @example
     * // Get one Alergenoproducto
     * const alergenoproducto = await prisma.alergenoproducto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends alergenoproductoFindUniqueOrThrowArgs>(args: SelectSubset<T, alergenoproductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__alergenoproductoClient<$Result.GetResult<Prisma.$alergenoproductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alergenoproducto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alergenoproductoFindFirstArgs} args - Arguments to find a Alergenoproducto
     * @example
     * // Get one Alergenoproducto
     * const alergenoproducto = await prisma.alergenoproducto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends alergenoproductoFindFirstArgs>(args?: SelectSubset<T, alergenoproductoFindFirstArgs<ExtArgs>>): Prisma__alergenoproductoClient<$Result.GetResult<Prisma.$alergenoproductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alergenoproducto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alergenoproductoFindFirstOrThrowArgs} args - Arguments to find a Alergenoproducto
     * @example
     * // Get one Alergenoproducto
     * const alergenoproducto = await prisma.alergenoproducto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends alergenoproductoFindFirstOrThrowArgs>(args?: SelectSubset<T, alergenoproductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__alergenoproductoClient<$Result.GetResult<Prisma.$alergenoproductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alergenoproductos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alergenoproductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alergenoproductos
     * const alergenoproductos = await prisma.alergenoproducto.findMany()
     * 
     * // Get first 10 Alergenoproductos
     * const alergenoproductos = await prisma.alergenoproducto.findMany({ take: 10 })
     * 
     * // Only select the `id_alergeno`
     * const alergenoproductoWithId_alergenoOnly = await prisma.alergenoproducto.findMany({ select: { id_alergeno: true } })
     * 
     */
    findMany<T extends alergenoproductoFindManyArgs>(args?: SelectSubset<T, alergenoproductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alergenoproductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alergenoproducto.
     * @param {alergenoproductoCreateArgs} args - Arguments to create a Alergenoproducto.
     * @example
     * // Create one Alergenoproducto
     * const Alergenoproducto = await prisma.alergenoproducto.create({
     *   data: {
     *     // ... data to create a Alergenoproducto
     *   }
     * })
     * 
     */
    create<T extends alergenoproductoCreateArgs>(args: SelectSubset<T, alergenoproductoCreateArgs<ExtArgs>>): Prisma__alergenoproductoClient<$Result.GetResult<Prisma.$alergenoproductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alergenoproductos.
     * @param {alergenoproductoCreateManyArgs} args - Arguments to create many Alergenoproductos.
     * @example
     * // Create many Alergenoproductos
     * const alergenoproducto = await prisma.alergenoproducto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends alergenoproductoCreateManyArgs>(args?: SelectSubset<T, alergenoproductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Alergenoproducto.
     * @param {alergenoproductoDeleteArgs} args - Arguments to delete one Alergenoproducto.
     * @example
     * // Delete one Alergenoproducto
     * const Alergenoproducto = await prisma.alergenoproducto.delete({
     *   where: {
     *     // ... filter to delete one Alergenoproducto
     *   }
     * })
     * 
     */
    delete<T extends alergenoproductoDeleteArgs>(args: SelectSubset<T, alergenoproductoDeleteArgs<ExtArgs>>): Prisma__alergenoproductoClient<$Result.GetResult<Prisma.$alergenoproductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alergenoproducto.
     * @param {alergenoproductoUpdateArgs} args - Arguments to update one Alergenoproducto.
     * @example
     * // Update one Alergenoproducto
     * const alergenoproducto = await prisma.alergenoproducto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends alergenoproductoUpdateArgs>(args: SelectSubset<T, alergenoproductoUpdateArgs<ExtArgs>>): Prisma__alergenoproductoClient<$Result.GetResult<Prisma.$alergenoproductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alergenoproductos.
     * @param {alergenoproductoDeleteManyArgs} args - Arguments to filter Alergenoproductos to delete.
     * @example
     * // Delete a few Alergenoproductos
     * const { count } = await prisma.alergenoproducto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends alergenoproductoDeleteManyArgs>(args?: SelectSubset<T, alergenoproductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alergenoproductos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alergenoproductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alergenoproductos
     * const alergenoproducto = await prisma.alergenoproducto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends alergenoproductoUpdateManyArgs>(args: SelectSubset<T, alergenoproductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alergenoproducto.
     * @param {alergenoproductoUpsertArgs} args - Arguments to update or create a Alergenoproducto.
     * @example
     * // Update or create a Alergenoproducto
     * const alergenoproducto = await prisma.alergenoproducto.upsert({
     *   create: {
     *     // ... data to create a Alergenoproducto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alergenoproducto we want to update
     *   }
     * })
     */
    upsert<T extends alergenoproductoUpsertArgs>(args: SelectSubset<T, alergenoproductoUpsertArgs<ExtArgs>>): Prisma__alergenoproductoClient<$Result.GetResult<Prisma.$alergenoproductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alergenoproductos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alergenoproductoCountArgs} args - Arguments to filter Alergenoproductos to count.
     * @example
     * // Count the number of Alergenoproductos
     * const count = await prisma.alergenoproducto.count({
     *   where: {
     *     // ... the filter for the Alergenoproductos we want to count
     *   }
     * })
    **/
    count<T extends alergenoproductoCountArgs>(
      args?: Subset<T, alergenoproductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlergenoproductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alergenoproducto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlergenoproductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlergenoproductoAggregateArgs>(args: Subset<T, AlergenoproductoAggregateArgs>): Prisma.PrismaPromise<GetAlergenoproductoAggregateType<T>>

    /**
     * Group by Alergenoproducto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alergenoproductoGroupByArgs} args - Group by arguments.
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
      T extends alergenoproductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: alergenoproductoGroupByArgs['orderBy'] }
        : { orderBy?: alergenoproductoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, alergenoproductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlergenoproductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the alergenoproducto model
   */
  readonly fields: alergenoproductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for alergenoproducto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__alergenoproductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends productosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productosDefaultArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the alergenoproducto model
   */
  interface alergenoproductoFieldRefs {
    readonly id_alergeno: FieldRef<"alergenoproducto", 'Int'>
    readonly id_producto: FieldRef<"alergenoproducto", 'Int'>
    readonly nombre: FieldRef<"alergenoproducto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * alergenoproducto findUnique
   */
  export type alergenoproductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alergenoproducto
     */
    select?: alergenoproductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alergenoproducto
     */
    omit?: alergenoproductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alergenoproductoInclude<ExtArgs> | null
    /**
     * Filter, which alergenoproducto to fetch.
     */
    where: alergenoproductoWhereUniqueInput
  }

  /**
   * alergenoproducto findUniqueOrThrow
   */
  export type alergenoproductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alergenoproducto
     */
    select?: alergenoproductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alergenoproducto
     */
    omit?: alergenoproductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alergenoproductoInclude<ExtArgs> | null
    /**
     * Filter, which alergenoproducto to fetch.
     */
    where: alergenoproductoWhereUniqueInput
  }

  /**
   * alergenoproducto findFirst
   */
  export type alergenoproductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alergenoproducto
     */
    select?: alergenoproductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alergenoproducto
     */
    omit?: alergenoproductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alergenoproductoInclude<ExtArgs> | null
    /**
     * Filter, which alergenoproducto to fetch.
     */
    where?: alergenoproductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alergenoproductos to fetch.
     */
    orderBy?: alergenoproductoOrderByWithRelationInput | alergenoproductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alergenoproductos.
     */
    cursor?: alergenoproductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alergenoproductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alergenoproductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alergenoproductos.
     */
    distinct?: AlergenoproductoScalarFieldEnum | AlergenoproductoScalarFieldEnum[]
  }

  /**
   * alergenoproducto findFirstOrThrow
   */
  export type alergenoproductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alergenoproducto
     */
    select?: alergenoproductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alergenoproducto
     */
    omit?: alergenoproductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alergenoproductoInclude<ExtArgs> | null
    /**
     * Filter, which alergenoproducto to fetch.
     */
    where?: alergenoproductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alergenoproductos to fetch.
     */
    orderBy?: alergenoproductoOrderByWithRelationInput | alergenoproductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alergenoproductos.
     */
    cursor?: alergenoproductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alergenoproductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alergenoproductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alergenoproductos.
     */
    distinct?: AlergenoproductoScalarFieldEnum | AlergenoproductoScalarFieldEnum[]
  }

  /**
   * alergenoproducto findMany
   */
  export type alergenoproductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alergenoproducto
     */
    select?: alergenoproductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alergenoproducto
     */
    omit?: alergenoproductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alergenoproductoInclude<ExtArgs> | null
    /**
     * Filter, which alergenoproductos to fetch.
     */
    where?: alergenoproductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alergenoproductos to fetch.
     */
    orderBy?: alergenoproductoOrderByWithRelationInput | alergenoproductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing alergenoproductos.
     */
    cursor?: alergenoproductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alergenoproductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alergenoproductos.
     */
    skip?: number
    distinct?: AlergenoproductoScalarFieldEnum | AlergenoproductoScalarFieldEnum[]
  }

  /**
   * alergenoproducto create
   */
  export type alergenoproductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alergenoproducto
     */
    select?: alergenoproductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alergenoproducto
     */
    omit?: alergenoproductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alergenoproductoInclude<ExtArgs> | null
    /**
     * The data needed to create a alergenoproducto.
     */
    data: XOR<alergenoproductoCreateInput, alergenoproductoUncheckedCreateInput>
  }

  /**
   * alergenoproducto createMany
   */
  export type alergenoproductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many alergenoproductos.
     */
    data: alergenoproductoCreateManyInput | alergenoproductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * alergenoproducto update
   */
  export type alergenoproductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alergenoproducto
     */
    select?: alergenoproductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alergenoproducto
     */
    omit?: alergenoproductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alergenoproductoInclude<ExtArgs> | null
    /**
     * The data needed to update a alergenoproducto.
     */
    data: XOR<alergenoproductoUpdateInput, alergenoproductoUncheckedUpdateInput>
    /**
     * Choose, which alergenoproducto to update.
     */
    where: alergenoproductoWhereUniqueInput
  }

  /**
   * alergenoproducto updateMany
   */
  export type alergenoproductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update alergenoproductos.
     */
    data: XOR<alergenoproductoUpdateManyMutationInput, alergenoproductoUncheckedUpdateManyInput>
    /**
     * Filter which alergenoproductos to update
     */
    where?: alergenoproductoWhereInput
    /**
     * Limit how many alergenoproductos to update.
     */
    limit?: number
  }

  /**
   * alergenoproducto upsert
   */
  export type alergenoproductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alergenoproducto
     */
    select?: alergenoproductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alergenoproducto
     */
    omit?: alergenoproductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alergenoproductoInclude<ExtArgs> | null
    /**
     * The filter to search for the alergenoproducto to update in case it exists.
     */
    where: alergenoproductoWhereUniqueInput
    /**
     * In case the alergenoproducto found by the `where` argument doesn't exist, create a new alergenoproducto with this data.
     */
    create: XOR<alergenoproductoCreateInput, alergenoproductoUncheckedCreateInput>
    /**
     * In case the alergenoproducto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<alergenoproductoUpdateInput, alergenoproductoUncheckedUpdateInput>
  }

  /**
   * alergenoproducto delete
   */
  export type alergenoproductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alergenoproducto
     */
    select?: alergenoproductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alergenoproducto
     */
    omit?: alergenoproductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alergenoproductoInclude<ExtArgs> | null
    /**
     * Filter which alergenoproducto to delete.
     */
    where: alergenoproductoWhereUniqueInput
  }

  /**
   * alergenoproducto deleteMany
   */
  export type alergenoproductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alergenoproductos to delete
     */
    where?: alergenoproductoWhereInput
    /**
     * Limit how many alergenoproductos to delete.
     */
    limit?: number
  }

  /**
   * alergenoproducto without action
   */
  export type alergenoproductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alergenoproducto
     */
    select?: alergenoproductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alergenoproducto
     */
    omit?: alergenoproductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alergenoproductoInclude<ExtArgs> | null
  }


  /**
   * Model ingredienteproducto
   */

  export type AggregateIngredienteproducto = {
    _count: IngredienteproductoCountAggregateOutputType | null
    _avg: IngredienteproductoAvgAggregateOutputType | null
    _sum: IngredienteproductoSumAggregateOutputType | null
    _min: IngredienteproductoMinAggregateOutputType | null
    _max: IngredienteproductoMaxAggregateOutputType | null
  }

  export type IngredienteproductoAvgAggregateOutputType = {
    id_ingrediente: number | null
    id_producto: number | null
  }

  export type IngredienteproductoSumAggregateOutputType = {
    id_ingrediente: number | null
    id_producto: number | null
  }

  export type IngredienteproductoMinAggregateOutputType = {
    id_ingrediente: number | null
    id_producto: number | null
    nombre: string | null
  }

  export type IngredienteproductoMaxAggregateOutputType = {
    id_ingrediente: number | null
    id_producto: number | null
    nombre: string | null
  }

  export type IngredienteproductoCountAggregateOutputType = {
    id_ingrediente: number
    id_producto: number
    nombre: number
    _all: number
  }


  export type IngredienteproductoAvgAggregateInputType = {
    id_ingrediente?: true
    id_producto?: true
  }

  export type IngredienteproductoSumAggregateInputType = {
    id_ingrediente?: true
    id_producto?: true
  }

  export type IngredienteproductoMinAggregateInputType = {
    id_ingrediente?: true
    id_producto?: true
    nombre?: true
  }

  export type IngredienteproductoMaxAggregateInputType = {
    id_ingrediente?: true
    id_producto?: true
    nombre?: true
  }

  export type IngredienteproductoCountAggregateInputType = {
    id_ingrediente?: true
    id_producto?: true
    nombre?: true
    _all?: true
  }

  export type IngredienteproductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ingredienteproducto to aggregate.
     */
    where?: ingredienteproductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredienteproductos to fetch.
     */
    orderBy?: ingredienteproductoOrderByWithRelationInput | ingredienteproductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ingredienteproductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredienteproductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredienteproductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ingredienteproductos
    **/
    _count?: true | IngredienteproductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredienteproductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredienteproductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredienteproductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredienteproductoMaxAggregateInputType
  }

  export type GetIngredienteproductoAggregateType<T extends IngredienteproductoAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredienteproducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredienteproducto[P]>
      : GetScalarType<T[P], AggregateIngredienteproducto[P]>
  }




  export type ingredienteproductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ingredienteproductoWhereInput
    orderBy?: ingredienteproductoOrderByWithAggregationInput | ingredienteproductoOrderByWithAggregationInput[]
    by: IngredienteproductoScalarFieldEnum[] | IngredienteproductoScalarFieldEnum
    having?: ingredienteproductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredienteproductoCountAggregateInputType | true
    _avg?: IngredienteproductoAvgAggregateInputType
    _sum?: IngredienteproductoSumAggregateInputType
    _min?: IngredienteproductoMinAggregateInputType
    _max?: IngredienteproductoMaxAggregateInputType
  }

  export type IngredienteproductoGroupByOutputType = {
    id_ingrediente: number
    id_producto: number
    nombre: string
    _count: IngredienteproductoCountAggregateOutputType | null
    _avg: IngredienteproductoAvgAggregateOutputType | null
    _sum: IngredienteproductoSumAggregateOutputType | null
    _min: IngredienteproductoMinAggregateOutputType | null
    _max: IngredienteproductoMaxAggregateOutputType | null
  }

  type GetIngredienteproductoGroupByPayload<T extends ingredienteproductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredienteproductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredienteproductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredienteproductoGroupByOutputType[P]>
            : GetScalarType<T[P], IngredienteproductoGroupByOutputType[P]>
        }
      >
    >


  export type ingredienteproductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ingrediente?: boolean
    id_producto?: boolean
    nombre?: boolean
    productos?: boolean | productosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredienteproducto"]>



  export type ingredienteproductoSelectScalar = {
    id_ingrediente?: boolean
    id_producto?: boolean
    nombre?: boolean
  }

  export type ingredienteproductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_ingrediente" | "id_producto" | "nombre", ExtArgs["result"]["ingredienteproducto"]>
  export type ingredienteproductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | productosDefaultArgs<ExtArgs>
  }

  export type $ingredienteproductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ingredienteproducto"
    objects: {
      productos: Prisma.$productosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_ingrediente: number
      id_producto: number
      nombre: string
    }, ExtArgs["result"]["ingredienteproducto"]>
    composites: {}
  }

  type ingredienteproductoGetPayload<S extends boolean | null | undefined | ingredienteproductoDefaultArgs> = $Result.GetResult<Prisma.$ingredienteproductoPayload, S>

  type ingredienteproductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ingredienteproductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredienteproductoCountAggregateInputType | true
    }

  export interface ingredienteproductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ingredienteproducto'], meta: { name: 'ingredienteproducto' } }
    /**
     * Find zero or one Ingredienteproducto that matches the filter.
     * @param {ingredienteproductoFindUniqueArgs} args - Arguments to find a Ingredienteproducto
     * @example
     * // Get one Ingredienteproducto
     * const ingredienteproducto = await prisma.ingredienteproducto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ingredienteproductoFindUniqueArgs>(args: SelectSubset<T, ingredienteproductoFindUniqueArgs<ExtArgs>>): Prisma__ingredienteproductoClient<$Result.GetResult<Prisma.$ingredienteproductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingredienteproducto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ingredienteproductoFindUniqueOrThrowArgs} args - Arguments to find a Ingredienteproducto
     * @example
     * // Get one Ingredienteproducto
     * const ingredienteproducto = await prisma.ingredienteproducto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ingredienteproductoFindUniqueOrThrowArgs>(args: SelectSubset<T, ingredienteproductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ingredienteproductoClient<$Result.GetResult<Prisma.$ingredienteproductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredienteproducto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredienteproductoFindFirstArgs} args - Arguments to find a Ingredienteproducto
     * @example
     * // Get one Ingredienteproducto
     * const ingredienteproducto = await prisma.ingredienteproducto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ingredienteproductoFindFirstArgs>(args?: SelectSubset<T, ingredienteproductoFindFirstArgs<ExtArgs>>): Prisma__ingredienteproductoClient<$Result.GetResult<Prisma.$ingredienteproductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredienteproducto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredienteproductoFindFirstOrThrowArgs} args - Arguments to find a Ingredienteproducto
     * @example
     * // Get one Ingredienteproducto
     * const ingredienteproducto = await prisma.ingredienteproducto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ingredienteproductoFindFirstOrThrowArgs>(args?: SelectSubset<T, ingredienteproductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ingredienteproductoClient<$Result.GetResult<Prisma.$ingredienteproductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredienteproductos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredienteproductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredienteproductos
     * const ingredienteproductos = await prisma.ingredienteproducto.findMany()
     * 
     * // Get first 10 Ingredienteproductos
     * const ingredienteproductos = await prisma.ingredienteproducto.findMany({ take: 10 })
     * 
     * // Only select the `id_ingrediente`
     * const ingredienteproductoWithId_ingredienteOnly = await prisma.ingredienteproducto.findMany({ select: { id_ingrediente: true } })
     * 
     */
    findMany<T extends ingredienteproductoFindManyArgs>(args?: SelectSubset<T, ingredienteproductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingredienteproductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingredienteproducto.
     * @param {ingredienteproductoCreateArgs} args - Arguments to create a Ingredienteproducto.
     * @example
     * // Create one Ingredienteproducto
     * const Ingredienteproducto = await prisma.ingredienteproducto.create({
     *   data: {
     *     // ... data to create a Ingredienteproducto
     *   }
     * })
     * 
     */
    create<T extends ingredienteproductoCreateArgs>(args: SelectSubset<T, ingredienteproductoCreateArgs<ExtArgs>>): Prisma__ingredienteproductoClient<$Result.GetResult<Prisma.$ingredienteproductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredienteproductos.
     * @param {ingredienteproductoCreateManyArgs} args - Arguments to create many Ingredienteproductos.
     * @example
     * // Create many Ingredienteproductos
     * const ingredienteproducto = await prisma.ingredienteproducto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ingredienteproductoCreateManyArgs>(args?: SelectSubset<T, ingredienteproductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ingredienteproducto.
     * @param {ingredienteproductoDeleteArgs} args - Arguments to delete one Ingredienteproducto.
     * @example
     * // Delete one Ingredienteproducto
     * const Ingredienteproducto = await prisma.ingredienteproducto.delete({
     *   where: {
     *     // ... filter to delete one Ingredienteproducto
     *   }
     * })
     * 
     */
    delete<T extends ingredienteproductoDeleteArgs>(args: SelectSubset<T, ingredienteproductoDeleteArgs<ExtArgs>>): Prisma__ingredienteproductoClient<$Result.GetResult<Prisma.$ingredienteproductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingredienteproducto.
     * @param {ingredienteproductoUpdateArgs} args - Arguments to update one Ingredienteproducto.
     * @example
     * // Update one Ingredienteproducto
     * const ingredienteproducto = await prisma.ingredienteproducto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ingredienteproductoUpdateArgs>(args: SelectSubset<T, ingredienteproductoUpdateArgs<ExtArgs>>): Prisma__ingredienteproductoClient<$Result.GetResult<Prisma.$ingredienteproductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredienteproductos.
     * @param {ingredienteproductoDeleteManyArgs} args - Arguments to filter Ingredienteproductos to delete.
     * @example
     * // Delete a few Ingredienteproductos
     * const { count } = await prisma.ingredienteproducto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ingredienteproductoDeleteManyArgs>(args?: SelectSubset<T, ingredienteproductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredienteproductos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredienteproductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredienteproductos
     * const ingredienteproducto = await prisma.ingredienteproducto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ingredienteproductoUpdateManyArgs>(args: SelectSubset<T, ingredienteproductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ingredienteproducto.
     * @param {ingredienteproductoUpsertArgs} args - Arguments to update or create a Ingredienteproducto.
     * @example
     * // Update or create a Ingredienteproducto
     * const ingredienteproducto = await prisma.ingredienteproducto.upsert({
     *   create: {
     *     // ... data to create a Ingredienteproducto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredienteproducto we want to update
     *   }
     * })
     */
    upsert<T extends ingredienteproductoUpsertArgs>(args: SelectSubset<T, ingredienteproductoUpsertArgs<ExtArgs>>): Prisma__ingredienteproductoClient<$Result.GetResult<Prisma.$ingredienteproductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredienteproductos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredienteproductoCountArgs} args - Arguments to filter Ingredienteproductos to count.
     * @example
     * // Count the number of Ingredienteproductos
     * const count = await prisma.ingredienteproducto.count({
     *   where: {
     *     // ... the filter for the Ingredienteproductos we want to count
     *   }
     * })
    **/
    count<T extends ingredienteproductoCountArgs>(
      args?: Subset<T, ingredienteproductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredienteproductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredienteproducto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteproductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngredienteproductoAggregateArgs>(args: Subset<T, IngredienteproductoAggregateArgs>): Prisma.PrismaPromise<GetIngredienteproductoAggregateType<T>>

    /**
     * Group by Ingredienteproducto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredienteproductoGroupByArgs} args - Group by arguments.
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
      T extends ingredienteproductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ingredienteproductoGroupByArgs['orderBy'] }
        : { orderBy?: ingredienteproductoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ingredienteproductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredienteproductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ingredienteproducto model
   */
  readonly fields: ingredienteproductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ingredienteproducto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ingredienteproductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends productosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productosDefaultArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ingredienteproducto model
   */
  interface ingredienteproductoFieldRefs {
    readonly id_ingrediente: FieldRef<"ingredienteproducto", 'Int'>
    readonly id_producto: FieldRef<"ingredienteproducto", 'Int'>
    readonly nombre: FieldRef<"ingredienteproducto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ingredienteproducto findUnique
   */
  export type ingredienteproductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredienteproducto
     */
    select?: ingredienteproductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredienteproducto
     */
    omit?: ingredienteproductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredienteproductoInclude<ExtArgs> | null
    /**
     * Filter, which ingredienteproducto to fetch.
     */
    where: ingredienteproductoWhereUniqueInput
  }

  /**
   * ingredienteproducto findUniqueOrThrow
   */
  export type ingredienteproductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredienteproducto
     */
    select?: ingredienteproductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredienteproducto
     */
    omit?: ingredienteproductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredienteproductoInclude<ExtArgs> | null
    /**
     * Filter, which ingredienteproducto to fetch.
     */
    where: ingredienteproductoWhereUniqueInput
  }

  /**
   * ingredienteproducto findFirst
   */
  export type ingredienteproductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredienteproducto
     */
    select?: ingredienteproductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredienteproducto
     */
    omit?: ingredienteproductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredienteproductoInclude<ExtArgs> | null
    /**
     * Filter, which ingredienteproducto to fetch.
     */
    where?: ingredienteproductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredienteproductos to fetch.
     */
    orderBy?: ingredienteproductoOrderByWithRelationInput | ingredienteproductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ingredienteproductos.
     */
    cursor?: ingredienteproductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredienteproductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredienteproductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ingredienteproductos.
     */
    distinct?: IngredienteproductoScalarFieldEnum | IngredienteproductoScalarFieldEnum[]
  }

  /**
   * ingredienteproducto findFirstOrThrow
   */
  export type ingredienteproductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredienteproducto
     */
    select?: ingredienteproductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredienteproducto
     */
    omit?: ingredienteproductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredienteproductoInclude<ExtArgs> | null
    /**
     * Filter, which ingredienteproducto to fetch.
     */
    where?: ingredienteproductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredienteproductos to fetch.
     */
    orderBy?: ingredienteproductoOrderByWithRelationInput | ingredienteproductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ingredienteproductos.
     */
    cursor?: ingredienteproductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredienteproductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredienteproductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ingredienteproductos.
     */
    distinct?: IngredienteproductoScalarFieldEnum | IngredienteproductoScalarFieldEnum[]
  }

  /**
   * ingredienteproducto findMany
   */
  export type ingredienteproductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredienteproducto
     */
    select?: ingredienteproductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredienteproducto
     */
    omit?: ingredienteproductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredienteproductoInclude<ExtArgs> | null
    /**
     * Filter, which ingredienteproductos to fetch.
     */
    where?: ingredienteproductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredienteproductos to fetch.
     */
    orderBy?: ingredienteproductoOrderByWithRelationInput | ingredienteproductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ingredienteproductos.
     */
    cursor?: ingredienteproductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredienteproductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredienteproductos.
     */
    skip?: number
    distinct?: IngredienteproductoScalarFieldEnum | IngredienteproductoScalarFieldEnum[]
  }

  /**
   * ingredienteproducto create
   */
  export type ingredienteproductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredienteproducto
     */
    select?: ingredienteproductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredienteproducto
     */
    omit?: ingredienteproductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredienteproductoInclude<ExtArgs> | null
    /**
     * The data needed to create a ingredienteproducto.
     */
    data: XOR<ingredienteproductoCreateInput, ingredienteproductoUncheckedCreateInput>
  }

  /**
   * ingredienteproducto createMany
   */
  export type ingredienteproductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ingredienteproductos.
     */
    data: ingredienteproductoCreateManyInput | ingredienteproductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ingredienteproducto update
   */
  export type ingredienteproductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredienteproducto
     */
    select?: ingredienteproductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredienteproducto
     */
    omit?: ingredienteproductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredienteproductoInclude<ExtArgs> | null
    /**
     * The data needed to update a ingredienteproducto.
     */
    data: XOR<ingredienteproductoUpdateInput, ingredienteproductoUncheckedUpdateInput>
    /**
     * Choose, which ingredienteproducto to update.
     */
    where: ingredienteproductoWhereUniqueInput
  }

  /**
   * ingredienteproducto updateMany
   */
  export type ingredienteproductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ingredienteproductos.
     */
    data: XOR<ingredienteproductoUpdateManyMutationInput, ingredienteproductoUncheckedUpdateManyInput>
    /**
     * Filter which ingredienteproductos to update
     */
    where?: ingredienteproductoWhereInput
    /**
     * Limit how many ingredienteproductos to update.
     */
    limit?: number
  }

  /**
   * ingredienteproducto upsert
   */
  export type ingredienteproductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredienteproducto
     */
    select?: ingredienteproductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredienteproducto
     */
    omit?: ingredienteproductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredienteproductoInclude<ExtArgs> | null
    /**
     * The filter to search for the ingredienteproducto to update in case it exists.
     */
    where: ingredienteproductoWhereUniqueInput
    /**
     * In case the ingredienteproducto found by the `where` argument doesn't exist, create a new ingredienteproducto with this data.
     */
    create: XOR<ingredienteproductoCreateInput, ingredienteproductoUncheckedCreateInput>
    /**
     * In case the ingredienteproducto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ingredienteproductoUpdateInput, ingredienteproductoUncheckedUpdateInput>
  }

  /**
   * ingredienteproducto delete
   */
  export type ingredienteproductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredienteproducto
     */
    select?: ingredienteproductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredienteproducto
     */
    omit?: ingredienteproductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredienteproductoInclude<ExtArgs> | null
    /**
     * Filter which ingredienteproducto to delete.
     */
    where: ingredienteproductoWhereUniqueInput
  }

  /**
   * ingredienteproducto deleteMany
   */
  export type ingredienteproductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ingredienteproductos to delete
     */
    where?: ingredienteproductoWhereInput
    /**
     * Limit how many ingredienteproductos to delete.
     */
    limit?: number
  }

  /**
   * ingredienteproducto without action
   */
  export type ingredienteproductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredienteproducto
     */
    select?: ingredienteproductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredienteproducto
     */
    omit?: ingredienteproductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredienteproductoInclude<ExtArgs> | null
  }


  /**
   * Model tickets
   */

  export type AggregateTickets = {
    _count: TicketsCountAggregateOutputType | null
    _avg: TicketsAvgAggregateOutputType | null
    _sum: TicketsSumAggregateOutputType | null
    _min: TicketsMinAggregateOutputType | null
    _max: TicketsMaxAggregateOutputType | null
  }

  export type TicketsAvgAggregateOutputType = {
    id_ticket: number | null
    descuento: Decimal | null
    id_usuario: number | null
  }

  export type TicketsSumAggregateOutputType = {
    id_ticket: number | null
    descuento: Decimal | null
    id_usuario: number | null
  }

  export type TicketsMinAggregateOutputType = {
    id_ticket: number | null
    nombre_ticket: string | null
    codigo_ticket: string | null
    descuento: Decimal | null
    usado: boolean | null
    id_usuario: number | null
  }

  export type TicketsMaxAggregateOutputType = {
    id_ticket: number | null
    nombre_ticket: string | null
    codigo_ticket: string | null
    descuento: Decimal | null
    usado: boolean | null
    id_usuario: number | null
  }

  export type TicketsCountAggregateOutputType = {
    id_ticket: number
    nombre_ticket: number
    codigo_ticket: number
    descuento: number
    usado: number
    id_usuario: number
    _all: number
  }


  export type TicketsAvgAggregateInputType = {
    id_ticket?: true
    descuento?: true
    id_usuario?: true
  }

  export type TicketsSumAggregateInputType = {
    id_ticket?: true
    descuento?: true
    id_usuario?: true
  }

  export type TicketsMinAggregateInputType = {
    id_ticket?: true
    nombre_ticket?: true
    codigo_ticket?: true
    descuento?: true
    usado?: true
    id_usuario?: true
  }

  export type TicketsMaxAggregateInputType = {
    id_ticket?: true
    nombre_ticket?: true
    codigo_ticket?: true
    descuento?: true
    usado?: true
    id_usuario?: true
  }

  export type TicketsCountAggregateInputType = {
    id_ticket?: true
    nombre_ticket?: true
    codigo_ticket?: true
    descuento?: true
    usado?: true
    id_usuario?: true
    _all?: true
  }

  export type TicketsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tickets to aggregate.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tickets
    **/
    _count?: true | TicketsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketsMaxAggregateInputType
  }

  export type GetTicketsAggregateType<T extends TicketsAggregateArgs> = {
        [P in keyof T & keyof AggregateTickets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTickets[P]>
      : GetScalarType<T[P], AggregateTickets[P]>
  }




  export type ticketsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketsWhereInput
    orderBy?: ticketsOrderByWithAggregationInput | ticketsOrderByWithAggregationInput[]
    by: TicketsScalarFieldEnum[] | TicketsScalarFieldEnum
    having?: ticketsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketsCountAggregateInputType | true
    _avg?: TicketsAvgAggregateInputType
    _sum?: TicketsSumAggregateInputType
    _min?: TicketsMinAggregateInputType
    _max?: TicketsMaxAggregateInputType
  }

  export type TicketsGroupByOutputType = {
    id_ticket: number
    nombre_ticket: string
    codigo_ticket: string | null
    descuento: Decimal
    usado: boolean
    id_usuario: number | null
    _count: TicketsCountAggregateOutputType | null
    _avg: TicketsAvgAggregateOutputType | null
    _sum: TicketsSumAggregateOutputType | null
    _min: TicketsMinAggregateOutputType | null
    _max: TicketsMaxAggregateOutputType | null
  }

  type GetTicketsGroupByPayload<T extends ticketsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketsGroupByOutputType[P]>
            : GetScalarType<T[P], TicketsGroupByOutputType[P]>
        }
      >
    >


  export type ticketsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ticket?: boolean
    nombre_ticket?: boolean
    codigo_ticket?: boolean
    descuento?: boolean
    usado?: boolean
    id_usuario?: boolean
    usuarios?: boolean | tickets$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["tickets"]>



  export type ticketsSelectScalar = {
    id_ticket?: boolean
    nombre_ticket?: boolean
    codigo_ticket?: boolean
    descuento?: boolean
    usado?: boolean
    id_usuario?: boolean
  }

  export type ticketsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_ticket" | "nombre_ticket" | "codigo_ticket" | "descuento" | "usado" | "id_usuario", ExtArgs["result"]["tickets"]>
  export type ticketsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | tickets$usuariosArgs<ExtArgs>
  }

  export type $ticketsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tickets"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_ticket: number
      nombre_ticket: string
      codigo_ticket: string | null
      descuento: Prisma.Decimal
      usado: boolean
      id_usuario: number | null
    }, ExtArgs["result"]["tickets"]>
    composites: {}
  }

  type ticketsGetPayload<S extends boolean | null | undefined | ticketsDefaultArgs> = $Result.GetResult<Prisma.$ticketsPayload, S>

  type ticketsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ticketsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketsCountAggregateInputType | true
    }

  export interface ticketsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tickets'], meta: { name: 'tickets' } }
    /**
     * Find zero or one Tickets that matches the filter.
     * @param {ticketsFindUniqueArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ticketsFindUniqueArgs>(args: SelectSubset<T, ticketsFindUniqueArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tickets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ticketsFindUniqueOrThrowArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ticketsFindUniqueOrThrowArgs>(args: SelectSubset<T, ticketsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsFindFirstArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ticketsFindFirstArgs>(args?: SelectSubset<T, ticketsFindFirstArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tickets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsFindFirstOrThrowArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ticketsFindFirstOrThrowArgs>(args?: SelectSubset<T, ticketsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.tickets.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.tickets.findMany({ take: 10 })
     * 
     * // Only select the `id_ticket`
     * const ticketsWithId_ticketOnly = await prisma.tickets.findMany({ select: { id_ticket: true } })
     * 
     */
    findMany<T extends ticketsFindManyArgs>(args?: SelectSubset<T, ticketsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tickets.
     * @param {ticketsCreateArgs} args - Arguments to create a Tickets.
     * @example
     * // Create one Tickets
     * const Tickets = await prisma.tickets.create({
     *   data: {
     *     // ... data to create a Tickets
     *   }
     * })
     * 
     */
    create<T extends ticketsCreateArgs>(args: SelectSubset<T, ticketsCreateArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {ticketsCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const tickets = await prisma.tickets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ticketsCreateManyArgs>(args?: SelectSubset<T, ticketsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tickets.
     * @param {ticketsDeleteArgs} args - Arguments to delete one Tickets.
     * @example
     * // Delete one Tickets
     * const Tickets = await prisma.tickets.delete({
     *   where: {
     *     // ... filter to delete one Tickets
     *   }
     * })
     * 
     */
    delete<T extends ticketsDeleteArgs>(args: SelectSubset<T, ticketsDeleteArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tickets.
     * @param {ticketsUpdateArgs} args - Arguments to update one Tickets.
     * @example
     * // Update one Tickets
     * const tickets = await prisma.tickets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ticketsUpdateArgs>(args: SelectSubset<T, ticketsUpdateArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {ticketsDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.tickets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ticketsDeleteManyArgs>(args?: SelectSubset<T, ticketsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const tickets = await prisma.tickets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ticketsUpdateManyArgs>(args: SelectSubset<T, ticketsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tickets.
     * @param {ticketsUpsertArgs} args - Arguments to update or create a Tickets.
     * @example
     * // Update or create a Tickets
     * const tickets = await prisma.tickets.upsert({
     *   create: {
     *     // ... data to create a Tickets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tickets we want to update
     *   }
     * })
     */
    upsert<T extends ticketsUpsertArgs>(args: SelectSubset<T, ticketsUpsertArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.tickets.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends ticketsCountArgs>(
      args?: Subset<T, ticketsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketsAggregateArgs>(args: Subset<T, TicketsAggregateArgs>): Prisma.PrismaPromise<GetTicketsAggregateType<T>>

    /**
     * Group by Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsGroupByArgs} args - Group by arguments.
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
      T extends ticketsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ticketsGroupByArgs['orderBy'] }
        : { orderBy?: ticketsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ticketsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tickets model
   */
  readonly fields: ticketsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tickets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ticketsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends tickets$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, tickets$usuariosArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tickets model
   */
  interface ticketsFieldRefs {
    readonly id_ticket: FieldRef<"tickets", 'Int'>
    readonly nombre_ticket: FieldRef<"tickets", 'String'>
    readonly codigo_ticket: FieldRef<"tickets", 'String'>
    readonly descuento: FieldRef<"tickets", 'Decimal'>
    readonly usado: FieldRef<"tickets", 'Boolean'>
    readonly id_usuario: FieldRef<"tickets", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tickets findUnique
   */
  export type ticketsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets findUniqueOrThrow
   */
  export type ticketsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets findFirst
   */
  export type ticketsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tickets.
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * tickets findFirstOrThrow
   */
  export type ticketsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tickets.
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * tickets findMany
   */
  export type ticketsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tickets.
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * tickets create
   */
  export type ticketsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * The data needed to create a tickets.
     */
    data: XOR<ticketsCreateInput, ticketsUncheckedCreateInput>
  }

  /**
   * tickets createMany
   */
  export type ticketsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tickets.
     */
    data: ticketsCreateManyInput | ticketsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tickets update
   */
  export type ticketsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * The data needed to update a tickets.
     */
    data: XOR<ticketsUpdateInput, ticketsUncheckedUpdateInput>
    /**
     * Choose, which tickets to update.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets updateMany
   */
  export type ticketsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tickets.
     */
    data: XOR<ticketsUpdateManyMutationInput, ticketsUncheckedUpdateManyInput>
    /**
     * Filter which tickets to update
     */
    where?: ticketsWhereInput
    /**
     * Limit how many tickets to update.
     */
    limit?: number
  }

  /**
   * tickets upsert
   */
  export type ticketsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * The filter to search for the tickets to update in case it exists.
     */
    where: ticketsWhereUniqueInput
    /**
     * In case the tickets found by the `where` argument doesn't exist, create a new tickets with this data.
     */
    create: XOR<ticketsCreateInput, ticketsUncheckedCreateInput>
    /**
     * In case the tickets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ticketsUpdateInput, ticketsUncheckedUpdateInput>
  }

  /**
   * tickets delete
   */
  export type ticketsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter which tickets to delete.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets deleteMany
   */
  export type ticketsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tickets to delete
     */
    where?: ticketsWhereInput
    /**
     * Limit how many tickets to delete.
     */
    limit?: number
  }

  /**
   * tickets.usuarios
   */
  export type tickets$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
  }

  /**
   * tickets without action
   */
  export type ticketsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
  }


  /**
   * Model reseteo_semanal
   */

  export type AggregateReseteo_semanal = {
    _count: Reseteo_semanalCountAggregateOutputType | null
    _avg: Reseteo_semanalAvgAggregateOutputType | null
    _sum: Reseteo_semanalSumAggregateOutputType | null
    _min: Reseteo_semanalMinAggregateOutputType | null
    _max: Reseteo_semanalMaxAggregateOutputType | null
  }

  export type Reseteo_semanalAvgAggregateOutputType = {
    id_reseteo: number | null
    semana_anio: number | null
    anio: number | null
  }

  export type Reseteo_semanalSumAggregateOutputType = {
    id_reseteo: number | null
    semana_anio: number | null
    anio: number | null
  }

  export type Reseteo_semanalMinAggregateOutputType = {
    id_reseteo: number | null
    fecha_ultimo_reset: Date | null
    semana_anio: number | null
    anio: number | null
  }

  export type Reseteo_semanalMaxAggregateOutputType = {
    id_reseteo: number | null
    fecha_ultimo_reset: Date | null
    semana_anio: number | null
    anio: number | null
  }

  export type Reseteo_semanalCountAggregateOutputType = {
    id_reseteo: number
    fecha_ultimo_reset: number
    semana_anio: number
    anio: number
    _all: number
  }


  export type Reseteo_semanalAvgAggregateInputType = {
    id_reseteo?: true
    semana_anio?: true
    anio?: true
  }

  export type Reseteo_semanalSumAggregateInputType = {
    id_reseteo?: true
    semana_anio?: true
    anio?: true
  }

  export type Reseteo_semanalMinAggregateInputType = {
    id_reseteo?: true
    fecha_ultimo_reset?: true
    semana_anio?: true
    anio?: true
  }

  export type Reseteo_semanalMaxAggregateInputType = {
    id_reseteo?: true
    fecha_ultimo_reset?: true
    semana_anio?: true
    anio?: true
  }

  export type Reseteo_semanalCountAggregateInputType = {
    id_reseteo?: true
    fecha_ultimo_reset?: true
    semana_anio?: true
    anio?: true
    _all?: true
  }

  export type Reseteo_semanalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reseteo_semanal to aggregate.
     */
    where?: reseteo_semanalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reseteo_semanals to fetch.
     */
    orderBy?: reseteo_semanalOrderByWithRelationInput | reseteo_semanalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reseteo_semanalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reseteo_semanals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reseteo_semanals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reseteo_semanals
    **/
    _count?: true | Reseteo_semanalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Reseteo_semanalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Reseteo_semanalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Reseteo_semanalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Reseteo_semanalMaxAggregateInputType
  }

  export type GetReseteo_semanalAggregateType<T extends Reseteo_semanalAggregateArgs> = {
        [P in keyof T & keyof AggregateReseteo_semanal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReseteo_semanal[P]>
      : GetScalarType<T[P], AggregateReseteo_semanal[P]>
  }




  export type reseteo_semanalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reseteo_semanalWhereInput
    orderBy?: reseteo_semanalOrderByWithAggregationInput | reseteo_semanalOrderByWithAggregationInput[]
    by: Reseteo_semanalScalarFieldEnum[] | Reseteo_semanalScalarFieldEnum
    having?: reseteo_semanalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Reseteo_semanalCountAggregateInputType | true
    _avg?: Reseteo_semanalAvgAggregateInputType
    _sum?: Reseteo_semanalSumAggregateInputType
    _min?: Reseteo_semanalMinAggregateInputType
    _max?: Reseteo_semanalMaxAggregateInputType
  }

  export type Reseteo_semanalGroupByOutputType = {
    id_reseteo: number
    fecha_ultimo_reset: Date
    semana_anio: number
    anio: number
    _count: Reseteo_semanalCountAggregateOutputType | null
    _avg: Reseteo_semanalAvgAggregateOutputType | null
    _sum: Reseteo_semanalSumAggregateOutputType | null
    _min: Reseteo_semanalMinAggregateOutputType | null
    _max: Reseteo_semanalMaxAggregateOutputType | null
  }

  type GetReseteo_semanalGroupByPayload<T extends reseteo_semanalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Reseteo_semanalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Reseteo_semanalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Reseteo_semanalGroupByOutputType[P]>
            : GetScalarType<T[P], Reseteo_semanalGroupByOutputType[P]>
        }
      >
    >


  export type reseteo_semanalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reseteo?: boolean
    fecha_ultimo_reset?: boolean
    semana_anio?: boolean
    anio?: boolean
  }, ExtArgs["result"]["reseteo_semanal"]>



  export type reseteo_semanalSelectScalar = {
    id_reseteo?: boolean
    fecha_ultimo_reset?: boolean
    semana_anio?: boolean
    anio?: boolean
  }

  export type reseteo_semanalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_reseteo" | "fecha_ultimo_reset" | "semana_anio" | "anio", ExtArgs["result"]["reseteo_semanal"]>

  export type $reseteo_semanalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reseteo_semanal"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_reseteo: number
      fecha_ultimo_reset: Date
      semana_anio: number
      anio: number
    }, ExtArgs["result"]["reseteo_semanal"]>
    composites: {}
  }

  type reseteo_semanalGetPayload<S extends boolean | null | undefined | reseteo_semanalDefaultArgs> = $Result.GetResult<Prisma.$reseteo_semanalPayload, S>

  type reseteo_semanalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reseteo_semanalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Reseteo_semanalCountAggregateInputType | true
    }

  export interface reseteo_semanalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reseteo_semanal'], meta: { name: 'reseteo_semanal' } }
    /**
     * Find zero or one Reseteo_semanal that matches the filter.
     * @param {reseteo_semanalFindUniqueArgs} args - Arguments to find a Reseteo_semanal
     * @example
     * // Get one Reseteo_semanal
     * const reseteo_semanal = await prisma.reseteo_semanal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reseteo_semanalFindUniqueArgs>(args: SelectSubset<T, reseteo_semanalFindUniqueArgs<ExtArgs>>): Prisma__reseteo_semanalClient<$Result.GetResult<Prisma.$reseteo_semanalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reseteo_semanal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reseteo_semanalFindUniqueOrThrowArgs} args - Arguments to find a Reseteo_semanal
     * @example
     * // Get one Reseteo_semanal
     * const reseteo_semanal = await prisma.reseteo_semanal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reseteo_semanalFindUniqueOrThrowArgs>(args: SelectSubset<T, reseteo_semanalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reseteo_semanalClient<$Result.GetResult<Prisma.$reseteo_semanalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reseteo_semanal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reseteo_semanalFindFirstArgs} args - Arguments to find a Reseteo_semanal
     * @example
     * // Get one Reseteo_semanal
     * const reseteo_semanal = await prisma.reseteo_semanal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reseteo_semanalFindFirstArgs>(args?: SelectSubset<T, reseteo_semanalFindFirstArgs<ExtArgs>>): Prisma__reseteo_semanalClient<$Result.GetResult<Prisma.$reseteo_semanalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reseteo_semanal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reseteo_semanalFindFirstOrThrowArgs} args - Arguments to find a Reseteo_semanal
     * @example
     * // Get one Reseteo_semanal
     * const reseteo_semanal = await prisma.reseteo_semanal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reseteo_semanalFindFirstOrThrowArgs>(args?: SelectSubset<T, reseteo_semanalFindFirstOrThrowArgs<ExtArgs>>): Prisma__reseteo_semanalClient<$Result.GetResult<Prisma.$reseteo_semanalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reseteo_semanals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reseteo_semanalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reseteo_semanals
     * const reseteo_semanals = await prisma.reseteo_semanal.findMany()
     * 
     * // Get first 10 Reseteo_semanals
     * const reseteo_semanals = await prisma.reseteo_semanal.findMany({ take: 10 })
     * 
     * // Only select the `id_reseteo`
     * const reseteo_semanalWithId_reseteoOnly = await prisma.reseteo_semanal.findMany({ select: { id_reseteo: true } })
     * 
     */
    findMany<T extends reseteo_semanalFindManyArgs>(args?: SelectSubset<T, reseteo_semanalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reseteo_semanalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reseteo_semanal.
     * @param {reseteo_semanalCreateArgs} args - Arguments to create a Reseteo_semanal.
     * @example
     * // Create one Reseteo_semanal
     * const Reseteo_semanal = await prisma.reseteo_semanal.create({
     *   data: {
     *     // ... data to create a Reseteo_semanal
     *   }
     * })
     * 
     */
    create<T extends reseteo_semanalCreateArgs>(args: SelectSubset<T, reseteo_semanalCreateArgs<ExtArgs>>): Prisma__reseteo_semanalClient<$Result.GetResult<Prisma.$reseteo_semanalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reseteo_semanals.
     * @param {reseteo_semanalCreateManyArgs} args - Arguments to create many Reseteo_semanals.
     * @example
     * // Create many Reseteo_semanals
     * const reseteo_semanal = await prisma.reseteo_semanal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reseteo_semanalCreateManyArgs>(args?: SelectSubset<T, reseteo_semanalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reseteo_semanal.
     * @param {reseteo_semanalDeleteArgs} args - Arguments to delete one Reseteo_semanal.
     * @example
     * // Delete one Reseteo_semanal
     * const Reseteo_semanal = await prisma.reseteo_semanal.delete({
     *   where: {
     *     // ... filter to delete one Reseteo_semanal
     *   }
     * })
     * 
     */
    delete<T extends reseteo_semanalDeleteArgs>(args: SelectSubset<T, reseteo_semanalDeleteArgs<ExtArgs>>): Prisma__reseteo_semanalClient<$Result.GetResult<Prisma.$reseteo_semanalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reseteo_semanal.
     * @param {reseteo_semanalUpdateArgs} args - Arguments to update one Reseteo_semanal.
     * @example
     * // Update one Reseteo_semanal
     * const reseteo_semanal = await prisma.reseteo_semanal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reseteo_semanalUpdateArgs>(args: SelectSubset<T, reseteo_semanalUpdateArgs<ExtArgs>>): Prisma__reseteo_semanalClient<$Result.GetResult<Prisma.$reseteo_semanalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reseteo_semanals.
     * @param {reseteo_semanalDeleteManyArgs} args - Arguments to filter Reseteo_semanals to delete.
     * @example
     * // Delete a few Reseteo_semanals
     * const { count } = await prisma.reseteo_semanal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reseteo_semanalDeleteManyArgs>(args?: SelectSubset<T, reseteo_semanalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reseteo_semanals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reseteo_semanalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reseteo_semanals
     * const reseteo_semanal = await prisma.reseteo_semanal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reseteo_semanalUpdateManyArgs>(args: SelectSubset<T, reseteo_semanalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reseteo_semanal.
     * @param {reseteo_semanalUpsertArgs} args - Arguments to update or create a Reseteo_semanal.
     * @example
     * // Update or create a Reseteo_semanal
     * const reseteo_semanal = await prisma.reseteo_semanal.upsert({
     *   create: {
     *     // ... data to create a Reseteo_semanal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reseteo_semanal we want to update
     *   }
     * })
     */
    upsert<T extends reseteo_semanalUpsertArgs>(args: SelectSubset<T, reseteo_semanalUpsertArgs<ExtArgs>>): Prisma__reseteo_semanalClient<$Result.GetResult<Prisma.$reseteo_semanalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reseteo_semanals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reseteo_semanalCountArgs} args - Arguments to filter Reseteo_semanals to count.
     * @example
     * // Count the number of Reseteo_semanals
     * const count = await prisma.reseteo_semanal.count({
     *   where: {
     *     // ... the filter for the Reseteo_semanals we want to count
     *   }
     * })
    **/
    count<T extends reseteo_semanalCountArgs>(
      args?: Subset<T, reseteo_semanalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Reseteo_semanalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reseteo_semanal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Reseteo_semanalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Reseteo_semanalAggregateArgs>(args: Subset<T, Reseteo_semanalAggregateArgs>): Prisma.PrismaPromise<GetReseteo_semanalAggregateType<T>>

    /**
     * Group by Reseteo_semanal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reseteo_semanalGroupByArgs} args - Group by arguments.
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
      T extends reseteo_semanalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reseteo_semanalGroupByArgs['orderBy'] }
        : { orderBy?: reseteo_semanalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reseteo_semanalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReseteo_semanalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reseteo_semanal model
   */
  readonly fields: reseteo_semanalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reseteo_semanal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reseteo_semanalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the reseteo_semanal model
   */
  interface reseteo_semanalFieldRefs {
    readonly id_reseteo: FieldRef<"reseteo_semanal", 'Int'>
    readonly fecha_ultimo_reset: FieldRef<"reseteo_semanal", 'DateTime'>
    readonly semana_anio: FieldRef<"reseteo_semanal", 'Int'>
    readonly anio: FieldRef<"reseteo_semanal", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * reseteo_semanal findUnique
   */
  export type reseteo_semanalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reseteo_semanal
     */
    select?: reseteo_semanalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reseteo_semanal
     */
    omit?: reseteo_semanalOmit<ExtArgs> | null
    /**
     * Filter, which reseteo_semanal to fetch.
     */
    where: reseteo_semanalWhereUniqueInput
  }

  /**
   * reseteo_semanal findUniqueOrThrow
   */
  export type reseteo_semanalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reseteo_semanal
     */
    select?: reseteo_semanalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reseteo_semanal
     */
    omit?: reseteo_semanalOmit<ExtArgs> | null
    /**
     * Filter, which reseteo_semanal to fetch.
     */
    where: reseteo_semanalWhereUniqueInput
  }

  /**
   * reseteo_semanal findFirst
   */
  export type reseteo_semanalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reseteo_semanal
     */
    select?: reseteo_semanalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reseteo_semanal
     */
    omit?: reseteo_semanalOmit<ExtArgs> | null
    /**
     * Filter, which reseteo_semanal to fetch.
     */
    where?: reseteo_semanalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reseteo_semanals to fetch.
     */
    orderBy?: reseteo_semanalOrderByWithRelationInput | reseteo_semanalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reseteo_semanals.
     */
    cursor?: reseteo_semanalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reseteo_semanals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reseteo_semanals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reseteo_semanals.
     */
    distinct?: Reseteo_semanalScalarFieldEnum | Reseteo_semanalScalarFieldEnum[]
  }

  /**
   * reseteo_semanal findFirstOrThrow
   */
  export type reseteo_semanalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reseteo_semanal
     */
    select?: reseteo_semanalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reseteo_semanal
     */
    omit?: reseteo_semanalOmit<ExtArgs> | null
    /**
     * Filter, which reseteo_semanal to fetch.
     */
    where?: reseteo_semanalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reseteo_semanals to fetch.
     */
    orderBy?: reseteo_semanalOrderByWithRelationInput | reseteo_semanalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reseteo_semanals.
     */
    cursor?: reseteo_semanalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reseteo_semanals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reseteo_semanals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reseteo_semanals.
     */
    distinct?: Reseteo_semanalScalarFieldEnum | Reseteo_semanalScalarFieldEnum[]
  }

  /**
   * reseteo_semanal findMany
   */
  export type reseteo_semanalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reseteo_semanal
     */
    select?: reseteo_semanalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reseteo_semanal
     */
    omit?: reseteo_semanalOmit<ExtArgs> | null
    /**
     * Filter, which reseteo_semanals to fetch.
     */
    where?: reseteo_semanalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reseteo_semanals to fetch.
     */
    orderBy?: reseteo_semanalOrderByWithRelationInput | reseteo_semanalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reseteo_semanals.
     */
    cursor?: reseteo_semanalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reseteo_semanals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reseteo_semanals.
     */
    skip?: number
    distinct?: Reseteo_semanalScalarFieldEnum | Reseteo_semanalScalarFieldEnum[]
  }

  /**
   * reseteo_semanal create
   */
  export type reseteo_semanalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reseteo_semanal
     */
    select?: reseteo_semanalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reseteo_semanal
     */
    omit?: reseteo_semanalOmit<ExtArgs> | null
    /**
     * The data needed to create a reseteo_semanal.
     */
    data: XOR<reseteo_semanalCreateInput, reseteo_semanalUncheckedCreateInput>
  }

  /**
   * reseteo_semanal createMany
   */
  export type reseteo_semanalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reseteo_semanals.
     */
    data: reseteo_semanalCreateManyInput | reseteo_semanalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reseteo_semanal update
   */
  export type reseteo_semanalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reseteo_semanal
     */
    select?: reseteo_semanalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reseteo_semanal
     */
    omit?: reseteo_semanalOmit<ExtArgs> | null
    /**
     * The data needed to update a reseteo_semanal.
     */
    data: XOR<reseteo_semanalUpdateInput, reseteo_semanalUncheckedUpdateInput>
    /**
     * Choose, which reseteo_semanal to update.
     */
    where: reseteo_semanalWhereUniqueInput
  }

  /**
   * reseteo_semanal updateMany
   */
  export type reseteo_semanalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reseteo_semanals.
     */
    data: XOR<reseteo_semanalUpdateManyMutationInput, reseteo_semanalUncheckedUpdateManyInput>
    /**
     * Filter which reseteo_semanals to update
     */
    where?: reseteo_semanalWhereInput
    /**
     * Limit how many reseteo_semanals to update.
     */
    limit?: number
  }

  /**
   * reseteo_semanal upsert
   */
  export type reseteo_semanalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reseteo_semanal
     */
    select?: reseteo_semanalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reseteo_semanal
     */
    omit?: reseteo_semanalOmit<ExtArgs> | null
    /**
     * The filter to search for the reseteo_semanal to update in case it exists.
     */
    where: reseteo_semanalWhereUniqueInput
    /**
     * In case the reseteo_semanal found by the `where` argument doesn't exist, create a new reseteo_semanal with this data.
     */
    create: XOR<reseteo_semanalCreateInput, reseteo_semanalUncheckedCreateInput>
    /**
     * In case the reseteo_semanal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reseteo_semanalUpdateInput, reseteo_semanalUncheckedUpdateInput>
  }

  /**
   * reseteo_semanal delete
   */
  export type reseteo_semanalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reseteo_semanal
     */
    select?: reseteo_semanalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reseteo_semanal
     */
    omit?: reseteo_semanalOmit<ExtArgs> | null
    /**
     * Filter which reseteo_semanal to delete.
     */
    where: reseteo_semanalWhereUniqueInput
  }

  /**
   * reseteo_semanal deleteMany
   */
  export type reseteo_semanalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reseteo_semanals to delete
     */
    where?: reseteo_semanalWhereInput
    /**
     * Limit how many reseteo_semanals to delete.
     */
    limit?: number
  }

  /**
   * reseteo_semanal without action
   */
  export type reseteo_semanalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reseteo_semanal
     */
    select?: reseteo_semanalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reseteo_semanal
     */
    omit?: reseteo_semanalOmit<ExtArgs> | null
  }


  /**
   * Model ia_conversaciones
   */

  export type AggregateIa_conversaciones = {
    _count: Ia_conversacionesCountAggregateOutputType | null
    _avg: Ia_conversacionesAvgAggregateOutputType | null
    _sum: Ia_conversacionesSumAggregateOutputType | null
    _min: Ia_conversacionesMinAggregateOutputType | null
    _max: Ia_conversacionesMaxAggregateOutputType | null
  }

  export type Ia_conversacionesAvgAggregateOutputType = {
    id_conversacion: number | null
    id_usuario: number | null
    confianza: Decimal | null
  }

  export type Ia_conversacionesSumAggregateOutputType = {
    id_conversacion: number | null
    id_usuario: number | null
    confianza: Decimal | null
  }

  export type Ia_conversacionesMinAggregateOutputType = {
    id_conversacion: number | null
    id_usuario: number | null
    mensaje_usuario: string | null
    respuesta_ia: string | null
    intencion: string | null
    confianza: Decimal | null
    resuelta: boolean | null
    canal: string | null
    fecha: Date | null
  }

  export type Ia_conversacionesMaxAggregateOutputType = {
    id_conversacion: number | null
    id_usuario: number | null
    mensaje_usuario: string | null
    respuesta_ia: string | null
    intencion: string | null
    confianza: Decimal | null
    resuelta: boolean | null
    canal: string | null
    fecha: Date | null
  }

  export type Ia_conversacionesCountAggregateOutputType = {
    id_conversacion: number
    id_usuario: number
    mensaje_usuario: number
    respuesta_ia: number
    intencion: number
    confianza: number
    resuelta: number
    canal: number
    fecha: number
    _all: number
  }


  export type Ia_conversacionesAvgAggregateInputType = {
    id_conversacion?: true
    id_usuario?: true
    confianza?: true
  }

  export type Ia_conversacionesSumAggregateInputType = {
    id_conversacion?: true
    id_usuario?: true
    confianza?: true
  }

  export type Ia_conversacionesMinAggregateInputType = {
    id_conversacion?: true
    id_usuario?: true
    mensaje_usuario?: true
    respuesta_ia?: true
    intencion?: true
    confianza?: true
    resuelta?: true
    canal?: true
    fecha?: true
  }

  export type Ia_conversacionesMaxAggregateInputType = {
    id_conversacion?: true
    id_usuario?: true
    mensaje_usuario?: true
    respuesta_ia?: true
    intencion?: true
    confianza?: true
    resuelta?: true
    canal?: true
    fecha?: true
  }

  export type Ia_conversacionesCountAggregateInputType = {
    id_conversacion?: true
    id_usuario?: true
    mensaje_usuario?: true
    respuesta_ia?: true
    intencion?: true
    confianza?: true
    resuelta?: true
    canal?: true
    fecha?: true
    _all?: true
  }

  export type Ia_conversacionesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ia_conversaciones to aggregate.
     */
    where?: ia_conversacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ia_conversaciones to fetch.
     */
    orderBy?: ia_conversacionesOrderByWithRelationInput | ia_conversacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ia_conversacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ia_conversaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ia_conversaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ia_conversaciones
    **/
    _count?: true | Ia_conversacionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ia_conversacionesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ia_conversacionesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ia_conversacionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ia_conversacionesMaxAggregateInputType
  }

  export type GetIa_conversacionesAggregateType<T extends Ia_conversacionesAggregateArgs> = {
        [P in keyof T & keyof AggregateIa_conversaciones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIa_conversaciones[P]>
      : GetScalarType<T[P], AggregateIa_conversaciones[P]>
  }




  export type ia_conversacionesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ia_conversacionesWhereInput
    orderBy?: ia_conversacionesOrderByWithAggregationInput | ia_conversacionesOrderByWithAggregationInput[]
    by: Ia_conversacionesScalarFieldEnum[] | Ia_conversacionesScalarFieldEnum
    having?: ia_conversacionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ia_conversacionesCountAggregateInputType | true
    _avg?: Ia_conversacionesAvgAggregateInputType
    _sum?: Ia_conversacionesSumAggregateInputType
    _min?: Ia_conversacionesMinAggregateInputType
    _max?: Ia_conversacionesMaxAggregateInputType
  }

  export type Ia_conversacionesGroupByOutputType = {
    id_conversacion: number
    id_usuario: number | null
    mensaje_usuario: string
    respuesta_ia: string
    intencion: string
    confianza: Decimal | null
    resuelta: boolean
    canal: string
    fecha: Date
    _count: Ia_conversacionesCountAggregateOutputType | null
    _avg: Ia_conversacionesAvgAggregateOutputType | null
    _sum: Ia_conversacionesSumAggregateOutputType | null
    _min: Ia_conversacionesMinAggregateOutputType | null
    _max: Ia_conversacionesMaxAggregateOutputType | null
  }

  type GetIa_conversacionesGroupByPayload<T extends ia_conversacionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ia_conversacionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ia_conversacionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ia_conversacionesGroupByOutputType[P]>
            : GetScalarType<T[P], Ia_conversacionesGroupByOutputType[P]>
        }
      >
    >


  export type ia_conversacionesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_conversacion?: boolean
    id_usuario?: boolean
    mensaje_usuario?: boolean
    respuesta_ia?: boolean
    intencion?: boolean
    confianza?: boolean
    resuelta?: boolean
    canal?: boolean
    fecha?: boolean
    usuarios?: boolean | ia_conversaciones$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["ia_conversaciones"]>



  export type ia_conversacionesSelectScalar = {
    id_conversacion?: boolean
    id_usuario?: boolean
    mensaje_usuario?: boolean
    respuesta_ia?: boolean
    intencion?: boolean
    confianza?: boolean
    resuelta?: boolean
    canal?: boolean
    fecha?: boolean
  }

  export type ia_conversacionesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_conversacion" | "id_usuario" | "mensaje_usuario" | "respuesta_ia" | "intencion" | "confianza" | "resuelta" | "canal" | "fecha", ExtArgs["result"]["ia_conversaciones"]>
  export type ia_conversacionesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | ia_conversaciones$usuariosArgs<ExtArgs>
  }

  export type $ia_conversacionesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ia_conversaciones"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_conversacion: number
      id_usuario: number | null
      mensaje_usuario: string
      respuesta_ia: string
      intencion: string
      confianza: Prisma.Decimal | null
      resuelta: boolean
      canal: string
      fecha: Date
    }, ExtArgs["result"]["ia_conversaciones"]>
    composites: {}
  }

  type ia_conversacionesGetPayload<S extends boolean | null | undefined | ia_conversacionesDefaultArgs> = $Result.GetResult<Prisma.$ia_conversacionesPayload, S>

  type ia_conversacionesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ia_conversacionesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ia_conversacionesCountAggregateInputType | true
    }

  export interface ia_conversacionesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ia_conversaciones'], meta: { name: 'ia_conversaciones' } }
    /**
     * Find zero or one Ia_conversaciones that matches the filter.
     * @param {ia_conversacionesFindUniqueArgs} args - Arguments to find a Ia_conversaciones
     * @example
     * // Get one Ia_conversaciones
     * const ia_conversaciones = await prisma.ia_conversaciones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ia_conversacionesFindUniqueArgs>(args: SelectSubset<T, ia_conversacionesFindUniqueArgs<ExtArgs>>): Prisma__ia_conversacionesClient<$Result.GetResult<Prisma.$ia_conversacionesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ia_conversaciones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ia_conversacionesFindUniqueOrThrowArgs} args - Arguments to find a Ia_conversaciones
     * @example
     * // Get one Ia_conversaciones
     * const ia_conversaciones = await prisma.ia_conversaciones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ia_conversacionesFindUniqueOrThrowArgs>(args: SelectSubset<T, ia_conversacionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ia_conversacionesClient<$Result.GetResult<Prisma.$ia_conversacionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ia_conversaciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ia_conversacionesFindFirstArgs} args - Arguments to find a Ia_conversaciones
     * @example
     * // Get one Ia_conversaciones
     * const ia_conversaciones = await prisma.ia_conversaciones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ia_conversacionesFindFirstArgs>(args?: SelectSubset<T, ia_conversacionesFindFirstArgs<ExtArgs>>): Prisma__ia_conversacionesClient<$Result.GetResult<Prisma.$ia_conversacionesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ia_conversaciones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ia_conversacionesFindFirstOrThrowArgs} args - Arguments to find a Ia_conversaciones
     * @example
     * // Get one Ia_conversaciones
     * const ia_conversaciones = await prisma.ia_conversaciones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ia_conversacionesFindFirstOrThrowArgs>(args?: SelectSubset<T, ia_conversacionesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ia_conversacionesClient<$Result.GetResult<Prisma.$ia_conversacionesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ia_conversaciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ia_conversacionesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ia_conversaciones
     * const ia_conversaciones = await prisma.ia_conversaciones.findMany()
     * 
     * // Get first 10 Ia_conversaciones
     * const ia_conversaciones = await prisma.ia_conversaciones.findMany({ take: 10 })
     * 
     * // Only select the `id_conversacion`
     * const ia_conversacionesWithId_conversacionOnly = await prisma.ia_conversaciones.findMany({ select: { id_conversacion: true } })
     * 
     */
    findMany<T extends ia_conversacionesFindManyArgs>(args?: SelectSubset<T, ia_conversacionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ia_conversacionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ia_conversaciones.
     * @param {ia_conversacionesCreateArgs} args - Arguments to create a Ia_conversaciones.
     * @example
     * // Create one Ia_conversaciones
     * const Ia_conversaciones = await prisma.ia_conversaciones.create({
     *   data: {
     *     // ... data to create a Ia_conversaciones
     *   }
     * })
     * 
     */
    create<T extends ia_conversacionesCreateArgs>(args: SelectSubset<T, ia_conversacionesCreateArgs<ExtArgs>>): Prisma__ia_conversacionesClient<$Result.GetResult<Prisma.$ia_conversacionesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ia_conversaciones.
     * @param {ia_conversacionesCreateManyArgs} args - Arguments to create many Ia_conversaciones.
     * @example
     * // Create many Ia_conversaciones
     * const ia_conversaciones = await prisma.ia_conversaciones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ia_conversacionesCreateManyArgs>(args?: SelectSubset<T, ia_conversacionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ia_conversaciones.
     * @param {ia_conversacionesDeleteArgs} args - Arguments to delete one Ia_conversaciones.
     * @example
     * // Delete one Ia_conversaciones
     * const Ia_conversaciones = await prisma.ia_conversaciones.delete({
     *   where: {
     *     // ... filter to delete one Ia_conversaciones
     *   }
     * })
     * 
     */
    delete<T extends ia_conversacionesDeleteArgs>(args: SelectSubset<T, ia_conversacionesDeleteArgs<ExtArgs>>): Prisma__ia_conversacionesClient<$Result.GetResult<Prisma.$ia_conversacionesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ia_conversaciones.
     * @param {ia_conversacionesUpdateArgs} args - Arguments to update one Ia_conversaciones.
     * @example
     * // Update one Ia_conversaciones
     * const ia_conversaciones = await prisma.ia_conversaciones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ia_conversacionesUpdateArgs>(args: SelectSubset<T, ia_conversacionesUpdateArgs<ExtArgs>>): Prisma__ia_conversacionesClient<$Result.GetResult<Prisma.$ia_conversacionesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ia_conversaciones.
     * @param {ia_conversacionesDeleteManyArgs} args - Arguments to filter Ia_conversaciones to delete.
     * @example
     * // Delete a few Ia_conversaciones
     * const { count } = await prisma.ia_conversaciones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ia_conversacionesDeleteManyArgs>(args?: SelectSubset<T, ia_conversacionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ia_conversaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ia_conversacionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ia_conversaciones
     * const ia_conversaciones = await prisma.ia_conversaciones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ia_conversacionesUpdateManyArgs>(args: SelectSubset<T, ia_conversacionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ia_conversaciones.
     * @param {ia_conversacionesUpsertArgs} args - Arguments to update or create a Ia_conversaciones.
     * @example
     * // Update or create a Ia_conversaciones
     * const ia_conversaciones = await prisma.ia_conversaciones.upsert({
     *   create: {
     *     // ... data to create a Ia_conversaciones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ia_conversaciones we want to update
     *   }
     * })
     */
    upsert<T extends ia_conversacionesUpsertArgs>(args: SelectSubset<T, ia_conversacionesUpsertArgs<ExtArgs>>): Prisma__ia_conversacionesClient<$Result.GetResult<Prisma.$ia_conversacionesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ia_conversaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ia_conversacionesCountArgs} args - Arguments to filter Ia_conversaciones to count.
     * @example
     * // Count the number of Ia_conversaciones
     * const count = await prisma.ia_conversaciones.count({
     *   where: {
     *     // ... the filter for the Ia_conversaciones we want to count
     *   }
     * })
    **/
    count<T extends ia_conversacionesCountArgs>(
      args?: Subset<T, ia_conversacionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ia_conversacionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ia_conversaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ia_conversacionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ia_conversacionesAggregateArgs>(args: Subset<T, Ia_conversacionesAggregateArgs>): Prisma.PrismaPromise<GetIa_conversacionesAggregateType<T>>

    /**
     * Group by Ia_conversaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ia_conversacionesGroupByArgs} args - Group by arguments.
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
      T extends ia_conversacionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ia_conversacionesGroupByArgs['orderBy'] }
        : { orderBy?: ia_conversacionesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ia_conversacionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIa_conversacionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ia_conversaciones model
   */
  readonly fields: ia_conversacionesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ia_conversaciones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ia_conversacionesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends ia_conversaciones$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, ia_conversaciones$usuariosArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ia_conversaciones model
   */
  interface ia_conversacionesFieldRefs {
    readonly id_conversacion: FieldRef<"ia_conversaciones", 'Int'>
    readonly id_usuario: FieldRef<"ia_conversaciones", 'Int'>
    readonly mensaje_usuario: FieldRef<"ia_conversaciones", 'String'>
    readonly respuesta_ia: FieldRef<"ia_conversaciones", 'String'>
    readonly intencion: FieldRef<"ia_conversaciones", 'String'>
    readonly confianza: FieldRef<"ia_conversaciones", 'Decimal'>
    readonly resuelta: FieldRef<"ia_conversaciones", 'Boolean'>
    readonly canal: FieldRef<"ia_conversaciones", 'String'>
    readonly fecha: FieldRef<"ia_conversaciones", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ia_conversaciones findUnique
   */
  export type ia_conversacionesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ia_conversaciones
     */
    select?: ia_conversacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ia_conversaciones
     */
    omit?: ia_conversacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ia_conversacionesInclude<ExtArgs> | null
    /**
     * Filter, which ia_conversaciones to fetch.
     */
    where: ia_conversacionesWhereUniqueInput
  }

  /**
   * ia_conversaciones findUniqueOrThrow
   */
  export type ia_conversacionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ia_conversaciones
     */
    select?: ia_conversacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ia_conversaciones
     */
    omit?: ia_conversacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ia_conversacionesInclude<ExtArgs> | null
    /**
     * Filter, which ia_conversaciones to fetch.
     */
    where: ia_conversacionesWhereUniqueInput
  }

  /**
   * ia_conversaciones findFirst
   */
  export type ia_conversacionesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ia_conversaciones
     */
    select?: ia_conversacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ia_conversaciones
     */
    omit?: ia_conversacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ia_conversacionesInclude<ExtArgs> | null
    /**
     * Filter, which ia_conversaciones to fetch.
     */
    where?: ia_conversacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ia_conversaciones to fetch.
     */
    orderBy?: ia_conversacionesOrderByWithRelationInput | ia_conversacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ia_conversaciones.
     */
    cursor?: ia_conversacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ia_conversaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ia_conversaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ia_conversaciones.
     */
    distinct?: Ia_conversacionesScalarFieldEnum | Ia_conversacionesScalarFieldEnum[]
  }

  /**
   * ia_conversaciones findFirstOrThrow
   */
  export type ia_conversacionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ia_conversaciones
     */
    select?: ia_conversacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ia_conversaciones
     */
    omit?: ia_conversacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ia_conversacionesInclude<ExtArgs> | null
    /**
     * Filter, which ia_conversaciones to fetch.
     */
    where?: ia_conversacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ia_conversaciones to fetch.
     */
    orderBy?: ia_conversacionesOrderByWithRelationInput | ia_conversacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ia_conversaciones.
     */
    cursor?: ia_conversacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ia_conversaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ia_conversaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ia_conversaciones.
     */
    distinct?: Ia_conversacionesScalarFieldEnum | Ia_conversacionesScalarFieldEnum[]
  }

  /**
   * ia_conversaciones findMany
   */
  export type ia_conversacionesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ia_conversaciones
     */
    select?: ia_conversacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ia_conversaciones
     */
    omit?: ia_conversacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ia_conversacionesInclude<ExtArgs> | null
    /**
     * Filter, which ia_conversaciones to fetch.
     */
    where?: ia_conversacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ia_conversaciones to fetch.
     */
    orderBy?: ia_conversacionesOrderByWithRelationInput | ia_conversacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ia_conversaciones.
     */
    cursor?: ia_conversacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ia_conversaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ia_conversaciones.
     */
    skip?: number
    distinct?: Ia_conversacionesScalarFieldEnum | Ia_conversacionesScalarFieldEnum[]
  }

  /**
   * ia_conversaciones create
   */
  export type ia_conversacionesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ia_conversaciones
     */
    select?: ia_conversacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ia_conversaciones
     */
    omit?: ia_conversacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ia_conversacionesInclude<ExtArgs> | null
    /**
     * The data needed to create a ia_conversaciones.
     */
    data: XOR<ia_conversacionesCreateInput, ia_conversacionesUncheckedCreateInput>
  }

  /**
   * ia_conversaciones createMany
   */
  export type ia_conversacionesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ia_conversaciones.
     */
    data: ia_conversacionesCreateManyInput | ia_conversacionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ia_conversaciones update
   */
  export type ia_conversacionesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ia_conversaciones
     */
    select?: ia_conversacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ia_conversaciones
     */
    omit?: ia_conversacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ia_conversacionesInclude<ExtArgs> | null
    /**
     * The data needed to update a ia_conversaciones.
     */
    data: XOR<ia_conversacionesUpdateInput, ia_conversacionesUncheckedUpdateInput>
    /**
     * Choose, which ia_conversaciones to update.
     */
    where: ia_conversacionesWhereUniqueInput
  }

  /**
   * ia_conversaciones updateMany
   */
  export type ia_conversacionesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ia_conversaciones.
     */
    data: XOR<ia_conversacionesUpdateManyMutationInput, ia_conversacionesUncheckedUpdateManyInput>
    /**
     * Filter which ia_conversaciones to update
     */
    where?: ia_conversacionesWhereInput
    /**
     * Limit how many ia_conversaciones to update.
     */
    limit?: number
  }

  /**
   * ia_conversaciones upsert
   */
  export type ia_conversacionesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ia_conversaciones
     */
    select?: ia_conversacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ia_conversaciones
     */
    omit?: ia_conversacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ia_conversacionesInclude<ExtArgs> | null
    /**
     * The filter to search for the ia_conversaciones to update in case it exists.
     */
    where: ia_conversacionesWhereUniqueInput
    /**
     * In case the ia_conversaciones found by the `where` argument doesn't exist, create a new ia_conversaciones with this data.
     */
    create: XOR<ia_conversacionesCreateInput, ia_conversacionesUncheckedCreateInput>
    /**
     * In case the ia_conversaciones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ia_conversacionesUpdateInput, ia_conversacionesUncheckedUpdateInput>
  }

  /**
   * ia_conversaciones delete
   */
  export type ia_conversacionesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ia_conversaciones
     */
    select?: ia_conversacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ia_conversaciones
     */
    omit?: ia_conversacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ia_conversacionesInclude<ExtArgs> | null
    /**
     * Filter which ia_conversaciones to delete.
     */
    where: ia_conversacionesWhereUniqueInput
  }

  /**
   * ia_conversaciones deleteMany
   */
  export type ia_conversacionesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ia_conversaciones to delete
     */
    where?: ia_conversacionesWhereInput
    /**
     * Limit how many ia_conversaciones to delete.
     */
    limit?: number
  }

  /**
   * ia_conversaciones.usuarios
   */
  export type ia_conversaciones$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
  }

  /**
   * ia_conversaciones without action
   */
  export type ia_conversacionesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ia_conversaciones
     */
    select?: ia_conversacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ia_conversaciones
     */
    omit?: ia_conversacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ia_conversacionesInclude<ExtArgs> | null
  }


  /**
   * Model feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackAvgAggregateOutputType = {
    id_feedback: number | null
    criticidad: number | null
    nps: number | null
  }

  export type FeedbackSumAggregateOutputType = {
    id_feedback: number | null
    criticidad: number | null
    nps: number | null
  }

  export type FeedbackMinAggregateOutputType = {
    id_feedback: number | null
    nombre: string | null
    correo: string | null
    mensaje: string | null
    canal: string | null
    sentimiento: string | null
    categoria: string | null
    criticidad: number | null
    nps: number | null
    atendido: boolean | null
    respuesta: string | null
    fecha_creacion: Date | null
    fecha_atencion: Date | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id_feedback: number | null
    nombre: string | null
    correo: string | null
    mensaje: string | null
    canal: string | null
    sentimiento: string | null
    categoria: string | null
    criticidad: number | null
    nps: number | null
    atendido: boolean | null
    respuesta: string | null
    fecha_creacion: Date | null
    fecha_atencion: Date | null
  }

  export type FeedbackCountAggregateOutputType = {
    id_feedback: number
    nombre: number
    correo: number
    mensaje: number
    canal: number
    sentimiento: number
    categoria: number
    criticidad: number
    nps: number
    atendido: number
    respuesta: number
    fecha_creacion: number
    fecha_atencion: number
    _all: number
  }


  export type FeedbackAvgAggregateInputType = {
    id_feedback?: true
    criticidad?: true
    nps?: true
  }

  export type FeedbackSumAggregateInputType = {
    id_feedback?: true
    criticidad?: true
    nps?: true
  }

  export type FeedbackMinAggregateInputType = {
    id_feedback?: true
    nombre?: true
    correo?: true
    mensaje?: true
    canal?: true
    sentimiento?: true
    categoria?: true
    criticidad?: true
    nps?: true
    atendido?: true
    respuesta?: true
    fecha_creacion?: true
    fecha_atencion?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id_feedback?: true
    nombre?: true
    correo?: true
    mensaje?: true
    canal?: true
    sentimiento?: true
    categoria?: true
    criticidad?: true
    nps?: true
    atendido?: true
    respuesta?: true
    fecha_creacion?: true
    fecha_atencion?: true
  }

  export type FeedbackCountAggregateInputType = {
    id_feedback?: true
    nombre?: true
    correo?: true
    mensaje?: true
    canal?: true
    sentimiento?: true
    categoria?: true
    criticidad?: true
    nps?: true
    atendido?: true
    respuesta?: true
    fecha_creacion?: true
    fecha_atencion?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which feedback to aggregate.
     */
    where?: feedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbackOrderByWithRelationInput | feedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: feedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type feedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: feedbackWhereInput
    orderBy?: feedbackOrderByWithAggregationInput | feedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: feedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _avg?: FeedbackAvgAggregateInputType
    _sum?: FeedbackSumAggregateInputType
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id_feedback: number
    nombre: string
    correo: string | null
    mensaje: string
    canal: string
    sentimiento: string
    categoria: string
    criticidad: number
    nps: number | null
    atendido: boolean
    respuesta: string | null
    fecha_creacion: Date
    fecha_atencion: Date | null
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends feedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type feedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_feedback?: boolean
    nombre?: boolean
    correo?: boolean
    mensaje?: boolean
    canal?: boolean
    sentimiento?: boolean
    categoria?: boolean
    criticidad?: boolean
    nps?: boolean
    atendido?: boolean
    respuesta?: boolean
    fecha_creacion?: boolean
    fecha_atencion?: boolean
  }, ExtArgs["result"]["feedback"]>



  export type feedbackSelectScalar = {
    id_feedback?: boolean
    nombre?: boolean
    correo?: boolean
    mensaje?: boolean
    canal?: boolean
    sentimiento?: boolean
    categoria?: boolean
    criticidad?: boolean
    nps?: boolean
    atendido?: boolean
    respuesta?: boolean
    fecha_creacion?: boolean
    fecha_atencion?: boolean
  }

  export type feedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_feedback" | "nombre" | "correo" | "mensaje" | "canal" | "sentimiento" | "categoria" | "criticidad" | "nps" | "atendido" | "respuesta" | "fecha_creacion" | "fecha_atencion", ExtArgs["result"]["feedback"]>

  export type $feedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "feedback"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_feedback: number
      nombre: string
      correo: string | null
      mensaje: string
      canal: string
      sentimiento: string
      categoria: string
      criticidad: number
      nps: number | null
      atendido: boolean
      respuesta: string | null
      fecha_creacion: Date
      fecha_atencion: Date | null
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type feedbackGetPayload<S extends boolean | null | undefined | feedbackDefaultArgs> = $Result.GetResult<Prisma.$feedbackPayload, S>

  type feedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<feedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface feedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['feedback'], meta: { name: 'feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {feedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends feedbackFindUniqueArgs>(args: SelectSubset<T, feedbackFindUniqueArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {feedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends feedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, feedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends feedbackFindFirstArgs>(args?: SelectSubset<T, feedbackFindFirstArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends feedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, feedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id_feedback`
     * const feedbackWithId_feedbackOnly = await prisma.feedback.findMany({ select: { id_feedback: true } })
     * 
     */
    findMany<T extends feedbackFindManyArgs>(args?: SelectSubset<T, feedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedback.
     * @param {feedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends feedbackCreateArgs>(args: SelectSubset<T, feedbackCreateArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {feedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends feedbackCreateManyArgs>(args?: SelectSubset<T, feedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Feedback.
     * @param {feedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends feedbackDeleteArgs>(args: SelectSubset<T, feedbackDeleteArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedback.
     * @param {feedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends feedbackUpdateArgs>(args: SelectSubset<T, feedbackUpdateArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {feedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends feedbackDeleteManyArgs>(args?: SelectSubset<T, feedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends feedbackUpdateManyArgs>(args: SelectSubset<T, feedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Feedback.
     * @param {feedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends feedbackUpsertArgs>(args: SelectSubset<T, feedbackUpsertArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends feedbackCountArgs>(
      args?: Subset<T, feedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackGroupByArgs} args - Group by arguments.
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
      T extends feedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: feedbackGroupByArgs['orderBy'] }
        : { orderBy?: feedbackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, feedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the feedback model
   */
  readonly fields: feedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__feedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the feedback model
   */
  interface feedbackFieldRefs {
    readonly id_feedback: FieldRef<"feedback", 'Int'>
    readonly nombre: FieldRef<"feedback", 'String'>
    readonly correo: FieldRef<"feedback", 'String'>
    readonly mensaje: FieldRef<"feedback", 'String'>
    readonly canal: FieldRef<"feedback", 'String'>
    readonly sentimiento: FieldRef<"feedback", 'String'>
    readonly categoria: FieldRef<"feedback", 'String'>
    readonly criticidad: FieldRef<"feedback", 'Int'>
    readonly nps: FieldRef<"feedback", 'Int'>
    readonly atendido: FieldRef<"feedback", 'Boolean'>
    readonly respuesta: FieldRef<"feedback", 'String'>
    readonly fecha_creacion: FieldRef<"feedback", 'DateTime'>
    readonly fecha_atencion: FieldRef<"feedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * feedback findUnique
   */
  export type feedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Filter, which feedback to fetch.
     */
    where: feedbackWhereUniqueInput
  }

  /**
   * feedback findUniqueOrThrow
   */
  export type feedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Filter, which feedback to fetch.
     */
    where: feedbackWhereUniqueInput
  }

  /**
   * feedback findFirst
   */
  export type feedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Filter, which feedback to fetch.
     */
    where?: feedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbackOrderByWithRelationInput | feedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feedbacks.
     */
    cursor?: feedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * feedback findFirstOrThrow
   */
  export type feedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Filter, which feedback to fetch.
     */
    where?: feedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbackOrderByWithRelationInput | feedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feedbacks.
     */
    cursor?: feedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * feedback findMany
   */
  export type feedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Filter, which feedbacks to fetch.
     */
    where?: feedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbackOrderByWithRelationInput | feedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing feedbacks.
     */
    cursor?: feedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * feedback create
   */
  export type feedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * The data needed to create a feedback.
     */
    data: XOR<feedbackCreateInput, feedbackUncheckedCreateInput>
  }

  /**
   * feedback createMany
   */
  export type feedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many feedbacks.
     */
    data: feedbackCreateManyInput | feedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * feedback update
   */
  export type feedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * The data needed to update a feedback.
     */
    data: XOR<feedbackUpdateInput, feedbackUncheckedUpdateInput>
    /**
     * Choose, which feedback to update.
     */
    where: feedbackWhereUniqueInput
  }

  /**
   * feedback updateMany
   */
  export type feedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update feedbacks.
     */
    data: XOR<feedbackUpdateManyMutationInput, feedbackUncheckedUpdateManyInput>
    /**
     * Filter which feedbacks to update
     */
    where?: feedbackWhereInput
    /**
     * Limit how many feedbacks to update.
     */
    limit?: number
  }

  /**
   * feedback upsert
   */
  export type feedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * The filter to search for the feedback to update in case it exists.
     */
    where: feedbackWhereUniqueInput
    /**
     * In case the feedback found by the `where` argument doesn't exist, create a new feedback with this data.
     */
    create: XOR<feedbackCreateInput, feedbackUncheckedCreateInput>
    /**
     * In case the feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<feedbackUpdateInput, feedbackUncheckedUpdateInput>
  }

  /**
   * feedback delete
   */
  export type feedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Filter which feedback to delete.
     */
    where: feedbackWhereUniqueInput
  }

  /**
   * feedback deleteMany
   */
  export type feedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which feedbacks to delete
     */
    where?: feedbackWhereInput
    /**
     * Limit how many feedbacks to delete.
     */
    limit?: number
  }

  /**
   * feedback without action
   */
  export type feedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
  }


  /**
   * Model email_eventos
   */

  export type AggregateEmail_eventos = {
    _count: Email_eventosCountAggregateOutputType | null
    _avg: Email_eventosAvgAggregateOutputType | null
    _sum: Email_eventosSumAggregateOutputType | null
    _min: Email_eventosMinAggregateOutputType | null
    _max: Email_eventosMaxAggregateOutputType | null
  }

  export type Email_eventosAvgAggregateOutputType = {
    id_evento: number | null
    id_usuario: number | null
  }

  export type Email_eventosSumAggregateOutputType = {
    id_evento: number | null
    id_usuario: number | null
  }

  export type Email_eventosMinAggregateOutputType = {
    id_evento: number | null
    id_usuario: number | null
    correo: string | null
    tipo: string | null
    token: string | null
    fecha_envio: Date | null
    fecha_apertura: Date | null
    fecha_clic: Date | null
  }

  export type Email_eventosMaxAggregateOutputType = {
    id_evento: number | null
    id_usuario: number | null
    correo: string | null
    tipo: string | null
    token: string | null
    fecha_envio: Date | null
    fecha_apertura: Date | null
    fecha_clic: Date | null
  }

  export type Email_eventosCountAggregateOutputType = {
    id_evento: number
    id_usuario: number
    correo: number
    tipo: number
    token: number
    fecha_envio: number
    fecha_apertura: number
    fecha_clic: number
    _all: number
  }


  export type Email_eventosAvgAggregateInputType = {
    id_evento?: true
    id_usuario?: true
  }

  export type Email_eventosSumAggregateInputType = {
    id_evento?: true
    id_usuario?: true
  }

  export type Email_eventosMinAggregateInputType = {
    id_evento?: true
    id_usuario?: true
    correo?: true
    tipo?: true
    token?: true
    fecha_envio?: true
    fecha_apertura?: true
    fecha_clic?: true
  }

  export type Email_eventosMaxAggregateInputType = {
    id_evento?: true
    id_usuario?: true
    correo?: true
    tipo?: true
    token?: true
    fecha_envio?: true
    fecha_apertura?: true
    fecha_clic?: true
  }

  export type Email_eventosCountAggregateInputType = {
    id_evento?: true
    id_usuario?: true
    correo?: true
    tipo?: true
    token?: true
    fecha_envio?: true
    fecha_apertura?: true
    fecha_clic?: true
    _all?: true
  }

  export type Email_eventosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which email_eventos to aggregate.
     */
    where?: email_eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_eventos to fetch.
     */
    orderBy?: email_eventosOrderByWithRelationInput | email_eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: email_eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned email_eventos
    **/
    _count?: true | Email_eventosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Email_eventosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Email_eventosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Email_eventosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Email_eventosMaxAggregateInputType
  }

  export type GetEmail_eventosAggregateType<T extends Email_eventosAggregateArgs> = {
        [P in keyof T & keyof AggregateEmail_eventos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmail_eventos[P]>
      : GetScalarType<T[P], AggregateEmail_eventos[P]>
  }




  export type email_eventosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: email_eventosWhereInput
    orderBy?: email_eventosOrderByWithAggregationInput | email_eventosOrderByWithAggregationInput[]
    by: Email_eventosScalarFieldEnum[] | Email_eventosScalarFieldEnum
    having?: email_eventosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Email_eventosCountAggregateInputType | true
    _avg?: Email_eventosAvgAggregateInputType
    _sum?: Email_eventosSumAggregateInputType
    _min?: Email_eventosMinAggregateInputType
    _max?: Email_eventosMaxAggregateInputType
  }

  export type Email_eventosGroupByOutputType = {
    id_evento: number
    id_usuario: number | null
    correo: string
    tipo: string
    token: string
    fecha_envio: Date
    fecha_apertura: Date | null
    fecha_clic: Date | null
    _count: Email_eventosCountAggregateOutputType | null
    _avg: Email_eventosAvgAggregateOutputType | null
    _sum: Email_eventosSumAggregateOutputType | null
    _min: Email_eventosMinAggregateOutputType | null
    _max: Email_eventosMaxAggregateOutputType | null
  }

  type GetEmail_eventosGroupByPayload<T extends email_eventosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Email_eventosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Email_eventosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Email_eventosGroupByOutputType[P]>
            : GetScalarType<T[P], Email_eventosGroupByOutputType[P]>
        }
      >
    >


  export type email_eventosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    id_usuario?: boolean
    correo?: boolean
    tipo?: boolean
    token?: boolean
    fecha_envio?: boolean
    fecha_apertura?: boolean
    fecha_clic?: boolean
    usuarios?: boolean | email_eventos$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["email_eventos"]>



  export type email_eventosSelectScalar = {
    id_evento?: boolean
    id_usuario?: boolean
    correo?: boolean
    tipo?: boolean
    token?: boolean
    fecha_envio?: boolean
    fecha_apertura?: boolean
    fecha_clic?: boolean
  }

  export type email_eventosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_evento" | "id_usuario" | "correo" | "tipo" | "token" | "fecha_envio" | "fecha_apertura" | "fecha_clic", ExtArgs["result"]["email_eventos"]>
  export type email_eventosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | email_eventos$usuariosArgs<ExtArgs>
  }

  export type $email_eventosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "email_eventos"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_evento: number
      id_usuario: number | null
      correo: string
      tipo: string
      token: string
      fecha_envio: Date
      fecha_apertura: Date | null
      fecha_clic: Date | null
    }, ExtArgs["result"]["email_eventos"]>
    composites: {}
  }

  type email_eventosGetPayload<S extends boolean | null | undefined | email_eventosDefaultArgs> = $Result.GetResult<Prisma.$email_eventosPayload, S>

  type email_eventosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<email_eventosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Email_eventosCountAggregateInputType | true
    }

  export interface email_eventosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['email_eventos'], meta: { name: 'email_eventos' } }
    /**
     * Find zero or one Email_eventos that matches the filter.
     * @param {email_eventosFindUniqueArgs} args - Arguments to find a Email_eventos
     * @example
     * // Get one Email_eventos
     * const email_eventos = await prisma.email_eventos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends email_eventosFindUniqueArgs>(args: SelectSubset<T, email_eventosFindUniqueArgs<ExtArgs>>): Prisma__email_eventosClient<$Result.GetResult<Prisma.$email_eventosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Email_eventos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {email_eventosFindUniqueOrThrowArgs} args - Arguments to find a Email_eventos
     * @example
     * // Get one Email_eventos
     * const email_eventos = await prisma.email_eventos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends email_eventosFindUniqueOrThrowArgs>(args: SelectSubset<T, email_eventosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__email_eventosClient<$Result.GetResult<Prisma.$email_eventosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email_eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_eventosFindFirstArgs} args - Arguments to find a Email_eventos
     * @example
     * // Get one Email_eventos
     * const email_eventos = await prisma.email_eventos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends email_eventosFindFirstArgs>(args?: SelectSubset<T, email_eventosFindFirstArgs<ExtArgs>>): Prisma__email_eventosClient<$Result.GetResult<Prisma.$email_eventosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email_eventos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_eventosFindFirstOrThrowArgs} args - Arguments to find a Email_eventos
     * @example
     * // Get one Email_eventos
     * const email_eventos = await prisma.email_eventos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends email_eventosFindFirstOrThrowArgs>(args?: SelectSubset<T, email_eventosFindFirstOrThrowArgs<ExtArgs>>): Prisma__email_eventosClient<$Result.GetResult<Prisma.$email_eventosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Email_eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_eventosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Email_eventos
     * const email_eventos = await prisma.email_eventos.findMany()
     * 
     * // Get first 10 Email_eventos
     * const email_eventos = await prisma.email_eventos.findMany({ take: 10 })
     * 
     * // Only select the `id_evento`
     * const email_eventosWithId_eventoOnly = await prisma.email_eventos.findMany({ select: { id_evento: true } })
     * 
     */
    findMany<T extends email_eventosFindManyArgs>(args?: SelectSubset<T, email_eventosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_eventosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Email_eventos.
     * @param {email_eventosCreateArgs} args - Arguments to create a Email_eventos.
     * @example
     * // Create one Email_eventos
     * const Email_eventos = await prisma.email_eventos.create({
     *   data: {
     *     // ... data to create a Email_eventos
     *   }
     * })
     * 
     */
    create<T extends email_eventosCreateArgs>(args: SelectSubset<T, email_eventosCreateArgs<ExtArgs>>): Prisma__email_eventosClient<$Result.GetResult<Prisma.$email_eventosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Email_eventos.
     * @param {email_eventosCreateManyArgs} args - Arguments to create many Email_eventos.
     * @example
     * // Create many Email_eventos
     * const email_eventos = await prisma.email_eventos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends email_eventosCreateManyArgs>(args?: SelectSubset<T, email_eventosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Email_eventos.
     * @param {email_eventosDeleteArgs} args - Arguments to delete one Email_eventos.
     * @example
     * // Delete one Email_eventos
     * const Email_eventos = await prisma.email_eventos.delete({
     *   where: {
     *     // ... filter to delete one Email_eventos
     *   }
     * })
     * 
     */
    delete<T extends email_eventosDeleteArgs>(args: SelectSubset<T, email_eventosDeleteArgs<ExtArgs>>): Prisma__email_eventosClient<$Result.GetResult<Prisma.$email_eventosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Email_eventos.
     * @param {email_eventosUpdateArgs} args - Arguments to update one Email_eventos.
     * @example
     * // Update one Email_eventos
     * const email_eventos = await prisma.email_eventos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends email_eventosUpdateArgs>(args: SelectSubset<T, email_eventosUpdateArgs<ExtArgs>>): Prisma__email_eventosClient<$Result.GetResult<Prisma.$email_eventosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Email_eventos.
     * @param {email_eventosDeleteManyArgs} args - Arguments to filter Email_eventos to delete.
     * @example
     * // Delete a few Email_eventos
     * const { count } = await prisma.email_eventos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends email_eventosDeleteManyArgs>(args?: SelectSubset<T, email_eventosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Email_eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_eventosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Email_eventos
     * const email_eventos = await prisma.email_eventos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends email_eventosUpdateManyArgs>(args: SelectSubset<T, email_eventosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Email_eventos.
     * @param {email_eventosUpsertArgs} args - Arguments to update or create a Email_eventos.
     * @example
     * // Update or create a Email_eventos
     * const email_eventos = await prisma.email_eventos.upsert({
     *   create: {
     *     // ... data to create a Email_eventos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Email_eventos we want to update
     *   }
     * })
     */
    upsert<T extends email_eventosUpsertArgs>(args: SelectSubset<T, email_eventosUpsertArgs<ExtArgs>>): Prisma__email_eventosClient<$Result.GetResult<Prisma.$email_eventosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Email_eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_eventosCountArgs} args - Arguments to filter Email_eventos to count.
     * @example
     * // Count the number of Email_eventos
     * const count = await prisma.email_eventos.count({
     *   where: {
     *     // ... the filter for the Email_eventos we want to count
     *   }
     * })
    **/
    count<T extends email_eventosCountArgs>(
      args?: Subset<T, email_eventosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Email_eventosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Email_eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Email_eventosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Email_eventosAggregateArgs>(args: Subset<T, Email_eventosAggregateArgs>): Prisma.PrismaPromise<GetEmail_eventosAggregateType<T>>

    /**
     * Group by Email_eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_eventosGroupByArgs} args - Group by arguments.
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
      T extends email_eventosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: email_eventosGroupByArgs['orderBy'] }
        : { orderBy?: email_eventosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, email_eventosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmail_eventosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the email_eventos model
   */
  readonly fields: email_eventosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for email_eventos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__email_eventosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends email_eventos$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, email_eventos$usuariosArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the email_eventos model
   */
  interface email_eventosFieldRefs {
    readonly id_evento: FieldRef<"email_eventos", 'Int'>
    readonly id_usuario: FieldRef<"email_eventos", 'Int'>
    readonly correo: FieldRef<"email_eventos", 'String'>
    readonly tipo: FieldRef<"email_eventos", 'String'>
    readonly token: FieldRef<"email_eventos", 'String'>
    readonly fecha_envio: FieldRef<"email_eventos", 'DateTime'>
    readonly fecha_apertura: FieldRef<"email_eventos", 'DateTime'>
    readonly fecha_clic: FieldRef<"email_eventos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * email_eventos findUnique
   */
  export type email_eventosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_eventos
     */
    select?: email_eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_eventos
     */
    omit?: email_eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_eventosInclude<ExtArgs> | null
    /**
     * Filter, which email_eventos to fetch.
     */
    where: email_eventosWhereUniqueInput
  }

  /**
   * email_eventos findUniqueOrThrow
   */
  export type email_eventosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_eventos
     */
    select?: email_eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_eventos
     */
    omit?: email_eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_eventosInclude<ExtArgs> | null
    /**
     * Filter, which email_eventos to fetch.
     */
    where: email_eventosWhereUniqueInput
  }

  /**
   * email_eventos findFirst
   */
  export type email_eventosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_eventos
     */
    select?: email_eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_eventos
     */
    omit?: email_eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_eventosInclude<ExtArgs> | null
    /**
     * Filter, which email_eventos to fetch.
     */
    where?: email_eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_eventos to fetch.
     */
    orderBy?: email_eventosOrderByWithRelationInput | email_eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for email_eventos.
     */
    cursor?: email_eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of email_eventos.
     */
    distinct?: Email_eventosScalarFieldEnum | Email_eventosScalarFieldEnum[]
  }

  /**
   * email_eventos findFirstOrThrow
   */
  export type email_eventosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_eventos
     */
    select?: email_eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_eventos
     */
    omit?: email_eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_eventosInclude<ExtArgs> | null
    /**
     * Filter, which email_eventos to fetch.
     */
    where?: email_eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_eventos to fetch.
     */
    orderBy?: email_eventosOrderByWithRelationInput | email_eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for email_eventos.
     */
    cursor?: email_eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of email_eventos.
     */
    distinct?: Email_eventosScalarFieldEnum | Email_eventosScalarFieldEnum[]
  }

  /**
   * email_eventos findMany
   */
  export type email_eventosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_eventos
     */
    select?: email_eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_eventos
     */
    omit?: email_eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_eventosInclude<ExtArgs> | null
    /**
     * Filter, which email_eventos to fetch.
     */
    where?: email_eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_eventos to fetch.
     */
    orderBy?: email_eventosOrderByWithRelationInput | email_eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing email_eventos.
     */
    cursor?: email_eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_eventos.
     */
    skip?: number
    distinct?: Email_eventosScalarFieldEnum | Email_eventosScalarFieldEnum[]
  }

  /**
   * email_eventos create
   */
  export type email_eventosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_eventos
     */
    select?: email_eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_eventos
     */
    omit?: email_eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_eventosInclude<ExtArgs> | null
    /**
     * The data needed to create a email_eventos.
     */
    data: XOR<email_eventosCreateInput, email_eventosUncheckedCreateInput>
  }

  /**
   * email_eventos createMany
   */
  export type email_eventosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many email_eventos.
     */
    data: email_eventosCreateManyInput | email_eventosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * email_eventos update
   */
  export type email_eventosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_eventos
     */
    select?: email_eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_eventos
     */
    omit?: email_eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_eventosInclude<ExtArgs> | null
    /**
     * The data needed to update a email_eventos.
     */
    data: XOR<email_eventosUpdateInput, email_eventosUncheckedUpdateInput>
    /**
     * Choose, which email_eventos to update.
     */
    where: email_eventosWhereUniqueInput
  }

  /**
   * email_eventos updateMany
   */
  export type email_eventosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update email_eventos.
     */
    data: XOR<email_eventosUpdateManyMutationInput, email_eventosUncheckedUpdateManyInput>
    /**
     * Filter which email_eventos to update
     */
    where?: email_eventosWhereInput
    /**
     * Limit how many email_eventos to update.
     */
    limit?: number
  }

  /**
   * email_eventos upsert
   */
  export type email_eventosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_eventos
     */
    select?: email_eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_eventos
     */
    omit?: email_eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_eventosInclude<ExtArgs> | null
    /**
     * The filter to search for the email_eventos to update in case it exists.
     */
    where: email_eventosWhereUniqueInput
    /**
     * In case the email_eventos found by the `where` argument doesn't exist, create a new email_eventos with this data.
     */
    create: XOR<email_eventosCreateInput, email_eventosUncheckedCreateInput>
    /**
     * In case the email_eventos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<email_eventosUpdateInput, email_eventosUncheckedUpdateInput>
  }

  /**
   * email_eventos delete
   */
  export type email_eventosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_eventos
     */
    select?: email_eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_eventos
     */
    omit?: email_eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_eventosInclude<ExtArgs> | null
    /**
     * Filter which email_eventos to delete.
     */
    where: email_eventosWhereUniqueInput
  }

  /**
   * email_eventos deleteMany
   */
  export type email_eventosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which email_eventos to delete
     */
    where?: email_eventosWhereInput
    /**
     * Limit how many email_eventos to delete.
     */
    limit?: number
  }

  /**
   * email_eventos.usuarios
   */
  export type email_eventos$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
  }

  /**
   * email_eventos without action
   */
  export type email_eventosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_eventos
     */
    select?: email_eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_eventos
     */
    omit?: email_eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_eventosInclude<ExtArgs> | null
  }


  /**
   * Model reservas
   */

  export type AggregateReservas = {
    _count: ReservasCountAggregateOutputType | null
    _avg: ReservasAvgAggregateOutputType | null
    _sum: ReservasSumAggregateOutputType | null
    _min: ReservasMinAggregateOutputType | null
    _max: ReservasMaxAggregateOutputType | null
  }

  export type ReservasAvgAggregateOutputType = {
    id_reserva: number | null
    id_usuario: number | null
    personas: number | null
  }

  export type ReservasSumAggregateOutputType = {
    id_reserva: number | null
    id_usuario: number | null
    personas: number | null
  }

  export type ReservasMinAggregateOutputType = {
    id_reserva: number | null
    id_usuario: number | null
    nombre: string | null
    correo: string | null
    telefono: string | null
    fecha_reserva: Date | null
    personas: number | null
    salon: string | null
    estado: string | null
    notas: string | null
    creado_en: Date | null
  }

  export type ReservasMaxAggregateOutputType = {
    id_reserva: number | null
    id_usuario: number | null
    nombre: string | null
    correo: string | null
    telefono: string | null
    fecha_reserva: Date | null
    personas: number | null
    salon: string | null
    estado: string | null
    notas: string | null
    creado_en: Date | null
  }

  export type ReservasCountAggregateOutputType = {
    id_reserva: number
    id_usuario: number
    nombre: number
    correo: number
    telefono: number
    fecha_reserva: number
    personas: number
    salon: number
    estado: number
    notas: number
    creado_en: number
    _all: number
  }


  export type ReservasAvgAggregateInputType = {
    id_reserva?: true
    id_usuario?: true
    personas?: true
  }

  export type ReservasSumAggregateInputType = {
    id_reserva?: true
    id_usuario?: true
    personas?: true
  }

  export type ReservasMinAggregateInputType = {
    id_reserva?: true
    id_usuario?: true
    nombre?: true
    correo?: true
    telefono?: true
    fecha_reserva?: true
    personas?: true
    salon?: true
    estado?: true
    notas?: true
    creado_en?: true
  }

  export type ReservasMaxAggregateInputType = {
    id_reserva?: true
    id_usuario?: true
    nombre?: true
    correo?: true
    telefono?: true
    fecha_reserva?: true
    personas?: true
    salon?: true
    estado?: true
    notas?: true
    creado_en?: true
  }

  export type ReservasCountAggregateInputType = {
    id_reserva?: true
    id_usuario?: true
    nombre?: true
    correo?: true
    telefono?: true
    fecha_reserva?: true
    personas?: true
    salon?: true
    estado?: true
    notas?: true
    creado_en?: true
    _all?: true
  }

  export type ReservasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reservas to aggregate.
     */
    where?: reservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservasOrderByWithRelationInput | reservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reservas
    **/
    _count?: true | ReservasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservasMaxAggregateInputType
  }

  export type GetReservasAggregateType<T extends ReservasAggregateArgs> = {
        [P in keyof T & keyof AggregateReservas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservas[P]>
      : GetScalarType<T[P], AggregateReservas[P]>
  }




  export type reservasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservasWhereInput
    orderBy?: reservasOrderByWithAggregationInput | reservasOrderByWithAggregationInput[]
    by: ReservasScalarFieldEnum[] | ReservasScalarFieldEnum
    having?: reservasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservasCountAggregateInputType | true
    _avg?: ReservasAvgAggregateInputType
    _sum?: ReservasSumAggregateInputType
    _min?: ReservasMinAggregateInputType
    _max?: ReservasMaxAggregateInputType
  }

  export type ReservasGroupByOutputType = {
    id_reserva: number
    id_usuario: number | null
    nombre: string
    correo: string | null
    telefono: string | null
    fecha_reserva: Date
    personas: number
    salon: string | null
    estado: string
    notas: string | null
    creado_en: Date
    _count: ReservasCountAggregateOutputType | null
    _avg: ReservasAvgAggregateOutputType | null
    _sum: ReservasSumAggregateOutputType | null
    _min: ReservasMinAggregateOutputType | null
    _max: ReservasMaxAggregateOutputType | null
  }

  type GetReservasGroupByPayload<T extends reservasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservasGroupByOutputType[P]>
            : GetScalarType<T[P], ReservasGroupByOutputType[P]>
        }
      >
    >


  export type reservasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reserva?: boolean
    id_usuario?: boolean
    nombre?: boolean
    correo?: boolean
    telefono?: boolean
    fecha_reserva?: boolean
    personas?: boolean
    salon?: boolean
    estado?: boolean
    notas?: boolean
    creado_en?: boolean
    usuarios?: boolean | reservas$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["reservas"]>



  export type reservasSelectScalar = {
    id_reserva?: boolean
    id_usuario?: boolean
    nombre?: boolean
    correo?: boolean
    telefono?: boolean
    fecha_reserva?: boolean
    personas?: boolean
    salon?: boolean
    estado?: boolean
    notas?: boolean
    creado_en?: boolean
  }

  export type reservasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_reserva" | "id_usuario" | "nombre" | "correo" | "telefono" | "fecha_reserva" | "personas" | "salon" | "estado" | "notas" | "creado_en", ExtArgs["result"]["reservas"]>
  export type reservasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | reservas$usuariosArgs<ExtArgs>
  }

  export type $reservasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reservas"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_reserva: number
      id_usuario: number | null
      nombre: string
      correo: string | null
      telefono: string | null
      fecha_reserva: Date
      personas: number
      salon: string | null
      estado: string
      notas: string | null
      creado_en: Date
    }, ExtArgs["result"]["reservas"]>
    composites: {}
  }

  type reservasGetPayload<S extends boolean | null | undefined | reservasDefaultArgs> = $Result.GetResult<Prisma.$reservasPayload, S>

  type reservasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reservasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservasCountAggregateInputType | true
    }

  export interface reservasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reservas'], meta: { name: 'reservas' } }
    /**
     * Find zero or one Reservas that matches the filter.
     * @param {reservasFindUniqueArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reservasFindUniqueArgs>(args: SelectSubset<T, reservasFindUniqueArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reservasFindUniqueOrThrowArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reservasFindUniqueOrThrowArgs>(args: SelectSubset<T, reservasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasFindFirstArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reservasFindFirstArgs>(args?: SelectSubset<T, reservasFindFirstArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasFindFirstOrThrowArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reservasFindFirstOrThrowArgs>(args?: SelectSubset<T, reservasFindFirstOrThrowArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservas
     * const reservas = await prisma.reservas.findMany()
     * 
     * // Get first 10 Reservas
     * const reservas = await prisma.reservas.findMany({ take: 10 })
     * 
     * // Only select the `id_reserva`
     * const reservasWithId_reservaOnly = await prisma.reservas.findMany({ select: { id_reserva: true } })
     * 
     */
    findMany<T extends reservasFindManyArgs>(args?: SelectSubset<T, reservasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservas.
     * @param {reservasCreateArgs} args - Arguments to create a Reservas.
     * @example
     * // Create one Reservas
     * const Reservas = await prisma.reservas.create({
     *   data: {
     *     // ... data to create a Reservas
     *   }
     * })
     * 
     */
    create<T extends reservasCreateArgs>(args: SelectSubset<T, reservasCreateArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservas.
     * @param {reservasCreateManyArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reservas = await prisma.reservas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reservasCreateManyArgs>(args?: SelectSubset<T, reservasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reservas.
     * @param {reservasDeleteArgs} args - Arguments to delete one Reservas.
     * @example
     * // Delete one Reservas
     * const Reservas = await prisma.reservas.delete({
     *   where: {
     *     // ... filter to delete one Reservas
     *   }
     * })
     * 
     */
    delete<T extends reservasDeleteArgs>(args: SelectSubset<T, reservasDeleteArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservas.
     * @param {reservasUpdateArgs} args - Arguments to update one Reservas.
     * @example
     * // Update one Reservas
     * const reservas = await prisma.reservas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reservasUpdateArgs>(args: SelectSubset<T, reservasUpdateArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservas.
     * @param {reservasDeleteManyArgs} args - Arguments to filter Reservas to delete.
     * @example
     * // Delete a few Reservas
     * const { count } = await prisma.reservas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reservasDeleteManyArgs>(args?: SelectSubset<T, reservasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservas
     * const reservas = await prisma.reservas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reservasUpdateManyArgs>(args: SelectSubset<T, reservasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reservas.
     * @param {reservasUpsertArgs} args - Arguments to update or create a Reservas.
     * @example
     * // Update or create a Reservas
     * const reservas = await prisma.reservas.upsert({
     *   create: {
     *     // ... data to create a Reservas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservas we want to update
     *   }
     * })
     */
    upsert<T extends reservasUpsertArgs>(args: SelectSubset<T, reservasUpsertArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasCountArgs} args - Arguments to filter Reservas to count.
     * @example
     * // Count the number of Reservas
     * const count = await prisma.reservas.count({
     *   where: {
     *     // ... the filter for the Reservas we want to count
     *   }
     * })
    **/
    count<T extends reservasCountArgs>(
      args?: Subset<T, reservasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservasAggregateArgs>(args: Subset<T, ReservasAggregateArgs>): Prisma.PrismaPromise<GetReservasAggregateType<T>>

    /**
     * Group by Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasGroupByArgs} args - Group by arguments.
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
      T extends reservasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reservasGroupByArgs['orderBy'] }
        : { orderBy?: reservasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reservasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reservas model
   */
  readonly fields: reservasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reservas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reservasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends reservas$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, reservas$usuariosArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the reservas model
   */
  interface reservasFieldRefs {
    readonly id_reserva: FieldRef<"reservas", 'Int'>
    readonly id_usuario: FieldRef<"reservas", 'Int'>
    readonly nombre: FieldRef<"reservas", 'String'>
    readonly correo: FieldRef<"reservas", 'String'>
    readonly telefono: FieldRef<"reservas", 'String'>
    readonly fecha_reserva: FieldRef<"reservas", 'DateTime'>
    readonly personas: FieldRef<"reservas", 'Int'>
    readonly salon: FieldRef<"reservas", 'String'>
    readonly estado: FieldRef<"reservas", 'String'>
    readonly notas: FieldRef<"reservas", 'String'>
    readonly creado_en: FieldRef<"reservas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * reservas findUnique
   */
  export type reservasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where: reservasWhereUniqueInput
  }

  /**
   * reservas findUniqueOrThrow
   */
  export type reservasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where: reservasWhereUniqueInput
  }

  /**
   * reservas findFirst
   */
  export type reservasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where?: reservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservasOrderByWithRelationInput | reservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservas.
     */
    cursor?: reservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservas.
     */
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * reservas findFirstOrThrow
   */
  export type reservasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where?: reservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservasOrderByWithRelationInput | reservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservas.
     */
    cursor?: reservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservas.
     */
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * reservas findMany
   */
  export type reservasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where?: reservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservasOrderByWithRelationInput | reservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reservas.
     */
    cursor?: reservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * reservas create
   */
  export type reservasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * The data needed to create a reservas.
     */
    data: XOR<reservasCreateInput, reservasUncheckedCreateInput>
  }

  /**
   * reservas createMany
   */
  export type reservasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reservas.
     */
    data: reservasCreateManyInput | reservasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reservas update
   */
  export type reservasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * The data needed to update a reservas.
     */
    data: XOR<reservasUpdateInput, reservasUncheckedUpdateInput>
    /**
     * Choose, which reservas to update.
     */
    where: reservasWhereUniqueInput
  }

  /**
   * reservas updateMany
   */
  export type reservasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reservas.
     */
    data: XOR<reservasUpdateManyMutationInput, reservasUncheckedUpdateManyInput>
    /**
     * Filter which reservas to update
     */
    where?: reservasWhereInput
    /**
     * Limit how many reservas to update.
     */
    limit?: number
  }

  /**
   * reservas upsert
   */
  export type reservasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * The filter to search for the reservas to update in case it exists.
     */
    where: reservasWhereUniqueInput
    /**
     * In case the reservas found by the `where` argument doesn't exist, create a new reservas with this data.
     */
    create: XOR<reservasCreateInput, reservasUncheckedCreateInput>
    /**
     * In case the reservas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reservasUpdateInput, reservasUncheckedUpdateInput>
  }

  /**
   * reservas delete
   */
  export type reservasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * Filter which reservas to delete.
     */
    where: reservasWhereUniqueInput
  }

  /**
   * reservas deleteMany
   */
  export type reservasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reservas to delete
     */
    where?: reservasWhereInput
    /**
     * Limit how many reservas to delete.
     */
    limit?: number
  }

  /**
   * reservas.usuarios
   */
  export type reservas$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
  }

  /**
   * reservas without action
   */
  export type reservasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
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


  export const AccesoqrScalarFieldEnum: {
    id_accesoQR: 'id_accesoQR',
    id_usuario: 'id_usuario',
    fecha_acceso: 'fecha_acceso',
    id_tipoAcceso: 'id_tipoAcceso'
  };

  export type AccesoqrScalarFieldEnum = (typeof AccesoqrScalarFieldEnum)[keyof typeof AccesoqrScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id_categoria: 'id_categoria',
    nombre_categoria: 'nombre_categoria'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const ComprobanteScalarFieldEnum: {
    id_comprobante: 'id_comprobante',
    nombre_comprobante: 'nombre_comprobante'
  };

  export type ComprobanteScalarFieldEnum = (typeof ComprobanteScalarFieldEnum)[keyof typeof ComprobanteScalarFieldEnum]


  export const DetalleventaScalarFieldEnum: {
    id_detalleVenta: 'id_detalleVenta',
    id_venta: 'id_venta',
    id_producto: 'id_producto',
    cantidad: 'cantidad',
    subtotal: 'subtotal'
  };

  export type DetalleventaScalarFieldEnum = (typeof DetalleventaScalarFieldEnum)[keyof typeof DetalleventaScalarFieldEnum]


  export const MetodopagoScalarFieldEnum: {
    id_metodoPago: 'id_metodoPago',
    nombre_metodoPago: 'nombre_metodoPago'
  };

  export type MetodopagoScalarFieldEnum = (typeof MetodopagoScalarFieldEnum)[keyof typeof MetodopagoScalarFieldEnum]


  export const ProductosScalarFieldEnum: {
    id_producto: 'id_producto',
    nombre_producto: 'nombre_producto',
    descripcion: 'descripcion',
    descripcion_corta: 'descripcion_corta',
    tags_seo: 'tags_seo',
    seo_generado_en: 'seo_generado_en',
    id_categoria: 'id_categoria',
    stock: 'stock',
    precio: 'precio',
    descuento: 'descuento'
  };

  export type ProductosScalarFieldEnum = (typeof ProductosScalarFieldEnum)[keyof typeof ProductosScalarFieldEnum]


  export const TipoaccesoScalarFieldEnum: {
    id_tipoAcceso: 'id_tipoAcceso',
    nombre_tipoAcceso: 'nombre_tipoAcceso'
  };

  export type TipoaccesoScalarFieldEnum = (typeof TipoaccesoScalarFieldEnum)[keyof typeof TipoaccesoScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id_usuario: 'id_usuario',
    rol_usuario: 'rol_usuario',
    nombre_usuario: 'nombre_usuario',
    correo_usuario: 'correo_usuario',
    clave_usuario: 'clave_usuario',
    telefono_usuario: 'telefono_usuario',
    direccion_usuario: 'direccion_usuario',
    fecha_registro: 'fecha_registro',
    contador_bubbleTea: 'contador_bubbleTea',
    regalo_bubbleTea: 'regalo_bubbleTea',
    score: 'score'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const VentasScalarFieldEnum: {
    id_venta: 'id_venta',
    id_usuario: 'id_usuario',
    fecha_venta: 'fecha_venta',
    total: 'total',
    id_metodoPago: 'id_metodoPago',
    id_comprobante: 'id_comprobante',
    estado: 'estado',
    metodo_entrega: 'metodo_entrega',
    direccion_entrega: 'direccion_entrega',
    referencia_entrega: 'referencia_entrega',
    repartidor: 'repartidor',
    telefono_repartidor: 'telefono_repartidor',
    tiempo_estimado_min: 'tiempo_estimado_min',
    entregado_en: 'entregado_en'
  };

  export type VentasScalarFieldEnum = (typeof VentasScalarFieldEnum)[keyof typeof VentasScalarFieldEnum]


  export const AlergenoproductoScalarFieldEnum: {
    id_alergeno: 'id_alergeno',
    id_producto: 'id_producto',
    nombre: 'nombre'
  };

  export type AlergenoproductoScalarFieldEnum = (typeof AlergenoproductoScalarFieldEnum)[keyof typeof AlergenoproductoScalarFieldEnum]


  export const IngredienteproductoScalarFieldEnum: {
    id_ingrediente: 'id_ingrediente',
    id_producto: 'id_producto',
    nombre: 'nombre'
  };

  export type IngredienteproductoScalarFieldEnum = (typeof IngredienteproductoScalarFieldEnum)[keyof typeof IngredienteproductoScalarFieldEnum]


  export const TicketsScalarFieldEnum: {
    id_ticket: 'id_ticket',
    nombre_ticket: 'nombre_ticket',
    codigo_ticket: 'codigo_ticket',
    descuento: 'descuento',
    usado: 'usado',
    id_usuario: 'id_usuario'
  };

  export type TicketsScalarFieldEnum = (typeof TicketsScalarFieldEnum)[keyof typeof TicketsScalarFieldEnum]


  export const Reseteo_semanalScalarFieldEnum: {
    id_reseteo: 'id_reseteo',
    fecha_ultimo_reset: 'fecha_ultimo_reset',
    semana_anio: 'semana_anio',
    anio: 'anio'
  };

  export type Reseteo_semanalScalarFieldEnum = (typeof Reseteo_semanalScalarFieldEnum)[keyof typeof Reseteo_semanalScalarFieldEnum]


  export const Ia_conversacionesScalarFieldEnum: {
    id_conversacion: 'id_conversacion',
    id_usuario: 'id_usuario',
    mensaje_usuario: 'mensaje_usuario',
    respuesta_ia: 'respuesta_ia',
    intencion: 'intencion',
    confianza: 'confianza',
    resuelta: 'resuelta',
    canal: 'canal',
    fecha: 'fecha'
  };

  export type Ia_conversacionesScalarFieldEnum = (typeof Ia_conversacionesScalarFieldEnum)[keyof typeof Ia_conversacionesScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id_feedback: 'id_feedback',
    nombre: 'nombre',
    correo: 'correo',
    mensaje: 'mensaje',
    canal: 'canal',
    sentimiento: 'sentimiento',
    categoria: 'categoria',
    criticidad: 'criticidad',
    nps: 'nps',
    atendido: 'atendido',
    respuesta: 'respuesta',
    fecha_creacion: 'fecha_creacion',
    fecha_atencion: 'fecha_atencion'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const Email_eventosScalarFieldEnum: {
    id_evento: 'id_evento',
    id_usuario: 'id_usuario',
    correo: 'correo',
    tipo: 'tipo',
    token: 'token',
    fecha_envio: 'fecha_envio',
    fecha_apertura: 'fecha_apertura',
    fecha_clic: 'fecha_clic'
  };

  export type Email_eventosScalarFieldEnum = (typeof Email_eventosScalarFieldEnum)[keyof typeof Email_eventosScalarFieldEnum]


  export const ReservasScalarFieldEnum: {
    id_reserva: 'id_reserva',
    id_usuario: 'id_usuario',
    nombre: 'nombre',
    correo: 'correo',
    telefono: 'telefono',
    fecha_reserva: 'fecha_reserva',
    personas: 'personas',
    salon: 'salon',
    estado: 'estado',
    notas: 'notas',
    creado_en: 'creado_en'
  };

  export type ReservasScalarFieldEnum = (typeof ReservasScalarFieldEnum)[keyof typeof ReservasScalarFieldEnum]


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


  export const categoriaOrderByRelevanceFieldEnum: {
    nombre_categoria: 'nombre_categoria'
  };

  export type categoriaOrderByRelevanceFieldEnum = (typeof categoriaOrderByRelevanceFieldEnum)[keyof typeof categoriaOrderByRelevanceFieldEnum]


  export const comprobanteOrderByRelevanceFieldEnum: {
    nombre_comprobante: 'nombre_comprobante'
  };

  export type comprobanteOrderByRelevanceFieldEnum = (typeof comprobanteOrderByRelevanceFieldEnum)[keyof typeof comprobanteOrderByRelevanceFieldEnum]


  export const metodopagoOrderByRelevanceFieldEnum: {
    nombre_metodoPago: 'nombre_metodoPago'
  };

  export type metodopagoOrderByRelevanceFieldEnum = (typeof metodopagoOrderByRelevanceFieldEnum)[keyof typeof metodopagoOrderByRelevanceFieldEnum]


  export const productosOrderByRelevanceFieldEnum: {
    nombre_producto: 'nombre_producto',
    descripcion: 'descripcion',
    descripcion_corta: 'descripcion_corta',
    tags_seo: 'tags_seo'
  };

  export type productosOrderByRelevanceFieldEnum = (typeof productosOrderByRelevanceFieldEnum)[keyof typeof productosOrderByRelevanceFieldEnum]


  export const tipoaccesoOrderByRelevanceFieldEnum: {
    nombre_tipoAcceso: 'nombre_tipoAcceso'
  };

  export type tipoaccesoOrderByRelevanceFieldEnum = (typeof tipoaccesoOrderByRelevanceFieldEnum)[keyof typeof tipoaccesoOrderByRelevanceFieldEnum]


  export const usuariosOrderByRelevanceFieldEnum: {
    nombre_usuario: 'nombre_usuario',
    correo_usuario: 'correo_usuario',
    clave_usuario: 'clave_usuario',
    telefono_usuario: 'telefono_usuario',
    direccion_usuario: 'direccion_usuario'
  };

  export type usuariosOrderByRelevanceFieldEnum = (typeof usuariosOrderByRelevanceFieldEnum)[keyof typeof usuariosOrderByRelevanceFieldEnum]


  export const ventasOrderByRelevanceFieldEnum: {
    estado: 'estado',
    metodo_entrega: 'metodo_entrega',
    direccion_entrega: 'direccion_entrega',
    referencia_entrega: 'referencia_entrega',
    repartidor: 'repartidor',
    telefono_repartidor: 'telefono_repartidor'
  };

  export type ventasOrderByRelevanceFieldEnum = (typeof ventasOrderByRelevanceFieldEnum)[keyof typeof ventasOrderByRelevanceFieldEnum]


  export const alergenoproductoOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type alergenoproductoOrderByRelevanceFieldEnum = (typeof alergenoproductoOrderByRelevanceFieldEnum)[keyof typeof alergenoproductoOrderByRelevanceFieldEnum]


  export const ingredienteproductoOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type ingredienteproductoOrderByRelevanceFieldEnum = (typeof ingredienteproductoOrderByRelevanceFieldEnum)[keyof typeof ingredienteproductoOrderByRelevanceFieldEnum]


  export const ticketsOrderByRelevanceFieldEnum: {
    nombre_ticket: 'nombre_ticket',
    codigo_ticket: 'codigo_ticket'
  };

  export type ticketsOrderByRelevanceFieldEnum = (typeof ticketsOrderByRelevanceFieldEnum)[keyof typeof ticketsOrderByRelevanceFieldEnum]


  export const ia_conversacionesOrderByRelevanceFieldEnum: {
    mensaje_usuario: 'mensaje_usuario',
    respuesta_ia: 'respuesta_ia',
    intencion: 'intencion',
    canal: 'canal'
  };

  export type ia_conversacionesOrderByRelevanceFieldEnum = (typeof ia_conversacionesOrderByRelevanceFieldEnum)[keyof typeof ia_conversacionesOrderByRelevanceFieldEnum]


  export const feedbackOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    correo: 'correo',
    mensaje: 'mensaje',
    canal: 'canal',
    sentimiento: 'sentimiento',
    categoria: 'categoria',
    respuesta: 'respuesta'
  };

  export type feedbackOrderByRelevanceFieldEnum = (typeof feedbackOrderByRelevanceFieldEnum)[keyof typeof feedbackOrderByRelevanceFieldEnum]


  export const email_eventosOrderByRelevanceFieldEnum: {
    correo: 'correo',
    tipo: 'tipo',
    token: 'token'
  };

  export type email_eventosOrderByRelevanceFieldEnum = (typeof email_eventosOrderByRelevanceFieldEnum)[keyof typeof email_eventosOrderByRelevanceFieldEnum]


  export const reservasOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    correo: 'correo',
    telefono: 'telefono',
    salon: 'salon',
    estado: 'estado',
    notas: 'notas'
  };

  export type reservasOrderByRelevanceFieldEnum = (typeof reservasOrderByRelevanceFieldEnum)[keyof typeof reservasOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type accesoqrWhereInput = {
    AND?: accesoqrWhereInput | accesoqrWhereInput[]
    OR?: accesoqrWhereInput[]
    NOT?: accesoqrWhereInput | accesoqrWhereInput[]
    id_accesoQR?: IntFilter<"accesoqr"> | number
    id_usuario?: IntNullableFilter<"accesoqr"> | number | null
    fecha_acceso?: DateTimeFilter<"accesoqr"> | Date | string
    id_tipoAcceso?: IntFilter<"accesoqr"> | number
    tipoacceso?: XOR<TipoaccesoScalarRelationFilter, tipoaccesoWhereInput>
  }

  export type accesoqrOrderByWithRelationInput = {
    id_accesoQR?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    fecha_acceso?: SortOrder
    id_tipoAcceso?: SortOrder
    tipoacceso?: tipoaccesoOrderByWithRelationInput
  }

  export type accesoqrWhereUniqueInput = Prisma.AtLeast<{
    id_accesoQR?: number
    AND?: accesoqrWhereInput | accesoqrWhereInput[]
    OR?: accesoqrWhereInput[]
    NOT?: accesoqrWhereInput | accesoqrWhereInput[]
    id_usuario?: IntNullableFilter<"accesoqr"> | number | null
    fecha_acceso?: DateTimeFilter<"accesoqr"> | Date | string
    id_tipoAcceso?: IntFilter<"accesoqr"> | number
    tipoacceso?: XOR<TipoaccesoScalarRelationFilter, tipoaccesoWhereInput>
  }, "id_accesoQR">

  export type accesoqrOrderByWithAggregationInput = {
    id_accesoQR?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    fecha_acceso?: SortOrder
    id_tipoAcceso?: SortOrder
    _count?: accesoqrCountOrderByAggregateInput
    _avg?: accesoqrAvgOrderByAggregateInput
    _max?: accesoqrMaxOrderByAggregateInput
    _min?: accesoqrMinOrderByAggregateInput
    _sum?: accesoqrSumOrderByAggregateInput
  }

  export type accesoqrScalarWhereWithAggregatesInput = {
    AND?: accesoqrScalarWhereWithAggregatesInput | accesoqrScalarWhereWithAggregatesInput[]
    OR?: accesoqrScalarWhereWithAggregatesInput[]
    NOT?: accesoqrScalarWhereWithAggregatesInput | accesoqrScalarWhereWithAggregatesInput[]
    id_accesoQR?: IntWithAggregatesFilter<"accesoqr"> | number
    id_usuario?: IntNullableWithAggregatesFilter<"accesoqr"> | number | null
    fecha_acceso?: DateTimeWithAggregatesFilter<"accesoqr"> | Date | string
    id_tipoAcceso?: IntWithAggregatesFilter<"accesoqr"> | number
  }

  export type categoriaWhereInput = {
    AND?: categoriaWhereInput | categoriaWhereInput[]
    OR?: categoriaWhereInput[]
    NOT?: categoriaWhereInput | categoriaWhereInput[]
    id_categoria?: IntFilter<"categoria"> | number
    nombre_categoria?: StringFilter<"categoria"> | string
    productos?: ProductosListRelationFilter
  }

  export type categoriaOrderByWithRelationInput = {
    id_categoria?: SortOrder
    nombre_categoria?: SortOrder
    productos?: productosOrderByRelationAggregateInput
    _relevance?: categoriaOrderByRelevanceInput
  }

  export type categoriaWhereUniqueInput = Prisma.AtLeast<{
    id_categoria?: number
    AND?: categoriaWhereInput | categoriaWhereInput[]
    OR?: categoriaWhereInput[]
    NOT?: categoriaWhereInput | categoriaWhereInput[]
    nombre_categoria?: StringFilter<"categoria"> | string
    productos?: ProductosListRelationFilter
  }, "id_categoria">

  export type categoriaOrderByWithAggregationInput = {
    id_categoria?: SortOrder
    nombre_categoria?: SortOrder
    _count?: categoriaCountOrderByAggregateInput
    _avg?: categoriaAvgOrderByAggregateInput
    _max?: categoriaMaxOrderByAggregateInput
    _min?: categoriaMinOrderByAggregateInput
    _sum?: categoriaSumOrderByAggregateInput
  }

  export type categoriaScalarWhereWithAggregatesInput = {
    AND?: categoriaScalarWhereWithAggregatesInput | categoriaScalarWhereWithAggregatesInput[]
    OR?: categoriaScalarWhereWithAggregatesInput[]
    NOT?: categoriaScalarWhereWithAggregatesInput | categoriaScalarWhereWithAggregatesInput[]
    id_categoria?: IntWithAggregatesFilter<"categoria"> | number
    nombre_categoria?: StringWithAggregatesFilter<"categoria"> | string
  }

  export type comprobanteWhereInput = {
    AND?: comprobanteWhereInput | comprobanteWhereInput[]
    OR?: comprobanteWhereInput[]
    NOT?: comprobanteWhereInput | comprobanteWhereInput[]
    id_comprobante?: IntFilter<"comprobante"> | number
    nombre_comprobante?: StringFilter<"comprobante"> | string
    ventas?: VentasListRelationFilter
  }

  export type comprobanteOrderByWithRelationInput = {
    id_comprobante?: SortOrder
    nombre_comprobante?: SortOrder
    ventas?: ventasOrderByRelationAggregateInput
    _relevance?: comprobanteOrderByRelevanceInput
  }

  export type comprobanteWhereUniqueInput = Prisma.AtLeast<{
    id_comprobante?: number
    AND?: comprobanteWhereInput | comprobanteWhereInput[]
    OR?: comprobanteWhereInput[]
    NOT?: comprobanteWhereInput | comprobanteWhereInput[]
    nombre_comprobante?: StringFilter<"comprobante"> | string
    ventas?: VentasListRelationFilter
  }, "id_comprobante">

  export type comprobanteOrderByWithAggregationInput = {
    id_comprobante?: SortOrder
    nombre_comprobante?: SortOrder
    _count?: comprobanteCountOrderByAggregateInput
    _avg?: comprobanteAvgOrderByAggregateInput
    _max?: comprobanteMaxOrderByAggregateInput
    _min?: comprobanteMinOrderByAggregateInput
    _sum?: comprobanteSumOrderByAggregateInput
  }

  export type comprobanteScalarWhereWithAggregatesInput = {
    AND?: comprobanteScalarWhereWithAggregatesInput | comprobanteScalarWhereWithAggregatesInput[]
    OR?: comprobanteScalarWhereWithAggregatesInput[]
    NOT?: comprobanteScalarWhereWithAggregatesInput | comprobanteScalarWhereWithAggregatesInput[]
    id_comprobante?: IntWithAggregatesFilter<"comprobante"> | number
    nombre_comprobante?: StringWithAggregatesFilter<"comprobante"> | string
  }

  export type detalleventaWhereInput = {
    AND?: detalleventaWhereInput | detalleventaWhereInput[]
    OR?: detalleventaWhereInput[]
    NOT?: detalleventaWhereInput | detalleventaWhereInput[]
    id_detalleVenta?: IntFilter<"detalleventa"> | number
    id_venta?: IntFilter<"detalleventa"> | number
    id_producto?: IntFilter<"detalleventa"> | number
    cantidad?: IntFilter<"detalleventa"> | number
    subtotal?: DecimalFilter<"detalleventa"> | Decimal | DecimalJsLike | number | string
    productos?: XOR<ProductosScalarRelationFilter, productosWhereInput>
    ventas?: XOR<VentasScalarRelationFilter, ventasWhereInput>
  }

  export type detalleventaOrderByWithRelationInput = {
    id_detalleVenta?: SortOrder
    id_venta?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
    subtotal?: SortOrder
    productos?: productosOrderByWithRelationInput
    ventas?: ventasOrderByWithRelationInput
  }

  export type detalleventaWhereUniqueInput = Prisma.AtLeast<{
    id_detalleVenta?: number
    AND?: detalleventaWhereInput | detalleventaWhereInput[]
    OR?: detalleventaWhereInput[]
    NOT?: detalleventaWhereInput | detalleventaWhereInput[]
    id_venta?: IntFilter<"detalleventa"> | number
    id_producto?: IntFilter<"detalleventa"> | number
    cantidad?: IntFilter<"detalleventa"> | number
    subtotal?: DecimalFilter<"detalleventa"> | Decimal | DecimalJsLike | number | string
    productos?: XOR<ProductosScalarRelationFilter, productosWhereInput>
    ventas?: XOR<VentasScalarRelationFilter, ventasWhereInput>
  }, "id_detalleVenta">

  export type detalleventaOrderByWithAggregationInput = {
    id_detalleVenta?: SortOrder
    id_venta?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
    subtotal?: SortOrder
    _count?: detalleventaCountOrderByAggregateInput
    _avg?: detalleventaAvgOrderByAggregateInput
    _max?: detalleventaMaxOrderByAggregateInput
    _min?: detalleventaMinOrderByAggregateInput
    _sum?: detalleventaSumOrderByAggregateInput
  }

  export type detalleventaScalarWhereWithAggregatesInput = {
    AND?: detalleventaScalarWhereWithAggregatesInput | detalleventaScalarWhereWithAggregatesInput[]
    OR?: detalleventaScalarWhereWithAggregatesInput[]
    NOT?: detalleventaScalarWhereWithAggregatesInput | detalleventaScalarWhereWithAggregatesInput[]
    id_detalleVenta?: IntWithAggregatesFilter<"detalleventa"> | number
    id_venta?: IntWithAggregatesFilter<"detalleventa"> | number
    id_producto?: IntWithAggregatesFilter<"detalleventa"> | number
    cantidad?: IntWithAggregatesFilter<"detalleventa"> | number
    subtotal?: DecimalWithAggregatesFilter<"detalleventa"> | Decimal | DecimalJsLike | number | string
  }

  export type metodopagoWhereInput = {
    AND?: metodopagoWhereInput | metodopagoWhereInput[]
    OR?: metodopagoWhereInput[]
    NOT?: metodopagoWhereInput | metodopagoWhereInput[]
    id_metodoPago?: IntFilter<"metodopago"> | number
    nombre_metodoPago?: StringFilter<"metodopago"> | string
    ventas?: VentasListRelationFilter
  }

  export type metodopagoOrderByWithRelationInput = {
    id_metodoPago?: SortOrder
    nombre_metodoPago?: SortOrder
    ventas?: ventasOrderByRelationAggregateInput
    _relevance?: metodopagoOrderByRelevanceInput
  }

  export type metodopagoWhereUniqueInput = Prisma.AtLeast<{
    id_metodoPago?: number
    AND?: metodopagoWhereInput | metodopagoWhereInput[]
    OR?: metodopagoWhereInput[]
    NOT?: metodopagoWhereInput | metodopagoWhereInput[]
    nombre_metodoPago?: StringFilter<"metodopago"> | string
    ventas?: VentasListRelationFilter
  }, "id_metodoPago">

  export type metodopagoOrderByWithAggregationInput = {
    id_metodoPago?: SortOrder
    nombre_metodoPago?: SortOrder
    _count?: metodopagoCountOrderByAggregateInput
    _avg?: metodopagoAvgOrderByAggregateInput
    _max?: metodopagoMaxOrderByAggregateInput
    _min?: metodopagoMinOrderByAggregateInput
    _sum?: metodopagoSumOrderByAggregateInput
  }

  export type metodopagoScalarWhereWithAggregatesInput = {
    AND?: metodopagoScalarWhereWithAggregatesInput | metodopagoScalarWhereWithAggregatesInput[]
    OR?: metodopagoScalarWhereWithAggregatesInput[]
    NOT?: metodopagoScalarWhereWithAggregatesInput | metodopagoScalarWhereWithAggregatesInput[]
    id_metodoPago?: IntWithAggregatesFilter<"metodopago"> | number
    nombre_metodoPago?: StringWithAggregatesFilter<"metodopago"> | string
  }

  export type productosWhereInput = {
    AND?: productosWhereInput | productosWhereInput[]
    OR?: productosWhereInput[]
    NOT?: productosWhereInput | productosWhereInput[]
    id_producto?: IntFilter<"productos"> | number
    nombre_producto?: StringFilter<"productos"> | string
    descripcion?: StringNullableFilter<"productos"> | string | null
    descripcion_corta?: StringNullableFilter<"productos"> | string | null
    tags_seo?: StringNullableFilter<"productos"> | string | null
    seo_generado_en?: DateTimeNullableFilter<"productos"> | Date | string | null
    id_categoria?: IntFilter<"productos"> | number
    stock?: IntFilter<"productos"> | number
    precio?: DecimalFilter<"productos"> | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFilter<"productos"> | Decimal | DecimalJsLike | number | string
    alergenoproducto?: AlergenoproductoListRelationFilter
    detalleventa?: DetalleventaListRelationFilter
    ingredienteproducto?: IngredienteproductoListRelationFilter
    categoria?: XOR<CategoriaScalarRelationFilter, categoriaWhereInput>
  }

  export type productosOrderByWithRelationInput = {
    id_producto?: SortOrder
    nombre_producto?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    descripcion_corta?: SortOrderInput | SortOrder
    tags_seo?: SortOrderInput | SortOrder
    seo_generado_en?: SortOrderInput | SortOrder
    id_categoria?: SortOrder
    stock?: SortOrder
    precio?: SortOrder
    descuento?: SortOrder
    alergenoproducto?: alergenoproductoOrderByRelationAggregateInput
    detalleventa?: detalleventaOrderByRelationAggregateInput
    ingredienteproducto?: ingredienteproductoOrderByRelationAggregateInput
    categoria?: categoriaOrderByWithRelationInput
    _relevance?: productosOrderByRelevanceInput
  }

  export type productosWhereUniqueInput = Prisma.AtLeast<{
    id_producto?: number
    AND?: productosWhereInput | productosWhereInput[]
    OR?: productosWhereInput[]
    NOT?: productosWhereInput | productosWhereInput[]
    nombre_producto?: StringFilter<"productos"> | string
    descripcion?: StringNullableFilter<"productos"> | string | null
    descripcion_corta?: StringNullableFilter<"productos"> | string | null
    tags_seo?: StringNullableFilter<"productos"> | string | null
    seo_generado_en?: DateTimeNullableFilter<"productos"> | Date | string | null
    id_categoria?: IntFilter<"productos"> | number
    stock?: IntFilter<"productos"> | number
    precio?: DecimalFilter<"productos"> | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFilter<"productos"> | Decimal | DecimalJsLike | number | string
    alergenoproducto?: AlergenoproductoListRelationFilter
    detalleventa?: DetalleventaListRelationFilter
    ingredienteproducto?: IngredienteproductoListRelationFilter
    categoria?: XOR<CategoriaScalarRelationFilter, categoriaWhereInput>
  }, "id_producto">

  export type productosOrderByWithAggregationInput = {
    id_producto?: SortOrder
    nombre_producto?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    descripcion_corta?: SortOrderInput | SortOrder
    tags_seo?: SortOrderInput | SortOrder
    seo_generado_en?: SortOrderInput | SortOrder
    id_categoria?: SortOrder
    stock?: SortOrder
    precio?: SortOrder
    descuento?: SortOrder
    _count?: productosCountOrderByAggregateInput
    _avg?: productosAvgOrderByAggregateInput
    _max?: productosMaxOrderByAggregateInput
    _min?: productosMinOrderByAggregateInput
    _sum?: productosSumOrderByAggregateInput
  }

  export type productosScalarWhereWithAggregatesInput = {
    AND?: productosScalarWhereWithAggregatesInput | productosScalarWhereWithAggregatesInput[]
    OR?: productosScalarWhereWithAggregatesInput[]
    NOT?: productosScalarWhereWithAggregatesInput | productosScalarWhereWithAggregatesInput[]
    id_producto?: IntWithAggregatesFilter<"productos"> | number
    nombre_producto?: StringWithAggregatesFilter<"productos"> | string
    descripcion?: StringNullableWithAggregatesFilter<"productos"> | string | null
    descripcion_corta?: StringNullableWithAggregatesFilter<"productos"> | string | null
    tags_seo?: StringNullableWithAggregatesFilter<"productos"> | string | null
    seo_generado_en?: DateTimeNullableWithAggregatesFilter<"productos"> | Date | string | null
    id_categoria?: IntWithAggregatesFilter<"productos"> | number
    stock?: IntWithAggregatesFilter<"productos"> | number
    precio?: DecimalWithAggregatesFilter<"productos"> | Decimal | DecimalJsLike | number | string
    descuento?: DecimalWithAggregatesFilter<"productos"> | Decimal | DecimalJsLike | number | string
  }

  export type tipoaccesoWhereInput = {
    AND?: tipoaccesoWhereInput | tipoaccesoWhereInput[]
    OR?: tipoaccesoWhereInput[]
    NOT?: tipoaccesoWhereInput | tipoaccesoWhereInput[]
    id_tipoAcceso?: IntFilter<"tipoacceso"> | number
    nombre_tipoAcceso?: StringFilter<"tipoacceso"> | string
    accesoqr?: AccesoqrListRelationFilter
  }

  export type tipoaccesoOrderByWithRelationInput = {
    id_tipoAcceso?: SortOrder
    nombre_tipoAcceso?: SortOrder
    accesoqr?: accesoqrOrderByRelationAggregateInput
    _relevance?: tipoaccesoOrderByRelevanceInput
  }

  export type tipoaccesoWhereUniqueInput = Prisma.AtLeast<{
    id_tipoAcceso?: number
    AND?: tipoaccesoWhereInput | tipoaccesoWhereInput[]
    OR?: tipoaccesoWhereInput[]
    NOT?: tipoaccesoWhereInput | tipoaccesoWhereInput[]
    nombre_tipoAcceso?: StringFilter<"tipoacceso"> | string
    accesoqr?: AccesoqrListRelationFilter
  }, "id_tipoAcceso">

  export type tipoaccesoOrderByWithAggregationInput = {
    id_tipoAcceso?: SortOrder
    nombre_tipoAcceso?: SortOrder
    _count?: tipoaccesoCountOrderByAggregateInput
    _avg?: tipoaccesoAvgOrderByAggregateInput
    _max?: tipoaccesoMaxOrderByAggregateInput
    _min?: tipoaccesoMinOrderByAggregateInput
    _sum?: tipoaccesoSumOrderByAggregateInput
  }

  export type tipoaccesoScalarWhereWithAggregatesInput = {
    AND?: tipoaccesoScalarWhereWithAggregatesInput | tipoaccesoScalarWhereWithAggregatesInput[]
    OR?: tipoaccesoScalarWhereWithAggregatesInput[]
    NOT?: tipoaccesoScalarWhereWithAggregatesInput | tipoaccesoScalarWhereWithAggregatesInput[]
    id_tipoAcceso?: IntWithAggregatesFilter<"tipoacceso"> | number
    nombre_tipoAcceso?: StringWithAggregatesFilter<"tipoacceso"> | string
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id_usuario?: IntFilter<"usuarios"> | number
    rol_usuario?: IntFilter<"usuarios"> | number
    nombre_usuario?: StringFilter<"usuarios"> | string
    correo_usuario?: StringFilter<"usuarios"> | string
    clave_usuario?: StringFilter<"usuarios"> | string
    telefono_usuario?: StringNullableFilter<"usuarios"> | string | null
    direccion_usuario?: StringNullableFilter<"usuarios"> | string | null
    fecha_registro?: DateTimeFilter<"usuarios"> | Date | string
    contador_bubbleTea?: IntFilter<"usuarios"> | number
    regalo_bubbleTea?: IntNullableFilter<"usuarios"> | number | null
    score?: IntNullableFilter<"usuarios"> | number | null
    tickets?: TicketsListRelationFilter
    ventas?: VentasListRelationFilter
    ia_conversaciones?: Ia_conversacionesListRelationFilter
    email_eventos?: Email_eventosListRelationFilter
    reservas?: ReservasListRelationFilter
  }

  export type usuariosOrderByWithRelationInput = {
    id_usuario?: SortOrder
    rol_usuario?: SortOrder
    nombre_usuario?: SortOrder
    correo_usuario?: SortOrder
    clave_usuario?: SortOrder
    telefono_usuario?: SortOrderInput | SortOrder
    direccion_usuario?: SortOrderInput | SortOrder
    fecha_registro?: SortOrder
    contador_bubbleTea?: SortOrder
    regalo_bubbleTea?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    tickets?: ticketsOrderByRelationAggregateInput
    ventas?: ventasOrderByRelationAggregateInput
    ia_conversaciones?: ia_conversacionesOrderByRelationAggregateInput
    email_eventos?: email_eventosOrderByRelationAggregateInput
    reservas?: reservasOrderByRelationAggregateInput
    _relevance?: usuariosOrderByRelevanceInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    correo_usuario?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    rol_usuario?: IntFilter<"usuarios"> | number
    nombre_usuario?: StringFilter<"usuarios"> | string
    clave_usuario?: StringFilter<"usuarios"> | string
    telefono_usuario?: StringNullableFilter<"usuarios"> | string | null
    direccion_usuario?: StringNullableFilter<"usuarios"> | string | null
    fecha_registro?: DateTimeFilter<"usuarios"> | Date | string
    contador_bubbleTea?: IntFilter<"usuarios"> | number
    regalo_bubbleTea?: IntNullableFilter<"usuarios"> | number | null
    score?: IntNullableFilter<"usuarios"> | number | null
    tickets?: TicketsListRelationFilter
    ventas?: VentasListRelationFilter
    ia_conversaciones?: Ia_conversacionesListRelationFilter
    email_eventos?: Email_eventosListRelationFilter
    reservas?: ReservasListRelationFilter
  }, "id_usuario" | "correo_usuario">

  export type usuariosOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    rol_usuario?: SortOrder
    nombre_usuario?: SortOrder
    correo_usuario?: SortOrder
    clave_usuario?: SortOrder
    telefono_usuario?: SortOrderInput | SortOrder
    direccion_usuario?: SortOrderInput | SortOrder
    fecha_registro?: SortOrder
    contador_bubbleTea?: SortOrder
    regalo_bubbleTea?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"usuarios"> | number
    rol_usuario?: IntWithAggregatesFilter<"usuarios"> | number
    nombre_usuario?: StringWithAggregatesFilter<"usuarios"> | string
    correo_usuario?: StringWithAggregatesFilter<"usuarios"> | string
    clave_usuario?: StringWithAggregatesFilter<"usuarios"> | string
    telefono_usuario?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    direccion_usuario?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    fecha_registro?: DateTimeWithAggregatesFilter<"usuarios"> | Date | string
    contador_bubbleTea?: IntWithAggregatesFilter<"usuarios"> | number
    regalo_bubbleTea?: IntNullableWithAggregatesFilter<"usuarios"> | number | null
    score?: IntNullableWithAggregatesFilter<"usuarios"> | number | null
  }

  export type ventasWhereInput = {
    AND?: ventasWhereInput | ventasWhereInput[]
    OR?: ventasWhereInput[]
    NOT?: ventasWhereInput | ventasWhereInput[]
    id_venta?: IntFilter<"ventas"> | number
    id_usuario?: IntFilter<"ventas"> | number
    fecha_venta?: DateTimeFilter<"ventas"> | Date | string
    total?: DecimalFilter<"ventas"> | Decimal | DecimalJsLike | number | string
    id_metodoPago?: IntFilter<"ventas"> | number
    id_comprobante?: IntFilter<"ventas"> | number
    estado?: StringNullableFilter<"ventas"> | string | null
    metodo_entrega?: StringNullableFilter<"ventas"> | string | null
    direccion_entrega?: StringNullableFilter<"ventas"> | string | null
    referencia_entrega?: StringNullableFilter<"ventas"> | string | null
    repartidor?: StringNullableFilter<"ventas"> | string | null
    telefono_repartidor?: StringNullableFilter<"ventas"> | string | null
    tiempo_estimado_min?: IntNullableFilter<"ventas"> | number | null
    entregado_en?: DateTimeNullableFilter<"ventas"> | Date | string | null
    detalleventa?: DetalleventaListRelationFilter
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    metodopago?: XOR<MetodopagoScalarRelationFilter, metodopagoWhereInput>
    comprobante?: XOR<ComprobanteScalarRelationFilter, comprobanteWhereInput>
  }

  export type ventasOrderByWithRelationInput = {
    id_venta?: SortOrder
    id_usuario?: SortOrder
    fecha_venta?: SortOrder
    total?: SortOrder
    id_metodoPago?: SortOrder
    id_comprobante?: SortOrder
    estado?: SortOrderInput | SortOrder
    metodo_entrega?: SortOrderInput | SortOrder
    direccion_entrega?: SortOrderInput | SortOrder
    referencia_entrega?: SortOrderInput | SortOrder
    repartidor?: SortOrderInput | SortOrder
    telefono_repartidor?: SortOrderInput | SortOrder
    tiempo_estimado_min?: SortOrderInput | SortOrder
    entregado_en?: SortOrderInput | SortOrder
    detalleventa?: detalleventaOrderByRelationAggregateInput
    usuarios?: usuariosOrderByWithRelationInput
    metodopago?: metodopagoOrderByWithRelationInput
    comprobante?: comprobanteOrderByWithRelationInput
    _relevance?: ventasOrderByRelevanceInput
  }

  export type ventasWhereUniqueInput = Prisma.AtLeast<{
    id_venta?: number
    AND?: ventasWhereInput | ventasWhereInput[]
    OR?: ventasWhereInput[]
    NOT?: ventasWhereInput | ventasWhereInput[]
    id_usuario?: IntFilter<"ventas"> | number
    fecha_venta?: DateTimeFilter<"ventas"> | Date | string
    total?: DecimalFilter<"ventas"> | Decimal | DecimalJsLike | number | string
    id_metodoPago?: IntFilter<"ventas"> | number
    id_comprobante?: IntFilter<"ventas"> | number
    estado?: StringNullableFilter<"ventas"> | string | null
    metodo_entrega?: StringNullableFilter<"ventas"> | string | null
    direccion_entrega?: StringNullableFilter<"ventas"> | string | null
    referencia_entrega?: StringNullableFilter<"ventas"> | string | null
    repartidor?: StringNullableFilter<"ventas"> | string | null
    telefono_repartidor?: StringNullableFilter<"ventas"> | string | null
    tiempo_estimado_min?: IntNullableFilter<"ventas"> | number | null
    entregado_en?: DateTimeNullableFilter<"ventas"> | Date | string | null
    detalleventa?: DetalleventaListRelationFilter
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    metodopago?: XOR<MetodopagoScalarRelationFilter, metodopagoWhereInput>
    comprobante?: XOR<ComprobanteScalarRelationFilter, comprobanteWhereInput>
  }, "id_venta">

  export type ventasOrderByWithAggregationInput = {
    id_venta?: SortOrder
    id_usuario?: SortOrder
    fecha_venta?: SortOrder
    total?: SortOrder
    id_metodoPago?: SortOrder
    id_comprobante?: SortOrder
    estado?: SortOrderInput | SortOrder
    metodo_entrega?: SortOrderInput | SortOrder
    direccion_entrega?: SortOrderInput | SortOrder
    referencia_entrega?: SortOrderInput | SortOrder
    repartidor?: SortOrderInput | SortOrder
    telefono_repartidor?: SortOrderInput | SortOrder
    tiempo_estimado_min?: SortOrderInput | SortOrder
    entregado_en?: SortOrderInput | SortOrder
    _count?: ventasCountOrderByAggregateInput
    _avg?: ventasAvgOrderByAggregateInput
    _max?: ventasMaxOrderByAggregateInput
    _min?: ventasMinOrderByAggregateInput
    _sum?: ventasSumOrderByAggregateInput
  }

  export type ventasScalarWhereWithAggregatesInput = {
    AND?: ventasScalarWhereWithAggregatesInput | ventasScalarWhereWithAggregatesInput[]
    OR?: ventasScalarWhereWithAggregatesInput[]
    NOT?: ventasScalarWhereWithAggregatesInput | ventasScalarWhereWithAggregatesInput[]
    id_venta?: IntWithAggregatesFilter<"ventas"> | number
    id_usuario?: IntWithAggregatesFilter<"ventas"> | number
    fecha_venta?: DateTimeWithAggregatesFilter<"ventas"> | Date | string
    total?: DecimalWithAggregatesFilter<"ventas"> | Decimal | DecimalJsLike | number | string
    id_metodoPago?: IntWithAggregatesFilter<"ventas"> | number
    id_comprobante?: IntWithAggregatesFilter<"ventas"> | number
    estado?: StringNullableWithAggregatesFilter<"ventas"> | string | null
    metodo_entrega?: StringNullableWithAggregatesFilter<"ventas"> | string | null
    direccion_entrega?: StringNullableWithAggregatesFilter<"ventas"> | string | null
    referencia_entrega?: StringNullableWithAggregatesFilter<"ventas"> | string | null
    repartidor?: StringNullableWithAggregatesFilter<"ventas"> | string | null
    telefono_repartidor?: StringNullableWithAggregatesFilter<"ventas"> | string | null
    tiempo_estimado_min?: IntNullableWithAggregatesFilter<"ventas"> | number | null
    entregado_en?: DateTimeNullableWithAggregatesFilter<"ventas"> | Date | string | null
  }

  export type alergenoproductoWhereInput = {
    AND?: alergenoproductoWhereInput | alergenoproductoWhereInput[]
    OR?: alergenoproductoWhereInput[]
    NOT?: alergenoproductoWhereInput | alergenoproductoWhereInput[]
    id_alergeno?: IntFilter<"alergenoproducto"> | number
    id_producto?: IntFilter<"alergenoproducto"> | number
    nombre?: StringFilter<"alergenoproducto"> | string
    productos?: XOR<ProductosScalarRelationFilter, productosWhereInput>
  }

  export type alergenoproductoOrderByWithRelationInput = {
    id_alergeno?: SortOrder
    id_producto?: SortOrder
    nombre?: SortOrder
    productos?: productosOrderByWithRelationInput
    _relevance?: alergenoproductoOrderByRelevanceInput
  }

  export type alergenoproductoWhereUniqueInput = Prisma.AtLeast<{
    id_alergeno?: number
    AND?: alergenoproductoWhereInput | alergenoproductoWhereInput[]
    OR?: alergenoproductoWhereInput[]
    NOT?: alergenoproductoWhereInput | alergenoproductoWhereInput[]
    id_producto?: IntFilter<"alergenoproducto"> | number
    nombre?: StringFilter<"alergenoproducto"> | string
    productos?: XOR<ProductosScalarRelationFilter, productosWhereInput>
  }, "id_alergeno">

  export type alergenoproductoOrderByWithAggregationInput = {
    id_alergeno?: SortOrder
    id_producto?: SortOrder
    nombre?: SortOrder
    _count?: alergenoproductoCountOrderByAggregateInput
    _avg?: alergenoproductoAvgOrderByAggregateInput
    _max?: alergenoproductoMaxOrderByAggregateInput
    _min?: alergenoproductoMinOrderByAggregateInput
    _sum?: alergenoproductoSumOrderByAggregateInput
  }

  export type alergenoproductoScalarWhereWithAggregatesInput = {
    AND?: alergenoproductoScalarWhereWithAggregatesInput | alergenoproductoScalarWhereWithAggregatesInput[]
    OR?: alergenoproductoScalarWhereWithAggregatesInput[]
    NOT?: alergenoproductoScalarWhereWithAggregatesInput | alergenoproductoScalarWhereWithAggregatesInput[]
    id_alergeno?: IntWithAggregatesFilter<"alergenoproducto"> | number
    id_producto?: IntWithAggregatesFilter<"alergenoproducto"> | number
    nombre?: StringWithAggregatesFilter<"alergenoproducto"> | string
  }

  export type ingredienteproductoWhereInput = {
    AND?: ingredienteproductoWhereInput | ingredienteproductoWhereInput[]
    OR?: ingredienteproductoWhereInput[]
    NOT?: ingredienteproductoWhereInput | ingredienteproductoWhereInput[]
    id_ingrediente?: IntFilter<"ingredienteproducto"> | number
    id_producto?: IntFilter<"ingredienteproducto"> | number
    nombre?: StringFilter<"ingredienteproducto"> | string
    productos?: XOR<ProductosScalarRelationFilter, productosWhereInput>
  }

  export type ingredienteproductoOrderByWithRelationInput = {
    id_ingrediente?: SortOrder
    id_producto?: SortOrder
    nombre?: SortOrder
    productos?: productosOrderByWithRelationInput
    _relevance?: ingredienteproductoOrderByRelevanceInput
  }

  export type ingredienteproductoWhereUniqueInput = Prisma.AtLeast<{
    id_ingrediente?: number
    AND?: ingredienteproductoWhereInput | ingredienteproductoWhereInput[]
    OR?: ingredienteproductoWhereInput[]
    NOT?: ingredienteproductoWhereInput | ingredienteproductoWhereInput[]
    id_producto?: IntFilter<"ingredienteproducto"> | number
    nombre?: StringFilter<"ingredienteproducto"> | string
    productos?: XOR<ProductosScalarRelationFilter, productosWhereInput>
  }, "id_ingrediente">

  export type ingredienteproductoOrderByWithAggregationInput = {
    id_ingrediente?: SortOrder
    id_producto?: SortOrder
    nombre?: SortOrder
    _count?: ingredienteproductoCountOrderByAggregateInput
    _avg?: ingredienteproductoAvgOrderByAggregateInput
    _max?: ingredienteproductoMaxOrderByAggregateInput
    _min?: ingredienteproductoMinOrderByAggregateInput
    _sum?: ingredienteproductoSumOrderByAggregateInput
  }

  export type ingredienteproductoScalarWhereWithAggregatesInput = {
    AND?: ingredienteproductoScalarWhereWithAggregatesInput | ingredienteproductoScalarWhereWithAggregatesInput[]
    OR?: ingredienteproductoScalarWhereWithAggregatesInput[]
    NOT?: ingredienteproductoScalarWhereWithAggregatesInput | ingredienteproductoScalarWhereWithAggregatesInput[]
    id_ingrediente?: IntWithAggregatesFilter<"ingredienteproducto"> | number
    id_producto?: IntWithAggregatesFilter<"ingredienteproducto"> | number
    nombre?: StringWithAggregatesFilter<"ingredienteproducto"> | string
  }

  export type ticketsWhereInput = {
    AND?: ticketsWhereInput | ticketsWhereInput[]
    OR?: ticketsWhereInput[]
    NOT?: ticketsWhereInput | ticketsWhereInput[]
    id_ticket?: IntFilter<"tickets"> | number
    nombre_ticket?: StringFilter<"tickets"> | string
    codigo_ticket?: StringNullableFilter<"tickets"> | string | null
    descuento?: DecimalFilter<"tickets"> | Decimal | DecimalJsLike | number | string
    usado?: BoolFilter<"tickets"> | boolean
    id_usuario?: IntNullableFilter<"tickets"> | number | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }

  export type ticketsOrderByWithRelationInput = {
    id_ticket?: SortOrder
    nombre_ticket?: SortOrder
    codigo_ticket?: SortOrderInput | SortOrder
    descuento?: SortOrder
    usado?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    usuarios?: usuariosOrderByWithRelationInput
    _relevance?: ticketsOrderByRelevanceInput
  }

  export type ticketsWhereUniqueInput = Prisma.AtLeast<{
    id_ticket?: number
    codigo_ticket?: string
    AND?: ticketsWhereInput | ticketsWhereInput[]
    OR?: ticketsWhereInput[]
    NOT?: ticketsWhereInput | ticketsWhereInput[]
    nombre_ticket?: StringFilter<"tickets"> | string
    descuento?: DecimalFilter<"tickets"> | Decimal | DecimalJsLike | number | string
    usado?: BoolFilter<"tickets"> | boolean
    id_usuario?: IntNullableFilter<"tickets"> | number | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }, "id_ticket" | "codigo_ticket">

  export type ticketsOrderByWithAggregationInput = {
    id_ticket?: SortOrder
    nombre_ticket?: SortOrder
    codigo_ticket?: SortOrderInput | SortOrder
    descuento?: SortOrder
    usado?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    _count?: ticketsCountOrderByAggregateInput
    _avg?: ticketsAvgOrderByAggregateInput
    _max?: ticketsMaxOrderByAggregateInput
    _min?: ticketsMinOrderByAggregateInput
    _sum?: ticketsSumOrderByAggregateInput
  }

  export type ticketsScalarWhereWithAggregatesInput = {
    AND?: ticketsScalarWhereWithAggregatesInput | ticketsScalarWhereWithAggregatesInput[]
    OR?: ticketsScalarWhereWithAggregatesInput[]
    NOT?: ticketsScalarWhereWithAggregatesInput | ticketsScalarWhereWithAggregatesInput[]
    id_ticket?: IntWithAggregatesFilter<"tickets"> | number
    nombre_ticket?: StringWithAggregatesFilter<"tickets"> | string
    codigo_ticket?: StringNullableWithAggregatesFilter<"tickets"> | string | null
    descuento?: DecimalWithAggregatesFilter<"tickets"> | Decimal | DecimalJsLike | number | string
    usado?: BoolWithAggregatesFilter<"tickets"> | boolean
    id_usuario?: IntNullableWithAggregatesFilter<"tickets"> | number | null
  }

  export type reseteo_semanalWhereInput = {
    AND?: reseteo_semanalWhereInput | reseteo_semanalWhereInput[]
    OR?: reseteo_semanalWhereInput[]
    NOT?: reseteo_semanalWhereInput | reseteo_semanalWhereInput[]
    id_reseteo?: IntFilter<"reseteo_semanal"> | number
    fecha_ultimo_reset?: DateTimeFilter<"reseteo_semanal"> | Date | string
    semana_anio?: IntFilter<"reseteo_semanal"> | number
    anio?: IntFilter<"reseteo_semanal"> | number
  }

  export type reseteo_semanalOrderByWithRelationInput = {
    id_reseteo?: SortOrder
    fecha_ultimo_reset?: SortOrder
    semana_anio?: SortOrder
    anio?: SortOrder
  }

  export type reseteo_semanalWhereUniqueInput = Prisma.AtLeast<{
    id_reseteo?: number
    AND?: reseteo_semanalWhereInput | reseteo_semanalWhereInput[]
    OR?: reseteo_semanalWhereInput[]
    NOT?: reseteo_semanalWhereInput | reseteo_semanalWhereInput[]
    fecha_ultimo_reset?: DateTimeFilter<"reseteo_semanal"> | Date | string
    semana_anio?: IntFilter<"reseteo_semanal"> | number
    anio?: IntFilter<"reseteo_semanal"> | number
  }, "id_reseteo">

  export type reseteo_semanalOrderByWithAggregationInput = {
    id_reseteo?: SortOrder
    fecha_ultimo_reset?: SortOrder
    semana_anio?: SortOrder
    anio?: SortOrder
    _count?: reseteo_semanalCountOrderByAggregateInput
    _avg?: reseteo_semanalAvgOrderByAggregateInput
    _max?: reseteo_semanalMaxOrderByAggregateInput
    _min?: reseteo_semanalMinOrderByAggregateInput
    _sum?: reseteo_semanalSumOrderByAggregateInput
  }

  export type reseteo_semanalScalarWhereWithAggregatesInput = {
    AND?: reseteo_semanalScalarWhereWithAggregatesInput | reseteo_semanalScalarWhereWithAggregatesInput[]
    OR?: reseteo_semanalScalarWhereWithAggregatesInput[]
    NOT?: reseteo_semanalScalarWhereWithAggregatesInput | reseteo_semanalScalarWhereWithAggregatesInput[]
    id_reseteo?: IntWithAggregatesFilter<"reseteo_semanal"> | number
    fecha_ultimo_reset?: DateTimeWithAggregatesFilter<"reseteo_semanal"> | Date | string
    semana_anio?: IntWithAggregatesFilter<"reseteo_semanal"> | number
    anio?: IntWithAggregatesFilter<"reseteo_semanal"> | number
  }

  export type ia_conversacionesWhereInput = {
    AND?: ia_conversacionesWhereInput | ia_conversacionesWhereInput[]
    OR?: ia_conversacionesWhereInput[]
    NOT?: ia_conversacionesWhereInput | ia_conversacionesWhereInput[]
    id_conversacion?: IntFilter<"ia_conversaciones"> | number
    id_usuario?: IntNullableFilter<"ia_conversaciones"> | number | null
    mensaje_usuario?: StringFilter<"ia_conversaciones"> | string
    respuesta_ia?: StringFilter<"ia_conversaciones"> | string
    intencion?: StringFilter<"ia_conversaciones"> | string
    confianza?: DecimalNullableFilter<"ia_conversaciones"> | Decimal | DecimalJsLike | number | string | null
    resuelta?: BoolFilter<"ia_conversaciones"> | boolean
    canal?: StringFilter<"ia_conversaciones"> | string
    fecha?: DateTimeFilter<"ia_conversaciones"> | Date | string
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }

  export type ia_conversacionesOrderByWithRelationInput = {
    id_conversacion?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    mensaje_usuario?: SortOrder
    respuesta_ia?: SortOrder
    intencion?: SortOrder
    confianza?: SortOrderInput | SortOrder
    resuelta?: SortOrder
    canal?: SortOrder
    fecha?: SortOrder
    usuarios?: usuariosOrderByWithRelationInput
    _relevance?: ia_conversacionesOrderByRelevanceInput
  }

  export type ia_conversacionesWhereUniqueInput = Prisma.AtLeast<{
    id_conversacion?: number
    AND?: ia_conversacionesWhereInput | ia_conversacionesWhereInput[]
    OR?: ia_conversacionesWhereInput[]
    NOT?: ia_conversacionesWhereInput | ia_conversacionesWhereInput[]
    id_usuario?: IntNullableFilter<"ia_conversaciones"> | number | null
    mensaje_usuario?: StringFilter<"ia_conversaciones"> | string
    respuesta_ia?: StringFilter<"ia_conversaciones"> | string
    intencion?: StringFilter<"ia_conversaciones"> | string
    confianza?: DecimalNullableFilter<"ia_conversaciones"> | Decimal | DecimalJsLike | number | string | null
    resuelta?: BoolFilter<"ia_conversaciones"> | boolean
    canal?: StringFilter<"ia_conversaciones"> | string
    fecha?: DateTimeFilter<"ia_conversaciones"> | Date | string
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }, "id_conversacion">

  export type ia_conversacionesOrderByWithAggregationInput = {
    id_conversacion?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    mensaje_usuario?: SortOrder
    respuesta_ia?: SortOrder
    intencion?: SortOrder
    confianza?: SortOrderInput | SortOrder
    resuelta?: SortOrder
    canal?: SortOrder
    fecha?: SortOrder
    _count?: ia_conversacionesCountOrderByAggregateInput
    _avg?: ia_conversacionesAvgOrderByAggregateInput
    _max?: ia_conversacionesMaxOrderByAggregateInput
    _min?: ia_conversacionesMinOrderByAggregateInput
    _sum?: ia_conversacionesSumOrderByAggregateInput
  }

  export type ia_conversacionesScalarWhereWithAggregatesInput = {
    AND?: ia_conversacionesScalarWhereWithAggregatesInput | ia_conversacionesScalarWhereWithAggregatesInput[]
    OR?: ia_conversacionesScalarWhereWithAggregatesInput[]
    NOT?: ia_conversacionesScalarWhereWithAggregatesInput | ia_conversacionesScalarWhereWithAggregatesInput[]
    id_conversacion?: IntWithAggregatesFilter<"ia_conversaciones"> | number
    id_usuario?: IntNullableWithAggregatesFilter<"ia_conversaciones"> | number | null
    mensaje_usuario?: StringWithAggregatesFilter<"ia_conversaciones"> | string
    respuesta_ia?: StringWithAggregatesFilter<"ia_conversaciones"> | string
    intencion?: StringWithAggregatesFilter<"ia_conversaciones"> | string
    confianza?: DecimalNullableWithAggregatesFilter<"ia_conversaciones"> | Decimal | DecimalJsLike | number | string | null
    resuelta?: BoolWithAggregatesFilter<"ia_conversaciones"> | boolean
    canal?: StringWithAggregatesFilter<"ia_conversaciones"> | string
    fecha?: DateTimeWithAggregatesFilter<"ia_conversaciones"> | Date | string
  }

  export type feedbackWhereInput = {
    AND?: feedbackWhereInput | feedbackWhereInput[]
    OR?: feedbackWhereInput[]
    NOT?: feedbackWhereInput | feedbackWhereInput[]
    id_feedback?: IntFilter<"feedback"> | number
    nombre?: StringFilter<"feedback"> | string
    correo?: StringNullableFilter<"feedback"> | string | null
    mensaje?: StringFilter<"feedback"> | string
    canal?: StringFilter<"feedback"> | string
    sentimiento?: StringFilter<"feedback"> | string
    categoria?: StringFilter<"feedback"> | string
    criticidad?: IntFilter<"feedback"> | number
    nps?: IntNullableFilter<"feedback"> | number | null
    atendido?: BoolFilter<"feedback"> | boolean
    respuesta?: StringNullableFilter<"feedback"> | string | null
    fecha_creacion?: DateTimeFilter<"feedback"> | Date | string
    fecha_atencion?: DateTimeNullableFilter<"feedback"> | Date | string | null
  }

  export type feedbackOrderByWithRelationInput = {
    id_feedback?: SortOrder
    nombre?: SortOrder
    correo?: SortOrderInput | SortOrder
    mensaje?: SortOrder
    canal?: SortOrder
    sentimiento?: SortOrder
    categoria?: SortOrder
    criticidad?: SortOrder
    nps?: SortOrderInput | SortOrder
    atendido?: SortOrder
    respuesta?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrder
    fecha_atencion?: SortOrderInput | SortOrder
    _relevance?: feedbackOrderByRelevanceInput
  }

  export type feedbackWhereUniqueInput = Prisma.AtLeast<{
    id_feedback?: number
    AND?: feedbackWhereInput | feedbackWhereInput[]
    OR?: feedbackWhereInput[]
    NOT?: feedbackWhereInput | feedbackWhereInput[]
    nombre?: StringFilter<"feedback"> | string
    correo?: StringNullableFilter<"feedback"> | string | null
    mensaje?: StringFilter<"feedback"> | string
    canal?: StringFilter<"feedback"> | string
    sentimiento?: StringFilter<"feedback"> | string
    categoria?: StringFilter<"feedback"> | string
    criticidad?: IntFilter<"feedback"> | number
    nps?: IntNullableFilter<"feedback"> | number | null
    atendido?: BoolFilter<"feedback"> | boolean
    respuesta?: StringNullableFilter<"feedback"> | string | null
    fecha_creacion?: DateTimeFilter<"feedback"> | Date | string
    fecha_atencion?: DateTimeNullableFilter<"feedback"> | Date | string | null
  }, "id_feedback">

  export type feedbackOrderByWithAggregationInput = {
    id_feedback?: SortOrder
    nombre?: SortOrder
    correo?: SortOrderInput | SortOrder
    mensaje?: SortOrder
    canal?: SortOrder
    sentimiento?: SortOrder
    categoria?: SortOrder
    criticidad?: SortOrder
    nps?: SortOrderInput | SortOrder
    atendido?: SortOrder
    respuesta?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrder
    fecha_atencion?: SortOrderInput | SortOrder
    _count?: feedbackCountOrderByAggregateInput
    _avg?: feedbackAvgOrderByAggregateInput
    _max?: feedbackMaxOrderByAggregateInput
    _min?: feedbackMinOrderByAggregateInput
    _sum?: feedbackSumOrderByAggregateInput
  }

  export type feedbackScalarWhereWithAggregatesInput = {
    AND?: feedbackScalarWhereWithAggregatesInput | feedbackScalarWhereWithAggregatesInput[]
    OR?: feedbackScalarWhereWithAggregatesInput[]
    NOT?: feedbackScalarWhereWithAggregatesInput | feedbackScalarWhereWithAggregatesInput[]
    id_feedback?: IntWithAggregatesFilter<"feedback"> | number
    nombre?: StringWithAggregatesFilter<"feedback"> | string
    correo?: StringNullableWithAggregatesFilter<"feedback"> | string | null
    mensaje?: StringWithAggregatesFilter<"feedback"> | string
    canal?: StringWithAggregatesFilter<"feedback"> | string
    sentimiento?: StringWithAggregatesFilter<"feedback"> | string
    categoria?: StringWithAggregatesFilter<"feedback"> | string
    criticidad?: IntWithAggregatesFilter<"feedback"> | number
    nps?: IntNullableWithAggregatesFilter<"feedback"> | number | null
    atendido?: BoolWithAggregatesFilter<"feedback"> | boolean
    respuesta?: StringNullableWithAggregatesFilter<"feedback"> | string | null
    fecha_creacion?: DateTimeWithAggregatesFilter<"feedback"> | Date | string
    fecha_atencion?: DateTimeNullableWithAggregatesFilter<"feedback"> | Date | string | null
  }

  export type email_eventosWhereInput = {
    AND?: email_eventosWhereInput | email_eventosWhereInput[]
    OR?: email_eventosWhereInput[]
    NOT?: email_eventosWhereInput | email_eventosWhereInput[]
    id_evento?: IntFilter<"email_eventos"> | number
    id_usuario?: IntNullableFilter<"email_eventos"> | number | null
    correo?: StringFilter<"email_eventos"> | string
    tipo?: StringFilter<"email_eventos"> | string
    token?: StringFilter<"email_eventos"> | string
    fecha_envio?: DateTimeFilter<"email_eventos"> | Date | string
    fecha_apertura?: DateTimeNullableFilter<"email_eventos"> | Date | string | null
    fecha_clic?: DateTimeNullableFilter<"email_eventos"> | Date | string | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }

  export type email_eventosOrderByWithRelationInput = {
    id_evento?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    correo?: SortOrder
    tipo?: SortOrder
    token?: SortOrder
    fecha_envio?: SortOrder
    fecha_apertura?: SortOrderInput | SortOrder
    fecha_clic?: SortOrderInput | SortOrder
    usuarios?: usuariosOrderByWithRelationInput
    _relevance?: email_eventosOrderByRelevanceInput
  }

  export type email_eventosWhereUniqueInput = Prisma.AtLeast<{
    id_evento?: number
    token?: string
    AND?: email_eventosWhereInput | email_eventosWhereInput[]
    OR?: email_eventosWhereInput[]
    NOT?: email_eventosWhereInput | email_eventosWhereInput[]
    id_usuario?: IntNullableFilter<"email_eventos"> | number | null
    correo?: StringFilter<"email_eventos"> | string
    tipo?: StringFilter<"email_eventos"> | string
    fecha_envio?: DateTimeFilter<"email_eventos"> | Date | string
    fecha_apertura?: DateTimeNullableFilter<"email_eventos"> | Date | string | null
    fecha_clic?: DateTimeNullableFilter<"email_eventos"> | Date | string | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }, "id_evento" | "token">

  export type email_eventosOrderByWithAggregationInput = {
    id_evento?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    correo?: SortOrder
    tipo?: SortOrder
    token?: SortOrder
    fecha_envio?: SortOrder
    fecha_apertura?: SortOrderInput | SortOrder
    fecha_clic?: SortOrderInput | SortOrder
    _count?: email_eventosCountOrderByAggregateInput
    _avg?: email_eventosAvgOrderByAggregateInput
    _max?: email_eventosMaxOrderByAggregateInput
    _min?: email_eventosMinOrderByAggregateInput
    _sum?: email_eventosSumOrderByAggregateInput
  }

  export type email_eventosScalarWhereWithAggregatesInput = {
    AND?: email_eventosScalarWhereWithAggregatesInput | email_eventosScalarWhereWithAggregatesInput[]
    OR?: email_eventosScalarWhereWithAggregatesInput[]
    NOT?: email_eventosScalarWhereWithAggregatesInput | email_eventosScalarWhereWithAggregatesInput[]
    id_evento?: IntWithAggregatesFilter<"email_eventos"> | number
    id_usuario?: IntNullableWithAggregatesFilter<"email_eventos"> | number | null
    correo?: StringWithAggregatesFilter<"email_eventos"> | string
    tipo?: StringWithAggregatesFilter<"email_eventos"> | string
    token?: StringWithAggregatesFilter<"email_eventos"> | string
    fecha_envio?: DateTimeWithAggregatesFilter<"email_eventos"> | Date | string
    fecha_apertura?: DateTimeNullableWithAggregatesFilter<"email_eventos"> | Date | string | null
    fecha_clic?: DateTimeNullableWithAggregatesFilter<"email_eventos"> | Date | string | null
  }

  export type reservasWhereInput = {
    AND?: reservasWhereInput | reservasWhereInput[]
    OR?: reservasWhereInput[]
    NOT?: reservasWhereInput | reservasWhereInput[]
    id_reserva?: IntFilter<"reservas"> | number
    id_usuario?: IntNullableFilter<"reservas"> | number | null
    nombre?: StringFilter<"reservas"> | string
    correo?: StringNullableFilter<"reservas"> | string | null
    telefono?: StringNullableFilter<"reservas"> | string | null
    fecha_reserva?: DateTimeFilter<"reservas"> | Date | string
    personas?: IntFilter<"reservas"> | number
    salon?: StringNullableFilter<"reservas"> | string | null
    estado?: StringFilter<"reservas"> | string
    notas?: StringNullableFilter<"reservas"> | string | null
    creado_en?: DateTimeFilter<"reservas"> | Date | string
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }

  export type reservasOrderByWithRelationInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    nombre?: SortOrder
    correo?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    fecha_reserva?: SortOrder
    personas?: SortOrder
    salon?: SortOrderInput | SortOrder
    estado?: SortOrder
    notas?: SortOrderInput | SortOrder
    creado_en?: SortOrder
    usuarios?: usuariosOrderByWithRelationInput
    _relevance?: reservasOrderByRelevanceInput
  }

  export type reservasWhereUniqueInput = Prisma.AtLeast<{
    id_reserva?: number
    AND?: reservasWhereInput | reservasWhereInput[]
    OR?: reservasWhereInput[]
    NOT?: reservasWhereInput | reservasWhereInput[]
    id_usuario?: IntNullableFilter<"reservas"> | number | null
    nombre?: StringFilter<"reservas"> | string
    correo?: StringNullableFilter<"reservas"> | string | null
    telefono?: StringNullableFilter<"reservas"> | string | null
    fecha_reserva?: DateTimeFilter<"reservas"> | Date | string
    personas?: IntFilter<"reservas"> | number
    salon?: StringNullableFilter<"reservas"> | string | null
    estado?: StringFilter<"reservas"> | string
    notas?: StringNullableFilter<"reservas"> | string | null
    creado_en?: DateTimeFilter<"reservas"> | Date | string
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }, "id_reserva">

  export type reservasOrderByWithAggregationInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    nombre?: SortOrder
    correo?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    fecha_reserva?: SortOrder
    personas?: SortOrder
    salon?: SortOrderInput | SortOrder
    estado?: SortOrder
    notas?: SortOrderInput | SortOrder
    creado_en?: SortOrder
    _count?: reservasCountOrderByAggregateInput
    _avg?: reservasAvgOrderByAggregateInput
    _max?: reservasMaxOrderByAggregateInput
    _min?: reservasMinOrderByAggregateInput
    _sum?: reservasSumOrderByAggregateInput
  }

  export type reservasScalarWhereWithAggregatesInput = {
    AND?: reservasScalarWhereWithAggregatesInput | reservasScalarWhereWithAggregatesInput[]
    OR?: reservasScalarWhereWithAggregatesInput[]
    NOT?: reservasScalarWhereWithAggregatesInput | reservasScalarWhereWithAggregatesInput[]
    id_reserva?: IntWithAggregatesFilter<"reservas"> | number
    id_usuario?: IntNullableWithAggregatesFilter<"reservas"> | number | null
    nombre?: StringWithAggregatesFilter<"reservas"> | string
    correo?: StringNullableWithAggregatesFilter<"reservas"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"reservas"> | string | null
    fecha_reserva?: DateTimeWithAggregatesFilter<"reservas"> | Date | string
    personas?: IntWithAggregatesFilter<"reservas"> | number
    salon?: StringNullableWithAggregatesFilter<"reservas"> | string | null
    estado?: StringWithAggregatesFilter<"reservas"> | string
    notas?: StringNullableWithAggregatesFilter<"reservas"> | string | null
    creado_en?: DateTimeWithAggregatesFilter<"reservas"> | Date | string
  }

  export type accesoqrCreateInput = {
    id_usuario?: number | null
    fecha_acceso: Date | string
    tipoacceso: tipoaccesoCreateNestedOneWithoutAccesoqrInput
  }

  export type accesoqrUncheckedCreateInput = {
    id_accesoQR?: number
    id_usuario?: number | null
    fecha_acceso: Date | string
    id_tipoAcceso: number
  }

  export type accesoqrUpdateInput = {
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_acceso?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoacceso?: tipoaccesoUpdateOneRequiredWithoutAccesoqrNestedInput
  }

  export type accesoqrUncheckedUpdateInput = {
    id_accesoQR?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_acceso?: DateTimeFieldUpdateOperationsInput | Date | string
    id_tipoAcceso?: IntFieldUpdateOperationsInput | number
  }

  export type accesoqrCreateManyInput = {
    id_accesoQR?: number
    id_usuario?: number | null
    fecha_acceso: Date | string
    id_tipoAcceso: number
  }

  export type accesoqrUpdateManyMutationInput = {
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_acceso?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accesoqrUncheckedUpdateManyInput = {
    id_accesoQR?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_acceso?: DateTimeFieldUpdateOperationsInput | Date | string
    id_tipoAcceso?: IntFieldUpdateOperationsInput | number
  }

  export type categoriaCreateInput = {
    nombre_categoria: string
    productos?: productosCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUncheckedCreateInput = {
    id_categoria?: number
    nombre_categoria: string
    productos?: productosUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUpdateInput = {
    nombre_categoria?: StringFieldUpdateOperationsInput | string
    productos?: productosUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaUncheckedUpdateInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre_categoria?: StringFieldUpdateOperationsInput | string
    productos?: productosUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaCreateManyInput = {
    id_categoria?: number
    nombre_categoria: string
  }

  export type categoriaUpdateManyMutationInput = {
    nombre_categoria?: StringFieldUpdateOperationsInput | string
  }

  export type categoriaUncheckedUpdateManyInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre_categoria?: StringFieldUpdateOperationsInput | string
  }

  export type comprobanteCreateInput = {
    nombre_comprobante: string
    ventas?: ventasCreateNestedManyWithoutComprobanteInput
  }

  export type comprobanteUncheckedCreateInput = {
    id_comprobante?: number
    nombre_comprobante: string
    ventas?: ventasUncheckedCreateNestedManyWithoutComprobanteInput
  }

  export type comprobanteUpdateInput = {
    nombre_comprobante?: StringFieldUpdateOperationsInput | string
    ventas?: ventasUpdateManyWithoutComprobanteNestedInput
  }

  export type comprobanteUncheckedUpdateInput = {
    id_comprobante?: IntFieldUpdateOperationsInput | number
    nombre_comprobante?: StringFieldUpdateOperationsInput | string
    ventas?: ventasUncheckedUpdateManyWithoutComprobanteNestedInput
  }

  export type comprobanteCreateManyInput = {
    id_comprobante?: number
    nombre_comprobante: string
  }

  export type comprobanteUpdateManyMutationInput = {
    nombre_comprobante?: StringFieldUpdateOperationsInput | string
  }

  export type comprobanteUncheckedUpdateManyInput = {
    id_comprobante?: IntFieldUpdateOperationsInput | number
    nombre_comprobante?: StringFieldUpdateOperationsInput | string
  }

  export type detalleventaCreateInput = {
    cantidad: number
    subtotal: Decimal | DecimalJsLike | number | string
    productos: productosCreateNestedOneWithoutDetalleventaInput
    ventas: ventasCreateNestedOneWithoutDetalleventaInput
  }

  export type detalleventaUncheckedCreateInput = {
    id_detalleVenta?: number
    id_venta: number
    id_producto: number
    cantidad: number
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type detalleventaUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productos?: productosUpdateOneRequiredWithoutDetalleventaNestedInput
    ventas?: ventasUpdateOneRequiredWithoutDetalleventaNestedInput
  }

  export type detalleventaUncheckedUpdateInput = {
    id_detalleVenta?: IntFieldUpdateOperationsInput | number
    id_venta?: IntFieldUpdateOperationsInput | number
    id_producto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type detalleventaCreateManyInput = {
    id_detalleVenta?: number
    id_venta: number
    id_producto: number
    cantidad: number
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type detalleventaUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type detalleventaUncheckedUpdateManyInput = {
    id_detalleVenta?: IntFieldUpdateOperationsInput | number
    id_venta?: IntFieldUpdateOperationsInput | number
    id_producto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type metodopagoCreateInput = {
    nombre_metodoPago: string
    ventas?: ventasCreateNestedManyWithoutMetodopagoInput
  }

  export type metodopagoUncheckedCreateInput = {
    id_metodoPago?: number
    nombre_metodoPago: string
    ventas?: ventasUncheckedCreateNestedManyWithoutMetodopagoInput
  }

  export type metodopagoUpdateInput = {
    nombre_metodoPago?: StringFieldUpdateOperationsInput | string
    ventas?: ventasUpdateManyWithoutMetodopagoNestedInput
  }

  export type metodopagoUncheckedUpdateInput = {
    id_metodoPago?: IntFieldUpdateOperationsInput | number
    nombre_metodoPago?: StringFieldUpdateOperationsInput | string
    ventas?: ventasUncheckedUpdateManyWithoutMetodopagoNestedInput
  }

  export type metodopagoCreateManyInput = {
    id_metodoPago?: number
    nombre_metodoPago: string
  }

  export type metodopagoUpdateManyMutationInput = {
    nombre_metodoPago?: StringFieldUpdateOperationsInput | string
  }

  export type metodopagoUncheckedUpdateManyInput = {
    id_metodoPago?: IntFieldUpdateOperationsInput | number
    nombre_metodoPago?: StringFieldUpdateOperationsInput | string
  }

  export type productosCreateInput = {
    nombre_producto: string
    descripcion?: string | null
    descripcion_corta?: string | null
    tags_seo?: string | null
    seo_generado_en?: Date | string | null
    stock: number
    precio: Decimal | DecimalJsLike | number | string
    descuento?: Decimal | DecimalJsLike | number | string
    alergenoproducto?: alergenoproductoCreateNestedManyWithoutProductosInput
    detalleventa?: detalleventaCreateNestedManyWithoutProductosInput
    ingredienteproducto?: ingredienteproductoCreateNestedManyWithoutProductosInput
    categoria: categoriaCreateNestedOneWithoutProductosInput
  }

  export type productosUncheckedCreateInput = {
    id_producto?: number
    nombre_producto: string
    descripcion?: string | null
    descripcion_corta?: string | null
    tags_seo?: string | null
    seo_generado_en?: Date | string | null
    id_categoria: number
    stock: number
    precio: Decimal | DecimalJsLike | number | string
    descuento?: Decimal | DecimalJsLike | number | string
    alergenoproducto?: alergenoproductoUncheckedCreateNestedManyWithoutProductosInput
    detalleventa?: detalleventaUncheckedCreateNestedManyWithoutProductosInput
    ingredienteproducto?: ingredienteproductoUncheckedCreateNestedManyWithoutProductosInput
  }

  export type productosUpdateInput = {
    nombre_producto?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion_corta?: NullableStringFieldUpdateOperationsInput | string | null
    tags_seo?: NullableStringFieldUpdateOperationsInput | string | null
    seo_generado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alergenoproducto?: alergenoproductoUpdateManyWithoutProductosNestedInput
    detalleventa?: detalleventaUpdateManyWithoutProductosNestedInput
    ingredienteproducto?: ingredienteproductoUpdateManyWithoutProductosNestedInput
    categoria?: categoriaUpdateOneRequiredWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre_producto?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion_corta?: NullableStringFieldUpdateOperationsInput | string | null
    tags_seo?: NullableStringFieldUpdateOperationsInput | string | null
    seo_generado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_categoria?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alergenoproducto?: alergenoproductoUncheckedUpdateManyWithoutProductosNestedInput
    detalleventa?: detalleventaUncheckedUpdateManyWithoutProductosNestedInput
    ingredienteproducto?: ingredienteproductoUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type productosCreateManyInput = {
    id_producto?: number
    nombre_producto: string
    descripcion?: string | null
    descripcion_corta?: string | null
    tags_seo?: string | null
    seo_generado_en?: Date | string | null
    id_categoria: number
    stock: number
    precio: Decimal | DecimalJsLike | number | string
    descuento?: Decimal | DecimalJsLike | number | string
  }

  export type productosUpdateManyMutationInput = {
    nombre_producto?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion_corta?: NullableStringFieldUpdateOperationsInput | string | null
    tags_seo?: NullableStringFieldUpdateOperationsInput | string | null
    seo_generado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type productosUncheckedUpdateManyInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre_producto?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion_corta?: NullableStringFieldUpdateOperationsInput | string | null
    tags_seo?: NullableStringFieldUpdateOperationsInput | string | null
    seo_generado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_categoria?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type tipoaccesoCreateInput = {
    nombre_tipoAcceso: string
    accesoqr?: accesoqrCreateNestedManyWithoutTipoaccesoInput
  }

  export type tipoaccesoUncheckedCreateInput = {
    id_tipoAcceso?: number
    nombre_tipoAcceso: string
    accesoqr?: accesoqrUncheckedCreateNestedManyWithoutTipoaccesoInput
  }

  export type tipoaccesoUpdateInput = {
    nombre_tipoAcceso?: StringFieldUpdateOperationsInput | string
    accesoqr?: accesoqrUpdateManyWithoutTipoaccesoNestedInput
  }

  export type tipoaccesoUncheckedUpdateInput = {
    id_tipoAcceso?: IntFieldUpdateOperationsInput | number
    nombre_tipoAcceso?: StringFieldUpdateOperationsInput | string
    accesoqr?: accesoqrUncheckedUpdateManyWithoutTipoaccesoNestedInput
  }

  export type tipoaccesoCreateManyInput = {
    id_tipoAcceso?: number
    nombre_tipoAcceso: string
  }

  export type tipoaccesoUpdateManyMutationInput = {
    nombre_tipoAcceso?: StringFieldUpdateOperationsInput | string
  }

  export type tipoaccesoUncheckedUpdateManyInput = {
    id_tipoAcceso?: IntFieldUpdateOperationsInput | number
    nombre_tipoAcceso?: StringFieldUpdateOperationsInput | string
  }

  export type usuariosCreateInput = {
    rol_usuario: number
    nombre_usuario: string
    correo_usuario: string
    clave_usuario: string
    telefono_usuario?: string | null
    direccion_usuario?: string | null
    fecha_registro: Date | string
    contador_bubbleTea: number
    regalo_bubbleTea?: number | null
    score?: number | null
    tickets?: ticketsCreateNestedManyWithoutUsuariosInput
    ventas?: ventasCreateNestedManyWithoutUsuariosInput
    ia_conversaciones?: ia_conversacionesCreateNestedManyWithoutUsuariosInput
    email_eventos?: email_eventosCreateNestedManyWithoutUsuariosInput
    reservas?: reservasCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    id_usuario?: number
    rol_usuario: number
    nombre_usuario: string
    correo_usuario: string
    clave_usuario: string
    telefono_usuario?: string | null
    direccion_usuario?: string | null
    fecha_registro: Date | string
    contador_bubbleTea: number
    regalo_bubbleTea?: number | null
    score?: number | null
    tickets?: ticketsUncheckedCreateNestedManyWithoutUsuariosInput
    ventas?: ventasUncheckedCreateNestedManyWithoutUsuariosInput
    ia_conversaciones?: ia_conversacionesUncheckedCreateNestedManyWithoutUsuariosInput
    email_eventos?: email_eventosUncheckedCreateNestedManyWithoutUsuariosInput
    reservas?: reservasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUpdateInput = {
    rol_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    correo_usuario?: StringFieldUpdateOperationsInput | string
    clave_usuario?: StringFieldUpdateOperationsInput | string
    telefono_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    contador_bubbleTea?: IntFieldUpdateOperationsInput | number
    regalo_bubbleTea?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    tickets?: ticketsUpdateManyWithoutUsuariosNestedInput
    ventas?: ventasUpdateManyWithoutUsuariosNestedInput
    ia_conversaciones?: ia_conversacionesUpdateManyWithoutUsuariosNestedInput
    email_eventos?: email_eventosUpdateManyWithoutUsuariosNestedInput
    reservas?: reservasUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    rol_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    correo_usuario?: StringFieldUpdateOperationsInput | string
    clave_usuario?: StringFieldUpdateOperationsInput | string
    telefono_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    contador_bubbleTea?: IntFieldUpdateOperationsInput | number
    regalo_bubbleTea?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    tickets?: ticketsUncheckedUpdateManyWithoutUsuariosNestedInput
    ventas?: ventasUncheckedUpdateManyWithoutUsuariosNestedInput
    ia_conversaciones?: ia_conversacionesUncheckedUpdateManyWithoutUsuariosNestedInput
    email_eventos?: email_eventosUncheckedUpdateManyWithoutUsuariosNestedInput
    reservas?: reservasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateManyInput = {
    id_usuario?: number
    rol_usuario: number
    nombre_usuario: string
    correo_usuario: string
    clave_usuario: string
    telefono_usuario?: string | null
    direccion_usuario?: string | null
    fecha_registro: Date | string
    contador_bubbleTea: number
    regalo_bubbleTea?: number | null
    score?: number | null
  }

  export type usuariosUpdateManyMutationInput = {
    rol_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    correo_usuario?: StringFieldUpdateOperationsInput | string
    clave_usuario?: StringFieldUpdateOperationsInput | string
    telefono_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    contador_bubbleTea?: IntFieldUpdateOperationsInput | number
    regalo_bubbleTea?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usuariosUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    rol_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    correo_usuario?: StringFieldUpdateOperationsInput | string
    clave_usuario?: StringFieldUpdateOperationsInput | string
    telefono_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    contador_bubbleTea?: IntFieldUpdateOperationsInput | number
    regalo_bubbleTea?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ventasCreateInput = {
    fecha_venta: Date | string
    total: Decimal | DecimalJsLike | number | string
    estado?: string | null
    metodo_entrega?: string | null
    direccion_entrega?: string | null
    referencia_entrega?: string | null
    repartidor?: string | null
    telefono_repartidor?: string | null
    tiempo_estimado_min?: number | null
    entregado_en?: Date | string | null
    detalleventa?: detalleventaCreateNestedManyWithoutVentasInput
    usuarios: usuariosCreateNestedOneWithoutVentasInput
    metodopago: metodopagoCreateNestedOneWithoutVentasInput
    comprobante: comprobanteCreateNestedOneWithoutVentasInput
  }

  export type ventasUncheckedCreateInput = {
    id_venta?: number
    id_usuario: number
    fecha_venta: Date | string
    total: Decimal | DecimalJsLike | number | string
    id_metodoPago: number
    id_comprobante: number
    estado?: string | null
    metodo_entrega?: string | null
    direccion_entrega?: string | null
    referencia_entrega?: string | null
    repartidor?: string | null
    telefono_repartidor?: string | null
    tiempo_estimado_min?: number | null
    entregado_en?: Date | string | null
    detalleventa?: detalleventaUncheckedCreateNestedManyWithoutVentasInput
  }

  export type ventasUpdateInput = {
    fecha_venta?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    metodo_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    referencia_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo_estimado_min?: NullableIntFieldUpdateOperationsInput | number | null
    entregado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalleventa?: detalleventaUpdateManyWithoutVentasNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutVentasNestedInput
    metodopago?: metodopagoUpdateOneRequiredWithoutVentasNestedInput
    comprobante?: comprobanteUpdateOneRequiredWithoutVentasNestedInput
  }

  export type ventasUncheckedUpdateInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha_venta?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_metodoPago?: IntFieldUpdateOperationsInput | number
    id_comprobante?: IntFieldUpdateOperationsInput | number
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    metodo_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    referencia_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo_estimado_min?: NullableIntFieldUpdateOperationsInput | number | null
    entregado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalleventa?: detalleventaUncheckedUpdateManyWithoutVentasNestedInput
  }

  export type ventasCreateManyInput = {
    id_venta?: number
    id_usuario: number
    fecha_venta: Date | string
    total: Decimal | DecimalJsLike | number | string
    id_metodoPago: number
    id_comprobante: number
    estado?: string | null
    metodo_entrega?: string | null
    direccion_entrega?: string | null
    referencia_entrega?: string | null
    repartidor?: string | null
    telefono_repartidor?: string | null
    tiempo_estimado_min?: number | null
    entregado_en?: Date | string | null
  }

  export type ventasUpdateManyMutationInput = {
    fecha_venta?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    metodo_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    referencia_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo_estimado_min?: NullableIntFieldUpdateOperationsInput | number | null
    entregado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ventasUncheckedUpdateManyInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha_venta?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_metodoPago?: IntFieldUpdateOperationsInput | number
    id_comprobante?: IntFieldUpdateOperationsInput | number
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    metodo_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    referencia_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo_estimado_min?: NullableIntFieldUpdateOperationsInput | number | null
    entregado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type alergenoproductoCreateInput = {
    nombre: string
    productos: productosCreateNestedOneWithoutAlergenoproductoInput
  }

  export type alergenoproductoUncheckedCreateInput = {
    id_alergeno?: number
    id_producto: number
    nombre: string
  }

  export type alergenoproductoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    productos?: productosUpdateOneRequiredWithoutAlergenoproductoNestedInput
  }

  export type alergenoproductoUncheckedUpdateInput = {
    id_alergeno?: IntFieldUpdateOperationsInput | number
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type alergenoproductoCreateManyInput = {
    id_alergeno?: number
    id_producto: number
    nombre: string
  }

  export type alergenoproductoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type alergenoproductoUncheckedUpdateManyInput = {
    id_alergeno?: IntFieldUpdateOperationsInput | number
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ingredienteproductoCreateInput = {
    nombre: string
    productos: productosCreateNestedOneWithoutIngredienteproductoInput
  }

  export type ingredienteproductoUncheckedCreateInput = {
    id_ingrediente?: number
    id_producto: number
    nombre: string
  }

  export type ingredienteproductoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    productos?: productosUpdateOneRequiredWithoutIngredienteproductoNestedInput
  }

  export type ingredienteproductoUncheckedUpdateInput = {
    id_ingrediente?: IntFieldUpdateOperationsInput | number
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ingredienteproductoCreateManyInput = {
    id_ingrediente?: number
    id_producto: number
    nombre: string
  }

  export type ingredienteproductoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ingredienteproductoUncheckedUpdateManyInput = {
    id_ingrediente?: IntFieldUpdateOperationsInput | number
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ticketsCreateInput = {
    nombre_ticket: string
    codigo_ticket?: string | null
    descuento?: Decimal | DecimalJsLike | number | string
    usado?: boolean
    usuarios?: usuariosCreateNestedOneWithoutTicketsInput
  }

  export type ticketsUncheckedCreateInput = {
    id_ticket?: number
    nombre_ticket: string
    codigo_ticket?: string | null
    descuento?: Decimal | DecimalJsLike | number | string
    usado?: boolean
    id_usuario?: number | null
  }

  export type ticketsUpdateInput = {
    nombre_ticket?: StringFieldUpdateOperationsInput | string
    codigo_ticket?: NullableStringFieldUpdateOperationsInput | string | null
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usado?: BoolFieldUpdateOperationsInput | boolean
    usuarios?: usuariosUpdateOneWithoutTicketsNestedInput
  }

  export type ticketsUncheckedUpdateInput = {
    id_ticket?: IntFieldUpdateOperationsInput | number
    nombre_ticket?: StringFieldUpdateOperationsInput | string
    codigo_ticket?: NullableStringFieldUpdateOperationsInput | string | null
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usado?: BoolFieldUpdateOperationsInput | boolean
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ticketsCreateManyInput = {
    id_ticket?: number
    nombre_ticket: string
    codigo_ticket?: string | null
    descuento?: Decimal | DecimalJsLike | number | string
    usado?: boolean
    id_usuario?: number | null
  }

  export type ticketsUpdateManyMutationInput = {
    nombre_ticket?: StringFieldUpdateOperationsInput | string
    codigo_ticket?: NullableStringFieldUpdateOperationsInput | string | null
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ticketsUncheckedUpdateManyInput = {
    id_ticket?: IntFieldUpdateOperationsInput | number
    nombre_ticket?: StringFieldUpdateOperationsInput | string
    codigo_ticket?: NullableStringFieldUpdateOperationsInput | string | null
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usado?: BoolFieldUpdateOperationsInput | boolean
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type reseteo_semanalCreateInput = {
    fecha_ultimo_reset: Date | string
    semana_anio: number
    anio: number
  }

  export type reseteo_semanalUncheckedCreateInput = {
    id_reseteo?: number
    fecha_ultimo_reset: Date | string
    semana_anio: number
    anio: number
  }

  export type reseteo_semanalUpdateInput = {
    fecha_ultimo_reset?: DateTimeFieldUpdateOperationsInput | Date | string
    semana_anio?: IntFieldUpdateOperationsInput | number
    anio?: IntFieldUpdateOperationsInput | number
  }

  export type reseteo_semanalUncheckedUpdateInput = {
    id_reseteo?: IntFieldUpdateOperationsInput | number
    fecha_ultimo_reset?: DateTimeFieldUpdateOperationsInput | Date | string
    semana_anio?: IntFieldUpdateOperationsInput | number
    anio?: IntFieldUpdateOperationsInput | number
  }

  export type reseteo_semanalCreateManyInput = {
    id_reseteo?: number
    fecha_ultimo_reset: Date | string
    semana_anio: number
    anio: number
  }

  export type reseteo_semanalUpdateManyMutationInput = {
    fecha_ultimo_reset?: DateTimeFieldUpdateOperationsInput | Date | string
    semana_anio?: IntFieldUpdateOperationsInput | number
    anio?: IntFieldUpdateOperationsInput | number
  }

  export type reseteo_semanalUncheckedUpdateManyInput = {
    id_reseteo?: IntFieldUpdateOperationsInput | number
    fecha_ultimo_reset?: DateTimeFieldUpdateOperationsInput | Date | string
    semana_anio?: IntFieldUpdateOperationsInput | number
    anio?: IntFieldUpdateOperationsInput | number
  }

  export type ia_conversacionesCreateInput = {
    mensaje_usuario: string
    respuesta_ia: string
    intencion: string
    confianza?: Decimal | DecimalJsLike | number | string | null
    resuelta?: boolean
    canal?: string
    fecha?: Date | string
    usuarios?: usuariosCreateNestedOneWithoutIa_conversacionesInput
  }

  export type ia_conversacionesUncheckedCreateInput = {
    id_conversacion?: number
    id_usuario?: number | null
    mensaje_usuario: string
    respuesta_ia: string
    intencion: string
    confianza?: Decimal | DecimalJsLike | number | string | null
    resuelta?: boolean
    canal?: string
    fecha?: Date | string
  }

  export type ia_conversacionesUpdateInput = {
    mensaje_usuario?: StringFieldUpdateOperationsInput | string
    respuesta_ia?: StringFieldUpdateOperationsInput | string
    intencion?: StringFieldUpdateOperationsInput | string
    confianza?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resuelta?: BoolFieldUpdateOperationsInput | boolean
    canal?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: usuariosUpdateOneWithoutIa_conversacionesNestedInput
  }

  export type ia_conversacionesUncheckedUpdateInput = {
    id_conversacion?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    mensaje_usuario?: StringFieldUpdateOperationsInput | string
    respuesta_ia?: StringFieldUpdateOperationsInput | string
    intencion?: StringFieldUpdateOperationsInput | string
    confianza?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resuelta?: BoolFieldUpdateOperationsInput | boolean
    canal?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ia_conversacionesCreateManyInput = {
    id_conversacion?: number
    id_usuario?: number | null
    mensaje_usuario: string
    respuesta_ia: string
    intencion: string
    confianza?: Decimal | DecimalJsLike | number | string | null
    resuelta?: boolean
    canal?: string
    fecha?: Date | string
  }

  export type ia_conversacionesUpdateManyMutationInput = {
    mensaje_usuario?: StringFieldUpdateOperationsInput | string
    respuesta_ia?: StringFieldUpdateOperationsInput | string
    intencion?: StringFieldUpdateOperationsInput | string
    confianza?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resuelta?: BoolFieldUpdateOperationsInput | boolean
    canal?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ia_conversacionesUncheckedUpdateManyInput = {
    id_conversacion?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    mensaje_usuario?: StringFieldUpdateOperationsInput | string
    respuesta_ia?: StringFieldUpdateOperationsInput | string
    intencion?: StringFieldUpdateOperationsInput | string
    confianza?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resuelta?: BoolFieldUpdateOperationsInput | boolean
    canal?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type feedbackCreateInput = {
    nombre: string
    correo?: string | null
    mensaje: string
    canal?: string
    sentimiento?: string
    categoria?: string
    criticidad?: number
    nps?: number | null
    atendido?: boolean
    respuesta?: string | null
    fecha_creacion?: Date | string
    fecha_atencion?: Date | string | null
  }

  export type feedbackUncheckedCreateInput = {
    id_feedback?: number
    nombre: string
    correo?: string | null
    mensaje: string
    canal?: string
    sentimiento?: string
    categoria?: string
    criticidad?: number
    nps?: number | null
    atendido?: boolean
    respuesta?: string | null
    fecha_creacion?: Date | string
    fecha_atencion?: Date | string | null
  }

  export type feedbackUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    mensaje?: StringFieldUpdateOperationsInput | string
    canal?: StringFieldUpdateOperationsInput | string
    sentimiento?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    criticidad?: IntFieldUpdateOperationsInput | number
    nps?: NullableIntFieldUpdateOperationsInput | number | null
    atendido?: BoolFieldUpdateOperationsInput | boolean
    respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_atencion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type feedbackUncheckedUpdateInput = {
    id_feedback?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    mensaje?: StringFieldUpdateOperationsInput | string
    canal?: StringFieldUpdateOperationsInput | string
    sentimiento?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    criticidad?: IntFieldUpdateOperationsInput | number
    nps?: NullableIntFieldUpdateOperationsInput | number | null
    atendido?: BoolFieldUpdateOperationsInput | boolean
    respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_atencion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type feedbackCreateManyInput = {
    id_feedback?: number
    nombre: string
    correo?: string | null
    mensaje: string
    canal?: string
    sentimiento?: string
    categoria?: string
    criticidad?: number
    nps?: number | null
    atendido?: boolean
    respuesta?: string | null
    fecha_creacion?: Date | string
    fecha_atencion?: Date | string | null
  }

  export type feedbackUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    mensaje?: StringFieldUpdateOperationsInput | string
    canal?: StringFieldUpdateOperationsInput | string
    sentimiento?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    criticidad?: IntFieldUpdateOperationsInput | number
    nps?: NullableIntFieldUpdateOperationsInput | number | null
    atendido?: BoolFieldUpdateOperationsInput | boolean
    respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_atencion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type feedbackUncheckedUpdateManyInput = {
    id_feedback?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    mensaje?: StringFieldUpdateOperationsInput | string
    canal?: StringFieldUpdateOperationsInput | string
    sentimiento?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    criticidad?: IntFieldUpdateOperationsInput | number
    nps?: NullableIntFieldUpdateOperationsInput | number | null
    atendido?: BoolFieldUpdateOperationsInput | boolean
    respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_atencion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type email_eventosCreateInput = {
    correo: string
    tipo?: string
    token: string
    fecha_envio?: Date | string
    fecha_apertura?: Date | string | null
    fecha_clic?: Date | string | null
    usuarios?: usuariosCreateNestedOneWithoutEmail_eventosInput
  }

  export type email_eventosUncheckedCreateInput = {
    id_evento?: number
    id_usuario?: number | null
    correo: string
    tipo?: string
    token: string
    fecha_envio?: Date | string
    fecha_apertura?: Date | string | null
    fecha_clic?: Date | string | null
  }

  export type email_eventosUpdateInput = {
    correo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    fecha_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_apertura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_clic?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarios?: usuariosUpdateOneWithoutEmail_eventosNestedInput
  }

  export type email_eventosUncheckedUpdateInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    correo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    fecha_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_apertura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_clic?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type email_eventosCreateManyInput = {
    id_evento?: number
    id_usuario?: number | null
    correo: string
    tipo?: string
    token: string
    fecha_envio?: Date | string
    fecha_apertura?: Date | string | null
    fecha_clic?: Date | string | null
  }

  export type email_eventosUpdateManyMutationInput = {
    correo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    fecha_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_apertura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_clic?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type email_eventosUncheckedUpdateManyInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    correo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    fecha_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_apertura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_clic?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reservasCreateInput = {
    nombre: string
    correo?: string | null
    telefono?: string | null
    fecha_reserva: Date | string
    personas: number
    salon?: string | null
    estado?: string
    notas?: string | null
    creado_en?: Date | string
    usuarios?: usuariosCreateNestedOneWithoutReservasInput
  }

  export type reservasUncheckedCreateInput = {
    id_reserva?: number
    id_usuario?: number | null
    nombre: string
    correo?: string | null
    telefono?: string | null
    fecha_reserva: Date | string
    personas: number
    salon?: string | null
    estado?: string
    notas?: string | null
    creado_en?: Date | string
  }

  export type reservasUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    personas?: IntFieldUpdateOperationsInput | number
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: usuariosUpdateOneWithoutReservasNestedInput
  }

  export type reservasUncheckedUpdateInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    personas?: IntFieldUpdateOperationsInput | number
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservasCreateManyInput = {
    id_reserva?: number
    id_usuario?: number | null
    nombre: string
    correo?: string | null
    telefono?: string | null
    fecha_reserva: Date | string
    personas: number
    salon?: string | null
    estado?: string
    notas?: string | null
    creado_en?: Date | string
  }

  export type reservasUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    personas?: IntFieldUpdateOperationsInput | number
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservasUncheckedUpdateManyInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    personas?: IntFieldUpdateOperationsInput | number
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TipoaccesoScalarRelationFilter = {
    is?: tipoaccesoWhereInput
    isNot?: tipoaccesoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type accesoqrCountOrderByAggregateInput = {
    id_accesoQR?: SortOrder
    id_usuario?: SortOrder
    fecha_acceso?: SortOrder
    id_tipoAcceso?: SortOrder
  }

  export type accesoqrAvgOrderByAggregateInput = {
    id_accesoQR?: SortOrder
    id_usuario?: SortOrder
    id_tipoAcceso?: SortOrder
  }

  export type accesoqrMaxOrderByAggregateInput = {
    id_accesoQR?: SortOrder
    id_usuario?: SortOrder
    fecha_acceso?: SortOrder
    id_tipoAcceso?: SortOrder
  }

  export type accesoqrMinOrderByAggregateInput = {
    id_accesoQR?: SortOrder
    id_usuario?: SortOrder
    fecha_acceso?: SortOrder
    id_tipoAcceso?: SortOrder
  }

  export type accesoqrSumOrderByAggregateInput = {
    id_accesoQR?: SortOrder
    id_usuario?: SortOrder
    id_tipoAcceso?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type ProductosListRelationFilter = {
    every?: productosWhereInput
    some?: productosWhereInput
    none?: productosWhereInput
  }

  export type productosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriaOrderByRelevanceInput = {
    fields: categoriaOrderByRelevanceFieldEnum | categoriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type categoriaCountOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre_categoria?: SortOrder
  }

  export type categoriaAvgOrderByAggregateInput = {
    id_categoria?: SortOrder
  }

  export type categoriaMaxOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre_categoria?: SortOrder
  }

  export type categoriaMinOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre_categoria?: SortOrder
  }

  export type categoriaSumOrderByAggregateInput = {
    id_categoria?: SortOrder
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

  export type VentasListRelationFilter = {
    every?: ventasWhereInput
    some?: ventasWhereInput
    none?: ventasWhereInput
  }

  export type ventasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type comprobanteOrderByRelevanceInput = {
    fields: comprobanteOrderByRelevanceFieldEnum | comprobanteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type comprobanteCountOrderByAggregateInput = {
    id_comprobante?: SortOrder
    nombre_comprobante?: SortOrder
  }

  export type comprobanteAvgOrderByAggregateInput = {
    id_comprobante?: SortOrder
  }

  export type comprobanteMaxOrderByAggregateInput = {
    id_comprobante?: SortOrder
    nombre_comprobante?: SortOrder
  }

  export type comprobanteMinOrderByAggregateInput = {
    id_comprobante?: SortOrder
    nombre_comprobante?: SortOrder
  }

  export type comprobanteSumOrderByAggregateInput = {
    id_comprobante?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ProductosScalarRelationFilter = {
    is?: productosWhereInput
    isNot?: productosWhereInput
  }

  export type VentasScalarRelationFilter = {
    is?: ventasWhereInput
    isNot?: ventasWhereInput
  }

  export type detalleventaCountOrderByAggregateInput = {
    id_detalleVenta?: SortOrder
    id_venta?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
    subtotal?: SortOrder
  }

  export type detalleventaAvgOrderByAggregateInput = {
    id_detalleVenta?: SortOrder
    id_venta?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
    subtotal?: SortOrder
  }

  export type detalleventaMaxOrderByAggregateInput = {
    id_detalleVenta?: SortOrder
    id_venta?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
    subtotal?: SortOrder
  }

  export type detalleventaMinOrderByAggregateInput = {
    id_detalleVenta?: SortOrder
    id_venta?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
    subtotal?: SortOrder
  }

  export type detalleventaSumOrderByAggregateInput = {
    id_detalleVenta?: SortOrder
    id_venta?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
    subtotal?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type metodopagoOrderByRelevanceInput = {
    fields: metodopagoOrderByRelevanceFieldEnum | metodopagoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type metodopagoCountOrderByAggregateInput = {
    id_metodoPago?: SortOrder
    nombre_metodoPago?: SortOrder
  }

  export type metodopagoAvgOrderByAggregateInput = {
    id_metodoPago?: SortOrder
  }

  export type metodopagoMaxOrderByAggregateInput = {
    id_metodoPago?: SortOrder
    nombre_metodoPago?: SortOrder
  }

  export type metodopagoMinOrderByAggregateInput = {
    id_metodoPago?: SortOrder
    nombre_metodoPago?: SortOrder
  }

  export type metodopagoSumOrderByAggregateInput = {
    id_metodoPago?: SortOrder
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

  export type AlergenoproductoListRelationFilter = {
    every?: alergenoproductoWhereInput
    some?: alergenoproductoWhereInput
    none?: alergenoproductoWhereInput
  }

  export type DetalleventaListRelationFilter = {
    every?: detalleventaWhereInput
    some?: detalleventaWhereInput
    none?: detalleventaWhereInput
  }

  export type IngredienteproductoListRelationFilter = {
    every?: ingredienteproductoWhereInput
    some?: ingredienteproductoWhereInput
    none?: ingredienteproductoWhereInput
  }

  export type CategoriaScalarRelationFilter = {
    is?: categoriaWhereInput
    isNot?: categoriaWhereInput
  }

  export type alergenoproductoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type detalleventaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ingredienteproductoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productosOrderByRelevanceInput = {
    fields: productosOrderByRelevanceFieldEnum | productosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type productosCountOrderByAggregateInput = {
    id_producto?: SortOrder
    nombre_producto?: SortOrder
    descripcion?: SortOrder
    descripcion_corta?: SortOrder
    tags_seo?: SortOrder
    seo_generado_en?: SortOrder
    id_categoria?: SortOrder
    stock?: SortOrder
    precio?: SortOrder
    descuento?: SortOrder
  }

  export type productosAvgOrderByAggregateInput = {
    id_producto?: SortOrder
    id_categoria?: SortOrder
    stock?: SortOrder
    precio?: SortOrder
    descuento?: SortOrder
  }

  export type productosMaxOrderByAggregateInput = {
    id_producto?: SortOrder
    nombre_producto?: SortOrder
    descripcion?: SortOrder
    descripcion_corta?: SortOrder
    tags_seo?: SortOrder
    seo_generado_en?: SortOrder
    id_categoria?: SortOrder
    stock?: SortOrder
    precio?: SortOrder
    descuento?: SortOrder
  }

  export type productosMinOrderByAggregateInput = {
    id_producto?: SortOrder
    nombre_producto?: SortOrder
    descripcion?: SortOrder
    descripcion_corta?: SortOrder
    tags_seo?: SortOrder
    seo_generado_en?: SortOrder
    id_categoria?: SortOrder
    stock?: SortOrder
    precio?: SortOrder
    descuento?: SortOrder
  }

  export type productosSumOrderByAggregateInput = {
    id_producto?: SortOrder
    id_categoria?: SortOrder
    stock?: SortOrder
    precio?: SortOrder
    descuento?: SortOrder
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

  export type AccesoqrListRelationFilter = {
    every?: accesoqrWhereInput
    some?: accesoqrWhereInput
    none?: accesoqrWhereInput
  }

  export type accesoqrOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tipoaccesoOrderByRelevanceInput = {
    fields: tipoaccesoOrderByRelevanceFieldEnum | tipoaccesoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tipoaccesoCountOrderByAggregateInput = {
    id_tipoAcceso?: SortOrder
    nombre_tipoAcceso?: SortOrder
  }

  export type tipoaccesoAvgOrderByAggregateInput = {
    id_tipoAcceso?: SortOrder
  }

  export type tipoaccesoMaxOrderByAggregateInput = {
    id_tipoAcceso?: SortOrder
    nombre_tipoAcceso?: SortOrder
  }

  export type tipoaccesoMinOrderByAggregateInput = {
    id_tipoAcceso?: SortOrder
    nombre_tipoAcceso?: SortOrder
  }

  export type tipoaccesoSumOrderByAggregateInput = {
    id_tipoAcceso?: SortOrder
  }

  export type TicketsListRelationFilter = {
    every?: ticketsWhereInput
    some?: ticketsWhereInput
    none?: ticketsWhereInput
  }

  export type Ia_conversacionesListRelationFilter = {
    every?: ia_conversacionesWhereInput
    some?: ia_conversacionesWhereInput
    none?: ia_conversacionesWhereInput
  }

  export type Email_eventosListRelationFilter = {
    every?: email_eventosWhereInput
    some?: email_eventosWhereInput
    none?: email_eventosWhereInput
  }

  export type ReservasListRelationFilter = {
    every?: reservasWhereInput
    some?: reservasWhereInput
    none?: reservasWhereInput
  }

  export type ticketsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ia_conversacionesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type email_eventosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reservasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuariosOrderByRelevanceInput = {
    fields: usuariosOrderByRelevanceFieldEnum | usuariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usuariosCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    rol_usuario?: SortOrder
    nombre_usuario?: SortOrder
    correo_usuario?: SortOrder
    clave_usuario?: SortOrder
    telefono_usuario?: SortOrder
    direccion_usuario?: SortOrder
    fecha_registro?: SortOrder
    contador_bubbleTea?: SortOrder
    regalo_bubbleTea?: SortOrder
    score?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
    rol_usuario?: SortOrder
    contador_bubbleTea?: SortOrder
    regalo_bubbleTea?: SortOrder
    score?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    rol_usuario?: SortOrder
    nombre_usuario?: SortOrder
    correo_usuario?: SortOrder
    clave_usuario?: SortOrder
    telefono_usuario?: SortOrder
    direccion_usuario?: SortOrder
    fecha_registro?: SortOrder
    contador_bubbleTea?: SortOrder
    regalo_bubbleTea?: SortOrder
    score?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    rol_usuario?: SortOrder
    nombre_usuario?: SortOrder
    correo_usuario?: SortOrder
    clave_usuario?: SortOrder
    telefono_usuario?: SortOrder
    direccion_usuario?: SortOrder
    fecha_registro?: SortOrder
    contador_bubbleTea?: SortOrder
    regalo_bubbleTea?: SortOrder
    score?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id_usuario?: SortOrder
    rol_usuario?: SortOrder
    contador_bubbleTea?: SortOrder
    regalo_bubbleTea?: SortOrder
    score?: SortOrder
  }

  export type UsuariosScalarRelationFilter = {
    is?: usuariosWhereInput
    isNot?: usuariosWhereInput
  }

  export type MetodopagoScalarRelationFilter = {
    is?: metodopagoWhereInput
    isNot?: metodopagoWhereInput
  }

  export type ComprobanteScalarRelationFilter = {
    is?: comprobanteWhereInput
    isNot?: comprobanteWhereInput
  }

  export type ventasOrderByRelevanceInput = {
    fields: ventasOrderByRelevanceFieldEnum | ventasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ventasCountOrderByAggregateInput = {
    id_venta?: SortOrder
    id_usuario?: SortOrder
    fecha_venta?: SortOrder
    total?: SortOrder
    id_metodoPago?: SortOrder
    id_comprobante?: SortOrder
    estado?: SortOrder
    metodo_entrega?: SortOrder
    direccion_entrega?: SortOrder
    referencia_entrega?: SortOrder
    repartidor?: SortOrder
    telefono_repartidor?: SortOrder
    tiempo_estimado_min?: SortOrder
    entregado_en?: SortOrder
  }

  export type ventasAvgOrderByAggregateInput = {
    id_venta?: SortOrder
    id_usuario?: SortOrder
    total?: SortOrder
    id_metodoPago?: SortOrder
    id_comprobante?: SortOrder
    tiempo_estimado_min?: SortOrder
  }

  export type ventasMaxOrderByAggregateInput = {
    id_venta?: SortOrder
    id_usuario?: SortOrder
    fecha_venta?: SortOrder
    total?: SortOrder
    id_metodoPago?: SortOrder
    id_comprobante?: SortOrder
    estado?: SortOrder
    metodo_entrega?: SortOrder
    direccion_entrega?: SortOrder
    referencia_entrega?: SortOrder
    repartidor?: SortOrder
    telefono_repartidor?: SortOrder
    tiempo_estimado_min?: SortOrder
    entregado_en?: SortOrder
  }

  export type ventasMinOrderByAggregateInput = {
    id_venta?: SortOrder
    id_usuario?: SortOrder
    fecha_venta?: SortOrder
    total?: SortOrder
    id_metodoPago?: SortOrder
    id_comprobante?: SortOrder
    estado?: SortOrder
    metodo_entrega?: SortOrder
    direccion_entrega?: SortOrder
    referencia_entrega?: SortOrder
    repartidor?: SortOrder
    telefono_repartidor?: SortOrder
    tiempo_estimado_min?: SortOrder
    entregado_en?: SortOrder
  }

  export type ventasSumOrderByAggregateInput = {
    id_venta?: SortOrder
    id_usuario?: SortOrder
    total?: SortOrder
    id_metodoPago?: SortOrder
    id_comprobante?: SortOrder
    tiempo_estimado_min?: SortOrder
  }

  export type alergenoproductoOrderByRelevanceInput = {
    fields: alergenoproductoOrderByRelevanceFieldEnum | alergenoproductoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type alergenoproductoCountOrderByAggregateInput = {
    id_alergeno?: SortOrder
    id_producto?: SortOrder
    nombre?: SortOrder
  }

  export type alergenoproductoAvgOrderByAggregateInput = {
    id_alergeno?: SortOrder
    id_producto?: SortOrder
  }

  export type alergenoproductoMaxOrderByAggregateInput = {
    id_alergeno?: SortOrder
    id_producto?: SortOrder
    nombre?: SortOrder
  }

  export type alergenoproductoMinOrderByAggregateInput = {
    id_alergeno?: SortOrder
    id_producto?: SortOrder
    nombre?: SortOrder
  }

  export type alergenoproductoSumOrderByAggregateInput = {
    id_alergeno?: SortOrder
    id_producto?: SortOrder
  }

  export type ingredienteproductoOrderByRelevanceInput = {
    fields: ingredienteproductoOrderByRelevanceFieldEnum | ingredienteproductoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ingredienteproductoCountOrderByAggregateInput = {
    id_ingrediente?: SortOrder
    id_producto?: SortOrder
    nombre?: SortOrder
  }

  export type ingredienteproductoAvgOrderByAggregateInput = {
    id_ingrediente?: SortOrder
    id_producto?: SortOrder
  }

  export type ingredienteproductoMaxOrderByAggregateInput = {
    id_ingrediente?: SortOrder
    id_producto?: SortOrder
    nombre?: SortOrder
  }

  export type ingredienteproductoMinOrderByAggregateInput = {
    id_ingrediente?: SortOrder
    id_producto?: SortOrder
    nombre?: SortOrder
  }

  export type ingredienteproductoSumOrderByAggregateInput = {
    id_ingrediente?: SortOrder
    id_producto?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsuariosNullableScalarRelationFilter = {
    is?: usuariosWhereInput | null
    isNot?: usuariosWhereInput | null
  }

  export type ticketsOrderByRelevanceInput = {
    fields: ticketsOrderByRelevanceFieldEnum | ticketsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ticketsCountOrderByAggregateInput = {
    id_ticket?: SortOrder
    nombre_ticket?: SortOrder
    codigo_ticket?: SortOrder
    descuento?: SortOrder
    usado?: SortOrder
    id_usuario?: SortOrder
  }

  export type ticketsAvgOrderByAggregateInput = {
    id_ticket?: SortOrder
    descuento?: SortOrder
    id_usuario?: SortOrder
  }

  export type ticketsMaxOrderByAggregateInput = {
    id_ticket?: SortOrder
    nombre_ticket?: SortOrder
    codigo_ticket?: SortOrder
    descuento?: SortOrder
    usado?: SortOrder
    id_usuario?: SortOrder
  }

  export type ticketsMinOrderByAggregateInput = {
    id_ticket?: SortOrder
    nombre_ticket?: SortOrder
    codigo_ticket?: SortOrder
    descuento?: SortOrder
    usado?: SortOrder
    id_usuario?: SortOrder
  }

  export type ticketsSumOrderByAggregateInput = {
    id_ticket?: SortOrder
    descuento?: SortOrder
    id_usuario?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type reseteo_semanalCountOrderByAggregateInput = {
    id_reseteo?: SortOrder
    fecha_ultimo_reset?: SortOrder
    semana_anio?: SortOrder
    anio?: SortOrder
  }

  export type reseteo_semanalAvgOrderByAggregateInput = {
    id_reseteo?: SortOrder
    semana_anio?: SortOrder
    anio?: SortOrder
  }

  export type reseteo_semanalMaxOrderByAggregateInput = {
    id_reseteo?: SortOrder
    fecha_ultimo_reset?: SortOrder
    semana_anio?: SortOrder
    anio?: SortOrder
  }

  export type reseteo_semanalMinOrderByAggregateInput = {
    id_reseteo?: SortOrder
    fecha_ultimo_reset?: SortOrder
    semana_anio?: SortOrder
    anio?: SortOrder
  }

  export type reseteo_semanalSumOrderByAggregateInput = {
    id_reseteo?: SortOrder
    semana_anio?: SortOrder
    anio?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type ia_conversacionesOrderByRelevanceInput = {
    fields: ia_conversacionesOrderByRelevanceFieldEnum | ia_conversacionesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ia_conversacionesCountOrderByAggregateInput = {
    id_conversacion?: SortOrder
    id_usuario?: SortOrder
    mensaje_usuario?: SortOrder
    respuesta_ia?: SortOrder
    intencion?: SortOrder
    confianza?: SortOrder
    resuelta?: SortOrder
    canal?: SortOrder
    fecha?: SortOrder
  }

  export type ia_conversacionesAvgOrderByAggregateInput = {
    id_conversacion?: SortOrder
    id_usuario?: SortOrder
    confianza?: SortOrder
  }

  export type ia_conversacionesMaxOrderByAggregateInput = {
    id_conversacion?: SortOrder
    id_usuario?: SortOrder
    mensaje_usuario?: SortOrder
    respuesta_ia?: SortOrder
    intencion?: SortOrder
    confianza?: SortOrder
    resuelta?: SortOrder
    canal?: SortOrder
    fecha?: SortOrder
  }

  export type ia_conversacionesMinOrderByAggregateInput = {
    id_conversacion?: SortOrder
    id_usuario?: SortOrder
    mensaje_usuario?: SortOrder
    respuesta_ia?: SortOrder
    intencion?: SortOrder
    confianza?: SortOrder
    resuelta?: SortOrder
    canal?: SortOrder
    fecha?: SortOrder
  }

  export type ia_conversacionesSumOrderByAggregateInput = {
    id_conversacion?: SortOrder
    id_usuario?: SortOrder
    confianza?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type feedbackOrderByRelevanceInput = {
    fields: feedbackOrderByRelevanceFieldEnum | feedbackOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type feedbackCountOrderByAggregateInput = {
    id_feedback?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    mensaje?: SortOrder
    canal?: SortOrder
    sentimiento?: SortOrder
    categoria?: SortOrder
    criticidad?: SortOrder
    nps?: SortOrder
    atendido?: SortOrder
    respuesta?: SortOrder
    fecha_creacion?: SortOrder
    fecha_atencion?: SortOrder
  }

  export type feedbackAvgOrderByAggregateInput = {
    id_feedback?: SortOrder
    criticidad?: SortOrder
    nps?: SortOrder
  }

  export type feedbackMaxOrderByAggregateInput = {
    id_feedback?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    mensaje?: SortOrder
    canal?: SortOrder
    sentimiento?: SortOrder
    categoria?: SortOrder
    criticidad?: SortOrder
    nps?: SortOrder
    atendido?: SortOrder
    respuesta?: SortOrder
    fecha_creacion?: SortOrder
    fecha_atencion?: SortOrder
  }

  export type feedbackMinOrderByAggregateInput = {
    id_feedback?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    mensaje?: SortOrder
    canal?: SortOrder
    sentimiento?: SortOrder
    categoria?: SortOrder
    criticidad?: SortOrder
    nps?: SortOrder
    atendido?: SortOrder
    respuesta?: SortOrder
    fecha_creacion?: SortOrder
    fecha_atencion?: SortOrder
  }

  export type feedbackSumOrderByAggregateInput = {
    id_feedback?: SortOrder
    criticidad?: SortOrder
    nps?: SortOrder
  }

  export type email_eventosOrderByRelevanceInput = {
    fields: email_eventosOrderByRelevanceFieldEnum | email_eventosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type email_eventosCountOrderByAggregateInput = {
    id_evento?: SortOrder
    id_usuario?: SortOrder
    correo?: SortOrder
    tipo?: SortOrder
    token?: SortOrder
    fecha_envio?: SortOrder
    fecha_apertura?: SortOrder
    fecha_clic?: SortOrder
  }

  export type email_eventosAvgOrderByAggregateInput = {
    id_evento?: SortOrder
    id_usuario?: SortOrder
  }

  export type email_eventosMaxOrderByAggregateInput = {
    id_evento?: SortOrder
    id_usuario?: SortOrder
    correo?: SortOrder
    tipo?: SortOrder
    token?: SortOrder
    fecha_envio?: SortOrder
    fecha_apertura?: SortOrder
    fecha_clic?: SortOrder
  }

  export type email_eventosMinOrderByAggregateInput = {
    id_evento?: SortOrder
    id_usuario?: SortOrder
    correo?: SortOrder
    tipo?: SortOrder
    token?: SortOrder
    fecha_envio?: SortOrder
    fecha_apertura?: SortOrder
    fecha_clic?: SortOrder
  }

  export type email_eventosSumOrderByAggregateInput = {
    id_evento?: SortOrder
    id_usuario?: SortOrder
  }

  export type reservasOrderByRelevanceInput = {
    fields: reservasOrderByRelevanceFieldEnum | reservasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type reservasCountOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    fecha_reserva?: SortOrder
    personas?: SortOrder
    salon?: SortOrder
    estado?: SortOrder
    notas?: SortOrder
    creado_en?: SortOrder
  }

  export type reservasAvgOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    personas?: SortOrder
  }

  export type reservasMaxOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    fecha_reserva?: SortOrder
    personas?: SortOrder
    salon?: SortOrder
    estado?: SortOrder
    notas?: SortOrder
    creado_en?: SortOrder
  }

  export type reservasMinOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    fecha_reserva?: SortOrder
    personas?: SortOrder
    salon?: SortOrder
    estado?: SortOrder
    notas?: SortOrder
    creado_en?: SortOrder
  }

  export type reservasSumOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    personas?: SortOrder
  }

  export type tipoaccesoCreateNestedOneWithoutAccesoqrInput = {
    create?: XOR<tipoaccesoCreateWithoutAccesoqrInput, tipoaccesoUncheckedCreateWithoutAccesoqrInput>
    connectOrCreate?: tipoaccesoCreateOrConnectWithoutAccesoqrInput
    connect?: tipoaccesoWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type tipoaccesoUpdateOneRequiredWithoutAccesoqrNestedInput = {
    create?: XOR<tipoaccesoCreateWithoutAccesoqrInput, tipoaccesoUncheckedCreateWithoutAccesoqrInput>
    connectOrCreate?: tipoaccesoCreateOrConnectWithoutAccesoqrInput
    upsert?: tipoaccesoUpsertWithoutAccesoqrInput
    connect?: tipoaccesoWhereUniqueInput
    update?: XOR<XOR<tipoaccesoUpdateToOneWithWhereWithoutAccesoqrInput, tipoaccesoUpdateWithoutAccesoqrInput>, tipoaccesoUncheckedUpdateWithoutAccesoqrInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type productosCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<productosCreateWithoutCategoriaInput, productosUncheckedCreateWithoutCategoriaInput> | productosCreateWithoutCategoriaInput[] | productosUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: productosCreateOrConnectWithoutCategoriaInput | productosCreateOrConnectWithoutCategoriaInput[]
    createMany?: productosCreateManyCategoriaInputEnvelope
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
  }

  export type productosUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<productosCreateWithoutCategoriaInput, productosUncheckedCreateWithoutCategoriaInput> | productosCreateWithoutCategoriaInput[] | productosUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: productosCreateOrConnectWithoutCategoriaInput | productosCreateOrConnectWithoutCategoriaInput[]
    createMany?: productosCreateManyCategoriaInputEnvelope
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type productosUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<productosCreateWithoutCategoriaInput, productosUncheckedCreateWithoutCategoriaInput> | productosCreateWithoutCategoriaInput[] | productosUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: productosCreateOrConnectWithoutCategoriaInput | productosCreateOrConnectWithoutCategoriaInput[]
    upsert?: productosUpsertWithWhereUniqueWithoutCategoriaInput | productosUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: productosCreateManyCategoriaInputEnvelope
    set?: productosWhereUniqueInput | productosWhereUniqueInput[]
    disconnect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    delete?: productosWhereUniqueInput | productosWhereUniqueInput[]
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    update?: productosUpdateWithWhereUniqueWithoutCategoriaInput | productosUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: productosUpdateManyWithWhereWithoutCategoriaInput | productosUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: productosScalarWhereInput | productosScalarWhereInput[]
  }

  export type productosUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<productosCreateWithoutCategoriaInput, productosUncheckedCreateWithoutCategoriaInput> | productosCreateWithoutCategoriaInput[] | productosUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: productosCreateOrConnectWithoutCategoriaInput | productosCreateOrConnectWithoutCategoriaInput[]
    upsert?: productosUpsertWithWhereUniqueWithoutCategoriaInput | productosUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: productosCreateManyCategoriaInputEnvelope
    set?: productosWhereUniqueInput | productosWhereUniqueInput[]
    disconnect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    delete?: productosWhereUniqueInput | productosWhereUniqueInput[]
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    update?: productosUpdateWithWhereUniqueWithoutCategoriaInput | productosUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: productosUpdateManyWithWhereWithoutCategoriaInput | productosUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: productosScalarWhereInput | productosScalarWhereInput[]
  }

  export type ventasCreateNestedManyWithoutComprobanteInput = {
    create?: XOR<ventasCreateWithoutComprobanteInput, ventasUncheckedCreateWithoutComprobanteInput> | ventasCreateWithoutComprobanteInput[] | ventasUncheckedCreateWithoutComprobanteInput[]
    connectOrCreate?: ventasCreateOrConnectWithoutComprobanteInput | ventasCreateOrConnectWithoutComprobanteInput[]
    createMany?: ventasCreateManyComprobanteInputEnvelope
    connect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
  }

  export type ventasUncheckedCreateNestedManyWithoutComprobanteInput = {
    create?: XOR<ventasCreateWithoutComprobanteInput, ventasUncheckedCreateWithoutComprobanteInput> | ventasCreateWithoutComprobanteInput[] | ventasUncheckedCreateWithoutComprobanteInput[]
    connectOrCreate?: ventasCreateOrConnectWithoutComprobanteInput | ventasCreateOrConnectWithoutComprobanteInput[]
    createMany?: ventasCreateManyComprobanteInputEnvelope
    connect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
  }

  export type ventasUpdateManyWithoutComprobanteNestedInput = {
    create?: XOR<ventasCreateWithoutComprobanteInput, ventasUncheckedCreateWithoutComprobanteInput> | ventasCreateWithoutComprobanteInput[] | ventasUncheckedCreateWithoutComprobanteInput[]
    connectOrCreate?: ventasCreateOrConnectWithoutComprobanteInput | ventasCreateOrConnectWithoutComprobanteInput[]
    upsert?: ventasUpsertWithWhereUniqueWithoutComprobanteInput | ventasUpsertWithWhereUniqueWithoutComprobanteInput[]
    createMany?: ventasCreateManyComprobanteInputEnvelope
    set?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    disconnect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    delete?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    connect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    update?: ventasUpdateWithWhereUniqueWithoutComprobanteInput | ventasUpdateWithWhereUniqueWithoutComprobanteInput[]
    updateMany?: ventasUpdateManyWithWhereWithoutComprobanteInput | ventasUpdateManyWithWhereWithoutComprobanteInput[]
    deleteMany?: ventasScalarWhereInput | ventasScalarWhereInput[]
  }

  export type ventasUncheckedUpdateManyWithoutComprobanteNestedInput = {
    create?: XOR<ventasCreateWithoutComprobanteInput, ventasUncheckedCreateWithoutComprobanteInput> | ventasCreateWithoutComprobanteInput[] | ventasUncheckedCreateWithoutComprobanteInput[]
    connectOrCreate?: ventasCreateOrConnectWithoutComprobanteInput | ventasCreateOrConnectWithoutComprobanteInput[]
    upsert?: ventasUpsertWithWhereUniqueWithoutComprobanteInput | ventasUpsertWithWhereUniqueWithoutComprobanteInput[]
    createMany?: ventasCreateManyComprobanteInputEnvelope
    set?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    disconnect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    delete?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    connect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    update?: ventasUpdateWithWhereUniqueWithoutComprobanteInput | ventasUpdateWithWhereUniqueWithoutComprobanteInput[]
    updateMany?: ventasUpdateManyWithWhereWithoutComprobanteInput | ventasUpdateManyWithWhereWithoutComprobanteInput[]
    deleteMany?: ventasScalarWhereInput | ventasScalarWhereInput[]
  }

  export type productosCreateNestedOneWithoutDetalleventaInput = {
    create?: XOR<productosCreateWithoutDetalleventaInput, productosUncheckedCreateWithoutDetalleventaInput>
    connectOrCreate?: productosCreateOrConnectWithoutDetalleventaInput
    connect?: productosWhereUniqueInput
  }

  export type ventasCreateNestedOneWithoutDetalleventaInput = {
    create?: XOR<ventasCreateWithoutDetalleventaInput, ventasUncheckedCreateWithoutDetalleventaInput>
    connectOrCreate?: ventasCreateOrConnectWithoutDetalleventaInput
    connect?: ventasWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type productosUpdateOneRequiredWithoutDetalleventaNestedInput = {
    create?: XOR<productosCreateWithoutDetalleventaInput, productosUncheckedCreateWithoutDetalleventaInput>
    connectOrCreate?: productosCreateOrConnectWithoutDetalleventaInput
    upsert?: productosUpsertWithoutDetalleventaInput
    connect?: productosWhereUniqueInput
    update?: XOR<XOR<productosUpdateToOneWithWhereWithoutDetalleventaInput, productosUpdateWithoutDetalleventaInput>, productosUncheckedUpdateWithoutDetalleventaInput>
  }

  export type ventasUpdateOneRequiredWithoutDetalleventaNestedInput = {
    create?: XOR<ventasCreateWithoutDetalleventaInput, ventasUncheckedCreateWithoutDetalleventaInput>
    connectOrCreate?: ventasCreateOrConnectWithoutDetalleventaInput
    upsert?: ventasUpsertWithoutDetalleventaInput
    connect?: ventasWhereUniqueInput
    update?: XOR<XOR<ventasUpdateToOneWithWhereWithoutDetalleventaInput, ventasUpdateWithoutDetalleventaInput>, ventasUncheckedUpdateWithoutDetalleventaInput>
  }

  export type ventasCreateNestedManyWithoutMetodopagoInput = {
    create?: XOR<ventasCreateWithoutMetodopagoInput, ventasUncheckedCreateWithoutMetodopagoInput> | ventasCreateWithoutMetodopagoInput[] | ventasUncheckedCreateWithoutMetodopagoInput[]
    connectOrCreate?: ventasCreateOrConnectWithoutMetodopagoInput | ventasCreateOrConnectWithoutMetodopagoInput[]
    createMany?: ventasCreateManyMetodopagoInputEnvelope
    connect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
  }

  export type ventasUncheckedCreateNestedManyWithoutMetodopagoInput = {
    create?: XOR<ventasCreateWithoutMetodopagoInput, ventasUncheckedCreateWithoutMetodopagoInput> | ventasCreateWithoutMetodopagoInput[] | ventasUncheckedCreateWithoutMetodopagoInput[]
    connectOrCreate?: ventasCreateOrConnectWithoutMetodopagoInput | ventasCreateOrConnectWithoutMetodopagoInput[]
    createMany?: ventasCreateManyMetodopagoInputEnvelope
    connect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
  }

  export type ventasUpdateManyWithoutMetodopagoNestedInput = {
    create?: XOR<ventasCreateWithoutMetodopagoInput, ventasUncheckedCreateWithoutMetodopagoInput> | ventasCreateWithoutMetodopagoInput[] | ventasUncheckedCreateWithoutMetodopagoInput[]
    connectOrCreate?: ventasCreateOrConnectWithoutMetodopagoInput | ventasCreateOrConnectWithoutMetodopagoInput[]
    upsert?: ventasUpsertWithWhereUniqueWithoutMetodopagoInput | ventasUpsertWithWhereUniqueWithoutMetodopagoInput[]
    createMany?: ventasCreateManyMetodopagoInputEnvelope
    set?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    disconnect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    delete?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    connect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    update?: ventasUpdateWithWhereUniqueWithoutMetodopagoInput | ventasUpdateWithWhereUniqueWithoutMetodopagoInput[]
    updateMany?: ventasUpdateManyWithWhereWithoutMetodopagoInput | ventasUpdateManyWithWhereWithoutMetodopagoInput[]
    deleteMany?: ventasScalarWhereInput | ventasScalarWhereInput[]
  }

  export type ventasUncheckedUpdateManyWithoutMetodopagoNestedInput = {
    create?: XOR<ventasCreateWithoutMetodopagoInput, ventasUncheckedCreateWithoutMetodopagoInput> | ventasCreateWithoutMetodopagoInput[] | ventasUncheckedCreateWithoutMetodopagoInput[]
    connectOrCreate?: ventasCreateOrConnectWithoutMetodopagoInput | ventasCreateOrConnectWithoutMetodopagoInput[]
    upsert?: ventasUpsertWithWhereUniqueWithoutMetodopagoInput | ventasUpsertWithWhereUniqueWithoutMetodopagoInput[]
    createMany?: ventasCreateManyMetodopagoInputEnvelope
    set?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    disconnect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    delete?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    connect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    update?: ventasUpdateWithWhereUniqueWithoutMetodopagoInput | ventasUpdateWithWhereUniqueWithoutMetodopagoInput[]
    updateMany?: ventasUpdateManyWithWhereWithoutMetodopagoInput | ventasUpdateManyWithWhereWithoutMetodopagoInput[]
    deleteMany?: ventasScalarWhereInput | ventasScalarWhereInput[]
  }

  export type alergenoproductoCreateNestedManyWithoutProductosInput = {
    create?: XOR<alergenoproductoCreateWithoutProductosInput, alergenoproductoUncheckedCreateWithoutProductosInput> | alergenoproductoCreateWithoutProductosInput[] | alergenoproductoUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: alergenoproductoCreateOrConnectWithoutProductosInput | alergenoproductoCreateOrConnectWithoutProductosInput[]
    createMany?: alergenoproductoCreateManyProductosInputEnvelope
    connect?: alergenoproductoWhereUniqueInput | alergenoproductoWhereUniqueInput[]
  }

  export type detalleventaCreateNestedManyWithoutProductosInput = {
    create?: XOR<detalleventaCreateWithoutProductosInput, detalleventaUncheckedCreateWithoutProductosInput> | detalleventaCreateWithoutProductosInput[] | detalleventaUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: detalleventaCreateOrConnectWithoutProductosInput | detalleventaCreateOrConnectWithoutProductosInput[]
    createMany?: detalleventaCreateManyProductosInputEnvelope
    connect?: detalleventaWhereUniqueInput | detalleventaWhereUniqueInput[]
  }

  export type ingredienteproductoCreateNestedManyWithoutProductosInput = {
    create?: XOR<ingredienteproductoCreateWithoutProductosInput, ingredienteproductoUncheckedCreateWithoutProductosInput> | ingredienteproductoCreateWithoutProductosInput[] | ingredienteproductoUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: ingredienteproductoCreateOrConnectWithoutProductosInput | ingredienteproductoCreateOrConnectWithoutProductosInput[]
    createMany?: ingredienteproductoCreateManyProductosInputEnvelope
    connect?: ingredienteproductoWhereUniqueInput | ingredienteproductoWhereUniqueInput[]
  }

  export type categoriaCreateNestedOneWithoutProductosInput = {
    create?: XOR<categoriaCreateWithoutProductosInput, categoriaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutProductosInput
    connect?: categoriaWhereUniqueInput
  }

  export type alergenoproductoUncheckedCreateNestedManyWithoutProductosInput = {
    create?: XOR<alergenoproductoCreateWithoutProductosInput, alergenoproductoUncheckedCreateWithoutProductosInput> | alergenoproductoCreateWithoutProductosInput[] | alergenoproductoUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: alergenoproductoCreateOrConnectWithoutProductosInput | alergenoproductoCreateOrConnectWithoutProductosInput[]
    createMany?: alergenoproductoCreateManyProductosInputEnvelope
    connect?: alergenoproductoWhereUniqueInput | alergenoproductoWhereUniqueInput[]
  }

  export type detalleventaUncheckedCreateNestedManyWithoutProductosInput = {
    create?: XOR<detalleventaCreateWithoutProductosInput, detalleventaUncheckedCreateWithoutProductosInput> | detalleventaCreateWithoutProductosInput[] | detalleventaUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: detalleventaCreateOrConnectWithoutProductosInput | detalleventaCreateOrConnectWithoutProductosInput[]
    createMany?: detalleventaCreateManyProductosInputEnvelope
    connect?: detalleventaWhereUniqueInput | detalleventaWhereUniqueInput[]
  }

  export type ingredienteproductoUncheckedCreateNestedManyWithoutProductosInput = {
    create?: XOR<ingredienteproductoCreateWithoutProductosInput, ingredienteproductoUncheckedCreateWithoutProductosInput> | ingredienteproductoCreateWithoutProductosInput[] | ingredienteproductoUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: ingredienteproductoCreateOrConnectWithoutProductosInput | ingredienteproductoCreateOrConnectWithoutProductosInput[]
    createMany?: ingredienteproductoCreateManyProductosInputEnvelope
    connect?: ingredienteproductoWhereUniqueInput | ingredienteproductoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type alergenoproductoUpdateManyWithoutProductosNestedInput = {
    create?: XOR<alergenoproductoCreateWithoutProductosInput, alergenoproductoUncheckedCreateWithoutProductosInput> | alergenoproductoCreateWithoutProductosInput[] | alergenoproductoUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: alergenoproductoCreateOrConnectWithoutProductosInput | alergenoproductoCreateOrConnectWithoutProductosInput[]
    upsert?: alergenoproductoUpsertWithWhereUniqueWithoutProductosInput | alergenoproductoUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: alergenoproductoCreateManyProductosInputEnvelope
    set?: alergenoproductoWhereUniqueInput | alergenoproductoWhereUniqueInput[]
    disconnect?: alergenoproductoWhereUniqueInput | alergenoproductoWhereUniqueInput[]
    delete?: alergenoproductoWhereUniqueInput | alergenoproductoWhereUniqueInput[]
    connect?: alergenoproductoWhereUniqueInput | alergenoproductoWhereUniqueInput[]
    update?: alergenoproductoUpdateWithWhereUniqueWithoutProductosInput | alergenoproductoUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: alergenoproductoUpdateManyWithWhereWithoutProductosInput | alergenoproductoUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: alergenoproductoScalarWhereInput | alergenoproductoScalarWhereInput[]
  }

  export type detalleventaUpdateManyWithoutProductosNestedInput = {
    create?: XOR<detalleventaCreateWithoutProductosInput, detalleventaUncheckedCreateWithoutProductosInput> | detalleventaCreateWithoutProductosInput[] | detalleventaUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: detalleventaCreateOrConnectWithoutProductosInput | detalleventaCreateOrConnectWithoutProductosInput[]
    upsert?: detalleventaUpsertWithWhereUniqueWithoutProductosInput | detalleventaUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: detalleventaCreateManyProductosInputEnvelope
    set?: detalleventaWhereUniqueInput | detalleventaWhereUniqueInput[]
    disconnect?: detalleventaWhereUniqueInput | detalleventaWhereUniqueInput[]
    delete?: detalleventaWhereUniqueInput | detalleventaWhereUniqueInput[]
    connect?: detalleventaWhereUniqueInput | detalleventaWhereUniqueInput[]
    update?: detalleventaUpdateWithWhereUniqueWithoutProductosInput | detalleventaUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: detalleventaUpdateManyWithWhereWithoutProductosInput | detalleventaUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: detalleventaScalarWhereInput | detalleventaScalarWhereInput[]
  }

  export type ingredienteproductoUpdateManyWithoutProductosNestedInput = {
    create?: XOR<ingredienteproductoCreateWithoutProductosInput, ingredienteproductoUncheckedCreateWithoutProductosInput> | ingredienteproductoCreateWithoutProductosInput[] | ingredienteproductoUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: ingredienteproductoCreateOrConnectWithoutProductosInput | ingredienteproductoCreateOrConnectWithoutProductosInput[]
    upsert?: ingredienteproductoUpsertWithWhereUniqueWithoutProductosInput | ingredienteproductoUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: ingredienteproductoCreateManyProductosInputEnvelope
    set?: ingredienteproductoWhereUniqueInput | ingredienteproductoWhereUniqueInput[]
    disconnect?: ingredienteproductoWhereUniqueInput | ingredienteproductoWhereUniqueInput[]
    delete?: ingredienteproductoWhereUniqueInput | ingredienteproductoWhereUniqueInput[]
    connect?: ingredienteproductoWhereUniqueInput | ingredienteproductoWhereUniqueInput[]
    update?: ingredienteproductoUpdateWithWhereUniqueWithoutProductosInput | ingredienteproductoUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: ingredienteproductoUpdateManyWithWhereWithoutProductosInput | ingredienteproductoUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: ingredienteproductoScalarWhereInput | ingredienteproductoScalarWhereInput[]
  }

  export type categoriaUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<categoriaCreateWithoutProductosInput, categoriaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutProductosInput
    upsert?: categoriaUpsertWithoutProductosInput
    connect?: categoriaWhereUniqueInput
    update?: XOR<XOR<categoriaUpdateToOneWithWhereWithoutProductosInput, categoriaUpdateWithoutProductosInput>, categoriaUncheckedUpdateWithoutProductosInput>
  }

  export type alergenoproductoUncheckedUpdateManyWithoutProductosNestedInput = {
    create?: XOR<alergenoproductoCreateWithoutProductosInput, alergenoproductoUncheckedCreateWithoutProductosInput> | alergenoproductoCreateWithoutProductosInput[] | alergenoproductoUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: alergenoproductoCreateOrConnectWithoutProductosInput | alergenoproductoCreateOrConnectWithoutProductosInput[]
    upsert?: alergenoproductoUpsertWithWhereUniqueWithoutProductosInput | alergenoproductoUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: alergenoproductoCreateManyProductosInputEnvelope
    set?: alergenoproductoWhereUniqueInput | alergenoproductoWhereUniqueInput[]
    disconnect?: alergenoproductoWhereUniqueInput | alergenoproductoWhereUniqueInput[]
    delete?: alergenoproductoWhereUniqueInput | alergenoproductoWhereUniqueInput[]
    connect?: alergenoproductoWhereUniqueInput | alergenoproductoWhereUniqueInput[]
    update?: alergenoproductoUpdateWithWhereUniqueWithoutProductosInput | alergenoproductoUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: alergenoproductoUpdateManyWithWhereWithoutProductosInput | alergenoproductoUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: alergenoproductoScalarWhereInput | alergenoproductoScalarWhereInput[]
  }

  export type detalleventaUncheckedUpdateManyWithoutProductosNestedInput = {
    create?: XOR<detalleventaCreateWithoutProductosInput, detalleventaUncheckedCreateWithoutProductosInput> | detalleventaCreateWithoutProductosInput[] | detalleventaUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: detalleventaCreateOrConnectWithoutProductosInput | detalleventaCreateOrConnectWithoutProductosInput[]
    upsert?: detalleventaUpsertWithWhereUniqueWithoutProductosInput | detalleventaUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: detalleventaCreateManyProductosInputEnvelope
    set?: detalleventaWhereUniqueInput | detalleventaWhereUniqueInput[]
    disconnect?: detalleventaWhereUniqueInput | detalleventaWhereUniqueInput[]
    delete?: detalleventaWhereUniqueInput | detalleventaWhereUniqueInput[]
    connect?: detalleventaWhereUniqueInput | detalleventaWhereUniqueInput[]
    update?: detalleventaUpdateWithWhereUniqueWithoutProductosInput | detalleventaUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: detalleventaUpdateManyWithWhereWithoutProductosInput | detalleventaUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: detalleventaScalarWhereInput | detalleventaScalarWhereInput[]
  }

  export type ingredienteproductoUncheckedUpdateManyWithoutProductosNestedInput = {
    create?: XOR<ingredienteproductoCreateWithoutProductosInput, ingredienteproductoUncheckedCreateWithoutProductosInput> | ingredienteproductoCreateWithoutProductosInput[] | ingredienteproductoUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: ingredienteproductoCreateOrConnectWithoutProductosInput | ingredienteproductoCreateOrConnectWithoutProductosInput[]
    upsert?: ingredienteproductoUpsertWithWhereUniqueWithoutProductosInput | ingredienteproductoUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: ingredienteproductoCreateManyProductosInputEnvelope
    set?: ingredienteproductoWhereUniqueInput | ingredienteproductoWhereUniqueInput[]
    disconnect?: ingredienteproductoWhereUniqueInput | ingredienteproductoWhereUniqueInput[]
    delete?: ingredienteproductoWhereUniqueInput | ingredienteproductoWhereUniqueInput[]
    connect?: ingredienteproductoWhereUniqueInput | ingredienteproductoWhereUniqueInput[]
    update?: ingredienteproductoUpdateWithWhereUniqueWithoutProductosInput | ingredienteproductoUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: ingredienteproductoUpdateManyWithWhereWithoutProductosInput | ingredienteproductoUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: ingredienteproductoScalarWhereInput | ingredienteproductoScalarWhereInput[]
  }

  export type accesoqrCreateNestedManyWithoutTipoaccesoInput = {
    create?: XOR<accesoqrCreateWithoutTipoaccesoInput, accesoqrUncheckedCreateWithoutTipoaccesoInput> | accesoqrCreateWithoutTipoaccesoInput[] | accesoqrUncheckedCreateWithoutTipoaccesoInput[]
    connectOrCreate?: accesoqrCreateOrConnectWithoutTipoaccesoInput | accesoqrCreateOrConnectWithoutTipoaccesoInput[]
    createMany?: accesoqrCreateManyTipoaccesoInputEnvelope
    connect?: accesoqrWhereUniqueInput | accesoqrWhereUniqueInput[]
  }

  export type accesoqrUncheckedCreateNestedManyWithoutTipoaccesoInput = {
    create?: XOR<accesoqrCreateWithoutTipoaccesoInput, accesoqrUncheckedCreateWithoutTipoaccesoInput> | accesoqrCreateWithoutTipoaccesoInput[] | accesoqrUncheckedCreateWithoutTipoaccesoInput[]
    connectOrCreate?: accesoqrCreateOrConnectWithoutTipoaccesoInput | accesoqrCreateOrConnectWithoutTipoaccesoInput[]
    createMany?: accesoqrCreateManyTipoaccesoInputEnvelope
    connect?: accesoqrWhereUniqueInput | accesoqrWhereUniqueInput[]
  }

  export type accesoqrUpdateManyWithoutTipoaccesoNestedInput = {
    create?: XOR<accesoqrCreateWithoutTipoaccesoInput, accesoqrUncheckedCreateWithoutTipoaccesoInput> | accesoqrCreateWithoutTipoaccesoInput[] | accesoqrUncheckedCreateWithoutTipoaccesoInput[]
    connectOrCreate?: accesoqrCreateOrConnectWithoutTipoaccesoInput | accesoqrCreateOrConnectWithoutTipoaccesoInput[]
    upsert?: accesoqrUpsertWithWhereUniqueWithoutTipoaccesoInput | accesoqrUpsertWithWhereUniqueWithoutTipoaccesoInput[]
    createMany?: accesoqrCreateManyTipoaccesoInputEnvelope
    set?: accesoqrWhereUniqueInput | accesoqrWhereUniqueInput[]
    disconnect?: accesoqrWhereUniqueInput | accesoqrWhereUniqueInput[]
    delete?: accesoqrWhereUniqueInput | accesoqrWhereUniqueInput[]
    connect?: accesoqrWhereUniqueInput | accesoqrWhereUniqueInput[]
    update?: accesoqrUpdateWithWhereUniqueWithoutTipoaccesoInput | accesoqrUpdateWithWhereUniqueWithoutTipoaccesoInput[]
    updateMany?: accesoqrUpdateManyWithWhereWithoutTipoaccesoInput | accesoqrUpdateManyWithWhereWithoutTipoaccesoInput[]
    deleteMany?: accesoqrScalarWhereInput | accesoqrScalarWhereInput[]
  }

  export type accesoqrUncheckedUpdateManyWithoutTipoaccesoNestedInput = {
    create?: XOR<accesoqrCreateWithoutTipoaccesoInput, accesoqrUncheckedCreateWithoutTipoaccesoInput> | accesoqrCreateWithoutTipoaccesoInput[] | accesoqrUncheckedCreateWithoutTipoaccesoInput[]
    connectOrCreate?: accesoqrCreateOrConnectWithoutTipoaccesoInput | accesoqrCreateOrConnectWithoutTipoaccesoInput[]
    upsert?: accesoqrUpsertWithWhereUniqueWithoutTipoaccesoInput | accesoqrUpsertWithWhereUniqueWithoutTipoaccesoInput[]
    createMany?: accesoqrCreateManyTipoaccesoInputEnvelope
    set?: accesoqrWhereUniqueInput | accesoqrWhereUniqueInput[]
    disconnect?: accesoqrWhereUniqueInput | accesoqrWhereUniqueInput[]
    delete?: accesoqrWhereUniqueInput | accesoqrWhereUniqueInput[]
    connect?: accesoqrWhereUniqueInput | accesoqrWhereUniqueInput[]
    update?: accesoqrUpdateWithWhereUniqueWithoutTipoaccesoInput | accesoqrUpdateWithWhereUniqueWithoutTipoaccesoInput[]
    updateMany?: accesoqrUpdateManyWithWhereWithoutTipoaccesoInput | accesoqrUpdateManyWithWhereWithoutTipoaccesoInput[]
    deleteMany?: accesoqrScalarWhereInput | accesoqrScalarWhereInput[]
  }

  export type ticketsCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<ticketsCreateWithoutUsuariosInput, ticketsUncheckedCreateWithoutUsuariosInput> | ticketsCreateWithoutUsuariosInput[] | ticketsUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutUsuariosInput | ticketsCreateOrConnectWithoutUsuariosInput[]
    createMany?: ticketsCreateManyUsuariosInputEnvelope
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
  }

  export type ventasCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<ventasCreateWithoutUsuariosInput, ventasUncheckedCreateWithoutUsuariosInput> | ventasCreateWithoutUsuariosInput[] | ventasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ventasCreateOrConnectWithoutUsuariosInput | ventasCreateOrConnectWithoutUsuariosInput[]
    createMany?: ventasCreateManyUsuariosInputEnvelope
    connect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
  }

  export type ia_conversacionesCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<ia_conversacionesCreateWithoutUsuariosInput, ia_conversacionesUncheckedCreateWithoutUsuariosInput> | ia_conversacionesCreateWithoutUsuariosInput[] | ia_conversacionesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ia_conversacionesCreateOrConnectWithoutUsuariosInput | ia_conversacionesCreateOrConnectWithoutUsuariosInput[]
    createMany?: ia_conversacionesCreateManyUsuariosInputEnvelope
    connect?: ia_conversacionesWhereUniqueInput | ia_conversacionesWhereUniqueInput[]
  }

  export type email_eventosCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<email_eventosCreateWithoutUsuariosInput, email_eventosUncheckedCreateWithoutUsuariosInput> | email_eventosCreateWithoutUsuariosInput[] | email_eventosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: email_eventosCreateOrConnectWithoutUsuariosInput | email_eventosCreateOrConnectWithoutUsuariosInput[]
    createMany?: email_eventosCreateManyUsuariosInputEnvelope
    connect?: email_eventosWhereUniqueInput | email_eventosWhereUniqueInput[]
  }

  export type reservasCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<reservasCreateWithoutUsuariosInput, reservasUncheckedCreateWithoutUsuariosInput> | reservasCreateWithoutUsuariosInput[] | reservasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutUsuariosInput | reservasCreateOrConnectWithoutUsuariosInput[]
    createMany?: reservasCreateManyUsuariosInputEnvelope
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
  }

  export type ticketsUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<ticketsCreateWithoutUsuariosInput, ticketsUncheckedCreateWithoutUsuariosInput> | ticketsCreateWithoutUsuariosInput[] | ticketsUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutUsuariosInput | ticketsCreateOrConnectWithoutUsuariosInput[]
    createMany?: ticketsCreateManyUsuariosInputEnvelope
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
  }

  export type ventasUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<ventasCreateWithoutUsuariosInput, ventasUncheckedCreateWithoutUsuariosInput> | ventasCreateWithoutUsuariosInput[] | ventasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ventasCreateOrConnectWithoutUsuariosInput | ventasCreateOrConnectWithoutUsuariosInput[]
    createMany?: ventasCreateManyUsuariosInputEnvelope
    connect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
  }

  export type ia_conversacionesUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<ia_conversacionesCreateWithoutUsuariosInput, ia_conversacionesUncheckedCreateWithoutUsuariosInput> | ia_conversacionesCreateWithoutUsuariosInput[] | ia_conversacionesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ia_conversacionesCreateOrConnectWithoutUsuariosInput | ia_conversacionesCreateOrConnectWithoutUsuariosInput[]
    createMany?: ia_conversacionesCreateManyUsuariosInputEnvelope
    connect?: ia_conversacionesWhereUniqueInput | ia_conversacionesWhereUniqueInput[]
  }

  export type email_eventosUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<email_eventosCreateWithoutUsuariosInput, email_eventosUncheckedCreateWithoutUsuariosInput> | email_eventosCreateWithoutUsuariosInput[] | email_eventosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: email_eventosCreateOrConnectWithoutUsuariosInput | email_eventosCreateOrConnectWithoutUsuariosInput[]
    createMany?: email_eventosCreateManyUsuariosInputEnvelope
    connect?: email_eventosWhereUniqueInput | email_eventosWhereUniqueInput[]
  }

  export type reservasUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<reservasCreateWithoutUsuariosInput, reservasUncheckedCreateWithoutUsuariosInput> | reservasCreateWithoutUsuariosInput[] | reservasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutUsuariosInput | reservasCreateOrConnectWithoutUsuariosInput[]
    createMany?: reservasCreateManyUsuariosInputEnvelope
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
  }

  export type ticketsUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<ticketsCreateWithoutUsuariosInput, ticketsUncheckedCreateWithoutUsuariosInput> | ticketsCreateWithoutUsuariosInput[] | ticketsUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutUsuariosInput | ticketsCreateOrConnectWithoutUsuariosInput[]
    upsert?: ticketsUpsertWithWhereUniqueWithoutUsuariosInput | ticketsUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: ticketsCreateManyUsuariosInputEnvelope
    set?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    disconnect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    delete?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    update?: ticketsUpdateWithWhereUniqueWithoutUsuariosInput | ticketsUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: ticketsUpdateManyWithWhereWithoutUsuariosInput | ticketsUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
  }

  export type ventasUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<ventasCreateWithoutUsuariosInput, ventasUncheckedCreateWithoutUsuariosInput> | ventasCreateWithoutUsuariosInput[] | ventasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ventasCreateOrConnectWithoutUsuariosInput | ventasCreateOrConnectWithoutUsuariosInput[]
    upsert?: ventasUpsertWithWhereUniqueWithoutUsuariosInput | ventasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: ventasCreateManyUsuariosInputEnvelope
    set?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    disconnect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    delete?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    connect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    update?: ventasUpdateWithWhereUniqueWithoutUsuariosInput | ventasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: ventasUpdateManyWithWhereWithoutUsuariosInput | ventasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: ventasScalarWhereInput | ventasScalarWhereInput[]
  }

  export type ia_conversacionesUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<ia_conversacionesCreateWithoutUsuariosInput, ia_conversacionesUncheckedCreateWithoutUsuariosInput> | ia_conversacionesCreateWithoutUsuariosInput[] | ia_conversacionesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ia_conversacionesCreateOrConnectWithoutUsuariosInput | ia_conversacionesCreateOrConnectWithoutUsuariosInput[]
    upsert?: ia_conversacionesUpsertWithWhereUniqueWithoutUsuariosInput | ia_conversacionesUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: ia_conversacionesCreateManyUsuariosInputEnvelope
    set?: ia_conversacionesWhereUniqueInput | ia_conversacionesWhereUniqueInput[]
    disconnect?: ia_conversacionesWhereUniqueInput | ia_conversacionesWhereUniqueInput[]
    delete?: ia_conversacionesWhereUniqueInput | ia_conversacionesWhereUniqueInput[]
    connect?: ia_conversacionesWhereUniqueInput | ia_conversacionesWhereUniqueInput[]
    update?: ia_conversacionesUpdateWithWhereUniqueWithoutUsuariosInput | ia_conversacionesUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: ia_conversacionesUpdateManyWithWhereWithoutUsuariosInput | ia_conversacionesUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: ia_conversacionesScalarWhereInput | ia_conversacionesScalarWhereInput[]
  }

  export type email_eventosUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<email_eventosCreateWithoutUsuariosInput, email_eventosUncheckedCreateWithoutUsuariosInput> | email_eventosCreateWithoutUsuariosInput[] | email_eventosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: email_eventosCreateOrConnectWithoutUsuariosInput | email_eventosCreateOrConnectWithoutUsuariosInput[]
    upsert?: email_eventosUpsertWithWhereUniqueWithoutUsuariosInput | email_eventosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: email_eventosCreateManyUsuariosInputEnvelope
    set?: email_eventosWhereUniqueInput | email_eventosWhereUniqueInput[]
    disconnect?: email_eventosWhereUniqueInput | email_eventosWhereUniqueInput[]
    delete?: email_eventosWhereUniqueInput | email_eventosWhereUniqueInput[]
    connect?: email_eventosWhereUniqueInput | email_eventosWhereUniqueInput[]
    update?: email_eventosUpdateWithWhereUniqueWithoutUsuariosInput | email_eventosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: email_eventosUpdateManyWithWhereWithoutUsuariosInput | email_eventosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: email_eventosScalarWhereInput | email_eventosScalarWhereInput[]
  }

  export type reservasUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<reservasCreateWithoutUsuariosInput, reservasUncheckedCreateWithoutUsuariosInput> | reservasCreateWithoutUsuariosInput[] | reservasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutUsuariosInput | reservasCreateOrConnectWithoutUsuariosInput[]
    upsert?: reservasUpsertWithWhereUniqueWithoutUsuariosInput | reservasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: reservasCreateManyUsuariosInputEnvelope
    set?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    disconnect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    delete?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    update?: reservasUpdateWithWhereUniqueWithoutUsuariosInput | reservasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: reservasUpdateManyWithWhereWithoutUsuariosInput | reservasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: reservasScalarWhereInput | reservasScalarWhereInput[]
  }

  export type ticketsUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<ticketsCreateWithoutUsuariosInput, ticketsUncheckedCreateWithoutUsuariosInput> | ticketsCreateWithoutUsuariosInput[] | ticketsUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutUsuariosInput | ticketsCreateOrConnectWithoutUsuariosInput[]
    upsert?: ticketsUpsertWithWhereUniqueWithoutUsuariosInput | ticketsUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: ticketsCreateManyUsuariosInputEnvelope
    set?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    disconnect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    delete?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    update?: ticketsUpdateWithWhereUniqueWithoutUsuariosInput | ticketsUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: ticketsUpdateManyWithWhereWithoutUsuariosInput | ticketsUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
  }

  export type ventasUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<ventasCreateWithoutUsuariosInput, ventasUncheckedCreateWithoutUsuariosInput> | ventasCreateWithoutUsuariosInput[] | ventasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ventasCreateOrConnectWithoutUsuariosInput | ventasCreateOrConnectWithoutUsuariosInput[]
    upsert?: ventasUpsertWithWhereUniqueWithoutUsuariosInput | ventasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: ventasCreateManyUsuariosInputEnvelope
    set?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    disconnect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    delete?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    connect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    update?: ventasUpdateWithWhereUniqueWithoutUsuariosInput | ventasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: ventasUpdateManyWithWhereWithoutUsuariosInput | ventasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: ventasScalarWhereInput | ventasScalarWhereInput[]
  }

  export type ia_conversacionesUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<ia_conversacionesCreateWithoutUsuariosInput, ia_conversacionesUncheckedCreateWithoutUsuariosInput> | ia_conversacionesCreateWithoutUsuariosInput[] | ia_conversacionesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ia_conversacionesCreateOrConnectWithoutUsuariosInput | ia_conversacionesCreateOrConnectWithoutUsuariosInput[]
    upsert?: ia_conversacionesUpsertWithWhereUniqueWithoutUsuariosInput | ia_conversacionesUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: ia_conversacionesCreateManyUsuariosInputEnvelope
    set?: ia_conversacionesWhereUniqueInput | ia_conversacionesWhereUniqueInput[]
    disconnect?: ia_conversacionesWhereUniqueInput | ia_conversacionesWhereUniqueInput[]
    delete?: ia_conversacionesWhereUniqueInput | ia_conversacionesWhereUniqueInput[]
    connect?: ia_conversacionesWhereUniqueInput | ia_conversacionesWhereUniqueInput[]
    update?: ia_conversacionesUpdateWithWhereUniqueWithoutUsuariosInput | ia_conversacionesUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: ia_conversacionesUpdateManyWithWhereWithoutUsuariosInput | ia_conversacionesUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: ia_conversacionesScalarWhereInput | ia_conversacionesScalarWhereInput[]
  }

  export type email_eventosUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<email_eventosCreateWithoutUsuariosInput, email_eventosUncheckedCreateWithoutUsuariosInput> | email_eventosCreateWithoutUsuariosInput[] | email_eventosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: email_eventosCreateOrConnectWithoutUsuariosInput | email_eventosCreateOrConnectWithoutUsuariosInput[]
    upsert?: email_eventosUpsertWithWhereUniqueWithoutUsuariosInput | email_eventosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: email_eventosCreateManyUsuariosInputEnvelope
    set?: email_eventosWhereUniqueInput | email_eventosWhereUniqueInput[]
    disconnect?: email_eventosWhereUniqueInput | email_eventosWhereUniqueInput[]
    delete?: email_eventosWhereUniqueInput | email_eventosWhereUniqueInput[]
    connect?: email_eventosWhereUniqueInput | email_eventosWhereUniqueInput[]
    update?: email_eventosUpdateWithWhereUniqueWithoutUsuariosInput | email_eventosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: email_eventosUpdateManyWithWhereWithoutUsuariosInput | email_eventosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: email_eventosScalarWhereInput | email_eventosScalarWhereInput[]
  }

  export type reservasUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<reservasCreateWithoutUsuariosInput, reservasUncheckedCreateWithoutUsuariosInput> | reservasCreateWithoutUsuariosInput[] | reservasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutUsuariosInput | reservasCreateOrConnectWithoutUsuariosInput[]
    upsert?: reservasUpsertWithWhereUniqueWithoutUsuariosInput | reservasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: reservasCreateManyUsuariosInputEnvelope
    set?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    disconnect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    delete?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    update?: reservasUpdateWithWhereUniqueWithoutUsuariosInput | reservasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: reservasUpdateManyWithWhereWithoutUsuariosInput | reservasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: reservasScalarWhereInput | reservasScalarWhereInput[]
  }

  export type detalleventaCreateNestedManyWithoutVentasInput = {
    create?: XOR<detalleventaCreateWithoutVentasInput, detalleventaUncheckedCreateWithoutVentasInput> | detalleventaCreateWithoutVentasInput[] | detalleventaUncheckedCreateWithoutVentasInput[]
    connectOrCreate?: detalleventaCreateOrConnectWithoutVentasInput | detalleventaCreateOrConnectWithoutVentasInput[]
    createMany?: detalleventaCreateManyVentasInputEnvelope
    connect?: detalleventaWhereUniqueInput | detalleventaWhereUniqueInput[]
  }

  export type usuariosCreateNestedOneWithoutVentasInput = {
    create?: XOR<usuariosCreateWithoutVentasInput, usuariosUncheckedCreateWithoutVentasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutVentasInput
    connect?: usuariosWhereUniqueInput
  }

  export type metodopagoCreateNestedOneWithoutVentasInput = {
    create?: XOR<metodopagoCreateWithoutVentasInput, metodopagoUncheckedCreateWithoutVentasInput>
    connectOrCreate?: metodopagoCreateOrConnectWithoutVentasInput
    connect?: metodopagoWhereUniqueInput
  }

  export type comprobanteCreateNestedOneWithoutVentasInput = {
    create?: XOR<comprobanteCreateWithoutVentasInput, comprobanteUncheckedCreateWithoutVentasInput>
    connectOrCreate?: comprobanteCreateOrConnectWithoutVentasInput
    connect?: comprobanteWhereUniqueInput
  }

  export type detalleventaUncheckedCreateNestedManyWithoutVentasInput = {
    create?: XOR<detalleventaCreateWithoutVentasInput, detalleventaUncheckedCreateWithoutVentasInput> | detalleventaCreateWithoutVentasInput[] | detalleventaUncheckedCreateWithoutVentasInput[]
    connectOrCreate?: detalleventaCreateOrConnectWithoutVentasInput | detalleventaCreateOrConnectWithoutVentasInput[]
    createMany?: detalleventaCreateManyVentasInputEnvelope
    connect?: detalleventaWhereUniqueInput | detalleventaWhereUniqueInput[]
  }

  export type detalleventaUpdateManyWithoutVentasNestedInput = {
    create?: XOR<detalleventaCreateWithoutVentasInput, detalleventaUncheckedCreateWithoutVentasInput> | detalleventaCreateWithoutVentasInput[] | detalleventaUncheckedCreateWithoutVentasInput[]
    connectOrCreate?: detalleventaCreateOrConnectWithoutVentasInput | detalleventaCreateOrConnectWithoutVentasInput[]
    upsert?: detalleventaUpsertWithWhereUniqueWithoutVentasInput | detalleventaUpsertWithWhereUniqueWithoutVentasInput[]
    createMany?: detalleventaCreateManyVentasInputEnvelope
    set?: detalleventaWhereUniqueInput | detalleventaWhereUniqueInput[]
    disconnect?: detalleventaWhereUniqueInput | detalleventaWhereUniqueInput[]
    delete?: detalleventaWhereUniqueInput | detalleventaWhereUniqueInput[]
    connect?: detalleventaWhereUniqueInput | detalleventaWhereUniqueInput[]
    update?: detalleventaUpdateWithWhereUniqueWithoutVentasInput | detalleventaUpdateWithWhereUniqueWithoutVentasInput[]
    updateMany?: detalleventaUpdateManyWithWhereWithoutVentasInput | detalleventaUpdateManyWithWhereWithoutVentasInput[]
    deleteMany?: detalleventaScalarWhereInput | detalleventaScalarWhereInput[]
  }

  export type usuariosUpdateOneRequiredWithoutVentasNestedInput = {
    create?: XOR<usuariosCreateWithoutVentasInput, usuariosUncheckedCreateWithoutVentasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutVentasInput
    upsert?: usuariosUpsertWithoutVentasInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutVentasInput, usuariosUpdateWithoutVentasInput>, usuariosUncheckedUpdateWithoutVentasInput>
  }

  export type metodopagoUpdateOneRequiredWithoutVentasNestedInput = {
    create?: XOR<metodopagoCreateWithoutVentasInput, metodopagoUncheckedCreateWithoutVentasInput>
    connectOrCreate?: metodopagoCreateOrConnectWithoutVentasInput
    upsert?: metodopagoUpsertWithoutVentasInput
    connect?: metodopagoWhereUniqueInput
    update?: XOR<XOR<metodopagoUpdateToOneWithWhereWithoutVentasInput, metodopagoUpdateWithoutVentasInput>, metodopagoUncheckedUpdateWithoutVentasInput>
  }

  export type comprobanteUpdateOneRequiredWithoutVentasNestedInput = {
    create?: XOR<comprobanteCreateWithoutVentasInput, comprobanteUncheckedCreateWithoutVentasInput>
    connectOrCreate?: comprobanteCreateOrConnectWithoutVentasInput
    upsert?: comprobanteUpsertWithoutVentasInput
    connect?: comprobanteWhereUniqueInput
    update?: XOR<XOR<comprobanteUpdateToOneWithWhereWithoutVentasInput, comprobanteUpdateWithoutVentasInput>, comprobanteUncheckedUpdateWithoutVentasInput>
  }

  export type detalleventaUncheckedUpdateManyWithoutVentasNestedInput = {
    create?: XOR<detalleventaCreateWithoutVentasInput, detalleventaUncheckedCreateWithoutVentasInput> | detalleventaCreateWithoutVentasInput[] | detalleventaUncheckedCreateWithoutVentasInput[]
    connectOrCreate?: detalleventaCreateOrConnectWithoutVentasInput | detalleventaCreateOrConnectWithoutVentasInput[]
    upsert?: detalleventaUpsertWithWhereUniqueWithoutVentasInput | detalleventaUpsertWithWhereUniqueWithoutVentasInput[]
    createMany?: detalleventaCreateManyVentasInputEnvelope
    set?: detalleventaWhereUniqueInput | detalleventaWhereUniqueInput[]
    disconnect?: detalleventaWhereUniqueInput | detalleventaWhereUniqueInput[]
    delete?: detalleventaWhereUniqueInput | detalleventaWhereUniqueInput[]
    connect?: detalleventaWhereUniqueInput | detalleventaWhereUniqueInput[]
    update?: detalleventaUpdateWithWhereUniqueWithoutVentasInput | detalleventaUpdateWithWhereUniqueWithoutVentasInput[]
    updateMany?: detalleventaUpdateManyWithWhereWithoutVentasInput | detalleventaUpdateManyWithWhereWithoutVentasInput[]
    deleteMany?: detalleventaScalarWhereInput | detalleventaScalarWhereInput[]
  }

  export type productosCreateNestedOneWithoutAlergenoproductoInput = {
    create?: XOR<productosCreateWithoutAlergenoproductoInput, productosUncheckedCreateWithoutAlergenoproductoInput>
    connectOrCreate?: productosCreateOrConnectWithoutAlergenoproductoInput
    connect?: productosWhereUniqueInput
  }

  export type productosUpdateOneRequiredWithoutAlergenoproductoNestedInput = {
    create?: XOR<productosCreateWithoutAlergenoproductoInput, productosUncheckedCreateWithoutAlergenoproductoInput>
    connectOrCreate?: productosCreateOrConnectWithoutAlergenoproductoInput
    upsert?: productosUpsertWithoutAlergenoproductoInput
    connect?: productosWhereUniqueInput
    update?: XOR<XOR<productosUpdateToOneWithWhereWithoutAlergenoproductoInput, productosUpdateWithoutAlergenoproductoInput>, productosUncheckedUpdateWithoutAlergenoproductoInput>
  }

  export type productosCreateNestedOneWithoutIngredienteproductoInput = {
    create?: XOR<productosCreateWithoutIngredienteproductoInput, productosUncheckedCreateWithoutIngredienteproductoInput>
    connectOrCreate?: productosCreateOrConnectWithoutIngredienteproductoInput
    connect?: productosWhereUniqueInput
  }

  export type productosUpdateOneRequiredWithoutIngredienteproductoNestedInput = {
    create?: XOR<productosCreateWithoutIngredienteproductoInput, productosUncheckedCreateWithoutIngredienteproductoInput>
    connectOrCreate?: productosCreateOrConnectWithoutIngredienteproductoInput
    upsert?: productosUpsertWithoutIngredienteproductoInput
    connect?: productosWhereUniqueInput
    update?: XOR<XOR<productosUpdateToOneWithWhereWithoutIngredienteproductoInput, productosUpdateWithoutIngredienteproductoInput>, productosUncheckedUpdateWithoutIngredienteproductoInput>
  }

  export type usuariosCreateNestedOneWithoutTicketsInput = {
    create?: XOR<usuariosCreateWithoutTicketsInput, usuariosUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutTicketsInput
    connect?: usuariosWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type usuariosUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<usuariosCreateWithoutTicketsInput, usuariosUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutTicketsInput
    upsert?: usuariosUpsertWithoutTicketsInput
    disconnect?: usuariosWhereInput | boolean
    delete?: usuariosWhereInput | boolean
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutTicketsInput, usuariosUpdateWithoutTicketsInput>, usuariosUncheckedUpdateWithoutTicketsInput>
  }

  export type usuariosCreateNestedOneWithoutIa_conversacionesInput = {
    create?: XOR<usuariosCreateWithoutIa_conversacionesInput, usuariosUncheckedCreateWithoutIa_conversacionesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutIa_conversacionesInput
    connect?: usuariosWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type usuariosUpdateOneWithoutIa_conversacionesNestedInput = {
    create?: XOR<usuariosCreateWithoutIa_conversacionesInput, usuariosUncheckedCreateWithoutIa_conversacionesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutIa_conversacionesInput
    upsert?: usuariosUpsertWithoutIa_conversacionesInput
    disconnect?: usuariosWhereInput | boolean
    delete?: usuariosWhereInput | boolean
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutIa_conversacionesInput, usuariosUpdateWithoutIa_conversacionesInput>, usuariosUncheckedUpdateWithoutIa_conversacionesInput>
  }

  export type usuariosCreateNestedOneWithoutEmail_eventosInput = {
    create?: XOR<usuariosCreateWithoutEmail_eventosInput, usuariosUncheckedCreateWithoutEmail_eventosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutEmail_eventosInput
    connect?: usuariosWhereUniqueInput
  }

  export type usuariosUpdateOneWithoutEmail_eventosNestedInput = {
    create?: XOR<usuariosCreateWithoutEmail_eventosInput, usuariosUncheckedCreateWithoutEmail_eventosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutEmail_eventosInput
    upsert?: usuariosUpsertWithoutEmail_eventosInput
    disconnect?: usuariosWhereInput | boolean
    delete?: usuariosWhereInput | boolean
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutEmail_eventosInput, usuariosUpdateWithoutEmail_eventosInput>, usuariosUncheckedUpdateWithoutEmail_eventosInput>
  }

  export type usuariosCreateNestedOneWithoutReservasInput = {
    create?: XOR<usuariosCreateWithoutReservasInput, usuariosUncheckedCreateWithoutReservasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutReservasInput
    connect?: usuariosWhereUniqueInput
  }

  export type usuariosUpdateOneWithoutReservasNestedInput = {
    create?: XOR<usuariosCreateWithoutReservasInput, usuariosUncheckedCreateWithoutReservasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutReservasInput
    upsert?: usuariosUpsertWithoutReservasInput
    disconnect?: usuariosWhereInput | boolean
    delete?: usuariosWhereInput | boolean
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutReservasInput, usuariosUpdateWithoutReservasInput>, usuariosUncheckedUpdateWithoutReservasInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type tipoaccesoCreateWithoutAccesoqrInput = {
    nombre_tipoAcceso: string
  }

  export type tipoaccesoUncheckedCreateWithoutAccesoqrInput = {
    id_tipoAcceso?: number
    nombre_tipoAcceso: string
  }

  export type tipoaccesoCreateOrConnectWithoutAccesoqrInput = {
    where: tipoaccesoWhereUniqueInput
    create: XOR<tipoaccesoCreateWithoutAccesoqrInput, tipoaccesoUncheckedCreateWithoutAccesoqrInput>
  }

  export type tipoaccesoUpsertWithoutAccesoqrInput = {
    update: XOR<tipoaccesoUpdateWithoutAccesoqrInput, tipoaccesoUncheckedUpdateWithoutAccesoqrInput>
    create: XOR<tipoaccesoCreateWithoutAccesoqrInput, tipoaccesoUncheckedCreateWithoutAccesoqrInput>
    where?: tipoaccesoWhereInput
  }

  export type tipoaccesoUpdateToOneWithWhereWithoutAccesoqrInput = {
    where?: tipoaccesoWhereInput
    data: XOR<tipoaccesoUpdateWithoutAccesoqrInput, tipoaccesoUncheckedUpdateWithoutAccesoqrInput>
  }

  export type tipoaccesoUpdateWithoutAccesoqrInput = {
    nombre_tipoAcceso?: StringFieldUpdateOperationsInput | string
  }

  export type tipoaccesoUncheckedUpdateWithoutAccesoqrInput = {
    id_tipoAcceso?: IntFieldUpdateOperationsInput | number
    nombre_tipoAcceso?: StringFieldUpdateOperationsInput | string
  }

  export type productosCreateWithoutCategoriaInput = {
    nombre_producto: string
    descripcion?: string | null
    descripcion_corta?: string | null
    tags_seo?: string | null
    seo_generado_en?: Date | string | null
    stock: number
    precio: Decimal | DecimalJsLike | number | string
    descuento?: Decimal | DecimalJsLike | number | string
    alergenoproducto?: alergenoproductoCreateNestedManyWithoutProductosInput
    detalleventa?: detalleventaCreateNestedManyWithoutProductosInput
    ingredienteproducto?: ingredienteproductoCreateNestedManyWithoutProductosInput
  }

  export type productosUncheckedCreateWithoutCategoriaInput = {
    id_producto?: number
    nombre_producto: string
    descripcion?: string | null
    descripcion_corta?: string | null
    tags_seo?: string | null
    seo_generado_en?: Date | string | null
    stock: number
    precio: Decimal | DecimalJsLike | number | string
    descuento?: Decimal | DecimalJsLike | number | string
    alergenoproducto?: alergenoproductoUncheckedCreateNestedManyWithoutProductosInput
    detalleventa?: detalleventaUncheckedCreateNestedManyWithoutProductosInput
    ingredienteproducto?: ingredienteproductoUncheckedCreateNestedManyWithoutProductosInput
  }

  export type productosCreateOrConnectWithoutCategoriaInput = {
    where: productosWhereUniqueInput
    create: XOR<productosCreateWithoutCategoriaInput, productosUncheckedCreateWithoutCategoriaInput>
  }

  export type productosCreateManyCategoriaInputEnvelope = {
    data: productosCreateManyCategoriaInput | productosCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type productosUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: productosWhereUniqueInput
    update: XOR<productosUpdateWithoutCategoriaInput, productosUncheckedUpdateWithoutCategoriaInput>
    create: XOR<productosCreateWithoutCategoriaInput, productosUncheckedCreateWithoutCategoriaInput>
  }

  export type productosUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: productosWhereUniqueInput
    data: XOR<productosUpdateWithoutCategoriaInput, productosUncheckedUpdateWithoutCategoriaInput>
  }

  export type productosUpdateManyWithWhereWithoutCategoriaInput = {
    where: productosScalarWhereInput
    data: XOR<productosUpdateManyMutationInput, productosUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type productosScalarWhereInput = {
    AND?: productosScalarWhereInput | productosScalarWhereInput[]
    OR?: productosScalarWhereInput[]
    NOT?: productosScalarWhereInput | productosScalarWhereInput[]
    id_producto?: IntFilter<"productos"> | number
    nombre_producto?: StringFilter<"productos"> | string
    descripcion?: StringNullableFilter<"productos"> | string | null
    descripcion_corta?: StringNullableFilter<"productos"> | string | null
    tags_seo?: StringNullableFilter<"productos"> | string | null
    seo_generado_en?: DateTimeNullableFilter<"productos"> | Date | string | null
    id_categoria?: IntFilter<"productos"> | number
    stock?: IntFilter<"productos"> | number
    precio?: DecimalFilter<"productos"> | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFilter<"productos"> | Decimal | DecimalJsLike | number | string
  }

  export type ventasCreateWithoutComprobanteInput = {
    fecha_venta: Date | string
    total: Decimal | DecimalJsLike | number | string
    estado?: string | null
    metodo_entrega?: string | null
    direccion_entrega?: string | null
    referencia_entrega?: string | null
    repartidor?: string | null
    telefono_repartidor?: string | null
    tiempo_estimado_min?: number | null
    entregado_en?: Date | string | null
    detalleventa?: detalleventaCreateNestedManyWithoutVentasInput
    usuarios: usuariosCreateNestedOneWithoutVentasInput
    metodopago: metodopagoCreateNestedOneWithoutVentasInput
  }

  export type ventasUncheckedCreateWithoutComprobanteInput = {
    id_venta?: number
    id_usuario: number
    fecha_venta: Date | string
    total: Decimal | DecimalJsLike | number | string
    id_metodoPago: number
    estado?: string | null
    metodo_entrega?: string | null
    direccion_entrega?: string | null
    referencia_entrega?: string | null
    repartidor?: string | null
    telefono_repartidor?: string | null
    tiempo_estimado_min?: number | null
    entregado_en?: Date | string | null
    detalleventa?: detalleventaUncheckedCreateNestedManyWithoutVentasInput
  }

  export type ventasCreateOrConnectWithoutComprobanteInput = {
    where: ventasWhereUniqueInput
    create: XOR<ventasCreateWithoutComprobanteInput, ventasUncheckedCreateWithoutComprobanteInput>
  }

  export type ventasCreateManyComprobanteInputEnvelope = {
    data: ventasCreateManyComprobanteInput | ventasCreateManyComprobanteInput[]
    skipDuplicates?: boolean
  }

  export type ventasUpsertWithWhereUniqueWithoutComprobanteInput = {
    where: ventasWhereUniqueInput
    update: XOR<ventasUpdateWithoutComprobanteInput, ventasUncheckedUpdateWithoutComprobanteInput>
    create: XOR<ventasCreateWithoutComprobanteInput, ventasUncheckedCreateWithoutComprobanteInput>
  }

  export type ventasUpdateWithWhereUniqueWithoutComprobanteInput = {
    where: ventasWhereUniqueInput
    data: XOR<ventasUpdateWithoutComprobanteInput, ventasUncheckedUpdateWithoutComprobanteInput>
  }

  export type ventasUpdateManyWithWhereWithoutComprobanteInput = {
    where: ventasScalarWhereInput
    data: XOR<ventasUpdateManyMutationInput, ventasUncheckedUpdateManyWithoutComprobanteInput>
  }

  export type ventasScalarWhereInput = {
    AND?: ventasScalarWhereInput | ventasScalarWhereInput[]
    OR?: ventasScalarWhereInput[]
    NOT?: ventasScalarWhereInput | ventasScalarWhereInput[]
    id_venta?: IntFilter<"ventas"> | number
    id_usuario?: IntFilter<"ventas"> | number
    fecha_venta?: DateTimeFilter<"ventas"> | Date | string
    total?: DecimalFilter<"ventas"> | Decimal | DecimalJsLike | number | string
    id_metodoPago?: IntFilter<"ventas"> | number
    id_comprobante?: IntFilter<"ventas"> | number
    estado?: StringNullableFilter<"ventas"> | string | null
    metodo_entrega?: StringNullableFilter<"ventas"> | string | null
    direccion_entrega?: StringNullableFilter<"ventas"> | string | null
    referencia_entrega?: StringNullableFilter<"ventas"> | string | null
    repartidor?: StringNullableFilter<"ventas"> | string | null
    telefono_repartidor?: StringNullableFilter<"ventas"> | string | null
    tiempo_estimado_min?: IntNullableFilter<"ventas"> | number | null
    entregado_en?: DateTimeNullableFilter<"ventas"> | Date | string | null
  }

  export type productosCreateWithoutDetalleventaInput = {
    nombre_producto: string
    descripcion?: string | null
    descripcion_corta?: string | null
    tags_seo?: string | null
    seo_generado_en?: Date | string | null
    stock: number
    precio: Decimal | DecimalJsLike | number | string
    descuento?: Decimal | DecimalJsLike | number | string
    alergenoproducto?: alergenoproductoCreateNestedManyWithoutProductosInput
    ingredienteproducto?: ingredienteproductoCreateNestedManyWithoutProductosInput
    categoria: categoriaCreateNestedOneWithoutProductosInput
  }

  export type productosUncheckedCreateWithoutDetalleventaInput = {
    id_producto?: number
    nombre_producto: string
    descripcion?: string | null
    descripcion_corta?: string | null
    tags_seo?: string | null
    seo_generado_en?: Date | string | null
    id_categoria: number
    stock: number
    precio: Decimal | DecimalJsLike | number | string
    descuento?: Decimal | DecimalJsLike | number | string
    alergenoproducto?: alergenoproductoUncheckedCreateNestedManyWithoutProductosInput
    ingredienteproducto?: ingredienteproductoUncheckedCreateNestedManyWithoutProductosInput
  }

  export type productosCreateOrConnectWithoutDetalleventaInput = {
    where: productosWhereUniqueInput
    create: XOR<productosCreateWithoutDetalleventaInput, productosUncheckedCreateWithoutDetalleventaInput>
  }

  export type ventasCreateWithoutDetalleventaInput = {
    fecha_venta: Date | string
    total: Decimal | DecimalJsLike | number | string
    estado?: string | null
    metodo_entrega?: string | null
    direccion_entrega?: string | null
    referencia_entrega?: string | null
    repartidor?: string | null
    telefono_repartidor?: string | null
    tiempo_estimado_min?: number | null
    entregado_en?: Date | string | null
    usuarios: usuariosCreateNestedOneWithoutVentasInput
    metodopago: metodopagoCreateNestedOneWithoutVentasInput
    comprobante: comprobanteCreateNestedOneWithoutVentasInput
  }

  export type ventasUncheckedCreateWithoutDetalleventaInput = {
    id_venta?: number
    id_usuario: number
    fecha_venta: Date | string
    total: Decimal | DecimalJsLike | number | string
    id_metodoPago: number
    id_comprobante: number
    estado?: string | null
    metodo_entrega?: string | null
    direccion_entrega?: string | null
    referencia_entrega?: string | null
    repartidor?: string | null
    telefono_repartidor?: string | null
    tiempo_estimado_min?: number | null
    entregado_en?: Date | string | null
  }

  export type ventasCreateOrConnectWithoutDetalleventaInput = {
    where: ventasWhereUniqueInput
    create: XOR<ventasCreateWithoutDetalleventaInput, ventasUncheckedCreateWithoutDetalleventaInput>
  }

  export type productosUpsertWithoutDetalleventaInput = {
    update: XOR<productosUpdateWithoutDetalleventaInput, productosUncheckedUpdateWithoutDetalleventaInput>
    create: XOR<productosCreateWithoutDetalleventaInput, productosUncheckedCreateWithoutDetalleventaInput>
    where?: productosWhereInput
  }

  export type productosUpdateToOneWithWhereWithoutDetalleventaInput = {
    where?: productosWhereInput
    data: XOR<productosUpdateWithoutDetalleventaInput, productosUncheckedUpdateWithoutDetalleventaInput>
  }

  export type productosUpdateWithoutDetalleventaInput = {
    nombre_producto?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion_corta?: NullableStringFieldUpdateOperationsInput | string | null
    tags_seo?: NullableStringFieldUpdateOperationsInput | string | null
    seo_generado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alergenoproducto?: alergenoproductoUpdateManyWithoutProductosNestedInput
    ingredienteproducto?: ingredienteproductoUpdateManyWithoutProductosNestedInput
    categoria?: categoriaUpdateOneRequiredWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateWithoutDetalleventaInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre_producto?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion_corta?: NullableStringFieldUpdateOperationsInput | string | null
    tags_seo?: NullableStringFieldUpdateOperationsInput | string | null
    seo_generado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_categoria?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alergenoproducto?: alergenoproductoUncheckedUpdateManyWithoutProductosNestedInput
    ingredienteproducto?: ingredienteproductoUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type ventasUpsertWithoutDetalleventaInput = {
    update: XOR<ventasUpdateWithoutDetalleventaInput, ventasUncheckedUpdateWithoutDetalleventaInput>
    create: XOR<ventasCreateWithoutDetalleventaInput, ventasUncheckedCreateWithoutDetalleventaInput>
    where?: ventasWhereInput
  }

  export type ventasUpdateToOneWithWhereWithoutDetalleventaInput = {
    where?: ventasWhereInput
    data: XOR<ventasUpdateWithoutDetalleventaInput, ventasUncheckedUpdateWithoutDetalleventaInput>
  }

  export type ventasUpdateWithoutDetalleventaInput = {
    fecha_venta?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    metodo_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    referencia_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo_estimado_min?: NullableIntFieldUpdateOperationsInput | number | null
    entregado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarios?: usuariosUpdateOneRequiredWithoutVentasNestedInput
    metodopago?: metodopagoUpdateOneRequiredWithoutVentasNestedInput
    comprobante?: comprobanteUpdateOneRequiredWithoutVentasNestedInput
  }

  export type ventasUncheckedUpdateWithoutDetalleventaInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha_venta?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_metodoPago?: IntFieldUpdateOperationsInput | number
    id_comprobante?: IntFieldUpdateOperationsInput | number
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    metodo_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    referencia_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo_estimado_min?: NullableIntFieldUpdateOperationsInput | number | null
    entregado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ventasCreateWithoutMetodopagoInput = {
    fecha_venta: Date | string
    total: Decimal | DecimalJsLike | number | string
    estado?: string | null
    metodo_entrega?: string | null
    direccion_entrega?: string | null
    referencia_entrega?: string | null
    repartidor?: string | null
    telefono_repartidor?: string | null
    tiempo_estimado_min?: number | null
    entregado_en?: Date | string | null
    detalleventa?: detalleventaCreateNestedManyWithoutVentasInput
    usuarios: usuariosCreateNestedOneWithoutVentasInput
    comprobante: comprobanteCreateNestedOneWithoutVentasInput
  }

  export type ventasUncheckedCreateWithoutMetodopagoInput = {
    id_venta?: number
    id_usuario: number
    fecha_venta: Date | string
    total: Decimal | DecimalJsLike | number | string
    id_comprobante: number
    estado?: string | null
    metodo_entrega?: string | null
    direccion_entrega?: string | null
    referencia_entrega?: string | null
    repartidor?: string | null
    telefono_repartidor?: string | null
    tiempo_estimado_min?: number | null
    entregado_en?: Date | string | null
    detalleventa?: detalleventaUncheckedCreateNestedManyWithoutVentasInput
  }

  export type ventasCreateOrConnectWithoutMetodopagoInput = {
    where: ventasWhereUniqueInput
    create: XOR<ventasCreateWithoutMetodopagoInput, ventasUncheckedCreateWithoutMetodopagoInput>
  }

  export type ventasCreateManyMetodopagoInputEnvelope = {
    data: ventasCreateManyMetodopagoInput | ventasCreateManyMetodopagoInput[]
    skipDuplicates?: boolean
  }

  export type ventasUpsertWithWhereUniqueWithoutMetodopagoInput = {
    where: ventasWhereUniqueInput
    update: XOR<ventasUpdateWithoutMetodopagoInput, ventasUncheckedUpdateWithoutMetodopagoInput>
    create: XOR<ventasCreateWithoutMetodopagoInput, ventasUncheckedCreateWithoutMetodopagoInput>
  }

  export type ventasUpdateWithWhereUniqueWithoutMetodopagoInput = {
    where: ventasWhereUniqueInput
    data: XOR<ventasUpdateWithoutMetodopagoInput, ventasUncheckedUpdateWithoutMetodopagoInput>
  }

  export type ventasUpdateManyWithWhereWithoutMetodopagoInput = {
    where: ventasScalarWhereInput
    data: XOR<ventasUpdateManyMutationInput, ventasUncheckedUpdateManyWithoutMetodopagoInput>
  }

  export type alergenoproductoCreateWithoutProductosInput = {
    nombre: string
  }

  export type alergenoproductoUncheckedCreateWithoutProductosInput = {
    id_alergeno?: number
    nombre: string
  }

  export type alergenoproductoCreateOrConnectWithoutProductosInput = {
    where: alergenoproductoWhereUniqueInput
    create: XOR<alergenoproductoCreateWithoutProductosInput, alergenoproductoUncheckedCreateWithoutProductosInput>
  }

  export type alergenoproductoCreateManyProductosInputEnvelope = {
    data: alergenoproductoCreateManyProductosInput | alergenoproductoCreateManyProductosInput[]
    skipDuplicates?: boolean
  }

  export type detalleventaCreateWithoutProductosInput = {
    cantidad: number
    subtotal: Decimal | DecimalJsLike | number | string
    ventas: ventasCreateNestedOneWithoutDetalleventaInput
  }

  export type detalleventaUncheckedCreateWithoutProductosInput = {
    id_detalleVenta?: number
    id_venta: number
    cantidad: number
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type detalleventaCreateOrConnectWithoutProductosInput = {
    where: detalleventaWhereUniqueInput
    create: XOR<detalleventaCreateWithoutProductosInput, detalleventaUncheckedCreateWithoutProductosInput>
  }

  export type detalleventaCreateManyProductosInputEnvelope = {
    data: detalleventaCreateManyProductosInput | detalleventaCreateManyProductosInput[]
    skipDuplicates?: boolean
  }

  export type ingredienteproductoCreateWithoutProductosInput = {
    nombre: string
  }

  export type ingredienteproductoUncheckedCreateWithoutProductosInput = {
    id_ingrediente?: number
    nombre: string
  }

  export type ingredienteproductoCreateOrConnectWithoutProductosInput = {
    where: ingredienteproductoWhereUniqueInput
    create: XOR<ingredienteproductoCreateWithoutProductosInput, ingredienteproductoUncheckedCreateWithoutProductosInput>
  }

  export type ingredienteproductoCreateManyProductosInputEnvelope = {
    data: ingredienteproductoCreateManyProductosInput | ingredienteproductoCreateManyProductosInput[]
    skipDuplicates?: boolean
  }

  export type categoriaCreateWithoutProductosInput = {
    nombre_categoria: string
  }

  export type categoriaUncheckedCreateWithoutProductosInput = {
    id_categoria?: number
    nombre_categoria: string
  }

  export type categoriaCreateOrConnectWithoutProductosInput = {
    where: categoriaWhereUniqueInput
    create: XOR<categoriaCreateWithoutProductosInput, categoriaUncheckedCreateWithoutProductosInput>
  }

  export type alergenoproductoUpsertWithWhereUniqueWithoutProductosInput = {
    where: alergenoproductoWhereUniqueInput
    update: XOR<alergenoproductoUpdateWithoutProductosInput, alergenoproductoUncheckedUpdateWithoutProductosInput>
    create: XOR<alergenoproductoCreateWithoutProductosInput, alergenoproductoUncheckedCreateWithoutProductosInput>
  }

  export type alergenoproductoUpdateWithWhereUniqueWithoutProductosInput = {
    where: alergenoproductoWhereUniqueInput
    data: XOR<alergenoproductoUpdateWithoutProductosInput, alergenoproductoUncheckedUpdateWithoutProductosInput>
  }

  export type alergenoproductoUpdateManyWithWhereWithoutProductosInput = {
    where: alergenoproductoScalarWhereInput
    data: XOR<alergenoproductoUpdateManyMutationInput, alergenoproductoUncheckedUpdateManyWithoutProductosInput>
  }

  export type alergenoproductoScalarWhereInput = {
    AND?: alergenoproductoScalarWhereInput | alergenoproductoScalarWhereInput[]
    OR?: alergenoproductoScalarWhereInput[]
    NOT?: alergenoproductoScalarWhereInput | alergenoproductoScalarWhereInput[]
    id_alergeno?: IntFilter<"alergenoproducto"> | number
    id_producto?: IntFilter<"alergenoproducto"> | number
    nombre?: StringFilter<"alergenoproducto"> | string
  }

  export type detalleventaUpsertWithWhereUniqueWithoutProductosInput = {
    where: detalleventaWhereUniqueInput
    update: XOR<detalleventaUpdateWithoutProductosInput, detalleventaUncheckedUpdateWithoutProductosInput>
    create: XOR<detalleventaCreateWithoutProductosInput, detalleventaUncheckedCreateWithoutProductosInput>
  }

  export type detalleventaUpdateWithWhereUniqueWithoutProductosInput = {
    where: detalleventaWhereUniqueInput
    data: XOR<detalleventaUpdateWithoutProductosInput, detalleventaUncheckedUpdateWithoutProductosInput>
  }

  export type detalleventaUpdateManyWithWhereWithoutProductosInput = {
    where: detalleventaScalarWhereInput
    data: XOR<detalleventaUpdateManyMutationInput, detalleventaUncheckedUpdateManyWithoutProductosInput>
  }

  export type detalleventaScalarWhereInput = {
    AND?: detalleventaScalarWhereInput | detalleventaScalarWhereInput[]
    OR?: detalleventaScalarWhereInput[]
    NOT?: detalleventaScalarWhereInput | detalleventaScalarWhereInput[]
    id_detalleVenta?: IntFilter<"detalleventa"> | number
    id_venta?: IntFilter<"detalleventa"> | number
    id_producto?: IntFilter<"detalleventa"> | number
    cantidad?: IntFilter<"detalleventa"> | number
    subtotal?: DecimalFilter<"detalleventa"> | Decimal | DecimalJsLike | number | string
  }

  export type ingredienteproductoUpsertWithWhereUniqueWithoutProductosInput = {
    where: ingredienteproductoWhereUniqueInput
    update: XOR<ingredienteproductoUpdateWithoutProductosInput, ingredienteproductoUncheckedUpdateWithoutProductosInput>
    create: XOR<ingredienteproductoCreateWithoutProductosInput, ingredienteproductoUncheckedCreateWithoutProductosInput>
  }

  export type ingredienteproductoUpdateWithWhereUniqueWithoutProductosInput = {
    where: ingredienteproductoWhereUniqueInput
    data: XOR<ingredienteproductoUpdateWithoutProductosInput, ingredienteproductoUncheckedUpdateWithoutProductosInput>
  }

  export type ingredienteproductoUpdateManyWithWhereWithoutProductosInput = {
    where: ingredienteproductoScalarWhereInput
    data: XOR<ingredienteproductoUpdateManyMutationInput, ingredienteproductoUncheckedUpdateManyWithoutProductosInput>
  }

  export type ingredienteproductoScalarWhereInput = {
    AND?: ingredienteproductoScalarWhereInput | ingredienteproductoScalarWhereInput[]
    OR?: ingredienteproductoScalarWhereInput[]
    NOT?: ingredienteproductoScalarWhereInput | ingredienteproductoScalarWhereInput[]
    id_ingrediente?: IntFilter<"ingredienteproducto"> | number
    id_producto?: IntFilter<"ingredienteproducto"> | number
    nombre?: StringFilter<"ingredienteproducto"> | string
  }

  export type categoriaUpsertWithoutProductosInput = {
    update: XOR<categoriaUpdateWithoutProductosInput, categoriaUncheckedUpdateWithoutProductosInput>
    create: XOR<categoriaCreateWithoutProductosInput, categoriaUncheckedCreateWithoutProductosInput>
    where?: categoriaWhereInput
  }

  export type categoriaUpdateToOneWithWhereWithoutProductosInput = {
    where?: categoriaWhereInput
    data: XOR<categoriaUpdateWithoutProductosInput, categoriaUncheckedUpdateWithoutProductosInput>
  }

  export type categoriaUpdateWithoutProductosInput = {
    nombre_categoria?: StringFieldUpdateOperationsInput | string
  }

  export type categoriaUncheckedUpdateWithoutProductosInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre_categoria?: StringFieldUpdateOperationsInput | string
  }

  export type accesoqrCreateWithoutTipoaccesoInput = {
    id_usuario?: number | null
    fecha_acceso: Date | string
  }

  export type accesoqrUncheckedCreateWithoutTipoaccesoInput = {
    id_accesoQR?: number
    id_usuario?: number | null
    fecha_acceso: Date | string
  }

  export type accesoqrCreateOrConnectWithoutTipoaccesoInput = {
    where: accesoqrWhereUniqueInput
    create: XOR<accesoqrCreateWithoutTipoaccesoInput, accesoqrUncheckedCreateWithoutTipoaccesoInput>
  }

  export type accesoqrCreateManyTipoaccesoInputEnvelope = {
    data: accesoqrCreateManyTipoaccesoInput | accesoqrCreateManyTipoaccesoInput[]
    skipDuplicates?: boolean
  }

  export type accesoqrUpsertWithWhereUniqueWithoutTipoaccesoInput = {
    where: accesoqrWhereUniqueInput
    update: XOR<accesoqrUpdateWithoutTipoaccesoInput, accesoqrUncheckedUpdateWithoutTipoaccesoInput>
    create: XOR<accesoqrCreateWithoutTipoaccesoInput, accesoqrUncheckedCreateWithoutTipoaccesoInput>
  }

  export type accesoqrUpdateWithWhereUniqueWithoutTipoaccesoInput = {
    where: accesoqrWhereUniqueInput
    data: XOR<accesoqrUpdateWithoutTipoaccesoInput, accesoqrUncheckedUpdateWithoutTipoaccesoInput>
  }

  export type accesoqrUpdateManyWithWhereWithoutTipoaccesoInput = {
    where: accesoqrScalarWhereInput
    data: XOR<accesoqrUpdateManyMutationInput, accesoqrUncheckedUpdateManyWithoutTipoaccesoInput>
  }

  export type accesoqrScalarWhereInput = {
    AND?: accesoqrScalarWhereInput | accesoqrScalarWhereInput[]
    OR?: accesoqrScalarWhereInput[]
    NOT?: accesoqrScalarWhereInput | accesoqrScalarWhereInput[]
    id_accesoQR?: IntFilter<"accesoqr"> | number
    id_usuario?: IntNullableFilter<"accesoqr"> | number | null
    fecha_acceso?: DateTimeFilter<"accesoqr"> | Date | string
    id_tipoAcceso?: IntFilter<"accesoqr"> | number
  }

  export type ticketsCreateWithoutUsuariosInput = {
    nombre_ticket: string
    codigo_ticket?: string | null
    descuento?: Decimal | DecimalJsLike | number | string
    usado?: boolean
  }

  export type ticketsUncheckedCreateWithoutUsuariosInput = {
    id_ticket?: number
    nombre_ticket: string
    codigo_ticket?: string | null
    descuento?: Decimal | DecimalJsLike | number | string
    usado?: boolean
  }

  export type ticketsCreateOrConnectWithoutUsuariosInput = {
    where: ticketsWhereUniqueInput
    create: XOR<ticketsCreateWithoutUsuariosInput, ticketsUncheckedCreateWithoutUsuariosInput>
  }

  export type ticketsCreateManyUsuariosInputEnvelope = {
    data: ticketsCreateManyUsuariosInput | ticketsCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type ventasCreateWithoutUsuariosInput = {
    fecha_venta: Date | string
    total: Decimal | DecimalJsLike | number | string
    estado?: string | null
    metodo_entrega?: string | null
    direccion_entrega?: string | null
    referencia_entrega?: string | null
    repartidor?: string | null
    telefono_repartidor?: string | null
    tiempo_estimado_min?: number | null
    entregado_en?: Date | string | null
    detalleventa?: detalleventaCreateNestedManyWithoutVentasInput
    metodopago: metodopagoCreateNestedOneWithoutVentasInput
    comprobante: comprobanteCreateNestedOneWithoutVentasInput
  }

  export type ventasUncheckedCreateWithoutUsuariosInput = {
    id_venta?: number
    fecha_venta: Date | string
    total: Decimal | DecimalJsLike | number | string
    id_metodoPago: number
    id_comprobante: number
    estado?: string | null
    metodo_entrega?: string | null
    direccion_entrega?: string | null
    referencia_entrega?: string | null
    repartidor?: string | null
    telefono_repartidor?: string | null
    tiempo_estimado_min?: number | null
    entregado_en?: Date | string | null
    detalleventa?: detalleventaUncheckedCreateNestedManyWithoutVentasInput
  }

  export type ventasCreateOrConnectWithoutUsuariosInput = {
    where: ventasWhereUniqueInput
    create: XOR<ventasCreateWithoutUsuariosInput, ventasUncheckedCreateWithoutUsuariosInput>
  }

  export type ventasCreateManyUsuariosInputEnvelope = {
    data: ventasCreateManyUsuariosInput | ventasCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type ia_conversacionesCreateWithoutUsuariosInput = {
    mensaje_usuario: string
    respuesta_ia: string
    intencion: string
    confianza?: Decimal | DecimalJsLike | number | string | null
    resuelta?: boolean
    canal?: string
    fecha?: Date | string
  }

  export type ia_conversacionesUncheckedCreateWithoutUsuariosInput = {
    id_conversacion?: number
    mensaje_usuario: string
    respuesta_ia: string
    intencion: string
    confianza?: Decimal | DecimalJsLike | number | string | null
    resuelta?: boolean
    canal?: string
    fecha?: Date | string
  }

  export type ia_conversacionesCreateOrConnectWithoutUsuariosInput = {
    where: ia_conversacionesWhereUniqueInput
    create: XOR<ia_conversacionesCreateWithoutUsuariosInput, ia_conversacionesUncheckedCreateWithoutUsuariosInput>
  }

  export type ia_conversacionesCreateManyUsuariosInputEnvelope = {
    data: ia_conversacionesCreateManyUsuariosInput | ia_conversacionesCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type email_eventosCreateWithoutUsuariosInput = {
    correo: string
    tipo?: string
    token: string
    fecha_envio?: Date | string
    fecha_apertura?: Date | string | null
    fecha_clic?: Date | string | null
  }

  export type email_eventosUncheckedCreateWithoutUsuariosInput = {
    id_evento?: number
    correo: string
    tipo?: string
    token: string
    fecha_envio?: Date | string
    fecha_apertura?: Date | string | null
    fecha_clic?: Date | string | null
  }

  export type email_eventosCreateOrConnectWithoutUsuariosInput = {
    where: email_eventosWhereUniqueInput
    create: XOR<email_eventosCreateWithoutUsuariosInput, email_eventosUncheckedCreateWithoutUsuariosInput>
  }

  export type email_eventosCreateManyUsuariosInputEnvelope = {
    data: email_eventosCreateManyUsuariosInput | email_eventosCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type reservasCreateWithoutUsuariosInput = {
    nombre: string
    correo?: string | null
    telefono?: string | null
    fecha_reserva: Date | string
    personas: number
    salon?: string | null
    estado?: string
    notas?: string | null
    creado_en?: Date | string
  }

  export type reservasUncheckedCreateWithoutUsuariosInput = {
    id_reserva?: number
    nombre: string
    correo?: string | null
    telefono?: string | null
    fecha_reserva: Date | string
    personas: number
    salon?: string | null
    estado?: string
    notas?: string | null
    creado_en?: Date | string
  }

  export type reservasCreateOrConnectWithoutUsuariosInput = {
    where: reservasWhereUniqueInput
    create: XOR<reservasCreateWithoutUsuariosInput, reservasUncheckedCreateWithoutUsuariosInput>
  }

  export type reservasCreateManyUsuariosInputEnvelope = {
    data: reservasCreateManyUsuariosInput | reservasCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type ticketsUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: ticketsWhereUniqueInput
    update: XOR<ticketsUpdateWithoutUsuariosInput, ticketsUncheckedUpdateWithoutUsuariosInput>
    create: XOR<ticketsCreateWithoutUsuariosInput, ticketsUncheckedCreateWithoutUsuariosInput>
  }

  export type ticketsUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: ticketsWhereUniqueInput
    data: XOR<ticketsUpdateWithoutUsuariosInput, ticketsUncheckedUpdateWithoutUsuariosInput>
  }

  export type ticketsUpdateManyWithWhereWithoutUsuariosInput = {
    where: ticketsScalarWhereInput
    data: XOR<ticketsUpdateManyMutationInput, ticketsUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type ticketsScalarWhereInput = {
    AND?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
    OR?: ticketsScalarWhereInput[]
    NOT?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
    id_ticket?: IntFilter<"tickets"> | number
    nombre_ticket?: StringFilter<"tickets"> | string
    codigo_ticket?: StringNullableFilter<"tickets"> | string | null
    descuento?: DecimalFilter<"tickets"> | Decimal | DecimalJsLike | number | string
    usado?: BoolFilter<"tickets"> | boolean
    id_usuario?: IntNullableFilter<"tickets"> | number | null
  }

  export type ventasUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: ventasWhereUniqueInput
    update: XOR<ventasUpdateWithoutUsuariosInput, ventasUncheckedUpdateWithoutUsuariosInput>
    create: XOR<ventasCreateWithoutUsuariosInput, ventasUncheckedCreateWithoutUsuariosInput>
  }

  export type ventasUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: ventasWhereUniqueInput
    data: XOR<ventasUpdateWithoutUsuariosInput, ventasUncheckedUpdateWithoutUsuariosInput>
  }

  export type ventasUpdateManyWithWhereWithoutUsuariosInput = {
    where: ventasScalarWhereInput
    data: XOR<ventasUpdateManyMutationInput, ventasUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type ia_conversacionesUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: ia_conversacionesWhereUniqueInput
    update: XOR<ia_conversacionesUpdateWithoutUsuariosInput, ia_conversacionesUncheckedUpdateWithoutUsuariosInput>
    create: XOR<ia_conversacionesCreateWithoutUsuariosInput, ia_conversacionesUncheckedCreateWithoutUsuariosInput>
  }

  export type ia_conversacionesUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: ia_conversacionesWhereUniqueInput
    data: XOR<ia_conversacionesUpdateWithoutUsuariosInput, ia_conversacionesUncheckedUpdateWithoutUsuariosInput>
  }

  export type ia_conversacionesUpdateManyWithWhereWithoutUsuariosInput = {
    where: ia_conversacionesScalarWhereInput
    data: XOR<ia_conversacionesUpdateManyMutationInput, ia_conversacionesUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type ia_conversacionesScalarWhereInput = {
    AND?: ia_conversacionesScalarWhereInput | ia_conversacionesScalarWhereInput[]
    OR?: ia_conversacionesScalarWhereInput[]
    NOT?: ia_conversacionesScalarWhereInput | ia_conversacionesScalarWhereInput[]
    id_conversacion?: IntFilter<"ia_conversaciones"> | number
    id_usuario?: IntNullableFilter<"ia_conversaciones"> | number | null
    mensaje_usuario?: StringFilter<"ia_conversaciones"> | string
    respuesta_ia?: StringFilter<"ia_conversaciones"> | string
    intencion?: StringFilter<"ia_conversaciones"> | string
    confianza?: DecimalNullableFilter<"ia_conversaciones"> | Decimal | DecimalJsLike | number | string | null
    resuelta?: BoolFilter<"ia_conversaciones"> | boolean
    canal?: StringFilter<"ia_conversaciones"> | string
    fecha?: DateTimeFilter<"ia_conversaciones"> | Date | string
  }

  export type email_eventosUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: email_eventosWhereUniqueInput
    update: XOR<email_eventosUpdateWithoutUsuariosInput, email_eventosUncheckedUpdateWithoutUsuariosInput>
    create: XOR<email_eventosCreateWithoutUsuariosInput, email_eventosUncheckedCreateWithoutUsuariosInput>
  }

  export type email_eventosUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: email_eventosWhereUniqueInput
    data: XOR<email_eventosUpdateWithoutUsuariosInput, email_eventosUncheckedUpdateWithoutUsuariosInput>
  }

  export type email_eventosUpdateManyWithWhereWithoutUsuariosInput = {
    where: email_eventosScalarWhereInput
    data: XOR<email_eventosUpdateManyMutationInput, email_eventosUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type email_eventosScalarWhereInput = {
    AND?: email_eventosScalarWhereInput | email_eventosScalarWhereInput[]
    OR?: email_eventosScalarWhereInput[]
    NOT?: email_eventosScalarWhereInput | email_eventosScalarWhereInput[]
    id_evento?: IntFilter<"email_eventos"> | number
    id_usuario?: IntNullableFilter<"email_eventos"> | number | null
    correo?: StringFilter<"email_eventos"> | string
    tipo?: StringFilter<"email_eventos"> | string
    token?: StringFilter<"email_eventos"> | string
    fecha_envio?: DateTimeFilter<"email_eventos"> | Date | string
    fecha_apertura?: DateTimeNullableFilter<"email_eventos"> | Date | string | null
    fecha_clic?: DateTimeNullableFilter<"email_eventos"> | Date | string | null
  }

  export type reservasUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: reservasWhereUniqueInput
    update: XOR<reservasUpdateWithoutUsuariosInput, reservasUncheckedUpdateWithoutUsuariosInput>
    create: XOR<reservasCreateWithoutUsuariosInput, reservasUncheckedCreateWithoutUsuariosInput>
  }

  export type reservasUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: reservasWhereUniqueInput
    data: XOR<reservasUpdateWithoutUsuariosInput, reservasUncheckedUpdateWithoutUsuariosInput>
  }

  export type reservasUpdateManyWithWhereWithoutUsuariosInput = {
    where: reservasScalarWhereInput
    data: XOR<reservasUpdateManyMutationInput, reservasUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type reservasScalarWhereInput = {
    AND?: reservasScalarWhereInput | reservasScalarWhereInput[]
    OR?: reservasScalarWhereInput[]
    NOT?: reservasScalarWhereInput | reservasScalarWhereInput[]
    id_reserva?: IntFilter<"reservas"> | number
    id_usuario?: IntNullableFilter<"reservas"> | number | null
    nombre?: StringFilter<"reservas"> | string
    correo?: StringNullableFilter<"reservas"> | string | null
    telefono?: StringNullableFilter<"reservas"> | string | null
    fecha_reserva?: DateTimeFilter<"reservas"> | Date | string
    personas?: IntFilter<"reservas"> | number
    salon?: StringNullableFilter<"reservas"> | string | null
    estado?: StringFilter<"reservas"> | string
    notas?: StringNullableFilter<"reservas"> | string | null
    creado_en?: DateTimeFilter<"reservas"> | Date | string
  }

  export type detalleventaCreateWithoutVentasInput = {
    cantidad: number
    subtotal: Decimal | DecimalJsLike | number | string
    productos: productosCreateNestedOneWithoutDetalleventaInput
  }

  export type detalleventaUncheckedCreateWithoutVentasInput = {
    id_detalleVenta?: number
    id_producto: number
    cantidad: number
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type detalleventaCreateOrConnectWithoutVentasInput = {
    where: detalleventaWhereUniqueInput
    create: XOR<detalleventaCreateWithoutVentasInput, detalleventaUncheckedCreateWithoutVentasInput>
  }

  export type detalleventaCreateManyVentasInputEnvelope = {
    data: detalleventaCreateManyVentasInput | detalleventaCreateManyVentasInput[]
    skipDuplicates?: boolean
  }

  export type usuariosCreateWithoutVentasInput = {
    rol_usuario: number
    nombre_usuario: string
    correo_usuario: string
    clave_usuario: string
    telefono_usuario?: string | null
    direccion_usuario?: string | null
    fecha_registro: Date | string
    contador_bubbleTea: number
    regalo_bubbleTea?: number | null
    score?: number | null
    tickets?: ticketsCreateNestedManyWithoutUsuariosInput
    ia_conversaciones?: ia_conversacionesCreateNestedManyWithoutUsuariosInput
    email_eventos?: email_eventosCreateNestedManyWithoutUsuariosInput
    reservas?: reservasCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutVentasInput = {
    id_usuario?: number
    rol_usuario: number
    nombre_usuario: string
    correo_usuario: string
    clave_usuario: string
    telefono_usuario?: string | null
    direccion_usuario?: string | null
    fecha_registro: Date | string
    contador_bubbleTea: number
    regalo_bubbleTea?: number | null
    score?: number | null
    tickets?: ticketsUncheckedCreateNestedManyWithoutUsuariosInput
    ia_conversaciones?: ia_conversacionesUncheckedCreateNestedManyWithoutUsuariosInput
    email_eventos?: email_eventosUncheckedCreateNestedManyWithoutUsuariosInput
    reservas?: reservasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutVentasInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutVentasInput, usuariosUncheckedCreateWithoutVentasInput>
  }

  export type metodopagoCreateWithoutVentasInput = {
    nombre_metodoPago: string
  }

  export type metodopagoUncheckedCreateWithoutVentasInput = {
    id_metodoPago?: number
    nombre_metodoPago: string
  }

  export type metodopagoCreateOrConnectWithoutVentasInput = {
    where: metodopagoWhereUniqueInput
    create: XOR<metodopagoCreateWithoutVentasInput, metodopagoUncheckedCreateWithoutVentasInput>
  }

  export type comprobanteCreateWithoutVentasInput = {
    nombre_comprobante: string
  }

  export type comprobanteUncheckedCreateWithoutVentasInput = {
    id_comprobante?: number
    nombre_comprobante: string
  }

  export type comprobanteCreateOrConnectWithoutVentasInput = {
    where: comprobanteWhereUniqueInput
    create: XOR<comprobanteCreateWithoutVentasInput, comprobanteUncheckedCreateWithoutVentasInput>
  }

  export type detalleventaUpsertWithWhereUniqueWithoutVentasInput = {
    where: detalleventaWhereUniqueInput
    update: XOR<detalleventaUpdateWithoutVentasInput, detalleventaUncheckedUpdateWithoutVentasInput>
    create: XOR<detalleventaCreateWithoutVentasInput, detalleventaUncheckedCreateWithoutVentasInput>
  }

  export type detalleventaUpdateWithWhereUniqueWithoutVentasInput = {
    where: detalleventaWhereUniqueInput
    data: XOR<detalleventaUpdateWithoutVentasInput, detalleventaUncheckedUpdateWithoutVentasInput>
  }

  export type detalleventaUpdateManyWithWhereWithoutVentasInput = {
    where: detalleventaScalarWhereInput
    data: XOR<detalleventaUpdateManyMutationInput, detalleventaUncheckedUpdateManyWithoutVentasInput>
  }

  export type usuariosUpsertWithoutVentasInput = {
    update: XOR<usuariosUpdateWithoutVentasInput, usuariosUncheckedUpdateWithoutVentasInput>
    create: XOR<usuariosCreateWithoutVentasInput, usuariosUncheckedCreateWithoutVentasInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutVentasInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutVentasInput, usuariosUncheckedUpdateWithoutVentasInput>
  }

  export type usuariosUpdateWithoutVentasInput = {
    rol_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    correo_usuario?: StringFieldUpdateOperationsInput | string
    clave_usuario?: StringFieldUpdateOperationsInput | string
    telefono_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    contador_bubbleTea?: IntFieldUpdateOperationsInput | number
    regalo_bubbleTea?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    tickets?: ticketsUpdateManyWithoutUsuariosNestedInput
    ia_conversaciones?: ia_conversacionesUpdateManyWithoutUsuariosNestedInput
    email_eventos?: email_eventosUpdateManyWithoutUsuariosNestedInput
    reservas?: reservasUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutVentasInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    rol_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    correo_usuario?: StringFieldUpdateOperationsInput | string
    clave_usuario?: StringFieldUpdateOperationsInput | string
    telefono_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    contador_bubbleTea?: IntFieldUpdateOperationsInput | number
    regalo_bubbleTea?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    tickets?: ticketsUncheckedUpdateManyWithoutUsuariosNestedInput
    ia_conversaciones?: ia_conversacionesUncheckedUpdateManyWithoutUsuariosNestedInput
    email_eventos?: email_eventosUncheckedUpdateManyWithoutUsuariosNestedInput
    reservas?: reservasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type metodopagoUpsertWithoutVentasInput = {
    update: XOR<metodopagoUpdateWithoutVentasInput, metodopagoUncheckedUpdateWithoutVentasInput>
    create: XOR<metodopagoCreateWithoutVentasInput, metodopagoUncheckedCreateWithoutVentasInput>
    where?: metodopagoWhereInput
  }

  export type metodopagoUpdateToOneWithWhereWithoutVentasInput = {
    where?: metodopagoWhereInput
    data: XOR<metodopagoUpdateWithoutVentasInput, metodopagoUncheckedUpdateWithoutVentasInput>
  }

  export type metodopagoUpdateWithoutVentasInput = {
    nombre_metodoPago?: StringFieldUpdateOperationsInput | string
  }

  export type metodopagoUncheckedUpdateWithoutVentasInput = {
    id_metodoPago?: IntFieldUpdateOperationsInput | number
    nombre_metodoPago?: StringFieldUpdateOperationsInput | string
  }

  export type comprobanteUpsertWithoutVentasInput = {
    update: XOR<comprobanteUpdateWithoutVentasInput, comprobanteUncheckedUpdateWithoutVentasInput>
    create: XOR<comprobanteCreateWithoutVentasInput, comprobanteUncheckedCreateWithoutVentasInput>
    where?: comprobanteWhereInput
  }

  export type comprobanteUpdateToOneWithWhereWithoutVentasInput = {
    where?: comprobanteWhereInput
    data: XOR<comprobanteUpdateWithoutVentasInput, comprobanteUncheckedUpdateWithoutVentasInput>
  }

  export type comprobanteUpdateWithoutVentasInput = {
    nombre_comprobante?: StringFieldUpdateOperationsInput | string
  }

  export type comprobanteUncheckedUpdateWithoutVentasInput = {
    id_comprobante?: IntFieldUpdateOperationsInput | number
    nombre_comprobante?: StringFieldUpdateOperationsInput | string
  }

  export type productosCreateWithoutAlergenoproductoInput = {
    nombre_producto: string
    descripcion?: string | null
    descripcion_corta?: string | null
    tags_seo?: string | null
    seo_generado_en?: Date | string | null
    stock: number
    precio: Decimal | DecimalJsLike | number | string
    descuento?: Decimal | DecimalJsLike | number | string
    detalleventa?: detalleventaCreateNestedManyWithoutProductosInput
    ingredienteproducto?: ingredienteproductoCreateNestedManyWithoutProductosInput
    categoria: categoriaCreateNestedOneWithoutProductosInput
  }

  export type productosUncheckedCreateWithoutAlergenoproductoInput = {
    id_producto?: number
    nombre_producto: string
    descripcion?: string | null
    descripcion_corta?: string | null
    tags_seo?: string | null
    seo_generado_en?: Date | string | null
    id_categoria: number
    stock: number
    precio: Decimal | DecimalJsLike | number | string
    descuento?: Decimal | DecimalJsLike | number | string
    detalleventa?: detalleventaUncheckedCreateNestedManyWithoutProductosInput
    ingredienteproducto?: ingredienteproductoUncheckedCreateNestedManyWithoutProductosInput
  }

  export type productosCreateOrConnectWithoutAlergenoproductoInput = {
    where: productosWhereUniqueInput
    create: XOR<productosCreateWithoutAlergenoproductoInput, productosUncheckedCreateWithoutAlergenoproductoInput>
  }

  export type productosUpsertWithoutAlergenoproductoInput = {
    update: XOR<productosUpdateWithoutAlergenoproductoInput, productosUncheckedUpdateWithoutAlergenoproductoInput>
    create: XOR<productosCreateWithoutAlergenoproductoInput, productosUncheckedCreateWithoutAlergenoproductoInput>
    where?: productosWhereInput
  }

  export type productosUpdateToOneWithWhereWithoutAlergenoproductoInput = {
    where?: productosWhereInput
    data: XOR<productosUpdateWithoutAlergenoproductoInput, productosUncheckedUpdateWithoutAlergenoproductoInput>
  }

  export type productosUpdateWithoutAlergenoproductoInput = {
    nombre_producto?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion_corta?: NullableStringFieldUpdateOperationsInput | string | null
    tags_seo?: NullableStringFieldUpdateOperationsInput | string | null
    seo_generado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detalleventa?: detalleventaUpdateManyWithoutProductosNestedInput
    ingredienteproducto?: ingredienteproductoUpdateManyWithoutProductosNestedInput
    categoria?: categoriaUpdateOneRequiredWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateWithoutAlergenoproductoInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre_producto?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion_corta?: NullableStringFieldUpdateOperationsInput | string | null
    tags_seo?: NullableStringFieldUpdateOperationsInput | string | null
    seo_generado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_categoria?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detalleventa?: detalleventaUncheckedUpdateManyWithoutProductosNestedInput
    ingredienteproducto?: ingredienteproductoUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type productosCreateWithoutIngredienteproductoInput = {
    nombre_producto: string
    descripcion?: string | null
    descripcion_corta?: string | null
    tags_seo?: string | null
    seo_generado_en?: Date | string | null
    stock: number
    precio: Decimal | DecimalJsLike | number | string
    descuento?: Decimal | DecimalJsLike | number | string
    alergenoproducto?: alergenoproductoCreateNestedManyWithoutProductosInput
    detalleventa?: detalleventaCreateNestedManyWithoutProductosInput
    categoria: categoriaCreateNestedOneWithoutProductosInput
  }

  export type productosUncheckedCreateWithoutIngredienteproductoInput = {
    id_producto?: number
    nombre_producto: string
    descripcion?: string | null
    descripcion_corta?: string | null
    tags_seo?: string | null
    seo_generado_en?: Date | string | null
    id_categoria: number
    stock: number
    precio: Decimal | DecimalJsLike | number | string
    descuento?: Decimal | DecimalJsLike | number | string
    alergenoproducto?: alergenoproductoUncheckedCreateNestedManyWithoutProductosInput
    detalleventa?: detalleventaUncheckedCreateNestedManyWithoutProductosInput
  }

  export type productosCreateOrConnectWithoutIngredienteproductoInput = {
    where: productosWhereUniqueInput
    create: XOR<productosCreateWithoutIngredienteproductoInput, productosUncheckedCreateWithoutIngredienteproductoInput>
  }

  export type productosUpsertWithoutIngredienteproductoInput = {
    update: XOR<productosUpdateWithoutIngredienteproductoInput, productosUncheckedUpdateWithoutIngredienteproductoInput>
    create: XOR<productosCreateWithoutIngredienteproductoInput, productosUncheckedCreateWithoutIngredienteproductoInput>
    where?: productosWhereInput
  }

  export type productosUpdateToOneWithWhereWithoutIngredienteproductoInput = {
    where?: productosWhereInput
    data: XOR<productosUpdateWithoutIngredienteproductoInput, productosUncheckedUpdateWithoutIngredienteproductoInput>
  }

  export type productosUpdateWithoutIngredienteproductoInput = {
    nombre_producto?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion_corta?: NullableStringFieldUpdateOperationsInput | string | null
    tags_seo?: NullableStringFieldUpdateOperationsInput | string | null
    seo_generado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alergenoproducto?: alergenoproductoUpdateManyWithoutProductosNestedInput
    detalleventa?: detalleventaUpdateManyWithoutProductosNestedInput
    categoria?: categoriaUpdateOneRequiredWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateWithoutIngredienteproductoInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre_producto?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion_corta?: NullableStringFieldUpdateOperationsInput | string | null
    tags_seo?: NullableStringFieldUpdateOperationsInput | string | null
    seo_generado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_categoria?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alergenoproducto?: alergenoproductoUncheckedUpdateManyWithoutProductosNestedInput
    detalleventa?: detalleventaUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type usuariosCreateWithoutTicketsInput = {
    rol_usuario: number
    nombre_usuario: string
    correo_usuario: string
    clave_usuario: string
    telefono_usuario?: string | null
    direccion_usuario?: string | null
    fecha_registro: Date | string
    contador_bubbleTea: number
    regalo_bubbleTea?: number | null
    score?: number | null
    ventas?: ventasCreateNestedManyWithoutUsuariosInput
    ia_conversaciones?: ia_conversacionesCreateNestedManyWithoutUsuariosInput
    email_eventos?: email_eventosCreateNestedManyWithoutUsuariosInput
    reservas?: reservasCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutTicketsInput = {
    id_usuario?: number
    rol_usuario: number
    nombre_usuario: string
    correo_usuario: string
    clave_usuario: string
    telefono_usuario?: string | null
    direccion_usuario?: string | null
    fecha_registro: Date | string
    contador_bubbleTea: number
    regalo_bubbleTea?: number | null
    score?: number | null
    ventas?: ventasUncheckedCreateNestedManyWithoutUsuariosInput
    ia_conversaciones?: ia_conversacionesUncheckedCreateNestedManyWithoutUsuariosInput
    email_eventos?: email_eventosUncheckedCreateNestedManyWithoutUsuariosInput
    reservas?: reservasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutTicketsInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutTicketsInput, usuariosUncheckedCreateWithoutTicketsInput>
  }

  export type usuariosUpsertWithoutTicketsInput = {
    update: XOR<usuariosUpdateWithoutTicketsInput, usuariosUncheckedUpdateWithoutTicketsInput>
    create: XOR<usuariosCreateWithoutTicketsInput, usuariosUncheckedCreateWithoutTicketsInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutTicketsInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutTicketsInput, usuariosUncheckedUpdateWithoutTicketsInput>
  }

  export type usuariosUpdateWithoutTicketsInput = {
    rol_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    correo_usuario?: StringFieldUpdateOperationsInput | string
    clave_usuario?: StringFieldUpdateOperationsInput | string
    telefono_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    contador_bubbleTea?: IntFieldUpdateOperationsInput | number
    regalo_bubbleTea?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    ventas?: ventasUpdateManyWithoutUsuariosNestedInput
    ia_conversaciones?: ia_conversacionesUpdateManyWithoutUsuariosNestedInput
    email_eventos?: email_eventosUpdateManyWithoutUsuariosNestedInput
    reservas?: reservasUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutTicketsInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    rol_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    correo_usuario?: StringFieldUpdateOperationsInput | string
    clave_usuario?: StringFieldUpdateOperationsInput | string
    telefono_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    contador_bubbleTea?: IntFieldUpdateOperationsInput | number
    regalo_bubbleTea?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    ventas?: ventasUncheckedUpdateManyWithoutUsuariosNestedInput
    ia_conversaciones?: ia_conversacionesUncheckedUpdateManyWithoutUsuariosNestedInput
    email_eventos?: email_eventosUncheckedUpdateManyWithoutUsuariosNestedInput
    reservas?: reservasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateWithoutIa_conversacionesInput = {
    rol_usuario: number
    nombre_usuario: string
    correo_usuario: string
    clave_usuario: string
    telefono_usuario?: string | null
    direccion_usuario?: string | null
    fecha_registro: Date | string
    contador_bubbleTea: number
    regalo_bubbleTea?: number | null
    score?: number | null
    tickets?: ticketsCreateNestedManyWithoutUsuariosInput
    ventas?: ventasCreateNestedManyWithoutUsuariosInput
    email_eventos?: email_eventosCreateNestedManyWithoutUsuariosInput
    reservas?: reservasCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutIa_conversacionesInput = {
    id_usuario?: number
    rol_usuario: number
    nombre_usuario: string
    correo_usuario: string
    clave_usuario: string
    telefono_usuario?: string | null
    direccion_usuario?: string | null
    fecha_registro: Date | string
    contador_bubbleTea: number
    regalo_bubbleTea?: number | null
    score?: number | null
    tickets?: ticketsUncheckedCreateNestedManyWithoutUsuariosInput
    ventas?: ventasUncheckedCreateNestedManyWithoutUsuariosInput
    email_eventos?: email_eventosUncheckedCreateNestedManyWithoutUsuariosInput
    reservas?: reservasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutIa_conversacionesInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutIa_conversacionesInput, usuariosUncheckedCreateWithoutIa_conversacionesInput>
  }

  export type usuariosUpsertWithoutIa_conversacionesInput = {
    update: XOR<usuariosUpdateWithoutIa_conversacionesInput, usuariosUncheckedUpdateWithoutIa_conversacionesInput>
    create: XOR<usuariosCreateWithoutIa_conversacionesInput, usuariosUncheckedCreateWithoutIa_conversacionesInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutIa_conversacionesInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutIa_conversacionesInput, usuariosUncheckedUpdateWithoutIa_conversacionesInput>
  }

  export type usuariosUpdateWithoutIa_conversacionesInput = {
    rol_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    correo_usuario?: StringFieldUpdateOperationsInput | string
    clave_usuario?: StringFieldUpdateOperationsInput | string
    telefono_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    contador_bubbleTea?: IntFieldUpdateOperationsInput | number
    regalo_bubbleTea?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    tickets?: ticketsUpdateManyWithoutUsuariosNestedInput
    ventas?: ventasUpdateManyWithoutUsuariosNestedInput
    email_eventos?: email_eventosUpdateManyWithoutUsuariosNestedInput
    reservas?: reservasUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutIa_conversacionesInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    rol_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    correo_usuario?: StringFieldUpdateOperationsInput | string
    clave_usuario?: StringFieldUpdateOperationsInput | string
    telefono_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    contador_bubbleTea?: IntFieldUpdateOperationsInput | number
    regalo_bubbleTea?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    tickets?: ticketsUncheckedUpdateManyWithoutUsuariosNestedInput
    ventas?: ventasUncheckedUpdateManyWithoutUsuariosNestedInput
    email_eventos?: email_eventosUncheckedUpdateManyWithoutUsuariosNestedInput
    reservas?: reservasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateWithoutEmail_eventosInput = {
    rol_usuario: number
    nombre_usuario: string
    correo_usuario: string
    clave_usuario: string
    telefono_usuario?: string | null
    direccion_usuario?: string | null
    fecha_registro: Date | string
    contador_bubbleTea: number
    regalo_bubbleTea?: number | null
    score?: number | null
    tickets?: ticketsCreateNestedManyWithoutUsuariosInput
    ventas?: ventasCreateNestedManyWithoutUsuariosInput
    ia_conversaciones?: ia_conversacionesCreateNestedManyWithoutUsuariosInput
    reservas?: reservasCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutEmail_eventosInput = {
    id_usuario?: number
    rol_usuario: number
    nombre_usuario: string
    correo_usuario: string
    clave_usuario: string
    telefono_usuario?: string | null
    direccion_usuario?: string | null
    fecha_registro: Date | string
    contador_bubbleTea: number
    regalo_bubbleTea?: number | null
    score?: number | null
    tickets?: ticketsUncheckedCreateNestedManyWithoutUsuariosInput
    ventas?: ventasUncheckedCreateNestedManyWithoutUsuariosInput
    ia_conversaciones?: ia_conversacionesUncheckedCreateNestedManyWithoutUsuariosInput
    reservas?: reservasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutEmail_eventosInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutEmail_eventosInput, usuariosUncheckedCreateWithoutEmail_eventosInput>
  }

  export type usuariosUpsertWithoutEmail_eventosInput = {
    update: XOR<usuariosUpdateWithoutEmail_eventosInput, usuariosUncheckedUpdateWithoutEmail_eventosInput>
    create: XOR<usuariosCreateWithoutEmail_eventosInput, usuariosUncheckedCreateWithoutEmail_eventosInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutEmail_eventosInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutEmail_eventosInput, usuariosUncheckedUpdateWithoutEmail_eventosInput>
  }

  export type usuariosUpdateWithoutEmail_eventosInput = {
    rol_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    correo_usuario?: StringFieldUpdateOperationsInput | string
    clave_usuario?: StringFieldUpdateOperationsInput | string
    telefono_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    contador_bubbleTea?: IntFieldUpdateOperationsInput | number
    regalo_bubbleTea?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    tickets?: ticketsUpdateManyWithoutUsuariosNestedInput
    ventas?: ventasUpdateManyWithoutUsuariosNestedInput
    ia_conversaciones?: ia_conversacionesUpdateManyWithoutUsuariosNestedInput
    reservas?: reservasUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutEmail_eventosInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    rol_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    correo_usuario?: StringFieldUpdateOperationsInput | string
    clave_usuario?: StringFieldUpdateOperationsInput | string
    telefono_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    contador_bubbleTea?: IntFieldUpdateOperationsInput | number
    regalo_bubbleTea?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    tickets?: ticketsUncheckedUpdateManyWithoutUsuariosNestedInput
    ventas?: ventasUncheckedUpdateManyWithoutUsuariosNestedInput
    ia_conversaciones?: ia_conversacionesUncheckedUpdateManyWithoutUsuariosNestedInput
    reservas?: reservasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateWithoutReservasInput = {
    rol_usuario: number
    nombre_usuario: string
    correo_usuario: string
    clave_usuario: string
    telefono_usuario?: string | null
    direccion_usuario?: string | null
    fecha_registro: Date | string
    contador_bubbleTea: number
    regalo_bubbleTea?: number | null
    score?: number | null
    tickets?: ticketsCreateNestedManyWithoutUsuariosInput
    ventas?: ventasCreateNestedManyWithoutUsuariosInput
    ia_conversaciones?: ia_conversacionesCreateNestedManyWithoutUsuariosInput
    email_eventos?: email_eventosCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutReservasInput = {
    id_usuario?: number
    rol_usuario: number
    nombre_usuario: string
    correo_usuario: string
    clave_usuario: string
    telefono_usuario?: string | null
    direccion_usuario?: string | null
    fecha_registro: Date | string
    contador_bubbleTea: number
    regalo_bubbleTea?: number | null
    score?: number | null
    tickets?: ticketsUncheckedCreateNestedManyWithoutUsuariosInput
    ventas?: ventasUncheckedCreateNestedManyWithoutUsuariosInput
    ia_conversaciones?: ia_conversacionesUncheckedCreateNestedManyWithoutUsuariosInput
    email_eventos?: email_eventosUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutReservasInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutReservasInput, usuariosUncheckedCreateWithoutReservasInput>
  }

  export type usuariosUpsertWithoutReservasInput = {
    update: XOR<usuariosUpdateWithoutReservasInput, usuariosUncheckedUpdateWithoutReservasInput>
    create: XOR<usuariosCreateWithoutReservasInput, usuariosUncheckedCreateWithoutReservasInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutReservasInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutReservasInput, usuariosUncheckedUpdateWithoutReservasInput>
  }

  export type usuariosUpdateWithoutReservasInput = {
    rol_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    correo_usuario?: StringFieldUpdateOperationsInput | string
    clave_usuario?: StringFieldUpdateOperationsInput | string
    telefono_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    contador_bubbleTea?: IntFieldUpdateOperationsInput | number
    regalo_bubbleTea?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    tickets?: ticketsUpdateManyWithoutUsuariosNestedInput
    ventas?: ventasUpdateManyWithoutUsuariosNestedInput
    ia_conversaciones?: ia_conversacionesUpdateManyWithoutUsuariosNestedInput
    email_eventos?: email_eventosUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutReservasInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    rol_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    correo_usuario?: StringFieldUpdateOperationsInput | string
    clave_usuario?: StringFieldUpdateOperationsInput | string
    telefono_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    contador_bubbleTea?: IntFieldUpdateOperationsInput | number
    regalo_bubbleTea?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    tickets?: ticketsUncheckedUpdateManyWithoutUsuariosNestedInput
    ventas?: ventasUncheckedUpdateManyWithoutUsuariosNestedInput
    ia_conversaciones?: ia_conversacionesUncheckedUpdateManyWithoutUsuariosNestedInput
    email_eventos?: email_eventosUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type productosCreateManyCategoriaInput = {
    id_producto?: number
    nombre_producto: string
    descripcion?: string | null
    descripcion_corta?: string | null
    tags_seo?: string | null
    seo_generado_en?: Date | string | null
    stock: number
    precio: Decimal | DecimalJsLike | number | string
    descuento?: Decimal | DecimalJsLike | number | string
  }

  export type productosUpdateWithoutCategoriaInput = {
    nombre_producto?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion_corta?: NullableStringFieldUpdateOperationsInput | string | null
    tags_seo?: NullableStringFieldUpdateOperationsInput | string | null
    seo_generado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alergenoproducto?: alergenoproductoUpdateManyWithoutProductosNestedInput
    detalleventa?: detalleventaUpdateManyWithoutProductosNestedInput
    ingredienteproducto?: ingredienteproductoUpdateManyWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateWithoutCategoriaInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre_producto?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion_corta?: NullableStringFieldUpdateOperationsInput | string | null
    tags_seo?: NullableStringFieldUpdateOperationsInput | string | null
    seo_generado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alergenoproducto?: alergenoproductoUncheckedUpdateManyWithoutProductosNestedInput
    detalleventa?: detalleventaUncheckedUpdateManyWithoutProductosNestedInput
    ingredienteproducto?: ingredienteproductoUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateManyWithoutCategoriaInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre_producto?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion_corta?: NullableStringFieldUpdateOperationsInput | string | null
    tags_seo?: NullableStringFieldUpdateOperationsInput | string | null
    seo_generado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ventasCreateManyComprobanteInput = {
    id_venta?: number
    id_usuario: number
    fecha_venta: Date | string
    total: Decimal | DecimalJsLike | number | string
    id_metodoPago: number
    estado?: string | null
    metodo_entrega?: string | null
    direccion_entrega?: string | null
    referencia_entrega?: string | null
    repartidor?: string | null
    telefono_repartidor?: string | null
    tiempo_estimado_min?: number | null
    entregado_en?: Date | string | null
  }

  export type ventasUpdateWithoutComprobanteInput = {
    fecha_venta?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    metodo_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    referencia_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo_estimado_min?: NullableIntFieldUpdateOperationsInput | number | null
    entregado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalleventa?: detalleventaUpdateManyWithoutVentasNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutVentasNestedInput
    metodopago?: metodopagoUpdateOneRequiredWithoutVentasNestedInput
  }

  export type ventasUncheckedUpdateWithoutComprobanteInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha_venta?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_metodoPago?: IntFieldUpdateOperationsInput | number
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    metodo_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    referencia_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo_estimado_min?: NullableIntFieldUpdateOperationsInput | number | null
    entregado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalleventa?: detalleventaUncheckedUpdateManyWithoutVentasNestedInput
  }

  export type ventasUncheckedUpdateManyWithoutComprobanteInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha_venta?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_metodoPago?: IntFieldUpdateOperationsInput | number
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    metodo_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    referencia_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo_estimado_min?: NullableIntFieldUpdateOperationsInput | number | null
    entregado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ventasCreateManyMetodopagoInput = {
    id_venta?: number
    id_usuario: number
    fecha_venta: Date | string
    total: Decimal | DecimalJsLike | number | string
    id_comprobante: number
    estado?: string | null
    metodo_entrega?: string | null
    direccion_entrega?: string | null
    referencia_entrega?: string | null
    repartidor?: string | null
    telefono_repartidor?: string | null
    tiempo_estimado_min?: number | null
    entregado_en?: Date | string | null
  }

  export type ventasUpdateWithoutMetodopagoInput = {
    fecha_venta?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    metodo_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    referencia_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo_estimado_min?: NullableIntFieldUpdateOperationsInput | number | null
    entregado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalleventa?: detalleventaUpdateManyWithoutVentasNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutVentasNestedInput
    comprobante?: comprobanteUpdateOneRequiredWithoutVentasNestedInput
  }

  export type ventasUncheckedUpdateWithoutMetodopagoInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha_venta?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_comprobante?: IntFieldUpdateOperationsInput | number
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    metodo_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    referencia_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo_estimado_min?: NullableIntFieldUpdateOperationsInput | number | null
    entregado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalleventa?: detalleventaUncheckedUpdateManyWithoutVentasNestedInput
  }

  export type ventasUncheckedUpdateManyWithoutMetodopagoInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha_venta?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_comprobante?: IntFieldUpdateOperationsInput | number
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    metodo_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    referencia_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo_estimado_min?: NullableIntFieldUpdateOperationsInput | number | null
    entregado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type alergenoproductoCreateManyProductosInput = {
    id_alergeno?: number
    nombre: string
  }

  export type detalleventaCreateManyProductosInput = {
    id_detalleVenta?: number
    id_venta: number
    cantidad: number
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type ingredienteproductoCreateManyProductosInput = {
    id_ingrediente?: number
    nombre: string
  }

  export type alergenoproductoUpdateWithoutProductosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type alergenoproductoUncheckedUpdateWithoutProductosInput = {
    id_alergeno?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type alergenoproductoUncheckedUpdateManyWithoutProductosInput = {
    id_alergeno?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type detalleventaUpdateWithoutProductosInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ventas?: ventasUpdateOneRequiredWithoutDetalleventaNestedInput
  }

  export type detalleventaUncheckedUpdateWithoutProductosInput = {
    id_detalleVenta?: IntFieldUpdateOperationsInput | number
    id_venta?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type detalleventaUncheckedUpdateManyWithoutProductosInput = {
    id_detalleVenta?: IntFieldUpdateOperationsInput | number
    id_venta?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ingredienteproductoUpdateWithoutProductosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ingredienteproductoUncheckedUpdateWithoutProductosInput = {
    id_ingrediente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ingredienteproductoUncheckedUpdateManyWithoutProductosInput = {
    id_ingrediente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type accesoqrCreateManyTipoaccesoInput = {
    id_accesoQR?: number
    id_usuario?: number | null
    fecha_acceso: Date | string
  }

  export type accesoqrUpdateWithoutTipoaccesoInput = {
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_acceso?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accesoqrUncheckedUpdateWithoutTipoaccesoInput = {
    id_accesoQR?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_acceso?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accesoqrUncheckedUpdateManyWithoutTipoaccesoInput = {
    id_accesoQR?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_acceso?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ticketsCreateManyUsuariosInput = {
    id_ticket?: number
    nombre_ticket: string
    codigo_ticket?: string | null
    descuento?: Decimal | DecimalJsLike | number | string
    usado?: boolean
  }

  export type ventasCreateManyUsuariosInput = {
    id_venta?: number
    fecha_venta: Date | string
    total: Decimal | DecimalJsLike | number | string
    id_metodoPago: number
    id_comprobante: number
    estado?: string | null
    metodo_entrega?: string | null
    direccion_entrega?: string | null
    referencia_entrega?: string | null
    repartidor?: string | null
    telefono_repartidor?: string | null
    tiempo_estimado_min?: number | null
    entregado_en?: Date | string | null
  }

  export type ia_conversacionesCreateManyUsuariosInput = {
    id_conversacion?: number
    mensaje_usuario: string
    respuesta_ia: string
    intencion: string
    confianza?: Decimal | DecimalJsLike | number | string | null
    resuelta?: boolean
    canal?: string
    fecha?: Date | string
  }

  export type email_eventosCreateManyUsuariosInput = {
    id_evento?: number
    correo: string
    tipo?: string
    token: string
    fecha_envio?: Date | string
    fecha_apertura?: Date | string | null
    fecha_clic?: Date | string | null
  }

  export type reservasCreateManyUsuariosInput = {
    id_reserva?: number
    nombre: string
    correo?: string | null
    telefono?: string | null
    fecha_reserva: Date | string
    personas: number
    salon?: string | null
    estado?: string
    notas?: string | null
    creado_en?: Date | string
  }

  export type ticketsUpdateWithoutUsuariosInput = {
    nombre_ticket?: StringFieldUpdateOperationsInput | string
    codigo_ticket?: NullableStringFieldUpdateOperationsInput | string | null
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ticketsUncheckedUpdateWithoutUsuariosInput = {
    id_ticket?: IntFieldUpdateOperationsInput | number
    nombre_ticket?: StringFieldUpdateOperationsInput | string
    codigo_ticket?: NullableStringFieldUpdateOperationsInput | string | null
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ticketsUncheckedUpdateManyWithoutUsuariosInput = {
    id_ticket?: IntFieldUpdateOperationsInput | number
    nombre_ticket?: StringFieldUpdateOperationsInput | string
    codigo_ticket?: NullableStringFieldUpdateOperationsInput | string | null
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ventasUpdateWithoutUsuariosInput = {
    fecha_venta?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    metodo_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    referencia_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo_estimado_min?: NullableIntFieldUpdateOperationsInput | number | null
    entregado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalleventa?: detalleventaUpdateManyWithoutVentasNestedInput
    metodopago?: metodopagoUpdateOneRequiredWithoutVentasNestedInput
    comprobante?: comprobanteUpdateOneRequiredWithoutVentasNestedInput
  }

  export type ventasUncheckedUpdateWithoutUsuariosInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    fecha_venta?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_metodoPago?: IntFieldUpdateOperationsInput | number
    id_comprobante?: IntFieldUpdateOperationsInput | number
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    metodo_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    referencia_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo_estimado_min?: NullableIntFieldUpdateOperationsInput | number | null
    entregado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalleventa?: detalleventaUncheckedUpdateManyWithoutVentasNestedInput
  }

  export type ventasUncheckedUpdateManyWithoutUsuariosInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    fecha_venta?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_metodoPago?: IntFieldUpdateOperationsInput | number
    id_comprobante?: IntFieldUpdateOperationsInput | number
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    metodo_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    referencia_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_repartidor?: NullableStringFieldUpdateOperationsInput | string | null
    tiempo_estimado_min?: NullableIntFieldUpdateOperationsInput | number | null
    entregado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ia_conversacionesUpdateWithoutUsuariosInput = {
    mensaje_usuario?: StringFieldUpdateOperationsInput | string
    respuesta_ia?: StringFieldUpdateOperationsInput | string
    intencion?: StringFieldUpdateOperationsInput | string
    confianza?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resuelta?: BoolFieldUpdateOperationsInput | boolean
    canal?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ia_conversacionesUncheckedUpdateWithoutUsuariosInput = {
    id_conversacion?: IntFieldUpdateOperationsInput | number
    mensaje_usuario?: StringFieldUpdateOperationsInput | string
    respuesta_ia?: StringFieldUpdateOperationsInput | string
    intencion?: StringFieldUpdateOperationsInput | string
    confianza?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resuelta?: BoolFieldUpdateOperationsInput | boolean
    canal?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ia_conversacionesUncheckedUpdateManyWithoutUsuariosInput = {
    id_conversacion?: IntFieldUpdateOperationsInput | number
    mensaje_usuario?: StringFieldUpdateOperationsInput | string
    respuesta_ia?: StringFieldUpdateOperationsInput | string
    intencion?: StringFieldUpdateOperationsInput | string
    confianza?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resuelta?: BoolFieldUpdateOperationsInput | boolean
    canal?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type email_eventosUpdateWithoutUsuariosInput = {
    correo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    fecha_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_apertura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_clic?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type email_eventosUncheckedUpdateWithoutUsuariosInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    correo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    fecha_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_apertura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_clic?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type email_eventosUncheckedUpdateManyWithoutUsuariosInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    correo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    fecha_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_apertura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_clic?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reservasUpdateWithoutUsuariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    personas?: IntFieldUpdateOperationsInput | number
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservasUncheckedUpdateWithoutUsuariosInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    personas?: IntFieldUpdateOperationsInput | number
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservasUncheckedUpdateManyWithoutUsuariosInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    personas?: IntFieldUpdateOperationsInput | number
    salon?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detalleventaCreateManyVentasInput = {
    id_detalleVenta?: number
    id_producto: number
    cantidad: number
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type detalleventaUpdateWithoutVentasInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productos?: productosUpdateOneRequiredWithoutDetalleventaNestedInput
  }

  export type detalleventaUncheckedUpdateWithoutVentasInput = {
    id_detalleVenta?: IntFieldUpdateOperationsInput | number
    id_producto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type detalleventaUncheckedUpdateManyWithoutVentasInput = {
    id_detalleVenta?: IntFieldUpdateOperationsInput | number
    id_producto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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