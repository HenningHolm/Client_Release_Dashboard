// import { writable } from "svelte/store";
// import type { ReleaseContainer } from "../types/types";
// import { getReleases } from "../api/apiService";

// function createReleaseStore(){
//     const { subscribe, set, update } = writable({
//         releases: [] as ReleaseContainer[]});

//     const selected = writable<ReleaseContainer | undefined>(undefined);
    
//      async function fetchReleases(){
//         const releases = await getReleases();
//         set({ releases: releases });
//      }
    
//      function selectRelease(releaseName: string){
//         update((state) => {
//             selected.set(state.releases.find((release) => release.containerName === releaseName));
//             return state;
//         });
//      }

//     return {
//         subscribe,
//         fetchReleases,
//         selectRelease,
//         selected
//     };
// }

import type { ReleaseContainer } from "../types/types";
import { getReleases } from "../api/apiService";

function createReleaseHandler() {
    let releases = $state<ReleaseContainer[]>([]);  // Definerer releases som et signal med en tom liste
    let selected = $state<ReleaseContainer | undefined>(undefined);  // Definerer selected som et signal

    async function fetchReleases() {
        const fetchedReleases = await getReleases();
        releases = fetchedReleases; 
    }

    function selectRelease(releaseName: string) {
        selected = releases.find((release) => release.containerName === releaseName); 
    }

    async function createRelease(versionName: string) {
        createRelease(versionName);
        fetchReleases();
        selectRelease(versionName);
    }

    return {
        get releases() { return releases; },
        get selected() { return selected; },
        fetchReleases,
        selectRelease
    };
}

export const releaseHandler = createReleaseHandler();
