const express = require("express");
require("dotenv").config();

const app = express();



const git_data={
  "login": "prprince8980",
  "id": 207808409,
  "node_id": "U_kgDODGLnmQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/207808409?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/prprince8980",
  "html_url": "https://github.com/prprince8980",
  "followers_url": "https://api.github.com/users/prprince8980/followers",
  "following_url": "https://api.github.com/users/prprince8980/following{/other_user}",
  "gists_url": "https://api.github.com/users/prprince8980/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/prprince8980/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/prprince8980/subscriptions",
  "organizations_url": "https://api.github.com/users/prprince8980/orgs",
  "repos_url": "https://api.github.com/users/prprince8980/repos",
  "events_url": "https://api.github.com/users/prprince8980/events{/privacy}",
  "received_events_url": "https://api.github.com/users/prprince8980/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 28,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-04-16T03:33:52Z",
  "updated_at": "2026-07-17T09:09:18Z"
}


app.get("/",(req,res)=>{

    res.send("hellow world");

})

app.get("/twitter",(req,res)=>{

    res.send("my twitter");
})


app.get("/git",(req,res)=>{
    res.json([ git_data])
})




app.get("/login",(req,res)=>{
    res.send("<h1>jhjsdhsj</h1>")
})


app.get("/pr",(req,res)=>{
    res.send("<h2>jhsjdsjd</h2>")
})

app.listen(process.env.PORT,()=>{
    console.log(`run on port ${process.env.PORT}`)
});
