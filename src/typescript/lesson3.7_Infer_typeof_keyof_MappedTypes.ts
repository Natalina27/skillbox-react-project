//as - type custing - приведение к типу
const mistake = [] as Array<number>;
mistake.push(1);

let bigObject = {
"commit":{
    "id": "ed899a2f4b50b4370feeea94676502b42383c746",
    "short_id": "ed899a2f4b5",
    "title": "Replace sanitize with escape once",
    "author_name": "Example User",
    "author_email": "user@example.com",
    "created_at": "2012-09-20T11:50:22+03:00",
    "web_url": "https://gitlab.example.com/thedude/gitlab-foss/-/commit/ed899a2f4b50b4370feeea94676502b42383c746"
},
"commits":[{
    "id": "6104942438c14ec7bd21c6cd5bd995272b3faff6",
    "short_id": "6104942438c",
    "title": "Sanitize for network graph",
    "author_name": "randx",
    "author_email": "user@example.com",
    "created_at": "2012-09-20T09:06:12+03:00",
    }],
    "diffs":[{
    "old_path": "files/js/application.js"
    }],
    "compair_timeout": false,
    "compair_same_ref": false
};

bigObject.compair_same_ref = true;

type TMyBigObject = typeof bigObject;

const typedBigObject: Readonly<TMyBigObject> = bigObject;

//typedBigObject.compair_same_ref = false; - read only!

typedBigObject.commit.id = '123'; // surfaced read only

type TObjKeys = keyof TMyBigObject;
type TCommitType = TMyBigObject['commit'];

type MyReadOnly<T> = {
    //mapped types - типы которые перебирают другие типы
    readonly [N in keyof T]: T[N]
}
//for(let N of ['asd', 'qwe']){}

/*
const some: MyReadOnly<TMyBigObject> = {
    compair_same_ref: true
};
*/

