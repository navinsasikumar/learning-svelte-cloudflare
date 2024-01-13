<script>
  export let data;
</script>

<h1>Baby Names</h1>

<ul>
  {#each data.names as { name }}
		<li><a href="/name/{name}">{name}</a></li>
	{/each}
</ul>
