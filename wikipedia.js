const wiki = require('wikipedia');

(async () => {
	try {
		// const page = await wiki.page('spicer man');
		// const summary = (await page.summary()).extract;
		// console.log(summary);
		//Response of type @wikiSummary - contains the intro and the main image
        const searchResults = await wiki.search('Spider-Man');
		console.log(searchResults);
	} catch (error) {
		console.log(error);
		//=> Typeof wikiError
	}
})();

// async function searchwiki(searchTerm) {
//     try {
//         const page = await wiki.page(searchTerm);
//         const summary = await page.summary();
//         return summary;
//     } catch (error) {
//         console.error(error);
//         return 'An error occurred while fetching the Wikipedia summary.';
//     }
// }

