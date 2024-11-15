<script lang="ts">
    const derivativePackets = ["LM", "INC", "FD"];
</script>

<h2 class="accordion-header">
    <button
      class="accordion-button"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseThree"
      aria-expanded="false"
      aria-controls="collapseThree"
    >
    ⬜ Steg 3 - Generer derivat
    </button>
  </h2>
  <div id="collapseThree" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
    <div class="accordion-body d-flex flex-row gap-3">
        {#each derivativePackets as packet}
      <div class="card p-3 flex-grow-1 d-flex flex-column">
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="card-title mb-0">{packet} - Derivat</h6>
          <span class="status-indicator bg-success rounded-circle" style="width:16px; height:16px" />
        </div>
        <div class="mt-3 d-flex flex-column gap-2">
          <button class="btn btn-dark">Generer</button>
          <button class="btn btn-outline-secondary">Last ned</button>
          <button class="btn btn-outline-secondary">Slett</button>
          <button class="btn btn-outline-secondary">Se detaljer</button>
        </div>
      </div>
      {/each}
    </div>
  </div>