<script lang="ts">
    import { onMount } from "svelte";
    import { releaseHandler } from "../../stores/releaseHandler.svelte";

    let loading = true;
    onMount(async () => {
        await releaseHandler.fetchReleases();
        releaseHandler.selectRelease(releaseHandler.releases[0].containerName);
        loading = false;
    });
</script>


<div class="card p-3 d-flex flex-column justify-content-between">
    <div class="list-group">
        <h5>Releaseversjoner:</h5>
        {#if loading}
            <p>Loading...</p>
        {:else}
            {#each releaseHandler.releases as release, i}
                <button
                    type="button"
                    class="list-group-item list-group-item-action {releaseHandler.selected?.containerName == release.containerName ? 'active' : ''}"
                    on:click={() => releaseHandler.selectRelease(release.containerName)}
                >
                    {release.containerName} {i === 0 ? ' - Gyldig' : '- Utgått'}
                </button>
            {/each}
        {/if}
    </div>
    <button
        type="button"
        class="btn btn-success mt-3 btn-block"
        on:click={()=>console.log("#") }
    >
        Ny release
    </button>
</div>