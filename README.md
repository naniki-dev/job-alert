# Job Alert Digest
 
A small automation tool that finds new junior and graduate developer jobs in South Africa and sends them to me as a daily email digest, so I stop refreshing job boards by hand.
 
It is built in **Node.js** and designed to run on **AWS serverless** (Lambda, EventBridge, DynamoDB and SES), after first being built and tested locally.
 
> **Status: work in progress.** Milestone 1 is in progress. See the [roadmap](#roadmap) for what works today and what's next.
 
## The problem
 
Job boards repost the same listings daily and bury junior roles among senior ones. I wanted a tool that checks for me, shows only what's relevant, and never shows me the same job twice.
 
## How it works
 
```
Schedule (daily) --> Fetch jobs from Adzuna API --> Filter for junior/graduate roles
        --> Skip jobs already seen --> Email the new ones to me
```
 
| Step | Today (local) | Planned (AWS) |
|---|---|---|
| Run on a schedule | Run manually | EventBridge |
| Run the code | `node index.js` | Lambda |
| Remember seen jobs | Local JSON file | DynamoDB |
| Send the digest | Local email option | SES / SNS |
| Permissions | n/a | IAM (least privilege) |
 
## Tech stack
 
- **Node.js** (v20.6 or higher): built-in `fetch` and `--env-file` support, no extra dependencies yet
- **[Adzuna Jobs API](https://developer.adzuna.com/)**: live job listings data
- **AWS** (planned): Lambda, EventBridge, DynamoDB, SES, IAM
## Getting started
 
### Prerequisites
 
- Node.js v20.6 or higher (`node --version` to check)
- A free Adzuna API app ID and app key from the [Adzuna developer site](https://developer.adzuna.com/)
### Setup
 
1. Clone the repository:
```bash
   git clone https://github.com/naniki-dev/job-alert.git
   cd job-alert
```
 
2. Create a `.env` file in the project root with your credentials (no quotes or spaces around `=`):
```
   ADZUNA_APP_ID=your_app_id
   ADZUNA_APP_KEY=your_app_key
```
   The `.env` file is listed in `.gitignore`, so your keys are never committed.
 
3. Run it:
```bash
   node --env-file=.env index.js
```
 
### Example output
 
Each job is printed with its title, company, location and a link to apply:
 
```
Junior Java Developer Pretoria - Sabenza IT Recruitment (Pretoria, Tshwane)
https://www.adzuna.co.za/details/...
```
 
## Roadmap
 
- [x] **Milestone 1a:** Call the Adzuna API and print a list of jobs
- [ ] **Milestone 1b:** Filter for junior and graduate roles
- [ ] **Milestone 2:** Remember seen jobs so only new listings appear
- [ ] **Milestone 3:** Format and email a digest
- [ ] **Milestone 4:** Deploy to AWS (Lambda, EventBridge, DynamoDB, SES, IAM)
## What I'm learning
 
- Calling and handling responses from a live public REST API
- Keeping secrets out of source control with `.env` and `.gitignore`
- Asynchronous JavaScript (`async`/`await`)
- Serverless architecture on AWS and least-privilege IAM
## Credits
 
Job data provided by [Adzuna](https://www.adzuna.co.za/).
 
## Author
 
**Lethabo Kgasi**: Software Engineering student at WeThinkCode_
[GitHub](https://github.com/naniki-dev) | [LinkedIn](https://linkedin.com/in/lethabo-kgasi)