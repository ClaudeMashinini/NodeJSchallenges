const url = "https://api.apixu.com/v1/current.json?key=6863702ab6d442279db13037191105&q=Johannesburg"

const search = function(){
    const place = document.getElementById("searchcity").value
    const request = async() => {
        const response = await fetch(url+place)
        const json = await response.json()
        document.getElementById("temperature").innerHTML=json.current.temp_c + "&deg C"
        document.getElementById("condition").innerHTML=json.current.condition.text
        document.getElementById("city").innerHTML=json.location.name+ ", "+json.location.country
    }
    request()
}