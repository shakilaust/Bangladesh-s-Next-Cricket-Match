$(function(){

   nextMatch = function() {
        var bangladeshMatches = [
            {
                'startDate': "June 2, 2019 09:30:00",
                'against': "South Africa",
                "venue": "The Oval"
            },
            {
                'startDate': "June 5, 2019 12:30:00",
                'against': "New Zealand",
                "venue": "The Oval"
            },
            {
                'startDate': "June 8, 2019 09:30:00",
                'against': "England",
                "venue": "Sophia Gardens"
            },
            {
                'startDate': "June 11, 2019 09:30:00",
                'against': "Srilanka",
                "venue": "Bristol County Ground"
            },
            {
                'startDate': "June 17, 2019 09:30:00",
                'against': "West Indies",
                "venue": "County Ground, Taunton"
            },
            {
                'startDate': "June 20, 2019 09:30:00",
                'against': "Australia",
                "venue": "Trent Bridge"
            },
            {
                'startDate': "June 24, 2019 09:30:00",
                'against': "Afganisthan",
                "venue": "Rose Bowl Cricket Ground"
            },
            {
                'startDate': "July 2, 2019 09:30:00",
                'against': "India",
                "venue": "Edgbaston"
            },
            {
                'startDate': "July 5, 2019 09:30:00",
                'against': "Pakisthan",
                "venue": "Lord's"
            },
           
        ];
        let result = null;
        let date = new Date();
        let newDate = new Date(date.getTime() + date.getTimezoneOffset()*60*1000);
        let now = newDate.getTime()
    

        for( let i in bangladeshMatches ) {
            let matchTime = new Date(bangladeshMatches[i]['startDate']).getTime();
            let diff = matchTime - now;
            if( diff > 0 ) {
                result = {
                    'days': Math.floor( diff / (1000 * 60 * 60 * 24)),
                    'hours': Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    'mins':  Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                    'secs':  Math.floor((diff % (1000 * 60)) / 1000),
                    'aganist': bangladeshMatches[i]['against'],
                    'venue': bangladeshMatches[i]['venue']
                };
                break;
            }
        }
        return result;
   };
   formatDigit = function(d) {
        return (d < 10 ? '0' : '') + d;
    },
    setDateAndTime = function () {
        results = nextMatch();
        if(results !== null) {
        document.getElementById("timer-days").innerHTML = results['days'] +
        "<span class='label'>DAY(S)</span>";
    
        document.getElementById("timer-hours").innerHTML = ("0"+results['hours']).slice(-2) +
        "<span >HR(S)</span>";
    
        document.getElementById("timer-mins").innerHTML = ("0"+results['mins']).slice(-2) +
        "<span>MIN(S)</span>";
    
        document.getElementById("timer-secs").innerHTML = ("0"+results['secs']).slice(-2) +
        "<span>SEC(S)</span>";

        document.getElementById("against").innerHTML = "Aganist: " + results['aganist'];
        document.getElementById("venue").innerHTML = "Venue: " + results['venue'];
        setTimeout(setDateAndTime, 1000);
        } else {
            document.getElementById("title").innerHTML = "Hope Bangladesh qualify for Semifinal, otherwise see you 2023";
        }
    };
    setDateAndTime();
});