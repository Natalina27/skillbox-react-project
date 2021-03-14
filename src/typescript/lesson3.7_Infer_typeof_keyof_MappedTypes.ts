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
    "compare_timeout": false,
    "compare_same_ref": false
};

bigObject.compare_same_ref = true;

type TMyBigObject = typeof bigObject;

const typedBigObject: Readonly<TMyBigObject> = bigObject;

//typedBigObject.compare_same_ref = false; - read only!

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
    compare_same_ref: true
};
*/

type MyPartial<T> = {
    [N in keyof T] ?: T[N];
}

type MyPick<T, K extends keyof T> = {
    [N in K] ?: T[N];
}

type picked = MyPick<TMyBigObject, 'commit'| 'commits'>;

type MyReadonlyDeep<T> = {
    readonly [N in keyof T]: T[N] extends object ? MyReadonlyDeep<T[N]> : T[N];
}

const typedBigObjectDeep: MyReadonlyDeep<TMyBigObject> = bigObject;
//typedBigObjectDeep.compare_same_ref = false;
//typedBigObjectDeep.commit.id = "123";

type TSomeType = MyReadonlyDeep<TMyBigObject>;

//type inference

type RemoveReadonly<T> = T extends MyReadonlyDeep<infer E> ? E : T;

type TTest = RemoveReadonly<TSomeType>;

function greaterThanZero(a: number, b: string){
    return a > 0;
}

type FnReturnType<T> = T extends ((...args: any[]) => infer R) ? R : never;
type FnParameters<T> = T extends ((...args: infer R) => infer R) ? R : never;

type  TReturnType = FnReturnType<typeof greaterThanZero>;
type  TArgsType = FnParameters<typeof greaterThanZero>;
