class BookLibrary{
        //  arr=[]
    
        books = {
            "randamoozham": { book_name: "randamoozham", price: 470, author: "mt vasudhevan", avl_copies: 100, sold_copies: 100 },
        
            "aadujeevitham": { book_name: "aadujeevitham", price: 500, author: "benyamin", avl_copies: 150, sold_copies: 145 },
            "rainrising": { book_name: "rainrising", price: 500, author: "nirupama", avl_copies: 200, sold_copies: 140 },
            "halfgirlfirend": { book_name: "halfgirlfriend", price: 550, author: "chethan bagath", avl_copies: 150, sold_copies: 140 },
        
        }
    
        findBook(book_name){
            if(book_name in this.books){
                console.log(this.books[book_name]);
            }
            else{
                console.log("book not available");
            }
    
        }
        orderBySold(){
            // this.arr.push(this.books)
            this.arr.sort((bk1,bk2)=>bk1[1].sold_copies-bk2[2].sold_copies).forEach(bk=>console.log(bk))

            // this.books.sort((bk1,bk2)=>bk1.sold_copies-bk2.sold_copies).foreach(bk=>console.log(bk));
            
        }
    
            
    
        
    
    
    
}

var book=new BookLibrary();
book.findBook("aadujeevitham")
book.orderBySold()