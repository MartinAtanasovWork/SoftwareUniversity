class BookClub{
    library;
    books;
    members;

    constructor(library){
        this.library = library;
        this.books = [];
        this.members = [];
    }

    addBook(title,author){
        for(let book of this.books){
            if(book.title == title){
                return `The book "${title}" by ${author} is already in ${this.library} library.`;
            }
        }
        let book = {"title":title,"author":author};
        this.books.push(book);

        return `The book "${title}" by ${author} has been added to ${this.library} library.`
    }

    addMember(memberName){
        for(let member of this.members){
            if(member.memberName == memberName){
                return `Member ${memberName} is already a part of the book club.`
            }
        }

        this.members.push({memberName});
        return `Member ${memberName} has been joined to the book club.`
    }

    assignBookToMember(memberName,bookTitle){
        let memberFound = false;
        let bookFound = false;

        for(let member of this.members){
            if(member.memberName == memberName){
                memberFound = true;
                break;
            }
        }
        if(!memberFound){
            throw Error(`Member ${memberName} not found.`);
        }
        let index = 0;
        for(let book of this.books){            
            if(book.title == bookTitle){
                bookFound = true;
                break;
            }
            index++;
        }
        if(!bookFound){
            throw Error(`Book "${bookTitle}" not found.`);
        }

        let titleBook = this.books[index].title;
        let authorBook = this.books[index].author
        this.books.splice(index,1)
        return `Member ${memberName} has been assigned the book "${titleBook}" by ${authorBook}.`
    }

    generateReadingReport(){
        if(this.members.length == 0){
            return "No members in the book club.";
        }
        if(this.books.length == 0){
            return "No available books in the library.";
        }

        let result = `Available Books in ${this.library} library:` + "\n";
        let booksAv = [];
        for(let book of this.books){
            booksAv.push(`"${book.title}" by ${book.author}`);
        }
        result += booksAv.join("\n");
        
        return result;
    }
}

const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));

console.log(myBookClub.generateReadingReport());
