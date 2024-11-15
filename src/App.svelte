<script lang="ts">
import HistoricList from "./lib/HistoricList/HistoricList.svelte";
  import ReleaseForm from "./lib/ReleaseForm/ReleaseForm.svelte";

</script>

<main>
  <div class="container bg-light">
    <div class="row bg-dark g-3 p-3">
      <div class="col-3">
          <HistoricList/>
      </div>
      <div class="col-9">
          <ReleaseForm/>
      </div>
    </div>
  </div>
</main>


