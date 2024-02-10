const enddate = "Feb 19 2024 10:00 AM";

        const inputs = document.querySelectorAll("input");
        
        function time(){
            const end = new Date(enddate)
            const now = new Date()
            console.log(now);
            const diff = (end - now)/1000;
            
            inputs[0].value =Math.floor(diff / 3600 / 24);
            inputs[1].value =Math.floor((diff / 3600 ) % 24);
            inputs[2].value =Math.floor((diff / 60) % 60);
            inputs[3].value =Math.floor(diff % 60);
        }
        
        time()
        
        setInterval
        (
            () => {
                time()
            },1000
        )