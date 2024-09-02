## Virtuals
- mongoDB gives a property named _id (stored in db) but we are also able to do .id with is not given by mongo but mongoose
- not going to persist in mongo but calculated during runtime
- in short not going to be storted as attribute but  when called it will be calcuylated during runtime


```
tweetSchema.virtual('CommentWithOwner').get(function(){
    return `${this.content} created by ${this.userEmail}`;
});
```
- actually the property `CommentWithOwner` is not gonna persist in db

## Hooks/Triggers

```
  user.beforeCreate((user)=>{
    
    const hash = bcrypt.hashSync(user.password, SALT);
    user.password=hash;
  });
```
- already used in auth to encrypt password before creating user
- hooks in mongoose is called as `middlewares` used at a time in the life cycle of the document
```
tweetSchema.pre('save',
    function(next){
        console.log('inside hook');
        this.userEmail='new@user';
        next();
    }
)
```

### Indexing in DBMS

- indexing is the process of improving db query.
- indexing uses data structure to improve query like if data is stored in maps than search is possible in O(1).
- `.createIndex({name:-1})`
- we use extra space to save time also known as space time trade of, Index are data structures used for time efficiency.
- unique property attribute is used for creating indexes
- b+ trees is used to create index if unique key is numeric
- 

