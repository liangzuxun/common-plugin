;
(function showProv() {
    var prov = document.getElementById('province');
    var citySelect = document.getElementById('city');
    var districtSelect = document.getElementById('district')
    var len = provice.length;
    var proviceIndex, cityIndex;
    for (var i = 0; i < len; i++) {
        var option = document.createElement('option')
        var name = provice[i].name
        option.innerText = name
        option.value = name;
        prov.appendChild(option)
    }
    prov.addEventListener('change', function () {
        console.log(this.selectedIndex)
        proviceIndex = this.selectedIndex - 1;
        var cityList = provice[proviceIndex].city
        var cityLen = cityList.length;
        citySelect.innerHTML = '<option default value="">=请选择城市=</option>'
        districtSelect.innerHTML = '<option default value="">=请选择城区=</option>'
        for (var i = 0; i < cityLen; i++) {
            var cityOpt = document.createElement('option')
            var cityName = cityList[i].name
            cityOpt.innerText = cityName;
            cityOpt.value = cityName
            citySelect.appendChild(cityOpt)
        }
    });
    citySelect.addEventListener('change', function () {
        cityIndex = this.selectedIndex - 1;
        var ds = provice[proviceIndex].city[cityIndex].districtAndCounty
        var len = ds.length;
        districtSelect.innerHTML = '<option default value="">=请选择城区=</option>'
        for (var i = 0; i < len; i++) {
            var option = document.createElement('option')
            var district = ds[i];
            option.innerText = district;
            option.value = district
            districtSelect.appendChild(option)
        }
    })
})()