async function* fetchPaginatedData(url) {
    let nextUrl = url;
  
    while (nextUrl) {
      const response = await fetch(nextUrl);
      const data = await response.json();
  
      // Assuming the response data includes a 'results' array and a 'next' URL for the next page
      const { results, next } = data;
  
      for (let item of results) {
        yield item;
      }
  
      nextUrl = next;
    }
}

async function processAllData() {
    const url = 'https://example.com/api/data?page=1'; // Starting URL

    for await (let item of fetchPaginatedData(url)) {
        console.log(item); // Process each item
    }
}

processAllData();
  