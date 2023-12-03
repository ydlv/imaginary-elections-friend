declare type ID = string;
declare type float = number;
declare type int = number;
declare type Rational = number;
declare type HasID = {id: ID};
declare interface Togglable {
    enabled: boolean;
}