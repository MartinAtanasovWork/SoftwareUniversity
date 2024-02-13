function solution(){
    class Post{
        title;
        content;

        constructor(title,content){
            this.title = title;
            this.content = content;
        }

        toString(){
            let result = "";
            result += `Post: ${this.title}` + "\n";
            result += `Content: ${this.content}`;  
            return result;
        }
    }
    class SocialMediaPost extends Post{
        likes;
        dislikes;

        constructor(title,content,likes,dislikes){
            super(title,content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment){
            this.comments.push(comment);
        }

        toString(){
            let result = "";
            result += super.toString() + "\n";
            result += `Rating: ${this.likes - this.dislikes}`;
            if(this.comments.length > 0){
                result +="\n";
                result += "Comments:" + "\n"
                let a = [];
                for(let el of this.comments){
                    a.push(` * ${el}`);
                }
                result += a.join("\n");
            }
           return result;
        }
    }  

    class BlogPost extends Post{
        views;

        constructor(title,content,views){
            super(title,content);
            this.views = views;
        }

        view(){
            this.views++;
            return this;  
        }

        toString(){
            let result = "";
            result += super.toString() + "\n";
            result += `Views: ${this.views}`;
            return result;
        }
    }

    return{
        Post,SocialMediaPost,BlogPost
    }
}
const classes = solution();
let blod = new classes.BlogPost("az","velik e  toi",1);

blod.view();
blod.view().view();
console.log(blod.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
