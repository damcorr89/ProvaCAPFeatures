using { prova.books as db } from '../db/schema';

service MyService {
    function sum (x:Integer, y:Integer) returns Integer;
    function lolla() returns String;

    aspect MassiveBook {
        id: Book:id;
        title: Book:title;
        author_id: Book:author_id
    }

    entity  retMassiveBooks { 
        key id: UUID;
        books: Composition of  many MassiveBook;
        message: String

    };
    
    action insertMassiveBooks (books: array of Book) returns retMassiveBooks;

    entity Book as projection on db.Book {
        *
    };
    @cds.search: { name }
    entity Authors as projection on db.Authors;

    entity Car as projection on db.Car;

    entity Prova as projection on db.prova;

    entity Foo { key ID:Integer } actions {
        function getQualcosa() returns Integer;
        action blabla(x: Integer) returns Integer;
    }
}