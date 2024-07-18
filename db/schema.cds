namespace prova.books;

entity Book  {
    key id: UUID;
    title  : localized String;   
    author : Association to one Authors on author.id = author_id;
    author_id: UUID;
}

entity Authors {
   key  id: UUID;
        name: String;
        surname: String;
        city : String;
        nation: String;
        books: Association to many Book on books.author_id = id;
}

entity Car {key id: UUID; emails: EmailAddresses; }
type EmailAddresses : many {  kind:String;  address:String; }

entity prova as select from Authors as a 
                left join Book as b on a.id = b.author_id
{
    a.name,
    a.surname,
    b.title
};

