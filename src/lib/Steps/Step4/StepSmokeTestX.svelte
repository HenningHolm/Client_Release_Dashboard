<script lang="ts">
    let releaseId = "2024-01"; // Eksempelverdi for releaseId
    let isHistorical = false; // Denne kan endres hvis du vil implementere historisk funksjonalitet senere
  </script>
  
  <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
          ⬜ Steg 4 - Smoketest
      </button>
  </h2>
  <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      <div class="mb-3">
        <h5>Inputs</h5>
        <div class="p-3 card container">
          <div class="row">
            <div class="mb-3 col-6">
              <label class="text-dark">Branch</label>
              <input type="text" class="form-control" disabled value="MAIN/SNOMEDCT-NO" />
            </div>
            <div class="mb-3 col-6">
              <label class="text-dark">Shortname</label>
              <input type="text" class="form-control" disabled value="SNOMEDCT-NO" />
            </div>
          </div>
          <div class="row">
            <div class="mb-3 col-6">
              <label class="text-dark">Versjon</label>
              <input type="text" class="form-control" disabled value={releaseId} />
            </div>
            <div class="mb-3 col-6">
              <label class="text-dark">Jobbnavn</label>
              <input type="text" class="form-control" />
            </div>
          </div>
        </div>
      </div>
  
      <div class="mb-3">
        <h5>Valgte pakker</h5>
        <div class="form-check bg-dark container p-2 card">
          <div class="row">
            <div class="col-6 mb-2">
              <div class="form-check">
                <input checked class="form-check-input" type="checkbox" />
                <label class="form-check-label text-white">Norske ekstensjon</label>
              </div>
            </div>
            <div class="col-6 mb-2">
              <div class="form-check">
                <input checked class="form-check-input" type="checkbox" />
                <label class="form-check-label text-white">LM - derivat</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6 mb-1">
              <div class="form-check">
                <input checked class="form-check-input" type="checkbox" />
                <label class="form-check-label text-white">INC - derivat</label>
              </div>
            </div>
            <div class="col-6 mb-1">
              <div class="form-check">
                <input checked class="form-check-input" type="checkbox" />
                <label class="form-check-label text-white">FD - derivat</label>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <button class="btn btn-success w-100 mt-2">Kjør release</button>
    </div>
  </div>
  