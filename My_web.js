// 6257469e050f3c94268cb51ec86ecae38d65df92fbe8ef26f42be82ee0d18f23 : my token

// USA DOLLAR
fetch("https://dapi.p3p.repl.co/api/?currency=usd")
    .then(function (response){
        return response.json()
    })
    .then(
        function (result){
            //document.querySelector("#result").innerHTML ='1$ : '+ result.Price + ' Toman ';
            doll = result.Price
            document.querySelector("#USD").innerHTML = ((doll*1)/10).toLocaleString();
        }
    )
// CANADA DOLLAR
fetch("https://dapi.p3p.repl.co/api/?currency=cad")
    .then(function (response){
        return response.json()
    })
    .then(
        function (result){
            doll = result.Price
            document.querySelector("#CAD").innerHTML = ((doll*1)/10).toLocaleString();
        }
    )
//Euro
fetch("https://www.megaweb.ir/api/money")
    .then(function (response) {
        return response.json
    })
    .then(
        function (result){
            euro = result[1].price
            document.querySelector("#EURO").innerHTML = ((euro*1)/10).toLocaleString();
        }
    )


fetch("https://api.dnslab.ir/IP/Ping?hostOrIPAddress=google.com")
    .then(function (response){
        return response.json()
    })
    .then(function (result){
        document.querySelector("#ip").innerHTML = "your IP is : " + result.ip;
    })


function ShowEtherPrice(){

    const options = {
        method: 'GET',
        headers: {
            Authorization:"Token af78d063859c982ea4f8b3a56d7aee7f295ff2bc"
        }
    };
    fetch("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR")
        .then(function (response){
            return response.json()
        })
        .then(function (result){


                document.querySelector("#EtherPrice").innerHTML =
                    `
            <table class="table w-25 ml-3 mt-4">
                <thead class="thead-dark w-25">
                <tr>
                    <th scope="col">Currency</th>
                    <th scope="col">ETH</th>
                    <th scope="col">Symbol</th>
                </tr>
                </thead>
                <tbody>
                <tr class="bg-white">
                    <th scope="row">Price (US$)</th>
                    <td id="DOLLARTD">${(result.USD*1).toLocaleString()}</td>
                    <td id="EUROTD" class="d-none">${(result.EUR*1).toLocaleString()}</td>
                    <td><img src="Ether_img.svg" class="small" style=""></td>
                </tr>
                <tr class="bg-white">
                    <th scope="row">Price (EUR€)</th>
                    <td id="DOLLARTD">${(result.EUR*1).toLocaleString()}</td>
                    <td id="EUROTD" class="d-none">${(result.EUR*1).toLocaleString()}</td>
                    <td><img src="Ether_img.svg" class="small" style=""></td>
                </tr>
                </tbody>
            </table>
                
                `
        })
}

function ShowBTCPrice(){
    fetch("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=BTC,USD,EUR")
        .then(function (response){
            return response.json()
        })
        .then(function (result){
            document.querySelector("#BTCPrice").innerHTML =
                `
            <table class="table w-25 ml-3 mt-4">
                <thead class="thead-dark w-25">
                <tr>
                    <th scope="col">Currency</th>
                    <th scope="col">BTC</th>
                    <th scope="col">Symbol</th>
                </tr>
                </thead>
                <tbody>
                <tr class="bg-white">
                    <th scope="row">Price (US$)</th>
                    <td >${(result.USD*1).toLocaleString()}</td>
                    <td><img src="BitCoin_img.svg" class="small" style="margin-left: 0"></td>
                </tr>
                </tbody>
                 <tbody>
                <tr class="bg-white">
                    <th scope="row">Price (EUR€)</th>
                    <td >${(result.EUR*1).toLocaleString()}</td>
                    <td><img src="BitCoin_img.svg" class="small" style="margin-left: 0"></td>
                </tr>
                </tbody>
            </table>
                `
                //'1 BTC : '+ (((result.USD)*doll)/10).toLocaleString() + ' Toman';
        })
}
function ShowTetherPrice(){
    fetch("https://min-api.cryptocompare.com/data/price?fsym=usdt&tsyms=BTC,USD,EUR")
        .then(function (response){
            return response.json()
        })
        .then(function (result){
            document.querySelector("#TetherPrice").innerHTML =
                `
            <table class="table w-25 ml-3 mt-4">
                <thead class="thead-dark w-25">
                <tr>
                    <th scope="col">Currency</th>
                    <th scope="col">USDT</th>
                    <th scope="col">Symbol</th>
                </tr>
                </thead>
                <tbody>
                <tr class="bg-white">
                    <th scope="row">Price (US$)</th>
                    <td >${(result.USD*1).toLocaleString()}</td>
                    <td><img src="Tether_img.svg" class="small"></td>
                </tr>
                <tr class="bg-white">
                    <th scope="row">Price (EUR€)</th>
                    <td >${(result.EUR*1).toLocaleString()}</td>
                    <td><img src="Tether_img.svg" class="small"></td>
                </tr>
                </tbody>
            </table>
                `
            //'1 BTC : '+ (((result.USD)*doll)/10).toLocaleString() + ' Toman';
        })
}

function ContactUs(){
    document.querySelector("#contact").innerHTML =
        `
    <form class="contact-form bg-dark">
    <h5 class="title mb-4">Send Email</h5>

    <input type="text" class="form-control rounded border-white mb-3 form-input" id="name" placeholder="Name" required>
<!--    <input type="text" class="form-control rounded border-white mb-3 form-input" id="message" placeholder="Name" required>-->
    <input type="text" class="form-control rounded border-white mb-3 form-input d-none" id="message1" placeholder="Email" required>

    <div>
        <textarea id="message" class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required></textarea>
    </div>

    <label for="exampleFormControlFile1" style="color: white">file input :</label>

    <input type="file" class="form-control-file" id="exampleFormControlFile1">

    <div class="submit-button-wrapper">
        <input type="submit" value="Send" onclick="SendEmail();form.reset()">
    </div>
</form>
        `

}

/*
function SendEmail(){
    emailjs.send("service_k45j52s","template_07v9n0v",{
        from_name : document.getElementById("name").value,
        //to_name : document.getElementById("name").value ,
        message : document.querySelector("#message").value,
    });
}
*/

function SendEmail(params){
    var tempParams = {
        from_name : document.getElementById("name").value,
        message : document.getElementById("message").value,
        file : document.getElementById("exampleFormControlFile1").value,
        to_name : "to owner of web Page ",
    };
    emailjs.send("service_k45j52s","template_07v9n0v",tempParams)
        .then(function (res){
            console.log("success",res.status);
        })
}

setInterval(() => {
    const date = new Date().toLocaleTimeString();
    document.querySelector("#span").innerHTML = date;
},1000)

function HomeRedirect(){
    window.location.reload();
}











