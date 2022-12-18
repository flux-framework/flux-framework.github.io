---
layout: page
title: Releases
permalink: /releases/
---

<input type="text" id="releaseSearch" onkeyup="searchReleases()" placeholder="Search for projects..">

  {% for post in site.posts %}
  <div class="post-preview">
    <h5 class="release-header" data-download="{{ post.url | prepend: site.baseurl }}" style="margin-bottom:4px; margin-top:4px;">
      <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a> (<a href="{{ post.download }}" target="___blank">download</a>)
      <small style='margin-top:3px' class="pull-right">{{ post.date | date: '%B %d, %Y' }}</small>
    </h5>
  <div style="clear:both"></div>
  </div>
{% endfor %}

<script>
document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('.release-header')) return;

	// Don't follow the link
	event.preventDefault();

	// Log the clicked element in the console
  url = event.target.getAttribute("data-download");
  document.location = url

}, false);

function searchReleases() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('releaseSearch');
  filter = input.value.toUpperCase();
  releases = document.getElementsByTagName('h5');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < releases.length; i++) {
    a = releases[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      releases[i].style.display = "";
    } else {
      releases[i].style.display = "none";
    }
  }
}
</script>