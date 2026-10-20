const APIurl = "https://api.adzuna.com/v1/api/jobs/za/search/1";
const appID = process.env.ADZUNA_APP_ID;
const appKEY = process.env.ADZUNA_APP_KEY;

// creates a correctly formatted url
const params = new URLSearchParams({
  app_id: appID,
  app_key: appKEY,
  what: "junior java developer",
  results_per_page: 10,
});

const url = `${APIurl}?${params}`;

async function main() {
  const response = await fetch(url);
  if (!response.ok) {
    console.log(response.status);
  } else {
    const data = await response.json();
    for (const job of data.results) {
      console.log(`${job.title} - ${job.company.display_name} \n(${job.location.display_name}) \n${job.redirect_url}`);
    }
  }
}

main();