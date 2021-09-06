let censusData = document.getElementById('censusData');

function getCensusData() {
    let Http = new XMLHttpRequest;
    let url = 'https://api.census.gov/data/timeseries/eits/mwts?get=cell_value,data_type_code,time_slot_id,category_code,seasonally_adj&time=2020-12';
    Http.open("GET", url);
    Http.send()
    Http.onreadystatechange = function() {
        if(this.readyState==4 && this.status==200) {
            censusData.textContent = JSON.parse(Http.response);
        }
    }
}

window.onload = getCensusData;
