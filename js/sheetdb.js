fetch('https://sheetdb.io/api/v1/3ylv62a5bookw')
    .then((response) => response.json())
    .then((data) => {
        const resultsDiv = document.getElementById('reviews');
        var innerHtml = '';
        data.forEach(item => {
            innerHtml += '<div class="news-info"><span style="font-size: 16px; font-weight: 600;">' + item.review + '</span><p>-' + item.fName + ' (' + item.date + ')</p></div><hr>'
        });
        resultsDiv.innerHTML = innerHtml;
    })
    .catch((error) => console.error('Error:', error));