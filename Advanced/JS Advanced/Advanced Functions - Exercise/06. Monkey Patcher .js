function solution(command){
    if(command == "upvote"){
        this.upvotes++;
    }
    if(command == "downvote"){
        this.downvotes++;
    }
    if(command == "score"){
        return score.call(this);
    }

    function score(){
        let difference = this.upvotes - this.downvotes;

        let rating = "";

        if(this.upvotes / (this.upvotes + this.downvotes) > 66 / 100){
            rating = "hot";
        }

        if(difference >= 0 && (this.upvotes + this.downvotes) > 100 && this.upvotes / (this.upvotes + this.downvotes) < 66 / 100){
            rating = "controversial";
        }
 
        if(difference < 0){
            rating = "unpopular";
        }

        if(this.upvotes + this.downvotes < 10){
            rating = "new";
        }

        let report;
        
        if(this.upvotes + this.downvotes > 50){
            let infation = Math.ceil(Math.max(this.upvotes,this.downvotes) * 0.25);
            let inflatedUp = this.upvotes + infation;
            let inflatedDown = this.downvotes + infation;

            report = [inflatedUp,inflatedDown,difference,rating];
        }else{
            report = [this.upvotes,this.downvotes,difference,rating];
            console.log(report);
        }
        return report;
    }
}
const post = {
    id: '2',
    author: 'gosho',
    content: 'whats up?',
    upvotes: 120,
    downvotes: 30
};;
let answer = solution.call(post, 'score');
console.log(answer);