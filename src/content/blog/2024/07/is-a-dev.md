---
title: "Register an is-a.dev subdomain"
description: "A how-to guide on registering your own .is-a.dev subdomain."
date: 2024-07-20
updated: 2025-05-24
heroImage: "https://cdn.hrsn.net/blog/2024/07/20/banner.png"
---

## 1. Creating the JSON file

Firstly, you need to go to the [is-a-dev/register](https://github.com/is-a-dev/register) repository on GitHub.

If you don't have a GitHub account, you can create one by clicking `Sign Up`.

Navigate to the [`domains/`](https://github.com/is-a-dev/register/tree/main/domains) folder and then from there click the `Add file` button and selecting the `Create new file option`.

If it says you need to fork the repository, click the fork repository button and continue with the next steps on your forked repository.

![image](https://cdn.hrsn.net/blog/2024/07/20/Ll3qnqmY.png)

Next, add the file name near the top where it says `Name your file...`. Name your file the name of the subdomain you want, in my case I want `william.is-a.dev`, so I will name the file `william.json`.

Here are the naming requirements:

- It must be more than 2 characters long but less than 64 characters
- It cannot contain underscores, only dashes are permitted
- You can only use standard English characters

![image](https://cdn.hrsn.net/blog/2024/07/20/0GgRMCHy.png)

After naming your file you need to put the JSON content into it, here is an example JSON structure:

```json
{
    "owner": {
        "username": "your-github-username"
    },
    "records": {
        "RECORDTYPE": "RECORDCONTENT"
    }
}
```

- Replace `your-github-username` with your GitHub username.
- For `RECORDTYPE` set it to what you require for your use. You can see the records is-a.dev supports [here](https://docs.is-a.dev/faq/#which-dns-record-types-are-supported). If your website is using GitHub Pages, set this to `CNAME`.
- For `RECORDCONTENT` set this to the value of the record you need, for GitHub Pages this would be `your-github-username.github.io`. (`A`, `AAAA` and `MX` records **must** be an array `[]`.)

**MAKE SURE YOU MODIFY `RECORDTYPE` AND `RECORDCONTENT` TO MATCH THE DNS RECORD YOU REQUIRE.**

Finally, click `Commit changes...` and then `Propose changes`.

## 2. Creating your pull request

Now you should be greeted with a screen which looks like this:

![image](https://cdn.hrsn.net/blog/2024/07/20/EXLugHC9.png)

All you need to do here is fill out the requirements and place an `x` between the `[ ]` (so it looks like `[x]`) for each requirement you meet. Please make sure you meet all the requirements before creating the pull request.

Once you have filled out the requirements you can then click the `Create pull request` button and you're done!

## 3. Waiting...

Since you have created your pull request, you will need to wait for a maintainer to merge it before you domain name becomes active. Make sure to keep an eye on your pull request incase one of the maintainers requests changes.

**_Your pull request will normally be merged with-in 24-48 hours, however in some cases it may take longer. Please be patient as the maintainers are very busy._**

Once your pull request is merged you should be good to go! [Open an issue](https://github.com/is-a-dev/register/issues/new/choose) if you run into any trouble.

Congratulations you have successfully setup your free is-a.dev subdomain!

_Make sure to join the is-a.dev [Discord server](https://discord.gg/is-a-dev-830872854677422150) for announcements regarding the service._
