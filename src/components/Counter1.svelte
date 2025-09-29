<script>
  let count = 0;

  function increment() {
    count++;
  }
</script>

<button on:click={increment}>Click me</button>
<p>Count: {count}</p>
