<script lang="ts">
  let selectedFile: File | null = null;

  // Funksjon for å håndtere filendring
  function handleFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      selectedFile = target.files[0];
    }
  }

  // Funksjon for opplastning av fil
  async function uploadFile() {
    if (!selectedFile) {
      alert("Vennligst velg en fil før du laster opp!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Filen ble lastet opp!");
      } else {
        alert("Noe gikk galt under opplastningen.");
      }
    } catch (error) {
      console.error("Feil ved opplastning:", error);
      alert("Kunne ikke laste opp filen.");
    }
  }
</script>

<h2 class="accordion-header">
  <button
    class="accordion-button collapsed"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#collapseTwo"
    aria-expanded="false"
    aria-controls="collapseTwo"
  >
  ⬜ Steg 2 - Last opp norsk ekstensjon
  </button>
</h2>
<div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
  <div class="accordion-body">
    
      <label for="formFile" class="form-label fw-bold">Norsk ekstensjon</label>
      <div class="input-group mb-3">
        <input type="file" class="form-control" id="formFile" on:change={handleFileChange}>
        <label class="input-group-text btn btn-dark" for="formFile" on:click={uploadFile}>Last opp</label>
      </div>

    <!-- <div class="mb-3 input-group">
      <input class="form-control" type="file" id="formFile" on:change={handleFileChange} />
      <button class="btn btn-primary mt-3" on:click={uploadFile} disabled={!selectedFile}> Last opp </button>
    </div> -->
  </div>
</div>
