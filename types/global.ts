declare global {
  type Nullable<T> = T | null;
  type Possible<T> = T | undefined;
  type Nullish<T> = Nullable<T> | Possible<T>;
}
