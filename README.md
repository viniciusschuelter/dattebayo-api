# Dattebayo API

###### This project was generated with [Node](https://github.com/nodejs/node)


<strong>Documentation</strong>
<p>
Welcome to the Dattebayo API documentation! This documentation provides a
comprehensive guide to accessing data from the Naruto universe via our API.
The base URL for the API is <code>https://dattebayo-api.onrender.com</code>.
</p>
<ol>
<li><a href="docs#introduction">Introduction</a></li>
<li>
  <a href="docs#collections">Collections</a>
  <ul>
    <li><a class="capitalize" href="docs#characters">characters</a></li>
    <li><a class="capitalize" href="docs#clans">clans</a></li>
    <li><a class="capitalize" href="docs#villages">villages</a></li>
    <li>
      <a class="capitalize" href="docs#kekkei-genkai">kekkei-genkai</a>
    </li>
    <li>
      <a class="capitalize" href="docs#tailed-beasts">tailed-beasts</a>
    </li>
    <li><a class="capitalize" href="docs#teams">teams</a></li>
    <li><a class="capitalize" href="docs#akatsuki">akatsuki</a></li>
    <li><a class="capitalize" href="docs#kara">kara</a></li>
  </ul>
</li>
<a name="introduction"></a>
<li>
  <a href="docs#endpoints">Endpoints</a>
  <ul>
    <li><a href="docs#get-all-items">Get All Items</a></li>
    <li><a href="docs#get-items-by-ids">Get Items by IDs</a></li>
  </ul>
</li>
</ol>
<h2>Introduction</h2>
<p>
The Dattebayo API is designed to provide developers with access to a rich
array of data from the Naruto anime. With our API, you can retrieve
information about characters, clans, villages, kekkeigenkai, tailed beasts,
teams, Akatsuki, and Kara.
</p>
<a name="collections"></a>
<h2>Collections</h2>
<a name="characters"></a>
<h3 class="capitalize">characters</h3>
<p>Retrieve information about characters from the Naruto universe.</p>
<h4>Endpoints</h4>
<ul>
<li>
  <p>
    <strong>Get All <span class="capitalize">characters</span></strong
    >: <code>GET /characters</code>
  </p>
</li>
<li>
  <p>
    <strong>Get <span class="capitalize">characters</span> by IDs</strong>:
    <code>GET /characters/ids</code>
  </p>
</li>
</ul>
<h3 class="capitalize">clans</h3>
<p>Access details about various clans within the Naruto world.</p>
<h4>Endpoints</h4>
<ul>
<li>
  <p>
    <strong>Get All <span class="capitalize">clans</span></strong
    >: <code>GET /clans</code>
  </p>
</li>
<li>
  <p>
    <strong>Get <span class="capitalize">clans</span> by IDs</strong>:
    <code>GET /clans/ids</code>
  </p>
</li>
</ul>
<h3 class="capitalize">villages</h3>
<p>Fetch information about hidden villages in the Naruto universe.</p>
<h4>Endpoints</h4>
<ul>
<li>
  <p>
    <strong>Get All <span class="capitalize">villages</span></strong
    >: <code>GET /villages</code>
  </p>
</li>
<li>
  <p>
    <strong>Get <span class="capitalize">villages</span> by IDs</strong>:
    <code>GET /villages/ids</code>
  </p>
</li>
</ul>
<h3 class="capitalize">kekkei-genkai</h3>
<p>Discover the secrets of Kekkei-genkai and their unique abilities.</p>
<h4>Endpoints</h4>
<ul>
<li>
  <p>
    <strong>Get All <span class="capitalize">kekkei-genkai</span></strong
    >: <code>GET /kekkei-genkai</code>
  </p>
</li>
<li>
  <p>
    <strong>Get <span class="capitalize">kekkei-genkai</span> by IDs</strong
    >: <code>GET /kekkei-genkai/ids</code>
  </p>
</li>
</ul>
<h3 class="capitalize">tailed-beasts</h3>
<p>Learn about the powerful tailed beasts and their significance.</p>
<h4>Endpoints</h4>
<ul>
<li>
  <p>
    <strong>Get All <span class="capitalize">tailed-beasts</span></strong
    >: <code>GET /tailed-beasts</code>
  </p>
</li>
<li>
  <p>
    <strong>Get <span class="capitalize">tailed-beasts</span> by IDs</strong
    >: <code>GET /tailed-beasts/ids</code>
  </p>
</li>
</ul>
<h3 class="capitalize">teams</h3>
<p>Explore ninja teams and their dynamic compositions.</p>
<h4>Endpoints</h4>
<ul>
<li>
  <p>
    <strong>Get All <span class="capitalize">teams</span></strong
    >: <code>GET /teams</code>
  </p>
</li>
<li>
  <p>
    <strong>Get <span class="capitalize">teams</span> by IDs</strong>:
    <code>GET /teams/ids</code>
  </p>
</li>
</ul>
<h3 class="capitalize">akatsuki</h3>
<p>Uncover the enigmatic organization known as Akatsuki.</p>
<h4>Endpoints</h4>
<ul>
<li>
  <p>
    <strong>Get All <span class="capitalize">akatsuki</span></strong
    >: <code>GET /akatsuki</code>
  </p>
</li>
<li>
  <p>
    <strong>Get <span class="capitalize">akatsuki</span> by IDs</strong>:
    <code>GET /akatsuki/ids</code>
  </p>
</li>
</ul>
<h3 class="capitalize">kara</h3>
<p>Dive into the shadows with information about the organization Kara.</p>
<h4>Endpoints</h4>
<ul>
<li>
  <p>
    <strong>Get All <span class="capitalize">kara</span></strong
    >: <code>GET /kara</code>
  </p>
</li>
<li>
  <p>
    <strong>Get <span class="capitalize">kara</span> by IDs</strong>:
    <code>GET /kara/ids</code>
  </p>
</li>
</ul>
<a name="endpoints"></a>
<h2>Endpoints</h2>
<a name="get-all-items"></a>
<h3>Get All Items</h3>
<p>Retrieve paginated items from a collection.</p>
<ul>
<li>
  <strong>Endpoint</strong>: <code>${baseUrl}/${collectionName}</code>
</li>
<li><strong>Method</strong>: GET</li>
<li>
  <strong>Query Parameters</strong>:
  <ul>
    <li><code>page</code>: Current page number.</li>
    <li><code>limit</code>: Number of items per page.</li>
    <li><code>name</code>: (Optional) Filter items by name.</li>
  </ul>
</li>
</ul>
<a name="get-items-by-ids"></a>
<h3>Get Items by IDs</h3>
<p>Retrieve items by their IDs.</p>
<ul>
<li>
  <strong>Endpoint</strong>:
  <code>${baseUrl}/${collectionName}/${ids}</code>
</li>
<li><strong>Method</strong>: GET</li>
<li>
  <strong>Param</strong>:
  <ul>
    <li><code>ids</code>: Array of item IDs.</li>
  </ul>
</li>
</ul>
<hr />

## Development server

Run `npm run start` to up this API
