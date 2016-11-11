function testHeadlines() {
  var newsItem = new NewsItem();
  newsItem.headline = "Leonard Cohen sniff sniff";
  var element = document.getElementById("app");
  assert.isTrue(element.innerHTML === "<h1>" + newsItem.headline + "</h1>")
}

testHeadlines();
