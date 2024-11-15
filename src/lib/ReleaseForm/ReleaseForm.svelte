<script lang="ts">
  import StepCreate from "../Steps/Step1/StepCreate.svelte";
  import StepDerivat from "../Steps/Step3/StepDerivat.svelte";
  import StepRelease from "../Steps/Step5/StepRelease.svelte";
  import StepSmokeTest from "../Steps/Step4/StepSmokeTest.svelte";
  import StepUploadNE from "../Steps/Step2/StepUploadNE.svelte";
  import StepCreateX from "../Steps/Step1/StepCreateX.svelte";
  import StepDerivatX from "../Steps/Step3/StepDerivatX.svelte";
  import StepSmokeTestX from "../Steps/Step4/StepSmokeTestX.svelte";
  import StepReleaseX from "../Steps/Step5/StepReleaseX.svelte";
  import StepUploadNex from "../Steps/Step2/StepUploadNEX.svelte";
</script>

<div class="card p-3">
  <h3>Releaseprosess</h3>
  <!-- <div class="d-grid gap-3">
        <StepCreate/>
        <StepUploadNE/>
        <StepSmokeTest/>
        <StepDerivat/>
        <StepRelease/>
    </div> -->

  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <StepCreateX />
    </div>
    <div class="accordion-item">
      <StepUploadNex />
    </div>
    <div class="accordion-item">
        <StepDerivatX />
    </div>
    <div class="accordion-item">
        <StepSmokeTestX />
    </div>
    <div class="accordion-item">
        <StepReleaseX />
    </div>
  </div>
</div>
